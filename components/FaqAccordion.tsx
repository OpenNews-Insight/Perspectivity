"use client";

import { FC, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/lib/motionfold";
import SectionBackdrop from "@/components/SectionBackdrop";

const FAQ_ITEMS = [
  { q: "What is Perspectivity, and how is it different from other news platforms?", a: "One story, multiple perspectives, alternate realities. That's the internet today. You don't need more content; you need a map of the forces shaping it. Perspectivity is a narrative intelligence engine: it shows you who is pushing each narrative, not just what happened." },
  { q: "How does your bias detection actually work?", a: "It's AI-native, but it's grounded in evidence rather than vibes. We compare claims across hundreds of sources, map ownership, funding, and institutional ties behind each outlet, surface what's missing or disputed, and track how an actor's position shifts over time, so every judgment traces back to something you can check." },
  { q: "Why should I trust your summaries over reading the originals?", a: "Our summaries extract key facts from many sources, not one outlet's take, and flag where those sources disagree. You can always click through to the full articles. We enhance your understanding. We don't replace original reporting." },
  { q: "Why does media bias analysis matter now more than ever?", a: "People spend hours a day on news, YouTube, and social media and still come away confused, because algorithmic feeds hand everyone a different version of the same event. When everyone is competing to shape your reality, seeing the full picture takes tools, not more reading time." },
  { q: "How does Perspectivity make money?", a: "Subscriptions and advertising. The core analysis stays free and open to readers on the web and on mobile. The paid tier is for people who want the deeper narrative tracking, and advertising supports the rest." },
  { q: "What's your long-term vision?", a: "When everyone is competing to shape your reality, Perspectivity shows you the full picture. We're building the global standard for narrative intelligence, in every major market and every major language, so understanding who is shaping a story never depends on where you live or which language you read in." },
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
