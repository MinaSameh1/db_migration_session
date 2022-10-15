import { Request, Response, NextFunction } from 'express'
import { SessionStudent } from 'src/types'
import { sessionStudentService } from '../service'

export async function getSessionStudentController(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json(await sessionStudentService.get())
  } catch (err) {
    next(err)
  }
}

export async function getsessionStudentByStudentIdController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.params.id)
      return res
        .status(200)
        .json(
          await sessionStudentService.getByStudentId({
            student_id: req.params.id
          })
        )
    return res.status(400).json({ message: 'MISSING ID!' })
  } catch (err) {
    next(err)
  }
}

export async function getsessionStudentBySessionIdController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.params.id)
      return res
        .status(200)
        .json(
          await sessionStudentService.getBySessionId({
            session_id: req.params.id
          })
        )
    return res.status(400).json({ message: 'MISSING ID!' })
  } catch (err) {
    next(err)
  }
}

export async function createSessionStudentController(
  req: Request<unknown, unknown, SessionStudent>,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json(await sessionStudentService.create(req.body))
  } catch (err) {
    next(err)
  }
}
