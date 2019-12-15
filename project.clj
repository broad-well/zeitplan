(defproject zeitplan "0.1.0-SNAPSHOT"
  :description "Personal timetables for the methodical, Agile intellectual laborer"
  :url "https://zeitplan.broaderator.com"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.2"]]
  :npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets [:target-path "out" "release"]
  :target-path "target")
