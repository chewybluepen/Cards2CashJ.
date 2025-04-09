"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { formatCurrency } from "@/lib/utils"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function AnalyticsPage() {
  const [period, setPeriod] = useState("month")

  // Sample data for charts
  const spendingData = [
    { name: "Jan", amount: 1200 },
    { name: "Feb", amount: 1900 },
    { name: "Mar", amount: 1500 },
    { name: "Apr", amount: 2100 },
    { name: "May", amount: 1800 },
    { name: "Jun", amount: 2400 },
  ]

  const categoryData = [
    { name: "Shopping", value: 45 },
    { name: "Food", value: 25 },
    { name: "Entertainment", value: 15 },
    { name: "Bills", value: 10 },
    { name: "Other", value: 5 },
  ]

  const transactionData = [
    { name: "Mon", deposits: 500, withdrawals: 200 },
    { name: "Tue", deposits: 300, withdrawals: 400 },
    { name: "Wed", deposits: 600, withdrawals: 100 },
    { name: "Thu", deposits: 200, withdrawals: 300 },
    { name: "Fri", deposits: 700, withdrawals: 200 },
    { name: "Sat", deposits: 400, withdrawals: 500 },
    { name: "Sun", deposits: 200, withdrawals: 100 },
  ]

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Analytics" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Financial Analytics</h1>
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Spending Overview</CardTitle>
              <CardDescription>Your spending trends over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  amount: {
                    label: "Amount (GYD)",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={spendingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="amount"
                      stroke="var(--color-amount)"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Spending by Category</CardTitle>
              <CardDescription>How your money is distributed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Deposits vs Withdrawals</CardTitle>
              <CardDescription>Compare your money in vs money out</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  deposits: {
                    label: "Deposits",
                    color: "hsl(var(--chart-1))",
                  },
                  withdrawals: {
                    label: "Withdrawals",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={transactionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="deposits" fill="var(--color-deposits)" />
                    <Bar dataKey="withdrawals" fill="var(--color-withdrawals)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Predictive Analysis</CardTitle>
              <CardDescription>Forecast of your future spending based on historical data</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="spending">
                <TabsList className="mb-4">
                  <TabsTrigger value="spending">Spending Forecast</TabsTrigger>
                  <TabsTrigger value="savings">Savings Potential</TabsTrigger>
                </TabsList>
                <TabsContent value="spending">
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="font-medium mb-2">Spending Forecast</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Based on your spending patterns, we predict your expenses for the next 3 months.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Next Month</span>
                        <span className="font-medium">{formatCurrency(2200, "GYD")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>In 2 Months</span>
                        <span className="font-medium">{formatCurrency(2500, "GYD")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>In 3 Months</span>
                        <span className="font-medium">{formatCurrency(2300, "GYD")}</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="savings">
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="font-medium mb-2">Savings Potential</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      If you reduce your spending by 10% in these categories, you could save:
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Entertainment</span>
                        <span className="font-medium text-green-500">+{formatCurrency(150, "GYD")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shopping</span>
                        <span className="font-medium text-green-500">+{formatCurrency(450, "GYD")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Food</span>
                        <span className="font-medium text-green-500">+{formatCurrency(250, "GYD")}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t">
                        <span className="font-medium">Total Potential Savings</span>
                        <span className="font-bold text-green-500">{formatCurrency(850, "GYD")}</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
