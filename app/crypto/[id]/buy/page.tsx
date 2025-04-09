"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { formatCurrency } from "@/lib/utils"
import { getCryptoById, type Cryptocurrency } from "@/lib/crypto-data"
import { ArrowLeft, CheckCircle2, CreditCard, DollarSign, AlertCircle, Wallet } from "lucide-react"
import Image from "next/image"
import { HelperTip } from "@/components/ui/helper-tip"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CryptoBuyPage() {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const [crypto, setCrypto] = useState<Cryptocurrency | null>(null)
  const [loading, setLoading] = useState(true)
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("wallet")
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    if (params.id) {
      const cryptoData = getCryptoById(params.id as string)
      if (cryptoData) {
        setCrypto(cryptoData)

        // Get amount from URL if provided
        const amountParam = searchParams.get("amount")
        if (amountParam) {
          setAmount(amountParam)
        }
      }
      setLoading(false)
    }
  }, [params.id, searchParams])

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header title="Loading..." />
        <main className="flex-1 p-4 pb-20 md:pb-4 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </main>
        <MobileNav />
      </div>
    )
  }

  if (!crypto) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header title="Cryptocurrency Not Found" />
        <main className="flex-1 p-4 pb-20 md:pb-4">
          <div className="mx-auto max-w-3xl text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Cryptocurrency Not Found</h1>
            <p className="mb-6">The cryptocurrency you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => router.push("/crypto")} className="animate-button-press">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cryptocurrencies
            </Button>
          </div>
        </main>
        <MobileNav />
      </div>
    )
  }

  const calculateReceiveAmount = (inputAmount: string, price: number): string => {
    if (!inputAmount) return "0.00"
    const numAmount = Number.parseFloat(inputAmount)
    if (isNaN(numAmount)) return "0.00"
    return (numAmount / price).toFixed(8)
  }

  const calculateFee = (inputAmount: string): string => {
    if (!inputAmount) return "0.00"
    const numAmount = Number.parseFloat(inputAmount)
    if (isNaN(numAmount)) return "0.00"
    // 1% fee
    return (numAmount * 0.01).toFixed(2)
  }

  const calculateTotal = (inputAmount: string): string => {
    if (!inputAmount) return "0.00"
    const numAmount = Number.parseFloat(inputAmount)
    if (isNaN(numAmount)) return "0.00"
    // Add 1% fee
    return (numAmount * 1.01).toFixed(2)
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

  const handleBuy = async () => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      setStatus("error")
      setErrorMessage("Please enter a valid amount")
      return
    }

    setIsProcessing(true)
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
      await new Promise((resolve) => setTimeout(resolve, 2000))

      clearInterval(interval)
      setProgress(100)
      setStatus("success")

      // In a real app, this would update the user's portfolio
    } catch (error) {
      clearInterval(interval)
      setStatus("error")
      setErrorMessage("Transaction failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title={`Buy ${crypto.name}`} />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-md">
          <Button variant="outline" size="sm" onClick={() => router.back()} className="mb-6 animate-button-press">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <Card>
            <CardHeader className="pb-3 bg-gradient-to-r from-amazon-blue to-amazon-secondary text-white">
              <div className="flex items-center gap-3">
                <Image
                  src={crypto.logo || "/placeholder.svg"}
                  alt={crypto.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <CardTitle>Buy {crypto.name}</CardTitle>
                  <CardDescription className="text-amazon-accent">
                    Current price: {formatCurrency(crypto.currentPrice, "USD")}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {status === "success" ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="h-16 w-16 mx-auto text-green-500 mb-4" />
                  <h2 className="text-xl font-bold mb-2">Purchase Successful!</h2>
                  <p className="text-muted-foreground mb-6">
                    You have successfully purchased {calculateReceiveAmount(amount, crypto.currentPrice)}{" "}
                    {crypto.symbol}.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full animate-button-press" onClick={() => router.push(`/crypto/${crypto.id}`)}>
                      View {crypto.symbol} Details
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full animate-button-press"
                      onClick={() => router.push("/crypto/portfolio")}
                    >
                      View Portfolio
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount (USD)</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="amount" placeholder="0.00" />
                        <Input
                          id="amount"
                          placeholder="0.00"
                          className="pl-10 input-focus-animation"
                          value={amount}
                          onChange={handleAmountChange}
                          disabled={isProcessing}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>You'll receive</Label>
                      <div className="p-3 bg-muted rounded-md font-mono">
                        {calculateReceiveAmount(amount, crypto.currentPrice)} {crypto.symbol}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Payment Method</Label>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="flex items-center space-x-2 rounded-md border p-3">
                          <RadioGroupItem value="wallet" id="wallet" />
                          <Label htmlFor="wallet" className="flex items-center gap-2 cursor-pointer">
                            <Wallet className="h-4 w-4" />
                            Cards2Cash Wallet
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 rounded-md border p-3">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                            <CreditCard className="h-4 w-4" />
                            Credit/Debit Card
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {paymentMethod === "card" && (
                      <div className="space-y-2">
                        <Label>Select Card</Label>
                        <Select defaultValue="new">
                          <SelectTrigger className="input-focus-animation">
                            <SelectValue placeholder="Select a card" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">+ Add New Card</SelectItem>
                            <SelectItem value="visa">Visa ending in 1234</SelectItem>
                            <SelectItem value="mastercard">Mastercard ending in 5678</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{formatCurrency(Number.parseFloat(amount) || 0, "USD")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fee (1%)</span>
                        <span>{formatCurrency(Number.parseFloat(calculateFee(amount)) || 0, "USD")}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>{formatCurrency(Number.parseFloat(calculateTotal(amount)) || 0, "USD")}</span>
                      </div>
                    </div>

                    {status === "processing" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Processing transaction...</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="animate-progress" />
                      </div>
                    )}

                    {status === "error" && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{errorMessage}</AlertDescription>
                      </Alert>
                    )}

                    <Button
                      className="w-full bg-green-500 hover:bg-green-600 text-white animate-button-press"
                      onClick={handleBuy}
                      disabled={isProcessing || !amount || Number.parseFloat(amount) <= 0}
                    >
                      {isProcessing ? "Processing..." : `Buy ${crypto.symbol}`}
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-xs text-muted-foreground">
                By proceeding, you agree to our Terms of Service and Privacy Policy.
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <MobileNav />
      <HelperTip
        position="bottom-right"
        message="You can buy cryptocurrency using your Cards2Cash wallet balance or a credit/debit card."
        delay={2000}
      />
    </div>
  )
}
