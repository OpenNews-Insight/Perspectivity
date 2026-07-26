"use client";

import { FC, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";
import { cn } from "@/utils";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";
import { founders, type Founder } from "@/data/teamData";

const HuggingFaceIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M10.7 2.1C7.5 2.5 5 5.3 5 8.6v.7c-1.2.8-2 2.2-2 3.7 0 1.3.5 2.4 1.4 3.2-.3 1.6.3 3.3 1.6 4.4 1.5 1.2 3.5 1.5 5.3.8l.7-.3.7.3c1.8.7 3.8.4 5.3-.8 1.3-1.1 1.9-2.8 1.6-4.4.9-.8 1.4-2 1.4-3.2 0-1.6-.8-3-2-3.7v-.7c0-3.3-2.5-6.1-5.7-6.5-.8-.1-1.6-.1-2.3 0zm1.1 1.9c.4-.1.9-.1 1.4 0 2.1.3 3.7 2.1 3.7 4.3v1.2l.6.3c.7.4 1.2 1.2 1.2 2.1 0 .8-.4 1.5-1 2l-.5.3.1.6c.3 1.1-.1 2.3-1 3.1-1 .8-2.3 1-3.4.5l-1-.4-1 .4c-1.2.5-2.5.3-3.4-.5-.9-.8-1.3-2-1-3.1l.1-.6-.5-.4c-.6-.4-1-1.1-1-1.9 0-1 .5-1.8 1.2-2.2l.6-.3V8.3c0-2.2 1.6-4 3.7-4.3zM9 9.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5S9.8 9.5 9 9.5zm6 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-6.5 5c0 .3.1.5.3.7C9.8 16.3 11 17 12 17s2.2-.7 3.2-1.8c.2-.2.3-.4.3-.7 0-.4-.3-.5-.6-.3-1 .7-1.9 1.3-2.9 1.3s-1.9-.6-2.9-1.3c-.3-.2-.6-.1-.6.3z" />
  </svg>
);

const PaperIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

/** Only the links a founder actually has are rendered. */
function linksFor(person: Founder): { href: string; label: string; icon: ReactNode }[] {
  const { x, linkedin, github, huggingface, paper } = person.links;
  return [
    x && {
      href: x,
      label: "X",
      icon: (
        <div className="relative w-5 h-5">
          <Image src="/assets/icons/team-x-icon.svg" alt="X" fill className="object-contain" />
        </div>
      ),
    },
    linkedin && {
      href: linkedin,
      label: "LinkedIn",
      icon: (
        <div className="relative w-5 h-5">
          <Image
            src="/assets/icons/team-linkedin-icon.svg"
            alt="LinkedIn"
            fill
            className="object-contain"
          />
        </div>
      ),
    },
    github && { href: github, label: "GitHub", icon: <Github className="w-5 h-5" /> },
    huggingface && { href: huggingface, label: "Hugging Face", icon: <HuggingFaceIcon /> },
    paper && { href: paper, label: "Research Paper", icon: <PaperIcon /> },
  ].filter(Boolean) as { href: string; label: string; icon: ReactNode }[];
}

const FounderSection: FC = () => {
  const { ref, isVisible } = useSectionVisibility();
  const multiple = founders.length > 1;

  return (
    <section
      ref={ref}
      className="relative px-5 sm:px-10 md:px-20 pt-6 sm:pt-10 pb-20 sm:pb-28 bg-white overflow-hidden"
    >
      {/* Subtle mesh */}
      <div className="absolute inset-0 mesh-bg opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={cn(
            "text-center mb-10 md:mb-14 transition-all duration-1000",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10",
          )}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-1 w-10 rounded-full bg-primary-300" />
            <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-primary-600">
              {multiple ? "Founders" : "Founder"}
            </p>
            <div className="h-1 w-10 rounded-full bg-primary-300" />
          </div>
          <h2 className="font-serif text-heading-3-semibold text-navy mb-2">
            {multiple ? "The Visionaries Behind " : "The Visionary Behind "}
            <span className="italic text-primary-600">Perspectivity</span>
          </h2>
        </div>

        <div
          className={cn(
            "grid gap-6 mx-auto",
            multiple ? "grid-cols-1 md:grid-cols-2 max-w-4xl" : "max-w-2xl",
          )}
        >
          {founders.map((person, index) => (
            <div
              key={person.name}
              className={cn(
                "group transition-all duration-1000",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
              )}
              style={{
                transitionDelay: isVisible ? `${200 + index * 120}ms` : "0ms",
              }}
            >
              {/* Card with glow */}
              <div className="relative h-full">
                <div className="absolute -inset-2 bg-gradient-to-br from-primary-400/20 via-primary-300/20 to-primary-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative h-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-navy flex flex-col">
                  <div
                    className="h-48 sm:h-56 md:h-[400px] w-full relative bg-cover bg-center bg-no-repeat"
                    style={
                      person.image
                        ? { backgroundImage: `url('${person.image}')` }
                        : undefined
                    }
                  >
                    {/* No headshot — fall back to the initials. */}
                    {!person.image && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-soft to-navy-deep">
                        <span className="font-serif text-5xl text-white/80">
                          {person.initials}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-600 opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
                  </div>
                  <div className="relative p-5 sm:p-7 z-10 flex flex-col justify-between flex-1">
                    <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-[24px] z-0" />
                    <div className="relative z-10 flex flex-col">
                      <div className="mb-3">
                        <h3 className="font-serif text-heading-5-semibold text-white">
                          {person.name}
                        </h3>
                        <p className="font-hanken font-semibold text-paragraph-sm-medium text-[#6EE7B7]">
                          {person.role}
                        </p>
                      </div>
                      {person.description && (
                        <p className="font-hanken text-paragraph-md-regular text-white/65 mt-1">
                          {person.description}
                        </p>
                      )}
                    </div>
                    <div className="relative z-10 flex gap-3 mt-6">
                      {linksFor(person).map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={link.label}
                          className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] text-white/80 hover:text-[#6EE7B7] backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                          {link.icon}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
