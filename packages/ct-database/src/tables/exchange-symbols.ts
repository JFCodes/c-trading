import type { T_BINANCE_Symbol, T_DB_Symbol } from 'ct-data-types'
import { DATABASE } from '../instance'
import { DB_TABLES } from '../enums'
import { BaseInterface } from './_base'

class Interface extends BaseInterface<T_DB_Symbol> {
  constructor () {
    super({ table: DB_TABLES.EXCHANGE_SYMBOLS })
  }

  public async create (symbol: T_BINANCE_Symbol, ignoreConflict?: boolean): Promise<boolean> {
    return this.insertEntity({
      status: symbol.status,
      symbol: symbol.symbol,
      base_asset: symbol.baseAsset,
      quote_asset: symbol.quoteAsset,

      quote_commission_precision: symbol.quoteCommissionPrecision,
      base_commission_precision: symbol.baseCommissionPrecision,
      quote_asset_precision: symbol.quoteAssetPrecision,
      base_asset_precision: symbol.baseAssetPrecision,
      quote_precision: symbol.quotePrecision,

      quote_order_qty_market_allowed: symbol.quoteOrderQtyMarketAllowed,
      is_margin_trading_allowed: symbol.isMarginTradingAllowed,
      is_spot_trading_allowed: symbol.isSpotTradingAllowed,
      cancel_replace_allowed: symbol.cancelReplaceAllowed,
      allow_trailing_stop: symbol.allowTrailingStop,
      iceberg_allowed: symbol.icebergAllowed,
      amend_allowed: symbol.amendAllowed,
      oco_allowed: symbol.ocoAllowed,
      oto_allowed: symbol.otoAllowed,
    }, ignoreConflict ? 'symbol' : undefined)
  }
}

export const DB_ExchangeSymbols = new Interface()
