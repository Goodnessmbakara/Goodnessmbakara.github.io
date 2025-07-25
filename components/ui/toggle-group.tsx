"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import type {
  ToggleGroupSingleProps,
  ToggleGroupMultipleProps,
} from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<{
  size?: string;
  variant?: string;
}>({
  size: "default",
  variant: "default",
});

type CustomToggleGroupProps = {
  variant?: string;
  size?: string;
};

type ToggleGroupProps =
  | (ToggleGroupSingleProps & CustomToggleGroupProps)
  | (ToggleGroupMultipleProps & CustomToggleGroupProps);

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<"button"> {
  value: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

function getVariant(val: unknown): "default" | "outline" {
  return val === "outline" ? "outline" : "default";
}
function getSize(val: unknown): "default" | "sm" | "lg" {
  return val === "sm" || val === "lg" ? val : "default";
}

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: getVariant(context.variant ?? variant),
          size: getSize(context.size ?? size),
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
