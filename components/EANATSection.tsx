"use client";

/**
 * EANATSection — the intelligence stack as a SectionStack cinematic journey.
 *
 * The intro + five EANAT layers are stacking "acts": each full-bleed navy
 * background (with that layer's accent glow + a whisper of the pressroom)
 * slides up and covers the previous as you scroll, while the layer's number,
 * name, and "Only Perspectivity shows you" insight crossfade in. One story,
 * told layer by layer — the Floema/Oryzo storytelling pattern.
 */
import { type FC, type ReactNode } from "react";
import Image from "next/image";
import { SectionStack } from "@/lib/motionfold";

interface Layer {
  num: string;
  name: string;
  frame: string;
  blurb: string;
  accent: string;
  only: string;
}

const LAYERS: Layer[] = [
  { num: "01", name: "Event Intelligence", frame: "What actually happened", blurb: "The core — every event, fully reconstructed from dozens of sources.", accent: "#10B981", only: "53 sources, 6 shared facts, 2 disputed claims — reconciled into one view." },
  { num: "02", name: "Actor Intelligence", frame: "Who shapes the narrative", blurb: "A knowledge graph of influence — who repeats what, and for whom.", accent: "#3B82F6", only: "This commentator flipped on the bill 48 hours after the rally." },
  { num: "03", name: "Narrative Intelligence", frame: "Which story is winning", blurb: "The AI-native layer: every emerging story, tracked as it spreads.", accent: "#8B5CF6", only: "“Iran struck first” is amplified by right-leaning sources — absent from 13 others." },
  { num: "04", name: "Affiliation Intelligence", frame: "Who they are connected to", blurb: "Source-backed. Confidence-scored. Never asserted.", accent: "#EC4899", only: "Appeared with, cited, and defended X — every link backed by a clip." },
  { num: "05", name: "Time-Series Intelligence", frame: "How it all moves over time", blurb: "The longitudinal view — how narratives travel and transform.", accent: "#4FD1C5", only: "A talking point traveled from 2 fringe channels to 9 mainstream outlets in 6 days." },
];

type Act = { id: string; accent: string; kind: "intro" | "layer"; layer?: Layer };

const ACTS: Act[] = [
  { id: "intro", accent: "#6EE7B7", kind: "intro" },
  ...LAYERS.map((l) => ({ id: l.num, accent: l.accent, kind: "layer" as const, layer: l })),
];

function ActBackground({ accent }: { accent: string }): ReactNode {
  return (
    <div className="absolute inset-0 bg-navy-deep">
      <Image src="/assets/images/hero-press-room.jpg" alt="" fill className="object-cover opacity-[0.10]" />
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(55% 65% at 72% 38%, ${accent}26 0%, ${accent}00 60%), linear-gradient(180deg, #0F1C2E 0%, #16273F 100%)` }}
      />
    </div>
  );
}

const EANATSection: FC = () => {
  return (
    <section id="platform" className="bg-navy-deep text-white">
      <SectionStack
        items={ACTS}
        scrollVhPerSection={100}
        progressLine="vertical"
        progressColor="#6EE7B7"
        progressTrackColor="rgba(255,255,255,0.10)"
        renderBackground={(act) => <ActBackground accent={act.accent} />}
      >
        {(act) => (
          <div className="h-full flex items-center">
            <div className="container mx-auto px-5 sm:px-6 max-w-[1000px] w-full">
              {act.kind === "intro" ? (
                <div>
                  <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-[#6EE7B7] mb-4">
                    The Intelligence Stack
                  </p>
                  <h2 className="font-serif text-white text-[34px] leading-[1.1] sm:text-[56px] sm:leading-[1.05] tracking-[-0.02em] max-w-3xl">
                    A citizen sees headlines. Perspectivity reads the{" "}
                    <span className="italic text-[#6EE7B7]">structure beneath them.</span>
                  </h2>
                  <p className="font-hanken text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mt-5">
                    News is only the surface. Underneath sit five layers of
                    intelligence — each answering questions no headline can.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-center">
                  <div className="font-serif leading-none" style={{ fontSize: "clamp(80px, 14vw, 150px)", color: act.layer!.accent }}>
                    {act.layer!.num}
                  </div>
                  <div>
                    <p className="font-hanken text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: act.layer!.accent }}>
                      {act.layer!.frame}
                    </p>
                    <h3 className="font-serif text-white text-3xl sm:text-5xl tracking-tight mb-3">{act.layer!.name}</h3>
                    <p className="font-hanken text-[15px] sm:text-lg text-white/65 leading-relaxed max-w-xl mb-6">{act.layer!.blurb}</p>
                    <div className="rounded-xl border-l-2 px-5 py-4 max-w-xl" style={{ borderColor: act.layer!.accent, background: `${act.layer!.accent}12` }}>
                      <p className="font-hanken text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40 mb-1">
                        Only Perspectivity shows you
                      </p>
                      <p className="font-serif italic text-white text-lg sm:text-xl leading-snug">{act.layer!.only}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </SectionStack>
    </section>
  );
};

export default EANATSection;
