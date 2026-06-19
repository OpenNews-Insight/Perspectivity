"use client";

import { FC } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CountUp, easeOutExpo } from "@/lib/motionfold";

interface Stat { end: number; suffix?: string; label: string; note: string; accent: string; }

const STATS: Stat[] = [
  { end: 86, suffix: "%", label: "can't identify biased news framing", note: "Readers absorb the framing without noticing the slant.", accent: "#E0A030" },
  { end: 5, suffix: "B+", label: "people exposed to manipulated narratives daily", note: "Algorithmic feeds amplify spin, omission, and outright falsehoods.", accent: "#DC2626" },
  { end: 180, suffix: "+", label: "countries affected by narrative manipulation", note: "A global crisis of trust, not a local one.", accent: "#3B82F6" },
];

// headline tokens — "framing" is emphasized (green italic)
const HEADLINE: { t: string; em?: boolean }[] = [
  { t: "You're" }, { t: "not" }, { t: "reading" }, { t: "the" }, { t: "news." },
  { t: "You're" }, { t: "reading" }, { t: "a" }, { t: "framing", em: true }, { t: "of" }, { t: "it." },
];
const PARA1 = "Every outlet chooses what to emphasize, what to omit, and how to angle a story. When a major event breaks, the same facts become competing narratives — and most readers never see the seams.";

const wordContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.035 } } };
const wordVar = {
  hidden: { opacity: 0, y: "0.45em", filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: easeOutExpo } },
};
const reveal = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } } };
const viewport = { once: true, amount: 0.4 } as const;

const InformationCrisisSection: FC = () => {
  return (
    <section id="problem" className="bg-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-[1180px] py-24 sm:py-32">
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-16 items-start">
          {/* framing */}
          <div className="lg:sticky lg:top-28">
            <motion.p
              className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-primary-600 mb-4"
              initial="hidden" whileInView="visible" viewport={viewport} variants={reveal}
            >
              The Problem
            </motion.p>

            <h2 className="font-serif text-navy text-[34px] leading-[1.12] sm:text-[44px] sm:leading-[1.1] tracking-[-0.02em] mb-6">
              <motion.span variants={wordContainer} initial="hidden" whileInView="visible" viewport={viewport} className="inline">
                {HEADLINE.map((w, i) => (
                  <motion.span key={i} variants={wordVar} className={`inline-block ${w.em ? "italic text-primary-600" : ""}`}>
                    {w.t}&nbsp;
                  </motion.span>
                ))}
              </motion.span>
            </h2>

            <p className="font-hanken text-base sm:text-lg text-secondary-500 leading-relaxed mb-6">
              <motion.span variants={wordContainer} initial="hidden" whileInView="visible" viewport={viewport} className="inline">
                {PARA1.split(/\s+/).map((w, i) => (
                  <motion.span key={i} variants={wordVar} className="inline-block">
                    {w}&nbsp;
                  </motion.span>
                ))}
              </motion.span>
            </p>

            <motion.p
              className="font-hanken text-[15px] text-secondary-700 leading-relaxed mb-7"
              initial="hidden" whileInView="visible" viewport={viewport} variants={reveal}
            >
              Perspectivity compares how every outlet frames each event — revealing the
              hidden bias, the missing context, and the contradictions.
            </motion.p>

            <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={reveal}>
              <Link href="#platform" className="group inline-flex items-center gap-2 font-hanken font-semibold text-navy text-[15px]">
                <span>See how we map it</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* stats — alternate slide-in from the sides */}
          <div className="grid sm:grid-cols-1 gap-5">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="group relative rounded-2xl border border-line bg-surface-secondary p-6 sm:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-30px_rgba(22,39,63,0.4)]"
                initial={{ opacity: 0, x: i % 2 === 0 ? -36 : 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: i * 0.12 }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-5xl sm:text-6xl leading-none tracking-tight" style={{ color: s.accent }}>
                    <CountUp end={s.end} suffix={s.suffix} />
                  </span>
                  <span className="font-hanken text-secondary-900 font-medium text-base sm:text-lg leading-snug">{s.label}</span>
                </div>
                <p className="font-hanken text-[14px] text-secondary-500 leading-relaxed mt-3">{s.note}</p>
                <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full" style={{ background: s.accent }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationCrisisSection;
