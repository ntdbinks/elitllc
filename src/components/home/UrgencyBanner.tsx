import { motion } from "framer-motion";

export const UrgencyBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="gold-gradient-bg py-3 text-center shadow-lg"
    >
      <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary-foreground">
        Offre Février : -15% pour les 10 premières structures (Places : 10/10)
      </p>
    </motion.div>
  );
};
