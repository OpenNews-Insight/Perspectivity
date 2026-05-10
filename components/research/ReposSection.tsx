"use client";

import { FC } from "react";
import { cn } from "@/utils";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";
import { repos } from "@/data/researchData";
import { ArrowRight } from "lucide-react";

// GitHub Octocat SVG Icon
function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const ReposSection: FC = () => {
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
              Open Source
            </p>
            <div className="h-1 w-10 rounded-full bg-secondary-300" />
          </div>

          <h2
            className={cn(
              "text-heading-2-semibold text-secondary-900 mb-3 transition-all duration-1000 delay-150",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            GitHub Repositories
          </h2>

          <p
            className={cn(
              "text-paragraph-lg-regular text-secondary-500 max-w-xl mx-auto transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            All our code is publicly available. Contributions welcome!
          </p>
        </div>

        {/* Repos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {repos.map((repo, index) => (
            <a
              key={repo.name}
              href={repo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group rounded-2xl p-5 bg-surface-secondary border border-secondary-100 hover:border-secondary-300 hover:-translate-y-2 hover:shadow-lg transition-all duration-500 flex flex-col justify-between",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: isVisible ? `${index * 150 + 300}ms` : "0ms",
              }}
            >
              {/* Top: GitHub icon + repo name */}
              <div className="flex items-start gap-3 mb-3">
                {/* GitHub icon in rounded square */}
                <div className="w-9 h-9 rounded-lg bg-secondary-950 flex items-center justify-center flex-shrink-0 text-white">
                  <GitHubIcon />
                </div>

                <span className="text-paragraph-sm-semibold text-secondary-700 font-mono text-sm group-hover:text-secondary-900 transition-colors duration-300 break-all">
                  {repo.name}
                </span>
              </div>

              {/* Description */}
              <p className="text-paragraph-sm-regular text-secondary-500 mb-4 flex-1">
                {repo.description}
              </p>

              {/* Topic tags */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full px-2 py-0.5 bg-primary-50 text-primary-700 text-[11px] font-medium border border-primary-100"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              {/* Arrow link */}
              <div className="flex items-center gap-1 mt-auto text-secondary-400 group-hover:text-secondary-900 transition-colors duration-300">
                <span className="text-paragraph-sm-medium">View repo</span>
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReposSection;
