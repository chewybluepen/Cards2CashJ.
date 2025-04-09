"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { BottomTabBar } from "@/components/layout/bottom-tab-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertCircle,
  Bell,
  ChevronRight,
  CreditCard,
  Globe,
  HelpCircle,
  Lock,
  LogOut,
  Moon,
  Shield,
  Sun,
  User,
} from "lucide-react"

export default function SettingsPage() {
  const [theme, setTheme] = useState("light")
  const [biometricEnabled, setBiometricEnabled] = useState(true)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Settings" />
      <main className="flex-1 p-4 pb-24 md:pb-8">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="account" className="animate-button-press">
              Account
            </TabsTrigger>
            <TabsTrigger value="security" className="animate-button-press">
              Security
            </TabsTrigger>
            <TabsTrigger value="preferences" className="animate-button-press">
              Preferences
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="guyana">
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guyana">Guyana</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full md:w-auto animate-button-press">Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Linked Accounts</CardTitle>
                <CardDescription>Manage your connected accounts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-100 text-blue-800">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Bank Account</h3>
                      <p className="text-sm text-muted-foreground">Connected to Republic Bank</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Manage
                  </Button>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-green-100 text-green-800">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Social Accounts</h3>
                      <p className="text-sm text-muted-foreground">Google, Facebook</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <Button variant="destructive" className="w-full animate-button-press">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your security preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-100 text-blue-800">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Change Password</h3>
                      <p className="text-sm text-muted-foreground">Update your password regularly</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="animate-button-press">
                    Change
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-purple-100 text-purple-800">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Biometric Authentication</h3>
                      <p className="text-sm text-muted-foreground">Use fingerprint or face ID</p>
                    </div>
                  </div>
                  <Switch checked={biometricEnabled} onCheckedChange={setBiometricEnabled} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-yellow-100 text-yellow-800">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                  </div>
                  <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Device Management</CardTitle>
                <CardDescription>Manage devices that have access to your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                  <div>
                    <h3 className="font-medium">iPhone 13 Pro</h3>
                    <p className="text-sm text-muted-foreground">Last active: Today, 2:30 PM</p>
                  </div>
                  <Button variant="outline" size="sm" className="animate-button-press">
                    Remove
                  </Button>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                  <div>
                    <h3 className="font-medium">MacBook Pro</h3>
                    <p className="text-sm text-muted-foreground">Last active: Yesterday</p>
                  </div>
                  <Button variant="outline" size="sm" className="animate-button-press">
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>App Preferences</CardTitle>
                <CardDescription>Customize your app experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-orange-100 text-orange-800">
                      {theme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="font-medium">Theme</h3>
                      <p className="text-sm text-muted-foreground">{theme === "light" ? "Light mode" : "Dark mode"}</p>
                    </div>
                  </div>
                  <Select
                    value={theme}
                    onValueChange={(value) => {
                      setTheme(value)
                    }}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-red-100 text-red-800">
                      <Bell className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Notifications</h3>
                      <p className="text-sm text-muted-foreground">Enable push notifications</p>
                    </div>
                  </div>
                  <Switch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-green-100 text-green-800">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Language</h3>
                      <p className="text-sm text-muted-foreground">Choose your preferred language</p>
                    </div>
                  </div>
                  <Select defaultValue="en">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Help & Support</CardTitle>
                <CardDescription>Get help with your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-100 text-blue-800">
                      <HelpCircle className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium">FAQs</h3>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-purple-100 text-purple-800">
                      <User className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium">Contact Support</h3>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-green-100 text-green-800">
                      <Shield className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium">Privacy Policy</h3>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-yellow-100 text-yellow-800">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium">Terms of Service</h3>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <BottomTabBar />
    </div>
  )
}
