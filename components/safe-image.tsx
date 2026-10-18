"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

type SafeImageProps = ImageProps & {
  // When set, the image is rendered inside a div with this class, and the whole div is hidden if the image fails to load
  wrapperClassName?: string
}

// Renders nothing when the image fails to load (for example, a file not yet uploaded to public/)
export default function SafeImage({ wrapperClassName, onError, alt, ...props }: SafeImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed || !props.src) return null

  const image = (
    <Image
      {...props}
      alt={alt}
      onError={(e) => {
        setFailed(true)
        onError?.(e)
      }}
    />
  )

  return wrapperClassName ? <div className={wrapperClassName}>{image}</div> : image
}
