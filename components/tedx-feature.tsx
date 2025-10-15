import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function TedxFeature() {
  return (
    <section className="container py-8" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        TEDx Talk
      </h2>
      <Card className="overflow-hidden card-hover-effect">
        <div className="aspect-video relative overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/T95mH5SwkfM?start=5"
            title="Stress, Memory, and Why You Can't Find Your Keys | Adil Mukhi | TEDxMcfarren Boulevard Youth"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
        <CardHeader>
          <CardTitle className="text-2xl" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
            Stress, Memory, and Why You Can't Find Your Keys
          </CardTitle>
          <CardDescription className="text-base">TEDxMcfarren Boulevard Youth</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            In this TEDx talk, I explore the fascinating connection between stress hormones and memory, explaining why
            everyday stress can make us forget simple things like where we put our keys. Drawing from my research on
            neuroplasticity and stress hormones, I break down the science behind memory formation and how chronic stress
            impacts our cognitive abilities.
          </p>
          <Button asChild className="w-full sm:w-auto button-hover-effect">
            <a
              href="https://youtu.be/T95mH5SwkfM?t=5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Watch on YouTube
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
