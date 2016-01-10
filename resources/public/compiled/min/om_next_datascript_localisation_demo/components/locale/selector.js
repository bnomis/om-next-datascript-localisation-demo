// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.components.locale.selector');
goog.require('cljs.core');
goog.require('om.next');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('om_next_datascript_localisation_demo.utils.app');
om_next_datascript_localisation_demo.components.locale.selector.localised_locale = (function om_next_datascript_localisation_demo$components$locale$selector$localised_locale(localised){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(localised,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_locale,cljs.core.cst$kw$db_SLASH_id], null));
});
om_next_datascript_localisation_demo.components.locale.selector.localised_for_locale = (function om_next_datascript_localisation_demo$components$locale$selector$localised_for_locale(localised,id){
return cljs.core.some((function (l){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,om_next_datascript_localisation_demo.components.locale.selector.localised_locale(l))){
return l;
} else {
return false;
}
}),localised);
});
om_next_datascript_localisation_demo.components.locale.selector.find_locale_name_in_locale = (function om_next_datascript_localisation_demo$components$locale$selector$find_locale_name_in_locale(locale,id){
var localised = om_next_datascript_localisation_demo.components.locale.selector.localised_for_locale(cljs.core.cst$kw$localised.cljs$core$IFn$_invoke$arity$1(locale),id);
if(cljs.core.truth_(localised)){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(localised);
} else {
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(locale);
}
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink = (function om_next_datascript_localisation_demo$components$locale$selector$LocaleSelectorLink(){
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype = goog.object.clone(React.Component.prototype);

var x26553_26575 = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype;
x26553_26575.componentWillUpdate = ((function (x26553_26575){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_(this__9236__auto__);

return om.next.merge_pending_state_BANG_(this__9236__auto__);
});})(x26553_26575))
;

x26553_26575.shouldComponentUpdate = ((function (x26553_26575){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__26556 = this__9236__auto__.state;
var G__26557 = "omcljs$state";
return goog.object.get(G__26556,G__26557);
})(),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x26553_26575))
;

x26553_26575.componentWillUnmount = ((function (x26553_26575){
return (function (){
var this__9236__auto__ = this;
var r__9242__auto__ = om.next.get_reconciler(this__9236__auto__);
var cfg__9243__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__9242__auto__);
var st__9244__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__9243__auto__);
var indexer__9241__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__9243__auto__);
if((st__9244__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__9244__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__9236__auto__], 0));
}

if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x26553_26575))
;

x26553_26575.componentDidUpdate = ((function (x26553_26575){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_(this__9236__auto__);
});})(x26553_26575))
;

x26553_26575.isMounted = ((function (x26553_26575){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26553_26575))
;

x26553_26575.componentWillMount = ((function (x26553_26575){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x26553_26575))
;

x26553_26575.render = ((function (x26553_26575){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_26558 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26559 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26560 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26561 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26562 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props(this$);
var lprops = cljs.core.cst$kw$locale.cljs$core$IFn$_invoke$arity$1(props);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(lprops,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null));
var text = om_next_datascript_localisation_demo.components.locale.selector.find_locale_name_in_locale(lprops,id);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__26563_26576 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,props),"LocaleSelectorLink: render: props ")));
console.log(G__26563_26576);
} else {
}

var G__26567 = "li";
var G__26568 = null;
var G__26569 = (function (){var G__26570 = "a";
var G__26571 = {"onClick": ((function (G__26570,G__26567,G__26568,props,lprops,id,text,_STAR_reconciler_STAR_26558,_STAR_depth_STAR_26559,_STAR_shared_STAR_26560,_STAR_instrument_STAR_26561,_STAR_parent_STAR_26562,this$,this__9235__auto__,x26553_26575){
return (function (e){
return om_next_datascript_localisation_demo.utils.app.set_app_locale(this$,id);
});})(G__26570,G__26567,G__26568,props,lprops,id,text,_STAR_reconciler_STAR_26558,_STAR_depth_STAR_26559,_STAR_shared_STAR_26560,_STAR_instrument_STAR_26561,_STAR_parent_STAR_26562,this$,this__9235__auto__,x26553_26575))
};
var G__26572 = sablono.interpreter.interpret(text);
return React.createElement(G__26570,G__26571,G__26572);
})();
return React.createElement(G__26567,G__26568,G__26569);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26562;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26561;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26560;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26559;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26558;
}});})(x26553_26575))
;


om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype.constructor = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink;

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype.om$isComponent = true;

var x26573_26577 = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink;
x26573_26577.om$next$Ident$ = true;

x26573_26577.om$next$Ident$ident$arity$2 = ((function (x26573_26577){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x26573_26577))
;

x26573_26577.om$next$IQuery$ = true;

x26573_26577.om$next$IQuery$query$arity$1 = ((function (x26573_26577){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised)], 0))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ident),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_ident(this$__$1)))))))))))))));
});})(x26573_26577))
;


var x26574_26578 = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype;
x26574_26578.om$next$Ident$ = true;

x26574_26578.om$next$Ident$ident$arity$2 = ((function (x26574_26578){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x26574_26578))
;

x26574_26578.om$next$IQuery$ = true;

x26574_26578.om$next$IQuery$query$arity$1 = ((function (x26574_26578){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised)], 0))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ident),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_ident(this$__$1)))))))))))))));
});})(x26574_26578))
;


om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.selector/LocaleSelectorLink";

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write(writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.selector/LocaleSelectorLink");
});
om_next_datascript_localisation_demo.components.locale.selector.locale_selector_link = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (props){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null));
})], null));
om_next_datascript_localisation_demo.components.locale.selector.filter_locales = (function om_next_datascript_localisation_demo$components$locale$selector$filter_locales(locales,app_locale){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (l){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app_locale,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(l));
}),locales);
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector = (function om_next_datascript_localisation_demo$components$locale$selector$LocalesSelector(){
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype = goog.object.clone(React.Component.prototype);

var x26584_26606 = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype;
x26584_26606.componentWillUpdate = ((function (x26584_26606){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_(this__9236__auto__);

return om.next.merge_pending_state_BANG_(this__9236__auto__);
});})(x26584_26606))
;

x26584_26606.shouldComponentUpdate = ((function (x26584_26606){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__26587 = this__9236__auto__.state;
var G__26588 = "omcljs$state";
return goog.object.get(G__26587,G__26588);
})(),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x26584_26606))
;

x26584_26606.componentWillUnmount = ((function (x26584_26606){
return (function (){
var this__9236__auto__ = this;
var r__9242__auto__ = om.next.get_reconciler(this__9236__auto__);
var cfg__9243__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__9242__auto__);
var st__9244__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__9243__auto__);
var indexer__9241__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__9243__auto__);
if((st__9244__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__9244__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__9236__auto__], 0));
}

if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x26584_26606))
;

x26584_26606.componentDidUpdate = ((function (x26584_26606){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_(this__9236__auto__);
});})(x26584_26606))
;

x26584_26606.isMounted = ((function (x26584_26606){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26584_26606))
;

x26584_26606.componentWillMount = ((function (x26584_26606){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x26584_26606))
;

x26584_26606.render = ((function (x26584_26606){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_26589 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26590 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26591 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26592 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26593 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props(this$);
var locales = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locales], null));
var app_locale = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$locale,cljs.core.cst$kw$db_SLASH_id], null));
var locales__$1 = om_next_datascript_localisation_demo.components.locale.selector.filter_locales(locales,app_locale);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__26594_26607 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,props),"LocaleSelector: render: props ")));
console.log(G__26594_26607);
} else {
}

if(cljs.core.seq(locales__$1)){
var G__26599 = "div";
var G__26600 = null;
var G__26601 = React.createElement("p",null,"Choose a different locale:");
var G__26602 = (function (){var attrs26597 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__26599,G__26600,G__26601,props,locales,app_locale,locales__$1,_STAR_reconciler_STAR_26589,_STAR_depth_STAR_26590,_STAR_shared_STAR_26591,_STAR_instrument_STAR_26592,_STAR_parent_STAR_26593,this$,this__9235__auto__,x26584_26606){
return (function (p1__26579_SHARP_){
var G__26603 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,p1__26579_SHARP_], null);
return (om_next_datascript_localisation_demo.components.locale.selector.locale_selector_link.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.selector.locale_selector_link.cljs$core$IFn$_invoke$arity$1(G__26603) : om_next_datascript_localisation_demo.components.locale.selector.locale_selector_link.call(null,G__26603));
});})(G__26599,G__26600,G__26601,props,locales,app_locale,locales__$1,_STAR_reconciler_STAR_26589,_STAR_depth_STAR_26590,_STAR_shared_STAR_26591,_STAR_instrument_STAR_26592,_STAR_parent_STAR_26593,this$,this__9235__auto__,x26584_26606))
,locales__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"ul",((cljs.core.map_QMARK_(attrs26597))?sablono.interpreter.attributes(attrs26597):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs26597))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs26597)], null))));
})();
return React.createElement(G__26599,G__26600,G__26601,G__26602);
} else {
return null;
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26593;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26592;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26591;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26590;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26589;
}});})(x26584_26606))
;


om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype.constructor = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector;

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype.om$isComponent = true;

var x26604_26608 = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector;
x26604_26608.om$next$IQuery$ = true;

x26604_26608.om$next$IQuery$query$arity$1 = ((function (x26604_26608){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app$locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales)))));
});})(x26604_26608))
;


var x26605_26609 = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype;
x26605_26609.om$next$IQuery$ = true;

x26605_26609.om$next$IQuery$query$arity$1 = ((function (x26605_26609){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app$locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales)))));
});})(x26605_26609))
;


om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.selector/LocalesSelector";

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write(writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.selector/LocalesSelector");
});
om_next_datascript_localisation_demo.components.locale.selector.locales_selector = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector);
