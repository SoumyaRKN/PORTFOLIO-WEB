export type NavItem = {
    label: string;
    href: string;
};

export type SocialLink = {
    label: string;
    href: string;
};

export type ProjectImage = {
    src: string;
    alt: string;
};

export type Project = {
    slug: string;
    title: string;
    summary: string;
    description: string;
    role: string;
    year: string;
    domain?: string;
    backendFocus?: string;
    challenge?: string;
    solution?: string;
    impact?: string[];
    architecture?: string[];
    href?: string;
    technologies: string[];
    highlights: string[];
    images: ProjectImage[];
};

export type Skill = {
    name: string;
    category: "Backend" | "Frameworks" | "Databases" | "DevOps" | "Frontend" | "Tools" | "Other";
    level: "Advanced" | "Proficient" | "Working";
};

export type Experience = {
    company: string;
    role: string;
    period: string;
    location: string;
    mode?: "Remote" | "Onsite" | "Hybrid";
    highlights: string[];
};

export type Education = {
    degree: string;
    institution: string;
    location: string;
    completion: string;
};
