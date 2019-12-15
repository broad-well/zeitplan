(ns zeitplan.core
  (:require [zeitplan.types :refer [Zeitplan TimeEntry]]
            [zeitplan.use-cases :refer [see-zeitplan append-time-entry set-start-time
                                        current-zeitplan apply-start-time time-now
                                        update-minute]]
            [zeitplan.render :refer [render-item add-listener element-value
                                     clear-items set-time-field get-time-field
                                     highlight-nth notify]]))

;; (defonce conn
;;   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(.requestPermission js/Notification)

(defn render []
  (clear-items)
  (see-zeitplan render-item))

(defn submit-time-entry []
  (let [description (element-value "#descr-input")
        duration (.parseInt js/window (element-value "#duration-input"))]
    (append-time-entry (TimeEntry. duration description nil))
    (render)))

(add-listener "click" "#add-entry-button" submit-time-entry)



(set-start-time (time-now))
(set-time-field (time-now))

(add-listener "click" "#update-start-time"
              #(do (set-start-time (get-time-field))
                   (render)))

(.setInterval js/window #(update-minute highlight-nth notify) (* 1000 60))