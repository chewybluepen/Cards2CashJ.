import { Header } from "@/components/layout/header"
import { BottomTabBar } from "@/components/layout/bottom-tab-bar"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Dashboard" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="container mx-auto space-y-6">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-80 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </main>
      <BottomTabBar />
    </div>
  )
}
