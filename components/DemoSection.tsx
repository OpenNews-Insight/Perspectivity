"use client";

import { FC } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/lib/motionfold";
import SectionBackdrop from "@/components/SectionBackdrop";
import VideoPlayer from "./VideoPlayer";
import { LINKS } from "@/lib/links";

const DemoSection: FC = () => {
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
            One engine reading a live story, on the web and on mobile.
          </p>
        </Reveal>

        <Reveal>
          <div className="group mx-auto max-w-3xl rounded-2xl border border-line bg-surface-secondary overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-30px_rgba(22,39,63,0.4)]">
            <div className="flex items-center justify-between px-5 sm:px-6 pt-5 pb-3">
              <div className="font-serif text-navy text-lg leading-tight">Perspectivity</div>
              <Link href={LINKS.perspectivity} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-hanken text-[13px] font-semibold text-navy hover:text-primary-600 transition-colors">
                Open app <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="px-3 pb-3">
              <VideoPlayer
                videoSrc={LINKS.perspectivityYouTube}
                thumbnailSrc="https://img.youtube.com/vi/YVqdN4XWbWg/maxresdefault.jpg"
                altText="Perspectivity demo"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default DemoSection;
