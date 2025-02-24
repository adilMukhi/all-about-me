"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
}

export default function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={sectionRef}
      className={`opacity-0 transform translate-y-4 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      {children}
    </div>
  )
}

