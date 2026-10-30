import { ImageResponse } from "next/og";

export const alt = "Goodness Mbakara — Ideas are cheap. Execution ships.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(165deg, #f3effa 0%, #f7f4fc 40%, #ebe4f6 100%)",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Dot grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, #c4b8dc 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
            opacity: 0.55,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#6d28d9",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            GoodnessMbakara.eth
          </div>

          <div
            style={{
              fontSize: 64,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#1a1528",
              fontStyle: "italic",
              maxWidth: 900,
            }}
          >
            Ideas are cheap. Execution ships.
          </div>

          <div
            style={{
              fontSize: 26,
              lineHeight: 1.45,
              color: "#524a66",
              fontFamily: "system-ui, sans-serif",
              maxWidth: 780,
              marginTop: 8,
            }}
          >
            Software engineer shipping proof of work — not proof of concept.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ fontSize: 20, color: "#524a66" }}>
            www.goodnessmbakara.online
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#6d28d9",
              border: "1.5px solid #ddd6ee",
              borderRadius: 10,
              padding: "10px 18px",
              background: "rgba(255,255,255,0.9)",
            }}
          >
            Software Engineer & Builder
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
