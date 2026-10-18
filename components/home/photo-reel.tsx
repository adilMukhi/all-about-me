"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Pause, Play } from "lucide-react"
import { reelPhotos, type HomePhoto } from "@/data/home-photos"

function Frame({ photo, hidden }: { photo: HomePhoto; hidden?: boolean }) {
  return (
    <figure className="group relative h-64 w-48 shrink-0 overflow-hidden rounded-2xl bg-slate-800 shadow-lg sm:h-80 sm:w-60">
      <Image
        src={photo.src}
        alt={hidden ? "" : photo.alt}
        fill
        sizes="240px"
        className="object-cover transition duration-500 group-hover:scale-105"
        style={{ objectPosition: photo.focus || "50% 50%" }}
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 text-sm font-medium text-white">
        {photo.caption}
      </figcaption>
    </figure>
  )
}

// Two rows of photos drifting in opposite directions. Hovering, focusing, or pressing pause stops them;
// people who prefer reduced motion get rows they can scroll by hand instead.
export default function PhotoReel() {
  const [paused, setPaused] = useState(false)
  const half = Math.ceil(reelPhotos.length / 2)
  const rows = [reelPhotos.slice(0, half), reelPhotos.slice(half)]

  return (
    <section aria-labelledby="reel-heading" className={`overflow-hidden bg-slate-950 py-14 text-white ${paused ? "marquee-paused" : ""}`}>
      <div className="container mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-sky-300">Camera roll</p>
          <h2
            id="reel-heading"
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}
          >
            Moments along the way
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/30 px-4 text-sm font-semibold transition hover:bg-white/10 motion-reduce:hidden"
          >
            {paused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
            {paused ? "Play photos" : "Pause photos"}
          </button>
          <Link
            href="/media-inquiries/headshots"
            className="inline-flex h-11 items-center rounded-full bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-100"
          >
            Press photos
          </Link>
        </div>
      </div>

      <div className="space-y-5">
        {rows.map((row, r) => (
          <div
            key={r}
            className="marquee-track overflow-x-auto [scrollbar-width:none] motion-safe:overflow-x-hidden [&::-webkit-scrollbar]:hidden"
          >
            <div className={`flex w-max gap-5 px-5 ${r === 0 ? "animate-marquee" : "animate-marquee-reverse"}`}>
              {row.map((photo) => (
                <Frame key={photo.src} photo={photo} />
              ))}
              {/* Copy of the row so the loop is seamless; hidden from screen readers and from reduced motion */}
              {row.map((photo) => (
                <div key={`copy-${photo.src}`} aria-hidden="true" className="contents motion-reduce:hidden">
                  <Frame photo={photo} hidden />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
