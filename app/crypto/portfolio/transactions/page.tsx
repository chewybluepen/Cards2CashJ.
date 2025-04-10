"use client"

import { useEffect, useState } from "react"

type Transaction = {
  id: number
  type: "buy" | "sell"
  asset: string
  quantity: number
  price: number
}

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Simulate an API call (replace with actual API call)
        const data: Transaction[] = [
          { id: 1, type: "buy", asset: "BTC", quantity: 0.1, price: 60000 },
          { id: 2, type: "sell", asset: "ETH", quantity: 1, price: 3000 },
        ]
        setTransactions(data)
      } catch (error: any) {
        console.error("Error fetching transactions:", error)
        setError("Failed to load transactions. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchTransactions()
  }, [])

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Transactions</h1>

      {loading ? (
        <p className="text-gray-500">Loading transactions...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : transactions.length > 0 ? (
        <ul className="space-y-4">
          {transactions.map((tx) => (
            <li
              key={tx.id}
              className="p-4 bg-white rounded-2xl shadow border border-gray-200"
            >
              <p className="text-lg font-medium capitalize">
                {tx.type} {tx.asset}
              </p>
              <p className="text-sm text-gray-600">
                Quantity: {tx.quantity} @ ${tx.price.toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No transactions found.</p>
      )}
    </main>
  )
}

export default TransactionsPage
