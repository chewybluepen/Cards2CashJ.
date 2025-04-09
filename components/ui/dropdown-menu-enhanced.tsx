"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

interface DropdownMenuEnhancedProps {
  trigger: React.ReactNode
  items?: {
    label?: string
    items: {
      label: string
      icon?: React.ReactNode
      shortcut?: string
      onClick?: () => void
      disabled?: boolean
      href?: string
      items?: {
        label: string
        icon?: React.ReactNode
        shortcut?: string
        onClick?: () => void
        disabled?: boolean
        href?: string
      }[]
    }[]
  }[]
  align?: "start" | "center" | "end"
  className?: string
}

export function DropdownMenuEnhanced({ trigger, items = [], align = "end", className }: DropdownMenuEnhancedProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={cn("flex items-center gap-1", className)}>
          {trigger}
          <ChevronDown className="h-4 w-4 text-white opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="w-56">
        {items &&
          items.map((section, i) => (
            <React.Fragment key={i}>
              {section.label && <DropdownMenuLabel>{section.label}</DropdownMenuLabel>}
              <DropdownMenuGroup>
                {section.items &&
                  section.items.map((item, j) =>
                    item.items ? (
                      <DropdownMenuSub key={j}>
                        <DropdownMenuSubTrigger disabled={item.disabled}>
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          <span>{item.label}</span>
                          {item.shortcut && <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            {item.items.map((subItem, k) => (
                              <DropdownMenuItem
                                key={k}
                                disabled={subItem.disabled}
                                onClick={subItem.onClick}
                                asChild={!!subItem.href}
                              >
                                {subItem.href ? (
                                  <a href={subItem.href}>
                                    {subItem.icon && <span className="mr-2">{subItem.icon}</span>}
                                    <span>{subItem.label}</span>
                                    {subItem.shortcut && (
                                      <DropdownMenuShortcut>{subItem.shortcut}</DropdownMenuShortcut>
                                    )}
                                  </a>
                                ) : (
                                  <>
                                    {subItem.icon && <span className="mr-2">{subItem.icon}</span>}
                                    <span>{subItem.label}</span>
                                    {subItem.shortcut && (
                                      <DropdownMenuShortcut>{subItem.shortcut}</DropdownMenuShortcut>
                                    )}
                                  </>
                                )}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    ) : (
                      <DropdownMenuItem key={j} disabled={item.disabled} onClick={item.onClick} asChild={!!item.href}>
                        {item.href ? (
                          <a href={item.href}>
                            {item.icon && <span className="mr-2">{item.icon}</span>}
                            <span>{item.label}</span>
                            {item.shortcut && <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>}
                          </a>
                        ) : (
                          <>
                            {item.icon && <span className="mr-2">{item.icon}</span>}
                            <span>{item.label}</span>
                            {item.shortcut && <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>}
                          </>
                        )}
                      </DropdownMenuItem>
                    ),
                  )}
              </DropdownMenuGroup>
              {i < items.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Add this component to avoid the error
function DropdownMenuShortcut({ children }: { children: React.ReactNode }) {
  return <span className="ml-auto text-xs tracking-widest opacity-60">{children}</span>
}
