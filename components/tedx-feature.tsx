"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"

const VIDEO_ID = "T95mH5SwkfM"

export default function TedxFeature() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="container py-8" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}
      >
        TEDx Talk
      </h2>
      <Card className="overflow-hidden card-hover-effect">
        <div className="aspect-video relative overflow-hidden bg-black">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?start=5&autoplay=1`}
              title="Stress, Memory, and Why You Can't Find Your Keys | Adil Mukhi | TEDxMcfarren Boulevard Youth"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full"
              aria-label="Play Adil Mukhi's TEDx talk"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                alt="Adil Mukhi delivering his TEDx talk"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/10">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                  <Play className="h-7 w-7 translate-x-0.5" fill="currentColor" />
                </span>
              </span>
            </button>
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-2xl" style={{ fontFamily: "'Bubblegum Sans', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}>
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
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="w-full sm:w-auto button-hover-effect">
              <Link href="/watch/tedx-stress-memory-and-why-you-cant-find-your-keys" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                Watch full page
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto button-hover-effect">
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
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
