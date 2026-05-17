import type { Metadata } from "next";
import { education, experiences, siteIdentity, skills } from "@/content/site";
import { siteConfig } from "@/config/site";
import { ResumeContent } from "@/components/sections/resume-content";

export const metadata: Metadata = {
    title: "Resume",
    description: `${siteIdentity.name}'s backend engineering resume covering APIs, integrations, and production delivery experience.`,
    alternates: {
        canonical: `${siteConfig.url}/resume`,
    },
    openGraph: {
        title: `Resume | ${siteConfig.title}`,
        description: `${siteIdentity.name}'s backend engineering resume covering APIs, integrations, and production delivery experience.`,
        url: `${siteConfig.url}/resume`,
    },
};

export default function ResumePage() {
    return (
        <ResumeContent
            name={siteIdentity.name}
            role={siteIdentity.role}
            yearsExperience={siteIdentity.yearsExperience}
            location={siteIdentity.location}
            about={siteIdentity.about}
            experiences={experiences}
            skills={skills}
            education={education}
        />
    );
}
