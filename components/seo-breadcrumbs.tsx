import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import Script from "next/script"

interface BreadcrumbItem {
  label: string
  href: string
  active?: boolean
}

interface SEOBreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function SEOBreadcrumbs({ items }: SEOBreadcrumbsProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

  // Generate structured data for breadcrumbs
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `${siteUrl}${item.href}`,
      })),
    ],
  }

  return (
    <>
      <Script id="breadcrumb-structured-data" type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </Script>

      <nav aria-label="Breadcrumb" className="flex mb-4">
        <ol className="flex items-center space-x-1 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors flex items-center">
              <Home className="h-4 w-4 mr-1" />
              <span className="sr-only sm:not-sr-only">Home</span>
            </Link>
          </li>

          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
              {item.active ? (
                <span className="font-medium text-blue-600">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-blue-600 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

