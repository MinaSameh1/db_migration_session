import app from './server'
import { connect, logger } from './utils'

function startServer() {
  const Port = process.env.PORT || 8000
  connect()
  app.listen(Port, () => {
    logger.info(`API is listening to ${Port}`)
  })
}

startServer()
