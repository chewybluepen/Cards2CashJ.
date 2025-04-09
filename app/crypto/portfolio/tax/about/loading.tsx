import { Skeleton } from "@/components/ui/skeleton"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"

export default function CryptoTaxAboutLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title="About Crypto Tax" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-4xl">
          <Skeleton className="h-9 w-24 mb-6" />

          <Skeleton className="h-[300px] w-full rounded-lg mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Skeleton className="h-[200px] w-full rounded-lg" />
            <Skeleton className="h-[200px] w-full rounded-lg" />
            <Skeleton className="h-[200px] w-full rounded-lg" />
            <Skeleton className="h-[200px] w-full rounded-lg" />
          </div>

          <Skeleton className="h-[150px] w-full rounded-lg" />
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
