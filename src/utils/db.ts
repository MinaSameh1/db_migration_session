import { Pool, QueryResult } from 'pg'

let pool: Pool

export function connect() {
  pool = new Pool()
}
export function disconnect() {
  pool.end()
}
export function getClient() {
  return pool.connect()
}
export async function query(
  sqlQuery: string,
  params: Array<unknown> = []
): Promise<QueryResult> {
  return pool.query(sqlQuery, params)
}

export default query
