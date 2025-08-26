import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"

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
  const mediaItems = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      publication: "Global News",
      year: "2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      link: "https://globalnews.ca",
    },
    {
      title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
      publication: "The Aquinian",
      year: "2020",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      link: "https://theaquinian.net",
    },
    {
      title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
      publication: "CHQC",
      year: "2020",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
      link: "https://chqc.ca",
    },
    {
      title: "Temporibus autem quibusdam et aut officiis debitis aut rerum",
      publication: "Global News",
      year: "2020",
      description:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      link: "https://globalnews.ca",
    },
    {
      title: "Nam libero tempore cum soluta nobis est eligendi optio",
      publication: "Future of Good",
      year: "2020",
      description:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.",
      link: "https://futureofgood.co",
    },
    {
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor",
      publication: "Mindyourmind",
      year: "2021",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.",
      link: "https://mindyourmind.ca",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary leading-tight">{item.title}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground underline hover:text-primary transition-colors"
              >
                {item.publication}, {item.year}
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: "Media - Adil Mukhi",
  description: "Media coverage and press articles featuring Adil Mukhi's work and initiatives.",
}

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
      <Footer />
    </main>
  )
}
