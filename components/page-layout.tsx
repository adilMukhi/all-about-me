"use client"

import type React from "react"
import { useEffect, useState } from "react"
import SocialLinks from "@/components/social-links"
import Footer from "@/components/footer"

interface PageLayoutProps {
  children: React.ReactNode
  includeSocialLinks?: boolean
}

export default function PageLayout({ children, includeSocialLinks = true }: PageLayoutProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Add page transition effect
    setIsLoaded(true)

    // Scroll to top on page load
    window.scrollTo(0, 0)

    // Preload critical images
    const preloadImages = () => {
      const imagesToPreload = document.querySelectorAll('img[data-priority="true"]')
      imagesToPreload.forEach((img: Element) => {
        const imgElement = img as HTMLImageElement
        if (imgElement.dataset.src) {
          const preloadLink = document.createElement("link")
          preloadLink.rel = "preload"
          preloadLink.as = "image"
          preloadLink.href = imgElement.dataset.src
          document.head.appendChild(preloadLink)
        }
      })
    }

    preloadImages()

    // Add intersection observer for lazy loading
    const lazyLoadImages = () => {
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              if (img.dataset.src) {
                img.src = img.dataset.src
                img.classList.add("loaded")
                imageObserver.unobserve(img)
              }
            }
          })
        })

        const lazyImages = document.querySelectorAll("img[data-src]")
        lazyImages.forEach((img) => imageObserver.observe(img))
      } else {
        // Fallback for browsers that don't support IntersectionObserver
        const lazyImages = document.querySelectorAll("img[data-src]")
        lazyImages.forEach((img: Element) => {
          const imgElement = img as HTMLImageElement
          if (imgElement.dataset.src) {
            imgElement.src = imgElement.dataset.src
          }
        })
      }
    }

    lazyLoadImages()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <div className={`page-wrapper ${isLoaded ? "page-transition" : "opacity-0"}`}>
      {children}
      {includeSocialLinks && <SocialLinks />}
      <Footer />
    </div>
  )
}

