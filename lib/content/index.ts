import type { ContentPage, ContentCollection } from "@/lib/content/types";
import { SOLUTIONS } from "@/lib/content/solutions";
import { ALTERNATIVES } from "@/lib/content/alternatives";
import { LEARN } from "@/lib/content/learn";

export const ALL_CONTENT: ContentPage[] = [...SOLUTIONS, ...ALTERNATIVES, ...LEARN];

export function getBySlug(collection: ContentCollection, slug: string): ContentPage | undefined {
  return ALL_CONTENT.find((p) => p.collection === collection && p.slug === slug);
}

export function getByCollection(collection: ContentCollection): ContentPage[] {
  return ALL_CONTENT.filter((p) => p.collection === collection);
}

export function allContentPaths(): { collection: ContentCollection; slug: string }[] {
  return ALL_CONTENT.map((p) => ({ collection: p.collection, slug: p.slug }));
}
