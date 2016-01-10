(ns sablono.util
  #?(:cljs (:import goog.Uri))
  (:refer-clojure :exclude [replace])
  (:require [clojure.set :refer [rename-keys]]
            [clojure.string :refer [blank? capitalize join split replace]]))

(def ^:dynamic *base-url* nil)

(defprotocol ToString
  (to-str [x] "Convert a value into a string."))

(defprotocol ToURI
  (to-uri [x] "Convert a value into a URI."))

(defn as-str
  "Converts its arguments into a string using to-str."
  [& xs]
  (apply str (map to-str xs)))

(defn camel-case
  "Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv."
  [k]
  (if k
    (let [[first-word & words] (split (name k) #"-")]
      (if (or (empty? words)
              (= "aria" first-word)
              (= "data" first-word))
        k (-> (map capitalize words)
              (conj first-word)
              join
              keyword)))))

(defn camel-case-keys
  "Recursively transforms all map keys into camel case."
  [m]
  (if (map? m)
    (let [ks (keys m)
          kmap (zipmap ks (map camel-case ks))]
      (-> (rename-keys m kmap)
          (cond->
              (map? (:style m))
            (update-in [:style] camel-case-keys))))
    m))

(defn element?
  "Return true if `x` is an HTML element. True when `x` is a vector
  and the first element is a keyword, e.g. `[:div]` or `[:div [:span \"x\"]`."
  [x]
  (and (vector? x)
       (keyword? (first x))))

(defn html-to-dom-attrs
  "Converts all HTML attributes to their DOM equivalents."
  [attrs]
  (rename-keys (camel-case-keys attrs)
               {:class :className
                :for :htmlFor}))

(defn join-classes
  "Join the `classes` with a whitespace."
  [classes]
  (join " " (sort (flatten (seq classes)))))

(defn wrapped-type?
  "Return true if the element `type` needs to be wrapped."
  [type]
  (contains? #{:input :option :textarea} (keyword type)))

(defn react-fn
  "Return the symbol of a fn that build a React element. "
  [type]
  (if (wrapped-type? type)
    'sablono.interpreter/create-element
    'js/React.createElement))

#?(:cljs
   (extend-protocol ToString
     cljs.core.Keyword
     (to-str [x]
       (name x))
     goog.Uri
     (to-str [x]
       (if (or (. x (hasDomain))
               (nil? (. x (getPath)))
               (not (re-matches #"^/.*" (. x (getPath)))))
         (str x)
         (let [base (str *base-url*)]
           (if (re-matches #".*/$" base)
             (str (subs base 0 (dec (count base))) x)
             (str base x)))))
     nil
     (to-str [_]
       "")
     number
     (to-str [x]
       (str x))
     default
     (to-str [x]
       (str x))))

#?(:cljs
   (extend-protocol ToURI
     Uri
     (to-uri [x] x)
     default
     (to-uri [x] (Uri. (str x)))))
