import { motion } from "framer-motion";
import { Building2, Users, Shield, FileCheck } from "lucide-react";

const features = [
  {
    number: "01",
    icon: Building2,
    title: "Setup Gouvernemental",
    description:
      "Création complète (EIN, IRS, Domiciliation US Prestige). Nous gérons 100% de la complexité administrative.",
  },
  {
    number: "02",
    icon: Users,
    title: "Réseau d'Insiders",
    description:
      "Accès direct à nos contacts décisionnaires en banque pro. Pas de bots, validation prioritaire garantie.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Protection Juridique",
    description:
      "Structure optimisée pour la protection de vos actifs. Confidentialité et sécurité maximales.",
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Conformité Totale",
    description:
      "Documentation complète et conforme aux exigences américaines et internationales.",
  },
];

export const InfrastructureSection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-luxury text-3xl md:text-5xl lg:text-6xl text-background uppercase tracking-tight italic">
            Infrastructure{" "}
            <span className="text-muted italic">Omniscience</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="font-luxury text-lg md:text-xl text-background uppercase tracking-widest mb-3 italic">
                    <span className="text-muted mr-2">{feature.number}.</span>
                    {feature.title}
                  </h3>
                  <p className="text-background/70 font-light leading-relaxed text-base md:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
