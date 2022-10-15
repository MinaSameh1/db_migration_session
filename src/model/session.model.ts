import {
  Session,
  UpdateSessionCourseNameParam,
  UpdateSessionParams
} from '../types'
import { GeneralModel } from '.'
import { QueryResult } from 'pg'
import { query } from '../utils'

export class SessionModel extends GeneralModel<Session, keyof Session['id']> {
  protected getTableName() {
    return 'session'
  }

  //// Method overloads
  /*
   * @description Updates session using ID and session_name
   * @param {string} session_name
   */
  async update({
    // eslint-disable-next-line no-unused-vars
    id,
    // eslint-disable-next-line no-unused-vars
    session_name
  }: UpdateSessionParams): Promise<QueryResult<Session>['rows'][0]>
  /*
   * @description Updates session using ID and course_name
   * @param {string} course_name
   */
  async update({
    // eslint-disable-next-line no-unused-vars
    id,
    // eslint-disable-next-line no-unused-vars
    course_name
  }: UpdateSessionCourseNameParam): Promise<QueryResult<Session>['rows'][0]>

  async update({
    id,
    session_name,
    course_name
  }: UpdateSessionParams): Promise<QueryResult<Session>['rows'][0]> {
    if (session_name) {
      const result = await query(
        'UPDATE session SET session_name = $1 WHERE id = $2',
        [session_name, id]
      )

      return result.rows[0]
    }
    const result = await query(
      'UPDATE session SET course_name = $1 WHERE user_id = $2',
      [course_name, id]
    )
    return result.rows[0]
  }
}

export const sessionModel = new SessionModel()
