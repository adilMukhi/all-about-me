import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { workExperiences } from "@/data/work-experience"

const featuredTestimonial = {
  name: "Riya Dutta",
  role: "Founder & CEO @ Restoring Rainbows Southlake",
  relationship: "Direct Manager",
  timeKnown: "October 2024",
  testimonial:
    "I have had the pleasure of directly managing Adil as a Research Aid for the international research collaboration at my youth non-profit, Restoring Rainbows Southlake. From the very beginning, Adil has demonstrated an incredible work ethic and a level of motivation that is truly commendable. He consistently approaches his tasks with a proactive mindset, often being two steps ahead.",
  image: "/professional-woman-headshot.png",
}

export default function BackgroundPreview() {
  const latestExperience = workExperiences[0] // Get the most recent experience

  return (
    <section className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <div className="text-center mb-12">
        <h2
          className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          style={{ fontFamily: "Sour Gummy, latin" }}
        >
          Professional Background
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A glimpse into my work experience and what colleagues say about working with me.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        {/* Work Experience Preview */}
        <Card className="card-hover-effect">
          <CardHeader>
            <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>Latest Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <Image
                src={latestExperience.image || "/placeholder.svg"}
                alt={latestExperience.company}
                width={80}
                height={80}
                className="rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{latestExperience.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {latestExperience.company} | {latestExperience.period}
                </p>
                <p className="text-sm mt-2 line-clamp-3">{latestExperience.description}</p>
              </div>
            </div>
            <Link href="/background#work">
              <Button className="w-full button-hover-effect">View All Experience</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Testimonial Preview */}
        <Card className="card-hover-effect">
          <CardHeader>
            <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>What People Say</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="relative flex-shrink-0">
                <img
                  src={featuredTestimonial.image || "/placeholder.svg"}
                  alt={featuredTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                />
                <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1">
                  <Star className="w-3 h-3 text-white fill-current" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{featuredTestimonial.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{featuredTestimonial.role}</p>
                <Quote className="w-4 h-4 text-blue-500/20 mb-1" />
                <blockquote className="text-sm text-muted-foreground line-clamp-4">
                  "{featuredTestimonial.testimonial}"
                </blockquote>
              </div>
            </div>
            <Link href="/background#testimonials">
              <Button className="w-full button-hover-effect">Read All Testimonials</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Links */}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
          Explore My Work
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/portfolios/writing">
            <Button variant="outline" className="button-hover-effect bg-transparent">
              📝 Writing Portfolio
            </Button>
          </Link>
          <Link href="/portfolios/research">
            <Button variant="outline" className="button-hover-effect bg-transparent">
              🔬 Research Portfolio
            </Button>
          </Link>
          <Link href="/portfolios/leadership">
            <Button variant="outline" className="button-hover-effect bg-transparent">
              👥 Leadership Portfolio
            </Button>
          </Link>
          <Link href="/portfolios/community">
            <Button variant="outline" className="button-hover-effect bg-transparent">
              🤝 Community Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
