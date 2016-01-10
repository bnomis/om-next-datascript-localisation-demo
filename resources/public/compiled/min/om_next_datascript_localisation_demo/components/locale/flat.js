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
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype = goog.object.clone(React.Component.prototype);

var x25925_25959 = om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype;
x25925_25959.componentWillUpdate = ((function (x25925_25959){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_(this__9236__auto__);

return om.next.merge_pending_state_BANG_(this__9236__auto__);
});})(x25925_25959))
;

x25925_25959.shouldComponentUpdate = ((function (x25925_25959){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__25928 = this__9236__auto__.state;
var G__25929 = "omcljs$state";
return goog.object.get(G__25928,G__25929);
})(),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x25925_25959))
;

x25925_25959.componentWillUnmount = ((function (x25925_25959){
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
});})(x25925_25959))
;

x25925_25959.componentDidUpdate = ((function (x25925_25959){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_(this__9236__auto__);
});})(x25925_25959))
;

x25925_25959.isMounted = ((function (x25925_25959){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x25925_25959))
;

x25925_25959.componentWillMount = ((function (x25925_25959){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x25925_25959))
;

x25925_25959.render = ((function (x25925_25959){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_25930 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_25931 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_25932 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_25933 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_25934 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__25935_25960 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,om.next.props(this$)),"Localised: render: props")));
console.log(G__25935_25960);
} else {
}

var props = cljs.core.cst$kw$locale$localised.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
var id = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props);
var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props);
var alprops = cljs.core.cst$kw$app$localised.cljs$core$IFn$_invoke$arity$1(props);
var locale = cljs.core.cst$kw$localised_SLASH_locale.cljs$core$IFn$_invoke$arity$1(alprops);
var etprops = cljs.core.cst$kw$editable_DASH_text.cljs$core$IFn$_invoke$arity$1(props);
var G__25944 = "div";
var G__25945 = null;
var G__25946 = (function (){var G__25949 = "p";
var G__25950 = null;
var G__25951 = "In locale: ";
var G__25952 = sablono.interpreter.interpret(locale);
return React.createElement(G__25949,G__25950,G__25951,G__25952);
})();
var G__25947 = (function (){var G__25953 = "p";
var G__25954 = null;
var G__25955 = "Value: ";
var G__25956 = sablono.interpreter.interpret(value);
return React.createElement(G__25953,G__25954,G__25955,G__25956);
})();
var G__25948 = sablono.interpreter.interpret((om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(etprops) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,etprops)));
return React.createElement(G__25944,G__25945,G__25946,G__25947,G__25948);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_25934;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_25933;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25932;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_25931;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25930;
}});})(x25925_25959))
;


om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype.constructor = om_next_datascript_localisation_demo.components.locale.flat.Localised;

om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype.om$isComponent = true;

var x25957_25961 = om_next_datascript_localisation_demo.components.locale.flat.Localised;
x25957_25961.om$next$Ident$ = true;

x25957_25961.om$next$Ident$ident$arity$2 = ((function (x25957_25961){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_localised,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale$localised,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x25957_25961))
;

x25957_25961.om$next$IQuery$ = true;

x25957_25961.om$next$IQuery$query$arity$1 = ((function (x25957_25961){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale$localised,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app$localised,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_locale], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$editable_DASH_text,om.next.get_query(om_next_datascript_localisation_demo.components.editable_text.EditableText)], null)], null)], null)], null);
});})(x25957_25961))
;


var x25958_25962 = om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype;
x25958_25962.om$next$Ident$ = true;

x25958_25962.om$next$Ident$ident$arity$2 = ((function (x25958_25962){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_localised,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale$localised,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x25958_25962))
;

x25958_25962.om$next$IQuery$ = true;

x25958_25962.om$next$IQuery$query$arity$1 = ((function (x25958_25962){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale$localised,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app$localised,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_locale], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$editable_DASH_text,om.next.get_query(om_next_datascript_localisation_demo.components.editable_text.EditableText)], null)], null)], null)], null);
});})(x25958_25962))
;


om_next_datascript_localisation_demo.components.locale.flat.Localised.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.flat.Localised.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.flat/Localised";

om_next_datascript_localisation_demo.components.locale.flat.Localised.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write(writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.flat/Localised");
});
om_next_datascript_localisation_demo.components.locale.flat.locale_locale = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.flat.Localised,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (props){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale$localised,cljs.core.cst$kw$db_SLASH_id], null));
})], null));
om_next_datascript_localisation_demo.components.locale.flat.find_localised_name = (function om_next_datascript_localisation_demo$components$locale$flat$find_localised_name(props,code){
var name = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props);
var locale = cljs.core.filterv(((function (name){
return (function (p1__25963_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,cljs.core.cst$kw$locale$localised_SLASH_code.cljs$core$IFn$_invoke$arity$1(p1__25963_SHARP_));
});})(name))
,cljs.core.cst$kw$locale_SLASH_locales.cljs$core$IFn$_invoke$arity$1(props));
if(!(cljs.core.empty_QMARK_(locale))){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__25965_25966 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,code),"for code"),locale),"found localised locale")));
console.log(G__25965_25966);
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
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype = goog.object.clone(React.Component.prototype);

var x25971_26036 = om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype;
x25971_26036.componentWillUpdate = ((function (x25971_26036){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_(this__9236__auto__);

return om.next.merge_pending_state_BANG_(this__9236__auto__);
});})(x25971_26036))
;

x25971_26036.shouldComponentUpdate = ((function (x25971_26036){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__25974 = this__9236__auto__.state;
var G__25975 = "omcljs$state";
return goog.object.get(G__25974,G__25975);
})(),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x25971_26036))
;

x25971_26036.componentWillUnmount = ((function (x25971_26036){
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
});})(x25971_26036))
;

x25971_26036.componentDidUpdate = ((function (x25971_26036){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_(this__9236__auto__);
});})(x25971_26036))
;

x25971_26036.isMounted = ((function (x25971_26036){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x25971_26036))
;

x25971_26036.componentWillMount = ((function (x25971_26036){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x25971_26036))
;

x25971_26036.render = ((function (x25971_26036){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_25976 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_25977 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_25978 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_25979 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_25980 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__25981_26037 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,om.next.shared.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$locale)),"Locale: render: shared :locale")));
console.log(G__25981_26037);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__25982_26038 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,om.next.props(this$)),"Locale: render: props ")));
console.log(G__25982_26038);
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
var G__26005 = "div";
var G__26006 = null;
var G__26007 = (function (){var G__26014 = "h3";
var G__26015 = null;
var G__26016 = "Name: ";
var G__26017 = sablono.interpreter.interpret(name);
return React.createElement(G__26014,G__26015,G__26016,G__26017);
})();
var G__26008 = (function (){var G__26018 = "p";
var G__26019 = null;
var G__26020 = "Localised name: ";
var G__26021 = sablono.interpreter.interpret(localised_name);
return React.createElement(G__26018,G__26019,G__26020,G__26021);
})();
var G__26009 = (function (){var G__26022 = "p";
var G__26023 = null;
var G__26024 = "Code: ";
var G__26025 = sablono.interpreter.interpret(code);
return React.createElement(G__26022,G__26023,G__26024,G__26025);
})();
var G__26010 = (function (){var G__26026 = "p";
var G__26027 = null;
var G__26028 = "Enum: ";
var G__26029 = sablono.interpreter.interpret([cljs.core.str(enum$)].join(''));
return React.createElement(G__26026,G__26027,G__26028,G__26029);
})();
var G__26011 = (function (){var G__26030 = "button";
var G__26031 = {"onClick": ((function (G__26030,G__26005,G__26006,G__26007,G__26008,G__26009,G__26010,props,lprops,llprops,alprops,id,code,enum$,name,localised_name,_STAR_reconciler_STAR_25976,_STAR_depth_STAR_25977,_STAR_shared_STAR_25978,_STAR_instrument_STAR_25979,_STAR_parent_STAR_25980,this$,this__9235__auto__,x25971_26036){
return (function (e){
return om_next_datascript_localisation_demo.utils.app.set_app_locale(this$,id);
});})(G__26030,G__26005,G__26006,G__26007,G__26008,G__26009,G__26010,props,lprops,llprops,alprops,id,code,enum$,name,localised_name,_STAR_reconciler_STAR_25976,_STAR_depth_STAR_25977,_STAR_shared_STAR_25978,_STAR_instrument_STAR_25979,_STAR_parent_STAR_25980,this$,this__9235__auto__,x25971_26036))
};
var G__26032 = "Switch to ";
var G__26033 = sablono.interpreter.interpret(localised_name);
return React.createElement(G__26030,G__26031,G__26032,G__26033);
})();
var G__26012 = React.createElement("h4",null,"Locales");
var G__26013 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.flat.locale_locale,llprops));
return React.createElement(G__26005,G__26006,G__26007,G__26008,G__26009,G__26010,G__26011,G__26012,G__26013);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_25980;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_25979;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25978;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_25977;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25976;
}});})(x25971_26036))
;


om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype.constructor = om_next_datascript_localisation_demo.components.locale.flat.Locale;

om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype.om$isComponent = true;

var x26034_26039 = om_next_datascript_localisation_demo.components.locale.flat.Locale;
x26034_26039.om$next$Ident$ = true;

x26034_26039.om$next$Ident$ident$arity$2 = ((function (x26034_26039){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_locale,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x26034_26039))
;

x26034_26039.om$next$IQuery$ = true;

x26034_26039.om$next$IQuery$query$arity$1 = ((function (x26034_26039){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$locale_SLASH_code,cljs.core.cst$kw$locale_SLASH_enum,cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app$localised,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$this], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale$locales,om.next.get_query(om_next_datascript_localisation_demo.components.locale.flat.Localised)], null)], null)], null)], null);
});})(x26034_26039))
;


var x26035_26040 = om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype;
x26035_26040.om$next$Ident$ = true;

x26035_26040.om$next$Ident$ident$arity$2 = ((function (x26035_26040){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_locale,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x26035_26040))
;

x26035_26040.om$next$IQuery$ = true;

x26035_26040.om$next$IQuery$query$arity$1 = ((function (x26035_26040){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$locale_SLASH_code,cljs.core.cst$kw$locale_SLASH_enum,cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app$localised,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$this], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale$locales,om.next.get_query(om_next_datascript_localisation_demo.components.locale.flat.Localised)], null)], null)], null)], null);
});})(x26035_26040))
;


om_next_datascript_localisation_demo.components.locale.flat.Locale.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.flat.Locale.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.flat/Locale";

om_next_datascript_localisation_demo.components.locale.flat.Locale.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write(writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.flat/Locale");
});
om_next_datascript_localisation_demo.components.locale.flat.locale_factory = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.flat.Locale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (props){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null));
})], null));
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat = (function om_next_datascript_localisation_demo$components$locale$flat$LocalesFlat(){
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype = goog.object.clone(React.Component.prototype);

var x26045_26059 = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype;
x26045_26059.componentWillUpdate = ((function (x26045_26059){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_(this__9236__auto__);

return om.next.merge_pending_state_BANG_(this__9236__auto__);
});})(x26045_26059))
;

x26045_26059.shouldComponentUpdate = ((function (x26045_26059){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__26048 = this__9236__auto__.state;
var G__26049 = "omcljs$state";
return goog.object.get(G__26048,G__26049);
})(),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x26045_26059))
;

x26045_26059.componentWillUnmount = ((function (x26045_26059){
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
});})(x26045_26059))
;

x26045_26059.componentDidUpdate = ((function (x26045_26059){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_(this__9236__auto__);
});})(x26045_26059))
;

x26045_26059.isMounted = ((function (x26045_26059){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26045_26059))
;

x26045_26059.componentWillMount = ((function (x26045_26059){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x26045_26059))
;

x26045_26059.render = ((function (x26045_26059){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_26050 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26051 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26052 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26053 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26054 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__26055_26060 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,om.next.props(this$)),"LocalesFlat: render: props")));
console.log(G__26055_26060);
} else {
}

var props = om.next.props(this$);
var rows = cljs.core.cst$kw$locales.cljs$core$IFn$_invoke$arity$1(props);
var attrs26056 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.flat.locale_factory,rows);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs26056))?sablono.interpreter.attributes(attrs26056):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs26056))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs26056)], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26054;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26053;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26052;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26051;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26050;
}});})(x26045_26059))
;


om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype.constructor = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat;

om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype.om$isComponent = true;

var x26057_26061 = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat;
x26057_26061.om$next$IQuery$ = true;

x26057_26061.om$next$IQuery$query$arity$1 = ((function (x26057_26061){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locales,om.next.get_query(om_next_datascript_localisation_demo.components.locale.flat.Locale)], null)], null);
});})(x26057_26061))
;


var x26058_26062 = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype;
x26058_26062.om$next$IQuery$ = true;

x26058_26062.om$next$IQuery$query$arity$1 = ((function (x26058_26062){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locales,om.next.get_query(om_next_datascript_localisation_demo.components.locale.flat.Locale)], null)], null);
});})(x26058_26062))
;


om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.flat/LocalesFlat";

om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write(writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.flat/LocalesFlat");
});
om_next_datascript_localisation_demo.components.locale.flat.locales_flat = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat);
