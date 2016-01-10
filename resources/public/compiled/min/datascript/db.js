// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('datascript.db');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('clojure.walk');
goog.require('datascript.arrays');
goog.require('datascript.btset');
datascript.db.Exception = Error;

datascript.db.IllegalArgumentException = Error;

datascript.db.UnsupportedOperationException = Error;
datascript.db.tx0 = (536870912);
datascript.db.default_schema = null;
datascript.db.seqable_QMARK_ = cljs.core.seqable_QMARK_;
datascript.db.neg_number_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,cljs.core.neg_QMARK_);
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
datascript.db.cljs_env_QMARK_ = (function datascript$db$cljs_env_QMARK_(env){
return cljs.core.boolean$(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
});






/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.db.Datom = (function (e,a,v,tx,added){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.cljs$lang$protocol_mask$partition0$ = 2162164496;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.db.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
var or__6142__auto__ = d__$1.__hash;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return d__$1.__hash = (datascript.db.hash_datom.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_datom.cljs$core$IFn$_invoke$arity$1(d__$1) : datascript.db.hash_datom.call(null,d__$1));
}
});

datascript.db.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){
var self__ = this;
var d__$1 = this;
var and__6130__auto__ = (o instanceof datascript.db.Datom);
if(and__6130__auto__){
return (datascript.db.equiv_datom.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_datom.cljs$core$IFn$_invoke$arity$2(d__$1,o) : datascript.db.equiv_datom.call(null,d__$1,o));
} else {
return and__6130__auto__;
}
});

datascript.db.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return (datascript.db.seq_datom.cljs$core$IFn$_invoke$arity$1 ? datascript.db.seq_datom.cljs$core$IFn$_invoke$arity$1(d__$1) : datascript.db.seq_datom.call(null,d__$1));
});

datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (d,k){
var self__ = this;
var d__$1 = this;
return (datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3(d__$1,k,null) : datascript.db.val_at_datom.call(null,d__$1,k,null));
});

datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (d,k,nf){
var self__ = this;
var d__$1 = this;
return (datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3(d__$1,k,nf) : datascript.db.val_at_datom.call(null,d__$1,k,nf));
});

datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return (datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 ? datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2(this$__$1,i) : datascript.db.nth_datom.call(null,this$__$1,i));
});

datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
return (datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3(this$__$1,i,not_found) : datascript.db.nth_datom.call(null,this$__$1,i,not_found));
});

datascript.db.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (d,k,v__$1){
var self__ = this;
var d__$1 = this;
return (datascript.db.assoc_datom.cljs$core$IFn$_invoke$arity$1 ? datascript.db.assoc_datom.cljs$core$IFn$_invoke$arity$1(k) : datascript.db.assoc_datom.call(null,k));
});

datascript.db.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var self__ = this;
var d__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});

datascript.db.Datom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$e,cljs.core.cst$sym$a,cljs.core.cst$sym$v,cljs.core.cst$sym$tx,cljs.core.cst$sym$added], null);
});

datascript.db.Datom.cljs$lang$type = true;

datascript.db.Datom.cljs$lang$ctorStr = "datascript.db/Datom";

datascript.db.Datom.cljs$lang$ctorPrWriter = (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write(writer__6741__auto__,"datascript.db/Datom");
});

datascript.db.__GT_Datom = (function datascript$db$__GT_Datom(e,a,v,tx,added){
return (new datascript.db.Datom(e,a,v,tx,added));
});

datascript.db.datom = (function datascript$db$datom(var_args){
var args20546 = [];
var len__7200__auto___20549 = arguments.length;
var i__7201__auto___20550 = (0);
while(true){
if((i__7201__auto___20550 < len__7200__auto___20549)){
args20546.push((arguments[i__7201__auto___20550]));

var G__20551 = (i__7201__auto___20550 + (1));
i__7201__auto___20550 = G__20551;
continue;
} else {
}
break;
}

var G__20548 = args20546.length;
switch (G__20548) {
case 3:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20546.length)].join('')));

}
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return (new datascript.db.Datom(e,a,v,datascript.db.tx0,true));
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return (new datascript.db.Datom(e,a,v,tx,true));
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return (new datascript.db.Datom(e,a,v,tx,added));
});

datascript.db.datom.cljs$lang$maxFixedArity = 5;
datascript.db.datom_QMARK_ = (function datascript$db$datom_QMARK_(x){
return (x instanceof datascript.db.Datom);
});
datascript.db.hash_datom = (function datascript$db$hash_datom(d){
return cljs.core.hash_combine(cljs.core.hash_combine(cljs.core.hash(d.e),cljs.core.hash(d.a)),cljs.core.hash(d.v));
});
datascript.db.equiv_datom = (function datascript$db$equiv_datom(d,o){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.e,o.e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.a,o.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.v,o.v));
});
datascript.db.seq_datom = (function datascript$db$seq_datom(d){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,d.added),d.tx),d.v),d.a),d.e);
});
datascript.db.val_at_datom = (function datascript$db$val_at_datom(d,k,not_found){
var G__20554 = k;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$v,G__20554)){
return d.v;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("e",G__20554)){
return d.e;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$added,G__20554)){
return d.added;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("v",G__20554)){
return d.v;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$e,G__20554)){
return d.e;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("a",G__20554)){
return d.a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tx,G__20554)){
return d.tx;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("added",G__20554)){
return d.added;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tx",G__20554)){
return d.tx;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$a,G__20554)){
return d.a;
} else {
return not_found;

}
}
}
}
}
}
}
}
}
}
});
datascript.db.nth_datom = (function datascript$db$nth_datom(var_args){
var args20555 = [];
var len__7200__auto___20560 = arguments.length;
var i__7201__auto___20561 = (0);
while(true){
if((i__7201__auto___20561 < len__7200__auto___20560)){
args20555.push((arguments[i__7201__auto___20561]));

var G__20562 = (i__7201__auto___20561 + (1));
i__7201__auto___20561 = G__20562;
continue;
} else {
}
break;
}

var G__20557 = args20555.length;
switch (G__20557) {
case 2:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20555.length)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 = (function (d,i){
var G__20558 = i;
switch (G__20558) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.tx;

break;
case (4):
return d.added;

break;
default:
throw (new Error([cljs.core.str("Datom/-nth: Index out of bounds: "),cljs.core.str(i)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 = (function (d,i,not_found){
var G__20559 = i;
switch (G__20559) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.tx;

break;
case (4):
return d.added;

break;
default:
return not_found;

}
});

datascript.db.nth_datom.cljs$lang$maxFixedArity = 3;
datascript.db.assoc_datom = (function datascript$db$assoc_datom(d,k,v){
var G__20567 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__20567) {
case "e":
return (new datascript.db.Datom(v,d.a,d.v,d.tx,d.added));

break;
case "a":
return (new datascript.db.Datom(d.e,v,d.v,d.tx,d.added));

break;
case "v":
return (new datascript.db.Datom(d.e,d.a,v,d.tx,d.added));

break;
case "tx":
return (new datascript.db.Datom(d.e,d.a,d.v,v,d.added));

break;
case "added":
return (new datascript.db.Datom(d.e,d.a,d.v,d.tx,v));

break;
default:
throw (new datascript.db.IllegalArgumentException([cljs.core.str("invalid key for #datascript/Datom: "),cljs.core.str(k)].join('')));

}
});
datascript.db.datom_from_reader = (function datascript$db$datom_from_reader(vec){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(datascript.db.datom,vec);
});
datascript.db.cmp = (function datascript$db$cmp(o1,o2){
if(cljs.core.truth_((function (){var and__6130__auto__ = o1;
if(cljs.core.truth_(and__6130__auto__)){
return o2;
} else {
return and__6130__auto__;
}
})())){
return cljs.core.compare(o1,o2);
} else {
return (0);
}
});
datascript.db.cmp_num = (function datascript$db$cmp_num(n1,n2){
if(cljs.core.truth_((function (){var and__6130__auto__ = n1;
if(cljs.core.truth_(and__6130__auto__)){
return n2;
} else {
return and__6130__auto__;
}
})())){
return (n1 - n2);
} else {
return (0);
}
});
datascript.db.cmp_val = (function datascript$db$cmp_val(o1,o2){
if((cljs.core.some_QMARK_(o1)) && (cljs.core.some_QMARK_(o2))){
return cljs.core.compare(o1,o2);
} else {
return (0);
}
});
datascript.db.cmp_datoms_eavt = (function datascript$db$cmp_datoms_eavt(d1,d2){
var c__7934__auto__ = datascript.db.cmp_num(d1.e,d2.e);
if(((0) === c__7934__auto__)){
var c__7934__auto____$1 = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__7934__auto____$1)){
var c__7934__auto____$2 = datascript.db.cmp_val(d1.v,d2.v);
if(((0) === c__7934__auto____$2)){
var c__7934__auto____$3 = datascript.db.cmp_num(d1.tx,d2.tx);
if(((0) === c__7934__auto____$3)){
return (0);
} else {
return c__7934__auto____$3;
}
} else {
return c__7934__auto____$2;
}
} else {
return c__7934__auto____$1;
}
} else {
return c__7934__auto__;
}
});
datascript.db.cmp_datoms_aevt = (function datascript$db$cmp_datoms_aevt(d1,d2){
var c__7934__auto__ = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__7934__auto__)){
var c__7934__auto____$1 = datascript.db.cmp_num(d1.e,d2.e);
if(((0) === c__7934__auto____$1)){
var c__7934__auto____$2 = datascript.db.cmp_val(d1.v,d2.v);
if(((0) === c__7934__auto____$2)){
var c__7934__auto____$3 = datascript.db.cmp_num(d1.tx,d2.tx);
if(((0) === c__7934__auto____$3)){
return (0);
} else {
return c__7934__auto____$3;
}
} else {
return c__7934__auto____$2;
}
} else {
return c__7934__auto____$1;
}
} else {
return c__7934__auto__;
}
});
datascript.db.cmp_datoms_avet = (function datascript$db$cmp_datoms_avet(d1,d2){
var c__7934__auto__ = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__7934__auto__)){
var c__7934__auto____$1 = datascript.db.cmp_val(d1.v,d2.v);
if(((0) === c__7934__auto____$1)){
var c__7934__auto____$2 = datascript.db.cmp_num(d1.e,d2.e);
if(((0) === c__7934__auto____$2)){
var c__7934__auto____$3 = datascript.db.cmp_num(d1.tx,d2.tx);
if(((0) === c__7934__auto____$3)){
return (0);
} else {
return c__7934__auto____$3;
}
} else {
return c__7934__auto____$2;
}
} else {
return c__7934__auto____$1;
}
} else {
return c__7934__auto__;
}
});
datascript.db.cmp_attr_quick = (function datascript$db$cmp_attr_quick(a1,a2){
if((a1 instanceof cljs.core.Keyword)){
return cljs.core._compare(a1,a2);
} else {
return goog.array.defaultCompare(a1,a2);
}
});
datascript.db.cmp_datoms_eavt_quick = (function datascript$db$cmp_datoms_eavt_quick(d1,d2){
var c__7934__auto__ = (d1.e - d2.e);
if(((0) === c__7934__auto__)){
var c__7934__auto____$1 = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__7934__auto____$1)){
var c__7934__auto____$2 = cljs.core.compare(d1.v,d2.v);
if(((0) === c__7934__auto____$2)){
var c__7934__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__7934__auto____$3)){
return (0);
} else {
return c__7934__auto____$3;
}
} else {
return c__7934__auto____$2;
}
} else {
return c__7934__auto____$1;
}
} else {
return c__7934__auto__;
}
});
datascript.db.cmp_datoms_aevt_quick = (function datascript$db$cmp_datoms_aevt_quick(d1,d2){
var c__7934__auto__ = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__7934__auto__)){
var c__7934__auto____$1 = (d1.e - d2.e);
if(((0) === c__7934__auto____$1)){
var c__7934__auto____$2 = cljs.core.compare(d1.v,d2.v);
if(((0) === c__7934__auto____$2)){
var c__7934__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__7934__auto____$3)){
return (0);
} else {
return c__7934__auto____$3;
}
} else {
return c__7934__auto____$2;
}
} else {
return c__7934__auto____$1;
}
} else {
return c__7934__auto__;
}
});
datascript.db.cmp_datoms_avet_quick = (function datascript$db$cmp_datoms_avet_quick(d1,d2){
var c__7934__auto__ = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__7934__auto__)){
var c__7934__auto____$1 = cljs.core.compare(d1.v,d2.v);
if(((0) === c__7934__auto____$1)){
var c__7934__auto____$2 = (d1.e - d2.e);
if(((0) === c__7934__auto____$2)){
var c__7934__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__7934__auto____$3)){
return (0);
} else {
return c__7934__auto____$3;
}
} else {
return c__7934__auto____$2;
}
} else {
return c__7934__auto____$1;
}
} else {
return c__7934__auto__;
}
});

/**
 * @interface
 */
datascript.db.ISearch = function(){};

datascript.db._search = (function datascript$db$_search(data,pattern){
if((!((data == null))) && (!((data.datascript$db$ISearch$_search$arity$2 == null)))){
return data.datascript$db$ISearch$_search$arity$2(data,pattern);
} else {
var x__6797__auto__ = (((data == null))?null:data);
var m__6798__auto__ = (datascript.db._search[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$2(data,pattern) : m__6798__auto__.call(null,data,pattern));
} else {
var m__6798__auto____$1 = (datascript.db._search["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2(data,pattern) : m__6798__auto____$1.call(null,data,pattern));
} else {
throw cljs.core.missing_protocol("ISearch.-search",data);
}
}
}
});


/**
 * @interface
 */
datascript.db.IIndexAccess = function(){};

datascript.db._datoms = (function datascript$db$_datoms(db,index,components){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_datoms$arity$3 == null)))){
return db.datascript$db$IIndexAccess$_datoms$arity$3(db,index,components);
} else {
var x__6797__auto__ = (((db == null))?null:db);
var m__6798__auto__ = (datascript.db._datoms[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__6798__auto__.call(null,db,index,components));
} else {
var m__6798__auto____$1 = (datascript.db._datoms["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__6798__auto____$1.call(null,db,index,components));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-datoms",db);
}
}
}
});

datascript.db._seek_datoms = (function datascript$db$_seek_datoms(db,index,components){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_seek_datoms$arity$3 == null)))){
return db.datascript$db$IIndexAccess$_seek_datoms$arity$3(db,index,components);
} else {
var x__6797__auto__ = (((db == null))?null:db);
var m__6798__auto__ = (datascript.db._seek_datoms[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__6798__auto__.call(null,db,index,components));
} else {
var m__6798__auto____$1 = (datascript.db._seek_datoms["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__6798__auto____$1.call(null,db,index,components));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-seek-datoms",db);
}
}
}
});

datascript.db._index_range = (function datascript$db$_index_range(db,attr,start,end){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_index_range$arity$4 == null)))){
return db.datascript$db$IIndexAccess$_index_range$arity$4(db,attr,start,end);
} else {
var x__6797__auto__ = (((db == null))?null:db);
var m__6798__auto__ = (datascript.db._index_range[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$4 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$4(db,attr,start,end) : m__6798__auto__.call(null,db,attr,start,end));
} else {
var m__6798__auto____$1 = (datascript.db._index_range["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$4(db,attr,start,end) : m__6798__auto____$1.call(null,db,attr,start,end));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-index-range",db);
}
}
}
});


/**
 * @interface
 */
datascript.db.IDB = function(){};

datascript.db._schema = (function datascript$db$_schema(db){
if((!((db == null))) && (!((db.datascript$db$IDB$_schema$arity$1 == null)))){
return db.datascript$db$IDB$_schema$arity$1(db);
} else {
var x__6797__auto__ = (((db == null))?null:db);
var m__6798__auto__ = (datascript.db._schema[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$1(db) : m__6798__auto__.call(null,db));
} else {
var m__6798__auto____$1 = (datascript.db._schema["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$1(db) : m__6798__auto____$1.call(null,db));
} else {
throw cljs.core.missing_protocol("IDB.-schema",db);
}
}
}
});

datascript.db._attrs_by = (function datascript$db$_attrs_by(db,property){
if((!((db == null))) && (!((db.datascript$db$IDB$_attrs_by$arity$2 == null)))){
return db.datascript$db$IDB$_attrs_by$arity$2(db,property);
} else {
var x__6797__auto__ = (((db == null))?null:db);
var m__6798__auto__ = (datascript.db._attrs_by[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$2(db,property) : m__6798__auto__.call(null,db,property));
} else {
var m__6798__auto____$1 = (datascript.db._attrs_by["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2(db,property) : m__6798__auto____$1.call(null,db,property));
} else {
throw cljs.core.missing_protocol("IDB.-attrs-by",db);
}
}
}
});










/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,rschema,__meta,__extmap,__hash){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.rschema = rschema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6756__auto__,k__6757__auto__){
var self__ = this;
var this__6756__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6756__auto____$1,k__6757__auto__,null);
});

datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6758__auto__,k20572,else__6759__auto__){
var self__ = this;
var this__6758__auto____$1 = this;
var G__20574 = (((k20572 instanceof cljs.core.Keyword))?k20572.fqn:null);
switch (G__20574) {
case "schema":
return self__.schema;

break;
case "eavt":
return self__.eavt;

break;
case "aevt":
return self__.aevt;

break;
case "avet":
return self__.avet;

break;
case "max-eid":
return self__.max_eid;

break;
case "max-tx":
return self__.max_tx;

break;
case "rschema":
return self__.rschema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20572,else__6759__auto__);

}
});

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6770__auto__,writer__6771__auto__,opts__6772__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
var pr_pair__6773__auto__ = ((function (this__6770__auto____$1){
return (function (keyval__6774__auto__){
return cljs.core.pr_sequential_writer(writer__6771__auto__,cljs.core.pr_writer,""," ","",opts__6772__auto__,keyval__6774__auto__);
});})(this__6770__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6771__auto__,pr_pair__6773__auto__,"#datascript.db.DB{",", ","}",opts__6772__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$eavt,self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$aevt,self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$avet,self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_eid,self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_tx,self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rschema,self__.rschema],null))], null),self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IIterable$ = true;

datascript.db.DB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20571){
var self__ = this;
var G__20571__$1 = this;
return (new cljs.core.RecordIter((0),G__20571__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$eavt,cljs.core.cst$kw$aevt,cljs.core.cst$kw$avet,cljs.core.cst$kw$max_DASH_eid,cljs.core.cst$kw$max_DASH_tx,cljs.core.cst$kw$rschema], null),cljs.core._iterator(self__.__extmap)));
});

datascript.db.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6754__auto__){
var self__ = this;
var this__6754__auto____$1 = this;
return self__.__meta;
});

datascript.db.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6750__auto__){
var self__ = this;
var this__6750__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6760__auto__){
var self__ = this;
var this__6760__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6751__auto__){
var self__ = this;
var this__6751__auto____$1 = this;
var h__6577__auto__ = self__.__hash;
if(!((h__6577__auto__ == null))){
return h__6577__auto__;
} else {
var h__6577__auto____$1 = cljs.core.hash_imap(this__6751__auto____$1);
self__.__hash = h__6577__auto____$1;

return h__6577__auto____$1;
}
});

datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6752__auto__,other__6753__auto__){
var self__ = this;
var this__6752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6130__auto__ = other__6753__auto__;
if(cljs.core.truth_(and__6130__auto__)){
var and__6130__auto____$1 = (this__6752__auto____$1.constructor === other__6753__auto__.constructor);
if(and__6130__auto____$1){
return cljs.core.equiv_map(this__6752__auto____$1,other__6753__auto__);
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.db.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6765__auto__,k__6766__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$max_DASH_tx,null,cljs.core.cst$kw$aevt,null,cljs.core.cst$kw$avet,null,cljs.core.cst$kw$max_DASH_eid,null,cljs.core.cst$kw$eavt,null,cljs.core.cst$kw$rschema,null], null), null),k__6766__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6765__auto____$1),self__.__meta),k__6766__auto__);
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6766__auto__)),null));
}
});

datascript.db.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6763__auto__,k__6764__auto__,G__20571){
var self__ = this;
var this__6763__auto____$1 = this;
var pred__20575 = cljs.core.keyword_identical_QMARK_;
var expr__20576 = k__6764__auto__;
if(cljs.core.truth_((pred__20575.cljs$core$IFn$_invoke$arity$2 ? pred__20575.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__20576) : pred__20575.call(null,cljs.core.cst$kw$schema,expr__20576)))){
return (new datascript.db.DB(G__20571,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20575.cljs$core$IFn$_invoke$arity$2 ? pred__20575.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$eavt,expr__20576) : pred__20575.call(null,cljs.core.cst$kw$eavt,expr__20576)))){
return (new datascript.db.DB(self__.schema,G__20571,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20575.cljs$core$IFn$_invoke$arity$2 ? pred__20575.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$aevt,expr__20576) : pred__20575.call(null,cljs.core.cst$kw$aevt,expr__20576)))){
return (new datascript.db.DB(self__.schema,self__.eavt,G__20571,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20575.cljs$core$IFn$_invoke$arity$2 ? pred__20575.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$avet,expr__20576) : pred__20575.call(null,cljs.core.cst$kw$avet,expr__20576)))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,G__20571,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20575.cljs$core$IFn$_invoke$arity$2 ? pred__20575.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$max_DASH_eid,expr__20576) : pred__20575.call(null,cljs.core.cst$kw$max_DASH_eid,expr__20576)))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__20571,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20575.cljs$core$IFn$_invoke$arity$2 ? pred__20575.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$max_DASH_tx,expr__20576) : pred__20575.call(null,cljs.core.cst$kw$max_DASH_tx,expr__20576)))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__20571,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20575.cljs$core$IFn$_invoke$arity$2 ? pred__20575.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rschema,expr__20576) : pred__20575.call(null,cljs.core.cst$kw$rschema,expr__20576)))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__20571,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6764__auto__,G__20571),null));
}
}
}
}
}
}
}
});

datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$eavt,self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$aevt,self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$avet,self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_eid,self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_tx,self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rschema,self__.rschema],null))], null),self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6755__auto__,G__20571){
var self__ = this;
var this__6755__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,G__20571,self__.__extmap,self__.__hash));
});

datascript.db.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6761__auto__,entry__6762__auto__){
var self__ = this;
var this__6761__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6762__auto__)){
return cljs.core._assoc(this__6761__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6762__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6762__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6761__auto____$1,entry__6762__auto__);
}
});

datascript.db.DB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$eavt,cljs.core.cst$sym$aevt,cljs.core.cst$sym$avet,cljs.core.cst$sym$max_DASH_eid,cljs.core.cst$sym$max_DASH_tx,cljs.core.cst$sym$rschema], null);
});

datascript.db.DB.cljs$lang$type = true;

datascript.db.DB.cljs$lang$ctorPrSeq = (function (this__6790__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.db/DB");
});

datascript.db.DB.cljs$lang$ctorPrWriter = (function (this__6790__auto__,writer__6791__auto__){
return cljs.core._write(writer__6791__auto__,"datascript.db/DB");
});

datascript.db.__GT_DB = (function datascript$db$__GT_DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema){
return (new datascript.db.DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,null,null,null));
});

datascript.db.map__GT_DB = (function datascript$db$map__GT_DB(G__20573){
return (new datascript.db.DB(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__20573),cljs.core.cst$kw$eavt.cljs$core$IFn$_invoke$arity$1(G__20573),cljs.core.cst$kw$aevt.cljs$core$IFn$_invoke$arity$1(G__20573),cljs.core.cst$kw$avet.cljs$core$IFn$_invoke$arity$1(G__20573),cljs.core.cst$kw$max_DASH_eid.cljs$core$IFn$_invoke$arity$1(G__20573),cljs.core.cst$kw$max_DASH_tx.cljs$core$IFn$_invoke$arity$1(G__20573),cljs.core.cst$kw$rschema.cljs$core$IFn$_invoke$arity$1(G__20573),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20573,cljs.core.cst$kw$schema,cljs.core.array_seq([cljs.core.cst$kw$eavt,cljs.core.cst$kw$aevt,cljs.core.cst$kw$avet,cljs.core.cst$kw$max_DASH_eid,cljs.core.cst$kw$max_DASH_tx,cljs.core.cst$kw$rschema], 0)),null));
});


datascript.db.DB.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return (datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3 ? datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3(db__$1,w,opts) : datascript.db.pr_db.call(null,db__$1,w,opts));
});

datascript.db.DB.prototype.cljs$core$ICounted$ = true;

datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count(db__$1.eavt);
});

datascript.db.DB.prototype.cljs$core$IReversible$ = true;

datascript.db.DB.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._rseq(db__$1.eavt);
});

datascript.db.DB.prototype.cljs$core$IHash$ = true;

datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return (datascript.db.hash_db.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_db.cljs$core$IFn$_invoke$arity$1(db__$1) : datascript.db.hash_db.call(null,db__$1));
});

datascript.db.DB.prototype.cljs$core$IEquiv$ = true;

datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return (datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2(db__$1,other) : datascript.db.equiv_db.call(null,db__$1,other));
});

datascript.db.DB.prototype.cljs$core$IEmptyableCollection$ = true;

datascript.db.DB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (db){
var db__$1 = this;
var G__20578 = db__$1.schema;
return (datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1(G__20578) : datascript.db.empty_db.call(null,G__20578));
});

datascript.db.DB.prototype.cljs$core$ISeqable$ = true;

datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._seq(db__$1.eavt);
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$ = true;

datascript.db.DB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),(datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$3 ? datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$3(db__$1,index,cs) : datascript.db.components__GT_pattern.call(null,db__$1,index,cs)));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),(datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$3 ? datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$3(db__$1,index,cs) : datascript.db.components__GT_pattern.call(null,db__$1,index,cs)),(new datascript.db.Datom(null,null,null,null,null)));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db__$1,attr) : datascript.db.indexing_QMARK_.call(null,db__$1,attr)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Attribute"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr], 0)))].join(''),"should be marked as :db/index true");
}

var G__20579_20583 = attr;
var G__20580_20584 = cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,end),start),attr),cljs.core.cst$sym$db),cljs.core.cst$sym$_DASH_index_DASH_range);
(datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2 ? datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2(G__20579_20583,G__20580_20584) : datascript.db.validate_attr.call(null,G__20579_20583,G__20580_20584));

return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3(db__$1.avet,(datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$5 ? datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$5(db__$1,null,attr,start,null) : datascript.db.resolve_datom.call(null,db__$1,null,attr,start,null)),(datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$5 ? datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$5(db__$1,null,attr,end,null) : datascript.db.resolve_datom.call(null,db__$1,null,attr,end,null)));
});

datascript.db.DB.prototype.datascript$db$IDB$ = true;

datascript.db.DB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return db__$1.schema;
});

datascript.db.DB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return db__$1.rschema.call(null,property);
});

datascript.db.DB.prototype.datascript$db$ISearch$ = true;

datascript.db.DB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
var vec__20581 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20581,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20581,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20581,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20581,(3),null);
var eavt = db__$1.eavt;
var aevt = db__$1.aevt;
var avet = db__$1.avet;
if(cljs.core.truth_(e)){
if(cljs.core.truth_(a)){
if(cljs.core.some_QMARK_(v)){
if(cljs.core.truth_(tx)){
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,a,v,tx,null)));
} else {
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,a,v,null,null)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,a,null,null,null))));
} else {
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,a,null,null,null)));
}
}
} else {
if(cljs.core.some_QMARK_(v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx));
});})(vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,null,null,null,null))));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
});})(vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,null,null,null,null))));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,null,null,null,null))));
} else {
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,null,null,null,null)));
}
}
}
} else {
if(cljs.core.truth_(a)){
if(cljs.core.some_QMARK_(v)){
if(cljs.core.truth_(tx)){
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db__$1,a) : datascript.db.indexing_QMARK_.call(null,db__$1,a)))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(avet,(new datascript.db.Datom(null,a,v,null,null))));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx));
});})(vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(aevt,(new datascript.db.Datom(null,a,null,null,null))));
}
} else {
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db__$1,a) : datascript.db.indexing_QMARK_.call(null,db__$1,a)))){
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(avet,(new datascript.db.Datom(null,a,v,null,null)));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
});})(vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(aevt,(new datascript.db.Datom(null,a,null,null,null))));
}
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(aevt,(new datascript.db.Datom(null,a,null,null,null))));
} else {
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(aevt,(new datascript.db.Datom(null,a,null,null,null)));
}
}
} else {
if(cljs.core.some_QMARK_(v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx));
});})(vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
});})(vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__20581,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return eavt;
}
}
}
}
});
datascript.db.db_QMARK_ = (function datascript$db$db_QMARK_(x){
var and__6130__auto__ = ((!((x == null)))?(((false) || (x.datascript$db$ISearch$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,x):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,x));
if(and__6130__auto__){
var and__6130__auto____$1 = ((!((x == null)))?(((false) || (x.datascript$db$IIndexAccess$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IIndexAccess,x):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IIndexAccess,x));
if(and__6130__auto____$1){
if(!((x == null))){
if((false) || (x.datascript$db$IDB$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(datascript.db.IDB,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(datascript.db.IDB,x);
}
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.FilteredDB = (function (unfiltered_db,pred,__meta,__extmap,__hash){
this.unfiltered_db = unfiltered_db;
this.pred = pred;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6756__auto__,k__6757__auto__){
var self__ = this;
var this__6756__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6756__auto____$1,k__6757__auto__,null);
});

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6758__auto__,k20599,else__6759__auto__){
var self__ = this;
var this__6758__auto____$1 = this;
var G__20601 = (((k20599 instanceof cljs.core.Keyword))?k20599.fqn:null);
switch (G__20601) {
case "unfiltered-db":
return self__.unfiltered_db;

break;
case "pred":
return self__.pred;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20599,else__6759__auto__);

}
});

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6770__auto__,writer__6771__auto__,opts__6772__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
var pr_pair__6773__auto__ = ((function (this__6770__auto____$1){
return (function (keyval__6774__auto__){
return cljs.core.pr_sequential_writer(writer__6771__auto__,cljs.core.pr_writer,""," ","",opts__6772__auto__,keyval__6774__auto__);
});})(this__6770__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6771__auto__,pr_pair__6773__auto__,"#datascript.db.FilteredDB{",", ","}",opts__6772__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$unfiltered_DASH_db,self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred,self__.pred],null))], null),self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IIterable$ = true;

datascript.db.FilteredDB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20598){
var self__ = this;
var G__20598__$1 = this;
return (new cljs.core.RecordIter((0),G__20598__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unfiltered_DASH_db,cljs.core.cst$kw$pred], null),cljs.core._iterator(self__.__extmap)));
});

datascript.db.FilteredDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6754__auto__){
var self__ = this;
var this__6754__auto____$1 = this;
return self__.__meta;
});

datascript.db.FilteredDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6750__auto__){
var self__ = this;
var this__6750__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6760__auto__){
var self__ = this;
var this__6760__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6751__auto__){
var self__ = this;
var this__6751__auto____$1 = this;
var h__6577__auto__ = self__.__hash;
if(!((h__6577__auto__ == null))){
return h__6577__auto__;
} else {
var h__6577__auto____$1 = cljs.core.hash_imap(this__6751__auto____$1);
self__.__hash = h__6577__auto____$1;

return h__6577__auto____$1;
}
});

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6752__auto__,other__6753__auto__){
var self__ = this;
var this__6752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6130__auto__ = other__6753__auto__;
if(cljs.core.truth_(and__6130__auto__)){
var and__6130__auto____$1 = (this__6752__auto____$1.constructor === other__6753__auto__.constructor);
if(and__6130__auto____$1){
return cljs.core.equiv_map(this__6752__auto____$1,other__6753__auto__);
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.db.FilteredDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6765__auto__,k__6766__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pred,null,cljs.core.cst$kw$unfiltered_DASH_db,null], null), null),k__6766__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6765__auto____$1),self__.__meta),k__6766__auto__);
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6766__auto__)),null));
}
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6763__auto__,k__6764__auto__,G__20598){
var self__ = this;
var this__6763__auto____$1 = this;
var pred__20602 = cljs.core.keyword_identical_QMARK_;
var expr__20603 = k__6764__auto__;
if(cljs.core.truth_((pred__20602.cljs$core$IFn$_invoke$arity$2 ? pred__20602.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unfiltered_DASH_db,expr__20603) : pred__20602.call(null,cljs.core.cst$kw$unfiltered_DASH_db,expr__20603)))){
return (new datascript.db.FilteredDB(G__20598,self__.pred,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20602.cljs$core$IFn$_invoke$arity$2 ? pred__20602.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pred,expr__20603) : pred__20602.call(null,cljs.core.cst$kw$pred,expr__20603)))){
return (new datascript.db.FilteredDB(self__.unfiltered_db,G__20598,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6764__auto__,G__20598),null));
}
}
});

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$unfiltered_DASH_db,self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred,self__.pred],null))], null),self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6755__auto__,G__20598){
var self__ = this;
var this__6755__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,G__20598,self__.__extmap,self__.__hash));
});

datascript.db.FilteredDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6761__auto__,entry__6762__auto__){
var self__ = this;
var this__6761__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6762__auto__)){
return cljs.core._assoc(this__6761__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6762__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6762__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6761__auto____$1,entry__6762__auto__);
}
});

datascript.db.FilteredDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$unfiltered_DASH_db,cljs.core.cst$sym$pred], null);
});

datascript.db.FilteredDB.cljs$lang$type = true;

datascript.db.FilteredDB.cljs$lang$ctorPrSeq = (function (this__6790__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.db/FilteredDB");
});

datascript.db.FilteredDB.cljs$lang$ctorPrWriter = (function (this__6790__auto__,writer__6791__auto__){
return cljs.core._write(writer__6791__auto__,"datascript.db/FilteredDB");
});

datascript.db.__GT_FilteredDB = (function datascript$db$__GT_FilteredDB(unfiltered_db,pred){
return (new datascript.db.FilteredDB(unfiltered_db,pred,null,null,null));
});

datascript.db.map__GT_FilteredDB = (function datascript$db$map__GT_FilteredDB(G__20600){
return (new datascript.db.FilteredDB(cljs.core.cst$kw$unfiltered_DASH_db.cljs$core$IFn$_invoke$arity$1(G__20600),cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(G__20600),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20600,cljs.core.cst$kw$unfiltered_DASH_db,cljs.core.array_seq([cljs.core.cst$kw$pred], 0)),null));
});


datascript.db.FilteredDB.prototype.cljs$core$ILookup$ = true;

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return (datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3 ? datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3(db__$1,w,opts) : datascript.db.pr_db.call(null,db__$1,w,opts));
});

datascript.db.FilteredDB.prototype.cljs$core$ICounted$ = true;

datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count(datascript.db._datoms(db__$1,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));
});

datascript.db.FilteredDB.prototype.cljs$core$IHash$ = true;

datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return (datascript.db.hash_fdb.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_fdb.cljs$core$IFn$_invoke$arity$1(db__$1) : datascript.db.hash_fdb.call(null,db__$1));
});

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$ = true;

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return (datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2(db__$1,other) : datascript.db.equiv_db.call(null,db__$1,other));
});

datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$ = true;

datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var ___$1 = this;
throw (new Error("-empty is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$ = true;

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-contains-key? is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-assoc is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$ = true;

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._datoms(db__$1,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY);
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$ = true;

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._datoms(db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._seek_datoms(db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._index_range(db__$1.unfiltered_db,attr,start,end));
});

datascript.db.FilteredDB.prototype.datascript$db$IDB$ = true;

datascript.db.FilteredDB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._schema(db__$1.unfiltered_db);
});

datascript.db.FilteredDB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return datascript.db._attrs_by(db__$1.unfiltered_db,property);
});

datascript.db.FilteredDB.prototype.datascript$db$ISearch$ = true;

datascript.db.FilteredDB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._search(db__$1.unfiltered_db,pattern));
});
datascript.db.attr__GT_properties = (function datascript$db$attr__GT_properties(k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_isComponent,true], null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_isComponent], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$db$type_SLASH_ref)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$type_SLASH_ref,cljs.core.cst$kw$db_SLASH_index], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$db$cardinality_SLASH_many)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$cardinality_SLASH_many], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$db$unique_SLASH_identity)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_identity,cljs.core.cst$kw$db_SLASH_index], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$db$unique_SLASH_value)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_value,cljs.core.cst$kw$db_SLASH_index], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_index,true], null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_index], null);
} else {
return null;
}
}
}
}
}
}
});
datascript.db.multimap = (function datascript$db$multimap(e,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__20608){
var vec__20609 = p__20608;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20609,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20609,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,e),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
datascript.db.rschema = (function datascript$db$rschema(schema){
return datascript.db.multimap(cljs.core.PersistentHashSet.EMPTY,(function (){var iter__6914__auto__ = (function datascript$db$rschema_$_iter__20635(s__20636){
return (new cljs.core.LazySeq(null,(function (){
var s__20636__$1 = s__20636;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20636__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__20652 = cljs.core.first(xs__4977__auto__);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20652,(0),null);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20652,(1),null);
var iterys__6910__auto__ = ((function (s__20636__$1,vec__20652,a,kv,xs__4977__auto__,temp__4425__auto__){
return (function datascript$db$rschema_$_iter__20635_$_iter__20637(s__20638){
return (new cljs.core.LazySeq(null,((function (s__20636__$1,vec__20652,a,kv,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__20638__$1 = s__20638;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__20638__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var vec__20657 = cljs.core.first(xs__4977__auto____$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20657,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20657,(1),null);
var iterys__6910__auto__ = ((function (s__20638__$1,s__20636__$1,vec__20657,k,v,xs__4977__auto____$1,temp__4425__auto____$1,vec__20652,a,kv,xs__4977__auto__,temp__4425__auto__){
return (function datascript$db$rschema_$_iter__20635_$_iter__20637_$_iter__20639(s__20640){
return (new cljs.core.LazySeq(null,((function (s__20638__$1,s__20636__$1,vec__20657,k,v,xs__4977__auto____$1,temp__4425__auto____$1,vec__20652,a,kv,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__20640__$1 = s__20640;
while(true){
var temp__4425__auto____$2 = cljs.core.seq(s__20640__$1);
if(temp__4425__auto____$2){
var s__20640__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__20640__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__20640__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__20642 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__20641 = (0);
while(true){
if((i__20641 < size__6913__auto__)){
var prop = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__20641);
cljs.core.chunk_append(b__20642,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,a], null));

var G__20660 = (i__20641 + (1));
i__20641 = G__20660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20642),datascript$db$rschema_$_iter__20635_$_iter__20637_$_iter__20639(cljs.core.chunk_rest(s__20640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20642),null);
}
} else {
var prop = cljs.core.first(s__20640__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,a], null),datascript$db$rschema_$_iter__20635_$_iter__20637_$_iter__20639(cljs.core.rest(s__20640__$2)));
}
} else {
return null;
}
break;
}
});})(s__20638__$1,s__20636__$1,vec__20657,k,v,xs__4977__auto____$1,temp__4425__auto____$1,vec__20652,a,kv,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__20638__$1,s__20636__$1,vec__20657,k,v,xs__4977__auto____$1,temp__4425__auto____$1,vec__20652,a,kv,xs__4977__auto__,temp__4425__auto__))
;
var fs__6911__auto__ = cljs.core.seq(iterys__6910__auto__(datascript.db.attr__GT_properties(k,v)));
if(fs__6911__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__6911__auto__,datascript$db$rschema_$_iter__20635_$_iter__20637(cljs.core.rest(s__20638__$1)));
} else {
var G__20661 = cljs.core.rest(s__20638__$1);
s__20638__$1 = G__20661;
continue;
}
} else {
return null;
}
break;
}
});})(s__20636__$1,vec__20652,a,kv,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__20636__$1,vec__20652,a,kv,xs__4977__auto__,temp__4425__auto__))
;
var fs__6911__auto__ = cljs.core.seq(iterys__6910__auto__(kv));
if(fs__6911__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__6911__auto__,datascript$db$rschema_$_iter__20635(cljs.core.rest(s__20636__$1)));
} else {
var G__20662 = cljs.core.rest(s__20636__$1);
s__20636__$1 = G__20662;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6914__auto__(schema);
})());
});
datascript.db.validate_schema_key = (function datascript$db$validate_schema_key(a,k,v,expected){
if(((v == null)) || (cljs.core.contains_QMARK_(expected,v))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad attribute specification for "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([a,cljs.core.PersistentArrayMap.fromArray([k,v], true, false)], true, false)], 0))),cljs.core.str(", expected one of "),cljs.core.str(expected)].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$schema_SLASH_validation,cljs.core.cst$kw$attribute,a,cljs.core.cst$kw$key,k,cljs.core.cst$kw$value,v], null));
}
});
datascript.db.validate_schema = (function datascript$db$validate_schema(schema){
var seq__20669_20675 = cljs.core.seq(schema);
var chunk__20670_20676 = null;
var count__20671_20677 = (0);
var i__20672_20678 = (0);
while(true){
if((i__20672_20678 < count__20671_20677)){
var vec__20673_20679 = chunk__20670_20676.cljs$core$IIndexed$_nth$arity$2(null,i__20672_20678);
var a_20680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20673_20679,(0),null);
var kv_20681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20673_20679,(1),null);
var comp_QMARK__20682 = cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$2(kv_20681,false);
datascript.db.validate_schema_key(a_20680,cljs.core.cst$kw$db_SLASH_isComponent,cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$1(kv_20681),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__6130__auto__ = comp_QMARK__20682;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv_20681),cljs.core.cst$kw$db$type_SLASH_ref);
} else {
return and__6130__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad attribute specification for "),cljs.core.str(a_20680),cljs.core.str(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$schema_SLASH_validation,cljs.core.cst$kw$attribute,a_20680,cljs.core.cst$kw$key,cljs.core.cst$kw$db_SLASH_isComponent], null));
} else {
}

datascript.db.validate_schema_key(a_20680,cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db_SLASH_unique.cljs$core$IFn$_invoke$arity$1(kv_20681),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$unique_SLASH_identity,null,cljs.core.cst$kw$db$unique_SLASH_value,null], null), null));

datascript.db.validate_schema_key(a_20680,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv_20681),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db$type_SLASH_ref,null], null), null));

datascript.db.validate_schema_key(a_20680,cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1(kv_20681),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$cardinality_SLASH_many,null,cljs.core.cst$kw$db$cardinality_SLASH_one,null], null), null));

var G__20683 = seq__20669_20675;
var G__20684 = chunk__20670_20676;
var G__20685 = count__20671_20677;
var G__20686 = (i__20672_20678 + (1));
seq__20669_20675 = G__20683;
chunk__20670_20676 = G__20684;
count__20671_20677 = G__20685;
i__20672_20678 = G__20686;
continue;
} else {
var temp__4425__auto___20687 = cljs.core.seq(seq__20669_20675);
if(temp__4425__auto___20687){
var seq__20669_20688__$1 = temp__4425__auto___20687;
if(cljs.core.chunked_seq_QMARK_(seq__20669_20688__$1)){
var c__6945__auto___20689 = cljs.core.chunk_first(seq__20669_20688__$1);
var G__20690 = cljs.core.chunk_rest(seq__20669_20688__$1);
var G__20691 = c__6945__auto___20689;
var G__20692 = cljs.core.count(c__6945__auto___20689);
var G__20693 = (0);
seq__20669_20675 = G__20690;
chunk__20670_20676 = G__20691;
count__20671_20677 = G__20692;
i__20672_20678 = G__20693;
continue;
} else {
var vec__20674_20694 = cljs.core.first(seq__20669_20688__$1);
var a_20695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20674_20694,(0),null);
var kv_20696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20674_20694,(1),null);
var comp_QMARK__20697 = cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$2(kv_20696,false);
datascript.db.validate_schema_key(a_20695,cljs.core.cst$kw$db_SLASH_isComponent,cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$1(kv_20696),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__6130__auto__ = comp_QMARK__20697;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv_20696),cljs.core.cst$kw$db$type_SLASH_ref);
} else {
return and__6130__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad attribute specification for "),cljs.core.str(a_20695),cljs.core.str(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$schema_SLASH_validation,cljs.core.cst$kw$attribute,a_20695,cljs.core.cst$kw$key,cljs.core.cst$kw$db_SLASH_isComponent], null));
} else {
}

datascript.db.validate_schema_key(a_20695,cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db_SLASH_unique.cljs$core$IFn$_invoke$arity$1(kv_20696),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$unique_SLASH_identity,null,cljs.core.cst$kw$db$unique_SLASH_value,null], null), null));

datascript.db.validate_schema_key(a_20695,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv_20696),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db$type_SLASH_ref,null], null), null));

datascript.db.validate_schema_key(a_20695,cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1(kv_20696),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$cardinality_SLASH_many,null,cljs.core.cst$kw$db$cardinality_SLASH_one,null], null), null));

var G__20698 = cljs.core.next(seq__20669_20688__$1);
var G__20699 = null;
var G__20700 = (0);
var G__20701 = (0);
seq__20669_20675 = G__20698;
chunk__20670_20676 = G__20699;
count__20671_20677 = G__20700;
i__20672_20678 = G__20701;
continue;
}
} else {
}
}
break;
}

return schema;
});
datascript.db.empty_db = (function datascript$db$empty_db(var_args){
var args20702 = [];
var len__7200__auto___20705 = arguments.length;
var i__7201__auto___20706 = (0);
while(true){
if((i__7201__auto___20706 < len__7200__auto___20705)){
args20702.push((arguments[i__7201__auto___20706]));

var G__20707 = (i__7201__auto___20706 + (1));
i__7201__auto___20706 = G__20707;
continue;
} else {
}
break;
}

var G__20704 = args20702.length;
switch (G__20704) {
case 0:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20702.length)].join('')));

}
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1(datascript.db.default_schema);
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
if(((schema == null)) || (cljs.core.map_QMARK_(schema))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$schema),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$schema))], 0)))].join('')));
}

return datascript.db.map__GT_DB(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$schema,datascript.db.validate_schema(schema),cljs.core.cst$kw$eavt,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_eavt),cljs.core.cst$kw$aevt,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_aevt),cljs.core.cst$kw$avet,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_avet),cljs.core.cst$kw$max_DASH_eid,(0),cljs.core.cst$kw$max_DASH_tx,datascript.db.tx0,cljs.core.cst$kw$rschema,datascript.db.rschema(schema)], null));
});

datascript.db.empty_db.cljs$lang$maxFixedArity = 1;
datascript.db.init_db = (function datascript$db$init_db(var_args){
var args20709 = [];
var len__7200__auto___20712 = arguments.length;
var i__7201__auto___20713 = (0);
while(true){
if((i__7201__auto___20713 < len__7200__auto___20712)){
args20709.push((arguments[i__7201__auto___20713]));

var G__20714 = (i__7201__auto___20713 + (1));
i__7201__auto___20713 = G__20714;
continue;
} else {
}
break;
}

var G__20711 = args20709.length;
switch (G__20711) {
case 1:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20709.length)].join('')));

}
});

datascript.db.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2(datoms,datascript.db.default_schema);
});

datascript.db.init_db.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
if(cljs.core.empty_QMARK_(datoms)){
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1(schema);
} else {
var _ = datascript.db.validate_schema(schema);
var rschema = datascript.db.rschema(schema);
var indexed = cljs.core.cst$kw$db_SLASH_index.cljs$core$IFn$_invoke$arity$1(rschema);
var ds_arr = (datascript.arrays.into_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.into_array.cljs$core$IFn$_invoke$arity$1(datoms) : datascript.arrays.into_array.call(null,datoms));
var eavt = datascript.btset._btset_from_sorted_arr(ds_arr.sort(datascript.db.cmp_datoms_eavt_quick),datascript.db.cmp_datoms_eavt);
var aevt = datascript.btset._btset_from_sorted_arr(ds_arr.sort(datascript.db.cmp_datoms_aevt_quick),datascript.db.cmp_datoms_aevt);
var avet_datoms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_,rschema,indexed,ds_arr,eavt,aevt){
return (function (arr,d){
if(cljs.core.contains_QMARK_(indexed,d.a)){
arr.push(d);
} else {
}

return arr;
});})(_,rschema,indexed,ds_arr,eavt,aevt))
,[],datoms).sort(datascript.db.cmp_datoms_avet_quick);
var avet = datascript.btset._btset_from_sorted_arr(avet_datoms,datascript.db.cmp_datoms_avet);
var max_eid = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core._rseq(eavt)));
var max_tx = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (_,rschema,indexed,ds_arr,eavt,aevt,avet_datoms,avet,max_eid){
return (function (d){
return d.tx;
});})(_,rschema,indexed,ds_arr,eavt,aevt,avet_datoms,avet,max_eid))
),cljs.core.max,datascript.db.tx0,eavt);
return datascript.db.map__GT_DB(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$schema,schema,cljs.core.cst$kw$eavt,eavt,cljs.core.cst$kw$aevt,aevt,cljs.core.cst$kw$avet,avet,cljs.core.cst$kw$max_DASH_eid,max_eid,cljs.core.cst$kw$max_DASH_tx,max_tx,cljs.core.cst$kw$rschema,rschema], null));
}
});

datascript.db.init_db.cljs$lang$maxFixedArity = 2;
datascript.db.equiv_db_index = (function datascript$db$equiv_db_index(x,y){
var and__6130__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y));
if(and__6130__auto__){
var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys))){
var G__20716 = cljs.core.next(xs);
var G__20717 = cljs.core.next(ys);
xs = G__20716;
ys = G__20717;
continue;
} else {
return false;

}
}
break;
}
} else {
return and__6130__auto__;
}
});
datascript.db.hash_db = (function datascript$db$hash_db(db){
var or__6142__auto__ = db.__hash;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return db.__hash = cljs.core.hash_ordered_coll(datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));
}
});
datascript.db.hash_fdb = (function datascript$db$hash_fdb(db){
var or__6142__auto__ = db.__hash;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return db.__hash = cljs.core.hash_ordered_coll(datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));
}
});
datascript.db.equiv_db = (function datascript$db$equiv_db(db,other){
var and__6130__auto__ = ((other instanceof datascript.db.DB)) || ((other instanceof datascript.db.FilteredDB));
if(and__6130__auto__){
var and__6130__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(datascript.db._schema(db),datascript.db._schema(other));
if(and__6130__auto____$1){
return datascript.db.equiv_db_index(datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY),datascript.db._datoms(other,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
});
datascript.db.pr_db = (function datascript$db$pr_db(db,w,opts){
cljs.core._write(w,"#datascript/DB {");

cljs.core._write(w,":schema ");

cljs.core.pr_writer(datascript.db._schema(db),w,opts);

cljs.core._write(w,", :datoms ");

cljs.core.pr_sequential_writer(w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer(w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
}),"["," ","]",opts,datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));

return cljs.core._write(w,"}");
});
datascript.db.db_from_reader = (function datascript$db$db_from_reader(p__20718){
var map__20723 = p__20718;
var map__20723__$1 = ((((!((map__20723 == null)))?((((map__20723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20723):map__20723);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20723__$1,cljs.core.cst$kw$schema);
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20723__$1,cljs.core.cst$kw$datoms);
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__20723,map__20723__$1,schema,datoms){
return (function (p__20725){
var vec__20726 = p__20725;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20726,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20726,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20726,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20726,(3),null);
return (new datascript.db.Datom(e,a,v,tx,true));
});})(map__20723,map__20723__$1,schema,datoms))
,datoms),schema);
});


datascript.db.resolve_datom = (function datascript$db$resolve_datom(db,e,a,v,t){
if(cljs.core.truth_(a)){
var G__20729_20731 = a;
var G__20730_20732 = cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,t),v),a),e),cljs.core.cst$sym$db),cljs.core.cst$sym$resolve_DASH_datom);
(datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2 ? datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2(G__20729_20731,G__20730_20732) : datascript.db.validate_attr.call(null,G__20729_20731,G__20730_20732));
} else {
}

return (new datascript.db.Datom((datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2(db,e) : datascript.db.entid_some.call(null,db,e)),a,(cljs.core.truth_((function (){var and__6130__auto__ = cljs.core.some_QMARK_(v);
if(and__6130__auto__){
return (datascript.db.ref_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.ref_QMARK_.cljs$core$IFn$_invoke$arity$2(db,a) : datascript.db.ref_QMARK_.call(null,db,a));
} else {
return and__6130__auto__;
}
})())?(datascript.db.entid_strict.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_strict.cljs$core$IFn$_invoke$arity$2(db,v) : datascript.db.entid_strict.call(null,db,v)):v),(datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2(db,t) : datascript.db.entid_some.call(null,db,t)),null));
});
datascript.db.components__GT_pattern = (function datascript$db$components__GT_pattern(db,index,p__20733){
var vec__20736 = p__20733;
var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20736,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20736,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20736,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20736,(3),null);
var G__20737 = (((index instanceof cljs.core.Keyword))?index.fqn:null);
switch (G__20737) {
case "eavt":
return datascript.db.resolve_datom(db,c0,c1,c2,c3);

break;
case "aevt":
return datascript.db.resolve_datom(db,c1,c0,c2,c3);

break;
case "avet":
return datascript.db.resolve_datom(db,c2,c0,c1,c3);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(index)].join('')));

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap,__hash){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6756__auto__,k__6757__auto__){
var self__ = this;
var this__6756__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6756__auto____$1,k__6757__auto__,null);
});

datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6758__auto__,k20740,else__6759__auto__){
var self__ = this;
var this__6758__auto____$1 = this;
var G__20742 = (((k20740 instanceof cljs.core.Keyword))?k20740.fqn:null);
switch (G__20742) {
case "db-before":
return self__.db_before;

break;
case "db-after":
return self__.db_after;

break;
case "tx-data":
return self__.tx_data;

break;
case "tempids":
return self__.tempids;

break;
case "tx-meta":
return self__.tx_meta;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20740,else__6759__auto__);

}
});

datascript.db.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6770__auto__,writer__6771__auto__,opts__6772__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
var pr_pair__6773__auto__ = ((function (this__6770__auto____$1){
return (function (keyval__6774__auto__){
return cljs.core.pr_sequential_writer(writer__6771__auto__,cljs.core.pr_writer,""," ","",opts__6772__auto__,keyval__6774__auto__);
});})(this__6770__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6771__auto__,pr_pair__6773__auto__,"#datascript.db.TxReport{",", ","}",opts__6772__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$db_DASH_before,self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$db_DASH_after,self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tx_DASH_data,self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tempids,self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tx_DASH_meta,self__.tx_meta],null))], null),self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IIterable$ = true;

datascript.db.TxReport.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20739){
var self__ = this;
var G__20739__$1 = this;
return (new cljs.core.RecordIter((0),G__20739__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_before,cljs.core.cst$kw$db_DASH_after,cljs.core.cst$kw$tx_DASH_data,cljs.core.cst$kw$tempids,cljs.core.cst$kw$tx_DASH_meta], null),cljs.core._iterator(self__.__extmap)));
});

datascript.db.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6754__auto__){
var self__ = this;
var this__6754__auto____$1 = this;
return self__.__meta;
});

datascript.db.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6750__auto__){
var self__ = this;
var this__6750__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6760__auto__){
var self__ = this;
var this__6760__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6751__auto__){
var self__ = this;
var this__6751__auto____$1 = this;
var h__6577__auto__ = self__.__hash;
if(!((h__6577__auto__ == null))){
return h__6577__auto__;
} else {
var h__6577__auto____$1 = cljs.core.hash_imap(this__6751__auto____$1);
self__.__hash = h__6577__auto____$1;

return h__6577__auto____$1;
}
});

datascript.db.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6752__auto__,other__6753__auto__){
var self__ = this;
var this__6752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6130__auto__ = other__6753__auto__;
if(cljs.core.truth_(and__6130__auto__)){
var and__6130__auto____$1 = (this__6752__auto____$1.constructor === other__6753__auto__.constructor);
if(and__6130__auto____$1){
return cljs.core.equiv_map(this__6752__auto____$1,other__6753__auto__);
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.db.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6765__auto__,k__6766__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tempids,null,cljs.core.cst$kw$db_DASH_after,null,cljs.core.cst$kw$db_DASH_before,null,cljs.core.cst$kw$tx_DASH_data,null,cljs.core.cst$kw$tx_DASH_meta,null], null), null),k__6766__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6765__auto____$1),self__.__meta),k__6766__auto__);
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6766__auto__)),null));
}
});

datascript.db.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6763__auto__,k__6764__auto__,G__20739){
var self__ = this;
var this__6763__auto____$1 = this;
var pred__20743 = cljs.core.keyword_identical_QMARK_;
var expr__20744 = k__6764__auto__;
if(cljs.core.truth_((pred__20743.cljs$core$IFn$_invoke$arity$2 ? pred__20743.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_DASH_before,expr__20744) : pred__20743.call(null,cljs.core.cst$kw$db_DASH_before,expr__20744)))){
return (new datascript.db.TxReport(G__20739,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20743.cljs$core$IFn$_invoke$arity$2 ? pred__20743.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_DASH_after,expr__20744) : pred__20743.call(null,cljs.core.cst$kw$db_DASH_after,expr__20744)))){
return (new datascript.db.TxReport(self__.db_before,G__20739,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20743.cljs$core$IFn$_invoke$arity$2 ? pred__20743.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tx_DASH_data,expr__20744) : pred__20743.call(null,cljs.core.cst$kw$tx_DASH_data,expr__20744)))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,G__20739,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20743.cljs$core$IFn$_invoke$arity$2 ? pred__20743.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids,expr__20744) : pred__20743.call(null,cljs.core.cst$kw$tempids,expr__20744)))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__20739,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20743.cljs$core$IFn$_invoke$arity$2 ? pred__20743.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tx_DASH_meta,expr__20744) : pred__20743.call(null,cljs.core.cst$kw$tx_DASH_meta,expr__20744)))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__20739,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6764__auto__,G__20739),null));
}
}
}
}
}
});

datascript.db.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$db_DASH_before,self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$db_DASH_after,self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tx_DASH_data,self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tempids,self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tx_DASH_meta,self__.tx_meta],null))], null),self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6755__auto__,G__20739){
var self__ = this;
var this__6755__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__20739,self__.__extmap,self__.__hash));
});

datascript.db.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6761__auto__,entry__6762__auto__){
var self__ = this;
var this__6761__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6762__auto__)){
return cljs.core._assoc(this__6761__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6762__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6762__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6761__auto____$1,entry__6762__auto__);
}
});

datascript.db.TxReport.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db_DASH_before,cljs.core.cst$sym$db_DASH_after,cljs.core.cst$sym$tx_DASH_data,cljs.core.cst$sym$tempids,cljs.core.cst$sym$tx_DASH_meta], null);
});

datascript.db.TxReport.cljs$lang$type = true;

datascript.db.TxReport.cljs$lang$ctorPrSeq = (function (this__6790__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.db/TxReport");
});

datascript.db.TxReport.cljs$lang$ctorPrWriter = (function (this__6790__auto__,writer__6791__auto__){
return cljs.core._write(writer__6791__auto__,"datascript.db/TxReport");
});

datascript.db.__GT_TxReport = (function datascript$db$__GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){
return (new datascript.db.TxReport(db_before,db_after,tx_data,tempids,tx_meta,null,null,null));
});

datascript.db.map__GT_TxReport = (function datascript$db$map__GT_TxReport(G__20741){
return (new datascript.db.TxReport(cljs.core.cst$kw$db_DASH_before.cljs$core$IFn$_invoke$arity$1(G__20741),cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(G__20741),cljs.core.cst$kw$tx_DASH_data.cljs$core$IFn$_invoke$arity$1(G__20741),cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(G__20741),cljs.core.cst$kw$tx_DASH_meta.cljs$core$IFn$_invoke$arity$1(G__20741),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20741,cljs.core.cst$kw$db_DASH_before,cljs.core.array_seq([cljs.core.cst$kw$db_DASH_after,cljs.core.cst$kw$tx_DASH_data,cljs.core.cst$kw$tempids,cljs.core.cst$kw$tx_DASH_meta], 0)),null));
});

datascript.db.is_attr_QMARK_ = (function datascript$db$is_attr_QMARK_(db,attr,property){
return cljs.core.contains_QMARK_(datascript.db._attrs_by(db,property),attr);
});
datascript.db.multival_QMARK_ = (function datascript$db$multival_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db$cardinality_SLASH_many);
});
datascript.db.ref_QMARK_ = (function datascript$db$ref_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db$type_SLASH_ref);
});
datascript.db.component_QMARK_ = (function datascript$db$component_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db_SLASH_isComponent);
});
datascript.db.indexing_QMARK_ = (function datascript$db$indexing_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db_SLASH_index);
});
datascript.db.entid = (function datascript$db$entid(db,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(eid),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Lookup ref should contain 2 elements: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$lookup_DASH_ref_SLASH_syntax,cljs.core.cst$kw$entity_DASH_id,eid], null));
} else {
if(!(datascript.db.is_attr_QMARK_(db,cljs.core.first(eid),cljs.core.cst$kw$db$unique_SLASH_identity))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Lookup ref attribute should be marked as :db.unique/identity: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$lookup_DASH_ref_SLASH_unique,cljs.core.cst$kw$entity_DASH_id,eid], null));
} else {
return cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,cljs.core.cst$kw$avet,eid)));

}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Expected number or lookup ref for entity id, got "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$entity_DASH_id_SLASH_syntax,cljs.core.cst$kw$entity_DASH_id,eid], null));

}
}
});
datascript.db.entid_strict = (function datascript$db$entid_strict(db,eid){
var or__6142__auto__ = datascript.db.entid(db,eid);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Nothing found for entity id "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$entity_DASH_id_SLASH_missing,cljs.core.cst$kw$entity_DASH_id,eid], null));
}
});
datascript.db.entid_some = (function datascript$db$entid_some(db,eid){
if(cljs.core.truth_(eid)){
return datascript.db.entid_strict(db,eid);
} else {
return null;
}
});
datascript.db.validate_datom = (function datascript$db$validate_datom(db,datom){
if(cljs.core.truth_((function (){var and__6130__auto__ = datom.added;
if(cljs.core.truth_(and__6130__auto__)){
return datascript.db.is_attr_QMARK_(db,datom.a,cljs.core.cst$kw$db_SLASH_unique);
} else {
return and__6130__auto__;
}
})())){
var temp__4425__auto__ = cljs.core.not_empty(datascript.db._datoms(db,cljs.core.cst$kw$avet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.a,datom.v], null)));
if(cljs.core.truth_(temp__4425__auto__)){
var found = temp__4425__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot add "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datom], 0))),cljs.core.str(" because of unique constraint: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([found], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_unique,cljs.core.cst$kw$attribute,datom.a,cljs.core.cst$kw$datom,datom], null));
} else {
return null;
}
} else {
return null;
}
});
datascript.db.validate_eid = (function datascript$db$validate_eid(eid,at){
if(typeof eid === 'number'){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad entity id "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eid], 0))),cljs.core.str(" at "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([at], 0))),cljs.core.str(", expected number")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$entity_DASH_id,eid,cljs.core.cst$kw$context,at], null));
}
});
datascript.db.validate_attr = (function datascript$db$validate_attr(attr,at){
if(((attr instanceof cljs.core.Keyword)) || (typeof attr === 'string')){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad entity attribute "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr], 0))),cljs.core.str(" at "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([at], 0))),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,attr,cljs.core.cst$kw$context,at], null));
}
});
datascript.db.validate_val = (function datascript$db$validate_val(v,at){
if((v == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot store nil as a value at "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([at], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$value,v,cljs.core.cst$kw$context,at], null));
} else {
return null;
}
});
datascript.db.current_tx = (function datascript$db$current_tx(report){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_before,cljs.core.cst$kw$max_DASH_tx], null)) + (1));
});
datascript.db.next_eid = (function datascript$db$next_eid(db){
return (cljs.core.cst$kw$max_DASH_eid.cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.db.advance_max_eid = (function datascript$db$advance_max_eid(db,eid){
var G__20748 = db;
var G__20748__$1 = ((((eid > cljs.core.cst$kw$max_DASH_eid.cljs$core$IFn$_invoke$arity$1(db))) && ((eid < datascript.db.tx0)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20748,cljs.core.cst$kw$max_DASH_eid,eid):G__20748);
return G__20748__$1;
});
datascript.db.allocate_eid = (function datascript$db$allocate_eid(var_args){
var args20749 = [];
var len__7200__auto___20752 = arguments.length;
var i__7201__auto___20753 = (0);
while(true){
if((i__7201__auto___20753 < len__7200__auto___20752)){
args20749.push((arguments[i__7201__auto___20753]));

var G__20754 = (i__7201__auto___20753 + (1));
i__7201__auto___20753 = G__20754;
continue;
} else {
}
break;
}

var G__20751 = args20749.length;
switch (G__20751) {
case 2:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20749.length)].join('')));

}
});

datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2 = (function (report,eid){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after], null),datascript.db.advance_max_eid,eid);
});

datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3 = (function (report,e,eid){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,e], null),eid),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after], null),datascript.db.advance_max_eid,eid);
});

datascript.db.allocate_eid.cljs$lang$maxFixedArity = 3;
datascript.db.tx_id_QMARK_ = (function datascript$db$tx_id_QMARK_(e){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$db_SLASH_current_DASH_tx)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,":db/current-tx"));
});
datascript.db.with_datom = (function datascript$db$with_datom(db,datom){
datascript.db.validate_datom(db,datom);

var indexing_QMARK_ = datascript.db.indexing_QMARK_(db,datom.a);
if(cljs.core.truth_(datom.added)){
var G__20758 = db;
var G__20758__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__20758,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eavt], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_eavt_quick)
;
var G__20758__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__20758__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aevt], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_aevt_quick)
;
var G__20758__$3 = ((indexing_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__20758__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$avet], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_avet_quick):G__20758__$2);
var G__20758__$4 = datascript.db.advance_max_eid(G__20758__$3,datom.e)
;
return G__20758__$4;
} else {
var removing = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));
var G__20759 = db;
var G__20759__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__20759,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eavt], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_eavt_quick)
;
var G__20759__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__20759__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aevt], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_aevt_quick)
;
var G__20759__$3 = ((indexing_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__20759__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$avet], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_avet_quick):G__20759__$2);
return G__20759__$3;
}
});
datascript.db.transact_report = (function datascript$db$transact_report(report,datom){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after], null),datascript.db.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tx_DASH_data], null),cljs.core.conj,datom);
});
datascript.db.reverse_ref_QMARK_ = (function datascript$db$reverse_ref_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.name(attr),(0)));
} else {
if(typeof attr === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad attribute type: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr], 0))),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,attr], null));

}
}
});
datascript.db.reverse_ref = (function datascript$db$reverse_ref(attr){
if((attr instanceof cljs.core.Keyword)){
if(datascript.db.reverse_ref_QMARK_(attr)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(attr),(1)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),[cljs.core.str("_"),cljs.core.str(cljs.core.name(attr))].join(''));
}
} else {
if(typeof attr === 'string'){
var vec__20761 = cljs.core.re_matches(/(?:([^\/]+)\/)?([^\/]+)/,attr);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20761,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20761,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20761,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(name,(0)))){
if(cljs.core.truth_(ns)){
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1)))].join('');
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1));
}
} else {
if(cljs.core.truth_(ns)){
return [cljs.core.str(ns),cljs.core.str("/_"),cljs.core.str(name)].join('');
} else {
return [cljs.core.str("_"),cljs.core.str(name)].join('');
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad attribute type: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr], 0))),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,attr], null));

}
}
});
datascript.db.resolve_upsert = (function datascript$db$resolve_upsert(db,entity){
var temp__4423__auto__ = cljs.core.not_empty(datascript.db._attrs_by(db,cljs.core.cst$kw$db$unique_SLASH_identity));
if(cljs.core.truth_(temp__4423__auto__)){
var idents = temp__4423__auto__;
return cljs.core.reduce_kv(((function (idents,temp__4423__auto__){
return (function (ent,a,v){
var temp__4423__auto____$1 = cljs.core.first(datascript.db._datoms(db,cljs.core.cst$kw$avet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
if(cljs.core.truth_(temp__4423__auto____$1)){
var datom = temp__4423__auto____$1;
var old_eid = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(ent);
var new_eid = datom.e;
if((old_eid == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ent,a),cljs.core.cst$kw$db_SLASH_id,new_eid);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_eid,new_eid)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ent,a);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot resolve upsert for "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entity], 0))),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$db_SLASH_id,old_eid,a,v], true, false)], 0))),cljs.core.str(" conflicts with existing "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datom], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_upsert,cljs.core.cst$kw$attribute,a,cljs.core.cst$kw$entity,entity,cljs.core.cst$kw$datom,datom], null));

}
}
} else {
return ent;
}
});})(idents,temp__4423__auto__))
,entity,cljs.core.select_keys(entity,idents));
} else {
return entity;
}
});
datascript.db.maybe_wrap_multival = (function datascript$db$maybe_wrap_multival(db,a,vs){
if(!((datascript.db.reverse_ref_QMARK_(a)) || (datascript.db.multival_QMARK_(db,a)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if(cljs.core.not((function (){var or__6142__auto__ = (datascript.arrays.array_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.array_QMARK_.cljs$core$IFn$_invoke$arity$1(vs) : datascript.arrays.array_QMARK_.call(null,vs));
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return (cljs.core.coll_QMARK_(vs)) && (!(cljs.core.map_QMARK_(vs)));
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vs),(2))) && (datascript.db.is_attr_QMARK_(db,cljs.core.first(vs),cljs.core.cst$kw$db$unique_SLASH_identity))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
return vs;

}
}
}
});
datascript.db.explode = (function datascript$db$explode(db,entity){
var eid = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(entity);
var iter__6914__auto__ = ((function (eid){
return (function datascript$db$explode_$_iter__20775(s__20776){
return (new cljs.core.LazySeq(null,((function (eid){
return (function (){
var s__20776__$1 = s__20776;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20776__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__20785 = cljs.core.first(xs__4977__auto__);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20785,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20785,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$db_SLASH_id)){
var _ = datascript.db.validate_attr(a,cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$db_SLASH_id,eid,a,vs], true, false));
var reverse_QMARK_ = datascript.db.reverse_ref_QMARK_(a);
var straight_a = ((reverse_QMARK_)?datascript.db.reverse_ref(a):a);
var ___$1 = (((reverse_QMARK_) && (!(datascript.db.ref_QMARK_(db,straight_a))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad attribute "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a], 0))),cljs.core.str(": reverse attribute name requires {:db/valueType :db.type/ref} in schema")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,a,cljs.core.cst$kw$context,cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$db_SLASH_id,eid,a,vs], true, false)], null))})():null);
var iterys__6910__auto__ = ((function (s__20776__$1,_,reverse_QMARK_,straight_a,___$1,vec__20785,a,vs,xs__4977__auto__,temp__4425__auto__,eid){
return (function datascript$db$explode_$_iter__20775_$_iter__20777(s__20778){
return (new cljs.core.LazySeq(null,((function (s__20776__$1,_,reverse_QMARK_,straight_a,___$1,vec__20785,a,vs,xs__4977__auto__,temp__4425__auto__,eid){
return (function (){
var s__20778__$1 = s__20778;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__20778__$1);
if(temp__4425__auto____$1){
var s__20778__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20778__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__20778__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__20780 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__20779 = (0);
while(true){
if((i__20779 < size__6913__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__20779);
cljs.core.chunk_append(b__20780,(((datascript.db.ref_QMARK_(db,straight_a)) && (cljs.core.map_QMARK_(v)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,datascript.db.reverse_ref(a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,eid,straight_a,v], null))));

var G__20788 = (i__20779 + (1));
i__20779 = G__20788;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20780),datascript$db$explode_$_iter__20775_$_iter__20777(cljs.core.chunk_rest(s__20778__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20780),null);
}
} else {
var v = cljs.core.first(s__20778__$2);
return cljs.core.cons((((datascript.db.ref_QMARK_(db,straight_a)) && (cljs.core.map_QMARK_(v)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,datascript.db.reverse_ref(a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,eid,straight_a,v], null))),datascript$db$explode_$_iter__20775_$_iter__20777(cljs.core.rest(s__20778__$2)));
}
} else {
return null;
}
break;
}
});})(s__20776__$1,_,reverse_QMARK_,straight_a,___$1,vec__20785,a,vs,xs__4977__auto__,temp__4425__auto__,eid))
,null,null));
});})(s__20776__$1,_,reverse_QMARK_,straight_a,___$1,vec__20785,a,vs,xs__4977__auto__,temp__4425__auto__,eid))
;
var fs__6911__auto__ = cljs.core.seq(iterys__6910__auto__(datascript.db.maybe_wrap_multival(db,a,vs)));
if(fs__6911__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__6911__auto__,datascript$db$explode_$_iter__20775(cljs.core.rest(s__20776__$1)));
} else {
var G__20789 = cljs.core.rest(s__20776__$1);
s__20776__$1 = G__20789;
continue;
}
} else {
var G__20790 = cljs.core.rest(s__20776__$1);
s__20776__$1 = G__20790;
continue;
}
} else {
return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;
return iter__6914__auto__(entity);
});
datascript.db.transact_add = (function datascript$db$transact_add(report,p__20791){
var vec__20793 = p__20791;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20793,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20793,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20793,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20793,(3),null);
var ent = vec__20793;
datascript.db.validate_attr(a,ent);

datascript.db.validate_val(v,ent);

var tx = datascript.db.current_tx(report);
var db = cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(report);
var e__$1 = datascript.db.entid_strict(db,e);
var v__$1 = ((datascript.db.ref_QMARK_(db,a))?datascript.db.entid_strict(db,v):v);
var datom = (new datascript.db.Datom(e__$1,a,v__$1,tx,true));
if(datascript.db.multival_QMARK_(db,a)){
if(cljs.core.empty_QMARK_(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)))){
return datascript.db.transact_report(report,datom);
} else {
return report;
}
} else {
var temp__4423__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var old_datom = temp__4423__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_datom.v,v__$1)){
return report;
} else {
return datascript.db.transact_report(datascript.db.transact_report(report,(new datascript.db.Datom(e__$1,a,old_datom.v,tx,false))),datom);
}
} else {
return datascript.db.transact_report(report,datom);
}
}
});
datascript.db.transact_retract_datom = (function datascript$db$transact_retract_datom(report,d){
var tx = datascript.db.current_tx(report);
return datascript.db.transact_report(report,(new datascript.db.Datom(d.e,d.a,d.v,tx,false)));
});
datascript.db.retract_components = (function datascript$db$retract_components(db,datoms){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (d){
return datascript.db.component_QMARK_(db,d.a);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$fn_SLASH_retractEntity,d.v], null);
}))),datoms);
});
datascript.db.transact_tx_data = (function datascript$db$transact_tx_data(report,es){
while(true){
if(((es == null)) || (cljs.core.sequential_QMARK_(es))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad transaction data "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([es], 0))),cljs.core.str(", expected sequential collection")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$tx_DASH_data,es], null));
}

var vec__20798 = es;
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20798,(0),null);
var entities = cljs.core.nthnext(vec__20798,(1));
var db = cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(report);
if((entity == null)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,cljs.core.cst$kw$db_SLASH_current_DASH_tx], null),datascript.db.current_tx(report)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after,cljs.core.cst$kw$max_DASH_tx], null),cljs.core.inc);
} else {
if(cljs.core.map_QMARK_(entity)){
var old_eid = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(entity);
var known_eid = datascript.db.entid_some(db,(cljs.core.truth_((datascript.db.neg_number_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.db.neg_number_QMARK_.cljs$core$IFn$_invoke$arity$1(old_eid) : datascript.db.neg_number_QMARK_.call(null,old_eid)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,old_eid], null)):((datascript.db.tx_id_QMARK_(old_eid))?datascript.db.current_tx(report):old_eid
)));
var upserted = datascript.db.resolve_upsert(db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.cst$kw$db_SLASH_id,known_eid));
var new_eid = (function (){var or__6142__auto__ = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(upserted);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return datascript.db.next_eid(db);
}
})();
var new_entity = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(upserted,cljs.core.cst$kw$db_SLASH_id,new_eid);
var new_report = (((old_eid == null))?datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2(report,new_eid):(cljs.core.truth_((datascript.db.neg_number_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.db.neg_number_QMARK_.cljs$core$IFn$_invoke$arity$1(old_eid) : datascript.db.neg_number_QMARK_.call(null,old_eid)))?datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,new_eid):(((typeof old_eid === 'number') && ((old_eid > cljs.core.cst$kw$max_DASH_eid.cljs$core$IFn$_invoke$arity$1(db))))?datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2(report,old_eid):report
)));
var G__20802 = new_report;
var G__20803 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.explode(db,new_entity),entities);
report = G__20802;
es = G__20803;
continue;
} else {
if(cljs.core.sequential_QMARK_(entity)){
var vec__20799 = entity;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20799,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20799,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20799,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20799,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_call)){
var vec__20800 = entity;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20800,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20800,(1),null);
var args = cljs.core.nthnext(vec__20800,(2));
var G__20804 = report;
var G__20805 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,db,args),entities);
report = G__20804;
es = G__20805;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_cas)){
var vec__20801 = entity;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20801,(0),null);
var e__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20801,(1),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20801,(2),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20801,(3),null);
var nv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20801,(4),null);
var e__$2 = datascript.db.entid_strict(db,e__$1);
var ___$1 = datascript.db.validate_attr(a__$1,entity);
var ov__$1 = ((datascript.db.ref_QMARK_(db,a__$1))?datascript.db.entid_strict(db,ov):ov);
var nv__$1 = ((datascript.db.ref_QMARK_(db,a__$1))?datascript.db.entid_strict(db,nv):nv);
var ___$2 = datascript.db.validate_val(nv__$1,entity);
var datoms = datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$2,a__$1], null));
if(datascript.db.multival_QMARK_(db,a__$1)){
if(cljs.core.truth_(cljs.core.some(((function (report,es,vec__20801,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__20799,op,e,a,v,vec__20798,entity,entities,db){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.v,ov__$1);
});})(report,es,vec__20801,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__20799,op,e,a,v,vec__20798,entity,entities,db))
,datoms))){
var G__20806 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,e__$2,a__$1,nv__$1], null));
var G__20807 = entities;
report = G__20806;
es = G__20807;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(":db.fn/cas failed on datom ["),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e__$2], 0))),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a__$1], 0))),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$v,datoms)], 0))),cljs.core.str("], expected "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ov__$1], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_cas,cljs.core.cst$kw$old,datoms,cljs.core.cst$kw$expected,ov__$1,cljs.core.cst$kw$new,nv__$1], null));
}
} else {
var v__$1 = cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,ov__$1)){
var G__20808 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,e__$2,a__$1,nv__$1], null));
var G__20809 = entities;
report = G__20808;
es = G__20809;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(":db.fn/cas failed on datom ["),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e__$2], 0))),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a__$1], 0))),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v__$1], 0))),cljs.core.str("], expected "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ov__$1], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_cas,cljs.core.cst$kw$old,cljs.core.first(datoms),cljs.core.cst$kw$expected,ov__$1,cljs.core.cst$kw$new,nv__$1], null));
}
}
} else {
if(datascript.db.tx_id_QMARK_(e)){
var G__20810 = report;
var G__20811 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.db.current_tx(report),a,v], null)], null),entities);
report = G__20810;
es = G__20811;
continue;
} else {
if((datascript.db.ref_QMARK_(db,a)) && (datascript.db.tx_id_QMARK_(v))){
var G__20812 = report;
var G__20813 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.db.current_tx(report)], null)], null),entities);
report = G__20812;
es = G__20813;
continue;
} else {
if(cljs.core.truth_((datascript.db.neg_number_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.db.neg_number_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : datascript.db.neg_number_QMARK_.call(null,e)))){
var temp__4423__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,e], null));
if(cljs.core.truth_(temp__4423__auto__)){
var eid = temp__4423__auto__;
var G__20814 = report;
var G__20815 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null)], null),entities);
report = G__20814;
es = G__20815;
continue;
} else {
var G__20816 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,datascript.db.next_eid(db));
var G__20817 = es;
report = G__20816;
es = G__20817;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__6130__auto__ = datascript.db.ref_QMARK_(db,a);
if(and__6130__auto__){
return (datascript.db.neg_number_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.db.neg_number_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : datascript.db.neg_number_QMARK_.call(null,v));
} else {
return and__6130__auto__;
}
})())){
var temp__4423__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,v], null));
if(cljs.core.truth_(temp__4423__auto__)){
var vid = temp__4423__auto__;
var G__20818 = report;
var G__20819 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null)], null),entities);
report = G__20818;
es = G__20819;
continue;
} else {
var G__20820 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,datascript.db.next_eid(db));
var G__20821 = es;
report = G__20820;
es = G__20821;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db_SLASH_add)){
var G__20822 = datascript.db.transact_add(report,entity);
var G__20823 = entities;
report = G__20822;
es = G__20823;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db_SLASH_retract)){
var e__$1 = datascript.db.entid_strict(db,e);
var v__$1 = ((datascript.db.ref_QMARK_(db,a))?datascript.db.entid_strict(db,v):v);
datascript.db.validate_attr(a,entity);

datascript.db.validate_val(v__$1,entity);

var temp__4423__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var old_datom = temp__4423__auto__;
var G__20824 = datascript.db.transact_retract_datom(report,old_datom);
var G__20825 = entities;
report = G__20824;
es = G__20825;
continue;
} else {
var G__20826 = report;
var G__20827 = entities;
report = G__20826;
es = G__20827;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_retractAttribute)){
var e__$1 = datascript.db.entid_strict(db,e);
datascript.db.validate_attr(a,entity);

var datoms = datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null));
var G__20828 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.db.transact_retract_datom,report,datoms);
var G__20829 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.retract_components(db,datoms),entities);
report = G__20828;
es = G__20829;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_retractEntity)){
var e__$1 = datascript.db.entid_strict(db,e);
var e_datoms = datascript.db._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1], null));
var v_datoms = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (report,es,e__$1,e_datoms,vec__20799,op,e,a,v,vec__20798,entity,entities,db){
return (function (a__$1){
return datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e__$1], null));
});})(report,es,e__$1,e_datoms,vec__20799,op,e,a,v,vec__20798,entity,entities,db))
,cljs.core.array_seq([datascript.db._attrs_by(db,cljs.core.cst$kw$db$type_SLASH_ref)], 0));
var G__20830 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.db.transact_retract_datom,report,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(e_datoms,v_datoms));
var G__20831 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.retract_components(db,e_datoms),entities);
report = G__20830;
es = G__20831;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Unknown operation at "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entity], 0))),cljs.core.str(", expected :db/add, :db/retract, :db.fn/call, :db.fn/retractAttribute or :db.fn/retractEntity")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$operation,op,cljs.core.cst$kw$tx_DASH_data,entity], null));

}
}
}
}
}
}
}
}
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad entity type at "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entity], 0))),cljs.core.str(", expected map or vector")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$tx_DASH_data,entity], null));

}
}
}
break;
}
});
