"use client";

import { FC } from "react";
import { cn } from "@/utils";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";
import { Github, Mail } from "lucide-react";
import { LINKS } from "@/lib/links";

const JoinSection: FC = () => {
  const { ref, isVisible } = useSectionVisibility();

  return (
    <section
      ref={ref}
      className="relative bg-secondary-950 overflow-hidden px-5 sm:px-10 md:px-20 py-16 sm:py-24"
    >
      {/* Dot mesh background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(16,185,129,0.08) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Blur orbs */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-emerald-400 rounded-full opacity-5 blur-3xl" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-purple-500 rounded-full opacity-5 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Eyebrow divider */}
        <div
          className={cn(
            "flex items-center justify-center gap-3 mb-4 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="h-px w-12 bg-secondary-600" />
          <span className="text-paragraph-sm-medium text-secondary-400 uppercase tracking-wider">
            Get Involved
          </span>
          <div className="h-px w-12 bg-secondary-600" />
        </div>

        {/* Headline */}
        <h2
          className={cn(
            "text-heading-3-semibold text-white mb-4 transition-all duration-1000 delay-150",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          Collaborate with <span className="text-gray-300">BanglaLLM</span>
        </h2>

        {/* Subtext */}
        <p
          className={cn(
            "text-paragraph-lg-regular text-secondary-300 mb-8 transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          We're an open research group. Contributions, collaborations, and
          feedback are always welcome. The easiest way to get started is opening
          a GitHub issue or sending a pull request.
        </p>

        {/* CTA buttons */}
        <div
          className={cn(
            "flex flex-col sm:flex-row flex-wrap justify-center gap-4 transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* GitHub button */}
          <a
            href={LINKS.banglallmGitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-secondary-900 border border-secondary-700 rounded-full px-6 py-3 text-paragraph-md-medium text-white hover:bg-secondary-800 hover:border-secondary-600 transition-all duration-300"
          >
            <Github size={18} />
            GitHub Org
          </a>

          {/* Email button */}
          <a
            href={LINKS.researchContactEmail}
            className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 rounded-full px-6 py-3 text-paragraph-md-medium text-white transition-all duration-300 hover:scale-105"
          >
            <Mail size={18} />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
