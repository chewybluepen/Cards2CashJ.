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

// Create the context with a fallback default value that bypasses errors
const fallbackContext: AuthContextType = {
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: () => {},
  setUser: () => {},
  login: async () => ({ success: true }),
  logout: () => {},
  updateProfilePicture: () => {},
}

const AuthContext = createContext<AuthContextType>(fallbackContext)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  // Load demo user on mount
  useEffect(() => {
    try {
      const demoUser: User = {
        id: "demo-user-id",
        name: "Demo User",
        email: "demo@cards2cash.com",
        avatar: "/images/avatars/cartman.png",
        profilePicture: "/images/dp.png", // Default profile picture
      }
      setUser(demoUser)
    } catch (error) {
      // Ignore any errors during demo user initialization.
      console.warn("Demo user setup failed", error)
    }
  }, [])

  const login = async (email: string, password: string) => {
    try {
      // For demo purposes, always succeed
      setIsAuthenticated(true)
      // Set demo user with supplied email (or default)
      setUser({
        id: "demo-user-id",
        name: "Demo User",
        email: email || "demo@cards2cash.com",
        avatar: "/images/avatars/cartman.png",
        profilePicture: "/images/dp.png",
      })
      return { success: true }
    } catch (error) {
      console.warn("Demo login failed", error)
      return { success: false, message: "Login error in demo mode" }
    }
  }

  const logout = () => {
    try {
      setIsAuthenticated(false)
      setUser(null)
      // In demo mode, we just avoid errors on redirect.
      router.push("/").catch(() => {})
    } catch (error) {
      console.warn("Demo logout failed", error)
    }
  }

  const updateProfilePicture = (imageUrl: string) => {
    setUser((prevUser) => {
      if (!prevUser) return prevUser
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
  // Instead of throwing an error if AuthProvider is missing, return the fallback context.
  return context || fallbackContext
}
