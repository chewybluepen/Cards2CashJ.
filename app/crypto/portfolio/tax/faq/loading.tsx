import { Skeleton } from "@/components/ui/skeleton"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"

export default function CryptoTaxFAQLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Crypto Tax FAQ" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-4xl">
          <Skeleton className="h-9 w-24 mb-6" />

          <Skeleton className="h-[600px] w-full rounded-lg mb-6" />
          <Skeleton className="h-[100px] w-full rounded-lg" />
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
