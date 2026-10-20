import Image from "next/image"
import Link from "next/link"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getTestimonialPath, getTestimonialSlug, testimonials } from "@/data/testimonials"

const headingFont = { fontFamily: "'Bubblegum Sans', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }

// Recommendations from people Adil has worked with, used on the Background page and on /testimonials.
// Each name links to that testimonial's own page.
export default function Testimonials({ showHeading = true }: { showHeading?: boolean }) {
  const NameHeading = showHeading ? "h3" : "h2"
  return (
    <section aria-labelledby={showHeading ? "testimonials-heading" : undefined} aria-label={showHeading ? undefined : "Testimonials"} className="space-y-8">
      {showHeading && (
        <div className="mb-12 text-center">
          <h2 id="testimonials-heading" className="mb-4 text-3xl font-bold" style={headingFont}>
            What People Say
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Recommendations and testimonials from colleagues, mentors, and collaborators who have worked with me.
          </p>
        </div>
      )}

      <ul className="grid gap-8 md:gap-12">
        {testimonials.map((testimonial) => {
          const slug = getTestimonialSlug(testimonial)
          const paragraphs = testimonial.testimonial.split(/\n\n+/)
          return (
            <li key={slug} id={slug} className="scroll-mt-24">
              <Card className="relative overflow-hidden border shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <figure className="flex flex-col gap-6 lg:flex-row">
                    <figcaption className="flex-shrink-0 text-center lg:w-80 lg:text-left">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`Photo of ${testimonial.name}`}
                        width={80}
                        height={80}
                        className="mx-auto mb-4 h-20 w-20 rounded-full border-4 border-background object-cover shadow-lg lg:mx-0"
                      />
                      <NameHeading className="mb-1 text-lg font-bold">
                        <Link href={getTestimonialPath(testimonial)} className="hover:text-primary transition-colors">
                          {testimonial.name}
                        </Link>
                      </NameHeading>
                      <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{testimonial.role}</p>
                      <dl className="space-y-2 text-sm">
                        <div className="flex flex-col gap-1 lg:flex-row">
                          <dt className="font-medium text-primary">Relationship:</dt>
                          <dd className="text-muted-foreground">{testimonial.relationship}</dd>
                        </div>
                        <div className="flex flex-col gap-1 lg:flex-row">
                          <dt className="font-medium text-primary">Since:</dt>
                          <dd className="text-muted-foreground">{testimonial.timeKnown}</dd>
                        </div>
                        <div className="flex flex-col gap-1 lg:flex-row">
                          <dt className="font-medium text-primary">Context:</dt>
                          <dd className="leading-relaxed text-muted-foreground">{testimonial.connection}</dd>
                        </div>
                      </dl>
                    </figcaption>

                    <blockquote className="flex-1 space-y-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
                      <Quote className="h-8 w-8 text-primary/30" aria-hidden="true" />
                      {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </blockquote>
                  </figure>
                </CardContent>
              </Card>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
