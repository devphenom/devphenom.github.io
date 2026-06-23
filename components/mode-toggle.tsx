"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import {
  ThemeToggleButton,
  useThemeTransition,
} from "@/components/ui/theme-toggle-button";

export function ModeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const { startTransition } = useThemeTransition();

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="size-8 rounded-full border border-input bg-background" />
    );
  }

  const currentTheme = resolvedTheme as "light" | "dark";

  const toggleTheme = () => {
    startTransition(() => {
      setTheme(currentTheme === "light" ? "dark" : "light");
    });
  };

  return (
    <ThemeToggleButton
      theme={currentTheme}
      variant="circle-blur"
      start="top-right"
      onClick={toggleTheme}
      className={className}
    />
  );
}
