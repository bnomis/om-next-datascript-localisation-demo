(ns om-next-datascript-localisation-demo.datascript.initial)

(def initial-data
  ;; initial data for the database
  [
    ;; english locale
    {:db/id -100010
      :db/ident :locale/en
      :locale/code "en"
      :locale/ident :locale/en
      :value "English"}

    ;; chinese locale
    {:db/id -100020
      :db/ident :locale/cn
      :locale/code "cn"
      :locale/ident :locale/cn
      :value "Chinese"}

    ;; french locale
    {:db/id -100030
      :db/ident :locale/fr
      :locale/code "fr"
      :locale/ident :locale/fr
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
      :value "Om Next DataScript Localisation Demo"}

    {:db/id -202
      :localised/locale -100020
      :value "Om Next DataScript 本地语言演示版本"}

    {:db/id -203
      :localised/locale -100030
      :value "Om Next DataScript démo de localisation"}

    {:db/id -200
      :string/ident :app/title
      :value "Om Next DataScript Localisation Demo"
      :localised [-201 -202 -203]}

    ;; app description string
    {:db/id -211
      :localised/locale -100010
      :value "This is a demo of localisation using Om Next and DataScript."}

    {:db/id -212
      :localised/locale -100020
      :value "此为使用 Om Next and DataScript 制作的本地话演示版本。"}

    {:db/id -213
      :localised/locale -100030
      :value "C'est une démonstration de la localisation à l'aide d'Om Next and DataScript."}

    {:db/id -210
      :string/ident :app/desc
      :value "App Description"
      :localised [-211 -212 -213]}

    ;; current app locale current string
    {:db/id -221
      :localised/locale -100010
      :value "The current app locale is"}

    {:db/id -222
      :localised/locale -100020
      :value "现用本地设置为"}

    {:db/id -223
      :localised/locale -100030
      :value "Le paramètre régional courant de l'application est"}

    {:db/id -220
      :string/ident :app/current-locale
      :value "The current app locale is"
      :localised [-221 -222 -223]}

    ;; delete selected
    {:db/id -231
      :localised/locale -100010
      :value "Delete selected"}

    {:db/id -232
      :localised/locale -100020
      :value "删除所选"}

    {:db/id -233
      :localised/locale -100030
      :value "Supprimez la sélection"}

    {:db/id -230
      :string/ident :app/delete-selected
      :value "Delete selected"
      :localised [-231 -232 -233]}

    ;; select
    {:db/id -241
      :localised/locale -100010
      :value "Select"}

    {:db/id -242
      :localised/locale -100020
      :value "选择"}

    {:db/id -243
      :localised/locale -100030
      :value "Choisissez"}

    {:db/id -240
      :string/ident :app/select
      :value "Select"
      :localised [-241 -242 -243]}

    ;; ID
    {:db/id -251
      :localised/locale -100010
      :value "ID"}

    {:db/id -252
      :localised/locale -100020
      :value "用户名"}

    {:db/id -253
      :localised/locale -100030
      :value "ID"}

    {:db/id -250
      :string/ident :app/id
      :value "ID"
      :localised [-251 -252 -253]}

    ;; default
    {:db/id -261
      :localised/locale -100010
      :value "Default"}

    {:db/id -262
      :localised/locale -100020
      :value "默认"}

    {:db/id -263
      :localised/locale -100030
      :value "Défaut"}

    {:db/id -260
      :string/ident :app/default
      :value "Default"
      :localised [-261 -262 -263]}

    ;; code
    {:db/id -271
      :localised/locale -100010
      :value "Code"}

    {:db/id -272
      :localised/locale -100020
      :value "代码"}

    {:db/id -273
      :localised/locale -100030
      :value "Code"}

    {:db/id -270
      :string/ident :app/code
      :value "Code"
      :localised [-271 -272 -273]}

    ;; enum
    {:db/id -281
      :localised/locale -100010
      :value "Enum"}

    {:db/id -282
      :localised/locale -100020
      :value "枚举"}

    {:db/id -283
      :localised/locale -100030
      :value "Énuméré"}

    {:db/id -280
      :string/ident :app/enum
      :value "Enum"
      :localised [-281 -282 -283]}

    ;; information
    {:db/id -291
      :localised/locale -100010
      :value "Demo Information"}

    {:db/id -292
      :localised/locale -100020
      :value "演示版本信息"}

    {:db/id -293
      :localised/locale -100030
      :value "L'information de démo"}

    {:db/id -290
      :string/ident :app/information
      :value "Demo Information"
      :localised [-291 -292 -293]}

    ;; explain
    {:db/id -301
      :localised/locale -100010
      :value "Text in a dotted box <span class='editable-text'>like this</span> is editable. Click to edit. Click outside the box or hit Return/Escape to stop editing."}

    {:db/id -302
      :localised/locale -100020
      :value "虚线框内为可编辑文字：<span class='editable-text'>示例</span>。点击进行编辑。点击虚线框外任何区域或按回车／退出键退出编辑模式。"}

    {:db/id -303
      :localised/locale -100030
      :value "Texte dans une boîte en pointillés, <span class='editable-text'>comme cela</span> est modifiable. Cliquez pour modifier. Cliquez en dehors de la boîte ou appuyez sur Retour / Echap pour arrêter l'édition."}

    {:db/id -300
      :string/ident :app/explain
      :value "Text in a dotted box <span class='editable-text'>like this</span> is editable. Click to edit. Click outside the box or hit Return/Escape to stop editing."
      :localised [-301 -302 -303]}

    ;; editable localised strings
    {:db/id -311
      :localised/locale -100010
      :value "Editable localised strings."}

    {:db/id -312
      :localised/locale -100020
      :value "可编辑本地语言字段"}

    {:db/id -313
      :localised/locale -100030
      :value "Chaînes localisées modifiable."}

    {:db/id -310
      :string/ident :app/editable-localised-strings
      :value "Editable localised strings."
      :localised [-311 -312 -313]}

    ;; read only localised strings
    {:db/id -321
      :localised/locale -100010
      :value "The same localised strings as above but read only."}

    {:db/id -322
      :localised/locale -100020
      :value "上方本地语言字段的只读版本。"}

    {:db/id -323
      :localised/locale -100030
      :value "Les mêmes chaînes localisées comme ci-dessus, mais en lecture seule."}

    {:db/id -320
      :string/ident :app/read-only-localised-strings
      :value "The same localised strings as above but read only."
      :localised [-321 -322 -323]}

    ;; choose locale string
    {:db/id -501
      :localised/locale -100010
      :value "Choose a different locale"}

    {:db/id -502
      :localised/locale -100020
      :value "选择其它区域设置"}

    {:db/id -503
      :localised/locale -100030
      :value "Choisissez un autre paramètre régional"}

    {:db/id -500
      :string/ident :locale/choose
      :value "Choose a different locale"
      :localised [-501 -502 -503]}

    ;; locales
    {:db/id -511
      :localised/locale -100010
      :value "Locales"}

    {:db/id -512
      :localised/locale -100020
      :value "区域设置"}

    {:db/id -513
      :localised/locale -100030
      :value "Les paramètres régionaux"}

    {:db/id -510
      :string/ident :locale/locales
      :value "Locales"
      :localised [-511 -512 -513]}

    ;; localised strings
    {:db/id -521
      :localised/locale -100010
      :value "Localised Strings"}

    {:db/id -522
      :localised/locale -100020
      :value "本地语言字段"}

    {:db/id -523
      :localised/locale -100030
      :value "Les chaînes localisées"}

    {:db/id -520
      :string/ident :locale/localised-strings
      :value "Localised Strings"
      :localised [-521 -522 -523]}

    ;; Add a new locale
    {:db/id -531
      :localised/locale -100010
      :value "Add a new locale"}

    {:db/id -532
      :localised/locale -100020
      :value "添加新区域设置"}

    {:db/id -533
      :localised/locale -100030
      :value "Ajoutez un paramètre régional"}

    {:db/id -530
      :string/ident :locale/add-new
      :value "Add a new locale"
      :localised [-531 -532 -533]}

    ;; Add a new localised string
    {:db/id -541
      :localised/locale -100010
      :value "Add a new localised string"}

    {:db/id -542
      :localised/locale -100020
      :value "添加新本地语言字段"}

    {:db/id -543
      :localised/locale -100030
      :value "Ajoutez une chaîne localisée"}

    {:db/id -540
      :string/ident :locale/add-new-string
      :value "Add a new localised string"
      :localised [-541 -542 -543]}

    ;; localised
    {:db/id -551
      :localised/locale -100010
      :value "Localised"}

    {:db/id -552
      :localised/locale -100020
      :value "本地化"}

    {:db/id -553
      :localised/locale -100030
      :value "Localisée"}

    {:db/id -550
      :string/ident :locale/localised
      :value "Localised"
      :localised [-551 -552 -553]}


    ;; choose language string
    {:db/id -601
      :localised/locale -100010
      :value "Choose a different language"}

    {:db/id -602
      :localised/locale -100020
      :value "选择其它语言"}

    {:db/id -603
      :localised/locale -100030
      :value "Choisissez une langue différente"}

    {:db/id -600
      :string/ident :language/choose
      :value "Choose a different language"
      :localised [-601 -602 -603]}


    ;; dates

    ;; date format string
    {:db/id -701
      :localised/locale -100010
      :value "{day}, {date} {month} {year}"}

    {:db/id -702
      :localised/locale -100020
      :value "{year}年{month}月{date}日，{day}"}

    {:db/id -703
      :localised/locale -100030
      :value "{day}, {date} {month} {year}"}

    {:db/id -700
      :string/ident :date/format
      :value "{day}, {date} {month} {year}"
      :localised [-701 -702 -703]}

    ;; date today
    {:db/id -711
      :localised/locale -100010
      :value "Today's date is"}

    {:db/id -712
      :localised/locale -100020
      :value "今天的日期是"}

    {:db/id -713
      :localised/locale -100030
      :value "La date de aujourd'hui est"}

    {:db/id -710
      :string/ident :date/today
      :value "Today's date is"
      :localised [-711 -712 -713]}


    ;; days

    ;; Sunday
    {:db/id -1001
      :localised/locale -100010
      :value "Sunday"}
    {:db/id -1002
      :localised/locale -100020
      :value "周日"}
    {:db/id -1003
      :localised/locale -100030
      :value "Dimanche"}
    {:db/id -1000
      :string/ident :date/day-0
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
      :string/ident :date/day-1
      :date/day 1
      :value "Monday"
      :localised [-1011 -1012 -1013]}

    ;; Tuesday
    {:db/id -1021
      :localised/locale -100010
      :value "Tuesday"}
    {:db/id -1022
      :localised/locale -100020
      :value "周二"}
    {:db/id -1023
      :localised/locale -100030
      :value "Mardi"}
    {:db/id -1020
      :string/ident :date/day-2
      :date/day 2
      :value "Tuesday"
      :localised [-1021 -1022 -1023]}

    ;; Wednesday
    {:db/id -1031
      :localised/locale -100010
      :value "Wednesday"}
    {:db/id -1032
      :localised/locale -100020
      :value "周三"}
    {:db/id -1033
      :localised/locale -100030
      :value "Mercredi"}
    {:db/id -1030
      :string/ident :date/day-3
      :date/day 3
      :value "Wednesday"
      :localised [-1031 -1032 -1033]}

    ;; Thursday
    {:db/id -1041
      :localised/locale -100010
      :value "Thursday"}
    {:db/id -1042
      :localised/locale -100020
      :value "周四"}
    {:db/id -1043
      :localised/locale -100030
      :value "Jeudi"}
    {:db/id -1040
      :string/ident :date/day-4
      :date/day 4
      :value "Thursday"
      :localised [-1041 -1042 -1043]}

    ;; Friday
    {:db/id -1051
      :localised/locale -100010
      :value "Friday"}
    {:db/id -1052
      :localised/locale -100020
      :value "周五"}
    {:db/id -1053
      :localised/locale -100030
      :value "Vendredi"}
    {:db/id -1050
      :string/ident :date/day-5
      :date/day 5
      :value "Friday"
      :localised [-1051 -1052 -1053]}

    ;; Saturday
    {:db/id -1061
      :localised/locale -100010
      :value "Saturday"}
    {:db/id -1062
      :localised/locale -100020
      :value "周六"}
    {:db/id -1063
      :localised/locale -100030
      :value "Samedi"}
    {:db/id -1060
      :string/ident :date/day-6
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
      :string/ident :date/month-00
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
      :value "Février"}
    {:db/id -2010
      :string/ident :date/month-01
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
      :value "Mars"}
    {:db/id -2020
      :string/ident :date/month-02
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
      :value "Avril"}
    {:db/id -2030
      :string/ident :date/month-03
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
      :value "Mai"}
    {:db/id -2040
      :string/ident :date/month-04
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
      :value "Juin"}
    {:db/id -2050
      :string/ident :date/month-05
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
      :value "Juillet"}
    {:db/id -2060
      :string/ident :date/month-06
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
      :value "Août"}
    {:db/id -2070
      :string/ident :date/month-07
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
      :value "Septembre"}
    {:db/id -2080
      :string/ident :date/month-08
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
      :value "Octobre"}
    {:db/id -2090
      :string/ident :date/month-09
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
      :value "Novembre"}
    {:db/id -2100
      :string/ident :date/month-10
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
      :value "Décembre"}
    {:db/id -2110
      :string/ident :date/month-11
      :date/month 11
      :value "December"
      :localised [-2111 -2112 -2113]}])
