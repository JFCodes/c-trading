import type { T_BACKEND_SymbolsKLinesTimeline } from 'ct-data-types'
import { BackendConnectorClass } from '../index'

export function SymbolsRouter (api: BackendConnectorClass) {
  return {
    kLineTimeline (symbol: string) {
      const path = `/symbols/${symbol}/k-lines-timeline`
      return api.axios.get<void, T_BACKEND_SymbolsKLinesTimeline>(path)
    },
  }
}
