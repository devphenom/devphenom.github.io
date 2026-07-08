import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#09090b",
        color: "#fafafa",
        fontSize: "104px",
        fontWeight: 700,
        fontFamily: "sans-serif",
        letterSpacing: "-0.06em",
      }}
    >
      AA
    </div>,
    size,
  );
}
