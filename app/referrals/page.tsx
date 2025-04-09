"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formatDate } from "@/lib/utils"
import { Award, Copy, Facebook, Mail, Share2, Twitter, Users } from "lucide-react"
import Image from "next/image"

interface Referral {
  id: string
  name: string
  email: string
  date: Date
  status: "pending" | "completed"
  reward?: number
}

export default function ReferralsPage() {
  const [referrals, setReferrals] = useState<Referral[]>([
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@example.com",
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      status: "completed",
      reward: 100,
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
      status: "completed",
      reward: 100,
    },
    {
      id: "3",
      name: "Michael Brown",
      email: "michael.b@example.com",
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 7 days ago
      status: "pending",
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily.d@example.com",
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10), // 10 days ago
      status: "pending",
    },
  ])

  const [referralCode] = useState("CARDS2CASH123")
  const [referralLink] = useState("https://cards2cash.com/ref/CARDS2CASH123")

  const totalReferrals = referrals.length
  const completedReferrals = referrals.filter((r) => r.status === "completed").length
  const pendingReferrals = referrals.filter((r) => r.status === "pending").length
  const totalRewards = referrals.reduce((sum, r) => sum + (r.reward || 0), 0)

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode)
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink)
  }

  const handleShare = (platform: string) => {
    // In a real app, this would open the native share dialog or redirect to the platform's share URL
    console.log(`Sharing referral link via ${platform}`)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Referrals" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Refer Friends & Earn</CardTitle>
                <CardDescription>Invite friends to Cards2Cash and earn rewards when they sign up</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-4">
                    <Card className="bg-muted">
                      <CardContent className="p-4 text-center">
                        <Users className="mx-auto h-8 w-8 text-primary mb-2" />
                        <p className="text-2xl font-bold">{totalReferrals}</p>
                        <p className="text-xs text-muted-foreground">Total Referrals</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted">
                      <CardContent className="p-4 text-center">
                        <Award className="mx-auto h-8 w-8 text-green-500 mb-2" />
                        <p className="text-2xl font-bold">{completedReferrals}</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted">
                      <CardContent className="p-4 text-center">
                        <Users className="mx-auto h-8 w-8 text-yellow-500 mb-2" />
                        <p className="text-2xl font-bold">{pendingReferrals}</p>
                        <p className="text-xs text-muted-foreground">Pending</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted">
                      <CardContent className="p-4 text-center">
                        <Award className="mx-auto h-8 w-8 text-primary mb-2" />
                        <p className="text-2xl font-bold">{totalRewards}</p>
                        <p className="text-xs text-muted-foreground">Points Earned</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium mb-2">Your Referral Code</h3>
                    <div className="flex">
                      <Input value={referralCode} readOnly className="font-mono" />
                      <Button variant="outline" className="ml-2 animate-button-press" onClick={handleCopyCode}>
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy</span>
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium mb-2">Referral Link</h3>
                    <div className="flex">
                      <Input value={referralLink} readOnly className="font-mono text-xs" />
                      <Button variant="outline" className="ml-2 animate-button-press" onClick={handleCopyLink}>
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy</span>
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Share with Friends</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" className="animate-button-press" onClick={() => handleShare("email")}>
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </Button>
                      <Button
                        variant="outline"
                        className="animate-button-press"
                        onClick={() => handleShare("facebook")}
                      >
                        <Facebook className="mr-2 h-4 w-4" />
                        Facebook
                      </Button>
                      <Button variant="outline" className="animate-button-press" onClick={() => handleShare("twitter")}>
                        <Twitter className="mr-2 h-4 w-4" />
                        Twitter
                      </Button>
                      <Button
                        variant="outline"
                        className="animate-button-press"
                        onClick={() => handleShare("whatsapp")}
                      >
                        <Image
                          src="/images/social/whatsapp.png"
                          alt="WhatsApp"
                          width={16}
                          height={16}
                          className="mr-2"
                        />
                        WhatsApp
                      </Button>
                      <Button variant="outline" className="animate-button-press" onClick={() => handleShare("more")}>
                        <Share2 className="mr-2 h-4 w-4" />
                        More
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Referral History</CardTitle>
              <CardDescription>Track the status of your referrals</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="all" className="animate-button-press">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="completed" className="animate-button-press">
                    Completed
                  </TabsTrigger>
                  <TabsTrigger value="pending" className="animate-button-press">
                    Pending
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  <div className="space-y-4">
                    {referrals.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <Users className="mx-auto h-12 w-12 mb-4" />
                        <p>No referrals yet</p>
                        <p className="text-sm">Share your referral code to start earning rewards</p>
                      </div>
                    ) : (
                      referrals.map((referral) => (
                        <div
                          key={referral.id}
                          className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted transition-colors"
                        >
                          <div>
                            <h3 className="font-medium">{referral.name}</h3>
                            <p className="text-sm text-muted-foreground">{referral.email}</p>
                            <p className="text-xs text-muted-foreground">Referred on {formatDate(referral.date)}</p>
                          </div>
                          <div className="flex flex-col items-end">
                            <div
                              className={`px-2 py-1 rounded-full text-xs ${
                                referral.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {referral.status === "completed" ? "Completed" : "Pending"}
                            </div>
                            {referral.reward && (
                              <p className="text-sm font-medium text-green-600 mt-1">+{referral.reward} points</p>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="completed">
                  <div className="space-y-4">
                    {referrals.filter((r) => r.status === "completed").length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <Award className="mx-auto h-12 w-12 mb-4" />
                        <p>No completed referrals yet</p>
                        <p className="text-sm">
                          Your referrals will appear here once they sign up and complete the requirements
                        </p>
                      </div>
                    ) : (
                      referrals
                        .filter((r) => r.status === "completed")
                        .map((referral) => (
                          <div
                            key={referral.id}
                            className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted transition-colors"
                          >
                            <div>
                              <h3 className="font-medium">{referral.name}</h3>
                              <p className="text-sm text-muted-foreground">{referral.email}</p>
                              <p className="text-xs text-muted-foreground">Referred on {formatDate(referral.date)}</p>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                Completed
                              </div>
                              {referral.reward && (
                                <p className="text-sm font-medium text-green-600 mt-1">+{referral.reward} points</p>
                              )}
                            </div>
                          </div>
                        ))
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="pending">
                  <div className="space-y-4">
                    {referrals.filter((r) => r.status === "pending").length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <Users className="mx-auto h-12 w-12 mb-4" />
                        <p>No pending referrals</p>
                        <p className="text-sm">
                          All your referrals have been completed or you haven't referred anyone yet
                        </p>
                      </div>
                    ) : (
                      referrals
                        .filter((r) => r.status === "pending")
                        .map((referral) => (
                          <div
                            key={referral.id}
                            className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted transition-colors"
                          >
                            <div>
                              <h3 className="font-medium">{referral.name}</h3>
                              <p className="text-sm text-muted-foreground">{referral.email}</p>
                              <p className="text-xs text-muted-foreground">Referred on {formatDate(referral.date)}</p>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                                Pending
                              </div>
                            </div>
                          </div>
                        ))
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Referrals are marked as completed when your friend signs up and adds their first funds.
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
