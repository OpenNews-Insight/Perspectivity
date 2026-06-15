"use client";

import React, { FC, useMemo, useState, useEffect, useRef } from "react";
import { cn } from "@/utils";
import Image from "next/image";

const FaqAccordion: FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const FAQ_ITEMS = useMemo(
    () => [
      {
        question:
          "What is Perspectivity and how is it different from other news platforms?",
        answer:
          "Perspectivity doesn't just show you the news—it shows you how the news is being told. We aggregate coverage from hundreds of sources worldwide and reveal the bias, ownership, and framing behind each story. Think of it as X-ray vision for media narratives.",
      },
      {
        question: "How does your bias detection actually work?",
        answer:
          "We map media ownership, funding sources, and institutional connections—not AI guesswork. Our system tracks who owns each outlet, their editorial history, and coverage patterns. When you see a story, you'll know exactly which interests each source represents.",
      },
      {
        question:
          "Why should I trust your summaries over reading original articles?",
        answer:
          "Our summaries extract key facts from multiple sources, not just one outlet's take. You can always click through to read full articles. We enhance your understanding—we don't replace original reporting.",
      },
      {
        question: "Why does media bias analysis matter now more than ever?",
        answer:
          "With the rise of algorithmically curated feeds, most people live in information bubbles without realizing it. Studies show over 80% of readers can't identify narrative framing in news. Perspectivity gives you tools to see past the framing and form your own conclusions.",
      },
      {
        question: "What's your long-term vision?",
        answer:
          "We're building the global standard for media transparency. Starting with the US and South Asia, we're expanding to cover every major news market—because the right to understand media bias shouldn't depend on where you live.",
      },
    ],
    []
  );

  return (
    <section
      id="faq"
      ref={ref}
      className="w-full container mx-auto py-10 sm:py-20 lg:py-[120px] flex flex-col items-center px-5"
    >
      <h2
        className={cn(
          "text-paragraph-md-medium text-secondary-500 mb-8 sm:mb-12 text-center transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        )}
      >
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-3xl space-y-3 sm:space-y-4">
        {FAQ_ITEMS.map((item, idx) => {
          const expanded = openIndex === idx;
          return (
            <div
              key={item.question}
              className={cn(
                "p-4 md:p-8 bg-gray-50 border border-gray-200 rounded-2xl flex items-start gap-3 md:gap-6 cursor-pointer transition-all duration-500",
                !expanded && "bg-base-white",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              )}
              style={{ transitionDelay: isVisible ? `${200 + idx * 100}ms` : "0ms" }}
              onClick={() => setOpenIndex(idx)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded}
            >
              <div
                className={cn(
                  "flex-shrink-0 flex items-center justify-center w-6 h-6 mt-0.5 transition-transform duration-200"
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
                <h5 className="text-paragraph-md-medium sm:text-heading-5-semibold text-secondary-900">
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
                  <div className="text-paragraph-sm-regular sm:text-paragraph-md-regular text-secondary-600">
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
