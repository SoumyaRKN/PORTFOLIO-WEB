import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: 2 | 3;
    subtitle?: string;
}

export function SectionHeading({ level = 2, subtitle, className, children, ...props }: SectionHeadingProps) {
    const Heading = level === 2 ? "h2" : "h3";
    const headingStyles = level === 2
        ? "text-2xl sm:text-3xl lg:text-4xl font-semibold"
        : "text-xl sm:text-2xl font-semibold";

    return (
        <div {...props}>
            <Heading className={cn(headingStyles, "tracking-tight text-foreground", className)}>
                {children}
            </Heading>
            {subtitle && (
                <p className="mt-2 text-muted-foreground">{subtitle}</p>
            )}
        </div>
    );
}
