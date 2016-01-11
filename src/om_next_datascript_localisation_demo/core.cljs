(ns om-next-datascript-localisation-demo.core
  (:require
    [goog.dom :as gdom]
    [om.next :as om]
    [om-next-datascript-localisation-demo.datascript.db :refer [the-db]]
    [om-next-datascript-localisation-demo.datascript.parser :refer [parser]]
    [om-next-datascript-localisation-demo.components.app :refer [App]]
    [om-next-datascript-localisation-demo.logging :refer-macros [log]]))

;;(enable-console-print!)

(defn on-js-reload [])

(def reconciler
  (om/reconciler
    {:state the-db
     :parser parser}))

(om/add-root! reconciler App (gdom/getElement "app"))

;;(log reconciler)
