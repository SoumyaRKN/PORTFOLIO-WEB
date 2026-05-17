"use client";

import type { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { hoverScaleVariants } from "@/lib/animations";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "elevated" | "ghost";
    interactive?: boolean;
}

export function Card({ className, variant = "default", interactive = false, ...props }: CardProps) {
    const prefersReduced = useReducedMotion();

    const baseStyles = cn(
        "rounded-xl border border-border bg-surface text-surface-foreground transition-all",
        variant === "default" && "shadow-sm",
        variant === "elevated" && "shadow-md hover:shadow-lg",
        variant === "ghost" && "border-transparent",
        interactive && "cursor-pointer hover:shadow-md",
        className,
    );

    const Component = interactive ? motion.div : "div";

    return (
        <Component
            className={baseStyles}
            variants={interactive ? hoverScaleVariants : undefined}
            whileHover={interactive && !prefersReduced ? "hover" : undefined}
            whileTap={interactive && !prefersReduced ? "tap" : undefined}
            {...(props as any)}
        />
    );
}
