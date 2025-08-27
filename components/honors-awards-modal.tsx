"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import type { Award } from "@/data/honors-awards"

interface HonorsAwardsModalProps {
  award: Award | null
  isOpen: boolean
  onClose: () => void
}

export default function HonorsAwardsModal({ award, isOpen, onClose }: HonorsAwardsModalProps) {
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

  if (!award) {
    return null
  }

  const allImages = [award.image, ...(award.images || [])].filter(Boolean)
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
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold pr-8" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
            {award.title}
          </DialogTitle>
          <p className="text-lg text-muted-foreground">
            {award.issuer} | {award.year}
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
                    alt={`${award.title} - Image ${index + 1}`}
                    width={200}
                    height={120}
                    className="rounded-lg object-cover w-full max-w-[200px]"
                  />
                ))
              ) : (
                <Image
                  src={allImages[currentImageIndex] || "/placeholder.svg"}
                  alt={award.title}
                  width={300}
                  height={180}
                  className="rounded-lg object-cover w-full max-w-[300px]"
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
            <h3 className="text-lg font-semibold mb-2">About This Award</h3>
            <p className="text-muted-foreground leading-relaxed">{award.longDescription || award.description}</p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Skills & Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {award.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Learn More Button */}
          <div className="flex justify-end pt-4">
            <Button asChild>
              <a href={award.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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
