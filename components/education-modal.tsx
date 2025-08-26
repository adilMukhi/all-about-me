"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { Education } from "@/data/education"

interface EducationModalProps {
  education: Education | null
  isOpen: boolean
  onClose: () => void
}

export default function EducationModal({ education, isOpen, onClose }: EducationModalProps) {
  if (!education) return null

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
              {education.degree}
            </h2>
            <p className="text-lg text-muted-foreground">
              {education.institution} | {education.period}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={education.image || "/placeholder.svg"}
              alt={education.institution}
              width={300}
              height={180}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-base leading-relaxed">{education.longDescription || education.description}</p>
          </div>

          {/* Achievements */}
          {education.achievements && education.achievements.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Key Achievements</h3>
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
              <h3 className="text-lg font-semibold">Courses Completed</h3>
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
      </DialogContent>
    </Dialog>
  )
}
