import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CAL_BOOKING_URL } from "@/lib/site"

// Site-wide call to action that points visitors to speaking and consulting services
export default function ServicesCta() {
  return (
    <section aria-labelledby="services-cta-heading" className="border-t border-primary/10 bg-primary/5">
      <div className="container flex flex-col items-center gap-4 py-10 text-center">
        <h2
          id="services-cta-heading"
          className="text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}
        >
          Book Adil Mukhi to speak, MC, or consult
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          TEDx speaker and youth advocate available for keynotes, workshops, panels, and youth engagement consulting
          on mental health, healthcare careers, digital rights, and youth leadership, in person across the Greater
          Toronto Area or online worldwide.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={CAL_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">See speaking and consulting services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
