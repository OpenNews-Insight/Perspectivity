"use client";

import { FC } from "react";
import { cn } from "@/utils";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";
import { researchThemes } from "@/data/researchData";
import { Cpu, BarChart3, Database, Rocket } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  cpu: <Cpu size={24} />,
  "bar-chart": <BarChart3 size={24} />,
  database: <Database size={24} />,
  rocket: <Rocket size={24} />,
};

const ResearchThemesSection: FC = () => {
  const { ref, isVisible } = useSectionVisibility();

  return (
    <section
      ref={ref}
      className="relative bg-white px-5 sm:px-10 md:px-20 pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header with eyebrow */}
        <div className="text-center mb-12 md:mb-16">
          <div
            className={cn(
              "flex items-center justify-center gap-3 mb-3 transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-primary-600">
              What We Work On
            </p>
          </div>

          <h2
            className={cn(
              "font-serif text-heading-2-semibold text-navy mb-3 transition-all duration-1000 delay-150",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Research Themes
          </h2>

          <p
            className={cn(
              "font-hanken text-paragraph-lg-regular text-secondary-500 max-w-xl mx-auto transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Our work spans foundation models, benchmarks, data infrastructure,
            and real-world applications.
          </p>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {researchThemes.map((theme, index) => (
            <div
              key={theme.id}
              className={cn(
                "group relative rounded-2xl p-6 bg-surface-secondary border border-line hover:border-primary-300 hover:-translate-y-2 transition-all duration-500 hover:shadow-lg",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-4 text-white group-hover:text-[#6EE7B7] transition-colors duration-300">
                {iconMap[theme.icon] || <Cpu size={24} />}
              </div>

              {/* Accent line on hover */}
              <div className="h-0.5 w-8 bg-primary-500 rounded-full mb-4 group-hover:w-14 transition-all duration-500" />

              <h3 className="font-serif text-heading-5-semibold text-navy mb-2">
                {theme.name}
              </h3>
              <p className="font-hanken text-paragraph-md-regular text-secondary-500">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchThemesSection;
