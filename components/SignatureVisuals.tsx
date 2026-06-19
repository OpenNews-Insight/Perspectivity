"use client";

/**
 * SignatureVisuals — compact, static renditions of Perspectivity's four other
 * signature visualizations (Narrative Graph lives in its own component).
 * Faithful to mockups B/C/D/E from Docs/Perspectivity_NarrativeIntelligence_Mockup.
 * Light-styled to match the editorial aesthetic. Showcase tiles, not interactive.
 */
import { type FC } from "react";

/* ───────────────────────── B · Event Prism ─────────────────────────
   A raw event refracts into five framings across the political spectrum. */
export const EventPrism: FC<{ className?: string }> = ({ className }) => {
  const framings = [
    { y: 30, color: "#3B82F6", label: "Left", head: "Forces Trump to stand down" },
    { y: 74, color: "#60A5FA", label: "Left-Center", head: "Bipartisan House reins in" },
    { y: 118, color: "#94A3B8", label: "Center", head: "House passes resolution" },
    { y: 162, color: "#F87171", label: "Right-Center", head: "Limits President amid tension" },
    { y: 206, color: "#DC2626", label: "Right", head: "Ties Trump's hands as Iran strikes" },
  ];
  return (
    <svg viewBox="0 0 480 240" className={className} role="img" aria-label="Event prism: one event refracted into five framings">
      {/* raw event */}
      <rect x="14" y="92" width="128" height="56" rx="10" fill="#16273F" />
      <text x="78" y="113" textAnchor="middle" fontSize="8.5" letterSpacing="1.4" fill="#6EE7B7" fontFamily="Inter,sans-serif">RAW EVENT</text>
      <text x="78" y="132" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#FFFFFF" fontFamily="Inter,sans-serif">War Powers Vote</text>
      {/* prism */}
      <polygon points="186,78 186,162 248,120" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
      <polygon points="186,78 186,162 248,120" fill="url(#prismG)" opacity="0.5" />
      <defs>
        <linearGradient id="prismG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3B82F6" />
          <stop offset="0.5" stopColor="#94A3B8" />
          <stop offset="1" stopColor="#DC2626" />
        </linearGradient>
      </defs>
      {/* rays + framing chips */}
      {framings.map((f, i) => (
        <g key={i}>
          <line x1="248" y1="120" x2="320" y2={f.y + 13} stroke={f.color} strokeWidth="1.4" opacity="0.55" />
          <rect x="320" y={f.y} width="146" height="26" rx="8" fill="#FFFFFF" stroke="#E4E7EC" />
          <rect x="320" y={f.y} width="3" height="26" rx="1.5" fill={f.color} />
          <circle cx="335" cy={f.y + 13} r="4" fill={f.color} />
          <text x="345" y={f.y + 11} fontSize="9.5" fontWeight="600" fill="#31363F" fontFamily="Inter,sans-serif">{f.head}</text>
          <text x="345" y={f.y + 21} fontSize="7" letterSpacing="0.6" fill={f.color} fontFamily="Inter,sans-serif">{f.label.toUpperCase()}</text>
        </g>
      ))}
    </svg>
  );
};

/* ───────────────────────── C · Stance Drift ─────────────────────────
   An actor's stance migrating across Supportive / Neutral / Critical over time. */
export const StanceDrift: FC<{ className?: string }> = ({ className }) => {
  const months = ["JAN", "MAR", "MAY", "JUL", "SEP", "NOV"];
  // path wanders across the three bands
  return (
    <svg viewBox="0 0 480 240" className={className} role="img" aria-label="Stance drift over time">
      {/* bands */}
      <rect x="0" y="20" width="480" height="66" fill="#ECFDF5" />
      <rect x="0" y="86" width="480" height="66" fill="#F4F5F7" />
      <rect x="0" y="152" width="480" height="66" fill="#FCE8EC" />
      <text x="10" y="40" fontSize="8" letterSpacing="1.2" fill="#0E7A50" fontFamily="Inter,sans-serif">SUPPORTIVE</text>
      <text x="10" y="106" fontSize="8" letterSpacing="1.2" fill="#6A788D" fontFamily="Inter,sans-serif">NEUTRAL</text>
      <text x="10" y="172" fontSize="8" letterSpacing="1.2" fill="#B91C1C" fontFamily="Inter,sans-serif">CRITICAL</text>
      {/* drift line */}
      <path
        d="M40,55 C90,55 110,120 160,118 C200,116 215,180 260,178 C300,176 320,110 360,108 C400,106 420,60 450,58"
        fill="none"
        stroke="#16273F"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* annotations */}
      <g>
        <circle cx="200" cy="150" r="4.5" fill="#10B981" />
        <rect x="150" y="124" width="100" height="18" rx="9" fill="#FFFFFF" stroke="#10B981" />
        <text x="200" y="137" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#0E7A50" fontFamily="Inter,sans-serif">Softening</text>
      </g>
      <g>
        <circle cx="360" cy="108" r="4.5" fill="#DC2626" />
        <rect x="332" y="80" width="92" height="18" rx="9" fill="#FFFFFF" stroke="#DC2626" />
        <text x="378" y="93" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#B91C1C" fontFamily="Inter,sans-serif">Hardening</text>
      </g>
      {/* month axis */}
      {months.map((m, i) => (
        <text key={m} x={40 + i * 82} y="232" textAnchor="middle" fontSize="8" letterSpacing="1" fill="#97A0AD" fontFamily="Inter,sans-serif">{m}</text>
      ))}
    </svg>
  );
};

/* ───────────────────────── D · Narrative Momentum ─────────────────────────
   Ranked narratives with momentum sparklines + a suppression signal. */
const Spark: FC<{ kind: "up" | "down" | "fade" | "suppress" }> = ({ kind }) => {
  const color = kind === "up" ? "#10B981" : kind === "suppress" ? "#DC2626" : kind === "fade" ? "#94A3B8" : "#3B82F6";
  const d =
    kind === "up" ? "M0,18 L8,14 16,15 24,8 32,4"
    : kind === "suppress" ? "M0,4 L8,8 16,7 24,14 32,18"
    : kind === "fade" ? "M0,6 L8,9 16,11 24,13 32,16"
    : "M0,11 L8,10 16,12 24,10 32,11";
  return (
    <svg width="34" height="22" viewBox="0 0 34 22">
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const NarrativeMomentum: FC<{ className?: string }> = ({ className }) => {
  const rows: { rank: string; text: string; kind: "up" | "down" | "fade" | "suppress"; signal: string; by: number; suppress?: boolean }[] = [
    { rank: "01", text: "War powers vote is a constitutional victory", kind: "up", signal: "Rising", by: 41 },
    { rank: "02", text: "“Iran struck US forces first”", kind: "suppress", signal: "Suppressed", by: 9, suppress: true },
    { rank: "03", text: "Bipartisan rebuke of the President", kind: "up", signal: "Rising", by: 33 },
    { rank: "04", text: "Democrats endanger national security", kind: "fade", signal: "Fading", by: 14 },
  ];
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="font-hanken text-[9px] tracking-[0.18em] uppercase text-secondary-400">Momentum · last 72h</span>
        <span className="font-hanken text-[9px] tracking-[0.14em] uppercase text-secondary-400">United States</span>
      </div>
      <div className="rounded-xl border border-line overflow-hidden">
        {rows.map((r) => (
          <div
            key={r.rank}
            className="flex items-center gap-3 px-3 py-2.5 border-b border-line last:border-b-0"
            style={{ background: r.suppress ? "#FEF2F2" : "#FFFFFF" }}
          >
            <span className="font-hanken text-[11px] font-semibold text-secondary-300 w-5">{r.rank}</span>
            <span className="font-hanken text-[12px] text-navy flex-1 min-w-0 leading-tight truncate">{r.text}</span>
            <Spark kind={r.kind} />
            <span
              className="font-hanken text-[9px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full"
              style={{
                color: r.signal === "Rising" ? "#0E7A50" : r.signal === "Suppressed" ? "#B91C1C" : "#6A788D",
                background: r.signal === "Rising" ? "#ECFDF5" : r.signal === "Suppressed" ? "#FEE2E2" : "#F4F5F7",
              }}
            >
              {r.signal}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-lg bg-navy px-3 py-2.5">
        <p className="font-hanken text-[9px] tracking-[0.16em] uppercase text-primary-300 mb-0.5">Suppression signal</p>
        <p className="font-hanken text-[11px] text-white/85 leading-snug">
          “Iran struck US forces first” is amplified by right-leaning sources — absent from 13 left &amp; center outlets.
        </p>
      </div>
    </div>
  );
};

/* ───────────────────────── E · Affiliation Network ─────────────────────────
   Entities linked by confidence-scored ties: confirmed / medium / alleged. */
export const AffiliationNetwork: FC<{ className?: string }> = ({ className }) => {
  const C = { cx: 240, cy: 130 };
  const nodes = [
    { id: "a", x: 80, y: 70, label: "Meghna Group", conf: "confirmed", color: "#16273F" },
    { id: "b", x: 400, y: 64, label: "Padma Holdings", conf: "medium", color: "#3B82F6" },
    { id: "c", x: 96, y: 196, label: "Party X", conf: "alleged", color: "#8B5CF6" },
    { id: "d", x: 392, y: 198, label: "BASIS", conf: "confirmed", color: "#10B981" },
    { id: "e", x: 240, y: 36, label: "Sister outlet", conf: "medium", color: "#EC4899" },
  ];
  const edgeColor: Record<string, string> = { confirmed: "#10B981", medium: "#E0A030", alleged: "#8B5CF6" };
  const edgeDash: Record<string, string | undefined> = { confirmed: undefined, medium: "5 3", alleged: "2 4" };
  return (
    <svg viewBox="0 0 480 240" className={className} role="img" aria-label="Affiliation network with confidence-scored ties">
      {/* edges */}
      {nodes.map((n) => (
        <line
          key={`e-${n.id}`}
          x1={C.cx}
          y1={C.cy}
          x2={n.x}
          y2={n.y}
          stroke={edgeColor[n.conf]}
          strokeWidth="1.6"
          strokeDasharray={edgeDash[n.conf]}
          opacity="0.7"
        />
      ))}
      {/* central node */}
      <circle cx={C.cx} cy={C.cy} r="30" fill="#16273F" />
      <text x={C.cx} y={C.cy - 2} textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#FFFFFF" fontFamily="Inter,sans-serif">জনমত TV</text>
      <text x={C.cx} y={C.cy + 11} textAnchor="middle" fontSize="7" fill="#6EE7B7" fontFamily="Inter,sans-serif">8.4L subs</text>
      {/* nodes */}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="13" fill="#FFFFFF" stroke={n.color} strokeWidth="2.4" />
          <text x={n.x} y={n.y + 34} textAnchor="middle" fontSize="9" fontWeight="600" fill="#31363F" fontFamily="Inter,sans-serif">{n.label}</text>
        </g>
      ))}
      {/* legend */}
      <g transform="translate(14,222)">
        {(["confirmed", "medium", "alleged"] as const).map((c, i) => (
          <g key={c} transform={`translate(${i * 130},0)`}>
            <line x1="0" y1="0" x2="18" y2="0" stroke={edgeColor[c]} strokeWidth="2" strokeDasharray={edgeDash[c]} />
            <text x="24" y="3.5" fontSize="8" letterSpacing="0.5" fill="#6A788D" fontFamily="Inter,sans-serif">{c.toUpperCase()}</text>
          </g>
        ))}
      </g>
    </svg>
  );
};
