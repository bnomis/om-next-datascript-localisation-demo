(ns om-next-datascript-localisation-demo.components.locale.strings
  (:require
    [om.next :as om :refer-macros [defui]]
    [sablono.core :as html :refer-macros [html]]
    [om-next-datascript-localisation-demo.logging :refer-macros [log]]
    [om-next-datascript-localisation-demo.components.editable-text :refer [editable-text]]
    [om-next-datascript-localisation-demo.utils.keywords :refer [keywordify]]
    [om-next-datascript-localisation-demo.utils.checkboxes :refer [reset-checkboxes selected-checkbox-ids]]))

;; make a placeholder localised value
(defn make-localised-placeholder [id]
  {:id id :value "None" :placeholder true})

(defn make-localised-placeholders [order]
  (mapv make-localised-placeholder order))

(defn find-localised [localised id]
  (some (fn [l]
          (if (= id (get-in l [:localised/locale :db/id]))
            {:id (:db/id l) :value (get-in l [:value]) :placeholder false}))
    localised))

(defn get-localised [localised id]
  (let [ll (find-localised localised id)]
    (or ll (make-localised-placeholder id))))

(defn order-localised [localised order]
  (if (or (empty? localised) (not localised))
    (make-localised-placeholders order)
    (loop [out []
            o (first order)
            order (rest order)]
      (if-not o
        out
        (recur (conj out (get-localised localised o)) (first order) (rest order))))))

(defn localised [locale edited-text]
  (html
    [:td
      {:key (:id locale)}
      (editable-text (om/computed {:text (:value locale)} {:callback #(edited-text (:id locale) :value %)}))]))

(defn localised-placeholder [locale localised-create]
  (html
    [:td
      {:key (:id locale)}
      (editable-text (om/computed {:text (:value locale)} {:callback #(localised-create (:id locale) %)}))]))

(defn localised-factory [locale edited-text localised-create]
  (if (:placeholder locale)
    (localised-placeholder locale localised-create)
    (localised locale edited-text)))

(defui LocalisedStringTableRow
  static om/Ident
  (ident [this props]
    [:db/id (get-in props [:localised-string :db/id])])

  Object
  (render [this]
    (let [props (om/props this)
          localised-string (:localised-string props)
          {:keys [:db/id :string/ident :value :localised]} localised-string
          order (:order props)
          checked (:checked props)
          css-class (:css-class props)
          localised (order-localised localised order)
          {:keys [:toggle-checkbox :edited-text :edited-text-id :edited-keyword :localised-create]} (om/get-computed this)]
      ;;(log "LocalisedStringTableRow: render: props" props)
      (html
        [:tr {:class css-class}
          [:td {:class "center-column"}
            [:input
              { :type "checkbox"
                :value id
                :checked checked
                :on-change (fn [e] (toggle-checkbox))}]]
          [:td (editable-text (om/computed {:text (str ident)} {:callback #(edited-keyword :string/ident %)}))]
          [:td (editable-text (om/computed {:text value} {:callback #(edited-text :value %)}))]
          (map #(localised-factory % edited-text-id localised-create) localised)]))))

(def localised-string (om/factory LocalisedStringTableRow {:keyfn (fn [props] (get-in props [:localised-string :db/id]))}))


(defn table-head [locales]
  (if (not-empty locales)
    (html
      [:thead
        [:tr
          [:th {:rowSpan 2} "Select"]
          [:th {:rowSpan 2} "ID"]
          [:th {:rowSpan 2} "Default"]
          [:th {:colSpan (count locales)} "Localised"]]
        [:tr
          (map (fn [l] [:th {:key (get-in l [:db/id])} (get-in l [:locale/code])]) locales)]])
    (html
      [:thead
        [:tr
          [:th "Select"]
          [:th "ID"]
          [:th "Default"]]])))

(defui LocalisedStringTable
  static om/IQuery
  (query [this]
    `[:locales :localised-strings])

  Object
  (initLocalState [this]
    (let [props (om/props this)
          locales (:locales props)]
      {:checkboxes (reset-checkboxes locales)}))

  ;; if a localised string has been added/deleted we need to update the checkbox state
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
    (om/transact! this `[(attrib/set {:db/id ~id, :attrib ~attrib, :value ~text}) :localised-strings]))

  (edited-keyword [this id attrib text]
    (.edited-text this id attrib (keywordify text)))

  (localised-create [this id locale text]
    (om/transact! this `[(localised/create {:db/id ~id, :locale ~locale, :value ~text}) :localised-strings]))

  (render [this]
    (let [props (om/props this)
          locales (:locales props)
          localised-strings (:localised-strings props)
          ;; to make sure locales are in a consistent order
          ;; we pass the order of display to the row
          order (mapv #(get-in % [:db/id]) locales)
          state (om/get-state this)]
      ;;(log "LocalisedStringTable: render: props" props)
      (html
        [:div {:class "functional-block"}
          [:h2 "Localised Strings"]
          [:button
            {:on-click (fn [e]
                        (om/transact! this `[(localised-string/create) :localised-strings]))}
            "Add a new localised string"]
          (when (not-empty localised-strings)
            (html
              [:div
                [:table
                  (table-head locales)
                  ;; body
                  [:tbody
                    (map (fn [l css-class]
                          (let [id (get-in l [:db/id])
                                checked (get-in state [:checkboxes id])]
                            (localised-string
                              (om/computed {  :order order
                                              :checked checked
                                              :css-class css-class
                                              :localised-string l}
                                { :toggle-checkbox #(.toggle-checkbox this id)
                                  :edited-text #(.edited-text this id %1 %2)
                                  :edited-text-id #(.edited-text this %1 %2 %3)
                                  :edited-keyword #(.edited-keyword this id %1 %2)
                                  :localised-create #(.localised-create this id %1 %2)}))))
                      localised-strings (cycle ["odd" "even"]))]]
                [:button
                  {:on-click (fn [e]
                              (let [state (om/get-state this)
                                    checkboxes (:checkboxes state)
                                    ids (selected-checkbox-ids checkboxes)]
                                (when-not (empty? ids)
                                  (om/transact! this `[(delete/db-id {:ids ~ids}) :localised-strings]))))}
                  "Delete selected"]]))]))))

(def localised-string-table (om/factory LocalisedStringTable))
