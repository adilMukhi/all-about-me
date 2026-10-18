import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award } from "lucide-react"

const highlights = [
  { year: "2026", title: "Ontario Medal for Young Volunteers", by: "Province of Ontario" },
  { year: "2026", title: "Top 20 Under 18 in Canada", by: "Children First Canada" },
  { year: "2026", title: "Canadian Choice Award (Dr. Interested)", by: "Non-Profit Organizations, Mississauga" },
  { year: "2025 & 2026", title: "Ontario Volunteer Service Award, three times", by: "Province of Ontario" },
  { year: "2025 & 2026", title: "City of Mississauga Civic Award", by: "City of Mississauga" },
  { year: "2026", title: "Award of Distinction", by: "Peel District School Board" },
  { year: "2025", title: "Top 50 Youth across Canada", by: "Children First Canada" },
  { year: "2025", title: "Global Youth Awards Finalist", by: "Legacy Project" },
]

export default function RecognitionSpotlight() {
  return (
    <section
      aria-labelledby="recognition-heading"
      className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-slate-950 to-slate-950 py-16 text-white"
    >
      <div
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        {/* Overlapping photo collage */}
        <div className="relative mx-auto h-[26rem] w-full max-w-md sm:h-[32rem]">
          <div className="absolute left-0 top-0 h-[78%] w-[62%] -rotate-3 overflow-hidden rounded-2xl border-4 border-white shadow-2xl transition-transform duration-500 hover:z-20 hover:rotate-0 hover:scale-105">
            <Image
              src="/top-20-under-18-2026.jpg"
              alt="Adil Mukhi at the podium of The Future Is Now Awards, named Top 20 Under 18"
              fill
              sizes="(max-width: 1024px) 60vw, 300px"
              className="object-cover"
              style={{ objectPosition: "50% 35%" }}
            />
          </div>
          <div className="absolute bottom-0 right-0 h-[52%] w-[70%] rotate-2 overflow-hidden rounded-2xl border-4 border-white shadow-2xl transition-transform duration-500 hover:z-20 hover:rotate-0 hover:scale-105">
            <Image
              src="/mississauga-civic-award-2026.jpg"
              alt="Adil Mukhi receiving a certificate of recognition from Mississauga Mayor Carolyn Parrish"
              fill
              sizes="(max-width: 1024px) 70vw, 340px"
              className="object-cover"
              style={{ objectPosition: "40% 30%" }}
            />
          </div>
          <div className="absolute right-4 top-6 h-[34%] w-[30%] rotate-6 overflow-hidden rounded-xl border-4 border-white shadow-2xl transition-transform duration-500 hover:z-20 hover:rotate-0 hover:scale-105">
            <Image
              src="/adilmukhitop50u18.jpg"
              alt="Adil Mukhi on the red carpet at The Future Is Now Awards"
              fill
              sizes="160px"
              className="object-cover"
              style={{ objectPosition: "50% 25%" }}
            />
          </div>
        </div>

        <div>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-sky-300">Recognition</p>
          <h2
            id="recognition-heading"
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}
          >
            Honoured for showing up for my community
          </h2>
          <ol className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item.title} className="flex gap-4">
                <Award className="mt-1 h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
                <div>
                  <p className="text-lg font-semibold leading-snug">{item.title}</p>
                  <p className="text-sm text-white/70">
                    {item.by} · {item.year}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href="/honors"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-sky-400 px-6 text-base font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            See every award
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
