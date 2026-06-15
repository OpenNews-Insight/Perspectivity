"use client";

import { FC, useState, useEffect } from "react";
import { cn } from "@/utils";

const ResearchHeroSection: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-secondary-950">
      {/* Dot mesh background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(16,185,129,0.15) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Blur orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-emerald-400 rounded-full opacity-5 blur-3xl" />
      <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-purple-500 rounded-full opacity-5 blur-3xl" />

      <div className="relative z-10 container mx-auto px-5 sm:px-10 md:px-20 pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow pill badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 bg-secondary-900 border border-secondary-700 rounded-full px-4 py-2 mb-6 transition-all duration-1000",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-paragraph-sm-medium text-secondary-200">
              BanglaLLM Research
            </span>
          </div>

          {/* H1 headline */}
          <h1
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-display-semibold font-semibold text-white mb-5 transition-all duration-1000 delay-150",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Building language technology
            <br className="hidden sm:block" />
            <span className="text-gradient">for Bangla</span>
          </h1>

          {/* Subtext paragraph */}
          <p
            className={cn(
              "text-paragraph-lg-regular text-secondary-300 max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            BanglaLLM is an independent, open research effort building language
            models for Bangla. We think there's a real difference between
            treating a language as an afterthought and designing for it from
            day one.
          </p>

          {/* Stats pills row */}
          <div
            className={cn(
              "flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {["31+ Models", "7+ Datasets", "3+ Papers"].map((stat) => (
              <span
                key={stat}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-paragraph-md-medium text-white/80 border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Curved SVG wave separator */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] sm:h-[60px] md:h-[80px]"
        >
          <path
            d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
};

export default ResearchHeroSection;
