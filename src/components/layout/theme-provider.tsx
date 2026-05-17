"use client";

import { createContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
    theme: Theme;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const savedTheme = window.localStorage.getItem("theme") as Theme | null;
        const initialTheme = savedTheme ?? "light";
        document.documentElement.setAttribute("data-theme", initialTheme);
        setTheme(initialTheme);
    }, []);

    const value = useMemo<ThemeContextValue>(
        () => ({
            theme,
            toggleTheme: () => {
                const next = theme === "dark" ? "light" : "dark";
                document.documentElement.setAttribute("data-theme", next);
                window.localStorage.setItem("theme", next);
                setTheme(next);
            },
        }),
        [theme],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
