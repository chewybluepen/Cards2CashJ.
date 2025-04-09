"use client"

import Link from "next/link"

const MobileNav = () => {
  return (
    <nav className="bg-gray-100 p-4 fixed bottom-0 left-0 right-0 md:hidden">
      <ul className="flex justify-around">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/analytics">
            Analytics
          </Link>
        </li>
        <li>
          <Link href="/crypto">
            Crypto
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav
