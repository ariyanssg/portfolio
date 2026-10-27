"use client";

import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

type Section = { id: string; label: string };

// The bar only shows the name once the big one has scrolled away, so it never repeats on load.
function useHeroNameHidden() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const el = document.getElementById("hero-name");
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(!entry.isIntersecting), { rootMargin: "-56px 0px 0px 0px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return hidden;
}

export function MobileBar({ name, sections }: { name: string; sections: readonly Section[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const showName = useHeroNameHidden();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="sticky top-0 z-[var(--z-sticky-nav)] border-b border-rule bg-paper/90 backdrop-blur-md lg:static lg:hidden">
      <div className="container flex h-14 items-center justify-between gap-4">
        <a
          href="#top"
          className={`text-sm font-semibold tracking-tight text-ink no-underline transition-opacity duration-200 ${
            showName ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          tabIndex={showName ? undefined : -1}
          aria-hidden={showName ? undefined : true}
        >
          {name}
        </a>
        <div className="flex items-center">
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden strokeWidth={1.75} /> : <Menu className="size-5" aria-hidden strokeWidth={1.75} />}
          </button>
        </div>
      </div>
      <nav id={panelId} aria-label="Sections" hidden={!open} className="border-t border-rule">
        <ul className="container grid py-2">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center text-base font-semibold text-ink no-underline"
              >
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/resume" className="flex min-h-12 items-center text-base font-semibold text-ink no-underline">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
