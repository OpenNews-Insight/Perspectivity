"use client";

import { FC } from "react";
import Image from "next/image";
import { Reveal, CountUp } from "@/lib/motionfold";

const InformationCrisisSection: FC = () => {
  return (
    <section
      id="problem"
      className="px-5 sm:px-6 md:px-10 lg:px-20 my-12 sm:my-[80px] md:my-[120px] mx-auto container w-full"
    >
      <Reveal>
        <h2 className="text-paragraph-md-medium text-secondary-500 mb-6 sm:mb-8 text-center">
          THE GLOBAL NARRATIVE CRISIS
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-10">
        <Reveal>
          <div className="flex flex-col justify-between bg-surface-secondary p-5 sm:p-8 md:p-12 lg:p-16 rounded-3xl aspect-square mx-auto">
            <div className="flex flex-col items-center justify-center text-center h-full">
              <h2 className="text-heading-3-semibold text-secondary-900 mb-4 sm:mb-6 flex items-center gap-2 text-center">
                Media Narratives Shape Your Reality
              </h2>
              <div className="bg-gray-50 px-3 py-2 rounded-2xl max-w-full sm:max-w-[480px]">
                <div className="text-secondary-900 text-paragraph-sm-medium mb-2">
                  Real Impact
                </div>
                <div className="text-secondary-600 text-paragraph-sm-regular">
                  When a major event breaks, our AI agents compare how every
                  outlet frames it—revealing hidden bias, missing context, and
                  conflicting narratives.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="flex flex-col gap-6 md:gap-8 p-5 sm:p-8 md:p-12 lg:p-16 mx-auto w-full justify-center aspect-square">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 justify-end">
              <div className="bg-surface-secondary border border-secondary-100 text-secondary-500 text-paragraph-md-medium py-2.5 px-4 rounded-full w-full max-w-[265px] text-xs sm:text-sm md:text-base">
                <CountUp end={180} suffix="+" /> Countries Affected by Media Narrative Manipulation
              </div>
              <div className="relative w-[80px] sm:w-[100px] h-[60px] sm:h-[76px] bg-secondary-500 rounded-full flex justify-center items-center">
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
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex items-center gap-4 justify-start">
              <div className="bg-surface-secondary border border-secondary-100 text-secondary-900 text-heading-3-medium md:text-heading-1-medium py-1 md:py-2 px-4 rounded-full">
                <CountUp end={86} suffix="%" />
              </div>
              <div>
                <span className="text-paragraph-md-medium text-secondary-500 text-center">
                  of people can't identify biased news framing
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="w-full flex items-center gap-4 justify-between bg-secondary-900 px-5 py-2 rounded-full text-gray-50">
              <div className="text-heading-3-medium md:text-heading-1-medium">
                <CountUp end={5} suffix="B+" />
              </div>
              <div>
                <span className="text-paragraph-md-regular">
                  People exposed to manipulated narratives daily
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex items-center gap-4 justify-end">
              <div className="bg-surface-secondary border border-secondary-100 text-secondary-500 text-paragraph-md-medium py-2.5 px-4 rounded-full w-full max-w-[260px]">
                <CountUp end={2} suffix="+ Languages supported and growing" />
              </div>
              <div className="relative w-[80px] sm:w-[100px] h-[60px] sm:h-[76px] bg-secondary-500 rounded-full flex justify-center items-center">
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
          </Reveal>
        </div>
      </div>
    </section>
  );
};
export default InformationCrisisSection;
