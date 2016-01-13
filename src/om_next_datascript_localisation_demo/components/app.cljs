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
    [om-next-datascript-localisation-demo.utils.html :refer [set-html-lang set-html-title]]
    [om-next-datascript-localisation-demo.utils.interpolator :refer [interp]]))


(defn render-string [factory props]
  (factory
    (om/computed (:query-props props) (:computed-props props))))

(defui App
  static om/IQuery
  (query [this]
    `[  {:app.locale [:db/id :locale/code :localised]}
        {:app.localised/strings [:app/editable-localised-strings :app/read-only-localised-strings :app/explain :app/information :app/title :app/desc :app/current-locale :app/missing :date/today :date/format]}
        {:app.localised/date [:days :months]}
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
          months (get-in props [:app.localised/date :months])
          days (get-in props [:app.localised/date :days])
          locales-selector-props (get-in props [:locales-selector-props])
          locales-table-props (get-in props [:locales-table-props])
          localised-string-table-props (get-in props [:localised-string-table-props])
          string-props [{:query-props {:localised/string {:localised-value (:app/title strings)}}
                          :computed-props { :tag :h2
                                            :string-id :app/title
                                            :locale-id app-locale-id}}
                        {:query-props {:localised/string {:localised-value (:app/desc strings)}}
                          :computed-props { :tag :p
                                            :string-id :app/desc
                                            :locale-id app-locale-id}}
                        {:query-props {:localised/string {:localised-value (:app/missing strings)}}
                          :computed-props { :tag :p
                                            :string-id :app/missing
                                            :locale-id app-locale-id}}]
          date-format (:date/format strings)
          date (js/Date.)
          year (.getFullYear date)
          month (.getMonth date)
          day (.getDay date)
          date (.getDate date)]

      (log "-----------------------------")
      (log "App render:" props)
      (set-html-lang code)
      (set-html-title (:app/title strings))
      (html [:div
              [:p.explain {:dangerouslySetInnerHTML {:__html (:app/explain strings)}}]
              [:div {:class "functional-block"}
                [:p.explain (:app/editable-localised-strings strings)]
                (map #(render-string editable-localised-string %) string-props)]
              [:div {:class "functional-block"}
                [:p.explain (:app/read-only-localised-strings strings)]
                (map #(render-string localised-string %) string-props)]
              [:div {:class "functional-block"}
                [:h2 (:app/information strings)]
                (if date-format
                  [:p (:date/today strings) ": " (interp date-format {:year year :month (get months month) :date date :day (get days day)})])
                (if code
                  [:p (:app/current-locale strings) ": " localised]
                  [:p "No app locale is set"])
                (locales-selector locales-selector-props)]
              (locales-table locales-table-props)
              (localised-string-table localised-string-table-props)]))))
