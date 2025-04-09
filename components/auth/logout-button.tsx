"use client"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { LogOut } from "lucide-react"

interface LogoutButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  showIcon?: boolean
  fullWidth?: boolean
}

export function LogoutButton({
  variant = "destructive",
  size = "default",
  className = "",
  showIcon = true,
  fullWidth = false,
}: LogoutButtonProps) {
  const { logout } = useAuth()

  return (
    <Button
      variant={variant}
      size={size}
      className={`${className} ${fullWidth ? "w-full" : ""}`}
      onClick={() => logout()}
    >
      {showIcon && <LogOut className="mr-2 h-4 w-4" />}
      Logout
    </Button>
  )
}
