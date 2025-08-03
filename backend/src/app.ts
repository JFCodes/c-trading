import * as bodyParser from 'body-parser'
import express from 'express'
import morgan from 'morgan'

import { CheckBinanceConnectorStatus } from './instances/binance-connector'

// Controllers
import CorsController from './controllers/public/cors'

// Routers
import { router as SymbolsRouter } from './routers/symbols'

class SERVER {
  public app: express.Application

  constructor() {
    this.app = express()
    this.setupApp()
  }

  private async setupApp(): Promise<void> {
    CheckBinanceConnectorStatus()

    // Global controllers
    this.app.use(morgan('dev'))
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    // Public
    this.app.use(CorsController)
    this.app.use('/symbols', SymbolsRouter)

    // Admin routes
    // this.app.use('/super-admin', SessionSuperAdminGuard, SuperAdminRouter)

    // Catch 404
    // this.app.use(NotFoundController)
  }
}

export default new SERVER().app
