"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
  avatar?: string
  profilePicture: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User | null
  setIsAuthenticated: (value: boolean) => void
  setUser: (user: User | null) => void
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  logout: () => void
  updateProfilePicture: (imageUrl: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  // Load demo user on mount
  useEffect(() => {
    // Create a demo user for testing
    const demoUser = {
      id: "demo-user-id",
      name: "Demo User",
      email: "demo@cards2cash.com",
      avatar: "/images/avatars/cartman.png",
      profilePicture: "/images/dp.png", // Default profile picture
    }
    setUser(demoUser)
  }, [])

  const login = async (email: string, password: string) => {
    // For testing purposes, always succeed
    setIsAuthenticated(true)

    // Set demo user
    setUser({
      id: "demo-user-id",
      name: "Demo User",
      email: email || "demo@cards2cash.com",
      avatar: "/images/avatars/cartman.png",
      profilePicture: "/images/dp.png", // Default profile picture
    })

    return { success: true }
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)

    // Redirect to login page
    router.push("/")
  }

  const updateProfilePicture = (imageUrl: string) => {
    setUser((prevUser) => {
      if (!prevUser) return null
      return {
        ...prevUser,
        profilePicture: imageUrl,
      }
    })
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        setIsAuthenticated,
        setUser,
        login,
        logout,
        updateProfilePicture,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
