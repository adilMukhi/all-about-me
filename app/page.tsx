import type { Metadata } from "next"
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

export default function Home() {
  return (
    <main className="min-h-screen bg-background page-transition">
      <Header />
      <h1 className="sr-only">Adil Mukhi - Student Researcher and Aspiring Medical Professional</h1>
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
