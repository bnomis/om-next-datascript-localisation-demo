// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__25586__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__25585 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25585,(0),null);
var body = cljs.core.nthnext(vec__25585,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__25586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25587__i = 0, G__25587__a = new Array(arguments.length -  0);
while (G__25587__i < G__25587__a.length) {G__25587__a[G__25587__i] = arguments[G__25587__i + 0]; ++G__25587__i;}
  args = new cljs.core.IndexedSeq(G__25587__a,0);
} 
return G__25586__delegate.call(this,args);};
G__25586.cljs$lang$maxFixedArity = 0;
G__25586.cljs$lang$applyTo = (function (arglist__25588){
var args = cljs.core.seq(arglist__25588);
return G__25586__delegate(args);
});
G__25586.cljs$core$IFn$_invoke$arity$variadic = G__25586__delegate;
return G__25586;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__6914__auto__ = (function sablono$core$update_arglists_$_iter__25595(s__25596){
return (new cljs.core.LazySeq(null,(function (){
var s__25596__$1 = s__25596;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__25596__$1);
if(temp__4425__auto__){
var s__25596__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25596__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__25596__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__25598 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__25597 = (0);
while(true){
if((i__25597 < size__6913__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__25597);
cljs.core.chunk_append(b__25598,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__25601 = (i__25597 + (1));
i__25597 = G__25601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25598),sablono$core$update_arglists_$_iter__25595(cljs.core.chunk_rest(s__25596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25598),null);
}
} else {
var args = cljs.core.first(s__25596__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__25595(cljs.core.rest(s__25596__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6914__auto__(arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7207__auto__ = [];
var len__7200__auto___25609 = arguments.length;
var i__7201__auto___25610 = (0);
while(true){
if((i__7201__auto___25610 < len__7200__auto___25609)){
args__7207__auto__.push((arguments[i__7201__auto___25610]));

var G__25611 = (i__7201__auto___25610 + (1));
i__7201__auto___25610 = G__25611;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((0) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7208__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__6914__auto__ = (function sablono$core$iter__25603(s__25604){
return (new cljs.core.LazySeq(null,(function (){
var s__25604__$1 = s__25604;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__25604__$1);
if(temp__4425__auto__){
var s__25604__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25604__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__25604__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__25606 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__25605 = (0);
while(true){
if((i__25605 < size__6913__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__25605);
cljs.core.chunk_append(b__25606,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__25612 = (i__25605 + (1));
i__25605 = G__25612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25606),sablono$core$iter__25603(cljs.core.chunk_rest(s__25604__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25606),null);
}
} else {
var style = cljs.core.first(s__25604__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__25603(cljs.core.rest(s__25604__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6914__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq25602){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25602));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__25617 = goog.dom.getDocument().body;
var G__25618 = (function (){var G__25619 = "script";
var G__25620 = {"src": src};
return goog.dom.createDom(G__25619,G__25620);
})();
return goog.dom.appendChild(G__25617,G__25618);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to25621 = (function sablono$core$link_to25621(var_args){
var args__7207__auto__ = [];
var len__7200__auto___25624 = arguments.length;
var i__7201__auto___25625 = (0);
while(true){
if((i__7201__auto___25625 < len__7200__auto___25624)){
args__7207__auto__.push((arguments[i__7201__auto___25625]));

var G__25626 = (i__7201__auto___25625 + (1));
i__7201__auto___25625 = G__25626;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return sablono.core.link_to25621.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

sablono.core.link_to25621.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to25621.cljs$lang$maxFixedArity = (1);

sablono.core.link_to25621.cljs$lang$applyTo = (function (seq25622){
var G__25623 = cljs.core.first(seq25622);
var seq25622__$1 = cljs.core.next(seq25622);
return sablono.core.link_to25621.cljs$core$IFn$_invoke$arity$variadic(G__25623,seq25622__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to25621);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25627 = (function sablono$core$mail_to25627(var_args){
var args__7207__auto__ = [];
var len__7200__auto___25632 = arguments.length;
var i__7201__auto___25633 = (0);
while(true){
if((i__7201__auto___25633 < len__7200__auto___25632)){
args__7207__auto__.push((arguments[i__7201__auto___25633]));

var G__25634 = (i__7201__auto___25633 + (1));
i__7201__auto___25633 = G__25634;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return sablono.core.mail_to25627.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

sablono.core.mail_to25627.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25630){
var vec__25631 = p__25630;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25631,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6142__auto__ = content;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to25627.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to25627.cljs$lang$applyTo = (function (seq25628){
var G__25629 = cljs.core.first(seq25628);
var seq25628__$1 = cljs.core.next(seq25628);
return sablono.core.mail_to25627.cljs$core$IFn$_invoke$arity$variadic(G__25629,seq25628__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to25627);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25635 = (function sablono$core$unordered_list25635(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__6914__auto__ = (function sablono$core$unordered_list25635_$_iter__25642(s__25643){
return (new cljs.core.LazySeq(null,(function (){
var s__25643__$1 = s__25643;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__25643__$1);
if(temp__4425__auto__){
var s__25643__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25643__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__25643__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__25645 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__25644 = (0);
while(true){
if((i__25644 < size__6913__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__25644);
cljs.core.chunk_append(b__25645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__25648 = (i__25644 + (1));
i__25644 = G__25648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25645),sablono$core$unordered_list25635_$_iter__25642(cljs.core.chunk_rest(s__25643__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25645),null);
}
} else {
var x = cljs.core.first(s__25643__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list25635_$_iter__25642(cljs.core.rest(s__25643__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6914__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list25635);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25649 = (function sablono$core$ordered_list25649(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__6914__auto__ = (function sablono$core$ordered_list25649_$_iter__25656(s__25657){
return (new cljs.core.LazySeq(null,(function (){
var s__25657__$1 = s__25657;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__25657__$1);
if(temp__4425__auto__){
var s__25657__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25657__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__25657__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__25659 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__25658 = (0);
while(true){
if((i__25658 < size__6913__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__25658);
cljs.core.chunk_append(b__25659,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__25662 = (i__25658 + (1));
i__25658 = G__25662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25659),sablono$core$ordered_list25649_$_iter__25656(cljs.core.chunk_rest(s__25657__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25659),null);
}
} else {
var x = cljs.core.first(s__25657__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list25649_$_iter__25656(cljs.core.rest(s__25657__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6914__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list25649);
/**
 * Create an image element.
 */
sablono.core.image25663 = (function sablono$core$image25663(var_args){
var args25664 = [];
var len__7200__auto___25667 = arguments.length;
var i__7201__auto___25668 = (0);
while(true){
if((i__7201__auto___25668 < len__7200__auto___25667)){
args25664.push((arguments[i__7201__auto___25668]));

var G__25669 = (i__7201__auto___25668 + (1));
i__7201__auto___25668 = G__25669;
continue;
} else {
}
break;
}

var G__25666 = args25664.length;
switch (G__25666) {
case 1:
return sablono.core.image25663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25664.length)].join('')));

}
});

sablono.core.image25663.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image25663.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image25663.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image25663);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25671_SHARP_,p2__25672_SHARP_){
return [cljs.core.str(p1__25671_SHARP_),cljs.core.str("["),cljs.core.str(p2__25672_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25673_SHARP_,p2__25674_SHARP_){
return [cljs.core.str(p1__25673_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25674_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field25675 = (function sablono$core$color_field25675(var_args){
var args25676 = [];
var len__7200__auto___25743 = arguments.length;
var i__7201__auto___25744 = (0);
while(true){
if((i__7201__auto___25744 < len__7200__auto___25743)){
args25676.push((arguments[i__7201__auto___25744]));

var G__25745 = (i__7201__auto___25744 + (1));
i__7201__auto___25744 = G__25745;
continue;
} else {
}
break;
}

var G__25678 = args25676.length;
switch (G__25678) {
case 1:
return sablono.core.color_field25675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25676.length)].join('')));

}
});

sablono.core.color_field25675.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.color_field25675.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.color_field25675.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.color_field25675.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field25675);

/**
 * Creates a date input field.
 */
sablono.core.date_field25679 = (function sablono$core$date_field25679(var_args){
var args25680 = [];
var len__7200__auto___25747 = arguments.length;
var i__7201__auto___25748 = (0);
while(true){
if((i__7201__auto___25748 < len__7200__auto___25747)){
args25680.push((arguments[i__7201__auto___25748]));

var G__25749 = (i__7201__auto___25748 + (1));
i__7201__auto___25748 = G__25749;
continue;
} else {
}
break;
}

var G__25682 = args25680.length;
switch (G__25682) {
case 1:
return sablono.core.date_field25679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field25679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25680.length)].join('')));

}
});

sablono.core.date_field25679.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.date_field25679.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.date_field25679.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.date_field25679.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field25679);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field25683 = (function sablono$core$datetime_field25683(var_args){
var args25684 = [];
var len__7200__auto___25751 = arguments.length;
var i__7201__auto___25752 = (0);
while(true){
if((i__7201__auto___25752 < len__7200__auto___25751)){
args25684.push((arguments[i__7201__auto___25752]));

var G__25753 = (i__7201__auto___25752 + (1));
i__7201__auto___25752 = G__25753;
continue;
} else {
}
break;
}

var G__25686 = args25684.length;
switch (G__25686) {
case 1:
return sablono.core.datetime_field25683.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field25683.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25684.length)].join('')));

}
});

sablono.core.datetime_field25683.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.datetime_field25683.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.datetime_field25683.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.datetime_field25683.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field25683);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field25687 = (function sablono$core$datetime_local_field25687(var_args){
var args25688 = [];
var len__7200__auto___25755 = arguments.length;
var i__7201__auto___25756 = (0);
while(true){
if((i__7201__auto___25756 < len__7200__auto___25755)){
args25688.push((arguments[i__7201__auto___25756]));

var G__25757 = (i__7201__auto___25756 + (1));
i__7201__auto___25756 = G__25757;
continue;
} else {
}
break;
}

var G__25690 = args25688.length;
switch (G__25690) {
case 1:
return sablono.core.datetime_local_field25687.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field25687.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25688.length)].join('')));

}
});

sablono.core.datetime_local_field25687.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.datetime_local_field25687.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.datetime_local_field25687.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.datetime_local_field25687.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field25687);

/**
 * Creates a email input field.
 */
sablono.core.email_field25691 = (function sablono$core$email_field25691(var_args){
var args25692 = [];
var len__7200__auto___25759 = arguments.length;
var i__7201__auto___25760 = (0);
while(true){
if((i__7201__auto___25760 < len__7200__auto___25759)){
args25692.push((arguments[i__7201__auto___25760]));

var G__25761 = (i__7201__auto___25760 + (1));
i__7201__auto___25760 = G__25761;
continue;
} else {
}
break;
}

var G__25694 = args25692.length;
switch (G__25694) {
case 1:
return sablono.core.email_field25691.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field25691.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25692.length)].join('')));

}
});

sablono.core.email_field25691.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.email_field25691.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.email_field25691.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.email_field25691.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field25691);

/**
 * Creates a file input field.
 */
sablono.core.file_field25695 = (function sablono$core$file_field25695(var_args){
var args25696 = [];
var len__7200__auto___25763 = arguments.length;
var i__7201__auto___25764 = (0);
while(true){
if((i__7201__auto___25764 < len__7200__auto___25763)){
args25696.push((arguments[i__7201__auto___25764]));

var G__25765 = (i__7201__auto___25764 + (1));
i__7201__auto___25764 = G__25765;
continue;
} else {
}
break;
}

var G__25698 = args25696.length;
switch (G__25698) {
case 1:
return sablono.core.file_field25695.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field25695.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25696.length)].join('')));

}
});

sablono.core.file_field25695.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.file_field25695.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.file_field25695.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.file_field25695.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field25695);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field25699 = (function sablono$core$hidden_field25699(var_args){
var args25700 = [];
var len__7200__auto___25767 = arguments.length;
var i__7201__auto___25768 = (0);
while(true){
if((i__7201__auto___25768 < len__7200__auto___25767)){
args25700.push((arguments[i__7201__auto___25768]));

var G__25769 = (i__7201__auto___25768 + (1));
i__7201__auto___25768 = G__25769;
continue;
} else {
}
break;
}

var G__25702 = args25700.length;
switch (G__25702) {
case 1:
return sablono.core.hidden_field25699.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field25699.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25700.length)].join('')));

}
});

sablono.core.hidden_field25699.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.hidden_field25699.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.hidden_field25699.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.hidden_field25699.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field25699);

/**
 * Creates a month input field.
 */
sablono.core.month_field25703 = (function sablono$core$month_field25703(var_args){
var args25704 = [];
var len__7200__auto___25771 = arguments.length;
var i__7201__auto___25772 = (0);
while(true){
if((i__7201__auto___25772 < len__7200__auto___25771)){
args25704.push((arguments[i__7201__auto___25772]));

var G__25773 = (i__7201__auto___25772 + (1));
i__7201__auto___25772 = G__25773;
continue;
} else {
}
break;
}

var G__25706 = args25704.length;
switch (G__25706) {
case 1:
return sablono.core.month_field25703.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field25703.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25704.length)].join('')));

}
});

sablono.core.month_field25703.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.month_field25703.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.month_field25703.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.month_field25703.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field25703);

/**
 * Creates a number input field.
 */
sablono.core.number_field25707 = (function sablono$core$number_field25707(var_args){
var args25708 = [];
var len__7200__auto___25775 = arguments.length;
var i__7201__auto___25776 = (0);
while(true){
if((i__7201__auto___25776 < len__7200__auto___25775)){
args25708.push((arguments[i__7201__auto___25776]));

var G__25777 = (i__7201__auto___25776 + (1));
i__7201__auto___25776 = G__25777;
continue;
} else {
}
break;
}

var G__25710 = args25708.length;
switch (G__25710) {
case 1:
return sablono.core.number_field25707.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field25707.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25708.length)].join('')));

}
});

sablono.core.number_field25707.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.number_field25707.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.number_field25707.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.number_field25707.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field25707);

/**
 * Creates a password input field.
 */
sablono.core.password_field25711 = (function sablono$core$password_field25711(var_args){
var args25712 = [];
var len__7200__auto___25779 = arguments.length;
var i__7201__auto___25780 = (0);
while(true){
if((i__7201__auto___25780 < len__7200__auto___25779)){
args25712.push((arguments[i__7201__auto___25780]));

var G__25781 = (i__7201__auto___25780 + (1));
i__7201__auto___25780 = G__25781;
continue;
} else {
}
break;
}

var G__25714 = args25712.length;
switch (G__25714) {
case 1:
return sablono.core.password_field25711.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field25711.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25712.length)].join('')));

}
});

sablono.core.password_field25711.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.password_field25711.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.password_field25711.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.password_field25711.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field25711);

/**
 * Creates a range input field.
 */
sablono.core.range_field25715 = (function sablono$core$range_field25715(var_args){
var args25716 = [];
var len__7200__auto___25783 = arguments.length;
var i__7201__auto___25784 = (0);
while(true){
if((i__7201__auto___25784 < len__7200__auto___25783)){
args25716.push((arguments[i__7201__auto___25784]));

var G__25785 = (i__7201__auto___25784 + (1));
i__7201__auto___25784 = G__25785;
continue;
} else {
}
break;
}

var G__25718 = args25716.length;
switch (G__25718) {
case 1:
return sablono.core.range_field25715.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field25715.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25716.length)].join('')));

}
});

sablono.core.range_field25715.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.range_field25715.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.range_field25715.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.range_field25715.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field25715);

/**
 * Creates a search input field.
 */
sablono.core.search_field25719 = (function sablono$core$search_field25719(var_args){
var args25720 = [];
var len__7200__auto___25787 = arguments.length;
var i__7201__auto___25788 = (0);
while(true){
if((i__7201__auto___25788 < len__7200__auto___25787)){
args25720.push((arguments[i__7201__auto___25788]));

var G__25789 = (i__7201__auto___25788 + (1));
i__7201__auto___25788 = G__25789;
continue;
} else {
}
break;
}

var G__25722 = args25720.length;
switch (G__25722) {
case 1:
return sablono.core.search_field25719.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field25719.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25720.length)].join('')));

}
});

sablono.core.search_field25719.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.search_field25719.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.search_field25719.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.search_field25719.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field25719);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field25723 = (function sablono$core$tel_field25723(var_args){
var args25724 = [];
var len__7200__auto___25791 = arguments.length;
var i__7201__auto___25792 = (0);
while(true){
if((i__7201__auto___25792 < len__7200__auto___25791)){
args25724.push((arguments[i__7201__auto___25792]));

var G__25793 = (i__7201__auto___25792 + (1));
i__7201__auto___25792 = G__25793;
continue;
} else {
}
break;
}

var G__25726 = args25724.length;
switch (G__25726) {
case 1:
return sablono.core.tel_field25723.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field25723.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25724.length)].join('')));

}
});

sablono.core.tel_field25723.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.tel_field25723.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.tel_field25723.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.tel_field25723.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field25723);

/**
 * Creates a text input field.
 */
sablono.core.text_field25727 = (function sablono$core$text_field25727(var_args){
var args25728 = [];
var len__7200__auto___25795 = arguments.length;
var i__7201__auto___25796 = (0);
while(true){
if((i__7201__auto___25796 < len__7200__auto___25795)){
args25728.push((arguments[i__7201__auto___25796]));

var G__25797 = (i__7201__auto___25796 + (1));
i__7201__auto___25796 = G__25797;
continue;
} else {
}
break;
}

var G__25730 = args25728.length;
switch (G__25730) {
case 1:
return sablono.core.text_field25727.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field25727.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25728.length)].join('')));

}
});

sablono.core.text_field25727.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.text_field25727.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.text_field25727.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.text_field25727.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field25727);

/**
 * Creates a time input field.
 */
sablono.core.time_field25731 = (function sablono$core$time_field25731(var_args){
var args25732 = [];
var len__7200__auto___25799 = arguments.length;
var i__7201__auto___25800 = (0);
while(true){
if((i__7201__auto___25800 < len__7200__auto___25799)){
args25732.push((arguments[i__7201__auto___25800]));

var G__25801 = (i__7201__auto___25800 + (1));
i__7201__auto___25800 = G__25801;
continue;
} else {
}
break;
}

var G__25734 = args25732.length;
switch (G__25734) {
case 1:
return sablono.core.time_field25731.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field25731.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25732.length)].join('')));

}
});

sablono.core.time_field25731.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.time_field25731.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.time_field25731.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.time_field25731.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field25731);

/**
 * Creates a url input field.
 */
sablono.core.url_field25735 = (function sablono$core$url_field25735(var_args){
var args25736 = [];
var len__7200__auto___25803 = arguments.length;
var i__7201__auto___25804 = (0);
while(true){
if((i__7201__auto___25804 < len__7200__auto___25803)){
args25736.push((arguments[i__7201__auto___25804]));

var G__25805 = (i__7201__auto___25804 + (1));
i__7201__auto___25804 = G__25805;
continue;
} else {
}
break;
}

var G__25738 = args25736.length;
switch (G__25738) {
case 1:
return sablono.core.url_field25735.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field25735.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25736.length)].join('')));

}
});

sablono.core.url_field25735.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.url_field25735.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.url_field25735.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.url_field25735.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field25735);

/**
 * Creates a week input field.
 */
sablono.core.week_field25739 = (function sablono$core$week_field25739(var_args){
var args25740 = [];
var len__7200__auto___25807 = arguments.length;
var i__7201__auto___25808 = (0);
while(true){
if((i__7201__auto___25808 < len__7200__auto___25807)){
args25740.push((arguments[i__7201__auto___25808]));

var G__25809 = (i__7201__auto___25808 + (1));
i__7201__auto___25808 = G__25809;
continue;
} else {
}
break;
}

var G__25742 = args25740.length;
switch (G__25742) {
case 1:
return sablono.core.week_field25739.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field25739.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25740.length)].join('')));

}
});

sablono.core.week_field25739.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.week_field25739.cljs$core$IFn$_invoke$arity$2(name__14275__auto__,null);
});

sablono.core.week_field25739.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.week_field25739.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field25739);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box25811 = (function sablono$core$check_box25811(var_args){
var args25812 = [];
var len__7200__auto___25815 = arguments.length;
var i__7201__auto___25816 = (0);
while(true){
if((i__7201__auto___25816 < len__7200__auto___25815)){
args25812.push((arguments[i__7201__auto___25816]));

var G__25817 = (i__7201__auto___25816 + (1));
i__7201__auto___25816 = G__25817;
continue;
} else {
}
break;
}

var G__25814 = args25812.length;
switch (G__25814) {
case 1:
return sablono.core.check_box25811.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box25811.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box25811.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25812.length)].join('')));

}
});

sablono.core.check_box25811.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box25811.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box25811.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box25811.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box25811.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box25811.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box25811);
/**
 * Creates a radio button.
 */
sablono.core.radio_button25819 = (function sablono$core$radio_button25819(var_args){
var args25820 = [];
var len__7200__auto___25823 = arguments.length;
var i__7201__auto___25824 = (0);
while(true){
if((i__7201__auto___25824 < len__7200__auto___25823)){
args25820.push((arguments[i__7201__auto___25824]));

var G__25825 = (i__7201__auto___25824 + (1));
i__7201__auto___25824 = G__25825;
continue;
} else {
}
break;
}

var G__25822 = args25820.length;
switch (G__25822) {
case 1:
return sablono.core.radio_button25819.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button25819.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button25819.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25820.length)].join('')));

}
});

sablono.core.radio_button25819.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button25819.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button25819.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button25819.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button25819.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button25819.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button25819);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__25828 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__25828);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options25829 = (function sablono$core$select_options25829(coll){
var iter__6914__auto__ = (function sablono$core$select_options25829_$_iter__25840(s__25841){
return (new cljs.core.LazySeq(null,(function (){
var s__25841__$1 = s__25841;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__25841__$1);
if(temp__4425__auto__){
var s__25841__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25841__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__25841__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__25843 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__25842 = (0);
while(true){
if((i__25842 < size__6913__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__25842);
cljs.core.chunk_append(b__25843,((cljs.core.sequential_QMARK_(x))?(function (){var vec__25848 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25848,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25848,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25848,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options25829(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__25850 = (i__25842 + (1));
i__25842 = G__25850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25843),sablono$core$select_options25829_$_iter__25840(cljs.core.chunk_rest(s__25841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25843),null);
}
} else {
var x = cljs.core.first(s__25841__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__25849 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25849,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25849,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25849,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options25829(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options25829_$_iter__25840(cljs.core.rest(s__25841__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6914__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options25829);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down25851 = (function sablono$core$drop_down25851(var_args){
var args25852 = [];
var len__7200__auto___25855 = arguments.length;
var i__7201__auto___25856 = (0);
while(true){
if((i__7201__auto___25856 < len__7200__auto___25855)){
args25852.push((arguments[i__7201__auto___25856]));

var G__25857 = (i__7201__auto___25856 + (1));
i__7201__auto___25856 = G__25857;
continue;
} else {
}
break;
}

var G__25854 = args25852.length;
switch (G__25854) {
case 2:
return sablono.core.drop_down25851.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down25851.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25852.length)].join('')));

}
});

sablono.core.drop_down25851.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down25851.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down25851.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down25851.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down25851);
/**
 * Creates a text area element.
 */
sablono.core.text_area25859 = (function sablono$core$text_area25859(var_args){
var args25860 = [];
var len__7200__auto___25863 = arguments.length;
var i__7201__auto___25864 = (0);
while(true){
if((i__7201__auto___25864 < len__7200__auto___25863)){
args25860.push((arguments[i__7201__auto___25864]));

var G__25865 = (i__7201__auto___25864 + (1));
i__7201__auto___25864 = G__25865;
continue;
} else {
}
break;
}

var G__25862 = args25860.length;
switch (G__25862) {
case 1:
return sablono.core.text_area25859.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area25859.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25860.length)].join('')));

}
});

sablono.core.text_area25859.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area25859.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area25859.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area25859.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area25859);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label25867 = (function sablono$core$label25867(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label25867);
/**
 * Creates a submit button.
 */
sablono.core.submit_button25868 = (function sablono$core$submit_button25868(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button25868);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button25869 = (function sablono$core$reset_button25869(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button25869);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to25870 = (function sablono$core$form_to25870(var_args){
var args__7207__auto__ = [];
var len__7200__auto___25878 = arguments.length;
var i__7201__auto___25879 = (0);
while(true){
if((i__7201__auto___25879 < len__7200__auto___25878)){
args__7207__auto__.push((arguments[i__7201__auto___25879]));

var G__25880 = (i__7201__auto___25879 + (1));
i__7201__auto___25879 = G__25880;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return sablono.core.form_to25870.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

sablono.core.form_to25870.cljs$core$IFn$_invoke$arity$variadic = (function (p__25873,body){
var vec__25874 = p__25873;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25874,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25874,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__25875 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__25876 = "_method";
var G__25877 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__25875,G__25876,G__25877) : sablono.core.hidden_field.call(null,G__25875,G__25876,G__25877));
})()], null)),body));
});

sablono.core.form_to25870.cljs$lang$maxFixedArity = (1);

sablono.core.form_to25870.cljs$lang$applyTo = (function (seq25871){
var G__25872 = cljs.core.first(seq25871);
var seq25871__$1 = cljs.core.next(seq25871);
return sablono.core.form_to25870.cljs$core$IFn$_invoke$arity$variadic(G__25872,seq25871__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to25870);
