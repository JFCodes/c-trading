import { BinanceConnectorClass } from 'ct-binance-api'
import { E_BINANCE_K_LINES_INTERVALS } from 'ct-data-enums'
import { DB_ExchangeSymbols } from 'ct-database'

import { GetKLinesTimeline } from '../market-data/k-lines-timeline'

const BinanceConnector = new BinanceConnectorClass()

const execution = async () => {
  const isOnline = await BinanceConnector.checkStatus()
  if (!isOnline) throw Error('Binance api is offline')

  const kLines = await GetKLinesTimeline({
    connector: BinanceConnector,
    symbol: 'BTCUSDC',
    days: 60
  })
}

execution().then(() => process.exit(0))
