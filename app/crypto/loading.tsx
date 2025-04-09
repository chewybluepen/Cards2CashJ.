import { Skeleton } from "@/components/ui/skeleton"
import { PageContainer } from "@/components/layout/page-container"

export default function Loading() {
  return (
    <PageContainer title="Cryptocurrency">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-6">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-full max-w-md" />
        </div>

        <div className="mb-6 flex items-center gap-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-10" />
        </div>

        <div className="mb-6">
          <Skeleton className="h-10 w-full mb-4" />
        </div>

        <div className="mb-6">
          <Skeleton className="h-6 w-48 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-40 w-full rounded-lg" />
              ))}
          </div>
        </div>

        <div>
          <Skeleton className="h-6 w-48 mb-4" />
          <Skeleton className="h-80 w-full rounded-lg" />
        </div>
      </div>
    </PageContainer>
  )
}
