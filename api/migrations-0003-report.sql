-- Haftalık veli raporu için ekler (bir kez çalıştırılır)
ALTER TABLE activity ADD COLUMN pts INTEGER NOT NULL DEFAULT 0;
ALTER TABLE parents ADD COLUMN weekly_report INTEGER NOT NULL DEFAULT 1;
ALTER TABLE parents ADD COLUMN report_key TEXT;
ALTER TABLE parents ADD COLUMN report_week TEXT;
CREATE TABLE IF NOT EXISTS report_snap (
  child_id INTEGER NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  week TEXT NOT NULL,
  data TEXT NOT NULL,
  PRIMARY KEY (child_id, week)
);
