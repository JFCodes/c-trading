import type { T_BINANCE_Trade } from '../trade'

export type T_BINANCE_GetRecentTradesOptions = {
  symbol: string
  // Optional
  limit?: number // Default: 500; Maximum: 1000.
}

export type T_BINANCE_GetRecentTradesResponse = Array<T_BINANCE_Trade>
