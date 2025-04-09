import { Header } from "@/components/layout/header"
import { BottomTabBar } from "@/components/layout/bottom-tab-bar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function PhoneCreditLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Phone Credit to Digital Funds" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Select Carrier</CardTitle>
              <Skeleton className="h-4 w-[250px]" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-10 w-full" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Skeleton className="h-8 w-[100px]" />
                  <Skeleton className="h-8 w-[100px]" />
                  <Skeleton className="h-8 w-[100px]" />
                  <Skeleton className="h-8 w-[100px]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-24 w-full" />
                ))}
              </div>

              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        </div>
      </main>
      <BottomTabBar />
    </div>
  )
}
