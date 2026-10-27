import Image from "next/image";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import portrait from "../../public/images/portrait.jpg";
import { education, experience, featuredProjects, languages, moreProjects, profile, skills, type Project } from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import { VelaFigure } from "@/components/vela-figure";
import { Signal404Figure } from "@/components/signal404-figure";

function ExternalLink({ href, label, className = "link tap" }: { href: string; label: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className} aria-label={`${label} (opens in a new tab)`}>
      {label}
    </a>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap gap-x-6 text-md font-semibold">
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

// The words of a project tile: status, name, line, summary, stack, links. "split" sets the
// heading and the details side by side on wide screens, for tiles whose artifact sits below.
function ProjectText({ project, size = "lg", split = false }: { project: Project; size?: "lg" | "md"; split?: boolean }) {
  return (
    <div className={`grid content-start gap-4 ${split ? "lg:grid-cols-2 lg:items-end lg:gap-x-14" : ""}`}>
      <div className="grid content-start gap-4">
      <div className="grid gap-2">
        <h3
          id={`p-${project.slug}`}
          className={`font-[family-name:var(--font-display)] font-semibold tracking-[var(--tracking-display)] text-ink ${
            size === "lg" ? "text-[length:var(--text-display)] leading-none" : "text-[length:var(--text-title)] leading-tight"
          }`}
        >
          {project.name}
        </h3>
        <p className={`text-ink-2 ${size === "lg" ? "text-[length:var(--text-lead)]" : "text-lg"}`}>{project.tagline}</p>
      </div>
      </div>
      <div className="grid content-start gap-4">
        <p className="max-w-[52ch] text-ink-2">{project.summary}</p>
        <div className="grid gap-1 text-sm text-muted">
          <p>{project.stack.join(", ")}</p>
          <p>Status: {project.status}</p>
        </div>
        <ProjectLinks project={project} />
      </div>
    </div>
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
  const [vela, signal404] = featuredProjects;
  const tileProjects = moreProjects.filter((p) => p.caseStudy);
  const alsoBuilt = moreProjects.filter((p) => !p.caseStudy);
  // Show the form only when it can actually send; otherwise offer direct email.
  const formEnabled = Boolean(process.env.RESEND_API_KEY);

  return (
    <main id="main">
      {/* Hero: who, what, and the two things to do next. */}
      <section id="top" aria-labelledby="hero-name" className="container pb-[var(--section-gap)] pt-14 text-center sm:pt-24">
        <div className="enter mx-auto grid max-w-3xl justify-items-center gap-7">
          <Image
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            width={112}
            height={112}
            priority
            className="size-24 rounded-full object-cover shadow-[var(--shadow-node)] sm:size-28"
          />
          <h1
            id="hero-name"
            className="font-[family-name:var(--font-display)] text-[length:var(--text-hero)] font-semibold leading-[0.98] tracking-[-0.04em] text-ink"
          >
            {profile.name}
          </h1>
          <p className="max-w-[30ch] text-balance text-[length:var(--text-lead)] leading-snug text-ink-2">{profile.sentence}</p>
          <div className="grid justify-items-center gap-3">
            <div className="grid w-full max-w-[18rem] gap-3 sm:flex sm:max-w-none sm:justify-center">
              <a href={profile.resumePdf} download className="btn btn-primary">
                <Download className="size-[18px]" aria-hidden strokeWidth={2} />
                Download resume
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-secondary">
                <Mail className="size-[18px]" aria-hidden strokeWidth={2} />
                Email me
              </a>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-6 text-sm font-semibold">
              <li>
                <ExternalLink href={profile.github} label="GitHub" />
              </li>
              <li>
                <ExternalLink href={profile.linkedin} label="LinkedIn" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work: each project as a tile carrying its real artifact. */}
      <section id="work" aria-labelledby="work-title" className="section container grid gap-10">
        <div className="grid gap-3">
          <h2 id="work-title" className="section-title">
            Selected work
          </h2>
          <p className="max-w-[46ch] text-[length:var(--text-lead)] text-muted">
            Hospitality software, SEO tooling and the products in between.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5">
          <article aria-labelledby={`p-${vela.slug}`} className="tile grid gap-10 p-7 sm:p-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-14 lg:p-14">
            <ProjectText project={vela} />
            <VelaFigure caption={false} compact framed={false} />
          </article>

          <article aria-labelledby={`p-${signal404.slug}`} className="tile grid gap-10 px-7 pt-7 sm:px-12 sm:pt-12 lg:px-14 lg:pt-14">
            <ProjectText project={signal404} split />
            <div className="-mb-px">
              <Signal404Figure caption={false} framed={false} />
            </div>
          </article>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {tileProjects.map((p) => (
              <article key={p.slug} aria-labelledby={`p-${p.slug}`} className="tile p-7 sm:p-10">
                <ProjectText project={p} size="md" />
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4 pt-4">
          <h3 className="text-sm font-semibold text-muted">Also built</h3>
          <ul className="grid gap-x-10 md:grid-cols-2">
            {alsoBuilt.map((p) => (
              <li key={p.slug} className="grid gap-1 border-t border-rule py-5">
                <p className="text-lg font-semibold text-ink">{p.name}</p>
                <p className="text-ink-2">{p.tagline}</p>
                <p className="text-sm text-muted">{p.stack.join(", ")}</p>
                <ProjectLinks project={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The record: experience, education, skills. Label column on the left, content on the right. */}
      <section
        id="experience"
        aria-labelledby="experience-title"
        className="section container mt-[var(--section-gap)] grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-[var(--gap-columns)]"
      >
        <h2 id="experience-title" className="section-title lg:sticky lg:top-[calc(var(--nav-h)+2rem)] lg:self-start">
          Experience
        </h2>
        <div className="grid gap-14">
          <article className="grid gap-5">
            <div className="grid gap-1">
              <p className="num text-sm text-muted">
                {job.start} to {job.end}
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-[length:var(--text-title)] font-semibold tracking-tight text-ink">
                {job.role}
              </h3>
              <p className="text-lg text-ink-2">
                {job.company}, {job.location}
              </p>
            </div>
            <ul className="grid list-disc gap-2.5 pl-5 text-ink-2 marker:text-muted">
              {job.points.slice(0, job.highlights).map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <p className="text-sm text-muted">{job.stack.join(", ")}</p>
            <p className="font-semibold">
              <Link href="/resume" className="link tap">
                Read the full resume
              </Link>
            </p>
          </article>

          <div id="education" className="section grid gap-5 border-t border-rule pt-10">
            <h3 className="font-[family-name:var(--font-display)] text-[length:var(--text-title)] font-semibold tracking-tight text-ink">
              Education
            </h3>
            <ul className="grid gap-4">
              {education.map((e) => (
                <li key={e.school}>
                  <p className="font-semibold text-ink">{e.school}</p>
                  <p className="text-ink-2">{e.detail}</p>
                </li>
              ))}
            </ul>
            <p className="text-ink-2">
              <span className="font-semibold text-ink">Languages: </span>
              {languages.map((l, i) => (
                <span key={l.name}>
                  {i > 0 && ", "}
                  {l.name}
                  {l.detail && ` (${l.detail})`}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section
        id="skills"
        aria-labelledby="skills-title"
        className="section container mt-[var(--section-gap)] grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-[var(--gap-columns)]"
      >
        <h2 id="skills-title" className="section-title lg:sticky lg:top-[calc(var(--nav-h)+2rem)] lg:self-start">
          Skills
        </h2>
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skills.map((g) => (
            <div key={g.group} className="grid content-start gap-2 border-t border-rule pt-5">
              <dt className="text-sm font-semibold text-muted">{g.group}</dt>
              <dd className="m-0 text-ink">{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Closing tile: one invitation, one action. */}
      <section id="contact" aria-labelledby="contact-title" className="section container mt-[var(--section-gap)]">
        <div className="tile grid justify-items-center gap-6 px-7 py-16 text-center sm:px-12 sm:py-24">
          <h2 id="contact-title" className="section-title max-w-[16ch] text-balance">
            Let&apos;s build something that holds up.
          </h2>
          <p className="max-w-[44ch] text-balance text-[length:var(--text-lead)] text-ink-2">
            Open to full-time roles and freelance projects. Email{" "}
            <a href={`mailto:${profile.email}`} className="link">
              {profile.email}
            </a>
            .
          </p>
          {formEnabled ? (
            <div className="w-full max-w-xl text-left">
              <ContactForm />
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail className="size-[18px]" aria-hidden strokeWidth={2} />
                Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                aria-label="Message me on LinkedIn (opens in a new tab)"
              >
                Message me on LinkedIn
              </a>
            </div>
          )}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
    </main>
  );
}
