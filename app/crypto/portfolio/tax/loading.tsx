import { Skeleton } from "@/components/ui/skeleton"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"

export default function CryptoTaxLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Crypto Tax" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-4xl">
          <Skeleton className="h-9 w-24 mb-6" />

          <div className="space-y-6">
            <Skeleton className="h-12 w-full mb-4" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Skeleton className="h-[400px] w-full rounded-lg" />
              </div>
              <div>
                <Skeleton className="h-[200px] w-full rounded-lg mb-4" />
                <Skeleton className="h-[150px] w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
