-- Mevcut veritabanına e-posta doğrulama / şifre sıfırlama ekler (bir kez çalıştırılır)
ALTER TABLE parents ADD COLUMN email_verified INTEGER NOT NULL DEFAULT 0;
CREATE TABLE IF NOT EXISTS email_tokens (
  token_hash TEXT PRIMARY KEY,
  parent_id INTEGER NOT NULL REFERENCES parents(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,
  expires_at INTEGER NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_email_tokens_parent ON email_tokens(parent_id, kind);
