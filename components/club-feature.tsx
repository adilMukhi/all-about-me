import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Users, BookOpen, Globe, Quote } from "lucide-react"

export default function ClubFeature() {
  return (
    <section className="container py-8" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}
      >
        Executive Director of Dr. Interested
      </h2>
      <Card className="overflow-hidden glass-card">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative min-h-[320px] md:min-h-[420px] bg-slate-900">
            <Image
              src="/pictures/AdilMukhiDrInterested (1).jpg"
              alt="Adil Mukhi, founder of Dr. Interested, holding a camera in a Dr. Interested hoodie"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "50% 40%" }}
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 p-2 pr-4 shadow-lg">
              <Image src="/drinterested.png" alt="Dr. Interested logo" width={48} height={48} className="rounded-xl object-cover" />
              <span className="text-sm font-semibold text-slate-900">Founded by Adil Mukhi</span>
            </div>
          </div>
          <div className="md:w-1/2 p-6 md:p-8">
            <CardHeader className="p-0 mb-4">
              <CardTitle style={{ fontFamily: "'Bubblegum Sans', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }} className="text-2xl md:text-3xl">
                Inspiring Future Medical Professionals
              </CardTitle>
              <CardDescription className="text-base md:text-lg">
                A student-led initiative connecting aspiring healthcare professionals
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="mb-4">
                Dr. Interested is a youth-led global pre-med organization I founded to help students explore healthcare,
                research, and advocacy. We empower youth to discover their unique "spark" in medicine through
                interactive programs, mentorship, and leadership development — with 20+ major events run so far.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>160,000+ people impacted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  <span>2,100+ members & 367 executives</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>3.7+ million marketing reach</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>106 countries globally</span>
                </div>
              </div>
              <Button asChild size="lg" className="button-hover-effect">
                <a href="https://www.drinterested.org/" target="_blank" rel="noopener noreferrer">
                  Interested?
                </a>
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>

      <figure className="mt-8 overflow-hidden rounded-2xl shadow-lg">
        <div className="relative aspect-[16/7] w-full">
          <Image
            src="/pictures/MedExplore (1).png"
            alt="Adil Mukhi hosting the Dr. Interested MedExplore 2026 conference"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 40%" }}
          />
        </div>
        <figcaption className="bg-slate-900 px-5 py-3 text-sm text-white/85">
          Hosting MedExplore 2026, a Dr. Interested conference for students exploring careers in medicine
        </figcaption>
      </figure>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-6 text-center" style={{ fontFamily: "'Bubblegum Sans', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}>
          Community Impact
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-base leading-relaxed mb-4 italic">
                "Being part of Dr. Interested—especially through the Resilient Minds event—opened my eyes to how mental
                health and medicine connect. I used to think medicine was just textbooks and biology, but now I see the
                human side of it too. This community helped me explore my interest in healthcare in ways school never
                did."
              </p>
              <p className="text-sm text-muted-foreground">— Under 18, (Racialized Group(s), Indigenous), Canada</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-base leading-relaxed mb-4 italic">
                "The Discord community has been such a supportive space. I've met people who genuinely understand my
                journey and are always willing to share advice or encouragement."
              </p>
              <p className="text-sm text-muted-foreground">— Under 18, Low Income, USA</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
