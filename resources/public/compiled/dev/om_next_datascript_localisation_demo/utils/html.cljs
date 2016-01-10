(ns om-next-datascript-localisation-demo.utils.html)

(defn set-html-lang [code]
  (if code
    (.setAttribute (aget (.getElementsByTagName js/document "html") 0) "lang" code)
    (.removeAttribute (aget (.getElementsByTagName js/document "html") 0) "lang")))

(defn set-html-title [title]
  (aset (aget (.getElementsByTagName js/document "title") 0) "innerHTML" title))
