"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { buttonHoverVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80",
                outline: "border border-border bg-background text-foreground hover:bg-muted",
                ghost: "hover:bg-muted text-foreground",
                destructive: "bg-danger text-danger-foreground hover:bg-danger/90",
            },
            size: {
                sm: "h-9 px-3 text-xs",
                md: "h-10 px-4 text-sm",
                lg: "h-11 px-6 text-base",
                icon: "h-10 w-10 p-0",
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
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, isLoading, disabled, children, ...props }, ref) => {
        const prefersReduced = useReducedMotion();

        return (
            <motion.button
                ref={ref as any}
                className={cn(buttonVariants({ variant, size }), className)}
                variants={buttonHoverVariants}
                whileHover={prefersReduced ? {} : "hover"}
                whileTap={prefersReduced ? {} : "tap"}
                disabled={disabled || isLoading}
                {...(props as any)}
            >
                {isLoading ? (
                    <>
                        <span className="animate-pulse">●●●</span>
                    </>
                ) : (
                    children
                )}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
