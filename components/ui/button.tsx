import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[15px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--coral-soft)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--coral)] text-white hover:bg-[var(--coral-deep)] hover:-translate-y-px",
        // Stamp variant — bold, with a hard ink-colored shadow underneath.
        // Use sparingly (hero / final CTA band) for extra punch.
        stamp:
          "bg-[var(--coral)] text-white shadow-stamp hover:shadow-stamp-coral hover:bg-[var(--coral-deep)] hover:translate-y-[1px] active:translate-y-[2px] active:shadow-[0_2px_0_var(--coral-deep)]",
        secondary:
          "border-[1.5px] border-[var(--ink)] bg-transparent text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white",
        ghost:
          "bg-transparent text-[var(--ink)] hover:bg-[var(--surface-deep)]",
        link:
          "bg-transparent p-0 text-[var(--ink)] underline-offset-4 hover:text-[var(--coral)] hover:underline",
        onNavy:
          "bg-[var(--coral)] text-white hover:bg-[var(--coral-deep)] hover:-translate-y-px",
        onNavyOutline:
          "border-[1.5px] border-white/80 bg-transparent text-white hover:bg-white hover:text-[var(--ink-deep)]",
      },
      size: {
        sm: "h-9 px-4 text-[14px]",
        md: "h-11 px-[22px]",
        lg: "h-[52px] px-7 text-[16px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
