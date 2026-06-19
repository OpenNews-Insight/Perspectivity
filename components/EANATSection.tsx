"use client";

/**
 * EANATSection — the product narrative as a scroll-driven pipeline.
 *
 * Event → Actor → Narrative → Affiliation → Time. As the user scrolls, a
 * pinned stage panel crossfades through the five intelligence layers, a rail
 * of chips lights up in sequence, and a progress bar fills. Each stage shows
 * what it answers + a real "Only Perspectivity shows you" insight.
 *
 * Reduced-motion: renders all five stages as a static stack.
 * Source: pitch deck slide 4 + L1 "The Intelligence Stack" + "The EANAT Model".
 */

import { useRef, type FC } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

interface Stage {
  letter: string;
  name: string;
  verb: string;
  layer: string;
  tag: string;
  questions: string[];
  only: string;
  accent: string;
}

const STAGES: Stage[] = [
  {
    letter: "E",
    name: "Event",
    verb: "happened",
    layer: "Event Intelligence",
    tag: "What actually happened",
    questions: [
      "What happened?",
      "Which sources covered it?",
      "What facts are agreed on?",
      "What is disputed?",
      "What context is missing?",
    ],
    only: "53 sources, 6 shared facts, 2 disputed claims — reconciled into one view.",
    accent: "#6BA4D6",
  },
  {
    letter: "A",
    name: "Actor",
    verb: "involved",
    layer: "Actor Intelligence",
    tag: "Who shapes the narrative",
    questions: [
      "What topics do they repeat?",
      "Which side do they support?",
      "Who do they attack?",
      "Who do they defend?",
      "When did their stance change?",
    ],
    only: "This commentator flipped on the bill 48 hours after the rally.",
    accent: "#E0A030",
  },
  {
    letter: "N",
    name: "Narrative",
    verb: "generated",
    layer: "Narrative Intelligence",
    tag: "Which story is winning",
    questions: [
      "What narratives are emerging?",
      "Who is pushing each one?",
      "Which is gaining momentum?",
      "Which is fading?",
      "Which is being suppressed?",
    ],
    only: "“Iran struck first” is amplified by right-leaning sources — absent from 13 others.",
    accent: "#16A06B",
  },
  {
    letter: "A",
    name: "Affiliation",
    verb: "discovered",
    layer: "Affiliation Intelligence",
    tag: "Who they are connected to",
    questions: [
      "Which party or ideology?",
      "Which institution or media house?",
      "Which business group?",
      "Which social cluster?",
    ],
    only: "Appeared with, cited, and defended X — every link backed by a clip, confidence-scored.",
    accent: "#9B7FD4",
  },
  {
    letter: "T",
    name: "Time-change",
    verb: "occurred",
    layer: "Time-Series Intelligence",
    tag: "How it all moves over time",
    questions: [
      "Top pushed narratives this week?",
      "What was amplified?",
      "What was ignored?",
      "Which actors appeared most?",
      "What moved fringe → mainstream?",
    ],
    only: "A talking point traveled from 2 fringe channels to 9 mainstream outlets in 6 days.",
    accent: "#5B9BD5",
  },
];

const SEG = 1 / STAGES.length;

function StagePanelContent({ stage }: { stage: Stage }) {
  return (
    <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
      {/* Big letter */}
      <div className="flex md:flex-col items-center md:items-start gap-4">
        <span
          className="font-serif leading-none"
          style={{ fontSize: "clamp(72px, 12vw, 140px)", color: stage.accent }}
        >
          {stage.letter}
        </span>
        <div>
          <div className="font-serif text-white text-2xl sm:text-3xl">
            {stage.name}
          </div>
          <div className="font-hanken text-sm text-white/45 uppercase tracking-[0.16em] mt-1">
            {stage.verb}
          </div>
        </div>
      </div>

      {/* Detail */}
      <div>
        <p
          className="font-hanken text-xs font-semibold uppercase tracking-[0.18em] mb-2"
          style={{ color: stage.accent }}
        >
          {stage.layer}
        </p>
        <h3 className="font-serif text-white text-2xl sm:text-3xl mb-5">
          {stage.tag}
        </h3>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-7">
          {stage.questions.map((q) => (
            <li
              key={q}
              className="font-hanken text-[15px] text-white/70 flex items-start gap-2.5"
            >
              <span
                className="mt-2 h-1 w-1 rounded-full flex-shrink-0"
                style={{ background: stage.accent }}
              />
              {q}
            </li>
          ))}
        </ul>
        <div
          className="rounded-xl border-l-2 px-5 py-4"
          style={{
            borderColor: stage.accent,
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <p className="font-hanken text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40 mb-1.5">
            Only Perspectivity shows you
          </p>
          <p className="font-serif italic text-white/90 text-lg leading-snug">
            {stage.only}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScrubPanel({
  stage,
  index,
  progress,
}: {
  stage: Stage;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index * SEG;
  const end = start + SEG;
  const isFirst = index === 0;
  const isLast = index === STAGES.length - 1;

  const opacity = useTransform(
    progress,
    [
      isFirst ? -1 : start - 0.02,
      start + 0.04,
      end - 0.04,
      isLast ? 2 : end + 0.02,
    ],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    progress,
    [start - 0.02, start + 0.04, end - 0.04, end + 0.02],
    [24, 0, 0, -24],
  );

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0">
      <StagePanelContent stage={stage} />
    </motion.div>
  );
}

function RailChip({
  stage,
  index,
  progress,
}: {
  stage: Stage;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index * SEG;
  const end = start + SEG;
  const active = useTransform(
    progress,
    [start - 0.001, start, end, end + 0.001],
    [0, 1, 1, 0],
  );
  const color = useTransform(active, [0, 1], ["rgba(255,255,255,0.35)", stage.accent]);
  const borderColor = useTransform(
    active,
    [0, 1],
    ["rgba(255,255,255,0.12)", stage.accent],
  );
  const bg = useTransform(active, [0, 1], ["rgba(255,255,255,0)", `${stage.accent}1A`]);

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <motion.div
        style={{ color, borderColor, backgroundColor: bg }}
        className="flex items-center gap-2 rounded-full border px-3 py-1.5"
      >
        <span className="font-serif text-lg leading-none">{stage.letter}</span>
        <span className="font-hanken text-xs font-medium hidden sm:inline">
          {stage.name}
        </span>
      </motion.div>
      {index < STAGES.length - 1 && (
        <span className="text-white/20 text-sm">›</span>
      )}
    </div>
  );
}

const EANATSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const Header = (
    <div className="max-w-3xl">
      <p className="font-hanken text-xs font-semibold uppercase tracking-[0.2em] text-[#6BA4D6] mb-4">
        Product · The EANAT Model
      </p>
      <h2 className="font-serif text-white text-[34px] leading-[1.08] sm:text-5xl tracking-[-0.02em] mb-4">
        Five layers. One chain of intelligence.
      </h2>
      <p className="font-hanken text-base sm:text-lg text-white/60 leading-relaxed">
        A headline is the end of the story. Every event flows down the same
        pipeline — each stage compounding the one before it.
      </p>
    </div>
  );

  const Closer = (
    <p className="font-serif italic text-white/70 text-lg sm:text-xl max-w-3xl">
      One knowledge graph. From a single event to a longitudinal map of who
      moved, when, and why.
    </p>
  );

  // Reduced-motion / no-JS: static stacked layout
  if (reduced) {
    return (
      <section
        id="platform"
        className="relative bg-navy bg-grain overflow-hidden py-24"
      >
        <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-[1062px]">
          {Header}
          <div className="mt-14 space-y-16">
            {STAGES.map((s, i) => (
              <StagePanelContent key={`${s.letter}-${i}`} stage={s} />
            ))}
          </div>
          <div className="mt-16">{Closer}</div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="platform"
      ref={containerRef}
      className="relative bg-navy bg-grain"
      style={{ height: "360vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-[1062px] w-full flex-1 flex flex-col justify-center py-20">
          {Header}

          {/* rail + progress */}
          <div className="mt-10 mb-8">
            <div className="flex flex-wrap items-center gap-y-3 mb-4">
              {STAGES.map((s, i) => (
                <RailChip
                  key={`${s.letter}-${i}`}
                  stage={s}
                  index={i}
                  progress={scrollYProgress}
                />
              ))}
            </div>
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white/60 origin-left"
                style={{ width: barWidth }}
              />
            </div>
          </div>

          {/* crossfading stage panels */}
          <div className="relative min-h-[340px] sm:min-h-[300px]">
            {STAGES.map((s, i) => (
              <ScrubPanel
                key={`${s.letter}-${i}`}
                stage={s}
                index={i}
                progress={scrollYProgress}
              />
            ))}
          </div>

          <div className="mt-6">{Closer}</div>
        </div>
      </div>
    </section>
  );
};

export default EANATSection;
