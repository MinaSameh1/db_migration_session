import { NextFunction, Request, Response } from 'express'

export function checkStudent(req: Request, res: Response, next: NextFunction) {
  if (req.body.national_id && req.body.name) {
    return next()
  }
}
