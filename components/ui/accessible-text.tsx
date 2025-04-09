"use client"

import type { ReactNode } from "react"
import { useAccessibility } from "@/contexts/accessibility-context"
import { cn } from "@/lib/utils"

interface AccessibleTextProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  highContrastClass?: string
  largeTextClass?: string
}

export function AccessibleText({
  children,
  className = "",
  as: Component = "span",
  highContrastClass = "text-foreground",
  largeTextClass = "text-base",
}: AccessibleTextProps) {
  const { highContrast, largeText } = useAccessibility()

  return (
    <Component className={cn(className, highContrast && highContrastClass, largeText && largeTextClass)}>
      {children}
    </Component>
  )
}
