"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { type CSSProperties, type ReactNode, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface TextRevealProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  splitWords?: boolean;
  className?: string;
}

export function TextReveal({
  children,
  as: Tag = "div",
  splitWords = false,
  className,
}: TextRevealProps) {
  const reduced = useReducedMotion();
  const text = typeof children === "string" ? children : null;

  if (!text || !splitWords || reduced) {
    return (
      <Tag className={className}>
        <Reveal>{children}</Reveal>
      </Tag>
    );
  }

  const words = text.split(/\s+/);
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          style={{ display: "inline-block", marginRight: "0.28em" }}
          initial={{ opacity: 0, y: "0.45em" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

interface GlowBorderProps {
  children: ReactNode;
  borderRadius?: number;
}

export function GlowBorder({ children, borderRadius = 16 }: GlowBorderProps) {
  const reduced = useReducedMotion();
  return (
    <div
      style={{
        position: "relative",
        borderRadius,
        padding: 2,
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: -1,
          background:
            "conic-gradient(from 0deg, #10b981, #059669, #34d399, #10b981)",
          borderRadius,
          filter: "blur(4px)",
        }}
        animate={reduced ? undefined : { rotate: 360 }}
        transition={reduced ? undefined : { duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <div
        style={{
          position: "relative",
          borderRadius: borderRadius - 1,
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

interface ScrollCueProps {
  label?: string;
  color?: string;
}

export function ScrollCue({ label = "SCROLL", color = "currentColor" }: ScrollCueProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        color,
      }}
      animate={reduced ? undefined : { y: [0, 6, 0] }}
      transition={reduced ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span
        style={{
          fontSize: 10,
          letterSpacing: "0.2em",
          fontFamily: "monospace",
          opacity: 0.6,
        }}
      >
        {label}
      </span>
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
        <rect x="1" y="1" width="14" height="22" rx="7" stroke={color} strokeWidth="1.5" />
        <motion.rect
          x="6.5"
          y="5"
          width="3"
          height="6"
          rx="1.5"
          fill={color}
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={reduced ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}
