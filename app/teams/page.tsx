"use client";

import { FC, useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/utils";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image?: string;
}

interface Department {
  name: string;
  description: string;
  gradient: string;
  glowColor: string;
  members: TeamMember[];
}

const founder = {
  name: "Abdullah Khan Zehady (Aninda)",
  role: "Founder & CEO",
  description:
    "ML infrastructure builder and BongLLaMA engineer. Built the first open-source Bangla LLM fine-tuned for civic NLP, available on Hugging Face with ArXiv publication.",
  initials: "AK",
  links: {
    x: "https://x.com/brishtiteveja",
    linkedin: "https://www.linkedin.com/in/abdullah-khan-zehady-915ba024/",
  },
};

const departments: Department[] = [
  {
    name: "Development Team",
    description: "Building the platform that powers transparent journalism",
    gradient: "from-blue-500 to-cyan-400",
    glowColor: "rgba(56, 152, 236, 0.15)",
    members: [
      { name: "Minhajul Islam Tapadar", role: "Founding Software Engineer", initials: "MJ",image: "/assets/images/team/minhaj.png" },
      { name: "Naymul Islam", role: "Founding Software Engineer", initials: "NY",image: "/assets/images/team/naimul.jpeg" },
      { name: "Naim Lasker", role: "Founding Software Engineer", initials: "NM",image: "/assets/images/team/naim-lasker.jpeg" },
    ],
  },
  {
    name: "Research Team",
    description: "Pushing the boundaries of NLP for low-resource languages",
    gradient: "from-purple-500 to-violet-400",
    glowColor: "rgba(139, 92, 246, 0.15)",
    members: [
      { name: "Abdullah Khan Zehady", role: "Researcher", initials: "AN",image: "/assets/images/team/aninda.jpeg" },
      { name: "Shubhashis Roy Dipta", role: "Researcher", initials: "SD",image: "/assets/images/team/dipta.jpeg" },
      { name: "Nusrat Jahan Lia", role: "Researcher", initials: "NL",image: "/assets/images/team/lia.jpeg" },
      { name: "Naymul Islam", role: "Researcher", initials: "NY",image: "/assets/images/team/naimul.jpeg" },
      { name: "Opu Chakraborty", role: "Researcher", initials: "OC",image: "/assets/images/team/opu.jpeg" },
    ],
  },

  {
    name: "Content Creators",
    description: "Crafting stories that educate and inspire action",
    gradient: "from-pink-500 to-rose-400",
    glowColor: "rgba(236, 72, 153, 0.15)",
    members: [
      { name: "Taibur Rahman", role: "Content Creator", initials: "TB",image: "/assets/images/team/taibur.png" },
      { name: "Mostare Mahajabin", role: "Content Creator", initials: "MM" },
      { name: "Anika Afroz Saba", role: "Content Creator", initials: "SB",image: "/assets/images/team/saba.jpeg" },
    ],
  },
  {
    name: "Marketing",
    description: "Spreading the mission to every corner of the world",
    gradient: "from-orange-500 to-amber-400",
    glowColor: "rgba(249, 115, 22, 0.15)",
    members: [
      { name: "Arif Hossain", role: "Marketing", initials: "AR" ,image: "/assets/images/team/arif.jpg" },
      { name: "Mostare Mahajabin", role: "Marketing", initials: "MS"},
    ],
  },
];

function useSectionVisibility(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

const MemberCard: FC<{
  member: TeamMember;
  dept: Department;
  index: number;
  isVisible: boolean;
}> = ({ member, dept, index, isVisible }) => (
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
            background: `conic-gradient(from 0deg, transparent, transparent 40%, var(--tw-gradient-from, #3b82f6), transparent 60%, transparent)`,
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
          <h3 className="text-heading-5-semibold text-secondary-800 mb-1.5 group-hover:text-secondary-900 transition-colors duration-300">
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

const DepartmentSection: FC<{
  dept: Department;
  index: number;
  isLastDept: boolean;
}> = ({ dept, index, isLastDept }) => {
  const { ref, isVisible } = useSectionVisibility();
  const isEven = index % 2 === 0;

  const bgClass = isEven ? "bg-white" : "bg-surface-secondary";
  const nextBgClass = isEven ? "fill-surface-secondary" : "fill-white";

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
              : dept.members.length <= 3
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
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
            fill={isLastDept ? "#082F49" : isEven ? "#FAFAFA" : "#FFFFFF"}
          />
        </svg>
      </div>
    </section>
  );
};

const TeamsPage: FC = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const { ref: founderRef, isVisible: founderVisible } = useSectionVisibility();

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const totalMembers = new Set([
    founder.name,
    ...departments.flatMap((d) => d.members.map((m) => m.name)),
  ]).size;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-950">
        {/* Mesh dot pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(56,152,236,0.15) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Floating gradient orbs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-primary-500 rounded-full opacity-10 blur-3xl animate-float" />
        <div
          className="absolute bottom-10 -right-32 w-80 h-80 bg-cyan-400 rounded-full opacity-10 blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite reverse" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full opacity-[0.05] blur-3xl" />

        <div className="relative z-10 container mx-auto px-5 sm:px-10 md:px-20 pt-28 sm:pt-36 pb-16 sm:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Pill badge */}
            <div
              className={cn(
                "inline-flex items-center gap-2 bg-primary-900 border border-primary-700 rounded-full px-4 py-2 mb-6 transition-all duration-1000",
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6",
              )}
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-paragraph-sm-medium text-primary-200">
                {totalMembers} people building the future of news
              </span>
            </div>

            <h1
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl lg:text-display-semibold font-semibold text-white mb-5 transition-all duration-1000 delay-150",
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              )}
            >
              Meet the{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                Minds
              </span>{" "}
              Behind
              <br className="hidden sm:block" /> Perspectivity
            </h1>

            <p
              className={cn(
                "text-paragraph-lg-regular text-primary-200 max-w-xl mx-auto mb-10 transition-all duration-1000 delay-300",
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              )}
            >
              Engineers, researchers, marketers, and creators — united by the
              mission to restore trust in news through transparency and
              multi-perspective analysis.
            </p>

            {/* Department pills */}
            <div
              className={cn(
                "flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-500",
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              )}
            >
              {departments.map((dept) => (
                <span
                  key={dept.name}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-paragraph-sm-medium text-white/80 border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors duration-300",
                  )}
                >
                  <span
                    className={cn(
                      "w-2 h-2 rounded-full bg-gradient-to-r",
                      dept.gradient,
                    )}
                  />
                  {dept.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="relative block w-full h-[40px] sm:h-[60px] md:h-[80px]"
          >
            <path
              d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* ── Founder Section ── */}
      <section
        ref={founderRef}
        className="relative px-5 sm:px-10 md:px-20 pt-6 sm:pt-10 pb-20 sm:pb-28 bg-white overflow-hidden"
      >
        {/* Subtle mesh */}
        <div className="absolute inset-0 mesh-bg opacity-50" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div
            className={cn(
              "text-center mb-10 md:mb-14 transition-all duration-1000",
              founderVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10",
            )}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
              <p className="text-paragraph-sm-medium text-primary-600 uppercase tracking-wider">
                Founder
              </p>
              <div className="h-1 w-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
            </div>
            <h2 className="text-heading-3-semibold text-secondary-800 mb-2">
              The Visionary Behind{" "}
              <span className="text-gradient">Perspectivity</span>
            </h2>
          </div>

          <div
            className={cn(
              "group max-w-2xl mx-auto transition-all duration-1000",
              founderVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10",
            )}
            style={{
              transitionDelay: founderVisible ? "200ms" : "0ms",
            }}
          >
            {/* Card with glow */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-man-1 flex flex-col">
                <div className="h-48 sm:h-56 md:h-[400px] w-full relative bg-cover bg-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
                </div>
                <div className="relative p-5 sm:p-7 z-10 flex flex-col justify-between">
                  <div className="absolute inset-0 bg-[#FFFFFF4D] backdrop-blur-[24px] border-t border-[#FFFFFF4D] z-0" />
                  <div className="relative z-10 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center ring-2 ring-white/50">
                        <span className="text-sm font-semibold text-white">
                          {founder.initials}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-heading-5-semibold text-base-white">
                          {founder.name}
                        </h3>
                        <p className="text-paragraph-sm-medium text-white/80">
                          {founder.role}
                        </p>
                      </div>
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

      {/* ── Department Sections ── */}
      {departments.map((dept, index) => (
        <DepartmentSection
          key={dept.name}
          dept={dept}
          index={index}
          isLastDept={index === departments.length - 1}
        />
      ))}

      {/* ── Bottom CTA strip ── */}
      <section className="relative bg-primary-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(56,152,236,0.15) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-cyan-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-purple-500 rounded-full opacity-10 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-5 py-16 sm:py-24">
          <h2 className="text-heading-3-semibold text-white mb-4">
            Want to join our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
              mission
            </span>
            ?
          </h2>
          <p className="text-paragraph-lg-regular text-primary-200 mb-8 max-w-lg mx-auto">
            We&apos;re always looking for passionate people who care about
            transparent journalism and AI for social good.
          </p>
          <Link
            href="mailto:support@perspectivity.co"
            className="inline-flex items-center bg-primary-500 border border-primary-400 rounded-full px-6 py-3 text-paragraph-md-medium text-base-white hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-500/25"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamsPage;
