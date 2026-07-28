import Header from "@/components/Header";
import PerspectivitySplash from "@/components/PerspectivitySplash";
import InformationCrisisSection from "@/components/InformationCrisisSection";
import EANATSection from "@/components/EANATSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonShowcase from "@/components/ComparisonShowcase";
import TeamSection from "@/components/TeamSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import DemoSection from "@/components/DemoSection";
import FaqAccordion from "@/components/FaqAccordion";
import HeroSection from "@/components/HeroSection";
import TrendingTopics from "@/components/TrendingTopics";
import AppBetaSection from "@/components/AppBetaSection";
import { fetchMarqueeNews } from "@/lib/fetchNews";
import type { SourceInfo } from "@/lib/fetchNews";

export const dynamic = "force-dynamic";

function extractTopicsFrom(items: Awaited<ReturnType<typeof fetchMarqueeNews>>["perspectivity"]): string[] {
  const freq = new Map<string, number>();
  for (const item of items) {
    for (const cat of item.categories) {
      const normalized = cat.trim();
      if (normalized && normalized !== "Home") {
        freq.set(normalized, (freq.get(normalized) || 0) + 1);
      }
    }
  }
  return Array.from(freq.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([topic]) => topic);
}

function extractUniqueSources(items: Awaited<ReturnType<typeof fetchMarqueeNews>>["perspectivity"]): SourceInfo[] {
  const seen = new Set<string>();
  const result: SourceInfo[] = [];
  for (const item of items) {
    for (const src of item.sources) {
      if (src.name && src.logo && !seen.has(src.name)) {
        seen.add(src.name);
        result.push(src);
      }
    }
  }
  return result;
}

export default async function Home() {
  const newsData = await fetchMarqueeNews(40);
  const perspectivityTopics = extractTopicsFrom(newsData.perspectivity);
  const perspectivitySources = extractUniqueSources(newsData.perspectivity);

  return (
    <main className="overflow-x-clip">
      <PerspectivitySplash />
      <Header />
      <HeroSection newsData={newsData} />
      <TrendingTopics
        perspectivity={perspectivityTopics}
        perspectivitySources={perspectivitySources}
      />
      <InformationCrisisSection />
      <EANATSection />
      <FeaturesSection />
      <ComparisonShowcase />
      <DemoSection />
      {/* After the demo: the product has been shown, so "get it on your phone"
          lands — and it stays clear of the closing CTA further down. */}
      <AppBetaSection />
      <TeamSection />
      <FinalCTASection />
      <FaqAccordion />
      <Footer />
    </main>
  );
}
