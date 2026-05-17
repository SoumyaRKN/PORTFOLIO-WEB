"use client";

import { motion } from "framer-motion";

export function LoadingDots() {
    const containerVariants = {
        animate: { opacity: 1 },
    };

    const dotVariants = {
        animate: {
            y: [0, -8, 0],
            transition: {
                duration: 0.6,
                repeat: Infinity,
            },
        },
    };

    return (
        <motion.div
            className="flex gap-1"
            variants={containerVariants}
            initial="hidden"
            animate="animate"
        >
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="h-2 w-2 rounded-full bg-current"
                    variants={dotVariants}
                    transition={{ delay: i * 0.1 }}
                />
            ))}
        </motion.div>
    );
}
