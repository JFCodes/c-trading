import type { T_BINANCE_RateLimit } from './rate-limits'
import type { T_BINANCE_Symbol } from './symbol'

export type T_BINANCE_ExchangeInfo = {
  rateLimits: Array<T_BINANCE_RateLimit>
  symbols: Array<T_BINANCE_Symbol>
  serverTime: number
  timezone: 'UTC'

  exchangeFilters: Array<unknown>// TODO
}
