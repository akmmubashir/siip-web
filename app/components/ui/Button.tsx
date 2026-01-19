import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const variants = {
      primary:
        "bg-zinc-100 text-black hover:bg-zinc-300 border border-transparent",
      secondary:
        "bg-zinc-900 text-zinc-100 hover:bg-zinc-800 border border-zinc-800",
      outline:
        "bg-transparent text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-zinc-100",
    };
    return (
      <motion.button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          className,
        )}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.2,
        }}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);
Button.displayName = "Button";
export { Button };
