import { QueryResult } from 'pg'
import { Student } from '../types'
import { query } from '../utils'
import { GeneralModel } from '.'

export class StudentModel extends GeneralModel<
  Student,
  Student['national_id']
> {
  protected getTableName() {
    return 'student'
  }

  async showById({
    id
  }: {
    id: Required<Pick<Student, 'national_id'>>
  }): Promise<QueryResult<Student>['rows'][0]> {
    const result = await query('SELECT * FROM student WHERE national_id = $1', [
      id
    ])
    return result.rows[0]
  }
}

export const studentModel = new StudentModel()
