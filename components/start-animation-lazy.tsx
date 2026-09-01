"use client"

import dynamic from "next/dynamic"

// Load the intro overlay (and its framer-motion dependency) only on the client,
// after the main bundle, so it never blocks first paint or hydration.
const StartAnimation = dynamic(() => import("@/components/start-animation"), { ssr: false })

export default function StartAnimationLazy() {
  return <StartAnimation />
}
