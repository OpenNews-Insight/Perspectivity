"use client";

import { useState, useEffect, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DepthTunnel, easeOutExpo, useReducedMotionFlag } from "@/lib/motionfold";
import NewsMarquee from "@/components/NewsMarquee";
import NarrativeGraph from "@/components/NarrativeGraph";
import { LINKS } from "@/lib/links";
import type { MarqueeNewsData } from "@/lib/fetchNews";

interface HeroSectionProps {
  newsData?: MarqueeNewsData;
}

// The noise streaming over the pressroom: fragmented news + mis/disinformation.
type Tone = "news" | "misinfo" | "question";
interface Frag {
  id: number;
  x: number;
  y: number;
  text: string;
  tone: Tone;
}
const FRAGMENTS: Frag[] = [
  { id: 1, x: 11, y: 16, text: "BREAKING", tone: "news" },
  { id: 2, x: 87, y: 12, text: "EXCLUSIVE", tone: "news" },
  { id: 3, x: 16, y: 70, text: "FAKE NEWS?", tone: "misinfo" },
  { id: 4, x: 82, y: 78, text: "DEBUNKED", tone: "misinfo" },
  { id: 5, x: 93, y: 42, text: "“they lied”", tone: "misinfo" },
  { id: 6, x: 5, y: 46, text: "UNVERIFIED", tone: "question" },
  { id: 7, x: 73, y: 26, text: "source: ???", tone: "question" },
  { id: 8, x: 25, y: 8, text: "Left says…", tone: "news" },
  { id: 9, x: 63, y: 91, text: "Right says…", tone: "news" },
  { id: 10, x: 95, y: 60, text: "viral?", tone: "question" },
  { id: 11, x: 8, y: 88, text: "RETRACTED", tone: "misinfo" },
  { id: 12, x: 45, y: 5, text: "9 sources", tone: "news" },
  { id: 13, x: 52, y: 94, text: "disinformation", tone: "misinfo" },
  { id: 14, x: 33, y: 38, text: "out of context", tone: "misinfo" },
  { id: 15, x: 68, y: 54, text: "deepfake?", tone: "question" },
  { id: 16, x: 19, y: 30, text: "clickbait", tone: "misinfo" },
  { id: 17, x: 89, y: 30, text: "alleged", tone: "question" },
  { id: 18, x: 13, y: 58, text: "EXPOSED", tone: "news" },
  { id: 19, x: 80, y: 52, text: "RUMOR", tone: "misinfo" },
  { id: 20, x: 39, y: 82, text: "according to…", tone: "news" },
  { id: 21, x: 58, y: 20, text: "MISLEADING", tone: "misinfo" },
  { id: 22, x: 30, y: 54, text: "SPIN", tone: "misinfo" },
  { id: 23, x: 84, y: 40, text: "anonymous", tone: "question" },
  { id: 24, x: 60, y: 78, text: "trust us", tone: "misinfo" },
];
const TONE_COLOR: Record<Tone, string> = {
  news: "#6BA4D6",
  misinfo: "#E0A030",
  question: "#B68FE0",
};

// headline tokens — D1 verbatim (deck). Emphasized (green italic) phrase = the product concept.
const HEADLINE_WORDS: { t: string; em?: boolean }[] = [
  { t: "News" }, { t: "is" }, { t: "only" }, { t: "the" }, { t: "surface." },
  { t: "We" }, { t: "map" }, { t: "the" }, { t: "hidden", em: true }, { t: "structure", em: true }, { t: "of" }, { t: "public" }, { t: "narratives." },
];

const HeroSection: FC<HeroSectionProps> = ({
  newsData = { perspectivity: [], drishtikon: [] },
}) => {
  const reduced = useReducedMotionFlag();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const proofPoints = [
    "Hundreds of sources",
    "iOS + Android · live",
    "Open-source on Hugging Face",
    "Peer-reviewed research",
  ];

  // headline typewriter: words appear one at a time (caret blinks, then vanishes)
  const hlContainer = reduced
    ? { hidden: {}, visible: {} }
    : { hidden: {}, visible: { transition: { staggerChildren: 0.14, delayChildren: 0.7 } } };
  const hlWord = reduced
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.1 } } };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-navy-deep">
      {/* splash intro: full-screen navy wash fades out on load */}
      {!reduced && (
        <motion.div
          className="absolute inset-0 z-50 bg-navy-deep pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.15 }}
        />
      )}

      {/* LAYER 1 — the pressroom photograph (Western Daily Press, 1908 · public domain): the physical substrate of narratives */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero-press-room.jpg"
          alt="A newspaper printing press — the machinery of public narratives"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* darken the photo into a moody substrate (kept light so the pressroom still reads) */}
      <div className="absolute inset-0 z-[1] bg-navy-deep/50" />
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(100deg, rgba(15,28,46,0.55) 0%, rgba(15,28,46,0.25) 50%, rgba(15,28,46,0.45) 100%)" }}
      />

      {/* LAYER 2 — the depth tunnel: news + misinformation streaming over the pressroom (the digital noise) */}
      <motion.div
        className="absolute inset-0 z-[2]"
        initial={reduced ? false : { opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: easeOutExpo }}
      >
        <DepthTunnel
          items={FRAGMENTS}
          cycleDuration={8}
          depthStart={2000}
          depthEnd={320}
          scaleStart={0.4}
          scaleEnd={1.7}
          perspective={1000}
          perspectiveOrigin="50% 34%"
          prefill
          style={{ position: "absolute", inset: 0 }}
        >
          {(item) => {
            const c = TONE_COLOR[item.tone];
            return (
              <div
                className="-translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md px-2.5 py-1 font-hanken text-xs sm:text-sm font-bold tracking-wide"
                style={{
                  color: "#FFFFFF",
                  background: `${c}2e`,
                  border: `1px solid ${c}`,
                  boxShadow: `0 0 22px ${c}66, 0 0 6px ${c}cc`,
                }}
              >
                <span style={{ color: c }}>●</span> {item.text}
              </div>
            );
          }}
        </DepthTunnel>
      </motion.div>

      {/* LAYER 3 — ONE transparent card: the message (left) + the live graph readout (right). The pressroom shows through. */}
      <div className="relative z-10 container mx-auto w-full flex-1 flex items-center">
        <div className="max-w-[1180px] mx-auto w-full px-5 sm:px-6 pt-28 sm:pt-32 pb-10">
          <motion.div
            className="mx-auto w-full max-w-[1060px] rounded-3xl border border-white/15 bg-navy-deep/25 backdrop-blur-lg p-6 sm:p-9 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.95)]"
            initial={reduced ? false : { opacity: 0, scale: 0.96, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: easeOutExpo, delay: reduced ? 0 : 0.35 }}
          >
            <div className="grid md:grid-cols-[1.15fr_1fr] gap-7 lg:gap-9 items-center">

              {/* message */}
              <div>
                <p className="font-hanken text-[12px] sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#E0A030] mb-4">
                  Narrative Intelligence Platform
                </p>
                <h1 className="font-serif text-white text-[30px] leading-[1.12] sm:text-[40px] sm:leading-[1.1] tracking-[-0.02em] mb-5">
                  <motion.span variants={hlContainer} initial="hidden" animate="visible" className="inline">
                    {HEADLINE_WORDS.map((w, i) => (
                      <motion.span
                        key={i}
                        variants={hlWord}
                        className={`inline-block ${w.em ? "italic text-[#6EE7B7]" : ""}`}
                      >
                        {w.t}&nbsp;
                      </motion.span>
                    ))}
                    {!reduced && (
                      <motion.span
                        aria-hidden
                        className="inline-block w-[3px] h-[0.82em] -mb-[0.06em] bg-[#6EE7B7] align-middle ml-0.5 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0, 1, 0, 1, 0, 1, 0] }}
                        transition={{ delay: 0.7, duration: 1.7, times: [0, 0.05, 0.17, 0.29, 0.41, 0.53, 0.65, 0.8, 1], ease: "linear" }}
                      />
                    )}
                  </motion.span>
                </h1>
                <motion.p
                  className="font-hanken text-[15px] sm:text-base text-white/80 leading-relaxed mb-7"
                  initial={reduced ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, ease: easeOutExpo, delay: reduced ? 0 : 1.5 }}
                >
                  See how every outlet frames the same story — who pushes what,
                  what's amplified or suppressed, and how narratives move over
                  time. Across hundreds of sources, in English and Bangla.
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                  <Link
                    href={LINKS.perspectivity}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-navy font-hanken font-semibold text-base px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>Analyze Today&rsquo;s News &mdash; Free</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    href={LINKS.demoRequest}
                    className="inline-flex items-center justify-center gap-2 border border-white/35 hover:border-white/70 text-white font-hanken font-medium text-base px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/10"
                  >
                    <span>Request a Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400" />
                    </span>
                    <span className="font-hanken text-[13px] text-white font-semibold">Live</span>
                  </div>
                  {proofPoints.map((p) => (
                    <span key={p} className="font-hanken text-[13px] text-white/60">{p}</span>
                  ))}
                </div>
              </div>

              {/* live readout — the graph in a glass style (no white panel), pressroom visible through the card */}
              <div>
                <div className="flex items-center justify-between mb-1 px-0.5">
                  <span className="font-hanken text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-white/65">
                    Perspectivity · live read
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
                </div>
                <NarrativeGraph dark />
                <p className="font-hanken text-center text-[10px] text-white/45 mt-2 italic">
                  Every outlet, mapped on the spectrum of bias.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Live-ingest strip */}
      <div className="relative z-10 border-t border-white/10 bg-navy-deep/60 backdrop-blur-sm py-4">
        <p className="font-hanken text-[11px] tracking-[0.18em] uppercase text-white/40 text-center mb-3">
          Now analyzing across sources
        </p>
        <NewsMarquee newsData={newsData} isVisible={isVisible} />
      </div>
    </section>
  );
};

export default HeroSection;
