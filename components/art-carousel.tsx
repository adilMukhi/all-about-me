"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ArtCarouselProps {
  images: string[]
  title: string
  autoAdvance?: boolean
  interval?: number
  showControls?: boolean
}

export function ArtCarousel({
  images,
  title,
  autoAdvance = true,
  interval = 3000,
  showControls = false,
}: ArtCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Function to go to next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  // Function to go to previous slide
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Set up auto-advance timer
  useEffect(() => {
    if (autoAdvance && images.length > 1) {
      timerRef.current = setInterval(goToNext, interval)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [autoAdvance, interval, images.length])

  // Reset timer when manually changing slides
  useEffect(() => {
    if (autoAdvance && timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = setInterval(goToNext, interval)
    }
  }, [currentIndex, autoAdvance, interval])

  if (images.length === 0) {
    return null
  }

  return (
    <div className="relative w-full h-full">
      {/* Images */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-500",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <Image
              src={image || "/placeholder.svg?height=200&width=400"}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows (only shown when showControls is true) */}
      {showControls && images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition-colors"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition-colors"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      {/* Indicator dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80",
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

