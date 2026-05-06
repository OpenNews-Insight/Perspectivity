"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils";
import { TrendingUp } from "lucide-react";
import type { SourceInfo } from "@/lib/fetchNews";

interface TrendingTopicsProps {
  perspectivity: string[];
  drishtikon: string[];
  perspectivitySources: SourceInfo[];
  drishtikonSources: SourceInfo[];
}

const USFlag = () => (
  <svg viewBox="0 0 36 36" className="w-4 h-4 rounded-sm flex-shrink-0" aria-hidden>
    <rect fill="#B22234" width="36" height="36" />
    <rect fill="#fff" y="2.77" width="36" height="2.77" />
    <rect fill="#fff" y="8.31" width="36" height="2.77" />
    <rect fill="#fff" y="13.85" width="36" height="2.77" />
    <rect fill="#fff" y="19.38" width="36" height="2.77" />
    <rect fill="#fff" y="24.92" width="36" height="2.77" />
    <rect fill="#fff" y="30.46" width="36" height="2.77" />
    <rect fill="#3C3B6E" width="15.12" height="19.38" />
  </svg>
);

const BDFlag = () => (
  <svg viewBox="0 0 36 36" className="w-4 h-4 rounded-sm flex-shrink-0" aria-hidden>
    <rect fill="#006A4E" width="36" height="36" rx="2" />
    <circle fill="#F42A41" cx="16" cy="18" r="8" />
  </svg>
);

const SourceMarquee: FC<{ sources: SourceInfo[]; direction?: "left" | "right" }> = ({
  sources,
  direction = "left",
}) => {
  if (sources.length === 0) return null;

  const tripled = [...sources, ...sources, ...sources];

  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          "flex gap-3 w-max",
          direction === "left" ? "animate-marquee-left-slow" : "animate-marquee-right-slow",
        )}
      >
        {tripled.map((src, i) => (
          <div
            key={`${src.name}-${i}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gray-100 border border-gray-200 flex-shrink-0"
          >
            <Image
              src={src.logo!}
              alt={src.name}
              width={18}
              height={18}
              className="w-[18px] h-[18px] rounded-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <span className="text-paragraph-sm-medium text-secondary-700 whitespace-nowrap">
              {src.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TopicRow: FC<{
  label: string;
  flag: React.ReactNode;
  topics: string[];
  sources: SourceInfo[];
  isVisible: boolean;
  delayOffset?: number;
  marqueeDirection?: "left" | "right";
  accentColor?: string;
}> = ({ label, flag, topics, sources, isVisible, delayOffset = 0, marqueeDirection = "left", accentColor = "bg-secondary-900" }) => {
  if (topics.length === 0 && sources.length === 0) return null;

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        {flag}
        <span className="text-[11px] sm:text-xs font-semibold text-secondary-500 uppercase tracking-wider">
          {label}
        </span>
      </div>

      {/* Topic pills — top 3 highlighted */}
      {topics.length > 0 && (
        <div>
          <p className="text-[10px] sm:text-[11px] font-semibold text-secondary-400 uppercase tracking-widest mb-2">
            Trending Topics
          </p>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, i) => (
              <span
                key={topic}
                className={cn(
                  "px-3 py-1.5 rounded-full text-paragraph-sm-medium transition-all duration-500",
                  `${accentColor} text-white`,
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
                )}
                style={{
                  transitionDelay: isVisible ? `${(delayOffset + i) * 50}ms` : "0ms",
                }}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Source logos marquee */}
      {sources.length > 0 && (
        <div className="mt-4">
          <p className="text-[10px] sm:text-[11px] font-semibold text-secondary-400 uppercase tracking-widest mb-2">
            Newspapers We Analyze
          </p>
          <SourceMarquee sources={sources} direction={marqueeDirection} />
        </div>
      )}
    </div>
  );
};

const TrendingTopics: FC<TrendingTopicsProps> = ({
  perspectivity,
  drishtikon,
  perspectivitySources,
  drishtikonSources,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (perspectivity.length === 0 && drishtikon.length === 0) return null;

  return (
    <section ref={ref} className="container w-full px-5 sm:px-10 md:px-20 py-8 sm:py-12 mx-auto">
      <div
        className={cn(
          "bg-surface-secondary rounded-2xl p-6 sm:p-8 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}
      >
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-primary-600" />
          <h3 className="text-paragraph-md-medium text-secondary-900">
            Trending Right Now
          </h3>
          <span className="relative flex h-2 w-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <TopicRow
            label="Perspectivity — United States"
            flag={<USFlag />}
            topics={perspectivity}
            sources={perspectivitySources}
            isVisible={isVisible}
            marqueeDirection="left"
            accentColor="bg-secondary-900"
          />
          <hr className="border-gray-300" />
          <TopicRow
            label="Drishtikon — Bangladesh"
            flag={<BDFlag />}
            topics={drishtikon}
            sources={drishtikonSources}
            isVisible={isVisible}
            delayOffset={perspectivity.length}
            marqueeDirection="right"
            accentColor="bg-[#006A4E]"
          />
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
