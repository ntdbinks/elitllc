import { motion } from "framer-motion";
import { CheckCircle2, Clock, Shield, Users, Zap, Award } from "lucide-react";
import { useLazyLoad } from "@/hooks/useLazyLoad";

const features = [
  {
    icon: Clock,
    title: "Livré en 10 jours",
    description: "Processus optimisé et rapide. De la demande à la réception, nous gérons tout en 10 jours.",
    badge: "RAPIDE",
  },
  {
    icon: Shield,
    title: "100% Sécurisé",
    description: "Tous les documents sont légaux, notariés et enregistrés officiellement auprès des autorités.",
    badge: "CONFORME",
  },
  {
    icon: Users,
    title: "Support 24/7",
    description: "Équipe francophone disponible 24h/24 pour répondre à vos questions et vous accompagner.",
    badge: "RÉACTIF",
  },
  {
    icon: Zap,
    title: "Compte Bancaire Inclus",
    description: "Ouverture de compte professionnel inclusan cartes bancaires et virements internationaux.",
    badge: "BONUS",
  },
  {
    icon: Award,
    title: "Expertise Reconnue",
    description: "Plus de 500 clients satisfaits. Taux de réussite de 99.8% sur toutes nos formations.",
    badge: "PROUVÉ",
  },
  {
    icon: CheckCircle2,
    title: "Accompagnement Complet",
    description: "De la formation LLC à la fiscalité, nous couvrons tous les aspects de votre structure.",
    badge: "A-Z",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const FeaturesSection = () => {
  const { ref, isVisible } = useLazyLoad();

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-28 px-3 md:px-4 lg:px-6 bg-card/50 border-y border-border/20">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-12 lg:mb-16"
        >
          <span className="badge-primary mb-2 md:mb-4 text-xs md:text-sm">POURQUOI NOUS CHOISIR</span>
          <h2 className="mb-3 md:mb-4 lg:mb-6 text-2xl md:text-3xl lg:text-4xl">Tout ce qui vous différencie</h2>
          <p className="text-subtitle text-sm md:text-base">
            Nous offrons bien plus qu'une simple création LLC. C'est un accompagnement complet pour votre succès.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-premium p-4 md:p-6 lg:p-8 group hover:border-primary/50"
            >
              {/* Badge */}
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="icon-circle-primary w-8 h-8 md:w-10 md:h-10">
                  <feature.icon size={16} className="md:w-5 md:h-5" />
                </div>
                <span className="badge-primary text-xs">{feature.badge}</span>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-sm md:text-base lg:text-lg mb-2 md:mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className="h-1 bg-primary mt-3 md:mt-4 lg:mt-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
