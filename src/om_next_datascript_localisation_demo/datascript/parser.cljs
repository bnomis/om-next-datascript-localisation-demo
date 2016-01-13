(ns om-next-datascript-localisation-demo.datascript.parser
  (:require
    [om.next :as om]
    [datascript.core :as d]
    [om-next-datascript-localisation-demo.logging :refer-macros [log log-params log-read log-mutate]]
    [om-next-datascript-localisation-demo.datascript.db
      :refer [db-pull app-locale app-locale-id app-locale-code app-locale-entity
              add-db-id-param-to-query locales-for-id locale-ids read-locales
              app-localise app-localise-query app-localise-string app-localise-date
              app-localise-query-for-id localise app-locale-tx-after-deleting-locales
              unique-locale-code unique-localised-string-ident the-db
              read-default locale-refs read-locale read-localised-string read-localised-strings
              localise-string-with-query make-edited-string-tx]]
    [om-next-datascript-localisation-demo.utils.ident :refer [ident->string-id-and-locale]]))

;;(enable-console-print!)

;;
;; read
;;

(defmulti read om/dispatch)

(defmethod read :default
  [env key params]
  (log "*-* read default")
  (log-params env key params)
  (let [db (:state env)
        query (:query env)]
    {:value (read-default db key query)}))

(defmethod read :app.locale
  [env key params]
  (log "--- read app.locale")
  (log-params env key params)
  (let [db (:state env)
        query (:query env)]
    {:value (app-locale db query)}))

(defmethod read :locale
  [env key params]
  (log "--- read locale")
  (log-params env key params)
  (let [db (:state env)
        query (:query env)
        ident (:ident params)
        eid (get-in ident [1])]
    (if eid
      {:value (db-pull db eid query)}
      {:value :not-found})))

(defmethod read :locales-via-refs
  [env key params]
  (log "--- read locales-via-refs")
  (log-params env key params)
  (let [db (:state env)
        query (:query env)
        parser (:parser env)
        ref (get-in env [:ref])
        refs (if ref [ref] (locale-refs db))]
    {:value (mapv #(parser (assoc env :ref %) query) refs)}))

(defmethod read :locales
  [env key params]
  (log "--- read locales")
  (log-params env key params)
  (let [db (:state env)
        query (:query env)
        ref (get-in env [:ref])]
    (if ref
      {:value (read-locale db (get-in ref [1] query))}
      {:value (read-locales db query)})))

(defmethod read :locales-selector-props
  [env key params]
  (log "--- read locales-selector-props")
  (log-read env key params)
  (let [query (:query env)
        parser (:parser env)]
    {:value (parser env query)}))

(defmethod read :locales-table-props
  [env key params]
  (log "--- read locales-table-props")
  (log-read env key params)
  (let [query (:query env)
        parser (:parser env)]
    {:value (parser env query)}))

(defmethod read :localised-string-table-props
  [env key params]
  (log "--- read localised-string-table-props")
  (log-read env key params)
  (let [query (:query env)
        parser (:parser env)]
    {:value (parser env query)}))

;; the query is a list of string-ids to localise
(defmethod read :app.localised/strings
  [env key params]
  (log "--- read app.localised/strings")
  (log-read env key params)
  (let [db (:state env)
        query (:query env)]
    (loop [sid (first query)
            string-ids (rest query)
            results {}]
      (if-not sid
        {:value results}
        (recur (first string-ids) (rest string-ids) (assoc results sid (app-localise-string db sid)))))))

(defmethod read :localised/string
  [env key params]
  (log "--- read localised/string")
  (log-params env key params)
  (let [db (:state env)
        query (:query env)
        ref (get-in env [:ref 1])
        pident (get-in params [:ident 1])
        ident (or ref pident)
        [string-id locale-id] (ident->string-id-and-locale ident)]
    {:value (localise-string-with-query db string-id locale-id query)}))

(defmethod read :localised-string
  [env key params]
  (log "--- read localised-string")
  (log-read env key params)
  (let [db (:state env)
        query (:query env)]
    {:value (read-localised-string db query)}))

(defmethod read :localised-strings
  [env key params]
  (log "--- read localised-strings")
  (log-read env key params)
  (let [db (:state env)
        query (:query env)]
    {:value (read-localised-strings db query)}))


(defmethod read :db/pull
  [env key params]
  {:pre [(:ident params)]}
  (log "--- read db/pull")
  (log-params env key params)
  (let [db (:state env)
        query (:query env)
        ident (:ident params)]
    {:value (db-pull db ident query)}))


;; return requested date things in the app locale
(defmethod read :app.localised/date
  [env key params]
  (log "--- read app.localised/date")
  (log-read env key params)
  (let [db (:state env)
        query (:query env)]
    (loop [this (first query)
            these (rest query)
            results {}]
      (if-not this
        {:value results}
        (recur (first these) (rest these) (assoc results this (app-localise-date db this)))))))



;;
;; mutate
;;

(defmulti mutate om/dispatch)

(defmethod mutate :default
  [env key params]
  (log "-** mutate default")
  (log-params env key params)
  {:action nil})

(defmethod mutate 'app.locale/set
  [env key params]
  (log "=== mutate app.locale/set")
  (log-mutate env key params)
  (let [db (:state env)
        tx {:db/id (app-locale-entity db), :app/locale params}]
    (log tx)
    {:value {:keys [:app.locale]}
      :action (fn [] (d/transact! db [tx]))}))

(defmethod mutate 'locale/create
  [env key params]
  (log "=== mutate locale/create")
  (log-mutate env key params)
  (let [db (:state env)
        code (unique-locale-code db)
        tx [{:db/id -1
              :locale/code code
              :locale/ident (keyword "locale" code)
              :value "Edit me"}]]
    (log "mutate locale/create tx:" tx)
    { :value {:keys [:locales]}
      :action (fn [] (d/transact! db tx))}))

(defmethod mutate 'locale/delete
  [env key params]
  {:pre [(:ids params)]}
  (log "=== mutate locale/delete")
  (log-mutate env key params)
  (let [db (:state env)
        ids (:ids params)
        tx (mapv (fn [id] [:db.fn/retractEntity id]) ids)
        ;; if deleting the current app-locale switch to a new one
        new-locale (app-locale-tx-after-deleting-locales db ids)]
    { :action (fn [] (d/transact! db (conj tx new-locale)))}))


(defmethod mutate 'localised-string/create
  [env key params]
  (log "=== mutate localised-string/create")
  (log-mutate env key params)
  (let [db (:state env)
        ident (unique-localised-string-ident db)
        tx [{:db/id -1
              :string/ident ident
              :value "Edit me"}]]
    { :value {:keys [:localised-strings]}
      :action (fn [] (d/transact! db tx))}))

(defmethod mutate 'localised-string/set
  [env key params]
  (log "=== mutate localised-string/set")
  (log-mutate env key params)
  (let [db (:state env)
        {:keys [:string/ident :locale/id :text]} params
        tx (make-edited-string-tx db ident id text)]
    { :value {:keys [:localised-strings]}
      :action (fn [] (d/transact! db tx))}))



(defmethod mutate 'localised/create
  [env key params]
  (log "=== mutate localised/create")
  (log-mutate env key params)
  (let [db (:state env)
        {:keys [:db/id :locale :value]} params
        tx [  [:db/add -1 :localised/locale locale]
              [:db/add -1 :value value]
              [:db/add id :localised -1]]]
    { :action (fn [] (d/transact! db tx))}))

(defmethod mutate 'attrib/set
  [env key params]
  (log "=== mutate attrib/set")
  (log-mutate env key params)
  (let [db (:state env)
        {:keys [:db/id :attrib :value]} params
        tx {:db/id id attrib value}]
    { :action (fn [] (d/transact! db [tx]))}))

(defmethod mutate 'delete/db-id
  [env key params]
  {:pre [(:ids params)]}
  (log "=== mutate delete/db-id")
  (log-mutate env key params)
  (let [db (:state env)
        ids (:ids params)
        tx (mapv (fn [id] [:db.fn/retractEntity id]) ids)]
    { :action (fn [] (d/transact! db tx))}))



;;
;; parser
;;

(def parser (om/parser {:read read :mutate mutate}))

(defn log-query [q]
  (let [env {:state the-db
              :query q}]
    (log "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
    (log "query:" q)
    (log "result:" (parser env q))
    (log "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")))

(defn test-locales []
  (log "test-locales")
  (let [queries [ [:locales]
                  [{:locales [:db/id]}]
                  [:app/locale]
                  [{:app/locale [:app/locale]}]
                  [{:app.localised/strings [:app-title :app-desc :app-locale-current]}]]]

    (doall (map log-query queries))))

(defn test-parser []
  (test-locales))

;;(test-parser)
