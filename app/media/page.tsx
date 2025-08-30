import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"
import SocialLinks from "@/components/social-links"
import { mediaItems } from "@/data/media-items"
import { ExternalLink, Calendar, Quote } from "lucide-react"
import { mediaMetadata } from "@/app/page-metadata"

const MediaHero = () => (
  <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
    <div className="container">
      <h1
        className="text-4xl font-bold tracking-tighter text-center mb-8 sm:text-5xl md:text-6xl text-primary"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Media
      </h1>
    </div>
  </section>
)

const MediaGrid = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "article":
        return "text-blue-600"
      case "interview":
        return "text-green-600"
      case "feature":
        return "text-purple-600"
      case "spotlight":
        return "text-orange-600"
      default:
        return "text-primary"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "article":
        return "Article"
      case "interview":
        return "Interview"
      case "feature":
        return "Feature"
      case "spotlight":
        return "Spotlight"
      default:
        return "Media"
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-medium px-2 py-1 rounded-full bg-muted ${getTypeColor(item.type)}`}>
                  {getTypeLabel(item.type)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-primary leading-tight">{item.title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>
                  {item.publication}, {item.date}
                </span>
              </div>
              <div className="bg-muted/50 rounded-md p-3 border-l-2 border-primary/20">
                <Quote className="h-4 w-4 text-primary mb-2" />
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{item.quote}"</p>
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Read More
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = mediaMetadata

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-background page-transition">
      <Header />
      <h1 className="sr-only">Media - Adil Mukhi</h1>
      <AnimatedSection>
        <MediaHero />
      </AnimatedSection>
      <Separator />
      <AnimatedSection delay={100}>
        <MediaGrid />
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <SocialLinks />
      </AnimatedSection>
      <Footer />
    </main>
  )
}
