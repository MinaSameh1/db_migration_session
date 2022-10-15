import { sessionModel } from '../model'
import { Session } from '../types'
import { GeneralService } from '.'

export class SessionService extends GeneralService<
  Session,
  keyof Session['id']
> {}

export const sessionService = new SessionService(sessionModel)
