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

export async function updateSessionController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.body.session_name && req.body.course_name) {
      return res.status(400).json({ message: 'Wrong params passed! ' })
    }
    if (req.body.id) {
      if (req.body.session_name) {
        return res
          .status(200)
          .json(await sessionService.updateSessionName(req.body))
      }
      if (req.body.course_name) {
        return res
          .status(200)
          .json(await sessionService.updateSessionName(req.body))
      }
    }
    return res
      .status(400)
      .json({
        message:
          'Wrong params passed! Requires id and course_name/session_name!'
      })
  } catch (err) {
    next(err)
  }
}

// Crashs server, for now shelf it.
export class SessionController extends GeneralController<
  Session,
  keyof Session['id']
> {}
