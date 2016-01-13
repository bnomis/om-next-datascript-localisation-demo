(ns om-next-datascript-localisation-demo.components.looper
  (:require
    [om.next :as om :refer-macros [defui]]
    [sablono.core :as html :refer-macros [html]]
    [om-next-datascript-localisation-demo.logging :refer-macros [log]]))

(defn make-timer [this]
  (js/setInterval #(.inc-index this) 4000))

(defui Looper
  Object
  (initLocalState [this]
    {:current-index 0 :timer 0})

  (componentWillMount [this]
    ;;(log "Looper: componentWillMount")
    (om/update-state! this assoc :timer (make-timer this)))

  (componentWillUnmount [this]
    ;;(log "Looper: componentWillUnmount")
    (if-let [timer (om/get-state this :timer)]
      (js/clearInterval timer)))

  (componentWillReceiveProps [this new-props]
    ;;(log "Looper: componentWillReceiveProps")
    (if-let [timer (om/get-state this :timer)]
      (js/clearInterval timer))
    (let [things (:things new-props)
          length (count things)]
      (if (> length 0)
        (om/set-state! this {:current-index 0 :timer (make-timer this)})
        (om/set-state! this {:current-index 0 :timer 0}))))

  (inc-index [this]
    (let [props (om/props this)
          things (:things props)
          length (count things)
          current-index (om/get-state this :current-index)
          new-index (inc current-index)
          new-index (if (>= new-index length) 0 new-index)]
      ;;(log "Looper: inc-index")
      (om/update-state! this assoc :current-index new-index)))

  (render [this]
    (let [props (om/props this)
          things (:things props)
          current-index (om/get-state this :current-index)]
      ;;(log "Looper: render:" props)
      ;;(log "Looper: render: current-index" current-index)
      (html [:p (nth things current-index)]))))

(def looper (om/factory Looper))
