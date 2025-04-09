import { DeepPageLayout } from "@/components/layout/deep-page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QrCode, Smartphone, Shield, Key, Mail } from "lucide-react"

export default function TwoFactorAuthPage() {
  return (
    <DeepPageLayout path="/cards/settings/security/two-factor">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Two-Factor Authentication
            </CardTitle>
            <CardDescription>
              Add an extra layer of security to your account by requiring a second form of authentication
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Protect your account with 2FA</p>
                </div>
              </div>
              <Switch id="enable-2fa" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="app">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="app">Authenticator App</TabsTrigger>
            <TabsTrigger value="sms">SMS</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
          </TabsList>

          <TabsContent value="app" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Authenticator App
                </CardTitle>
                <CardDescription>Use an authenticator app like Google Authenticator or Authy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <div className="flex h-56 w-56 items-center justify-center rounded-md border border-dashed">
                    <QrCode className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Setup Instructions:</p>
                    <ol className="list-decimal pl-4 text-sm">
                      <li className="mb-2">Download an authenticator app like Google Authenticator or Authy</li>
                      <li className="mb-2">Scan the QR code with the app</li>
                      <li className="mb-2">Enter the 6-digit code from the app below</li>
                    </ol>
                    <div className="space-y-2">
                      <Label htmlFor="auth-code">Verification Code</Label>
                      <Input id="auth-code" placeholder="Enter 6-digit code" maxLength={6} />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Verify and Activate</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Key className="mr-2 h-5 w-5" />
                  Backup Codes
                </CardTitle>
                <CardDescription>
                  Generate backup codes to use when you don't have access to your authenticator app
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Backup codes are one-time use codes that you can use instead of your authenticator app. Save these
                  codes in a secure place.
                </p>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="rounded-md border p-2 text-center font-mono text-sm">
                      XXXX-XXXX
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="mr-2">
                  Generate New Codes
                </Button>
                <Button variant="secondary">Download Codes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="sms" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="mr-2 h-5 w-5" />
                  SMS Authentication
                </CardTitle>
                <CardDescription>Receive verification codes via SMS</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone-number">Phone Number</Label>
                  <Input id="phone-number" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sms-code">Verification Code</Label>
                  <div className="flex space-x-2">
                    <Input id="sms-code" placeholder="Enter code" />
                    <Button variant="outline">Send Code</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Verify and Activate</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="email" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Authentication
                </CardTitle>
                <CardDescription>Receive verification codes via email</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" value="user@example.com" disabled />
                  <p className="text-xs text-muted-foreground">
                    This is the email address associated with your account
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-code">Verification Code</Label>
                  <div className="flex space-x-2">
                    <Input id="email-code" placeholder="Enter code" />
                    <Button variant="outline">Send Code</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Verify and Activate</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DeepPageLayout>
  )
}
