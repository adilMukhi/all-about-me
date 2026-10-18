"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import SafeImage from "@/components/safe-image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Maximize2 } from "lucide-react"
import { honorsAwards, type Award } from "@/data/honors-awards"
import HonorsAwardsModal from "@/components/honors-awards-modal"
import { getHonorPath } from "@/lib/seo-paths"

// The award's own slug, shared by its indexed page (/honors/[slug]) and its pop up link (?award=[slug])
const awardSlug = (award: Award) => getHonorPath(award).split("/").pop() as string
const findAward = (slug: string | null) => (slug ? honorsAwards.find((award) => awardSlug(award) === slug) : undefined)
const getPrimaryImage = (award: Award) => (Array.isArray(award.image) ? award.image[0] : award.image)

const headingFont = { fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }
const titleFont = { fontFamily: "'Bubblegum Sans', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }

// Honors & Awards grid used on both /honors and the Background page. Clicking an award opens it in a pop up and
// gives it a shareable ?award= link; each title is also a real link to the award's own page for search engines.
export default function HonorsAwards({ showHeading = true }: { showHeading?: boolean }) {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null)

  // Open the award named in the URL on first load and when going back or forward
  useEffect(() => {
    const syncFromUrl = () => setSelectedAward(findAward(new URLSearchParams(window.location.search).get("award")) ?? null)
    const timer = window.setTimeout(syncFromUrl, 0)
    window.addEventListener("popstate", syncFromUrl)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("popstate", syncFromUrl)
    }
  }, [])

  const setAwardInUrl = (award: Award | null) => {
    const url = new URL(window.location.href)
    if (award) url.searchParams.set("award", awardSlug(award))
    else url.searchParams.delete("award")
    window.history.pushState({}, "", url.toString())
  }

  const openAward = (award: Award) => {
    setSelectedAward(award)
    setAwardInUrl(award)
  }

  const closeModal = () => {
    setSelectedAward(null)
    setAwardInUrl(null)
  }

  // Plain clicks open the pop up; ctrl, cmd, shift or middle clicks still open the award's page as normal
  const onLinkClick = (award: Award) => (event: React.MouseEvent) => {
    event.stopPropagation()
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return
    event.preventDefault()
    openAward(award)
  }

  const renderCard = (award: Award, featured: boolean) => {
    const href = getHonorPath(award)
    const image = award.group === "nomination" ? undefined : getPrimaryImage(award)

    return (
      <Card
        key={href}
        onClick={() => openAward(award)}
        className={`group relative cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
          featured ? "md:col-span-2 xl:col-span-2" : ""
        }`}
      >
        <Button
          size="sm"
          variant="secondary"
          className="absolute right-2 top-2 z-10 h-8 w-8 p-0 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={(event) => {
            event.stopPropagation()
            openAward(award)
          }}
        >
          <Maximize2 className="h-4 w-4" />
          <span className="sr-only">Expand details for {award.title}</span>
        </Button>

        {image && (
          <SafeImage
            src={image}
            alt={award.title}
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"}
            wrapperClassName="relative h-52 overflow-hidden"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <CardHeader>
          <CardDescription>{award.year}</CardDescription>
          <CardTitle className="text-xl" style={titleFont}>
            <Link href={href} onClick={onLinkClick(award)} className="hover:text-primary transition-colors">
              {award.title}
            </Link>
          </CardTitle>
          <p className="text-sm text-muted-foreground">{award.issuer}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-4">{award.description}</p>
          <div className="flex flex-wrap gap-2">
            {award.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
            {award.skills.length > 4 && <Badge variant="outline">+{award.skills.length - 4}</Badge>}
          </div>
          {award.link && award.link.startsWith("http") && (
            <Button asChild variant="ghost" size="sm" className="-ml-3">
              <a href={award.link} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
                Source
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    )
  }

  const awards = honorsAwards.filter((award) => award.group !== "nomination")
  const nominations = honorsAwards.filter((award) => award.group === "nomination")

  return (
    <>
      <section id={showHeading ? "honors-list" : undefined} aria-label={showHeading ? undefined : "Honors and awards"}>
        {showHeading && (
          <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={headingFont}>
            Honors & Awards
          </h2>
        )}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {awards.map((award, index) => renderCard(award, index === 0))}
        </div>

        {nominations.length > 0 && (
          <>
            <h2 className="mb-6 mt-14 text-2xl font-bold tracking-tighter sm:text-3xl" style={headingFont}>
              Nominations
            </h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {nominations.map((award) => renderCard(award, false))}
            </div>
          </>
        )}
      </section>

      <HonorsAwardsModal award={selectedAward} isOpen={Boolean(selectedAward)} onClose={closeModal} />
    </>
  )
}
