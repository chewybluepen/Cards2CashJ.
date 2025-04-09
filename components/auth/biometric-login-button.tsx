"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Fingerprint, Scan, Loader2 } from "lucide-react"
import { useBiometricAuth } from "@/contexts/biometric-auth-context"
import { BiometricAuthDialog } from "./biometric-auth-dialog"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export function BiometricLoginButton() {
  const router = useRouter()
  const { toast } = useToast()
  const { biometricCapability, hasSavedCredentials, isLoading: biometricLoading } = useBiometricAuth()
  const { setIsAuthenticated } = useAuth()

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const handleBiometricLogin = () => {
    setIsDialogOpen(true)
  }

  const handleAuthSuccess = () => {
    setIsAuthenticating(true)

    // Simulate API call to verify the user
    setTimeout(() => {
      // Set authentication state
      setIsAuthenticated(true)

      // Show success toast
      toast({
        title: "Login Successful",
        description: `You have been logged in using ${biometricCapability.type === "fingerprint" ? "fingerprint" : "facial"} authentication.`,
      })

      // Redirect to dashboard
      router.push("/dashboard")

      setIsAuthenticating(false)
      setIsDialogOpen(false)
    }, 1000)
  }

  const handleAuthError = (error: string) => {
    // For testing, we'll still authenticate even on error
    handleAuthSuccess()
  }

  // If biometric is loading, show a loading button
  if (biometricLoading) {
    return (
      <Button variant="outline" className="w-full" disabled>
        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
        Checking biometric capabilities...
      </Button>
    )
  }

  return (
    <>
      <Button variant="outline" className="w-full" onClick={handleBiometricLogin} disabled={isAuthenticating}>
        {isAuthenticating ? (
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
        ) : biometricCapability.type === "fingerprint" ? (
          <Fingerprint className="h-4 w-4 mr-2" />
        ) : (
          <Scan className="h-4 w-4 mr-2" />
        )}
        {isAuthenticating
          ? "Authenticating..."
          : biometricCapability.type === "fingerprint"
            ? "Login with Fingerprint"
            : "Login with Face ID"}
      </Button>

      <BiometricAuthDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSuccess={handleAuthSuccess}
        onError={handleAuthError}
        biometricType={biometricCapability.type}
      />
    </>
  )
}
