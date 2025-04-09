"use client"

import type React from "react"

import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle, Mail, MessageSquare, Phone } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CryptoTaxContactPage() {
  const router = useRouter()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to a server
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Contact Tax Support" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-4xl">
          <Button variant="outline" size="sm" onClick={() => router.back()} className="mb-6 animate-button-press">
            <ArrowLeft className="mr-2 h-4 w-4 text-foreground" />
            Back
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Our Tax Team</CardTitle>
                  <CardDescription>
                    Fill out the form below and our cryptocurrency tax specialists will get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
                      <h2 className="text-xl font-bold mb-2">Message Sent!</h2>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting our tax team. We'll respond to your inquiry within 24-48 hours.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)} className="animate-button-press">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number (Optional)</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Select value={formData.subject} onValueChange={handleSelectChange}>
                            <SelectTrigger id="subject">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="tax-calculation">Tax Calculation</SelectItem>
                              <SelectItem value="tax-reporting">Tax Reporting</SelectItem>
                              <SelectItem value="defi-taxes">DeFi Taxes</SelectItem>
                              <SelectItem value="nft-taxes">NFT Taxes</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Please describe your tax question or issue in detail..."
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <Button type="submit" className="w-full animate-button-press">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Alternative ways to reach our tax support team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">tax@cards2cash.com</p>
                      <p className="text-xs text-muted-foreground mt-1">Response time: 24-48 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-xs text-muted-foreground mt-1">Available Monday-Friday, 9am-5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Live Chat</h3>
                      <p className="text-sm text-muted-foreground">Available in the app</p>
                      <p className="text-xs text-muted-foreground mt-1">Available 24/7 for premium users</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full animate-button-press"
                    onClick={() => router.push("/crypto/portfolio/tax/faq")}
                  >
                    View FAQ
                  </Button>
                </CardFooter>
              </Card>

              <Card className="mt-4">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Need Urgent Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    For time-sensitive tax issues, please call our priority support line or upgrade to a premium plan
                    for immediate assistance.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full animate-button-press">Upgrade to Premium</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
