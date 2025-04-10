"use client"

import { useEffect, useState } from "react"

type TaxHistory = {
  id: number
  transactionType: string
  asset: string
  amount: number
  date: string
}

const TaxHistoryPage = () => {
  // Declare the state variables
  const [taxHistory, setTaxHistory] = useState<TaxHistory[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch the tax history data when the component is mounted
  useEffect(() => {
    const fetchTaxHistory = async () => {
      try {
        // Simulate an API call or replace with actual API fetch
        const data: TaxHistory[] = [
          { id: 1, transactionType: "buy", asset: "BTC", amount: 5000, date: "2025-01-01" },
          { id: 2, transactionType: "sell", asset: "ETH", amount: 2000, date: "2025-02-15" },
        ]
        setTaxHistory(data)
      } catch (error) {
        console.error("Error fetching tax history:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTaxHistory()
  }, [])

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tax History</h1>

      {loading ? (
        <p className="text-gray-500">Loading tax history...</p>
      ) : taxHistory.length > 0 ? (
        <ul className="space-y-4">
          {taxHistory.map((entry) => (
            <li
              key={entry.id}
              className="p-4 bg-white rounded-2xl shadow border border-gray-200"
            >
              <p className="text-lg font-medium capitalize">
                {entry.transactionType} {entry.asset}
              </p>
              <p className="text-sm text-gray-600">
                Amount: ${entry.amount.toLocaleString()} on {entry.date}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No tax history found.</p>
      )}
    </div>
  )
}

export default TaxHistoryPage
