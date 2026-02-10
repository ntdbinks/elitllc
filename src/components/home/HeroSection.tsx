import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Shield, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

// Import des images depuis assets
import heroImage1 from "../../assets/hero-corporate-1.jpg";
import heroImage2 from "../../assets/hero-corporate-2.jpg";
import heroImage3 from "../../assets/hero-corporate-3.jpg";

const heroSlides = [
  {
    title: "Créez votre structure USA en",
    highlight: "10 jours",
    subtitle: "Accompagnement bancaire, juridique et fiscal complet pour entrepreneurs de haut niveau.",
    image: heroImage1,
  },
  {
    title: "Formation LLC complète dans l'État de votre",
    highlight: "choix",
    subtitle: "Wyoming, Delaware ou Nevada - Tous documents fournis et Registered Agent inclus.",
    image: heroImage2,
  },
  {
    title: "Ouverture compte bancaire professionnel aux",
    highlight: "USA",
    subtitle: "Mercury, Wise, ou banque traditionnelle - Cartes de débit et virements internationaux.",
    image: heroImage3,
  },
];

const benefits = [
  { icon: Zap, text: "Livré en 10 jours" },
  { icon: Shield, text: "100% Sécurisé" },
  { icon: Users, text: "Support 24/7" },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative min-h-[500px] md:min-h-[700px] overflow-hidden">
      {/* Background Image with overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 section-container h-full py-12 md:py-24">
        <div className="h-full flex flex-col justify-center max-w-2xl">
          <div className="space-y-4 md:space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="badge-primary text-xs sm:text-sm">Bienvenue chez Elite LLC</span>
            </motion.div>

            {/* Dynamic Title */}
            <motion.div
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                {slide.title} <span className="gold-text">{slide.highlight}</span>
              </h1>
            </motion.div>

            {/* Dynamic Subtitle */}
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-xl"
            >
              {slide.subtitle}
            </motion.p>

            {/* Benefits */}
            <motion.div className="space-y-2 md:space-y-4 pt-2 md:pt-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="flex items-center gap-2 md:gap-3"
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full gold-icon-bg flex items-center justify-center flex-shrink-0">
                    <benefit.icon size={14} className="md:w-4 md:h-4 gold-icon" />
                  </div>
                  <span className="font-medium text-white text-xs md:text-base">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-2 md:gap-4 pt-4 md:pt-6">
              <Button asChild size="sm" className="btn-gold text-xs md:text-base md:h-11 gap-2">
                <a href="/tarifs">
                  Lancer ma structure
                  <ArrowRight size={14} className="md:w-4 md:h-4" />
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="text-xs md:text-base md:h-11 bg-white/10 hover:bg-white/20 text-white border-white/30">
                <a href="/services">Découvrir les services</a>
              </Button>
            </motion.div>

            {/* Carousel Controls at Bottom */}
            <motion.div className="flex items-center gap-2 md:gap-4 pt-6 md:pt-8">
              <button
                onClick={prevSlide}
                className="p-1.5 md:p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
                aria-label="Slide précédent"
              >
                <ChevronLeft size={18} className="md:w-5 md:h-5" />
              </button>

              <div className="flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1.5 md:h-2 rounded-full transition-all ${
                      index === currentSlide ? "w-6 md:w-8 gold-bg" : "w-1.5 md:w-2 bg-white/40"
                    }`}
                    aria-label={`Aller au slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-1.5 md:p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
                aria-label="Slide suivant"
              >
                <ChevronRight size={18} className="md:w-5 md:h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
