import axios from 'axios'
import { TRF_KLineDataTiObject } from 'ct-data-transforms'
import { CONFIG } from 'ct-config'
import type {
  T_BINANCE_GetHistoricalTradesResponse,
  T_BINANCE_GetHistoricalTradesOptions,
  T_BINANCE_GetAggregateTradesResponse,
  T_BINANCE_GetAggregateTradesOptions,
  T_BINANCE_GetRecentTradesResponse,
  T_BINANCE_GetRecentTradesOptions,
  T_BINANCE_GetOrderBookResponse,
  T_BINANCE_GetOrderBookOptions,
  T_BINANCE_GetKLinesResponse,
  T_BINANCE_GetKLinesOptions,
  T_BINANCE_ExchangeInfo,
  T_BINANCE_KLineObject,

} from 'ct-data-types'

export class BinanceConnectorClass {
  axios = axios.create({})
  hasSession = false

  constructor () {
    this.setupAxios()
  }

  // Meta
  public async checkStatus(): Promise<boolean> {
    return this.axios
      .get('ping')
      .then(() => true)
      .catch(() => false)
  }

  public async serverTime (): Promise<null | number> {
    return this.axios
      .get<void, number>('time')
      .catch(() => null)
  }

  public async exchangeInfo (): Promise<T_BINANCE_ExchangeInfo> {
    return this.axios.get<void, T_BINANCE_ExchangeInfo>('exchangeInfo')
  }

  // Market
  public async orderBook (
    options: T_BINANCE_GetOrderBookOptions
  ): Promise<null | T_BINANCE_GetOrderBookResponse> {
    return this.axios.get<void, T_BINANCE_GetOrderBookResponse>('depth', { params: options })
  }

  public async recentTrades (
    options: T_BINANCE_GetRecentTradesOptions
  ): Promise<null | T_BINANCE_GetRecentTradesResponse> {
    return this.axios.get<void, T_BINANCE_GetRecentTradesResponse>('trades', { params: options })
  }

  public async aggregateTrades (
    options: T_BINANCE_GetAggregateTradesOptions
  ): Promise<null | T_BINANCE_GetAggregateTradesResponse> {
    return this.axios.get<void, T_BINANCE_GetAggregateTradesResponse>('aggTrades', { params: options })
  }

  public async kLines (
    options: T_BINANCE_GetKLinesOptions
  ): Promise<Array<T_BINANCE_KLineObject>> {
    return this.axios
      .get<void, T_BINANCE_GetKLinesResponse>('klines', { params: options })
      .then(result => result.map(TRF_KLineDataTiObject))
  }

  // Is returning 404 at the moment
  public async historicalTrades (
    options: T_BINANCE_GetHistoricalTradesOptions
  ): Promise<null | T_BINANCE_GetHistoricalTradesResponse> {
    return this.axios.get<void, T_BINANCE_GetHistoricalTradesResponse>('historicalTrades', { params: options })
  }

  // Private
  private setupAxios(): void {
    this.axios.interceptors.response.use(response => response.data)
    this.axios.interceptors.request.use(async req => {
      req.baseURL = CONFIG.BINANCE_API.BASE_ENDPOINT
      return req
    })
  }
}
