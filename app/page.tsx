import Header from "@/components/Header";
import PerspectivitySplash from "@/components/PerspectivitySplash";
import HeroSection from "@/components/HeroSection";
import EventPrismSection from "@/components/EventPrismSection";
import LazyBelowFold from "@/components/LazyBelowFold";
import { fetchMarqueeNews } from "@/lib/fetchNews";
import type { SourceInfo } from "@/lib/fetchNews";
import { faqSchema } from "@/lib/structured-data";

// Above-fold (Splash/Header/Hero/EventPrism) renders eagerly for instant paint.
// Everything below the fold is deferred via LazyBelowFold (ssr:false) so the
// initial JS bundle isn't bloated by framer-motion/motionfold in those sections.

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
      <LazyBelowFold
        perspectivityTopics={perspectivityTopics}
        drishtikonTopics={drishtikonTopics}
        perspectivitySources={perspectivitySources}
        drishtikonSources={drishtikonSources}
      />
    </main>
  );
}
