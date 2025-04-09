"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { BiometricCapability, BiometricCredential } from "@/lib/biometric-auth"
import { useToast } from "@/hooks/use-toast"

type BiometricAuthContextType = {
  biometricCapability: BiometricCapability
  isLoading: boolean
  hasSavedCredentials: boolean
  saveBiometricCredential: (credential: BiometricCredential) => void
  getBiometricCredential: () => BiometricCredential | null
  clearBiometricCredentials: () => void
  authenticateWithBiometric: () => Promise<boolean>
  toggleBiometricType: () => void
  error: string | null
}

const BiometricAuthContext = createContext<BiometricAuthContextType | undefined>(undefined)

export function BiometricAuthProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast()
  const [biometricCapability, setBiometricCapability] = useState<BiometricCapability>({
    available: true,
    type: "fingerprint",
    isSimulated: true,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [hasSavedCredentials, setHasSavedCredentials] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // For testing purposes, always set up with default values
    const demoCredential = {
      id: "demo-credential-id",
      username: "demo-user",
      createdAt: Date.now(),
    }
    localStorage.setItem("biometricCredential", JSON.stringify(demoCredential))
    setHasSavedCredentials(true)

    // Check if we have a forced biometric type from localStorage
    const forcedType = localStorage.getItem("forcedBiometricType")
    if (forcedType === "fingerprint" || forcedType === "face") {
      setBiometricCapability({
        available: true,
        type: forcedType as "fingerprint" | "face",
        isSimulated: true,
      })
    }
  }, [])

  const saveBiometricCredential = (credential: BiometricCredential) => {
    try {
      setError(null)
      localStorage.setItem("biometricCredential", JSON.stringify(credential))
      setHasSavedCredentials(true)
    } catch (error) {
      console.error("Error saving biometric credential:", error)
      setError("Failed to save biometric credentials")
      toast({
        title: "Error",
        description: "Failed to save biometric credentials",
        variant: "destructive",
      })
    }
  }

  const getBiometricCredential = (): BiometricCredential | null => {
    try {
      setError(null)
      const savedCredential = localStorage.getItem("biometricCredential")
      return savedCredential ? JSON.parse(savedCredential) : null
    } catch (error) {
      console.error("Error getting biometric credential:", error)
      setError("Failed to retrieve biometric credentials")
      return null
    }
  }

  const clearBiometricCredentials = () => {
    try {
      setError(null)
      // For testing, don't actually clear credentials
      console.log("Biometric credentials clear requested but ignored for testing")
    } catch (error) {
      console.error("Error clearing biometric credentials:", error)
      setError("Failed to clear biometric credentials")
    }
  }

  const toggleBiometricType = () => {
    setBiometricCapability((prev) => {
      const newType = prev.type === "fingerprint" ? "face" : "fingerprint"
      localStorage.setItem("forcedBiometricType", newType)
      return {
        ...prev,
        type: newType,
      }
    })
  }

  const authenticateWithBiometric = async (): Promise<boolean> => {
    // For testing purposes, always succeed
    return Promise.resolve(true)
  }

  return (
    <BiometricAuthContext.Provider
      value={{
        biometricCapability,
        isLoading,
        hasSavedCredentials,
        saveBiometricCredential,
        getBiometricCredential,
        clearBiometricCredentials,
        authenticateWithBiometric,
        toggleBiometricType,
        error,
      }}
    >
      {children}
    </BiometricAuthContext.Provider>
  )
}

export function useBiometricAuth() {
  const context = useContext(BiometricAuthContext)
  if (context === undefined) {
    throw new Error("useBiometricAuth must be used within a BiometricAuthProvider")
  }
  return context
}
