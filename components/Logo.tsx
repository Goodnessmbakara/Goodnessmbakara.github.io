import React from "react";

// Modern, geometric monogram logo for GMB (Goodness Mbakara)
// Colors: Deep blue and teal for a tech-forward, professional look
const LOGO_GRADIENT = "url(#gmb-gradient)";

export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Goodness Mbakara Logo"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="gmb-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A237E" /> {/* Deep blue */}
          <stop offset="1" stopColor="#00BFAE" /> {/* Teal */}
        </linearGradient>
      </defs>
      {/* G */}
      <path
        d="M16 32c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16"
        stroke={LOGO_GRADIENT}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* M */}
      <path
        d="M20 44V24l12 12 12-12v20"
        stroke={LOGO_GRADIENT}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* B (abstract, right side) */}
      <path
        d="M44 24c4 0 6 2 6 8s-2 8-6 8"
        stroke={LOGO_GRADIENT}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
} 