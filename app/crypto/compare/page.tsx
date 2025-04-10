// app/crypto/compare/page.tsx

"use client"

import { useEffect, useState } from "react"

type AssetData = {
  symbol: string
  name: string
  price: number
  change: number
}

const ComparePage = () => {
  const [assets, setAssets] = useState<AssetData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAssetData = async () => {
      try {
        // Simulate API fetch
        const data: AssetData[] = [
          { symbol: "BTC", name: "Bitcoin", price: 60000, change: 2.3 },
          { symbol: "ETH", name: "Ethereum", price: 3200, change: -1.1 },
        ]
        setAssets(data)
      } catch (error) {
        console.error("Error fetching asset data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAssetData()
  }, [])

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Compare Crypto Assets</h1>

      {loading ? (
        <p className="text-gray-500">Loading data...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Symbol</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Price (USD)</th>
              <th className="border p-2">24h Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.symbol} className="text-center">
                <td className="border p-2">{asset.symbol}</td>
                <td className="border p-2">{asset.name}</td>
                <td className="border p-2">${asset.price.toLocaleString()}</td>
                <td
                  className={`border p-2 ${
                    asset.change >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {asset.change.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
}

export default ComparePage
