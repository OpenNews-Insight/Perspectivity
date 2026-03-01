"use client";

import { FC } from "react";
import { cn } from "@/utils";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";
import type { Department } from "@/data/teamData";
import MemberCard from "./MemberCard";

interface DepartmentSectionProps {
  dept: Department;
  index: number;
  isLastDept: boolean;
}

const DepartmentSection: FC<DepartmentSectionProps> = ({ dept, index, isLastDept }) => {
  const { ref, isVisible } = useSectionVisibility();
  const isEven = index % 2 === 0;

  const bgClass = isEven ? "bg-white" : "bg-surface-secondary";

  return (
    <section
      ref={ref}
      className={cn(
        "relative px-5 sm:px-10 md:px-20 pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden",
        bgClass,
      )}
    >
      {/* Decorative gradient orb */}
      <div
        className={cn(
          "absolute w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl pointer-events-none",
          isEven ? "-top-40 -right-40" : "-bottom-40 -left-40",
        )}
        style={{
          background: `linear-gradient(135deg, ${dept.glowColor}, transparent)`,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Department header */}
        <div
          className={cn(
            "mb-10 md:mb-14 transition-all duration-1000",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10",
          )}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className={cn(
                "h-1 w-10 rounded-full bg-gradient-to-r",
                dept.gradient,
              )}
            />
            <p
              className={cn(
                "text-paragraph-sm-medium uppercase tracking-wider bg-gradient-to-r bg-clip-text text-transparent",
                dept.gradient,
              )}
            >
              {dept.name}
            </p>
          </div>
          <p className="text-paragraph-lg-regular text-secondary-600 max-w-lg">
            {dept.description}
          </p>
        </div>

        {/* Members grid */}
        <div
          className={cn(
            "grid gap-5 md:gap-6",
            dept.members.length <= 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-2xl"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {dept.members.map((member, memberIndex) => (
            <MemberCard
              key={`${dept.name}-${member.name}`}
              member={member}
              dept={dept}
              index={memberIndex}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      {/* Curved bottom divider into next section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="relative block w-full h-[30px] sm:h-[40px] md:h-[60px]"
        >
          <path
            d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z"
            fill={isLastDept ? "#23272E" : isEven ? "#FAFAFA" : "#FFFFFF"}
          />
        </svg>
      </div>
    </section>
  );
};

export default DepartmentSection;
