"use client"

import { useEffect, useState } from "react"
import { Check, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ALL_LANGUAGES, MORE_LANGUAGES, PRIMARY_LANGUAGES, getSiteLanguage, setSiteLanguage } from "@/lib/translate"

// Language picker beside the theme button: English by default, French one tap away, then the rest
export default function LanguageSwitcher() {
  const [current, setCurrent] = useState("en")
  useEffect(() => {
    const timer = window.setTimeout(() => setCurrent(getSiteLanguage()), 0)
    return () => window.clearTimeout(timer)
  }, [])

  const active = ALL_LANGUAGES.find((language) => language.code === current) ?? PRIMARY_LANGUAGES[0]

  const choose = (code: string) => {
    if (code !== current) setSiteLanguage(code)
  }

  const item = (language: (typeof ALL_LANGUAGES)[number]) => (
    <DropdownMenuItem
      key={language.code}
      onSelect={() => choose(language.code)}
      lang={language.code}
      className="flex items-center justify-between gap-6 py-2 text-base"
    >
      <span>{language.label}</span>
      {language.code === current && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
    </DropdownMenuItem>
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="notranslate h-10 shrink-0 gap-1.5 px-3 font-semibold"
          translate="no"
          aria-label={`Language: ${active.label}. Change language`}
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          {active.short}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="notranslate w-56" translate="no">
        {PRIMARY_LANGUAGES.map(item)}
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          More languages
        </DropdownMenuLabel>
        <div className="max-h-64 overflow-y-auto">{MORE_LANGUAGES.map(item)}</div>
        <DropdownMenuSeparator />
        <p className="px-2 py-1.5 text-xs text-muted-foreground">Translated automatically by Google.</p>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
