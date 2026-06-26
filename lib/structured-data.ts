import { LINKS } from "@/lib/links";
import { FAQS } from "@/lib/faqs";

export const SITE_URL = "https://perspectivity.co";
const LOGO_URL = `${SITE_URL}/assets/logo.png`;

const ORG_DESCRIPTION =
  "Perspectivity is a narrative intelligence platform that maps how every outlet frames the same story — exposing media bias, ownership, and hidden narrative structure across languages. See the structure beneath the news.";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Perspectivity",
    alternateName: "Drishtikon",
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    description: ORG_DESCRIPTION,
    email: "support@perspectivity.co",
    sameAs: [
      LINKS.youtube,
      LINKS.facebook,
      LINKS.linkedinCompany,
      LINKS.huggingFace,
      LINKS.github,
      LINKS.banglallmGitHub,
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Perspectivity",
    url: SITE_URL,
    inLanguage: ["en", "bn"],
    publisher: { "@type": "Organization", name: "Perspectivity" },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Perspectivity",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description: ORG_DESCRIPTION,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Multi-perspective news analysis",
      "Media bias detection",
      "Narrative framing comparison",
      "Outlet ownership and affiliation mapping",
      "Multilingual coverage (English + Bangla)",
    ],
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function homepageSchemas() {
  return [
    organizationSchema(),
    websiteSchema(),
    softwareApplicationSchema(),
    faqSchema(),
  ];
}

export function jsonLd(obj: object) {
  return JSON.stringify(obj);
}
