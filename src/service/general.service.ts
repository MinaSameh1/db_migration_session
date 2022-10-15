import { GeneralModel } from '../model'
import { row } from '../types'

export class GeneralService<T extends row, K extends keyof T> {
  protected model: GeneralModel<T, K>

  constructor(Model: GeneralModel<T, K>) {
    this.model = Model
  }

  create(item: T) {
    return this.model.create(item)
  }

  get() {
    return this.model.index()
  }

  getById(id: Required<Pick<T, K>>) {
    return this.model.show({ id })
  }
}
