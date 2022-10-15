import { QueryResult } from 'pg'
import { SessionStudent } from '../types'
import { query } from '../utils'
import { GeneralModel } from '.'

export class SessionStudentModel extends GeneralModel<
  SessionStudent,
  keyof SessionStudent['session_id']
> {
  protected getTableName() {
    return 'session_student'
  }

  async showByStudentId({
    student_id
  }: Required<Pick<SessionStudent, 'student_id'>>): Promise<
    QueryResult<SessionStudent>['rows'][0]
  > {
    const result = await query(
      'SELECT * FROM session_student WHERE student_id = $1',
      [student_id]
    )
    return result.rows[0]
  }

  async showBySessionId({
    session_id
  }: Required<Pick<SessionStudent, 'session_id'>>): Promise<
    QueryResult<SessionStudent>['rows'][0]
  > {
    const result = await query(
      'SELECT * FROM session_student WHERE session_id = $1',
      [session_id]
    )
    return result.rows[0]
  }

  async create({
    student_id,
    session_id
  }: {
    student_id: SessionStudent['student_id']
    session_id: SessionStudent['session_id']
  }): Promise<QueryResult<SessionStudent>['rows'][0]> {
    const result = await query(
      'INSERT INTO session_student (student_id, session_id)VALUES($1, $2);',
      [student_id, session_id]
    )
    return result.rows[0]
  }
}

export const sessionStudentModel = new SessionStudentModel()
