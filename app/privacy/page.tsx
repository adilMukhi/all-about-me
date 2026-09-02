import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"
const LAST_UPDATED = "February 2, 2026"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How adilmukhi.vercel.app handles visitor data: analytics, cookies from embedded content, third-party services, and your choices.",
  alternates: { canonical: `${siteUrl}/privacy` },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Privacy Policy — Adil Mukhi",
    description: "How this website handles visitor data, analytics, and cookies.",
    url: `${siteUrl}/privacy`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Adil Mukhi",
    description: "How this website handles visitor data, analytics, and cookies.",
    creator: "@adilm_0",
    site: "@adilm_0",
    images: [`${siteUrl}/og-image.png`],
  },
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      slug="privacy"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          This is the personal portfolio website of Adil Mukhi (&ldquo;the site&rdquo;). It is an informational site: it
          has no user accounts, no login, and no forms that store what you submit. This policy explains the limited data
          that is processed when you visit.
        </p>
      }
    >
      <h2>1. Information collected automatically</h2>
      <p>
        Like most websites, standard server and analytics logs are recorded when you visit. This may include your IP
        address (often truncated or anonymised by the provider), browser and device type, referring page, pages viewed,
        and approximate region. This data is used only to understand traffic, measure performance, and keep the site
        secure and working.
      </p>
      <ul>
        <li>
          <strong>Hosting &amp; analytics:</strong> the site is hosted on Vercel and uses Vercel Web Analytics and Vercel
          Speed Insights, which collect aggregated, largely cookieless usage and performance metrics.
        </li>
        <li>
          <strong>Google Analytics / Google Tag Manager / Google Ads tag:</strong> used for aggregate audience
          measurement and campaign attribution. These set cookies and may share data with Google. See{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google&rsquo;s Privacy Policy
          </a>
          .
        </li>
      </ul>

      <h2>2. Cookies and embedded content</h2>
      <p>
        Some pages embed third-party content that can set its own cookies or collect data once you interact with it,
        under that provider&rsquo;s own privacy policy:
      </p>
      <ul>
        <li>YouTube video embeds (loaded only after you click play; served in privacy-enhanced mode)</li>
        <li>Cal.com booking links and, where used, the Cal.com scheduling widget</li>
        <li>Spotify episode embeds on the Watch &amp; Listen pages</li>
        <li>Instagram and TikTok embeds on the Services page</li>
      </ul>
      <p>
        You can block or delete cookies in your browser settings. Doing so will not break the core content of the site.
      </p>

      <h2>3. Contacting me</h2>
      <p>
        If you email me, call the work number, or book a call through Cal.com, the information you choose to share (your
        name, email, message, and scheduling details) is used only to respond to you and, where relevant, to arrange or
        deliver a speaking or consulting engagement. Scheduling is handled by Cal.com under{" "}
        <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer">
          their privacy policy
        </a>
        .
      </p>

      <h2>4. Data sharing</h2>
      <p>
        Personal data is not sold. It is processed by the service providers named above (Vercel, Google, Cal.com, and the
        embed providers) acting on my behalf or as independent controllers of their own products, and may be disclosed if
        required by law.
      </p>

      <h2>5. Retention</h2>
      <p>
        Analytics data is retained according to each provider&rsquo;s defaults. Emails and booking records are kept only
        as long as needed for correspondence, engagements, and ordinary record-keeping.
      </p>

      <h2>6. Your choices and rights</h2>
      <p>
        Depending on where you live (for example under Canada&rsquo;s PIPEDA, Ontario privacy law, the EU/UK GDPR, or
        similar laws) you may have the right to access, correct, or delete personal data about you, or to object to
        certain processing. To make a request, email{" "}
        <a href="mailto:adilm@drinterested.org">adilm@drinterested.org</a>. You can also opt out of Google Analytics using
        Google&rsquo;s{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          browser opt-out add-on
        </a>
        .
      </p>

      <h2>7. Children</h2>
      <p>
        The site is not directed at children under 13 and does not knowingly collect their personal information. Much of
        the work described here involves youth programs; those programs have their own separate policies.
      </p>

      <h2>8. External links</h2>
      <p>
        The site links to external websites and social profiles. Their content and privacy practices are not controlled
        by this site.
      </p>

      <h2>9. Changes</h2>
      <p>
        This policy may be updated from time to time. The &ldquo;last updated&rdquo; date above reflects the current
        version.
      </p>
    </LegalPage>
  )
}
