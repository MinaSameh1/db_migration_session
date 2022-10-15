import { row, Session, Student } from '.'

export interface SessionStudent extends row {
  student_id: Student['national_id']
  session_id: Session['id']
}
