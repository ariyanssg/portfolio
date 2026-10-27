import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { caseStudies, profile } from "@/content/site";

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
    <main id="main" className="pb-8">
      <header className="container max-w-[880px] pt-10 sm:pt-16">
        <Link href="/#work" className="tap gap-1.5 text-sm font-semibold text-muted no-underline hover:text-ink">
          <ArrowLeft className="size-4" aria-hidden strokeWidth={2} />
          All work
        </Link>
        <div className="grid gap-5 pt-6 pb-12">
          <h1 className="font-[family-name:var(--font-display)] text-[length:var(--text-hero)] font-semibold leading-[0.98] tracking-[-0.04em] text-ink">
            {project.name}
          </h1>
          <p className="max-w-[40ch] text-balance text-[length:var(--text-lead)] leading-snug text-ink-2">{project.summary}</p>
        </div>
        <dl className="grid gap-x-10 gap-y-5 border-y border-rule py-6 text-sm sm:grid-cols-[auto_minmax(0,1fr)_auto]">
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
            <dd className="m-0 flex flex-wrap gap-x-5">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link tap font-semibold"
                  aria-label={`${l.label} (opens in a new tab)`}
                >
                  {l.label}
                </a>
              ))}
            </dd>
          </div>
        </dl>
      </header>

      <div className="container max-w-[880px]">
        <article className="prose pt-6">
          <Body />
        </article>

        <nav aria-label="More work" className="tile mt-20 grid gap-6 p-8 sm:flex sm:items-end sm:justify-between sm:p-10">
          <div className="grid gap-1">
            <p className="text-sm font-semibold text-muted">Next case study</p>
            <Link href={`/work/${next.slug}`} className="tap font-[family-name:var(--font-display)] text-[length:var(--text-title)] font-semibold tracking-tight text-ink no-underline hover:underline decoration-accent-line underline-offset-4">
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
      </div>
    </main>
  );
}
