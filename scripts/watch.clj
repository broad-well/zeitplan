(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'zeitplan.core
   :output-to "out/zeitplan.js"
   :output-dir "out"})
