"use client"

import { useEffect, useRef } from "react"
import confetti from "canvas-confetti"

interface ConfettiBurstProps {
  trigger: boolean
  onComplete?: () => void
  duration?: number
  particleCount?: number
  spread?: number
  colors?: string[]
}

export function ConfettiBurst({
  trigger,
  onComplete,
  duration = 3000,
  particleCount = 100,
  spread = 70,
  colors = ["#ff0000", "#00ff00", "#0000ff"],
}: ConfettiBurstProps) {
  const confettiRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!trigger || !confettiRef.current) return

    const myConfetti = confetti.create(confettiRef.current, {
      resize: true,
      useWorker: true,
    })

    myConfetti({
      particleCount,
      spread,
      origin: { y: 0.6 },
      colors,
      disableForReducedMotion: true,
    })

    const timeout = setTimeout(() => {
      if (onComplete) onComplete()
    }, duration)

    return () => clearTimeout(timeout)
  }, [trigger, onComplete, duration, particleCount, spread, colors])

  return (
    <canvas
      ref={confettiRef}
      className="fixed inset-0 z-50 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  )
}
