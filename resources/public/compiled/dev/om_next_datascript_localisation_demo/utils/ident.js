// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_datascript_localisation_demo.utils.ident');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om_next_datascript_localisation_demo.utils.keywords');
om_next_datascript_localisation_demo.utils.ident.id_and_locale__GT_ident = (function om_next_datascript_localisation_demo$utils$ident$id_and_locale__GT_ident(id,locale_id){
return clojure.string.join.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,"=",locale_id], null));
});
om_next_datascript_localisation_demo.utils.ident.ident__GT_id_and_locale = (function om_next_datascript_localisation_demo$utils$ident$ident__GT_id_and_locale(ident){
var vec__7291 = clojure.string.split.call(null,ident,/=/);
var id = cljs.core.nth.call(null,vec__7291,(0),null);
var locale_id = cljs.core.nth.call(null,vec__7291,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(id | (0)),(locale_id | (0))], null);
});
om_next_datascript_localisation_demo.utils.ident.string_id_and_locale__GT_ident = (function om_next_datascript_localisation_demo$utils$ident$string_id_and_locale__GT_ident(string_id,locale_id){
return clojure.string.join.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(string_id)].join(''),"=",locale_id], null));
});
om_next_datascript_localisation_demo.utils.ident.ident__GT_string_id_and_locale = (function om_next_datascript_localisation_demo$utils$ident$ident__GT_string_id_and_locale(ident){
var vec__7293 = clojure.string.split.call(null,ident,/=/);
var string_id = cljs.core.nth.call(null,vec__7293,(0),null);
var locale_id = cljs.core.nth.call(null,vec__7293,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_next_datascript_localisation_demo.utils.keywords.keywordify.call(null,string_id),(locale_id | (0))], null);
});

//# sourceMappingURL=ident.js.map?rel=1452424834798