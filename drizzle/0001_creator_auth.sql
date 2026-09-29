CREATE TABLE IF NOT EXISTS creator_auth (
  id INTEGER PRIMARY KEY NOT NULL,
  password_hash TEXT NOT NULL,
  salt TEXT NOT NULL,
  version INTEGER NOT NULL,
  updated_at TEXT NOT NULL
);
