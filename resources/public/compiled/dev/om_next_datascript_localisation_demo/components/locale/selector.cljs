(ns om-next-datascript-localisation-demo.components.locale.selector
  (:require
    [om.next :as om :refer-macros [defui]]
    [sablono.core :as html :refer-macros [html]]
    [om-next-datascript-localisation-demo.logging :refer-macros [log]]
    [om-next-datascript-localisation-demo.utils.app :refer [set-app-locale]]))


;; find the locale name in its own locale
;; local readers recognise their own language
(defn localised-locale [localised]
  (get-in localised [:localised/locale :db/id]))

(defn localised-for-locale [localised id]
  (some (fn [l]
          (if (= id (localised-locale l))
            l
            false))
    localised))

(defn find-locale-name-in-locale [locale id]
  (let [localised (localised-for-locale (:localised locale) id)]
    (if localised
      (:value localised)
      (:value locale))))

(defui LocaleSelectorLink
  static om/Ident
  (ident [this props]
    [:db/id (get-in props [:locale :db/id])])

  static om/IQuery
  (query [this]
    `[({:locale [:db/id :value :localised]} {:ident ~(om/get-ident this)})])

  Object
  (render [this]
    (let [props (om/props this)
          lprops (:locale props)
          id (get-in lprops [:db/id])
          text (find-locale-name-in-locale lprops id)]
      (log "LocaleSelectorLink: render: props " props)
      (html
        [:li
          [:a
            {:on-click (fn [e] (set-app-locale this id))}
            text]]))))

(def locale-selector-link (om/factory LocaleSelectorLink {:keyfn (fn [props] (get-in props [:locale :db/id]))}))

;; remove the current app/locale
(defn filter-locales [locales app-locale]
  (remove (fn [l] (= app-locale (:db/id l))) locales))

(defui LocalesSelector
  static om/IQuery
  (query [this]
    `[{:app.locale [:db/id]}
      :locales])

  Object
  (render [this]
    (let [props (om/props this)
          locales (get-in props [:locales])
          app-locale (get-in props [:app.locale :db/id])
          locales (filter-locales locales app-locale)]
      (log "LocaleSelector: render: props " props)
      (when (seq locales)
        (html
          [:div
            [:p "Choose a different locale:"]
            [:ul
              (map #(locale-selector-link {:locale %}) locales)]])))))

(def locales-selector (om/factory LocalesSelector))
