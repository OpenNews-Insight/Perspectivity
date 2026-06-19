"use client";

import { type FC } from "react";
import { Reveal } from "@/lib/motionfold";
import NarrativeGraph from "@/components/NarrativeGraph";
import { EventPrism, StanceDrift, NarrativeMomentum, AffiliationNetwork } from "@/components/SignatureVisuals";

interface Sig { tag: string; accent: string; title: string; body: string; Viz: FC<{ className?: string }>; }

const Featured: Sig = {
  tag: "Signature · Narrative Graph", accent: "#10B981",
  title: "Every outlet, mapped on the spectrum of bias.",
  body: "Where each source sits — and who covers, aligns, or contradicts whom. One event becomes a structure you can read at a glance.",
  Viz: NarrativeGraph,
};

const Cards: Sig[] = [
  { tag: "Signature · Event Prism", accent: "#3B82F6", title: "One event, five framings.", body: "The same fact, refracted across the political spectrum. See what each side emphasizes — and what it omits.", Viz: EventPrism },
  { tag: "Signature · Stance Drift", accent: "#8B5CF6", title: "When a stance quietly shifts.", body: "Track any actor's position over months. Catch the contradictions, the softening, and the hardening.", Viz: StanceDrift },
  { tag: "Signature · Narrative Momentum", accent: "#EC4899", title: "Which story is winning.", body: "Rising, fading, or suppressed — plus the coordinated-framing signals the public never sees flagged.", Viz: NarrativeMomentum },
  { tag: "Signature · Affiliation Network", accent: "#4FD1C5", title: "Hidden ties, evidence-scored.", body: "Who funds, owns, and amplifies whom. Every link confirmed, medium, or alleged — never asserted.", Viz: AffiliationNetwork },
];

const FeaturesSection: FC = () => {
  const FFeatured = Featured.Viz;
  return (
    <section id="features" className="bg-surface-secondary">
      <div className="container mx-auto px-5 sm:px-6 max-w-[1180px] py-24 sm:py-32">
        <Reveal className="max-w-2xl mb-12 sm:mb-16">
          <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-primary-600 mb-4">Signature Visualizations</p>
          <h2 className="font-serif text-navy text-[34px] leading-[1.1] sm:text-5xl sm:leading-[1.08] tracking-[-0.02em] mb-4">
            See what no headline can show you.
          </h2>
          <p className="font-hanken text-base sm:text-lg text-secondary-500 leading-relaxed">
            Five lenses — each one an insight only Perspectivity surfaces. Not summaries. <span className="italic text-navy">Structure.</span>
          </p>
        </Reveal>

        <Reveal className="mb-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-2xl border border-line bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_24px_60px_-34px_rgba(22,39,63,0.4)]">
            <div>
              <span className="font-hanken text-[11px] font-semibold tracking-[0.18em] uppercase mb-3 inline-block" style={{ color: Featured.accent }}>{Featured.tag}</span>
              <h3 className="font-serif text-navy text-2xl sm:text-3xl tracking-tight mb-3">{Featured.title}</h3>
              <p className="font-hanken text-secondary-500 text-[15px] sm:text-base leading-relaxed mb-5">{Featured.body}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {["Bias-spectrum positioning", "Aligned framing", "Contradictions"].map((p) => (
                  <span key={p} className="font-hanken text-[12px] text-secondary-400 flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full" style={{ background: Featured.accent }} />{p}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-line bg-surface-secondary mesh-bg p-4 sm:p-5">
              <FFeatured />
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {Cards.map((c, i) => {
            const V = c.Viz;
            return (
              <Reveal key={c.tag} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-line bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-30px_rgba(22,39,63,0.4)]">
                  <div className="rounded-xl border border-line bg-surface-secondary px-3 py-4 mb-5 h-[220px] flex items-center overflow-x-auto overflow-y-hidden">
                    <V className="h-auto max-h-[200px] min-w-[440px] w-full flex-1" />
                  </div>
                  <span className="font-hanken text-[11px] font-semibold tracking-[0.16em] uppercase mb-2 inline-block" style={{ color: c.accent }}>{c.tag}</span>
                  <h3 className="font-serif text-navy text-xl sm:text-2xl tracking-tight mb-2">{c.title}</h3>
                  <p className="font-hanken text-secondary-500 text-[14.5px] leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
