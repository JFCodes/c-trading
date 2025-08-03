import type { T_BACKEND_SymbolsKLinesTimeline } from 'ct-data-types'
import { defineStore } from 'pinia'
// App
import { BackendConnector } from '@/instances'

export const symbolsStore = defineStore('symbols', () => {
  function getSymbolKLinesTimeline (symbol: string): Promise<null | T_BACKEND_SymbolsKLinesTimeline> {
    return BackendConnector.symbols
      .kLineTimeline(symbol)
      .catch(() => null)
  }

  return {
    getSymbolKLinesTimeline,
  }
})
