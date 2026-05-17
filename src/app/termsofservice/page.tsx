import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { siteIdentity } from "@/content/site";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: `Terms governing access and professional use of ${siteIdentity.name}'s portfolio website.`,
    alternates: {
        canonical: `${siteConfig.url}/termsofservice`,
    },
    openGraph: {
        title: `Terms of Service | ${siteConfig.title}`,
        description: `Terms governing access and professional use of ${siteIdentity.name}'s portfolio website.`,
        url: `${siteConfig.url}/termsofservice`,
    },
};

export default function TermsOfServicePage() {
    return (
        <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">Terms of Service</h1>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: May 17, 2026</p>
            <div className="prose prose-slate mt-6 max-w-none dark:prose-invert">
                <p>
                    By using this website, you agree to use its content for informational and professional evaluation purposes
                    and to respect all intellectual property rights.
                </p>
                <p>
                    Project examples are provided as professional work samples. Availability, scope, and delivery commitments
                    are finalized only through direct communication.
                </p>
            </div>
        </section>
    );
}
