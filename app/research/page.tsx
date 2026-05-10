import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import ResearchHeroSection from "@/components/research/ResearchHeroSection";
import ResearchThemesSection from "@/components/research/ResearchThemesSection";
import PublicationsSection from "@/components/research/PublicationsSection";
import ModelsSection from "@/components/research/ModelsSection";
import ResearchTeamSection from "@/components/research/ResearchTeamSection";
import ReposSection from "@/components/research/ReposSection";
import DrishtionSpotlightSection from "@/components/research/DrishtionSpotlightSection";
import JoinSection from "@/components/research/JoinSection";

export const metadata: Metadata = {
  title:
    "BanglaLLM Research – Building Language Technology for Bangla | Perspectivity",
  description:
    "Open research building foundation models, benchmarks, and datasets for Bangla. 31+ models, 7+ datasets, and publications at EACL 2026 and AACL 2025.",
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: "BanglaLLM Research",
    description:
      "Open NLP research for Bangla — models, benchmarks, and datasets.",
    url: "https://perspectivity.co/research",
    type: "website",
    images: [
      {
        url: "https://perspectivity.co/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ResearchPage() {
  return (
    <PageWrapper>
      <ResearchHeroSection />
      <ResearchThemesSection />
      <PublicationsSection />
      <ModelsSection />
      <ResearchTeamSection />
      <ReposSection />
      <DrishtionSpotlightSection />
      <JoinSection />
    </PageWrapper>
  );
}
