import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { pageMeta } from "@/lib/meta";
import { 
  Building2, 
  CreditCard, 
  FileText, 
  Globe, 
  Shield, 
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Création LLC USA",
    description: "Formation complète de votre Limited Liability Company dans l'État de votre choix (Wyoming, Delaware, Nouveau-Mexique).",
    features: [
      "Articles of Organization",
      "Operating Agreement personnalisé",
      "Registered Agent inclus 1 an",
      "Certificat de formation",
    ],
  },
  {
    icon: FileText,
    title: "Numéro EIN / ITIN",
    description: "Obtention de votre numéro d'identification fiscale auprès de l'IRS pour votre entreprise.",
    features: [
      "Demande SS-4 complétée",
      "Suivi avec l'IRS",
      "Confirmation officielle",
      "Support ITIN si nécessaire",
    ],
  },
  {
    icon: CreditCard,
    title: "Compte Bancaire Pro",
    description: "Ouverture de compte bancaire professionnel aux USA grâce à notre réseau de partenaires bancaires.",
    features: [
      "Mercury, Relay, ou banque traditionnelle",
      "Carte de débit business",
      "Virements internationaux",
      "Accompagnement complet",
    ],
  },
  {
    icon: Globe,
    title: "Domiciliation Prestige",
    description: "Adresse commerciale premium aux USA pour votre correspondance et image professionnelle.",
    features: [
      "Adresse commerciale US",
      "Réception du courrier",
      "Scan et transfert",
      "Plusieurs options disponibles",
    ],
  },
  {
    icon: Shield,
    title: "Protection des Actifs",
    description: "Structuration optimisée pour la protection de vos actifs personnels et professionnels.",
    features: [
      "Séparation des patrimoines",
      "Anonymat si désiré",
      "Conseil juridique",
      "Optimisation fiscale légale",
    ],
  },
  {
    icon: Users,
    title: "Accompagnement VIP",
    description: "Support personnalisé tout au long du processus avec un conseiller dédié.",
    features: [
      "Conseiller personnel assigné",
      "Rapport toutes les 48h",
      "Disponibilité WhatsApp",
      "Suivi post-création 3 mois",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO {...pageMeta.services} />
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
            Nos{" "}
            <span className="gold-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
          >
            Une suite complète de services pour créer et gérer votre structure américaine 
            en toute sérénité.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="premium-card p-5 sm:p-6 md:p-8 rounded-sm group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-luxury text-lg sm:text-xl md:text-2xl text-foreground uppercase tracking-wide mb-3 sm:mb-4 italic">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-card border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-luxury text-2xl sm:text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-4 sm:mb-6 italic">
              Prêt à lancer votre structure ?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">
              Tous nos services sont inclus dans notre offre unique à 2 975€
            </p>
            <Button
              asChild
              size="lg"
              className="btn-gold font-black px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg uppercase tracking-tight hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-auto"
            >
              <a href="/tarifs">
                Voir les tarifs
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
