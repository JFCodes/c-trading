import type { T_DATA_KLinesTimeline } from '../data/k-lines-timeline'
import type { T_DB_Symbol } from '../database/symbol'

export type T_BACKEND_SymbolsKLinesTimeline = {
  timeline: T_DATA_KLinesTimeline
  symbol: T_DB_Symbol
}
