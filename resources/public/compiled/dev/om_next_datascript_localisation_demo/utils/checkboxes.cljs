(ns om-next-datascript-localisation-demo.utils.checkboxes)

(defn selected-checkbox-ids [checkboxes]
  (let [keys (keys checkboxes)]
    (loop [ ids []
            k (first keys)
            keys (rest keys)]
      (if-not k
        ids
        (recur (if (get checkboxes k)
                (conj ids k)
                ids)
          (first keys)
          (rest keys))))))

(defn reset-checkboxes [things]
  (reduce (fn [result thing]
            (assoc result (get-in thing [:db/id]) false))
    {} things))
