import type { ReactNode } from "react"
import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { findNavigationItemByPath } from "@/lib/navigation-utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface DeepPageLayoutProps {
  children: ReactNode
  path: string
  showBackButton?: boolean
}

export function DeepPageLayout({ children, path, showBackButton = true }: DeepPageLayoutProps) {
  const navItem = findNavigationItemByPath(path)

  return (
    <div className="min-h-screen bg-background">
      <Header title={navItem?.title || "Page"} showBackButton={showBackButton} showLogo={true} />

      <PageContainer className="py-6 pb-24 md:pb-8">
        <div className="container mx-auto px-4">
          <Breadcrumb />

          <Card>
            <CardHeader>
              <CardTitle>{navItem?.title || "Page"}</CardTitle>
              {navItem?.description && <CardDescription>{navItem.description}</CardDescription>}
            </CardHeader>
            <CardContent>{children}</CardContent>
          </Card>
        </div>
      </PageContainer>
    </div>
  )
}
