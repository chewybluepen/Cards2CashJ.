"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cryptocurrencies, searchCryptocurrencies, categories, getTopCryptocurrencies } from "@/lib/crypto-data"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowDown, ArrowUp, Search, Filter } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PageContainer } from "@/components/layout/page-container"

export default function CryptoPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [sortBy, setSortBy] = useState<"marketCap" | "name" | "price" | "change24h">("marketCap")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  // Filter and sort cryptocurrencies
  const filteredCryptos = (() => {
    let result = [...cryptocurrencies]

    // Filter by search query
    if (searchQuery) {
      result = searchCryptocurrencies(searchQuery)
    }

    // Filter by category
    if (activeTab !== "all" && activeTab !== "favorites") {
      result = result.filter((crypto) => crypto.category === activeTab)
    }

    // Sort
    result.sort((a, b) => {
      let comparison = 0

      switch (sortBy) {
        case "name":
          comparison = a.name.localeCompare(b.name)
          break
        case "price":
          comparison = a.currentPrice - b.currentPrice
          break
        case "change24h":
          comparison = a.change24h - b.change24h
          break
        case "marketCap":
        default:
          comparison = a.marketCap - b.marketCap
          break
      }

      return sortOrder === "asc" ? comparison : -comparison
    })

    return result
  })()

  const handleSort = (field: "marketCap" | "name" | "price" | "change24h") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("desc")
    }
  }

  const formatMarketCap = (value: number): string => {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`
    return `$${value.toFixed(2)}`
  }

  const formatPrice = (price: number): string => {
    if (price < 0.01) return `$${price.toFixed(6)}`
    if (price < 1) return `$${price.toFixed(4)}`
    if (price < 10) return `$${price.toFixed(2)}`
    return `$${price.toFixed(2)}`
  }

  const topCryptos = getTopCryptocurrencies(5)

  return (
    <PageContainer title="Cryptocurrency">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Cryptocurrency Market</h1>
          <p className="text-muted-foreground">
            Explore and trade cryptocurrencies with Cards2Cash. Monitor prices, manage your portfolio, and stay updated.
          </p>
        </div>

        <div className="mb-6 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search cryptocurrencies..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleSort("marketCap")}>Sort by Market Cap</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSort("name")}>Sort by Name</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSort("price")}>Sort by Price</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSort("change24h")}>Sort by 24h Change</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mb-6">
          <ScrollArea className="w-full whitespace-nowrap pb-3">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab} value={activeTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </ScrollArea>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Top Cryptocurrencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {topCryptos.map((crypto) => (
              <Link key={crypto.id} href={`/crypto/${crypto.id}`}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={crypto.logo} alt={crypto.name} />
                          <AvatarFallback>{crypto.symbol.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base">{crypto.name}</CardTitle>
                          <CardDescription>{crypto.symbol}</CardDescription>
                        </div>
                      </div>
                      <Badge variant={crypto.change24h >= 0 ? "success" : "destructive"} className="flex items-center">
                        {crypto.change24h >= 0 ? (
                          <ArrowUp className="h-3 w-3 mr-1" />
                        ) : (
                          <ArrowDown className="h-3 w-3 mr-1" />
                        )}
                        {Math.abs(crypto.change24h).toFixed(2)}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-bold">{formatPrice(crypto.currentPrice)}</div>
                    <div className="text-sm text-muted-foreground">Market Cap: {formatMarketCap(crypto.marketCap)}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">All Cryptocurrencies</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">#</th>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-right py-3 px-4 cursor-pointer" onClick={() => handleSort("price")}>
                    <div className="flex items-center justify-end">
                      Price
                      {sortBy === "price" &&
                        (sortOrder === "asc" ? (
                          <ArrowUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDown className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </th>
                  <th className="text-right py-3 px-4 cursor-pointer" onClick={() => handleSort("change24h")}>
                    <div className="flex items-center justify-end">
                      24h %
                      {sortBy === "change24h" &&
                        (sortOrder === "asc" ? (
                          <ArrowUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDown className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </th>
                  <th className="text-right py-3 px-4 cursor-pointer" onClick={() => handleSort("marketCap")}>
                    <div className="flex items-center justify-end">
                      Market Cap
                      {sortBy === "marketCap" &&
                        (sortOrder === "asc" ? (
                          <ArrowUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDown className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCryptos.map((crypto, index) => (
                  <tr key={crypto.id} className="border-b hover:bg-muted/50">
                    <td className="py-4 px-4">{crypto.rank}</td>
                    <td className="py-4 px-4">
                      <Link href={`/crypto/${crypto.id}`} className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={crypto.logo} alt={crypto.name} />
                          <AvatarFallback>{crypto.symbol.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{crypto.name}</div>
                          <div className="text-sm text-muted-foreground">{crypto.symbol}</div>
                        </div>
                      </Link>
                    </td>
                    <td className="text-right py-4 px-4 font-medium">{formatPrice(crypto.currentPrice)}</td>
                    <td className={`text-right py-4 px-4 ${crypto.change24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {crypto.change24h >= 0 ? "+" : ""}
                      {crypto.change24h.toFixed(2)}%
                    </td>
                    <td className="text-right py-4 px-4">{formatMarketCap(crypto.marketCap)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
