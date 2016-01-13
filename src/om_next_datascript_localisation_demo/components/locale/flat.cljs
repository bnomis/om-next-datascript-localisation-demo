(ns om-next-datascript-localisation-demo.components.locale.flat
  (:require
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [sablono.core :as html :refer-macros [html]]
    [om-next-datascript-localisation-demo.logging :refer-macros [log]]
    [om-next-datascript-localisation-demo.components.editable-text :refer [EditableText editable-text]]
    [om-next-datascript-localisation-demo.utils.app :refer [set-app-locale]]))

(defui Localised
  static om/Ident
  (ident [this props]
    [:ui/localised (get-in props [:locale.localised :db/id])])

  static om/IQuery
  (query [this]
    [ {:locale.localised [:db/id :value
                          {:app.localised [:localised/locale]}
                          {:editable-text (om/get-query EditableText)}]}])

  Object
  (render [this]
    (log "Localised: render: props" (om/props this))
    (let [props (:locale.localised (om/props this))
          id (:db/id props)
          value (:value props)
          alprops (:app.localised props)
          locale (:localised/locale alprops)
          etprops (:editable-text props)]
      (html [:div
              [:p "In locale: " locale]
              [:p "Value: " value]
              (editable-text etprops)]))))

(def locale-locale (om/factory Localised {:keyfn (fn [props] (get-in props [:locale.localised :db/id]))}))

(defn find-localised-name [props code]
  (let [name (:value props)
        locale (filterv #(= code (:locale.localised/code %)) (:locale/locales props))]
    (if-not (empty? locale)
      (do
        (log "found localised locale" locale "for code" code)
        (:locale.localised/name (first locale)))
      name)))


(defui Locale
  static om/Ident
  (ident [this props]
    [:ui/locale (get-in props [:locale :db/id])])

  static om/IQuery
  (query [this]
    [{:locale [:db/id :locale/code :locale/ident :value
                {:app.localised [:this]}
                {:locale.locales (om/get-query Localised)}]}])

  Object
  (render [this]
    (log "Locale: render: shared :locale" (om/shared this :locale))
    (log "Locale: render: props " (om/props this))
    (let [props (om/props this)
          lprops (get-in props [:locale])
          llprops (get-in lprops [:locale.locales])
          alprops (get-in lprops [:app.localised])
          id (:db/id lprops)
          code (:locale/code lprops)
          enum (:locale/ident lprops)
          name (:value lprops)
          localised-name (:this alprops)]
      (html [:div
              [:h3 "Name: " name]
              [:p "Localised name: " localised-name]
              [:p "Code: " code]
              [:p "Enum: " (str enum)]
              [:button
                {:on-click (fn [e] (set-app-locale this id))}
                "Switch to " localised-name]
              [:h4 "Locales"]
              (map locale-locale llprops)]))))

(def locale-factory (om/factory Locale {:keyfn (fn [props] (get-in props [:locale :db/id]))}))


(defui LocalesFlat
  static om/IQuery
  (query [this]
    [{:locales (om/get-query Locale)}])

  Object
  (render [this]
    (log "LocalesFlat: render: props" (om/props this))
    (let [props (om/props this)
          rows (:locales props)]
      (html
        [:div
          (map locale-factory rows)]))))

(def locales-flat (om/factory LocalesFlat))
