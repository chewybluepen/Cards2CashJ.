import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface BalanceCardProps {
  balance: number
  currency: string
  percentChange: number
}

export function BalanceCard({ balance, currency, percentChange }: BalanceCardProps) {
  const isPositive = percentChange >= 0

  return (
    <Card className="overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-black">Total Balance</h2>
          <div className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-1">
            {isPositive ? (
              <ArrowUpRight className="h-3 w-3 text-black" />
            ) : (
              <ArrowDownRight className="h-3 w-3 text-black" />
            )}
            <span className="text-xs font-bold text-black">
              {isPositive ? "+" : ""}
              {percentChange}%
            </span>
          </div>
        </div>
        <div className="mb-2 text-3xl font-bold text-black">
          {currency} {balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className="flex justify-between text-sm font-bold text-black">
          <span>Available for withdrawal</span>
          <span>
            {currency}{" "}
            {(balance * 0.9).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
