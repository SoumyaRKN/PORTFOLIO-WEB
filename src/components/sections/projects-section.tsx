"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/content/site";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { slideUpVariants, staggerContainerVariants, scaleInVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ProjectsSection() {
    const prefersReduced = useReducedMotion();

    return (
        <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideUpVariants(prefersReduced)}
            >
                <SectionHeading subtitle="Enterprise-minded product work with backend systems focus, delivery ownership, and measurable outcomes.">
                    Selected Projects
                </SectionHeading>
            </motion.div>

            <motion.div
                className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={staggerContainerVariants(prefersReduced)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.slug}
                        variants={scaleInVariants(prefersReduced)}
                    >
                        <Card interactive className="h-full p-6">
                            <div className="flex items-center justify-between gap-3">
                                <Badge variant="outline" className="text-xs font-medium">
                                    {project.year}
                                </Badge>
                                <p className="text-xs text-muted-foreground">{project.role}</p>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-foreground">{project.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
                            {project.backendFocus && (
                                <p className="mt-4 text-sm font-medium text-foreground">{project.backendFocus}</p>
                            )}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.technologies.slice(0, 3).map((tech) => (
                                    <Badge key={tech} variant="muted" className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                            {project.impact?.[0] && (
                                <p className="mt-4 text-sm text-muted-foreground">
                                    {project.impact[0]}
                                </p>
                            )}
                            <Link
                                href={`/project/${project.slug}`}
                                className="mt-5 inline-block text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                            >
                                View details →
                            </Link>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
