import { type NextRequest, NextResponse } from "next/server"
import { getLongUrl } from "@/data/url-mappings"

// Handle GET requests for short URL redirects
export async function GET(request: NextRequest, { params }: { params: { shortCode: string } }) {
  const { shortCode } = params

  // Get the long URL from our mappings
  const longUrl = getLongUrl(shortCode)

  if (longUrl) {
    return NextResponse.redirect(longUrl, { status: 301 })
  } else {
    return new NextResponse("Short URL not found", { status: 404 })
  }
}
