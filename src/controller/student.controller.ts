import { Student } from '../types'
import { studentService } from '../service'
import { GeneralController } from '.'
import { NextFunction, Request, Response } from 'express'

export async function studentGetController(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json(await studentService.get())
  } catch (err) {
    next(err)
  }
}

export async function studentGetByIdController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.params.id)
      return res
        .status(200)
        .json(await studentService.getById(req.params))
    return res.status(400).json({ message: 'Missing param!' })
  } catch (err) {
    next(err)
  }
}

export async function createStudentController(
  req: Request<unknown, unknown, Student>,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json(await studentService.create(req.body))
  } catch (err) {
    next(err)
  }
}

// Crashs server, for now shelf it.
export class StudentController extends GeneralController<
  Student,
  Student['national_id']
> {}
