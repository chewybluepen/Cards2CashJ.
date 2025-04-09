"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Link2, Trash2 } from "lucide-react"
import Image from "next/image"

interface BankCardProps {
  id: string
  name: string
  logo: string
  isLinked?: boolean
  onLink?: (id: string) => void
  onUnlink?: (id: string) => void
}

export function BankCard({ id, name, logo, isLinked = false, onLink, onUnlink }: BankCardProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleAction = async () => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (isLinked && onUnlink) {
        onUnlink(id)
      } else if (!isLinked && onLink) {
        onLink(id)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className={`overflow-hidden transition-all duration-300 ${isLinked ? "border-green-300" : ""}`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 relative">
              <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-contain" />
            </div>
            <div>
              <h3 className="font-medium">{name}</h3>
              {isLinked && (
                <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Linked
                </Badge>
              )}
            </div>
          </div>
          <Button
            variant={isLinked ? "destructive" : "default"}
            size="sm"
            className="animate-button-press"
            onClick={handleAction}
            disabled={isLoading}
          >
            {isLoading ? (
              "Processing..."
            ) : isLinked ? (
              <>
                <Trash2 className="mr-1 h-4 w-4" />
                Unlink
              </>
            ) : (
              <>
                <Link2 className="mr-1 h-4 w-4" />
                Link
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
