"use client"

import type { ReactNode } from "react"
import { TransitionLayout } from "@/components/layout/transition-layout"
import { useAnimation } from "@/contexts/animation-context"
import { useAccessibility } from "@/contexts/accessibility-context"

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  const { animationsEnabled } = useAnimation()
  const { reducedMotion } = useAccessibility()

  // If animations are disabled or reduced motion is enabled, don't use transitions
  if (!animationsEnabled || reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return <TransitionLayout className={className}>{children}</TransitionLayout>
}
