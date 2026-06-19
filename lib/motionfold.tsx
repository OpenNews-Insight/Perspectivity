"use client";

import { motion, useReducedMotion, useScroll, useTransform, useInView, type MotionValue } from "framer-motion";
import { type CSSProperties, type ReactNode, type ElementType, useRef } from "react";

// ─── Tokens ─────────────────────────────────────────────────────────────────────

export type Easing = [number, number, number, number];

export const easeOutExpo: Easing = [0.16, 1, 0.3, 1];
export const easeInExpo: Easing = [0.7, 0, 0.84, 0];
export const easeInOutExpo: Easing = [0.87, 0, 0.13, 1];
export const easeOutQuint: Easing = [0.22, 1, 0.36, 1];
export const easeInOutSoft: Easing = [0.45, 0, 0.55, 1];
export const easeOutBack: Easing = [0.34, 1.56, 0.64, 1];

export const easings = {
  outExpo: easeOutExpo,
  inExpo: easeInExpo,
  inOutExpo: easeInOutExpo,
  outQuint: easeOutQuint,
  inOutSoft: easeInOutSoft,
  outBack: easeOutBack,
} as const;

export const durations = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
  cinematic: 1.4,
} as const;

// ─── Variants ────────────────────────────────────────────────────────────────────

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: durations.base, ease: easeOutExpo } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: durations.base, ease: easeOutExpo } },
};

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: durations.base, ease: easeOutExpo } },
};

export const clipRevealLR = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { clipPath: "inset(0 0% 0 0)", transition: { duration: durations.slow, ease: easeOutExpo } },
};

export const blurToSharp = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: durations.slow, ease: easeOutExpo } },
};

export const maskedRise = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: durations.slow, ease: easeOutExpo } },
};

export const inViewOnce = { once: true, amount: 0.3 } as const;

export function staggerContainer(stagger = 0.08, delayChildren = 0) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren } },
  };
}

export const staggerLines = staggerContainer;

// ─── Internal ─────────────────────────────────────────────────────────────────────

export type MotionTag = keyof React.JSX.IntrinsicElements;

export function motionTag(as: MotionTag): ElementType {
  return (motion as unknown as Record<string, ElementType>)[as as string];
}

// ─── Hooks ───────────────────────────────────────────────────────────────────────

export interface InViewOnceOptions {
  amount?: number;
  margin?: string;
  once?: boolean;
}

export function useInViewOnce<T extends Element = HTMLDivElement>(options: InViewOnceOptions = {}): [React.RefObject<T | null>, boolean] {
  const { amount = 0.3, margin, once = true } = options;
  const ref = useRef<T>(null);
  const inView = useInView(ref, { amount, once, ...(margin ? { margin: margin as `${number}px` } : {}) });
  return [ref, inView];
}

export function useReducedMotionFlag() {
  return useReducedMotion();
}

// ─── Components ───────────────────────────────────────────────────────────────────

export type TextRevealEffect = "blur" | "clip" | "blur-clip" | "rise" | "masked-rise";

export interface TextRevealProps {
  children: ReactNode;
  as?: MotionTag;
  effect?: TextRevealEffect;
  splitWords?: boolean;
  stagger?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
}

function buildTextRevealVariant(effect: TextRevealEffect, duration: number) {
  const transition = { duration, ease: easeOutExpo };
  switch (effect) {
    case "blur":
      return { hidden: { opacity: 0, filter: "blur(12px)" }, visible: { opacity: 1, filter: "blur(0px)", transition } };
    case "clip":
      return { hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" }, visible: { opacity: 1, clipPath: "inset(0 0% 0 0)", transition } };
    case "rise":
      return { hidden: { opacity: 0, y: "0.6em" }, visible: { opacity: 1, y: 0, transition } };
    case "masked-rise":
      return { hidden: { y: "100%", opacity: 0 }, visible: { y: "0%", opacity: 1, transition } };
    case "blur-clip":
    default:
      return {
        hidden: { opacity: 0, filter: "blur(10px)", clipPath: "inset(0 100% 0 0)" },
        visible: { opacity: 1, filter: "blur(0px)", clipPath: "inset(0 0% 0 0)", transition },
      };
  }
}

export function TextReveal({
  children,
  as = "h2",
  effect = "blur-clip",
  splitWords = false,
  stagger = 0.08,
  duration = durations.slow,
  amount = 0.4,
  once = true,
  className,
  style,
}: TextRevealProps) {
  const reduced = useReducedMotionFlag();
  const [ref, inView] = useInViewOnce({ amount, once });
  const Comp = motionTag(as);
  const variant = buildTextRevealVariant(effect, duration);
  const animateState = reduced || inView ? "visible" : "hidden";
  const initialState = reduced ? "visible" : "hidden";

  if (splitWords && typeof children === "string") {
    const words = children.split(/(\s+)/);
    const isMasked = effect === "masked-rise";
    return (
      <Comp ref={ref} className={className} style={style} variants={staggerContainer(stagger)} initial={initialState} animate={animateState}>
        {words.map((w, i) => {
          if (/\s+/.test(w)) return <span key={i}>{w}</span>;
          if (isMasked) {
            return (
              <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
                <motion.span variants={variant} style={{ display: "inline-block", willChange: "transform" }}>
                  {w}
                </motion.span>
              </span>
            );
          }
          return (
            <motion.span key={i} variants={variant} style={{ display: "inline-block", willChange: "filter, transform" }}>
              {w}
            </motion.span>
          );
        })}
      </Comp>
    );
  }

  return (
    <Comp ref={ref} className={className} style={style} variants={variant} initial={initialState} animate={animateState}>
      {children}
    </Comp>
  );
}

// ─── Original Components (kept for compatibility) ─────────────────────────────────

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotionFlag();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.65, delay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}

interface GlowBorderProps {
  children: ReactNode;
  borderRadius?: number;
}

export function GlowBorder({ children, borderRadius = 16 }: GlowBorderProps) {
  const reduced = useReducedMotionFlag();
  return (
    <div style={{ position: "relative", borderRadius, padding: 2, overflow: "hidden" }}>
      <motion.div
        style={{ position: "absolute", inset: -1, background: "conic-gradient(from 0deg, #10b981, #059669, #34d399, #10b981)", borderRadius, filter: "blur(4px)" }}
        animate={reduced ? undefined : { rotate: 360 }}
        transition={reduced ? undefined : { duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <div style={{ position: "relative", borderRadius: borderRadius - 1, overflow: "hidden" }}>{children}</div>
    </div>
  );
}

interface ScrollCueProps {
  label?: string;
  color?: string;
}

export function ScrollCue({ label = "SCROLL", color = "currentColor" }: ScrollCueProps) {
  const reduced = useReducedMotionFlag();
  return (
    <motion.div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color }}
      animate={reduced ? undefined : { y: [0, 6, 0] }}
      transition={reduced ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span style={{ fontSize: 10, letterSpacing: "0.2em", fontFamily: "monospace", opacity: 0.6 }}>{label}</span>
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
        <rect x="1" y="1" width="14" height="22" rx="7" stroke={color} strokeWidth="1.5" />
        <motion.rect x="6.5" y="5" width="3" height="6" rx="1.5" fill={color} animate={reduced ? undefined : { y: [0, 6, 0] }} transition={reduced ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }} />
      </svg>
    </motion.div>
  );
}

// ─── New: Parallax Section ─────────────────────────────────────────────────────────

export interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({ children, speed = 0.5, className }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * -100]);

  return (
    <div ref={ref} className={className} style={{ position: "relative" }}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
