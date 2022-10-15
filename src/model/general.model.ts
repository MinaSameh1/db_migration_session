import { QueryResult } from 'pg'
import { row } from 'src/types'
import { logger, query } from '../utils'

export class GeneralModel<T extends row, K extends keyof T> {
  private TableName: string

  constructor() {
    this.TableName = this.getTableName()
  }

  protected getTableName(): string {
    return 'TableName'
  }

  async show({
    id
  }: {
    id: Required<Pick<T, K>>
  }): Promise<QueryResult<T>['rows'][0]> {
    const result = await query(
      `SELECT * FROM ${this.TableName} WHERE id = $1`,
      [id]
    )
    return result.rows[0]
  }

  async index(): Promise<QueryResult<T>['rows']> {
    const result = await query(`SELECT * FROM ${this.TableName}`)
    return result.rows
  }

  async create(item: T): Promise<QueryResult<T>['rows'][0]> {
    // NOTE: Find a better way to do this mess.....
    const arr: Array<unknown> = []
    const keys = Object.keys(item)
    let values: string = ''

    keys.reduce((prev: number, next) => {
      // loop over elements
      arr.push(item[next]) // add elements to arr
      values = `${values} $${prev++}, ` // add their respectful prepared number :P
      return prev
    }, 1)

    const sql = `INSERT INTO ${
      this.TableName
    }(${keys.toString()}) VALUES(${values.substring(
      0,
      values.lastIndexOf(',') // Remove last comma EX: $1, $2, -> $1, $2
    )});`

    logger.info(`Recieved: ${sql}`)
    const result = await query(sql, arr)
    return result.rows[0]
  }
}
