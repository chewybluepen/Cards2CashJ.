"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/header"
import { BottomTabBar } from "@/components/layout/bottom-tab-bar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RefreshCw, Plus, Clock, TrendingUp, BarChart3, Wallet, Lock, AlertCircle, ChevronRight } from "lucide-react"
import { PortfolioSummary } from "@/components/crypto/portfolio-summary"
import { AssetsList } from "@/components/crypto/assets-list"
import { TransactionHistory } from "@/components/crypto/transaction-history"
import { PortfolioChart } from "@/components/crypto/portfolio-chart"
import { PortfolioStats } from "@/components/crypto/portfolio-stats"
import { useBiometricAuth } from "@/contexts/biometric-auth-context"
import { BiometricAuthDialog } from "@/components/auth/biometric-auth-dialog"
import { useToast } from "@/hooks/use-toast"

export default function CryptoPortfolioPage() {
  const { toast } = useToast()
  const { biometricCapability, authenticateWithBiometric } = useBiometricAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isLocked, setIsLocked] = useState(true)
  const [showBiometricDialog, setShowBiometricDialog] = useState(false)
  const [timeRange, setTimeRange] = useState<"1d" | "1w" | "1m" | "3m" | "1y" | "all">("1m")

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Handle portfolio refresh
  const handleRefresh = () => {
    setIsRefreshing(true)

    // Simulate refresh delay
    setTimeout(() => {
      setIsRefreshing(false)
      toast({
        title: "Portfolio Updated",
        description: "Your portfolio data has been refreshed with the latest market information.",
      })
    }, 1000)
  }

  // Handle biometric authentication
  const handleUnlock = () => {
    if (biometricCapability.available) {
      setShowBiometricDialog(true)
    } else {
      // Fallback for when biometrics aren't available
      setIsLocked(false)
      toast({
        title: "Portfolio Unlocked",
        description: "You now have full access to your portfolio.",
      })
    }
  }

  const handleBiometricSuccess = () => {
    setShowBiometricDialog(false)
    setIsLocked(false)
    toast({
      title: "Authentication Successful",
      description: "Your portfolio has been unlocked.",
    })
  }

  const handleBiometricError = (error: string) => {
    setShowBiometricDialog(false)
    toast({
      title: "Authentication Failed",
      description: error,
      variant: "destructive",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Crypto Portfolio" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-4xl">
          {isLocked ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-6 rounded-full bg-muted p-6">
                <Lock className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Portfolio Locked</h2>
              <p className="mb-6 text-muted-foreground">
                Your portfolio is locked for security. Please authenticate to view your assets.
              </p>
              <Button onClick={handleUnlock} className="animate-button-press" size="lg">
                {biometricCapability.type === "fingerprint" ? (
                  <>Use Fingerprint to Unlock</>
                ) : biometricCapability.type === "face" ? (
                  <>Use Face ID to Unlock</>
                ) : (
                  <>Unlock Portfolio</>
                )}
              </Button>
            </div>
          ) : (
            <>
              {/* Portfolio Header */}
              <div className="mb-6 flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    className="animate-button-press"
                  >
                    <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
                    {isRefreshing ? "Refreshing..." : "Refresh"}
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="animate-button-press"
                    onClick={() => (window.location.href = "/crypto")}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Assets
                  </Button>
                </div>
              </div>

              {/* Portfolio Summary */}
              <PortfolioSummary isLoading={isLoading} />

              {/* Portfolio Chart */}
              <Card className="mb-6 amazon-card">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>Portfolio Performance</CardTitle>
                    <div className="flex space-x-1">
                      {(["1d", "1w", "1m", "3m", "1y", "all"] as const).map((range) => (
                        <Button
                          key={range}
                          variant={timeRange === range ? "default" : "outline"}
                          size="sm"
                          className="h-7 px-2 text-xs"
                          onClick={() => setTimeRange(range)}
                        >
                          {range}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <CardDescription>
                    {timeRange === "1d" && "Last 24 hours"}
                    {timeRange === "1w" && "Last 7 days"}
                    {timeRange === "1m" && "Last 30 days"}
                    {timeRange === "3m" && "Last 3 months"}
                    {timeRange === "1y" && "Last 12 months"}
                    {timeRange === "all" && "All time"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? <Skeleton className="h-[300px] w-full" /> : <PortfolioChart timeRange={timeRange} />}
                </CardContent>
              </Card>

              {/* Portfolio Stats */}
              <PortfolioStats isLoading={isLoading} />

              {/* Portfolio Tabs */}
              <Tabs defaultValue="assets" className="mt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="assets">Assets</TabsTrigger>
                  <TabsTrigger value="transactions">Transactions</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                </TabsList>

                <TabsContent value="assets">
                  <AssetsList isLoading={isLoading} />
                </TabsContent>

                <TabsContent value="transactions">
                  <TransactionHistory isLoading={isLoading} />
                </TabsContent>

                <TabsContent value="insights">
                  <Card className="amazon-card">
                    <CardHeader>
                      <CardTitle>Portfolio Insights</CardTitle>
                      <CardDescription>Analytics and recommendations based on your portfolio</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {isLoading ? (
                        <div className="space-y-4">
                          <Skeleton className="h-20 w-full" />
                          <Skeleton className="h-20 w-full" />
                          <Skeleton className="h-20 w-full" />
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Alert>
                            <TrendingUp className="h-4 w-4" />
                            <AlertDescription>
                              Your portfolio is up 12.5% this month, outperforming the market by 3.2%.
                            </AlertDescription>
                          </Alert>

                          <Alert>
                            <BarChart3 className="h-4 w-4" />
                            <AlertDescription>
                              Your portfolio diversity score is 7.2/10. Consider adding more altcoins for better
                              diversification.
                            </AlertDescription>
                          </Alert>

                          <Alert>
                            <Wallet className="h-4 w-4" />
                            <AlertDescription>
                              You have 5% of your portfolio in stablecoins. This provides good liquidity for market
                              opportunities.
                            </AlertDescription>
                          </Alert>

                          <Alert>
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>
                              Bitcoin dominance is increasing. Consider rebalancing your portfolio to increase BTC
                              allocation.
                            </AlertDescription>
                          </Alert>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Quick Actions */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Button
                  variant="outline"
                  className="flex justify-between animate-button-press"
                  onClick={() => (window.location.href = "/crypto/portfolio/performance")}
                >
                  <span className="flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Performance
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  className="flex justify-between animate-button-press"
                  onClick={() => (window.location.href = "/crypto/portfolio/allocation")}
                >
                  <span className="flex items-center">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Allocation
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  className="flex justify-between animate-button-press"
                  onClick={() => (window.location.href = "/crypto/portfolio/history")}
                >
                  <span className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    History
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
      <BottomTabBar />

      {/* Biometric Authentication Dialog */}
      <BiometricAuthDialog
        open={showBiometricDialog}
        onClose={() => setShowBiometricDialog(false)}
        onSuccess={handleBiometricSuccess}
        onError={handleBiometricError}
        biometricType={biometricCapability.type}
      />
    </div>
  )
}
