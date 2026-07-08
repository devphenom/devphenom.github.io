import { ImageResponse } from "next/og";

import { profile, site } from "@/lib/constants";

export const dynamic = "force-static";
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = {
  bg: "#09090b",
  text: "#fafafa",
  muted: "#a1a1aa",
  border: "#27272a",
  accent: "#10b981",
};

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        backgroundColor: COLORS.bg,
        backgroundImage:
          "radial-gradient(circle at 100% 0%, rgba(16,185,129,0.10), transparent 45%)",
        color: COLORS.text,
        fontFamily: "sans-serif",
      }}
    >
      {/* Availability pill */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          alignSelf: "flex-start",
          padding: "12px 24px",
          border: `1px solid ${COLORS.border}`,
          borderRadius: "9999px",
          fontSize: "26px",
          color: COLORS.muted,
        }}
      >
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "9999px",
            backgroundColor: COLORS.accent,
          }}
        />
        Open to work
      </div>

      {/* Name + role */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: "104px",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            marginTop: "20px",
            fontSize: "48px",
            fontWeight: 500,
            color: COLORS.muted,
          }}
        >
          {profile.role}
        </div>
      </div>

      {/* Footer: tech + url */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "28px",
          color: COLORS.muted,
        }}
      >
        <div style={{ display: "flex" }}>
          React · Next.js · React Native · Node.js
        </div>
        <div style={{ display: "flex", color: COLORS.text }}>
          {site.url.replace("https://", "")}
        </div>
      </div>
    </div>,
    size,
  );
}
