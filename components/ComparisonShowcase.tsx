"use client";

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/lib/motionfold";
import SectionBackdrop from "@/components/SectionBackdrop";

interface Framing {
  id: number;
  outlet: string;
  bias: string;
  biasColor: string;
  headline: string;
  emphasizes: string;
  omits: string;
}

const FRAMINGS: Framing[] = [
  { id: 0, outlet: "Left-leaning outlet", bias: "Left", biasColor: "#3B82F6", headline: "House Forces Trump to Stand Down on Illegal War", emphasizes: "Constitutional check · presidential overreach", omits: "Iran provocation · bipartisan margin" },
  { id: 1, outlet: "Center outlet", bias: "Center", biasColor: "#94A3B8", headline: "House Passes War Powers Resolution on Iran", emphasizes: "The vote · both readings of the law", omits: "nothing material — states the facts" },
  { id: 2, outlet: "Right-leaning outlet", bias: "Right", biasColor: "#DC2626", headline: "Democrats Tie Trump’s Hands as Iran Strikes US", emphasizes: "Iran threat · national security risk", omits: "Bipartisan support · constitutional precedent" },
];

const SPECTRUM = [
  { label: "Left", color: "#3B82F6" },
  { label: "Center", color: "#94A3B8" },
  { label: "Right", color: "#DC2626" },
];

const ComparisonShowcase: FC = () => {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % FRAMINGS.length), 3500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <SectionBackdrop image="/assets/images/eanat/actor.jpg" dark />
      <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-[1180px] py-24 sm:py-32">
        <Reveal className="max-w-2xl mb-12 sm:mb-14">
          <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-[#6EE7B7] mb-4">
            Event Prism · same event, different narratives
          </p>
          <h2 className="font-serif text-white text-[34px] leading-[1.1] sm:text-[44px] sm:leading-[1.08] tracking-[-0.02em] mb-4">
            One event. <span className="italic text-[#6EE7B7]">Three framings.</span>
          </h2>
          <p className="font-hanken text-base sm:text-lg text-white/60 leading-relaxed">
            The same vote, refracted across the political spectrum. Each outlet
            chooses what to emphasize — and what to leave out.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {FRAMINGS.map((f, i) => {
            const isActive = active === f.id;
            return (
              <Reveal key={f.id} delay={i * 0.08}>
                <button
                  type="button"
                  onClick={() => setActive(f.id)}
                  className="text-left w-full h-full rounded-2xl border bg-white/[0.04] p-6 transition-all duration-500"
                  style={{ borderColor: isActive ? f.biasColor : "rgba(255,255,255,0.1)", boxShadow: isActive ? `0 24px 50px -30px ${f.biasColor}` : "none", transform: isActive ? "translateY(-4px)" : "none" }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-hanken text-[12px] text-white/40 uppercase tracking-wide">{f.outlet}</span>
                    <span className="font-hanken text-[11px] font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${f.biasColor}26`, color: f.biasColor }}>{f.bias}</span>
                  </div>
                  <h3 className="font-serif text-white text-xl sm:text-[22px] leading-snug mb-5 min-h-[64px]">“{f.headline}”</h3>
                  <div className="space-y-2">
                    <p className="font-hanken text-[13px] text-white/60 leading-relaxed"><span className="font-semibold text-white">Emphasizes · </span>{f.emphasizes}</p>
                    <p className="font-hanken text-[13px] text-white/60 leading-relaxed"><span className="font-semibold text-white">Omits · </span>{f.omits}</p>
                  </div>
                  <div className="mt-5 h-[3px] rounded-full transition-all duration-500" style={{ backgroundColor: isActive ? f.biasColor : "rgba(255,255,255,0.08)" }} />
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-10 max-w-2xl mx-auto">
          <div className="relative h-2 rounded-full" style={{ background: "linear-gradient(90deg, #3B82F6 0%, #94A3B8 50%, #DC2626 100%)" }}>
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg"
              animate={{ left: active === 0 ? "8%" : active === 1 ? "50%" : "92%" }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              style={{ x: "-50%", backgroundColor: FRAMINGS[active].biasColor }}
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            {SPECTRUM.map((s) => (
              <div key={s.label} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                <span className="font-hanken text-[12px] text-white/55">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ComparisonShowcase;
