(ns om-next-datascript-localisation-demo.components.editable-text
  (:require
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [sablono.core :as html :refer-macros [html]]
    [om-next-datascript-localisation-demo.logging :refer-macros [log]]
    [clojure.string :as str]))

(def ESCAPE_KEY 27)
(def ENTER_KEY 13)

(defn blur [this cb e]
  (om/set-state! this {:editing false})
  (cb (str/trim (.. e -target -value))))

(defn change [this e]
  (om/update-state! this assoc :edit-text (.. e -target -value)))

(defn edit [this text e]
  (om/set-state! this {:editing true, :edit-text text}))

(defn key-down [this cb e]
  (condp == (.-keyCode e)
    ESCAPE_KEY
      (blur this cb e)
    ENTER_KEY
      (blur this cb e)
    nil))

(defui EditableText
  Object
  (initLocalState [this]
    {:editing false, :edit-text nil})

  (render [this]
    ;;(log "EditableText: render: props" (om/props this))
    (let [props (om/props this)
          text (:text props)
          editing (om/get-state this :editing)
          edit-text (om/get-state this :edit-text)
          {:keys [:callback :tag]} (om/get-computed this)
          tag (or tag :span)]
      (if-not editing
        (html
          [tag
            { :class "editable-text"
              :tab-index 1
              :on-click #(edit this text %)
              :on-focus #(edit this text %)}
            text])
        (html
          [tag
            {:class "editable-text"}
            [:input
              {:tab-index 1
                :ref (fn [i] (if i (.focus (dom/node i))))
                :on-blur #(blur this callback %)
                :on-change #(change this %)
                :on-key-down #(key-down this callback %)
                :value edit-text}]])))))

(def editable-text (om/factory EditableText))
