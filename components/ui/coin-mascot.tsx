"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CoinMascotProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  message?: string
  showMessage?: boolean
  size?: "small" | "medium" | "large"
}

export function CoinMascot({
  position = "bottom-right",
  message = "Need help with your finances?",
  showMessage = true,
  size = "medium",
}: CoinMascotProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMessageVisible, setIsMessageVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Show mascot after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show message after mascot appears
      if (showMessage) {
        setTimeout(() => setIsMessageVisible(true), 1000)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [showMessage])

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-20 left-4 md:bottom-4",
    "bottom-right": "bottom-20 right-4 md:bottom-4",
  }

  const sizeValues = {
    small: { width: 60, height: 60 },
    medium: { width: 100, height: 100 },
    large: { width: 150, height: 150 },
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <AnimatePresence>
        {isVisible && (
          <div className="relative">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              whileHover={{ scale: 1.1 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="cursor-pointer"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coin%20girl.jpg-C30nusDSGgMVezZfCiOKZ7FvK7Ybhj.jpeg"
                alt="Coin Girl"
                width={sizeValues[size].width}
                height={sizeValues[size].height}
                className={`${isHovered ? "animate-jello" : "animate-float"}`}
              />
            </motion.div>

            {isMessageVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className={`absolute ${position.includes("right") ? "right-full mr-2" : "left-full ml-2"} top-0 bg-white p-3 rounded-lg shadow-lg max-w-[200px] text-sm`}
                style={{
                  borderRadius: "12px",
                  border: "2px solid #FF9900",
                }}
              >
                <div className="font-medium text-amazon-dark">{message}</div>
                <div
                  className={`absolute top-4 ${position.includes("right") ? "right-[-8px]" : "left-[-8px]"} w-0 h-0`}
                  style={{
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: position.includes("right") ? "none" : "8px solid #FF9900",
                    borderRight: position.includes("right") ? "8px solid #FF9900" : "none",
                  }}
                />
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
