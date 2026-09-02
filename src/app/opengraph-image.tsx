import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Farteks Hydraulic Cylinder Components Manufacturer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 55%, #f1f0fa 100%)",
          color: "#111827",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: 7,
              color: "#E5322D",
            }}
          >
            FARTEKS
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 800,
              maxWidth: 900,
            }}
          >
            Hydraulic Cylinder Components
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 28,
              color: "#475569",
            }}
          >
            Precision manufacturing for OEM partners worldwide.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #392B87",
            paddingTop: 22,
            fontSize: 20,
            color: "#392B87",
            fontWeight: 700,
          }}
        >
          <span>Manufactured in Turkey</span>
          <span>FARTEKS.COM</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
