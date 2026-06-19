"use client";

import { useState, useEffect, FC } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, TextReveal, ScrollCue } from "@/lib/motionfold";
import NewsMarquee from "@/components/NewsMarquee";
import { LINKS } from "@/lib/links";
import type { MarqueeNewsData } from "@/lib/fetchNews";

interface HeroSectionProps {
  newsData?: MarqueeNewsData;
}

const HeroSection: FC<HeroSectionProps> = ({
  newsData = { perspectivity: [], drishtikon: [] },
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const proofPoints = [
    "Live on iOS + Android",
    "29,000+ followers",
    "Millions of social views",
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-navy bg-radar-rings bg-grain">
      {/* depth gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 90% at 15% 0%, rgba(30,51,80,0.55) 0%, rgba(22,39,63,0) 55%)",
        }}
      />

      {/* Animated radar sweep */}
      <div className="radar-sweep" />

      {/* Floating network nodes around radar center */}
      <div className="network-node" style={{ top: '35%', left: '70%', animationDelay: '0s' }} />
      <div className="network-node" style={{ top: '45%', left: '85%', animationDelay: '1s' }} />
      <div className="network-node" style={{ top: '55%', left: '72%', animationDelay: '2s' }} />
      <div className="network-node" style={{ top: '38%', left: '80%', animationDelay: '0.5s' }} />
      <div className="network-node" style={{ top: '50%', left: '88%', animationDelay: '1.5s' }} />
      <div className="network-node" style={{ top: '58%', left: '76%', animationDelay: '2.5s' }} />

      <div className="relative z-10 container mx-auto w-full flex-1 flex items-center">
        <div className="max-w-[1062px] mx-auto w-full px-5 sm:px-6 pt-32 sm:pt-40 pb-16">
          <div className="max-w-3xl">
            <Reveal>
              <p className="font-hanken text-[12px] sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#6BA4D6] mb-6">
                Narrative Intelligence Platform
              </p>
            </Reveal>

            <TextReveal
              as="h1"
              splitWords
              className="font-serif text-white text-[40px] leading-[1.05] sm:text-[60px] sm:leading-[1.04] md:text-[72px] md:leading-[1.02] tracking-[-0.02em] mb-7"
            >
              News is only the surface. We map the hidden structure of public narratives.
            </TextReveal>

            <Reveal delay={0.3}>
              <p className="font-hanken text-base sm:text-lg md:text-xl text-[#C2CAD1] leading-relaxed max-w-2xl mb-9">
                Who pushes what, what&rsquo;s disputed, what&rsquo;s amplified or
                suppressed, and how it all moves over time — across news, social,
                commentators, politicians, and institutions.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
                <Link
                  href={LINKS.supportEmail}
                  className="group inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-bright text-navy-deep font-hanken font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Request a Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="#platform"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white font-hanken font-medium text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/5"
                >
                  <span>Explore the Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-green opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-green" />
                  </span>
                  <span className="font-hanken text-sm text-white/80 font-medium">
                    Live
                  </span>
                </div>
                {proofPoints.map((p) => (
                  <span
                    key={p}
                    className="font-hanken text-sm text-white/55"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Live-ingest strip — evidence the data layer is real (full relocation to Live Proof in Phase 4) */}
      <div className="relative z-10 border-t border-white/10 bg-navy-deep/40 backdrop-blur-sm py-4">
        <p className="font-hanken text-[11px] tracking-[0.18em] uppercase text-white/40 text-center mb-3">
          Now analyzing across sources
        </p>
        <NewsMarquee newsData={newsData} isVisible={isVisible} />
      </div>

      <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-10">
        <ScrollCue label="SCROLL" color="rgba(255,255,255,0.5)" />
      </div>
    </section>
  );
};

export default HeroSection;
