"use client"

import type { Certificate } from "@/data/certificates"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface CertificatesModalProps {
  certificate: Certificate | null
  isOpen: boolean
  onClose: () => void
}

export default function CertificatesModal({ certificate, isOpen, onClose }: CertificatesModalProps) {
  if (!certificate) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-balance">{certificate.name}</DialogTitle>
          <p className="text-muted-foreground">
            {certificate.issuer} | {certificate.date}
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Certificate Image */}
          <div className="flex justify-center">
            <Image
              src={certificate.image || "/placeholder.svg"}
              alt={certificate.name}
              width={300}
              height={180}
              className="rounded-lg object-cover border"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{certificate.description}</p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Skills Gained</h3>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* External Link */}
          {certificate.link && certificate.link !== "#" && (
            <div className="pt-4">
              <Button asChild>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Learn More
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
