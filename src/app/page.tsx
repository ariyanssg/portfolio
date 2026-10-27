import Image from "next/image";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import portrait from "../../public/images/portrait.jpg";
import {
  education,
  experience,
  featuredProjects,
  languages,
  moreProjects,
  profile,
  sections,
  skills,
  type Project,
} from "@/content/site";
import { MobileBar } from "@/components/mobile-bar";
import { SectionNav } from "@/components/section-nav";
import { ContactForm } from "@/components/contact-form";
import { VelaFigure } from "@/components/vela-figure";
import { Signal404Figure } from "@/components/signal404-figure";

const figures: Record<string, React.ReactNode> = {
  vela: <VelaFigure caption={false} compact />,
  signal404: <Signal404Figure caption={false} />,
};

function ExternalLink({ href, label, className = "link tap" }: { href: string; label: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className} aria-label={`${label} (opens in a new tab)`}>
      {label}
    </a>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap gap-x-6 text-sm font-semibold">
      {project.caseStudy && (
        <li>
          <Link href={`/work/${project.slug}`} className="link tap">
            Read the case study
          </Link>
        </li>
      )}
      {project.links.map((l) => (
        <li key={l.href}>
          <ExternalLink href={l.href} label={l.label} />
        </li>
      ))}
    </ul>
  );
}

function Intro() {
  return (
    <div className="enter grid gap-6">
      <Image
        src={portrait}
        alt={`Portrait of ${profile.name}`}
        width={88}
        height={88}
        priority
        className="size-[72px] rounded-full border border-rule object-cover sm:size-[88px]"
      />
      <div className="grid gap-3">
        <h1 id="hero-name" className="text-[length:var(--text-display)] font-semibold leading-[1.0] tracking-[var(--tracking-display)] text-ink">
          {profile.name}
        </h1>
        <p className="max-w-[34ch] text-balance text-[length:var(--text-lead)] leading-relaxed text-ink-2">{profile.sentence}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href={profile.resumePdf} download className="btn btn-primary">
          <Download className="size-4" aria-hidden strokeWidth={2} />
          Download resume
        </a>
        <a href={`mailto:${profile.email}`} className="btn btn-secondary">
          <Mail className="size-4" aria-hidden strokeWidth={2} />
          Email me
        </a>
      </div>
    </div>
  );
}

function Profiles() {
  return (
    <ul className="flex flex-wrap items-center gap-x-6 text-sm font-semibold">
      <li>
        <ExternalLink href={profile.github} label="GitHub" />
      </li>
      <li>
        <ExternalLink href={profile.linkedin} label="LinkedIn" />
      </li>
      <li>
        <Link href="/resume" className="link tap">
          Resume page
        </Link>
      </li>
    </ul>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="grid gap-5" aria-labelledby={`p-${project.slug}`}>
      {figures[project.slug]}
      <div className="grid gap-3">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 id={`p-${project.slug}`} className="text-[length:var(--text-title)] font-semibold tracking-tight text-ink">
            <Link href={`/work/${project.slug}`} className="tap no-underline hover:underline decoration-accent-line underline-offset-4">
              {project.name}
            </Link>
          </h3>
          <p className="text-sm text-muted">{project.status}</p>
        </div>
        <p className="text-ink-2">{project.tagline}</p>
        <p className="text-ink-2">{project.summary}</p>
        <p className="text-sm text-muted">{project.stack.join(", ")}</p>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="grid gap-2 border-t border-rule py-5 first:border-t-0 first:pt-0">
      <div>
        <h4 className="text-lg font-semibold text-ink">
          {project.caseStudy ? (
            <Link href={`/work/${project.slug}`} className="tap no-underline hover:underline decoration-accent-line underline-offset-4">
              {project.name}
            </Link>
          ) : (
            project.name
          )}
        </h4>
      </div>
      <p className="text-ink-2">{project.tagline}</p>
      <p className="text-sm text-muted">{project.stack.join(", ")}</p>
      <ProjectLinks project={project} />
    </li>
  );
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  worksFor: { "@type": "Organization", name: profile.company },
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
};

export default function Home() {
  const [job] = experience;
  // Show the form only when it can actually send; otherwise offer direct email.
  const formEnabled = Boolean(process.env.RESEND_API_KEY);

  return (
    <>
      <MobileBar name={profile.name} sections={sections} />
      <div id="top" className="container lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-[var(--gap-columns)]">
        <header className="flex flex-col gap-10 pb-14 pt-10 sm:pt-14 lg:sticky lg:top-0 lg:h-dvh lg:justify-between lg:overflow-y-auto lg:py-20">
          <div className="grid gap-12">
            <Intro />
            <SectionNav sections={sections} />
          </div>
          <Profiles />
        </header>

        <main id="main" className="grid gap-[var(--section-gap)] pb-20 lg:py-20">

          <section id="work" aria-labelledby="work-title" className="section grid gap-12">
            <h2 id="work-title" className="section-title">Selected work</h2>
            {featuredProjects.map((p) => (
              <FeaturedProject key={p.slug} project={p} />
            ))}

            <div className="grid gap-5">
              <h3 className="text-sm font-semibold text-muted">More projects</h3>
              <ul>
                {moreProjects.map((p) => (
                  <ProjectRow key={p.slug} project={p} />
                ))}
              </ul>
            </div>

          </section>

          <section id="experience" aria-labelledby="experience-title" className="section grid gap-10">
            <h2 id="experience-title" className="section-title">Experience</h2>
            <article className="grid gap-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
              <p className="num pt-1 text-sm text-muted">
                {job.start} to {job.end}
              </p>
              <div className="grid gap-4">
                <div>
                  <h3 className="text-[length:var(--text-title)] font-semibold tracking-tight text-ink">{job.role}</h3>
                  <p className="text-ink-2">
                    {job.company}, {job.location}
                  </p>
                </div>
                <ul className="grid list-disc gap-2 pl-5 text-ink-2 marker:text-muted">
                  {job.points.slice(0, job.highlights).map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <p className="text-sm text-muted">{job.stack.join(", ")}</p>
                <p className="text-sm font-semibold">
                  <Link href="/resume" className="link tap">
                    Read the full resume
                  </Link>
                </p>
              </div>
            </article>
          </section>

          <section id="education" aria-labelledby="education-title" className="section grid gap-8">
            <h2 id="education-title" className="section-title">Education</h2>
            <div className="grid gap-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
              <h3 className="pt-0.5 text-sm font-semibold text-muted">Degrees</h3>
              <ul className="grid gap-4">
                {education.map((e) => (
                  <li key={e.school}>
                    <p className="font-semibold text-ink">{e.school}</p>
                    <p className="text-ink-2">{e.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
              <h3 className="pt-0.5 text-sm font-semibold text-muted">Languages</h3>
              <ul className="grid gap-1 text-ink-2">
                {languages.map((l) => (
                  <li key={l.name}>
                    <span className="font-semibold text-ink">{l.name}</span>
                    {l.detail && <span className="text-muted">, {l.detail}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="skills" aria-labelledby="skills-title" className="section grid gap-8">
            <h2 id="skills-title" className="section-title">Skills</h2>
            <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {skills.map((g) => (
                <div key={g.group} className="grid content-start gap-1.5">
                  <dt className="text-sm font-semibold text-muted">{g.group}</dt>
                  <dd className="m-0 text-ink-2">{g.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="contact" aria-labelledby="contact-title" className="section grid gap-8">
            <div className="grid gap-3">
              <h2 id="contact-title" className="section-title">Contact</h2>
              <p className="max-w-[55ch] text-[length:var(--text-lead)] leading-relaxed text-ink-2">
                I&apos;m open to full-time roles and freelance projects. Email me at{" "}
                <a href={`mailto:${profile.email}`} className="link font-semibold">
                  {profile.email}
                </a>
                {formEnabled ? " or send a message here." : "."}
              </p>
            </div>
            {formEnabled ? (
              <ContactForm />
            ) : (
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
                  <Mail className="size-4" aria-hidden strokeWidth={2} />
                  Email me
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary" aria-label="Message me on LinkedIn (opens in a new tab)">
                  Message me on LinkedIn
                </a>
              </div>
            )}
          </section>

          <footer className="grid gap-3 border-t border-rule pt-8 text-sm text-muted sm:flex sm:items-center sm:justify-between">
            <p>© 2026 {profile.name}</p>
            <div className="lg:hidden">
              <Profiles />
            </div>
          </footer>
        </main>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
    </>
  );
}
