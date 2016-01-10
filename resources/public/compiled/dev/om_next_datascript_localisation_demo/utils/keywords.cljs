(ns om-next-datascript-localisation-demo.utils.keywords
  (:require
    [clojure.string :as str]))

(defn remove-colons [w]
  (str/replace w #":" ""))

(defn keywordify [kw]
  (let [w (str/trim kw)]
    (if (keyword? w)
      w
      (keyword (remove-colons w)))))
