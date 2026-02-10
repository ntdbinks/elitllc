export const SITE_CONFIG = {
  name: "Elite LLC",
  description: "Formation de LLC USA avec accompagnement bancaire et juridique premium. Créez votre entreprise américaine en 10 jours avec nos experts français spécialisés.",
  url: "https://elitellc.pro",
  logoUrl: "https://elitellc.pro/logo.svg",
  social: {
    twitter: "@elitellc",
    facebook: "elitellc",
    whatsapp: "+33775847213",
  },
  contact: {
    email: "contact@elitellc.pro",
    phone: "+33 7 75 84 72 13",
    whatsapp: "https://wa.me/33775847213?text=Bonjour,%20je%20souhaite%20lancer%20ma%20LLC.",
  },
  language: "fr",
  country: "FR",
} as const;

export const SEO_CONFIG = {
  openGraph: {
    type: "website",
    locale: "fr_FR",
    site_name: SITE_CONFIG.name,
  },
  twitter: {
    handle: SITE_CONFIG.social.twitter,
    cardType: "summary_large_image",
  },
};
