"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";

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

  // --- Animation classes
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
          SEE PERSPECTIVITY IN ACTION
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
        className={`w-full flex items-center justify-center transition-all duration-1000 ${appear}`}
        style={{ transitionDelay: "0.7s" }}
      >
        <VideoPlayer
          videoSrc="https://www.loom.com/embed/3f5e1e09fdda48aa8c10157ada5bee70?sid=bbc6376a-a513-410f-b6c4-90b2d1aca624"
          thumbnailSrc="/assets/images/thumbnail.png"
          altText="Demonstration video"
        />
      </div>
    </section>
  );
};
export default DemoSection;
