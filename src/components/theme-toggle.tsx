"use client";

import { Moon, Sun } from "lucide-react";

// Icons swap through CSS on [data-theme], so server and client markup always match.
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label="Switch between light and dark theme">
      <Moon className="size-5 dark:hidden" aria-hidden strokeWidth={1.75} />
      <Sun className="hidden size-5 dark:block" aria-hidden strokeWidth={1.75} />
    </button>
  );
}
