"use client"

import CollectionGrid from "@/components/collection-grid"
import HonorsAwardsModal from "@/components/honors-awards-modal"
import { honorsAwards, type Award } from "@/data/honors-awards"
import { getHonorPath } from "@/lib/seo-paths"

const slugOf = (award: Award) => getHonorPath(award).split("/").pop() as string
const primaryImage = (award: Award) => (Array.isArray(award.image) ? award.image[0] : award.image)

// Honors & Awards, used on the Background page and on /honors. Nominations follow the awards, without images.
export default function HonorsAwards({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <CollectionGrid<Award>
      heading="Honors & Awards"
      sectionId={showHeading ? "honors-list" : undefined}
      showHeading={showHeading}
      groups={[
        { items: honorsAwards.filter((award) => award.group !== "nomination") },
        { title: "Nominations", items: honorsAwards.filter((award) => award.group === "nomination"), hideImages: true },
      ]}
      param="award"
      getSlug={slugOf}
      getHref={getHonorPath}
      toCard={(award) => ({
        title: award.title,
        subtitle: award.issuer,
        date: award.year,
        description: award.description,
        image: primaryImage(award),
        focus: award.focus,
        tags: award.skills,
        sourceUrl: award.link?.startsWith("http") ? award.link : undefined,
      })}
      renderModal={({ item, isOpen, onClose, pageHref }) => (
        <HonorsAwardsModal award={item} isOpen={isOpen} onClose={onClose} pageHref={pageHref} />
      )}
    />
  )
}
