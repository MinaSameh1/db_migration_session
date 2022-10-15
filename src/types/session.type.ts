import { row } from './'

export interface Session extends row {
  id?: string
  session_name: string
  session_date: string
  course_name: string
}

// Only update the amount or status but not both.
type UpdateSessionRequireParams<
  T extends keyof Session,
  K extends keyof Session
> = Required<Pick<Session, 'id' | T>> & {
  // eslint-disable-next-line no-unused-vars
  [P in keyof Pick<Session, K>]?: never
}

export type UpdateSessionSessionNameParam = UpdateSessionRequireParams<
  'session_name',
  'course_name'
>
export type UpdateSessionCourseNameParam = UpdateSessionRequireParams<
  'course_name',
  'session_name'
>

export type UpdateSessionParams =
  | UpdateSessionCourseNameParam
  | UpdateSessionSessionNameParam
