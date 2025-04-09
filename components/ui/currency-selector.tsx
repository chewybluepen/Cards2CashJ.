"use client"

import * as React from "react"
import { Check, ChevronDown, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { currencies, regions, getCurrenciesByRegion, getPopularCurrencies, searchCurrencies } from "@/lib/currency-data"

interface CurrencySelectorProps {
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function CurrencySelector({
  value,
  onValueChange,
  placeholder = "Select currency",
  disabled = false,
  className,
}: CurrencySelectorProps) {
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")

  const selectedCurrency = currencies.find((currency) => currency.code === value)

  const filteredCurrencies = searchQuery ? searchCurrencies(searchQuery) : currencies

  const popularCurrencies = getPopularCurrencies()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn("w-full justify-between", className)}
        >
          {selectedCurrency ? (
            <div className="flex items-center gap-2">
              <span className="text-base">{selectedCurrency.flag}</span>
              <span>{selectedCurrency.code}</span>
              <span className="text-muted-foreground">- {selectedCurrency.name}</span>
            </div>
          ) : (
            placeholder
          )}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              placeholder="Search currencies..."
              className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
          </div>
          <CommandList>
            <CommandEmpty>No currency found.</CommandEmpty>
            {!searchQuery && (
              <>
                <CommandGroup heading="Popular Currencies">
                  <ScrollArea className="h-[200px]">
                    {popularCurrencies.map((currency) => (
                      <CommandItem
                        key={currency.code}
                        value={currency.code}
                        onSelect={() => {
                          onValueChange(currency.code)
                          setOpen(false)
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">{currency.flag}</span>
                          <span className="font-medium">{currency.code}</span>
                          <span className="text-muted-foreground">- {currency.name}</span>
                        </div>
                        <Check
                          className={cn("ml-auto h-4 w-4", value === currency.code ? "opacity-100" : "opacity-0")}
                        />
                      </CommandItem>
                    ))}
                  </ScrollArea>
                </CommandGroup>
                <CommandSeparator />
              </>
            )}
            {regions.map((region) => {
              const regionCurrencies = searchQuery
                ? filteredCurrencies.filter((c) => c.region === region)
                : getCurrenciesByRegion(region)

              if (regionCurrencies.length === 0) return null

              return (
                <CommandGroup key={region} heading={region}>
                  <ScrollArea className="h-[200px]">
                    {regionCurrencies.map((currency) => (
                      <CommandItem
                        key={currency.code}
                        value={currency.code}
                        onSelect={() => {
                          onValueChange(currency.code)
                          setOpen(false)
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">{currency.flag}</span>
                          <span className="font-medium">{currency.code}</span>
                          <span className="text-muted-foreground">- {currency.name}</span>
                        </div>
                        <Check
                          className={cn("ml-auto h-4 w-4", value === currency.code ? "opacity-100" : "opacity-0")}
                        />
                      </CommandItem>
                    ))}
                  </ScrollArea>
                </CommandGroup>
              )
            })}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
