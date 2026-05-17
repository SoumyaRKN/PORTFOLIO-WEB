"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { staggerContainerVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function StaggerContainer({ children }: PropsWithChildren) {
    const prefersReduced = useReducedMotion();

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants(prefersReduced)}
        >
            {children}
        </motion.div>
    );
}
