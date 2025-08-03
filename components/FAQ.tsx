"use client";

import React, { FC, useMemo, useState } from "react";
import { cn } from "@/utils";
import Image from "next/image";

const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const FAQ_ITEMS = useMemo(
    () => [
      {
        question: "Is this really free?",
        answer:
          "Absolutely! Enjoy a hassle-free experience with zero fees, no commission, and absolutely no hidden charges.",
      },
      {
        question: "FAQ 2",
        answer: "Answer for FAQ 2 goes here.",
      },
      {
        question: "FAQ 3",
        answer: "Answer for FAQ 3 goes here.",
      },
      {
        question: "FAQ 4",
        answer: "Answer for FAQ 4 goes here.",
      },
      {
        question: "FAQ 5",
        answer: "Answer for FAQ 5 goes here.",
      },
    ],
    []
  );

  return (
    <section className="w-full py-10 sm:py-20 lg:py-[120px] flex flex-col items-center px-5">
      <h2 className="text-paragraph-md-medium text-primary-500 mb-8 sm:mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-3xl space-y-3 sm:space-y-4">
        {FAQ_ITEMS.map((item, idx) => (
          <div
            key={item.question}
            className={cn(
              "p-4 md:p-8 bg-primary-50 border border-primary-100 rounded-2xl flex gap-3 md:gap-6 cursor-pointer",
              openIndex !== idx && "bg-base-white"
            )}
            onClick={() => setOpenIndex(idx)}
          >
            <div className="flex-shrink-0 flex items-start pt-1">
              {openIndex === idx ? (
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
            <div>
              <h5 className="text-heading-5-semibold text-primary-800">
                {item.question}
              </h5>
              {openIndex === idx && (
                <div className="text-paragraph-md-medium text-primary-600 mt-2 transition-all duration-200">
                  {item.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
