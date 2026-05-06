"use client";

import React, { FC, useMemo, useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils";
import { LINKS } from "@/lib/links";

const FinalCTASection: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const features = useMemo(
    () => [
      "Real-Time Bias and Framing Analysis",
      "AI-Powered News Summaries",
      "Interactive Chat with Source-Backed Answers",
      "Multilingual News Coverage",
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="feedback"
      ref={ref}
      className="w-full container mx-auto bg-base-white md:border-b px-5 sm:py-16 lg:py-[120px] lg:ps-20"
    >
      <div
        className={cn(
          "flex flex-col-reverse md:flex-row gap-10 md:gap-8 md:items-center md:justify-between max-w-7xl mx-auto transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div className="flex-1 md:max-w-[47%]">
          <h2 className="text-center sm:text-left text-heading-4-medium sm:text-heading-1-medium text-secondary-900 mb-8">
            Ready to See Through{" "}
            <span className="block md:inline">the Narrative?</span>
          </h2>
          <ul className="mb-8 space-y-2 sm:space-y-5">
            {features.map((feature, i) => (
              <li
                className={`flex items-center gap-3 text-paragraph-lg-regular text-secondary-500 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                key={feature}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <div className="bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center">
                  <Check className="w-5 h-5 text-secondary-900 flex-shrink-0" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href={LINKS.supportEmail}
            className="bg-secondary-900 rounded-full transition-all duration-300 hover:bg-secondary-800 flex items-center text-paragraph-md-medium text-base-white px-4 py-2.5 w-max"
          >
            <span>Get in Touch</span>
          </Link>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full">
            <Image
              src="/assets/images/perspectivity-preview.png"
              alt="Perspectivity Dashboard"
              width={600}
              height={430}
              className="rounded-xl w-full h-auto object-contain shadow-lg transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: "400ms",
              }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
