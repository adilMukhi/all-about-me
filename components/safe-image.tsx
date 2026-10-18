"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

type SafeImageProps = ImageProps & {
  // When set, the image is rendered inside a div with this class, and the whole div is hidden if the image fails to load
  wrapperClassName?: string
}

// If the optimized image fails (for example, the image optimizer rejects it), retries with the original file.
// Renders nothing when that also fails (for example, a file not yet uploaded to public/).
export default function SafeImage({ wrapperClassName, onError, alt, ...props }: SafeImageProps) {
  const [attempt, setAttempt] = useState<"optimized" | "original" | "failed">(props.unoptimized ? "original" : "optimized")

  if (attempt === "failed" || !props.src) return null

  const image = (
    <Image
      key={attempt}
      {...props}
      alt={alt}
      unoptimized={attempt === "original"}
      onError={(e) => {
        setAttempt((current) => (current === "optimized" ? "original" : "failed"))
        onError?.(e)
      }}
    />
  )

  return wrapperClassName ? <div className={wrapperClassName}>{image}</div> : image
}
