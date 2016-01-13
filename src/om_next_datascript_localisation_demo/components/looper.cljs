(ns om-next-datascript-localisation-demo.components.looper
  (:require
    [om.next :as om :refer-macros [defui]]
    [sablono.core :as html :refer-macros [html]]
    [om-next-datascript-localisation-demo.logging :refer-macros [log]]))


(defui Looper
  Object
  (initLocalState [this]
    {:current-index 0})

  (inc-index [this]
    (let [props (om/props this)
          things (:things props)
          length (count things)
          current-index (om/get-state this :current-index)
          new-index (inc current-index)
          new-index (if (>= new-index length) 0 new-index)]
      (om/set-state! this {:current-index new-index})))

  (render [this]
    (let [props (om/props this)
          things (:things props)
          current-index (om/get-state this :current-index)]
      ;;(log "Looper: render:" props)
      ;;(log "Looper: render: current-index" current-index)
      (js/setTimeout #(.inc-index this) 4000)
      (html [:p (nth things current-index)]))))


(def looper (om/factory Looper))
