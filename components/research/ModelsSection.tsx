"use client";

import { FC } from "react";
import { cn } from "@/utils";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";
import { modelFamilies, datasets } from "@/data/researchData";
import { ArrowRight } from "lucide-react";

const ModelsSection: FC = () => {
  const { ref, isVisible } = useSectionVisibility();

  return (
    <section
      ref={ref}
      className="relative bg-white px-5 sm:px-10 md:px-20 pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div
            className={cn(
              "flex items-center justify-center gap-3 mb-3 transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <div className="h-1 w-10 rounded-full bg-secondary-300" />
            <p className="text-paragraph-sm-medium text-secondary-500 uppercase tracking-wider">
              Models & Datasets
            </p>
            <div className="h-1 w-10 rounded-full bg-secondary-300" />
          </div>

          <h2
            className={cn(
              "text-heading-2-semibold text-secondary-900 mb-3 transition-all duration-1000 delay-150",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Open Research Artifacts
          </h2>

          <p
            className={cn(
              "text-paragraph-lg-regular text-secondary-500 max-w-xl mx-auto transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            31+ models and 7+ datasets on HuggingFace, all freely available.
          </p>
        </div>

        {/* Model Families */}
        <div className="mb-16">
          <h3
            className={cn(
              "text-heading-5-semibold text-secondary-900 mb-6 transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Model Families
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {modelFamilies.map((model, index) => (
              <a
                key={model.name}
                href={model.huggingFaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group rounded-2xl p-6 bg-secondary-950 border border-secondary-800 hover:border-primary-500 hover:-translate-y-2 hover:shadow-xl transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{
                  transitionDelay: isVisible ? `${index * 150 + 300}ms` : "0ms",
                }}
              >
                {/* Badge pill */}
                <span className="inline-block rounded-full px-3 py-1 bg-primary-900 text-primary-300 text-paragraph-sm-medium mb-4 border border-primary-700">
                  {model.badge}
                </span>

                {/* Title */}
                <h4 className="text-heading-5-semibold text-white mb-2">
                  {model.name}
                </h4>

                {/* Description */}
                <p className="text-paragraph-md-regular text-secondary-400 mb-4">
                  {model.description}
                </p>

                {/* Link with arrow */}
                <div className="flex items-center gap-2 text-primary-400 group-hover:gap-3 transition-all duration-300">
                  <span className="text-paragraph-sm-medium">
                    View on HuggingFace
                  </span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Datasets */}
        <div>
          <h3
            className={cn(
              "text-heading-5-semibold text-secondary-900 mb-6 transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Datasets
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {datasets.map((dataset, index) => (
              <a
                key={dataset.name}
                href={dataset.huggingFaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group rounded-2xl p-5 bg-surface-secondary border border-secondary-100 hover:border-primary-200 hover:-translate-y-1 hover:shadow-md transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{
                  transitionDelay: isVisible
                    ? `${(modelFamilies.length + index) * 150 + 300}ms`
                    : "0ms",
                }}
              >
                {/* Large size number */}
                <div className="text-heading-2-semibold text-secondary-900 mb-2">
                  {dataset.size}
                </div>

                {/* Dataset name in monospace */}
                <h4 className="text-paragraph-md-semibold text-secondary-700 mb-2 font-mono text-sm">
                  {dataset.name}
                </h4>

                {/* Description */}
                <p className="text-paragraph-sm-regular text-secondary-500">
                  {dataset.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
