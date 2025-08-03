import type { T_BINANCE_AggTrade } from '../trade'

export type T_BINANCE_GetAggregateTradesOptions = {
  symbol: string
  // Optional
  limit?: number // Default: 500; Maximum: 1000.
  startTime?: number
  endTime?: number
  fromId?: number
}

export type T_BINANCE_GetAggregateTradesResponse = Array<T_BINANCE_AggTrade>
