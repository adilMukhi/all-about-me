import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"
import SocialLinks from "@/components/social-links"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { Download } from "lucide-react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"
const LAST_UPDATED = "September 5, 2026"

export const metadata: Metadata = {
  title: "Headshots & Images of Adil Mukhi",
  description:
    "Downloadable headshots and photos of Adil Mukhi — formal portraits, TEDx and speaking images, and photos from his work — cleared for use in publications and online.",
  alternates: { canonical: `${siteUrl}/media-inquiries/headshots` },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Headshots & Images of Adil Mukhi",
    description: "Downloadable headshots and photos of Adil Mukhi for publications and online use.",
    url: `${siteUrl}/media-inquiries/headshots`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Headshots of Adil Mukhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Headshots & Images of Adil Mukhi",
    description: "Downloadable headshots and photos of Adil Mukhi for publications and online use.",
    creator: "@adilm_0",
    site: "@adilm_0",
    images: [`${siteUrl}/og-image.png`],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${siteUrl}/media-inquiries/headshots#webpage`,
  url: `${siteUrl}/media-inquiries/headshots`,
  name: "Headshots & Images of Adil Mukhi",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#person` },
  inLanguage: "en-CA",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Media Inquiries", item: `${siteUrl}/media-inquiries` },
      { "@type": "ListItem", position: 3, name: "Headshots", item: `${siteUrl}/media-inquiries/headshots` },
    ],
  },
}

type Shot = {
  src: string
  alt: string
  caption: string
  orientation: "portrait" | "landscape"
}

const enc = (path: string) => path.replace(/ /g, "%20")

const headshots: Shot[] = [
  {
    src: "/pictures/adil-mukhi-formal-headshot.jpg",
    alt: "Formal headshot of Adil Mukhi",
    caption: "Formal headshot — preferred for bylines and author photos",
    orientation: "portrait",
  },
  {
    src: "/pictures/adil-mukhi-informal-portrait.jpg",
    alt: "Informal portrait of Adil Mukhi",
    caption: "Informal portrait",
    orientation: "portrait",
  },
  {
    src: "/blog/cfcfutureisnow (1).png",
    alt: "Adil Mukhi at the Children First Canada event",
    caption: "Adil Mukhi at a Children First Canada event",
    orientation: "landscape",
  },
]

const inAction: Shot[] = [
  {
    src: "/pictures/adil-mukhi-tedx-speaking-1.png",
    alt: "Adil Mukhi speaking at TEDx",
    caption: "TEDx talk",
    orientation: "portrait",
  },
  {
    src: "/pictures/adil-mukhi-tedx-speaking-2.jpeg",
    alt: "Adil Mukhi on stage at TEDx",
    caption: "TEDx talk (stage)",
    orientation: "landscape",
  },
  {
    src: "/pictures/Adil Mukhi - Tedx 1 withbackground.png",
    alt: "Adil Mukhi at TEDx with event backdrop",
    caption: "TEDx — with event backdrop",
    orientation: "portrait",
  },
  {
    src: "/pictures/adil-mukhi-dr-interested-founder.JPG",
    alt: "Adil Mukhi, founder of Dr. Interested",
    caption: "Working — Dr. Interested",
    orientation: "landscape",
  },
  {
    src: "/pictures/AdilMukhiDrInterested (1).jpg",
    alt: "Adil Mukhi representing Dr. Interested",
    caption: "Dr. Interested",
    orientation: "landscape",
  },
  {
    src: "/pictures/MedExplore (1).png",
    alt: "Adil Mukhi at the MedExplore Conference",
    caption: "MedExplore Conference",
    orientation: "landscape",
  },
  {
    src: "/pictures/MedExplore (2).JPG",
    alt: "Adil Mukhi at the MedExplore Conference",
    caption: "MedExplore Conference",
    orientation: "landscape",
  },
  {
    src: "/pictures/AIforGoodSummit2.png",
    alt: "Adil Mukhi at the AI for Good Summit",
    caption: "AI for Good Summit",
    orientation: "landscape",
  },
  {
    src: "/pictures/AiWorkshop.png",
    alt: "Adil Mukhi leading an AI workshop",
    caption: "Leading a workshop",
    orientation: "landscape",
  },
  {
    src: "/pictures/adil-mukhi-lab-coat-medical-research.JPG",
    alt: "Adil Mukhi in a lab coat doing medical research",
    caption: "Research / lab",
    orientation: "portrait",
  },
  {
    src: "/pictures/AdilMukhiKHP_WSKCT.JPG",
    alt: "Adil Mukhi at a University of Toronto KPE event",
    caption: "U of T KPE — Rethink Sport",
    orientation: "landscape",
  },
  {
    src: "/pictures/adil-mukhi-camera-photographer.JPG",
    alt: "Adil Mukhi holding a camera",
    caption: "Photography",
    orientation: "portrait",
  },
  {
    src: "/pictures/adil-mukhi-tennis-sports.jpg",
    alt: "Adil Mukhi playing tennis",
    caption: "Tennis — Play-to-Heal",
    orientation: "portrait",
  },
  {
    src: "/pictures/adil-mukhi-graduation.jpg",
    alt: "Adil Mukhi at graduation",
    caption: "Graduation",
    orientation: "portrait",
  },
]

const Gallery = ({ shots }: { shots: Shot[] }) => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {shots.map((shot) => (
      <figure key={shot.src} className="rounded-lg bg-card shadow-sm overflow-hidden flex flex-col">
        <div className="bg-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={enc(shot.src)}
            alt={shot.alt}
            loading="lazy"
            className={`w-full object-cover ${shot.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}`}
          />
        </div>
        <figcaption className="flex items-center justify-between gap-3 p-3 text-sm">
          <span className="text-muted-foreground">{shot.caption}</span>
          <a
            href={enc(shot.src)}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium shrink-0"
          >
            <Download className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only">Download</span>
          </a>
        </figcaption>
      </figure>
    ))}
  </div>
)

export default function HeadshotsPage() {
  return (
    <main className="min-h-screen bg-background page-transition">
      <Script id="headshots-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <Header />

      <AnimatedSection>
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container max-w-5xl">
            <SEOBreadcrumbs
              items={[
                { label: "Media Inquiries", href: "/media-inquiries" },
                { label: "Headshots", href: "/media-inquiries/headshots", active: true },
              ]}
            />
            <h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary"
              style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}
            >
              Headshots &amp; Images
            </h1>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-muted-foreground">
              Photos of Adil Mukhi cleared for use in publications, event programs, and online coverage. Click{" "}
              <strong>Download</strong> to save the full-size file. Please credit as{" "}
              <em>Courtesy of Adil Mukhi</em> unless a specific photographer credit is provided on request. Do not crop or
              edit in a way that misrepresents the subject or context. Need a higher-resolution file or a different crop?{" "}
              <a href="mailto:adilm@drinterested.org" className="text-primary underline underline-offset-2">
                adilm@drinterested.org
              </a>
              .
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>
      </AnimatedSection>

      <Separator />

      <AnimatedSection delay={100}>
        <section className="py-16">
          <div className="container max-w-5xl space-y-12">
            <div>
              <h2 className="text-xl font-semibold text-primary mb-6">Headshots &amp; portraits</h2>
              <Gallery shots={headshots} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-6">In action</h2>
              <Gallery shots={inAction} />
            </div>
            <p className="text-[15px] text-muted-foreground">
              Looking for a bio to go with these?{" "}
              <Link href="/media-inquiries/biography" className="text-primary underline underline-offset-2">
                Biography of Adil Mukhi &rarr;
              </Link>
            </p>
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
