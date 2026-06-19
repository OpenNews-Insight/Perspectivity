"use client";

import { FC } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/lib/motionfold";
import SectionBackdrop from "@/components/SectionBackdrop";
import VideoPlayer from "./VideoPlayer";
import { LINKS } from "@/lib/links";

const DemoSection: FC = () => {
  const demos = [
    { name: "Perspectivity", region: "United States", flag: "🇺🇸", videoSrc: LINKS.perspectivityYouTube, thumb: "https://img.youtube.com/vi/YVqdN4XWbWg/maxresdefault.jpg", href: LINKS.perspectivity },
    { name: "Drishtikon", region: "Bangladesh", flag: "🇧🇩", videoSrc: LINKS.drishtikonYouTube, thumb: "https://img.youtube.com/vi/X3_Tdz3np24/maxresdefault.jpg", href: LINKS.drishtikon },
  ];

  return (
    <section id="demo" className="relative overflow-hidden bg-white">
      <SectionBackdrop image="/assets/images/hero-press-room.jpg" />
      <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-[1180px] py-24 sm:py-32">
        <Reveal className="max-w-2xl mb-12 sm:mb-14">
          <p className="font-hanken text-[12px] font-semibold tracking-[0.22em] uppercase text-primary-600 mb-4">See it in action</p>
          <h2 className="font-serif text-navy text-[34px] leading-[1.1] sm:text-[44px] sm:leading-[1.08] tracking-[-0.02em] mb-4">
            Watch Perspectivity <span className="italic text-primary-600">think.</span>
          </h2>
          <p className="font-hanken text-base sm:text-lg text-secondary-500 leading-relaxed">
            Two products, one engine — live across the US and Bangladesh.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {demos.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.1}>
              <div className="group rounded-2xl border border-line bg-surface-secondary overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-30px_rgba(22,39,63,0.4)]">
                <div className="flex items-center justify-between px-5 sm:px-6 pt-5 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg leading-none">{d.flag}</span>
                    <div>
                      <div className="font-serif text-navy text-lg leading-tight">{d.name}</div>
                      <div className="font-hanken text-[12px] text-secondary-400">{d.region}</div>
                    </div>
                  </div>
                  <Link href={d.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-hanken text-[13px] font-semibold text-navy hover:text-primary-600 transition-colors">
                    Open app <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="px-3 pb-3">
                  <VideoPlayer videoSrc={d.videoSrc} thumbnailSrc={d.thumb} altText={`${d.name} demo`} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
