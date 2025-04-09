"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Fingerprint, Scan } from "lucide-react"
import { useBiometricAuth } from "@/contexts/biometric-auth-context"
import { useToast } from "@/hooks/use-toast"

export function BiometricToggle() {
  const { biometricCapability, toggleBiometricType } = useBiometricAuth()
  const { toast } = useToast()
  const [isFingerprint, setIsFingerprint] = useState(biometricCapability.type === "fingerprint")

  const handleToggle = () => {
    toggleBiometricType()
    setIsFingerprint(!isFingerprint)

    toast({
      title: "Biometric Type Changed",
      description: `Switched to ${!isFingerprint ? "fingerprint" : "facial"} recognition for demonstration.`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Biometric Authentication</CardTitle>
        <CardDescription>Toggle between biometric authentication methods for demonstration</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`rounded-full p-2 ${isFingerprint ? "bg-primary/10" : "bg-muted"}`}>
              <Fingerprint className={`h-6 w-6 ${isFingerprint ? "text-primary" : "text-muted-foreground"}`} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="biometric-toggle">Authentication Type</Label>
              <p className="text-sm text-muted-foreground">
                {isFingerprint ? "Using fingerprint recognition" : "Using facial recognition"}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Fingerprint className={`h-4 w-4 ${isFingerprint ? "text-primary" : "text-muted-foreground"}`} />
            <Switch id="biometric-toggle" checked={!isFingerprint} onCheckedChange={handleToggle} />
            <Scan className={`h-4 w-4 ${!isFingerprint ? "text-primary" : "text-muted-foreground"}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
