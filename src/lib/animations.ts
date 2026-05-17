/**
 * Animation utilities and helpers for the portfolio
 * Respects prefers-reduced-motion for accessibility
 */

import type { Variants } from "framer-motion";

const MOTION_DURATION = {
    quick: 0.2,
    standard: 0.45,
    slow: 0.6,
};

export const fadeInVariants = (shouldReduce: boolean): Variants => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: shouldReduce ? 0 : MOTION_DURATION.slow,
        },
    },
});

export const slideUpVariants = (shouldReduce: boolean): Variants => ({
    hidden: { opacity: 0, y: shouldReduce ? 0 : 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: shouldReduce ? 0 : MOTION_DURATION.slow,
            ease: "easeOut",
        },
    },
});

export const staggerContainerVariants = (shouldReduce: boolean): Variants => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: shouldReduce ? 0 : 0.1,
            delayChildren: shouldReduce ? 0 : 0.1,
        },
    },
});

export const scaleInVariants = (shouldReduce: boolean): Variants => ({
    hidden: { opacity: 0, scale: shouldReduce ? 1 : 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: shouldReduce ? 0 : MOTION_DURATION.standard,
            ease: "easeOut",
        },
    },
});

export const hoverScaleVariants: Variants = {
    hover: { scale: 1.015, y: -2, transition: { duration: MOTION_DURATION.quick } },
    tap: { scale: 0.98 },
};

export const buttonHoverVariants: Variants = {
    hover: { y: -2, transition: { duration: MOTION_DURATION.quick } },
    tap: { y: 0 },
};
