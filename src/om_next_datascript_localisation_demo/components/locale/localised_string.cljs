(ns om-next-datascript-localisation-demo.components.locale.localised-string
  (:require
    [om.next :as om :refer-macros [defui]]
    [sablono.core :as html :refer-macros [html]]
    [om-next-datascript-localisation-demo.logging :refer-macros [log]]
    [om-next-datascript-localisation-demo.utils.ident :refer [string-id-and-locale->ident]]
    [om-next-datascript-localisation-demo.components.editable-text :refer [editable-text]]))

(defn make-ident [this]
  (let [{:keys [:string-id :locale-id]} (om/get-computed this)]
    (string-id-and-locale->ident string-id locale-id)))

(defn localised-string-value [this]
  (let [value (get-in (om/props this) [:localised/string :localised-value])
        {:keys [:string-id]} (om/get-computed this)]
    (or value (str string-id))))

(defui LocalisedString
  static om/Ident
  (ident [this props]
    [:localised/string (make-ident this)])

  static om/IQuery
  (query [this]
    `[({:localised/string [:db/id]} {:ident ~(om/get-ident this)})])

  Object
  (render [this]
    (let [value (localised-string-value this)
          {:keys [:tag]} (om/get-computed this)]
      ;;(log "LocalisedString: render: props " props)
      (html [tag value]))))

(def localised-string (om/factory LocalisedString {:keyfn (fn [props] (make-ident props))}))

(defui EditableLocalisedString
  static om/Ident
  (ident [this props]
    [:localised/string (make-ident this)])

  static om/IQuery
  (query [this]
    `[({:localised/string [:db/id]} {:ident ~(om/get-ident this)})])

  Object
  (edited-text [this text]
    (let [{:keys [:string-id :locale-id]} (om/get-computed this)]
      (om/transact! this `[(localised-string/set {:string/ident ~string-id, :locale/id ~locale-id, :text ~text}) ~(om/get-ident this) :localised-strings])))

  (render [this]
    (let [value (localised-string-value this)
          {:keys [:tag]} (om/get-computed this)]
      ;;(log "EditableLocalisedString: render: props " props)
      (editable-text (om/computed {:text value} {:callback #(.edited-text this %) :tag tag})))))

(def editable-localised-string (om/factory EditableLocalisedString {:keyfn (fn [props] (str "editable" (make-ident props)))}))
