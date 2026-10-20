"use client"

import CollectionGrid from "@/components/collection-grid"
import WorkExperienceModal from "@/components/work-experience-modal"
import { workExperiences, type WorkExperience } from "@/data/work-experience"
import { getWorkExperiencePath } from "@/lib/seo-paths"

// Work experience, used on the Background page and on /experience
export default function WorkExperienceSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <CollectionGrid<WorkExperience>
      heading="Work Experience"
      sectionId={showHeading ? "work-list" : undefined}
      showHeading={showHeading}
      groups={[{ items: workExperiences }]}
      param="experience"
      getSlug={(experience) => experience.slug}
      getHref={getWorkExperiencePath}
      toCard={(experience) => ({
        title: experience.title,
        subtitle: experience.company,
        date: experience.period,
        description: experience.description,
        image: experience.image,
        imageAlt: `${experience.company} logo`,
        fit: "contain",
        tags: experience.skills,
        note: experience.progression?.length
          ? `Previously: ${experience.progression.map((role) => role.role).join(", ")}`
          : undefined,
      })}
      renderModal={({ item, isOpen, onClose, pageHref }) => (
        <WorkExperienceModal experience={item} isOpen={isOpen} onClose={onClose} pageHref={pageHref} />
      )}
    />
  )
}
