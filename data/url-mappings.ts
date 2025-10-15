// URL shortening mappings
// Add your long URLs and their corresponding short paths here
export const urlMappings: Record<string, string> = {
  // Education shortcuts - now accessible via /s/edu1
  edu1: "https://adilm.drinterested.org/background?education=high-school-diploma#education",
  links: "https://linktr.ee/adilm.0",
  drint: "https://adilm.drinterested.org/background?experience=dr-interested-founder",
  neurogenesis: "https://adilm.drinterested.org/background?experience=neurogenesis-rd",
  iv: "https://adilm.drinterested.org/background?volunteer=0#volunteer",
  camp: "https://adilm.drinterested.org/background?experience=camp-director#work",
  ycrh: "https://adilm.drinterested.org/background?experience=ycrh-general-member#work",
  cfc: "https://adilm.drinterested.org/background?experience=children-first-sdg#work",
  kpe: "https://adilm.drinterested.org/background?experience=kpe-youth-collective#work",
  nyac: "https://adilm.drinterested.org/background?experience=nyac-mdsc-volunteer#work",
  results: "https://adilm.drinterested.org/background?experience=results-canada-advocate#work",

  // Add more mappings as needed
  // 'shortcode': 'https://full-long-url-here'
  // Example: work1: "https://adilm.drinterested.org/background?work=research-assistant#work"
}

// Helper function to get the long URL from a short code
export function getLongUrl(shortCode: string): string | null {
  return urlMappings[shortCode] || null
}

// Helper function to add new URL mapping (for future admin functionality)
export function addUrlMapping(shortCode: string, longUrl: string): void {
  urlMappings[shortCode] = longUrl
}
