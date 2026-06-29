import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import NarrativeGraph from "@/components/NarrativeGraph";
import EventPrismSection from "@/components/EventPrismSection";
import { Reveal } from "@/lib/motionfold";
import { LINKS } from "@/lib/links";
import { SITE_URL } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Live Media Bias Tracker | Perspectivity",
  description:
    "A live media bias tracker that maps how every outlet frames today's stories across the political spectrum — in real time, in English and Bangla. See framing shift as it happens.",
  alternates: { canonical: "/live/media-bias-tracker" },
  openGraph: {
    title: "Live Media Bias Tracker | Perspectivity",
    description:
      "Map how every outlet frames today's stories across the political spectrum — in real time. Free to try.",
    url: `${SITE_URL}/live/media-bias-tracker`,
    type: "website",
  },
};

const trackerLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Live Media Bias Tracker",
  description:
    "A live media bias tracker that maps how every outlet frames today's stories across the political spectrum — in real time.",
  author: { "@type": "Organization", name: "Perspectivity" },
  publisher: { "@type": "Organization", name: "Perspectivity" },
};

const faqs = [
  {
    q: "What is a live media bias tracker?",
    a: "A live media bias tracker shows how outlets across the political spectrum are framing the day's stories in real time — not just where each outlet sits on a static chart, but how it actually headlined and framed today's news. Perspectivity updates as coverage develops.",
  },
  {
    q: "How is this different from a static bias chart?",
    a: "Static charts assign each outlet a fixed leaning. A live tracker reads the actual coverage of each story and shows, per outlet, the headline used, what was emphasized, and what was left out — so you see the framing shift as a story develops.",
  },
  {
    q: "Does the tracker cover non-English outlets?",
    a: "Yes. Perspectivity reads Bangla natively alongside English, so framing can be followed across both language audiences — something English-first trackers cannot do.",
  },
];

export default function LiveBiasTrackerPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <PageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trackerLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* HERO */}
      <section className="relative bg-navy-deep overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(110,231,183,0.12) 0%, rgba(22,39,63,0) 60%)" }}
        />
        <div className="relative container mx-auto px-5 sm:px-6 max-w-[1000px] pt-32 sm:pt-40 pb-16 sm:pb-24">
          <nav className="font-hanken text-[12px] text-white/45 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/65">Live Media Bias Tracker</span>
          </nav>
          <Reveal>
            <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-[#6EE7B7] mb-4">
              Live · updated as coverage develops
            </p>
            <h1 className="font-serif text-white text-[34px] sm:text-[52px] leading-[1.06] tracking-[-0.02em] mb-5">
              The Live Media Bias Tracker.
            </h1>
            <p className="font-hanken text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mb-8">
              See how every outlet is framing today&apos;s stories across the political spectrum &mdash; in real time.
              Not a static chart. The actual headlines, emphasis, and omissions, mapped as coverage shifts.
            </p>
            <Link
              href={LINKS.perspectivity}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-navy font-hanken font-semibold text-base px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Analyze Today&apos;s News &mdash; Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* LIVE GRAPH */}
      <section className="bg-white">
        <div className="container mx-auto px-5 sm:px-6 max-w-[760px] py-20 sm:py-28">
          <Reveal className="text-center mb-8">
            <p className="font-hanken text-[11px] font-semibold tracking-[0.2em] uppercase text-secondary-400 mb-3">
              Perspectivity · live read
            </p>
            <h2 className="font-serif text-navy text-[26px] sm:text-[32px] tracking-[-0.01em]">
              Every outlet, mapped on the spectrum of bias.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line p-6 sm:p-10">
              <NarrativeGraph />
            </div>
            <p className="font-hanken text-center text-[13px] text-secondary-400 mt-4 italic">
              Outlets linked to a live event, with aligned-framing and contradiction signals. The scan rings show the engine working.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTERACTIVE FRAMINGS */}
      <EventPrismSection />

      {/* EXPLAINER + FAQ */}
      <section className="bg-white">
        <div className="container mx-auto px-5 sm:px-6 max-w-[760px] py-20 sm:py-28">
          <Reveal className="mb-10">
            <h2 className="font-serif text-navy text-[26px] sm:text-[32px] tracking-[-0.01em] mb-4">
              Why a live tracker beats a static chart
            </h2>
            <p className="font-hanken text-[16px] text-secondary-500 leading-relaxed">
              Outlets don&apos;t frame every story the way their &ldquo;average&rdquo; leaning would suggest. A live tracker
              reads the actual coverage, so you see the framing of <em>this</em> story, today &mdash; including which
              outlets moved together and which stayed conspicuously silent.
            </p>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-line bg-white p-5 sm:p-6">
                <p className="font-serif text-navy text-lg sm:text-xl leading-snug mb-2">{f.q}</p>
                <p className="font-hanken text-secondary-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
