import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { pageMeta } from "@/lib/meta";
import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/ContactForm";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Réponse en moins de 2h",
    action: "Démarrer une conversation",
    href: "https://wa.me/33775847213?text=Bonjour,%20je%20souhaite%20lancer%20ma%20LLC.",
    primary: true,
  },
  {
    icon: Mail,
    title: "Email",
    description: "contact@elitellc.pro",
    action: "Envoyer un email",
    href: "mailto:contact@elitellc.pro",
    primary: false,
  },
];

// EmailJS configuration - these would normally come from environment variables
// You'll need to replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

const Contact = () => {
  return (
    <Layout>
      <SEO {...pageMeta.contact} />
      {/* Hero */}
      <section className="relative pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[400px] bg-glow pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-luxury text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 uppercase tracking-tight italic"
          >
            <span className="gold-text">Contact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
          >
            Notre équipe est disponible pour répondre à toutes vos questions
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="premium-card p-6 sm:p-8 md:p-10 text-center"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center ${
                  method.primary ? "bg-whatsapp/20" : "bg-primary/10"
                }`}>
                  <method.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${
                    method.primary ? "text-whatsapp" : "text-primary"
                  }`} />
                </div>
                <h3 className="font-luxury text-xl sm:text-2xl text-foreground uppercase tracking-wide mb-2 italic">
                  {method.title}
                </h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{method.description}</p>
                <Button
                  asChild
                  size="lg"
                  className={method.primary 
                    ? "bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold w-full py-5 sm:py-6 text-sm sm:text-lg"
                    : "gold-border bg-transparent hover:bg-primary/10 text-foreground font-bold w-full py-5 sm:py-6 text-sm sm:text-lg"
                  }
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.action}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <ContactForm
            serviceId={EMAILJS_SERVICE_ID}
            templateId={EMAILJS_TEMPLATE_ID}
            publicKey={EMAILJS_PUBLIC_KEY}
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-luxury text-base sm:text-lg text-foreground uppercase tracking-wide mb-2 italic">
                  Disponibilité
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Du lundi au vendredi, 9h - 20h (heure de Paris). 
                  Réponse garantie sous 48h maximum.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-luxury text-base sm:text-lg text-foreground uppercase tracking-wide mb-2 italic">
                  Localisation
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Nous opérons principalement aux États-Unis avec des représentants 
                  en France et en Europe.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-luxury text-xl sm:text-2xl md:text-3xl text-foreground uppercase tracking-tight mb-6 italic">
              Questions Fréquentes
            </h2>
            <div className="text-left space-y-4 sm:space-y-6">
              <div className="border-b border-border/30 pb-4 sm:pb-6">
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Combien de temps pour créer ma LLC ?</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Votre LLC sera créée en 10 jours ouvrés maximum, avec des rapports de situation 
                  toutes les 48 heures.
                </p>
              </div>
              <div className="border-b border-border/30 pb-4 sm:pb-6">
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Dois-je me déplacer aux USA ?</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Non, tout se fait à distance. Nous gérons 100% des démarches administratives 
                  pour vous.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Quel État choisir pour ma LLC ?</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Wyoming, Delaware ou Nouveau-Mexique selon vos besoins. Notre équipe vous 
                  conseillera sur le meilleur choix.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
