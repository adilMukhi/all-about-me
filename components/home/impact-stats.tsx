"use client"

import { useEffect, useRef, useState } from "react"

type Stat = { value: number; decimals?: number; suffix: string; label: string }

const stats: Stat[] = [
  { value: 160000, suffix: "+", label: "people impacted through Dr. Interested" },
  { value: 106, suffix: "", label: "countries reached" },
  { value: 2100, suffix: "+", label: "members and 367 executives" },
  { value: 3.7, decimals: 1, suffix: "M+", label: "people reached by our campaigns" },
  { value: 20, suffix: "+", label: "major events organized" },
  { value: 3, suffix: "×", label: "Ontario Volunteer Service Award recipient" },
]

const format = (n: number, decimals = 0) =>
  n.toLocaleString("en-CA", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })

// Counts up once when scrolled into view. The final numbers are rendered on the server,
// so search engines, screen readers and visitors without JavaScript always see the real values.
function Counter({ stat, run }: { stat: Stat; run: boolean }) {
  const [shown, setShown] = useState(stat.value)

  useEffect(() => {
    if (!run) return
    let frame = 0
    const start = performance.now()
    const duration = 1600
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setShown(stat.value * eased)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [run, stat.value])

  return (
    <span className="tabular-nums">
      {format(stat.decimals ? shown : Math.round(shown), stat.decimals)}
      {stat.suffix}
    </span>
  )
}

export default function ImpactStats() {
  const ref = useRef<HTMLElement>(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !("IntersectionObserver" in window)) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    // Only animate if the band starts below the fold, so nobody sees numbers jump to zero
    if (el.getBoundingClientRect().top < window.innerHeight) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="highlights"
      ref={ref}
      aria-labelledby="impact-heading"
      className="relative overflow-hidden border-y border-sky-900/40 bg-slate-950 py-14 text-white"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="container relative">
        <h2 id="impact-heading" className="mb-8 font-mono text-sm uppercase tracking-[0.3em] text-sky-300">
          <span aria-hidden="true">{"// "}</span>Impact so far
        </h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-sky-400/60 pl-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-fredoka text-4xl font-extrabold text-white sm:text-5xl">
                <Counter stat={stat} run={run} />
              </dd>
              <dd className="mt-2 text-sm leading-snug text-white/75 sm:text-base">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
