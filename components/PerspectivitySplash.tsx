"use client";

/**
 * PerspectivitySplash — a "designed in a vector tool" intro that plays on every
 * page load: over a navy cover, alignment guides fade in, a seed ring with
 * transform handles scales out, a conic fill sweeps, and the Perspectivity logo
 * builds in at the center — then the cover lifts to reveal the page. A Skip
 * button fast-forwards. Reduced-motion users get a brief static brand flash.
 * (Vector-build visual after VidToCode/motionfold's VectorBuildIntro.)
 */
import { useEffect, useState } from "react";
import Image from "next/image";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { easeOutExpo, useReducedMotionFlag } from "@/lib/motionfold";

const COVER = "#0F1C2E";
const ACCENT = "#6EE7B7";
const RING = "rgba(255,255,255,0.55)";
const GUIDE = "rgba(255,255,255,0.18)";

const HANDLES: React.CSSProperties[] = [
  { left: 0, top: 0 },
  { left: "50%", top: 0, transform: "translateX(-50%)" },
  { right: 0, top: 0 },
  { left: 0, top: "50%", transform: "translateY(-50%)" },
  { right: 0, top: "50%", transform: "translateY(-50%)" },
  { left: 0, bottom: 0 },
  { left: "50%", bottom: 0, transform: "translateX(-50%)" },
  { right: 0, bottom: 0 },
];

function Logo({ className, animate: anim = true }: { className?: string; animate?: boolean }) {
  return (
    <motion.div
      className={`relative ${className ?? ""}`}
      initial={anim ? { opacity: 0, scale: 0.6 } : false}
      animate={anim ? { opacity: 1, scale: 1 } : undefined}
      transition={anim ? { delay: 0.75, duration: 0.5, ease: easeOutExpo } : undefined}
    >
      <Image src="/assets/logo.png" alt="Perspectivity" fill className="object-contain" priority />
    </motion.div>
  );
}

export default function PerspectivitySplash() {
  const reduced = useReducedMotionFlag();
  const [revealed, setRevealed] = useState(false);
  const [unmount, setUnmount] = useState(false);

  // conic fill sweep
  const sweep = useMotionValue(reduced ? 360 : 0);
  useEffect(() => {
    if (reduced) return;
    const controls = animate(sweep, 360, { delay: 0.9, duration: 0.8, ease: [0.4, 0, 0.2, 1] });
    return () => controls.stop();
  }, [reduced, sweep]);
  const fillBg = useMotionTemplate`conic-gradient(from -90deg, ${ACCENT} ${sweep}deg, rgba(0,0,0,0) ${sweep}deg)`;

  // reveal on a timer (always plays each load); reduced motion gets a short static flash
  useEffect(() => {
    const id = window.setTimeout(() => setRevealed(true), reduced ? 1100 : 2700);
    return () => window.clearTimeout(id);
  }, [reduced]);

  // unmount after the cover fade
  useEffect(() => {
    if (!revealed) return;
    const id = window.setTimeout(() => setUnmount(true), 700);
    return () => window.clearTimeout(id);
  }, [revealed]);

  if (unmount) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: COVER }}
      initial={{ opacity: 1 }}
      animate={{ opacity: revealed ? 0 : 1 }}
      transition={{ duration: revealed ? 0.6 : 0, ease: "easeInOut" }}
    >
      {reduced ? (
        // reduced motion: static brand flash
        <Logo className="w-28 h-28" animate={false} />
      ) : (
        <>
          {/* alignment guides */}
          <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.35 }}>
            <span style={{ position: "absolute", left: "48%", top: 0, width: 1, height: "100%", background: GUIDE }} />
            <span style={{ position: "absolute", left: 0, top: "52%", width: "100%", height: 1, background: GUIDE }} />
          </motion.div>

          {/* ring assembly */}
          <motion.div
            className="relative"
            style={{ width: "min(28vw, 320px)", height: "min(28vw, 320px)" }}
            initial={{ scale: 0.14 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.35, duration: 0.6, ease: easeOutExpo }}
          >
            <motion.div className="absolute inset-0 rounded-full" style={{ background: fillBg }} />
            <motion.div className="absolute inset-0 rounded-full" style={{ border: `1px dashed ${RING}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.4 }} />
            <div className="absolute rounded-full grid place-items-center" style={{ inset: "30%", border: `1px dashed ${RING}`, background: COVER }}>
              <Logo className="w-2/3 h-2/3" />
            </div>
            {/* transform handles */}
            <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.35 }}>
              {HANDLES.map((p, i) => (
                <span key={i} style={{ position: "absolute", width: 8, height: 8, margin: -4, border: `1px solid ${ACCENT}`, background: ACCENT, ...p }} />
              ))}
            </motion.div>
          </motion.div>
        </>
      )}

      {/* Skip */}
      {!revealed && (
        <button
          onClick={() => setRevealed(true)}
          className="absolute bottom-6 right-6 font-hanken text-[12px] tracking-[0.18em] uppercase text-white/45 hover:text-white border border-white/15 hover:border-white/40 rounded-full px-4 py-2 transition-colors"
        >
          Skip intro
        </button>
      )}
    </motion.div>
  );
}
