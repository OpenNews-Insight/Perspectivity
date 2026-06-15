"use client";

import { FC } from "react";
import { cn } from "@/utils";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";
import { publications } from "@/data/researchData";
import { ExternalLink } from "lucide-react";

const PublicationsSection: FC = () => {
  const { ref, isVisible } = useSectionVisibility();

  const publishedPapers = publications.filter((p) => p.status === "published");
  const inProgressPapers = publications.filter(
    (p) => p.status === "in-progress"
  );

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
              Publications
            </p>
            <div className="h-1 w-10 rounded-full bg-secondary-300" />
          </div>

          <h2
            className={cn(
              "text-heading-2-semibold text-secondary-900 mb-3 transition-all duration-1000 delay-150",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Research Output
          </h2>
        </div>

        {/* Published papers */}
        <div className="mb-12">
          <h3
            className={cn(
              "text-heading-5-semibold text-secondary-900 mb-6 transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Published
          </h3>

          <div className="flex flex-col gap-5">
            {publishedPapers.map((paper, index) => (
              <div
                key={paper.id}
                className={cn(
                  "group relative rounded-2xl p-6 bg-white border border-secondary-100 hover:border-primary-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{
                  transitionDelay: isVisible ? `${index * 150 + 300}ms` : "0ms",
                }}
              >
                {/* Top row: badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="rounded-full px-3 py-1 bg-secondary-950 text-white text-paragraph-sm-medium">
                    {paper.venue}
                  </span>
                  <span className="rounded-full px-3 py-1 bg-primary-50 text-primary-700 text-paragraph-sm-medium border border-primary-200">
                    {paper.year}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-heading-5-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {paper.title}
                </h4>

                {/* Authors */}
                <p className="text-paragraph-sm-regular text-secondary-500 mb-3">
                  {paper.authors.map((author, i) => (
                    <span key={i}>
                      <span
                        className={
                          author.isLabMember
                            ? "font-semibold text-secondary-900"
                            : "text-secondary-500"
                        }
                      >
                        {author.name}
                      </span>
                      {i < paper.authors.length - 1 && ", "}
                    </span>
                  ))}
                </p>

                {/* Note */}
                {paper.note && (
                  <p className="text-paragraph-sm-regular text-secondary-400 italic mb-4">
                    {paper.note}
                  </p>
                )}

                {/* Links */}
                {Object.keys(paper.links).length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {paper.links.arxiv && (
                      <a
                        href={paper.links.arxiv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-paragraph-sm-medium text-primary-600 hover:text-primary-700 transition-colors duration-300"
                      >
                        arXiv
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {paper.links.acl && (
                      <a
                        href={paper.links.acl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-paragraph-sm-medium text-primary-600 hover:text-primary-700 transition-colors duration-300"
                      >
                        ACL Anthology
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                )}

                {/* Left accent border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* In-progress papers */}
        {inProgressPapers.length > 0 && (
          <div>
            <h3
              className={cn(
                "text-heading-5-semibold text-secondary-900 mb-6 transition-all duration-1000 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              In Progress
            </h3>

            <div className="flex flex-col gap-5">
              {inProgressPapers.map((paper, index) => (
                <div
                  key={paper.id}
                  className={cn(
                    "group relative rounded-2xl p-6 bg-white border border-secondary-100 hover:border-amber-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-500",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{
                    transitionDelay: isVisible
                      ? `${(publishedPapers.length + index) * 150 + 300}ms`
                      : "0ms",
                  }}
                >
                  {/* Badge: In Progress */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="rounded-full px-3 py-1 bg-amber-50 text-amber-700 text-paragraph-sm-medium border border-amber-200">
                      In Progress
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-heading-5-semibold text-secondary-900 mb-3">
                    {paper.title}
                  </h4>

                  {/* Note */}
                  {paper.note && (
                    <p className="text-paragraph-sm-regular text-secondary-500 mb-2">
                      {paper.note}
                    </p>
                  )}

                  {/* Coming soon */}
                  {paper.comingSoon && (
                    <p className="text-paragraph-sm-medium text-secondary-400">
                      {paper.comingSoon}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
