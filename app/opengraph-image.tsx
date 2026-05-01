import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "EV vs Petrol Cost Calculator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1b1f24",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            background: "#16a34a",
            borderRadius: "999px",
            padding: "8px 20px",
            fontSize: 18,
            fontWeight: 700,
            color: "white",
            marginBottom: 32,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Free Calculator
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          EV vs Petrol Cost Calculator
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#c9d1d9",
            lineHeight: 1.5,
            maxWidth: 800,
            marginBottom: 48,
          }}
        >
          See exactly how much you save switching to electric. Compare total running costs in under 2 minutes.
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#16a34a",
            fontWeight: 600,
          }}
        >
          evrunningcosts.com
        </div>
      </div>
    ),
    size
  );
}
