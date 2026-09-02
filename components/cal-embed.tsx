import { Calendar, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CAL_BOOKING_URL } from "@/lib/site"

/**
 * Booking call-to-action. Sends visitors to the Cal.com booking page rather than
 * embedding the (heavy) Cal widget — faster, and it always works.
 */
export default function CalEmbed() {
  return (
    <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-4 rounded-lg border bg-muted/30 p-8 text-center">
      <Calendar className="h-10 w-10 text-primary" />
      <div>
        <p className="text-lg font-semibold">Book a call</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Pick a time that works for you — I&apos;ll confirm the details from there.
        </p>
      </div>
      <Button asChild size="lg">
        <a href={CAL_BOOKING_URL} target="_blank" rel="noopener noreferrer">
          Open my booking calendar
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  )
}
