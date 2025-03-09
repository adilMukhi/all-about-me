"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if the banner has been dismissed before
    const bannerDismissed = localStorage.getItem("clubBannerDismissed")
    if (!bannerDismissed) {
      setIsVisible(true)
    }
  }, [])

  const dismissBanner = () => {
    setIsVisible(false)
    // Save the dismissal in localStorage
    localStorage.setItem("clubBannerDismissed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-4 relative">
      <div className="container flex items-center justify-between">
        <div className="flex-1 text-center">
          <p className="font-medium">
            Check out my new club for aspiring medical professionals!{" "}
            <Link
              href="https://linktr.ee/dr.interested"
              className="underline font-bold hover:text-blue-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check it out
            </Link>
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={dismissBanner}
          className="text-white hover:bg-blue-600/20 absolute right-4"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Dismiss</span>
        </Button>
      </div>
    </div>
  )
}

