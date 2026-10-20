"use client"

import { useEffect } from "react"
import { ALL_LANGUAGES, getSiteLanguage } from "@/lib/translate"

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: { translate?: { TranslateElement: new (options: object, id: string) => unknown } }
  }
}

// Google's translator wraps text in its own elements, which can make React's later DOM updates throw.
// These guards turn those mismatched removals and inserts into no-ops instead of crashing the page.
function guardDomAgainstTranslation() {
  const proto = Node.prototype as Node & { __translateGuarded?: boolean }
  if (proto.__translateGuarded) return
  proto.__translateGuarded = true

  const removeChild = proto.removeChild
  proto.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child
    return removeChild.call(this, child) as T
  }

  const insertBefore = proto.insertBefore
  proto.insertBefore = function <T extends Node>(this: Node, node: T, reference: Node | null): T {
    if (reference && reference.parentNode !== this) return node
    return insertBefore.call(this, node, reference) as T
  }
}

// Loads Google's translator only when a visitor has picked a language other than English
export default function TranslateRuntime() {
  useEffect(() => {
    if (getSiteLanguage() === "en") return

    guardDomAgainstTranslation()
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate) return
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          includedLanguages: ALL_LANGUAGES.map((language) => language.code).join(","),
        },
        "google_translate_element",
      )
    }

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script")
      script.id = "google-translate-script"
      script.src = "https://translate.googleapis.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return <div id="google_translate_element" className="hidden" aria-hidden="true" />
}
