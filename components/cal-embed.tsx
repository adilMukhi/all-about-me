"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

/**
 * Cal.com inline embed that only loads the (heavy) Cal script when the widget
 * scrolls into view, or when the visitor clicks to load it. Keeps ~200 KB of
 * third-party JS off the initial page load.
 */
export default function CalEmbed() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (shouldLoad) return
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "400px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [shouldLoad])

  useEffect(() => {
    if (!shouldLoad || loaded) return
    setLoaded(true)

    ;(function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar)
      }
      const d = C.document
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal
          const ar = arguments
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            d.head.appendChild(d.createElement("script")).src = A
            cal.loaded = true
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments)
            }
            const namespace = ar[1]
            api.q = api.q || []
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], ar)
              p(cal, ["initNamespace", namespace])
            } else p(cal, ar)
            return
          }
          p(cal, ar)
        }
    })(window, "https://app.cal.com/embed/embed.js", "init")

    const Cal = (window as any).Cal
    Cal("init", "15min", { origin: "https://app.cal.com" })
    Cal.ns["15min"]("inline", {
      elementOrSelector: "#my-cal-inline-15min",
      config: { layout: "month_view", theme: "light" },
      calLink: "adilm.0/15min",
    })
    Cal.ns["15min"]("ui", {
      theme: "light",
      cssVarsPerTheme: { light: { "cal-brand": "#90b1df" }, dark: { "cal-brand": "#90b1df" } },
      hideEventTypeDetails: true,
      layout: "month_view",
    })
  }, [shouldLoad, loaded])

  return (
    <div ref={containerRef} className="w-full">
      {!shouldLoad && (
        <div className="flex h-[450px] flex-col items-center justify-center gap-4 rounded-lg border border-dashed bg-muted/30 text-center">
          <p className="text-sm text-muted-foreground">Booking calendar</p>
          <Button onClick={() => setShouldLoad(true)}>Load booking calendar</Button>
        </div>
      )}
      <div
        style={{ width: "100%", height: "450px", overflow: "auto", borderRadius: "8px" }}
        id="my-cal-inline-15min"
        hidden={!shouldLoad}
      />
    </div>
  )
}
