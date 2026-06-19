"use client";

import { FC, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/lib/motionfold";
import SectionBackdrop from "@/components/SectionBackdrop";

const FAQ_ITEMS = [
  { q: "What is Perspectivity, and how is it different from other news platforms?", a: "Perspectivity doesn't just show you the news — it shows you how the news is being told. We aggregate coverage from hundreds of sources and reveal the bias, ownership, and framing behind each story. Think of it as X-ray vision for media narratives." },
  { q: "How does your bias detection actually work?", a: "We map media ownership, funding sources, and institutional connections — not AI guesswork. Our system tracks who owns each outlet, their editorial history, and coverage patterns, so you know exactly which interests a source represents." },
  { q: "Why should I trust your summaries over reading the originals?", a: "Our summaries extract key facts from many sources, not one outlet's take. You can always click through to the full articles. We enhance your understanding — we don't replace original reporting." },
  { q: "Why does media bias analysis matter now more than ever?", a: "With algorithmically curated feeds, most people live in information bubbles without realizing it. Studies show over 80% of readers can't identify narrative framing. Perspectivity gives you the tools to see past it and form your own conclusions." },
  { q: "What's your long-term vision?", a: "To build the global standard for media transparency. Starting with the US and South Asia, we're expanding to every major news market — because the right to understand media bias shouldn't depend on where you live." },
];

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
          {FAQ_ITEMS.map((item, i) => {
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
      </div>
    </section>
  );
};

export default FaqAccordion;
