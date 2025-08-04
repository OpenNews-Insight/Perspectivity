"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils";

export default function Problem() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
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

  return (
    <section
      id="problem"
      ref={ref}
      className="px-5 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-[80px] md:py-[120px] mx-auto"
    >
      <h2 className="text-paragraph-md-medium text-primary-500 mb-6 sm:mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-10">
        <div
          className={cn(
            "flex flex-col justify-between  bg-surface-secondary p-4 sm:p-6 md:p-10 lg:p-20 rounded-3xl aspect-square mx-auto transition-all duration-1000",
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          )}
        >
          <div>
            <h2 className="text-heading-3-semibold text-secondary-800 mb-4 sm:mb-6">
              The Information Crisis in Emerging Markets
            </h2>
            <p className="text-paragraph-sm-regular sm:text-paragraph-md-regular mb-4 sm:mb-6">
              In countries like Bangladesh, local news is often biased,
              fragmented, and lost in language barriers. Citizens, NGOs, and
              global audiences struggle to find trustworthy information -
              especially during crises like elections or disasters. Traditional
              media rarely reveals its bias, making it hard to know what's true.
            </p>
          </div>
          <div className="bg-primary-50 px-3 py-2 rounded-2xl max-w-full sm:max-w-[480px]">
            <div className="text-primary-800 text-paragraph-sm-medium mb-2">
              Real Impact
            </div>
            <div className="text-primary-600 text-paragraph-sm-regular">
              When protests emerge at the local level, our agents flag those
              signals - helping NGOs and businesses respond early, and citizens
              understand the full context.
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex flex-col gap-6 md:gap-8 p-4 sm:p-6 md:p-10 lg:p-20 mx-auto  w-full justify-center aspect-square transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}
        >
          <div className="flex items-center gap-3 justify-end">
            <div className="bg-surface-secondary border border-secondary-100 text-secondary-700 text-paragraph-md-medium py-[10px] px-4 rounded-[9999px] w-full max-w-[245px] text-xs sm:text-sm md:text-base">
              64 Districts in Bangladesh Need Local News Insights
            </div>
            <div className="relative w-[60px] h-[60px] sm:w-[76px] sm:h-[76px]">
              <Image
                src="/assets/images/bd-map.png"
                alt="Bangladesh Map"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
          <div className="flex items-center gap-4 justify-start">
            <div className="bg-surface-secondary border border-secondary-100 text-secondary-800 text-heading-3-medium md:text-heading-1-medium py-1 md:py-2 px-4 rounded-[9999px]">
              80%
            </div>
            <div>
              <span className="text-paragraph-md-medium text-secondary-700">
                News lacks transparency
              </span>
            </div>
          </div>
          <div className="w-full flex items-center gap-4 justify-between bg-primary-500 px-5 py-2 rounded-[9999px] text-primary-50 ">
            <div className=" text-heading-3-medium md:text-heading-1-medium">
              200 M
            </div>
            <div>
              <span className="text-paragraph-md-regular">People Affected</span>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-end">
            <div className="bg-surface-secondary border border-secondary-100 text-secondary-700 text-paragraph-md-medium py-[10px] px-4 rounded-[9999px] w-full max-w-[260px]">
              15+ Languages underserved by current solutions
            </div>
            <div className="relative w-[80px] sm:w-[100px] h-[60px] sm:h-[76px] bg-primary-500 rounded-[9999px] flex justify-center items-center">
              <Image
                src="/assets/icons/team-website-icon.svg"
                alt="World Map"
                width={48}
                height={48}
                className="object-contain rounded-lg w-10 h-10 sm:w-12 sm:h-12"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
