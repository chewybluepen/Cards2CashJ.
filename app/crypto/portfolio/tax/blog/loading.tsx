import { Skeleton } from "@/components/ui/skeleton"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"

export default function CryptoTaxBlogLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Crypto Tax Blog" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-4xl">
          <Skeleton className="h-9 w-24 mb-6" />

          <div className="mb-8">
            <Skeleton className="h-10 w-64 mb-4" />
            <Skeleton className="h-5 w-full max-w-md mb-6" />
            <Skeleton className="h-10 w-full max-w-md" />
          </div>

          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-[200px] w-full rounded-lg" />
            ))}
          </div>
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
