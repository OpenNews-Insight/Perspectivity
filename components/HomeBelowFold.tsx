"use client";

import { FC } from "react";
import TrendingTopics from "@/components/TrendingTopics";
import InformationCrisisSection from "@/components/InformationCrisisSection";
import EANATSection from "@/components/EANATSection";
import FeaturesSection from "@/components/FeaturesSection";
import PositioningQuadrant from "@/components/PositioningQuadrant";
import ComparisonShowcase from "@/components/ComparisonShowcase";
import TwoFaces from "@/components/TwoFaces";
import DemoSection from "@/components/DemoSection";
import Market from "@/components/Market";
import TeamSection from "@/components/TeamSection";
import FaqAccordion from "@/components/FaqAccordion";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import type { SourceInfo } from "@/lib/fetchNews";

interface Props {
  perspectivityTopics: string[];
  drishtikonTopics: string[];
  perspectivitySources: SourceInfo[];
  drishtikonSources: SourceInfo[];
}

/**
 * Everything below the hero + EventPrism. This whole subtree is loaded as a
 * single deferred client chunk (ssr:false wrapper in LazyBelowFold) so the
 * above-fold paint isn't blocked by framer-motion/motionfold in these sections.
 * Content still reaches Google (it executes client JS); the dedicated SEO pages
 * (/methodology, /solutions, /learn) carry the crawlable keyword weight.
 */
const HomeBelowFold: FC<Props> = ({
  perspectivityTopics,
  drishtikonTopics,
  perspectivitySources,
  drishtikonSources,
}) => (
  <>
    <TrendingTopics
      perspectivity={perspectivityTopics}
      drishtikon={drishtikonTopics}
      perspectivitySources={perspectivitySources}
      drishtikonSources={drishtikonSources}
    />
    <InformationCrisisSection />
    <EANATSection />
    <FeaturesSection />
    <PositioningQuadrant />
    <ComparisonShowcase />
    <TwoFaces />
    <DemoSection />
    <Market />
    <TeamSection />
    <FaqAccordion />
    <FinalCTASection />
    <Footer />
  </>
);

export default HomeBelowFold;
