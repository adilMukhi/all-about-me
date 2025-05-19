import { NextResponse } from "next/server"

export async function GET() {
  return new NextResponse("dh=49775a0d741e80de6eac91f9df45c6c3c03fd6ba", {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
