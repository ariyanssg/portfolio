import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/resume`, changeFrequency: "monthly", priority: 0.8 },
    ...caseStudies.map((p) => ({ url: `${siteUrl}/work/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
