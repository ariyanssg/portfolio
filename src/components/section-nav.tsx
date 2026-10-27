"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function SectionNav({ sections }: { sections: readonly Section[] }) {
  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <nav aria-label="Sections" className="hidden lg:block">
      <ul className="grid gap-1">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "location" : undefined}
                className="group flex min-h-11 items-center gap-3 text-sm font-semibold text-muted no-underline transition-colors duration-200 hover:text-ink aria-[current=location]:text-ink"
              >
                <span
                  aria-hidden
                  className="h-px w-12 origin-left scale-x-50 bg-rule transition-[transform,background-color] duration-300 ease-out group-hover:scale-x-75 group-hover:bg-ink group-aria-[current=location]:scale-x-100 group-aria-[current=location]:bg-accent-line"
                />
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
