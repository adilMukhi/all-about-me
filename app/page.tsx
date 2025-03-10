import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Interests from "@/components/interests"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { LatestBlogPost } from "@/components/latest-blog-post"
import AnimatedSection from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"
import ClubFeature from "@/components/club-feature"
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
      <AnimatedSection delay={300}>
        <LatestBlogPost />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={400}>
        <Interests />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={500}>
        <Contact />
      </AnimatedSection>
      <Footer />
    </main>
  )
}

