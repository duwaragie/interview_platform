"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: "light" | "dark") => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="h-9 w-9 px-0 bg-white border-neutral-300"
        disabled
      >
        <Sun className="h-4 w-4 text-neutral-400" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="h-9 w-9 px-0 bg-white hover:bg-neutral-50 border-neutral-300 hover:border-primary transition-all duration-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:border-neutral-600"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
      ) : (
        <Sun className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
      )}
    </Button>
  );
};

export default ThemeToggle;
