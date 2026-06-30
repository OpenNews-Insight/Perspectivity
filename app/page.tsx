import Header from "@/components/Header";
import PerspectivitySplash from "@/components/PerspectivitySplash";
import InformationCrisisSection from "@/components/InformationCrisisSection";
import EANATSection from "@/components/EANATSection";
import FeaturesSection from "@/components/FeaturesSection";
import PositioningQuadrant from "@/components/PositioningQuadrant";
import ComparisonShowcase from "@/components/ComparisonShowcase";
import TwoFaces from "@/components/TwoFaces";
import TeamSection from "@/components/TeamSection";
import Market from "@/components/Market";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import DemoSection from "@/components/DemoSection";
import FaqAccordion from "@/components/FaqAccordion";
import HeroSection from "@/components/HeroSection";
import EventPrismSection from "@/components/EventPrismSection";
import TrendingTopics from "@/components/TrendingTopics";
import { fetchMarqueeNews } from "@/lib/fetchNews";
import type { SourceInfo } from "@/lib/fetchNews";
import { faqSchema } from "@/lib/structured-data";

// ISR: serve cached HTML instantly, regenerate in the background every 5 min.
// Matches the 5-min news cache in lib/fetchNews. Avoids blocking every request
// on the two external news APIs (was force-dynamic -> ~9s TTFB).
export const revalidate = 300;

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
  const newsData = await fetchMarqueeNews(20);
  const perspectivityTopics = extractTopicsFrom(newsData.perspectivity);
  const drishtikonTopics = extractTopicsFrom(newsData.drishtikon);
  const perspectivitySources = extractUniqueSources(newsData.perspectivity);
  const drishtikonSources = extractUniqueSources(newsData.drishtikon);

  return (
    <main className="overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
      <PerspectivitySplash />
      <Header />
      <HeroSection newsData={newsData} />
      <EventPrismSection />
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
    </main>
  );
}
