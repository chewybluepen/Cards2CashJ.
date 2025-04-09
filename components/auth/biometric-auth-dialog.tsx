"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Fingerprint, Scan, X, CheckCircle2, Loader2 } from "lucide-react"
import type { BiometricType } from "@/lib/biometric-auth"
import { Button } from "@/components/ui/button"

type BiometricAuthDialogProps = {
  open: boolean
  onClose: () => void
  onSuccess: () => void
  onError: (error: string) => void
  biometricType: BiometricType
}

type AuthState = "initial" | "processing" | "success"

export function BiometricAuthDialog({ open, onClose, onSuccess, onError, biometricType }: BiometricAuthDialogProps) {
  const [authState, setAuthState] = useState<AuthState>("initial")

  // Reset state when dialog opens
  useEffect(() => {
    if (open) {
      setAuthState("initial")
    }
  }, [open])

  // Simulate the biometric authentication process - always succeed
  useEffect(() => {
    if (open && authState === "initial") {
      setAuthState("processing")

      const timer = setTimeout(() => {
        setAuthState("success")
        setTimeout(() => {
          onSuccess()
        }, 1000)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [open, authState, onSuccess])

  const handleCancel = () => {
    // Even if canceled, we'll still authenticate for testing
    onSuccess()
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center justify-center p-6 text-center">
          {authState === "initial" || authState === "processing" ? (
            <>
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 rounded-full ${authState === "processing" ? "animate-ping opacity-25 bg-primary" : ""}`}
                  style={{ animationDuration: "1.5s" }}
                ></div>
                {biometricType === "fingerprint" ? (
                  <Fingerprint
                    className={`h-24 w-24 ${authState === "processing" ? "text-primary animate-pulse" : "text-muted-foreground"}`}
                  />
                ) : (
                  <Scan
                    className={`h-24 w-24 ${authState === "processing" ? "text-primary animate-pulse" : "text-muted-foreground"}`}
                  />
                )}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {biometricType === "fingerprint" ? "Touch Fingerprint Sensor" : "Look at Camera for Face Recognition"}
              </h3>

              {authState === "processing" && (
                <div className="flex items-center justify-center space-x-2 text-primary">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>{biometricType === "fingerprint" ? "Scanning fingerprint..." : "Scanning face..."}</span>
                </div>
              )}

              <p className="text-sm text-muted-foreground mt-2 mb-6">
                {biometricType === "fingerprint"
                  ? "Place your finger on the sensor to verify your identity"
                  : "Position your face in front of the camera to verify your identity"}
              </p>

              <div className="flex justify-center">
                <Button variant="outline" size="sm" onClick={handleCancel}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <CheckCircle2 className="h-24 w-24 text-green-500" />
              </div>

              <h3 className="text-lg font-semibold mb-2">Authentication Successful</h3>
              <p className="text-sm text-muted-foreground">You have been successfully authenticated</p>
            </>
          )}

          {/* Simulation notice */}
          <div className="mt-8 text-xs text-muted-foreground border-t pt-4 w-full">
            <p>
              <span className="font-semibold">TESTING MODE:</span> Authentication always succeeds for demonstration
              purposes.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
