// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('datascript.db');




datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if((typeof eid === 'number') || (cljs.core.sequential_QMARK_(eid))){
return datascript.db.entid(db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$db_SLASH_db_QMARK_,cljs.core.cst$sym$db)], 0)))].join('')));
}

var temp__4425__auto__ = datascript.impl.entity.entid(db,eid);
if(cljs.core.truth_(temp__4425__auto__)){
var e = temp__4425__auto__;
var G__21699 = db;
var G__21700 = e;
var G__21701 = cljs.core.volatile_BANG_(false);
var G__21702 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return (datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4 ? datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4(G__21699,G__21700,G__21701,G__21702) : datascript.impl.entity.__GT_Entity.call(null,G__21699,G__21700,G__21701,G__21702));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_(db,a)){
if(datascript.db.ref_QMARK_(db,a)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21703_SHARP_,p2__21704_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21703_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__21704_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21705_SHARP_,p2__21706_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21705_SHARP_,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__21706_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.db.ref_QMARK_(db,a)){
return datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms));
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__4423__auto__ = cljs.core.not_empty(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var datoms = temp__4423__auto__;
if(datascript.db.component_QMARK_(db,attr)){
return datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (datoms,temp__4423__auto__){
return (function (p1__21707_SHARP_,p2__21708_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21707_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(p2__21708_SHARP_)));
});})(datoms,temp__4423__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array(val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(e) : datascript.impl.entity.touch.call(null,e));

var iter__6914__auto__ = (function datascript$impl$entity$js_seq_$_iter__21720(s__21721){
return (new cljs.core.LazySeq(null,(function (){
var s__21721__$1 = s__21721;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__21721__$1);
if(temp__4425__auto__){
var s__21721__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21721__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__21721__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__21723 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__21722 = (0);
while(true){
if((i__21722 < size__6913__auto__)){
var vec__21728 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__21722);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21728,(1),null);
cljs.core.chunk_append(b__21723,((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__21731 = (i__21722 + (1));
i__21722 = G__21731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21723),datascript$impl$entity$js_seq_$_iter__21720(cljs.core.chunk_rest(s__21721__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21723),null);
}
} else {
var vec__21729 = cljs.core.first(s__21721__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21729,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21729,(1),null);
return cljs.core.cons(((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__21720(cljs.core.rest(s__21721__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6914__auto__((function (){var G__21730 = e.cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21730) : cljs.core.deref.call(null,G__21730));
})());
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {datascript.impl.entity.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__21746 = null;
var G__21746__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__21733 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__21734 = null;
var count__21735 = (0);
var i__21736 = (0);
while(true){
if((i__21736 < count__21735)){
var vec__21737 = chunk__21734.cljs$core$IIndexed$_nth$arity$2(null,i__21736);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));

var G__21747 = seq__21733;
var G__21748 = chunk__21734;
var G__21749 = count__21735;
var G__21750 = (i__21736 + (1));
seq__21733 = G__21747;
chunk__21734 = G__21748;
count__21735 = G__21749;
i__21736 = G__21750;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__21733);
if(temp__4425__auto__){
var seq__21733__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21733__$1)){
var c__6945__auto__ = cljs.core.chunk_first(seq__21733__$1);
var G__21751 = cljs.core.chunk_rest(seq__21733__$1);
var G__21752 = c__6945__auto__;
var G__21753 = cljs.core.count(c__6945__auto__);
var G__21754 = (0);
seq__21733 = G__21751;
chunk__21734 = G__21752;
count__21735 = G__21753;
i__21736 = G__21754;
continue;
} else {
var vec__21738 = cljs.core.first(seq__21733__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21738,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21738,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));

var G__21755 = cljs.core.next(seq__21733__$1);
var G__21756 = null;
var G__21757 = (0);
var G__21758 = (0);
seq__21733 = G__21755;
chunk__21734 = G__21756;
count__21735 = G__21757;
i__21736 = G__21758;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__21746__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__21739 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__21740 = null;
var count__21741 = (0);
var i__21742 = (0);
while(true){
if((i__21742 < count__21741)){
var vec__21743 = chunk__21740.cljs$core$IIndexed$_nth$arity$2(null,i__21742);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21743,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21743,(1),null);
f.call(use_as_this,v,a,this$);

var G__21759 = seq__21739;
var G__21760 = chunk__21740;
var G__21761 = count__21741;
var G__21762 = (i__21742 + (1));
seq__21739 = G__21759;
chunk__21740 = G__21760;
count__21741 = G__21761;
i__21742 = G__21762;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__21739);
if(temp__4425__auto__){
var seq__21739__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21739__$1)){
var c__6945__auto__ = cljs.core.chunk_first(seq__21739__$1);
var G__21763 = cljs.core.chunk_rest(seq__21739__$1);
var G__21764 = c__6945__auto__;
var G__21765 = cljs.core.count(c__6945__auto__);
var G__21766 = (0);
seq__21739 = G__21763;
chunk__21740 = G__21764;
count__21741 = G__21765;
i__21742 = G__21766;
continue;
} else {
var vec__21744 = cljs.core.first(seq__21739__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21744,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21744,(1),null);
f.call(use_as_this,v,a,this$);

var G__21767 = cljs.core.next(seq__21739__$1);
var G__21768 = null;
var G__21769 = (0);
var G__21770 = (0);
seq__21739 = G__21767;
chunk__21740 = G__21768;
count__21741 = G__21769;
i__21742 = G__21770;
continue;
}
} else {
return null;
}
}
break;
}
});
G__21746 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__21746__1.call(this,f);
case 2:
return G__21746__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21746.cljs$core$IFn$_invoke$arity$1 = G__21746__1;
G__21746.cljs$core$IFn$_invoke$arity$2 = G__21746__2;
return G__21746;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id")){
return self__.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,datascript.db.reverse_ref(attr),null));
} else {
var G__21745 = (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,attr) : datascript.impl.entity.lookup_entity.call(null,this$,attr));
var G__21745__$1 = ((datascript.db.multival_QMARK_(self__.db,attr))?datascript.impl.entity.multival__GT_js(G__21745):G__21745);
return G__21745__$1;
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.keys(this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator(datascript.impl.entity.js_seq(this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.keys(this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$,other) : datascript.impl.entity.equiv_entity.call(null,this$,other));
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$__$1,o) : datascript.impl.entity.equiv_entity.call(null,this$__$1,o));
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.cache) : cljs.core.deref.call(null,self__.cache)));
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.cache) : cljs.core.deref.call(null,self__.cache)));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,null) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,not_found) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found));
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$datascript$impl$entity_SLASH_nf,(datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,k,cljs.core.cst$kw$datascript$impl$entity_SLASH_nf) : datascript.impl.entity.lookup_entity.call(null,this$__$1,k,cljs.core.cst$kw$datascript$impl$entity_SLASH_nf)));
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__21771 = null;
var G__21771__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
});
var G__21771__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
});
G__21771 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21771__2.call(this,self__,k);
case 3:
return G__21771__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21771.cljs$core$IFn$_invoke$arity$2 = G__21771__2;
G__21771.cljs$core$IFn$_invoke$arity$3 = G__21771__3;
return G__21771;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args21732){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21732)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
});

datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.cache) : cljs.core.deref.call(null,self__.cache)),cljs.core.cst$kw$db_SLASH_id,self__.eid),writer,opts);
});

datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,cljs.core.cst$sym$eid,cljs.core.cst$sym$touched,cljs.core.cst$sym$cache], null);
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write(writer__6741__auto__,"datascript.impl.entity/Entity");
});

datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return ((that instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.eid,that.eid));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var args21772 = [];
var len__7200__auto___21779 = arguments.length;
var i__7201__auto___21780 = (0);
while(true){
if((i__7201__auto___21780 < len__7200__auto___21779)){
args21772.push((arguments[i__7201__auto___21780]));

var G__21781 = (i__7201__auto___21780 + (1));
i__7201__auto___21780 = G__21781;
continue;
} else {
}
break;
}

var G__21774 = args21772.length;
switch (G__21774) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21772.length)].join('')));

}
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,attr,null);
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,cljs.core.cst$kw$db_SLASH_id)){
return this$.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity._lookup_backwards(this$.db,this$.eid,datascript.db.reverse_ref(attr),not_found);
} else {
var or__6142__auto__ = (function (){var G__21776 = this$.cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21776) : cljs.core.deref.call(null,G__21776));
})().call(null,attr);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
if(cljs.core.truth_((function (){var G__21777 = this$.touched;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21777) : cljs.core.deref.call(null,G__21777));
})())){
return not_found;
} else {
var temp__4423__auto__ = cljs.core.not_empty(datascript.db._search(this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var datoms = temp__4423__auto__;
var value = datascript.impl.entity.entity_attr(this$.db,attr,datoms);
cljs.core.vreset_BANG_(this$.cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21778 = this$.cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21778) : cljs.core.deref.call(null,G__21778));
})(),attr,value));

return value;
} else {
return not_found;
}
}
}
}
}
});

datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3;
datascript.impl.entity.touch_components = (function datascript$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv((function (acc,a,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,((datascript.db.component_QMARK_(db,a))?((datascript.db.multival_QMARK_(db,a))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.touch,v)):(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(v) : datascript.impl.entity.touch.call(null,v))):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
var a = cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(cljs.core.first(part));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,datascript.impl.entity.entity_attr(db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$a,datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_(e))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$entity_QMARK_,cljs.core.cst$sym$e)], 0)))].join('')));
}

if(cljs.core.truth_((function (){var G__21784 = e.touched;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21784) : cljs.core.deref.call(null,G__21784));
})())){
} else {
var temp__4425__auto___21785 = cljs.core.not_empty(datascript.db._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__4425__auto___21785)){
var datoms_21786 = temp__4425__auto___21785;
cljs.core.vreset_BANG_(e.cache,datascript.impl.entity.touch_components(e.db,datascript.impl.entity.datoms__GT_cache(e.db,datoms_21786)));

cljs.core.vreset_BANG_(e.touched,true);
} else {
}
}

return e;
});
var G__21787_21809 = "datascript.impl.entity.Entity.prototype.get";
var G__21788_21810 = datascript.impl.entity.Entity.prototype.get;
goog.exportSymbol(G__21787_21809,G__21788_21810);

var G__21789_21811 = "datascript.impl.entity.Entity.prototype.has";
var G__21790_21812 = datascript.impl.entity.Entity.prototype.has;
goog.exportSymbol(G__21789_21811,G__21790_21812);

var G__21791_21813 = "datascript.impl.entity.Entity.prototype.forEach";
var G__21792_21814 = datascript.impl.entity.Entity.prototype.forEach;
goog.exportSymbol(G__21791_21813,G__21792_21814);

var G__21793_21815 = "datascript.impl.entity.Entity.prototype.key_set";
var G__21794_21816 = datascript.impl.entity.Entity.prototype.key_set;
goog.exportSymbol(G__21793_21815,G__21794_21816);

var G__21795_21817 = "datascript.impl.entity.Entity.prototype.value_set";
var G__21796_21818 = datascript.impl.entity.Entity.prototype.value_set;
goog.exportSymbol(G__21795_21817,G__21796_21818);

var G__21797_21819 = "datascript.impl.entity.Entity.prototype.entry_set";
var G__21798_21820 = datascript.impl.entity.Entity.prototype.entry_set;
goog.exportSymbol(G__21797_21819,G__21798_21820);

var G__21799_21821 = "datascript.impl.entity.Entity.prototype.keys";
var G__21800_21822 = datascript.impl.entity.Entity.prototype.keys;
goog.exportSymbol(G__21799_21821,G__21800_21822);

var G__21801_21823 = "datascript.impl.entity.Entity.prototype.values";
var G__21802_21824 = datascript.impl.entity.Entity.prototype.values;
goog.exportSymbol(G__21801_21823,G__21802_21824);

var G__21803_21825 = "datascript.impl.entity.Entity.prototype.entries";
var G__21804_21826 = datascript.impl.entity.Entity.prototype.entries;
goog.exportSymbol(G__21803_21825,G__21804_21826);

var G__21805_21827 = "cljs.core.ES6Iterator.prototype.next";
var G__21806_21828 = cljs.core.ES6Iterator.prototype.next;
goog.exportSymbol(G__21805_21827,G__21806_21828);

var G__21807_21829 = "cljs.core.ES6EntriesIterator.prototype.next";
var G__21808_21830 = cljs.core.ES6EntriesIterator.prototype.next;
goog.exportSymbol(G__21807_21829,G__21808_21830);
