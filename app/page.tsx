import '/global.css';  // Make sure the path is correct
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

import { Bangers, Bubblegum_Sans, Kirang_Haerang, Times_New_Roman } from 'next/font/google';
import './global.css';  // Import your global styles

// Define fonts using the next/font module
const bangers = Bangers({
  subsets: ['latin'],
  weight: ['400'],
});

const bubblegumSans = Bubblegum_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

const kirangHaerang = Kirang_Haerang({
  subsets: ['latin'],
  weight: ['400'],
});

const timesNewRoman = Times_New_Roman({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={100}>
        <About />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={175}>
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
      <AnimatedSection delay={710}>
        <Interests />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={750}>
        <Contact />
      </AnimatedSection>
      <Footer />
    </main>
  )
}

