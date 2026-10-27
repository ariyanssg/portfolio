import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/content/site";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name}, full-stack developer`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.name} is a full-stack developer in Dhaka building web applications and backend systems with Angular, Next.js and Node.js.`,
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    type: "website",
    siteName: profile.name,
    title: `${profile.name}, full-stack developer`,
    description: "Angular, Next.js and Node.js. I build the systems hotels, restaurants and businesses run on.",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#1d1e21" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={schibsted.variable}>
      <body>
        <a
          href="#main"
          className="btn btn-primary no-print fixed left-4 top-4 z-[999] -translate-y-24 focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
