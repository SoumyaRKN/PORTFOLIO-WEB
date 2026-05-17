"use client";

import { motion } from "framer-motion";
import type { Education, Experience, Skill } from "@/types/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { slideUpVariants, staggerContainerVariants, scaleInVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ResumeContentProps {
    name: string;
    role: string;
    yearsExperience: string;
    location: string;
    about: string;
    experiences: Experience[];
    skills: Skill[];
    education: Education[];
}

export function ResumeContent({
    name,
    role,
    yearsExperience,
    location,
    about,
    experiences,
    skills,
    education,
}: ResumeContentProps) {
    const prefersReduced = useReducedMotion();
    const keyStrengths = [
        "Backend architecture and API platform delivery",
        "Production debugging and performance optimization",
        "Cross-team collaboration across product, QA, and operations",
    ];
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
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 space-y-16">
            {/* Header */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={slideUpVariants(prefersReduced)}
            >
                <h1 className="text-4xl font-semibold tracking-tight text-foreground">{name}</h1>
                <p className="mt-2 text-muted-foreground">
                    {role} · {yearsExperience} years · {location}
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{about}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {keyStrengths.map((item) => (
                        <div key={item} className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted-foreground">
                            {item}
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Experience */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideUpVariants(prefersReduced)}
            >
                <SectionHeading level={2}>Experience</SectionHeading>
                <motion.div
                    className="mt-6 space-y-4"
                    variants={staggerContainerVariants(prefersReduced)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {experiences.map((item) => (
                        <motion.div
                            key={`${item.company}-${item.period}`}
                            variants={scaleInVariants(prefersReduced)}
                            className="rounded-xl border border-border bg-surface p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                                    <p className="text-muted-foreground">{item.company}</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {item.location} {item.mode && `· ${item.mode}`}
                                    </p>
                                </div>
                                <Badge variant="outline" className="w-fit text-xs mt-2 sm:mt-0">
                                    {item.period}
                                </Badge>
                            </div>
                            <ul className="mt-4 space-y-2">
                                {item.highlights.map((highlight) => (
                                    <li key={highlight} className="flex gap-2 text-sm text-muted-foreground">
                                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Skills by Category */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideUpVariants(prefersReduced)}
            >
                <SectionHeading level={2}>Technical Skills</SectionHeading>
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
                            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                                {categorySkills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={scaleInVariants(prefersReduced)}
                                        className="rounded-lg border border-border bg-surface px-4 py-3 flex items-center justify-between hover:shadow-sm transition-shadow"
                                    >
                                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                                        <Badge variant="muted" className="text-xs flex-shrink-0">
                                            {skill.level}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Education */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideUpVariants(prefersReduced)}
            >
                <SectionHeading level={2}>Education</SectionHeading>
                <motion.div
                    className="mt-6 space-y-4"
                    variants={staggerContainerVariants(prefersReduced)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {education.map((item) => (
                        <motion.div
                            key={`${item.institution}-${item.completion}`}
                            variants={scaleInVariants(prefersReduced)}
                            className="rounded-xl border border-border bg-surface p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
                                    <p className="text-muted-foreground">{item.institution}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{item.location}</p>
                                </div>
                                <Badge variant="outline" className="w-fit text-xs mt-2 sm:mt-0">
                                    {item.completion}
                                </Badge>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    );
}
