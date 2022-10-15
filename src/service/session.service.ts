import { SessionModel, sessionModel } from '../model'
import { Session } from '../types'
import { GeneralService } from '.'

export class SessionService extends GeneralService<
  Session,
  keyof Session['id']
> {
  model: SessionModel

  constructor(model: SessionModel) {
    super(model)
    this.model = model
  }
  async updateSessionName(session: Session) {
    if (session.id)
      return this.model.update({
        id: session.id,
        session_name: session.session_name
      })
    throw Error('Wrong params passed to SessionService!')
  }

  async updateCourseName(session: Session) {
    if (session.id)
      return this.model.update({
        id: session.id,
        course_name: session.course_name
      })
    throw Error('Wrong params passed to SessionService!')
  }
}

export const sessionService = new SessionService(sessionModel)
