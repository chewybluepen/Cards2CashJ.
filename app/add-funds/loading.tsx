import { Header } from "@/components/layout/header"
import { BottomTabBar } from "@/components/layout/bottom-tab-bar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function AddFundsLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Add Funds" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Add Funds</CardTitle>
              <Skeleton className="h-4 w-[250px]" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <BottomTabBar />
    </div>
  )
}
