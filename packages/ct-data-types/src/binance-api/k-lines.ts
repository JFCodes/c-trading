export type T_BINANCE_KLineData = [
  number,   // Kline open time
  string,   // Open price
  string,   // High price
  string,   // Low price
  string,   // Close price
  string,   // Volume
  number,   // Kline Close time
  string,   // Quote asset volume
  number,   // Number of trades
  string,   // Taker buy base asset volume
  string,   // Taker buy quote asset volume
  string    // Unused field, ignore.
]

export type T_BINANCE_KLineObject = {
  openTime: number
  openPrice: string
  highPrice: string
  lowPrice: string
  closePrice: string
  volume: string
  closeTime: number
  quoteAssetVolume: string
  tradesCount: number
  takerBuyBaseAssetVolume: string
  takerBuyQuoteAssetVolume: string
}
