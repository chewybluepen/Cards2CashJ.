"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { delay } from "@/lib/utils"
import { AlertCircle, CheckCircle2, HelpCircle, MessageCircle, Search } from "lucide-react"

export default function SupportPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      question: "How do I add funds to my account?",
      answer:
        "You can add funds to your account by going to the 'Add Funds' section and entering your prepaid voucher code from carriers like Digicel or GTT. Follow the on-screen instructions to complete the process.",
    },
    {
      question: "How long does it take to generate a virtual card?",
      answer:
        "Virtual cards are generated instantly after you confirm the details. You can use your virtual card immediately for online purchases.",
    },
    {
      question: "What currencies are supported for conversion?",
      answer:
        "Currently, we support conversion between GYD (Guyanese Dollar) and USD (US Dollar). More currencies will be added in the future.",
    },
    {
      question: "Is there a limit to how much I can transfer?",
      answer:
        "Yes, there are daily and monthly limits for transfers. The standard daily limit is 5,000 GYD, and the monthly limit is 50,000 GYD. These limits may be increased based on your account tier and verification status.",
    },
    {
      question: "How do I link my bank account?",
      answer:
        "Go to the 'Bank Accounts' section, select your bank from the list, and follow the secure linking process. You'll need to provide your online banking credentials to establish the connection.",
    },
    {
      question: "What should I do if my transaction fails?",
      answer:
        "If your transaction fails, first check your internet connection. If the issue persists, verify that you have sufficient funds and that your account is in good standing. You can also check the 'Transaction History' section for more details about the failed transaction.",
    },
    {
      question: "How secure is Cards2Cash?",
      answer:
        "Cards2Cash uses industry-standard encryption and security protocols to protect your data and transactions. We also offer additional security features like two-factor authentication and biometric verification.",
    },
  ]

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : faqs

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !message) {
      setStatus("error")
      setErrorMessage("Please fill in all fields")
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await delay(1500)

      // For demo purposes, always succeed
      setStatus("success")

      // Reset form
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      setStatus("error")
      setErrorMessage("Failed to send message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Help & Support" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-3xl">
          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="faq" className="animate-button-press">
                FAQ
              </TabsTrigger>
              <TabsTrigger value="contact" className="animate-button-press">
                Contact Us
              </TabsTrigger>
              <TabsTrigger value="chat" className="animate-button-press">
                Live Chat
              </TabsTrigger>
            </TabsList>

            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Find answers to common questions about Cards2Cash</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search FAQs..."
                      className="pl-10 input-focus-animation"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {filteredFaqs.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <HelpCircle className="mx-auto h-8 w-8 mb-2" />
                      <p>No results found for "{searchQuery}"</p>
                      <p className="text-sm">Try a different search term or browse all FAQs</p>
                    </div>
                  ) : (
                    <Accordion type="single" collapsible className="w-full">
                      {filteredFaqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Can't find what you're looking for? Contact our support team.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>Send us a message and we'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="input-focus-animation"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isLoading || status === "success"}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="input-focus-animation"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading || status === "success"}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        className="min-h-32 input-focus-animation"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        disabled={isLoading || status === "success"}
                      />
                    </div>

                    {status === "success" && (
                      <Alert className="bg-green-50 border-green-200">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <AlertTitle className="text-green-500">Success!</AlertTitle>
                        <AlertDescription>Your message has been sent. We'll get back to you soon.</AlertDescription>
                      </Alert>
                    )}

                    {status === "error" && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{errorMessage}</AlertDescription>
                      </Alert>
                    )}

                    <Button
                      type="submit"
                      className="w-full animate-button-press"
                      disabled={isLoading || status === "success"}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="chat">
              <Card>
                <CardHeader>
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Chat with our support team in real-time</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px] flex flex-col">
                  <div className="flex-1 overflow-auto border rounded-md p-4 mb-4">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm">Hello! How can I help you today?</p>
                          <p className="text-xs text-primary-foreground/70 mt-1">Support Agent • 10:30 AM</p>
                        </div>
                      </div>

                      <div className="flex items-start justify-end">
                        <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm">I'm having trouble adding funds to my account.</p>
                          <p className="text-xs text-muted-foreground mt-1">You • 10:32 AM</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm">
                            I'm sorry to hear that. Could you please tell me what error message you're seeing?
                          </p>
                          <p className="text-xs text-primary-foreground/70 mt-1">Support Agent • 10:33 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Input placeholder="Type your message..." className="input-focus-animation" />
                    <Button className="animate-button-press">
                      <MessageCircle className="h-4 w-4" />
                      <span className="sr-only">Send</span>
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-muted-foreground">Our support team is available 24/7 to assist you.</p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
