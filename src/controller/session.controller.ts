import { Session } from '../types'
import { sessionService } from '../service'
import { GeneralController } from '.'
import { NextFunction, Request, Response } from 'express'

export async function getSessionController(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json(await sessionService.get())
  } catch (err) {
    next(err)
  }
}

export async function getSessionByIdController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json(await sessionService.getById(req.params))
  } catch (err) {
    next(err)
  }
}

export async function createSessionController(
  req: Request<unknown, unknown, Session>,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json(await sessionService.create(req.body))
  } catch (err) {
    next(err)
  }
}

// Crashs server, for now shelf it.
export class SessionController extends GeneralController<
  Session,
  keyof Session['id']
> {}
