"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/header"
import { BalanceCard } from "@/components/dashboard/balance-card"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { TransactionList } from "@/components/dashboard/transaction-list"
import { CryptoWidget } from "@/components/dashboard/crypto-widget"
import { ProfileWidget } from "@/components/dashboard/profile-widget"
import { PageTransition } from "@/components/navigation/page-transition"

export default function DashboardPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        <Header title="Dashboard" />
        <main className="flex-1 p-4 pb-20 md:pb-4">
          <div className="container mx-auto space-y-6">
            <div className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
              <ProfileWidget username="John Doe" email="john.doe@example.com" profileImage="/placeholder.svg" />
            </div>

            <div className={`transition-opacity duration-500 delay-100 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
              <BalanceCard balance={2500.75} currency="GYD" percentChange={12.5} />
            </div>

            <div className={`transition-opacity duration-500 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
              <QuickActions />
            </div>

            <div className={`transition-opacity duration-500 delay-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
              <CryptoWidget />
            </div>

            <div className={`transition-opacity duration-500 delay-400 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
              <TransactionList />
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  )
}
