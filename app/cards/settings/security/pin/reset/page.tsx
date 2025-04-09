import { DeepPageLayout } from "@/components/layout/deep-page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Key, AlertTriangle, ShieldCheck } from "lucide-react"

export default function PinResetPage() {
  return (
    <DeepPageLayout path="/cards/settings/security/pin/reset">
      <div className="space-y-6">
        <Alert variant="warning">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Important Security Notice</AlertTitle>
          <AlertDescription>
            For security reasons, you will not be able to use your card for 24 hours after resetting your PIN.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Key className="mr-2 h-5 w-5" />
              Reset Your Card PIN
            </CardTitle>
            <CardDescription>Create a new PIN for your virtual card</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-pin">Current PIN</Label>
              <Input id="current-pin" type="password" maxLength={4} placeholder="••••" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-pin">New PIN</Label>
              <Input id="new-pin" type="password" maxLength={4} placeholder="••••" />
              <p className="text-xs text-muted-foreground">
                Your PIN must be 4 digits and should not be easily guessable (e.g., 1234, 0000)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-pin">Confirm New PIN</Label>
              <Input id="confirm-pin" type="password" maxLength={4} placeholder="••••" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 w-full">
              <Button className="w-full">Reset PIN</Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              After resetting your PIN, you will receive a confirmation via email and SMS
            </p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShieldCheck className="mr-2 h-5 w-5" />
              PIN Security Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Never share your PIN with anyone, including Cards2Cash staff</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Avoid using easily guessable PINs like birthdays or sequential numbers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Use a different PIN for each of your cards</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Change your PIN regularly for enhanced security</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>If you suspect your PIN has been compromised, reset it immediately</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DeepPageLayout>
  )
}
