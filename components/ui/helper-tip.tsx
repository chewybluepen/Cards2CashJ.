"use client"

import { useState, useEffect } from "react"
import { HelpCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface HelperTipProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  message: string
  delay?: number
  showIcon?: boolean
}

export function HelperTip({ position = "bottom-right", message, delay = 2000, showIcon = true }: HelperTipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [delay, isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
  }

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-20 left-4 md:bottom-4",
    "bottom-right": "bottom-20 right-4 md:bottom-4",
  }

  if (isDismissed) return null

  return (
    <div className={`fixed ${positionClasses[position]} z-40`} aria-live="polite">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-lg shadow-lg p-4 max-w-[280px] border border-amazon-accent"
          >
            <div className="flex items-start gap-3">
              {showIcon && (
                <div className="flex-shrink-0 mt-0.5">
                  <div className="bg-amazon-accent/20 p-2 rounded-full">
                    <HelpCircle className="h-4 w-4 text-amazon-primary" />
                  </div>
                </div>
              )}
              <div className="flex-1 text-sm text-amazon-dark">{message}</div>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 -mt-1 -mr-1 text-amazon-dark/60 hover:text-amazon-dark hover:bg-transparent"
                onClick={handleDismiss}
                aria-label="Dismiss tip"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
