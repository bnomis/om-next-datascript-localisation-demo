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

(defui LocalisedString
  static om/Ident
  (ident [this props]
    [:localised/string (make-ident this)])

  static om/IQuery
  (query [this]
    `[({:localised/string [:db/id]} {:ident ~(om/get-ident this)})])

  Object
  (render [this]
    (let [props (om/props this)
          value (get-in props [:localised/string :localised-value])
          {:keys [:render-fn :string-id]} (om/get-computed this)
          value (or value (str string-id))]
      (log "LocalisedString: render: props " props)
      (render-fn value))))

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
    (let [props (om/props this)
          value (get-in props [:localised/string :localised-value])
          {:keys [:tag :string-id]} (om/get-computed this)
          value (or value (str string-id))]
      (log "EditableLocalisedString: render: props " props)
      (editable-text (om/computed {:text value} {:callback #(.edited-text this %) :tag tag})))))

(def editable-localised-string (om/factory EditableLocalisedString {:keyfn (fn [props] (str "editable" (make-ident props)))}))
