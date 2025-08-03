export type T_BINANCE_GetOrderBookOptions = {
  symbol: string
  // Optional
  limit?: number // Default: 100; Maximum: 5000
}

// Array[price, quantity] numbers as string
type T_BINANCE_GetOrderBookEntry = [string, string]

export type T_BINANCE_GetOrderBookResponse = {
  bids: Array<T_BINANCE_GetOrderBookEntry>
  asks: Array<T_BINANCE_GetOrderBookEntry>
  lastUpdateId: string
}