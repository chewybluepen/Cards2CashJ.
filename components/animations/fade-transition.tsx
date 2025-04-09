"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FadeTransitionProps {
  children: React.ReactNode
  show: boolean
  duration?: number
  delay?: number
  className?: string
}

export function FadeTransition({ children, show, duration = 300, delay = 0, className = "" }: FadeTransitionProps) {
  const [render, setRender] = useState(show)

  useEffect(() => {
    if (show) setRender(true)
  }, [show])

  const onAnimationComplete = () => {
    if (!show) setRender(false)
  }

  if (!render) return null

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
