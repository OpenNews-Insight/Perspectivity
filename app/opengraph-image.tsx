import { ImageResponse } from "next/og";

export const alt = "Perspectivity — Narrative Intelligence Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#16273F",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              background: "#6EE7B7",
              borderRadius: 14,
              fontSize: 38,
              fontWeight: 700,
              color: "#16273F",
            }}
          >
            P
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>
            perspectivity.co
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 36, fontWeight: 700, color: "#6EE7B7", letterSpacing: 4, textTransform: "uppercase" }}>
            Narrative Intelligence Platform
          </div>
          <div style={{ display: "flex", fontSize: 74, fontWeight: 800, color: "#FFFFFF", lineHeight: 1.05, maxWidth: 980 }}>
            See how every outlet frames the same story.
          </div>
          <div
            style={{
              display: "flex",
              width: 520,
              height: 14,
              borderRadius: 8,
              backgroundImage: "linear-gradient(90deg,#3B82F6 0%,#94A3B8 50%,#DC2626 100%)",
            }}
          />
          <div style={{ display: "flex", fontSize: 28, color: "rgba(255,255,255,0.7)" }}>
            Left · Center · Right — in English and Bangla.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
