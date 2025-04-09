"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { BottomTabBar } from "@/components/layout/bottom-tab-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Bell, CheckCircle2, Clock, CreditCard, DollarSign, Settings, User } from "lucide-react"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Card Created Successfully",
      description: "Your new virtual card has been created and is ready to use.",
      time: "2 hours ago",
      read: false,
      icon: <CreditCard className="h-5 w-5" />,
      type: "success",
    },
    {
      id: 2,
      title: "Funds Added",
      description: "GYD 5,000 has been added to your account.",
      time: "Yesterday",
      read: true,
      icon: <DollarSign className="h-5 w-5" />,
      type: "info",
    },
    {
      id: 3,
      title: "Transaction Completed",
      description: "Your payment of USD 24.99 to Amazon was successful.",
      time: "2 days ago",
      read: true,
      icon: <CheckCircle2 className="h-5 w-5" />,
      type: "success",
    },
    {
      id: 4,
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
      time: "1 week ago",
      read: true,
      icon: <User className="h-5 w-5" />,
      type: "info",
    },
    {
      id: 5,
      title: "Settings Changed",
      description: "Your security settings have been updated.",
      time: "2 weeks ago",
      read: true,
      icon: <Settings className="h-5 w-5" />,
      type: "warning",
    },
  ])

  const [notificationSettings, setNotificationSettings] = useState({
    transactions: true,
    security: true,
    promotions: false,
    accountUpdates: true,
  })

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800"
      case "warning":
        return "bg-yellow-100 text-yellow-800"
      case "error":
        return "bg-red-100 text-red-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    )
  }

  const toggleNotificationSetting = (key: keyof typeof notificationSettings) => {
    setNotificationSettings({
      ...notificationSettings,
      [key]: !notificationSettings[key],
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Notifications" />
      <main className="flex-1 p-4 pb-24 md:pb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <Button variant="outline" size="sm" onClick={markAllAsRead}>
            Mark all as read
          </Button>
        </div>

        <div className="space-y-4 mb-8">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`transition-all ${notification.read ? "opacity-70" : "border-l-4 border-l-blue-500"}`}
            >
              <CardContent className="p-4 flex items-start gap-3">
                <div className={`p-2 rounded-full ${getNotificationColor(notification.type)}`}>{notification.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{notification.title}</h3>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-800">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Transaction Alerts</h3>
                    <p className="text-sm text-muted-foreground">Get notified about all transactions</p>
                  </div>
                </div>
                <Switch
                  checked={notificationSettings.transactions}
                  onCheckedChange={() => toggleNotificationSetting("transactions")}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-red-100 text-red-800">
                    <Bell className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Security Alerts</h3>
                    <p className="text-sm text-muted-foreground">Get notified about security events</p>
                  </div>
                </div>
                <Switch
                  checked={notificationSettings.security}
                  onCheckedChange={() => toggleNotificationSetting("security")}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-green-100 text-green-800">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Promotions & Offers</h3>
                    <p className="text-sm text-muted-foreground">Get notified about deals and offers</p>
                  </div>
                </div>
                <Switch
                  checked={notificationSettings.promotions}
                  onCheckedChange={() => toggleNotificationSetting("promotions")}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-purple-100 text-purple-800">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Account Updates</h3>
                    <p className="text-sm text-muted-foreground">Get notified about account changes</p>
                  </div>
                </div>
                <Switch
                  checked={notificationSettings.accountUpdates}
                  onCheckedChange={() => toggleNotificationSetting("accountUpdates")}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <BottomTabBar />
    </div>
  )
}
