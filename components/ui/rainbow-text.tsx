import type React from "react"
import { cn } from "@/lib/utils"

interface RainbowTextProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function RainbowText({ children, className, as: Component = "span" }: RainbowTextProps) {
  return <Component className={cn("font-bold text-black", className)}>{children}</Component>
}
