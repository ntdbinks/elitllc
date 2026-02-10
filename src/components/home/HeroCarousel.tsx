import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import heroCorporate1 from "@/assets/hero-corporate-1.jpg";
import heroCorporate2 from "@/assets/hero-corporate-2.jpg";
import heroCorporate3 from "@/assets/hero-corporate-3.jpg";

const slides = [
  {
    image: heroCorporate1,
    title: "VOTRE EMPIRE",
    highlight: "LÉGAL & BANCAIRE.",
    description:
      "Livré en 10 Jours. Rapport de situation toutes les 48 Heures. Accompagnement A à Z pour entrepreneurs de haut niveau.",
  },
  {
    image: heroCorporate2,
    title: "PARTENAIRES",
    highlight: "D'EXCELLENCE.",
    description:
      "Accès direct à notre réseau d'insiders bancaires et juridiques. Validation prioritaire garantie pour votre LLC.",
  },
  {
    image: heroCorporate3,
    title: "CRÉATION",
    highlight: "100% CLÉS EN MAIN.",
    description:
      "EIN, IRS, domiciliation prestige, compte bancaire pro. Nous gérons toute la complexité administrative.",
  },
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative h-[85vh] min-h-[600px] md:h-[90vh] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-luxury text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight uppercase italic">
                  {currentSlide.title}{" "}
                  <br className="hidden sm:block" />
                  <span className="gold-gradient-text underline decoration-1 underline-offset-4 sm:underline-offset-8">
                    {currentSlide.highlight}
                  </span>
                </h1>

                <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl font-light leading-relaxed mb-6 sm:mb-8 md:mb-12 italic border-l-2 border-primary/30 pl-4 sm:pl-6">
                  {currentSlide.description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="gold-gradient-bg text-primary-foreground font-black px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 text-base sm:text-lg md:text-xl uppercase tracking-tight hover:scale-105 transition-all duration-300 shadow-2xl gold-glow w-full sm:w-auto"
                  >
                    <Link to="/tarifs">
                      Lancer ma structure — 2 975€
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="gold-border text-foreground px-6 sm:px-8 py-5 sm:py-6 text-xs sm:text-sm uppercase tracking-widest hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Link to="/services">Découvrir nos services</Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-2 sm:left-4 flex items-center z-20">
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-2 sm:right-4 flex items-center z-20">
        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
          aria-label="Slide suivant"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 sm:w-8 gold-gradient-bg"
                : "w-2 sm:w-2.5 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
