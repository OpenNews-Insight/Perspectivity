import { FC } from "react";
import { Reveal } from "@/lib/motionfold";

type Q = { who: string[]; note?: string };

const PositioningQuadrant: FC = () => {
  const topLeft: Q = { who: ["Blackbird.AI", "Cyabra", "Graphika", "Recorded Future"], note: "AI-native, but closed" };
  const topRight: Q = { who: ["Perspectivity"], note: "The open quadrant" };
  const bottomLeft: Q = { who: ["Meltwater", "Legacy media monitoring"], note: "Private metadata" };
  const bottomRight: Q = { who: ["Ground News", "AllSides", "NewsGuard"], note: "Public, but static ratings" };

  const Cell = ({ q, highlight }: { q: Q; highlight?: boolean }) => (
    <div
      className={`rounded-2xl border p-5 sm:p-6 flex flex-col justify-between min-h-[150px] ${
        highlight ? "border-primary-400 bg-navy text-white shadow-[0_30px_60px_-30px_rgba(16,185,129,0.5)]" : "border-line bg-surface-secondary"
      }`}
    >
      <div className="flex flex-wrap gap-1.5">
        {q.who.map((w) => (
          <span
            key={w}
            className={`font-hanken text-[12px] sm:text-[13px] font-medium px-2.5 py-1 rounded-full ${
              highlight ? "bg-[#6EE7B7] text-navy" : "bg-white text-secondary-500 border border-line"
            }`}
          >
            {w}
          </span>
        ))}
      </div>
      <p className={`font-hanken text-[11px] mt-3 ${highlight ? "text-[#6EE7B7]" : "text-secondary-400"}`}>{q.note}</p>
    </div>
  );

  return (
    <section id="positioning" className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-[1080px] py-24 sm:py-32">
        <Reveal className="max-w-2xl mb-12 sm:mb-14">
          <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-primary-600 mb-4">
            Where we&apos;re built
          </p>
          <h2 className="font-serif text-navy text-[34px] leading-[1.1] sm:text-[46px] sm:leading-[1.06] tracking-[-0.02em] mb-4">
            Built where the incumbents are blind.
          </h2>
          <p className="font-hanken text-base sm:text-lg text-secondary-500 leading-relaxed">
            The narrative-intelligence market splits along two axes: <span className="text-navy font-medium">private vs. public</span>, and <span className="text-navy font-medium">source-metadata vs. AI-native content-reading</span>. One quadrant is empty. That&apos;s where Perspectivity lives.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-[auto_1fr] gap-3 sm:gap-5">
            {/* Y axis */}
            <div className="flex flex-col justify-between py-1 sm:py-3 p">
              <span className="font-hanken text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-secondary-400 [writing-mode:vertical-rl] rotate-180 sm:rotate-0 sm:[writing-mode:horizontal-tb]">
                AI-Native Content-Reader
              </span>
              <span className="font-hanken text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-secondary-400 [writing-mode:vertical-rl] rotate-180 sm:rotate-0 sm:[writing-mode:horizontal-tb]">
                Source Metadata
              </span>
            </div>

            {/* 2x2 + X axis */}
            <div>
              <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
                <Cell q={topLeft} />
                <Cell q={topRight} highlight />
                <Cell q={bottomLeft} />
                <Cell q={bottomRight} />
              </div>
              <div className="flex justify-between mt-3 sm:mt-4 px-1">
                <span className="font-hanken text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-secondary-400">
                  Private &amp; Secretive
                </span>
                <span className="font-hanken text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-secondary-400">
                  Public &amp; Transparent
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="font-serif text-navy text-lg sm:text-xl italic mt-10 max-w-2xl leading-relaxed">
            &ldquo;Incumbents sell secrecy, in English. We&apos;re public, multilingual, and content-native &mdash; in markets they can&apos;t read.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default PositioningQuadrant;
