import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import CollectionIndex from "@/components/CollectionIndex";
import { getByCollection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Alternatives — How Perspectivity Compares | Perspectivity",
  description:
    "Honest comparisons of Perspectivity vs Ground News, AllSides, Graphika, and Blackbird.AI — what each platform is built for and where Perspectivity is different.",
  alternates: { canonical: "/alternatives" },
};

export default function AlternativesIndex() {
  return (
    <PageWrapper>
      <CollectionIndex collection="alternatives" pages={getByCollection("alternatives")} />
    </PageWrapper>
  );
}
