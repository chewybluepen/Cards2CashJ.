"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface AccessibilityContextType {
  highContrast: boolean
  largeText: boolean
  reducedMotion: boolean
  toggleHighContrast: () => void
  toggleLargeText: () => void
  toggleReducedMotion: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const toggleHighContrast = () => setHighContrast((prev) => !prev)
  const toggleLargeText = () => setLargeText((prev) => !prev)
  const toggleReducedMotion = () => setReducedMotion((prev) => !prev)

  return (
    <AccessibilityContext.Provider
      value={{
        highContrast,
        largeText,
        reducedMotion,
        toggleHighContrast,
        toggleLargeText,
        toggleReducedMotion,
      }}
    >
      <div
        className={`
          ${highContrast ? "high-contrast" : ""}
          ${largeText ? "large-text" : ""}
          ${reducedMotion ? "reduced-motion" : ""}
        `}
      >
        {children}
      </div>
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider")
  }
  return context
}
