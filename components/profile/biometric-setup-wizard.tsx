"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Fingerprint, Scan, Shield, CheckCircle2, ArrowRight, Loader2 } from "lucide-react"
import { useBiometricAuth } from "@/contexts/biometric-auth-context"
import { useToast } from "@/hooks/use-toast"
import { registerBiometricCredential } from "@/lib/biometric-auth"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

type SetupStep = "intro" | "scanning" | "success" | "error"

export function BiometricSetupWizard() {
  const { toast } = useToast()
  const { biometricCapability, saveBiometricCredential } = useBiometricAuth()

  const [currentStep, setCurrentStep] = useState<SetupStep>("intro")
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const handleStartSetup = () => {
    setCurrentStep("scanning")

    // Simulate progress
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 5
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(interval)
        handleSetupComplete()
      }
    }, 200)
  }

  const handleSetupComplete = async () => {
    try {
      // Register a simulated credential
      const credential = await registerBiometricCredential("user@example.com")

      if (credential) {
        saveBiometricCredential(credential)
        setCurrentStep("success")

        toast({
          title: "Biometric Setup Complete",
          description: "You can now log in using your biometric data.",
        })
      } else {
        throw new Error("Failed to register biometric credential")
      }
    } catch (error) {
      console.error("Error during biometric setup:", error)
      setError("Failed to complete biometric setup. Please try again.")
      setCurrentStep("error")

      toast({
        title: "Setup Failed",
        description: "Failed to set up biometric authentication. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleRetry = () => {
    setError(null)
    setProgress(0)
    setCurrentStep("intro")
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Biometric Authentication Setup</CardTitle>
        <CardDescription>
          Set up {biometricCapability.type === "fingerprint" ? "fingerprint" : "facial"} authentication for faster login
        </CardDescription>
      </CardHeader>
      <CardContent>
        {currentStep === "intro" && (
          <div className="flex flex-col items-center text-center space-y-6 py-6">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
              {biometricCapability.type === "fingerprint" ? (
                <Fingerprint className="h-12 w-12 text-primary" />
              ) : (
                <Scan className="h-12 w-12 text-primary" />
              )}
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Set Up {biometricCapability.type === "fingerprint" ? "Fingerprint" : "Facial"} Authentication
              </h3>
              <p className="text-muted-foreground">
                {biometricCapability.type === "fingerprint"
                  ? "Use your fingerprint to log in quickly and securely without entering your password."
                  : "Use facial recognition to log in quickly and securely without entering your password."}
              </p>
            </div>

            <div className="rounded-lg border p-4 w-full">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Security Information</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your biometric data never leaves your device. We use secure authentication methods that store
                    credentials securely on your device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === "scanning" && (
          <div className="flex flex-col items-center text-center space-y-6 py-6">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full animate-ping opacity-25 bg-primary"
                style={{ animationDuration: "1.5s" }}
              ></div>
              {biometricCapability.type === "fingerprint" ? (
                <Fingerprint className="h-24 w-24 text-primary animate-pulse" />
              ) : (
                <Scan className="h-24 w-24 text-primary animate-pulse" />
              )}
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                {biometricCapability.type === "fingerprint" ? "Place Your Finger on the Sensor" : "Look at the Camera"}
              </h3>
              <p className="text-muted-foreground">
                {biometricCapability.type === "fingerprint"
                  ? "Hold your finger on the fingerprint sensor to register it."
                  : "Position your face in front of the camera to register it."}
              </p>
            </div>

            <div className="w-full space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Registering...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              <span>{biometricCapability.type === "fingerprint" ? "Scanning fingerprint..." : "Scanning face..."}</span>
            </div>
          </div>
        )}

        {currentStep === "success" && (
          <div className="flex flex-col items-center text-center space-y-6 py-6">
            <div className="h-24 w-24 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
              <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-500" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Setup Complete</h3>
              <p className="text-muted-foreground">
                {biometricCapability.type === "fingerprint"
                  ? "Your fingerprint has been successfully registered."
                  : "Your face has been successfully registered."}
                You can now use it to log in to your account.
              </p>
            </div>
          </div>
        )}

        {currentStep === "error" && (
          <div className="flex flex-col items-center text-center space-y-6 py-6">
            <Alert variant="destructive" className="w-full">
              <AlertDescription>{error}</AlertDescription>
            </Alert>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Setup Failed</h3>
              <p className="text-muted-foreground">
                We encountered an error while setting up your biometric authentication. Please try again.
              </p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {currentStep === "intro" && (
          <Button onClick={handleStartSetup}>
            Start Setup
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}

        {currentStep === "scanning" && (
          <Button variant="outline" onClick={handleRetry}>
            Cancel
          </Button>
        )}

        {currentStep === "success" && (
          <Button variant="outline" onClick={() => window.location.reload()}>
            Done
          </Button>
        )}

        {currentStep === "error" && <Button onClick={handleRetry}>Try Again</Button>}
      </CardFooter>
    </Card>
  )
}
