import type { Metadata } from "next"
import Script from "next/script"
import Header from "@/components/header"
import CinematicHero from "@/components/home/cinematic-hero"
import ImpactStats from "@/components/home/impact-stats"
import QuickPaths from "@/components/home/quick-paths"
import PhotoReel from "@/components/home/photo-reel"
import RecognitionSpotlight from "@/components/home/recognition-spotlight"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { LatestBlogPost } from "@/components/latest-blog-post"
import AnimatedSection from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"
import ClubFeature from "@/components/club-feature"
import ServiceMediaPreview from "@/components/service-media-preview"
import BackgroundPreview from "@/components/background-preview"
import TedxFeature from "@/components/tedx-feature"
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
    <main className="min-h-screen bg-background text-foreground">
      <Script id="home-structured-data" type="application/ld+json">
        {JSON.stringify(homeStructuredData)}
      </Script>
      <Header />
      <CinematicHero />
      <ImpactStats />
      <QuickPaths />
      <Separator />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <PhotoReel />
      <AnimatedSection>
        <ClubFeature />
      </AnimatedSection>
      <Separator />
      <AnimatedSection>
        <TedxFeature />
      </AnimatedSection>
      <RecognitionSpotlight />
      <AnimatedSection>
        <ServiceMediaPreview />
      </AnimatedSection>
      <Separator />
      <AnimatedSection>
        <BackgroundPreview />
      </AnimatedSection>
      <Separator />
      <AnimatedSection>
        <LatestBlogPost />
      </AnimatedSection>
      <Separator />
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <Footer />
    </main>
  )
}
