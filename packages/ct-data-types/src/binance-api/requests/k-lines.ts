import { E_BINANCE_K_LINES_INTERVALS } from 'ct-data-enums'
import type { T_BINANCE_KLineData } from '../k-lines'

export type T_BINANCE_GetKLinesOptions = {
  interval: E_BINANCE_K_LINES_INTERVALS
  symbol: string
  // Optional
  startTime?: number
  endTime?: number
  timeZone?: string // default: 0 (UTC)
  limit?: number // Default: 500; Maximum: 1000.
}

export type T_BINANCE_GetKLinesResponse = Array<T_BINANCE_KLineData>
