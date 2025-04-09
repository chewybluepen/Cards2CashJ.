"use client"

import type React from "react"

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { PageTransition } from "@/components/navigation/page-transition"

interface TransitionLayoutProps {
  children: React.ReactNode
}

export function TransitionLayout({ children }: TransitionLayoutProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={pathname}>{children}</PageTransition>
    </AnimatePresence>
  )
}
