import { BinanceConnectorClass } from 'ct-binance-api'

export const BinanceConnector = new BinanceConnectorClass()

export function CheckBinanceConnectorStatus (): void {
  BinanceConnector
    .checkStatus()
    .then(isOnline => {
      isOnline
        ? console.log('Binance api online')
        : console.log('Binance api offline')
    })
}