import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

// buttonVariants function for compatibility with other UI components
export const buttonVariants = (props?: { variant?: string; size?: string }) => {
  const variant = props?.variant || "default";
  const size = props?.size || "default";

  const variantClass = styles[variant] || "";
  const sizeClass = styles[size] || "";

  return `${styles.button} ${variantClass} ${sizeClass}`.trim();
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const variantClass = styles[variant] || "";
    const sizeClass = styles[size] || "";
    return (
      <Comp
        className={`${styles.button} ${variantClass} ${sizeClass} ${className}`.trim()}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
