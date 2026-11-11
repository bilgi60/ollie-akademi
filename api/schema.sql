-- Ollie Akademi veritabanı şeması (Cloudflare D1 / SQLite)
CREATE TABLE IF NOT EXISTS parents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  pw_salt TEXT NOT NULL,
  pw_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'parent',      -- 'parent' | 'admin'
  status TEXT NOT NULL DEFAULT 'active',    -- 'active' | 'suspended'
  email_verified INTEGER NOT NULL DEFAULT 0,
  weekly_report INTEGER NOT NULL DEFAULT 1, -- haftalık rapor e-postası açık mı
  report_key TEXT,                          -- abonelikten çıkma bağlantısı anahtarı
  report_week TEXT,                         -- son raporun gönderildiği hafta (pazartesi)
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
  pts INTEGER NOT NULL DEFAULT 0,           -- o gün kazanılan yıldız
  PRIMARY KEY (child_id, day)
);
CREATE INDEX IF NOT EXISTS idx_activity_day ON activity(day);
-- Hatalı giriş denemelerini sınırlamak için
CREATE TABLE IF NOT EXISTS login_fails (
  email TEXT PRIMARY KEY,
  count INTEGER NOT NULL,
  until INTEGER NOT NULL
);
-- E-posta doğrulama ve şifre sıfırlama bağlantıları (sadece özetleri saklanır)
CREATE TABLE IF NOT EXISTS email_tokens (
  token_hash TEXT PRIMARY KEY,
  parent_id INTEGER NOT NULL REFERENCES parents(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,                       -- 'verify' | 'reset'
  expires_at INTEGER NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_email_tokens_parent ON email_tokens(parent_id, kind);
-- Haftalık rapor: her çocuğun rapor anındaki ilerleme özeti (bir sonraki haftanın farkı için)
CREATE TABLE IF NOT EXISTS report_snap (
  child_id INTEGER NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  week TEXT NOT NULL,
  data TEXT NOT NULL,
  PRIMARY KEY (child_id, week)
);
