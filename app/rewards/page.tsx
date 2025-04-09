"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Award,
  CreditCard,
  Gift,
  HeadphonesIcon,
  RefreshCw,
  ShoppingBag,
  Star,
  Ticket,
  Trophy,
  Users,
} from "lucide-react"

export default function RewardsPage() {
  const [points, setPoints] = useState(750)
  const [tier, setTier] = useState("silver")
  const [nextTier, setNextTier] = useState("gold")
  const [pointsToNextTier, setPointsToNextTier] = useState(250)

  const rewards = [
    {
      id: "1",
      title: "5% Discount on Next Card",
      description: "Get 5% off your next virtual card generation",
      points: 200,
      icon: <CreditCard className="h-8 w-8 text-primary" />,
    },
    {
      id: "2",
      title: "Free Currency Conversion",
      description: "No fees on your next currency conversion",
      points: 300,
      icon: <RefreshCw className="h-8 w-8 text-primary" />,
    },
    {
      id: "3",
      title: "Amazon Gift Card",
      description: "$10 Amazon gift card",
      points: 1000,
      icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    },
    {
      id: "4",
      title: "Premium Support",
      description: "Priority customer support for 1 month",
      points: 500,
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
    },
  ]

  const partners = [
    {
      id: "1",
      name: "Amazon",
      discount: "10% off",
      expiresIn: "3 days",
    },
    {
      id: "2",
      name: "Netflix",
      discount: "1 month free",
      expiresIn: "5 days",
    },
    {
      id: "3",
      name: "Uber",
      discount: "15% off next ride",
      expiresIn: "7 days",
    },
  ]

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "bronze":
        return "text-amber-700"
      case "silver":
        return "text-slate-400"
      case "gold":
        return "text-yellow-500"
      case "platinum":
        return "text-purple-500"
      default:
        return "text-slate-400"
    }
  }

  const handleRedeemReward = (rewardId: string) => {
    const reward = rewards.find((r) => r.id === rewardId)
    if (reward && points >= reward.points) {
      setPoints((prev) => prev - reward.points)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Rewards" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-lg">Your Rewards</CardTitle>
                    <CardDescription>Earn points with every transaction</CardDescription>
                  </div>
                  <div className="flex items-center">
                    <Trophy className={`mr-2 h-5 w-5 ${getTierColor(tier)}`} />
                    <span className={`font-bold capitalize ${getTierColor(tier)}`}>{tier}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Available Points</p>
                      <p className="text-3xl font-bold">{points}</p>
                    </div>
                    <Button className="animate-button-press">
                      <Gift className="mr-2 h-4 w-4" />
                      Redeem Points
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress to {nextTier}</span>
                      <span>{1000 - pointsToNextTier}/1000 points</span>
                    </div>
                    <Progress value={(1000 - pointsToNextTier) / 10} />
                    <p className="text-xs text-muted-foreground">
                      Earn {pointsToNextTier} more points to reach {nextTier} tier
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="rewards" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="rewards" className="animate-button-press">
                Rewards
              </TabsTrigger>
              <TabsTrigger value="partners" className="animate-button-press">
                Partner Offers
              </TabsTrigger>
              <TabsTrigger value="referrals" className="animate-button-press">
                Referrals
              </TabsTrigger>
            </TabsList>

            <TabsContent value="rewards">
              <div className="grid gap-4 md:grid-cols-2">
                {rewards.map((reward) => (
                  <Card key={reward.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col h-full">
                        <div className="bg-muted p-4 flex items-center justify-center">{reward.icon}</div>
                        <div className="p-4 flex-1">
                          <h3 className="font-medium">{reward.title}</h3>
                          <p className="text-sm text-muted-foreground">{reward.description}</p>
                        </div>
                        <div className="p-4 border-t flex justify-between items-center">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="font-medium">{reward.points} points</span>
                          </div>
                          <Button
                            size="sm"
                            className="animate-button-press"
                            disabled={points < reward.points}
                            onClick={() => handleRedeemReward(reward.id)}
                          >
                            Redeem
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="partners">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Exclusive Partner Offers</CardTitle>
                  <CardDescription>Special deals from our partners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {partners.map((partner) => (
                      <div
                        key={partner.id}
                        className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <div>
                          <h3 className="font-medium">{partner.name}</h3>
                          <p className="text-sm text-muted-foreground">{partner.discount}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            Expires in {partner.expiresIn}
                          </Badge>
                          <Button size="sm" className="animate-button-press">
                            Claim
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="referrals">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Refer Friends & Earn</CardTitle>
                  <CardDescription>Invite friends to Cards2Cash and earn rewards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="font-medium mb-2">Your Referral Code</h3>
                    <div className="flex">
                      <Input value="CARDS2CASH123" readOnly className="font-mono" />
                      <Button
                        variant="outline"
                        className="ml-2"
                        onClick={() => navigator.clipboard.writeText("CARDS2CASH123")}
                      >
                        Copy
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border p-4 text-center">
                      <div className="flex justify-center mb-2">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-medium">5</h3>
                      <p className="text-sm text-muted-foreground">Friends Invited</p>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <div className="flex justify-center mb-2">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-medium">3</h3>
                      <p className="text-sm text-muted-foreground">Successful Referrals</p>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <div className="flex justify-center mb-2">
                        <Star className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-medium">300</h3>
                      <p className="text-sm text-muted-foreground">Points Earned</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button className="animate-button-press">
                      <Users className="mr-2 h-4 w-4" />
                      Invite Friends
                    </Button>
                    <Button variant="outline" className="animate-button-press">
                      <Ticket className="mr-2 h-4 w-4" />
                      View Referral History
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
