"use client";

import { FC } from "react";
import Image from "next/image";
import { Reveal } from "@/lib/motionfold";

const FeaturesSection: FC = () => {
  return (
    <section
      id="features"
      className="container w-full px-5 sm:px-10 md:px-20 pb-10 sm:pb-[120px] mx-auto"
    >
      <div className="text-center mb-12 md:mb-16">
        <Reveal>
          <div className="mb-10 sm:mb-[56px] max-w-6xl mx-auto">
            <p className="text-paragraph-md-medium text-secondary-500 mb-2 md:mb-3">
              POWERED BY AI
            </p>
            <h2 className="text-heading-3-semibold text-secondary-900 mb-2 md:mb-3">
              Multi-Perspective News Meets Conversational AI
            </h2>
            <p className="text-paragraph-lg-regular text-secondary-500 w-full text-center">
              Powerful AI agents working together to reveal who controls the narrative, and what every outlet chooses
              to hide or highlight.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* 1 - News Aggregation */}
          <Reveal delay={0} className="col-span-1 sm:col-span-4 md:row-span-2">
            <div className="bg-secondary-950 border border-secondary-800 rounded-2xl p-6 relative flex flex-col justify-between min-h-[280px] h-full shadow-lg">
              <div className="relative w-[56px] h-[56px] bg-secondary-800 rounded-full flex justify-center items-center">
                <Image
                  src="/assets/icons/sparkel-icon.svg"
                  alt="World Map"
                  width={28}
                  height={28}
                  className="object-contain rounded-lg w-7 h-7"
                  priority
                />
              </div>
              <div className="relative h-auto sm:h-[350px] rounded-full flex justify-center items-center">
                <Image
                  src="/assets/icons/design-image.svg"
                  alt="Design"
                  fill
                  className="object-contain rounded-lg w-full"
                  priority
                />
              </div>
              <div>
                <h3 className="text-gray-50 text-heading-5-semibold mt-[14px] mb-2">
                  News Aggregation AI Agent
                </h3>
                <p className="text-gray-300 md:text-paragraph-md-regular">
                  Pulls stories from TV, print, web, and social into one
                  unified feed — every angle, one place.
                </p>
              </div>
            </div>
          </Reveal>
          {/* 2 - Summarizer */}
          <Reveal delay={0.1} className="col-span-1 sm:col-span-3">
            <div className="relative rounded-2xl p-6 bg-surface-secondary flex flex-col justify-between h-full">
              <div className="relative w-[56px] h-[56px] bg-surface-primary rounded-full flex justify-center items-center z-10">
                <Image
                  src="/assets/icons/summeriser.svg"
                  alt="Summarizer Icon"
                  width={32}
                  height={32}
                  className="object-contain rounded-lg w-8 h-8"
                  priority
                />
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-0">
                <Image
                  src="/assets/images/image-8.png"
                  alt="Summarizer Visual"
                  width={165}
                  height={96}
                  className="object-contain rounded-lg w-[100px] sm:w-[165px] h-[56px] sm:h-[96px]"
                  priority
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-secondary-900 text-heading-5-semibold mb-2">
                  Summarizer
                </h3>
                <p className="text-secondary-500 text-paragraph-md-regular">
                  Every article, stripped to what actually matters.
                </p>
              </div>
            </div>
          </Reveal>
          {/* 3 - Interactive Chat */}
          <Reveal delay={0.2} className="col-span-1 sm:col-span-5">
            <div className="relative rounded-2xl p-6 bg-surface-secondary flex flex-col justify-between h-full">
              <div className="relative w-[56px] h-[56px] bg-surface-primary rounded-full flex justify-center items-center z-10">
                <Image
                  src="/assets/icons/chat.svg"
                  alt="Chat Icon"
                  width={32}
                  height={32}
                  className="object-contain rounded-lg w-8 h-8"
                  priority
                />
              </div>
              <div className="absolute top-0 right-0 z-0">
                <Image
                  src="/assets/images/image-9.png"
                  alt="Chat Visual"
                  width={250}
                  height={240}
                  className="object-contain rounded-lg w-[150px] sm:w-[250px] h-[150px] sm:h-[240px]"
                  priority
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-secondary-900 text-heading-5-semibold mb-2">
                  Interactive Chat
                </h3>
                <p className="text-secondary-500 text-paragraph-md-regular">
                  Ask questions, get sourced answers — not opinions.
                </p>
              </div>
            </div>
          </Reveal>
          {/* 4 - Multi-Axis Bias Analysis */}
          <Reveal delay={0.3} className="col-span-1 sm:col-span-5">
            <div className="relative rounded-2xl p-6 bg-gray-50 flex flex-col justify-between h-full">
              <div className="relative w-[56px] h-[56px] bg-surface-primary rounded-full flex justify-center items-center z-10">
                <Image
                  src="/assets/icons/bias.svg"
                  alt="Bias Icon"
                  width={32}
                  height={32}
                  className="object-contain rounded-lg w-8 h-8"
                  priority
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-secondary-900 text-heading-5-semibold mb-2">
                  Multi-Axis Bias Analysis
                </h3>
                <p className="text-secondary-600 text-paragraph-md-regular">
                  Exposes framing, political affiliation, and narrative
                  gaps across outlets.
                </p>
              </div>
            </div>
          </Reveal>
          {/* 5 - Local Language Support */}
          <Reveal delay={0.4} className="col-span-1 sm:col-span-3">
            <div className="relative rounded-2xl p-6 bg-surface-secondary flex flex-col justify-between h-full">
              <div className="relative w-[56px] h-[56px] bg-surface-primary rounded-full flex justify-center items-center z-10">
                <Image
                  src="/assets/icons/web.svg"
                  alt="Global Icon"
                  width={32}
                  height={32}
                  className="object-contain rounded-lg w-8 h-8"
                  priority
                />
              </div>
              <div className="absolute top-0 right-0 z-0">
                <Image
                  src="/assets/images/global.png"
                  alt="Global Visual"
                  width={200}
                  height={200}
                  className="object-contain rounded-lg w-[100px] sm:w-[200px] h-[100px] sm:h-[200px]"
                  priority
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-secondary-900 text-heading-5-semibold mb-2">
                  Multilingual Support
                </h3>
                <p className="text-secondary-500 text-paragraph-md-regular">
                  Analyze news in 2+ languages.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
