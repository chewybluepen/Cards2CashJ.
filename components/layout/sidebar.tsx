"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  Bitcoin,
  Building,
  CreditCard,
  DollarSign,
  Gift,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Mail,
  PieChart,
  Plus,
  RefreshCw,
  Send,
  Settings,
  User,
  Wallet,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    crypto: true,
    cards: true,
    banking: true,
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const sidebarItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Add Funds",
      href: "/add-funds",
      icon: Plus,
    },
    {
      title: "Send Money",
      href: "/send",
      icon: Send,
    },
    {
      section: "Crypto",
      icon: Bitcoin,
      items: [
        {
          title: "Explore Crypto",
          href: "/crypto",
          icon: Bitcoin,
        },
        {
          title: "Portfolio",
          href: "/crypto/portfolio",
          icon: PieChart,
        },
        {
          title: "Convert",
          href: "/crypto/converter",
          icon: RefreshCw,
        },
        {
          title: "Tax",
          href: "/crypto/portfolio/tax",
          icon: DollarSign,
        },
      ],
    },
    {
      section: "Cards",
      icon: CreditCard,
      items: [
        {
          title: "My Cards",
          href: "/cards",
          icon: CreditCard,
        },
        {
          title: "Generate Card",
          href: "/generate-card",
          icon: Plus,
        },
      ],
    },
    {
      section: "Banking",
      icon: Building,
      items: [
        {
          title: "Bank Accounts",
          href: "/bank-accounts",
          icon: Building,
        },
        {
          title: "Transfer",
          href: "/transfer",
          icon: RefreshCw,
        },
      ],
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: BarChart3,
    },
    {
      title: "Rewards",
      href: "/rewards",
      icon: Gift,
    },
    {
      title: "Referrals",
      href: "/referrals",
      icon: Mail,
    },
  ]

  const bottomItems = [
    {
      title: "Support",
      href: "/support",
      icon: HelpCircle,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: User,
    },
    {
      title: "Sign Out",
      href: "/",
      icon: LogOut,
    },
  ]

  return (
    <div className={cn("flex flex-col h-full", className)}>
      <div className="px-3 py-2">
        <Link
          href="/dashboard"
          className="flex h-10 items-center justify-start rounded-md bg-tiktok-primary/10 px-4 text-tiktok-primary"
        >
          <Wallet className="mr-2 h-5 w-5 text-tiktok-primary" />
          <span className="font-medium">Cards2Cash</span>
        </Link>
        <div className="mt-8 space-y-2">
          {sidebarItems.map((item, i) => {
            if ("section" in item) {
              return (
                <Collapsible
                  key={i}
                  open={openSections[item.section.toLowerCase()]}
                  onOpenChange={() => toggleSection(item.section.toLowerCase())}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-between font-medium text-white hover:bg-tiktok-darkGray"
                    >
                      <div className="flex items-center">
                        <item.icon className="mr-2 h-5 w-5 text-white" />
                        {item.section}
                      </div>
                      {openSections[item.section.toLowerCase()] ? (
                        <ChevronDown className="h-4 w-4 text-white" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-white" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-4 space-y-1 pt-1">
                    {item.items.map((subItem, j) => (
                      <Link
                        key={j}
                        href={subItem.href}
                        className={cn(
                          "flex h-8 items-center justify-start rounded-md px-3 text-sm font-bold text-black hover:bg-tiktok-darkGray hover:text-black",
                          pathname === subItem.href && "bg-tiktok-darkGray text-black font-bold",
                        )}
                      >
                        <subItem.icon className="mr-2 h-4 w-4 text-black" />
                        {subItem.title}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              )
            }

            return (
              <Link
                key={i}
                href={item.href}
                className={cn(
                  "flex h-10 items-center justify-start rounded-md px-4 text-white/70 hover:bg-tiktok-darkGray hover:text-white",
                  pathname === item.href && "bg-tiktok-darkGray text-tiktok-primary",
                )}
              >
                <item.icon className="mr-2 h-5 w-5 text-white" />
                <span className="font-medium">{item.title}</span>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="mt-auto px-3 py-2">
        {bottomItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={cn(
              "flex h-10 items-center justify-start rounded-md px-4 text-white/70 hover:bg-tiktok-darkGray hover:text-white",
              pathname === item.href && "bg-tiktok-darkGray text-tiktok-primary",
            )}
          >
            <item.icon className="mr-2 h-5 w-5 text-white" />
            <span className="font-medium">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
