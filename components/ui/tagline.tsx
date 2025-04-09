import { cn } from "@/lib/utils"

interface TaglineProps {
  className?: string
  variant?: "default" | "large" | "small"
  onRainbowBg?: boolean
}

export function Tagline({ className, variant = "default", onRainbowBg = false }: TaglineProps) {
  return (
    <div
      className={cn(
        "text-center italic",
        variant === "large" && "text-lg md:text-xl",
        variant === "small" && "text-xs",
        variant === "default" && "text-sm",
        onRainbowBg ? "text-black font-bold" : "text-muted-foreground",
        className,
      )}
    >
      The Future of Your Finances, for a Borderless World
    </div>
  )
}
