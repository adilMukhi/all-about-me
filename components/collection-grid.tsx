"use client"

import { useEffect, useId, useState, type ReactNode } from "react"
import Link from "next/link"
import { ExternalLink, Maximize2 } from "lucide-react"
import SafeImage from "@/components/safe-image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export type CollectionCard = {
  title: string
  subtitle: string
  date: string
  description: string
  image?: string
  imageAlt?: string
  // CSS object-position for the cropped thumbnail, so the important part of a photo stays in frame
  focus?: string
  // Logos and certificates read better shown whole than cropped
  fit?: "cover" | "contain"
  tags?: string[]
  note?: string
  sourceUrl?: string
}

export type CollectionGroup<T> = { title?: string; items: T[]; hideImages?: boolean }

type CollectionGridProps<T> = {
  groups: CollectionGroup<T>[]
  // Query parameter that holds the open item, e.g. ?certificate=<slug>
  param: string
  getSlug: (item: T) => string
  getHref: (item: T) => string
  toCard: (item: T) => CollectionCard
  renderModal: (props: { item: T | null; isOpen: boolean; onClose: () => void; pageHref?: string }) => ReactNode
  // Older shared links used other values for the parameter (e.g. a list position); still open the right item
  matchLegacy?: (value: string, item: T, index: number) => boolean
  heading?: string
  sectionId?: string
  showHeading?: boolean
}

const headingFont = { fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }
const titleFont = { fontFamily: "'Bubblegum Sans', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }

// Card grid shared by every Background section and its own page. Each item opens in a pop up with a shareable
// ?param=<slug> link, and each title is also a real link to the item's own page for search engines.
export default function CollectionGrid<T>({
  groups,
  param,
  getSlug,
  getHref,
  toCard,
  renderModal,
  matchLegacy,
  heading,
  sectionId,
  showHeading = true,
}: CollectionGridProps<T>) {
  const [selected, setSelected] = useState<T | null>(null)
  const headingId = useId()
  const allItems = groups.flatMap((group) => group.items)

  // Open the item named in the URL on first load and when going back or forward
  useEffect(() => {
    const find = (value: string | null) =>
      value
        ? (allItems.find((item) => getSlug(item) === value) ??
          allItems.find((item, index) => matchLegacy?.(value, item, index)) ??
          null)
        : null
    const sync = () => setSelected(find(new URLSearchParams(window.location.search).get(param)))
    const timer = window.setTimeout(sync, 0)
    window.addEventListener("popstate", sync)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("popstate", sync)
    }
    // The item lists are static data, so only the parameter name matters here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param])

  const setInUrl = (item: T | null) => {
    const url = new URL(window.location.href)
    if (item) url.searchParams.set(param, getSlug(item))
    else url.searchParams.delete(param)
    window.history.pushState({}, "", url.toString())
  }

  const open = (item: T) => {
    setSelected(item)
    setInUrl(item)
  }

  const close = () => {
    setSelected(null)
    setInUrl(null)
  }

  // Plain clicks open the pop up; ctrl, cmd, shift or middle clicks still open the item's page as usual
  const onTitleClick = (item: T) => (event: React.MouseEvent) => {
    event.stopPropagation()
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return
    event.preventDefault()
    open(item)
  }

  // With a section heading the levels are h2 > h3 > h4; on a page whose only heading is the h1 they move up one
  const groupLevel = showHeading ? 3 : 2
  const cardLevel = (groupHasTitle: boolean) => Math.min(groupLevel + (groupHasTitle ? 1 : 0), 4) as 2 | 3 | 4

  const renderCard = (item: T, featured: boolean, hideImage: boolean, level: 2 | 3 | 4) => {
    const card = toCard(item)
    const href = getHref(item)
    const titleId = `${headingId}-${getSlug(item)}`
    const contain = card.fit === "contain"

    return (
      <li key={href} className={featured ? "md:col-span-2 xl:col-span-2" : undefined}>
        <Card
          role="article"
          aria-labelledby={titleId}
          onClick={() => open(item)}
          className="group relative flex h-full cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-primary"
        >
          <Button
            type="button"
            size="sm"
            variant="secondary"
            className="absolute right-2 top-2 z-10 h-9 w-9 p-0 bg-background/85 backdrop-blur-sm hover:bg-background"
            onClick={(event) => {
              event.stopPropagation()
              open(item)
            }}
          >
            <Maximize2 className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Show details for {card.title}</span>
          </Button>

          {card.image && !hideImage && (
            <SafeImage
              src={card.image}
              alt={card.imageAlt ?? card.title}
              fill
              sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"}
              wrapperClassName={`relative h-52 overflow-hidden ${contain ? "bg-white" : "bg-muted"}`}
              className={`transition-transform duration-500 group-hover:scale-105 ${contain ? "object-contain p-4" : "object-cover"}`}
              style={{ objectPosition: card.focus || "50% 50%" }}
            />
          )}
          <CardHeader>
            <CardDescription>{card.date}</CardDescription>
            <CardTitle as={`h${level}`} id={titleId} className="text-xl" style={titleFont}>
              <Link href={href} onClick={onTitleClick(item)} className="hover:text-primary transition-colors">
                {card.title}
              </Link>
            </CardTitle>
            <p className="text-sm text-muted-foreground">{card.subtitle}</p>
            {card.note && <p className="text-sm text-muted-foreground">{card.note}</p>}
          </CardHeader>
          <CardContent className="mt-auto space-y-4">
            <p className="text-sm text-muted-foreground line-clamp-4">{card.description}</p>
            {card.tags && card.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2" aria-label="Skills">
                {card.tags.slice(0, 4).map((tag) => (
                  <li key={tag}>
                    <Badge variant="secondary">{tag}</Badge>
                  </li>
                ))}
                {card.tags.length > 4 && (
                  <li>
                    <Badge variant="outline">
                      +{card.tags.length - 4}
                      <span className="sr-only"> more</span>
                    </Badge>
                  </li>
                )}
              </ul>
            )}
            {card.sourceUrl && (
              <Button asChild variant="ghost" size="sm" className="-ml-3">
                <a
                  href={card.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  Source
                  <span className="sr-only"> for {card.title} (opens in a new tab)</span>
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      </li>
    )
  }

  return (
    <>
      <section id={sectionId} aria-labelledby={showHeading && heading ? `${headingId}-heading` : undefined} aria-label={showHeading ? undefined : heading}>
        {showHeading && heading && (
          <h2 id={`${headingId}-heading`} className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={headingFont}>
            {heading}
          </h2>
        )}
        {groups.map((group, groupIndex) => (
          <div key={group.title ?? groupIndex} className={groupIndex > 0 ? "mt-14" : undefined}>
            {group.title &&
              (() => {
                const GroupHeading = `h${groupLevel}` as "h2" | "h3"
                return (
                  <GroupHeading className="mb-6 text-2xl font-bold tracking-tighter sm:text-3xl" style={headingFont}>
                    {group.title}
                  </GroupHeading>
                )
              })()}
            <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {group.items.map((item, index) =>
                renderCard(item, groupIndex === 0 && index === 0, Boolean(group.hideImages), cardLevel(Boolean(group.title))),
              )}
            </ul>
          </div>
        ))}
      </section>

      {renderModal({
        item: selected,
        isOpen: Boolean(selected),
        onClose: close,
        pageHref: selected ? getHref(selected) : undefined,
      })}
    </>
  )
}
