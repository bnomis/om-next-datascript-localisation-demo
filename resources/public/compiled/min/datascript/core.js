// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.query');
goog.require('datascript.btset');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.impl.entity');
datascript.core.q = datascript.query.q;
datascript.core.entity = datascript.impl.entity.entity;
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_(entity))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$de_SLASH_entity_QMARK_,cljs.core.cst$sym$entity)], 0)))].join('')));
}

return entity.db;
});
datascript.core.datom = datascript.db.datom;
datascript.core.pull = datascript.pull_api.pull;
datascript.core.pull_many = datascript.pull_api.pull_many;
datascript.core.touch = datascript.impl.entity.touch;
datascript.core.empty_db = datascript.db.empty_db;
datascript.core.init_db = datascript.db.init_db;
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
datascript.core.tx0 = datascript.db.tx0;
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

if(cljs.core.truth_(datascript.core.is_filtered(db))){
var fdb = db;
var u = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(u,((function (fdb,u){
return (function (p1__22224_SHARP_){
var and__6130__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(u,p1__22224_SHARP_) : pred.call(null,u,p1__22224_SHARP_));
if(cljs.core.truth_(and__6130__auto__)){
return fdb.pred.call(null,p1__22224_SHARP_);
} else {
return and__6130__auto__;
}
});})(fdb,u))
,null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__22225_SHARP_){
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(db,p1__22225_SHARP_) : pred.call(null,db,p1__22225_SHARP_));
}),null,null,null));
}
});
datascript.core.with$ = (function datascript$core$with(var_args){
var args22226 = [];
var len__7200__auto___22229 = arguments.length;
var i__7201__auto___22230 = (0);
while(true){
if((i__7201__auto___22230 < len__7200__auto___22229)){
args22226.push((arguments[i__7201__auto___22230]));

var G__22231 = (i__7201__auto___22230 + (1));
i__7201__auto___22230 = G__22231;
continue;
} else {
}
break;
}

var G__22228 = args22226.length;
switch (G__22228) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22226.length)].join('')));

}
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

if(cljs.core.truth_(datascript.core.is_filtered(db))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$transaction_SLASH_filtered], null));
} else {
return datascript.db.transact_tx_data(datascript.db.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$db_DASH_before,db,cljs.core.cst$kw$db_DASH_after,db,cljs.core.cst$kw$tx_DASH_data,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$tempids,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$tx_DASH_meta,tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;
datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

return cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(datascript.core.with$.cljs$core$IFn$_invoke$arity$2(db,tx_data));
});
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args22233 = [];
var len__7200__auto___22236 = arguments.length;
var i__7201__auto___22237 = (0);
while(true){
if((i__7201__auto___22237 < len__7200__auto___22236)){
args22233.push((arguments[i__7201__auto___22237]));

var G__22238 = (i__7201__auto___22237 + (1));
i__7201__auto___22237 = G__22238;
continue;
} else {
}
break;
}

var G__22235 = args22233.length;
switch (G__22235) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22233.length)].join('')));

}
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

return datascript.db._datoms(db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;
datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args22240 = [];
var len__7200__auto___22243 = arguments.length;
var i__7201__auto___22244 = (0);
while(true){
if((i__7201__auto___22244 < len__7200__auto___22243)){
args22240.push((arguments[i__7201__auto___22244]));

var G__22245 = (i__7201__auto___22244 + (1));
i__7201__auto___22244 = G__22245;
continue;
} else {
}
break;
}

var G__22242 = args22240.length;
switch (G__22242) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22240.length)].join('')));

}
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

return datascript.db._seek_datoms(db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;
datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

return datascript.db._index_range(db,attr,start,end);
});
datascript.core.entid = datascript.db.entid;
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__6130__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || (conn.cljs$core$IDeref$))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn));
if(and__6130__auto__){
return datascript.db.db_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conn) : cljs.core.deref.call(null,conn)));
} else {
return and__6130__auto__;
}
});
datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args22251 = [];
var len__7200__auto___22258 = arguments.length;
var i__7201__auto___22259 = (0);
while(true){
if((i__7201__auto___22259 < len__7200__auto___22258)){
args22251.push((arguments[i__7201__auto___22259]));

var G__22260 = (i__7201__auto___22259 + (1));
i__7201__auto___22259 = G__22260;
continue;
} else {
}
break;
}

var G__22253 = args22251.length;
switch (G__22253) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22251.length)].join('')));

}
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(datascript.db.default_schema);
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
var G__22254 = (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(schema) : datascript.core.empty_db.call(null,schema));
var G__22255 = cljs.core.cst$kw$meta;
var G__22256 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$listeners,(function (){var G__22257 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22257) : cljs.core.atom.call(null,G__22257));
})()], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$3 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$3(G__22254,G__22255,G__22256) : cljs.core.atom.call(null,G__22254,G__22255,G__22256));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;
datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$conn_QMARK_,cljs.core.cst$sym$conn)], 0)))].join('')));
}

var report = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,((function (report){
return (function (db){
var r = datascript.core.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,tx_meta);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(report,r) : cljs.core.reset_BANG_.call(null,report,r));

return cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(report) : cljs.core.deref.call(null,report));
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args22262 = [];
var len__7200__auto___22272 = arguments.length;
var i__7201__auto___22273 = (0);
while(true){
if((i__7201__auto___22273 < len__7200__auto___22272)){
args22262.push((arguments[i__7201__auto___22273]));

var G__22274 = (i__7201__auto___22273 + (1));
i__7201__auto___22273 = G__22274;
continue;
} else {
}
break;
}

var G__22264 = args22262.length;
switch (G__22264) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22262.length)].join('')));

}
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$conn_QMARK_,cljs.core.cst$sym$conn)], 0)))].join('')));
}

var report = datascript.core._transact_BANG_(conn,tx_data,tx_meta);
var seq__22265_22276 = cljs.core.seq((function (){var G__22269 = cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22269) : cljs.core.deref.call(null,G__22269));
})());
var chunk__22266_22277 = null;
var count__22267_22278 = (0);
var i__22268_22279 = (0);
while(true){
if((i__22268_22279 < count__22267_22278)){
var vec__22270_22280 = chunk__22266_22277.cljs$core$IIndexed$_nth$arity$2(null,i__22268_22279);
var __22281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22270_22280,(0),null);
var callback_22282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22270_22280,(1),null);
(callback_22282.cljs$core$IFn$_invoke$arity$1 ? callback_22282.cljs$core$IFn$_invoke$arity$1(report) : callback_22282.call(null,report));

var G__22283 = seq__22265_22276;
var G__22284 = chunk__22266_22277;
var G__22285 = count__22267_22278;
var G__22286 = (i__22268_22279 + (1));
seq__22265_22276 = G__22283;
chunk__22266_22277 = G__22284;
count__22267_22278 = G__22285;
i__22268_22279 = G__22286;
continue;
} else {
var temp__4425__auto___22287 = cljs.core.seq(seq__22265_22276);
if(temp__4425__auto___22287){
var seq__22265_22288__$1 = temp__4425__auto___22287;
if(cljs.core.chunked_seq_QMARK_(seq__22265_22288__$1)){
var c__6945__auto___22289 = cljs.core.chunk_first(seq__22265_22288__$1);
var G__22290 = cljs.core.chunk_rest(seq__22265_22288__$1);
var G__22291 = c__6945__auto___22289;
var G__22292 = cljs.core.count(c__6945__auto___22289);
var G__22293 = (0);
seq__22265_22276 = G__22290;
chunk__22266_22277 = G__22291;
count__22267_22278 = G__22292;
i__22268_22279 = G__22293;
continue;
} else {
var vec__22271_22294 = cljs.core.first(seq__22265_22288__$1);
var __22295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22271_22294,(0),null);
var callback_22296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22271_22294,(1),null);
(callback_22296.cljs$core$IFn$_invoke$arity$1 ? callback_22296.cljs$core$IFn$_invoke$arity$1(report) : callback_22296.call(null,report));

var G__22297 = cljs.core.next(seq__22265_22288__$1);
var G__22298 = null;
var G__22299 = (0);
var G__22300 = (0);
seq__22265_22276 = G__22297;
chunk__22266_22277 = G__22298;
count__22267_22278 = G__22299;
i__22268_22279 = G__22300;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var args22301 = [];
var len__7200__auto___22304 = arguments.length;
var i__7201__auto___22305 = (0);
while(true){
if((i__7201__auto___22305 < len__7200__auto___22304)){
args22301.push((arguments[i__7201__auto___22305]));

var G__22306 = (i__7201__auto___22305 + (1));
i__7201__auto___22305 = G__22306;
continue;
} else {
}
break;
}

var G__22303 = args22301.length;
switch (G__22303) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22301.length)].join('')));

}
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$conn_QMARK_,cljs.core.cst$sym$conn)], 0)))].join('')));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$conn_QMARK_,cljs.core.cst$sym$conn)], 0)))].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn)),cljs.core.dissoc,key);
});
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$datascript_SLASH_Datom,datascript.db.datom_from_reader,cljs.core.cst$sym$datascript_SLASH_DB,datascript.db.db_from_reader], null);
var seq__22308_22314 = cljs.core.seq(datascript.core.data_readers);
var chunk__22309_22315 = null;
var count__22310_22316 = (0);
var i__22311_22317 = (0);
while(true){
if((i__22311_22317 < count__22310_22316)){
var vec__22312_22318 = chunk__22309_22315.cljs$core$IIndexed$_nth$arity$2(null,i__22311_22317);
var tag_22319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22312_22318,(0),null);
var cb_22320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22312_22318,(1),null);
cljs.reader.register_tag_parser_BANG_(tag_22319,cb_22320);

var G__22321 = seq__22308_22314;
var G__22322 = chunk__22309_22315;
var G__22323 = count__22310_22316;
var G__22324 = (i__22311_22317 + (1));
seq__22308_22314 = G__22321;
chunk__22309_22315 = G__22322;
count__22310_22316 = G__22323;
i__22311_22317 = G__22324;
continue;
} else {
var temp__4425__auto___22325 = cljs.core.seq(seq__22308_22314);
if(temp__4425__auto___22325){
var seq__22308_22326__$1 = temp__4425__auto___22325;
if(cljs.core.chunked_seq_QMARK_(seq__22308_22326__$1)){
var c__6945__auto___22327 = cljs.core.chunk_first(seq__22308_22326__$1);
var G__22328 = cljs.core.chunk_rest(seq__22308_22326__$1);
var G__22329 = c__6945__auto___22327;
var G__22330 = cljs.core.count(c__6945__auto___22327);
var G__22331 = (0);
seq__22308_22314 = G__22328;
chunk__22309_22315 = G__22329;
count__22310_22316 = G__22330;
i__22311_22317 = G__22331;
continue;
} else {
var vec__22313_22332 = cljs.core.first(seq__22308_22326__$1);
var tag_22333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22313_22332,(0),null);
var cb_22334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22313_22332,(1),null);
cljs.reader.register_tag_parser_BANG_(tag_22333,cb_22334);

var G__22335 = cljs.core.next(seq__22308_22326__$1);
var G__22336 = null;
var G__22337 = (0);
var G__22338 = (0);
seq__22308_22314 = G__22335;
chunk__22309_22315 = G__22336;
count__22310_22316 = G__22337;
i__22311_22317 = G__22338;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1000000)) : cljs.core.atom.call(null,(-1000000)));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args22339 = [];
var len__7200__auto___22342 = arguments.length;
var i__7201__auto___22343 = (0);
while(true){
if((i__7201__auto___22343 < len__7200__auto___22342)){
args22339.push((arguments[i__7201__auto___22343]));

var G__22344 = (i__7201__auto___22343 + (1));
i__7201__auto___22343 = G__22344;
continue;
} else {
}
break;
}

var G__22341 = args22339.length;
switch (G__22341) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22339.length)].join('')));

}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(part,cljs.core.cst$kw$db$part_SLASH_tx)){
return cljs.core.cst$kw$db_SLASH_current_DASH_tx;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(part,cljs.core.cst$kw$db$part_SLASH_tx)){
return cljs.core.cst$kw$db_SLASH_current_DASH_tx;
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;
datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,tempid);
});
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$conn_QMARK_,cljs.core.cst$sym$conn)], 0)))].join('')));
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conn) : cljs.core.deref.call(null,conn));
});
datascript.core.transact = (function datascript$core$transact(var_args){
var args22346 = [];
var len__7200__auto___22352 = arguments.length;
var i__7201__auto___22353 = (0);
while(true){
if((i__7201__auto___22353 < len__7200__auto___22352)){
args22346.push((arguments[i__7201__auto___22353]));

var G__22354 = (i__7201__auto___22353 + (1));
i__7201__auto___22353 = G__22354;
continue;
} else {
}
break;
}

var G__22348 = args22346.length;
switch (G__22348) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22346.length)].join('')));

}
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$conn_QMARK_,cljs.core.cst$sym$conn)], 0)))].join('')));
}

var res = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core22349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core22349 = (function (conn,tx_data,tx_meta,res,meta22350){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta22350 = meta22350;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core22349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_22351,meta22350__$1){
var self__ = this;
var _22351__$1 = this;
return (new datascript.core.t_datascript$core22349(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta22350__$1));
});})(res))
;

datascript.core.t_datascript$core22349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_22351){
var self__ = this;
var _22351__$1 = this;
return self__.meta22350;
});})(res))
;

datascript.core.t_datascript$core22349.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core22349.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core22349.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core22349.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$conn,cljs.core.cst$sym$tx_DASH_data,cljs.core.cst$sym$tx_DASH_meta,cljs.core.cst$sym$res,cljs.core.cst$sym$meta22350], null);
});})(res))
;

datascript.core.t_datascript$core22349.cljs$lang$type = true;

datascript.core.t_datascript$core22349.cljs$lang$ctorStr = "datascript.core/t_datascript$core22349";

datascript.core.t_datascript$core22349.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write(writer__6741__auto__,"datascript.core/t_datascript$core22349");
});})(res))
;

datascript.core.__GT_t_datascript$core22349 = ((function (res){
return (function datascript$core$__GT_t_datascript$core22349(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta22350){
return (new datascript.core.t_datascript$core22349(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta22350));
});})(res))
;

}

return (new datascript.core.t_datascript$core22349(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;
datascript.core.future_call = (function datascript$core$future_call(f){
var res = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var realized = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
var G__22367_22374 = ((function (res,realized){
return (function (){
var G__22369_22376 = res;
var G__22370_22377 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22369_22376,G__22370_22377) : cljs.core.reset_BANG_.call(null,G__22369_22376,G__22370_22377));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(realized,true) : cljs.core.reset_BANG_.call(null,realized,true));
});})(res,realized))
;
var G__22368_22375 = (0);
setTimeout(G__22367_22374,G__22368_22375);

if(typeof datascript.core.t_datascript$core22371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core22371 = (function (future_call,f,res,realized,meta22372){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta22372 = meta22372;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core22371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_22373,meta22372__$1){
var self__ = this;
var _22373__$1 = this;
return (new datascript.core.t_datascript$core22371(self__.future_call,self__.f,self__.res,self__.realized,meta22372__$1));
});})(res,realized))
;

datascript.core.t_datascript$core22371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_22373){
var self__ = this;
var _22373__$1 = this;
return self__.meta22372;
});})(res,realized))
;

datascript.core.t_datascript$core22371.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.res) : cljs.core.deref.call(null,self__.res));
});})(res,realized))
;

datascript.core.t_datascript$core22371.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.realized) : cljs.core.deref.call(null,self__.realized)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.res) : cljs.core.deref.call(null,self__.res));
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core22371.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.realized) : cljs.core.deref.call(null,self__.realized));
});})(res,realized))
;

datascript.core.t_datascript$core22371.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$future_DASH_call,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f], null)))], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$res,cljs.core.cst$sym$realized,cljs.core.cst$sym$meta22372], null);
});})(res,realized))
;

datascript.core.t_datascript$core22371.cljs$lang$type = true;

datascript.core.t_datascript$core22371.cljs$lang$ctorStr = "datascript.core/t_datascript$core22371";

datascript.core.t_datascript$core22371.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write(writer__6741__auto__,"datascript.core/t_datascript$core22371");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core22371 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core22371(future_call__$1,f__$1,res__$1,realized__$1,meta22372){
return (new datascript.core.t_datascript$core22371(future_call__$1,f__$1,res__$1,realized__$1,meta22372));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core22371(datascript$core$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args22378 = [];
var len__7200__auto___22381 = arguments.length;
var i__7201__auto___22382 = (0);
while(true){
if((i__7201__auto___22382 < len__7200__auto___22381)){
args22378.push((arguments[i__7201__auto___22382]));

var G__22383 = (i__7201__auto___22382 + (1));
i__7201__auto___22382 = G__22383;
continue;
} else {
}
break;
}

var G__22380 = args22378.length;
switch (G__22380) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22378.length)].join('')));

}
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$conn_QMARK_,cljs.core.cst$sym$conn)], 0)))].join('')));
}

return datascript.core.future_call((function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;
datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int(((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count(s);
if((c > l)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),l);
} else {
if((c < l)){
return [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((l - c),"0"))),cljs.core.str(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args22385 = [];
var len__7200__auto___22388 = arguments.length;
var i__7201__auto___22389 = (0);
while(true){
if((i__7201__auto___22389 < len__7200__auto___22388)){
args22385.push((arguments[i__7201__auto___22389]));

var G__22390 = (i__7201__auto___22389 + (1));
i__7201__auto___22389 = G__22390;
continue;
} else {
}
break;
}

var G__22387 = args22385.length;
switch (G__22387) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22385.length)].join('')));

}
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid([cljs.core.str(datascript.core.to_hex_string(((msec / (1000)) | (0)),(8))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string(((datascript.core.rand_bits((16)) & (4095)) | (16384)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string(((datascript.core.rand_bits((16)) & (16383)) | (32768)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4))),cljs.core.str(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4))),cljs.core.str(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;
datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return ((function (){var G__22394 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str(uuid)].join(''),(0),(8));
var G__22395 = (16);
return parseInt(G__22394,G__22395);
})() * (1000));
});
