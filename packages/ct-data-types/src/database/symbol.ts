import { E_BINANCE_SYMBOL_STATUS } from 'ct-data-enums'

export type T_DB_Symbol = {
  status: E_BINANCE_SYMBOL_STATUS
  symbol: string
  base_asset: string
  quote_asset: string

  quote_commission_precision: number
  base_commission_precision: number
  quote_asset_precision: number
  base_asset_precision: number
  quote_precision: number

  quote_order_qty_market_allowed: boolean
  is_margin_trading_allowed: boolean
  is_spot_trading_allowed: boolean
  cancel_replace_allowed: boolean
  allow_trailing_stop: boolean
  iceberg_allowed: boolean
  amend_allowed: boolean
  oco_allowed: boolean
  oto_allowed: boolean
}
