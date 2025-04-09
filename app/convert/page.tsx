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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { delay, formatCurrency } from "@/lib/utils"
import { AlertCircle, ArrowRight, CheckCircle2, RefreshCw } from "lucide-react"
import { CurrencySelector } from "@/components/ui/currency-selector"
import { HelperTip } from "@/components/ui/helper-tip"

export default function ConvertPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [fromCurrency, setFromCurrency] = useState("GYD")
  const [toCurrency, setToCurrency] = useState("USD")
  const [amount, setAmount] = useState("")
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<"idle" | "converting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [fee, setFee] = useState(0)

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, "")
    setAmount(value)

    // Reset status when user types
    if (status !== "idle") {
      setStatus("idle")
      setProgress(0)
      setErrorMessage("")
      setConvertedAmount(null)
    }

    // Calculate converted amount in real-time
    if (value) {
      const rate = getExchangeRate(fromCurrency, toCurrency)
      const converted = Number.parseFloat(value) * rate
      setConvertedAmount(converted)

      // Calculate fee (0.5% of the amount)
      setFee(Number.parseFloat(value) * 0.005)
    } else {
      setConvertedAmount(null)
      setFee(0)
    }
  }

  const handleFromCurrencyChange = (value: string) => {
    setFromCurrency(value)

    // Recalculate converted amount
    if (amount) {
      const rate = getExchangeRate(value, toCurrency)
      const converted = Number.parseFloat(amount) * rate
      setConvertedAmount(converted)

      // Recalculate fee
      setFee(Number.parseFloat(amount) * 0.005)
    }
  }

  const handleToCurrencyChange = (value: string) => {
    setToCurrency(value)

    // Recalculate converted amount
    if (amount) {
      const rate = getExchangeRate(fromCurrency, value)
      const converted = Number.parseFloat(amount) * rate
      setConvertedAmount(converted)
    }
  }

  const validateForm = () => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      setErrorMessage("Please enter a valid amount")
      setStatus("error")
      return false
    }

    if (Number.parseFloat(amount) > 10000) {
      setErrorMessage("Maximum conversion amount is 10,000 GYD")
      setStatus("error")
      return false
    }

    return true
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()

    const isValid = validateForm()
    if (!isValid) return

    // Show confirmation screen
    setShowConfirmation(true)
  }

  const handleConfirm = async () => {
    setIsLoading(true)
    setStatus("converting")

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
      setErrorMessage("Failed to convert currency. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setShowConfirmation(false)
  }

  // Mock function to get exchange rate
  const getExchangeRate = (from: string, to: string): number => {
    // In a real app, this would come from an API
    const rates: Record<string, Record<string, number>> = {
      GYD: {
        USD: 0.0048,
        EUR: 0.0044,
        GBP: 0.0038,
        CAD: 0.0065,
        AUD: 0.0072,
        JPY: 0.53,
      },
      USD: {
        GYD: 209.73,
        EUR: 0.92,
        GBP: 0.79,
        CAD: 1.35,
        AUD: 1.5,
        JPY: 110.45,
      },
      EUR: {
        GYD: 228.15,
        USD: 1.09,
        GBP: 0.86,
        CAD: 1.47,
        AUD: 1.63,
        JPY: 120.25,
      },
      GBP: {
        GYD: 265.29,
        USD: 1.27,
        EUR: 1.16,
        CAD: 1.71,
        AUD: 1.9,
        JPY: 139.83,
      },
      CAD: {
        GYD: 155.36,
        USD: 0.74,
        EUR: 0.68,
        GBP: 0.58,
        AUD: 1.11,
        JPY: 81.82,
      },
      AUD: {
        GYD: 139.82,
        USD: 0.67,
        EUR: 0.61,
        GBP: 0.53,
        CAD: 0.9,
        JPY: 73.63,
      },
      JPY: {
        GYD: 1.9,
        USD: 0.0091,
        EUR: 0.0083,
        GBP: 0.0072,
        CAD: 0.012,
        AUD: 0.014,
      },
    }

    // Default to 1 if rate not found
    return rates[from]?.[to] || 1
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Currency Conversion" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-md">
          <Card>
            <CardHeader className="pb-3 bg-gradient-to-r from-amazon-blue to-amazon-secondary text-white">
              <CardTitle>Convert Currency</CardTitle>
              <CardDescription className="text-amazon-accent">
                Convert between currencies with real-time rates
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {!showConfirmation ? (
                <form onSubmit={handleCalculate} className="space-y-5">
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

                  <div className="grid grid-cols-5 gap-3 items-center">
                    <div className="col-span-2">
                      <Label htmlFor="from-currency">From</Label>
                      <CurrencySelector
                        value={fromCurrency}
                        onValueChange={handleFromCurrencyChange}
                        placeholder="From"
                      />
                    </div>

                    <div className="flex justify-center items-center">
                      <ArrowRight className="h-5 w-5" />
                    </div>

                    <div className="col-span-2">
                      <Label htmlFor="to-currency">To</Label>
                      <CurrencySelector value={toCurrency} onValueChange={handleToCurrencyChange} placeholder="To" />
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Exchange Rate</span>
                      <span className="font-medium">
                        1 {fromCurrency} = {getExchangeRate(fromCurrency, toCurrency)} {toCurrency}
                      </span>
                    </div>

                    {convertedAmount !== null && (
                      <>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-sm">Converted Amount</span>
                          <span className="font-medium">{formatCurrency(convertedAmount, toCurrency)}</span>
                        </div>

                        <div className="flex justify-between items-center mt-3">
                          <span className="text-sm">Fee (0.5%)</span>
                          <span className="font-medium">{formatCurrency(fee, fromCurrency)}</span>
                        </div>

                        <div className="flex justify-between items-center mt-3 pt-3 border-t">
                          <span className="text-sm font-medium">You'll Receive</span>
                          <span className="font-bold">{formatCurrency(convertedAmount, toCurrency)}</span>
                        </div>
                      </>
                    )}
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
                    disabled={!amount || Number.parseFloat(amount) <= 0}
                  >
                    Continue
                  </Button>
                </form>
              ) : (
                <div className="space-y-5">
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="font-medium mb-3">Confirm Conversion</h3>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">You're Converting</span>
                        <span className="font-medium">{formatCurrency(Number.parseFloat(amount), fromCurrency)}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm">Exchange Rate</span>
                        <span className="font-medium">
                          1 {fromCurrency} = {getExchangeRate(fromCurrency, toCurrency)} {toCurrency}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm">Fee (0.5%)</span>
                        <span className="font-medium">{formatCurrency(fee, fromCurrency)}</span>
                      </div>

                      <div className="flex justify-between items-center pt-3 border-t">
                        <span className="text-sm font-medium">You'll Receive</span>
                        <span className="font-bold">
                          {convertedAmount !== null && formatCurrency(convertedAmount, toCurrency)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {status === "converting" && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Converting currency...</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} className="animate-progress" />
                    </div>
                  )}

                  {status === "success" && (
                    <Alert className="bg-green-50 border-green-200">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <AlertTitle className="text-green-500">Success!</AlertTitle>
                      <AlertDescription>Your currency has been converted successfully.</AlertDescription>
                    </Alert>
                  )}

                  {status === "error" && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{errorMessage}</AlertDescription>
                    </Alert>
                  )}

                  <div className="flex gap-3">
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
                      {isLoading ? "Converting..." : "Confirm"}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="flex items-center text-xs text-muted-foreground">
                <RefreshCw className="mr-1 h-4 w-4" />
                Rates updated every 60 minutes
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <BottomTabBar />
      <HelperTip
        position="bottom-right"
        message="Convert between any currencies with real-time rates. We support all major world currencies."
        delay={2000}
      />
    </div>
  )
}
