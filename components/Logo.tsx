import React from "react";

export default function Logo({
  size = 48,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) {
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
      {/* G */}
      <path
        d="M16 32c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* M */}
      <path
        d="M20 44V24l12 12 12-12v20"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* B (abstract, right side) */}
      <path
        d="M44 24c4 0 6 2 6 8s-2 8-6 8"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
