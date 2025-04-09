"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import Image from "next/image"

interface Carrier {
  id: string
  name: string
  logo: string
  description: string
  region: string
  conversionRate?: number
}

interface EnhancedCarrierSelectionProps {
  onSelect: (carrierId: string) => void
}

export function EnhancedCarrierSelection({ onSelect }: EnhancedCarrierSelectionProps) {
  const [selectedCarrier, setSelectedCarrier] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("guyana")

  const carriers: Carrier[] = [
    // Guyana
    {
      id: "digicel-gy",
      name: "Digicel Guyana",
      logo: "/images/carriers/digicel.png",
      description: "Convert Digicel prepaid credit to digital funds",
      region: "guyana",
      conversionRate: 0.95,
    },
    {
      id: "gtt",
      name: "GTT",
      logo: "/images/carriers/gtt.png",
      description: "Convert GTT prepaid credit to digital funds",
      region: "guyana",
      conversionRate: 0.95,
    },
    // Caribbean
    {
      id: "digicel-jm",
      name: "Digicel Jamaica",
      logo: "/images/carriers/digicel.png",
      description: "Convert Digicel Jamaica prepaid credit to digital funds",
      region: "caribbean",
      conversionRate: 0.9,
    },
    {
      id: "flow-caribbean",
      name: "Flow Caribbean",
      logo: "/placeholder.svg?height=100&width=100",
      description: "Convert Flow prepaid credit to digital funds",
      region: "caribbean",
      conversionRate: 0.9,
    },
    {
      id: "bmobile-tt",
      name: "bmobile Trinidad & Tobago",
      logo: "/placeholder.svg?height=100&width=100",
      description: "Convert bmobile prepaid credit to digital funds",
      region: "caribbean",
      conversionRate: 0.88,
    },
    // North America
    {
      id: "t-mobile",
      name: "T-Mobile",
      logo: "/placeholder.svg?height=100&width=100",
      description: "Convert T-Mobile prepaid credit to digital funds",
      region: "north-america",
      conversionRate: 0.85,
    },
    {
      id: "at&t",
      name: "AT&T",
      logo: "/placeholder.svg?height=100&width=100",
      description: "Convert AT&T prepaid credit to digital funds",
      region: "north-america",
      conversionRate: 0.85,
    },
    {
      id: "verizon",
      name: "Verizon",
      logo: "/placeholder.svg?height=100&width=100",
      description: "Convert Verizon prepaid credit to digital funds",
      region: "north-america",
      conversionRate: 0.85,
    },
    // Europe
    {
      id: "vodafone",
      name: "Vodafone",
      logo: "/placeholder.svg?height=100&width=100",
      description: "Convert Vodafone prepaid credit to digital funds",
      region: "europe",
      conversionRate: 0.82,
    },
    {
      id: "o2",
      name: "O2",
      logo: "/placeholder.svg?height=100&width=100",
      description: "Convert O2 prepaid credit to digital funds",
      region: "europe",
      conversionRate: 0.82,
    },
    {
      id: "orange",
      name: "Orange",
      logo: "/placeholder.svg?height=100&width=100",
      description: "Convert Orange prepaid credit to digital funds",
      region: "europe",
      conversionRate: 0.82,
    },
    // Asia
    {
      id: "airtel",
      name: "Airtel",
      logo: "/placeholder.svg?height=100&width=100",
      description: "Convert Airtel prepaid credit to digital funds",
      region: "asia",
      conversionRate: 0.8,
    },
    {
      id: "jio",
      name: "Jio",
      logo: "/placeholder.svg?height=100&width=100",
      description: "Convert Jio prepaid credit to digital funds",
      region: "asia",
      conversionRate: 0.8,
    },
    {
      id: "globe",
      name: "Globe Telecom",
      logo: "/placeholder.svg?height=100&width=100",
      description: "Convert Globe prepaid credit to digital funds",
      region: "asia",
      conversionRate: 0.8,
    },
  ]

  const handleCarrierSelect = (carrierId: string) => {
    setSelectedCarrier(carrierId)
  }

  const handleContinue = () => {
    if (selectedCarrier) {
      onSelect(selectedCarrier)
    }
  }

  const filteredCarriers = carriers.filter((carrier) => {
    const matchesSearch = carrier.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === "all" || carrier.region === activeTab
    return matchesSearch && matchesTab
  })

  return (
    <div className="mx-auto max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Select Carrier</CardTitle>
          <CardDescription>Choose your prepaid credit provider</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search carriers..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-6">
              <TabsTrigger value="guyana">Guyana</TabsTrigger>
              <TabsTrigger value="caribbean">Caribbean</TabsTrigger>
              <TabsTrigger value="north-america">North America</TabsTrigger>
              <TabsTrigger value="europe">Europe</TabsTrigger>
              <TabsTrigger value="asia">Asia</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCarriers.map((carrier) => (
                  <Button
                    key={carrier.id}
                    variant="outline"
                    className={`flex h-24 items-center justify-start gap-4 p-4 animate-button-press ${
                      selectedCarrier === carrier.id ? "border-primary" : ""
                    }`}
                    onClick={() => handleCarrierSelect(carrier.id)}
                  >
                    <div className="h-16 w-16 relative">
                      <Image
                        src={carrier.logo || "/placeholder.svg"}
                        alt={carrier.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium">{carrier.name}</h3>
                      <p className="text-xs text-muted-foreground">{carrier.description}</p>
                      {carrier.conversionRate && (
                        <p className="text-xs font-medium text-green-600">
                          Conversion rate: {(carrier.conversionRate * 100).toFixed(0)}%
                        </p>
                      )}
                    </div>
                  </Button>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Button className="w-full animate-button-press" disabled={!selectedCarrier} onClick={handleContinue}>
            Continue
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
