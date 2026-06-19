"use client";

import { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

const comparisons = [
  {
    source: "Outlet A",
    bias: "Left-Center",
    biasColor: "#5580BD",
    headline: "Government Announces Historic Climate Investment Package",
    framing: "Focuses on environmental benefits and job creation",
  },
  {
    source: "Outlet B",
    bias: "Center",
    biasColor: "#E8E8E8",
    headline: "White House Unveils Multibillion-Dollar Climate Spending Plan",
    framing: "Balanced coverage of costs and projected outcomes",
  },
  {
    source: "Outlet C",
    bias: "Right-Center",
    biasColor: "#B24C55",
    headline: "Administration Pushes Costly Climate Agenda Amid Budget Concerns",
    framing: "Emphasizes fiscal impact and taxpayer burden",
  },
];

const ComparisonShowcase: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(1);
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

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="container w-full px-5 sm:px-10 md:px-20 py-12 sm:py-20 mx-auto"
    >
      <div
        className={cn(
          "text-center mb-10 sm:mb-14 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}
      >
        <p className="text-paragraph-md-medium text-secondary-500 mb-2 md:mb-3">
          SAME EVENT, DIFFERENT NARRATIVES
        </p>
        <h2 className="text-heading-3-semibold text-secondary-900 mb-3">
          One Story. Three Framings.
        </h2>
        <p className="text-paragraph-lg-regular text-secondary-500 max-w-2xl mx-auto">
          See how different outlets shape the same event — what they emphasize,
          what they omit, and why it matters.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {comparisons.map((item, i) => (
            <div
              key={item.source}
              className={cn(
                "relative rounded-2xl border p-5 sm:p-6 transition-all duration-500 cursor-pointer",
                activeCard === i
                  ? "border-secondary-300 bg-white shadow-lg scale-[1.02]"
                  : "border-gray-200 bg-gray-50 hover:bg-white hover:border-secondary-200",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              )}
              style={{
                transitionDelay: isVisible ? `${i * 150}ms` : "0ms",
              }}
              onMouseEnter={() => setActiveCard(i)}
            >
              {/* Bias badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-paragraph-sm-medium text-secondary-600">
                  {item.source}
                </span>
                <span
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: item.biasColor,
                    color: item.biasColor === "#E8E8E8" ? "#374151" : "#ffffff",
                  }}
                >
                  {item.bias}
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-paragraph-md-medium text-secondary-900 mb-3 leading-snug">
                &ldquo;{item.headline}&rdquo;
              </h3>

              {/* Framing note */}
              <p className="text-paragraph-sm-regular text-secondary-500 italic">
                {item.framing}
              </p>

              {/* Active indicator */}
              <div
                className={cn(
                  "absolute bottom-0 left-4 right-4 h-[3px] rounded-full transition-all duration-500",
                  activeCard === i ? "opacity-100" : "opacity-0",
                )}
                style={{ backgroundColor: item.biasColor }}
              />
            </div>
          ))}
        </div>

        {/* Animated bias spectrum bar */}
        <div className="mt-8 sm:mt-10">
          <div className="relative h-2 rounded-full bg-gradient-to-r from-[#2D5A9B] via-[#5580BD] via-[#E8E8E8] via-[#B24C55] to-[#8B3340]">
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg"
              initial={false}
              animate={{
                left: activeCard === 0 ? "20%" : activeCard === 1 ? "50%" : "80%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                backgroundColor: comparisons[activeCard].biasColor,
              }}
            />
          </div>

          {/* Spectrum labels with active highlight */}
          <div className="flex items-center justify-between mt-3 text-[11px] sm:text-xs text-secondary-500">
            {[
              { label: "Left", color: "#2D5A9B", position: 0 },
              { label: "Left-Center", color: "#5580BD", position: 0 },
              { label: "Center", color: "#E8E8E8", position: 1 },
              { label: "Right-Center", color: "#B24C55", position: 2 },
              { label: "Right", color: "#8B3340", position: 2 },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-1.5"
                animate={{
                  opacity: item.position === activeCard ? 1 : 0.6,
                  scale: item.position === activeCard ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonShowcase;
