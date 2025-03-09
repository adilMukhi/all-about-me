"use client"

import { useEffect } from "react"
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { ArtCarousel } from "@/components/art-carousel"

interface ArtModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  images: string[]
}

export function ArtModal({ isOpen, onClose, title, images }: ArtModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] p-0 overflow-hidden">
        <div className="relative h-[80vh]">
          <DialogTitle className="absolute top-0 left-0 right-0 z-49 bg-black/50 text-white p-4 m-0">
            {title}
          </DialogTitle>
          <DialogClose className="absolute top-2 right-2 z-50 rounded-full bg-black/70 p-2 text-white hover:bg-black/90 shadow-md">
            <X className="h-5 w-5" />
          </DialogClose>
          <ArtCarousel images={images} title={title} autoAdvance={false} showControls={true} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

