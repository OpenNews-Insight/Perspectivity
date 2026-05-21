"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import { LINKS } from "@/lib/links";

const DemoSection: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const appear = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";

  return (
    <section
      id="demo"
      ref={ref}
      className="container relative pb-[120px] pt-10 overflow-hidden flex flex-col items-center justify-center mx-auto"
    >
      {/* Rotated Badge */}
      <div
        className={`relative bg-gray-50 w-max border border-gray-200 shadow-sm p-3 rounded-full flex justify-start gap-3 items-center rotate-[10.35deg] mb-[90px] z-20
        transition-all duration-1000 ${appear}`}
        style={{ transitionDelay: "0.1s" }}
      >
        <div className="relative w-5 h-5 rounded-lg ms-2">
          <Image
            src="/assets/icons/resume-icon.svg"
            alt="Resume"
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>
        <p className="text-secondary-900 font-bold text-[20px] leading-[30px]">
          SEE IT IN ACTION
        </p>
        <div
          className={`absolute left-[45%] -translate-x-1/2 top-0 translate-y-1/2 z-10 pointer-events-none transition-all duration-1000
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
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

      <div
        className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1200px] transition-all duration-1000 ${appear}`}
        style={{ transitionDelay: "0.7s" }}
      >
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-lg font-semibold text-gray-800 tracking-wide">Perspectivity</h3>
          <VideoPlayer
            videoSrc={LINKS.perspectivityYouTube}
            thumbnailSrc={`https://img.youtube.com/vi/YVqdN4XWbWg/maxresdefault.jpg`}
            altText="Perspectivity demo"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-lg font-semibold text-gray-800 tracking-wide">Drishtikon</h3>
          <VideoPlayer
            videoSrc={LINKS.drishtikonYouTube}
            thumbnailSrc={`https://img.youtube.com/vi/X3_Tdz3np24/maxresdefault.jpg`}
            altText="Drishtikon demo"
          />
        </div>
      </div>
    </section>
  );
};
export default DemoSection;
