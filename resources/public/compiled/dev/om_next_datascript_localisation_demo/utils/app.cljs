(ns om-next-datascript-localisation-demo.utils.app
  (:require
    [om.next :as om]))

(defn set-app-locale
  [comp id]
  (om/transact! comp `[(app.locale/set {:db/id ~id}) :app.locale]))
