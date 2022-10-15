CREATE TABLE IF NOT EXISTS session_lead_session(
  session_id UUID REFERENCES session(id),
  session_lead_id UUID REFERENCES session_lead(id)
);
