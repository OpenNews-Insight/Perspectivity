"use client";

import { FC } from "react";
import Image from "next/image";
import { cn } from "@/utils";
import type { TeamMember, Department } from "@/data/teamData";

interface MemberCardProps {
  member: TeamMember;
  dept: Department;
  index: number;
  isVisible: boolean;
}

const MemberCard: FC<MemberCardProps> = ({ member, dept, index, isVisible }) => (
  <div
    className={cn(
      "transition-all duration-700 opacity-0 translate-y-8",
      isVisible && "opacity-100 translate-y-0",
    )}
    style={{ transitionDelay: isVisible ? `${index * 120 + 100}ms` : "0ms" }}
  >
    <div className="group relative rounded-2xl transition-all duration-500 hover:-translate-y-3">
      {/* Outer glow on hover */}
      <div
        className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"
        style={{ background: dept.glowColor }}
      />

      {/* Animated gradient border ring */}
      <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-30 group-hover:opacity-100 transition-opacity duration-500",
            dept.gradient,
          )}
        />
        {/* Spinning highlight on hover */}
        <div
          className={cn(
            "absolute -inset-full bg-gradient-conic opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-500",
            dept.gradient,
          )}
          style={{
            background: `conic-gradient(from 0deg, transparent, transparent 40%, var(--tw-gradient-from, #10b981), transparent 60%, transparent)`,
          }}
        />
      </div>

      {/* Card body with shine effect */}
      <div className="card-shine relative bg-white rounded-2xl overflow-hidden z-10 shadow-md group-hover:shadow-xl transition-shadow duration-500">
        {/* Gradient banner top */}
        <div
          className={cn(
            "relative h-20 sm:h-24 bg-gradient-to-br overflow-hidden",
            dept.gradient,
          )}
        >
          {/* Dot pattern on banner */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />
          {/* Decorative circles */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 -left-4 w-20 h-20 rounded-full bg-white/10" />
        </div>

        {/* Avatar overlapping banner/body */}
        <div className="flex justify-center -mt-11 sm:-mt-12 relative z-10">
          <div className="relative">
            {/* Pulsing ring behind avatar */}
            <div
              className={cn(
                "absolute -inset-1.5 rounded-full bg-gradient-to-br opacity-0 group-hover:opacity-100 avatar-ring-pulse transition-opacity duration-500",
                dept.gradient,
              )}
            />
            <div
              className={cn(
                "relative w-[84px] h-[84px] sm:w-[92px] sm:h-[92px] rounded-full overflow-hidden ring-[4px] ring-white shadow-lg group-hover:scale-105 transition-transform duration-500",
                !member.image && "bg-gradient-to-br flex items-center justify-center",
                !member.image && dept.gradient,
              )}
            >
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="text-xl sm:text-2xl font-bold text-white tracking-wide select-none">
                  {member.initials}
                </span>
              )}
            </div>
            {/* Status dot */}
            <div
              className={cn(
                "absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full border-[3px] border-white bg-gradient-to-br shadow-sm",
                dept.gradient,
              )}
            />
          </div>
        </div>

        {/* Info section */}
        <div className="px-5 sm:px-6 pt-4 pb-6 sm:pb-7 flex flex-col items-center text-center">
          <h3 className="text-heading-5-semibold text-secondary-900 mb-1.5 group-hover:text-secondary-900 transition-colors duration-300">
            {member.name}
          </h3>
          {/* Role as a pill */}
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-paragraph-sm-medium mt-1",
              "bg-gradient-to-r bg-clip-text text-transparent",
              dept.gradient,
            )}
          >
            {member.role}
          </span>
          {/* Bottom accent line */}
          <div
            className={cn(
              "mt-5 h-[2px] w-10 rounded-full bg-gradient-to-r opacity-30 group-hover:opacity-100 group-hover:w-16 transition-all duration-500",
              dept.gradient,
            )}
          />
        </div>
      </div>
    </div>
  </div>
);

export default MemberCard;
