-- Hece düzeyinde telaffuz puanı (Madde 11): çocuk başına günlük Azure kullanım sayacı. Bir kez çalıştırılır.
-- Ses kaydı saklanmaz; burada yalnız sayı tutulur. 30 günden eski satırlar haftalık zamanlayıcıyla silinir.
CREATE TABLE IF NOT EXISTS pron_usage (
  child_id INTEGER NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  day TEXT NOT NULL,                        -- Türkiye saatiyle gün
  n INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (child_id, day)
);
