"use client";

import { motion } from "framer-motion";
import { skills } from "@/content/site";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { slideUpVariants, staggerContainerVariants, scaleInVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function SkillsSection() {
    const prefersReduced = useReducedMotion();
    const groupedSkills = skills.reduce(
        (acc, skill) => {
            const key = skill.category;
            if (!acc[key]) acc[key] = [];
            acc[key].push(skill);
            return acc;
        },
        {} as Record<string, typeof skills>,
    );

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideUpVariants(prefersReduced)}
            >
                <SectionHeading subtitle="Core technologies used for backend delivery, data systems, infrastructure, and full product execution.">
                    Skills & Expertise
                </SectionHeading>
            </motion.div>

            <motion.div
                className="mt-8 space-y-8"
                variants={staggerContainerVariants(prefersReduced)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                    <motion.div key={category} variants={slideUpVariants(prefersReduced)}>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            {category}
                        </h3>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {categorySkills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    variants={scaleInVariants(prefersReduced)}
                                >
                                    <Card interactive className="flex items-center justify-between p-4">
                                        <p className="font-medium text-foreground">{skill.name}</p>
                                        <Badge variant="muted" className="text-xs">
                                            {skill.level}
                                        </Badge>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
