import { GeneralService } from '.'
import { SessionStudentModel, sessionStudentModel } from '../model'
import { SessionStudent } from '../types'

export class SessionStudentService extends GeneralService<
  SessionStudent,
  keyof SessionStudent['session_id']
> {
  model: SessionStudentModel
  constructor(model: SessionStudentModel) {
    super(model)
    this.model = model
  }

  async getByStudentId(id: Required<Pick<SessionStudent, 'student_id'>>) {
    this.model.showByStudentId(id)
  }

  async getBySessionId(id: Required<Pick<SessionStudent, 'session_id'>>) {
    this.model.showBySessionId(id)
  }
}

export const sessionStudentService = new SessionStudentService(
  sessionStudentModel
)
