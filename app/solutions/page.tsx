import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import CollectionIndex from "@/components/CollectionIndex";
import { getByCollection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions — Narrative Intelligence Use Cases | Perspectivity",
  description:
    "Election integrity, coordinated-framing detection, foreign-influence tracking, crisis communications, narrative-risk monitoring, and stance tracking — built on Perspectivity's narrative intelligence engine.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsIndex() {
  return (
    <PageWrapper>
      <CollectionIndex collection="solutions" pages={getByCollection("solutions")} />
    </PageWrapper>
  );
}
