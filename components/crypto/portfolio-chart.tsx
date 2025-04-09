"use client"

import { useState, useEffect } from "react"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Generate mock chart data based on time range
function generateChartData(timeRange: string) {
  const dataPoints =
    {
      "1d": 24,
      "1w": 7,
      "1m": 30,
      "3m": 90,
      "1y": 12,
      all: 24,
    }[timeRange] || 30

  const isHourly = timeRange === "1d"
  const isDaily = timeRange === "1w" || timeRange === "1m" || timeRange === "3m"
  const isMonthly = timeRange === "1y" || timeRange === "all"

  const baseValue = 10000
  let lastValue = baseValue

  return Array.from({ length: dataPoints }).map((_, i) => {
    // Create realistic looking chart data with some volatility
    const volatility =
      {
        "1d": 0.005,
        "1w": 0.01,
        "1m": 0.02,
        "3m": 0.03,
        "1y": 0.05,
        all: 0.08,
      }[timeRange] || 0.02

    // Random change with slight upward bias
    const change = (Math.random() - 0.45) * volatility
    lastValue = lastValue * (1 + change)

    let label = ""
    if (isHourly) {
      label = `${i}:00`
    } else if (isDaily) {
      const date = new Date()
      date.setDate(date.getDate() - (dataPoints - i - 1))
      label = `${date.getMonth() + 1}/${date.getDate()}`
    } else if (isMonthly) {
      const date = new Date()
      date.setMonth(date.getMonth() - (dataPoints - i - 1))
      label = `${date.toLocaleString("default", { month: "short" })}`
    }

    return {
      value: Number.parseFloat(lastValue.toFixed(2)),
      label,
    }
  })
}

interface PortfolioChartProps {
  timeRange: "1d" | "1w" | "1m" | "3m" | "1y" | "all"
}

export function PortfolioChart({ timeRange }: PortfolioChartProps) {
  const [data, setData] = useState(() => generateChartData(timeRange))

  // Update data when time range changes
  useEffect(() => {
    setData(generateChartData(timeRange))
  }, [timeRange])

  // Calculate if portfolio is up or down
  const isUp = data[data.length - 1].value >= data[0].value
  const chartColor = isUp ? "hsl(var(--chart-1))" : "hsl(var(--chart-2))"

  return (
    <div className="h-[300px] w-full">
      <ChartContainer
        config={{
          value: {
            label: "Portfolio Value",
            color: chartColor,
          },
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              padding={{ left: 20, right: 20 }}
              minTickGap={10}
              tickMargin={8}
            />
            <YAxis
              width={80}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
              domain={["auto", "auto"]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="value"
              strokeWidth={2}
              activeDot={{ r: 6, strokeWidth: 0 }}
              dot={false}
              stroke={chartColor}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
