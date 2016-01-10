// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_datascript_localisation_demo.utils.keywords');
goog.require('cljs.core');
goog.require('clojure.string');
om_next_datascript_localisation_demo.utils.keywords.remove_colons = (function om_next_datascript_localisation_demo$utils$keywords$remove_colons(w){
return clojure.string.replace.call(null,w,/:/,"");
});
om_next_datascript_localisation_demo.utils.keywords.keywordify = (function om_next_datascript_localisation_demo$utils$keywords$keywordify(kw){
var w = clojure.string.trim.call(null,kw);
if((w instanceof cljs.core.Keyword)){
return w;
} else {
return cljs.core.keyword.call(null,om_next_datascript_localisation_demo.utils.keywords.remove_colons.call(null,w));
}
});

//# sourceMappingURL=keywords.js.map?rel=1452428113298