"use client"
import Link from "next/link"
import { Bell, ChevronLeft, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/auth-context"

interface HeaderProps {
  title?: string
  showBackButton?: boolean
  showLogo?: boolean
  showSearch?: boolean
  showNotifications?: boolean
  showProfile?: boolean
  onMenuClick?: () => void
}

export function Header({
  title,
  showBackButton = false,
  showLogo = true,
  showSearch = false,
  showNotifications = true,
  showProfile = true,
  onMenuClick,
}: HeaderProps) {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-4 md:px-6">
      <div className="flex items-center gap-2">
        {showBackButton && (
          <Button variant="ghost" size="icon" asChild className="mr-2 text-black hover:bg-white/10">
            <Link href="/">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
        )}
        {onMenuClick && (
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="text-black hover:bg-white/10 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        )}
        {showLogo && (
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="text-xl font-bold text-black">Cards2Cash</span>
          </Link>
        )}
        {title && <h1 className="text-lg font-bold text-black">{title}</h1>}
      </div>
      <div className="flex items-center gap-2">
        {showSearch && (
          <Button variant="ghost" size="icon" asChild className="text-black hover:bg-white/10">
            <Link href="/search">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>
        )}
        {showNotifications && (
          <Button variant="ghost" size="icon" asChild className="text-black hover:bg-white/10">
            <Link href="/notifications">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Link>
          </Button>
        )}
        {showProfile && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.profilePicture || "/images/dp.png"} alt={user?.name || "User"} />
                  <AvatarFallback>{user?.name?.substring(0, 2).toUpperCase() || "U"}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  )
}
