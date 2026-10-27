import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { caseStudies, profile } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.name}: ${project.tagline}`, description: project.summary };
}

export default async function CaseStudy({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = caseStudies.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const { default: Body } = await import(`@/content/work/${slug}.mdx`);

  return (
    <>
      <div className="sticky top-0 z-[var(--z-sticky-nav)] border-b border-rule bg-paper/90 backdrop-blur-md">
        <div className="container flex h-14 max-w-[880px] items-center justify-between gap-4">
          <Link href="/#work" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink no-underline hover:underline">
            <ArrowLeft className="size-4" aria-hidden strokeWidth={2} />
            {profile.name}
          </Link>
          <ThemeToggle />
        </div>
      </div>

      <main id="main" className="container max-w-[880px] pb-24 pt-12 sm:pt-16">
        <header className="grid gap-5 border-b border-rule pb-10">
          <h1 className="text-[length:var(--text-display)] font-bold leading-[1.02] tracking-[var(--tracking-display)] text-ink">
            {project.name}
          </h1>
          <p className="max-w-[48ch] text-[length:var(--text-lead)] leading-relaxed text-ink-2">{project.summary}</p>
          <dl className="mt-2 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-[auto_minmax(0,1fr)_auto]">
            <div className="grid gap-1">
              <dt className="font-semibold text-muted">Status</dt>
              <dd className="m-0 text-ink">{project.status}</dd>
            </div>
            <div className="grid gap-1">
              <dt className="font-semibold text-muted">Built with</dt>
              <dd className="m-0 text-ink">{project.stack.join(", ")}</dd>
            </div>
            <div className="grid gap-1">
              <dt className="font-semibold text-muted">Links</dt>
              <dd className="m-0 flex flex-wrap gap-x-4 gap-y-1">
                {project.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link font-semibold">
                    {l.label}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </header>

        <article className="prose pt-4">
          <Body />
        </article>

        <nav aria-label="More work" className="mt-20 grid gap-6 border-t border-rule pt-10 sm:flex sm:items-end sm:justify-between">
          <div className="grid gap-1">
            <p className="text-sm font-semibold text-muted">Next case study</p>
            <Link href={`/work/${next.slug}`} className="text-[length:var(--text-title)] font-bold tracking-tight text-ink no-underline hover:underline decoration-accent-line underline-offset-4">
              {next.name}
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={profile.resumePdf} download className="btn btn-secondary">
              Download resume
            </a>
            <Link href="/#contact" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
        </nav>
      </main>
    </>
  );
}
