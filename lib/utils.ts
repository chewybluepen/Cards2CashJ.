import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency = "GYD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date)
}

export function generateCardNumber(): string {
  const prefix = "4532" // Visa-like prefix
  let cardNumber = prefix

  // Generate 12 more random digits
  for (let i = 0; i < 12; i++) {
    cardNumber += Math.floor(Math.random() * 10).toString()
  }

  return cardNumber
}

export function formatCardNumber(cardNumber: string): string {
  return cardNumber.replace(/(\d{4})/g, "$1 ").trim()
}

export function generateExpiryDate(): string {
  const today = new Date()
  // Ensure the year is at least 2025
  const baseYear = Math.max(today.getFullYear(), 2025)
  // If it's 2025, ensure the month is after May
  const expiryMonth =
    baseYear === 2025
      ? Math.floor(Math.random() * 7) + 6
      : // June to December if 2025
        Math.floor(Math.random() * 12) + 1 // Any month for years after 2025
  const expiryYear = baseYear + Math.floor(Math.random() * 3) // Random 0-2 years added

  return `${expiryMonth.toString().padStart(2, "0")}/${(expiryYear % 100).toString().padStart(2, "0")}`
}

export function generateCVV(): string {
  return Math.floor(Math.random() * 900 + 100).toString()
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function isValidVoucherCode(code: string): boolean {
  // Simple validation: must be 16 digits
  return /^\d{16}$/.test(code.replace(/\s/g, ""))
}

export function formatVoucherCode(code: string): string {
  // Format as 4 groups of 4 digits
  return code
    .replace(/\s/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim()
}

export function getExchangeRate(from: string, to: string): number {
  // Mock exchange rates (in a real app, this would come from an API)
  const rates: Record<string, Record<string, number>> = {
    GYD: {
      USD: 0.0048,
      EUR: 0.0044,
      GBP: 0.0038,
    },
    USD: {
      GYD: 209.73,
      EUR: 0.92,
      GBP: 0.79,
    },
  }

  return rates[from]?.[to] || 1
}
