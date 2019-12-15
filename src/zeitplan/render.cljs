(ns zeitplan.render
  (:require [clojure.browser.dom :as dom]))

(defn format-time-component [number]
  (let [repr (str number)]
    (if (= (count repr) 1)
      (str "0" repr) repr)))

(defn format-time [min-since-midnight]
  (str (format-time-component (quot min-since-midnight 60)) ":"
       (format-time-component (mod min-since-midnight 60))))

(defn render-item [applied-entry]
  (let [newhtml (str "<li class=\"list-group-item\">
<div class=\"d-flex justify-content-between align-items-center\">
<div>
<h4>" (:task applied-entry) "</h4>
<p class=\"mb-1\">" (- (:end-time applied-entry) (:start-time applied-entry)) " minutes</p>
</div>
<h5>" (format-time (:start-time applied-entry)) "-" (format-time (:end-time applied-entry)) "</h5>
</div>
</li>")
        element (.querySelector js/document "#zeitplan")]
    (println element)
    (set! (.-innerHTML element) (str (.-innerHTML element) newhtml))))

(defn element-value [query-selector]
  (->> query-selector
       (.querySelector js/document)
       (.-value)))

(defn add-listener [event query-selector action]
  (.addEventListener
   (.querySelector js/document query-selector) event action))

(defn clear-items []
  (let [element (.querySelector js/document "#zeitplan")]
    (set! (.-innerHTML element) "")))

(defn set-time-field [minutes]
  (set! (.-value (.querySelector js/document "#start-time"))
        (format-time minutes)))

(defn get-time-field []
  (let [value (.-value (.querySelector js/document "#start-time"))
        hours (.parseInt js/window (subs value 0 2))
        minutes (.parseInt js/window (subs value 3 5))]
    (+ (* hours 60) minutes)))

(defn highlight-nth [n]
  (let [element (.querySelector js/document "#zeitplan")
        child (nth (array-seq (.-children element)) n)]
    (-> child (.-classList) (.add "active"))))

(defn notify [aentry]
  (let [start-time (format-time (:start-time aentry))
        end-time (format-time (:end-time aentry))
        task (:task aentry)]
    (js/Notification. (str "New Task: " task ", from " start-time " to " end-time))))