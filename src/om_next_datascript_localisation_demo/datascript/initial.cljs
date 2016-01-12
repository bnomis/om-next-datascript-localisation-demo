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
      :localised [-501 -502 -503]}

    ;; dates

    ;; date format string
    {:db/id -601
      :localised/locale -100010
      :value "{day}, {date} {month} {year}"}

    {:db/id -602
      :localised/locale -100020
      :value "{year}年{month}月{date}日，{day}"}

    {:db/id -603
      :localised/locale -100030
      :value "{day}, {date} {month} {year}"}

    {:db/id -600
      :string/ident :date/format
      :value "{day}, {date} {month} {year}"
      :localised [-601 -602 -603]}

    ;; date today
    {:db/id -701
      :localised/locale -100010
      :value "Today's date is"}

    {:db/id -702
      :localised/locale -100020
      :value "Today's date is (cn)"}

    {:db/id -703
      :localised/locale -100030
      :value "Today's date is (fr)"}

    {:db/id -700
      :string/ident :date/today
      :value "Today's date is"
      :localised [-701 -702 -703]}


    ;; days

    ;; Sunday
    {:db/id -1001
      :localised/locale -100010
      :value "Sunday"}
    {:db/id -1002
      :localised/locale -100020
      :value "周一"}
    {:db/id -1003
      :localised/locale -100030
      :value "Lundi"}
    {:db/id -1000
      :date/day 0
      :value "Sunday"
      :localised [-1001 -1002 -1003]}

    ;; Monday
    {:db/id -1011
      :localised/locale -100010
      :value "Monday"}
    {:db/id -1012
      :localised/locale -100020
      :value "周一"}
    {:db/id -1013
      :localised/locale -100030
      :value "Lundi"}
    {:db/id -1010
      :date/day 1
      :value "Monday"
      :localised [-1011 -1012 -1013]}

    ;; Tuesday
    {:db/id -1021
      :localised/locale -100010
      :value "Tuesday"}
    {:db/id -1022
      :localised/locale -100020
      :value "周一"}
    {:db/id -1023
      :localised/locale -100030
      :value "Lundi"}
    {:db/id -1020
      :date/day 2
      :value "Tuesday"
      :localised [-1021 -1022 -1023]}

    ;; Wednesday
    {:db/id -1031
      :localised/locale -100010
      :value "Wednesday"}
    {:db/id -1032
      :localised/locale -100020
      :value "周一"}
    {:db/id -1033
      :localised/locale -100030
      :value "Lundi"}
    {:db/id -1030
      :date/day 3
      :value "Wednesday"
      :localised [-1031 -1032 -1033]}

    ;; Thursday
    {:db/id -1041
      :localised/locale -100010
      :value "Thursday"}
    {:db/id -1042
      :localised/locale -100020
      :value "周一"}
    {:db/id -1043
      :localised/locale -100030
      :value "Lundi"}
    {:db/id -1040
      :date/day 4
      :value "Thursday"
      :localised [-1041 -1042 -1043]}

    ;; Friday
    {:db/id -1051
      :localised/locale -100010
      :value "Friday"}
    {:db/id -1052
      :localised/locale -100020
      :value "周一"}
    {:db/id -1053
      :localised/locale -100030
      :value "Lundi"}
    {:db/id -1050
      :date/day 5
      :value "Friday"
      :localised [-1051 -1052 -1053]}

    ;; Saturday
    {:db/id -1061
      :localised/locale -100010
      :value "Saturday"}
    {:db/id -1062
      :localised/locale -100020
      :value "周一"}
    {:db/id -1063
      :localised/locale -100030
      :value "Lundi"}
    {:db/id -1060
      :date/day 6
      :value "Saturday"
      :localised [-1061 -1062 -1063]}

    ;; months

    ;; January
    {:db/id -2001
      :localised/locale -100010
      :value "January"}
    {:db/id -2002
      :localised/locale -100020
      :value "1"}
    {:db/id -2003
      :localised/locale -100030
      :value "Janvier"}
    {:db/id -2000
      :date/month 0
      :value "January"
      :localised [-2001 -2002 -2003]}

    ;; February
    {:db/id -2011
      :localised/locale -100010
      :value "February"}
    {:db/id -2012
      :localised/locale -100020
      :value "2"}
    {:db/id -2013
      :localised/locale -100030
      :value "Janvier"}
    {:db/id -2010
      :date/month 1
      :value "February"
      :localised [-2011 -2012 -2013]}

    ;; March
    {:db/id -2021
      :localised/locale -100010
      :value "March"}
    {:db/id -2022
      :localised/locale -100020
      :value "3"}
    {:db/id -2023
      :localised/locale -100030
      :value "Janvier"}
    {:db/id -2020
      :date/month 2
      :value "March"
      :localised [-2021 -2022 -2023]}

    ;; April
    {:db/id -2031
      :localised/locale -100010
      :value "April"}
    {:db/id -2032
      :localised/locale -100020
      :value "4"}
    {:db/id -2033
      :localised/locale -100030
      :value "Janvier"}
    {:db/id -2030
      :date/month 3
      :value "April"
      :localised [-2031 -2032 -2033]}

    ;; May
    {:db/id -2041
      :localised/locale -100010
      :value "May"}
    {:db/id -2042
      :localised/locale -100020
      :value "5"}
    {:db/id -2043
      :localised/locale -100030
      :value "Janvier"}
    {:db/id -2040
      :date/month 4
      :value "May"
      :localised [-2041 -2042 -2043]}

    ;; June
    {:db/id -2051
      :localised/locale -100010
      :value "June"}
    {:db/id -2052
      :localised/locale -100020
      :value "6"}
    {:db/id -2053
      :localised/locale -100030
      :value "Janvier"}
    {:db/id -2050
      :date/month 5
      :value "June"
      :localised [-2051 -2052 -2053]}

    ;; July
    {:db/id -2061
      :localised/locale -100010
      :value "July"}
    {:db/id -2062
      :localised/locale -100020
      :value "7"}
    {:db/id -2063
      :localised/locale -100030
      :value "Janvier"}
    {:db/id -2060
      :date/month 6
      :value "July"
      :localised [-2061 -2062 -2063]}

    ;; August
    {:db/id -2071
      :localised/locale -100010
      :value "August"}
    {:db/id -2072
      :localised/locale -100020
      :value "8"}
    {:db/id -2073
      :localised/locale -100030
      :value "Janvier"}
    {:db/id -2070
      :date/month 7
      :value "August"
      :localised [-2071 -2072 -2073]}

    ;; September
    {:db/id -2081
      :localised/locale -100010
      :value "September"}
    {:db/id -2082
      :localised/locale -100020
      :value "9"}
    {:db/id -2083
      :localised/locale -100030
      :value "Janvier"}
    {:db/id -2080
      :date/month 8
      :value "September"
      :localised [-2081 -2082 -2083]}

    ;; October
    {:db/id -2091
      :localised/locale -100010
      :value "October"}
    {:db/id -2092
      :localised/locale -100020
      :value "10"}
    {:db/id -2093
      :localised/locale -100030
      :value "Janvier"}
    {:db/id -2090
      :date/month 9
      :value "October"
      :localised [-2091 -2092 -2093]}

    ;; November
    {:db/id -2101
      :localised/locale -100010
      :value "November"}
    {:db/id -2102
      :localised/locale -100020
      :value "11"}
    {:db/id -2103
      :localised/locale -100030
      :value "Janvier"}
    {:db/id -2100
      :date/month 10
      :value "November"
      :localised [-2101 -2102 -2103]}

    ;; December
    {:db/id -2111
      :localised/locale -100010
      :value "December"}
    {:db/id -2112
      :localised/locale -100020
      :value "12"}
    {:db/id -2113
      :localised/locale -100030
      :value "Janvier"}
    {:db/id -2110
      :date/month 11
      :value "December"
      :localised [-2111 -2112 -2113]}])
