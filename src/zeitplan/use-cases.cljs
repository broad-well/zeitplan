(ns zeitplan.use-cases
  (:require [zeitplan.types :as types]))

(defn- append-time-entry-swap
  "Returns a function to be passed to `swap!`, which accepts
a Zeitplan object and modifies it by appending the given time entry"
  [time-entry]
  (let [update-func #(conj % time-entry)]
    #(update % :entries update-func)))

(def current-zeitplan (atom (types/Zeitplan. 0 (list))))

(defn append-time-entry [time-entry]
  (swap! current-zeitplan (append-time-entry-swap time-entry)))

(defn set-start-time [minutes]
  (swap! current-zeitplan #(assoc % :start-time minutes)))

(defrecord AppliedTimeEntry [start-time end-time task category])

(defn apply-start-time [entries start-time]
  (if (empty? entries)
    (list)
    (let [entry (first entries)
          end-time (+ start-time (:duration entry))
          applied-entry (AppliedTimeEntry. start-time end-time
                                           (:task entry) (:category entry))]
      (cons applied-entry (apply-start-time (rest entries) end-time)))))


(defn see-zeitplan
  "Take a Zeitplan and make calls to renderer to display it.
renderer accepts [start-time end-time time-entry]"
  [renderer]
  (doseq [applied-entry (apply-start-time (:entries @current-zeitplan)
                                        (:start-time @current-zeitplan))]
    (renderer applied-entry)))

(defn time-now []
  (let [date (js/Date.)
        hours (.getHours date)
        minutes (.getMinutes date)]
    (+ (* hours 60) minutes)))

(defn update-minute [highlight notify]
  "Performs an update (every minute), highlighting the current entry
if applicable and notifying the user if we are switching to a new entry"
  (let [now (time-now)
        aentries (apply-start-time (:entries @current-zeitplan)
                                   (:start-time @current-zeitplan))
        entry-is-now (fn [entry] (and (>= now (:start-time entry))
                                      (<= now (:end-time entry))))
        just-entered (fn [entry] (= now (:start-time entry)))]
    (doseq [index (range (count aentries))]
      (when (entry-is-now (nth aentries index))
        (highlight index))
      (when (just-entered (nth aentries index))
        (notify (nth aentries index))))))