// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('datascript.arrays');
goog.require('clojure.set');
goog.require('datascript.pull_parser');
goog.require('datascript.pull_api');
goog.require('clojure.walk');
goog.require('datascript.parser');
goog.require('datascript.db');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('cljs.reader');
datascript.query.lru_cache_size = (100);

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
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6756__auto__,k__6757__auto__){
var self__ = this;
var this__6756__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6756__auto____$1,k__6757__auto__,null);
});

datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6758__auto__,k21834,else__6759__auto__){
var self__ = this;
var this__6758__auto____$1 = this;
var G__21836 = (((k21834 instanceof cljs.core.Keyword))?k21834.fqn:null);
switch (G__21836) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21834,else__6759__auto__);

}
});

datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6770__auto__,writer__6771__auto__,opts__6772__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
var pr_pair__6773__auto__ = ((function (this__6770__auto____$1){
return (function (keyval__6774__auto__){
return cljs.core.pr_sequential_writer(writer__6771__auto__,cljs.core.pr_writer,""," ","",opts__6772__auto__,keyval__6774__auto__);
});})(this__6770__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6771__auto__,pr_pair__6773__auto__,"#datascript.query.Context{",", ","}",opts__6772__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rels,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rules,self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IIterable$ = true;

datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21833){
var self__ = this;
var G__21833__$1 = this;
return (new cljs.core.RecordIter((0),G__21833__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels,cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], null),cljs.core._iterator(self__.__extmap)));
});

datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6754__auto__){
var self__ = this;
var this__6754__auto____$1 = this;
return self__.__meta;
});

datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6750__auto__){
var self__ = this;
var this__6750__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6760__auto__){
var self__ = this;
var this__6760__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6751__auto__){
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

datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6752__auto__,other__6753__auto__){
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

datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6765__auto__,k__6766__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sources,null,cljs.core.cst$kw$rules,null,cljs.core.cst$kw$rels,null], null), null),k__6766__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6765__auto____$1),self__.__meta),k__6766__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6766__auto__)),null));
}
});

datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6763__auto__,k__6764__auto__,G__21833){
var self__ = this;
var this__6763__auto____$1 = this;
var pred__21837 = cljs.core.keyword_identical_QMARK_;
var expr__21838 = k__6764__auto__;
if(cljs.core.truth_((pred__21837.cljs$core$IFn$_invoke$arity$2 ? pred__21837.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rels,expr__21838) : pred__21837.call(null,cljs.core.cst$kw$rels,expr__21838)))){
return (new datascript.query.Context(G__21833,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21837.cljs$core$IFn$_invoke$arity$2 ? pred__21837.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sources,expr__21838) : pred__21837.call(null,cljs.core.cst$kw$sources,expr__21838)))){
return (new datascript.query.Context(self__.rels,G__21833,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21837.cljs$core$IFn$_invoke$arity$2 ? pred__21837.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rules,expr__21838) : pred__21837.call(null,cljs.core.cst$kw$rules,expr__21838)))){
return (new datascript.query.Context(self__.rels,self__.sources,G__21833,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6764__auto__,G__21833),null));
}
}
}
});

datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rels,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rules,self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6755__auto__,G__21833){
var self__ = this;
var this__6755__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__21833,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6761__auto__,entry__6762__auto__){
var self__ = this;
var this__6761__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6762__auto__)){
return cljs.core._assoc(this__6761__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6762__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6762__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6761__auto____$1,entry__6762__auto__);
}
});

datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rels,cljs.core.cst$sym$sources,cljs.core.cst$sym$rules], null);
});

datascript.query.Context.cljs$lang$type = true;

datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__6790__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Context");
});

datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__6790__auto__,writer__6791__auto__){
return cljs.core._write(writer__6791__auto__,"datascript.query/Context");
});

datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__21835){
return (new datascript.query.Context(cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(G__21835),cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(G__21835),cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(G__21835),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21835,cljs.core.cst$kw$rels,cljs.core.array_seq([cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], 0)),null));
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
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6756__auto__,k__6757__auto__){
var self__ = this;
var this__6756__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6756__auto____$1,k__6757__auto__,null);
});

datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6758__auto__,k21842,else__6759__auto__){
var self__ = this;
var this__6758__auto____$1 = this;
var G__21844 = (((k21842 instanceof cljs.core.Keyword))?k21842.fqn:null);
switch (G__21844) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21842,else__6759__auto__);

}
});

datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6770__auto__,writer__6771__auto__,opts__6772__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
var pr_pair__6773__auto__ = ((function (this__6770__auto____$1){
return (function (keyval__6774__auto__){
return cljs.core.pr_sequential_writer(writer__6771__auto__,cljs.core.pr_writer,""," ","",opts__6772__auto__,keyval__6774__auto__);
});})(this__6770__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6771__auto__,pr_pair__6773__auto__,"#datascript.query.Relation{",", ","}",opts__6772__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tuples,self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IIterable$ = true;

datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21841){
var self__ = this;
var G__21841__$1 = this;
return (new cljs.core.RecordIter((0),G__21841__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$tuples], null),cljs.core._iterator(self__.__extmap)));
});

datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6754__auto__){
var self__ = this;
var this__6754__auto____$1 = this;
return self__.__meta;
});

datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6750__auto__){
var self__ = this;
var this__6750__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6760__auto__){
var self__ = this;
var this__6760__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6751__auto__){
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

datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6752__auto__,other__6753__auto__){
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

datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6765__auto__,k__6766__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tuples,null,cljs.core.cst$kw$attrs,null], null), null),k__6766__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6765__auto____$1),self__.__meta),k__6766__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6766__auto__)),null));
}
});

datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6763__auto__,k__6764__auto__,G__21841){
var self__ = this;
var this__6763__auto____$1 = this;
var pred__21845 = cljs.core.keyword_identical_QMARK_;
var expr__21846 = k__6764__auto__;
if(cljs.core.truth_((pred__21845.cljs$core$IFn$_invoke$arity$2 ? pred__21845.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs,expr__21846) : pred__21845.call(null,cljs.core.cst$kw$attrs,expr__21846)))){
return (new datascript.query.Relation(G__21841,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21845.cljs$core$IFn$_invoke$arity$2 ? pred__21845.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuples,expr__21846) : pred__21845.call(null,cljs.core.cst$kw$tuples,expr__21846)))){
return (new datascript.query.Relation(self__.attrs,G__21841,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6764__auto__,G__21841),null));
}
}
});

datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tuples,self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6755__auto__,G__21841){
var self__ = this;
var this__6755__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__21841,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6761__auto__,entry__6762__auto__){
var self__ = this;
var this__6761__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6762__auto__)){
return cljs.core._assoc(this__6761__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6762__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6762__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6761__auto____$1,entry__6762__auto__);
}
});

datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attrs,cljs.core.cst$sym$tuples], null);
});

datascript.query.Relation.cljs$lang$type = true;

datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__6790__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Relation");
});

datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__6790__auto__,writer__6791__auto__){
return cljs.core._write(writer__6791__auto__,"datascript.query/Relation");
});

datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__21843){
return (new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(G__21843),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(G__21843),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21843,cljs.core.cst$kw$attrs,cljs.core.array_seq([cljs.core.cst$kw$tuples], 0)),null));
});

datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__7207__auto__ = [];
var len__7200__auto___21850 = arguments.length;
var i__7201__auto___21851 = (0);
while(true){
if((i__7201__auto___21851 < len__7200__auto___21850)){
args__7207__auto__.push((arguments[i__7201__auto___21851]));

var G__21852 = (i__7201__auto___21851 + (1));
i__7201__auto___21851 = G__21852;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((0) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((0)),(0))):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__7208__auto__);
});

datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
});

datascript.query.concatv.cljs$lang$maxFixedArity = (0);

datascript.query.concatv.cljs$lang$applyTo = (function (seq21849){
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21849));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),cljs.core.cst$sym$_STAR_)){
return (cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__21863){
var vec__21864 = p__21863;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21864,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21864,(1),null);
return datascript$query$looks_like_QMARK_(pattern_el,form_el);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form)));
} else {
return (cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__21867){
var vec__21868 = p__21867;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21868,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21868,(1),null);
return datascript$query$looks_like_QMARK_(pattern_el,form_el);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form)));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return ((form instanceof cljs.core.Keyword)) || (typeof form === 'string');
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,cljs.core.cst$sym$_], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = (function (){var G__21870 = (l1 + l2);
return (datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1(G__21870) : datascript.arrays.make_array.call(null,G__21870));
})();
var n__7045__auto___21871 = l1;
var i_21872 = (0);
while(true){
if((i_21872 < n__7045__auto___21871)){
(res[i_21872] = (t1[(idxs1[i_21872])]));

var G__21873 = (i_21872 + (1));
i_21872 = G__21873;
continue;
} else {
}
break;
}

var n__7045__auto___21874 = l2;
var i_21875 = (0);
while(true){
if((i_21875 < n__7045__auto___21874)){
(res[(l1 + i_21875)] = (t2[(idxs2[i_21875])]));

var G__21876 = (i_21875 + (1));
i_21875 = G__21876;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
return (new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(a),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(a),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(b)),null,null,null));
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var args21877 = [];
var len__7200__auto___21880 = arguments.length;
var i__7201__auto___21881 = (0);
while(true){
if((i__7201__auto___21881 < len__7200__auto___21880)){
args21877.push((arguments[i__7201__auto___21881]));

var G__21882 = (i__7201__auto___21881 + (1));
i__7201__auto___21881 = G__21882;
continue;
} else {
}
break;
}

var G__21879 = args21877.length;
switch (G__21879) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21877.length)].join('')));

}
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1((0)) : datascript.arrays.make_array.call(null,(0)))], null),null,null,null));
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
});})(attrs1,attrs2,idxs1,idxs2))
,acc,cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel2));
});})(attrs1,attrs2,idxs1,idxs2))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
});

datascript.query.prod_rel.cljs$lang$maxFixedArity = 2;
datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__7207__auto__ = [];
var len__7200__auto___21885 = arguments.length;
var i__7201__auto___21886 = (0);
while(true){
if((i__7201__auto___21886 < len__7200__auto___21885)){
args__7207__auto__.push((arguments[i__7201__auto___21886]));

var G__21887 = (i__7201__auto___21886 + (1));
i__7201__auto___21886 = G__21887;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((0) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((0)),(0))):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__7208__auto__);
});

datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count(xs);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((l / (2)),xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((l / (2)),xs));
});

datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0);

datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq21884){
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21884));
});
datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
var temp__4423__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var datom = temp__4423__auto__;
return cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(datom);
} else {
return else_val;
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__7207__auto__ = [];
var len__7200__auto___21891 = arguments.length;
var i__7201__auto___21892 = (0);
while(true){
if((i__7201__auto___21892 < len__7200__auto___21891)){
args__7207__auto__.push((arguments[i__7201__auto___21892]));

var G__21893 = (i__7201__auto___21892 + (1));
i__7201__auto___21892 = G__21893;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((2) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((2)),(0))):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7208__auto__);
});

datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,a){
var temp__4425__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__4425__auto__)){
var datom = temp__4425__auto__;
return cljs.core.reduced(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(datom));
} else {
return null;
}
}),null,as);
});

datascript.query._get_some.cljs$lang$maxFixedArity = (2);

datascript.query._get_some.cljs$lang$applyTo = (function (seq21888){
var G__21889 = cljs.core.first(seq21888);
var seq21888__$1 = cljs.core.next(seq21888);
var G__21890 = cljs.core.first(seq21888__$1);
var seq21888__$2 = cljs.core.next(seq21888__$1);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic(G__21889,G__21890,seq21888__$2);
});
datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$true_QMARK_,cljs.core.cst$sym$odd_QMARK_,cljs.core.cst$sym$get_DASH_else,cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$_GT_,cljs.core.cst$sym$get_DASH_some,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$inc,cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$quot,cljs.core.cst$sym$false_QMARK_,cljs.core.cst$sym$identity,cljs.core.cst$sym$_DASH_differ_QMARK_,cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$min,cljs.core.cst$sym$_PLUS_,cljs.core.cst$sym$missing_QMARK_,cljs.core.cst$sym$ground,cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$max,cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$zero_QMARK_,cljs.core.cst$sym$_BANG__EQ_,cljs.core.cst$sym$dec,cljs.core.cst$sym$vector,cljs.core.cst$sym$not_EQ_,cljs.core.cst$sym$str,cljs.core.cst$sym$_LT_,cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$mod,cljs.core.cst$sym$rem,cljs.core.cst$sym$even_QMARK_,cljs.core.cst$sym$neg_QMARK_],[cljs.core.true_QMARK_,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core._GT_,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core._EQ__EQ_,cljs.core.max,cljs.core._STAR_,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.dec,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core._,cljs.core.pos_QMARK_,cljs.core.mod,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.neg_QMARK_]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum(coll) / cljs.core.count(coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(coll);
var size = cljs.core.count(coll);
var med = (size >> (1));
var G__21911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,med);
var G__21911__$1 = ((cljs.core.even_QMARK_(size))?((G__21911 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(med - (1)))) / (2)):G__21911);
return G__21911__$1;
});
var variance = (function datascript$query$variance(coll){
var mean = avg(coll);
var sum__$1 = sum((function (){var iter__6914__auto__ = ((function (mean){
return (function datascript$query$variance_$_iter__21918(s__21919){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__21919__$1 = s__21919;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__21919__$1);
if(temp__4425__auto__){
var s__21919__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21919__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__21919__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__21921 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__21920 = (0);
while(true){
if((i__21920 < size__6913__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__21920);
var delta = (x - mean);
cljs.core.chunk_append(b__21921,(delta * delta));

var G__21926 = (i__21920 + (1));
i__21920 = G__21926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21921),datascript$query$variance_$_iter__21918(cljs.core.chunk_rest(s__21919__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21921),null);
}
} else {
var x = cljs.core.first(s__21919__$2);
var delta = (x - mean);
return cljs.core.cons((delta * delta),datascript$query$variance_$_iter__21918(cljs.core.rest(s__21919__$2)));
}
} else {
return null;
}
break;
}
});})(mean))
,null,null));
});})(mean))
;
return iter__6914__auto__(coll);
})());
return (sum__$1 / cljs.core.count(coll));
});
var stddev = (function datascript$query$stddev(coll){
var G__21925 = variance(coll);
return Math.sqrt(G__21925);
});
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$variance,cljs.core.cst$sym$count,cljs.core.cst$sym$median,cljs.core.cst$sym$sum,cljs.core.cst$sym$min,cljs.core.cst$sym$max,cljs.core.cst$sym$count_DASH_distinct,cljs.core.cst$sym$distinct,cljs.core.cst$sym$avg,cljs.core.cst$sym$stddev,cljs.core.cst$sym$rand,cljs.core.cst$sym$sample],[variance,cljs.core.count,median,sum,(function() {
var G__21927 = null;
var G__21927__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__21927__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.last(acc)) < (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__21927 = function(n,coll){
switch(arguments.length){
case 1:
return G__21927__1.call(this,n);
case 2:
return G__21927__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21927.cljs$core$IFn$_invoke$arity$1 = G__21927__1;
G__21927.cljs$core$IFn$_invoke$arity$2 = G__21927__2;
return G__21927;
})()
,(function() {
var G__21928 = null;
var G__21928__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__21928__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.first(acc)) > (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.next(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__21928 = function(n,coll){
switch(arguments.length){
case 1:
return G__21928__1.call(this,n);
case 2:
return G__21928__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21928.cljs$core$IFn$_invoke$arity$1 = G__21928__1;
G__21928.cljs$core$IFn$_invoke$arity$2 = G__21928__2;
return G__21928;
})()
,(function (coll){
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll));
}),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.distinct),avg,stddev,(function() {
var G__21929 = null;
var G__21929__1 = (function (coll){
return cljs.core.rand_nth(coll);
});
var G__21929__2 = (function (n,coll){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(coll);
})));
});
G__21929 = function(n,coll){
switch(arguments.length){
case 1:
return G__21929__1.call(this,n);
case 2:
return G__21929__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21929.cljs$core$IFn$_invoke$arity$1 = G__21929__1;
G__21929.cljs$core$IFn$_invoke$arity$2 = G__21929__2;
return G__21929;
})()
,(function (n,coll){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string(rules):rules);
return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.bindable_to_seq_QMARK_ = (function datascript$query$bindable_to_seq_QMARK_(x){
var or__6142__auto__ = (datascript.db.seqable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.db.seqable_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : datascript.db.seqable_QMARK_.call(null,x));
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return (datascript.arrays.array_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.array_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : datascript.arrays.array_QMARK_.call(null,x));
}
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((!((binding == null))) && (!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__6797__auto__ = (((binding == null))?null:binding);
var m__6798__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__6798__auto__.call(null,binding,value));
} else {
var m__6798__auto____$1 = (datascript.query.in__GT_rel["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2(binding,value) : m__6798__auto____$1.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
}
});

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = true;

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
});

datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = true;

datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.fromArray([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable,cljs.core.cst$kw$symbol], null)),(0)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
});

datascript.parser.BindColl.prototype.datascript$query$IBinding$ = true;

datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(cljs.core.not(datascript.query.bindable_to_seq_QMARK_(coll))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot bind value "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([coll], 0))),cljs.core.str(" to collection "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding__$1){
return (function (p1__21930_SHARP_){
return datascript.query.in__GT_rel(cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(binding__$1),p1__21930_SHARP_);
});})(binding__$1))
,coll));

}
}
});

datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = true;

datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(cljs.core.not(datascript.query.bindable_to_seq_QMARK_(coll))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot bind value "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([coll], 0))),cljs.core.str(" to tuple "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(binding__$1)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Not enough elements in a collection "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([coll], 0))),cljs.core.str(" to bind tuple "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (binding__$1){
return (function (p1__21931_SHARP_,p2__21932_SHARP_){
return datascript.query.in__GT_rel(p1__21931_SHARP_,p2__21932_SHARP_);
});})(binding__$1))
,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(binding__$1),coll));

}
}
});
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__21933){
var vec__21935 = p__21933;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21935,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21935,(1),null);
if(((binding instanceof datascript.parser.BindScalar)) && ((cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.SrcVar))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sources], null),cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable,cljs.core.cst$kw$symbol], null)),value);
} else {
if(((binding instanceof datascript.parser.BindScalar)) && ((cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.RulesVar))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$rules,datascript.query.parse_rules(value));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));
});
datascript.query._STAR_lookup_attrs_STAR_ = null;
datascript.query._STAR_lookup_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if((!((datascript.query._STAR_lookup_attrs_STAR_ == null))) && (cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr))){
return ((function (idx){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
return datascript.db.entid(datascript.query._STAR_lookup_source_STAR_,eid);
}
});
;})(idx))
} else {
return ((function (idx){
return (function (tuple){
return (tuple[idx]);
});
;})(idx))
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count(getters) === (1))){
return cljs.core.first(getters);
} else {
var getters__$1 = cljs.core.to_array(getters);
return ((function (getters__$1){
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters__$1.map(((function (getters__$1){
return (function (p1__21936_SHARP_){
return (p1__21936_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21936_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__21936_SHARP_.call(null,tuple));
});})(getters__$1))
));
});
;})(getters__$1))
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__4423__auto__ = cljs.core.first(tuples__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var tuple = temp__4423__auto__;
var key = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(tuple) : key_fn.call(null,tuple));
var G__21938 = cljs.core.next(tuples__$1);
var G__21939 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__21938;
hash_table = G__21939;
continue;
} else {
return cljs.core.persistent_BANG_(hash_table);
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples1,tuples2,attrs1,attrs2,common_attrs){
return (function (p1__21940_SHARP_){
return datascript.query.getter_fn(attrs1,p1__21940_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs))
,common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1){
return (function (p1__21941_SHARP_){
return datascript.query.getter_fn(attrs2,p1__21941_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1))
,common_attrs);
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));
var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(common_gtrs1);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn(common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc,tuple2){
var key = (key_fn2.cljs$core$IFn$_invoke$arity$1 ? key_fn2.cljs$core$IFn$_invoke$arity$1(tuple2) : key_fn2.call(null,tuple2));
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if(cljs.core.truth_(temp__4423__auto__)){
var tuples1__$1 = temp__4423__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1__$1,temp__4423__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__4423__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,acc,tuples1__$1);
} else {
return acc;
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21942_SHARP_){
if((p1__21942_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__21942_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_pattern,datoms){
return (function (p__21945){
var vec__21946 = p__21945;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21946,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21946,(1),null);
return datascript.query.free_var_QMARK_(s);
});})(search_pattern,datoms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__6130__auto__ = tuple__$1;
if(cljs.core.truth_(and__6130__auto__)){
return pattern__$1;
} else {
return and__6130__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p))){
var G__21947 = cljs.core.next(tuple__$1);
var G__21948 = cljs.core.next(pattern__$1);
tuple__$1 = G__21947;
pattern__$1 = G__21948;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21949_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__21949_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (p__21952){
var vec__21953 = p__21952;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21953,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21953,(1),null);
return datascript.query.free_var_QMARK_(s);
});})(data))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if(((!((source == null)))?(((false) || (source.datascript$db$ISearch$))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(source,pattern);
} else {
return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4423__auto__ = cljs.core.first(rels__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var rel = temp__4423__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(new_rel__$1),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel))))){
var G__21956 = cljs.core.next(rels__$1);
var G__21957 = datascript.query.hash_join(rel,new_rel__$1);
var G__21958 = acc;
rels__$1 = G__21956;
new_rel__$1 = G__21957;
acc = G__21958;
continue;
} else {
var G__21959 = cljs.core.next(rels__$1);
var G__21960 = new_rel__$1;
var G__21961 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__21959;
new_rel__$1 = G__21960;
acc = G__21961;
continue;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
}
break;
}
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__4425__auto__ = cljs.core.some((function (p1__21962_SHARP_){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(p1__21962_SHARP_),sym)){
return p1__21962_SHARP_;
} else {
return null;
}
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context));
if(cljs.core.truth_(temp__4425__auto__)){
var rel = temp__4425__auto__;
var temp__4425__auto____$1 = cljs.core.first(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel));
if(cljs.core.truth_(temp__4425__auto____$1)){
var tuple = temp__4425__auto____$1;
return (tuple[cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
} else {
return null;
}
} else {
return null;
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return !(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs),cljs.core.set(cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel))))));
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21963_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__21963_SHARP_,attrs);
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),((function (rels,production){
return (function (p1__21964_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__21964_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
return (function (tuple){
var resolved_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21965_SHARP_){
if((p1__21965_SHARP_ instanceof cljs.core.Symbol)){
var or__6142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context),p1__21965_SHARP_);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return (tuple[cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel),p1__21965_SHARP_)]);
}
} else {
return p1__21965_SHARP_;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,resolved_args);
});
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__21970 = clause;
var vec__21971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21970,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21971,(0),null);
var args = cljs.core.nthnext(vec__21971,(1));
var pred = (function (){var or__6142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return datascript.query.context_resolve_val(context,f);
}
})();
var vec__21972 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21972,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21972,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tuples], null),((function (tuple_pred,vec__21970,vec__21971,f,args,pred,vec__21972,context__$1,production){
return (function (p1__21966_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__21966_SHARP_);
});})(tuple_pred,vec__21970,vec__21971,f,args,pred,vec__21972,context__$1,production))
);
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tuples], null),cljs.core.PersistentVector.EMPTY));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__21977 = clause;
var vec__21978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21977,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21978,(0),null);
var args = cljs.core.nthnext(vec__21978,(1));
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21977,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__6142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return datascript.query.context_resolve_val(context,f);
}
})();
var vec__21979 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21979,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21979,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var temp__4423__auto__ = cljs.core.not_empty(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(production));
if(cljs.core.truth_(temp__4423__auto__)){
var tuples = temp__4423__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples,temp__4423__auto__,tuple_fn,vec__21977,vec__21978,f,args,out,binding,fun,vec__21979,context__$1,production){
return (function (p1__21973_SHARP_){
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(p1__21973_SHARP_) : tuple_fn.call(null,p1__21973_SHARP_));
var rel = datascript.query.in__GT_rel(binding,val);
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21973_SHARP_], null),null,null,null)),rel);
});})(tuples,temp__4423__auto__,tuple_fn,vec__21977,vec__21978,f,args,out,binding,fun,vec__21979,context__$1,production))
,tuples));
} else {
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tuples], null),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),cljs.core.conj,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
return (cljs.core.sequential_QMARK_(clause)) && (cljs.core.contains_QMARK_(cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(context),(cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause))));
});
datascript.query.rule_seqid = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__21996 = clause;
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21996,(0),null);
var call_args = cljs.core.nthnext(vec__21996,(1));
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__6914__auto__ = ((function (vec__21996,rule,call_args,seqid,branches){
return (function datascript$query$expand_rule_$_iter__21997(s__21998){
return (new cljs.core.LazySeq(null,((function (vec__21996,rule,call_args,seqid,branches){
return (function (){
var s__21998__$1 = s__21998;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__21998__$1);
if(temp__4425__auto__){
var s__21998__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21998__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__21998__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__22000 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__21999 = (0);
while(true){
if((i__21999 < size__6913__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__21999);
var vec__22007 = branch;
var vec__22008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22007,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22008,(0),null);
var rule_args = cljs.core.nthnext(vec__22008,(1));
var clauses = cljs.core.nthnext(vec__22007,(1));
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__22000,clojure.walk.postwalk(((function (i__21999,vec__22007,vec__22008,_,rule_args,clauses,replacements,branch,c__6912__auto__,size__6913__auto__,b__22000,s__21998__$2,temp__4425__auto__,vec__21996,rule,call_args,seqid,branches){
return (function (p1__21980_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_(p1__21980_SHARP_))){
var or__6142__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__21980_SHARP_) : replacements.call(null,p1__21980_SHARP_));
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.name(p1__21980_SHARP_)),cljs.core.str("__auto__"),cljs.core.str(seqid)].join(''));
}
} else {
return p1__21980_SHARP_;
}
});})(i__21999,vec__22007,vec__22008,_,rule_args,clauses,replacements,branch,c__6912__auto__,size__6913__auto__,b__22000,s__21998__$2,temp__4425__auto__,vec__21996,rule,call_args,seqid,branches))
,clauses));

var G__22011 = (i__21999 + (1));
i__21999 = G__22011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22000),datascript$query$expand_rule_$_iter__21997(cljs.core.chunk_rest(s__21998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22000),null);
}
} else {
var branch = cljs.core.first(s__21998__$2);
var vec__22009 = branch;
var vec__22010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22009,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22010,(0),null);
var rule_args = cljs.core.nthnext(vec__22010,(1));
var clauses = cljs.core.nthnext(vec__22009,(1));
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__22009,vec__22010,_,rule_args,clauses,replacements,branch,s__21998__$2,temp__4425__auto__,vec__21996,rule,call_args,seqid,branches){
return (function (p1__21980_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_(p1__21980_SHARP_))){
var or__6142__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__21980_SHARP_) : replacements.call(null,p1__21980_SHARP_));
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.name(p1__21980_SHARP_)),cljs.core.str("__auto__"),cljs.core.str(seqid)].join(''));
}
} else {
return p1__21980_SHARP_;
}
});})(vec__22009,vec__22010,_,rule_args,clauses,replacements,branch,s__21998__$2,temp__4425__auto__,vec__21996,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__21997(cljs.core.rest(s__21998__$2)));
}
} else {
return null;
}
break;
}
});})(vec__21996,rule,call_args,seqid,branches))
,null,null));
});})(vec__21996,rule,call_args,seqid,branches))
;
return iter__6914__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22014){
var vec__22015 = p__22014;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22015,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22015,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__22027 = rule_clause;
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22027,(0),null);
var call_args = cljs.core.nthnext(vec__22027,(1));
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__6914__auto__ = ((function (vec__22027,rule,call_args,prev_call_args){
return (function datascript$query$rule_gen_guards_$_iter__22028(s__22029){
return (new cljs.core.LazySeq(null,((function (vec__22027,rule,call_args,prev_call_args){
return (function (){
var s__22029__$1 = s__22029;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22029__$1);
if(temp__4425__auto__){
var s__22029__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22029__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__22029__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__22031 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__22030 = (0);
while(true){
if((i__22030 < size__6913__auto__)){
var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__22030);
var vec__22036 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22036,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22036,(1),null);
cljs.core.chunk_append(b__22031,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null));

var G__22038 = (i__22030 + (1));
i__22030 = G__22038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22031),datascript$query$rule_gen_guards_$_iter__22028(cljs.core.chunk_rest(s__22029__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22031),null);
}
} else {
var prev_args = cljs.core.first(s__22029__$2);
var vec__22037 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22037,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22037,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__22028(cljs.core.rest(s__22029__$2)));
}
} else {
return null;
}
break;
}
});})(vec__22027,rule,call_args,prev_call_args))
,null,null));
});})(vec__22027,rule,call_args,prev_call_args))
;
return iter__6914__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = (function (){var G__22041 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22041) : cljs.core.atom.call(null,G__22041));
})();
clojure.walk.postwalk(((function (res){
return (function (p1__22039_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__22039_SHARP_) : pred.call(null,p1__22039_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__22039_SHARP_);
} else {
}

return p1__22039_SHARP_;
});})(res))
,form);

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(res) : cljs.core.deref.call(null,res));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = cljs.core.set(datascript.query.walk_collect(clauses,datascript.query.free_var_QMARK_));
var pred = ((function (bound_vars){
return (function (p__22045){
var vec__22046 = p__22045;
var vec__22047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22046,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22047,(0),null);
var vars = cljs.core.nthnext(vec__22047,(1));
return cljs.core.every_QMARK_(bound_vars,vars);
});})(bound_vars))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;
var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){
return cljs.core.some(((function (final_attrs,final_attrs_map,solve){
return (function (p1__22048_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(p1__22048_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;
var stack = cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$prefix_DASH_context,context,cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$used_DASH_args,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$pending_DASH_guards,cljs.core.PersistentArrayMap.EMPTY], null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__4423__auto__ = cljs.core.first(stack);
if(cljs.core.truth_(temp__4423__auto__)){
var frame = temp__4423__auto__;
var vec__22061 = cljs.core.split_with(((function (stack,rel,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__22049_SHARP_){
return cljs.core.not(datascript.query.rule_QMARK_(context,p1__22049_SHARP_));
});})(stack,rel,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22061,(0),null);
var vec__22062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22061,(1),null);
var rule_clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22062,(0),null);
var next_clauses = cljs.core.nthnext(vec__22062,(1));
if((rule_clause == null)){
var context__$1 = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__22071 = cljs.core.next(stack);
var G__22072 = datascript.query.sum_rel(rel,new_rel);
stack = G__22071;
rel = G__22072;
continue;
} else {
var vec__22063 = rule_clause;
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22063,(0),null);
var call_args = cljs.core.nthnext(vec__22063,(1));
var guards = datascript.query.rule_gen_guards(rule_clause,cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame));
var vec__22064 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prefix_DASH_clauses.cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,cljs.core.cst$kw$pending_DASH_guards.cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22064,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22064,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__22063,rule,call_args,guards,vec__22064,active_gs,pending_gs,vec__22061,clauses,vec__22062,rule_clause,next_clauses,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__22050_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22050_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_DASH_differ_QMARK_)], null));
});})(stack,rel,vec__22063,rule,call_args,guards,vec__22064,active_gs,pending_gs,vec__22061,clauses,vec__22062,rule_clause,next_clauses,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__22073 = cljs.core.next(stack);
var G__22074 = rel;
stack = G__22073;
rel = G__22074;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__22075 = cljs.core.next(stack);
var G__22076 = rel;
stack = G__22075;
rel = G__22076;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__22077 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__6914__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__22063,rule,call_args,guards,vec__22064,active_gs,pending_gs,vec__22061,clauses,vec__22062,rule_clause,next_clauses,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__22065(s__22066){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__22063,rule,call_args,guards,vec__22064,active_gs,pending_gs,vec__22061,clauses,vec__22062,rule_clause,next_clauses,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__22066__$1 = s__22066;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22066__$1);
if(temp__4425__auto__){
var s__22066__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22066__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__22066__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__22068 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__22067 = (0);
while(true){
if((i__22067 < size__6913__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__22067);
cljs.core.chunk_append(b__22068,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null));

var G__22079 = (i__22067 + (1));
i__22067 = G__22079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22068),datascript$query$solve_rule_$_iter__22065(cljs.core.chunk_rest(s__22066__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22068),null);
}
} else {
var branch = cljs.core.first(s__22066__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null),datascript$query$solve_rule_$_iter__22065(cljs.core.rest(s__22066__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__22063,rule,call_args,guards,vec__22064,active_gs,pending_gs,vec__22061,clauses,vec__22062,rule_clause,next_clauses,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__22063,rule,call_args,guards,vec__22064,active_gs,pending_gs,vec__22061,clauses,vec__22062,rule_clause,next_clauses,frame,temp__4423__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__6914__auto__(branches);
})(),cljs.core.next(stack));
var G__22078 = rel;
stack = G__22077;
rel = G__22078;
continue;
}
}
}
} else {
return rel;
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if(((!((source == null)))?(((false) || (source.datascript$db$IDB$))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__22083 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22083,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22083,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22083,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22083,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(e))?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__6130__auto__ = v;
if(cljs.core.truth_(and__6130__auto__)){
var and__6130__auto____$1 = datascript.query.attr_QMARK_(a);
if(cljs.core.truth_(and__6130__auto____$1)){
var and__6130__auto____$2 = datascript.db.ref_QMARK_(source,a);
if(and__6130__auto____$2){
return datascript.query.lookup_ref_QMARK_(v);
} else {
return and__6130__auto____$2;
}
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__22086 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22086,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22086,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22086,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22086,(3),null);
var G__22087 = cljs.core.PersistentHashSet.EMPTY;
var G__22087__$1 = (cljs.core.truth_(datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22087,e):G__22087);
var G__22087__$2 = (cljs.core.truth_(datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22087__$1,tx):G__22087__$1);
var G__22087__$3 = (cljs.core.truth_((function (){var and__6130__auto__ = datascript.query.free_var_QMARK_(v);
if(cljs.core.truth_(and__6130__auto__)){
return (cljs.core.not(datascript.query.free_var_QMARK_(a))) && (datascript.db.ref_QMARK_(source,a));
} else {
return and__6130__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22087__$2,v):G__22087__$2);
return G__22087__$3;
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(context,clause){
var pred__22101 = datascript.query.looks_like_QMARK_;
var expr__22102 = clause;
if(cljs.core.truth_((function (){var G__22104 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null)], null);
var G__22105 = expr__22102;
return (pred__22101.cljs$core$IFn$_invoke$arity$2 ? pred__22101.cljs$core$IFn$_invoke$arity$2(G__22104,G__22105) : pred__22101.call(null,G__22104,G__22105));
})())){
return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__22106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_], null);
var G__22107 = expr__22102;
return (pred__22101.cljs$core$IFn$_invoke$arity$2 ? pred__22101.cljs$core$IFn$_invoke$arity$2(G__22106,G__22107) : pred__22101.call(null,G__22106,G__22107));
})())){
return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__22108 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
var G__22109 = expr__22102;
return (pred__22101.cljs$core$IFn$_invoke$arity$2 ? pred__22101.cljs$core$IFn$_invoke$arity$2(G__22108,G__22109) : pred__22101.call(null,G__22108,G__22109));
})())){
var vec__22110 = datascript.query.normalize_pattern_clause(clause);
var source_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22110,(0),null);
var pattern = cljs.core.nthnext(vec__22110,(1));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context),source_sym);
var pattern__$1 = datascript.query.resolve_pattern_lookup_refs(source,pattern);
var relation = datascript.query.lookup_pattern(source,pattern__$1);
var lookup_source_QMARK_ = ((!((source == null)))?(((false) || (source.datascript$db$IDB$))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source));
var _STAR_lookup_source_STAR_22112 = datascript.query._STAR_lookup_source_STAR_;
var _STAR_lookup_attrs_STAR_22113 = datascript.query._STAR_lookup_attrs_STAR_;
datascript.query._STAR_lookup_source_STAR_ = ((lookup_source_QMARK_)?source:null);

datascript.query._STAR_lookup_attrs_STAR_ = ((lookup_source_QMARK_)?datascript.query.dynamic_lookup_attrs(source,pattern__$1):null);

try{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),datascript.query.collapse_rels,relation);
}finally {datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR_22113;

datascript.query._STAR_lookup_source_STAR_ = _STAR_lookup_source_STAR_22112;
}} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22102)].join('')));
}
}
}
});
datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(cljs.core.truth_(datascript.query.rule_QMARK_(context,clause))){
var vec__22115 = (cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$,clause], null));
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22115,(0),null);
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22115,(1),null);
var source__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sources,source], null));
var rel = datascript.query.solve_rule(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$sources,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$$,source__$1], null)),rule);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),datascript.query.collapse_rels,rel);
} else {
return datascript.query._resolve_clause(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
});
datascript.query._collect = (function datascript$query$_collect(var_args){
var args22117 = [];
var len__7200__auto___22132 = arguments.length;
var i__7201__auto___22133 = (0);
while(true){
if((i__7201__auto___22133 < len__7200__auto___22132)){
args22117.push((arguments[i__7201__auto___22133]));

var G__22134 = (i__7201__auto___22133 + (1));
i__7201__auto___22133 = G__22134;
continue;
} else {
}
break;
}

var G__22119 = args22117.length;
switch (G__22119) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22117.length)].join('')));

}
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22120 = cljs.core.count(symbols);
return (datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1(G__22120) : datascript.arrays.make_array.call(null,G__22120));
})()], null),rels,symbols);
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__4423__auto__ = cljs.core.first(rels);
if(cljs.core.truth_(temp__4423__auto__)){
var rel = temp__4423__auto__;
var keep_attrs = cljs.core.select_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__22136 = acc;
var G__22137 = cljs.core.next(rels);
var G__22138 = symbols;
acc = G__22136;
rels = G__22137;
symbols = G__22138;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__4423__auto__){
return (function (p1__22116_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__22116_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__4423__auto__))
,symbols));
var len = cljs.core.count(symbols);
var G__22139 = (function (){var iter__6914__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4423__auto__){
return (function datascript$query$iter__22121(s__22122){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4423__auto__){
return (function (){
var s__22122__$1 = s__22122;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22122__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var t1 = cljs.core.first(xs__4977__auto__);
var iterys__6910__auto__ = ((function (s__22122__$1,acc,rels,symbols,t1,xs__4977__auto__,temp__4425__auto__,copy_map,len,keep_attrs,rel,temp__4423__auto__){
return (function datascript$query$iter__22121_$_iter__22123(s__22124){
return (new cljs.core.LazySeq(null,((function (s__22122__$1,acc,rels,symbols,t1,xs__4977__auto__,temp__4425__auto__,copy_map,len,keep_attrs,rel,temp__4423__auto__){
return (function (){
var s__22124__$1 = s__22124;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__22124__$1);
if(temp__4425__auto____$1){
var s__22124__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22124__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__22124__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__22126 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__22125 = (0);
while(true){
if((i__22125 < size__6913__auto__)){
var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__22125);
cljs.core.chunk_append(b__22126,(function (){var res = cljs.core.aclone(t1);
var n__7045__auto___22142 = len;
var i_22143 = (0);
while(true){
if((i_22143 < n__7045__auto___22142)){
var temp__4425__auto___22144__$2 = (copy_map[i_22143]);
if(cljs.core.truth_(temp__4425__auto___22144__$2)){
var idx_22145 = temp__4425__auto___22144__$2;
(res[i_22143] = (t2[idx_22145]));
} else {
}

var G__22146 = (i_22143 + (1));
i_22143 = G__22146;
continue;
} else {
}
break;
}

return res;
})());

var G__22147 = (i__22125 + (1));
i__22125 = G__22147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22126),datascript$query$iter__22121_$_iter__22123(cljs.core.chunk_rest(s__22124__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22126),null);
}
} else {
var t2 = cljs.core.first(s__22124__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__7045__auto___22148 = len;
var i_22149 = (0);
while(true){
if((i_22149 < n__7045__auto___22148)){
var temp__4425__auto___22150__$2 = (copy_map[i_22149]);
if(cljs.core.truth_(temp__4425__auto___22150__$2)){
var idx_22151 = temp__4425__auto___22150__$2;
(res[i_22149] = (t2[idx_22151]));
} else {
}

var G__22152 = (i_22149 + (1));
i_22149 = G__22152;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__22121_$_iter__22123(cljs.core.rest(s__22124__$2)));
}
} else {
return null;
}
break;
}
});})(s__22122__$1,acc,rels,symbols,t1,xs__4977__auto__,temp__4425__auto__,copy_map,len,keep_attrs,rel,temp__4423__auto__))
,null,null));
});})(s__22122__$1,acc,rels,symbols,t1,xs__4977__auto__,temp__4425__auto__,copy_map,len,keep_attrs,rel,temp__4423__auto__))
;
var fs__6911__auto__ = cljs.core.seq(iterys__6910__auto__(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__6911__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__6911__auto__,datascript$query$iter__22121(cljs.core.rest(s__22122__$1)));
} else {
var G__22153 = cljs.core.rest(s__22122__$1);
s__22122__$1 = G__22153;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4423__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4423__auto__))
;
return iter__6914__auto__(acc);
})();
var G__22140 = cljs.core.next(rels);
var G__22141 = symbols;
acc = G__22139;
rels = G__22140;
symbols = G__22141;
continue;
}
} else {
return acc;
}
break;
}
});

datascript.query._collect.cljs$lang$maxFixedArity = 3;
datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((!((var$ == null))) && (!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__6797__auto__ = (((var$ == null))?null:var$);
var m__6798__auto__ = (datascript.query._context_resolve[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__6798__auto__.call(null,var$,context));
} else {
var m__6798__auto____$1 = (datascript.query._context_resolve["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2(var$,context) : m__6798__auto____$1.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = true;

datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
});

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = true;

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sources,var$__$1.symbol], null));
});

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = true;

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_in_aggregates,var$__$1.symbol);
});

datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = true;

datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
});
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(cljs.core.truth_(datascript.parser.aggregate_QMARK_(element))){
var f = datascript.query._context_resolve(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f){
return (function (p1__22154_SHARP_){
return datascript.query._context_resolve(p1__22154_SHARP_,context);
});})(f))
,cljs.core.butlast(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f,args){
return (function (p1__22155_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__22155_SHARP_,i);
});})(f,args))
,tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__22156_SHARP_,p2__22157_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__22156_SHARP_) : pred.call(null,p1__22156_SHARP_)))){
return p2__22157_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = ((function (group_idxs){
return (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (group_idxs){
return (function (p1__22158_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__22158_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__6914__auto__ = ((function (group_idxs,group_fn,grouped){
return (function datascript$query$aggregate_$_iter__22169(s__22170){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__22170__$1 = s__22170;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22170__$1);
if(temp__4425__auto__){
var s__22170__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22170__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__22170__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__22172 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__22171 = (0);
while(true){
if((i__22171 < size__6913__auto__)){
var vec__22177 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__22171);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22177,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22177,(1),null);
cljs.core.chunk_append(b__22172,datascript.query._aggregate(find_elements,context,tuples));

var G__22179 = (i__22171 + (1));
i__22171 = G__22179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22172),datascript$query$aggregate_$_iter__22169(cljs.core.chunk_rest(s__22170__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22172),null);
}
} else {
var vec__22178 = cljs.core.first(s__22170__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22178,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22178,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__22169(cljs.core.rest(s__22170__$2)));
}
} else {
return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;
return iter__6914__auto__(grouped);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if((!((find == null))) && (!((find.datascript$query$IPostProcess$_post_process$arity$2 == null)))){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__6797__auto__ = (((find == null))?null:find);
var m__6798__auto__ = (datascript.query._post_process[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__6798__auto__.call(null,find,tuples));
} else {
var m__6798__auto____$1 = (datascript.query._post_process["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__6798__auto____$1.call(null,find,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
}
});

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = true;

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
});

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = true;

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
});

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = true;

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
});

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = true;

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first(tuples);
});
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__6914__auto__ = (function datascript$query$pull_$_iter__22196(s__22197){
return (new cljs.core.LazySeq(null,(function (){
var s__22197__$1 = s__22197;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22197__$1);
if(temp__4425__auto__){
var s__22197__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22197__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__22197__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__22199 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__22198 = (0);
while(true){
if((i__22198 < size__6913__auto__)){
var find = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__22198);
cljs.core.chunk_append(b__22199,(cljs.core.truth_(datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__22212 = (i__22198 + (1));
i__22198 = G__22212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22199),datascript$query$pull_$_iter__22196(cljs.core.chunk_rest(s__22197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22199),null);
}
} else {
var find = cljs.core.first(s__22197__$2);
return cljs.core.cons((cljs.core.truth_(datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__22196(cljs.core.rest(s__22197__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6914__auto__(find_elements);
})();
var iter__6914__auto__ = ((function (resolved){
return (function datascript$query$pull_$_iter__22202(s__22203){
return (new cljs.core.LazySeq(null,((function (resolved){
return (function (){
var s__22203__$1 = s__22203;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22203__$1);
if(temp__4425__auto__){
var s__22203__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22203__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__22203__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__22205 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__22204 = (0);
while(true){
if((i__22204 < size__6913__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__22204);
cljs.core.chunk_append(b__22205,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__22204,tuple,c__6912__auto__,size__6913__auto__,b__22205,s__22203__$2,temp__4425__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__22210 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22210,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22210,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__22204,tuple,c__6912__auto__,size__6913__auto__,b__22205,s__22203__$2,temp__4425__auto__,resolved))
,resolved,tuple));

var G__22213 = (i__22204 + (1));
i__22204 = G__22213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22205),datascript$query$pull_$_iter__22202(cljs.core.chunk_rest(s__22203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22205),null);
}
} else {
var tuple = cljs.core.first(s__22203__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__22203__$2,temp__4425__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__22211 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22211,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22211,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__22203__$2,temp__4425__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__22202(cljs.core.rest(s__22203__$2)));
}
} else {
return null;
}
break;
}
});})(resolved))
,null,null));
});})(resolved))
;
return iter__6914__auto__(resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_(datascript.lru.lru(datascript.query.lru_cache_size));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(datascript.query.query_cache) : cljs.core.deref.call(null,datascript.query.query_cache)),q,null);
if(cljs.core.truth_(temp__4423__auto__)){
var cached = temp__4423__auto__;
return cached;
} else {
var qp = datascript.parser.parse_query(q);
cljs.core._vreset_BANG_(datascript.query.query_cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(datascript.query.query_cache),q,qp));

return qp;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__7207__auto__ = [];
var len__7200__auto___22219 = arguments.length;
var i__7201__auto___22220 = (0);
while(true){
if((i__7201__auto___22220 < len__7200__auto___22219)){
args__7207__auto__.push((arguments[i__7201__auto___22220]));

var G__22221 = (i__7201__auto___22220 + (1));
i__7201__auto___22220 = G__22221;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query(q);
var find = cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,with$));
var q__$1 = (function (){var G__22217 = q;
var G__22217__$1 = ((cljs.core.sequential_QMARK_(q))?datascript.parser.query__GT_map(G__22217):G__22217);
return G__22217__$1;
})();
var wheres = cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__22218 = resultset;
var G__22218__$1 = (cljs.core.truth_(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__22218,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset){
return (function (p1__22214_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__22214_SHARP_,(0),result_arity));
});})(G__22218,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset))
,G__22218):G__22218);
var G__22218__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__22218__$1):G__22218__$1);
var G__22218__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__22218__$2):G__22218__$2);
var G__22218__$4 = datascript.query._post_process(find,G__22218__$3)
;
return G__22218__$4;
});

datascript.query.q.cljs$lang$maxFixedArity = (1);

datascript.query.q.cljs$lang$applyTo = (function (seq22215){
var G__22216 = cljs.core.first(seq22215);
var seq22215__$1 = cljs.core.next(seq22215);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic(G__22216,seq22215__$1);
});
