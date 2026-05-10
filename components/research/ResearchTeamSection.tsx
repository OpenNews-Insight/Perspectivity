"use client";

import { FC } from "react";
import Image from "next/image";
import { cn } from "@/utils";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";
import { researchTeam } from "@/data/researchData";
import { Github, Globe } from "lucide-react";

const ResearchMemberCard: FC<{
  name: string;
  role: string;
  affiliation: string;
  initials: string;
  image?: string;
  links: { github?: string; website?: string };
  index: number;
  isVisible: boolean;
}> = ({
  name,
  role,
  affiliation,
  initials,
  image,
  links,
  index,
  isVisible,
}) => {
  return (
    <div
      className={cn(
        "group relative rounded-xl overflow-hidden bg-white border border-secondary-200 hover:border-secondary-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{
        transitionDelay: isVisible ? `${index * 120 + 300}ms` : "0ms",
      }}
    >
      {/* Photo */}
      <div className="relative w-full aspect-square bg-gradient-to-br from-secondary-800 to-secondary-900 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-300 flex items-center justify-center">
              <span className="text-lg font-bold text-white">{initials}</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Name */}
        <h4 className="text-paragraph-md-semibold text-secondary-900 leading-tight">
          {name}
        </h4>

        {/* Role badge */}
        <div className="inline-flex">
          <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
            {role}
          </span>
        </div>

        {/* Affiliation */}
        <p className="text-paragraph-sm-regular text-secondary-500 line-clamp-2">
          {affiliation}
        </p>

        {/* Links row */}
        {(links.github || links.website) && (
          <div className="flex gap-2 pt-3">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md bg-secondary-100 text-secondary-600 hover:bg-primary-100 hover:text-primary-600 transition-colors duration-200"
                title="GitHub"
              >
                <Github size={16} />
              </a>
            )}
            {links.website && (
              <a
                href={links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md bg-secondary-100 text-secondary-600 hover:bg-primary-100 hover:text-primary-600 transition-colors duration-200"
                title="Website"
              >
                <Globe size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ResearchTeamSection: FC = () => {
  const { ref, isVisible } = useSectionVisibility();

  return (
    <section
      ref={ref}
      className="relative bg-surface-secondary px-5 sm:px-10 md:px-20 pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden"
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
              Team
            </p>
            <div className="h-1 w-10 rounded-full bg-secondary-300" />
          </div>

          <h2
            className={cn(
              "text-heading-2-semibold text-secondary-900 mb-3 transition-all duration-1000 delay-150",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Research Team
          </h2>

          <p
            className={cn(
              "text-paragraph-lg-regular text-secondary-500 max-w-xl mx-auto transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Researchers and advisors building language technology for Bangla.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {researchTeam.map((member, index) => (
            <ResearchMemberCard
              key={member.name}
              {...member}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchTeamSection;
