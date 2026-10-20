"use client"

import CollectionGrid from "@/components/collection-grid"
import VolunteerWorkModal from "@/components/volunteer-work-modal"
import { volunteerWork, type VolunteerWork } from "@/data/volunteer-work"
import { getVolunteerPath } from "@/lib/seo-paths"

const slugOf = (volunteer: VolunteerWork) => getVolunteerPath(volunteer).split("/").pop() as string

// Volunteer work, used on the Background page and on /volunteer
export default function VolunteerWorkSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <CollectionGrid<VolunteerWork>
      heading="Volunteer Work"
      sectionId={showHeading ? "volunteer-list" : undefined}
      showHeading={showHeading}
      groups={[{ items: volunteerWork }]}
      param="volunteer"
      getSlug={slugOf}
      getHref={getVolunteerPath}
      // Links shared before used the list position, e.g. ?volunteer=2
      matchLegacy={(value, _item, index) => value === String(index)}
      toCard={(volunteer) => ({
        title: volunteer.role,
        subtitle: volunteer.organization,
        date: volunteer.period,
        description: volunteer.description,
        image: volunteer.image,
        imageAlt: `${volunteer.organization} logo`,
        fit: "contain",
        tags: volunteer.skills,
        note: volunteer.progression?.length
          ? `Previously: ${volunteer.progression.map((role) => role.role).join(", ")}`
          : undefined,
      })}
      renderModal={({ item, isOpen, onClose, pageHref }) => (
        <VolunteerWorkModal experience={item} isOpen={isOpen} onClose={onClose} pageHref={pageHref} />
      )}
    />
  )
}
