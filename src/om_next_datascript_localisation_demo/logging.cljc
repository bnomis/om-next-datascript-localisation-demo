(ns om-next-datascript-localisation-demo.logging)

;; change this def to true/false to turn logging on/off
;; when off, all logging is removed from code
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
    ;; throwing an exception is a handy way to get a stack trace
    ;;(try (throw (js/Error. "read")) (catch js/Error e (log (.-stack e))))
    (log-params ~env ~key ~params)))

(defmacro log-mutate [env key params]
  `(when logging-is-on
    ;; throwing an exception is a handy way to get a stack trace
    ;;(try (throw (js/Error. "mutate")) (catch js/Error e (log (.-stack e))))
    (log-params ~env ~key ~params)))
