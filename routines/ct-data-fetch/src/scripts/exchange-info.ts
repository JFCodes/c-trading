import { BinanceConnectorClass } from 'ct-binance-api'
import { DB_ExchangeSymbols } from 'ct-database'
import { writeFileSync } from 'fs'

const BinanceConnector = new BinanceConnectorClass()

const execution = async () => {
  // const isOnline = await BinanceConnector.checkStatus()
  // if (!isOnline) throw Error('Binance api is offline')

  // const exchangeInfo = await BinanceConnector.exchangeInfo()
  // const exchangeInfoString = JSON.stringify(exchangeInfo, null, 2)
  // writeFileSync('src/dump/exchange-info.json', exchangeInfoString)
  
  // const symbols = exchangeInfo.symbols.map(s => s.symbol)
  // const symbolsInfoString = JSON.stringify(symbols, null, 2)
  // writeFileSync('src/dump/exchange-info-symbols.json', symbolsInfoString)

  const allSymbols = await DB_ExchangeSymbols.getAll()
  console.log(allSymbols.length)
  
  // let insertCount = 1
  // for (const exchangeSymbol of exchangeInfo.symbols) {
  //   console.log(`inserting ${insertCount}/${symbols.length}`)
  //   await DB_ExchangeSymbols.create(exchangeSymbol, true)
  //   insertCount++
  // }
}

execution().then(() => process.exit(0))
