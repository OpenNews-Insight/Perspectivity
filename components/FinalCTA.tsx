"use client";

import React, { FC, useMemo } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FinalCTA: FC = () => {
  const features = useMemo(
    () => [
      "Real Time News Analysis",
      "All Your Favorite Newspapers in One Place",
      "Get more insights just simply by asking question",
    ],
    []
  );
  return (
    <section className="w-full bg-base-white ps-20 border-b pt-[120px]">
      <div className="flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
        <div className="flex-1 md:max-w-[47%]">
          <h2 className="text-heading-1-medium text-secondary-800 mb-8">
            Ready to Restore trust in News With insights
          </h2>
          <ul className="mb-8 space-y-5 ">
            {features.map((feature) => (
              <li
                className="flex items-center gap-3 text-paragraph-lg-regular text-secondary-700"
                key={feature}
              >
                <div className="bg-primary-50 rounded-full w-7 h-7 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="mailto:support@perspectivity.co"
            className="bg-primary-500 border border-primary-400 rounded-[9999px] transition-all duration-300 hover:scale-105  flex items-center text-paragraph-md-medium text-base-white px-4 py-[10px] w-max"
          >
            <span>Get in Touch</span>
          </Link>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full">
            <Image
              src="/assets/images/demo-image.png"
              alt="News"
              width={600}
              height={430}
              className="rounded-xl w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
