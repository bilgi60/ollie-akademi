-- Ollie Akademi veritabanı şeması (Cloudflare D1 / SQLite)
CREATE TABLE IF NOT EXISTS parents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  pw_salt TEXT NOT NULL,
  pw_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'parent',      -- 'parent' | 'admin'
  status TEXT NOT NULL DEFAULT 'active',    -- 'active' | 'suspended'
  created_at INTEGER NOT NULL,
  last_seen INTEGER
);
CREATE TABLE IF NOT EXISTS children (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  parent_id INTEGER NOT NULL REFERENCES parents(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  avatar TEXT NOT NULL DEFAULT '🦊',
  score INTEGER NOT NULL DEFAULT 0,
  data TEXT NOT NULL DEFAULT '{}',
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_children_parent ON children(parent_id);
CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY,
  parent_id INTEGER NOT NULL REFERENCES parents(id) ON DELETE CASCADE,
  expires_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_sessions_parent ON sessions(parent_id);
-- Günlük aktif kullanıcı sayımı için: hangi çocuk hangi gün çalıştı
CREATE TABLE IF NOT EXISTS activity (
  child_id INTEGER NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  day TEXT NOT NULL,
  PRIMARY KEY (child_id, day)
);
CREATE INDEX IF NOT EXISTS idx_activity_day ON activity(day);
-- Hatalı giriş denemelerini sınırlamak için
CREATE TABLE IF NOT EXISTS login_fails (
  email TEXT PRIMARY KEY,
  count INTEGER NOT NULL,
  until INTEGER NOT NULL
);
