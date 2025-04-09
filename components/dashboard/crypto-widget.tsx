"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Bitcoin } from "lucide-react"
import Link from "next/link"

const CryptoWidget = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [cryptoPrice, setCryptoPrice] = useState<string | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      setCryptoPrice("$45,000")
    }, 1500)
  }, [])

  return (
    <Card className="amazon-card hover-lift">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold text-black">Cryptocurrency</CardTitle>
        <Bitcoin className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{isLoading ? <Skeleton className="h-5 w-20" /> : cryptoPrice}</div>
        <div className="text-sm text-muted-foreground">
          <Link href="/crypto" className="text-sm font-bold text-black hover:underline">
            View All
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export { CryptoWidget }
