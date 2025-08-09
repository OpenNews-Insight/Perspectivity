"use client";

import React, { FC, useMemo, useState } from "react";
import { cn } from "@/utils";
import Image from "next/image";

const FaqAccordion: FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const FAQ_ITEMS = useMemo(
    () => [
      {
        question:
          "What is Drishtikon and how is it different from other news platforms?",
        answer:
          "Drishtikon shows you not just what's happening, but who's telling the story and how they're framing it. We aggregate coverage from 200+ sources and reveal the bias, political leaning, and ownership behind each story. Think of it as having X-ray vision for news.",
      },
      {
        question: "How does your bias detection actually work?",
        answer:
          "We map media ownership and institutional connections—not AI guesswork. Our database tracks who owns each outlet, their political ties, and historical coverage patterns. When you see a story, you'll know exactly which interests each source represents.",
      },
      {
        question:
          "Why should I trust your summaries over reading original articles?",
        answer:
          "Our summaries extract key facts from multiple sources, not just one outlet's take. You can always click through to read full articles. We enhance your understanding—we don't replace original reporting.",
      },
      {
        question: "What makes this especially important for Bangladesh?",
        answer:
          "76% of Bangladeshis struggle with news literacy (UNICEF survey). With highly fragmented and politicized news sources, people get confused by conflicting headlines during elections, protests, or crises. Drishtikon gives citizens tools to navigate this complexity.",
      },
      {
        question: "What's your long-term vision beyond Bangladesh?",
        answer:
          "Bangladesh is our proving ground. Through our parent company Perspectivity, we're building technology for any democracy facing information fragmentation. Once perfected here, we'll expand to similar markets across Asia and Africa.",
      },
    ],
    []
  );

  return (
    <section
      id="faq"
      className="w-full container mx-auto py-10 sm:py-20 lg:py-[120px] flex flex-col items-center px-5"
    >
      <h2 className="text-paragraph-md-medium text-primary-500 mb-8 sm:mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-3xl space-y-3 sm:space-y-4">
        {FAQ_ITEMS.map((item, idx) => {
          const expanded = openIndex === idx;
          return (
            <div
              key={item.question}
              className={cn(
                "p-4 md:p-8 bg-primary-50 border border-primary-100 rounded-2xl flex gap-3 md:gap-6 cursor-pointer transition-all duration-400",
                !expanded && "bg-base-white"
              )}
              onClick={() => setOpenIndex(idx)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded}
            >
              <div
                className={cn(
                  "flex-shrink-0 flex items-start pt-1 transition-transform duration-200",
                  expanded ? "rotate-0" : "rotate-90"
                )}
              >
                {expanded ? (
                  <div className="relative w-6 h-6">
                    <Image
                      src="/assets/icons/circle-minus.svg"
                      alt="Close"
                      fill
                      className="object-contain rounded-lg"
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative w-6 h-6">
                    <Image
                      src="/assets/icons/plus-icon.svg"
                      alt="Add"
                      fill
                      className="object-contain rounded-lg"
                      priority
                    />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h5 className="text-heading-5-semibold text-primary-800">
                  {item.question}
                </h5>
                <div
                  className={cn(
                    "mt-2 overflow-hidden transition-all duration-400 [transition-property:margin,max-height,opacity]",
                    expanded
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0 mt-0"
                  )}
                >
                  <div className="text-paragraph-md-medium text-primary-600">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqAccordion;
