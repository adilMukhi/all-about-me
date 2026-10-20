"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, X } from "lucide-react"
import { chatQuestions, type ChatLink, type ChatQuestion } from "@/data/chat-questions"
import { CONTACT_EMAIL } from "@/lib/site"

const IDLE_MS = 7000
const NUDGE_KEY = "site-chat-nudged"

type Message = { id: number; from: "bot" | "user"; text: string; links?: ChatLink[] }

const greeting: Message = {
  id: 0,
  from: "bot",
  text: "Hi! I'm Adil's site assistant. Pick a question below and I'll point you in the right direction.",
}

function readNudged() {
  try {
    return window.sessionStorage.getItem(NUDGE_KEY) === "1"
  } catch {
    return false
  }
}

function saveNudged() {
  try {
    window.sessionStorage.setItem(NUDGE_KEY, "1")
  } catch {
    // Storage can be blocked (private mode); the nudge then simply shows once per page load
  }
}

function Avatar({ size }: { size: number }) {
  return (
    <Image
      src="/pixtin.jpg"
      alt=""
      width={size}
      height={size}
      className="h-full w-full rounded-full object-cover"
    />
  )
}

function LinkChip({ link, onNavigate }: { link: ChatLink; onNavigate: () => void }) {
  const className =
    "inline-flex items-center gap-1 rounded-full border border-primary/40 px-3 py-1.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
  if (link.external) {
    const newTab = link.href.startsWith("http")
    return (
      <a href={link.href} className={className} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined}>
        {link.label}
        {newTab && <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
      </a>
    )
  }
  return (
    <Link href={link.href} className={className} onClick={onNavigate}>
      {link.label}
    </Link>
  )
}

// Floating chat in the corner of every page. For now it answers a fixed set of pre-approved questions;
// after a visitor has been idle for a few seconds it waves hello once per visit.
export default function SiteChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([greeting])
  const [asked, setAsked] = useState<string[]>([])
  const [typing, setTyping] = useState(false)
  const [nudge, setNudge] = useState<"" | "hello" | "help">("")
  const [shaking, setShaking] = useState(false)

  const launcherRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const nextId = useRef(1)
  const openRef = useRef(false)
  useEffect(() => {
    openRef.current = open
  }, [open])

  // Idle nudge: shake, say hello, then offer help. Any activity restarts the countdown; it fires once per visit.
  useEffect(() => {
    if (readNudged()) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let idleTimer = 0
    const timers: number[] = []

    const fire = () => {
      if (openRef.current || readNudged()) return
      saveNudged()
      stop()
      if (!reduced) {
        setShaking(true)
        timers.push(window.setTimeout(() => setShaking(false), 900))
      }
      setNudge("hello")
      timers.push(window.setTimeout(() => setNudge("help"), 1800))
      timers.push(window.setTimeout(() => setNudge(""), 14000))
    }

    const restart = () => {
      window.clearTimeout(idleTimer)
      idleTimer = window.setTimeout(fire, IDLE_MS)
    }

    const events = ["pointermove", "pointerdown", "keydown", "scroll", "touchstart", "wheel"] as const
    const stop = () => {
      window.clearTimeout(idleTimer)
      events.forEach((name) => window.removeEventListener(name, restart))
    }

    events.forEach((name) => window.addEventListener(name, restart, { passive: true }))
    restart()
    return () => {
      stop()
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    launcherRef.current?.focus()
  }, [])

  // Escape closes the chat; opening moves focus into it
  useEffect(() => {
    if (!open) return
    panelRef.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, close])

  // Keep the newest message in view
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, typing])

  const openChat = () => {
    setNudge("")
    setOpen(true)
  }

  const ask = (item: ChatQuestion) => {
    setMessages((current) => [...current, { id: nextId.current++, from: "user", text: item.question }])
    setAsked((current) => [...current, item.id])
    setTyping(true)
    window.setTimeout(() => {
      setTyping(false)
      setMessages((current) => [...current, { id: nextId.current++, from: "bot", text: item.answer, links: item.links }])
    }, 650)
  }

  const remaining = chatQuestions.filter((item) => !asked.includes(item.id))

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Chat with Adil's site assistant"
          className="flex max-h-[min(36rem,calc(100svh-7rem))] w-[min(23rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border bg-background text-foreground shadow-2xl"
        >
          <div className="flex items-center gap-3 border-b bg-primary px-4 py-3 text-primary-foreground">
            <span className="relative h-10 w-10 shrink-0">
              <Avatar size={40} />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-primary bg-emerald-400" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold leading-tight">
                <span translate="no" className="notranslate">Adil</span>&apos;s assistant
              </p>
              <p className="text-xs opacity-90">Usually points you to the right page instantly</p>
            </div>
            <button
              type="button"
              onClick={close}
              data-autofocus
              className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/15"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((message) =>
              message.from === "bot" ? (
                <div key={message.id} className="flex items-end gap-2">
                  <span className="h-7 w-7 shrink-0">
                    <Avatar size={28} />
                  </span>
                  <div className="max-w-[85%] space-y-2 rounded-2xl rounded-bl-sm bg-muted px-3.5 py-2.5 text-[15px] leading-relaxed">
                    <p>{message.text}</p>
                    {message.links && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {message.links.map((link) => (
                          <LinkChip key={link.href} link={link} onNavigate={() => setOpen(false)} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div key={message.id} className="flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2.5 text-[15px] leading-relaxed text-primary-foreground">
                    {message.text}
                  </p>
                </div>
              ),
            )}
            {typing && (
              <div className="flex items-end gap-2" aria-label="Typing">
                <span className="h-7 w-7 shrink-0">
                  <Avatar size={28} />
                </span>
                <span className="flex gap-1 rounded-2xl rounded-bl-sm bg-muted px-3.5 py-3">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground motion-reduce:animate-none"
                      style={{ animationDelay: `${dot * 120}ms` }}
                    />
                  ))}
                </span>
              </div>
            )}
          </div>

          <div className="border-t px-4 py-3">
            {remaining.length > 0 ? (
              <>
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {asked.length ? "Ask something else" : "Suggested questions"}
                </p>
                <div className="flex max-h-40 flex-wrap gap-2 overflow-y-auto">
                  {remaining.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => ask(item)}
                      disabled={typing}
                      className="rounded-full border bg-card px-3 py-2 text-left text-sm font-medium transition hover:border-primary hover:text-primary disabled:opacity-60"
                    >
                      {item.question}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">
                Need something else? Email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-primary underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            )}
          </div>
        </div>
      )}

      {!open && nudge && (
        <div className="relative max-w-[16rem] rounded-2xl rounded-br-sm border bg-background px-4 py-3 pr-9 text-[15px] font-medium text-foreground shadow-xl" role="status">
          <button
            type="button"
            onClick={() => setNudge("")}
            className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
            aria-label="Dismiss message"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
          <button type="button" onClick={openChat} className="text-left">
            {nudge === "hello" ? "Hello! 👋" : "How can I help? Tap to see common questions."}
          </button>
        </div>
      )}

      <button
        ref={launcherRef}
        type="button"
        onClick={() => (open ? close() : openChat())}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat with Adil's site assistant"}
        className={`relative h-14 w-14 rounded-full border-2 border-background bg-background shadow-xl ring-2 ring-primary transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
          shaking ? "animate-chat-shake" : ""
        }`}
      >
        <Avatar size={56} />
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-400" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}
