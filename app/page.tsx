import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import SocialLinks from "@/components/social-links"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import WorkExperience from "@/components/work-experience"
import Education from "@/components/education"
import Certificates from "@/components/certificates"
import VolunteerWork from "@/components/volunteer-work"
import HonorsAwards from "@/components/honors-awards"
import Interests from "@/components/interests"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={75}>
        <About />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={150}>
        <SocialLinks />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={225}>
        <Skills />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={300}>
        <WorkExperience />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={375}>
        <Education />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={450}>
        <Projects />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={525}>
        <Certificates />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={600}>
        <VolunteerWork />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={675}>
        <HonorsAwards />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={750}>
        <Interests />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={825}>
        <Contact />
      </AnimatedSection>
      <Footer />
    </main>
  )
}

