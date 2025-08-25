"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc?: string
}

export default function ImageWithFallback({
  src,
  fallbackSrc = "/placeholder.svg",
  alt,
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Update image source when prop changes
    setImgSrc(src)
  }, [src])

  useEffect(() => {
    // Simple intersection observer for lazy loading
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true)
              observer.disconnect()
            }
          })
        },
        {
          rootMargin: "200px", // Load images when they're 200px from viewport
          threshold: 0.1,
        },
      )

      const currentElement = document.getElementById(`image-${rest.id || Math.random().toString(36).substring(7)}`)
      if (currentElement) {
        observer.observe(currentElement)
      }

      return () => {
        if (currentElement) {
          observer.unobserve(currentElement)
        }
      }
    } else {
      // Fallback for browsers without IntersectionObserver
      setIsVisible(true)
    }
  }, [rest.id])

  return (
    <div className="relative" id={`image-${rest.id || Math.random().toString(36).substring(7)}`}>
      {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />}
      {isVisible && (
        <Image
          {...rest}
          src={imgSrc || "/placeholder.svg"}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setImgSrc(fallbackSrc)
            setIsLoading(false)
          }}
          className={`${rest.className || ""} ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"}`}
        />
      )}
    </div>
  )
}
