(ns sablono.interpreter
  (:require [clojure.string :refer [blank? join]]
            [sablono.normalize :as normalize]
            [sablono.util :as util]
            #?(:cljs [goog.object :as gobject])
            #?(:cljs cljsjs.react)))

(defprotocol IInterpreter
  (interpret [this] "Interpret a Clojure data structure as a React fn call."))

;; Taken from om, to hack around form elements.
;; https://github.com/swannodette/om/blob/master/src/om/dom.cljs

#?(:cljs
   (defn wrap-form-element [ctor display-name]
     (js/React.createFactory
      (js/React.createClass
       #js
       {:getDisplayName
        (fn [] (name display-name))
        :getInitialState
        (fn []
          (this-as this
            #js {:value (aget (.-props this) "value")}))
        :onChange
        (fn [e]
          (this-as this
            (let [handler (aget (.-props this) "onChange")]
              (when-not (nil? handler)
                (handler e)
                (.setState this #js {:value (.. e -target -value)})))))
        :componentWillReceiveProps
        (fn [new-props]
          (this-as this
            (.setState this #js {:value (aget new-props "value")})))
        :render
        (fn []
          (this-as this
            ;; NOTE: if switch to macro we remove a closure allocation
            (let [props #js {}]
              (gobject/extend
                  props (.-props this)
                  #js {:value (aget (.-state this) "value")
                       :onChange (aget this "onChange")
                       :children (aget (.-props this) "children")})
              (ctor props))))}))))

#?(:cljs (def input (wrap-form-element js/React.DOM.input "input")))
#?(:cljs (def option (wrap-form-element js/React.DOM.option "option")))
#?(:cljs (def select (wrap-form-element js/React.DOM.select "select")))
#?(:cljs (def textarea (wrap-form-element js/React.DOM.textarea "textarea")))

#?(:cljs
   (defn create-element [type props & children]
     ((if (util/wrapped-type? type)
        (get {:input sablono.interpreter/input
              :option sablono.interpreter/option
              :select sablono.interpreter/select
              :textarea sablono.interpreter/textarea}
             (keyword type))
        (partial js/React.createElement (name type)))
      props
      (if (and (sequential? children)
               (= 1 (count children)))
        (first children) children))))

#?(:cljs
   (defn attributes [attrs]
     (let [attrs (clj->js (util/html-to-dom-attrs attrs))
           class (.-className attrs)
           class (if (array? class) (join " " (sort class)) class)]
       (if (blank? class)
         (js-delete attrs "className")
         (set! (.-className attrs) class))
       attrs)))

#?(:cljs
   (defn element
     "Render an element vector as a HTML element."
     [element]
     (let [[type attrs content] (normalize/element element)
           js-attrs (attributes attrs)]
       (cond
         (and (sequential? content)
              (= 1 (count content)))
         (create-element type js-attrs (interpret (first content)))
         content
         (create-element type js-attrs (interpret content))
         :else (create-element type js-attrs nil)))))

(defn- interpret-seq [s]
  (into-array (map interpret s)))

#?(:cljs
   (extend-protocol IInterpreter
     Cons
     (interpret [this]
       (interpret-seq this))
     ChunkedSeq
     (interpret [this]
       (interpret-seq this))
     LazySeq
     (interpret [this]
       (interpret-seq this))
     List
     (interpret [this]
       (interpret-seq this))
     IndexedSeq
     (interpret [this]
       (interpret-seq this))
     Subvec
     (interpret [this]
       (element this))
     PersistentVector
     (interpret [this]
       (if (util/element? this)
         (element this)
         (interpret (seq this))))
     default
     (interpret [this]
       this)
     nil
     (interpret [this]
       nil)))
