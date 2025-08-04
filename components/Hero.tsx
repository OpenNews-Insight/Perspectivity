"use client";

import { useState, useEffect, FC } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/utils";
import Image from "next/image";

const Hero: FC = () => {
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
      image: "/assets/images/demo-image.png",
      tag: "Local",
      title:
        "Bangladesh secures 20% US tariff for garments, exporters relieved",
    },
    {
      image: "/assets/images/demo-image.png",
      tag: "Technology",
      title: "Uttara University Hosts 5th International Robo Tech Olympiad",
    },
    {
      image: "/assets/images/demo-image.png",
      tag: "Local",
      title: "Time for political parties to priorities disability rights",
    },
    {
      image: "/assets/images/demo-image.png",
      tag: "Local",
      title: "Fire at Gulistan Sundarban So Market under control",
    },
    {
      image: "/assets/images/demo-image.png",
      tag: "Local",
      title: "Fire at Gulistan Sundarban So Market under control",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-surface-secondary">
      <div className="max-w-[1060px] mx-auto px-5 text-center pt-[188px]">
        <div
          className={cn(
            "transition-all duration-1000 opacity-0 translate-y-10",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <div className="w-full flex items-center justify-center">
            <div className="w-max flex items-center justify-center bg-base-white border border-primary-100 rounded-[9999px] px-3 py-2">
              <p className="text-paragraph-sm-medium text-primary-500 transition-all duration-500 animate-fade-in-up">
                {slogans[currentSlogan]}
              </p>
            </div>
          </div>

          <h1 className="text-display-semibold text-secondary-800 my-6">
            Real Time{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text text-transparent">
              AI News Bias{" "}
            </span>
            Agent For Emerging Markets
          </h1>

          <p className="text-paragraph-lg-regular  text-secondary-700 mb-6">
            Perspectivity delivers multi-perspective news in your
            language—cutting through bias and language barriers. Designed for
            low-resource regions, our open-source platform gathers and analyzes
            local news in real time.
          </p>

          <div className="flex justify-center items-center gap-6">
            <Link
              href="https://drishtikon.life"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 border border-primary-400 rounded-[9999px] transition-all duration-300 hover:scale-105  flex items-center text-paragraph-md-medium text-base-white px-4 py-[10px]"
            >
              <span>Try Drishtokon Live</span>
            </Link>

            <Link
              href="https://drishtikon.life"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-primary-400 rounded-[9999px] transition-all duration-300 hover:scale-105  flex items-center text-paragraph-md-medium text-primary-400 px-4 py-[10px]"
            >
              <span>Watch Demo</span>
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
        className="pointer-events-none absolute left-0 right-0 bottom-0 h-[266px] max-h-[266px] z-10"
        style={{
          background:
            "linear-gradient(178.26deg, rgba(250, 250, 250, 0) 1.65%, #FAFAFA 98.71%)",
        }}
      />
      <div
        className={cn(
          "w-full py-12 overflow-x-auto -skew-y-6 mt-6 transition-all duration-1000 opacity-0 translate-y-10",
          isVisible && "opacity-100 translate-y-0"
        )}
      >
        <div className="flex gap-6 overflow-hidden skew-7">
          {newsData.map((item, idx) => (
            <div
              key={idx}
              className=" bg-base-white border border-[#E4E4E7] rounded-lg shadow-primary-50 shadow-md min-w-[320px] max-w-xs md:min-w-0 transition-transform hover:-translate-y-2 flex-shrink-0 p-4"
            >
              <div className="bg-surface-secondary border border-[#FFFFFF00] rounded-full w-max px-[10px] ">
                <span className="text-paragraph-sm-medium text-[12px] text-base-black uppercase">
                  {item.tag}
                </span>
              </div>
              <div className="w-full h-40 rounded-t-xl overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt="News"
                  width={320}
                  height={160}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-paragraph-md-medium text-secondary-800">
                  {item.title}
                </h3>
              </div>

              <div className="flex gap-2 px-4 pb-4 mt-auto">
                <div className="h-2 w-1/2 rounded-full bg-sky-300"></div>
                <div className="h-2 w-1/2 rounded-full bg-coral-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-primary-900 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-900 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
