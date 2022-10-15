CREATE TABLE IF NOT EXISTS session(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_name TEXT NOT NULL,
    session_date DATE,
    course_name TEXT NOT NULL
);
