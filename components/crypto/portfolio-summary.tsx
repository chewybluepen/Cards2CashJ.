"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

interface PortfolioSummaryProps {
  isLoading: boolean
}

export function PortfolioSummary({ isLoading }: PortfolioSummaryProps) {
  const [portfolioValue, setPortfolioValue] = useState(12567.89)
  const [portfolioChange, setPortfolioChange] = useState(3.45)
  const [portfolioChangeAmount, setPortfolioChangeAmount] = useState(420.32)

  // Simulate real-time updates
  useEffect(() => {
    if (isLoading) return

    const interval = setInterval(() => {
      // Random small fluctuation between -0.5% and +0.5%
      const fluctuation = (Math.random() - 0.5) * 0.005
      const newChange = portfolioChange + fluctuation
      const newChangeAmount = portfolioChangeAmount * (1 + fluctuation)
      const newValue = portfolioValue * (1 + fluctuation)

      setPortfolioChange(Number.parseFloat(newChange.toFixed(2)))
      setPortfolioChangeAmount(Number.parseFloat(newChangeAmount.toFixed(2)))
      setPortfolioValue(Number.parseFloat(newValue.toFixed(2)))
    }, 15000) // Update every 15 seconds

    return () => clearInterval(interval)
  }, [isLoading, portfolioValue, portfolioChange, portfolioChangeAmount])

  return (
    <Card className="mb-6 amazon-card">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-2">
          <div className="text-sm font-medium text-muted-foreground">Total Portfolio Value</div>
          {isLoading ? (
            <Skeleton className="h-10 w-40" />
          ) : (
            <div className="text-3xl font-bold">${portfolioValue.toLocaleString()}</div>
          )}

          {isLoading ? (
            <Skeleton className="h-6 w-32" />
          ) : (
            <div className="flex items-center space-x-2">
              <Badge variant={portfolioChange >= 0 ? "success" : "destructive"} className="px-1.5 py-0.5">
                <span className="flex items-center">
                  {portfolioChange >= 0 ? (
                    <ArrowUpRight className="mr-1 h-3.5 w-3.5" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-3.5 w-3.5" />
                  )}
                  {portfolioChange}%
                </span>
              </Badge>
              <span className={`text-sm ${portfolioChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                {portfolioChange >= 0 ? "+" : ""}
                {portfolioChangeAmount.toLocaleString()} Today
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
