"use client";

/**
 * NarrativeGraph — the signature Perspectivity visualization.
 *
 * Outlet nodes sit on a political-bias spectrum (left→right, color-coded),
 * all linked to a central event. Edges encode the relationship:
 *   covers (neutral) · aligned framing (green dashed, flowing) · contradicts (pink)
 *
 * Faithful to mockup "A / Narrative Graph". Supports a `dark` glass variant
 * (for use over imagery) and a cycling "scan" highlight that hops outlet to
 * outlet so the graph reads as a live analysis. Reduced-motion respected.
 */
import { FC, useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { easeOutExpo, easeOutBack } from "@/lib/motionfold";

type Bias = "left" | "center" | "right";

interface Node {
  id: string;
  code: string;
  x: number;
  y: number;
  bias: Bias;
  biasLabel: string;
}

const BIAS_COLOR: Record<Bias, string> = {
  left: "#3B82F6",
  center: "#94A3B8",
  right: "#DC2626",
};

const NODES: Node[] = [
  { id: "cnn", code: "CNN", x: 78, y: 150, bias: "left", biasLabel: "Left-Center" },
  { id: "nyt", code: "NYT", x: 118, y: 300, bias: "left", biasLabel: "Left-Center" },
  { id: "npr", code: "NPR", x: 82, y: 430, bias: "left", biasLabel: "Left" },
  { id: "bbc", code: "BBC", x: 300, y: 92, bias: "center", biasLabel: "Center" },
  { id: "ap", code: "AP", x: 300, y: 458, bias: "center", biasLabel: "Center" },
  { id: "wsj", code: "WSJ", x: 486, y: 150, bias: "right", biasLabel: "Right-Center" },
  { id: "fox", code: "FOX", x: 524, y: 300, bias: "right", biasLabel: "Right" },
  { id: "nyp", code: "NYP", x: 480, y: 430, bias: "right", biasLabel: "Right" },
];

const CENTER = { x: 300, y: 275 };

type EdgeKind = "covers" | "aligned" | "contradicts";
interface Edge {
  a: string;
  b: string;
  kind: EdgeKind;
}

const EDGES: Edge[] = [
  ...NODES.map((n) => ({ a: n.id, b: "__event__", kind: "covers" as const })),
  { a: "cnn", b: "nyt", kind: "aligned" },
  { a: "nyt", b: "npr", kind: "aligned" },
  { a: "wsj", b: "fox", kind: "aligned" },
  { a: "fox", b: "nyp", kind: "aligned" },
  { a: "cnn", b: "fox", kind: "contradicts" },
  { a: "nyt", b: "nyp", kind: "contradicts" },
  { a: "npr", b: "wsj", kind: "contradicts" },
];

const EDGE_STYLE: Record<EdgeKind, { stroke: string; width: number; dash?: string; op: number }> = {
  covers: { stroke: "#CBD5E1", width: 1, op: 0.8 },
  aligned: { stroke: "#10B981", width: 1.6, dash: "5 4", op: 0.9 },
  contradicts: { stroke: "#EC4899", width: 1.6, op: 0.95 },
};

function nodeById(id: string) {
  if (id === "__event__") return CENTER;
  return NODES.find((n) => n.id === id)!;
}

const R = 18;

interface NarrativeGraphProps {
  className?: string;
  dark?: boolean;
}

const NarrativeGraph: FC<NarrativeGraphProps> = ({ className, dark = false }) => {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setActive((a) => (a + 1) % NODES.length), 2200);
    return () => clearInterval(id);
  }, [reduced]);

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
  };
  const edgeVarFor = (op: number): Variants =>
    reduced
      ? { hidden: { opacity: op }, visible: { opacity: op } }
      : {
          hidden: { opacity: 0 },
          visible: { opacity: op, transition: { duration: 0.6, ease: easeOutExpo } },
        };
  const nodeVar: Variants = reduced
    ? { hidden: { opacity: 1, scale: 1 }, visible: { opacity: 1, scale: 1 } }
    : {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOutBack } },
      };

  // dark-mode tokens
  const axisLine = dark ? "rgba(255,255,255,0.16)" : "#E4E7EC";
  const axisLabel = dark ? "rgba(255,255,255,0.45)" : "#97A0AD";
  const biasLabelColor = (b: Bias) => (dark ? "rgba(255,255,255,0.6)" : BIAS_COLOR[b]);
  const legendText = dark ? "text-white/60" : "text-secondary-500";

  return (
    <div className={className}>
      <style>{`
        @keyframes ng-flow { to { stroke-dashoffset: -16; } }
        @keyframes ng-spin { to { transform: rotate(360deg); } }
        @keyframes ng-twinkle { 0%,100% { opacity: .45; } 50% { opacity: 1; } }
        .ng-flow { animation: ng-flow 1.1s linear infinite; }
        .ng-spin { animation: ng-spin 16s linear infinite; transform-box: fill-box; transform-origin: center; }
        .ng-twinkle { animation: ng-twinkle 2.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ng-flow, .ng-spin, .ng-twinkle { animation: none !important; }
        }
      `}</style>
      <motion.svg
        viewBox="0 0 600 540"
        className="w-full h-auto"
        role="img"
        aria-label="Narrative graph showing how outlets across the political spectrum frame one event"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* spectrum axis hint */}
        <line x1="60" y1="515" x2="540" y2="515" stroke={axisLine} strokeWidth="1" />
        <text x="60" y="532" fontSize="9" letterSpacing="2" fill={axisLabel} fontFamily="Inter, sans-serif">LEFT</text>
        <text x="540" y="532" fontSize="9" letterSpacing="2" textAnchor="end" fill={axisLabel} fontFamily="Inter, sans-serif">RIGHT</text>

        {/* edges */}
        <g>
          {EDGES.map((e, i) => {
            const a = nodeById(e.a);
            const b = nodeById(e.b);
            const s = EDGE_STYLE[e.kind];
            return (
              <motion.line
                key={`${e.a}-${e.b}-${i}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={s.stroke}
                strokeWidth={s.width}
                strokeDasharray={s.dash}
                strokeLinecap="round"
                variants={edgeVarFor(s.op)}
                className={e.kind === "aligned" ? "ng-flow" : undefined}
              />
            );
          })}
        </g>

        {/* central event node */}
        <g>
          {/* rotating scan ring */}
          {!reduced && (
            <circle
              className="ng-spin"
              cx={CENTER.x}
              cy={CENTER.y}
              r={56}
              fill="none"
              stroke="#6EE7B7"
              strokeOpacity={0.45}
              strokeWidth={1.4}
              strokeDasharray="3 7"
              strokeLinecap="round"
            />
          )}
          <motion.g variants={nodeVar} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <rect
              x={CENTER.x - 80}
              y={CENTER.y - 34}
              width="160"
              height="68"
              rx="16"
              fill={dark ? "rgba(255,255,255,0.06)" : "#16273F"}
              stroke={dark ? "#6EE7B7" : "none"}
              strokeWidth={dark ? 1.5 : 0}
              style={dark ? { filter: "drop-shadow(0 0 10px rgba(110,231,183,0.45))" } : undefined}
            />
            <text x={CENTER.x} y={CENTER.y - 3} textAnchor="middle" fontSize="15" fontWeight="600" fill={dark ? "#FFFFFF" : "#FFFFFF"} fontFamily="Inter, sans-serif">
              War Powers Vote
            </text>
            <text x={CENTER.x} y={CENTER.y + 17} textAnchor="middle" fontSize="10.5" letterSpacing="0.5" fill="#6EE7B7" fontFamily="Inter, sans-serif">
              53 sources · 6 claims
            </text>
          </motion.g>
        </g>

        {/* outlet nodes */}
        <g>
          {NODES.map((n, i) => (
            <g key={n.id} transform={`translate(${n.x} ${n.y})`}>
              {/* cycling scan highlight on the active outlet */}
              {i === active && !reduced && (
                <motion.circle
                  r={R + 7}
                  fill="none"
                  stroke={BIAS_COLOR[n.bias]}
                  strokeWidth={2}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: [0, 0.9, 0], scale: [0.6, 1.2, 1.5] }}
                  transition={{ duration: 2.2, ease: "easeOut" }}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                />
              )}
              <motion.g variants={nodeVar} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
                <circle r={R} fill={BIAS_COLOR[n.bias]} />
                <circle
                  r={R}
                  fill="none"
                  stroke={dark ? "rgba(255,255,255,0.85)" : "#FFFFFF"}
                  strokeWidth={2}
                  className="ng-twinkle"
                  style={{ animationDelay: `${i * 0.22}s` }}
                />
                <text textAnchor="middle" y={4} fontSize="10.5" fontWeight="700" fill="#FFFFFF" fontFamily="Inter, sans-serif">
                  {n.code}
                </text>
              </motion.g>
              <text textAnchor="middle" y={R + 16} fontSize="8.5" letterSpacing="1.2" fontWeight="600" fill={biasLabelColor(n.bias)} fontFamily="Inter, sans-serif">
                {n.biasLabel.toUpperCase()}
              </text>
            </g>
          ))}
        </g>
      </motion.svg>

      {/* legend */}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        <LegendItem color="#CBD5E1" label="covers" textClass={legendText} />
        <LegendItem color="#10B981" label="aligned framing" dashed textClass={legendText} />
        <LegendItem color="#EC4899" label="contradicts" textClass={legendText} />
      </div>
    </div>
  );
};

const LegendItem: FC<{ color: string; label: string; dashed?: boolean; textClass: string }> = ({ color, label, dashed, textClass }) => (
  <div className="flex items-center gap-1.5">
    <svg width="22" height="6">
      <line x1="0" y1="3" x2="22" y2="3" stroke={color} strokeWidth="2" strokeDasharray={dashed ? "4 3" : undefined} strokeLinecap="round" />
    </svg>
    <span className={`font-hanken text-[11px] tracking-wide ${textClass}`}>{label}</span>
  </div>
);

export default NarrativeGraph;
