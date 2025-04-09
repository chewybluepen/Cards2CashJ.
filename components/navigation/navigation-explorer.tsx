"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navigationStructure, type NavigationItem, getChildItems } from "@/lib/navigation-utils"
import { ChevronRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface NavigationExplorerProps {
  startingLevel?: number
  parentId?: string
  maxItems?: number
}

export function NavigationExplorer({ startingLevel = 1, parentId, maxItems = 6 }: NavigationExplorerProps) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  // Get items to display
  let items: NavigationItem[] = []
  if (parentId) {
    items = getChildItems(parentId)
  } else {
    items = navigationStructure.filter((item) => item.level === startingLevel).slice(0, maxItems)
  }

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  if (items.length === 0) {
    return (
      <Card>
        <CardContent className="py-6">
          <p className="text-center text-muted-foreground">No navigation items found</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id} className={pathname === item.path ? "border-primary" : ""}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">{item.title}</CardTitle>
              {item.isNew && <Badge>New</Badge>}
            </div>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex items-center">
              <Link href={item.path} className="text-primary hover:underline flex items-center">
                Visit {item.title}
                {item.isExternal && <ExternalLink className="ml-1 h-3 w-3" />}
              </Link>

              {item.children && item.children.length > 0 && (
                <Button variant="ghost" size="sm" className="ml-auto" onClick={() => toggleExpand(item.id)}>
                  {expandedItems.includes(item.id) ? "Hide" : "Show"} Subpages
                  <ChevronRight
                    className={`ml-1 h-4 w-4 transition-transform ${
                      expandedItems.includes(item.id) ? "rotate-90" : ""
                    }`}
                  />
                </Button>
              )}
            </div>

            {expandedItems.includes(item.id) && item.children && (
              <div className="mt-4 pl-4 border-l-2 border-muted">
                <NavigationExplorer parentId={item.id} maxItems={maxItems} />
              </div>
            )}
          </CardContent>

          <CardFooter className="text-xs text-muted-foreground pt-0">Level {item.level} navigation</CardFooter>
        </Card>
      ))}
    </div>
  )
}
