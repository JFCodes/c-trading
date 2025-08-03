import { Request, Response } from 'express'
import { GetKLinesTimeline } from 'ct-data-fetch'
import type { T_BACKEND_SymbolsKLinesTimeline } from 'ct-data-types'
import { DB_ExchangeSymbols } from 'ct-database'
import { BadRequest, InternalError, NotFound } from '../../utils/response-exit'
import { BinanceConnector } from '../../instances'
import { CastParam_Symbol } from '../../casts'

export default async function (req: Request, res: Response) {
  const symbol = CastParam_Symbol(req)
  if (symbol === null) return BadRequest(res)

  const exchangeSymbol = await DB_ExchangeSymbols.getBySymbol(symbol)
  if (!exchangeSymbol) return NotFound(res)

  const timeline = await GetKLinesTimeline({
    connector: BinanceConnector,
    days: 60,
    symbol,
  })

  const response: T_BACKEND_SymbolsKLinesTimeline = {
    symbol: exchangeSymbol,
    timeline,
  }

  res.status(200).json(response)
}
