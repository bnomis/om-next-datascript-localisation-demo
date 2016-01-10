// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.components.locale.flat');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('om_next_datascript_localisation_demo.components.editable_text');
goog.require('om_next_datascript_localisation_demo.utils.app');
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.flat.Localised = (function om_next_datascript_localisation_demo$components$locale$flat$Localised(){
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype = goog.object.clone(React.Component.prototype);

var x17551_17585 = om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype;
x17551_17585.componentWillUpdate = ((function (x17551_17585){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_(this__7334__auto__);

return om.next.merge_pending_state_BANG_(this__7334__auto__);
});})(x17551_17585))
;

x17551_17585.shouldComponentUpdate = ((function (x17551_17585){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__7334__auto__),goog.object.get(next_props__7335__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__7334__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17554 = this__7334__auto__.state;
var G__17555 = "omcljs$state";
return goog.object.get(G__17554,G__17555);
})(),goog.object.get(next_state__7336__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x17551_17585))
;

x17551_17585.componentWillUnmount = ((function (x17551_17585){
return (function (){
var this__7334__auto__ = this;
var r__7340__auto__ = om.next.get_reconciler(this__7334__auto__);
var cfg__7341__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__7340__auto__);
var st__7342__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__7341__auto__);
var indexer__7339__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__7341__auto__);
if((st__7342__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__7342__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__7334__auto__], 0));
}

if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x17551_17585))
;

x17551_17585.componentDidUpdate = ((function (x17551_17585){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_(this__7334__auto__);
});})(x17551_17585))
;

x17551_17585.isMounted = ((function (x17551_17585){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x17551_17585))
;

x17551_17585.componentWillMount = ((function (x17551_17585){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x17551_17585))
;

x17551_17585.render = ((function (x17551_17585){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_17556 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_17557 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_17558 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_17559 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_17560 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__17561_17586 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,om.next.props(this$)),"Localised: render: props")));
console.log(G__17561_17586);
} else {
}

var props = cljs.core.cst$kw$locale$localised.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
var id = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props);
var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props);
var alprops = cljs.core.cst$kw$app$localised.cljs$core$IFn$_invoke$arity$1(props);
var locale = cljs.core.cst$kw$localised_SLASH_locale.cljs$core$IFn$_invoke$arity$1(alprops);
var etprops = cljs.core.cst$kw$editable_DASH_text.cljs$core$IFn$_invoke$arity$1(props);
var G__17570 = "div";
var G__17571 = null;
var G__17572 = (function (){var G__17575 = "p";
var G__17576 = null;
var G__17577 = "In locale: ";
var G__17578 = sablono.interpreter.interpret(locale);
return React.createElement(G__17575,G__17576,G__17577,G__17578);
})();
var G__17573 = (function (){var G__17579 = "p";
var G__17580 = null;
var G__17581 = "Value: ";
var G__17582 = sablono.interpreter.interpret(value);
return React.createElement(G__17579,G__17580,G__17581,G__17582);
})();
var G__17574 = sablono.interpreter.interpret((om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(etprops) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,etprops)));
return React.createElement(G__17570,G__17571,G__17572,G__17573,G__17574);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_17560;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_17559;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_17558;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_17557;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_17556;
}});})(x17551_17585))
;


om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype.constructor = om_next_datascript_localisation_demo.components.locale.flat.Localised;

om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype.om$isComponent = true;

var x17583_17587 = om_next_datascript_localisation_demo.components.locale.flat.Localised;
x17583_17587.om$next$Ident$ = true;

x17583_17587.om$next$Ident$ident$arity$2 = ((function (x17583_17587){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_localised,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale$localised,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x17583_17587))
;

x17583_17587.om$next$IQuery$ = true;

x17583_17587.om$next$IQuery$query$arity$1 = ((function (x17583_17587){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale$localised,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app$localised,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_locale], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$editable_DASH_text,om.next.get_query(om_next_datascript_localisation_demo.components.editable_text.EditableText)], null)], null)], null)], null);
});})(x17583_17587))
;


var x17584_17588 = om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype;
x17584_17588.om$next$Ident$ = true;

x17584_17588.om$next$Ident$ident$arity$2 = ((function (x17584_17588){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_localised,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale$localised,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x17584_17588))
;

x17584_17588.om$next$IQuery$ = true;

x17584_17588.om$next$IQuery$query$arity$1 = ((function (x17584_17588){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale$localised,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app$localised,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_locale], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$editable_DASH_text,om.next.get_query(om_next_datascript_localisation_demo.components.editable_text.EditableText)], null)], null)], null)], null);
});})(x17584_17588))
;


om_next_datascript_localisation_demo.components.locale.flat.Localised.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.flat.Localised.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.flat/Localised";

om_next_datascript_localisation_demo.components.locale.flat.Localised.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write(writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.flat/Localised");
});
om_next_datascript_localisation_demo.components.locale.flat.locale_locale = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.flat.Localised,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (props){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale$localised,cljs.core.cst$kw$db_SLASH_id], null));
})], null));
om_next_datascript_localisation_demo.components.locale.flat.find_localised_name = (function om_next_datascript_localisation_demo$components$locale$flat$find_localised_name(props,code){
var name = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props);
var locale = cljs.core.filterv(((function (name){
return (function (p1__17589_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,cljs.core.cst$kw$locale$localised_SLASH_code.cljs$core$IFn$_invoke$arity$1(p1__17589_SHARP_));
});})(name))
,cljs.core.cst$kw$locale_SLASH_locales.cljs$core$IFn$_invoke$arity$1(props));
if(!(cljs.core.empty_QMARK_(locale))){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__17591_17592 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,code),"for code"),locale),"found localised locale")));
console.log(G__17591_17592);
} else {
}

return cljs.core.cst$kw$locale$localised_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.first(locale));
} else {
return name;
}
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.flat.Locale = (function om_next_datascript_localisation_demo$components$locale$flat$Locale(){
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype = goog.object.clone(React.Component.prototype);

var x17597_17662 = om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype;
x17597_17662.componentWillUpdate = ((function (x17597_17662){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_(this__7334__auto__);

return om.next.merge_pending_state_BANG_(this__7334__auto__);
});})(x17597_17662))
;

x17597_17662.shouldComponentUpdate = ((function (x17597_17662){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__7334__auto__),goog.object.get(next_props__7335__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__7334__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17600 = this__7334__auto__.state;
var G__17601 = "omcljs$state";
return goog.object.get(G__17600,G__17601);
})(),goog.object.get(next_state__7336__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x17597_17662))
;

x17597_17662.componentWillUnmount = ((function (x17597_17662){
return (function (){
var this__7334__auto__ = this;
var r__7340__auto__ = om.next.get_reconciler(this__7334__auto__);
var cfg__7341__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__7340__auto__);
var st__7342__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__7341__auto__);
var indexer__7339__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__7341__auto__);
if((st__7342__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__7342__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__7334__auto__], 0));
}

if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x17597_17662))
;

x17597_17662.componentDidUpdate = ((function (x17597_17662){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_(this__7334__auto__);
});})(x17597_17662))
;

x17597_17662.isMounted = ((function (x17597_17662){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x17597_17662))
;

x17597_17662.componentWillMount = ((function (x17597_17662){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x17597_17662))
;

x17597_17662.render = ((function (x17597_17662){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_17602 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_17603 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_17604 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_17605 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_17606 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__17607_17663 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,om.next.shared.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$locale)),"Locale: render: shared :locale")));
console.log(G__17607_17663);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__17608_17664 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,om.next.props(this$)),"Locale: render: props ")));
console.log(G__17608_17664);
} else {
}

var props = om.next.props(this$);
var lprops = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale], null));
var llprops = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(lprops,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale$locales], null));
var alprops = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(lprops,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$localised], null));
var id = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(lprops);
var code = cljs.core.cst$kw$locale_SLASH_code.cljs$core$IFn$_invoke$arity$1(lprops);
var enum$ = cljs.core.cst$kw$locale_SLASH_enum.cljs$core$IFn$_invoke$arity$1(lprops);
var name = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(lprops);
var localised_name = cljs.core.cst$kw$this.cljs$core$IFn$_invoke$arity$1(alprops);
var G__17631 = "div";
var G__17632 = null;
var G__17633 = (function (){var G__17640 = "h3";
var G__17641 = null;
var G__17642 = "Name: ";
var G__17643 = sablono.interpreter.interpret(name);
return React.createElement(G__17640,G__17641,G__17642,G__17643);
})();
var G__17634 = (function (){var G__17644 = "p";
var G__17645 = null;
var G__17646 = "Localised name: ";
var G__17647 = sablono.interpreter.interpret(localised_name);
return React.createElement(G__17644,G__17645,G__17646,G__17647);
})();
var G__17635 = (function (){var G__17648 = "p";
var G__17649 = null;
var G__17650 = "Code: ";
var G__17651 = sablono.interpreter.interpret(code);
return React.createElement(G__17648,G__17649,G__17650,G__17651);
})();
var G__17636 = (function (){var G__17652 = "p";
var G__17653 = null;
var G__17654 = "Enum: ";
var G__17655 = sablono.interpreter.interpret([cljs.core.str(enum$)].join(''));
return React.createElement(G__17652,G__17653,G__17654,G__17655);
})();
var G__17637 = (function (){var G__17656 = "button";
var G__17657 = {"onClick": ((function (G__17656,G__17631,G__17632,G__17633,G__17634,G__17635,G__17636,props,lprops,llprops,alprops,id,code,enum$,name,localised_name,_STAR_reconciler_STAR_17602,_STAR_depth_STAR_17603,_STAR_shared_STAR_17604,_STAR_instrument_STAR_17605,_STAR_parent_STAR_17606,this$,this__7333__auto__,x17597_17662){
return (function (e){
return om_next_datascript_localisation_demo.utils.app.set_app_locale(this$,id);
});})(G__17656,G__17631,G__17632,G__17633,G__17634,G__17635,G__17636,props,lprops,llprops,alprops,id,code,enum$,name,localised_name,_STAR_reconciler_STAR_17602,_STAR_depth_STAR_17603,_STAR_shared_STAR_17604,_STAR_instrument_STAR_17605,_STAR_parent_STAR_17606,this$,this__7333__auto__,x17597_17662))
};
var G__17658 = "Switch to ";
var G__17659 = sablono.interpreter.interpret(localised_name);
return React.createElement(G__17656,G__17657,G__17658,G__17659);
})();
var G__17638 = React.createElement("h4",null,"Locales");
var G__17639 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.flat.locale_locale,llprops));
return React.createElement(G__17631,G__17632,G__17633,G__17634,G__17635,G__17636,G__17637,G__17638,G__17639);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_17606;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_17605;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_17604;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_17603;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_17602;
}});})(x17597_17662))
;


om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype.constructor = om_next_datascript_localisation_demo.components.locale.flat.Locale;

om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype.om$isComponent = true;

var x17660_17665 = om_next_datascript_localisation_demo.components.locale.flat.Locale;
x17660_17665.om$next$Ident$ = true;

x17660_17665.om$next$Ident$ident$arity$2 = ((function (x17660_17665){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_locale,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x17660_17665))
;

x17660_17665.om$next$IQuery$ = true;

x17660_17665.om$next$IQuery$query$arity$1 = ((function (x17660_17665){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$locale_SLASH_code,cljs.core.cst$kw$locale_SLASH_enum,cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app$localised,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$this], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale$locales,om.next.get_query(om_next_datascript_localisation_demo.components.locale.flat.Localised)], null)], null)], null)], null);
});})(x17660_17665))
;


var x17661_17666 = om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype;
x17661_17666.om$next$Ident$ = true;

x17661_17666.om$next$Ident$ident$arity$2 = ((function (x17661_17666){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_locale,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x17661_17666))
;

x17661_17666.om$next$IQuery$ = true;

x17661_17666.om$next$IQuery$query$arity$1 = ((function (x17661_17666){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$locale_SLASH_code,cljs.core.cst$kw$locale_SLASH_enum,cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app$localised,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$this], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale$locales,om.next.get_query(om_next_datascript_localisation_demo.components.locale.flat.Localised)], null)], null)], null)], null);
});})(x17661_17666))
;


om_next_datascript_localisation_demo.components.locale.flat.Locale.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.flat.Locale.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.flat/Locale";

om_next_datascript_localisation_demo.components.locale.flat.Locale.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write(writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.flat/Locale");
});
om_next_datascript_localisation_demo.components.locale.flat.locale_factory = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.flat.Locale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (props){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null));
})], null));
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat = (function om_next_datascript_localisation_demo$components$locale$flat$LocalesFlat(){
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype = goog.object.clone(React.Component.prototype);

var x17671_17685 = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype;
x17671_17685.componentWillUpdate = ((function (x17671_17685){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_(this__7334__auto__);

return om.next.merge_pending_state_BANG_(this__7334__auto__);
});})(x17671_17685))
;

x17671_17685.shouldComponentUpdate = ((function (x17671_17685){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__7334__auto__),goog.object.get(next_props__7335__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__7334__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17674 = this__7334__auto__.state;
var G__17675 = "omcljs$state";
return goog.object.get(G__17674,G__17675);
})(),goog.object.get(next_state__7336__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x17671_17685))
;

x17671_17685.componentWillUnmount = ((function (x17671_17685){
return (function (){
var this__7334__auto__ = this;
var r__7340__auto__ = om.next.get_reconciler(this__7334__auto__);
var cfg__7341__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__7340__auto__);
var st__7342__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__7341__auto__);
var indexer__7339__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__7341__auto__);
if((st__7342__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__7342__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__7334__auto__], 0));
}

if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x17671_17685))
;

x17671_17685.componentDidUpdate = ((function (x17671_17685){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_(this__7334__auto__);
});})(x17671_17685))
;

x17671_17685.isMounted = ((function (x17671_17685){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x17671_17685))
;

x17671_17685.componentWillMount = ((function (x17671_17685){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x17671_17685))
;

x17671_17685.render = ((function (x17671_17685){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_17676 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_17677 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_17678 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_17679 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_17680 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__17681_17686 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,om.next.props(this$)),"LocalesFlat: render: props")));
console.log(G__17681_17686);
} else {
}

var props = om.next.props(this$);
var rows = cljs.core.cst$kw$locales.cljs$core$IFn$_invoke$arity$1(props);
var attrs17682 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.flat.locale_factory,rows);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17682))?sablono.interpreter.attributes(attrs17682):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17682))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17682)], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_17680;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_17679;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_17678;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_17677;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_17676;
}});})(x17671_17685))
;


om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype.constructor = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat;

om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype.om$isComponent = true;

var x17683_17687 = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat;
x17683_17687.om$next$IQuery$ = true;

x17683_17687.om$next$IQuery$query$arity$1 = ((function (x17683_17687){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locales,om.next.get_query(om_next_datascript_localisation_demo.components.locale.flat.Locale)], null)], null);
});})(x17683_17687))
;


var x17684_17688 = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype;
x17684_17688.om$next$IQuery$ = true;

x17684_17688.om$next$IQuery$query$arity$1 = ((function (x17684_17688){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locales,om.next.get_query(om_next_datascript_localisation_demo.components.locale.flat.Locale)], null)], null);
});})(x17684_17688))
;


om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.flat/LocalesFlat";

om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write(writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.flat/LocalesFlat");
});
om_next_datascript_localisation_demo.components.locale.flat.locales_flat = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat);
