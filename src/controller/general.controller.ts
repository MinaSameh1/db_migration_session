import { row } from '../types'
import { GeneralService } from '../service'
import { Request, Response, NextFunction } from 'express'

export class GeneralController<T extends row, K extends keyof T> {
  protected service: GeneralService<T, K>

  constructor(generalService: GeneralService<T, K>) {
    this.service = generalService
  }

  async getItems(_: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json(await this.service.get())
    } catch (err) {
      next(err)
    }
  }

  async createItem(
    req: Request<unknown, unknown, T>,
    res: Response,
    next: NextFunction
  ) {
    try {
      return res.status(200).json(await this.service.create(req.body))
    } catch (err) {
      next(err)
    }
  }
}
