import Link from "next/link";
import { siteIdentity, socialLinks } from "@/content/site";

export function SiteFooter() {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
                <p>
                    {new Date().getFullYear()} {siteIdentity.name} - {siteIdentity.role} - {siteIdentity.location}
                </p>
                <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                        <Link key={social.label} href={social.href} target="_blank" rel="noreferrer" className="hover:text-foreground">
                            {social.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
