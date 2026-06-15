"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils";
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

const NewsCard: FC<{ item: MarqueeNewsItem }> = ({ item }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative min-w-[280px] sm:min-w-[300px] md:min-w-[340px] h-[200px] sm:h-[220px] rounded-xl overflow-hidden flex-shrink-0 cursor-pointer shadow-md hover:shadow-2xl group/card"
    >
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
    </motion.div>
  );
};

function shuffleItems(items: MarqueeNewsItem[]): MarqueeNewsItem[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor((i * 7 + 3) % (i + 1)); // deterministic shuffle
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const RowLabel: FC<{ label: string; flag: React.ReactNode }> = ({ label, flag }) => (
  <div className="flex items-center gap-2 mb-2 sm:mb-3 px-4">
    {flag}
    <span className="text-[11px] sm:text-xs font-semibold text-secondary-500 uppercase tracking-wider">
      {label}
    </span>
  </div>
);

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

const NewsMarquee: FC<NewsMarqueeProps> = ({ newsData, isVisible }) => {
  const { perspectivity, drishtikon } = newsData;
  if (perspectivity.length === 0 && drishtikon.length === 0) return null;

  const tripledPerspectivity = [...perspectivity, ...perspectivity, ...perspectivity];
  const tripledDrishtikon = [...shuffleItems(drishtikon), ...shuffleItems(drishtikon), ...shuffleItems(drishtikon)];

  return (
    <div
      className={cn(
        "group w-full py-6 sm:py-12 -skew-y-3 sm:-skew-y-6 mt-6 transition-all duration-1000 opacity-0 translate-y-10",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      {/* Row 1 — Perspectivity (US), scrolls left */}
      {perspectivity.length > 0 && (
        <div className="mb-4 sm:mb-6">
          <RowLabel label="Perspectivity — United States" flag={<USFlag />} />
          <div className="overflow-hidden">
            <div className="flex gap-4 sm:gap-6 animate-marquee-left group-hover:[animation-play-state:paused]">
              {tripledPerspectivity.map((item, idx) => (
                <NewsCard key={`us-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Row 2 — Drishtikon (BD), scrolls right, hidden on mobile */}
      {drishtikon.length > 0 && (
        <div>
          <RowLabel label="Drishtikon — Bangladesh" flag={<BDFlag />} />
          <div className="overflow-hidden">
            <div className="flex gap-4 sm:gap-6 animate-marquee-right group-hover:[animation-play-state:paused]">
              {tripledDrishtikon.map((item, idx) => (
                <NewsCard key={`bd-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsMarquee;
