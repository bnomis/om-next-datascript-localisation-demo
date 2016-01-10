// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.utils.checkboxes');
goog.require('cljs.core');
om_next_datascript_localisation_demo.utils.checkboxes.selected_checkbox_ids = (function om_next_datascript_localisation_demo$utils$checkboxes$selected_checkbox_ids(checkboxes){
var keys = cljs.core.keys(checkboxes);
var ids = cljs.core.PersistentVector.EMPTY;
var k = cljs.core.first(keys);
var keys__$1 = cljs.core.rest(keys);
while(true){
if(cljs.core.not(k)){
return ids;
} else {
var G__17691 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(checkboxes,k))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ids,k):ids);
var G__17692 = cljs.core.first(keys__$1);
var G__17693 = cljs.core.rest(keys__$1);
ids = G__17691;
k = G__17692;
keys__$1 = G__17693;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.utils.checkboxes.reset_checkboxes = (function om_next_datascript_localisation_demo$utils$checkboxes$reset_checkboxes(things){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,thing){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(thing,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null)),false);
}),cljs.core.PersistentArrayMap.EMPTY,things);
});
