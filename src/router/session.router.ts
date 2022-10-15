import { Router } from 'express'
import {
  createSessionController,
  getSessionByIdController,
  getSessionController
} from '../controller'

export const sessionRouter = Router()

const SESSION_ENDPOINT = '/api/session'

sessionRouter.get(SESSION_ENDPOINT, getSessionController)
sessionRouter.post(SESSION_ENDPOINT, createSessionController)
sessionRouter.post(`${SESSION_ENDPOINT}/:id`, getSessionByIdController)
