"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { getBreadcrumbTrail } from "@/lib/navigation-utils"

export function Breadcrumb() {
  const pathname = usePathname()
  const breadcrumbs = getBreadcrumbTrail(pathname)

  // If we're on the home page or have no breadcrumbs, don't show anything
  if (pathname === "/" || breadcrumbs.length === 0) {
    return null
  }

  return (
    <nav className="flex items-center text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        <li>
          <Link href="/" className="flex items-center hover:text-foreground transition-colors">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            {index === breadcrumbs.length - 1 ? (
              <span className="font-medium text-foreground" aria-current="page">
                {breadcrumb.title}
              </span>
            ) : (
              <Link href={breadcrumb.path} className="hover:text-foreground transition-colors">
                {breadcrumb.title}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
