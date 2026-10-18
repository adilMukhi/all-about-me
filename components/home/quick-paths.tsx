import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Big, plainly labelled picture links so every visitor can find what they came for in one tap
const paths = [
  {
    title: "Book Adil to speak",
    text: "Keynotes, workshops, panels, and MC work.",
    href: "/services",
    image: "/pictures/adil-mukhi-tedx-speaking-1.png",
    alt: "Adil Mukhi speaking at TEDx",
    focus: "50% 20%",
  },
  {
    title: "Read Adil's story",
    text: "Work, volunteering, education, and testimonials.",
    href: "/background",
    image: "/pictures/adil-mukhi-portrait-closeup.jpg",
    alt: "Close up portrait of Adil Mukhi",
    focus: "50% 30%",
  },
  {
    title: "See awards and honours",
    text: "Ontario Medal for Young Volunteers, Top 20 Under 18, and more.",
    href: "/honors",
    image: "/top-20-under-18-2026.jpg",
    alt: "Adil Mukhi at The Future Is Now Awards podium",
    focus: "50% 30%",
  },
  {
    title: "Explore Dr. Interested",
    text: "The global youth pre-med organization Adil founded.",
    href: "https://www.drinterested.org/",
    image: "/pictures/adil-mukhi-dr-interested-studio-light.jpg",
    alt: "Adil Mukhi in a Dr. Interested hoodie",
    focus: "15% 40%",
    external: true,
  },
  {
    title: "Watch and read the press",
    text: "Interviews, articles, and media coverage.",
    href: "/media",
    image: "/pictures/AIforGoodSummit2.png",
    alt: "Adil Mukhi on screen at the AI for Good Global Summit",
    focus: "50% 30%",
  },
  {
    title: "Get in touch",
    text: "Email, phone, or book a call on the calendar.",
    href: "#contact",
    image: "/pictures/adil-mukhi-canadian-flag-suit.jpg",
    alt: "Adil Mukhi in a suit beside the Canadian flag",
    focus: "50% 20%",
  },
]

export default function QuickPaths() {
  return (
    <section aria-labelledby="quick-paths-heading" className="container py-14">
      <div className="mb-8 max-w-2xl">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">Start here</p>
        <h2
          id="quick-paths-heading"
          className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}
        >
          Where would you like to go?
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">Pick a picture to jump straight there.</p>
      </div>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {paths.map((path) => {
          const card = (
            <>
              <Image
                src={path.image}
                alt={path.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-focus-visible:scale-110"
                style={{ objectPosition: path.focus }}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                <span>
                  <span className="block text-2xl font-bold leading-tight">{path.title}</span>
                  <span className="mt-1 block text-base text-white/85">{path.text}</span>
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-slate-950 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-6 w-6" aria-hidden="true" />
                </span>
              </span>
            </>
          )
          const className =
            "group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900 shadow-md outline-none ring-offset-2 transition-shadow hover:shadow-xl focus-visible:ring-4 focus-visible:ring-primary"
          return (
            <li key={path.title}>
              {path.external ? (
                <a href={path.href} target="_blank" rel="noopener noreferrer" className={className}>
                  {card}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <Link href={path.href} className={className}>
                  {card}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
