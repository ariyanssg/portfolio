// Single source of truth for the home page, case studies and the resume page.
// Facts come from the resume PDF and the project repositories; nothing here is invented.

export const profile = {
  name: "Mahmudul Hassan",
  role: "Full-stack developer",
  company: "Intuitive Solutions",
  location: "Dhaka, Bangladesh",
  email: "techwitharyan@gmail.com",
  phone: "+880 1863 833452",
  github: "https://github.com/ariyanssg",
  githubHandle: "ariyanssg",
  linkedin: "https://www.linkedin.com/in/mahmudh456",
  linkedinHandle: "in/mahmudh456",
  resumePdf: "/resume/Mahmudul-Hassan-Resume.pdf",
  sentence: "Full-stack developer building the systems hotels, restaurants and businesses run on.",
  summary:
    "Full-stack developer building web applications and backend systems with Angular, Next.js and Node.js. I design REST APIs, work with PostgreSQL and MongoDB, and care about software that stays correct when real businesses depend on it.",
} as const;

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  stack: string[];
  year: string;
  status: string;
  links: { label: string; href: string }[];
  caseStudy: boolean;
};

export const featuredProjects: Project[] = [
  {
    slug: "vela",
    name: "Vela",
    tagline: "A hospitality operating system",
    summary:
      "Property management, point of sale, booking and accounting for hotels, all on one transactional Postgres core.",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Drizzle", "Redis", "Turborepo"],
    year: "2026",
    status: "In development",
    links: [{ label: "Code", href: "https://github.com/ariyanssg/hospitality-os" }],
    caseStudy: true,
  },
  {
    slug: "signal404",
    name: "Signal404",
    tagline: "SEO audits for restaurant websites",
    summary:
      "Finds broken and soft-404 pages that Google still shows for restaurant sites, and checks their Google Business Profiles.",
    stack: ["TypeScript", "Playwright", "SQLite", "Netlify Functions"],
    year: "2026",
    status: "Live",
    links: [
      { label: "Live site", href: "https://res404.netlify.app" },
      { label: "Code", href: "https://github.com/ariyanssg/signal404" },
    ],
    caseStudy: true,
  },
];

export const moreProjects: Project[] = [
  {
    slug: "crm-system",
    name: "CRM System",
    tagline: "Subscriptions, accounts and support in one place",
    summary:
      "An admin console and customer portal for selling shared and individual software subscriptions: products, seat limits, auto-renewal, encrypted account credentials and support tickets.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "shadcn/ui"],
    year: "2025",
    status: "Complete",
    links: [{ label: "Code", href: "https://github.com/ariyanssg/crm-system" }],
    caseStudy: true,
  },
  {
    slug: "flashcard-ai",
    name: "Flashcard AI",
    tagline: "Study decks generated from your notes",
    summary:
      "Paste notes, upload a Word or text file, or snap a photo of your notes, and Gemini turns it into a flashcard deck with spaced repetition, four study modes and progress stats.",
    stack: ["React", "TypeScript", "Gemini API", "Zustand"],
    year: "2024",
    status: "Complete",
    links: [{ label: "Code", href: "https://github.com/ariyanssg/flashcard_gen" }],
    caseStudy: true,
  },
  {
    slug: "event-management-api",
    name: "Event Management API",
    tagline: "REST API for restaurant events",
    summary: "Create, update and manage restaurant events with input validation, rate limiting and security headers.",
    stack: ["Node.js", "Express", "MongoDB"],
    year: "2025",
    status: "Complete",
    links: [{ label: "Code", href: "https://github.com/ariyanssg/event-management-api" }],
    caseStudy: false,
  },
  {
    slug: "rizz-pharmacy",
    name: "Rizz Pharmacy",
    tagline: "E-commerce storefront for health products",
    summary: "A responsive storefront for prescription treatments and health products.",
    stack: ["React", "Vite", "Tailwind CSS"],
    year: "2025",
    status: "Live",
    links: [
      { label: "Live site", href: "https://rizz-pharmacy.vercel.app" },
      { label: "Code", href: "https://github.com/ariyanssg/rizz-pharmacy" },
    ],
    caseStudy: false,
  },
];

export const experience = [
  {
    role: "Full-stack developer",
    company: "Intuitive Solutions",
    location: "Uttara, Dhaka",
    start: "Jul 2025",
    end: "Present",
    points: [
      "Built a property management system end to end with Angular 19, Ionic 8, Node.js, Express and MongoDB.",
      "Designed and built the invoice and payroll backends.",
      "Migrated the CMS web templates from Angular 9 and Bootstrap 4 to Angular 20 and Tailwind CSS.",
      "Built a Playwright tool that finds broken backlinks in Google search results and checks Google Business Profile data.",
      "Built backend modules for the restaurant management system and the CMS admin panel.",
      "Built a complete CMS that lets clients publish custom JavaScript and CSS.",
    ],
    stack: ["Angular", "Ionic", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Playwright"],
    // The home page shows these; the resume shows every point.
    highlights: 4,
  },
] as const;

export const skills = [
  { group: "Languages and frameworks", items: ["TypeScript", "JavaScript", "Node.js", "Express", "NestJS", "Angular", "Next.js", "React", "Ionic"] },
  { group: "Styling and UI", items: ["Tailwind CSS", "Bootstrap 5", "Material UI", "Sass", "shadcn/ui"] },
  { group: "APIs and backend", items: ["REST APIs", "JWT auth", "OAuth2", "WebSockets"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Query optimisation"] },
  { group: "DevOps and tools", items: ["Git", "GitHub", "GitLab", "Docker", "NGINX", "Vercel", "Netlify"] },
  { group: "Testing", items: ["Playwright", "Jest", "Postman"] },
] as const;

export const education = [
  { school: "East West University", detail: "B.Sc. in Computer Science and Engineering", place: "Dhaka" },
  { school: "Dhaka College", detail: "Higher Secondary Certificate", place: "Dhaka" },
] as const;

export const languages = [
  { name: "English", detail: "IELTS band 7.5" },
  { name: "Bengali", detail: "" },
  { name: "Hindi and Urdu", detail: "" },
] as const;

export const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const allProjects = [...featuredProjects, ...moreProjects];
export const caseStudies = allProjects.filter((p) => p.caseStudy);
