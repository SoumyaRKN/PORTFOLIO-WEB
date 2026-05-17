"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { navigation, siteIdentity } from "@/content/site";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function SiteHeader() {
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();
    const prefersReduced = useReducedMotion();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-30 border-b border-border/50 bg-background/80 backdrop-blur-md transition-colors duration-200">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
                    {siteIdentity.shortName}
                </Link>
                <nav className="hidden items-center gap-8 md:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={pathname === item.href ? "page" : undefined}
                            className={cn(
                                "rounded px-2 py-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                    <motion.div
                        whileHover={prefersReduced ? {} : { scale: 1.05 }}
                        whileTap={prefersReduced ? {} : { scale: 0.95 }}
                    >
                        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                            {theme === "dark" ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                        </Button>
                    </motion.div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        id="mobile-navigation"
                        className="md:hidden border-t border-border/50 bg-background/95 px-4 py-4 sm:px-6"
                        initial={{ opacity: 0, height: prefersReduced ? "auto" : 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: prefersReduced ? "auto" : 0 }}
                        transition={{ duration: prefersReduced ? 0 : 0.2, ease: "easeOut" }}
                    >
                        <ul className="flex flex-col gap-2">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        aria-current={pathname === item.href ? "page" : undefined}
                                        className={cn(
                                            "block rounded-md px-3 py-2 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                            pathname === item.href
                                                ? "bg-muted text-foreground"
                                                : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
