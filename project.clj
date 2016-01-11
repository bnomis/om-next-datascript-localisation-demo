(defproject om-next-datascript-localisation-demo "0.1.0-SNAPSHOT"
  :description "Demo of Om Next and DataScript Localisation"
  :url "https://github.com/bnomis/om-next-datascript-localisation-demo"
  :license {:name "MIT"
            :url "http://opensource.org/licenses/MIT"}

  :dependencies [ [org.clojure/clojure "1.7.0"]
                  [org.clojure/clojurescript "1.7.228"]
                  [org.clojure/core.async "0.2.374"]
                  [org.omcljs/om "1.0.0-alpha28"]
                  [datascript "0.13.3"]
                  [sablono "0.5.3"]
                  [cljsjs/react "0.14.3-0"]
                  [cljsjs/react-dom "0.14.3-1"]
                  [cljsjs/react-dom-server "0.14.3-0"]]

  :plugins [[lein-cljsbuild "1.1.2"]
            [lein-figwheel "0.5.0-2"]
            [lein-doo "0.1.6"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/compiled" "target"]

  :figwheel {:css-dirs ["resources/public/css"]}

  :cljsbuild {:builds
              [ {:id "dev"
                  :source-paths ["src"]
                  :compiler {:main om-next-datascript-localisation-demo.core}
                            :output-to  "resources/public/compiled/dev/om_next_datascript_localisation_demo.js"
                            :output-dir "resources/public/compiled/dev"
                            :asset-path "compiled/dev"
                            :source-map-timestamp true
                            :verbose true
                            :parallel-build true
                  :figwheel {:on-jsload "om-next-datascript-localisation-demo.core/on-js-reload"}}

                {:id "min"
                  :source-paths ["src"]
                  :compiler { :main om-next-datascript-localisation-demo.core
                              :output-to  "resources/public/compiled/min/om_next_datascript_localisation_demo.js"
                              :output-dir "resources/public/compiled/min"
                              :asset-path "compiled/min"
                              :optimizations :advanced
                              :pretty-print false
                              :parallel-build true}}
                {:id "test"
                  :source-paths ["src" "test"]
                  :compiler { :output-to  "resources/public/compiled/test/testable.js"
                              :output-dir "resources/public/compiled/test"
                              :main om-next-datascript-localisation-demo.runner
                              :optimizations :none
                              :parallel-build true
                              :target :nodejs}}]})
