// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_datascript_localisation_demo.utils.checkboxes');
goog.require('cljs.core');
om_next_datascript_localisation_demo.utils.checkboxes.selected_checkbox_ids = (function om_next_datascript_localisation_demo$utils$checkboxes$selected_checkbox_ids(checkboxes){
var keys = cljs.core.keys.call(null,checkboxes);
var ids = cljs.core.PersistentVector.EMPTY;
var k = cljs.core.first.call(null,keys);
var keys__$1 = cljs.core.rest.call(null,keys);
while(true){
if(cljs.core.not.call(null,k)){
return ids;
} else {
var G__14636 = (cljs.core.truth_(cljs.core.get.call(null,checkboxes,k))?cljs.core.conj.call(null,ids,k):ids);
var G__14637 = cljs.core.first.call(null,keys__$1);
var G__14638 = cljs.core.rest.call(null,keys__$1);
ids = G__14636;
k = G__14637;
keys__$1 = G__14638;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.utils.checkboxes.reset_checkboxes = (function om_next_datascript_localisation_demo$utils$checkboxes$reset_checkboxes(things){
return cljs.core.reduce.call(null,(function (result,thing){
return cljs.core.assoc.call(null,result,cljs.core.get_in.call(null,thing,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null)),false);
}),cljs.core.PersistentArrayMap.EMPTY,things);
});

//# sourceMappingURL=checkboxes.js.map?rel=1452427075070