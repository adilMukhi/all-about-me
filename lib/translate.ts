// Site translation runs on Google's website translator, switched on by its "googtrans" cookie.
// The page is written in English; picking another language sets the cookie and reloads the page.

export type SiteLanguage = { code: string; label: string; short: string }

export const PRIMARY_LANGUAGES: SiteLanguage[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
]

export const MORE_LANGUAGES: SiteLanguage[] = [
  { code: "es", label: "Español", short: "ES" },
  { code: "pt", label: "Português", short: "PT" },
  { code: "it", label: "Italiano", short: "IT" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "pl", label: "Polski", short: "PL" },
  { code: "uk", label: "Українська", short: "UK" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "tr", label: "Türkçe", short: "TR" },
  { code: "ar", label: "العربية", short: "AR" },
  { code: "fa", label: "فارسی", short: "FA" },
  { code: "ur", label: "اردو", short: "UR" },
  { code: "hi", label: "हिन्दी", short: "HI" },
  { code: "pa", label: "ਪੰਜਾਬੀ", short: "PA" },
  { code: "gu", label: "ગુજરાતી", short: "GU" },
  { code: "bn", label: "বাংলা", short: "BN" },
  { code: "ta", label: "தமிழ்", short: "TA" },
  { code: "zh-CN", label: "简体中文", short: "中文" },
  { code: "zh-TW", label: "繁體中文", short: "繁中" },
  { code: "ja", label: "日本語", short: "JA" },
  { code: "ko", label: "한국어", short: "KO" },
  { code: "vi", label: "Tiếng Việt", short: "VI" },
  { code: "tl", label: "Tagalog", short: "TL" },
  { code: "so", label: "Soomaali", short: "SO" },
]

export const ALL_LANGUAGES = [...PRIMARY_LANGUAGES, ...MORE_LANGUAGES]

const COOKIE = "googtrans"

export function getSiteLanguage(): string {
  if (typeof document === "undefined") return "en"
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/)
  const target = match ? decodeURIComponent(match[1]).split("/").pop() : ""
  return target && ALL_LANGUAGES.some((language) => language.code === target) ? target : "en"
}

export function setSiteLanguage(code: string) {
  const host = window.location.hostname
  // Google may have written the cookie on the bare host or the parent domain, so set or clear every variant
  const domains = ["", host, `.${host}`]
  const parts = host.split(".")
  if (parts.length > 2) domains.push(`.${parts.slice(-2).join(".")}`)

  for (const domain of domains) {
    const scope = `path=/;${domain ? ` domain=${domain};` : ""}`
    document.cookie =
      code === "en"
        ? `${COOKIE}=; ${scope} expires=Thu, 01 Jan 1970 00:00:00 GMT`
        : `${COOKIE}=/en/${code}; ${scope} max-age=31536000; SameSite=Lax`
  }
  window.location.reload()
}
