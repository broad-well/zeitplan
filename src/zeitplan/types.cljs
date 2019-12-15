(ns zeitplan.types)

;; A time entry, consisting of
;; - duration (integer minutes, non-nil),
;; - task (string description, nil-able),
;; - category ID (UUID, nil-able)
(defrecord TimeEntry [duration task category])

;; A category of tasks, consisting of
;; - name (string, non-nil)
;; - description (string, nil-able)
;; - uuid (UUID, non-nil)
(defrecord Category [name description uuid])

;; A full-fledged timetable
;; - start-time (minutes since 00:00)
;; - entries (list of TimeEntry's)
(defrecord Zeitplan [start-time entries])