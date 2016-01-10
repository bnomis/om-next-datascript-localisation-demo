// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
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
var conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.datascript.schema.schema);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,om_next_datascript_localisation_demo.datascript.initial.initial_data);

return conn;
});
om_next_datascript_localisation_demo.datascript.db.the_db = om_next_datascript_localisation_demo.datascript.db.init_db();
om_next_datascript_localisation_demo.datascript.db.db_pull = (function om_next_datascript_localisation_demo$datascript$db$db_pull(var_args){
var args15904 = [];
var len__7200__auto___15910 = arguments.length;
var i__7201__auto___15911 = (0);
while(true){
if((i__7201__auto___15911 < len__7200__auto___15910)){
args15904.push((arguments[i__7201__auto___15911]));

var G__15912 = (i__7201__auto___15911 + (1));
i__7201__auto___15911 = G__15912;
continue;
} else {
}
break;
}

var G__15906 = args15904.length;
switch (G__15906) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15904.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$2 = (function (db,eid){
return om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3(db,eid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null));
});

om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3 = (function (db,eid,query){
if(cljs.core.truth_(eid)){
var query__$1 = (function (){var or__6142__auto__ = query;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
}
})();
var G__15907 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__15908 = query__$1;
var G__15909 = eid;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__15907,G__15908,G__15909) : datascript.core.pull.call(null,G__15907,G__15908,G__15909));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});

om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$lang$maxFixedArity = 3;
om_next_datascript_localisation_demo.datascript.db.db_pull_many = (function om_next_datascript_localisation_demo$datascript$db$db_pull_many(var_args){
var args15914 = [];
var len__7200__auto___15920 = arguments.length;
var i__7201__auto___15921 = (0);
while(true){
if((i__7201__auto___15921 < len__7200__auto___15920)){
args15914.push((arguments[i__7201__auto___15921]));

var G__15922 = (i__7201__auto___15921 + (1));
i__7201__auto___15921 = G__15922;
continue;
} else {
}
break;
}

var G__15916 = args15914.length;
switch (G__15916) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15914.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$core$IFn$_invoke$arity$2 = (function (db,eids){
return om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3(db,eids,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null));
});

om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$core$IFn$_invoke$arity$3 = (function (db,eids,query){
if(cljs.core.truth_(cljs.core.not_empty(eids))){
var query__$1 = (function (){var or__6142__auto__ = query;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
}
})();
var G__15917 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__15918 = query__$1;
var G__15919 = eids;
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__15917,G__15918,G__15919) : datascript.core.pull_many.call(null,G__15917,G__15918,G__15919));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});

om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$lang$maxFixedArity = 3;
om_next_datascript_localisation_demo.datascript.db.find_ids = (function om_next_datascript_localisation_demo$datascript$db$find_ids(db,key){
var G__15927 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_key,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_QMARK_key,cljs.core.cst$sym$_], null)], null);
var G__15928 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__15929 = key;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__15927,G__15928,G__15929) : datascript.core.q.call(null,G__15927,G__15928,G__15929));
});
om_next_datascript_localisation_demo.datascript.db.read_default = (function om_next_datascript_localisation_demo$datascript$db$read_default(var_args){
var args15930 = [];
var len__7200__auto___15933 = arguments.length;
var i__7201__auto___15934 = (0);
while(true){
if((i__7201__auto___15934 < len__7200__auto___15933)){
args15930.push((arguments[i__7201__auto___15934]));

var G__15935 = (i__7201__auto___15934 + (1));
i__7201__auto___15934 = G__15935;
continue;
} else {
}
break;
}

var G__15932 = args15930.length;
switch (G__15932) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.read_default.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.read_default.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15930.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.read_default.cljs$core$IFn$_invoke$arity$2 = (function (db,key){
return om_next_datascript_localisation_demo.datascript.db.read_default.cljs$core$IFn$_invoke$arity$3(db,key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null));
});

om_next_datascript_localisation_demo.datascript.db.read_default.cljs$core$IFn$_invoke$arity$3 = (function (db,key,query){
var ids = om_next_datascript_localisation_demo.datascript.db.find_ids(db,key);
var query__$1 = (function (){var or__6142__auto__ = query;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
}
})();
return om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$core$IFn$_invoke$arity$3(db,ids,query__$1);
});

om_next_datascript_localisation_demo.datascript.db.read_default.cljs$lang$maxFixedArity = 3;
om_next_datascript_localisation_demo.datascript.db.locale_ids = (function om_next_datascript_localisation_demo$datascript$db$locale_ids(db){
var G__15939 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$locale_SLASH_code,cljs.core.cst$sym$_], null)], null);
var G__15940 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__15939,G__15940) : datascript.core.q.call(null,G__15939,G__15940));
});
om_next_datascript_localisation_demo.datascript.db.locale_refs = (function om_next_datascript_localisation_demo$datascript$db$locale_refs(db){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_id,om_next_datascript_localisation_demo.datascript.db.locale_ids(db));
});
om_next_datascript_localisation_demo.datascript.db.read_locales = (function om_next_datascript_localisation_demo$datascript$db$read_locales(var_args){
var args15941 = [];
var len__7200__auto___15944 = arguments.length;
var i__7201__auto___15945 = (0);
while(true){
if((i__7201__auto___15945 < len__7200__auto___15944)){
args15941.push((arguments[i__7201__auto___15945]));

var G__15946 = (i__7201__auto___15945 + (1));
i__7201__auto___15945 = G__15946;
continue;
} else {
}
break;
}

var G__15943 = args15941.length;
switch (G__15943) {
case 1:
return om_next_datascript_localisation_demo.datascript.db.read_locales.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_next_datascript_localisation_demo.datascript.db.read_locales.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15941.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.read_locales.cljs$core$IFn$_invoke$arity$1 = (function (db){
return om_next_datascript_localisation_demo.datascript.db.read_locales.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null));
});

om_next_datascript_localisation_demo.datascript.db.read_locales.cljs$core$IFn$_invoke$arity$2 = (function (db,query){
var ids = om_next_datascript_localisation_demo.datascript.db.locale_ids(db);
var query__$1 = (function (){var or__6142__auto__ = query;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
}
})();
return om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$core$IFn$_invoke$arity$3(db,ids,query__$1);
});

om_next_datascript_localisation_demo.datascript.db.read_locales.cljs$lang$maxFixedArity = 2;
om_next_datascript_localisation_demo.datascript.db.read_locale = (function om_next_datascript_localisation_demo$datascript$db$read_locale(var_args){
var args15948 = [];
var len__7200__auto___15951 = arguments.length;
var i__7201__auto___15952 = (0);
while(true){
if((i__7201__auto___15952 < len__7200__auto___15951)){
args15948.push((arguments[i__7201__auto___15952]));

var G__15953 = (i__7201__auto___15952 + (1));
i__7201__auto___15952 = G__15953;
continue;
} else {
}
break;
}

var G__15950 = args15948.length;
switch (G__15950) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.read_locale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.read_locale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15948.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.read_locale.cljs$core$IFn$_invoke$arity$2 = (function (db,eid){
return om_next_datascript_localisation_demo.datascript.db.read_locale.cljs$core$IFn$_invoke$arity$3(db,eid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null));
});

om_next_datascript_localisation_demo.datascript.db.read_locale.cljs$core$IFn$_invoke$arity$3 = (function (db,eid,query){
var query__$1 = (function (){var or__6142__auto__ = query;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
}
})();
return om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3(db,eid,query__$1);
});

om_next_datascript_localisation_demo.datascript.db.read_locale.cljs$lang$maxFixedArity = 3;
om_next_datascript_localisation_demo.datascript.db.map__GT_id = (function om_next_datascript_localisation_demo$datascript$db$map__GT_id(value){
if(cljs.core.map_QMARK_(value)){
return cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(value);
} else {
return value;
}
});
om_next_datascript_localisation_demo.datascript.db.id__GT_map = (function om_next_datascript_localisation_demo$datascript$db$id__GT_map(value){
if(cljs.core.map_QMARK_(value)){
return value;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,value], null);
}
});
om_next_datascript_localisation_demo.datascript.db.db_pull_old = (function om_next_datascript_localisation_demo$datascript$db$db_pull_old(db,query,id){
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$db], 0)))].join('')));
}

if(cljs.core.truth_(query)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$query], 0)))].join('')));
}

if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$id], 0)))].join('')));
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__15961_15967 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,query),"db-pull: query:")));
console.log(G__15961_15967);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__15962_15968 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,id),"db-pull: id:")));
console.log(G__15962_15968);
} else {
}

var val = (function (){var G__15963 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__15964 = query;
var G__15965 = id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__15963,G__15964,G__15965) : datascript.core.pull.call(null,G__15963,G__15964,G__15965));
})();
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__15966_15969 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,val),"db-pull: val:")));
console.log(G__15966_15969);
} else {
}

return val;
});
om_next_datascript_localisation_demo.datascript.db.locales_for_id = (function om_next_datascript_localisation_demo$datascript$db$locales_for_id(db,id){
var G__15973 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$localised,cljs.core.cst$sym$_QMARK_e], null)], null);
var G__15974 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__15975 = id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__15973,G__15974,G__15975) : datascript.core.q.call(null,G__15973,G__15974,G__15975));
});
om_next_datascript_localisation_demo.datascript.db.default_value = (function om_next_datascript_localisation_demo$datascript$db$default_value(db,id){
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$db], 0)))].join('')));
}

if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$id], 0)))].join('')));
}

var G__15979 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_value,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$value,cljs.core.cst$sym$_QMARK_value], null)], null);
var G__15980 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__15981 = id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__15979,G__15980,G__15981) : datascript.core.q.call(null,G__15979,G__15980,G__15981));
});
om_next_datascript_localisation_demo.datascript.db.id_for_locale = (function om_next_datascript_localisation_demo$datascript$db$id_for_locale(db,id,locale_id){
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$db], 0)))].join('')));
}

if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$id], 0)))].join('')));
}

if(cljs.core.truth_(locale_id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$locale_DASH_id], 0)))].join('')));
}

var G__15986 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_locale,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$sym$_QMARK_locale_DASH_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$localised,cljs.core.cst$sym$_QMARK_locale], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_locale,cljs.core.cst$kw$localised_SLASH_locale,cljs.core.cst$sym$_QMARK_locale_DASH_id], null)], null);
var G__15987 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__15988 = id;
var G__15989 = locale_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__15986,G__15987,G__15988,G__15989) : datascript.core.q.call(null,G__15986,G__15987,G__15988,G__15989));
});
om_next_datascript_localisation_demo.datascript.db.localise = (function om_next_datascript_localisation_demo$datascript$db$localise(db,id,locale_id){
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$db], 0)))].join('')));
}

if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$id], 0)))].join('')));
}

var id__$1 = om_next_datascript_localisation_demo.datascript.db.map__GT_id(id);
var locale_id__$1 = om_next_datascript_localisation_demo.datascript.db.map__GT_id(locale_id);
var localised_val = (cljs.core.truth_(locale_id__$1)?(function (){var G__15994 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_value,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$sym$_QMARK_locale_DASH_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$localised,cljs.core.cst$sym$_QMARK_locale], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_locale,cljs.core.cst$kw$localised_SLASH_locale,cljs.core.cst$sym$_QMARK_locale_DASH_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_locale,cljs.core.cst$kw$value,cljs.core.cst$sym$_QMARK_value], null)], null);
var G__15995 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__15996 = id__$1;
var G__15997 = locale_id__$1;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__15994,G__15995,G__15996,G__15997) : datascript.core.q.call(null,G__15994,G__15995,G__15996,G__15997));
})():null);
var or__6142__auto__ = localised_val;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return om_next_datascript_localisation_demo.datascript.db.default_value(db,id__$1);
}
});
om_next_datascript_localisation_demo.datascript.db.app_locale_id = (function om_next_datascript_localisation_demo$datascript$db$app_locale_id(db){
var G__16000 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$kw$app_SLASH_locale,cljs.core.cst$sym$_QMARK_e], null)], null);
var G__16001 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__16000,G__16001) : datascript.core.q.call(null,G__16000,G__16001));
});
om_next_datascript_localisation_demo.datascript.db.app_locale_entity = (function om_next_datascript_localisation_demo$datascript$db$app_locale_entity(db){
var G__16004 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$app_SLASH_locale], null)], null);
var G__16005 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__16004,G__16005) : datascript.core.q.call(null,G__16004,G__16005));
});
om_next_datascript_localisation_demo.datascript.db.app_locale = (function om_next_datascript_localisation_demo$datascript$db$app_locale(var_args){
var args16006 = [];
var len__7200__auto___16009 = arguments.length;
var i__7201__auto___16010 = (0);
while(true){
if((i__7201__auto___16010 < len__7200__auto___16009)){
args16006.push((arguments[i__7201__auto___16010]));

var G__16011 = (i__7201__auto___16010 + (1));
i__7201__auto___16010 = G__16011;
continue;
} else {
}
break;
}

var G__16008 = args16006.length;
switch (G__16008) {
case 1:
return om_next_datascript_localisation_demo.datascript.db.app_locale.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_next_datascript_localisation_demo.datascript.db.app_locale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16006.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.app_locale.cljs$core$IFn$_invoke$arity$1 = (function (db){
return om_next_datascript_localisation_demo.datascript.db.app_locale.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null));
});

om_next_datascript_localisation_demo.datascript.db.app_locale.cljs$core$IFn$_invoke$arity$2 = (function (db,query){
return om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3(db,om_next_datascript_localisation_demo.datascript.db.app_locale_id(db),query);
});

om_next_datascript_localisation_demo.datascript.db.app_locale.cljs$lang$maxFixedArity = 2;
om_next_datascript_localisation_demo.datascript.db.app_locale_code = (function om_next_datascript_localisation_demo$datascript$db$app_locale_code(db){
return cljs.core.cst$kw$locale_SLASH_code.cljs$core$IFn$_invoke$arity$1((function (){var G__16016 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__16017 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale_SLASH_code], null);
var G__16018 = om_next_datascript_localisation_demo.datascript.db.app_locale_id(db);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__16016,G__16017,G__16018) : datascript.core.pull.call(null,G__16016,G__16017,G__16018));
})());
});
om_next_datascript_localisation_demo.datascript.db.app_localise = (function om_next_datascript_localisation_demo$datascript$db$app_localise(db,id){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16020_16021 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,id),"app-localise: id")));
console.log(G__16020_16021);
} else {
}

var aid = om_next_datascript_localisation_demo.datascript.db.app_locale_id(db);
return om_next_datascript_localisation_demo.datascript.db.localise(db,id,aid);
});
om_next_datascript_localisation_demo.datascript.db.string_id__GT_eid = (function om_next_datascript_localisation_demo$datascript$db$string_id__GT_eid(db,string_id){
var G__16025 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_string_DASH_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$string_SLASH_ident,cljs.core.cst$sym$_QMARK_string_DASH_id], null)], null);
var G__16026 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__16027 = string_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__16025,G__16026,G__16027) : datascript.core.q.call(null,G__16025,G__16026,G__16027));
});
om_next_datascript_localisation_demo.datascript.db.eid__GT_string_id = (function om_next_datascript_localisation_demo$datascript$db$eid__GT_string_id(db,eid){
var G__16031 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_string_DASH_id,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_eid,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_eid,cljs.core.cst$kw$string_SLASH_ident,cljs.core.cst$sym$_QMARK_string_DASH_id], null)], null);
var G__16032 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__16033 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__16031,G__16032,G__16033) : datascript.core.q.call(null,G__16031,G__16032,G__16033));
});
om_next_datascript_localisation_demo.datascript.db.localise_string_by_id = (function om_next_datascript_localisation_demo$datascript$db$localise_string_by_id(db,eid,locale_id){
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$db], 0)))].join('')));
}

if(cljs.core.truth_(eid)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$eid], 0)))].join('')));
}

var s = om_next_datascript_localisation_demo.datascript.db.localise(db,eid,locale_id);
if((cljs.core.count(s) > (0))){
return s;
} else {
var s__$1 = om_next_datascript_localisation_demo.datascript.db.default_value(db,eid);
if((cljs.core.count(s__$1) > (0))){
return s__$1;
} else {
return null;
}
}
});
om_next_datascript_localisation_demo.datascript.db.localise_string = (function om_next_datascript_localisation_demo$datascript$db$localise_string(db,string_id,locale_id){
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$db], 0)))].join('')));
}

if(cljs.core.truth_(string_id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$string_DASH_id], 0)))].join('')));
}

var temp__4423__auto__ = om_next_datascript_localisation_demo.datascript.db.string_id__GT_eid(db,string_id);
if(cljs.core.truth_(temp__4423__auto__)){
var eid = temp__4423__auto__;
var temp__4423__auto____$1 = om_next_datascript_localisation_demo.datascript.db.localise_string_by_id(db,eid,locale_id);
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$string_DASH_id], 0)))].join('')));
}

return om_next_datascript_localisation_demo.datascript.db.localise_string(db,string_id,om_next_datascript_localisation_demo.datascript.db.app_locale_id(db));
});
om_next_datascript_localisation_demo.datascript.db.localise_string_with_query = (function om_next_datascript_localisation_demo$datascript$db$localise_string_with_query(var_args){
var args16034 = [];
var len__7200__auto___16037 = arguments.length;
var i__7201__auto___16038 = (0);
while(true){
if((i__7201__auto___16038 < len__7200__auto___16037)){
args16034.push((arguments[i__7201__auto___16038]));

var G__16039 = (i__7201__auto___16038 + (1));
i__7201__auto___16038 = G__16039;
continue;
} else {
}
break;
}

var G__16036 = args16034.length;
switch (G__16036) {
case 3:
return om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16034.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$core$IFn$_invoke$arity$3 = (function (db,string_id,locale_id){
return om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$core$IFn$_invoke$arity$4(db,string_id,locale_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null));
});

om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$core$IFn$_invoke$arity$4 = (function (db,string_id,locale_id,query){
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$db], 0)))].join('')));
}

if(cljs.core.truth_(string_id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$string_DASH_id], 0)))].join('')));
}

if(cljs.core.truth_(locale_id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$locale_DASH_id], 0)))].join('')));
}

var s = om_next_datascript_localisation_demo.datascript.db.localise_string(db,string_id,locale_id);
var temp__4423__auto___16041 = om_next_datascript_localisation_demo.datascript.db.string_id__GT_eid(db,string_id);
if(cljs.core.truth_(temp__4423__auto___16041)){
var eid_16042 = temp__4423__auto___16041;
var result_16043 = om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3(db,eid_16042,query);
cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result_16043,cljs.core.cst$kw$localised_DASH_value,s);
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,s], null);
});

om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$lang$maxFixedArity = 4;
om_next_datascript_localisation_demo.datascript.db.make_edited_string_tx = (function om_next_datascript_localisation_demo$datascript$db$make_edited_string_tx(db,string_id,locale_id,text){
var temp__4423__auto__ = om_next_datascript_localisation_demo.datascript.db.string_id__GT_eid(db,string_id);
if(cljs.core.truth_(temp__4423__auto__)){
var eid = temp__4423__auto__;
var temp__4423__auto____$1 = om_next_datascript_localisation_demo.datascript.db.id_for_locale(db,eid,locale_id);
if(cljs.core.truth_(temp__4423__auto____$1)){
var lid = temp__4423__auto____$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_id,lid,cljs.core.cst$kw$value,text], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,(-1),cljs.core.cst$kw$localised_SLASH_locale,locale_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,(-1),cljs.core.cst$kw$value,text], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,eid,cljs.core.cst$kw$localised,(-1)], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,(-1),cljs.core.cst$kw$localised_SLASH_locale,locale_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,(-1),cljs.core.cst$kw$value,text], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,(-2),cljs.core.cst$kw$value,text], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,(-2),cljs.core.cst$kw$string_SLASH_ident,string_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,(-2),cljs.core.cst$kw$localised,(-1)], null)], null);
}
});
om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id = (function om_next_datascript_localisation_demo$datascript$db$app_localise_string_by_id(var_args){
var args16044 = [];
var len__7200__auto___16047 = arguments.length;
var i__7201__auto___16048 = (0);
while(true){
if((i__7201__auto___16048 < len__7200__auto___16047)){
args16044.push((arguments[i__7201__auto___16048]));

var G__16049 = (i__7201__auto___16048 + (1));
i__7201__auto___16048 = G__16049;
continue;
} else {
}
break;
}

var G__16046 = args16044.length;
switch (G__16046) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16044.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id.cljs$core$IFn$_invoke$arity$2 = (function (db,eid){
return om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id.cljs$core$IFn$_invoke$arity$3(db,eid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null));
});

om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id.cljs$core$IFn$_invoke$arity$3 = (function (db,eid,query){
if(cljs.core.truth_(eid)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$eid], 0)))].join('')));
}

var s = om_next_datascript_localisation_demo.datascript.db.localise_string_by_id(db,eid,om_next_datascript_localisation_demo.datascript.db.app_locale_id(db));
var result = om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3(db,eid,query);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.cst$kw$value,s);
});

om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id.cljs$lang$maxFixedArity = 3;
om_next_datascript_localisation_demo.datascript.db.localised_strings_ids = (function om_next_datascript_localisation_demo$datascript$db$localised_strings_ids(db){
var G__16053 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$string_SLASH_ident,cljs.core.cst$sym$_], null)], null);
var G__16054 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__16053,G__16054) : datascript.core.q.call(null,G__16053,G__16054));
});
om_next_datascript_localisation_demo.datascript.db.read_localised_strings = (function om_next_datascript_localisation_demo$datascript$db$read_localised_strings(var_args){
var args16055 = [];
var len__7200__auto___16058 = arguments.length;
var i__7201__auto___16059 = (0);
while(true){
if((i__7201__auto___16059 < len__7200__auto___16058)){
args16055.push((arguments[i__7201__auto___16059]));

var G__16060 = (i__7201__auto___16059 + (1));
i__7201__auto___16059 = G__16060;
continue;
} else {
}
break;
}

var G__16057 = args16055.length;
switch (G__16057) {
case 1:
return om_next_datascript_localisation_demo.datascript.db.read_localised_strings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_next_datascript_localisation_demo.datascript.db.read_localised_strings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16055.length)].join('')));

}
});

om_next_datascript_localisation_demo.datascript.db.read_localised_strings.cljs$core$IFn$_invoke$arity$1 = (function (db){
return om_next_datascript_localisation_demo.datascript.db.read_localised_strings.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null));
});

om_next_datascript_localisation_demo.datascript.db.read_localised_strings.cljs$core$IFn$_invoke$arity$2 = (function (db,query){
var ids = om_next_datascript_localisation_demo.datascript.db.localised_strings_ids(db);
var query__$1 = (function (){var or__6142__auto__ = query;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
}
})();
return om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$core$IFn$_invoke$arity$3(db,ids,query__$1);
});

om_next_datascript_localisation_demo.datascript.db.read_localised_strings.cljs$lang$maxFixedArity = 2;
om_next_datascript_localisation_demo.datascript.db.app_localise_map = (function om_next_datascript_localisation_demo$datascript$db$app_localise_map(db,p__16062){
var vec__16066 = p__16062;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16066,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16066,(1),null);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16067_16069 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,k),"app-localise-map: k")));
console.log(G__16067_16069);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16068_16070 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,v),"app-localise-map: v")));
console.log(G__16068_16070);
} else {
}

return cljs.core.PersistentArrayMap.fromArray([k,om_next_datascript_localisation_demo.datascript.db.app_localise(db,v)], true, false);
});
om_next_datascript_localisation_demo.datascript.db.find_linked_id = (function om_next_datascript_localisation_demo$datascript$db$find_linked_id(db,id,attrib){
var G__16075 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$sym$_QMARK_attrib,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_id,cljs.core.cst$sym$_QMARK_attrib,cljs.core.cst$sym$_QMARK_e], null)], null);
var G__16076 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__16077 = id;
var G__16078 = attrib;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__16075,G__16076,G__16077,G__16078) : datascript.core.q.call(null,G__16075,G__16076,G__16077,G__16078));
});
om_next_datascript_localisation_demo.datascript.db.app_localise_query_to_ids = (function om_next_datascript_localisation_demo$datascript$db$app_localise_query_to_ids(db,id,query){
var k = cljs.core.first(query);
var query__$1 = cljs.core.rest(query);
var results = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not(k)){
return results;
} else {
var G__16079 = cljs.core.first(query__$1);
var G__16080 = cljs.core.rest(query__$1);
var G__16081 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(results,k,om_next_datascript_localisation_demo.datascript.db.find_linked_id(db,id,k));
k = G__16079;
query__$1 = G__16080;
results = G__16081;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.app_localise_query_for_id = (function om_next_datascript_localisation_demo$datascript$db$app_localise_query_for_id(db,id,query){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16085_16088 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,id),"app-localise-query-for-id: id")));
console.log(G__16085_16088);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16086_16089 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,query),"app-localise-query-for-id: query")));
console.log(G__16086_16089);
} else {
}

var results = om_next_datascript_localisation_demo.datascript.db.app_localise_query_to_ids(db,id,query);
var keys = cljs.core.keys(results);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16087_16090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,results),"app-localise-query-for-id: results")));
console.log(G__16087_16090);
} else {
}

var k = cljs.core.first(keys);
var keys__$1 = cljs.core.rest(keys);
var out = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not(k)){
return out;
} else {
var G__16091 = cljs.core.first(keys__$1);
var G__16092 = cljs.core.rest(keys__$1);
var G__16093 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,om_next_datascript_localisation_demo.datascript.db.app_localise(db,(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(results) : k.call(null,results))));
k = G__16091;
keys__$1 = G__16092;
out = G__16093;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.app_localise_attrib = (function om_next_datascript_localisation_demo$datascript$db$app_localise_attrib(db,attrib){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16099_16103 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,attrib),"app-localise-attrib")));
console.log(G__16099_16103);
} else {
}

var eids = (function (){var G__16100 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_attrib,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_QMARK_attrib,cljs.core.cst$sym$_QMARK_e], null)], null);
var G__16101 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__16102 = attrib;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__16100,G__16101,G__16102) : datascript.core.q.call(null,G__16100,G__16101,G__16102));
})();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (eids){
return (function (p1__16094_SHARP_){
return om_next_datascript_localisation_demo.datascript.db.app_localise(db,p1__16094_SHARP_);
});})(eids))
,eids);
});
om_next_datascript_localisation_demo.datascript.db.app_localise_query = (function om_next_datascript_localisation_demo$datascript$db$app_localise_query(db,query){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16106_16107 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,query),"app-localise-query")));
console.log(G__16106_16107);
} else {
}

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16104_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__16104_SHARP_],[om_next_datascript_localisation_demo.datascript.db.app_localise_attrib(db,p1__16104_SHARP_)]);
}),query);
});
om_next_datascript_localisation_demo.datascript.db.locale_code = (function om_next_datascript_localisation_demo$datascript$db$locale_code(db,id){
return cljs.core.first((function (){var G__16111 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_code,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$locale_SLASH_code,cljs.core.cst$sym$_QMARK_code], null)], null);
var G__16112 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__16113 = id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__16111,G__16112,G__16113) : datascript.core.q.call(null,G__16111,G__16112,G__16113));
})());
});
om_next_datascript_localisation_demo.datascript.db.put_db_id_in_query = (function om_next_datascript_localisation_demo$datascript$db$put_db_id_in_query(query,id){
var ast = om.next.impl.parser.expr__GT_ast(query);
var ast__$1 = cljs.core.assoc_in(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$db_SLASH_id], null),id);
var expr = om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1(ast__$1);
return expr;
});
om_next_datascript_localisation_demo.datascript.db.add_db_id_param_to_query = (function om_next_datascript_localisation_demo$datascript$db$add_db_id_param_to_query(query,id){
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$id], 0)))].join('')));
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16117_16119 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,query),"!!!add-db-id-param-to-query: query")));
console.log(G__16117_16119);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16118_16120 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,id),"!!!add-db-id-param-to-query: id")));
console.log(G__16118_16120);
} else {
}

if(cljs.core.vector_QMARK_(query)){
if(cljs.core.seq(query)){
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,query)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,id], null)),query)], null);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16114_SHARP_){
return om_next_datascript_localisation_demo$datascript$db$add_db_id_param_to_query(p1__16114_SHARP_,id);
}),query);
}
} else {
return null;
}
} else {
return om_next_datascript_localisation_demo.datascript.db.put_db_id_in_query(query,id);
}
});
om_next_datascript_localisation_demo.datascript.db.read_locale_locale = (function om_next_datascript_localisation_demo$datascript$db$read_locale_locale(db,id,query){
var q = cljs.core.first(query);
var query__$1 = cljs.core.rest(query);
var results = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not(q)){
return results;
} else {
var k = cljs.core.key(cljs.core.first(q));
var v = cljs.core.val(cljs.core.first(q));
var val = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$locale$locale))?om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3(db,id,v):null
);
var G__16121 = cljs.core.first(query__$1);
var G__16122 = cljs.core.rest(query__$1);
var G__16123 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(results,k,val);
q = G__16121;
query__$1 = G__16122;
results = G__16123;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.read_locale_locales = (function om_next_datascript_localisation_demo$datascript$db$read_locale_locales(db,id,query){
var locale_locales = (function (){var G__16127 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_locale_DASH_locale,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$locale_SLASH_locales,cljs.core.cst$sym$_QMARK_locale_DASH_locale], null)], null);
var G__16128 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__16129 = id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__16127,G__16128,G__16129) : datascript.core.q.call(null,G__16127,G__16128,G__16129));
})();
var l = cljs.core.first(locale_locales);
var locale_locales__$1 = cljs.core.rest(locale_locales);
var results = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(l)){
return results;
} else {
var G__16130 = cljs.core.first(locale_locales__$1);
var G__16131 = cljs.core.rest(locale_locales__$1);
var G__16132 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(results,om_next_datascript_localisation_demo.datascript.db.read_locale_locale(db,l,query));
l = G__16130;
locale_locales__$1 = G__16131;
results = G__16132;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.read_locale_old = (function om_next_datascript_localisation_demo$datascript$db$read_locale_old(db,id,query){
var q = cljs.core.first(query);
var query__$1 = cljs.core.rest(query);
var results = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not(q)){
return results;
} else {
var k = cljs.core.key(cljs.core.first(q));
var v = cljs.core.val(cljs.core.first(q));
var val = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$locale))?om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3(db,id,v):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$locale$locales))?om_next_datascript_localisation_demo.datascript.db.read_locale_locales(db,id,v):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$editable$locale$locales))?om_next_datascript_localisation_demo.datascript.db.read_locale_locales(db,id,v):null
)));
var G__16133 = cljs.core.first(query__$1);
var G__16134 = cljs.core.rest(query__$1);
var G__16135 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(results,k,val);
q = G__16133;
query__$1 = G__16134;
results = G__16135;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.id_in_list = (function om_next_datascript_localisation_demo$datascript$db$id_in_list(list,id){
return cljs.core.some((function (p1__16136_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__16136_SHARP_);
}),list);
});
om_next_datascript_localisation_demo.datascript.db.app_locale_tx_after_deleting_locales = (function om_next_datascript_localisation_demo$datascript$db$app_locale_tx_after_deleting_locales(db,ids){
var alid = om_next_datascript_localisation_demo.datascript.db.app_locale_id(db);
if(cljs.core.truth_(om_next_datascript_localisation_demo.datascript.db.id_in_list(ids,alid))){
var locale_ids = om_next_datascript_localisation_demo.datascript.db.locale_ids(db);
var diff = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(locale_ids),cljs.core.set(ids));
var new_id = cljs.core.first(diff);
if(cljs.core.truth_(new_id)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_id,om_next_datascript_localisation_demo.datascript.db.app_locale_entity(db),cljs.core.cst$kw$app_SLASH_locale,new_id], null);
} else {
return null;
}
} else {
return null;
}
});
om_next_datascript_localisation_demo.datascript.db.locale_code_is_unique = (function om_next_datascript_localisation_demo$datascript$db$locale_code_is_unique(db,code){
var e = (function (){var G__16140 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_code,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$locale_SLASH_code,cljs.core.cst$sym$_QMARK_code], null)], null);
var G__16141 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__16142 = code;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__16140,G__16141,G__16142) : datascript.core.q.call(null,G__16140,G__16141,G__16142));
})();
if(cljs.core.truth_(e)){
return false;
} else {
return true;
}
});
om_next_datascript_localisation_demo.datascript.db.localised_string_ident_is_unique = (function om_next_datascript_localisation_demo$datascript$db$localised_string_ident_is_unique(db,ident){
var e = (function (){var G__16146 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_ident,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$locale_SLASH_code,cljs.core.cst$sym$_QMARK_ident], null)], null);
var G__16147 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__16148 = ident;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__16146,G__16147,G__16148) : datascript.core.q.call(null,G__16146,G__16147,G__16148));
})();
if(cljs.core.truth_(e)){
return false;
} else {
return true;
}
});
om_next_datascript_localisation_demo.datascript.db.random_string = (function om_next_datascript_localisation_demo$datascript$db$random_string(length){
var alpha = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], null);
var alpha_len = cljs.core.count(alpha);
var chars = cljs.core.PersistentVector.EMPTY;
var length__$1 = length;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),length__$1)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(chars);
} else {
var G__16149 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(chars,cljs.core.get.cljs$core$IFn$_invoke$arity$2(alpha,cljs.core.rand_int(alpha_len)));
var G__16150 = (length__$1 - (1));
chars = G__16149;
length__$1 = G__16150;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.unique_locale_code = (function om_next_datascript_localisation_demo$datascript$db$unique_locale_code(db){
var code = om_next_datascript_localisation_demo.datascript.db.random_string((2));
while(true){
if(cljs.core.truth_(om_next_datascript_localisation_demo.datascript.db.locale_code_is_unique(db,code))){
return code;
} else {
var G__16151 = om_next_datascript_localisation_demo.datascript.db.random_string((2));
code = G__16151;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.unique_localised_string_ident = (function om_next_datascript_localisation_demo$datascript$db$unique_localised_string_ident(db){
var ident = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.datascript.db.random_string((6)));
while(true){
if(cljs.core.truth_(om_next_datascript_localisation_demo.datascript.db.localised_string_ident_is_unique(db,ident))){
return ident;
} else {
var G__16152 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.datascript.db.random_string((6)));
ident = G__16152;
continue;
}
break;
}
});
