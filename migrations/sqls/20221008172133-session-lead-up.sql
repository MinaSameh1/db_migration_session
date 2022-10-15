CREATE TABLE IF NOT EXISTS session_lead(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT
);
