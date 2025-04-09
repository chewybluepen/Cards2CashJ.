/**
 * Dummy implementation to retrieve crypto details by ID.
 *
 * @param id - The cryptocurrency identifier.
 * @returns An object representing the cryptocurrency.
 */
export const getCryptoById = (id: string) => {
  return {
    id,
    name: "Bitcoin",
    price: 50000,
  };
};

/**
 * Dummy crypto data array.
 * Replace this array with actual crypto data as needed.
 */
export const cryptoData = [
  { id: "btc", name: "Bitcoin", price: 50000 },
  { id: "eth", name: "Ethereum", price: 4000 },
];


// Cryptocurrency data
export interface Cryptocurrency {
  id: string
  name: string
  symbol: string
  logo: string
  currentPrice: number
  marketCap: number
  volume24h: number
  change24h: number
  change7d: number
  rank: number
  category: string
  description: string
}

export const categories = [
  "Layer 1",
  "DeFi",
  "Exchange",
  "Stablecoin",
  "NFT",
  "Gaming",
  "Privacy",
  "Storage",
  "Oracle",
  "Meme",
]

export const cryptocurrencies: Cryptocurrency[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    currentPrice: 65432.1,
    marketCap: 1258000000000,
    volume24h: 32500000000,
    change24h: 2.34,
    change7d: 5.67,
    rank: 1,
    category: "Layer 1",
    description:
      "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    currentPrice: 3456.78,
    marketCap: 415000000000,
    volume24h: 18700000000,
    change24h: 1.23,
    change7d: 3.45,
    rank: 2,
    category: "Layer 1",
    description:
      "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform.",
  },
  {
    id: "binancecoin",
    name: "Binance Coin",
    symbol: "BNB",
    logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
    currentPrice: 567.89,
    marketCap: 87600000000,
    volume24h: 2340000000,
    change24h: -0.45,
    change7d: 2.34,
    rank: 3,
    category: "Exchange",
    description: "Binance Coin is the cryptocurrency issued by the Binance exchange and trades with the BNB symbol.",
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
    currentPrice: 123.45,
    marketCap: 54300000000,
    volume24h: 3210000000,
    change24h: 4.56,
    change7d: 12.34,
    rank: 4,
    category: "Layer 1",
    description:
      "Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale.",
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    currentPrice: 0.45,
    marketCap: 15800000000,
    volume24h: 567000000,
    change24h: -1.23,
    change7d: -3.45,
    rank: 5,
    category: "Layer 1",
    description:
      "Cardano is a proof-of-stake blockchain platform: the first to be founded on peer-reviewed research and developed through evidence-based methods.",
  },
  {
    id: "ripple",
    name: "XRP",
    symbol: "XRP",
    logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    currentPrice: 0.56,
    marketCap: 30500000000,
    volume24h: 1230000000,
    change24h: 0.78,
    change7d: 2.34,
    rank: 6,
    category: "Payment",
    description:
      "XRP is the native cryptocurrency of the XRP Ledger, which is an open-source, permissionless and decentralized blockchain technology.",
  },
  {
    id: "polkadot",
    name: "Polkadot",
    symbol: "DOT",
    logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    currentPrice: 6.78,
    marketCap: 8760000000,
    volume24h: 345000000,
    change24h: -2.34,
    change7d: -5.67,
    rank: 7,
    category: "Layer 1",
    description:
      "Polkadot is a sharded heterogeneous multi-chain architecture which enables external networks as well as customized layer one 'parachains' to communicate.",
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    symbol: "DOGE",
    logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    currentPrice: 0.12,
    marketCap: 16700000000,
    volume24h: 890000000,
    change24h: 3.45,
    change7d: 7.89,
    rank: 8,
    category: "Meme",
    description:
      "Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke.",
  },
  {
    id: "avalanche",
    name: "Avalanche",
    symbol: "AVAX",
    logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
    currentPrice: 34.56,
    marketCap: 12300000000,
    volume24h: 567000000,
    change24h: 5.67,
    change7d: 10.11,
    rank: 9,
    category: "Layer 1",
    description:
      "Avalanche is an open-source platform for launching decentralized applications and enterprise blockchain deployments in one interoperable, highly scalable ecosystem.",
  },
  {
    id: "chainlink",
    name: "Chainlink",
    symbol: "LINK",
    logo: "https://cryptologos.cc/logos/chainlink-link-logo.png",
    currentPrice: 12.34,
    marketCap: 7890000000,
    volume24h: 456000000,
    change24h: -0.12,
    change7d: 1.23,
    rank: 10,
    category: "Oracle",
    description:
      "Chainlink is a decentralized oracle network that provides real-world data to smart contracts on the blockchain.",
  },
  {
    id: "uniswap",
    name: "Uniswap",
    symbol: "UNI",
    logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
    currentPrice: 5.67,
    marketCap: 4320000000,
    volume24h: 234000000,
    change24h: 1.23,
    change7d: 4.56,
    rank: 11,
    category: "DeFi",
    description:
      "Uniswap is a popular decentralized trading protocol, known for its role in facilitating automated trading of decentralized finance tokens.",
  },
  {
    id: "tether",
    name: "Tether",
    symbol: "USDT",
    logo: "https://cryptologos.cc/logos/tether-usdt-logo.png",
    currentPrice: 1.0,
    marketCap: 83500000000,
    volume24h: 56700000000,
    change24h: 0.01,
    change7d: 0.02,
    rank: 12,
    category: "Stablecoin",
    description:
      "Tether is a stablecoin pegged to the US dollar, providing individuals with a stable value cryptocurrency that can be used as a medium of exchange.",
  },
  {
    id: "shiba-inu",
    name: "Shiba Inu",
    symbol: "SHIB",
    logo: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
    currentPrice: 0.00001234,
    marketCap: 7230000000,
    volume24h: 345000000,
    change24h: 6.78,
    change7d: 12.34,
    rank: 13,
    category: "Meme",
    description: "Shiba Inu is a decentralized meme token that evolved into a vibrant ecosystem.",
  },
  {
    id: "polygon",
    name: "Polygon",
    symbol: "MATIC",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    currentPrice: 0.78,
    marketCap: 7890000000,
    volume24h: 456000000,
    change24h: 2.34,
    change7d: 5.67,
    rank: 14,
    category: "Layer 2",
    description:
      "Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks.",
  },
  {
    id: "litecoin",
    name: "Litecoin",
    symbol: "LTC",
    logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
    currentPrice: 78.9,
    marketCap: 5670000000,
    volume24h: 345000000,
    change24h: -1.23,
    change7d: -3.45,
    rank: 15,
    category: "Payment",
    description:
      "Litecoin is a peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license.",
  },
]

// Function to search cryptocurrencies
export function searchCryptocurrencies(query: string): Cryptocurrency[] {
  const lowerCaseQuery = query.toLowerCase()
  return cryptocurrencies.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(lowerCaseQuery) || crypto.symbol.toLowerCase().includes(lowerCaseQuery),
  )
}

// Function to get top cryptocurrencies by market cap
export function getTopCryptocurrencies(count: number): Cryptocurrency[] {
  return [...cryptocurrencies].sort((a, b) => b.marketCap - a.marketCap).slice(0, count)
}

// Function to get cryptocurrency by ID
export function getCryptocurrencyById(id: string): Cryptocurrency | undefined {
  return cryptocurrencies.find((crypto) => crypto.id === id)
}

// Function to get cryptocurrencies by category
export function getCryptocurrenciesByCategory(category: string): Cryptocurrency[] {
  return cryptocurrencies.filter((crypto) => crypto.category === category)
}
