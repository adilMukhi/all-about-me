"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, X } from "lucide-react"
import type { WorkExperience } from "@/data/work-experience"

interface WorkExperienceModalProps {
  experience: WorkExperience | null
  isOpen: boolean
  onClose: () => void
}

export default function WorkExperienceModal({ experience, isOpen, onClose }: WorkExperienceModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  if (!experience) {
    return null
  }

  const allImages = [experience.image, ...(experience.images || [])].filter(Boolean)
  const hasMultipleImages = allImages.length > 1

  const handleClose = () => {
    onClose()
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-4 z-50 h-6 w-6 p-0 hover:bg-secondary"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold pr-8" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
            {experience.title}
          </DialogTitle>
          <p className="text-lg text-muted-foreground">
            {experience.company} | {experience.period}
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Section */}
          <div className="relative">
            <div className={`grid gap-4 ${hasMultipleImages && allImages.length > 2 ? "grid-cols-2" : "grid-cols-1"}`}>
              {hasMultipleImages && allImages.length > 2 ? (
                allImages.map((img, index) => (
                  <Image
                    key={index}
                    src={img || "/placeholder.svg"}
                    alt={`${experience.company} - Image ${index + 1}`}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                ))
              ) : (
                <Image
                  src={allImages[currentImageIndex] || "/placeholder.svg"}
                  alt={experience.company}
                  width={600}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
              )}
            </div>

            {/* Image navigation for single image view with multiple images */}
            {hasMultipleImages && allImages.length <= 2 && (
              <div className="flex justify-center mt-4 space-x-2">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${currentImageIndex === index ? "bg-primary" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About This Role</h3>
            <p className="text-muted-foreground leading-relaxed">
              {experience.longDescription || experience.description}
            </p>
          </div>

          {/* Stats/Accomplishments */}
          {experience.stats && experience.stats.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Accomplishments</h3>
              <ul className="space-y-2">
                {experience.stats.map((stat, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Skills Developed</h3>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Learn More Button */}
          <div className="flex justify-end pt-4">
            <Button asChild>
              <a href={experience.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Learn More
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
