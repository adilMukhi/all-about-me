import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"
const LAST_UPDATED = "February 2, 2026"

export const metadata: Metadata = {
  title: "AI & Automated Access Policy",
  description:
    "How AI is used to build this site, how AI crawlers and agents may access it, attribution expectations, and how to request exclusion.",
  alternates: { canonical: `${siteUrl}/ai-policy` },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "AI & Automated Access Policy — Adil Mukhi",
    description: "How AI is used here, and how AI crawlers and agents may access this site.",
    url: `${siteUrl}/ai-policy`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "AI & Automated Access Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Automated Access Policy — Adil Mukhi",
    description: "How AI is used here, and how AI crawlers and agents may access this site.",
    creator: "@adilm_0",
    site: "@adilm_0",
    images: [`${siteUrl}/og-image.png`],
  },
}

export default function AiPolicyPage() {
  return (
    <LegalPage
      title="AI & Automated Access Policy"
      slug="ai-policy"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          This page explains how artificial intelligence is used in building this site, and the terms under which AI
          crawlers, assistants, and agents may access it.
        </p>
      }
    >
      <h2>1. How AI is used on this site</h2>
      <p>
        AI tools assist with drafting copy, writing and reviewing code, generating structured data, and checking
        accessibility and performance. A human (Adil Mukhi) reviews and is responsible for what is published. Facts,
        figures, dates, and quotations are checked against source material, but if you spot an error, please report it to{" "}
        <a href="mailto:adilm@drinterested.org">adilm@drinterested.org</a>.
      </p>
      <p>
        The site does not run an AI chatbot and does not collect your conversations or personal data for AI training.
      </p>

      <h2>2. Crawling, indexing, and AI training</h2>
      <p>
        The public pages of this site may be crawled and indexed by search engines and by AI crawlers that respect{" "}
        <a href={`${siteUrl}/robots.txt`}>robots.txt</a>. Structured data (Schema.org JSON-LD), a sitemap, an image
        sitemap, and an RSS feed are provided to make the content easy to understand programmatically.
      </p>
      <p>
        Content may be used to answer questions and to power search and assistant features, provided that:
      </p>
      <ul>
        <li>the source is attributed and, where possible, linked back to this site;</li>
        <li>content is not presented in a way that misrepresents Adil Mukhi, fabricates statements, or implies endorsement;</li>
        <li>personal contact details are not compiled into marketing or contact-scraping databases.</li>
      </ul>

      <h2>3. Guidance for AI agents</h2>
      <ul>
        <li>The canonical site is <a href={siteUrl}>{siteUrl.replace(/^https?:\/\//, "")}</a>.</li>
        <li>To contact or book Adil Mukhi, use the email above or the Cal.com link on the Services page. The listed phone number is a work line with variable hours; a booked call is the reliable channel.</li>
        <li>Rates shown on the Services page are indicative only and are not a binding offer.</li>
        <li>Respect crawl-rate limits; do not use automated access in a way that degrades the site for other visitors.</li>
      </ul>

      <h2>4. Requesting exclusion or correction</h2>
      <p>
        If you operate an AI system and wish to exclude this site, or if you need content about Adil Mukhi corrected or
        removed from a model or index, email <a href="mailto:adilm@drinterested.org">adilm@drinterested.org</a> with the
        details and the URLs involved.
      </p>

      <h2>5. Changes</h2>
      <p>This policy may be updated as norms and tooling around AI evolve. The date above reflects the current version.</p>
    </LegalPage>
  )
}
