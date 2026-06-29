export type ContentCollection = "solutions" | "alternatives" | "learn";

export type ContentSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
};

export type FaqPair = { q: string; a: string };

export type ContentPage = {
  slug: string;
  collection: ContentCollection;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: ContentSection[];
  differentiators?: string[];
  faq?: FaqPair[];
};

export const CONTENT_DIR: Record<ContentCollection, string> = {
  solutions: "/solutions",
  alternatives: "/alternatives",
  learn: "/learn",
};

export function pagePath(p: ContentPage): string {
  return `${CONTENT_DIR[p.collection]}/${p.slug}`;
}
