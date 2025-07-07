import * as React from "react";
import styles from "./Badge.module.css";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const variantClass = styles[variant] || "";
  return (
    <div
      className={`${styles.badge} ${variantClass} ${className}`.trim()}
      {...props}
    />
  );
}

export { Badge };
