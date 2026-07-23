"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="size-8" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full text-gray-400 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all cursor-pointer border border-black/10 dark:border-white/10"
      aria-label="Toggle Theme"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {theme === "dark" ? (
        <Sun className="size-4 text-amber-400" />
      ) : (
        <Moon className="size-4 text-purple-600" />
      )}
    </button>
  );
}
