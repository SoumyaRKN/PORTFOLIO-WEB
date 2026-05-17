"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteIdentity } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";
import { slideUpVariants, staggerContainerVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function HeroSection() {
    const prefersReduced = useReducedMotion();
    const credibilityPoints = [
        "4.7+ years in production delivery",
        "Node.js, PHP, Python backend ecosystems",
        "API architecture, integrations, and scaling",
    ];

    const expertiseTags = ["System Design", "API Platforms", "Microservices", "DevOps Collaboration"];

    return (
        <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
            <motion.div
                className="max-w-4xl space-y-8"
                variants={staggerContainerVariants(prefersReduced)}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={slideUpVariants(prefersReduced)}>
                    <Badge variant="outline" className="tracking-wide">
                        {siteIdentity.role}
                    </Badge>
                </motion.div>

                <motion.h1
                    className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                    variants={slideUpVariants(prefersReduced)}
                >
                    {siteIdentity.headline}
                </motion.h1>

                <motion.p
                    className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg"
                    variants={slideUpVariants(prefersReduced)}
                >
                    {siteIdentity.about}
                </motion.p>

                <motion.ul
                    className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2"
                    variants={slideUpVariants(prefersReduced)}
                >
                    {credibilityPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            <span>{point}</span>
                        </li>
                    ))}
                </motion.ul>

                <motion.div className="flex flex-wrap gap-2" variants={slideUpVariants(prefersReduced)}>
                    {expertiseTags.map((tag) => (
                        <Badge key={tag} variant="muted" className="font-medium">
                            {tag}
                        </Badge>
                    ))}
                </motion.div>

                <motion.div
                    className="flex flex-wrap items-center gap-4 pt-2"
                    variants={slideUpVariants(prefersReduced)}
                >
                    <Link href="/resume" className={cn(buttonVariants({ size: "lg" }))}>
                        View Resume
                    </Link>
                    <Link href="#projects" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                        Explore Projects
                    </Link>
                    <a href={`mailto:${siteIdentity.email}`} className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
