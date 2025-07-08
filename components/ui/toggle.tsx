'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cn } from '@/lib/utils';
import styles from './Toggle.module.css';

interface ToggleProps extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}

function toggleVariants({ variant = 'default', size = 'default', className }: { variant?: 'default' | 'outline'; size?: 'default' | 'sm' | 'lg'; className?: string }) {
  return cn(
    styles.toggle,
    styles[variant],
    styles[`size-${size}`],
    className
  );
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant = 'default', size = 'default', ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={toggleVariants({ variant, size, className })}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
