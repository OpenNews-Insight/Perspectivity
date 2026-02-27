"use client";

import { useState, useEffect, FC } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/utils";
import Image from "next/image";

const HeroSection: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slogans = [
    "Every Story. Every Side. In Your Language.",
    "Uncover Every Angle Behind the Headlines.",
    "See the Divide. Grasp the Debate.",
    "News with Nuance—Faith, Power, and Politics.",
    "Where Perspectives Collide, Insight Emerges.",
  ];

  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slogans.length]);

  const newsData = [
    {
      image: "/assets/images/bangladesh.png",
      tag: "Bangladesh",
      title:
        "Bangladesh secures 20% US tariff for garments, exporters relieved",
    },
    {
      image: "/assets/images/world.png",
      tag: "World",
      title:
        "After Trump's announcement, now Russia-China joint naval exercise",
    },
    {
      image: "/assets/images/sports.png",
      tag: "Sports",
      title: "England batting at 65/1 chasing 374 runs against Shubman’s India",
    },
    {
      image: "/assets/images/politics.png",
      tag: "Political",
      title:
        "Election Commission is a spineless institution: Nasiruddin Patwary",
    },
    {
      image: "/assets/images/business.png",
      tag: "Business",
      title: "Apple's revenue has crossed 900 billion dollars",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-surface-secondary">
      <div className="container mx-auto w-full">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-5 text-center pt-24 sm:pt-[110px] md:pt-[188px]">
          <div
            className={cn(
              "transition-all duration-1000 opacity-0 translate-y-10",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            <div className="w-full flex items-center justify-center">
              <div className="w-max flex items-center justify-center bg-base-white border border-primary-100 rounded-full px-3 py-2">
                <p className="text-paragraph-sm-medium text-primary-500 transition-all duration-500 animate-fade-in-up text-base sm:text-lg md:text-xl">
                  {slogans[currentSlogan]}
                </p>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-display-semibold text-secondary-800 my-6">
              Expose{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text text-transparent">
                Media Bias{" "}
              </span>
              in Emerging Democracies
            </h1>

            <p className="text-sm sm:text-base md:text-paragraph-lg-regular text-secondary-700 mb-6 max-w-2xl mx-auto">
              Perspectivity delivers multi-perspective news in your
              language—cutting through bias and language barriers. Designed for
              low-resource regions, our open-source platform gathers and
              analyzes local news in real time.
            </p>

            {/* Product cards */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-5 mb-6">
              {/* Perspectivity (US) */}
              <Link
                href="https://app.perspectivity.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-[220px] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/15"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3C3B6E] to-[#1a1a4e] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <svg viewBox="0 0 36 36" className="w-full h-full" aria-hidden>
                    <rect fill="#B22234" width="36" height="36" />
                    <rect fill="#fff" y="2.77" width="36" height="2.77" />
                    <rect fill="#fff" y="8.31" width="36" height="2.77" />
                    <rect fill="#fff" y="13.85" width="36" height="2.77" />
                    <rect fill="#fff" y="19.38" width="36" height="2.77" />
                    <rect fill="#fff" y="24.92" width="36" height="2.77" />
                    <rect fill="#fff" y="30.46" width="36" height="2.77" />
                    <rect fill="#3C3B6E" width="15.12" height="19.38" />
                  </svg>
                </div>
                <div className="relative z-10 px-5 py-4 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-paragraph-md-medium text-white">Perspectivity</span>
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                      </span>
                      <span className="text-[11px] text-green-300 font-medium">LIVE</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 36 36" className="w-4 h-4 rounded-[3px] flex-shrink-0" aria-hidden>
                      <rect fill="#B22234" width="36" height="36" />
                      <rect fill="#fff" y="2.77" width="36" height="2.77" />
                      <rect fill="#fff" y="8.31" width="36" height="2.77" />
                      <rect fill="#fff" y="13.85" width="36" height="2.77" />
                      <rect fill="#fff" y="19.38" width="36" height="2.77" />
                      <rect fill="#fff" y="24.92" width="36" height="2.77" />
                      <rect fill="#fff" y="30.46" width="36" height="2.77" />
                      <rect fill="#3C3B6E" width="15.12" height="19.38" />
                    </svg>
                    <span className="text-[12px] text-white/60">United States</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-[12px] text-white/50 group-hover:text-white/80 transition-colors duration-300">
                    <span>Try it now</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>

              {/* Drishtikon (BD) */}
              <Link
                href="https://drishtikon.life"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-[220px] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/15"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#006A4E] to-[#004a36] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <svg viewBox="0 0 36 36" className="w-full h-full" aria-hidden>
                    <rect fill="#006A4E" width="36" height="36" />
                    <circle fill="#F42A41" cx="16" cy="18" r="8" />
                  </svg>
                </div>
                <div className="relative z-10 px-5 py-4 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-paragraph-md-medium text-white">Drishtikon</span>
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                      </span>
                      <span className="text-[11px] text-green-300 font-medium">LIVE</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 36 36" className="w-4 h-4 rounded-[3px] flex-shrink-0" aria-hidden>
                      <rect fill="#006A4E" width="36" height="36" rx="2" />
                      <circle fill="#F42A41" cx="16" cy="18" r="8" />
                    </svg>
                    <span className="text-[12px] text-white/60">Bangladesh</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-[12px] text-white/50 group-hover:text-white/80 transition-colors duration-300">
                    <span>Try it now</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Watch video link */}
            <div className="flex justify-center">
              <Link
                href="https://youtu.be/X3_Tdz3np24?si=DuuDo2EllWlxbUtI"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-primary-400 rounded-full transition-all duration-300 hover:scale-105 flex items-center text-paragraph-md-medium text-primary-400 px-4 py-2 sm:py-[10px] min-w-[180px] justify-center"
              >
                <span>Watch Why We Built This</span>

                <div className="relative w-5 h-5 rounded-lg ms-2">
                  <Image
                    src="/assets/icons/resume-icon.svg"
                    alt="Resume"
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute left-0 right-0 bottom-0 h-40 sm:h-[220px] md:h-[266px] max-h-[266px] z-10"
          style={{
            background:
              "linear-gradient(178.26deg, rgba(250, 250, 250, 0) 1.65%, #FAFAFA 98.71%)",
          }}
        />
        <div
          className={cn(
            "w-full py-6 sm:py-12 overflow-x-auto -skew-y-6 mt-6 transition-all duration-1000 opacity-0 translate-y-10",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <div className="flex gap-4 sm:gap-6 overflow-hidden min-w-0 skew-7 px-2 sm:px-0">
            {newsData.map((item, idx) => (
              <div
                key={idx}
                className="bg-base-white border border-[#E4E4E7] rounded-lg shadow-primary-50 shadow-md min-w-[260px] sm:min-w-[280px] md:min-w-[320px] max-w-xs transition-transform hover:-translate-y-2 flex-shrink-0 p-2 sm:p-4"
              >
                <div className="bg-surface-secondary border border-[#FFFFFF00] rounded-full w-max px-2 sm:px-[10px] mb-2">
                  <span className="text-paragraph-sm-medium text-[11px] sm:text-[12px] text-base-black uppercase">
                    {item.tag}
                  </span>
                </div>
                <div className="w-full h-32 sm:h-40 rounded-t-xl overflow-x-auto sm:overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt="News"
                    width={320}
                    height={160}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 sm:p-4 flex flex-col gap-2">
                  <h3 className="text-paragraph-md-medium text-secondary-800 text-sm sm:text-base">
                    {item.title}
                  </h3>
                </div>
                <div className="flex gap-1 sm:gap-2 px-2 sm:px-4 pb-2 sm:pb-4 mt-auto">
                  <div className="h-1 sm:h-2 w-1/2 rounded-full bg-sky-300"></div>
                  <div className="h-1 sm:h-2 w-1/2 rounded-full bg-coral-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-5 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary-900 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-900 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
