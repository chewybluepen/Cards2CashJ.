"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { formatCurrency } from "@/lib/utils"
import { getCryptoById, type Cryptocurrency } from "@/lib/crypto-data"
import { ArrowLeft, AlertCircle, CheckCircle2, LineChart } from "lucide-react"
import Image from "next/image"
import { HelperTip } from "@/components/ui/helper-tip"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CryptoTradePage() {
  const router = useRouter()
  const params = useParams()
  const [crypto, setCrypto] = useState<Cryptocurrency | null>(null)
  const [loading, setLoading] = useState(true)
  const [tradeType, setTradeType] = useState<"market" | "limit" | "stop">("market")
  const [orderType, setOrderType] = useState<"buy" | "sell">("buy")
  const [amount, setAmount] = useState("")
  const [limitPrice, setLimitPrice] = useState("")
  const [stopPrice, setStopPrice] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [timeframe, setTimeframe] = useState("1d")

  useEffect(() => {
    if (params.id) {
      const cryptoData = getCryptoById(params.id as string)
      if (cryptoData) {
        setCrypto(cryptoData)
        setLimitPrice(cryptoData.currentPrice.toString())
        setStopPrice(cryptoData.currentPrice.toString())
      }
      setLoading(false)
    }
  }, [params.id])

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

  const calculateTotal = (inputAmount: string, price: number): string => {
    if (!inputAmount) return "0.00"
    const numAmount = Number.parseFloat(inputAmount)
    if (isNaN(numAmount)) return "0.00"

    if (orderType === "buy") {
      return (numAmount * price).toFixed(2)
    } else {
      return (numAmount * price).toFixed(2)
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

  const handleLimitPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, "")
    setLimitPrice(value)

    // Reset status when user types
    if (status !== "idle") {
      setStatus("idle")
      setProgress(0)
      setErrorMessage("")
    }
  }

  const handleStopPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, "")
    setStopPrice(value)

    // Reset status when user types
    if (status !== "idle") {
      setStatus("idle")
      setProgress(0)
      setErrorMessage("")
    }
  }

  const handlePlaceOrder = async () => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      setStatus("error")
      setErrorMessage("Please enter a valid amount")
      return
    }

    if (tradeType === "limit" && (!limitPrice || Number.parseFloat(limitPrice) <= 0)) {
      setStatus("error")
      setErrorMessage("Please enter a valid limit price")
      return
    }

    if (tradeType === "stop" && (!stopPrice || Number.parseFloat(stopPrice) <= 0)) {
      setStatus("error")
      setErrorMessage("Please enter a valid stop price")
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
      setErrorMessage("Order placement failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title={`Trade ${crypto.name}`} />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-6xl">
          <Button variant="outline" size="sm" onClick={() => router.back()} className="mb-6 animate-button-press">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={crypto.logo || "/placeholder.svg"}
                        alt={crypto.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <CardTitle>
                          {crypto.name} ({crypto.symbol})
                        </CardTitle>
                        <CardDescription>
                          {formatCurrency(crypto.currentPrice, "USD")}
                          <span className={`ml-2 ${crypto.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                            {crypto.change24h >= 0 ? "+" : ""}
                            {crypto.change24h}%
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Select value={timeframe} onValueChange={setTimeframe}>
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1h">1H</SelectItem>
                          <SelectItem value="4h">4H</SelectItem>
                          <SelectItem value="1d">1D</SelectItem>
                          <SelectItem value="1w">1W</SelectItem>
                          <SelectItem value="1m">1M</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center bg-muted/30 rounded-lg">
                    {/* In a real app, this would be a trading chart component */}
                    <div className="text-center">
                      <LineChart className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">Interactive trading chart would be displayed here</p>
                      <p className="text-xs text-muted-foreground">
                        Showing {timeframe} timeframe for {crypto.symbol}/USD
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Place Order</CardTitle>
                  <CardDescription>Current price: {formatCurrency(crypto.currentPrice, "USD")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {status === "success" ? (
                    <div className="text-center py-6">
                      <CheckCircle2 className="h-16 w-16 mx-auto text-green-500 mb-4" />
                      <h2 className="text-xl font-bold mb-2">Order Placed!</h2>
                      <p className="text-muted-foreground mb-6">
                        Your {orderType} order for {amount} {crypto.symbol} has been placed successfully.
                      </p>
                      <div className="space-y-3">
                        <Button
                          className="w-full animate-button-press"
                          onClick={() => router.push(`/crypto/${crypto.id}`)}
                        >
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
                      <Tabs defaultValue="buy" onValueChange={(value) => setOrderType(value as "buy" | "sell")}>
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger
                            value="buy"
                            className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
                          >
                            Buy
                          </TabsTrigger>
                          <TabsTrigger
                            value="sell"
                            className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
                          >
                            Sell
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Order Type</Label>
                          <Select
                            value={tradeType}
                            onValueChange={(value) => setTradeType(value as "market" | "limit" | "stop")}
                          >
                            <SelectTrigger className="input-focus-animation">
                              <SelectValue placeholder="Select order type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="market">Market Order</SelectItem>
                              <SelectItem value="limit">Limit Order</SelectItem>
                              <SelectItem value="stop">Stop Order</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Amount ({crypto.symbol})</Label>
                          <Input
                            placeholder="0.00"
                            className="input-focus-animation"
                            value={amount}
                            onChange={handleAmountChange}
                            disabled={isProcessing}
                          />
                        </div>

                        {tradeType === "limit" && (
                          <div className="space-y-2">
                            <Label>Limit Price (USD)</Label>
                            <Input
                              placeholder="0.00"
                              className="input-focus-animation"
                              value={limitPrice}
                              onChange={handleLimitPriceChange}
                              disabled={isProcessing}
                            />
                          </div>
                        )}

                        {tradeType === "stop" && (
                          <div className="space-y-2">
                            <Label>Stop Price (USD)</Label>
                            <Input
                              placeholder="0.00"
                              className="input-focus-animation"
                              value={stopPrice}
                              onChange={handleStopPriceChange}
                              disabled={isProcessing}
                            />
                          </div>
                        )}

                        <Separator />

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Estimated Total</span>
                            <span>
                              {formatCurrency(
                                Number.parseFloat(
                                  calculateTotal(
                                    amount,
                                    tradeType === "limit"
                                      ? Number.parseFloat(limitPrice)
                                      : tradeType === "stop"
                                        ? Number.parseFloat(stopPrice)
                                        : crypto.currentPrice,
                                  ),
                                ) || 0,
                                "USD",
                              )}
                            </span>
                          </div>
                        </div>

                        {status === "processing" && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span>Processing order...</span>
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
                          className={`w-full animate-button-press ${
                            orderType === "buy" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                          } text-white`}
                          onClick={handlePlaceOrder}
                          disabled={isProcessing || !amount || Number.parseFloat(amount) <= 0}
                        >
                          {isProcessing ? "Processing..." : `${orderType === "buy" ? "Buy" : "Sell"} ${crypto.symbol}`}
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
                <CardFooter className="flex justify-center">
                  <p className="text-xs text-muted-foreground">Trading involves risk. Please trade responsibly.</p>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Order Book</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-green-500 mb-2">Bids (Buy)</h3>
                    <div className="space-y-1">
                      {[...Array(10)].map((_, i) => {
                        const price = crypto.currentPrice * (1 - i * 0.001)
                        const amount = Math.random() * 10
                        return (
                          <div key={`bid-${i}`} className="flex justify-between text-sm">
                            <span className="text-green-500">{price.toFixed(2)}</span>
                            <span>{amount.toFixed(4)}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-red-500 mb-2">Asks (Sell)</h3>
                    <div className="space-y-1">
                      {[...Array(10)].map((_, i) => {
                        const price = crypto.currentPrice * (1 + i * 0.001)
                        const amount = Math.random() * 10
                        return (
                          <div key={`ask-${i}`} className="flex justify-between text-sm">
                            <span className="text-red-500">{price.toFixed(2)}</span>
                            <span>{amount.toFixed(4)}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recent Trades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {[...Array(15)].map((_, i) => {
                    const price = crypto.currentPrice * (1 + (Math.random() * 0.01 - 0.005))
                    const amount = Math.random() * 5
                    const isBuy = Math.random() > 0.5
                    const time = new Date()
                    time.setMinutes(time.getMinutes() - i)

                    return (
                      <div key={`trade-${i}`} className="flex justify-between text-sm">
                        <span className={isBuy ? "text-green-500" : "text-red-500"}>{price.toFixed(2)}</span>
                        <span>{amount.toFixed(4)}</span>
                        <span className="text-muted-foreground">
                          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <MobileNav />
      <HelperTip
        position="bottom-right"
        message="Use market orders for immediate execution at the current price, limit orders to buy/sell at a specific price, or stop orders to trigger when a price is reached."
        delay={3000}
      />
    </div>
  )
}
