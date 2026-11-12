-- Ollie sohbeti kayıtları (Madde 10). Bir kez çalıştırılır. Kayıtlar 30 gün sonra haftalık zamanlayıcıyla silinir.
CREATE TABLE IF NOT EXISTS chat_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  child_id INTEGER NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  unit INTEGER NOT NULL,
  day TEXT NOT NULL,                        -- Türkiye saatiyle gün (günlük sınır için)
  role TEXT NOT NULL,                       -- 'user' | 'ollie'
  text TEXT NOT NULL,
  flag TEXT NOT NULL DEFAULT 'ok',          -- ok | offtopic | personal | unsafe | bad
  extra TEXT,                               -- düzeltme vb. (JSON)
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_chat_child_day ON chat_log(child_id, day);
CREATE INDEX IF NOT EXISTS idx_chat_created ON chat_log(created_at);
