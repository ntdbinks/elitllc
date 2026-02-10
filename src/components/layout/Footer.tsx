import { Mail, MessageCircle, Linkedin, Twitter, CreditCard, Lock, CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  {
    title: "Produits",
    links: [
      { name: "Création LLC", href: "/services" },
      { name: "Compte Bancaire", href: "/services" },
      { name: "Support Fiscal", href: "/services" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { name: "Blog", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Documentation", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Conditions d'utilisation", href: "#" },
      { name: "Politique de confidentialité", href: "#" },
      { name: "Mentions légales", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Mail, href: "mailto:contact@elitellc.pro", label: "Email" },
  { icon: MessageCircle, href: "https://wa.me/33775847213", label: "WhatsApp" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground/2 border-t border-border/50 py-16 md:py-20">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <a href="/" className="inline-flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">E</span>
              </div>
              <div>
                <div className="font-bold text-foreground">Elite LLC</div>
                <div className="text-xs text-muted-foreground">Structures USA</div>
              </div>
            </a>
            
            <p className="text-muted-foreground text-sm leading-relaxed mt-4 max-w-xs">
              Créez votre structure USA en 10 jours. Accompagnement complet de la formation LLC à l'ouverture du compte bancaire.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Elite LLC. Tous droits réservés.
          </p>

          {/* Payment Methods or Trust Indicators */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">Paiements sécurisés:</span>
            <div className="flex gap-2">
              <CreditCard size={18} className="text-primary" />
              <Lock size={18} className="text-primary" />
              <CheckCircle2 size={18} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
