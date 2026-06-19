"use client";

import { FC } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/lib/motionfold";
import SectionBackdrop from "@/components/SectionBackdrop";
import { LINKS } from "@/lib/links";

const FEATURES = [
  "Real-time bias & framing analysis",
  "AI summaries across every outlet",
  "Source-backed answers, not opinions",
  "Multilingual — US + South Asia",
];

const FinalCTASection: FC = () => {
  return (
    <section id="feedback" className="relative bg-navy overflow-hidden">
      <SectionBackdrop image="/assets/images/eanat/affiliation.jpg" dark />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(16,185,129,0.12) 0%, rgba(22,39,63,0) 60%)" }}
      />
      <div className="relative container mx-auto px-5 sm:px-6 max-w-[900px] py-24 sm:py-32 text-center">
        <Reveal>
          <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-[#6EE7B7] mb-5">
            Ready when you are
          </p>
          <h2 className="font-serif text-white text-[38px] leading-[1.08] sm:text-[56px] sm:leading-[1.05] tracking-[-0.02em] mb-5">
            See through{" "}
            <span className="italic text-[#6EE7B7]">the narrative.</span>
          </h2>
          <p className="font-hanken text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mx-auto mb-9">
            Stop reading someone else&rsquo;s framing. Start seeing the structure
            beneath every story — across every outlet, language, and leaning.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
            {FEATURES.map((f) => (
              <span key={f} className="inline-flex items-center gap-2 font-hanken text-[14px] text-white/85">
                <span className="grid place-items-center w-5 h-5 rounded-full bg-primary-500/20">
                  <Check className="w-3 h-3 text-[#6EE7B7]" />
                </span>
                {f}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href={LINKS.supportEmail}
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-navy font-hanken font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href={LINKS.perspectivity}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-hanken font-medium text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              <span>Try the app</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
