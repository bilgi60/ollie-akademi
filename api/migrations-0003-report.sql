-- Veliye haftalık e-posta raporu (bir kez çalıştırılır)
ALTER TABLE parents ADD COLUMN weekly_report INTEGER NOT NULL DEFAULT 1;
ALTER TABLE parents ADD COLUMN report_key TEXT;
ALTER TABLE parents ADD COLUMN report_sent_at INTEGER;
ALTER TABLE parents ADD COLUMN report_test_at INTEGER;
ALTER TABLE children ADD COLUMN report_snap TEXT;
