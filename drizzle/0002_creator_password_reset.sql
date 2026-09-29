CREATE TABLE IF NOT EXISTS creator_password_reset (
  id INTEGER PRIMARY KEY NOT NULL,
  token_hash TEXT NOT NULL,
  expires_at INTEGER NOT NULL,
  requested_at INTEGER NOT NULL
);
