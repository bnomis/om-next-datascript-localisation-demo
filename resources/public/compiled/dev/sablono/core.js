// Compiled by ClojureScript 1.7.228 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__14287__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__14286 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__14286,(0),null);
var body = cljs.core.nthnext.call(null,vec__14286,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__14287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14288__i = 0, G__14288__a = new Array(arguments.length -  0);
while (G__14288__i < G__14288__a.length) {G__14288__a[G__14288__i] = arguments[G__14288__i + 0]; ++G__14288__i;}
  args = new cljs.core.IndexedSeq(G__14288__a,0);
} 
return G__14287__delegate.call(this,args);};
G__14287.cljs$lang$maxFixedArity = 0;
G__14287.cljs$lang$applyTo = (function (arglist__14289){
var args = cljs.core.seq(arglist__14289);
return G__14287__delegate(args);
});
G__14287.cljs$core$IFn$_invoke$arity$variadic = G__14287__delegate;
return G__14287;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__6914__auto__ = (function sablono$core$update_arglists_$_iter__14294(s__14295){
return (new cljs.core.LazySeq(null,(function (){
var s__14295__$1 = s__14295;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14295__$1);
if(temp__4425__auto__){
var s__14295__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14295__$2)){
var c__6912__auto__ = cljs.core.chunk_first.call(null,s__14295__$2);
var size__6913__auto__ = cljs.core.count.call(null,c__6912__auto__);
var b__14297 = cljs.core.chunk_buffer.call(null,size__6913__auto__);
if((function (){var i__14296 = (0);
while(true){
if((i__14296 < size__6913__auto__)){
var args = cljs.core._nth.call(null,c__6912__auto__,i__14296);
cljs.core.chunk_append.call(null,b__14297,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__14298 = (i__14296 + (1));
i__14296 = G__14298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14297),sablono$core$update_arglists_$_iter__14294.call(null,cljs.core.chunk_rest.call(null,s__14295__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14297),null);
}
} else {
var args = cljs.core.first.call(null,s__14295__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__14294.call(null,cljs.core.rest.call(null,s__14295__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6914__auto__.call(null,arglists);
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
var len__7200__auto___14304 = arguments.length;
var i__7201__auto___14305 = (0);
while(true){
if((i__7201__auto___14305 < len__7200__auto___14304)){
args__7207__auto__.push((arguments[i__7201__auto___14305]));

var G__14306 = (i__7201__auto___14305 + (1));
i__7201__auto___14305 = G__14306;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((0) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7208__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__6914__auto__ = (function sablono$core$iter__14300(s__14301){
return (new cljs.core.LazySeq(null,(function (){
var s__14301__$1 = s__14301;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14301__$1);
if(temp__4425__auto__){
var s__14301__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14301__$2)){
var c__6912__auto__ = cljs.core.chunk_first.call(null,s__14301__$2);
var size__6913__auto__ = cljs.core.count.call(null,c__6912__auto__);
var b__14303 = cljs.core.chunk_buffer.call(null,size__6913__auto__);
if((function (){var i__14302 = (0);
while(true){
if((i__14302 < size__6913__auto__)){
var style = cljs.core._nth.call(null,c__6912__auto__,i__14302);
cljs.core.chunk_append.call(null,b__14303,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__14307 = (i__14302 + (1));
i__14302 = G__14307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14303),sablono$core$iter__14300.call(null,cljs.core.chunk_rest.call(null,s__14301__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14303),null);
}
} else {
var style = cljs.core.first.call(null,s__14301__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__14300.call(null,cljs.core.rest.call(null,s__14301__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6914__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq14299){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14299));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to14308 = (function sablono$core$link_to14308(var_args){
var args__7207__auto__ = [];
var len__7200__auto___14311 = arguments.length;
var i__7201__auto___14312 = (0);
while(true){
if((i__7201__auto___14312 < len__7200__auto___14311)){
args__7207__auto__.push((arguments[i__7201__auto___14312]));

var G__14313 = (i__7201__auto___14312 + (1));
i__7201__auto___14312 = G__14313;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return sablono.core.link_to14308.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

sablono.core.link_to14308.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to14308.cljs$lang$maxFixedArity = (1);

sablono.core.link_to14308.cljs$lang$applyTo = (function (seq14309){
var G__14310 = cljs.core.first.call(null,seq14309);
var seq14309__$1 = cljs.core.next.call(null,seq14309);
return sablono.core.link_to14308.cljs$core$IFn$_invoke$arity$variadic(G__14310,seq14309__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to14308);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14314 = (function sablono$core$mail_to14314(var_args){
var args__7207__auto__ = [];
var len__7200__auto___14319 = arguments.length;
var i__7201__auto___14320 = (0);
while(true){
if((i__7201__auto___14320 < len__7200__auto___14319)){
args__7207__auto__.push((arguments[i__7201__auto___14320]));

var G__14321 = (i__7201__auto___14320 + (1));
i__7201__auto___14320 = G__14321;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return sablono.core.mail_to14314.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

sablono.core.mail_to14314.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14317){
var vec__14318 = p__14317;
var content = cljs.core.nth.call(null,vec__14318,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6142__auto__ = content;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to14314.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to14314.cljs$lang$applyTo = (function (seq14315){
var G__14316 = cljs.core.first.call(null,seq14315);
var seq14315__$1 = cljs.core.next.call(null,seq14315);
return sablono.core.mail_to14314.cljs$core$IFn$_invoke$arity$variadic(G__14316,seq14315__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to14314);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14322 = (function sablono$core$unordered_list14322(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__6914__auto__ = (function sablono$core$unordered_list14322_$_iter__14327(s__14328){
return (new cljs.core.LazySeq(null,(function (){
var s__14328__$1 = s__14328;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14328__$1);
if(temp__4425__auto__){
var s__14328__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14328__$2)){
var c__6912__auto__ = cljs.core.chunk_first.call(null,s__14328__$2);
var size__6913__auto__ = cljs.core.count.call(null,c__6912__auto__);
var b__14330 = cljs.core.chunk_buffer.call(null,size__6913__auto__);
if((function (){var i__14329 = (0);
while(true){
if((i__14329 < size__6913__auto__)){
var x = cljs.core._nth.call(null,c__6912__auto__,i__14329);
cljs.core.chunk_append.call(null,b__14330,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__14331 = (i__14329 + (1));
i__14329 = G__14331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14330),sablono$core$unordered_list14322_$_iter__14327.call(null,cljs.core.chunk_rest.call(null,s__14328__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14330),null);
}
} else {
var x = cljs.core.first.call(null,s__14328__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list14322_$_iter__14327.call(null,cljs.core.rest.call(null,s__14328__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6914__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list14322);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14332 = (function sablono$core$ordered_list14332(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__6914__auto__ = (function sablono$core$ordered_list14332_$_iter__14337(s__14338){
return (new cljs.core.LazySeq(null,(function (){
var s__14338__$1 = s__14338;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14338__$1);
if(temp__4425__auto__){
var s__14338__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14338__$2)){
var c__6912__auto__ = cljs.core.chunk_first.call(null,s__14338__$2);
var size__6913__auto__ = cljs.core.count.call(null,c__6912__auto__);
var b__14340 = cljs.core.chunk_buffer.call(null,size__6913__auto__);
if((function (){var i__14339 = (0);
while(true){
if((i__14339 < size__6913__auto__)){
var x = cljs.core._nth.call(null,c__6912__auto__,i__14339);
cljs.core.chunk_append.call(null,b__14340,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__14341 = (i__14339 + (1));
i__14339 = G__14341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14340),sablono$core$ordered_list14332_$_iter__14337.call(null,cljs.core.chunk_rest.call(null,s__14338__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14340),null);
}
} else {
var x = cljs.core.first.call(null,s__14338__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list14332_$_iter__14337.call(null,cljs.core.rest.call(null,s__14338__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6914__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list14332);
/**
 * Create an image element.
 */
sablono.core.image14342 = (function sablono$core$image14342(var_args){
var args14343 = [];
var len__7200__auto___14346 = arguments.length;
var i__7201__auto___14347 = (0);
while(true){
if((i__7201__auto___14347 < len__7200__auto___14346)){
args14343.push((arguments[i__7201__auto___14347]));

var G__14348 = (i__7201__auto___14347 + (1));
i__7201__auto___14347 = G__14348;
continue;
} else {
}
break;
}

var G__14345 = args14343.length;
switch (G__14345) {
case 1:
return sablono.core.image14342.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14342.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14343.length)].join('')));

}
});

sablono.core.image14342.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image14342.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image14342.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image14342);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__14350_SHARP_,p2__14351_SHARP_){
return [cljs.core.str(p1__14350_SHARP_),cljs.core.str("["),cljs.core.str(p2__14351_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__14352_SHARP_,p2__14353_SHARP_){
return [cljs.core.str(p1__14352_SHARP_),cljs.core.str("-"),cljs.core.str(p2__14353_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field14354 = (function sablono$core$color_field14354(var_args){
var args14355 = [];
var len__7200__auto___14422 = arguments.length;
var i__7201__auto___14423 = (0);
while(true){
if((i__7201__auto___14423 < len__7200__auto___14422)){
args14355.push((arguments[i__7201__auto___14423]));

var G__14424 = (i__7201__auto___14423 + (1));
i__7201__auto___14423 = G__14424;
continue;
} else {
}
break;
}

var G__14357 = args14355.length;
switch (G__14357) {
case 1:
return sablono.core.color_field14354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14355.length)].join('')));

}
});

sablono.core.color_field14354.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.color_field14354.call(null,name__14275__auto__,null);
});

sablono.core.color_field14354.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.color_field14354.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field14354);

/**
 * Creates a date input field.
 */
sablono.core.date_field14358 = (function sablono$core$date_field14358(var_args){
var args14359 = [];
var len__7200__auto___14426 = arguments.length;
var i__7201__auto___14427 = (0);
while(true){
if((i__7201__auto___14427 < len__7200__auto___14426)){
args14359.push((arguments[i__7201__auto___14427]));

var G__14428 = (i__7201__auto___14427 + (1));
i__7201__auto___14427 = G__14428;
continue;
} else {
}
break;
}

var G__14361 = args14359.length;
switch (G__14361) {
case 1:
return sablono.core.date_field14358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14359.length)].join('')));

}
});

sablono.core.date_field14358.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.date_field14358.call(null,name__14275__auto__,null);
});

sablono.core.date_field14358.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.date_field14358.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field14358);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14362 = (function sablono$core$datetime_field14362(var_args){
var args14363 = [];
var len__7200__auto___14430 = arguments.length;
var i__7201__auto___14431 = (0);
while(true){
if((i__7201__auto___14431 < len__7200__auto___14430)){
args14363.push((arguments[i__7201__auto___14431]));

var G__14432 = (i__7201__auto___14431 + (1));
i__7201__auto___14431 = G__14432;
continue;
} else {
}
break;
}

var G__14365 = args14363.length;
switch (G__14365) {
case 1:
return sablono.core.datetime_field14362.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14362.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14363.length)].join('')));

}
});

sablono.core.datetime_field14362.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.datetime_field14362.call(null,name__14275__auto__,null);
});

sablono.core.datetime_field14362.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.datetime_field14362.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field14362);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14366 = (function sablono$core$datetime_local_field14366(var_args){
var args14367 = [];
var len__7200__auto___14434 = arguments.length;
var i__7201__auto___14435 = (0);
while(true){
if((i__7201__auto___14435 < len__7200__auto___14434)){
args14367.push((arguments[i__7201__auto___14435]));

var G__14436 = (i__7201__auto___14435 + (1));
i__7201__auto___14435 = G__14436;
continue;
} else {
}
break;
}

var G__14369 = args14367.length;
switch (G__14369) {
case 1:
return sablono.core.datetime_local_field14366.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14366.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14367.length)].join('')));

}
});

sablono.core.datetime_local_field14366.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.datetime_local_field14366.call(null,name__14275__auto__,null);
});

sablono.core.datetime_local_field14366.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.datetime_local_field14366.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field14366);

/**
 * Creates a email input field.
 */
sablono.core.email_field14370 = (function sablono$core$email_field14370(var_args){
var args14371 = [];
var len__7200__auto___14438 = arguments.length;
var i__7201__auto___14439 = (0);
while(true){
if((i__7201__auto___14439 < len__7200__auto___14438)){
args14371.push((arguments[i__7201__auto___14439]));

var G__14440 = (i__7201__auto___14439 + (1));
i__7201__auto___14439 = G__14440;
continue;
} else {
}
break;
}

var G__14373 = args14371.length;
switch (G__14373) {
case 1:
return sablono.core.email_field14370.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14370.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14371.length)].join('')));

}
});

sablono.core.email_field14370.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.email_field14370.call(null,name__14275__auto__,null);
});

sablono.core.email_field14370.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.email_field14370.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field14370);

/**
 * Creates a file input field.
 */
sablono.core.file_field14374 = (function sablono$core$file_field14374(var_args){
var args14375 = [];
var len__7200__auto___14442 = arguments.length;
var i__7201__auto___14443 = (0);
while(true){
if((i__7201__auto___14443 < len__7200__auto___14442)){
args14375.push((arguments[i__7201__auto___14443]));

var G__14444 = (i__7201__auto___14443 + (1));
i__7201__auto___14443 = G__14444;
continue;
} else {
}
break;
}

var G__14377 = args14375.length;
switch (G__14377) {
case 1:
return sablono.core.file_field14374.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14374.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14375.length)].join('')));

}
});

sablono.core.file_field14374.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.file_field14374.call(null,name__14275__auto__,null);
});

sablono.core.file_field14374.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.file_field14374.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field14374);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14378 = (function sablono$core$hidden_field14378(var_args){
var args14379 = [];
var len__7200__auto___14446 = arguments.length;
var i__7201__auto___14447 = (0);
while(true){
if((i__7201__auto___14447 < len__7200__auto___14446)){
args14379.push((arguments[i__7201__auto___14447]));

var G__14448 = (i__7201__auto___14447 + (1));
i__7201__auto___14447 = G__14448;
continue;
} else {
}
break;
}

var G__14381 = args14379.length;
switch (G__14381) {
case 1:
return sablono.core.hidden_field14378.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14378.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14379.length)].join('')));

}
});

sablono.core.hidden_field14378.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.hidden_field14378.call(null,name__14275__auto__,null);
});

sablono.core.hidden_field14378.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.hidden_field14378.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field14378);

/**
 * Creates a month input field.
 */
sablono.core.month_field14382 = (function sablono$core$month_field14382(var_args){
var args14383 = [];
var len__7200__auto___14450 = arguments.length;
var i__7201__auto___14451 = (0);
while(true){
if((i__7201__auto___14451 < len__7200__auto___14450)){
args14383.push((arguments[i__7201__auto___14451]));

var G__14452 = (i__7201__auto___14451 + (1));
i__7201__auto___14451 = G__14452;
continue;
} else {
}
break;
}

var G__14385 = args14383.length;
switch (G__14385) {
case 1:
return sablono.core.month_field14382.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14383.length)].join('')));

}
});

sablono.core.month_field14382.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.month_field14382.call(null,name__14275__auto__,null);
});

sablono.core.month_field14382.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.month_field14382.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field14382);

/**
 * Creates a number input field.
 */
sablono.core.number_field14386 = (function sablono$core$number_field14386(var_args){
var args14387 = [];
var len__7200__auto___14454 = arguments.length;
var i__7201__auto___14455 = (0);
while(true){
if((i__7201__auto___14455 < len__7200__auto___14454)){
args14387.push((arguments[i__7201__auto___14455]));

var G__14456 = (i__7201__auto___14455 + (1));
i__7201__auto___14455 = G__14456;
continue;
} else {
}
break;
}

var G__14389 = args14387.length;
switch (G__14389) {
case 1:
return sablono.core.number_field14386.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14386.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14387.length)].join('')));

}
});

sablono.core.number_field14386.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.number_field14386.call(null,name__14275__auto__,null);
});

sablono.core.number_field14386.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.number_field14386.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field14386);

/**
 * Creates a password input field.
 */
sablono.core.password_field14390 = (function sablono$core$password_field14390(var_args){
var args14391 = [];
var len__7200__auto___14458 = arguments.length;
var i__7201__auto___14459 = (0);
while(true){
if((i__7201__auto___14459 < len__7200__auto___14458)){
args14391.push((arguments[i__7201__auto___14459]));

var G__14460 = (i__7201__auto___14459 + (1));
i__7201__auto___14459 = G__14460;
continue;
} else {
}
break;
}

var G__14393 = args14391.length;
switch (G__14393) {
case 1:
return sablono.core.password_field14390.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14390.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14391.length)].join('')));

}
});

sablono.core.password_field14390.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.password_field14390.call(null,name__14275__auto__,null);
});

sablono.core.password_field14390.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.password_field14390.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field14390);

/**
 * Creates a range input field.
 */
sablono.core.range_field14394 = (function sablono$core$range_field14394(var_args){
var args14395 = [];
var len__7200__auto___14462 = arguments.length;
var i__7201__auto___14463 = (0);
while(true){
if((i__7201__auto___14463 < len__7200__auto___14462)){
args14395.push((arguments[i__7201__auto___14463]));

var G__14464 = (i__7201__auto___14463 + (1));
i__7201__auto___14463 = G__14464;
continue;
} else {
}
break;
}

var G__14397 = args14395.length;
switch (G__14397) {
case 1:
return sablono.core.range_field14394.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14394.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14395.length)].join('')));

}
});

sablono.core.range_field14394.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.range_field14394.call(null,name__14275__auto__,null);
});

sablono.core.range_field14394.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.range_field14394.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field14394);

/**
 * Creates a search input field.
 */
sablono.core.search_field14398 = (function sablono$core$search_field14398(var_args){
var args14399 = [];
var len__7200__auto___14466 = arguments.length;
var i__7201__auto___14467 = (0);
while(true){
if((i__7201__auto___14467 < len__7200__auto___14466)){
args14399.push((arguments[i__7201__auto___14467]));

var G__14468 = (i__7201__auto___14467 + (1));
i__7201__auto___14467 = G__14468;
continue;
} else {
}
break;
}

var G__14401 = args14399.length;
switch (G__14401) {
case 1:
return sablono.core.search_field14398.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14398.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14399.length)].join('')));

}
});

sablono.core.search_field14398.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.search_field14398.call(null,name__14275__auto__,null);
});

sablono.core.search_field14398.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.search_field14398.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field14398);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14402 = (function sablono$core$tel_field14402(var_args){
var args14403 = [];
var len__7200__auto___14470 = arguments.length;
var i__7201__auto___14471 = (0);
while(true){
if((i__7201__auto___14471 < len__7200__auto___14470)){
args14403.push((arguments[i__7201__auto___14471]));

var G__14472 = (i__7201__auto___14471 + (1));
i__7201__auto___14471 = G__14472;
continue;
} else {
}
break;
}

var G__14405 = args14403.length;
switch (G__14405) {
case 1:
return sablono.core.tel_field14402.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14402.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14403.length)].join('')));

}
});

sablono.core.tel_field14402.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.tel_field14402.call(null,name__14275__auto__,null);
});

sablono.core.tel_field14402.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.tel_field14402.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field14402);

/**
 * Creates a text input field.
 */
sablono.core.text_field14406 = (function sablono$core$text_field14406(var_args){
var args14407 = [];
var len__7200__auto___14474 = arguments.length;
var i__7201__auto___14475 = (0);
while(true){
if((i__7201__auto___14475 < len__7200__auto___14474)){
args14407.push((arguments[i__7201__auto___14475]));

var G__14476 = (i__7201__auto___14475 + (1));
i__7201__auto___14475 = G__14476;
continue;
} else {
}
break;
}

var G__14409 = args14407.length;
switch (G__14409) {
case 1:
return sablono.core.text_field14406.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14406.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14407.length)].join('')));

}
});

sablono.core.text_field14406.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.text_field14406.call(null,name__14275__auto__,null);
});

sablono.core.text_field14406.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.text_field14406.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field14406);

/**
 * Creates a time input field.
 */
sablono.core.time_field14410 = (function sablono$core$time_field14410(var_args){
var args14411 = [];
var len__7200__auto___14478 = arguments.length;
var i__7201__auto___14479 = (0);
while(true){
if((i__7201__auto___14479 < len__7200__auto___14478)){
args14411.push((arguments[i__7201__auto___14479]));

var G__14480 = (i__7201__auto___14479 + (1));
i__7201__auto___14479 = G__14480;
continue;
} else {
}
break;
}

var G__14413 = args14411.length;
switch (G__14413) {
case 1:
return sablono.core.time_field14410.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14410.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14411.length)].join('')));

}
});

sablono.core.time_field14410.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.time_field14410.call(null,name__14275__auto__,null);
});

sablono.core.time_field14410.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.time_field14410.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field14410);

/**
 * Creates a url input field.
 */
sablono.core.url_field14414 = (function sablono$core$url_field14414(var_args){
var args14415 = [];
var len__7200__auto___14482 = arguments.length;
var i__7201__auto___14483 = (0);
while(true){
if((i__7201__auto___14483 < len__7200__auto___14482)){
args14415.push((arguments[i__7201__auto___14483]));

var G__14484 = (i__7201__auto___14483 + (1));
i__7201__auto___14483 = G__14484;
continue;
} else {
}
break;
}

var G__14417 = args14415.length;
switch (G__14417) {
case 1:
return sablono.core.url_field14414.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14414.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14415.length)].join('')));

}
});

sablono.core.url_field14414.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.url_field14414.call(null,name__14275__auto__,null);
});

sablono.core.url_field14414.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.url_field14414.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field14414);

/**
 * Creates a week input field.
 */
sablono.core.week_field14418 = (function sablono$core$week_field14418(var_args){
var args14419 = [];
var len__7200__auto___14486 = arguments.length;
var i__7201__auto___14487 = (0);
while(true){
if((i__7201__auto___14487 < len__7200__auto___14486)){
args14419.push((arguments[i__7201__auto___14487]));

var G__14488 = (i__7201__auto___14487 + (1));
i__7201__auto___14487 = G__14488;
continue;
} else {
}
break;
}

var G__14421 = args14419.length;
switch (G__14421) {
case 1:
return sablono.core.week_field14418.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field14418.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14419.length)].join('')));

}
});

sablono.core.week_field14418.cljs$core$IFn$_invoke$arity$1 = (function (name__14275__auto__){
return sablono.core.week_field14418.call(null,name__14275__auto__,null);
});

sablono.core.week_field14418.cljs$core$IFn$_invoke$arity$2 = (function (name__14275__auto__,value__14276__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__14275__auto__,value__14276__auto__);
});

sablono.core.week_field14418.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field14418);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box14490 = (function sablono$core$check_box14490(var_args){
var args14491 = [];
var len__7200__auto___14494 = arguments.length;
var i__7201__auto___14495 = (0);
while(true){
if((i__7201__auto___14495 < len__7200__auto___14494)){
args14491.push((arguments[i__7201__auto___14495]));

var G__14496 = (i__7201__auto___14495 + (1));
i__7201__auto___14495 = G__14496;
continue;
} else {
}
break;
}

var G__14493 = args14491.length;
switch (G__14493) {
case 1:
return sablono.core.check_box14490.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box14490.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box14490.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14491.length)].join('')));

}
});

sablono.core.check_box14490.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box14490.call(null,name,null);
});

sablono.core.check_box14490.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box14490.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box14490.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box14490.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box14490);
/**
 * Creates a radio button.
 */
sablono.core.radio_button14498 = (function sablono$core$radio_button14498(var_args){
var args14499 = [];
var len__7200__auto___14502 = arguments.length;
var i__7201__auto___14503 = (0);
while(true){
if((i__7201__auto___14503 < len__7200__auto___14502)){
args14499.push((arguments[i__7201__auto___14503]));

var G__14504 = (i__7201__auto___14503 + (1));
i__7201__auto___14503 = G__14504;
continue;
} else {
}
break;
}

var G__14501 = args14499.length;
switch (G__14501) {
case 1:
return sablono.core.radio_button14498.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button14498.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button14498.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14499.length)].join('')));

}
});

sablono.core.radio_button14498.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button14498.call(null,group,null);
});

sablono.core.radio_button14498.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button14498.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button14498.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button14498.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button14498);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options14506 = (function sablono$core$select_options14506(coll){
var iter__6914__auto__ = (function sablono$core$select_options14506_$_iter__14515(s__14516){
return (new cljs.core.LazySeq(null,(function (){
var s__14516__$1 = s__14516;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14516__$1);
if(temp__4425__auto__){
var s__14516__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14516__$2)){
var c__6912__auto__ = cljs.core.chunk_first.call(null,s__14516__$2);
var size__6913__auto__ = cljs.core.count.call(null,c__6912__auto__);
var b__14518 = cljs.core.chunk_buffer.call(null,size__6913__auto__);
if((function (){var i__14517 = (0);
while(true){
if((i__14517 < size__6913__auto__)){
var x = cljs.core._nth.call(null,c__6912__auto__,i__14517);
cljs.core.chunk_append.call(null,b__14518,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14521 = x;
var text = cljs.core.nth.call(null,vec__14521,(0),null);
var val = cljs.core.nth.call(null,vec__14521,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14521,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options14506.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__14523 = (i__14517 + (1));
i__14517 = G__14523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14518),sablono$core$select_options14506_$_iter__14515.call(null,cljs.core.chunk_rest.call(null,s__14516__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14518),null);
}
} else {
var x = cljs.core.first.call(null,s__14516__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14522 = x;
var text = cljs.core.nth.call(null,vec__14522,(0),null);
var val = cljs.core.nth.call(null,vec__14522,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14522,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options14506.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options14506_$_iter__14515.call(null,cljs.core.rest.call(null,s__14516__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6914__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options14506);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down14524 = (function sablono$core$drop_down14524(var_args){
var args14525 = [];
var len__7200__auto___14528 = arguments.length;
var i__7201__auto___14529 = (0);
while(true){
if((i__7201__auto___14529 < len__7200__auto___14528)){
args14525.push((arguments[i__7201__auto___14529]));

var G__14530 = (i__7201__auto___14529 + (1));
i__7201__auto___14529 = G__14530;
continue;
} else {
}
break;
}

var G__14527 = args14525.length;
switch (G__14527) {
case 2:
return sablono.core.drop_down14524.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down14524.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14525.length)].join('')));

}
});

sablono.core.drop_down14524.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down14524.call(null,name,options,null);
});

sablono.core.drop_down14524.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down14524.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down14524);
/**
 * Creates a text area element.
 */
sablono.core.text_area14532 = (function sablono$core$text_area14532(var_args){
var args14533 = [];
var len__7200__auto___14536 = arguments.length;
var i__7201__auto___14537 = (0);
while(true){
if((i__7201__auto___14537 < len__7200__auto___14536)){
args14533.push((arguments[i__7201__auto___14537]));

var G__14538 = (i__7201__auto___14537 + (1));
i__7201__auto___14537 = G__14538;
continue;
} else {
}
break;
}

var G__14535 = args14533.length;
switch (G__14535) {
case 1:
return sablono.core.text_area14532.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area14532.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14533.length)].join('')));

}
});

sablono.core.text_area14532.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area14532.call(null,name,null);
});

sablono.core.text_area14532.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area14532.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area14532);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label14540 = (function sablono$core$label14540(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label14540);
/**
 * Creates a submit button.
 */
sablono.core.submit_button14541 = (function sablono$core$submit_button14541(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button14541);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button14542 = (function sablono$core$reset_button14542(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button14542);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to14543 = (function sablono$core$form_to14543(var_args){
var args__7207__auto__ = [];
var len__7200__auto___14548 = arguments.length;
var i__7201__auto___14549 = (0);
while(true){
if((i__7201__auto___14549 < len__7200__auto___14548)){
args__7207__auto__.push((arguments[i__7201__auto___14549]));

var G__14550 = (i__7201__auto___14549 + (1));
i__7201__auto___14549 = G__14550;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return sablono.core.form_to14543.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

sablono.core.form_to14543.cljs$core$IFn$_invoke$arity$variadic = (function (p__14546,body){
var vec__14547 = p__14546;
var method = cljs.core.nth.call(null,vec__14547,(0),null);
var action = cljs.core.nth.call(null,vec__14547,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to14543.cljs$lang$maxFixedArity = (1);

sablono.core.form_to14543.cljs$lang$applyTo = (function (seq14544){
var G__14545 = cljs.core.first.call(null,seq14544);
var seq14544__$1 = cljs.core.next.call(null,seq14544);
return sablono.core.form_to14543.cljs$core$IFn$_invoke$arity$variadic(G__14545,seq14544__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to14543);

//# sourceMappingURL=core.js.map?rel=1452427528258