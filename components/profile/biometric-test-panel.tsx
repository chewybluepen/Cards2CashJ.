"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Fingerprint, Scan, RefreshCw } from "lucide-react"
import { forceSetBiometricType, type BiometricType } from "@/lib/biometric-auth"
import { useToast } from "@/hooks/use-toast"

export function BiometricTestPanel() {
  const { toast } = useToast()
  const [currentType, setCurrentType] = useState<BiometricType | null>(null)

  const handleSetBiometricType = (type: BiometricType) => {
    forceSetBiometricType(type)
    setCurrentType(type)

    toast({
      title: "Biometric Type Changed",
      description: `Biometric type set to ${type === "fingerprint" ? "Fingerprint" : "Face ID"}. Refresh the page to see changes.`,
    })
  }

  const handleReset = () => {
    localStorage.removeItem("forcedBiometricType")
    setCurrentType(null)

    toast({
      title: "Biometric Type Reset",
      description: "Biometric type detection has been reset to automatic. Refresh the page to see changes.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Biometric Test Panel</CardTitle>
        <CardDescription>For testing purposes only - force a specific biometric type</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-2">
          <p className="text-sm text-muted-foreground mb-2">
            Current forced type:{" "}
            {currentType ? (currentType === "fingerprint" ? "Fingerprint" : "Face ID") : "None (automatic)"}
          </p>

          <div className="flex space-x-2">
            <Button
              variant={currentType === "fingerprint" ? "default" : "outline"}
              onClick={() => handleSetBiometricType("fingerprint")}
              className="flex-1"
            >
              <Fingerprint className="h-4 w-4 mr-2" />
              Fingerprint
            </Button>

            <Button
              variant={currentType === "face" ? "default" : "outline"}
              onClick={() => handleSetBiometricType("face")}
              className="flex-1"
            >
              <Scan className="h-4 w-4 mr-2" />
              Face ID
            </Button>

            <Button variant="outline" onClick={handleReset}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>

        <div className="text-xs text-muted-foreground border-t pt-4">
          <p>
            This panel is for testing purposes only. It allows you to force a specific biometric type to test the UI for
            different authentication methods.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
