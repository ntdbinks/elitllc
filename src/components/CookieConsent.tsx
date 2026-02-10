import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "elitellc_cookie_consent";

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsented) {
      // Small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-lg shadow-2xl backdrop-blur-xl p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Cookie className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">
                  🍪 Nous utilisons des cookies
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Ce site utilise des cookies pour améliorer votre expérience de navigation, 
                  analyser le trafic et personnaliser le contenu. En continuant à naviguer, 
                  vous acceptez notre utilisation des cookies.
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <Button
                  onClick={handleDecline}
                  variant="ghost"
                  size="sm"
                  className="flex-1 sm:flex-none text-muted-foreground hover:text-foreground text-xs sm:text-sm"
                >
                  Refuser
                </Button>
                <Button
                  onClick={handleAccept}
                  size="sm"
                  className="flex-1 sm:flex-none gold-gradient-bg text-primary-foreground font-semibold text-xs sm:text-sm"
                >
                  Accepter
                </Button>
              </div>

              {/* Close Button (Mobile) */}
              <button
                onClick={handleDecline}
                className="absolute top-3 right-3 sm:hidden text-muted-foreground hover:text-foreground"
                aria-label="Fermer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
