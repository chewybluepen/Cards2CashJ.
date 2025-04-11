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
  id: string;
  name: string;
  symbol: string;
  logo: string;
  currentPrice: number;
  marketCap: number;
  volume24h: number;
  change24h: number;
  change7d: number;
  rank: number;
  category: string;
  description: string;
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
];

export const cryptocurrencies: Cryptocurrency[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    logo: "/images/crypto_logos/btc_bitcoin.png",
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
    logo: "/images/crypto_logos/eth_ethereum.png",
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
    logo: "/images/crypto_logos/bnb_bnb.png",
    currentPrice: 567.89,
    marketCap: 87600000000,
    volume24h: 2340000000,
    change24h: -0.45,
    change7d: 2.34,
    rank: 3,
    category: "Exchange",
    description:
      "Binance Coin is the cryptocurrency issued by the Binance exchange and trades with the BNB symbol.",
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    logo: "/images/crypto_logos/sol_solana.png",
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
    logo: "/images/crypto_logos/ada_cardano.png",
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
    logo: "/images/crypto_logos/xrp_xrp.png",
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
    logo: "/images/crypto_logos/dot_polkadot.png",
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
    logo: "/images/crypto_logos/doge_dogecoin.png",
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
    logo: "/images/crypto_logos/avax_avalanche.png",
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
    logo: "/images/crypto_logos/link_chainlink.png",
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
    logo: "/images/crypto_logos/uni_uniswap.png",
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
    logo: "/images/crypto_logos/usdt_tether.png",
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
    logo: "/images/crypto_logos/shib_shiba_inu.png",
    currentPrice: 0.00001234,
    marketCap: 7230000000,
    volume24h: 345000000,
    change24h: 6.78,
    change7d: 12.34,
    rank: 13,
    category: "Meme",
    description:
      "Shiba Inu is a decentralized meme token that evolved into a vibrant ecosystem.",
  },
  {
    id: "polygon",
    name: "Polygon",
    symbol: "MATIC",
    logo: "/images/crypto_logos/pol_pol_(ex-matic).png",
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
    logo: "/images/crypto_logos/ltc_litecoin.png",
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
];

// Function to search cryptocurrencies
export function searchCryptocurrencies(query: string): Cryptocurrency[] {
  const lowerCaseQuery = query.toLowerCase();
  return cryptocurrencies.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(lowerCaseQuery) ||
      crypto.symbol.toLowerCase().includes(lowerCaseQuery)
  );
}

// Function to get top cryptocurrencies by market cap
export function getTopCryptocurrencies(count: number): Cryptocurrency[] {
  return [...cryptocurrencies]
    .sort((a, b) => b.marketCap - a.marketCap)
    .slice(0, count);
}

// Function to get cryptocurrency by ID
export function getCryptocurrencyById(id: string): Cryptocurrency | undefined {
  return cryptocurrencies.find((crypto) => crypto.id === id);
}

// Function to get cryptocurrencies by category
export function getCryptocurrenciesByCategory(category: string): Cryptocurrency[] {
  return cryptocurrencies.filter((crypto) => crypto.category === category);
}
