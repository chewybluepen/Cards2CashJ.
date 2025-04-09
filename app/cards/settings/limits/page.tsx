import { DeepPageLayout } from "@/components/layout/deep-page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, DollarSign, AlertTriangle } from "lucide-react"

export default function CardLimitsPage() {
  return (
    <DeepPageLayout path="/cards/settings/limits">
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Daily Spending Limit
              </CardTitle>
              <CardDescription>Set the maximum amount you can spend per day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="daily-limit">Daily Limit (GYD)</Label>
                    <span className="text-sm font-medium">$50,000</span>
                  </div>
                  <Slider id="daily-limit" defaultValue={[50000]} max={100000} step={1000} className="py-4" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$0</span>
                    <span>$100,000</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="daily-limit-notifications" />
                  <Label htmlFor="daily-limit-notifications">Notify me when I'm approaching my limit</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 h-5 w-5" />
                Transaction Limits
              </CardTitle>
              <CardDescription>Set limits for individual transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="max-transaction">Maximum Transaction Amount (GYD)</Label>
                  <div className="flex items-center">
                    <span className="mr-2">$</span>
                    <Input id="max-transaction" type="number" defaultValue={10000} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="transaction-warning">Warning Threshold</Label>
                    <span className="text-sm font-medium">$5,000</span>
                  </div>
                  <Slider id="transaction-warning" defaultValue={[5000]} max={10000} step={500} className="py-4" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$0</span>
                    <span>$10,000</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="require-confirmation" defaultChecked />
                  <Label htmlFor="require-confirmation">Require confirmation for transactions above threshold</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Merchant Category Restrictions
            </CardTitle>
            <CardDescription>Block transactions for specific merchant categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center space-x-2">
                <Switch id="block-gambling" defaultChecked />
                <Label htmlFor="block-gambling">Gambling</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="block-adult" defaultChecked />
                <Label htmlFor="block-adult">Adult Content</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="block-crypto" />
                <Label htmlFor="block-crypto">Cryptocurrency</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="block-travel" />
                <Label htmlFor="block-travel">Travel & Entertainment</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="block-foreign" />
                <Label htmlFor="block-foreign">Foreign Transactions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="block-retail" />
                <Label htmlFor="block-retail">Retail Shopping</Label>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Restrictions</Button>
          </CardFooter>
        </Card>
      </div>
    </DeepPageLayout>
  )
}
