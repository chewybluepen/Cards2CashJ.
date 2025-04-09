"use client"

import { Dialog } from "@/components/ui/dialog"

import { DialogContent } from "@/components/ui/dialog"

import { DialogHeader } from "@/components/ui/dialog"

import { DialogFooter } from "@/components/ui/dialog"

import { DialogDescription } from "@/components/ui/dialog"

import { DialogTitle } from "@/components/ui/dialog"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/layout/header"
import { BottomTabBar } from "@/components/layout/bottom-tab-bar"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formatCardNumber, formatCurrency } from "@/lib/utils"
import { CreditCard, Plus, Trash } from "lucide-react"

interface VirtualCard {
  id: string
  number: string
  expiryDate: string
  cvv: string
  balance: number
  currency: string
  type: "visa" | "mastercard" | "amex" | "discover"
  status: "active" | "expired" | "frozen"
  usageType: "single" | "recurring"
}

export default function CardsPage() {
  const router = useRouter()
  const [activeCard, setActiveCard] = useState<VirtualCard | null>(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const cards: VirtualCard[] = [
    {
      id: "1",
      number: "4532123456781234",
      expiryDate: "06/27",
      cvv: "123",
      balance: 150,
      currency: "USD",
      type: "visa",
      status: "active",
      usageType: "single",
    },
    {
      id: "2",
      number: "5412345678123456",
      expiryDate: "09/26",
      cvv: "456",
      balance: 500,
      currency: "GYD",
      type: "mastercard",
      status: "active",
      usageType: "recurring",
    },
    {
      id: "3",
      number: "3712345678901234",
      expiryDate: "08/25",
      cvv: "789",
      balance: 0,
      currency: "USD",
      type: "amex",
      status: "expired",
      usageType: "single",
    },
    {
      id: "4",
      number: "6011223344556677",
      expiryDate: "12/28",
      cvv: "012",
      balance: 1000,
      currency: "USD",
      type: "discover",
      status: "active",
      usageType: "recurring",
    },
  ]

  const getStatusColor = (status: VirtualCard["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "expired":
        return "bg-red-500"
      case "frozen":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getCardGradient = (type: VirtualCard["type"]) => {
    switch (type) {
      case "visa":
        return "from-brand-blue to-brand-lightBlue"
      case "mastercard":
        return "from-orange-500 to-red-500"
      case "amex":
        return "from-blue-500 to-purple-500"
      case "discover":
        return "from-green-500 to-green-700"
      default:
        return "from-gray-500 to-gray-700"
    }
  }

  const handleCardClick = (card: VirtualCard) => {
    setActiveCard(card)
  }

  const handleDeleteCard = () => {
    setShowDeleteDialog(false)
    router.push("/cards")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Virtual Cards" />
      <main className="flex-1 p-4 pb-24 md:pb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Your Virtual Cards</h1>
          <Button onClick={() => router.push("/generate-card")} className="animate-button-press">
            <Plus className="mr-2 h-4 w-4" />
            New Card
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleCardClick(card)}
            >
              <div
                className={`relative h-48 w-full rounded-xl p-6 text-white shadow-lg ${
                  index === 0
                    ? "bg-gradient-to-r from-gray-900 to-gray-800"
                    : `bg-gradient-to-r ${getCardGradient(card.type)}`
                }`}
              >
                <div className="absolute top-4 right-4 flex h-6 items-center justify-center rounded-full px-2 text-xs font-medium uppercase">
                  {card.type === "visa" && "VISA"}
                  {card.type === "mastercard" && "MASTERCARD"}
                  {card.type === "amex" && "AMEX"}
                  {card.type === "discover" && "DISCOVER"}
                </div>
                <div className="absolute top-4 left-4 flex h-6 items-center gap-1 rounded-full px-2 text-xs">
                  <div className={`h-2 w-2 rounded-full ${getStatusColor(card.status)}`} />
                  <span className="capitalize">{card.status}</span>
                </div>
                <div className="mt-10">
                  <p className="text-sm opacity-75">Card Number</p>
                  <p className="font-mono text-lg tracking-wider">{formatCardNumber(card.number)}</p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm opacity-75">Expiry Date</p>
                    <p className="font-mono">{card.expiryDate}</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-75">Balance</p>
                    <p className="font-mono">{formatCurrency(card.balance, card.currency)}</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-6">
                  <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                    {card.usageType === "single" ? "Single-Use" : "Recurring"}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeCard && (
          <Dialog open={!!activeCard} onOpenChange={(open) => !open && setActiveCard(null)}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Card Details</DialogTitle>
                <DialogDescription>View and manage your virtual card</DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="details" className="animate-button-press">
                    Details
                  </TabsTrigger>
                  <TabsTrigger value="transactions" className="animate-button-press">
                    Transactions
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="details">
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Card Number</p>
                      <div className="flex items-center">
                        <p className="font-mono">{formatCardNumber(activeCard.number)}</p>
                        <Button variant="ghost" size="sm" className="ml-auto h-8 gap-1">
                          Copy
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Expiry Date</p>
                        <p className="font-mono">{activeCard.expiryDate}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">CVV</p>
                        <p className="font-mono">{activeCard.cvv}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Balance</p>
                      <p className="font-mono text-lg">{formatCurrency(activeCard.balance, activeCard.currency)}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Status</p>
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${getStatusColor(activeCard.status)}`} />
                        <p className="capitalize">{activeCard.status}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Card Type</p>
                      <p>{activeCard.usageType === "single" ? "Single-Use Card" : "Recurring Card"}</p>
                    </div>

                    {activeCard.status === "expired" && (
                      <Alert variant="destructive">
                        <AlertDescription>This card has expired. Please generate a new card.</AlertDescription>
                      </Alert>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="transactions">
                  <div className="py-4">
                    {activeCard.status === "expired" ? (
                      <div className="text-center py-8 text-muted-foreground">
                        No transactions available for expired cards
                      </div>
                    ) : activeCard.balance === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">No transactions yet</div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                          <div>
                            <p className="font-medium">Amazon Purchase</p>
                            <p className="text-xs text-muted-foreground">June 15, 2025, 2:30 PM</p>
                          </div>
                          <p className="font-medium">-$24.99</p>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                          <div>
                            <p className="font-medium">Netflix Subscription</p>
                            <p className="text-xs text-muted-foreground">July 10, 2025</p>
                          </div>
                          <p className="font-medium">-$12.99</p>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                          <div>
                            <p className="font-medium">Card Load</p>
                            <p className="text-xs text-muted-foreground">July 5, 2025</p>
                          </div>
                          <p className="font-medium text-green-500">+$100.00</p>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>

              <DialogFooter className="flex flex-col sm:flex-row gap-2">
                <Button
                  variant="outline"
                  className="sm:w-auto w-full animate-button-press"
                  onClick={() => router.push("/add-funds")}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Add Funds
                </Button>
                <Button
                  variant="destructive"
                  className="sm:w-auto w-full animate-button-press"
                  onClick={() => setShowDeleteDialog(true)}
                >
                  <Trash className="mr-2 h-4 w-4" />
                  Delete Card
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}

        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Delete Card</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this card? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                className="sm:w-auto w-full animate-button-press"
                onClick={() => setShowDeleteDialog(false)}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                className="sm:w-auto w-full animate-button-press"
                onClick={handleDeleteCard}
              >
                Delete Card
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
      <BottomTabBar />
    </div>
  )
}
