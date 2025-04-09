"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"

interface AnimationContextType {
  animationsEnabled: boolean
  transitionSpeed: "slow" | "normal" | "fast"
  toggleAnimations: () => void
  setTransitionSpeed: (speed: "slow" | "normal" | "fast") => void
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined)

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [animationsEnabled, setAnimationsEnabled] = useState(true)
  const [transitionSpeed, setTransitionSpeed] = useState<"slow" | "normal" | "fast">("normal")

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) {
      setAnimationsEnabled(false)
    }

    const handleChange = () => {
      setAnimationsEnabled(!mediaQuery.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const toggleAnimations = () => setAnimationsEnabled((prev) => !prev)

  return (
    <AnimationContext.Provider
      value={{
        animationsEnabled,
        transitionSpeed,
        toggleAnimations,
        setTransitionSpeed,
      }}
    >
      <div
        className={`
          ${!animationsEnabled ? "no-animations" : ""}
          ${
            transitionSpeed === "slow"
              ? "transitions-slow"
              : transitionSpeed === "fast"
                ? "transitions-fast"
                : "transitions-normal"
          }
        `}
      >
        {children}
      </div>
    </AnimationContext.Provider>
  )
}

export function useAnimation() {
  const context = useContext(AnimationContext)
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider")
  }
  return context
}
