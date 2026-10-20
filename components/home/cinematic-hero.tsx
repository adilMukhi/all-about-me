"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowDown, Building, Instagram, Linkedin, Mail, Pause, Play, PlayCircle } from "lucide-react"
import { heroVideos } from "@/data/home-photos"
import { CONTACT_EMAIL } from "@/lib/site"

const socialLinks = [
  { icon: Linkedin, url: "https://www.linkedin.com/in/adil-mukhi", label: "LinkedIn" },
  { icon: Instagram, url: "https://www.instagram.com/adilm.0", label: "Instagram" },
  { icon: Building, url: "https://www.drinterested.org/", label: "Dr. Interested" },
  { icon: Mail, url: `mailto:${CONTACT_EMAIL}`, label: "Email" },
]

// Lines typed out in the terminal panel; "cmd" lines get a prompt, the rest are output
const terminalLines: { kind: "cmd" | "out" | "ok"; text: string }[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "adil_mukhi  // Mississauga, Canada" },
  { kind: "cmd", text: "cat roles.txt" },
  { kind: "out", text: "TEDx speaker · youth advocate · researcher" },
  { kind: "out", text: "founder & executive director, Dr. Interested" },
  { kind: "cmd", text: "status --now" },
  { kind: "ok", text: "open for speaking & consulting bookings" },
]

// Where each line starts in the overall typing sequence
const lineStarts = terminalLines.map((_, i) => terminalLines.slice(0, i).reduce((sum, l) => sum + l.text.length, 0))
const totalChars = terminalLines.reduce((sum, line) => sum + line.text.length, 0)

function useMediaQuery(query: string) {
  // null until mounted, so the server render never guesses the screen size
  const [matches, setMatches] = useState<boolean | null>(null)
  useEffect(() => {
    const list = window.matchMedia(query)
    const update = () => setMatches(list.matches)
    update()
    list.addEventListener("change", update)
    return () => list.removeEventListener("change", update)
  }, [query])
  return matches
}

function Terminal({ reduced }: { reduced: boolean }) {
  const [typed, setTyped] = useState(0)

  useEffect(() => {
    if (reduced) {
      const timer = window.setTimeout(() => setTyped(totalChars), 0)
      return () => window.clearTimeout(timer)
    }
    // Short pause before typing so it reads like the terminal is booting
    let interval = 0
    const delay = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setTyped((count) => {
          if (count >= totalChars) {
            window.clearInterval(interval)
            return count
          }
          return count + 1
        })
      }, 28)
    }, 600)
    return () => {
      window.clearTimeout(delay)
      window.clearInterval(interval)
    }
  }, [reduced])

  return (
    <div
      aria-hidden="true"
      translate="no"
      className="notranslate w-full rounded-xl border border-white/15 bg-slate-950/90 shadow-2xl shadow-sky-500/10 backdrop-blur-md"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-300/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-white/60">adil@mukhi: ~</span>
      </div>
      <pre className="min-h-[12.5rem] whitespace-pre-wrap px-4 py-3 font-mono text-[13px] leading-6 text-white/90">
        {terminalLines.map((line, i) => {
          const remaining = typed - lineStarts[i]
          if (remaining <= 0) return null
          const done = remaining >= line.text.length
          return (
            <div key={i}>
              {line.kind === "cmd" && <span className="text-sky-300">$ </span>}
              {line.kind === "out" && <span className="text-white/40">› </span>}
              {line.kind === "ok" && <span className="text-emerald-300">● </span>}
              <span className={line.kind === "ok" ? "text-emerald-200" : undefined}>
                {line.text.slice(0, remaining)}
              </span>
              {!done && <span className="terminal-caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-sky-300" />}
            </div>
          )
        })}
        {typed >= totalChars && <span className="terminal-caret inline-block h-4 w-2 translate-y-0.5 bg-sky-300" />}
      </pre>
    </div>
  )
}

type Clip = { src: string; poster: string; label: string }

// Silent looping clip that only downloads once mounted; the pause button controls every clip at once
function LoopVideo({ video, paused, className }: { video: Clip; paused: boolean; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (paused) el.pause()
    else el.play().catch(() => {})
  }, [paused])
  return (
    <video
      ref={ref}
      className={className}
      src={video.src}
      poster={video.poster}
      muted
      loop
      playsInline
      autoPlay={!paused}
      preload="auto"
      aria-label={video.label}
    />
  )
}

// Still frame shown before the screen size is known, and instead of video for people who prefer reduced motion
function Poster({ video, className }: { video: Clip; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={video.poster} alt={video.label} className={className} />
}

export default function CinematicHero() {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)") === true
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const [userPaused, setUserPaused] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const paused = userPaused || reduced

  // Soft spotlight that follows the mouse on desktop
  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || !sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    sectionRef.current.style.setProperty("--spot-x", `${event.clientX - rect.left}px`)
    sectionRef.current.style.setProperty("--spot-y", `${event.clientY - rect.top}px`)
  }

  const media = "h-full w-full object-cover"

  return (
    <section
      ref={sectionRef}
      onPointerMove={onPointerMove}
      aria-label="Introduction"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white"
      style={{ ["--spot-x" as string]: "30%", ["--spot-y" as string]: "40%" }}
    >
      {/* Background footage: vertical studio clip on phones, landscape b-roll on larger screens */}
      <div className="absolute inset-0 -z-20 lg:hidden">
        {isDesktop === false && !reduced ? (
          <LoopVideo video={heroVideos.portrait} paused={paused} className={media} />
        ) : (
          <Poster video={heroVideos.portrait} className={media} />
        )}
      </div>
      <div className="absolute inset-0 -z-20 hidden lg:block">
        {isDesktop && !reduced ? (
          <LoopVideo video={heroVideos.background} paused={paused} className={`${media} scale-105`} />
        ) : (
          <Poster video={heroVideos.background} className={media} />
        )}
      </div>

      {/* Overlays: readable gradient, grid, scan lines, pointer spotlight */}
      <div className="absolute inset-0 -z-10 bg-white/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-white lg:from-30% lg:via-white/75 lg:via-50% lg:to-white/25 dark:bg-slate-950/60 dark:lg:bg-transparent dark:lg:from-slate-950 dark:lg:via-slate-950/70 dark:lg:to-slate-950/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-50 via-transparent to-white/40 dark:from-slate-950 dark:to-slate-950/50" />
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="hero-scanlines pointer-events-none absolute inset-0 -z-10" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
        style={{
          background:
            "radial-gradient(500px circle at var(--spot-x) var(--spot-y), rgba(56,189,248,0.14), transparent 60%)",
        }}
      />

      <div className="container relative grid items-center gap-10 pb-24 pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-700/30 bg-white/70 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-sky-900 dark:border-sky-300/30 dark:bg-sky-400/10 dark:text-sky-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Public speaker · Founder · Youth advocate
          </p>
          <p className="font-fredoka text-2xl font-bold tracking-wide text-sky-700 sm:text-3xl dark:text-sky-200">Hi, I&apos;m</p>
          <h1 className="font-fredoka text-6xl font-extrabold leading-none tracking-tight sm:text-7xl xl:text-8xl">
            <span className="bg-gradient-to-r from-slate-900 via-sky-900 to-sky-700 bg-clip-text text-transparent dark:from-white dark:via-sky-100 dark:to-sky-300">
              Adil Mukhi
            </span>
            <span className="sr-only">: Youth Advocate, Public Speaker, Founder, and Research Leader</span>
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-800 sm:text-xl dark:text-white/90"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            I&apos;m a public speaker, youth advocate &amp; changemaker: from mentoring through Dr. Interested,
            contributing to applying for CIHR research grants, and speaking at TEDx. Explore my work and experiences
            below!
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/services"
              className="inline-flex h-14 items-center justify-center rounded-full bg-sky-700 px-7 text-lg font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300 dark:focus-visible:outline-white"
            >
              Book me to speak
            </Link>
            <a
              href="#tedx"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-slate-900/30 bg-white/70 px-7 text-lg font-semibold text-slate-900 backdrop-blur transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 dark:border-white/50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:focus-visible:outline-white"
            >
              <PlayCircle className="h-5 w-5" aria-hidden="true" />
              Watch my TEDx talk
            </a>
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center rounded-full px-5 text-lg font-semibold text-slate-900 underline decoration-sky-600 decoration-2 underline-offset-8 transition hover:text-sky-800 dark:text-white dark:decoration-sky-300 dark:hover:text-sky-200"
            >
              Contact me
            </a>
          </div>

          <p className="mt-6 max-w-xl text-base text-slate-700 sm:text-lg dark:text-white/85">
            I&apos;m currently available for{" "}
            <Link href="/services" className="font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-950 dark:text-sky-200 dark:hover:text-white">
              consulting engagements
            </Link>{" "}
            and{" "}
            <Link href="/services" className="font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-950 dark:text-sky-200 dark:hover:text-white">
              public speaking bookings
            </Link>
            .
          </p>

          <ul className="mt-6 flex flex-wrap gap-3" aria-label="Find me online">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/20 bg-white/70 text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-600 hover:text-sky-700 dark:border-white/30 dark:bg-white/5 dark:text-white dark:hover:border-sky-300 dark:hover:text-sky-200"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Larger screens: the studio clip in a frame, with the terminal overlapping it */}
        <div className="relative hidden justify-end lg:flex">
          <div className="relative aspect-[9/16] h-[min(68vh,600px)] overflow-hidden rounded-[2rem] border border-slate-900/10 shadow-2xl shadow-sky-500/20 dark:border-white/20">
            {isDesktop && !reduced ? (
              <LoopVideo video={heroVideos.portrait} paused={paused} className={media} />
            ) : (
              <Poster video={heroVideos.portrait} className={media} />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-white backdrop-blur">
              <span className={`h-2 w-2 rounded-full bg-red-500 ${paused ? "" : "animate-pulse"}`} aria-hidden="true" />
              {paused ? "Paused" : "Rolling"}
            </span>
          </div>
          <div className="absolute -left-8 bottom-8 w-[20rem] xl:-left-16">
            <Terminal reduced={reduced} />
          </div>
        </div>
      </div>

      {/* Pause control for the moving footage */}
      {!reduced && (
        <button
          type="button"
          onClick={() => setUserPaused((p) => !p)}
          className="absolute bottom-5 left-5 inline-flex h-11 items-center gap-2 rounded-full border border-slate-900/20 bg-white/80 px-4 text-sm font-semibold text-slate-900 backdrop-blur transition hover:bg-white dark:border-white/40 dark:bg-black/50 dark:text-white dark:hover:bg-black/70"
        >
          {paused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
          {paused ? "Play video" : "Pause video"}
        </button>
      )}

      <a
        href="#highlights"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-[0.3em] text-slate-600 transition hover:text-slate-900 md:flex dark:text-white/70 dark:hover:text-white"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
      </a>
    </section>
  )
}
