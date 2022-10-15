type options = {
  type: string
  optional?: boolean
  max?: number
  min?: number
}

export interface ValidateType {
  [name: string]: options
}
