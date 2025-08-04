"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, FolderOpen, LinkIcon, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils";

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: "Abdullah Khan Zehady",
      role: "Founder & CEO",
      description:
        "ML infrastructure builder and BongLLaMA engineer. Built the first open-source Bangla LLM fine-tuned for civic NLP, available on Hugging Face with ArXiv publication.",
      image: "/api/placeholder/400/400",
      achievements: [
        "First open-source Bangla LLM (BongLLaMA)",
        "ArXiv publication on civic NLP",
        "Hugging Face model with 10K+ downloads",
      ],
      links: {
        github: "#",
        linkedin: "#",
        website: "#",
      },
      gradient: "from-blue-500 to-purple-600",
    },
    {
      name: "Roy Dipta",
      role: "Co-Founder & CTO",
      description:
        "LLM researcher focusing on bias detection and event processing pipelines. Specializes in multi-axis bias analysis for low-resource language contexts.",
      image: "/api/placeholder/400/400",
      achievements: [
        "Multi-axis bias detection framework",
        "Event processing pipeline architecture",
        "Low-resource language NLP specialist",
      ],
      links: {
        github: "#",
        linkedin: "#",
        website: "#",
      },
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  const journeyItems = [
    {
      icon: <BookOpen className="w-6 h-6 text-secondary-800" />,
      title: "Research Foundation",
      desc: "Published BongLLaMA research on ArXiv, establishing the technical foundation for civic NLP in Bangla",
    },
    {
      icon: <FolderOpen className="w-6 h-6 text-secondary-800" />,
      title: "Open Source Impact",
      desc: "Released first open-source Bangla LLM on Hugging Face with 10k+ downloads from researchers worldwide",
    },
    {
      icon: <LinkIcon className="w-6 h-6 text-secondary-800" />,
      title: "Live Pilot",
      desc: "Launched Drishtikon beta in Bangladesh, processing 200+ news sources across 4 districts",
    },
  ];
  const milestoneItems = [
    {
      period: "Q1 2025",
      title: "Complete Bangladesh market fit, onboard first NGO clients",
    },
    {
      period: "Q2 2025",
      title: "Scale to other low-resource countries in South Asia",
    },
    {
      period: "Q3 2025",
      title: "Launch enterprise API for diaspora and business intelligence",
    },
  ];

  return (
    <section
      id="team"
      className="px-20 py-[120px] bg-surface-secondary"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto ">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-paragraph-md-mMedium  text-primary-600 mb-3">
            Meet the Team
          </p>

          <h2 className="text-heading-3-semibold text-secondary-800 mb-3">
            Building the future of transparent
            <span className="text-primary-700"> journalism</span>
          </h2>

          <p className="text-paragraph-lg-regular text-secondary-700 w-full text-center">
            Our team combines deep technical expertise in NLP and AI with a
            mission to restore trust in news through transparency and
            multi-perspective analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-8 mt-20 mb-32">
          {team.map((member, index) => (
            <div
              key={index}
              className={cn(
                "group relative transition-all duration-1000 h-full opacity-0 translate-y-10",
                isVisible && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative rounded-2xl shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-man-1 h-full flex flex-col">
                <div className="h-64 w-full relative bg-cover bg-center">
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-15 transition-opacity duration-500",
                      member.gradient
                    )}
                  />
                </div>
                <div className="relative p-6 z-10 flex-1 flex flex-col justify-between">
                  <div className="absolute inset-0  bg-[#FFFFFF4D] backdrop-blur-[24px] border-t border-[#FFFFFF4D] z-0" />
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-heading-3-semibold text-base-white mb-4">
                      {member.name}
                    </h3>
                    <p className="text-paragraph-md-semibold text-base-white mb-1">
                      {member.role}
                    </p>
                    <p className="text-paragraph-md-regular text-base-white">
                      {member.description}
                    </p>
                  </div>
                  <div className="flex gap-5 mt-8">
                    <Link
                      href={member.links.github}
                      className="flex items-center space-x-3"
                    >
                      <div className="relative w-6 h-6 rounded-lg">
                        <Image
                          src="/assets/icons/team-x-icon.svg"
                          alt="X Logo"
                          fill
                          className="object-contain rounded-lg hover:scale-110"
                          priority
                        />
                      </div>
                    </Link>
                    <Link
                      href={member.links.linkedin}
                      className="flex items-center space-x-3"
                    >
                      <div className="relative w-6 h-6 rounded-lg">
                        <Image
                          src="/assets/icons/team-linkedin-icon.svg"
                          alt="Linkedin Logo"
                          fill
                          className="object-contain rounded-lg hover:scale-110"
                          priority
                        />
                      </div>
                    </Link>
                    <Link
                      href={member.links.website}
                      className="flex items-center space-x-3"
                    >
                      <div className="relative w-6 h-6 rounded-lg">
                        <Image
                          src="/assets/icons/team-website-icon.svg"
                          alt="Website Logo"
                          fill
                          className="object-contain rounded-lg hover:scale-110"
                          priority
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="w-full px-5 flex flex-col items-center">
        <h2 className="text-heading-3-semibold text-secondary-800 mb-3 text-center">
          Our Journey So Far
        </h2>
        <p className="text-paragraph-lg-regular text-secondary-700 mb-16 text-center">
          Our shared values keep us connected and guide us as one team.
        </p>

        <div className="w-full max-w-[1062px] grid grid-cols-1 sm:grid-cols-3 gap-8">
          {journeyItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <div className="border border-secondary-200 rounded-lg p-3 bg-transparent mb-8">
                {item.icon}
              </div>
              <h3 className="text-heading-5-semibold text-secondary-800 mb-2">
                {item.title}
              </h3>
              <p className="text-paragraph-md-regular text-secondary-700">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full pt-16 px-5 flex flex-col items-center">
        <h2 className="text-heading-3-semibold text-secondary-800 mb-14 text-center">
          Next Milestones
        </h2>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestoneItems.map((item) => (
            <div
              key={item.period}
              className="bg-white bg-opacity-90 border border-primary-200 rounded-2xl p-5 flex flex-col items-center text-center shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-6 h-6 text-primary-500" />
                <h3 className="text-heading-5-semibold text-secondary-800 my-2">
                  {item.period}
                </h3>
              </div>
              <p className="text-paragraph-md-regular text-secondary-700">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
