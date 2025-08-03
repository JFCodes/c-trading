import {
  E_BINANCE_SYMBOL_SELF_TRADE_PREVENTION,
  E_BINANCE_SYMBOL_ORDER_TYPES,
  E_BINANCE_SYMBOL_PERMISSIONS,
  E_BINANCE_SYMBOL_STATUS,
} from 'ct-data-enums'

export type T_BINANCE_Symbol = {
  status: E_BINANCE_SYMBOL_STATUS
  orderTypes: Array<E_BINANCE_SYMBOL_ORDER_TYPES>

  symbol: string
  baseAsset: string
  quoteAsset: string

  quoteCommissionPrecision: number
  baseCommissionPrecision: number
  quoteAssetPrecision: number
  baseAssetPrecision: number
  quotePrecision: number

  quoteOrderQtyMarketAllowed: boolean
  isMarginTradingAllowed: boolean
  isSpotTradingAllowed: boolean
  cancelReplaceAllowed: boolean
  allowTrailingStop: boolean
  icebergAllowed: boolean
  amendAllowed: boolean
  ocoAllowed: boolean
  otoAllowed: boolean
  
  defaultSelfTradePreventionMode: E_BINANCE_SYMBOL_SELF_TRADE_PREVENTION
  allowedSelfTradePreventionModes: Array<E_BINANCE_SYMBOL_SELF_TRADE_PREVENTION>

  permissionSets: Array<E_BINANCE_SYMBOL_PERMISSIONS> // TODO
  permissions: Array<unknown> // TODO
}
