import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const inputClasses = "w-full h-11 rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => (
        <input
            ref={ref}
            className={cn(inputClasses, className)}
            {...props}
        />
    ),
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => (
        <textarea
            ref={ref}
            className={cn("min-h-32 resize-none", inputClasses, className)}
            {...props}
        />
    ),
);
Textarea.displayName = "Textarea";
