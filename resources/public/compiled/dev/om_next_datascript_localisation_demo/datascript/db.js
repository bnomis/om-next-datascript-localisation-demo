// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_datascript_localisation_demo.datascript.db');
goog.require('cljs.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('om.next.impl.parser');
goog.require('datascript.core');
goog.require('om_next_datascript_localisation_demo.datascript.schema');
goog.require('clojure.set');
goog.require('om.next');
goog.require('clojure.string');
goog.require('om_next_datascript_localisation_demo.datascript.initial');
om_next_datascript_localisation_demo.datascript.db.init_db = (function om_next_datascript_localisation_demo$datascript$db$init_db(){
var conn = datascript.core.create_conn.call(null,om_next_datascript_localisation_demo.datascript.schema.schema);
datascript.core.transact_BANG_.call(null,conn,om_next_datascript_localisation_demo.datascript.initial.initial_data);

return conn;
});
om_next_datascript_localisation_demo.datascript.db.the_db = om_next_datascript_localisation_demo.datascript.db.init_db.call(null);
om_next_datascript_localisation_demo.datascript.db.db_pull = (function om_next_datascript_localisation_demo$datascript$db$db_pull(var_args){
var args10920 = [];
var len__7200__auto___10923 = arguments.length;
var i__7201__auto___10924 = (0);
while(true){
if((i__7201__auto___10924 < len__7200__auto___10923)){
args10920.push((arguments[i__7201__auto___10924]));

var G__10925 = (i__7201__auto___10924 + (1));
i__7201__auto___10924 = G__10925;
continue;
} else {
}
break;
}

var G__10922 = args10920.length;
switch (G__10922) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10920.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$2 = (function (db,eid){
return om_next_datascript_localisation_demo.datascript.db.db_pull.call(null,db,eid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
});

om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3 = (function (db,eid,query){
if(cljs.core.truth_(eid)){
var query__$1 = (function (){var or__6142__auto__ = query;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
}
})();
return datascript.core.pull.call(null,cljs.core.deref.call(null,db),query__$1,eid);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});

om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$lang$maxFixedArity = 3;
om_next_datascript_localisation_demo.datascript.db.db_pull_many = (function om_next_datascript_localisation_demo$datascript$db$db_pull_many(var_args){
var args10927 = [];
var len__7200__auto___10930 = arguments.length;
var i__7201__auto___10931 = (0);
while(true){
if((i__7201__auto___10931 < len__7200__auto___10930)){
args10927.push((arguments[i__7201__auto___10931]));

var G__10932 = (i__7201__auto___10931 + (1));
i__7201__auto___10931 = G__10932;
continue;
} else {
}
break;
}

var G__10929 = args10927.length;
switch (G__10929) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10927.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$core$IFn$_invoke$arity$2 = (function (db,eids){
return om_next_datascript_localisation_demo.datascript.db.db_pull.call(null,db,eids,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
});

om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$core$IFn$_invoke$arity$3 = (function (db,eids,query){
if(cljs.core.truth_(cljs.core.not_empty.call(null,eids))){
var query__$1 = (function (){var or__6142__auto__ = query;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
}
})();
return datascript.core.pull_many.call(null,cljs.core.deref.call(null,db),query__$1,eids);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});

om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$lang$maxFixedArity = 3;
om_next_datascript_localisation_demo.datascript.db.find_ids = (function om_next_datascript_localisation_demo$datascript$db$find_ids(db,key){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?key","?key",1400522271,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?key","?key",1400522271,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),cljs.core.deref.call(null,db),key);
});
om_next_datascript_localisation_demo.datascript.db.read_default = (function om_next_datascript_localisation_demo$datascript$db$read_default(var_args){
var args10934 = [];
var len__7200__auto___10937 = arguments.length;
var i__7201__auto___10938 = (0);
while(true){
if((i__7201__auto___10938 < len__7200__auto___10937)){
args10934.push((arguments[i__7201__auto___10938]));

var G__10939 = (i__7201__auto___10938 + (1));
i__7201__auto___10938 = G__10939;
continue;
} else {
}
break;
}

var G__10936 = args10934.length;
switch (G__10936) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.read_default.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.read_default.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10934.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.read_default.cljs$core$IFn$_invoke$arity$2 = (function (db,key){
return om_next_datascript_localisation_demo.datascript.db.read_default.call(null,db,key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
});

om_next_datascript_localisation_demo.datascript.db.read_default.cljs$core$IFn$_invoke$arity$3 = (function (db,key,query){
var ids = om_next_datascript_localisation_demo.datascript.db.find_ids.call(null,db,key);
var query__$1 = (function (){var or__6142__auto__ = query;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
}
})();
return om_next_datascript_localisation_demo.datascript.db.db_pull_many.call(null,db,ids,query__$1);
});

om_next_datascript_localisation_demo.datascript.db.read_default.cljs$lang$maxFixedArity = 3;
om_next_datascript_localisation_demo.datascript.db.locale_ids = (function om_next_datascript_localisation_demo$datascript$db$locale_ids(db){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("locale","code","locale/code",-1620643092),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),cljs.core.deref.call(null,db));
});
om_next_datascript_localisation_demo.datascript.db.locale_refs = (function om_next_datascript_localisation_demo$datascript$db$locale_refs(db){
return cljs.core.mapv.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),om_next_datascript_localisation_demo.datascript.db.locale_ids.call(null,db));
});
om_next_datascript_localisation_demo.datascript.db.read_locales = (function om_next_datascript_localisation_demo$datascript$db$read_locales(var_args){
var args10941 = [];
var len__7200__auto___10944 = arguments.length;
var i__7201__auto___10945 = (0);
while(true){
if((i__7201__auto___10945 < len__7200__auto___10944)){
args10941.push((arguments[i__7201__auto___10945]));

var G__10946 = (i__7201__auto___10945 + (1));
i__7201__auto___10945 = G__10946;
continue;
} else {
}
break;
}

var G__10943 = args10941.length;
switch (G__10943) {
case 1:
return om_next_datascript_localisation_demo.datascript.db.read_locales.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_next_datascript_localisation_demo.datascript.db.read_locales.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10941.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.read_locales.cljs$core$IFn$_invoke$arity$1 = (function (db){
return om_next_datascript_localisation_demo.datascript.db.read_locales.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
});

om_next_datascript_localisation_demo.datascript.db.read_locales.cljs$core$IFn$_invoke$arity$2 = (function (db,query){
var ids = om_next_datascript_localisation_demo.datascript.db.locale_ids.call(null,db);
var query__$1 = (function (){var or__6142__auto__ = query;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
}
})();
return om_next_datascript_localisation_demo.datascript.db.db_pull_many.call(null,db,ids,query__$1);
});

om_next_datascript_localisation_demo.datascript.db.read_locales.cljs$lang$maxFixedArity = 2;
om_next_datascript_localisation_demo.datascript.db.read_locale = (function om_next_datascript_localisation_demo$datascript$db$read_locale(var_args){
var args10948 = [];
var len__7200__auto___10951 = arguments.length;
var i__7201__auto___10952 = (0);
while(true){
if((i__7201__auto___10952 < len__7200__auto___10951)){
args10948.push((arguments[i__7201__auto___10952]));

var G__10953 = (i__7201__auto___10952 + (1));
i__7201__auto___10952 = G__10953;
continue;
} else {
}
break;
}

var G__10950 = args10948.length;
switch (G__10950) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.read_locale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.read_locale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10948.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.read_locale.cljs$core$IFn$_invoke$arity$2 = (function (db,eid){
return om_next_datascript_localisation_demo.datascript.db.read_locale.call(null,db,eid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
});

om_next_datascript_localisation_demo.datascript.db.read_locale.cljs$core$IFn$_invoke$arity$3 = (function (db,eid,query){
var query__$1 = (function (){var or__6142__auto__ = query;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
}
})();
return om_next_datascript_localisation_demo.datascript.db.db_pull.call(null,db,eid,query__$1);
});

om_next_datascript_localisation_demo.datascript.db.read_locale.cljs$lang$maxFixedArity = 3;
om_next_datascript_localisation_demo.datascript.db.map__GT_id = (function om_next_datascript_localisation_demo$datascript$db$map__GT_id(value){
if(cljs.core.map_QMARK_.call(null,value)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
} else {
return value;
}
});
om_next_datascript_localisation_demo.datascript.db.id__GT_map = (function om_next_datascript_localisation_demo$datascript$db$id__GT_map(value){
if(cljs.core.map_QMARK_.call(null,value)){
return value;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),value], null);
}
});
om_next_datascript_localisation_demo.datascript.db.db_pull_old = (function om_next_datascript_localisation_demo$datascript$db$db_pull_old(db,query,id){
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"db","db",-1661185010,null)))].join('')));
}

if(cljs.core.truth_(query)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"query","query",352022017,null)))].join('')));
}

if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,query),"db-pull: query:"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,id),"db-pull: id:"))));
} else {
}

var val = datascript.core.pull.call(null,cljs.core.deref.call(null,db),query,id);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,val),"db-pull: val:"))));
} else {
}

return val;
});
om_next_datascript_localisation_demo.datascript.db.locales_for_id = (function om_next_datascript_localisation_demo$datascript$db$locales_for_id(db,id){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"localised","localised",-1733242051),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null),cljs.core.deref.call(null,db),id);
});
om_next_datascript_localisation_demo.datascript.db.default_value = (function om_next_datascript_localisation_demo$datascript$db$default_value(db,id){
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"db","db",-1661185010,null)))].join('')));
}

if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?value","?value",393627875,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"?value","?value",393627875,null)], null)], null),cljs.core.deref.call(null,db),id);
});
om_next_datascript_localisation_demo.datascript.db.id_for_locale = (function om_next_datascript_localisation_demo$datascript$db$id_for_locale(db,id,locale_id){
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"db","db",-1661185010,null)))].join('')));
}

if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

if(cljs.core.truth_(locale_id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"locale-id","locale-id",-484059367,null)))].join('')));
}

return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?locale","?locale",1446677775,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?locale-id","?locale-id",-1581223515,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"localised","localised",-1733242051),new cljs.core.Symbol(null,"?locale","?locale",1446677775,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?locale","?locale",1446677775,null),new cljs.core.Keyword("localised","locale","localised/locale",1513168907),new cljs.core.Symbol(null,"?locale-id","?locale-id",-1581223515,null)], null)], null),cljs.core.deref.call(null,db),id,locale_id);
});
om_next_datascript_localisation_demo.datascript.db.localise = (function om_next_datascript_localisation_demo$datascript$db$localise(db,id,locale_id){
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"db","db",-1661185010,null)))].join('')));
}

if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

var id__$1 = om_next_datascript_localisation_demo.datascript.db.map__GT_id.call(null,id);
var locale_id__$1 = om_next_datascript_localisation_demo.datascript.db.map__GT_id.call(null,locale_id);
var localised_val = (cljs.core.truth_(locale_id__$1)?datascript.core.q.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?value","?value",393627875,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?locale-id","?locale-id",-1581223515,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"localised","localised",-1733242051),new cljs.core.Symbol(null,"?locale","?locale",1446677775,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?locale","?locale",1446677775,null),new cljs.core.Keyword("localised","locale","localised/locale",1513168907),new cljs.core.Symbol(null,"?locale-id","?locale-id",-1581223515,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?locale","?locale",1446677775,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"?value","?value",393627875,null)], null)], null),cljs.core.deref.call(null,db),id__$1,locale_id__$1):null);
var or__6142__auto__ = localised_val;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return om_next_datascript_localisation_demo.datascript.db.default_value.call(null,db,id__$1);
}
});
om_next_datascript_localisation_demo.datascript.db.app_locale_id = (function om_next_datascript_localisation_demo$datascript$db$app_locale_id(db){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("app","locale","app/locale",-2115812582),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null),cljs.core.deref.call(null,db));
});
om_next_datascript_localisation_demo.datascript.db.app_locale_entity = (function om_next_datascript_localisation_demo$datascript$db$app_locale_entity(db){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("app","locale","app/locale",-2115812582)], null)], null),cljs.core.deref.call(null,db));
});
om_next_datascript_localisation_demo.datascript.db.app_locale = (function om_next_datascript_localisation_demo$datascript$db$app_locale(var_args){
var args10955 = [];
var len__7200__auto___10958 = arguments.length;
var i__7201__auto___10959 = (0);
while(true){
if((i__7201__auto___10959 < len__7200__auto___10958)){
args10955.push((arguments[i__7201__auto___10959]));

var G__10960 = (i__7201__auto___10959 + (1));
i__7201__auto___10959 = G__10960;
continue;
} else {
}
break;
}

var G__10957 = args10955.length;
switch (G__10957) {
case 1:
return om_next_datascript_localisation_demo.datascript.db.app_locale.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_next_datascript_localisation_demo.datascript.db.app_locale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10955.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.app_locale.cljs$core$IFn$_invoke$arity$1 = (function (db){
return om_next_datascript_localisation_demo.datascript.db.app_locale.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
});

om_next_datascript_localisation_demo.datascript.db.app_locale.cljs$core$IFn$_invoke$arity$2 = (function (db,query){
return om_next_datascript_localisation_demo.datascript.db.db_pull.call(null,db,om_next_datascript_localisation_demo.datascript.db.app_locale_id.call(null,db),query);
});

om_next_datascript_localisation_demo.datascript.db.app_locale.cljs$lang$maxFixedArity = 2;
om_next_datascript_localisation_demo.datascript.db.app_locale_code = (function om_next_datascript_localisation_demo$datascript$db$app_locale_code(db){
return new cljs.core.Keyword("locale","code","locale/code",-1620643092).cljs$core$IFn$_invoke$arity$1(datascript.core.pull.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("locale","code","locale/code",-1620643092)], null),om_next_datascript_localisation_demo.datascript.db.app_locale_id.call(null,db)));
});
om_next_datascript_localisation_demo.datascript.db.app_localise = (function om_next_datascript_localisation_demo$datascript$db$app_localise(db,id){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,id),"app-localise: id"))));
} else {
}

var aid = om_next_datascript_localisation_demo.datascript.db.app_locale_id.call(null,db);
return om_next_datascript_localisation_demo.datascript.db.localise.call(null,db,id,aid);
});
om_next_datascript_localisation_demo.datascript.db.string_id__GT_eid = (function om_next_datascript_localisation_demo$datascript$db$string_id__GT_eid(db,string_id){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?string-id","?string-id",909255344,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("string","ident","string/ident",-106951611),new cljs.core.Symbol(null,"?string-id","?string-id",909255344,null)], null)], null),cljs.core.deref.call(null,db),string_id);
});
om_next_datascript_localisation_demo.datascript.db.eid__GT_string_id = (function om_next_datascript_localisation_demo$datascript$db$eid__GT_string_id(db,eid){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?string-id","?string-id",909255344,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("string","ident","string/ident",-106951611),new cljs.core.Symbol(null,"?string-id","?string-id",909255344,null)], null)], null),cljs.core.deref.call(null,db),eid);
});
om_next_datascript_localisation_demo.datascript.db.localise_string_by_id = (function om_next_datascript_localisation_demo$datascript$db$localise_string_by_id(db,eid,locale_id){
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"db","db",-1661185010,null)))].join('')));
}

if(cljs.core.truth_(eid)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"eid","eid",-2094915839,null)))].join('')));
}

var s = om_next_datascript_localisation_demo.datascript.db.localise.call(null,db,eid,locale_id);
if((cljs.core.count.call(null,s) > (0))){
return s;
} else {
var s__$1 = om_next_datascript_localisation_demo.datascript.db.default_value.call(null,db,eid);
if((cljs.core.count.call(null,s__$1) > (0))){
return s__$1;
} else {
return null;
}
}
});
om_next_datascript_localisation_demo.datascript.db.localise_string = (function om_next_datascript_localisation_demo$datascript$db$localise_string(db,string_id,locale_id){
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"db","db",-1661185010,null)))].join('')));
}

if(cljs.core.truth_(string_id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"string-id","string-id",1920958955,null)))].join('')));
}

var temp__4423__auto__ = om_next_datascript_localisation_demo.datascript.db.string_id__GT_eid.call(null,db,string_id);
if(cljs.core.truth_(temp__4423__auto__)){
var eid = temp__4423__auto__;
var temp__4423__auto____$1 = om_next_datascript_localisation_demo.datascript.db.localise_string_by_id.call(null,db,eid,locale_id);
if(cljs.core.truth_(temp__4423__auto____$1)){
var s = temp__4423__auto____$1;
return s;
} else {
return [cljs.core.str(string_id)].join('');
}
} else {
return [cljs.core.str(string_id)].join('');
}
});
om_next_datascript_localisation_demo.datascript.db.app_localise_string = (function om_next_datascript_localisation_demo$datascript$db$app_localise_string(db,string_id){
if(cljs.core.truth_(string_id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"string-id","string-id",1920958955,null)))].join('')));
}

return om_next_datascript_localisation_demo.datascript.db.localise_string.call(null,db,string_id,om_next_datascript_localisation_demo.datascript.db.app_locale_id.call(null,db));
});
om_next_datascript_localisation_demo.datascript.db.localise_string_with_query = (function om_next_datascript_localisation_demo$datascript$db$localise_string_with_query(var_args){
var args10962 = [];
var len__7200__auto___10965 = arguments.length;
var i__7201__auto___10966 = (0);
while(true){
if((i__7201__auto___10966 < len__7200__auto___10965)){
args10962.push((arguments[i__7201__auto___10966]));

var G__10967 = (i__7201__auto___10966 + (1));
i__7201__auto___10966 = G__10967;
continue;
} else {
}
break;
}

var G__10964 = args10962.length;
switch (G__10964) {
case 3:
return om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10962.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$core$IFn$_invoke$arity$3 = (function (db,string_id,locale_id){
return om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.call(null,db,string_id,locale_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
});

om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$core$IFn$_invoke$arity$4 = (function (db,string_id,locale_id,query){
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"db","db",-1661185010,null)))].join('')));
}

if(cljs.core.truth_(string_id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"string-id","string-id",1920958955,null)))].join('')));
}

if(cljs.core.truth_(locale_id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"locale-id","locale-id",-484059367,null)))].join('')));
}

var s = om_next_datascript_localisation_demo.datascript.db.localise_string.call(null,db,string_id,locale_id);
var temp__4423__auto___10969 = om_next_datascript_localisation_demo.datascript.db.string_id__GT_eid.call(null,db,string_id);
if(cljs.core.truth_(temp__4423__auto___10969)){
var eid_10970 = temp__4423__auto___10969;
var result_10971 = om_next_datascript_localisation_demo.datascript.db.db_pull.call(null,db,eid_10970,query);
cljs.core.assoc.call(null,result_10971,new cljs.core.Keyword(null,"localised-value","localised-value",15124024),s);
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"localised-value","localised-value",15124024),s], null);
});

om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$lang$maxFixedArity = 4;
om_next_datascript_localisation_demo.datascript.db.make_edited_string_tx = (function om_next_datascript_localisation_demo$datascript$db$make_edited_string_tx(db,string_id,locale_id,text){
var temp__4423__auto__ = om_next_datascript_localisation_demo.datascript.db.string_id__GT_eid.call(null,db,string_id);
if(cljs.core.truth_(temp__4423__auto__)){
var eid = temp__4423__auto__;
var temp__4423__auto____$1 = om_next_datascript_localisation_demo.datascript.db.id_for_locale.call(null,db,eid,locale_id);
if(cljs.core.truth_(temp__4423__auto____$1)){
var lid = temp__4423__auto____$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),lid,new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("localised","locale","localised/locale",1513168907),locale_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword(null,"value","value",305978217),text], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword(null,"localised","localised",-1733242051),(-1)], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("localised","locale","localised/locale",1513168907),locale_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword(null,"value","value",305978217),text], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-2),new cljs.core.Keyword(null,"value","value",305978217),text], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-2),new cljs.core.Keyword("string","ident","string/ident",-106951611),string_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-2),new cljs.core.Keyword(null,"localised","localised",-1733242051),(-1)], null)], null);
}
});
om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id = (function om_next_datascript_localisation_demo$datascript$db$app_localise_string_by_id(var_args){
var args10972 = [];
var len__7200__auto___10975 = arguments.length;
var i__7201__auto___10976 = (0);
while(true){
if((i__7201__auto___10976 < len__7200__auto___10975)){
args10972.push((arguments[i__7201__auto___10976]));

var G__10977 = (i__7201__auto___10976 + (1));
i__7201__auto___10976 = G__10977;
continue;
} else {
}
break;
}

var G__10974 = args10972.length;
switch (G__10974) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10972.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id.cljs$core$IFn$_invoke$arity$2 = (function (db,eid){
return om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id.call(null,db,eid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
});

om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id.cljs$core$IFn$_invoke$arity$3 = (function (db,eid,query){
if(cljs.core.truth_(eid)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"eid","eid",-2094915839,null)))].join('')));
}

var s = om_next_datascript_localisation_demo.datascript.db.localise_string_by_id.call(null,db,eid,om_next_datascript_localisation_demo.datascript.db.app_locale_id.call(null,db));
var result = om_next_datascript_localisation_demo.datascript.db.db_pull.call(null,db,eid,query);
return cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"value","value",305978217),s);
});

om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id.cljs$lang$maxFixedArity = 3;
om_next_datascript_localisation_demo.datascript.db.localised_strings_ids = (function om_next_datascript_localisation_demo$datascript$db$localised_strings_ids(db){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("string","ident","string/ident",-106951611),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),cljs.core.deref.call(null,db));
});
om_next_datascript_localisation_demo.datascript.db.read_localised_strings = (function om_next_datascript_localisation_demo$datascript$db$read_localised_strings(var_args){
var args10979 = [];
var len__7200__auto___10982 = arguments.length;
var i__7201__auto___10983 = (0);
while(true){
if((i__7201__auto___10983 < len__7200__auto___10982)){
args10979.push((arguments[i__7201__auto___10983]));

var G__10984 = (i__7201__auto___10983 + (1));
i__7201__auto___10983 = G__10984;
continue;
} else {
}
break;
}

var G__10981 = args10979.length;
switch (G__10981) {
case 1:
return om_next_datascript_localisation_demo.datascript.db.read_localised_strings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_next_datascript_localisation_demo.datascript.db.read_localised_strings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10979.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.read_localised_strings.cljs$core$IFn$_invoke$arity$1 = (function (db){
return om_next_datascript_localisation_demo.datascript.db.read_localised_strings.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
});

om_next_datascript_localisation_demo.datascript.db.read_localised_strings.cljs$core$IFn$_invoke$arity$2 = (function (db,query){
var ids = om_next_datascript_localisation_demo.datascript.db.localised_strings_ids.call(null,db);
var query__$1 = (function (){var or__6142__auto__ = query;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
}
})();
return om_next_datascript_localisation_demo.datascript.db.db_pull_many.call(null,db,ids,query__$1);
});

om_next_datascript_localisation_demo.datascript.db.read_localised_strings.cljs$lang$maxFixedArity = 2;
om_next_datascript_localisation_demo.datascript.db.app_localise_map = (function om_next_datascript_localisation_demo$datascript$db$app_localise_map(db,p__10986){
var vec__10988 = p__10986;
var k = cljs.core.nth.call(null,vec__10988,(0),null);
var v = cljs.core.nth.call(null,vec__10988,(1),null);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k),"app-localise-map: k"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),"app-localise-map: v"))));
} else {
}

return cljs.core.PersistentArrayMap.fromArray([k,om_next_datascript_localisation_demo.datascript.db.app_localise.call(null,db,v)], true, false);
});
om_next_datascript_localisation_demo.datascript.db.find_linked_id = (function om_next_datascript_localisation_demo$datascript$db$find_linked_id(db,id,attrib){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?attrib","?attrib",-1870507954,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?attrib","?attrib",-1870507954,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null),cljs.core.deref.call(null,db),id,attrib);
});
om_next_datascript_localisation_demo.datascript.db.app_localise_query_to_ids = (function om_next_datascript_localisation_demo$datascript$db$app_localise_query_to_ids(db,id,query){
var k = cljs.core.first.call(null,query);
var query__$1 = cljs.core.rest.call(null,query);
var results = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not.call(null,k)){
return results;
} else {
var G__10989 = cljs.core.first.call(null,query__$1);
var G__10990 = cljs.core.rest.call(null,query__$1);
var G__10991 = cljs.core.assoc.call(null,results,k,om_next_datascript_localisation_demo.datascript.db.find_linked_id.call(null,db,id,k));
k = G__10989;
query__$1 = G__10990;
results = G__10991;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.app_localise_query_for_id = (function om_next_datascript_localisation_demo$datascript$db$app_localise_query_for_id(db,id,query){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,id),"app-localise-query-for-id: id"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,query),"app-localise-query-for-id: query"))));
} else {
}

var results = om_next_datascript_localisation_demo.datascript.db.app_localise_query_to_ids.call(null,db,id,query);
var keys = cljs.core.keys.call(null,results);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,results),"app-localise-query-for-id: results"))));
} else {
}

var k = cljs.core.first.call(null,keys);
var keys__$1 = cljs.core.rest.call(null,keys);
var out = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not.call(null,k)){
return out;
} else {
var G__10992 = cljs.core.first.call(null,keys__$1);
var G__10993 = cljs.core.rest.call(null,keys__$1);
var G__10994 = cljs.core.assoc.call(null,out,k,om_next_datascript_localisation_demo.datascript.db.app_localise.call(null,db,k.call(null,results)));
k = G__10992;
keys__$1 = G__10993;
out = G__10994;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.app_localise_attrib = (function om_next_datascript_localisation_demo$datascript$db$app_localise_attrib(db,attrib){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,attrib),"app-localise-attrib"))));
} else {
}

var eids = datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attrib","?attrib",-1870507954,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"?attrib","?attrib",-1870507954,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null),cljs.core.deref.call(null,db),attrib);
return cljs.core.mapv.call(null,((function (eids){
return (function (p1__10995_SHARP_){
return om_next_datascript_localisation_demo.datascript.db.app_localise.call(null,db,p1__10995_SHARP_);
});})(eids))
,eids);
});
om_next_datascript_localisation_demo.datascript.db.app_localise_query = (function om_next_datascript_localisation_demo$datascript$db$app_localise_query(db,query){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,query),"app-localise-query"))));
} else {
}

return cljs.core.mapv.call(null,(function (p1__10996_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__10996_SHARP_],[om_next_datascript_localisation_demo.datascript.db.app_localise_attrib.call(null,db,p1__10996_SHARP_)]);
}),query);
});
om_next_datascript_localisation_demo.datascript.db.locale_code = (function om_next_datascript_localisation_demo$datascript$db$locale_code(db,id){
return cljs.core.first.call(null,datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?code","?code",-1914511368,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("locale","code","locale/code",-1620643092),new cljs.core.Symbol(null,"?code","?code",-1914511368,null)], null)], null),cljs.core.deref.call(null,db),id));
});
om_next_datascript_localisation_demo.datascript.db.put_db_id_in_query = (function om_next_datascript_localisation_demo$datascript$db$put_db_id_in_query(query,id){
var ast = om.next.impl.parser.expr__GT_ast.call(null,query);
var ast__$1 = cljs.core.assoc_in.call(null,ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("db","id","db/id",-1388397098)], null),id);
var expr = om.next.impl.parser.ast__GT_expr.call(null,ast__$1);
return expr;
});
om_next_datascript_localisation_demo.datascript.db.add_db_id_param_to_query = (function om_next_datascript_localisation_demo$datascript$db$add_db_id_param_to_query(query,id){
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,query),"!!!add-db-id-param-to-query: query"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,id),"!!!add-db-id-param-to-query: id"))));
} else {
}

if(cljs.core.vector_QMARK_.call(null,query)){
if(cljs.core.seq.call(null,query)){
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,query)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),id], null)),query)], null);
} else {
return cljs.core.mapv.call(null,(function (p1__10997_SHARP_){
return om_next_datascript_localisation_demo$datascript$db$add_db_id_param_to_query.call(null,p1__10997_SHARP_,id);
}),query);
}
} else {
return null;
}
} else {
return om_next_datascript_localisation_demo.datascript.db.put_db_id_in_query.call(null,query,id);
}
});
om_next_datascript_localisation_demo.datascript.db.read_locale_locale = (function om_next_datascript_localisation_demo$datascript$db$read_locale_locale(db,id,query){
var q = cljs.core.first.call(null,query);
var query__$1 = cljs.core.rest.call(null,query);
var results = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not.call(null,q)){
return results;
} else {
var k = cljs.core.key.call(null,cljs.core.first.call(null,q));
var v = cljs.core.val.call(null,cljs.core.first.call(null,q));
var val = ((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"locale.locale","locale.locale",-898829411)))?om_next_datascript_localisation_demo.datascript.db.db_pull.call(null,db,id,v):null
);
var G__10998 = cljs.core.first.call(null,query__$1);
var G__10999 = cljs.core.rest.call(null,query__$1);
var G__11000 = cljs.core.assoc.call(null,results,k,val);
q = G__10998;
query__$1 = G__10999;
results = G__11000;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.read_locale_locales = (function om_next_datascript_localisation_demo$datascript$db$read_locale_locales(db,id,query){
var locale_locales = datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?locale-locale","?locale-locale",1892907900,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("locale","locales","locale/locales",-1392200451),new cljs.core.Symbol(null,"?locale-locale","?locale-locale",1892907900,null)], null)], null),cljs.core.deref.call(null,db),id);
var l = cljs.core.first.call(null,locale_locales);
var locale_locales__$1 = cljs.core.rest.call(null,locale_locales);
var results = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,l)){
return results;
} else {
var G__11001 = cljs.core.first.call(null,locale_locales__$1);
var G__11002 = cljs.core.rest.call(null,locale_locales__$1);
var G__11003 = cljs.core.conj.call(null,results,om_next_datascript_localisation_demo.datascript.db.read_locale_locale.call(null,db,l,query));
l = G__11001;
locale_locales__$1 = G__11002;
results = G__11003;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.read_locale_old = (function om_next_datascript_localisation_demo$datascript$db$read_locale_old(db,id,query){
var q = cljs.core.first.call(null,query);
var query__$1 = cljs.core.rest.call(null,query);
var results = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not.call(null,q)){
return results;
} else {
var k = cljs.core.key.call(null,cljs.core.first.call(null,q));
var v = cljs.core.val.call(null,cljs.core.first.call(null,q));
var val = ((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"locale","locale",-2115712697)))?om_next_datascript_localisation_demo.datascript.db.db_pull.call(null,db,id,v):((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"locale.locales","locale.locales",1396117577)))?om_next_datascript_localisation_demo.datascript.db.read_locale_locales.call(null,db,id,v):((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"editable.locale.locales","editable.locale.locales",2046316057)))?om_next_datascript_localisation_demo.datascript.db.read_locale_locales.call(null,db,id,v):null
)));
var G__11004 = cljs.core.first.call(null,query__$1);
var G__11005 = cljs.core.rest.call(null,query__$1);
var G__11006 = cljs.core.assoc.call(null,results,k,val);
q = G__11004;
query__$1 = G__11005;
results = G__11006;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.id_in_list = (function om_next_datascript_localisation_demo$datascript$db$id_in_list(list,id){
return cljs.core.some.call(null,(function (p1__11007_SHARP_){
return cljs.core._EQ_.call(null,id,p1__11007_SHARP_);
}),list);
});
om_next_datascript_localisation_demo.datascript.db.app_locale_tx_after_deleting_locales = (function om_next_datascript_localisation_demo$datascript$db$app_locale_tx_after_deleting_locales(db,ids){
var alid = om_next_datascript_localisation_demo.datascript.db.app_locale_id.call(null,db);
if(cljs.core.truth_(om_next_datascript_localisation_demo.datascript.db.id_in_list.call(null,ids,alid))){
var locale_ids = om_next_datascript_localisation_demo.datascript.db.locale_ids.call(null,db);
var diff = clojure.set.difference.call(null,cljs.core.set.call(null,locale_ids),cljs.core.set.call(null,ids));
var new_id = cljs.core.first.call(null,diff);
if(cljs.core.truth_(new_id)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),om_next_datascript_localisation_demo.datascript.db.app_locale_entity.call(null,db),new cljs.core.Keyword("app","locale","app/locale",-2115812582),new_id], null);
} else {
return null;
}
} else {
return null;
}
});
om_next_datascript_localisation_demo.datascript.db.locale_code_is_unique = (function om_next_datascript_localisation_demo$datascript$db$locale_code_is_unique(db,code){
var e = datascript.core.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?code","?code",-1914511368,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("locale","code","locale/code",-1620643092),new cljs.core.Symbol(null,"?code","?code",-1914511368,null)], null)], null),cljs.core.deref.call(null,db),code);
if(cljs.core.truth_(e)){
return false;
} else {
return true;
}
});
om_next_datascript_localisation_demo.datascript.db.localised_string_ident_is_unique = (function om_next_datascript_localisation_demo$datascript$db$localised_string_ident_is_unique(db,ident){
var e = datascript.core.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("locale","code","locale/code",-1620643092),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null)], null),cljs.core.deref.call(null,db),ident);
if(cljs.core.truth_(e)){
return false;
} else {
return true;
}
});
om_next_datascript_localisation_demo.datascript.db.random_string = (function om_next_datascript_localisation_demo$datascript$db$random_string(length){
var alpha = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], null);
var alpha_len = cljs.core.count.call(null,alpha);
var chars = cljs.core.PersistentVector.EMPTY;
var length__$1 = length;
while(true){
if(cljs.core._EQ_.call(null,(0),length__$1)){
return clojure.string.join.call(null,chars);
} else {
var G__11008 = cljs.core.conj.call(null,chars,cljs.core.get.call(null,alpha,cljs.core.rand_int.call(null,alpha_len)));
var G__11009 = (length__$1 - (1));
chars = G__11008;
length__$1 = G__11009;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.unique_locale_code = (function om_next_datascript_localisation_demo$datascript$db$unique_locale_code(db){
var code = om_next_datascript_localisation_demo.datascript.db.random_string.call(null,(2));
while(true){
if(cljs.core.truth_(om_next_datascript_localisation_demo.datascript.db.locale_code_is_unique.call(null,db,code))){
return code;
} else {
var G__11010 = om_next_datascript_localisation_demo.datascript.db.random_string.call(null,(2));
code = G__11010;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.unique_localised_string_ident = (function om_next_datascript_localisation_demo$datascript$db$unique_localised_string_ident(db){
var ident = cljs.core.keyword.call(null,om_next_datascript_localisation_demo.datascript.db.random_string.call(null,(6)));
while(true){
if(cljs.core.truth_(om_next_datascript_localisation_demo.datascript.db.localised_string_ident_is_unique.call(null,db,ident))){
return ident;
} else {
var G__11011 = cljs.core.keyword.call(null,om_next_datascript_localisation_demo.datascript.db.random_string.call(null,(6)));
ident = G__11011;
continue;
}
break;
}
});

//# sourceMappingURL=db.js.map?rel=1452424843437