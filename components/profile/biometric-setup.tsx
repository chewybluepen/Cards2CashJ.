"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Fingerprint, Scan, Shield, AlertCircle, Info } from "lucide-react"
import { useBiometricAuth } from "@/contexts/biometric-auth-context"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { BiometricSetupWizard } from "./biometric-setup-wizard"

export function BiometricSetup() {
  const { toast } = useToast()
  const { biometricCapability, isLoading, hasSavedCredentials, clearBiometricCredentials } = useBiometricAuth()

  const [showSetupWizard, setShowSetupWizard] = useState(false)

  const handleDisableBiometric = () => {
    clearBiometricCredentials()
    toast({
      title: "Biometric Authentication Disabled",
      description: "Biometric login has been turned off.",
      variant: "default",
    })
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Biometric Authentication</CardTitle>
          <CardDescription>Loading biometric capabilities...</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  if (!biometricCapability.available) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Biometric Authentication</CardTitle>
          <CardDescription>Secure your account with biometric authentication</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Your device doesn't support biometric authentication. You'll need to use password login.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    )
  }

  if (showSetupWizard) {
    return <BiometricSetupWizard />
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Biometric Authentication</CardTitle>
        <CardDescription>Secure your account with biometric authentication</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {biometricCapability.isSimulated && (
          <Alert className="mb-4">
            <Info className="h-4 w-4" />
            <AlertTitle>Simulation Mode</AlertTitle>
            <AlertDescription>
              This is a simulated biometric experience for development purposes. In production, real biometric
              authentication would be used.
            </AlertDescription>
          </Alert>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {biometricCapability.type === "fingerprint" ? (
              <Fingerprint className="h-8 w-8 text-primary" />
            ) : (
              <Scan className="h-8 w-8 text-primary" />
            )}
            <div>
              <p className="font-medium">
                {biometricCapability.type === "fingerprint" ? "Fingerprint Authentication" : "Facial Recognition"}
              </p>
              <p className="text-sm text-muted-foreground">
                {biometricCapability.type === "fingerprint"
                  ? "Use your fingerprint to log in quickly and securely"
                  : "Use facial recognition to log in quickly and securely"}
              </p>
            </div>
          </div>
          <Switch
            checked={hasSavedCredentials}
            onCheckedChange={hasSavedCredentials ? handleDisableBiometric : () => setShowSetupWizard(true)}
            disabled={showSetupWizard}
            aria-label={hasSavedCredentials ? "Disable biometric authentication" : "Enable biometric authentication"}
          />
        </div>

        <div className="rounded-lg border p-4 mt-4">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Security Information</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Your biometric data never leaves your device. We use secure authentication methods that store
                credentials securely on your device and only send verification data to our servers.
              </p>
            </div>
          </div>
        </div>

        {!hasSavedCredentials && (
          <Button onClick={() => setShowSetupWizard(true)} className="w-full mt-4">
            Set Up Biometric Authentication
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
