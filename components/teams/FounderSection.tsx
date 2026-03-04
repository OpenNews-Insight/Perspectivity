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
                    className="w-9 h-9 rounded-full bg-white/40 border border-white/30 hover:bg-white/55 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110"
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
                    className="w-9 h-9 rounded-full bg-white/40 border border-white/30 hover:bg-white/55 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110"
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
                  {founder.links.huggingface && (
                    <Link
                      href={founder.links.huggingface}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/40 border border-white/30 hover:bg-white/55 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110"
                      title="Hugging Face"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path d="M10.7 2.1C7.5 2.5 5 5.3 5 8.6v.7c-1.2.8-2 2.2-2 3.7 0 1.3.5 2.4 1.4 3.2-.3 1.6.3 3.3 1.6 4.4 1.5 1.2 3.5 1.5 5.3.8l.7-.3.7.3c1.8.7 3.8.4 5.3-.8 1.3-1.1 1.9-2.8 1.6-4.4.9-.8 1.4-2 1.4-3.2 0-1.6-.8-3-2-3.7v-.7c0-3.3-2.5-6.1-5.7-6.5-.8-.1-1.6-.1-2.3 0zm1.1 1.9c.4-.1.9-.1 1.4 0 2.1.3 3.7 2.1 3.7 4.3v1.2l.6.3c.7.4 1.2 1.2 1.2 2.1 0 .8-.4 1.5-1 2l-.5.3.1.6c.3 1.1-.1 2.3-1 3.1-1 .8-2.3 1-3.4.5l-1-.4-1 .4c-1.2.5-2.5.3-3.4-.5-.9-.8-1.3-2-1-3.1l.1-.6-.5-.4c-.6-.4-1-1.1-1-1.9 0-1 .5-1.8 1.2-2.2l.6-.3V8.3c0-2.2 1.6-4 3.7-4.3zM9 9.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5S9.8 9.5 9 9.5zm6 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-6.5 5c0 .3.1.5.3.7C9.8 16.3 11 17 12 17s2.2-.7 3.2-1.8c.2-.2.3-.4.3-.7 0-.4-.3-.5-.6-.3-1 .7-1.9 1.3-2.9 1.3s-1.9-.6-2.9-1.3c-.3-.2-.6-.1-.6.3z" />
                      </svg>
                    </Link>
                  )}
                  {founder.links.paper && (
                    <Link
                      href={founder.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/40 border border-white/30 hover:bg-white/55 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110"
                      title="Research Paper"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-white"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    </Link>
                  )}
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
