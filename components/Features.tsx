"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="features"
      ref={ref}
      className="w-full px-5 sm:px-10 md:px-20 pb-[120px] mx-auto"
    >
      <div
        className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-10 sm:mb-[56px] max-w-6xl mx-auto">
          <p className="text-paragraph-md-mMedium text-primary-600 mb-2 md:mb-3">
            POWERED BY AI
          </p>
          <h2 className="text-heading-3-semibold text-secondary-800 mb-2 md:mb-3">
            A Mash of Ground News + Perplexity
          </h2>
          <p className="text-paragraph-lg-regular text-secondary-700 w-full text-center">
            Six powerful AI agents working together to give you complete
            transparency into how news is framed, who’s behind it, and what it
            really means for your community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="col-span-1 sm:col-span-4 bg-primary-950 border border-primary-900 rounded-2xl p-6 relative flex flex-col justify-between md:row-span-2 min-h-[280px] shadow-lg">
            <div className="relative w-[56px] h-[56px] bg-primary-900 rounded-full flex justify-center items-center">
              <Image
                src="/assets/icons/sparkel-icon.svg"
                alt="World Map"
                width={28}
                height={28}
                className="object-contain rounded-lg w-7 h-7"
                priority
              />
            </div>
            <div className="relative h-auto sm:h-[350px] rounded-full flex justify-center items-center ">
              <Image
                src="/assets/icons/design-image.svg"
                alt="Design"
                fill
                className="object-contain rounded-lg w-full"
                priority
              />
            </div>
            <div>
              <h3 className="text-primary-50 text-heading-5-semibold mt-[14px] mb-2">
                News Aggregation AI Agent
              </h3>
              <p className="text-primary-100 md:text-paragraph-md-regular">
                Automatically gathers related stories from TV, newspapers,
                portals, and social media. You don't search for news — it finds
                you.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg p-6 bg-surface-secondary flex flex-col justify-between col-span-1 sm:col-span-3 ">
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

            {/* Middle right image */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-0">
              <Image
                src="/assets/images/image-8.png"
                alt="Summarizer Visual"
                width={165}
                height={96}
                className="object-contain rounded-lg  w-[100px] sm:w-[165px] h-[56px] sm:h-[96px]"
                priority
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-secondary-800 text-heading-5-semibold mb-2">
                Summarizer
              </h3>
              <p className="text-secondary-700 text-paragraph-md-regular">
                Condense long articles into clear, factual summaries.
              </p>
            </div>
          </div>
          <div className="relative rounded-lg p-6 bg-surface-secondary flex flex-col justify-between col-span-1 sm:col-span-5">
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

            {/* Middle right image */}
            <div className="absolute top-0 right-0  z-0">
              <Image
                src="/assets/images/image-9.png"
                alt="Summarizer Visual"
                width={250}
                height={240}
                className="object-contain rounded-lg w-[150px] sm:w-[250px] h-[150px]  sm:h-[240px]"
                priority
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-secondary-800 text-heading-5-semibold mb-2">
                Interactive Chat
              </h3>
              <p className="text-secondary-700 text-paragraph-md-regular">
                Perplexity-style conversational interface. Ask "What's happening
                with protests in Dhaka?" and get real-time answers.{" "}
              </p>
            </div>
          </div>

          <div className="relative rounded-lg p-6 bg-primary-50 flex flex-col justify-between col-span-1 sm:col-span-5">
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
              <h3 className="text-primary-800 text-heading-5-semibold mb-2">
                Multi- Axis Bias Analysis
              </h3>
              <p className="text-primary-700 text-paragraph-md-regular">
                Detects bias across political, cultural, and religious axes.
                Shows whether stories lean pro- government, opposition, secular,
                or religious.
              </p>
            </div>
          </div>
          <div className="relative rounded-lg p-6 bg-surface-secondary flex flex-col justify-between col-span-1 sm:col-span-3">
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

            {/* Middle right image */}
            <div className="absolute top-0 right-0  z-0">
              <Image
                src="/assets/images/global.png"
                alt="GLobal Visual"
                width={200}
                height={200}
                className="object-contain rounded-lg w-[100px] sm:w-[200px] h-[100] sm:h-[200px]"
                priority
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-secondary-800 text-heading-5-semibold mb-2">
                Local Language Support
              </h3>
              <p className="text-secondary-700 text-paragraph-md-regular">
                Built on BongLLaMA, the first open-source Bangla LLM.
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
