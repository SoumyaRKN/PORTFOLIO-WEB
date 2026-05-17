"use client";

import { motion } from "framer-motion";
import { experiences } from "@/content/site";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { slideUpVariants, staggerContainerVariants, scaleInVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ExperienceSection() {
    const prefersReduced = useReducedMotion();

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideUpVariants(prefersReduced)}
            >
                <SectionHeading subtitle="Backend-focused delivery across enterprise product teams, production operations, and architecture-driven execution.">
                    Experience
                </SectionHeading>
            </motion.div>

            <motion.div
                className="mt-8 space-y-5"
                variants={staggerContainerVariants(prefersReduced)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {experiences.map((item) => (
                    <motion.div
                        key={`${item.company}-${item.period}`}
                        variants={scaleInVariants(prefersReduced)}
                    >
                        <Card className="p-6 transition-shadow hover:shadow-md">
                            <div className="relative pl-5">
                                <span className="absolute left-0 top-1.5 h-full w-px bg-border" aria-hidden="true" />
                                <span className="absolute -left-1 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />

                                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                                        <p className="text-sm font-medium text-foreground/90">{item.company}</p>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                                        <Badge variant="outline" className="w-fit text-xs">
                                            {item.period}
                                        </Badge>
                                        <Badge variant="muted" className="w-fit text-xs">
                                            {item.location}
                                        </Badge>
                                        {item.mode && (
                                            <Badge variant="muted" className="w-fit text-xs">
                                                {item.mode}
                                            </Badge>
                                        )}
                                    </div>
                                </div>

                                <ul className="mt-4 space-y-2">
                                    {item.highlights.map((highlight) => (
                                        <li key={highlight} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
