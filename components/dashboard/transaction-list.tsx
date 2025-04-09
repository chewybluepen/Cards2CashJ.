"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowDown, ArrowUp, Banknote, CreditCard, type LucideIcon, Send } from "lucide-react"

interface Transaction {
  id: string
  date: string
  description: string
  amount: string
  type: "income" | "expense"
  icon: LucideIcon
}

interface TransactionListProps {
  isLoading: boolean
}

const TransactionList: React.FC<TransactionListProps> = ({ isLoading }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    if (!isLoading) {
      setTransactions([
        {
          id: "1",
          date: "2024-03-15",
          description: "Salary Deposit",
          amount: "$2,500.00",
          type: "income",
          icon: ArrowUp,
        },
        {
          id: "2",
          date: "2024-03-14",
          description: "Grocery Shopping",
          amount: "$150.00",
          type: "expense",
          icon: ArrowDown,
        },
        {
          id: "3",
          date: "2024-03-13",
          description: "Virtual Card Payment",
          amount: "$75.00",
          type: "expense",
          icon: CreditCard,
        },
        {
          id: "4",
          date: "2024-03-12",
          description: "Online Transfer",
          amount: "$300.00",
          type: "income",
          icon: Send,
        },
        {
          id: "5",
          date: "2024-03-11",
          description: "Cash Deposit",
          amount: "$500.00",
          type: "income",
          icon: Banknote,
        },
      ])
    }
  }, [isLoading])

  return (
    <div className="relative w-full overflow-auto">
      <Table>
        <TableCaption>Recent transactions for your account.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <>
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">
                    <Skeleton className="h-4 w-[100px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[250px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[75px]" />
                  </TableCell>
                </TableRow>
              ))}
            </>
          ) : (
            transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>
                  {transaction.type === "income" ? (
                    <span className="text-green-500">+{transaction.amount}</span>
                  ) : (
                    <span className="text-red-500">-{transaction.amount}</span>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export { TransactionList }
