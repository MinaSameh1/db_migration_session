import pino from 'pino'
export const logger = pino({
  level: process.env.LOG_LEVEL ?? 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      ignore: 'pid,hostname',
      translateTime: 'SYS:standard'
    }
  }
})
export const getLogger = () => {
  logger.level = process.env.LOG_LEVEL ?? 'info'
  return logger
}
