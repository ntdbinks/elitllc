import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Zap, CheckCircle2 } from "lucide-react";
import { useLazyLoad } from "@/hooks/useLazyLoad";

export const ContactCTA = () => {
  const { ref, isVisible } = useLazyLoad();

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-28 px-3 md:px-4 lg:px-6">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative card-premium-featured p-6 md:p-8 lg:p-12 text-center overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 opacity-50" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4 lg:mb-6">
              <Sparkles className="text-accent w-4 h-4 md:w-5 md:h-5" />
              <span className="badge-accent text-xs md:text-sm">PRÊT À COMMENCER?</span>
              <Sparkles className="text-accent w-4 h-4 md:w-5 md:h-5" />
            </div>

            <h2 className="mb-3 md:mb-4 lg:mb-6 text-2xl md:text-3xl lg:text-4xl font-bold">
              Lancez votre empire légal en 10 jours
            </h2>

            <p className="text-subtitle max-w-2xl mx-auto mb-6 md:mb-8 lg:mb-10 text-sm md:text-base">
              Rejoignez 500+ entrepreneurs qui ont créé leur structure USA avec Elite LLC. 
              Accompagnement complet, résultats garantis.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:gap-4 justify-center mb-6 md:mb-8 lg:mb-12">
              <Button asChild className="btn-accent gap-2 text-xs md:text-sm lg:text-base">
                <a href="/tarifs">
                  Voir les tarifs
                  <ArrowRight size={16} className="md:w-5 md:h-5" />
                </a>
              </Button>
              <Button asChild className="btn-secondary text-xs md:text-sm lg:text-base">
                <a href="/contact">Consulter gratuitement</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 md:mt-8 lg:mt-12 pt-4 md:pt-6 lg:pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 lg:gap-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 md:w-6 md:h-6 gold-icon fill-[hsl(45_100%_60%)]" />
                <div className="text-left">
                  <div className="font-bold text-foreground text-sm md:text-base">4.9/5</div>
                  <div className="text-xs text-muted-foreground">500+ avis</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-6 md:h-8 bg-border/20" />
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 md:w-6 md:h-6 gold-icon" />
                <div className="text-left">
                  <div className="font-bold text-foreground text-sm md:text-base">10 jours</div>
                  <div className="text-xs text-muted-foreground">Délai moyen</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-6 md:h-8 bg-border/20" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 gold-icon" />
                <div className="text-left">
                  <div className="font-bold text-foreground text-sm md:text-base">99.8%</div>
                  <div className="text-xs text-muted-foreground">Taux réussite</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
