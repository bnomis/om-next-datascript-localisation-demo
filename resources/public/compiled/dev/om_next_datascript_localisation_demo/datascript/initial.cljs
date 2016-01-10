(ns om-next-datascript-localisation-demo.datascript.initial)

(def initial-data
  ;; initial data for the database
  [
    ;; english locale
    {:db/id -100010
      :db/ident :locale/en
      :locale/code "en"
      :locale/enum :locale/en
      :value "English"}

    ;; chinese locale
    {:db/id -100020
      :db/ident :locale/cn
      :locale/code "cn"
      :locale/enum :locale/cn
      :value "Chinese"}

    ;; french locale
    {:db/id -100030
      :db/ident :locale/fr
      :locale/code "fr"
      :locale/enum :locale/fr
      :value "French"}

    ;; english localised
    {:db/id -100011
      :localised/locale -100010
      :value "English"}

    {:db/id -100012
      :localised/locale -100020
      :value "英文"}

    {:db/id -100013
      :localised/locale -100030
      :value "Anglais"}

    {:db/id -100010
      :localised [-100011 -100012 -100013]}

    ;; chinese localised
    {:db/id -100021
      :localised/locale -100010
      :value "Chinese"}

    {:db/id -100022
      :localised/locale -100020
      :value "中文"}

    {:db/id -100023
      :localised/locale -100030
      :value "Chinois"}

    {:db/id -100020
      :localised [-100021 -100022 -100023]}

    ;; french localised
    {:db/id -100031
      :localised/locale -100010
      :value "French"}

    {:db/id -100032
      :localised/locale -100020
      :value "法文"}

    {:db/id -100033
      :localised/locale -100030
      :value "Français"}

    {:db/id -100030
      :localised [-100031 -100032 -100033]}

    ;; set initial app locale to english
    {:app/locale -100010}

    ;; app title string
    {:db/id -201
      :localised/locale -100010
      :value "App Title (en)"}

    {:db/id -202
      :localised/locale -100020
      :value "App Title (cn)"}

    {:db/id -203
      :localised/locale -100030
      :value "App Title (fr)"}

    {:db/id -200
      :string/ident :app/title
      :value "App Title"
      :localised [-201 -202 -203]}

    ;; app description string
    {:db/id -301
      :localised/locale -100010
      :value "App description (en)"}

    {:db/id -302
      :localised/locale -100020
      :value "App description (cn)"}

    {:db/id -303
      :localised/locale -100030
      :value "App description (fr)"}

    {:db/id -300
      :string/ident :app/desc
      :value "App Description"
      :localised [-301 -302 -303]}

    ;; current app locale current string
    {:db/id -401
      :localised/locale -100010
      :value "The current app locale is"}

    {:db/id -402
      :localised/locale -100020
      :value "应用现用语言为"}

    {:db/id -403
      :localised/locale -100030
      :value "The current app locale is (fr)"}

    {:db/id -400
      :string/ident :app/current-locale
      :value "The current app locale is"
      :localised [-401 -402 -403]}

    ;; choose app locale string
    {:db/id -501
      :localised/locale -100010
      :value "Choose a different locale"}

    {:db/id -502
      :localised/locale -100020
      :value "选择其它语言"}

    {:db/id -503
      :localised/locale -100030
      :value "Choose a different locale (fr)"}

    {:db/id -500
      :string/ident :app/choose-locale
      :value "Choose a different locale"
      :localised [-501 -502 -503]}])
