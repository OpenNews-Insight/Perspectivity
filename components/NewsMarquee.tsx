"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils";

interface NewsItem {
  image: string;
  tag: string;
  title: string;
}

interface NewsMarqueeProps {
  items: NewsItem[];
  isVisible: boolean;
}

const NewsCard: FC<{ item: NewsItem }> = ({ item }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="bg-base-white border border-[#E4E4E7] rounded-lg shadow-md min-w-[260px] sm:min-w-[280px] md:min-w-[320px] max-w-xs flex-shrink-0 p-2 sm:p-4 cursor-pointer hover:shadow-xl"
  >
    <div className="bg-surface-secondary border border-[#FFFFFF00] rounded-full w-max px-2 sm:px-[10px] mb-2">
      <span className="text-paragraph-sm-medium text-[11px] sm:text-[12px] text-base-black uppercase">
        {item.tag}
      </span>
    </div>
    <div className="w-full h-32 sm:h-40 rounded-t-xl overflow-hidden flex items-center justify-center">
      <Image
        src={item.image}
        alt="News"
        width={320}
        height={160}
        priority
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-2 sm:p-4 flex flex-col gap-2">
      <h3 className="text-paragraph-md-medium text-secondary-900 text-sm sm:text-base">
        {item.title}
      </h3>
    </div>
    <div className="flex gap-1 sm:gap-2 px-2 sm:px-4 pb-2 sm:pb-4 mt-auto">
      <div className="h-1 sm:h-2 w-1/2 rounded-full bg-secondary-300"></div>
      <div className="h-1 sm:h-2 w-1/2 rounded-full bg-coral-200"></div>
    </div>
  </motion.div>
);

const NewsMarquee: FC<NewsMarqueeProps> = ({ items, isVisible }) => {
  // Triple items for seamless infinite loop
  const tripled = [...items, ...items, ...items];

  // Shuffled order for row 2 to prevent vertical alignment of identical cards
  const shuffleOrder = [2, 4, 0, 3, 1];
  const shuffled = shuffleOrder.map((i) => items[i]);
  const tripledShuffled = [...shuffled, ...shuffled, ...shuffled];

  return (
    <div
      className={cn(
        "group w-full py-6 sm:py-12 -skew-y-3 sm:-skew-y-6 mt-6 transition-all duration-1000 opacity-0 translate-y-10",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      {/* Row 1 — scrolls left */}
      <div className="overflow-hidden mb-4 sm:mb-6">
        <div className="flex gap-4 sm:gap-6 animate-marquee-left group-hover:[animation-play-state:paused]">
          {tripled.map((item, idx) => (
            <NewsCard key={`row1-${idx}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right, hidden on mobile */}
      <div className="overflow-hidden hidden sm:block">
        <div className="flex gap-4 sm:gap-6 animate-marquee-right group-hover:[animation-play-state:paused]">
          {tripledShuffled.map((item, idx) => (
            <NewsCard key={`row2-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsMarquee;
