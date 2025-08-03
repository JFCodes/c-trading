import type { T_BINANCE_KLineData, T_BINANCE_KLineObject } from 'ct-data-types'

export function TRF_KLineDataTiObject(data: T_BINANCE_KLineData): T_BINANCE_KLineObject {
  return {
    openTime: data[0],
    openPrice: data[1],
    highPrice: data[2],
    lowPrice: data[3],
    closePrice: data[4],
    volume: data[5],
    closeTime: data[6],
    quoteAssetVolume: data[7],
    tradesCount: data[8],
    takerBuyBaseAssetVolume: data[9],
    takerBuyQuoteAssetVolume: data[10],
  }
}
