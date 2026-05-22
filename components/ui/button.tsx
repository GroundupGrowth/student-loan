import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--navy)] text-white hover:bg-[#163654] active:bg-[#0b2238]",
        secondary:
          "border border-[var(--navy)] bg-transparent text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white",
        ghost:
          "bg-transparent text-[var(--navy)] hover:bg-[var(--cream)]",
        link:
          "bg-transparent p-0 text-[var(--navy)] underline-offset-4 hover:text-[var(--gold)] hover:underline",
        onNavy:
          "bg-white text-[var(--navy)] hover:bg-[var(--cream)]",
        onNavyOutline:
          "border border-white/70 bg-transparent text-white hover:bg-white hover:text-[var(--navy)]",
      },
      size: {
        md: "h-11 px-[14px] py-[10px]",
        lg: "h-12 px-5",
        sm: "h-9 px-3 text-[14px]",
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
