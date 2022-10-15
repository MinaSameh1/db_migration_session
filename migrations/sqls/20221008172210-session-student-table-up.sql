CREATE TABLE IF NOT EXISTS session_student(
  student_id TEXT REFERENCES student(national_id),
  session_id UUID REFERENCES session(id)
);
