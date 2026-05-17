import type { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { baseMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";
import { siteIdentity } from "@/content/site";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Providers } from "@/app/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = baseMetadata;

export default function RootLayout({ children }: PropsWithChildren) {
    const personStructuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteIdentity.name,
        jobTitle: siteIdentity.role,
        email: siteIdentity.email,
        url: siteConfig.url,
        address: {
            "@type": "PostalAddress",
            addressLocality: siteIdentity.location,
            addressCountry: "IN",
        },
        sameAs: siteConfig.socialLinks.map((item) => item.href),
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} min-h-screen bg-background font-sans text-foreground antialiased`}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }} />
                <Providers>
                    <div className="relative flex min-h-screen flex-col">
                        <SiteHeader />
                        <main className="flex-1">{children}</main>
                        <SiteFooter />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
