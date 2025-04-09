"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/layout/header"
import { BottomTabBar } from "@/components/layout/bottom-tab-bar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { delay, formatVoucherCode, isValidVoucherCode } from "@/lib/utils"
import { AlertCircle, CheckCircle2, Smartphone } from "lucide-react"
import { EnhancedCarrierSelection } from "./enhanced-carrier-selection"

export default function PhoneCreditPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("voucher")
  const [carrier, setCarrier] = useState("")
  const [voucherCode, setVoucherCode] = useState("")
  const [formattedCode, setFormattedCode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<"idle" | "validating" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isOffline, setIsOffline] = useState(false)
  const [showCarrierSelection, setShowCarrierSelection] = useState(true)

  const handleVoucherCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    setVoucherCode(value)
    setFormattedCode(formatVoucherCode(value))

    // Reset status when user types
    if (status !== "idle") {
      setStatus("idle")
      setProgress(0)
      setErrorMessage("")
    }
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    setPhoneNumber(value)

    // Reset status when user types
    if (status !== "idle") {
      setStatus("idle")
      setProgress(0)
      setErrorMessage("")
    }
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, "")
    setAmount(value)

    // Reset status when user types
    if (status !== "idle") {
      setStatus("idle")
      setProgress(0)
      setErrorMessage("")
    }
  }

  const validateVoucher = () => {
    if (!carrier) {
      setErrorMessage("Please select a carrier")
      setStatus("error")
      return false
    }

    if (!isValidVoucherCode(voucherCode)) {
      setErrorMessage("Invalid voucher code format. Please enter a 16-digit code.")
      setStatus("error")
      return false
    }

    return true
  }

  const validateDirectTopup = () => {
    if (!carrier) {
      setErrorMessage("Please select a carrier")
      setStatus("error")
      return false
    }

    if (!phoneNumber || phoneNumber.length < 10) {
      setErrorMessage("Please enter a valid phone number")
      setStatus("error")
      return false
    }

    if (!amount || Number.parseFloat(amount) <= 0) {
      setErrorMessage("Please enter a valid amount")
      setStatus("error")
      return false
    }

    return true
  }

  const handleSubmitVoucher = async (e: React.FormEvent) => {
    e.preventDefault()

    const isValid = validateVoucher()
    if (!isValid) return

    setIsLoading(true)
    setStatus("validating")

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    try {
      // Simulate API call
      await delay(2000)

      clearInterval(interval)
      setProgress(100)

      // For demo purposes, always succeed
      setStatus("success")

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/dashboard")
      }, 1500)
    } catch (err) {
      clearInterval(interval)
      setStatus("error")
      setErrorMessage("Failed to process voucher. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmitDirectTopup = async (e: React.FormEvent) => {
    e.preventDefault()

    const isValid = validateDirectTopup()
    if (!isValid) return

    setIsLoading(true)
    setStatus("validating")

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    try {
      // Simulate API call
      await delay(2000)

      clearInterval(interval)
      setProgress(100)

      // For demo purposes, always succeed
      setStatus("success")

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/dashboard")
      }, 1500)
    } catch (err) {
      clearInterval(interval)
      setStatus("error")
      setErrorMessage("Failed to process direct top-up. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const toggleOfflineMode = () => {
    setIsOffline(!isOffline)
  }

  const handleCarrierSelect = (carrierId: string) => {
    setCarrier(carrierId)
    setShowCarrierSelection(false)
  }

  const handleBackToCarriers = () => {
    setShowCarrierSelection(true)
    setStatus("idle")
    setProgress(0)
    setErrorMessage("")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Phone Credit to Digital Funds" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        {showCarrierSelection ? (
          <EnhancedCarrierSelection onSelect={handleCarrierSelect} />
        ) : (
          <div className="mx-auto max-w-md">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Convert Phone Credit</CardTitle>
                    <CardDescription>Turn your phone credit into digital funds</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleBackToCarriers}>
                    Change Carrier
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="voucher">Voucher Code</TabsTrigger>
                    <TabsTrigger value="direct">Direct Top-up</TabsTrigger>
                  </TabsList>
                  <TabsContent value="voucher">
                    <form onSubmit={handleSubmitVoucher} className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="voucher-code">Voucher Code</Label>
                        <div className="relative">
                          <Smartphone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="voucher-code"
                            placeholder="Enter 16-digit code"
                            className="pl-10 input-focus-animation"
                            value={formattedCode}
                            onChange={handleVoucherCodeChange}
                            maxLength={19} // 16 digits + 3 spaces
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Enter the 16-digit code from your prepaid voucher
                        </p>
                      </div>

                      {status === "validating" && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span>Validating voucher...</span>
                            <span>{progress}%</span>
                          </div>
                          <Progress value={progress} className="animate-progress" />
                        </div>
                      )}

                      {status === "success" && (
                        <Alert className="bg-green-50 border-green-200">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <AlertTitle className="text-green-500">Success!</AlertTitle>
                          <AlertDescription>Your funds have been added to your account.</AlertDescription>
                        </Alert>
                      )}

                      {status === "error" && (
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{errorMessage}</AlertDescription>
                        </Alert>
                      )}

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="offline-mode"
                          checked={isOffline}
                          onChange={toggleOfflineMode}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <Label htmlFor="offline-mode" className="text-sm">
                          Save for offline processing
                        </Label>
                      </div>

                      {isOffline && (
                        <Alert className="bg-blue-50 border-blue-200">
                          <AlertDescription className="text-sm">
                            Offline Mode Syncing – transaction will be queued until network is available.
                          </AlertDescription>
                        </Alert>
                      )}

                      <Button
                        type="submit"
                        className="w-full animate-button-press"
                        disabled={isLoading || status === "success"}
                      >
                        {isLoading ? "Processing..." : "Convert Credit"}
                      </Button>
                    </form>
                  </TabsContent>
                  <TabsContent value="direct">
                    <form onSubmit={handleSubmitDirectTopup} className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone-number">Phone Number</Label>
                        <div className="relative">
                          <Smartphone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone-number"
                            placeholder="Enter phone number"
                            className="pl-10 input-focus-animation"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="amount">Amount (GYD)</Label>
                        <Input
                          id="amount"
                          placeholder="0.00"
                          className="input-focus-animation"
                          value={amount}
                          onChange={handleAmountChange}
                        />
                        <p className="text-xs text-muted-foreground">Minimum: 500 GYD, Maximum: 10,000 GYD</p>
                      </div>

                      {status === "validating" && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span>Processing top-up...</span>
                            <span>{progress}%</span>
                          </div>
                          <Progress value={progress} className="animate-progress" />
                        </div>
                      )}

                      {status === "success" && (
                        <Alert className="bg-green-50 border-green-200">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <AlertTitle className="text-green-500">Success!</AlertTitle>
                          <AlertDescription>Your funds have been added to your account.</AlertDescription>
                        </Alert>
                      )}

                      {status === "error" && (
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{errorMessage}</AlertDescription>
                        </Alert>
                      )}

                      <Button
                        type="submit"
                        className="w-full animate-button-press"
                        disabled={isLoading || status === "success"}
                      >
                        {isLoading ? "Processing..." : "Convert Credit"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="link" className="text-xs" onClick={() => router.push("/support")}>
                  Having trouble? Get help
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </main>
      <BottomTabBar />
    </div>
  )
}
