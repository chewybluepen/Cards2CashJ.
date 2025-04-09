"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

// Mock transaction history data
const mockTransactions = [
  {
    id: "tx1",
    type: "buy",
    asset: {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      logo: "https://img.icons8.com/color/96/000000/bitcoin.png",
    },
    amount: 0.0325,
    price: 64250.75,
    value: 2088.15,
    date: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    status: "completed",
  },
  {
    id: "tx2",
    type: "sell",
    asset: {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      logo: "https://img.icons8.com/color/96/000000/ethereum.png",
    },
    amount: 0.5,
    price: 3420.3,
    value: 1710.15,
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    status: "completed",
  },
  {
    id: "tx3",
    type: "buy",
    asset: {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      logo: "https://img.icons8.com/color/96/000000/solana.png",
    },
    amount: 5,
    price: 110.25,
    value: 551.25,
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
    status: "completed",
  },
  {
    id: "tx4",
    type: "buy",
    asset: {
      id: "cardano",
      name: "Cardano",
      symbol: "ADA",
      logo: "https://img.icons8.com/color/96/000000/cardano.png",
    },
    amount: 500,
    price: 0.58,
    value: 290.0,
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 7 days ago
    status: "completed",
  },
  {
    id: "tx5",
    type: "sell",
    asset: {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      logo: "https://img.icons8.com/color/96/000000/bitcoin.png",
    },
    amount: 0.015,
    price: 63100.5,
    value: 946.51,
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10), // 10 days ago
    status: "completed",
  },
  {
    id: "tx6",
    type: "buy",
    asset: {
      id: "polkadot",
      name: "Polkadot",
      symbol: "DOT",
      logo: "https://img.icons8.com/color/96/000000/polkadot.png",
    },
    amount: 25,
    price: 12.45,
    value: 311.25,
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14), // 14 days ago
    status: "completed",
  },
  {
    id: "tx7",
    type: "buy",
    asset: {
      id: "xrp",
      name: "XRP",
      symbol: "XRP",
      logo: "https://img.icons8.com/color/96/000000/xrp.png",
    },
    amount: 500,
    price: 0.82,
    value: 410.0,
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 20), // 20 days ago
    status: "completed",
  },
  {
    id: "tx8",
    type: "sell",
    asset: {
      id: "dogecoin",
      name: "Dogecoin",
      symbol: "DOGE",
      logo: "https://img.icons8.com/color/96/000000/dogecoin.png",
    },
    amount: 1000,
    price: 0.14,
    value: 140.0,
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 25), // 25 days ago
    status: "completed",
  },
]

interface TransactionHistoryProps {
  isLoading: boolean
}

export function TransactionHistory({ isLoading }: TransactionHistoryProps) {
  const [filter, setFilter] = useState<"all" | "buy" | "sell">("all")

  // Filter transactions based on current filter
  const filteredTransactions = mockTransactions.filter((tx) => {
    if (filter === "all") return true
    return tx.type === filter
  })

  // Format date to relative time
  const formatRelativeTime = (date: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffSec = Math.floor(diffMs / 1000)
    const diffMin = Math.floor(diffSec / 60)
    const diffHour = Math.floor(diffMin / 60)
    const diffDay = Math.floor(diffHour / 24)

    if (diffDay > 0) {
      return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`
    } else if (diffHour > 0) {
      return `${diffHour} hour${diffHour > 1 ? "s" : ""} ago`
    } else if (diffMin > 0) {
      return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`
    } else {
      return "Just now"
    }
  }

  return (
    <Card className="amazon-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Transaction History</CardTitle>
          <div className="flex items-center space-x-2">
            <Select value={filter} onValueChange={(value: "all" | "buy" | "sell") => setFilter(value)}>
              <SelectTrigger className="h-8 w-[120px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="sell">Sell</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div>
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="mt-1 h-4 w-16" />
                  </div>
                </div>
                <div className="text-right">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="mt-1 h-4 w-16" />
                </div>
              </div>
            ))
          ) : // Actual transactions list
          filteredTransactions.length > 0 ? (
            filteredTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative h-10 w-10">
                    <Image
                      src={tx.asset.logo || "/placeholder.svg"}
                      alt={tx.asset.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="absolute -bottom-1 -right-1 rounded-full bg-background p-0.5">
                      {tx.type === "buy" ? (
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium">
                        {tx.type === "buy" ? "Bought" : "Sold"} {tx.asset.name}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {tx.amount.toLocaleString()} {tx.asset.symbol} • {formatRelativeTime(tx.date)}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${tx.value.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">
                    ${tx.price.toLocaleString()} per {tx.asset.symbol}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center">
              <p className="text-muted-foreground">No transactions found</p>
            </div>
          )}
        </div>

        {!isLoading && filteredTransactions.length > 0 && (
          <div className="mt-4 text-center">
            <Button variant="outline" size="sm">
              View All Transactions
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
