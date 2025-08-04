"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

export default function Demo() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Demo screenshots
  const screenshots = [
    {
      src: "/assets/images/screen1.jpeg",
      alt: "Drishtikon news aggregation dashboard",
    },
    {
      src: "/assets/images/screen2.jpeg",
      alt: "Multi-axis bias analysis interface",
    },
    { src: "/assets/images/screen3.jpeg", alt: "Regional news mapping view" },
    {
      src: "/assets/images/screen4.jpeg",
      alt: "Interactive news chat feature",
    },
    {
      src: "/assets/images/screen5.jpeg",
      alt: "Trend analytics visualization",
    },
    { src: "/assets/images/screen6.jpeg", alt: "Local language summary feeds" },
    {
      src: "/assets/images/screen7.jpeg",
      alt: "District-level news distribution",
    },
    {
      src: "/assets/images/screen8.jpeg",
      alt: "Civic signal detection dashboard",
    },
    {
      src: "/assets/images/screen9.jpeg",
      alt: "News source bias visualization",
    },
    {
      src: "/assets/images/screen10.jpeg",
      alt: "Real-time sentiment tracking",
    },
    { src: "/assets/images/screen11.jpeg", alt: "Comprehensive news overview" },
  ];

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

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

  const demoFeatures = [
    "Real-time district-level news mapping",
    "Multi-axis bias visualization",
    "Interactive chat with news context",
    "Trend analytics across regions",
    "Local language summary feeds",
    "Civic signal detection",
  ];

  return (
    <section
      id="demo"
      ref={ref}
      className="relative pb-[120px] pt-10 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Rotated Badge */}
      <div className="relative bg-primary-50 w-max border border-border-primary-100 shadow-primary-50 p-3 rounded-[9999px] flex justify-start gap-3 items-center rotate-[10.35deg] mb-[90px] z-20">
        <div className="relative w-5 h-5 rounded-lg ms-2">
          <Image
            src="/assets/icons/resume-icon.svg"
            alt="Resume"
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>
        <p className="text-primary-500 font-bold text-[20px] leading-[30px] font-bradley">
          SEE PERSPECTIVITY IN ACTION
        </p>
        <div className="absolute left-[45%] -translate-x-1/2 top-0 translate-y-1/2 z-10 pointer-events-none">
          <div className="relative w-[48px] h-[100px]">
            <Image
              src="/assets/icons/connecting-line.svg"
              alt="Connecting line"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <VideoPlayer
        videoSrc="https://www.loom.com/embed/3f5e1e09fdda48aa8c10157ada5bee70?sid=bbc6376a-a513-410f-b6c4-90b2d1aca624"
        thumbnailSrc="/assets/images/thumbnail.png"
        altText="Demonstration video"
      />
    </section>
  );
}
