import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"
import SocialLinks from "@/components/social-links"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { Mail, Phone, CalendarClock, FileText, Camera, Newspaper, ExternalLink } from "lucide-react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"
const CONTACT_EMAIL = "adilm@drinterested.org"
const CONTACT_PHONE = "+1 289 796 2566"
const LAST_UPDATED = "September 5, 2026"

export const metadata: Metadata = {
  title: "Media Inquiries",
  description:
    "How journalists, producers, and editors can reach Adil Mukhi for interviews, commentary, and appearances — including contact details, what to include in a request, and press kit resources.",
  alternates: { canonical: `${siteUrl}/media-inquiries` },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Media Inquiries — Adil Mukhi",
    description:
      "Contact details and press resources for interviews, commentary, and appearances with youth advocate and TEDx speaker Adil Mukhi.",
    url: `${siteUrl}/media-inquiries`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Media Inquiries — Adil Mukhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Inquiries — Adil Mukhi",
    description:
      "Contact details and press resources for interviews, commentary, and appearances with Adil Mukhi.",
    creator: "@adilm_0",
    site: "@adilm_0",
    images: [`${siteUrl}/og-image.png`],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/media-inquiries#webpage`,
  url: `${siteUrl}/media-inquiries`,
  name: "Media Inquiries — Adil Mukhi",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#person` },
  inLanguage: "en-CA",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Media Inquiries", item: `${siteUrl}/media-inquiries` },
    ],
  },
}

const mailtoBody = encodeURIComponent(
  [
    "Your name:",
    "Outlet / organization:",
    "What you're working on:",
    "Format (print, radio, TV, podcast, panel, live):",
    "Deadline / date and time of publication or broadcast:",
    "Estimated time needed:",
  ].join("\n"),
)

export default function MediaInquiriesPage() {
  return (
    <main className="min-h-screen bg-background page-transition">
      <Script id="media-inquiries-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <Header />

      <AnimatedSection>
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container max-w-3xl">
            <SEOBreadcrumbs items={[{ label: "Media Inquiries", href: "/media-inquiries", active: true }]} />
            <h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary"
              style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}
            >
              Media Inquiries
            </h1>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
              A hub for journalists, producers, editors, and event organizers. Adil Mukhi is a youth advocate, TEDx
              speaker, and founder of Dr. Interested, and speaks on youth empowerment, mental health, education, and civic
              participation. For coverage of past work, see the{" "}
              <Link href="/media" className="text-primary underline underline-offset-2 font-medium">
                Media Coverage
              </Link>{" "}
              page and{" "}
              <Link href="/watch" className="text-primary underline underline-offset-2 font-medium">
                Watch &amp; Listen
              </Link>
              .
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>
      </AnimatedSection>

      <Separator />

      <AnimatedSection delay={100}>
        <section className="py-16">
          <div className="container max-w-3xl grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-primary">Contact for media requests</h2>
              <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                Email is the fastest way to reach me and is checked daily.
              </p>
              <div className="mt-4 space-y-3 text-[15px]">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Media request")}&body=${mailtoBody}`}
                  className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Mail className="h-5 w-5 shrink-0" />
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  {CONTACT_PHONE}
                </a>
                <p className="flex items-start gap-3 text-muted-foreground">
                  <CalendarClock className="h-5 w-5 shrink-0" />
                  <span>
                    The phone line is a work number with variable hours. For a firm slot, book a call via the{" "}
                    <Link href="/services" className="text-primary underline underline-offset-2">
                      Services
                    </Link>{" "}
                    page.
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">What to include</h2>
              <ul className="mt-3 space-y-1.5 list-disc pl-5 text-[15px] leading-7 text-muted-foreground marker:text-primary">
                <li>Your name and your outlet or organization</li>
                <li>What you&apos;re working on and the angle</li>
                <li>Format — print, radio, TV, podcast, panel, or live</li>
                <li>Your deadline, or the date and time of publication or broadcast</li>
                <li>How much time you expect to need</li>
              </ul>
              <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                On deadline? Say so in the subject line and I&apos;ll prioritize the reply.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Separator />

      <AnimatedSection delay={150}>
        <section className="py-16 bg-gradient-to-b from-background to-primary/5">
          <div className="container max-w-3xl">
            <h2 className="text-xl font-semibold text-primary">Press kit</h2>
            <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
              Resources for stories and event listings. Need something that isn&apos;t here — a specific headshot crop, a
              shorter bio, a logo file? Email <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-2">{CONTACT_EMAIL}</a>.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-card p-5 shadow-sm">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-semibold text-primary">Biography of Adil</h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">
                  View different versions of biographies of Adil for use.
                </p>
                <Link
                  href="/media-inquiries/biography"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View More
                </Link>
              </div>
              <div className="flex flex-col rounded-lg bg-card p-5 shadow-sm">
                <Camera className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-semibold text-primary">Headshots of Adil</h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">
                  View headshots and images of Adil for use in publications and online.
                </p>
                <Link
                  href="/media-inquiries/headshots"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View More
                </Link>
              </div>
              <div className="flex flex-col rounded-lg bg-card p-5 shadow-sm">
                <Newspaper className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-semibold text-primary">Past coverage</h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">
                  Articles, interviews, features, and spotlights.
                </p>
                <Link
                  href="/media"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View More
                </Link>
              </div>
            </div>

            <div className="mt-8 rounded-lg border-l-2 border-primary/20 bg-muted/50 p-4 text-[15px] leading-7 text-muted-foreground">
              <h3 className="font-semibold text-foreground">Key facts</h3>
              <ul className="mt-2 space-y-1 list-disc pl-5 marker:text-primary">
                <li>Full name: Adil Mukhi</li>
                <li>Based in the Greater Toronto Area (Mississauga), Ontario, Canada</li>
                <li>Founder &amp; Executive Director, Dr. Interested — 160,000+ people reached across 106 countries</li>
                <li>TEDx speaker; Ontario Volunteer Service Award recipient</li>
                <li>
                  Canonical site:{" "}
                  <a href={siteUrl} className="text-primary underline underline-offset-2">
                    {siteUrl.replace(/^https?:\/\//, "")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/media"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Browse all media coverage
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <SocialLinks />
      </AnimatedSection>
      <Footer />
    </main>
  )
}
