"use client";

import { FC } from "react";
import { cn } from "@/utils";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";
import { Github, Mail } from "lucide-react";
import SectionBackdrop from "@/components/SectionBackdrop";
import { LINKS } from "@/lib/links";

const JoinSection: FC = () => {
  const { ref, isVisible } = useSectionVisibility();

  return (
    <section
      ref={ref}
      className="relative bg-navy-deep overflow-hidden px-5 sm:px-10 md:px-20 py-16 sm:py-24"
    >
      <SectionBackdrop image="/assets/images/eanat/affiliation.jpg" dark />

      {/* Dot mesh background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(110,231,183,0.08) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Blur orbs */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#6EE7B7] rounded-full opacity-5 blur-3xl" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-[#6EE7B7] rounded-full opacity-5 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Eyebrow divider */}
        <div
          className={cn(
            "flex items-center justify-center gap-3 mb-4 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-[#6EE7B7]">
            Get Involved
          </p>
        </div>

        {/* Headline */}
        <h2
          className={cn(
            "font-serif text-heading-3-semibold text-white mb-4 transition-all duration-1000 delay-150",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          Collaborate with <span className="italic text-[#6EE7B7]">BanglaLLM</span>
        </h2>

        {/* Subtext */}
        <p
          className={cn(
            "font-hanken text-paragraph-lg-regular text-white/65 mb-8 transition-all duration-1000 delay-300",
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
            className="inline-flex items-center justify-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-6 py-3 font-hanken text-paragraph-md-medium text-white hover:bg-white/[0.1] hover:border-white/30 transition-all duration-300"
          >
            <Github size={18} />
            GitHub Org
          </a>

          {/* Email button */}
          <a
            href={LINKS.researchContactEmail}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 rounded-full px-6 py-3 font-hanken text-paragraph-md-medium text-navy transition-all duration-300 hover:scale-105"
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
