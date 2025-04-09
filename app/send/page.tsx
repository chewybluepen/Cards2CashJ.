"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { delay, formatCurrency } from "@/lib/utils"
import { AlertCircle, ArrowRight, CheckCircle2, Phone, User } from "lucide-react"
import { Tagline } from "@/components/ui/tagline"

export default function SendPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState("GYD")
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Mock recent recipients
  const recentRecipients = [
    { id: "1", name: "Sarah Johnson", contact: "+592 654 7890", avatar: "/placeholder.svg?height=40&width=40" },
    { id: "2", name: "Michael Brown", contact: "michael.b@example.com", avatar: "/placeholder.svg?height=40&width=40" },
    { id: "3", name: "Emily Davis", contact: "+592 321 6547", avatar: "/placeholder.svg?height=40&width=40" },
  ]

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

  const validateForm = () => {
    if (!recipient) {
      setErrorMessage("Please enter a recipient phone number or email")
      setStatus("error")
      return false
    }

    if (!amount || Number.parseFloat(amount) <= 0) {
      setErrorMessage("Please enter a valid amount")
      setStatus("error")
      return false
    }

    if (Number.parseFloat(amount) > 5000) {
      setErrorMessage("Maximum transfer amount is 5,000 GYD")
      setStatus("error")
      return false
    }

    return true
  }

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()

    const isValid = validateForm()
    if (!isValid) return

    setShowConfirmation(true)
  }

  const handleConfirm = async () => {
    setIsLoading(true)
    setStatus("processing")

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    try {
      // Simulate API call
      await delay(2000)

      clearInterval(interval)
      setProgress(100)

      setStatus("success")

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/dashboard")
      }, 1500)
    } catch (err) {
      clearInterval(interval)
      setStatus("error")
      setErrorMessage("Failed to process transfer. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setShowConfirmation(false)
  }

  const selectRecipient = (contact: string) => {
    setRecipient(contact)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Send Money" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-md">
          <Card className="hover-lift">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
              <CardTitle>Send Money</CardTitle>
              <Tagline className="text-blue-100" />
            </CardHeader>
            <CardContent className="pt-6">
              {!showConfirmation ? (
                <form onSubmit={handleContinue} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipient">Recipient</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="recipient"
                        placeholder="Phone number or email"
                        className="pl-10 input-focus-animation"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">Enter the recipient's phone number or email address</p>
                  </div>

                  {recentRecipients.length > 0 && (
                    <div className="space-y-2">
                      <Label>Recent Recipients</Label>
                      <div className="flex flex-wrap gap-2">
                        {recentRecipients.map((recipient) => (
                          <Button
                            key={recipient.id}
                            type="button"
                            variant="outline"
                            className="flex items-center gap-2 h-auto py-2 animate-button-press"
                            onClick={() => selectRecipient(recipient.contact)}
                          >
                            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                              <User className="h-4 w-4" />
                            </div>
                            <span className="text-sm">{recipient.name}</span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount</Label>
                      <Input
                        id="amount"
                        placeholder="0.00"
                        className="input-focus-animation"
                        value={amount}
                        onChange={handleAmountChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select value={currency} onValueChange={setCurrency}>
                        <SelectTrigger id="currency" className="input-focus-animation">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="GYD">GYD</SelectItem>
                          <SelectItem value="USD">USD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {status === "error" && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{errorMessage}</AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    className="w-full amazon-button-primary animate-button-press"
                    disabled={!recipient || !amount || Number.parseFloat(amount) <= 0}
                  >
                    Continue
                  </Button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="font-medium mb-2">Confirm Transfer</h3>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">From</span>
                        <span className="font-medium">Your Cards2Cash Wallet</span>
                      </div>

                      <div className="flex justify-center my-2">
                        <ArrowRight className="h-5 w-5" />
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm">To</span>
                        <div className="flex items-center">
                          <User className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{recipient}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-sm font-medium">Amount</span>
                        <span className="font-bold">{formatCurrency(Number.parseFloat(amount) || 0, currency)}</span>
                      </div>
                    </div>
                  </div>

                  {status === "processing" && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Processing transfer...</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} className="animate-progress" />
                    </div>
                  )}

                  {status === "success" && (
                    <Alert className="bg-green-50 border-green-200">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <AlertTitle className="text-green-500">Success!</AlertTitle>
                      <AlertDescription>Your transfer has been processed successfully.</AlertDescription>
                    </Alert>
                  )}

                  {status === "error" && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{errorMessage}</AlertDescription>
                    </Alert>
                  )}

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 animate-button-press"
                      onClick={handleCancel}
                      disabled={isLoading || status === "success"}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="flex-1 amazon-button-primary animate-button-press"
                      onClick={handleConfirm}
                      disabled={isLoading || status === "success"}
                    >
                      {isLoading ? "Processing..." : "Confirm Transfer"}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-xs text-muted-foreground">
                The recipient will receive a notification to claim the funds
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
