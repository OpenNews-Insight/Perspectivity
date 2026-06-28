"use client";

/**
 * EventPrismSection — the interactive "see it in action" moment (mockup B).
 *
 * One raw event refracts into five outlet framings across the political spectrum.
 * Click any outlet to see the headline it used, what it emphasized, and what it
 * left out. Auto-cycles like the hero graph, pauses on interaction. This is the
 * low-commitment "feel the magic in one click" entry Ploy #5 asks for.
 */
import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { Reveal, easeOutExpo } from "@/lib/motionfold";
import { LINKS } from "@/lib/links";

type Framing = {
  id: string;
  outlet: string;
  domain: string;
  leaning: string;
  color: string;
  pos: number;
  headline: string;
  emphasis: string;
  omission: string;
};

const EVENT = { title: "War Powers Vote", meta: "53 sources · 6 claims" };

const FRAMINGS: Framing[] = [
  {
    id: "npr", outlet: "NPR", domain: "npr.org", leaning: "Left", color: "#3B82F6", pos: 10,
    headline: "Senators force the President to stand down on Iran",
    emphasis: "Constitutional authority and a rare bipartisan rebuke of the executive.",
    omission: "The regional security context and Iran's recent provocations.",
  },
  {
    id: "nyt", outlet: "NYT", domain: "nytimes.com", leaning: "Left-Center", color: "#60A5FA", pos: 30,
    headline: "Bipartisan Senate reins in the President",
    emphasis: "Cross-party cooperation and Congress reasserting its institutional role.",
    omission: "The military stakes and what the constraint means on the ground.",
  },
  {
    id: "ap", outlet: "AP", domain: "apnews.com", leaning: "Center", color: "#94A3B8", pos: 50,
    headline: "Senate passes war powers resolution",
    emphasis: "The vote margin, the text of the measure, and what happens next.",
    omission: "Partisan framing — neither side's spin is amplified.",
  },
  {
    id: "wsj", outlet: "WSJ", domain: "wsj.com", leaning: "Right-Center", color: "#F87171", pos: 70,
    headline: "Lawmakers limit the President amid rising tensions",
    emphasis: "National-security implications and the constraint on executive action.",
    omission: "The constitutional case Congress made for reasserting its authority.",
  },
  {
    id: "fox", outlet: "FOX", domain: "foxnews.com", leaning: "Right", color: "#DC2626", pos: 90,
    headline: "Senate ties the President's hands as Iran strikes",
    emphasis: "The security risk and the timing relative to Iranian attacks.",
    omission: "Congressional authority and the bipartisan margin of the vote.",
  },
];

const logoUrl = (domain: string) =>
  `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

const EventPrismSection: FC = () => {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(2); // Center (AP) by default
  const [paused, setPaused] = useState(false);
  const current = FRAMINGS[active];

  useEffect(() => {
    if (reduced || paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % FRAMINGS.length), 3200);
    return () => clearInterval(id);
  }, [reduced, paused]);

  const pick = (i: number) => {
    setActive(i);
    setPaused(true);
  };

  return (
    <section id="event-prism" className="relative overflow-hidden bg-surface-secondary">
      <div className="container mx-auto px-5 sm:px-6 max-w-[1180px] py-24 sm:py-32">
        <Reveal className="max-w-2xl mb-12 sm:mb-14">
          <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-primary-600 mb-4">
            See it in action
          </p>
          <h2 className="font-serif text-navy text-[34px] leading-[1.1] sm:text-[46px] sm:leading-[1.06] tracking-[-0.02em] mb-4">
            One event. <span className="italic text-primary-600">Five framings.</span> Zero hidden bias.
          </h2>
          <p className="font-hanken text-base sm:text-lg text-secondary-500 leading-relaxed">
            The same story, told five different ways. Click any outlet to see the headline it
            used &mdash; what it emphasized, and what it quietly left out.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-8 items-stretch">
            {/* LEFT — raw event + spectrum navigator */}
            <div className="flex flex-col gap-6">
              {/* raw event */}
              <div className="rounded-2xl bg-navy p-5 sm:p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-hanken text-[10px] tracking-[0.2em] uppercase text-[#6EE7B7]">Raw event</span>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  <span className="font-hanken text-[10px] tracking-[0.14em] uppercase text-white/45">{EVENT.meta}</span>
                </div>
                <p className="font-serif text-2xl sm:text-[28px] leading-tight">{EVENT.title}</p>
                <p className="font-hanken text-[13px] text-white/55 mt-2 leading-relaxed">
                  The unframed fact, before any outlet decides how to tell it.
                </p>
              </div>

              {/* spectrum navigator */}
              <div className="rounded-2xl bg-white border border-line p-5 sm:p-6">
                <p className="font-hanken text-[10px] tracking-[0.18em] uppercase text-secondary-400 mb-5">
                  Outlet framing · across the spectrum
                </p>
                <div className="relative pt-2 pb-9">
                  {/* gradient track */}
                  <div
                    className="absolute left-0 right-0 top-[34px] h-[6px] rounded-full"
                    style={{ background: "linear-gradient(90deg,#3B82F6 0%,#94A3B8 50%,#DC2626 100%)" }}
                  />
                  {/* outlet chips */}
                  <div className="relative flex justify-between">
                    {FRAMINGS.map((f, i) => {
                      const isActive = i === active;
                      return (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => pick(i)}
                          aria-pressed={isActive}
                          aria-label={`${f.outlet} — ${f.leaning}`}
                          className="group relative flex flex-col items-center"
                          style={{ width: "clamp(48px,18%,72px)" }}
                        >
                          <span
                            className="grid place-items-center rounded-full bg-white transition-all duration-300"
                            style={{
                              width: isActive ? 52 : 40,
                              height: isActive ? 52 : 40,
                              border: `2.5px solid ${f.color}`,
                              boxShadow: isActive ? `0 0 0 4px ${f.color}22, 0 6px 18px -6px ${f.color}66` : "none",
                              transform: isActive ? "translateY(0)" : "translateY(2px)",
                            }}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={logoUrl(f.domain)}
                              alt=""
                              width={isActive ? 30 : 22}
                              height={isActive ? 30 : 22}
                              className="rounded-full object-cover"
                              style={{ width: isActive ? 30 : 22, height: isActive ? 30 : 22 }}
                            />
                          </span>
                          <span
                            className="font-hanken text-[10px] font-semibold tracking-wide mt-2 transition-colors duration-200"
                            style={{ color: isActive ? f.color : "#97A0AD" }}
                          >
                            {f.outlet}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center justify-between font-hanken text-[10px] tracking-[0.16em] uppercase text-secondary-400">
                  <span>Left</span>
                  <span>Center</span>
                  <span>Right</span>
                </div>
              </div>
            </div>

            {/* RIGHT — detail readout */}
            <div className="relative rounded-2xl bg-white border border-line p-6 sm:p-8 overflow-hidden">
              {/* leaning tint */}
              <div
                className="absolute inset-x-0 top-0 h-1.5"
                style={{ background: current.color }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, y: -14 }}
                  transition={{ duration: 0.4, ease: easeOutExpo }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="inline-flex items-center gap-1.5 font-hanken text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full"
                      style={{ color: current.color, background: `${current.color}14` }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: current.color }} />
                      {current.leaning}
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logoUrl(current.domain)}
                      alt=""
                      width={18}
                      height={18}
                      className="rounded-full"
                    />
                    <span className="font-hanken text-[13px] text-secondary-400">{current.outlet}</span>
                  </div>

                  <p className="font-serif text-navy text-[24px] sm:text-[30px] leading-[1.15] tracking-[-0.01em] mb-7">
                    &ldquo;{current.headline}&rdquo;
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-xl bg-surface-secondary p-4">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Eye className="w-3.5 h-3.5 text-primary-600" />
                        <span className="font-hanken text-[10px] font-semibold tracking-[0.16em] uppercase text-primary-600">
                          Emphasized
                        </span>
                      </div>
                      <p className="font-hanken text-[13.5px] text-navy leading-relaxed">{current.emphasis}</p>
                    </div>
                    <div className="rounded-xl bg-[#FFF7ED] p-4">
                      <div className="flex items-center gap-1.5 mb-2">
                        <EyeOff className="w-3.5 h-3.5 text-[#E0A030]" />
                        <span className="font-hanken text-[10px] font-semibold tracking-[0.16em] uppercase text-[#E0A030]">
                          Left out
                        </span>
                      </div>
                      <p className="font-hanken text-[13.5px] text-navy leading-relaxed">{current.omission}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-7 pt-5 border-t border-line flex flex-wrap items-center justify-between gap-3">
                <p className="font-hanken text-[11px] text-secondary-400 italic leading-snug">
                  Every framing is sourced from real coverage &mdash; never invented.
                </p>
                <Link
                  href={LINKS.perspectivity}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 font-hanken text-[13px] font-semibold text-navy"
                >
                  <span>Read today&rsquo;s stories this way</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EventPrismSection;
