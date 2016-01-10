(ns om-next-datascript-localisation-demo.datascript.db
  (:require
    [om.next :as om :refer-macros [defui]]
    [om.next.impl.parser :refer [expr->ast ast->expr]]
    [datascript.core :as d]
    [om-next-datascript-localisation-demo.datascript.schema :refer [schema]]
    [om-next-datascript-localisation-demo.datascript.initial :refer [initial-data]]
    [om-next-datascript-localisation-demo.logging :refer-macros [log log-read log-mutate]]
    [clojure.set :refer [difference]]))

(defn init-db []
  ;; make database with the schema
  (let [conn (d/create-conn schema)]
    ;; put initial data in the database
    (d/transact! conn initial-data)
    conn))

(def the-db (init-db))


(defn db-pull
  ([db eid]
   (db-pull db eid '[*]))
  ([db eid query]
   (if eid
     (let [query (or query '[*])]
       (d/pull @db query eid))
     [])))

(defn db-pull-many
  ([db eids]
   (db-pull db eids '[*]))
  ([db eids query]
   (if (not-empty eids)
     (let [query (or query '[*])]
       (d/pull-many @db query eids))
     [])))


(defn find-ids
  [db key]
  (d/q '[:find [?e ...]
          :in $ ?key
          :where
          [?e ?key _]]
      @db key))

(defn read-default
  ([db key] (read-default db key '[*]))
  ([db key query]
   (let [ids (find-ids db key)
         query (or query '[*])]
     (db-pull-many db ids query))))

(defn locale-ids
  [db]
  (d/q '[:find [?e ...]
          :where
          [?e :locale/code _]]
      @db))

(defn locale-refs [db]
  (mapv (fn [id] [:db/id id]) (locale-ids db)))

(defn read-locales
  ([db] (read-locales db '[*]))
  ([db query]
   (let [ids (locale-ids db)
         query (or query '[*])]
     (db-pull-many db ids query))))

(defn read-locale
  ([db eid] (read-locale db eid '[*]))
  ([db eid query]
   (let [query (or query '[*])]
     (db-pull db eid query))))

(defn map->id
  [value]
  (if (map? value)
    (:db/id value)
    value))

(defn id->map
  [value]
  (if (map? value)
    value
    {:db/id value}))

(defn db-pull-old
  [db query id]
  {:pre [db query id]}
  ;;(log "db-pull: db:" db)
  (log "db-pull: query:" query)
  (log "db-pull: id:" id)
  (let [val (d/pull @db query id)]
    (log "db-pull: val:" val)
    val))

(defn locales-for-id
  [db id]
  (d/q '[:find [?e ...]
          :in $ ?id
          :where
            [?id :localised ?e]] @db id))

(defn default-value
  [db id]
  {:pre [db id]}
  (d/q '[:find ?value .
          :in $ ?id
          :where
            [?id :value ?value]] @db id))


(defn id-for-locale
  [db id locale-id]
  {:pre [db id locale-id]}
  (d/q '[:find ?locale .
          :in $ ?id ?locale-id
          :where
            [?id :localised ?locale]
            [?locale :localised/locale ?locale-id]] @db id locale-id))


(defn localise
  [db id locale-id]
  {:pre [db id]}
  (let [id (map->id id)
        locale-id (map->id locale-id)
        localised-val (when locale-id
                        (d/q '[:find ?value .
                                :in $ ?id ?locale-id
                                :where
                                  [?id :localised ?locale]
                                  [?locale :localised/locale ?locale-id]
                                  [?locale :value ?value]] @db id locale-id))]
    (or localised-val (default-value db id))))


(defn app-locale-id
  [db]
  (d/q '[:find ?e .
          :where [_ :app/locale ?e]] @db))

(defn app-locale-entity
  [db]
  (d/q '[:find ?e .
          :where [?e :app/locale]] @db))

(defn app-locale
  ([db] (app-locale db '[*]))
  ([db query] (db-pull db (app-locale-id db) query)))

(defn app-locale-code
  [db]
  (:locale/code (d/pull @db [:locale/code] (app-locale-id db))))

(defn app-localise
  [db id]
  (log "app-localise: id" id)
  (let [aid (app-locale-id db)]
    (localise db id aid)))

(defn string-id->eid
  [db string-id]
  (d/q '[:find ?e .
          :in $ ?string-id
          :where
            [?e :string/ident ?string-id]] @db string-id))

(defn eid->string-id
  [db eid]
  (d/q '[:find ?string-id .
          :in $ ?eid
          :where
            [?eid :string/ident ?string-id]] @db eid))

(defn localise-string-by-id
  [db eid locale-id]
  {:pre [db eid]}
  ;; catch empty strings
  (let [s (localise db eid locale-id)]
    ;; check the localised string has a length
    (if (> (count s) 0)
      s
      ;; if the localised string is zero length use default value
      (let [s (default-value db eid)]
        (when (> (count s) 0)
          s)))))

(defn localise-string
  [db string-id locale-id]
  {:pre [db string-id]}
  ;; catch string-ids not in db
  (if-let [eid (string-id->eid db string-id)]
    (if-let [s (localise-string-by-id db eid locale-id)]
      s
      ;; if the string cannot be localised return the string-id
      (str string-id))
    ;; if the string-id is not in the db return the string-id
    (str string-id)))

(defn app-localise-string
  [db string-id]
  {:pre [string-id]}
  (localise-string db string-id (app-locale-id db)))

(defn localise-string-with-query
  ([db string-id locale-id] (localise-string-with-query db string-id locale-id '[*]))
  ([db string-id locale-id query]
   {:pre [db string-id locale-id]}
   (let [s (localise-string db string-id locale-id)]
    (if-let [eid (string-id->eid db string-id)]
      (let [result (db-pull db eid query)]
        (assoc result :localised-value s)))
    {:localised-value s})))

(defn make-edited-string-tx [db string-id locale-id text]
  ;; does the string exist
  (if-let [eid (string-id->eid db string-id)]
    ;; does the locale for the string exist
    (if-let [lid (id-for-locale db eid locale-id)]
      [{:db/id lid :value text}]
      ;; create the locale
      [ [:db/add -1 :localised/locale locale-id]
        [:db/add -1 :value text]
        [:db/add eid :localised -1]])
    ;; create the string and the locale
    [ [:db/add -1 :localised/locale locale-id]
      [:db/add -1 :value text]
      [:db/add -2 :value text]
      [:db/add -2 :string/ident string-id]
      [:db/add -2 :localised -1]]))


(defn app-localise-string-by-id
  ([db eid] (app-localise-string-by-id db eid '[*]))
  ([db eid query]
   {:pre [eid]}
   (let [s (localise-string-by-id db eid (app-locale-id db))
          result (db-pull db eid query)]
    (assoc result :value s))))



(defn localised-strings-ids
  [db]
  (d/q '[:find [?e ...]
          :where
          [?e :string/ident _]]
      @db))

(defn read-localised-strings
  ([db] (read-localised-strings db '[*]))
  ([db query]
   (let [ids (localised-strings-ids db)
         query (or query '[*])]
     (db-pull-many db ids query))))


(defn app-localise-map
  [db [k v]]
  (log "app-localise-map: k" k)
  (log "app-localise-map: v" v)
  {k (app-localise db v)})

(defn find-linked-id
  [db id attrib]
  (d/q '[:find ?e .
          :in $ ?id ?attrib
          :where
            [?id ?attrib ?e]] @db id attrib))

(defn app-localise-query-to-ids
  [db id query]
  (loop [k (first query)
          query (rest query)
          results {}]
    (if-not k
      results
      (recur (first query) (rest query) (assoc results k (find-linked-id db id k))))))

(defn app-localise-query-for-id
  [db id query]
  (log "app-localise-query-for-id: id" id)
  (log "app-localise-query-for-id: query" query)
  (let [results (app-localise-query-to-ids db id query)
        keys (keys results)]
    (log "app-localise-query-for-id: results" results)
    (loop [k (first keys)
            keys (rest keys)
            out {}]
      (if-not k
        out
        (recur (first keys) (rest keys) (assoc out k (app-localise db (k results))))))))

(defn app-localise-attrib
  [db attrib]
  (log "app-localise-attrib" attrib)
  (let [eids (d/q '[:find [?e ...]
                      :in $ ?attrib
                      :where [_ ?attrib ?e]] @db attrib)]
    (mapv #(app-localise db %) eids)))

(defn app-localise-query
  [db query]
  (log "app-localise-query" query)
  (mapv #(hash-map %1 (app-localise-attrib db %1)) query))



(defn locale-code
  [db id]
  (first
    (d/q '[:find [?code ...]
            :in $ ?id
            :where
              [?id :locale/code ?code]] @db id)))


(defn put-db-id-in-query
  [query id]
  (let [ast (expr->ast query)
        ast (assoc-in ast [:params :db/id] id)
        expr (ast->expr ast)]
    expr))

(defn add-db-id-param-to-query
  [query id]
  {:pre [id]}
  (log "!!!add-db-id-param-to-query: query" query)
  (log "!!!add-db-id-param-to-query: id" id)
  (if (vector? query)
    (if (empty? query)
      nil
      (if (every? keyword? query)
        [(list query {:db/id id})]
        (mapv #(add-db-id-param-to-query % id) query)))
    (put-db-id-in-query query id)))


(defn read-locale-locale
  [db id query]
  (loop [q (first query)
          query (rest query)
          results {}]
    (if-not q
      results
      (do
        (let [k (key (first q))
              v (val (first q))
              val (cond
                    (= k :locale.locale) (db-pull db id v)
                    :else nil)]
          (recur (first query) (rest query) (assoc results k val)))))))

(defn read-locale-locales [db id query]
  (let [locale-locales (d/q '[:find [?locale-locale ...]
                              :in $ ?id
                              :where [?id :locale/locales ?locale-locale]] @db id)]
    (loop [l (first locale-locales)
            locale-locales (rest locale-locales)
            results []]
      (if-not l
        results
        (recur (first locale-locales) (rest locale-locales) (conj results (read-locale-locale db l query)))))))

(defn read-locale-old
  [db id query]
  (loop [q (first query)
          query (rest query)
          results {}]
    (if-not q
      results
      (do
        (let [k (key (first q))
              v (val (first q))
              val (cond
                    (= k :locale) (db-pull db id v)
                    (= k :locale.locales) (read-locale-locales db id v)
                    (= k :editable.locale.locales) (read-locale-locales db id v)
                    :else nil)]
          (recur (first query) (rest query) (assoc results k val)))))))


(defn id-in-list [list id]
  (some #(= id %) list))

(defn app-locale-tx-after-deleting-locales [db ids]
  (let [alid (app-locale-id db)]
    (when (id-in-list ids alid)
      (let [locale-ids (locale-ids db)
            diff (difference (set locale-ids) (set ids))
            new-id (first diff)]
        (when new-id
          {:db/id (app-locale-entity db) :app/locale new-id})))))


(defn locale-code-is-unique
  [db code]
  (let [e (d/q '[:find ?e .
                  :in $ ?code
                  :where [?e :locale/code ?code]] @db code)]
    (if e
      false
      true)))

(defn localised-string-ident-is-unique
  [db ident]
  (let [e (d/q '[:find ?e .
                  :in $ ?ident
                  :where [?e :locale/code ?ident]] @db ident)]
    (if e
      false
      true)))

(defn random-string [length]
  (let [alpha ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        alpha-len (count alpha)]
    (loop [chars []
            length length]
      (if (= 0 length)
        (apply str chars)
        (recur (conj chars (get alpha (rand-int alpha-len))) (dec length))))))


(defn unique-locale-code [db]
  (loop [code (random-string 2)]
    (if (locale-code-is-unique db code)
      code
      (recur (random-string 2)))))


(defn unique-localised-string-ident [db]
  (loop [ident (keyword (random-string 6))]
    (if (localised-string-ident-is-unique db ident)
      ident
      (recur (keyword (random-string 6))))))
