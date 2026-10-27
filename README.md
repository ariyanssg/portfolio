# Mahmudul Hassan, portfolio and resume

The personal site of Mahmudul Hassan, full-stack developer in Dhaka: selected work with case studies, experience, skills, a printable resume and a contact form.

Built with Next.js 16 (App Router, Cache Components), React 19, TypeScript, Tailwind CSS v4 and MDX. No database: every word lives in this repo.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit the content

| What | Where |
| --- | --- |
| Name, links, projects, experience, skills, education | `src/content/site.ts` |
| Case studies | `src/content/work/<slug>.mdx` (a project with `caseStudy: true` in `site.ts` gets a page at `/work/<slug>`) |
| Resume PDF | `public/resume/Mahmudul-Hassan-Resume.pdf` |
| Portrait and screenshots | `public/images/` |
| Colours, type scale, spacing | `src/app/tokens.css` |

## Pages

- `/` home: identity column and the record of work
- `/work/<slug>` case studies
- `/resume` resume page; prints cleanly to A4 and links the PDF

## Contact form

The form emails messages through [Resend](https://resend.com) and stores nothing. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`. Without a key the form tells visitors to email directly.

## Deploy

Import the repository into Vercel; no settings needed. Add the environment variables from `.env.example` in the Vercel project settings to turn on the contact form, and `NEXT_PUBLIC_SITE_URL` once a custom domain is set.
