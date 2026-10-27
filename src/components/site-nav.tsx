"use client";

import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type Section = { id: string; label: string };

// Highlights the section in view, so the bar always shows where you are (layout.md › Visual hierarchy).
function useActiveSection(ids: string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!enabled) return;
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, enabled]);
  return enabled ? active : null;
}

export function SiteNav({ name, sections, resumeHref }: { name: string; sections: readonly Section[]; resumeHref: string }) {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const sheetId = useId();
  const active = useActiveSection(
    sections.map((s) => s.id),
    onHome,
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header className="bar no-print sticky top-0 z-[var(--z-sticky-nav)] border-b border-[color-mix(in_oklab,var(--color-rule)_70%,transparent)]">
      <nav aria-label="Main" className="container flex h-[var(--nav-h)] items-center justify-between gap-6">
        <a href={onHome ? "#top" : "/"} className="tap font-[family-name:var(--font-display)] text-[1.0625rem] font-semibold tracking-tight text-ink no-underline">
          {name}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-7 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={href(s.id)}
                  aria-current={active === s.id ? "location" : undefined}
                  className="tap text-muted no-underline transition-colors duration-200 hover:text-ink aria-[current=location]:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={resumeHref} className="btn btn-tinted btn-sm">
            Resume
          </a>
        </div>

        <button
          type="button"
          className="icon-btn -mr-2.5 md:hidden"
          aria-expanded={open}
          aria-controls={sheetId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden strokeWidth={1.75} /> : <Menu className="size-5" aria-hidden strokeWidth={1.75} />}
        </button>
      </nav>

      <div id={sheetId} hidden={!open} className="h-[calc(100dvh-var(--nav-h))] overflow-y-auto bg-paper md:hidden">
        <ul className="container grid gap-1 pt-6">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={href(s.id)}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center font-[family-name:var(--font-display)] text-[1.75rem] font-semibold tracking-tight text-ink no-underline"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container pt-8">
          <a href={resumeHref} onClick={() => setOpen(false)} className="btn btn-primary w-full">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
