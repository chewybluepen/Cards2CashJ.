"use client"

import Link from "next/link"
import React from "react"

/**
 * Mobile navigation component for small screens
 */
export const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md md:hidden">
      <ul className="flex justify-around p-2 text-sm text-gray-700">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/analytics">Analytics</Link>
        </li>
        <li>
          <Link href="/crypto">Crypto</Link>
        </li>
      </ul>
    </nav>
  )
}

// Optional default export:
export default MobileNav
