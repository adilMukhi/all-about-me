import Link from "next/link"
import { Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  active?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <div className="breadcrumb-item">
        <Link href="/" className="flex items-center">
          <Home className="h-4 w-4 mr-1" />
          Home
        </Link>
      </div>
      {items.map((item, index) => (
        <div key={index} className="breadcrumb-item">
          {item.active ? (
            <span className="text-gray-500">{item.label}</span>
          ) : (
            <Link href={item.href}>{item.label}</Link>
          )}
        </div>
      ))}
    </nav>
  )
}

