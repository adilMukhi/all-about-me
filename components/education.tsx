"use client"

import CollectionGrid from "@/components/collection-grid"
import EducationModal from "@/components/education-modal"
import { educationData, type Education } from "@/data/education"
import { getEducationPath } from "@/lib/seo-paths"

// Education and academic achievements, used on the Background page and on /education
export default function EducationSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <CollectionGrid<Education>
      heading="Education"
      sectionId={showHeading ? "education-list" : undefined}
      showHeading={showHeading}
      groups={[
        { items: educationData.slice(0, 3) },
        { title: "Additional Certifications & Training", items: educationData.slice(3) },
      ]}
      param="education"
      getSlug={(education) => education.slug}
      getHref={getEducationPath}
      toCard={(education) => ({
        title: education.degree,
        subtitle: education.institution,
        date: education.period,
        description: education.description,
        image: education.image,
        imageAlt: `${education.institution} logo`,
        fit: "contain",
        tags: education.courses,
      })}
      renderModal={({ item, isOpen, onClose, pageHref }) => (
        <EducationModal education={item} isOpen={isOpen} onClose={onClose} pageHref={pageHref} />
      )}
    />
  )
}
