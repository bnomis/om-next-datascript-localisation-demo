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
var args23760 = [];
var len__7200__auto___23766 = arguments.length;
var i__7201__auto___23767 = (0);
while(true){
if((i__7201__auto___23767 < len__7200__auto___23766)){
args23760.push((arguments[i__7201__auto___23767]));

var G__23768 = (i__7201__auto___23767 + (1));
i__7201__auto___23767 = G__23768;
continue;
} else {
}
break;
}

var G__23762 = args23760.length;
switch (G__23762) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23760.length)].join('')));

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
var G__23763 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23764 = query__$1;
var G__23765 = eid;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__23763,G__23764,G__23765) : datascript.core.pull.call(null,G__23763,G__23764,G__23765));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});

om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$lang$maxFixedArity = 3;
om_next_datascript_localisation_demo.datascript.db.db_pull_many = (function om_next_datascript_localisation_demo$datascript$db$db_pull_many(var_args){
var args23770 = [];
var len__7200__auto___23776 = arguments.length;
var i__7201__auto___23777 = (0);
while(true){
if((i__7201__auto___23777 < len__7200__auto___23776)){
args23770.push((arguments[i__7201__auto___23777]));

var G__23778 = (i__7201__auto___23777 + (1));
i__7201__auto___23777 = G__23778;
continue;
} else {
}
break;
}

var G__23772 = args23770.length;
switch (G__23772) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23770.length)].join('')));

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
var G__23773 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23774 = query__$1;
var G__23775 = eids;
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__23773,G__23774,G__23775) : datascript.core.pull_many.call(null,G__23773,G__23774,G__23775));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});

om_next_datascript_localisation_demo.datascript.db.db_pull_many.cljs$lang$maxFixedArity = 3;
om_next_datascript_localisation_demo.datascript.db.find_ids = (function om_next_datascript_localisation_demo$datascript$db$find_ids(db,key){
var G__23783 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_key,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_QMARK_key,cljs.core.cst$sym$_], null)], null);
var G__23784 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23785 = key;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__23783,G__23784,G__23785) : datascript.core.q.call(null,G__23783,G__23784,G__23785));
});
om_next_datascript_localisation_demo.datascript.db.read_default = (function om_next_datascript_localisation_demo$datascript$db$read_default(var_args){
var args23786 = [];
var len__7200__auto___23789 = arguments.length;
var i__7201__auto___23790 = (0);
while(true){
if((i__7201__auto___23790 < len__7200__auto___23789)){
args23786.push((arguments[i__7201__auto___23790]));

var G__23791 = (i__7201__auto___23790 + (1));
i__7201__auto___23790 = G__23791;
continue;
} else {
}
break;
}

var G__23788 = args23786.length;
switch (G__23788) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.read_default.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.read_default.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23786.length)].join('')));

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
var G__23795 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$locale_SLASH_code,cljs.core.cst$sym$_], null)], null);
var G__23796 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__23795,G__23796) : datascript.core.q.call(null,G__23795,G__23796));
});
om_next_datascript_localisation_demo.datascript.db.locale_refs = (function om_next_datascript_localisation_demo$datascript$db$locale_refs(db){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_id,om_next_datascript_localisation_demo.datascript.db.locale_ids(db));
});
om_next_datascript_localisation_demo.datascript.db.read_locales = (function om_next_datascript_localisation_demo$datascript$db$read_locales(var_args){
var args23797 = [];
var len__7200__auto___23800 = arguments.length;
var i__7201__auto___23801 = (0);
while(true){
if((i__7201__auto___23801 < len__7200__auto___23800)){
args23797.push((arguments[i__7201__auto___23801]));

var G__23802 = (i__7201__auto___23801 + (1));
i__7201__auto___23801 = G__23802;
continue;
} else {
}
break;
}

var G__23799 = args23797.length;
switch (G__23799) {
case 1:
return om_next_datascript_localisation_demo.datascript.db.read_locales.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_next_datascript_localisation_demo.datascript.db.read_locales.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23797.length)].join('')));

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
var args23804 = [];
var len__7200__auto___23807 = arguments.length;
var i__7201__auto___23808 = (0);
while(true){
if((i__7201__auto___23808 < len__7200__auto___23807)){
args23804.push((arguments[i__7201__auto___23808]));

var G__23809 = (i__7201__auto___23808 + (1));
i__7201__auto___23808 = G__23809;
continue;
} else {
}
break;
}

var G__23806 = args23804.length;
switch (G__23806) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.read_locale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.read_locale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23804.length)].join('')));

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
var G__23817_23823 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,query),"db-pull: query:")));
console.log(G__23817_23823);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__23818_23824 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,id),"db-pull: id:")));
console.log(G__23818_23824);
} else {
}

var val = (function (){var G__23819 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23820 = query;
var G__23821 = id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__23819,G__23820,G__23821) : datascript.core.pull.call(null,G__23819,G__23820,G__23821));
})();
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__23822_23825 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,val),"db-pull: val:")));
console.log(G__23822_23825);
} else {
}

return val;
});
om_next_datascript_localisation_demo.datascript.db.locales_for_id = (function om_next_datascript_localisation_demo$datascript$db$locales_for_id(db,id){
var G__23829 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$localised,cljs.core.cst$sym$_QMARK_e], null)], null);
var G__23830 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23831 = id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__23829,G__23830,G__23831) : datascript.core.q.call(null,G__23829,G__23830,G__23831));
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

var G__23835 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_value,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$value,cljs.core.cst$sym$_QMARK_value], null)], null);
var G__23836 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23837 = id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__23835,G__23836,G__23837) : datascript.core.q.call(null,G__23835,G__23836,G__23837));
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

var G__23842 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_locale,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$sym$_QMARK_locale_DASH_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$localised,cljs.core.cst$sym$_QMARK_locale], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_locale,cljs.core.cst$kw$localised_SLASH_locale,cljs.core.cst$sym$_QMARK_locale_DASH_id], null)], null);
var G__23843 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23844 = id;
var G__23845 = locale_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__23842,G__23843,G__23844,G__23845) : datascript.core.q.call(null,G__23842,G__23843,G__23844,G__23845));
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
var localised_val = (cljs.core.truth_(locale_id__$1)?(function (){var G__23850 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_value,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$sym$_QMARK_locale_DASH_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$localised,cljs.core.cst$sym$_QMARK_locale], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_locale,cljs.core.cst$kw$localised_SLASH_locale,cljs.core.cst$sym$_QMARK_locale_DASH_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_locale,cljs.core.cst$kw$value,cljs.core.cst$sym$_QMARK_value], null)], null);
var G__23851 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23852 = id__$1;
var G__23853 = locale_id__$1;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__23850,G__23851,G__23852,G__23853) : datascript.core.q.call(null,G__23850,G__23851,G__23852,G__23853));
})():null);
var or__6142__auto__ = localised_val;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return om_next_datascript_localisation_demo.datascript.db.default_value(db,id__$1);
}
});
om_next_datascript_localisation_demo.datascript.db.app_locale_id = (function om_next_datascript_localisation_demo$datascript$db$app_locale_id(db){
var G__23856 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$kw$app_SLASH_locale,cljs.core.cst$sym$_QMARK_e], null)], null);
var G__23857 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__23856,G__23857) : datascript.core.q.call(null,G__23856,G__23857));
});
om_next_datascript_localisation_demo.datascript.db.app_locale_entity = (function om_next_datascript_localisation_demo$datascript$db$app_locale_entity(db){
var G__23860 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$app_SLASH_locale], null)], null);
var G__23861 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__23860,G__23861) : datascript.core.q.call(null,G__23860,G__23861));
});
om_next_datascript_localisation_demo.datascript.db.app_locale = (function om_next_datascript_localisation_demo$datascript$db$app_locale(var_args){
var args23862 = [];
var len__7200__auto___23865 = arguments.length;
var i__7201__auto___23866 = (0);
while(true){
if((i__7201__auto___23866 < len__7200__auto___23865)){
args23862.push((arguments[i__7201__auto___23866]));

var G__23867 = (i__7201__auto___23866 + (1));
i__7201__auto___23866 = G__23867;
continue;
} else {
}
break;
}

var G__23864 = args23862.length;
switch (G__23864) {
case 1:
return om_next_datascript_localisation_demo.datascript.db.app_locale.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_next_datascript_localisation_demo.datascript.db.app_locale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23862.length)].join('')));

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
return cljs.core.cst$kw$locale_SLASH_code.cljs$core$IFn$_invoke$arity$1((function (){var G__23872 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale_SLASH_code], null);
var G__23874 = om_next_datascript_localisation_demo.datascript.db.app_locale_id(db);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__23872,G__23873,G__23874) : datascript.core.pull.call(null,G__23872,G__23873,G__23874));
})());
});
om_next_datascript_localisation_demo.datascript.db.app_localise = (function om_next_datascript_localisation_demo$datascript$db$app_localise(db,id){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__23876_23877 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,id),"app-localise: id")));
console.log(G__23876_23877);
} else {
}

var aid = om_next_datascript_localisation_demo.datascript.db.app_locale_id(db);
return om_next_datascript_localisation_demo.datascript.db.localise(db,id,aid);
});
om_next_datascript_localisation_demo.datascript.db.string_id__GT_eid = (function om_next_datascript_localisation_demo$datascript$db$string_id__GT_eid(db,string_id){
var G__23881 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_string_DASH_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$string_SLASH_ident,cljs.core.cst$sym$_QMARK_string_DASH_id], null)], null);
var G__23882 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23883 = string_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__23881,G__23882,G__23883) : datascript.core.q.call(null,G__23881,G__23882,G__23883));
});
om_next_datascript_localisation_demo.datascript.db.eid__GT_string_id = (function om_next_datascript_localisation_demo$datascript$db$eid__GT_string_id(db,eid){
var G__23887 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_string_DASH_id,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_eid,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_eid,cljs.core.cst$kw$string_SLASH_ident,cljs.core.cst$sym$_QMARK_string_DASH_id], null)], null);
var G__23888 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23889 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__23887,G__23888,G__23889) : datascript.core.q.call(null,G__23887,G__23888,G__23889));
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
var args23890 = [];
var len__7200__auto___23893 = arguments.length;
var i__7201__auto___23894 = (0);
while(true){
if((i__7201__auto___23894 < len__7200__auto___23893)){
args23890.push((arguments[i__7201__auto___23894]));

var G__23895 = (i__7201__auto___23894 + (1));
i__7201__auto___23894 = G__23895;
continue;
} else {
}
break;
}

var G__23892 = args23890.length;
switch (G__23892) {
case 3:
return om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23890.length)].join('')));

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
var temp__4423__auto___23897 = om_next_datascript_localisation_demo.datascript.db.string_id__GT_eid(db,string_id);
if(cljs.core.truth_(temp__4423__auto___23897)){
var eid_23898 = temp__4423__auto___23897;
var result_23899 = om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3(db,eid_23898,query);
cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result_23899,cljs.core.cst$kw$localised_DASH_value,s);
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
var args23900 = [];
var len__7200__auto___23903 = arguments.length;
var i__7201__auto___23904 = (0);
while(true){
if((i__7201__auto___23904 < len__7200__auto___23903)){
args23900.push((arguments[i__7201__auto___23904]));

var G__23905 = (i__7201__auto___23904 + (1));
i__7201__auto___23904 = G__23905;
continue;
} else {
}
break;
}

var G__23902 = args23900.length;
switch (G__23902) {
case 2:
return om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_next_datascript_localisation_demo.datascript.db.app_localise_string_by_id.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23900.length)].join('')));

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
var G__23909 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$string_SLASH_ident,cljs.core.cst$sym$_], null)], null);
var G__23910 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__23909,G__23910) : datascript.core.q.call(null,G__23909,G__23910));
});
om_next_datascript_localisation_demo.datascript.db.read_localised_strings = (function om_next_datascript_localisation_demo$datascript$db$read_localised_strings(var_args){
var args23911 = [];
var len__7200__auto___23914 = arguments.length;
var i__7201__auto___23915 = (0);
while(true){
if((i__7201__auto___23915 < len__7200__auto___23914)){
args23911.push((arguments[i__7201__auto___23915]));

var G__23916 = (i__7201__auto___23915 + (1));
i__7201__auto___23915 = G__23916;
continue;
} else {
}
break;
}

var G__23913 = args23911.length;
switch (G__23913) {
case 1:
return om_next_datascript_localisation_demo.datascript.db.read_localised_strings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_next_datascript_localisation_demo.datascript.db.read_localised_strings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23911.length)].join('')));

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
om_next_datascript_localisation_demo.datascript.db.app_localise_map = (function om_next_datascript_localisation_demo$datascript$db$app_localise_map(db,p__23918){
var vec__23922 = p__23918;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23922,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23922,(1),null);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__23923_23925 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,k),"app-localise-map: k")));
console.log(G__23923_23925);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__23924_23926 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,v),"app-localise-map: v")));
console.log(G__23924_23926);
} else {
}

return cljs.core.PersistentArrayMap.fromArray([k,om_next_datascript_localisation_demo.datascript.db.app_localise(db,v)], true, false);
});
om_next_datascript_localisation_demo.datascript.db.find_linked_id = (function om_next_datascript_localisation_demo$datascript$db$find_linked_id(db,id,attrib){
var G__23931 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$sym$_QMARK_attrib,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_id,cljs.core.cst$sym$_QMARK_attrib,cljs.core.cst$sym$_QMARK_e], null)], null);
var G__23932 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23933 = id;
var G__23934 = attrib;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__23931,G__23932,G__23933,G__23934) : datascript.core.q.call(null,G__23931,G__23932,G__23933,G__23934));
});
om_next_datascript_localisation_demo.datascript.db.app_localise_query_to_ids = (function om_next_datascript_localisation_demo$datascript$db$app_localise_query_to_ids(db,id,query){
var k = cljs.core.first(query);
var query__$1 = cljs.core.rest(query);
var results = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not(k)){
return results;
} else {
var G__23935 = cljs.core.first(query__$1);
var G__23936 = cljs.core.rest(query__$1);
var G__23937 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(results,k,om_next_datascript_localisation_demo.datascript.db.find_linked_id(db,id,k));
k = G__23935;
query__$1 = G__23936;
results = G__23937;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.app_localise_query_for_id = (function om_next_datascript_localisation_demo$datascript$db$app_localise_query_for_id(db,id,query){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__23941_23944 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,id),"app-localise-query-for-id: id")));
console.log(G__23941_23944);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__23942_23945 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,query),"app-localise-query-for-id: query")));
console.log(G__23942_23945);
} else {
}

var results = om_next_datascript_localisation_demo.datascript.db.app_localise_query_to_ids(db,id,query);
var keys = cljs.core.keys(results);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__23943_23946 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,results),"app-localise-query-for-id: results")));
console.log(G__23943_23946);
} else {
}

var k = cljs.core.first(keys);
var keys__$1 = cljs.core.rest(keys);
var out = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not(k)){
return out;
} else {
var G__23947 = cljs.core.first(keys__$1);
var G__23948 = cljs.core.rest(keys__$1);
var G__23949 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,k,om_next_datascript_localisation_demo.datascript.db.app_localise(db,(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(results) : k.call(null,results))));
k = G__23947;
keys__$1 = G__23948;
out = G__23949;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.app_localise_attrib = (function om_next_datascript_localisation_demo$datascript$db$app_localise_attrib(db,attrib){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__23955_23959 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,attrib),"app-localise-attrib")));
console.log(G__23955_23959);
} else {
}

var eids = (function (){var G__23956 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_attrib,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_QMARK_attrib,cljs.core.cst$sym$_QMARK_e], null)], null);
var G__23957 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23958 = attrib;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__23956,G__23957,G__23958) : datascript.core.q.call(null,G__23956,G__23957,G__23958));
})();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (eids){
return (function (p1__23950_SHARP_){
return om_next_datascript_localisation_demo.datascript.db.app_localise(db,p1__23950_SHARP_);
});})(eids))
,eids);
});
om_next_datascript_localisation_demo.datascript.db.app_localise_query = (function om_next_datascript_localisation_demo$datascript$db$app_localise_query(db,query){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__23962_23963 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,query),"app-localise-query")));
console.log(G__23962_23963);
} else {
}

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__23960_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__23960_SHARP_],[om_next_datascript_localisation_demo.datascript.db.app_localise_attrib(db,p1__23960_SHARP_)]);
}),query);
});
om_next_datascript_localisation_demo.datascript.db.locale_code = (function om_next_datascript_localisation_demo$datascript$db$locale_code(db,id){
return cljs.core.first((function (){var G__23967 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_code,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$locale_SLASH_code,cljs.core.cst$sym$_QMARK_code], null)], null);
var G__23968 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23969 = id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__23967,G__23968,G__23969) : datascript.core.q.call(null,G__23967,G__23968,G__23969));
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
var G__23973_23975 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,query),"!!!add-db-id-param-to-query: query")));
console.log(G__23973_23975);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__23974_23976 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,id),"!!!add-db-id-param-to-query: id")));
console.log(G__23974_23976);
} else {
}

if(cljs.core.vector_QMARK_(query)){
if(cljs.core.seq(query)){
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,query)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,id], null)),query)], null);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__23970_SHARP_){
return om_next_datascript_localisation_demo$datascript$db$add_db_id_param_to_query(p1__23970_SHARP_,id);
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
var G__23977 = cljs.core.first(query__$1);
var G__23978 = cljs.core.rest(query__$1);
var G__23979 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(results,k,val);
q = G__23977;
query__$1 = G__23978;
results = G__23979;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.read_locale_locales = (function om_next_datascript_localisation_demo$datascript$db$read_locale_locales(db,id,query){
var locale_locales = (function (){var G__23983 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_locale_DASH_locale,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$locale_SLASH_locales,cljs.core.cst$sym$_QMARK_locale_DASH_locale], null)], null);
var G__23984 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23985 = id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__23983,G__23984,G__23985) : datascript.core.q.call(null,G__23983,G__23984,G__23985));
})();
var l = cljs.core.first(locale_locales);
var locale_locales__$1 = cljs.core.rest(locale_locales);
var results = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(l)){
return results;
} else {
var G__23986 = cljs.core.first(locale_locales__$1);
var G__23987 = cljs.core.rest(locale_locales__$1);
var G__23988 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(results,om_next_datascript_localisation_demo.datascript.db.read_locale_locale(db,l,query));
l = G__23986;
locale_locales__$1 = G__23987;
results = G__23988;
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
var G__23989 = cljs.core.first(query__$1);
var G__23990 = cljs.core.rest(query__$1);
var G__23991 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(results,k,val);
q = G__23989;
query__$1 = G__23990;
results = G__23991;
continue;
}
break;
}
});
om_next_datascript_localisation_demo.datascript.db.id_in_list = (function om_next_datascript_localisation_demo$datascript$db$id_in_list(list,id){
return cljs.core.some((function (p1__23992_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__23992_SHARP_);
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
var e = (function (){var G__23996 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_code,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$locale_SLASH_code,cljs.core.cst$sym$_QMARK_code], null)], null);
var G__23997 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__23998 = code;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__23996,G__23997,G__23998) : datascript.core.q.call(null,G__23996,G__23997,G__23998));
})();
if(cljs.core.truth_(e)){
return false;
} else {
return true;
}
});
om_next_datascript_localisation_demo.datascript.db.localised_string_ident_is_unique = (function om_next_datascript_localisation_demo$datascript$db$localised_string_ident_is_unique(db,ident){
var e = (function (){var G__24002 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_ident,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$locale_SLASH_code,cljs.core.cst$sym$_QMARK_ident], null)], null);
var G__24003 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
var G__24004 = ident;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__24002,G__24003,G__24004) : datascript.core.q.call(null,G__24002,G__24003,G__24004));
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
var G__24005 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(chars,cljs.core.get.cljs$core$IFn$_invoke$arity$2(alpha,cljs.core.rand_int(alpha_len)));
var G__24006 = (length__$1 - (1));
chars = G__24005;
length__$1 = G__24006;
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
var G__24007 = om_next_datascript_localisation_demo.datascript.db.random_string((2));
code = G__24007;
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
var G__24008 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.datascript.db.random_string((6)));
ident = G__24008;
continue;
}
break;
}
});
