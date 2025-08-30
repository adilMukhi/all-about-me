// URL shortening mappings
// Add your long URLs and their corresponding short paths here
export const urlMappings: Record<string, string> = {
  // Education shortcuts
  edu1: "https://adilmukhi.vercel.app/background?education=high-school-diploma#education",

  // Add more mappings as needed
  // 'shortcode': 'https://full-long-url-here'
}

// Helper function to get the long URL from a short code
export function getLongUrl(shortCode: string): string | null {
  return urlMappings[shortCode] || null
}

// Helper function to add new URL mapping (for future admin functionality)
export function addUrlMapping(shortCode: string, longUrl: string): void {
  urlMappings[shortCode] = longUrl
}
