import type { Metadata } from "next";
import { Download } from "lucide-react";
import { education, experience, featuredProjects, languages, moreProjects, profile, skills } from "@/content/site";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name}, full-stack developer in Dhaka.`,
};

const resumeProjects = [...featuredProjects, ...moreProjects.filter((p) => p.caseStudy)];

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="border-b border-rule pb-1.5 text-base font-semibold text-ink">{children}</h3>;
}

export default function Resume() {
  return (
    <main id="main" className="container max-w-[880px] pt-10 sm:pt-14">
      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-[family-name:var(--font-display)] text-[length:var(--text-section)] font-semibold leading-none tracking-[-0.03em] text-ink">
          Resume
        </h1>
        <div className="flex flex-wrap gap-3">
          <PrintButton />
          <a href={profile.resumePdf} download className="btn btn-primary">
            <Download className="size-4" aria-hidden strokeWidth={2} />
            Download PDF
          </a>
        </div>
      </div>

      <article className="resume-sheet grid gap-7 rounded-[var(--radius-tile)] bg-paper p-6 shadow-[var(--shadow-card)] ring-1 ring-rule sm:p-12">
        <header className="grid gap-2">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{profile.name}</h2>
          <p className="text-lg text-ink-2">{profile.role}</p>
          <ul className="flex flex-wrap gap-x-5 text-sm text-ink-2">
            <li>{profile.location}</li>
            <li>
              <a href={`mailto:${profile.email}`} className="link tap">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.linkedin} className="link tap">
                linkedin.com/{profile.linkedinHandle}
              </a>
            </li>
            <li>
              <a href={profile.github} className="link tap">
                github.com/{profile.githubHandle}
              </a>
            </li>
          </ul>
        </header>

        <section className="grid gap-3" aria-labelledby="r-summary">
          <Heading>
            <span id="r-summary">Summary</span>
          </Heading>
          <p className="text-ink-2">{profile.summary}</p>
        </section>

        <section className="grid gap-3" aria-labelledby="r-experience">
          <Heading>
            <span id="r-experience">Experience</span>
          </Heading>
          {experience.map((job) => (
            <div key={job.company} className="grid gap-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h4 className="font-semibold text-ink">
                  {job.role}, {job.company}
                </h4>
                <p className="num text-sm text-muted">
                  {job.start} to {job.end}
                </p>
              </div>
              <p className="text-sm text-muted">{job.location}</p>
              <ul className="grid list-disc gap-1 pl-5 text-ink-2 marker:text-muted">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="grid gap-3" aria-labelledby="r-projects">
          <Heading>
            <span id="r-projects">Selected projects</span>
          </Heading>
          <ul className="grid gap-3">
            {resumeProjects.map((p) => (
              <li key={p.slug} className="grid gap-0.5">
                <h4 className="font-semibold text-ink">{p.name}</h4>
                <p className="text-ink-2">{p.summary}</p>
                <p className="text-sm text-muted">{p.stack.join(", ")}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-3" aria-labelledby="r-skills">
          <Heading>
            <span id="r-skills">Skills</span>
          </Heading>
          <dl className="grid gap-1.5">
            {skills.map((g) => (
              <div key={g.group} className="grid gap-x-4 sm:grid-cols-[13rem_minmax(0,1fr)]">
                <dt className="font-semibold text-ink">{g.group}</dt>
                <dd className="m-0 text-ink-2">{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="grid gap-3" aria-labelledby="r-education">
          <Heading>
            <span id="r-education">Education</span>
          </Heading>
          <ul className="grid gap-2">
            {education.map((e) => (
              <li key={e.school} className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p>
                  <span className="font-semibold text-ink">{e.school}</span>
                  <span className="text-ink-2">, {e.detail}</span>
                </p>
                <p className="text-sm text-muted">{e.place}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-3" aria-labelledby="r-languages">
          <Heading>
            <span id="r-languages">Languages</span>
          </Heading>
          <p className="text-ink-2">
            {languages.map((l, i) => (
              <span key={l.name}>
                {i > 0 && ", "}
                {l.name}
                {l.detail && ` (${l.detail})`}
              </span>
            ))}
          </p>
        </section>
      </article>
    </main>
  );
}
