import Link from "next/link";
import { profile } from "@/content/site";

// Fine print on the tile grey, the way a product page closes.
export function SiteFooter() {
  return (
    <footer className="no-print mt-[var(--section-gap)] bg-paper-2">
      <div className="container grid gap-4 py-8 text-sm text-muted sm:flex sm:items-center sm:justify-between">
        <p>
          © 2026 {profile.name}. {profile.location}.
        </p>
        <ul className="flex flex-wrap gap-x-6">
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className="link tap text-muted" aria-label="GitHub (opens in a new tab)">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link tap text-muted" aria-label="LinkedIn (opens in a new tab)">
              LinkedIn
            </a>
          </li>
          <li>
            <Link href="/resume" className="link tap text-muted">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
