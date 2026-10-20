// URL-safe slug from any text, e.g. "Top 20 Under 18" -> "top-20-under-18"
export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['".]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}
