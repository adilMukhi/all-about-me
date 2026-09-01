import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 96,
          fontWeight: 700,
          color: "#ffffff",
          background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 50%, #14b8a6 100%)",
          fontFamily: "Verdana, Geneva, sans-serif",
        }}
      >
        AM
      </div>
    ),
    { ...size },
  )
}
