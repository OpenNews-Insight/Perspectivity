"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils";
import { LINKS } from "@/lib/links";
import type {
  MarqueeNewsItem,
  MarqueeNewsData,
  BiasPosition,
} from "@/lib/fetchNews";

interface NewsMarqueeProps {
  newsData: MarqueeNewsData;
  isVisible: boolean;
}

const BIAS_COLORS: Record<BiasPosition, string> = {
  Left: "#2D5A9B",
  "Left-Center": "#5580BD",
  Center: "#E8E8E8",
  "Right-Center": "#B24C55",
  Right: "#8B3340",
  "Not Rated": "#6b7280",
};

const BIAS_ORDER: BiasPosition[] = [
  "Left",
  "Left-Center",
  "Center",
  "Right-Center",
  "Right",
];

const BiasBar: FC<{ distribution: Record<BiasPosition, number> }> = ({
  distribution,
}) => {
  const rated = BIAS_ORDER.reduce((sum, k) => sum + distribution[k], 0);
  if (rated === 0) return null;

  return (
    <div className="flex items-center gap-1.5 w-full">
      <div className="flex h-1.5 flex-1 rounded-full overflow-hidden bg-white/10">
        {BIAS_ORDER.map((pos) => {
          const count = distribution[pos];
          if (count === 0) return null;
          const pct = (count / rated) * 100;
          return (
            <div
              key={pos}
              className="h-full transition-all duration-500"
              style={{
                width: `${pct}%`,
                backgroundColor: BIAS_COLORS[pos],
              }}
              title={`${pos}: ${count}`}
            />
          );
        })}
      </div>
    </div>
  );
};

const SourceLogos: FC<{ sources: MarqueeNewsItem["sources"] }> = ({
  sources,
}) => {
  const withLogos = sources.filter((s) => s.logo).slice(0, 5);
  if (withLogos.length === 0) return null;

  return (
    <div className="flex items-center -space-x-1.5">
      {withLogos.map((s, i) => (
        <Image
          key={`${s.name}-${i}`}
          src={s.logo!}
          alt={s.name}
          width={18}
          height={18}
          className="w-[18px] h-[18px] rounded-full border border-white/30 bg-white object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      ))}
      {sources.length > 5 && (
        <span className="text-[10px] text-white/50 ml-1.5">
          +{sources.length - 5}
        </span>
      )}
    </div>
  );
};

const NewsCard: FC<{ item: MarqueeNewsItem; href?: string }> = ({ item, href }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) return null;

  const cls =
    "relative min-w-[280px] sm:min-w-[300px] md:min-w-[340px] h-[200px] sm:h-[220px] rounded-xl overflow-hidden flex-shrink-0 cursor-pointer shadow-md hover:shadow-2xl group/card";
  const hover = { scale: 1.05, y: -8 };
  const trans = { type: "spring" as const, stiffness: 300, damping: 20 };

  const inner = (
    <>
      {/* Background image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="340px"
        unoptimized
        className="object-cover transition-transform duration-700 group-hover/card:scale-[1.03]"
        onError={() => setImgError(true)}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

      {/* Category pills */}
      {item.categories.length > 0 && (
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {item.categories.map((cat) => (
            <span
              key={cat}
              className="bg-white/15 backdrop-blur-sm text-white text-[11px] sm:text-[12px] font-medium px-2.5 py-1 rounded-full border border-white/10"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-sm sm:text-[15px] font-semibold text-white line-clamp-2 leading-snug tracking-tight">
          {item.title}
        </h3>

        {/* Bias spectrum bar */}
        <div className="mt-2">
          <BiasBar distribution={item.biasDistribution} />
        </div>

        {/* Meta info + source logos */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 text-white/60 text-[11px]">
            {item.totalSources > 1 && (
              <span className="flex-shrink-0">{item.totalSources} sources</span>
            )}
            {item.totalSources > 1 && item.perspectiveCount > 0 && (
              <span className="text-white/25">|</span>
            )}
            {item.perspectiveCount > 0 && (
              <span className="flex-shrink-0">{item.perspectiveCount} perspectives</span>
            )}
          </div>
          <SourceLogos sources={item.sources} />
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={hover}
        transition={trans}
        className={cls}
        aria-label={`${item.title} — open in app`}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={hover} transition={trans} className={cls}>
      {inner}
    </motion.div>
  );
};

const RowLabel: FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-2 mb-2 sm:mb-3 px-4">
    <span className="text-[11px] sm:text-xs font-semibold text-secondary-500 uppercase tracking-wider">
      {label}
    </span>
  </div>
);

function shuffleItems(items: MarqueeNewsItem[]): MarqueeNewsItem[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor((i * 7 + 3) % (i + 1)); // deterministic shuffle
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const NewsMarquee: FC<NewsMarqueeProps> = ({ newsData, isVisible }) => {
  const { perspectivity } = newsData;
  if (perspectivity.length === 0) return null;

  // Split feed into two halves so the rows show different stories.
  // If the API returned too few items for a real second row, fall back to a shuffle.
  const half = Math.ceil(perspectivity.length / 2);
  const rowOne = perspectivity.slice(0, half);
  const rowTwo =
    perspectivity.length - half >= 4
      ? perspectivity.slice(half)
      : shuffleItems(perspectivity);

  const tripledRowOne = [...rowOne, ...rowOne, ...rowOne];
  const tripledRowTwo = [...rowTwo, ...rowTwo, ...rowTwo];

  return (
    <div
      className={cn(
        "group w-full py-6 sm:py-12 -skew-y-3 sm:-skew-y-6 mt-6 transition-all duration-1000 opacity-0 translate-y-10",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      {/* Row 1 — scrolls left */}
      <div className="mb-4 sm:mb-6">
        <RowLabel label="Perspectivity" />
        <div className="overflow-hidden">
          <div className="flex gap-4 sm:gap-6 animate-marquee-left group-hover:[animation-play-state:paused]">
            {tripledRowOne.map((item, idx) => (
              <NewsCard key={`us-${idx}`} item={item} href={LINKS.perspectivity} />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — second half of the feed, scrolls right */}
      <div className="overflow-hidden">
        <div className="flex gap-4 sm:gap-6 animate-marquee-right group-hover:[animation-play-state:paused]">
          {tripledRowTwo.map((item, idx) => (
            <NewsCard key={`us2-${idx}`} item={item} href={LINKS.perspectivity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsMarquee;
