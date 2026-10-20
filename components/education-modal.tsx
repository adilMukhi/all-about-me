"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { Education } from "@/data/education"

interface EducationModalProps {
  education: Education | null
  isOpen: boolean
  onClose: () => void
  // The item's own page, linked from the bottom of the pop up
  pageHref?: string
}

export default function EducationModal({ education, isOpen, onClose, pageHref }: EducationModalProps) {
  if (!education) return null

  const coursesHeading = education.slug === "ib-diploma" ? "Courses In Progress" : "Courses Completed"

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <DialogTitle className="text-2xl font-bold" style={{ fontFamily: "'Bubblegum Sans', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}>
              {education.degree}
            </DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground">
              {education.institution} | {education.period}
            </DialogDescription>
          </div>

          {/* Image */}
          {(education.image || (education.images && education.images.length > 0)) && (
            <div className="flex flex-wrap justify-center gap-4">
              {[education.image, ...(education.images || [])].filter(Boolean).map((img, index) => (
                <Image
                  key={img}
                  src={img}
                  alt={index === 0 ? education.institution : `${education.degree} - Image ${index + 1}`}
                  width={300}
                  height={180}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
          )}

          {/* Description */}
          <div className="space-y-4">
            <p className="text-base leading-relaxed">{education.longDescription || education.description}</p>
          </div>

          {/* Achievements */}
          {education.achievements && education.achievements.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Academic Achievements</h3>
              <ul className="space-y-2">
                {education.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Courses */}
          {education.courses && education.courses.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">{coursesHeading}</h3>
              <div className="flex flex-wrap gap-2">
                {education.courses.map((course, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Stats */}
          {education.stats && education.stats.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Statistics</h3>
              <ul className="space-y-2">
                {education.stats.map((stat, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* External Link */}
          {education.link && education.link !== "#" && (
            <div className="pt-4 border-t">
              <a
                href={education.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
        {pageHref && (
          <div className="flex justify-end border-t pt-4">
            <Button asChild variant="outline">
              <Link href={pageHref}>View full page</Link>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
