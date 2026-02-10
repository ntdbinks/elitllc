import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, CheckCircle2, Zap, Headphones } from "lucide-react";
import { useLazyLoad } from "@/hooks/useLazyLoad";

interface Stat {
  number: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  { number: 500, suffix: "+", label: "Clients satisfaits", icon: <Users size={32} /> },
  { number: 99, suffix: "%", label: "Taux de réussite", icon: <CheckCircle2 size={32} /> },
  { number: 10, suffix: "j", label: "Délai moyen", icon: <Zap size={32} /> },
  { number: 24, suffix: "/7", label: "Support français", icon: <Headphones size={32} /> },
];

const CountUpNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = Math.ceil(value / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
      {count}
      <span className="text-lg sm:text-xl md:text-2xl">{suffix}</span>
    </div>
  );
};

export const StatsSection = () => {
  const { ref, isVisible } = useLazyLoad();

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-28 px-3 md:px-4 lg:px-6 bg-card border-y border-border/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="mb-3 md:mb-4 lg:mb-6 text-2xl md:text-3xl lg:text-4xl">Les chiffres qui parlent</h2>
          <p className="text-subtitle text-sm md:text-base">
            Rejoignez les centaines d'entrepreneurs qui ont déjà créé leur structure USA avec Elite LLC.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 md:p-6 lg:p-8 rounded-lg bg-background border border-border hover:border-primary/50 hover:bg-card transition-all duration-300"
            >
              <div className="flex justify-center mb-2 md:mb-3 lg:mb-4 text-primary">
                <div className="w-8 h-8 md:w-10 md:h-10">
                  {typeof stat.icon === 'object' ? stat.icon : <div>{stat.icon}</div>}
                </div>
              </div>
              <CountUpNumber value={stat.number} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 md:mt-3 lg:mt-4 font-medium text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
