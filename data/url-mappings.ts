// URL shortening mappings
// Add your long URLs and their corresponding short paths here
export const urlMappings: Record<string, string> = {
  // Education shortcuts - now accessible via /s/edu1
  edu1: "https://adilmukhi.vercel.app/background?education=high-school-diploma#education",
  links: "https://linktr.ee/adilm.0",

  // Add more mappings as needed
  // 'shortcode': 'https://full-long-url-here'
  // Example: work1: "https://adilmukhi.vercel.app/background?work=research-assistant#work"
}

// Helper function to get the long URL from a short code
export function getLongUrl(shortCode: string): string | null {
  return urlMappings[shortCode] || null
}

// Helper function to add new URL mapping (for future admin functionality)
export function addUrlMapping(shortCode: string, longUrl: string): void {
  urlMappings[shortCode] = longUrl
}
