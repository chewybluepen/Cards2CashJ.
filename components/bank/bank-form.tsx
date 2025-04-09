"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { delay } from "@/lib/utils"
import { AlertCircle, CheckCircle2, Lock, User } from "lucide-react"
import Image from "next/image"

interface BankFormProps {
  bankId: string
  bankName: string
  bankLogo: string
  onSuccess?: () => void
  onCancel?: () => void
}

export function BankForm({ bankId, bankName, bankLogo, onSuccess, onCancel }: BankFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<"idle" | "linking" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!username || !password) {
      setStatus("error")
      setErrorMessage("Please enter both username and password")
      return
    }

    setIsLoading(true)
    setStatus("linking")

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    try {
      // Simulate API call
      await delay(2000)

      clearInterval(interval)
      setProgress(100)

      // For demo purposes, always succeed
      setStatus("success")

      // Call success callback after a short delay
      setTimeout(() => {
        if (onSuccess) {
          onSuccess()
        }
      }, 1500)
    } catch (err) {
      clearInterval(interval)
      setStatus("error")
      setErrorMessage("Failed to link bank account. Please check your credentials and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 relative">
            <Image src={bankLogo || "/placeholder.svg"} alt={bankName} fill className="object-contain" />
          </div>
          <div>
            <CardTitle>Link {bankName}</CardTitle>
            <CardDescription>Enter your online banking credentials</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="username"
                placeholder="Enter your username"
                className="pl-10 input-focus-animation"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading || status === "success"}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="pl-10 input-focus-animation"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading || status === "success"}
              />
            </div>
          </div>

          {status === "linking" && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Linking account...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="animate-progress" />
            </div>
          )}

          {status === "success" && (
            <Alert className="bg-green-50 border-green-200">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <AlertTitle className="text-green-500">Success!</AlertTitle>
              <AlertDescription>Your bank account has been linked successfully.</AlertDescription>
            </Alert>
          )}

          {status === "error" && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}

          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1 animate-button-press"
              onClick={onCancel}
              disabled={isLoading || status === "success"}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 animate-button-press" disabled={isLoading || status === "success"}>
              {isLoading ? "Linking..." : "Link Account"}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-xs text-muted-foreground">Your credentials are securely encrypted and never stored.</p>
      </CardFooter>
    </Card>
  )
}
