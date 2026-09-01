import type { Metadata } from "next"
import Script from "next/script"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { LatestBlogPost } from "@/components/latest-blog-post"
import AnimatedSection from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"
import ClubFeature from "@/components/club-feature"
import ServiceMediaPreview from "@/components/service-media-preview"
import BackgroundPreview from "@/components/background-preview"
import TedxFeature from "@/components/tedx-feature" // Added TEDx component import
import { homeMetadata } from "./page-metadata"

export const metadata: Metadata = homeMetadata

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profilepage`,
  url: `${siteUrl}/`,
  name: "Adil Mukhi - Youth Advocate, Public Speaker & Changemaker",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#person` },
  mainEntity: { "@id": `${siteUrl}/#person` },
  primaryImageOfPage: `${siteUrl}/pictures/adil-mukhi-formal-headshot.jpg`,
  inLanguage: "en-CA",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background page-transition">
      <Script id="home-structured-data" type="application/ld+json">
        {JSON.stringify(homeStructuredData)}
      </Script>
      <Header />
      <h1 className="sr-only">Adil Mukhi - Youth Advocate, Public Speaker, Founder, and Research Leader</h1>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={100}>
        <About />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={200}>
        <ClubFeature />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={225}>
        <TedxFeature />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={250}>
        <ServiceMediaPreview />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={275}>
        <BackgroundPreview />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={300}>
        <LatestBlogPost />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={500}>
        <Contact />
      </AnimatedSection>
      <Footer />
    </main>
  )
}
