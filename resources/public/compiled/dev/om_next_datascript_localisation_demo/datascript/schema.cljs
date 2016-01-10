(ns om-next-datascript-localisation-demo.datascript.schema)

(def schema
  ;; the database schema
  {
    ;;
    ;; db/idents
    ;; datascript does not have enums, so we use db/ident instead
    ;;
    :db/ident
    {:db/unique :db.unique/identity}

    ;; the value of a thing
    ;; used as a fallback when there is no value in the requested locale
    :value
    {:db/fulltext true
      :db/doc "The value of a thing"}

    ;;
    ;; locales
    ;;

    ;; locale code
    :locale/code
    {:db/fulltext true
      :db/unique :db.unique/identity
      :db/doc "Locale code"}

    ;; locale enum
    :locale/enum
    {:db/fulltext true
      :db/unique :db.unique/identity
      :db/doc "Locale enum"}

    ;;
    ;; Localised values
    ;;

    ;; locales
    :localised
    {:db/cardinality :db.cardinality/many
      :db/valueType :db.type/ref
      :db/isComponent true
      :db/doc "Locales"}

    ;; localised locale
    :localised/locale
    {:db/valueType :db.type/ref
      :db/doc "Localised locale"}

    ;;
    ;; strings
    ;;

    ;; string identifier
    :string/ident
    {:db/fulltext true
      :db/unique :db.unique/identity
      :db/doc "String identifier"}

    ;;
    ;; the app
    ;;

    ;; app locale
    :app/locale
    {:db/valueType :db.type/ref
      :db/doc "The app locale"}})
