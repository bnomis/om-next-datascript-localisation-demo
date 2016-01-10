(ns om-next-datascript-localisation-demo.logging)

(def logging-is-on true)

(defmacro log [& args]
  `(when logging-is-on
    (js/console.log (apply str (interpose " " (list ~@args))))))

(defmacro log-env [env]
  `(when logging-is-on
    (log "- env contains:" (keys ~env))
    (doseq [k# [:path :pathopt :ref :ast :component :shared :target :query :query/root]]
      (if (contains? ~env k#)
        (log "- " (str k#) (k# ~env))))))

(defmacro log-params [env key params]
  `(when logging-is-on
    (log "- key" ~key)
    (log "- params" ~params)
    (log-env ~env)))

(defmacro log-read [env key params]
  `(when logging-is-on
    ;;(try (throw (js/Error. "read")) (catch js/Error e (log (.-stack e))))
    (log-params ~env ~key ~params)))

(defmacro log-mutate [env key params]
  `(when logging-is-on
    ;;(try (throw (js/Error. "mutate")) (catch js/Error e (log (.-stack e))))
    (log-params ~env ~key ~params)))
