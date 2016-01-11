(ns om-next-datascript-localisation-demo.utils.interpolator
  (:require
    [clojure.string :as str]))

(defn interp [s m]
  (let [length (count s)]
    (if (and (> length 0) (not-empty m))
      (let [st (js/String. s)]
        (loop [ out []
                index 0]
          (if (>= index length)
            (str/join out)
            (let [open-brace (.indexOf st "{" index)]
              (if (< open-brace 0)
                (str/join (conj out (.substring st index)))
                (let [close-brace (.indexOf st "}" open-brace)]
                  (if (< close-brace 0)
                    (str/join (conj out (.substring st index)))
                    (let [key (keyword (.substring st (inc open-brace) close-brace))]
                      (if (contains? m key)
                        (recur (conj out (.substring st index open-brace) (get m key)) (inc close-brace))
                        (recur (conj out (.substring st index (inc close-brace))) (inc close-brace)))))))))))
      s)))
