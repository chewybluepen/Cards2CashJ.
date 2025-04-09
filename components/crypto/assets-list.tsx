"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

// Mock portfolio assets data
const mockAssets = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    logo: "https://img.icons8.com/color/96/000000/bitcoin.png",
    amount: 0.1823,
    value: 11932.45,
    price: 65456.12,
    change24h: 2.34,
    allocation: 68.5,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    logo: "https://img.icons8.com/color/96/000000/ethereum.png",
    amount: 1.245,
    value: 4301.23,
    price: 3455.61,
    change24h: 3.56,
    allocation: 24.7,
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    logo: "https://img.icons8.com/color/96/000000/solana.png",
    amount: 8.75,
    value: 1050.63,
    price: 120.07,
    change24h: 18.2,
    allocation: 6.0,
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    logo: "https://img.icons8.com/color/96/000000/cardano.png",
    amount: 1250,
    value: 687.5,
    price: 0.55,
    change24h: -1.2,
    allocation: 3.9,
  },
  {
    id: "xrp",
    name: "XRP",
    symbol: "XRP",
    logo: "https://img.icons8.com/color/96/000000/xrp.png",
    amount: 850,
    value: 663.0,
    price: 0.78,
    change24h: -5.4,
    allocation: 3.8,
  },
  {
    id: "polkadot",
    name: "Polkadot",
    symbol: "DOT",
    logo: "https://img.icons8.com/color/96/000000/polkadot.png",
    amount: 45,
    value: 553.5,
    price: 12.3,
    change24h: 1.8,
    allocation: 3.2,
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    symbol: "DOGE",
    logo: "https://img.icons8.com/color/96/000000/dogecoin.png",
    amount: 1200,
    value: 144.0,
    price: 0.12,
    change24h: 4.5,
    allocation: 0.8,
  },
  {
    id: "tether",
    name: "Tether",
    symbol: "USDT",
    logo: "https://img.icons8.com/color/96/000000/tether.png",
    amount: 100,
    value: 100.0,
    price: 1.0,
    change24h: 0.01,
    allocation: 0.6,
  },
]

interface AssetsListProps {
  isLoading: boolean
}

export function AssetsList({ isLoading }: AssetsListProps) {
  const [sortBy, setSortBy] = useState<"allocation" | "value" | "change24h">("allocation")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  // Sort assets based on current sort settings
  const sortedAssets = [...mockAssets].sort((a, b) => {
    const aValue = a[sortBy]
    const bValue = b[sortBy]

    if (sortOrder === "asc") {
      return aValue - bValue
    } else {
      return bValue - aValue
    }
  })

  // Handle sort change
  const handleSort = (key: "allocation" | "value" | "change24h") => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(key)
      setSortOrder("desc")
    }
  }

  return (
    <Card className="amazon-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>My Assets</CardTitle>
          <div className="flex space-x-1">
            <Button
              variant={sortBy === "allocation" ? "default" : "outline"}
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => handleSort("allocation")}
            >
              Allocation {sortBy === "allocation" && (sortOrder === "asc" ? "↑" : "↓")}
            </Button>
            <Button
              variant={sortBy === "value" ? "default" : "outline"}
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => handleSort("value")}
            >
              Value {sortBy === "value" && (sortOrder === "asc" ? "↑" : "↓")}
            </Button>
            <Button
              variant={sortBy === "change24h" ? "default" : "outline"}
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => handleSort("change24h")}
            >
              24h {sortBy === "change24h" && (sortOrder === "asc" ? "↑" : "↓")}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isLoading
            ? // Loading skeletons
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
            : // Actual assets list
              sortedAssets.map((asset) => (
                <div key={asset.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative h-10 w-10">
                      <Image
                        src={asset.logo || "/placeholder.svg"}
                        alt={asset.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">{asset.name}</span>
                        <Badge variant="outline" className="ml-2 px-1.5 py-0">
                          {asset.symbol}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {asset.amount.toLocaleString()} {asset.symbol}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${asset.value.toLocaleString()}</div>
                    <div className="flex items-center justify-end space-x-1">
                      <span className={asset.change24h >= 0 ? "text-green-500" : "text-red-500"}>
                        {asset.change24h >= 0 ? (
                          <ArrowUpRight className="inline h-3 w-3" />
                        ) : (
                          <ArrowDownRight className="inline h-3 w-3" />
                        )}
                        {Math.abs(asset.change24h)}%
                      </span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">More options</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => (window.location.href = `/crypto/${asset.id}/buy`)}>
                            Buy {asset.symbol}
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => (window.location.href = `/crypto/${asset.id}/sell`)}>
                            Sell {asset.symbol}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => (window.location.href = `/crypto/${asset.id}`)}>
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>Set Price Alert</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </CardContent>
    </Card>
  )
}
