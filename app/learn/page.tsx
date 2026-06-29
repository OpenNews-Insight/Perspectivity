import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import CollectionIndex from "@/components/CollectionIndex";
import { getByCollection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Learn — Media Bias & Framing Explained | Perspectivity",
  description:
    "Clear, accurate explainers on media bias, news framing, and narrative structure — written to be the answer. Learn how to see past spin and read the news critically.",
  alternates: { canonical: "/learn" },
};

export default function LearnIndex() {
  return (
    <PageWrapper>
      <CollectionIndex collection="learn" pages={getByCollection("learn")} />
    </PageWrapper>
  );
}
