import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { pageMeta } from "@/lib/meta";
import { Check, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const cryptoAddresses = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    address: "bc1qmpxjptecep8ekahcp56635urn7esf62cfnks2y",
    colorClass: "text-bitcoin",
  },
  {
    name: "Solana",
    symbol: "SOL",
    address: "81y7gRLKqj8XjCwR9eNxqe5HLnzwY1mePAVtuuFRJUic",
    colorClass: "text-solana",
  },
  {
    name: "USDT",
    symbol: "ERC-20",
    address: "0xE5d7e7b6cF5C604Dead0C725B486393887EceEa3",
    colorClass: "text-usdt",
  },
];

const included = [
  "Création LLC complète",
  "Numéro EIN / ITIN",
  "Operating Agreement",
  "Registered Agent 1 an",
  "Domiciliation US Prestige",
  "Accompagnement bancaire",
  "Conseiller dédié",
  "Rapports toutes les 48h",
  "Support WhatsApp",
  "Suivi post-création 3 mois",
];

const Tarifs = () => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const copyToClipboard = (address: string, symbol: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    toast.success(`Adresse ${symbol} copiée !`);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <Layout>
      <SEO {...pageMeta.tarifs} />
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
            <span className="gold-text">Tarifs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
          >
            Un tarif unique tout inclus pour lancer votre empire américain
          </motion.p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-6 sm:py-8 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="premium-card p-5 sm:p-8 md:p-16 text-center border border-border/50"
          >
            <h2 className="font-luxury text-xl sm:text-2xl md:text-3xl gold-text uppercase tracking-widest mb-6 sm:mb-8 italic">
              Accès Infrastructure
            </h2>

            <div className="mb-6 sm:mb-8">
              <span className="text-4xl sm:text-6xl md:text-8xl font-black text-foreground tracking-tighter">
                2 975 €
              </span>
            </div>

            {/* Included Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-left mb-8 sm:mb-12 max-w-xl mx-auto">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* Stripe Button */}
            <Button
              asChild
              size="lg"
              className="w-full gold-gradient-bg text-primary-foreground font-black py-5 sm:py-7 text-lg sm:text-xl md:text-2xl uppercase tracking-tight shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <a
                href="https://buy.stripe.com/cNi7sD1MM9YM8r10Q13ZK00"
                target="_blank"
                rel="noopener noreferrer"
              >
                Régler par Carte
              </a>
            </Button>

            {/* Crypto Divider */}
            <div className="flex items-center justify-center gap-4 my-10">
              <div className="h-px bg-border flex-grow" />
              <span className="text-muted-foreground text-xs font-black uppercase tracking-widest">
                Paiement Crypto
              </span>
              <div className="h-px bg-border flex-grow" />
            </div>

            {/* Crypto Addresses */}
            <div className="space-y-4">
              {cryptoAddresses.map((crypto) => (
                <div
                  key={crypto.symbol}
                  className="bg-muted/50 p-4 border border-border/50 flex justify-between items-center rounded-sm"
                >
                  <div className="text-left overflow-hidden">
                    <p className={`text-[9px] font-black mb-1 uppercase tracking-widest ${crypto.colorClass}`}>
                      {crypto.name} ({crypto.symbol})
                    </p>
                    <code className="text-[10px] md:text-xs text-muted-foreground break-all block">
                      {crypto.address}
                    </code>
                  </div>
                  <button
                    onClick={() => copyToClipboard(crypto.address, crypto.symbol)}
                    className="text-muted-foreground hover:text-primary p-2 transition-colors flex-shrink-0 ml-4"
                    aria-label={`Copier l'adresse ${crypto.symbol}`}
                  >
                    {copiedAddress === crypto.address ? (
                      <CheckCircle className="w-5 h-5 text-whatsapp" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-xs mt-8">
              Après paiement crypto, envoyez la preuve de transaction à{" "}
              <a href="mailto:contact@elitellc.pro" className="text-primary hover:underline">
                contact@elitellc.pro
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-luxury text-xl sm:text-2xl md:text-3xl text-foreground uppercase tracking-tight mb-3 sm:mb-4 italic">
              Garantie Satisfaction
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
              Si nous ne parvenons pas à créer votre LLC dans les 10 jours ouvrés, 
              nous vous remboursons intégralement. Sans conditions.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Tarifs;
