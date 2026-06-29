"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Reveal } from "@/lib/motionfold";
import SectionBackdrop from "@/components/SectionBackdrop";
import { FAQS } from "@/lib/faqs";

const FaqAccordion: FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-surface-secondary">
      <SectionBackdrop image="/assets/images/eanat/narrative.jpg" />
      <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-[820px] py-24 sm:py-32">
        <Reveal className="text-center mb-12 sm:mb-14">
          <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-primary-600 mb-4">Questions</p>
          <h2 className="font-serif text-navy text-[34px] leading-[1.1] sm:text-[44px] sm:leading-[1.08] tracking-[-0.02em]">Frequently asked.</h2>
        </Reveal>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="rounded-2xl border bg-white transition-colors duration-300" style={{ borderColor: isOpen ? "#10B981" : "#E4E7EC" }}>
                  <button type="button" onClick={() => setOpen(isOpen ? null : i)} className="flex items-center justify-between gap-4 w-full text-left p-5 sm:p-6" aria-expanded={isOpen}>
                    <span className="font-serif text-navy text-lg sm:text-xl leading-snug">{item.q}</span>
                    <span className="grid place-items-center w-8 h-8 rounded-full bg-surface-secondary border border-line flex-shrink-0">
                      {isOpen ? <Minus className="w-4 h-4 text-primary-600" /> : <Plus className="w-4 h-4 text-secondary-500" />}
                    </span>
                  </button>
                  <div className="grid transition-all duration-400 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className="font-hanken text-secondary-500 leading-relaxed px-5 sm:px-6 pb-5 sm:pb-6">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 text-center">
            <Link href="/methodology" className="group inline-flex items-center gap-1.5 font-hanken text-[14px] font-semibold text-navy">
              <span>Read the full methodology &mdash; Bias-Agents, OpenNewsInsight &amp; BanglaLLM</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FaqAccordion;
