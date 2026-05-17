"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { slideUpVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface FadeInSectionProps extends PropsWithChildren {
    delay?: number;
}

export function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
    const prefersReduced = useReducedMotion();

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUpVariants(prefersReduced)}
            transition={{ delay: prefersReduced ? 0 : delay * 0.1 }}
        >
            {children}
        </motion.div>
    );
}
