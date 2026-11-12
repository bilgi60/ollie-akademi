-- Öğretmen / sınıf hesabı (Madde 12). Bir kez çalıştırılır.
-- Her hesap öğretmen olarak sınıf açabilir; veli, çocuğun profiline sınıf kodunu girerek katılır.
CREATE TABLE IF NOT EXISTS classes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  teacher_id INTEGER NOT NULL REFERENCES parents(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,                -- 6 harfli katılma kodu
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_classes_teacher ON classes(teacher_id);
CREATE TABLE IF NOT EXISTS class_members (
  class_id INTEGER NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  child_id INTEGER NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  joined_at INTEGER NOT NULL,
  PRIMARY KEY (class_id, child_id)
);
CREATE INDEX IF NOT EXISTS idx_class_members_child ON class_members(child_id);
