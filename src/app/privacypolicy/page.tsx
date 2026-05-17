import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { siteIdentity } from "@/content/site";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: `Privacy practices for ${siteIdentity.name}'s professional portfolio and inquiry workflow.`,
    alternates: {
        canonical: `${siteConfig.url}/privacypolicy`,
    },
    openGraph: {
        title: `Privacy Policy | ${siteConfig.title}`,
        description: `Privacy practices for ${siteIdentity.name}'s professional portfolio and inquiry workflow.`,
        url: `${siteConfig.url}/privacypolicy`,
    },
};

export default function PrivacyPolicyPage() {
    return (
        <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">Privacy Policy</h1>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: May 17, 2026</p>
            <div className="prose prose-slate mt-6 max-w-none dark:prose-invert">
                <p>
                    This portfolio collects information submitted through the inquiry form only for professional communication,
                    project discussion, and recruitment-related follow-up.
                </p>
                <p>
                    Inquiry data is stored securely and is never sold or shared for advertising purposes. You can request
                    correction or deletion of submitted information by contacting {siteIdentity.email}.
                </p>
            </div>
        </section>
    );
}
