"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SlideTransitionProps {
  children: React.ReactNode
  show: boolean
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  delay?: number
  distance?: number
  className?: string
}

export function SlideTransition({
  children,
  show,
  direction = "up",
  duration = 300,
  delay = 0,
  distance = 20,
  className = "",
}: SlideTransitionProps) {
  const [render, setRender] = useState(show)

  useEffect(() => {
    if (show) setRender(true)
  }, [show])

  const onAnimationComplete = () => {
    if (!show) setRender(false)
  }

  if (!render) return null

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 }
      case "down":
        return { y: -distance, opacity: 0 }
      case "left":
        return { x: distance, opacity: 0 }
      case "right":
        return { x: -distance, opacity: 0 }
      default:
        return { y: distance, opacity: 0 }
    }
  }

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          initial={getInitialPosition()}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={getInitialPosition()}
          transition={{ duration: duration / 1000, delay: delay / 1000 }}
          onAnimationComplete={onAnimationComplete}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
