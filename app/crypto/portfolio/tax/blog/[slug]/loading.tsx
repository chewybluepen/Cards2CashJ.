import { Skeleton } from "@/components/ui/skeleton"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"

export default function CryptoTaxBlogPostLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Loading Blog Post..." />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-3xl">
          <Skeleton className="h-9 w-24 mb-6" />

          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-5 w-1/2 mb-6" />

          <div className="space-y-4 mb-8">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </div>

          <div className="space-y-4 mb-8">
            <Skeleton className="h-8 w-1/3 mb-2" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
          </div>

          <div className="space-y-4 mb-8">
            <Skeleton className="h-8 w-1/3 mb-2" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
          </div>

          <Skeleton className="h-10 w-full mb-8" />

          <Skeleton className="h-8 w-1/3 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Skeleton className="h-[100px] w-full rounded-lg" />
            <Skeleton className="h-[100px] w-full rounded-lg" />
          </div>
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
