"use client"

import { useParams, useRouter } from "next/navigation"
import { getCryptoById } from "@/lib/crypto-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowUp, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CryptoDetailPage() {
  const router = useRouter()
  const { id } = useParams() as { id: string }
  const crypto = getCryptoById(id)

  if (!crypto) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header title="Cryptocurrency" />
        <main className="flex-1 p-4 pb-20 md:pb-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Cryptocurrency Not Found</h1>
            <p className="text-muted-foreground mb-4">
              The cryptocurrency you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link href="/crypto">Back to Cryptocurrencies</Link>
            </Button>
          </div>
        </main>
      </div>
    )
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

  return (
    <div className="flex min-h-screen flex-col">
      <Header title={crypto.name} />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/crypto" className="text-sm text-muted-foreground hover:text-foreground">
                Cryptocurrencies
              </Link>
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-sm font-medium">{crypto.name}</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={crypto.logo} alt={crypto.name} />
                  <AvatarFallback>{crypto.symbol.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold">{crypto.name}</h1>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{crypto.symbol}</Badge>
                    <Badge variant="secondary">{crypto.category}</Badge>
                    <Badge variant="outline">Rank #{crypto.rank}</Badge>
                  </div>
                </div>
              </div>
              <div className="md:ml-auto flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link href={crypto.website} target="_blank" rel="noopener noreferrer">
                    Website <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={crypto.whitepaper} target="_blank" rel="noopener noreferrer">
                    Whitepaper <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/crypto/${crypto.id}/buy`}>Buy</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/crypto/${crypto.id}/sell`}>Sell</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/crypto/${crypto.id}/trade`}>Trade</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Price</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{formatPrice(crypto.currentPrice)}</div>
                  <div className="flex items-center mt-1">
                    <Badge variant={crypto.change24h >= 0 ? "success" : "destructive"} className="flex items-center">
                      {crypto.change24h >= 0 ? (
                        <ArrowUp className="h-3 w-3 mr-1" />
                      ) : (
                        <ArrowDown className="h-3 w-3 mr-1" />
                      )}
                      {Math.abs(crypto.change24h).toFixed(2)}% (24h)
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Market Cap</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{formatMarketCap(crypto.marketCap)}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Volume (24h)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{formatMarketCap(crypto.volume24h)}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Circulating Supply</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{crypto.circulatingSupply.toLocaleString()}</div>
                  {crypto.maxSupply && (
                    <div className="text-sm text-muted-foreground">
                      Max: {crypto.maxSupply.toLocaleString()} {crypto.symbol}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="markets">Markets</TabsTrigger>
                <TabsTrigger value="historical">Historical Data</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>About {crypto.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{crypto.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div>
                        <h3 className="font-medium mb-2">Key Information</h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Launch Date</span>
                            <span>{crypto.launchDate}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Category</span>
                            <span>{crypto.category}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Market Cap Rank</span>
                            <span>#{crypto.rank}</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Price Changes</h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">24h Change</span>
                            <span className={crypto.change24h >= 0 ? "text-green-600" : "text-red-600"}>
                              {crypto.change24h >= 0 ? "+" : ""}
                              {crypto.change24h.toFixed(2)}%
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">7d Change</span>
                            <span className={crypto.change7d >= 0 ? "text-green-600" : "text-red-600"}>
                              {crypto.change7d >= 0 ? "+" : ""}
                              {crypto.change7d.toFixed(2)}%
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="markets">
                <Card>
                  <CardHeader>
                    <CardTitle>Markets</CardTitle>
                    <CardDescription>
                      Trading pairs and exchanges where you can buy or sell {crypto.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-8">
                      Market data is currently being loaded. Please check back later.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="historical">
                <Card>
                  <CardHeader>
                    <CardTitle>Historical Data</CardTitle>
                    <CardDescription>Price and volume history for {crypto.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-8">
                      Historical data is currently being loaded. Please check back later.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="news">
                <Card>
                  <CardHeader>
                    <CardTitle>Latest News</CardTitle>
                    <CardDescription>Recent news and updates about {crypto.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-8">
                      News articles are currently being loaded. Please check back later.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
