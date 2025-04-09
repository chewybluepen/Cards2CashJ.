"use client"

import { type ButtonHTMLAttributes, forwardRef } from "react"
import { useAccessibility } from "@/contexts/accessibility-context"
import { useAnimation } from "@/contexts/animation-context"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface AccessibleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  highContrastClass?: string
  animationClass?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  (
    {
      className = "",
      highContrastClass = "border-2 border-foreground",
      animationClass = "hover:scale-105 active:scale-95 transition-transform",
      variant = "default",
      size = "default",
      ...props
    },
    ref,
  ) => {
    const { highContrast } = useAccessibility()
    const { animationsEnabled, reducedMotion } = useAnimation()

    const showAnimations = animationsEnabled && !reducedMotion

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(className, highContrast && highContrastClass, showAnimations && animationClass)}
        {...props}
      />
    )
  },
)

AccessibleButton.displayName = "AccessibleButton"
