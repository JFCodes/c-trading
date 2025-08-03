import axios, { type CreateAxiosDefaults } from 'axios'
import { CONFIG } from 'ct-config'
// Routers
import { SymbolsRouter } from './routers/symbols'

const AXIOS_CONFIG: CreateAxiosDefaults = { paramsSerializer: { indexes: null } }

export class BackendConnectorClass {
  private authToken = ''
  private endpoint: string

  public axios = axios.create(AXIOS_CONFIG)

  constructor() {
    this.endpoint = CONFIG.ENDPOINTS.BACKEND
    this.setupAxios()
  }

  public symbols = SymbolsRouter(this)

  public setAuth(token: string): void {
    this.authToken = `Bearer ${token}`
  }

  public clearAuth(): void {
    this.authToken = ''
  }

  // Private
  private setupAxios(): void {
    this.axios.interceptors.response.use(
      response => response.data,
      error => { throw error }
    )

    this.axios.interceptors.request.use(async req => {
      req.baseURL = this.endpoint

      if (this.authToken) req.headers.setAuthorization(this.authToken)
      return req
    })
  }
}
