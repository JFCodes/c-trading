import type { Request } from 'express'
import { TRF_CAST_Symbol } from 'ct-data-transforms'

export function CastParam_Symbol (req: Request): null | string {
  const reqSymbol = req.params.symbol

  if (!reqSymbol) return null
  if (typeof reqSymbol !== 'string') return null

  const symbol = TRF_CAST_Symbol(reqSymbol)
  if (symbol === '') return null

  return symbol
}