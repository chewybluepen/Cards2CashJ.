import type React from "react"
import { Header } from "./header"
import { BottomTabBar } from "./bottom-tab-bar"

interface PageContainerProps {
  children: React.ReactNode
  title?: string
}

export function PageContainer({ children, title }: PageContainerProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title={title} />
      <main className="flex-1 p-4 pb-20 md:pb-4">{children}</main>
      <BottomTabBar />
    </div>
  )
}
