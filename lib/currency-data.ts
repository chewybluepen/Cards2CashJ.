export interface Currency {
  code: string
  name: string
  symbol: string
  flag: string
  region: string
}

// This is a subset of currencies for demonstration
// In a real app, you would include all currencies
export const currencies: Currency[] = [
  // Major currencies
  { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸", region: "North America" },
  { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺", region: "Europe" },
  { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧", region: "Europe" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", flag: "🇯🇵", region: "Asia" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", flag: "🇦🇺", region: "Oceania" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$", flag: "🇨🇦", region: "North America" },
  { code: "CHF", name: "Swiss Franc", symbol: "Fr", flag: "🇨🇭", region: "Europe" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥", flag: "🇨🇳", region: "Asia" },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$", flag: "🇭🇰", region: "Asia" },
  { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$", flag: "🇳🇿", region: "Oceania" },

  // South American currencies
  { code: "ARS", name: "Argentine Peso", symbol: "$", flag: "🇦🇷", region: "South America" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$", flag: "🇧🇷", region: "South America" },
  { code: "CLP", name: "Chilean Peso", symbol: "$", flag: "🇨🇱", region: "South America" },
  { code: "COP", name: "Colombian Peso", symbol: "$", flag: "🇨🇴", region: "South America" },
  { code: "PEN", name: "Peruvian Sol", symbol: "S/", flag: "🇵🇪", region: "South America" },
  { code: "UYU", name: "Uruguayan Peso", symbol: "$", flag: "🇺🇾", region: "South America" },
  { code: "VES", name: "Venezuelan Bolívar", symbol: "Bs.", flag: "🇻🇪", region: "South America" },

  // Caribbean currencies
  { code: "BBD", name: "Barbadian Dollar", symbol: "Bds$", flag: "🇧🇧", region: "Caribbean" },
  { code: "BSD", name: "Bahamian Dollar", symbol: "B$", flag: "🇧🇸", region: "Caribbean" },
  { code: "DOP", name: "Dominican Peso", symbol: "RD$", flag: "🇩🇴", region: "Caribbean" },
  { code: "JMD", name: "Jamaican Dollar", symbol: "J$", flag: "🇯🇲", region: "Caribbean" },
  { code: "TTD", name: "Trinidad and Tobago Dollar", symbol: "TT$", flag: "🇹🇹", region: "Caribbean" },
  { code: "GYD", name: "Guyanese Dollar", symbol: "G$", flag: "🇬🇾", region: "South America" },

  // European currencies
  { code: "BGN", name: "Bulgarian Lev", symbol: "лв", flag: "🇧🇬", region: "Europe" },
  { code: "CZK", name: "Czech Koruna", symbol: "Kč", flag: "🇨🇿", region: "Europe" },
  { code: "DKK", name: "Danish Krone", symbol: "kr", flag: "🇩🇰", region: "Europe" },
  { code: "HUF", name: "Hungarian Forint", symbol: "Ft", flag: "🇭🇺", region: "Europe" },
  { code: "ISK", name: "Icelandic Króna", symbol: "kr", flag: "🇮🇸", region: "Europe" },
  { code: "NOK", name: "Norwegian Krone", symbol: "kr", flag: "🇳🇴", region: "Europe" },
  { code: "PLN", name: "Polish Złoty", symbol: "zł", flag: "🇵🇱", region: "Europe" },
  { code: "RON", name: "Romanian Leu", symbol: "lei", flag: "🇷🇴", region: "Europe" },
  { code: "SEK", name: "Swedish Krona", symbol: "kr", flag: "🇸🇪", region: "Europe" },

  // Asian currencies
  { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp", flag: "🇮🇩", region: "Asia" },
  { code: "INR", name: "Indian Rupee", symbol: "₹", flag: "🇮🇳", region: "Asia" },
  { code: "KRW", name: "South Korean Won", symbol: "₩", flag: "🇰🇷", region: "Asia" },
  { code: "MYR", name: "Malaysian Ringgit", symbol: "RM", flag: "🇲🇾", region: "Asia" },
  { code: "PHP", name: "Philippine Peso", symbol: "₱", flag: "🇵🇭", region: "Asia" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$", flag: "🇸🇬", region: "Asia" },
  { code: "THB", name: "Thai Baht", symbol: "฿", flag: "🇹🇭", region: "Asia" },
  { code: "VND", name: "Vietnamese Đồng", symbol: "₫", flag: "🇻🇳", region: "Asia" },

  // African currencies
  { code: "EGP", name: "Egyptian Pound", symbol: "E£", flag: "🇪🇬", region: "Africa" },
  { code: "GHS", name: "Ghanaian Cedi", symbol: "₵", flag: "🇬🇭", region: "Africa" },
  { code: "KES", name: "Kenyan Shilling", symbol: "KSh", flag: "🇰🇪", region: "Africa" },
  { code: "MAD", name: "Moroccan Dirham", symbol: "د.م.", flag: "🇲🇦", region: "Africa" },
  { code: "NGN", name: "Nigerian Naira", symbol: "₦", flag: "🇳🇬", region: "Africa" },
  { code: "ZAR", name: "South African Rand", symbol: "R", flag: "🇿🇦", region: "Africa" },

  // Middle Eastern currencies
  { code: "AED", name: "United Arab Emirates Dirham", symbol: "د.إ", flag: "🇦🇪", region: "Middle East" },
  { code: "BHD", name: "Bahraini Dinar", symbol: ".د.ب", flag: "🇧🇭", region: "Middle East" },
  { code: "ILS", name: "Israeli New Shekel", symbol: "₪", flag: "🇮🇱", region: "Middle East" },
  { code: "KWD", name: "Kuwaiti Dinar", symbol: "د.ك", flag: "🇰🇼", region: "Middle East" },
  { code: "QAR", name: "Qatari Riyal", symbol: "ر.ق", flag: "🇶🇦", region: "Middle East" },
  { code: "SAR", name: "Saudi Riyal", symbol: "ر.س", flag: "🇸🇦", region: "Middle East" },
  { code: "TRY", name: "Turkish Lira", symbol: "₺", flag: "🇹🇷", region: "Middle East" },
]

export const regions = Array.from(new Set(currencies.map((currency) => currency.region))).sort()

export const getCurrenciesByRegion = (region: string): Currency[] => {
  return currencies.filter((currency) => currency.region === region).sort((a, b) => a.name.localeCompare(b.name))
}

export const getPopularCurrencies = (): Currency[] => {
  const popularCodes = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "GYD"]
  return currencies.filter((currency) => popularCodes.includes(currency.code))
}

export const searchCurrencies = (query: string): Currency[] => {
  const lowerQuery = query.toLowerCase()
  return currencies.filter(
    (currency) => currency.code.toLowerCase().includes(lowerQuery) || currency.name.toLowerCase().includes(lowerQuery),
  )
}
