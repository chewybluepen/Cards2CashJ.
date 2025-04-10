export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-gradient-to-r from-amazon-blue to-amazon-secondary text-white px-4"></div>
      <main className="flex-1 p-4 pb-20 md:pb-4 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 bg-gradient-to-r from-amazon-blue to-amazon-secondary text-white border-t border-amazon-secondary/50"></div>
    </div>
  )
}
