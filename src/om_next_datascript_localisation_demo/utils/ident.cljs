(ns om-next-datascript-localisation-demo.utils.ident
  (:require
    [clojure.string :as str]
    [om-next-datascript-localisation-demo.utils.keywords :refer [keywordify]]))

(defn id-and-locale->ident [id locale-id]
  (str/join [id "=" locale-id]))

(defn ident->id-and-locale [ident]
  (let [[id locale-id] (str/split ident #"=")]
    [(int id) (int locale-id)]))

(defn string-id-and-locale->ident [string-id locale-id]
  (str/join [(str string-id) "=" locale-id]))

(defn ident->string-id-and-locale [ident]
  (let [[string-id locale-id] (str/split ident #"=")]
    [(keywordify string-id) (int locale-id)]))

(defn str-list-to-idents [s]
  (let [ints (str/split s #",")]
    (map #(js/parseInt %) ints)))

(defn idents-to-str-list [ints]
  (let [ss (map #(.toString %) ints)]
    (str/join "," ss)))
