export type T_BINANCE_Trade = {
  id: number
  price: string
  qty: string
  quoteQty: string
  time: number
  isBuyerMaker: boolean
  isBestMatch: boolean
}

export type T_BINANCE_AggTrade = {
  a: number   // aggregate trade id
  p: string   // price
  q: string   // quantity
  f: number   // first trade id
  l: number   // last trade id
  T: number   // timestamp
  m: boolean  // was the buyer the maker?
  M: boolean  // was the trade the best price match?
}
