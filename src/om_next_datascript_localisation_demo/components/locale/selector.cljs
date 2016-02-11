(ns om-next-datascript-localisation-demo.components.locale.selector
  (:require
    [om.next :as om :refer-macros [defui]]
    [sablono.core :as html :refer-macros [html]]
    [om-next-datascript-localisation-demo.logging :refer-macros [log]]
    [om-next-datascript-localisation-demo.utils.app :refer [set-app-locale]]
    [om-next-datascript-localisation-demo.components.looper :refer [looper]]))


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

(defn find-locale [locales id]
  (loop [l (first locales)
          locales (rest locales)]
    (if-not l
      nil
      (if (= (:db/id l) id)
        l
        (recur (first locales) (rest locales))))))

(defn sort-locales [locales order]
  (loop [out []
          id (first order)
          order (rest order)]
    (if-not id
      out
      (recur (conj out (find-locale locales id)) (first order) (rest order)))))

(defui LocalesSelector
  static om/IQuery
  (query [this]
    `[{:app.locale [:db/id]}
      {:app.localised/strings [:language/choose]}
      {:localised-string [:language/choose]}
      :locales
      :locales/order])

  Object
  (render [this]
    (let [props (om/props this)
          locales (get-in props [:locales])
          locales-order (get-in props [:locales/order])
          locales (sort-locales locales locales-order)
          app-locale (get-in props [:app.locale :db/id])
          locales (filter-locales locales app-locale)
          strings (get-in props [:app.localised/strings])
          choose (map :value (get-in props [:localised-string :localised]))]
      (log "LocaleSelector: render: props:" props)
      (log "LocaleSelector: render: locales-order:" locales-order)
      (log "LocaleSelector: render: choose:" choose)
      (when (seq locales)
        (html
          [:div
            (looper {:things choose})
            [:ul
              (map #(locale-selector-link {:locale %}) locales)]])))))

(def locales-selector (om/factory LocalesSelector))
