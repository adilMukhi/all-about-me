import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center">
      <div className="max-w-md px-4">
        <h1
          className="mb-6 text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
          style={{ fontFamily: "'Sour Gummy', sans-serif" }}
        >
          404
        </h1>

        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>

        <p className="mb-8 text-gray-600">Sorry, the page you are looking for doesn't exist or has been moved.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" size="lg" className="flex items-center gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Go to Home
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="flex items-center gap-2">
            <Link href="/experiences">
              <ArrowLeft className="h-4 w-4" />
              Explore Experiences
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-16 text-sm text-gray-500">
        <p>If you believe this is an error, please contact me.</p>
      </div>
    </div>
  )
}

