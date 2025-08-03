import type { T_BINANCE_Trade } from '../trade'

export type T_BINANCE_GetHistoricalTradesOptions = {
  symbol: string
  // Optional
  limit?: number // Default: 500; Maximum: 1000.
  fromId?: number
}

export type T_BINANCE_GetHistoricalTradesResponse = Array<T_BINANCE_Trade>
