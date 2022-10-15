import { Router } from 'express'
import { checkStudent } from '../middleware'
import {
  createStudentController,
  studentGetByIdController,
  studentGetController
} from '../controller'

export const studentRouter = Router()

const STUDENT_ENDPOINT = '/api/student'

studentRouter.get(STUDENT_ENDPOINT, studentGetController)
studentRouter.post(STUDENT_ENDPOINT, checkStudent, createStudentController)
studentRouter.post(`${STUDENT_ENDPOINT}/:id`, studentGetByIdController)

// Crashs! why?
// studentRouter.get(STUDENT_ENDPOINT + '/ro', studentController.getItems)
// studentRouter.post(
//   STUDENT_ENDPOINT + '/ro',
//   checkStudent,
//   studentController.createItem
// )
