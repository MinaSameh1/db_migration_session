import { Router } from 'express'

export const mainRouter = Router()

mainRouter.get('/api/ping', (_, res) => {
  res.send('Ping')
})
