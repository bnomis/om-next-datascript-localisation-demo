(ns om-next-datascript-localisation-demo.components.app
  (:require
    [om.next :as om :refer-macros [defui]]
    [sablono.core :as html :refer-macros [html]]
    [om-next-datascript-localisation-demo.logging :refer-macros [log]]
    [om-next-datascript-localisation-demo.components.locale.flat :refer [LocalesFlat locales-flat]]
    [om-next-datascript-localisation-demo.components.locale.selector :refer [LocalesSelector locales-selector]]
    [om-next-datascript-localisation-demo.components.locale.table :refer [LocalesTable locales-table]]
    [om-next-datascript-localisation-demo.components.locale.strings :refer [LocalisedStringTable localised-string-table]]
    [om-next-datascript-localisation-demo.components.locale.localised-string :refer [localised-string editable-localised-string]]
    [om-next-datascript-localisation-demo.utils.html :refer [set-html-lang set-html-title]]))

(defui App
  static om/IQuery
  (query [this]
    `[  {:app.locale [:db/id :locale/code :localised]}
        {:app.localised/strings [:app/title :app/desc :app/current-locale :app/missing]}
        {:locales-selector-props ~(om/get-query LocalesSelector)}
        {:locales-table-props ~(om/get-query LocalesTable)}
        {:localised-string-table-props ~(om/get-query LocalisedStringTable)}])

  Object
  (render [this]
    (let [props (om/props this)
          code (get-in props [:app.locale :locale/code])
          app-locale-id (get-in props [:app.locale :db/id])
          localised (get-in props [:app.locale :localised])
          localised (some (fn [l] (when (= app-locale-id (get-in l [:localised/locale :db/id])) l)) localised)
          localised (if localised (:value localised) code)
          strings (get-in props [:app.localised/strings])
          locales-selector-props (get-in props [:locales-selector-props])
          locales-table-props (get-in props [:locales-table-props])
          localised-string-table-props (get-in props [:localised-string-table-props])]

      (log "-----------------------------")
      (log "App render:" props)
      (set-html-lang code)
      (set-html-title (:app/title strings))
      (html [:div

              (localised-string
                (om/computed
                  {:localised/string {:localised-value (:app/title strings)}}
                  { :render-fn (fn [s] (html [:h2 s]))
                    :string-id :app/title
                    :locale-id app-locale-id}))
              (localised-string
                (om/computed
                  {:localised/string {:localised-value (:app/desc strings)}}
                  { :render-fn (fn [s] (html [:p s]))
                    :string-id :app/desc
                    :locale-id app-locale-id}))
              (localised-string
                (om/computed
                  {:localised/string {:localised-value (:app/missing strings)}}
                  { :render-fn (fn [s] (html [:p s]))
                    :string-id :app/missing
                    :locale-id app-locale-id}))


              (editable-localised-string
                (om/computed
                  {:localised/string {:localised-value (:app/title strings)}}
                  { :tag :h2
                    :string-id :app/title
                    :locale-id app-locale-id}))
              (editable-localised-string
                (om/computed
                  {:localised/string {:localised-value (:app/desc strings)}}
                  { :tag :p
                    :string-id :app/desc
                    :locale-id app-locale-id}))
              (editable-localised-string
                (om/computed
                  {:localised/string {:localised-value (:app/missing strings)}}
                  { :tag :p
                    :string-id :app/missing
                    :locale-id app-locale-id}))

              (if code
                [:p (:app/current-locale strings) ": " localised]
                [:p "No app locale is set"])
              (locales-selector locales-selector-props)
              (locales-table locales-table-props)
              (localised-string-table localised-string-table-props)]))))
