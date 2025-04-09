"use client"

import { usePathname } from "next/navigation"
import { BottomTabBar } from "@/components/layout/bottom-tab-bar"
import { useAuth } from "@/contexts/auth-context"

export function AuthNavigation() {
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()

  // Don't show navigation on auth pages
  const isAuthPage = ["/", "/login", "/register", "/forgot-password"].includes(pathname)

  if (!isAuthenticated || isAuthPage) {
    return null
  }

  return <BottomTabBar />
}
