"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Globe, Users, Trophy, Zap } from "lucide-react"

export default function DrInterestedClient() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { label: "Executives", value: "360+", icon: Users },
    { label: "Members", value: "1,700", icon: Globe },
    { label: "Countries", value: "106", icon: Trophy },
    { label: "Events", value: "20+", icon: Zap },
  ]

  const images = [
    {
      src: "https://i.postimg.cc/r06G4R5g/Adil-Mukhi-Hosting-The-Minds-Project-Panel.png",
      alt: "Adil Mukhi hosting The Minds Project Panel",
      title: "Hosting The Minds Project Panel",
    },
    {
      src: "https://i.postimg.cc/zLHS3FH7/tudent-Networking-at-Psychology-Conference.png",
      alt: "Dr. Interested Community Event",
      title: "Psychology & Culture Conference",
    },
    {
      src: "https://i.postimg.cc/ft47dSYd/Dr-Interested-Volunteer-Team-Group-Photo.jpg",
      alt: "Dr. Interested Volunteer Team",
      title: "Dr. Interested Volunteer Team",
    },
    {
      src: "https://i.postimg.cc/bDX0nS1g/Explore-3-Case-Competition-Team-Leadership.png",
      alt: "Explore3 Case Competition Team Leadership",
      title: "Explore3 Case Competition Leadership",
    },
    {
      src: "https://i.postimg.cc/B8PctBPN/MP-Peter-Fonseca-and-Councillor-Chris-Fonseca-Keynote-at-Explore-3.png",
      alt: "MP Peter Fonseca and Councillor Chris Fonseca keynote",
      title: "Political Leaders at Explore3",
    },
    {
      src: "https://i.imgur.com/ym74D8N.png",
      alt: "Community in Action",
      title: "Community in Action",
    },
  ]

  return (
    <main className="min-h-screen bg-background page-transition">
      <Header />

      {/* Hero Section */}
      <AnimatedSection>
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs
              items={[
                { label: "Background", href: "/background" },
                { label: "Dr. Interested", href: "/experience/drinterested", active: true },
              ]}
            />

            <div className="max-w-5xl mx-auto">
              <Link href="/background#work" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Background
              </Link>

              <h1
                className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-primary to-teal-500 mb-4"
                style={{ fontFamily: "Sour Gummy, latin" }}
              >
                Dr. Interested
              </h1>

              <p className="text-2xl font-semibold text-primary mb-2">Executive Director & Founder</p>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Leading a global youth mentorship platform that empowers students through research, advocacy, and
                educational opportunities across six continents.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={index}
                      className={`p-4 bg-primary/5 rounded-lg border border-primary/20 transition-all duration-700 ${
                        mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <Icon className="h-6 w-6 text-primary mb-2" />
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Overview Section with Image */}
      <AnimatedSection delay={50}>
        <section className="py-16">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Mission & Vision</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As Founder and Executive Director of Dr. Interested, I design programs and initiatives that empower
                    youth through mentorship, advocacy, and impactful events. Our platform connects 60,000+ youth
                    globally, fostering a community where students can explore their curiosity, engage in meaningful
                    research, and become leaders in their fields.
                  </p>
                  <p>
                    Dr. Interested operates with a dedicated team of 6 medical student advisors and a passionate
                    community of 900+ members worldwide. We organize 11+ major events annually, creating spaces where
                    youth can collaborate, learn, and make a real impact on pressing global issues.
                  </p>
                  <p>
                    Our work spans continents, with participants from 6 different continents engaging in research
                    competitions, educational workshops, and networking opportunities that bridge the gap between
                    academic curiosity and professional opportunity.
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="https://i.postimg.cc/zLHS3FH7/tudent-Networking-at-Psychology-Conference.png"
                  alt="Dr. Interested Community Event - Culture and Psychology Conference"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Key Initiatives Section */}
      <AnimatedSection delay={100}>
        <section className="py-16 bg-primary/5">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Key Initiatives & Achievements</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/50 p-8 rounded-lg border border-primary/20 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-primary mb-4">Research & Innovation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dr. Interested hosts cutting-edge research competitions and mentorship programs connecting students
                  with medical professionals. Our Explore3 Case Competition features 250+ participants annually,
                  attracting keynote speakers including Members of Parliament and City Councillors.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 250+ participants in 2025 research competition</li>
                  <li>• Multi-disciplinary case competitions</li>
                  <li>• Mentorship from experienced professionals</li>
                </ul>
              </div>

              <div className="bg-white/50 p-8 rounded-lg border border-primary/20 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-primary mb-4">Global Community Building</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our platform fosters meaningful connections between young people from diverse backgrounds. Through
                  workshops, panel discussions, and networking events, we create spaces where youth can explore their
                  passions and build lasting professional relationships.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 900+ active members across 6 continents</li>
                  <li>• 11+ major events annually</li>
                  <li>• 1,000,000+ reach through marketing</li>
                </ul>
              </div>

              <div className="bg-white/50 p-8 rounded-lg border border-primary/20 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-primary mb-4">Mentorship Programs</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At the heart of Dr. Interested is our commitment to mentorship. With guidance from 6 medical student
                  advisors, we design personalized mentorship pathways that help young people navigate their academic
                  and professional journeys.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• One-on-one mentorship programs</li>
                  <li>• Group workshops and seminars</li>
                  <li>• Career guidance and networking</li>
                </ul>
              </div>

              <div className="bg-white/50 p-8 rounded-lg border border-primary/20 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-primary mb-4">Educational Content</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We create and deliver high-quality educational content spanning psychology, medical sciences, and
                  social innovation. Our workshops empower students to think critically about complex global challenges.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Psychology and neuroscience workshops</li>
                  <li>• Medical sciences education</li>
                  <li>• Social innovation and advocacy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Image Gallery */}
      <AnimatedSection delay={150}>
        <section className="py-16">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Community in Action</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3] ${
                    mounted ? "scale-100 opacity-100" : "scale-95 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <p className="text-white font-medium text-sm">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={200}>
        <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Get Involved with Dr. Interested</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join a global community of young people passionate about making a difference. Whether you&apos;re a
              student, professional, or organization, there&apos;s a place for you in Dr. Interested.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="px-8">
                <a href="https://impact.drinterested.org/" target="_blank" rel="noopener noreferrer">
                  Learn More & Join
                </a>
              </Button>

              <Button size="lg" variant="secondary" asChild className="px-8">
                <a href="/background#work">Back to Background</a>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dr. Interested",
            description: "Global youth mentorship platform for research, advocacy, and education",
            founder: {
              "@type": "Person",
              name: "Adil Mukhi",
              url: "https://adilmukhi.vercel.app",
            },
            foundingDate: "2024",
            numberOfEmployees: "6",
            areaServed: "Global",
            url: "https://drinterested.org/",
            sameAs: ["https://linktr.ee/dr.interested"],
            image: "https://i.postimg.cc/r06G4R5g/Adil-Mukhi-Hosting-The-Minds-Project-Panel.png",
            statistics: {
              executives: "360",
              members: "1700",
              countries: "106",
              events: "20",
              impacted: "160000",
              volunteers: "900",
            },
          }),
        }}
      />

      <Footer />
    </main>
  )
}
