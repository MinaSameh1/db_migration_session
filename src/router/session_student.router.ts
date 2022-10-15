import { Router } from 'express'
import {
  createSessionStudentController,
  getsessionStudentBySessionIdController,
  getsessionStudentByStudentIdController,
  getSessionStudentController
} from '../controller'

const SESSION_STUDENT_ENDPOINT = '/api/stud'

export const sessionStudentRouter = Router()

sessionStudentRouter.get(SESSION_STUDENT_ENDPOINT, getSessionStudentController)
sessionStudentRouter.get(
  `${SESSION_STUDENT_ENDPOINT}/:id`,
  getsessionStudentByStudentIdController
)
sessionStudentRouter.get(
  `${SESSION_STUDENT_ENDPOINT}/ses/:id`,
  getsessionStudentBySessionIdController
)
sessionStudentRouter.post(
  `${SESSION_STUDENT_ENDPOINT}`,
  createSessionStudentController
)
