"use client";

import { FC, useEffect, useRef, useState } from "react";
import { cn } from "@/utils";

const steps = [
  {
    number: "01",
    title: "Aggregate",
    description: "Group stories from hundreds of outlets by event.",
  },
  {
    number: "02",
    title: "Analyze",
    description: "Score each source for framing and political lean.",
  },
  {
    number: "03",
    title: "Perspectivize",
    description: "Extract key claims from every outlet.",
  },
  {
    number: "04",
    title: "Compare",
    description: "See all framings side by side.",
  },
];

const HowItWorksSection: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
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

  // Sequentially reveal each step
  useEffect(() => {
    if (!isVisible) return;
    const timers: NodeJS.Timeout[] = [];
    steps.forEach((_, i) => {
      timers.push(setTimeout(() => setActiveStep(i), 400 + i * 400));
    });
    return () => timers.forEach(clearTimeout);
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="container w-full px-5 sm:px-10 md:px-20 mb-12 sm:mb-[80px] md:mb-[120px] mx-auto"
    >
      <div
        className={cn(
          "text-center mb-6 sm:mb-10 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}
      >
        <p className="text-[11px] sm:text-paragraph-sm-medium text-secondary-500 mb-2 uppercase tracking-wider">
          HOW IT WORKS
        </p>
        <h2 className="text-heading-5-semibold sm:text-heading-4-semibold text-secondary-900">
          Four Steps to Full Clarity
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Connector line segments — each fills when its step activates */}
        <div className="hidden md:flex absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px] gap-0">
          {[0, 1, 2].map((seg) => (
            <div key={seg} className="flex-1 overflow-hidden">
              <div
                className="h-full bg-secondary-900 origin-left transition-transform ease-out"
                style={{
                  transform: activeStep >= seg + 1 ? "scaleX(1)" : "scaleX(0)",
                  transitionDuration: "600ms",
                }}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-5">
          {steps.map((step, i) => {
            const revealed = activeStep >= i;
            const isCurrent = activeStep === i;

            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number circle */}
                <div
                  className={cn(
                    "relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                    revealed
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0",
                    revealed
                      ? "bg-secondary-900 border-2 border-secondary-900"
                      : "bg-surface-secondary border border-secondary-200",
                    isCurrent && "shadow-[0_0_20px_rgba(0,0,0,0.15)]",
                  )}
                  style={{
                    transitionDelay: !revealed ? "0ms" : "0ms",
                  }}
                >
                  <span
                    className={cn(
                      "text-paragraph-md-medium transition-colors duration-300",
                      revealed ? "text-white" : "text-secondary-900",
                    )}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={cn(
                    "text-paragraph-lg-medium text-secondary-900 mb-1.5 transition-all duration-500 ease-out",
                    revealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3",
                  )}
                  style={{ transitionDelay: revealed ? "150ms" : "0ms" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className={cn(
                    "text-paragraph-sm-regular text-secondary-500 max-w-[240px] transition-all duration-500 ease-out",
                    revealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3",
                  )}
                  style={{ transitionDelay: revealed ? "250ms" : "0ms" }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
