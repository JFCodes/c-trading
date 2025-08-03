import type { T_BINANCE_KLineObject, T_DATA_KLinesTimeline } from 'ct-data-types'
import { E_BINANCE_K_LINES_INTERVALS } from 'ct-data-enums'
import { BinanceConnectorClass } from 'ct-binance-api'

type Options = {
  connector: BinanceConnectorClass
  symbol: string
  days: number
}

export async function GetKLinesTimeline (options: Options): Promise<T_DATA_KLinesTimeline> {
  const { connector, symbol, days } = options

  const expectedResultCount = days * 24 // Using 1hour interval
  const expectedRequests = Math.ceil(expectedResultCount / 1000) // Max limit from api is 1000
  const maxRequests = expectedRequests + 2 // Just to be safe

  const data: Array<T_BINANCE_KLineObject> = []
  let requestCount = 0

  while (data.length < expectedResultCount) {
    requestCount++
    if (requestCount > maxRequests) throw Error('Data not completed after expected number of requests')

    // Endtime is defined if we already have data loaded
    const endTime = data.length > 0
      ? data[0].openTime
      : undefined

    const remainingResults = expectedResultCount - data.length
    const kLines = await connector.kLines({
      interval: E_BINANCE_K_LINES_INTERVALS.HOURS_1,
      limit: Math.min(1000, remainingResults),
      symbol,
      ...(endTime && { endTime }),
    })

    data.unshift(...kLines)
  }

  return data
}
