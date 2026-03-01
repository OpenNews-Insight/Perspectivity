"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";
import { founder } from "@/data/teamData";

const FounderSection: FC = () => {
  const { ref, isVisible } = useSectionVisibility();

  return (
    <section
      ref={ref}
      className="relative px-5 sm:px-10 md:px-20 pt-6 sm:pt-10 pb-20 sm:pb-28 bg-white overflow-hidden"
    >
      {/* Subtle mesh */}
      <div className="absolute inset-0 mesh-bg opacity-50" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={cn(
            "text-center mb-10 md:mb-14 transition-all duration-1000",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10",
          )}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-1 w-10 rounded-full bg-secondary-300" />
            <p className="text-paragraph-sm-medium text-secondary-500 uppercase tracking-wider">
              Founder
            </p>
            <div className="h-1 w-10 rounded-full bg-secondary-300" />
          </div>
          <h2 className="text-heading-3-semibold text-secondary-900 mb-2">
            The Visionary Behind{" "}
            <span className="text-gradient">Perspectivity</span>
          </h2>
        </div>

        <div
          className={cn(
            "group max-w-2xl mx-auto transition-all duration-1000",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10",
          )}
          style={{
            transitionDelay: isVisible ? "200ms" : "0ms",
          }}
        >
          {/* Card with glow */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-gray-400/20 via-gray-300/20 to-gray-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-man-1 flex flex-col">
              <div className="h-48 sm:h-56 md:h-[400px] w-full relative bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-600 opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
              </div>
              <div className="relative p-5 sm:p-7 z-10 flex flex-col justify-between">
                <div className="absolute inset-0 bg-[#FFFFFF4D] backdrop-blur-[24px] border-t border-[#FFFFFF4D] z-0" />
                <div className="relative z-10 flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-heading-5-semibold text-base-white">
                      {founder.name}
                    </h3>
                    <p className="text-paragraph-sm-medium text-white/80">
                      {founder.role}
                    </p>
                  </div>
                  <p className="text-paragraph-md-regular text-white/90 mt-1">
                    {founder.description}
                  </p>
                </div>
                <div className="relative z-10 flex gap-3 mt-6">
                  <Link
                    href={founder.links.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <div className="relative w-5 h-5">
                      <Image
                        src="/assets/icons/team-x-icon.svg"
                        alt="X"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                  <Link
                    href={founder.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <div className="relative w-5 h-5">
                      <Image
                        src="/assets/icons/team-linkedin-icon.svg"
                        alt="LinkedIn"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
