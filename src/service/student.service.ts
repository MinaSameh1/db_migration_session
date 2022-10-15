import { GeneralService } from '.'
import { studentModel } from '../model'
import { Student } from '../types'

export class StudentService extends GeneralService<
  Student,
  Student['national_id']
> {}

export const studentService = new StudentService(studentModel)
