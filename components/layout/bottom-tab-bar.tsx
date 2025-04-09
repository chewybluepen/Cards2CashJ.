"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, CreditCard, PlusCircle, RefreshCw, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomTabBar() {
  const pathname = usePathname()

  const tabs = [
    {
      name: "Home",
      href: "/dashboard",
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: "Cards",
      href: "/cards",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      name: "Add",
      href: "/add-funds",
      icon: <PlusCircle className="h-5 w-5" />,
    },
    {
      name: "Crypto",
      href: "/crypto",
      icon: <RefreshCw className="h-5 w-5" />,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: <User className="h-5 w-5" />,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg">
      <div className="grid h-16 grid-cols-5">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href || pathname.startsWith(`${tab.href}/`)
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={cn(
                "flex flex-col items-center justify-center transition-colors",
                isActive ? "text-black" : "text-black/70 hover:text-black",
              )}
            >
              {tab.icon}
              <span className="mt-1 text-xs font-bold">{tab.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
