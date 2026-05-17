"use client";

import { useContext } from "react";
import { ThemeContext } from "@/components/layout/theme-provider";

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }

    return context;
}
