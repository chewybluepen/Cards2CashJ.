import { Skeleton } from "@nextui-org/react"

const LoadingWatchlist = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <Skeleton className="w-24 h-3 rounded-md" />
              <Skeleton className="w-16 h-3 rounded-md" />
            </div>
          </div>
          <div className="flex flex-col items-end">
            <Skeleton className="w-16 h-3 rounded-md" />
            <Skeleton className="w-12 h-3 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoadingWatchlist
