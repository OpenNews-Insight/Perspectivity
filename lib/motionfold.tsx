"use client";

import { motion, useReducedMotion, useScroll, useTransform, useInView, type MotionValue } from "framer-motion";
import { type CSSProperties, type ReactNode, type ElementType, useRef, useEffect, useState, useId } from "react";

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

// ─── CountUp Animation ─────────────────────────────────────────────────────────────

export interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  delay?: number;
}

export function CountUp({ end, duration = 2, suffix = "", prefix = "", className, delay = 0 }: CountUpProps) {
  const reduced = useReducedMotionFlag();
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  // Use IntersectionObserver directly for better type control
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || !inView) return;

    const node = nodeRef.current;
    if (!node) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOut);

      node.textContent = `${prefix}${currentValue}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        node.textContent = `${prefix}${end}${suffix}`;
      }
    };

    const timerId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timerId);
  }, [end, duration, prefix, suffix, delay, inView, reduced]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}{end}{suffix}
    </span>
  );
}

// ─── DepthTunnel ─────────────────────────────────────────────────────────────
// Continuous 3D depth tunnel: items stream from a central vanishing point
// toward the viewer in an infinite loop — like flying through a starfield.
// Uses CSS perspective + translateZ keyframes. Reduced-motion: items rest.
// (Ported from VidToCode/packages/motionfold — kept API-compatible.)

export interface DepthTunnelItem {
  id: string | number;
  x: number;
  y: number;
}

export interface DepthTunnelProps<T extends DepthTunnelItem = DepthTunnelItem> {
  items: T[];
  cycleDuration?: number;
  depthStart?: number;
  depthEnd?: number;
  scaleStart?: number;
  scaleEnd?: number;
  perspective?: number;
  perspectiveOrigin?: string;
  prefill?: boolean;
  children: (item: T, index: number) => ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function DepthTunnel<T extends DepthTunnelItem = DepthTunnelItem>({
  items,
  cycleDuration = 7,
  depthStart = 3500,
  depthEnd = 500,
  scaleStart = 0.04,
  scaleEnd = 1.35,
  perspective = 1200,
  perspectiveOrigin = "50% 50%",
  prefill = false,
  children,
  className,
  style,
}: DepthTunnelProps<T>) {
  const reduced = useReducedMotionFlag();
  const uid = useId().replace(/:/g, "");
  const animName = `mf-depth-${uid}`;

  return (
    <>
      {!reduced && (
        <style>{`
          @keyframes ${animName} {
            0% { transform: translateZ(-${depthStart}px) scale(${scaleStart}); opacity: 0; }
            8% { opacity: 0.3; }
            25% { opacity: 0.7; }
            55% { opacity: 1; }
            85% { opacity: 0.6; }
            100% { transform: translateZ(${depthEnd}px) scale(${scaleEnd}); opacity: 0; }
          }
        `}</style>
      )}
      <div
        className={className}
        style={{
          position: "relative",
          overflow: "hidden",
          pointerEvents: "none",
          perspective,
          perspectiveOrigin,
          ...style,
        }}
      >
        {items.map((item, i) => {
          const delay = (i / items.length) * cycleDuration - (prefill ? cycleDuration : 0);
          return (
            <div
              key={item.id}
              style={{
                position: "absolute",
                left: `${item.x}%`,
                top: `${item.y}%`,
                transformStyle: "preserve-3d",
                animation: reduced
                  ? "none"
                  : `${animName} ${cycleDuration}s linear ${delay}s infinite both`,
                willChange: reduced ? undefined : "transform, opacity",
              }}
            >
              {children(item, i)}
            </div>
          );
        })}
      </div>
    </>
  );
}

// ─── ParallaxSection (Floema cinematic section) ───────────────────────────────
// Full-viewport sticky section with a parallax-panning background and a content
// overlay that fades in/out with scroll progress. The Floema pattern: full-bleed
// atmospheric background, overlay text, cinematic scroll transition.
// (Ported from VidToCode/packages/motionfold.)

export interface ParallaxSectionProps {
  heightVh?: number;
  background: ReactNode;
  parallaxRange?: [string, string];
  backgroundHeight?: string;
  contentFade?: [number, number, number, number];
  children: ReactNode;
  className?: string;
  stageClassName?: string;
  style?: CSSProperties;
  stageStyle?: CSSProperties;
}

export function ParallaxSection({
  heightVh = 200,
  background,
  parallaxRange = ["0%", "30%"],
  backgroundHeight = "150%",
  contentFade = [0, 0.1, 0.4, 0.5],
  children,
  className,
  stageClassName,
  style,
  stageStyle,
}: ParallaxSectionProps) {
  const reduced = useReducedMotionFlag();
  const innerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], parallaxRange);
  const contentOpacity = useTransform(scrollYProgress, contentFade, [0.5, 1, 1, 0]);

  return (
    <div
      ref={(el) => {
        (innerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      className={className}
      style={{ position: "relative" as const, height: `${heightVh}vh`, ...style }}
    >
      <div
        className={stageClassName}
        style={{ position: "sticky" as const, top: 0, height: "100vh", width: "100%", overflow: "hidden", ...stageStyle }}
      >
        <motion.div
          aria-hidden
          style={{ position: "absolute" as const, inset: 0, height: backgroundHeight, top: "-25%", y: reduced ? 0 : bgY }}
        >
          {background}
        </motion.div>
        <motion.div style={{ position: "relative" as const, zIndex: 1, height: "100%", opacity: reduced ? 1 : contentOpacity }}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}

// ─── SectionStack (stacking-cards cinematic scroll) ──────────────────────────
// All section backgrounds live in a single sticky viewport; as the user scrolls,
// each background slides up from below and covers the previous — like stacking
// cards. Content overlays crossfade at the midpoints. Optional progress line.
// (Ported from VidToCode/packages/motionfold.)

export type ProgressLineVariant = "horizontal" | "vertical" | "diagonal" | "none";

export interface SectionStackItem {
  id: string | number;
}

export interface SectionStackProps<T extends SectionStackItem = SectionStackItem> {
  items: T[];
  scrollVhPerSection?: number;
  progressLine?: ProgressLineVariant;
  progressColor?: string;
  progressTrackColor?: string;
  renderBackground: (item: T, index: number) => ReactNode;
  children: (item: T, index: number) => ReactNode;
  containerRef?: (el: HTMLElement | null) => void;
  className?: string;
  style?: CSSProperties;
  stageClassName?: string;
  stageStyle?: CSSProperties;
}

export function SectionStack<T extends SectionStackItem = SectionStackItem>({
  items,
  scrollVhPerSection = 300,
  progressLine = "horizontal",
  progressColor = "rgba(255,255,255,0.45)",
  progressTrackColor = "rgba(255,255,255,0.08)",
  renderBackground,
  children,
  containerRef: externalRef,
  className,
  style,
  stageClassName,
  stageStyle,
}: SectionStackProps<T>) {
  const reduced = useReducedMotionFlag();
  const innerRef = useRef<HTMLDivElement>(null);
  const N = items.length;

  const { scrollYProgress } = useScroll({ target: innerRef, offset: ["start start", "end end"] });

  if (reduced) {
    return (
      <div className={className} style={style}>
        {items.map((item, i) => (
          <div key={item.id} style={{ position: "relative", minHeight: "100vh" }}>
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>{renderBackground(item, i)}</div>
            <div style={{ position: "relative", zIndex: 1 }}>{children(item, i)}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={(el) => {
        (innerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
        externalRef?.(el);
      }}
      className={className}
      style={{ height: `${N * scrollVhPerSection}vh`, position: "relative", ...style }}
    >
      <div className={stageClassName} style={{ position: "sticky", top: 0, height: "100vh", width: "100%", overflow: "hidden", ...stageStyle }}>
        {items.map((item, i) => (
          <StackImageLayer key={item.id} index={i} total={N} progress={scrollYProgress} background={renderBackground(item, i)} />
        ))}
        {items.map((item, i) => (
          <StackContentLayer key={`c-${item.id}`} index={i} total={N} progress={scrollYProgress}>
            {children(item, i)}
          </StackContentLayer>
        ))}
        {progressLine !== "none" && (
          <StackProgressLine progress={scrollYProgress} total={N} variant={progressLine} fillColor={progressColor} trackColor={progressTrackColor} />
        )}
      </div>
    </div>
  );
}

function StackImageLayer({ index, total, progress, background }: { index: number; total: number; progress: MotionValue<number>; background: ReactNode }) {
  const f = 1 / total;
  const enterStart = index === 0 ? 0 : (index - 0.35) * f;
  const enterEnd = index === 0 ? 0.06 : index * f;
  const exitStart = (index + 0.65) * f;
  const exitEnd = Math.min((index + 1) * f, 1);

  let yIn: number[];
  let yOut: string[];
  if (index === 0 && index < total - 1) {
    yIn = [0, enterEnd, exitStart, exitEnd, 1];
    yOut = ["100%", "0%", "0%", "-12%", "-12%"];
  } else if (index === 0) {
    yIn = [0, enterEnd, 1];
    yOut = ["100%", "0%", "0%"];
  } else if (index === total - 1) {
    yIn = [0, enterStart, enterEnd, 1];
    yOut = ["100%", "100%", "0%", "0%"];
  } else {
    yIn = [0, enterStart, enterEnd, exitStart, exitEnd, 1];
    yOut = ["100%", "100%", "0%", "0%", "-12%", "-12%"];
  }
  const y = useTransform(progress, yIn, yOut);
  const panY = useTransform(progress, [index * f, (index + 1) * f], ["0%", "-25%"]);

  return (
    <motion.div style={{ position: "absolute", inset: 0, zIndex: index + 1, y, overflow: "hidden" }}>
      <motion.div style={{ position: "absolute", inset: 0, height: "140%", top: "-20%", y: panY }}>{background}</motion.div>
    </motion.div>
  );
}

function StackContentLayer({ index, total, progress, children }: { index: number; total: number; progress: MotionValue<number>; children: ReactNode }) {
  const f = 1 / total;
  const showAt = index === 0 ? 0 : (index - 0.17) * f;
  const showFull = index === 0 ? 0.04 : (index - 0.05) * f;
  const hideAt = index === total - 1 ? 1 : (index + 0.8) * f;
  const hideFull = index === total - 1 ? 1 : (index + 0.88) * f;

  let oIn: number[];
  let oOut: number[];
  if (index === 0 && index === total - 1) {
    oIn = [0, 0.04, 1]; oOut = [0, 1, 1];
  } else if (index === 0) {
    // First act is visible immediately (no empty stage on entry); only fades out near its exit.
    oIn = [0, hideAt, hideFull]; oOut = [1, 1, 0];
  } else if (index === total - 1) {
    oIn = [showAt, showFull, 1]; oOut = [0, 1, 1];
  } else {
    oIn = [showAt, showFull, hideAt, hideFull]; oOut = [0, 1, 1, 0];
  }
  const opacity = useTransform(progress, oIn, oOut);

  let cIn: number[];
  let cOut: number[];
  if (index === 0) { cIn = [0, hideAt, hideFull]; cOut = [0, 0, -20]; }
  else if (index === total - 1) { cIn = [showAt, showFull, 1]; cOut = [20, 0, 0]; }
  else { cIn = [showAt, showFull, hideAt, hideFull]; cOut = [20, 0, 0, -20]; }
  const contentY = useTransform(progress, cIn, cOut);

  return (
    <motion.div style={{ position: "absolute", inset: 0, zIndex: total + 1, opacity, y: contentY, pointerEvents: "none" }}>
      <div style={{ height: "100%", pointerEvents: "auto" }}>{children}</div>
    </motion.div>
  );
}

function StackProgressLine({ progress, total, variant, fillColor, trackColor }: { progress: MotionValue<number>; total: number; variant: ProgressLineVariant; fillColor: string; trackColor: string }) {
  const sectionProgress = useTransform(progress, (p) => {
    const idx = Math.min(Math.floor(p * total), total - 1);
    return p * total - idx;
  });
  if (variant === "horizontal") {
    const scaleX = useTransform(sectionProgress, [0, 1], [0, 1]);
    const dotLeft = useTransform(sectionProgress, [0, 1], ["0%", "100%"]);
    const dotOp = useTransform(sectionProgress, [0, 0.3, 0.7, 1], [0, 0.4, 0.6, 0]);
    return (
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "min(60vw,400px)", height: 1, background: trackColor, zIndex: total + 2, overflow: "visible" }}>
        <motion.div style={{ width: "100%", height: "100%", background: fillColor, transformOrigin: "left", scaleX }} />
        <motion.div style={{ position: "absolute", top: "50%", left: dotLeft, width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.8)", transform: "translateY(-50%) translateX(-50%)", opacity: dotOp, boxShadow: "0 0 12px rgba(255,255,255,0.4)" }} />
      </div>
    );
  }
  if (variant === "vertical") {
    // Global (whole-stack) progress, pinned to the right edge so it never crosses the content.
    const scaleY = useTransform(progress, [0, 1], [0, 1]);
    const dotTop = useTransform(progress, [0, 1], ["0%", "100%"]);
    return (
      <div className="hidden sm:block" style={{ position: "absolute", right: "clamp(16px,3%,40px)", top: "50%", transform: "translateY(-50%)", width: 2, height: "min(52vh,380px)", background: trackColor, zIndex: total + 2, borderRadius: 2, overflow: "visible" }}>
        <motion.div style={{ width: "100%", height: "100%", background: fillColor, transformOrigin: "top", scaleY, borderRadius: 2 }} />
        <motion.div style={{ position: "absolute", left: "50%", top: dotTop, width: 7, height: 7, borderRadius: "50%", background: "#fff", transform: "translateX(-50%)", boxShadow: `0 0 14px ${fillColor}` }} />
      </div>
    );
  }
  return null;
}
