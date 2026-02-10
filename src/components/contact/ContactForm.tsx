import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { z } from "zod";

// Validation schema
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
    .max(100, { message: "Le nom doit contenir moins de 100 caractères" }),
  email: z
    .string()
    .trim()
    .email({ message: "Adresse email invalide" })
    .max(255, { message: "L'email doit contenir moins de 255 caractères" }),
  phone: z
    .string()
    .trim()
    .max(20, { message: "Numéro de téléphone invalide" })
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Le sujet doit contenir au moins 3 caractères" })
    .max(200, { message: "Le sujet doit contenir moins de 200 caractères" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Le message doit contenir au moins 10 caractères" })
    .max(2000, { message: "Le message doit contenir moins de 2000 caractères" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  serviceId?: string;
  templateId?: string;
  publicKey?: string;
}

export const ContactForm = ({
  serviceId = "",
  templateId = "",
  publicKey = "",
}: ContactFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Veuillez corriger les erreurs dans le formulaire");
      return;
    }

    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey) {
      toast.error("Le service d'envoi d'emails n'est pas configuré");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Non renseigné",
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setIsSuccess(true);
      toast.success("Message envoyé avec succès !");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="premium-card p-8 md:p-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-whatsapp/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-whatsapp" />
        </div>
        <h3 className="font-luxury text-2xl text-foreground uppercase tracking-wide mb-4 italic">
          Message Envoyé !
        </h3>
        <p className="text-muted-foreground">
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="premium-card p-6 md:p-8 lg:p-10"
    >
      <h3 className="font-luxury text-xl md:text-2xl text-foreground uppercase tracking-wide mb-6 italic text-center">
        Envoyez-nous un message
      </h3>

      <div className="grid gap-5 md:gap-6">
        {/* Name & Email Row */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Nom complet <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`bg-muted/50 border-border/50 focus:border-primary ${
                errors.name ? "border-destructive" : ""
              }`}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`bg-muted/50 border-border/50 focus:border-primary ${
                errors.email ? "border-destructive" : ""
              }`}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Phone & Subject Row */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              Téléphone
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+33 6 12 34 56 78"
              className="bg-muted/50 border-border/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium">
              Sujet <span className="text-destructive">*</span>
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Création LLC USA"
              className={`bg-muted/50 border-border/50 focus:border-primary ${
                errors.subject ? "border-destructive" : ""
              }`}
            />
            {errors.subject && (
              <p className="text-xs text-destructive">{errors.subject}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre projet ou posez vos questions..."
            rows={5}
            className={`bg-muted/50 border-border/50 focus:border-primary resize-none ${
              errors.message ? "border-destructive" : ""
            }`}
          />
          {errors.message && (
            <p className="text-xs text-destructive">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full btn-gold font-bold py-6 text-base uppercase tracking-wide hover:scale-[1.02] transition-all duration-300"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Envoyer le message
            </>
          )}
        </Button>
      </div>
    </motion.form>
  );
};
