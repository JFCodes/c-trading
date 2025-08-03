import { DATABASE, type QueryData } from '../instance'
import { DB_TABLES } from '../enums'

type Options = {
  table: DB_TABLES
}

export class BaseInterface <DbType extends object> {
  table: DB_TABLES

  constructor (options: Options) {
    this.table = options.table
  }

  getAll (): Promise<Array<DbType>> {
    const query = `SELECT * FROM ${this.table}` 
    return DATABASE.loadMany<DbType>(query, [])
  }

  getByField <T extends keyof DbType> (field: T, value: DbType[T]): Promise<null | DbType> {
    const query = `SELECT * FROM ${this.table} WHERE "${String(field)}" = $1`
    // @ts-ignore
    return DATABASE.loadOne<DbType>(query, [value])
  }

  insertEntity (entity: DbType, ignoreFieldConflict?: string) {
    const values: Array<string> = []
    const fields: Array<string> = []
    const data: Array<QueryData> = []

    Object.entries(entity).forEach(([field, fieldValue], index) => {
      fields.push(field)
      values.push(`$${index + 1}`)
      data.push(fieldValue)
    })

    let query = `INSERT INTO ${this.table} (${fields.join(',')}) VALUES (${values.join(',')})`
    if (ignoreFieldConflict) {
      query = `
        ${query}
        ON CONFLICT (${ignoreFieldConflict}) DO NOTHING
      `
    }

    return DATABASE.insert(query, data)
  }

  // querySort = (attributes: Array<{ key: string, direction: 'ASC' | 'DESC' }>): string => {
  //   const orders = attributes.map(attr => `${this.table}.${attr.key} ${attr.direction}`)
  //   return `ORDER BY ${orders.join(', ')}`
  // }

  // queryInsert = (fields: Array<string>): string => {
  //   const indexed = new Array(fields.length).fill('').map((_, index) => `$${index + 1}`)
  //   return `INSERT INTO ${this.table} (${fields.join(', ')}) VALUES (${indexed.join(', ')})`
  // }

  // queryDeleteMultiple = (count: number, indexField: string, deleteField: string): string => {
  //   const valueCounters = new Array(count).fill('').map((_, index) => `$${index + 2}`)
  //   return `
  //     DELETE FROM ${this.table}
  //     WHERE
  //       ${indexField} = $1
  //       AND ${deleteField} IN (${valueCounters.join(', ')})
  //   `
  // }

  // valueEntries = (count: number, fieldCount: number): string => {
  //   const rows = new Array(count).fill('')
  //   const fields = new Array(fieldCount).fill('').map((_, index) => index + 1)

  //   const values = rows.map((_, rowIndex) => {
  //     const fieldEntries = fields.map(fieldIndex => (rowIndex * fieldCount) + fieldIndex)
  //     const fieldInputs = fieldEntries.map(index => `$${index}`)
  //     return `(${fieldInputs.join(', ')})`
  //   })

  //   return `VALUES ${values}`
  // }
}
