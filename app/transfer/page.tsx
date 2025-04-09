"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/layout/header"
import { BottomTabBar } from "@/components/layout/bottom-tab-bar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { delay, formatCurrency } from "@/lib/utils"
import {
  AlertCircle,
  ArrowRight,
  BanknoteIcon as Bank,
  CheckCircle2,
  HelpCircle,
  Info,
  User,
  Users,
} from "lucide-react"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"

export default function TransferPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [bankId, setBankId] = useState("")
  const [amount, setAmount] = useState("")
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [transferType, setTransferType] = useState<"bank" | "user">("bank")
  const [recipient, setRecipient] = useState("")
  const [note, setNote] = useState("")
  const [showHelp, setShowHelp] = useState(false)

  const banks = [
    {
      id: "citizens",
      name: "Citizens Bank",
      logo: "/images/banks/citizens-bank.png",
      accountNumber: "****1234",
    },
    {
      id: "republic",
      name: "Republic Bank",
      logo: "/images/banks/republic-bank.png",
      accountNumber: "****5678",
    },
    {
      id: "gbti",
      name: "GBTI",
      logo: "/images/banks/gbti.png",
      accountNumber: "****9012",
    },
    {
      id: "demerara",
      name: "Demerara Bank",
      logo: "/images/banks/demerara-bank.png",
      accountNumber: "****3456",
    },
  ]

  const recentContacts = [
    {
      id: "user1",
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      avatar: "/images/avatars/kyle.png",
    },
    {
      id: "user2",
      name: "Michael Chen",
      email: "m.chen@example.com",
      avatar: "/images/avatars/stan.png",
    },
    {
      id: "user3",
      name: "Aisha Patel",
      email: "aisha.p@example.com",
      avatar: "/images/avatars/kenny.png",
    },
  ]

  const selectedBank = banks.find((b) => b.id === bankId)
  const selectedContact = recentContacts.find((c) => c.id === recipient)

  // Reset form when transfer type changes
  useEffect(() => {
    setBankId("")
    setRecipient("")
    setAmount("")
    setNote("")
    setStatus("idle")
    setProgress(0)
    setErrorMessage("")
    setShowConfirmation(false)
  }, [transferType])

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, "")
    setAmount(value)

    // Reset status when user types
    if (status !== "idle") {
      setStatus("idle")
      setProgress(0)
      setErrorMessage("")
    }
  }

  const validateForm = () => {
    if (transferType === "bank" && !bankId) {
      setErrorMessage("Please select a bank account")
      setStatus("error")
      return false
    }

    if (transferType === "user" && !recipient) {
      setErrorMessage("Please select a recipient")
      setStatus("error")
      return false
    }

    if (!amount || Number.parseFloat(amount) <= 0) {
      setErrorMessage("Please enter a valid amount")
      setStatus("error")
      return false
    }

    const amountValue = Number.parseFloat(amount)
    if (amountValue > 5000) {
      setErrorMessage("Maximum transfer amount is 5,000 GYD")
      setStatus("error")
      return false
    }

    if (amountValue < 100) {
      setErrorMessage("Minimum transfer amount is 100 GYD")
      setStatus("error")
      return false
    }

    return true
  }

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()

    const isValid = validateForm()
    if (!isValid) return

    setShowConfirmation(true)
  }

  const handleConfirm = async () => {
    setIsLoading(true)
    setStatus("processing")

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    try {
      // Simulate API call
      await delay(2000)

      clearInterval(interval)
      setProgress(100)

      setStatus("success")

      // Show toast notification
      toast({
        title: "Transfer Successful",
        description: `${formatCurrency(Number.parseFloat(amount) || 0, "GYD")} has been transferred successfully.`,
        variant: "success",
      })

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/dashboard")
      }, 1500)
    } catch (err) {
      clearInterval(interval)
      setStatus("error")
      setErrorMessage("Failed to process transfer. Please try again.")

      toast({
        title: "Transfer Failed",
        description: "We couldn't process your transfer. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setShowConfirmation(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Transfer Funds" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-md">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Transfer Funds</CardTitle>
                    <CardDescription className="text-blue-100">
                      Send money to bank accounts or other users
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-blue-700/50"
                    onClick={() => setShowHelp(!showHelp)}
                  >
                    <HelpCircle className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <AnimatePresence>
                  {showHelp && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
                    >
                      <Alert className="bg-blue-50 border-blue-200">
                        <Info className="h-4 w-4 text-blue-500" />
                        <AlertTitle className="text-blue-700">Transfer Information</AlertTitle>
                        <AlertDescription className="text-blue-600 text-sm">
                          <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Bank transfers typically take 1-2 business days to process</li>
                            <li>User-to-user transfers are instant</li>
                            <li>Maximum transfer amount is 5,000 GYD</li>
                            <li>Minimum transfer amount is 100 GYD</li>
                          </ul>
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!showConfirmation ? (
                  <form onSubmit={handleContinue} className="space-y-4">
                    <Tabs
                      defaultValue="bank"
                      value={transferType}
                      onValueChange={(value) => setTransferType(value as "bank" | "user")}
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="bank" className="flex items-center gap-2">
                          <Bank className="h-4 w-4" />
                          <span>To Bank</span>
                        </TabsTrigger>
                        <TabsTrigger value="user" className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>To User</span>
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="bank" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="bank">Select Bank Account</Label>
                          <Select value={bankId} onValueChange={setBankId}>
                            <SelectTrigger id="bank" className="input-focus-animation">
                              <SelectValue placeholder="Select bank account" />
                            </SelectTrigger>
                            <SelectContent>
                              {banks.map((bank) => (
                                <SelectItem key={bank.id} value={bank.id}>
                                  <div className="flex items-center">
                                    <div className="h-5 w-5 relative mr-2">
                                      <Image
                                        src={bank.logo || "/placeholder.svg"}
                                        alt={bank.name}
                                        fill
                                        className="object-contain"
                                      />
                                    </div>
                                    <span>
                                      {bank.name} ({bank.accountNumber})
                                    </span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </TabsContent>

                      <TabsContent value="user" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="recipient">Select Recipient</Label>
                          <Select value={recipient} onValueChange={setRecipient}>
                            <SelectTrigger id="recipient" className="input-focus-animation">
                              <SelectValue placeholder="Select recipient" />
                            </SelectTrigger>
                            <SelectContent>
                              {recentContacts.map((contact) => (
                                <SelectItem key={contact.id} value={contact.id}>
                                  <div className="flex items-center">
                                    <div className="h-6 w-6 relative mr-2 rounded-full overflow-hidden">
                                      <Image
                                        src={contact.avatar || "/placeholder.svg"}
                                        alt={contact.name}
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                    <div>
                                      <span className="font-medium">{contact.name}</span>
                                      <span className="text-xs text-muted-foreground block">{contact.email}</span>
                                    </div>
                                  </div>
                                </SelectItem>
                              ))}
                              <SelectItem value="new">
                                <div className="flex items-center text-blue-600">
                                  <Users className="h-4 w-4 mr-2" />
                                  <span>Add new recipient</span>
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount (GYD)</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                        <Input
                          id="amount"
                          placeholder="0.00"
                          className="pl-8 input-focus-animation"
                          value={amount}
                          onChange={handleAmountChange}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">Min: 100 GYD | Max: 5,000 GYD</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="note">Note (Optional)</Label>
                      <Input
                        id="note"
                        placeholder="What's this for?"
                        className="input-focus-animation"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        maxLength={50}
                      />
                      <p className="text-xs text-muted-foreground">{note.length}/50 characters</p>
                    </div>

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{errorMessage}</AlertDescription>
                        </Alert>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      className="w-full animate-button-press bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
                      disabled={!amount || Number.parseFloat(amount) <= 0}
                    >
                      Continue
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="rounded-lg bg-muted p-4">
                      <h3 className="font-medium mb-2">Confirm Transfer</h3>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">From</span>
                          <span className="font-medium">Cards2Cash Wallet</span>
                        </div>

                        <div className="flex justify-center my-2">
                          <ArrowRight className="h-5 w-5" />
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm">To</span>
                          {transferType === "bank" ? (
                            <div className="flex items-center">
                              {selectedBank && (
                                <div className="h-5 w-5 relative mr-2">
                                  <Image
                                    src={selectedBank.logo || "/placeholder.svg"}
                                    alt={selectedBank.name}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              )}
                              <span className="font-medium">
                                {selectedBank?.name} ({selectedBank?.accountNumber})
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              {selectedContact && (
                                <div className="h-6 w-6 relative mr-2 rounded-full overflow-hidden">
                                  <Image
                                    src={selectedContact.avatar || "/placeholder.svg"}
                                    alt={selectedContact.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              )}
                              <div>
                                <span className="font-medium">{selectedContact?.name}</span>
                                <span className="text-xs text-muted-foreground block">{selectedContact?.email}</span>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex justify-between items-center pt-2 border-t">
                          <span className="text-sm font-medium">Amount</span>
                          <span className="font-bold">{formatCurrency(Number.parseFloat(amount) || 0, "GYD")}</span>
                        </div>

                        {note && (
                          <div className="flex justify-between items-center pt-2">
                            <span className="text-sm font-medium">Note</span>
                            <span className="text-sm italic">{note}</span>
                          </div>
                        )}

                        {transferType === "bank" && (
                          <div className="flex justify-between items-center pt-2">
                            <span className="text-sm font-medium">Processing Time</span>
                            <span className="text-sm">1-2 business days</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {status === "processing" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Processing transfer...</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="animate-progress" />
                      </div>
                    )}

                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Alert className="bg-green-50 border-green-200">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <AlertTitle className="text-green-500">Success!</AlertTitle>
                          <AlertDescription>Your transfer has been processed successfully.</AlertDescription>
                        </Alert>
                      </motion.div>
                    )}

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{errorMessage}</AlertDescription>
                        </Alert>
                      </motion.div>
                    )}

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 animate-button-press"
                        onClick={handleCancel}
                        disabled={isLoading || status === "success"}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="flex-1 animate-button-press bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
                        onClick={handleConfirm}
                        disabled={isLoading || status === "success"}
                      >
                        {isLoading ? "Processing..." : "Confirm Transfer"}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-center bg-gray-50 p-4">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Bank className="mr-1 h-4 w-4" />
                  {transferType === "bank"
                    ? "Bank transfers typically take 1-2 business days to process"
                    : "User-to-user transfers are processed instantly"}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </main>
      <BottomTabBar />
    </div>
  )
}
