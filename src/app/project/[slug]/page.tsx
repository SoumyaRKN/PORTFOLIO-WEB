import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";

type Props = {
    params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
    const project = projects.find((item) => item.slug === params.slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    const canonical = `${siteConfig.url}/project/${project.slug}`;
    const primaryImage = project.images[0]?.src ?? siteConfig.ogImage;
    const primaryImageAlt = project.images[0]?.alt ?? `${project.title} project preview`;

    return {
        title: project.title,
        description: project.summary,
        keywords: [...project.technologies, project.role, project.year],
        alternates: {
            canonical,
        },
        openGraph: {
            title: `${project.title} | ${siteConfig.title}`,
            description: project.summary,
            url: canonical,
            type: "article",
            images: [
                {
                    url: primaryImage,
                    alt: primaryImageAlt,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.summary,
            images: [primaryImage],
        },
    };
}

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailsPage({ params }: Props) {
    const project = projects.find((item) => item.slug === params.slug);

    if (!project) {
        notFound();
    }

    const canonical = `${siteConfig.url}/project/${project.slug}`;
    const primaryImage = project.images[0] ?? { src: siteConfig.ogImage, alt: `${project.title} project preview` };
    const projectStructuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.description,
        abstract: project.summary,
        programmingLanguage: project.technologies,
        url: canonical,
        applicationCategory: project.domain,
        datePublished: project.year,
        author: {
            "@type": "Person",
            name: "Soumya Prakash Nayak",
        },
    };
    const primaryButtonClass = "inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
    const secondaryButtonClass = "inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-3 text-xs font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

    return (
        <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectStructuredData) }} />

            <Link href="/" className="text-sm text-primary hover:underline">
                Back to home
            </Link>

            <div className="mt-5 flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="text-xs">{project.year}</Badge>
                <Badge variant="muted" className="text-xs">{project.role}</Badge>
                {project.domain && <Badge variant="muted" className="text-xs">{project.domain}</Badge>}
            </div>

            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {project.title}
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">{project.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.href && (
                    <Link href={project.href} target="_blank" rel="noreferrer" className={primaryButtonClass}>
                        Open Project
                    </Link>
                )}
                <Link href="/resume" className={secondaryButtonClass}>
                    View Resume
                </Link>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-border bg-surface">
                <Image
                    src={primaryImage.src}
                    alt={primaryImage.alt}
                    width={1200}
                    height={720}
                    className="h-auto w-full object-cover"
                    priority
                />
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <article className="rounded-xl border border-border bg-surface p-6">
                    <h2 className="text-lg font-semibold text-foreground">Challenge</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {project.challenge ?? project.summary}
                    </p>
                </article>

                <article className="rounded-xl border border-border bg-surface p-6">
                    <h2 className="text-lg font-semibold text-foreground">Solution</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {project.solution ?? project.description}
                    </p>
                </article>

                <article className="rounded-xl border border-border bg-surface p-6 lg:col-span-2">
                    <h2 className="text-lg font-semibold text-foreground">Architecture Highlights</h2>
                    <ul className="mt-3 space-y-2">
                        {(project.architecture ?? project.highlights).map((item) => (
                            <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="rounded-xl border border-border bg-surface p-6">
                    <h2 className="text-lg font-semibold text-foreground">Technologies</h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </article>

                <article className="rounded-xl border border-border bg-surface p-6">
                    <h2 className="text-lg font-semibold text-foreground">Outcome</h2>
                    <ul className="mt-3 space-y-2">
                        {(project.impact ?? project.highlights).map((item) => (
                            <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    );
}
