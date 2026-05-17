"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { hoverScaleVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ScaleOnHover({ children }: PropsWithChildren) {
    const prefersReduced = useReducedMotion();

    return (
        <motion.div
            variants={hoverScaleVariants}
            whileHover={prefersReduced ? {} : "hover"}
            whileTap={prefersReduced ? {} : "tap"}
        >
            {children}
        </motion.div>
    );
}
