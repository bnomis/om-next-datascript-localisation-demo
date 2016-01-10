(ns om-next-datascript-localisation-demo.components.locale.table
  (:require
    [om.next :as om :refer-macros [defui]]
    [sablono.core :as html :refer-macros [html]]
    [om-next-datascript-localisation-demo.logging :refer-macros [log]]
    [om-next-datascript-localisation-demo.components.editable-text :refer [editable-text]]
    [clojure.string :as str]
    [om-next-datascript-localisation-demo.utils.keywords :refer [keywordify]]
    [om-next-datascript-localisation-demo.utils.checkboxes :refer [reset-checkboxes selected-checkbox-ids]]))

;; make an empty locale
(defn empty-locale [locale]
  {:id locale :value "None" :locale locale :placeholder true})

(defn fill-empty-locales [order]
  (mapv empty-locale order))

(defn find-locales-locale [locales id]
  (some (fn [l]
          (if (= id (get-in l [:localised/locale :db/id]))
            {:id (get-in l [:db/id]) :value (get-in l [:value]) :locale id :placeholder false}))
    locales))

(defn get-locales-locale [locales id]
  (let [ll (find-locales-locale locales id)]
    (or ll (empty-locale id))))

(defn find-locales [locales order]
  (if (or (empty? locales) (not locales))
    (fill-empty-locales order)
    (loop [out []
            o (first order)
            order (rest order)]
      (if-not o
        out
        (recur (conj out (get-locales-locale locales o)) (first order) (rest order))))))

(defn localised-locale [locale edited-text]
  (html
    [:td
      {:key (:id locale)}
      (editable-text (om/computed {:text (:value locale)} {:callback #(edited-text (:id locale) :value %)}))]))

(defn localised-locale-placeholder [locale localised-locale-create]
  (html
    [:td
      {:key (:id locale)}
      (editable-text (om/computed {:text (:value locale)} {:callback #(localised-locale-create (:locale locale) %)}))]))

(defn localised-locale-factory [locale edited-text localised-locale-create]
  (if (:placeholder locale)
    (localised-locale-placeholder locale localised-locale-create)
    (localised-locale locale edited-text)))


(comment
  ;; This would work because the first time this component is rendered the props are passed from the parent
  ;; On update the ident is known - since the component is realised, so this query works.
  ;; But to render this component we also need the order of locales and the state of the checkbox
  ;; this data is known to the parent only. So, this becomes a dumb component.
  ;; See the Selector component for an example of this in action.
  static om/IQuery
  (query [this]
    `[({:locale [:db/id :value :locale/code :locale/enum :localised]} {:ident ~(om/get-ident this)})]))

(defui LocalesTableRow
  static om/Ident
  (ident [this props]
    [:db/id (get-in props [:locale :db/id])])

  Object
  (render [this]
    (let [oprops (om/props this)
          props (:locale oprops)
          {:keys [:db/id :value :locale/code :locale/enum]} props
          order (:order oprops)
          checked (:checked oprops)
          locales (:localised props)
          localised (find-locales locales order)
          css-class (:css-class oprops)
          {:keys [:toggle-checkbox :edited-text :edited-text-id :edited-keyword :localised-locale-create]} (om/get-computed this)]
      ;;(log "LocalesTableRow: render: oprops" oprops)
      (html
        [:tr {:class css-class}
          [:td {:class "center-column"}
            [:input
              { :type "checkbox"
                :value id
                :checked checked
                :on-change (fn [e] (toggle-checkbox))}]]
          [:td (editable-text (om/computed {:text value} {:callback #(edited-text :value %)}))]
          [:td {:class "center-column"} (editable-text (om/computed {:text code} {:callback #(edited-text :locale/code %)}))]
          [:td (editable-text (om/computed {:text (str enum)} {:callback #(edited-keyword :locale/enum %)}))]
          (map #(localised-locale-factory % edited-text-id localised-locale-create) localised)]))))

(def locale (om/factory LocalesTableRow {:keyfn (fn [props] (get-in props [:locale :db/id]))}))


(defui LocalesTable
  static om/IQuery
  (query [this]
    `[:locales])

  Object
  (initLocalState [this]
    (let [props (om/props this)
          locales (:locales props)]
      {:checkboxes (reset-checkboxes locales)}))

  ;; if a locale has been added/deleted we need to update the checkbox state
  (componentWillReceiveProps [this new-props]
    (let [locales (:locales new-props)
          state (om/get-state this)
          old-checkboxes (:checkboxes state)
          add-checkbox-state (fn [new old locale]
                              (let [id (:db/id locale)]
                                (if (contains? old id)
                                  (assoc new id (get old id))
                                  (assoc new id false))))]
      (loop [new-checkboxes {}
              l (first locales)
              locales (rest locales)]
        (if-not l
          (om/set-state! this {:checkboxes new-checkboxes})
          (recur (add-checkbox-state new-checkboxes old-checkboxes l) (first locales) (rest locales))))))

  (toggle-checkbox [this id]
    (om/update-state! this #(update-in % [:checkboxes id] not)))

  (edited-text [this id attrib text]
    (om/transact! this `[(attrib/set {:db/id ~id, :attrib ~attrib, :value ~text}) :locales]))

  (edited-keyword [this id attrib text]
    (.edited-text this id attrib (keywordify text)))

  (localised-locale-create [this id locale text]
    (om/transact! this `[(localised/create {:db/id ~id, :locale ~locale, :value ~text}) :locales]))

  (render [this]
    (let [props (om/props this)
          locales (:locales props)
          ;; to make sure the locales for each locale are in a consistent order
          ;; we define the order
          order (mapv #(get-in % [:db/id]) locales)
          state (om/get-state this)]
      (log "LocalesTable: render: props" props)
      (html
        [:div {:class "functional-block"}
          [:h2 "Locales"]
          [:button
            {:on-click (fn [e]
                        (om/transact! this `[(locale/create) :locales]))}
            "Add a new locale"]
          (when (not-empty locales)
            (html
              [:div
                [:table
                  [:thead
                    [:tr
                      [:th {:rowSpan 2} "Select"]
                      [:th {:rowSpan 2} "Name"]
                      [:th {:rowSpan 2} "Code"]
                      [:th {:rowSpan 2} "Enum"]
                      [:th {:colSpan (count order)} "Localised"]]
                    [:tr
                      (map (fn [l] [:th {:key (get-in l [:db/id])} (get-in l [:locale/code])]) locales)]]
                  [:tbody
                    (map (fn [l css-class]
                          (let [id (get-in l [:db/id])
                                checked (get-in state [:checkboxes id])]
                            (locale
                              (om/computed {  :order order
                                              :checked checked
                                              :css-class css-class
                                              :locale l}
                                { :toggle-checkbox #(.toggle-checkbox this id)
                                  :edited-text #(.edited-text this id %1 %2)
                                  :edited-text-id #(.edited-text this %1 %2 %3)
                                  :edited-keyword #(.edited-keyword this id %1 %2)
                                  :localised-locale-create #(.localised-locale-create this id %1 %2)}))))
                      locales (cycle ["odd" "even"]))]]
                [:button
                  { :on-click (fn [e]
                                (let [state (om/get-state this)
                                      checkboxes (:checkboxes state)
                                      ids (selected-checkbox-ids checkboxes)]
                                  (when-not (empty? ids)
                                    (om/transact! this `[(locale/delete {:ids ~ids}) :locales]))))}
                  "Delete selected"]]))]))))

(def locales-table (om/factory LocalesTable))
