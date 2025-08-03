import { Pool, QueryResult, QueryResultRow, types as PgTypes } from 'pg'
import { CONFIG } from 'ct-config'

PgTypes.setTypeParser(1700, v => parseFloat(v))
PgTypes.setTypeParser(20, v => parseFloat(v))

export type QueryData = null | boolean | string | number | object

export class DataBaseClass {
  pool!: Pool

  constructor () {
    this.pool = new Pool({
      ssl: { rejectUnauthorized: false },
      database: CONFIG.DATABASE.DATABASE,
      password: CONFIG.DATABASE.PASSWORD,
      host: CONFIG.DATABASE.HOST,
      port: CONFIG.DATABASE.PORT,
      user: CONFIG.DATABASE.USER,
      max: CONFIG.DATABASE.CONNECTOR_POOL.MAX,
      idleTimeoutMillis: CONFIG.DATABASE.CONNECTOR_POOL.IDLE_TIMEOUT_MILLISECONDS,
      connectionTimeoutMillis: CONFIG.DATABASE.CONNECTOR_POOL.CONNECTION_TIMEOUT_MILLISECONDS
    })
  }

  async query <Data extends QueryResultRow> (
    query: string,
    data: Array<QueryData> = []
  ): Promise<QueryResult<Data>> {
    const client = await this.pool.connect()
    const queryResult = await client
      .query(query, data)
      .then(result => result)
      .finally(() => client.release())

    return queryResult
  }

  async loadOne <Data extends QueryResultRow> (
    query: string,
    data: Array<QueryData> = []
  ): Promise<null | Data> {
    return this.query<Data>(query, data)
      .then(res => res.rows[0] || null)
      .catch(error => { console.log(error); return null })
  }

  async loadMany <Data extends QueryResultRow> (
    query: string,
    data: Array<QueryData> = []
  ): Promise<Array<Data>> {
    return this.query<Data>(query, data).then(res => res.rows || [])
  }

  async insert (
    query: string,
    data: Array<QueryData> = [],
    expectedRowCount = 1,
  ): Promise<boolean> {
    return this.query(query, data).then(res => res.rowCount === expectedRowCount)
  }

  async update (
    query: string,
    data: Array<QueryData> = [],
    expectedRowCount = 1,
  ): Promise<boolean> {
    return this.insert(query, data, expectedRowCount)
  }

  async delete (
    query: string,
    data: Array<QueryData> = [],
    expectedRowCount = 1
  ): Promise<boolean> {
    return this.insert(query, data, expectedRowCount)
  }
}

export const DATABASE = new DataBaseClass()
