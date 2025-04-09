"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface PortfolioStatsProps {
  isLoading: boolean
}

export function PortfolioStats({ isLoading }: PortfolioStatsProps) {
  const stats = [
    { label: "Total Assets", value: "8" },
    { label: "Best Performer", value: "SOL +18.2%" },
    { label: "Worst Performer", value: "XRP -5.4%" },
    { label: "24h Change", value: "+$420.32" },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="amazon-card">
          <CardContent className="p-4">
            <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            {isLoading ? (
              <Skeleton className="mt-1 h-6 w-16" />
            ) : (
              <div className="mt-1 text-xl font-bold">{stat.value}</div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
