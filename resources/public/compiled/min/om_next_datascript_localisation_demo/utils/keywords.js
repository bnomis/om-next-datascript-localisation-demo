// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.utils.keywords');
goog.require('cljs.core');
goog.require('clojure.string');
om_next_datascript_localisation_demo.utils.keywords.remove_colons = (function om_next_datascript_localisation_demo$utils$keywords$remove_colons(w){
return clojure.string.replace(w,/:/,"");
});
om_next_datascript_localisation_demo.utils.keywords.keywordify = (function om_next_datascript_localisation_demo$utils$keywords$keywordify(kw){
var w = clojure.string.trim(kw);
if((w instanceof cljs.core.Keyword)){
return w;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.utils.keywords.remove_colons(w));
}
});
