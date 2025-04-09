// Navigation utility to manage deep navigation structure
export type NavigationItem = {
  id: string
  title: string
  path: string
  icon?: string
  children?: NavigationItem[]
  parent?: string
  level: number
  description?: string
  isNew?: boolean
  isExternal?: boolean
  requiresAuth?: boolean
}

// Define the complete navigation structure
export const navigationStructure: NavigationItem[] = [
  // Level 1 (Primary)
  {
    id: "dashboard",
    title: "Dashboard",
    path: "/dashboard",
    level: 1,
    description: "Overview of your account and recent activity",
  },
  {
    id: "cards",
    title: "Cards",
    path: "/cards",
    level: 1,
    description: "Manage your virtual cards",
    children: [
      // Level 2 (Secondary)
      {
        id: "generate-card",
        title: "Generate Card",
        path: "/generate-card",
        parent: "cards",
        level: 2,
        description: "Create a new virtual card",
      },
      {
        id: "card-settings",
        title: "Card Settings",
        path: "/cards/settings",
        parent: "cards",
        level: 2,
        description: "Manage your card settings",
        children: [
          // Level 3 (Tertiary)
          {
            id: "card-limits",
            title: "Card Limits",
            path: "/cards/settings/limits",
            parent: "card-settings",
            level: 3,
            description: "Set spending limits for your cards",
          },
          {
            id: "card-security",
            title: "Card Security",
            path: "/cards/settings/security",
            parent: "card-settings",
            level: 3,
            description: "Manage security settings for your cards",
            children: [
              // Level 4 (Quaternary)
              {
                id: "two-factor",
                title: "Two-Factor Authentication",
                path: "/cards/settings/security/two-factor",
                parent: "card-security",
                level: 4,
                description: "Set up two-factor authentication for card transactions",
              },
              {
                id: "pin-management",
                title: "PIN Management",
                path: "/cards/settings/security/pin",
                parent: "card-security",
                level: 4,
                description: "Manage your card PINs",
                children: [
                  // Level 5 (Quintenary)
                  {
                    id: "pin-reset",
                    title: "Reset PIN",
                    path: "/cards/settings/security/pin/reset",
                    parent: "pin-management",
                    level: 5,
                    description: "Reset your card PIN",
                  },
                  {
                    id: "pin-history",
                    title: "PIN History",
                    path: "/cards/settings/security/pin/history",
                    parent: "pin-management",
                    level: 5,
                    description: "View your PIN change history",
                    children: [
                      // Level 6 (Senary)
                      {
                        id: "pin-history-detail",
                        title: "PIN Change Details",
                        path: "/cards/settings/security/pin/history/details",
                        parent: "pin-history",
                        level: 6,
                        description: "View detailed information about PIN changes",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "card-transactions",
        title: "Card Transactions",
        path: "/cards/transactions",
        parent: "cards",
        level: 2,
        description: "View your card transaction history",
        children: [
          // Level 3 (Tertiary)
          {
            id: "transaction-filters",
            title: "Transaction Filters",
            path: "/cards/transactions/filters",
            parent: "card-transactions",
            level: 3,
            description: "Filter your transaction history",
          },
          {
            id: "transaction-export",
            title: "Export Transactions",
            path: "/cards/transactions/export",
            parent: "card-transactions",
            level: 3,
            description: "Export your transaction history",
            children: [
              // Level 4 (Quaternary)
              {
                id: "export-pdf",
                title: "Export as PDF",
                path: "/cards/transactions/export/pdf",
                parent: "transaction-export",
                level: 4,
                description: "Export your transaction history as PDF",
              },
              {
                id: "export-csv",
                title: "Export as CSV",
                path: "/cards/transactions/export/csv",
                parent: "transaction-export",
                level: 4,
                description: "Export your transaction history as CSV",
                children: [
                  // Level 5 (Quintenary)
                  {
                    id: "csv-options",
                    title: "CSV Options",
                    path: "/cards/transactions/export/csv/options",
                    parent: "export-csv",
                    level: 5,
                    description: "Configure CSV export options",
                    children: [
                      // Level 6 (Senary)
                      {
                        id: "csv-delimiter",
                        title: "CSV Delimiter",
                        path: "/cards/transactions/export/csv/options/delimiter",
                        parent: "csv-options",
                        level: 6,
                        description: "Set CSV delimiter options",
                        children: [
                          // Level 7 (Septimal)
                          {
                            id: "delimiter-preview",
                            title: "Delimiter Preview",
                            path: "/cards/transactions/export/csv/options/delimiter/preview",
                            parent: "csv-delimiter",
                            level: 7,
                            description: "Preview CSV with selected delimiter",
                            children: [
                              // Level 8 (Octal)
                              {
                                id: "preview-settings",
                                title: "Preview Settings",
                                path: "/cards/transactions/export/csv/options/delimiter/preview/settings",
                                parent: "delimiter-preview",
                                level: 8,
                                description: "Configure preview settings",
                                children: [
                                  // Level 9 (Nonal)
                                  {
                                    id: "preview-columns",
                                    title: "Column Selection",
                                    path: "/cards/transactions/export/csv/options/delimiter/preview/settings/columns",
                                    parent: "preview-settings",
                                    level: 9,
                                    description: "Select columns to include in preview",
                                    children: [
                                      // Level 10 (Decimal)
                                      {
                                        id: "column-order",
                                        title: "Column Order",
                                        path: "/cards/transactions/export/csv/options/delimiter/preview/settings/columns/order",
                                        parent: "preview-columns",
                                        level: 10,
                                        description: "Set the order of columns in the export",
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "crypto",
    title: "Crypto",
    path: "/crypto",
    level: 1,
    description: "Manage your cryptocurrency",
    children: [
      // Level 2 (Secondary)
      {
        id: "crypto-portfolio",
        title: "Portfolio",
        path: "/crypto/portfolio",
        parent: "crypto",
        level: 2,
        description: "View your cryptocurrency portfolio",
        children: [
          // Level 3 (Tertiary)
          {
            id: "portfolio-analytics",
            title: "Portfolio Analytics",
            path: "/crypto/portfolio/analytics",
            parent: "crypto-portfolio",
            level: 3,
            description: "Analyze your portfolio performance",
            children: [
              // Level 4 (Quaternary)
              {
                id: "performance-metrics",
                title: "Performance Metrics",
                path: "/crypto/portfolio/analytics/performance",
                parent: "portfolio-analytics",
                level: 4,
                description: "View detailed performance metrics",
                children: [
                  // Level 5 (Quintenary)
                  {
                    id: "historical-comparison",
                    title: "Historical Comparison",
                    path: "/crypto/portfolio/analytics/performance/historical",
                    parent: "performance-metrics",
                    level: 5,
                    description: "Compare performance over time",
                    children: [
                      // Level 6 (Senary)
                      {
                        id: "custom-timeframes",
                        title: "Custom Timeframes",
                        path: "/crypto/portfolio/analytics/performance/historical/timeframes",
                        parent: "historical-comparison",
                        level: 6,
                        description: "Set custom timeframes for comparison",
                        children: [
                          // Level 7 (Septimal)
                          {
                            id: "timeframe-presets",
                            title: "Timeframe Presets",
                            path: "/crypto/portfolio/analytics/performance/historical/timeframes/presets",
                            parent: "custom-timeframes",
                            level: 7,
                            description: "Use predefined timeframe presets",
                            children: [
                              // Level 8 (Octal)
                              {
                                id: "preset-management",
                                title: "Preset Management",
                                path: "/crypto/portfolio/analytics/performance/historical/timeframes/presets/manage",
                                parent: "timeframe-presets",
                                level: 8,
                                description: "Manage your timeframe presets",
                                children: [
                                  // Level 9 (Nonal)
                                  {
                                    id: "preset-sharing",
                                    title: "Preset Sharing",
                                    path: "/crypto/portfolio/analytics/performance/historical/timeframes/presets/manage/share",
                                    parent: "preset-management",
                                    level: 9,
                                    description: "Share your presets with others",
                                    children: [
                                      // Level 10 (Decimal)
                                      {
                                        id: "sharing-permissions",
                                        title: "Sharing Permissions",
                                        path: "/crypto/portfolio/analytics/performance/historical/timeframes/presets/manage/share/permissions",
                                        parent: "preset-sharing",
                                        level: 10,
                                        description: "Manage permissions for shared presets",
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

// Helper function to find a navigation item by path
export function findNavigationItemByPath(path: string): NavigationItem | undefined {
  const findItem = (items: NavigationItem[]): NavigationItem | undefined => {
    for (const item of items) {
      if (item.path === path) {
        return item
      }
      if (item.children) {
        const found = findItem(item.children)
        if (found) return found
      }
    }
    return undefined
  }

  return findItem(navigationStructure)
}

// Helper function to get breadcrumb trail for a path
export function getBreadcrumbTrail(path: string): NavigationItem[] {
  const breadcrumbs: NavigationItem[] = []
  const item = findNavigationItemByPath(path)

  if (!item) return breadcrumbs

  let currentItem: NavigationItem | undefined = item
  breadcrumbs.unshift(currentItem)

  while (currentItem && currentItem.parent) {
    const parentItem = findNavigationItemByPath(
      navigationStructure.flat(Number.POSITIVE_INFINITY).find((i) => i.id === currentItem?.parent)?.path || "",
    )
    if (parentItem) {
      breadcrumbs.unshift(parentItem)
      currentItem = parentItem
    } else {
      break
    }
  }

  return breadcrumbs
}

// Helper function to get all items at a specific level
export function getItemsByLevel(level: number): NavigationItem[] {
  const findItems = (items: NavigationItem[], currentLevel: number): NavigationItem[] => {
    let result: NavigationItem[] = []

    for (const item of items) {
      if (item.level === currentLevel) {
        result.push(item)
      }
      if (item.children) {
        result = [...result, ...findItems(item.children, currentLevel)]
      }
    }

    return result
  }

  return findItems(navigationStructure, level)
}

// Helper function to get child items for a parent
export function getChildItems(parentId: string): NavigationItem[] {
  const findChildren = (items: NavigationItem[]): NavigationItem[] => {
    let result: NavigationItem[] = []

    for (const item of items) {
      if (item.parent === parentId) {
        result.push(item)
      }
      if (item.children) {
        result = [...result, ...findChildren(item.children)]
      }
    }

    return result
  }

  return findChildren(navigationStructure)
}
