import {
  E_BINANCE_RATE_LIMIT_TYPE_INTERVAL,
  E_BINANCE_RATE_LIMIT_TYPE
} from 'ct-data-enums'

export type T_BINANCE_RateLimit = {
  interval: E_BINANCE_RATE_LIMIT_TYPE_INTERVAL,
  rateLimitType: E_BINANCE_RATE_LIMIT_TYPE
  intervalNum: number
  limit: number
}
