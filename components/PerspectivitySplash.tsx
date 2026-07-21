"use client";

/**
 * PerspectivitySplash — a "designed in a vector tool" intro that plays on every
 * load. A square selection frame with transform handles scales out around the
 * (square) Perspectivity logo, then the wordmark "Perspectivity" writes in
 * letter-by-letter, then the cover lifts to reveal the page. Skip button
 * fast-forwards; reduced-motion users get a brief static brand flash.
 */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { easeOutExpo, useReducedMotionFlag } from "@/lib/motionfold";
import { LOGO_DATA_URI } from "@/lib/logoDataUri";

const COVER = "#0F1C2E";
const ACCENT = "#6EE7B7";
const FRAME = "rgba(255,255,255,0.55)";
const GUIDE = "rgba(255,255,255,0.16)";

// 8 transform handles around a square bounding box (corners + edge midpoints)
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

const WORD = "Perspectivity".split("");

export default function PerspectivitySplash() {
  const reduced = useReducedMotionFlag();
  const [revealed, setRevealed] = useState(false);
  const [unmount, setUnmount] = useState(false);

  useEffect(() => {
    // Whole intro is capped at 2s: 1.6s of animation + a 0.4s fade to the page.
    const id = window.setTimeout(() => setRevealed(true), reduced ? 800 : 1600);
    return () => window.clearTimeout(id);
  }, [reduced]);

  useEffect(() => {
    if (!revealed) return;
    const id = window.setTimeout(() => setUnmount(true), 400);
    return () => window.clearTimeout(id);
  }, [revealed]);

  if (unmount) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: COVER }}
      initial={{ opacity: 1 }}
      animate={{ opacity: revealed ? 0 : 1 }}
      transition={{ duration: revealed ? 0.4 : 0, ease: "easeInOut" }}
    >
      {reduced ? (
        <div className="flex flex-col items-center gap-5">
          <div className="relative w-24 h-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_DATA_URI} alt="Perspectivity" className="absolute inset-0 w-full h-full object-contain" />
          </div>
          <span className="font-serif text-white text-2xl tracking-tight">Perspectivity</span>
        </div>
      ) : (
        <>
          {/* alignment guides */}
          <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0, duration: 0.25 }}>
            <span style={{ position: "absolute", left: "50%", top: 0, width: 1, height: "100%", background: GUIDE }} />
            <span style={{ position: "absolute", left: 0, top: "50%", width: "100%", height: 1, background: GUIDE }} />
          </motion.div>

          <div className="relative flex flex-col items-center">
            {/* square selection frame around the logo */}
            <motion.div
              className="relative"
              style={{ width: "clamp(150px, 22vw, 220px)", height: "clamp(150px, 22vw, 220px)" }}
              initial={{ scale: 0.16 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0, duration: 0.45, ease: easeOutExpo }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{ border: `1px dashed ${FRAME}` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.3 }}
              />
              {/* logo */}
              <motion.div
                className="absolute rounded-xl overflow-hidden"
                style={{ inset: "16%" }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0, duration: 0.4, ease: easeOutExpo }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={LOGO_DATA_URI} alt="Perspectivity" className="absolute inset-0 w-full h-full object-contain" />
              </motion.div>
              {/* transform handles */}
              <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12, duration: 0.25 }}>
                {HANDLES.map((p, i) => (
                  <span key={i} style={{ position: "absolute", width: 8, height: 8, margin: -4, border: `1px solid ${ACCENT}`, background: ACCENT, ...p }} />
                ))}
              </motion.div>
            </motion.div>

            {/* wordmark — writes in letter by letter */}
            <h1 className="font-serif text-white text-[40px] sm:text-[56px] leading-none tracking-[-0.02em] mt-7">
              {WORD.map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: "0.45em", filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.4 + i * 0.035, duration: 0.35, ease: easeOutExpo }}
                >
                  {ch}
                </motion.span>
              ))}
            </h1>

            {/* tagline */}
            <motion.p
              className="font-hanken text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#6EE7B7] mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.35 }}
            >
              Narrative Intelligence
            </motion.p>
          </div>
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
