"use client";

import { FC, useState, useEffect } from "react";
import { cn } from "@/utils";
import { departments } from "@/data/teamData";

interface TeamHeroSectionProps {
  totalMembers: number;
}

const TeamHeroSection: FC<TeamHeroSectionProps> = ({ totalMembers }) => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-secondary-950">
      {/* Mesh dot pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(16,185,129,0.15) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating gradient orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-gray-400 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-gray-500 rounded-full opacity-10 blur-3xl" />

      <div className="relative z-10 container mx-auto px-5 sm:px-10 md:px-20 pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Pill badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 bg-secondary-900 border border-secondary-700 rounded-full px-4 py-2 mb-6 transition-all duration-1000",
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6",
            )}
          >
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
            <span className="text-paragraph-sm-medium text-secondary-200">
              {totalMembers} people building the future of news
            </span>
          </div>

          <h1
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-display-semibold font-semibold text-white mb-5 transition-all duration-1000 delay-150",
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            Meet the{" "}
            <span className="text-gray-300">Minds</span>{" "}
            Behind
            <br className="hidden sm:block" /> Perspectivity
          </h1>

          <p
            className={cn(
              "text-paragraph-lg-regular text-secondary-300 max-w-xl mx-auto mb-10 transition-all duration-1000 delay-300",
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            Engineers, researchers, marketers, and creators — united by the
            mission to restore trust in news through transparency and
            multi-perspective analysis.
          </p>

          {/* Department pills */}
          <div
            className={cn(
              "flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-500",
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            {departments.map((dept) => (
              <span
                key={dept.name}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-paragraph-sm-medium text-white/80 border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <span
                  className={cn(
                    "w-2 h-2 rounded-full bg-gradient-to-r",
                    dept.gradient,
                  )}
                />
                {dept.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
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

export default TeamHeroSection;
