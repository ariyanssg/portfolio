# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated, then confirmed by the user: Next.js 16 (App Router, React Server Components), TypeScript, Tailwind CSS v4, MDX for case studies. Deployed on Vercel (a `*.vercel.app` address for now). No database: all content lives in the repo; the contact form emails through Resend and stores nothing.

## Users

Two audiences, weighted equally:

- **Recruiters and hiring managers** hiring full-stack engineers. They scan fast, want role, stack, real shipped work and a resume they can download or forward.
- **Freelance and contract clients** (businesses needing a web product built). They want to see what he has built, how he works, and how to start a conversation.

## Product Purpose

The personal site of Mahmudul Hassan, a full-stack developer in Dhaka. It is both his portfolio and his resume: one place that proves what he builds and gets him hired or contracted. Success is a visitor contacting him, downloading the resume, or opening a project.

## Positioning

He builds the operational software hospitality and service businesses run on: property management, restaurant ordering, CMS, invoicing and payroll, SEO auditing. He works across Angular, Next.js and Node.js, not just one framework, and his independent projects (Vela, Signal404) show systems thinking beyond page-building: multi-tenant Postgres with RLS, immutable ledgers, resumable crawlers.

## Operating Context

Visitors arrive from his GitHub profile (github.com/ariyanssg), LinkedIn (in/mahmudh456), job applications and direct links. Recruiters often forward a PDF resume, so the resume must also exist as a clean printable page and a downloadable PDF that passes applicant tracking systems.

## Capabilities and Constraints

- Sections: introduction, selected projects (with case-study pages), experience, skills, education, contact, resume.
- Projects lead the page after the introduction (user's choice).
- Contact by email (mailto plus form via Resend), LinkedIn, GitHub.
- No analytics beyond Vercel Web Analytics; no database; no CMS.
- Undecided: custom domain, blog/notes section.

## Brand Commitments

- Name: Mahmudul Hassan. GitHub handle ariyanssg. Email techwitharyan@gmail.com.
- His GitHub profile uses a dark surface with an amber signal colour; continuity is welcome, not binding.
- Photo: the user approved using his current GitHub avatar.
- Layout preference (user, Oct 2026): a simple, familiar, professional portfolio layout over conceptual visual worlds; mobile-first and fully responsive.

## Evidence on Hand

- Resume PDF: `/Users/ariyan/Downloads/Mahmudul-Hassan-Resume.pdf` (Full Stack Developer, Intuitive Solutions, Uttara, Dhaka, Jul 2025 – present; B.Sc. in CSE, East West University, GPA 3.04; Dhaka College HSC; IELTS 7.5).
- Projects with public code: Vela / hospitality-os (NestJS, Next.js, PostgreSQL, Drizzle, Turborepo), Signal404 (live at https://res404.netlify.app, Playwright, TypeScript, SQLite, Netlify Functions), CRM System (Next.js, Supabase), Flashcard AI (React, Gemini), Event Management API, Rizz Pharmacy (live at https://rizz-pharmacy.vercel.app), Pair2Pixel, Pacman AI.
- Private client work, described but not linked: Property Management System (Angular 19, Ionic 8, Node.js, MongoDB), restaurant platform Angular SSR migration, neerGor property platform (Next.js 16), e-commerce admin.
- Absent, never to be fabricated: metrics, user counts, testimonials, client logos, years of experience beyond the resume dates.

## Product Principles

1. Show the work, then claim: every claim on the page points to a project, a repo or a role.
2. Fast to scan for a recruiter, deep enough for an engineer: summary first, case studies one click away.
3. The site itself is evidence of craft: fast, accessible, correct on every screen and in print.
4. Truth over polish: no invented numbers, quotes or logos.

## Accessibility & Inclusion

WCAG 2.2 AA. Keyboard navigable, visible focus, reduced motion respected, readable in light and dark, printable resume.
