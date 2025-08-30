import { type NextRequest, NextResponse } from "next/server"
import { urlMappings, getLongUrl } from "@/data/url-mappings"

// GET endpoint to retrieve all URL mappings or a specific one
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const shortCode = searchParams.get("code")

  if (shortCode) {
    const longUrl = getLongUrl(shortCode)
    if (longUrl) {
      return NextResponse.json({ shortCode, longUrl })
    } else {
      return NextResponse.json({ error: "Short code not found" }, { status: 404 })
    }
  } else {
    return NextResponse.json({ mappings: urlMappings })
  }
}

// POST endpoint to add new URL mappings (for future admin functionality)
export async function POST(request: NextRequest) {
  try {
    const { shortCode, longUrl } = await request.json()

    if (!shortCode || !longUrl) {
      return NextResponse.json({ error: "Both shortCode and longUrl are required" }, { status: 400 })
    }

    if (urlMappings[shortCode]) {
      return NextResponse.json({ error: "Short code already exists" }, { status: 409 })
    }

    urlMappings[shortCode] = longUrl

    return NextResponse.json({
      message: "URL mapping created successfully",
      shortCode,
      longUrl,
      shortUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"}/${shortCode}`,
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}
