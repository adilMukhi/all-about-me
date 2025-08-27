"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import type { VolunteerWork } from "@/data/volunteer-work"

interface VolunteerWorkModalProps {
  experience: VolunteerWork | null
  isOpen: boolean
  onClose: () => void
}

export default function VolunteerWorkModal({ experience, isOpen, onClose }: VolunteerWorkModalProps) {
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
            {experience.role}
          </DialogTitle>
          <p className="text-lg text-muted-foreground">
            {experience.organization} | {experience.period}
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Section */}
          <div className="relative">
            <Image
              src={experience.image || "/placeholder.svg"}
              alt={experience.organization}
              width={300}
              height={180}
              className="rounded-lg object-cover w-full max-w-[300px]"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About This Role</h3>
            <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
          </div>

          {/* Career Progression */}
          {experience.progression && experience.progression.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Roles:</h3>
              <div className="space-y-4">
                {experience.progression.map((prog, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-primary rounded-full -ml-[7px]"></div>
                      <h4 className="font-medium">{prog.role}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{prog.period}</p>
                    {prog.description && <p className="text-sm text-muted-foreground">{prog.description}</p>}
                  </div>
                ))}
              </div>
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
