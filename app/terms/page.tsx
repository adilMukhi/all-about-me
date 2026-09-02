import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"
const LAST_UPDATED = "February 2, 2026"

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that apply to your use of adilmukhi.vercel.app: content ownership, acceptable use, disclaimers, and limitation of liability.",
  alternates: { canonical: `${siteUrl}/terms` },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Terms of Use — Adil Mukhi",
    description: "The terms that apply to your use of this website.",
    url: `${siteUrl}/terms`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Terms of Use" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use — Adil Mukhi",
    description: "The terms that apply to your use of this website.",
    creator: "@adilm_0",
    site: "@adilm_0",
    images: [`${siteUrl}/og-image.png`],
  },
}

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      slug="terms"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          By accessing this website you agree to these terms. If you do not agree, please do not use the site. The site
          is a personal portfolio operated by Adil Mukhi and is provided for general information.
        </p>
      }
    >
      <h2>1. Content and intellectual property</h2>
      <p>
        Unless noted otherwise, the text, design, photographs, and other original material on this site are owned by Adil
        Mukhi and are protected by copyright. Third-party names, logos, publication titles, and media excerpts remain the
        property of their respective owners and appear here for identification, commentary, and portfolio purposes.
      </p>
      <p>
        You may view, quote, and link to the site with attribution. You may not republish substantial portions, present
        the material as your own, or use it to imply endorsement, without permission.
      </p>

      <h2>2. Acceptable use</h2>
      <ul>
        <li>Do not use the site for any unlawful purpose or in violation of these terms.</li>
        <li>Do not attempt to disrupt, overload, probe, or gain unauthorised access to the site or its infrastructure.</li>
        <li>Do not scrape the site in a way that degrades performance for others (see the AI &amp; Automated Access Policy).</li>
      </ul>

      <h2>3. No professional advice</h2>
      <p>
        Content about health, research, education, policy, and advocacy is shared for general information and reflects
        personal views and experience. It is not medical, legal, financial, or other professional advice, and should not
        be relied on as such.
      </p>

      <h2>4. Services, rates, and bookings</h2>
      <p>
        Information on the Services page, including any rates, is provided for reference only and is not a binding offer.
        Any speaking, advising, or consulting engagement is subject to a separate written agreement. Bookings made through
        Cal.com are also subject to Cal.com&rsquo;s terms.
      </p>

      <h2>5. External links</h2>
      <p>
        The site links to third-party websites and profiles that are not under my control. I am not responsible for their
        content, accuracy, or practices.
      </p>

      <h2>6. Disclaimer of warranties</h2>
      <p>
        The site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties of any kind, express
        or implied, including accuracy, availability, or fitness for a particular purpose.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Adil Mukhi will not be liable for any indirect, incidental, or
        consequential damages arising from your use of, or inability to use, the site.
      </p>

      <h2>8. Governing law</h2>
      <p>
        These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable there,
        without regard to conflict-of-laws rules.
      </p>

      <h2>9. Changes</h2>
      <p>
        These terms may be updated from time to time. Continued use of the site after changes means you accept the
        updated terms.
      </p>
    </LegalPage>
  )
}
