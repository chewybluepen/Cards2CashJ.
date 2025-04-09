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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  delay,
  formatCardNumber,
  formatCurrency,
  generateCardNumber,
  generateCVV,
  generateExpiryDate,
} from "@/lib/utils"
import { AlertCircle, CheckCircle2, CreditCard, Shield } from "lucide-react"

export default function GenerateCardPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [cardType, setCardType] = useState("visa")
  const [cardUsage, setCardUsage] = useState("single")
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState("GYD")
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<"idle" | "generating" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [generatedCard, setGeneratedCard] = useState<{
    number: string
    expiryDate: string
    cvv: string
    amount: number
    currency: string
  } | null>(null)

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, "")
    setAmount(value)

    // Reset status when user types
    if (status !== "idle") {
      setStatus("idle")
      setProgress(0)
      setErrorMessage("")
      setGeneratedCard(null)
    }
  }

  const validateForm = () => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      setErrorMessage("Please enter a valid amount")
      setStatus("error")
      return false
    }

    if (Number.parseFloat(amount) > 5000) {
      setErrorMessage("Maximum card amount is 5,000 GYD")
      setStatus("error")
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const isValid = validateForm()
    if (!isValid) return

    setIsLoading(true)
    setStatus("generating")

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

      // Generate card details
      const cardNumber = generateCardNumber()
      const expiryDate = generateExpiryDate()
      const cvv = generateCVV()

      setGeneratedCard({
        number: cardNumber,
        expiryDate,
        cvv,
        amount: Number.parseFloat(amount),
        currency,
      })

      setStatus("success")
    } catch (err) {
      clearInterval(interval)
      setStatus("error")
      setErrorMessage("Failed to generate card. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Generate Virtual Card" />
      <main className="flex-1 p-4 pb-24 md:pb-8">
        <div className="mx-auto max-w-md">
          <Tabs defaultValue="generate" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="generate" className="animate-button-press">
                Generate Card
              </TabsTrigger>
              <TabsTrigger value="view" className="animate-button-press">
                View Card
              </TabsTrigger>
            </TabsList>
            <TabsContent value="generate">
              <Card>
                <CardHeader>
                  <CardTitle>Generate Virtual Card</CardTitle>
                  <CardDescription>Create a virtual card for online shopping</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label>Card Type</Label>
                      <RadioGroup
                        defaultValue="visa"
                        value={cardType}
                        onValueChange={setCardType}
                        className="grid grid-cols-3 gap-4"
                      >
                        <div>
                          <RadioGroupItem value="visa" id="visa" className="peer sr-only" />
                          <Label
                            htmlFor="visa"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <CreditCard className="mb-3 h-6 w-6" />
                            Visa
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="mastercard" id="mastercard" className="peer sr-only" />
                          <Label
                            htmlFor="mastercard"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <CreditCard className="mb-3 h-6 w-6" />
                            MasterCard
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="amex" id="amex" className="peer sr-only" />
                          <Label
                            htmlFor="amex"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <CreditCard className="mb-3 h-6 w-6" />
                            Amex
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label>Card Usage</Label>
                      <RadioGroup
                        defaultValue="single"
                        value={cardUsage}
                        onValueChange={setCardUsage}
                        className="grid grid-cols-2 gap-4"
                      >
                        <div>
                          <RadioGroupItem value="single" id="single" className="peer sr-only" />
                          <Label
                            htmlFor="single"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            Single-Use
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="recurring" id="recurring" className="peer sr-only" />
                          <Label
                            htmlFor="recurring"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            Recurring
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

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

                    {status === "generating" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Generating card...</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="animate-progress" />
                      </div>
                    )}

                    {status === "success" && (
                      <Alert className="bg-green-50 border-green-200">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <AlertTitle className="text-green-500">Success!</AlertTitle>
                        <AlertDescription>Your virtual card has been generated.</AlertDescription>
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
                      {isLoading ? "Generating..." : "Generate Card"}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Shield className="mr-1 h-4 w-4" />
                    Secured by Cards2Cash encryption
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="view">
              <Card>
                <CardHeader>
                  <CardTitle>Your Virtual Card</CardTitle>
                  <CardDescription>View your generated virtual card details</CardDescription>
                </CardHeader>
                <CardContent>
                  {generatedCard ? (
                    <div className="space-y-6">
                      <div className="card-flip">
                        <div className="card-flip-inner">
                          <div className="relative h-56 w-full rounded-xl bg-gradient-to-r from-brand-blue to-brand-lightBlue p-6 text-white shadow-lg">
                            <div className="absolute top-4 right-4 flex h-10 w-16 items-center justify-center rounded bg-white/10 backdrop-blur-sm">
                              {cardType === "visa" && <span className="font-bold text-lg">VISA</span>}
                              {cardType === "mastercard" && <span className="font-bold text-lg">MC</span>}
                              {cardType === "amex" && <span className="font-bold text-lg">AMEX</span>}
                            </div>
                            <div className="mt-10">
                              <p className="text-sm opacity-75">Card Number</p>
                              <p className="font-mono text-xl tracking-wider">
                                {formatCardNumber(generatedCard.number)}
                              </p>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm opacity-75">Expiry Date</p>
                                <p className="font-mono">{generatedCard.expiryDate}</p>
                              </div>
                              <div>
                                <p className="text-sm opacity-75">CVV</p>
                                <p className="font-mono">{generatedCard.cvv}</p>
                              </div>
                            </div>
                            <div className="mt-4">
                              <p className="text-sm opacity-75">Amount</p>
                              <p className="font-mono">
                                {formatCurrency(generatedCard.amount, generatedCard.currency)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Card Number</Label>
                          <div className="flex">
                            <Input value={formatCardNumber(generatedCard.number)} readOnly className="font-mono" />
                            <Button
                              variant="outline"
                              className="ml-2"
                              onClick={() => navigator.clipboard.writeText(generatedCard.number)}
                            >
                              Copy
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Expiry Date</Label>
                            <Input value={generatedCard.expiryDate} readOnly className="font-mono" />
                          </div>
                          <div className="space-y-2">
                            <Label>CVV</Label>
                            <Input value={generatedCard.cvv} readOnly className="font-mono" />
                          </div>
                        </div>

                        <Alert className="bg-blue-50 border-blue-200">
                          <AlertDescription className="text-sm">
                            This card is for {cardUsage === "single" ? "single-use" : "recurring"} payments.
                            {cardUsage === "single" && " It will be deactivated after one transaction."}
                          </AlertDescription>
                        </Alert>
                      </div>
                    </div>
                  ) : (
                    <div className="py-8 text-center">
                      <p className="text-muted-foreground">
                        No virtual card generated yet. Go to the "Generate Card" tab to create one.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <BottomTabBar />
    </div>
  )
}
