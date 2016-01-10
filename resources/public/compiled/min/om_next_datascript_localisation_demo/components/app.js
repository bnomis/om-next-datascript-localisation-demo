// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.components.app');
goog.require('cljs.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.utils.html');
goog.require('om_next_datascript_localisation_demo.components.locale.flat');
goog.require('om_next_datascript_localisation_demo.components.locale.table');
goog.require('om.next');
goog.require('om_next_datascript_localisation_demo.components.locale.selector');
goog.require('om_next_datascript_localisation_demo.components.locale.localised_string');
goog.require('om_next_datascript_localisation_demo.components.locale.strings');
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.app.App = (function om_next_datascript_localisation_demo$components$app$App(){
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.app.App.prototype = goog.object.clone(React.Component.prototype);

var x26988_27030 = om_next_datascript_localisation_demo.components.app.App.prototype;
x26988_27030.componentWillUpdate = ((function (x26988_27030){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_(this__9236__auto__);

return om.next.merge_pending_state_BANG_(this__9236__auto__);
});})(x26988_27030))
;

x26988_27030.shouldComponentUpdate = ((function (x26988_27030){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__26991 = this__9236__auto__.state;
var G__26992 = "omcljs$state";
return goog.object.get(G__26991,G__26992);
})(),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x26988_27030))
;

x26988_27030.componentWillUnmount = ((function (x26988_27030){
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
});})(x26988_27030))
;

x26988_27030.componentDidUpdate = ((function (x26988_27030){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_(this__9236__auto__);
});})(x26988_27030))
;

x26988_27030.isMounted = ((function (x26988_27030){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26988_27030))
;

x26988_27030.componentWillMount = ((function (x26988_27030){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x26988_27030))
;

x26988_27030.render = ((function (x26988_27030){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_26993 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26994 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26995 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26996 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26997 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props(this$);
var code = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$locale,cljs.core.cst$kw$locale_SLASH_code], null));
var app_locale_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$locale,cljs.core.cst$kw$db_SLASH_id], null));
var localised = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$locale,cljs.core.cst$kw$localised], null));
var localised__$1 = cljs.core.some(((function (props,code,app_locale_id,localised,_STAR_reconciler_STAR_26993,_STAR_depth_STAR_26994,_STAR_shared_STAR_26995,_STAR_instrument_STAR_26996,_STAR_parent_STAR_26997,this$,this__9235__auto__,x26988_27030){
return (function (l){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app_locale_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_locale,cljs.core.cst$kw$db_SLASH_id], null)))){
return l;
} else {
return null;
}
});})(props,code,app_locale_id,localised,_STAR_reconciler_STAR_26993,_STAR_depth_STAR_26994,_STAR_shared_STAR_26995,_STAR_instrument_STAR_26996,_STAR_parent_STAR_26997,this$,this__9235__auto__,x26988_27030))
,localised);
var localised__$2 = (cljs.core.truth_(localised__$1)?cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(localised__$1):code);
var strings = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$localised_SLASH_strings], null));
var locales_selector_props = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locales_DASH_selector_DASH_props], null));
var locales_table_props = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locales_DASH_table_DASH_props], null));
var localised_string_table_props = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_DASH_string_DASH_table_DASH_props], null));
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__26998_27031 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"-----------------------------")));
console.log(G__26998_27031);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__26999_27032 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,props),"App render:")));
console.log(G__26999_27032);
} else {
}

om_next_datascript_localisation_demo.utils.html.set_html_lang(code);

om_next_datascript_localisation_demo.utils.html.set_html_title(cljs.core.cst$kw$app_SLASH_title.cljs$core$IFn$_invoke$arity$1(strings));

var attrs27000 = (function (){var G__27002 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_title.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render_DASH_fn,((function (props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_26993,_STAR_depth_STAR_26994,_STAR_shared_STAR_26995,_STAR_instrument_STAR_26996,_STAR_parent_STAR_26997,this$,this__9235__auto__,x26988_27030){
return (function (s){
var attrs27003 = s;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",((cljs.core.map_QMARK_(attrs27003))?sablono.interpreter.attributes(attrs27003):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs27003))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs27003)], null))));
});})(props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_26993,_STAR_depth_STAR_26994,_STAR_shared_STAR_26995,_STAR_instrument_STAR_26996,_STAR_parent_STAR_26997,this$,this__9235__auto__,x26988_27030))
,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_title,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1(G__27002) : om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,G__27002));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs27000))?sablono.interpreter.attributes(attrs27000):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs27000))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__27005 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_desc.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render_DASH_fn,((function (attrs27000,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_26993,_STAR_depth_STAR_26994,_STAR_shared_STAR_26995,_STAR_instrument_STAR_26996,_STAR_parent_STAR_26997,this$,this__9235__auto__,x26988_27030){
return (function (s){
var attrs27006 = s;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs27006))?sablono.interpreter.attributes(attrs27006):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs27006))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs27006)], null))));
});})(attrs27000,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_26993,_STAR_depth_STAR_26994,_STAR_shared_STAR_26995,_STAR_instrument_STAR_26996,_STAR_parent_STAR_26997,this$,this__9235__auto__,x26988_27030))
,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_desc,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1(G__27005) : om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,G__27005));
})()),sablono.interpreter.interpret((function (){var G__27008 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_missing.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render_DASH_fn,((function (attrs27000,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_26993,_STAR_depth_STAR_26994,_STAR_shared_STAR_26995,_STAR_instrument_STAR_26996,_STAR_parent_STAR_26997,this$,this__9235__auto__,x26988_27030){
return (function (s){
var attrs27009 = s;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs27009))?sablono.interpreter.attributes(attrs27009):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs27009))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs27009)], null))));
});})(attrs27000,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_26993,_STAR_depth_STAR_26994,_STAR_shared_STAR_26995,_STAR_instrument_STAR_26996,_STAR_parent_STAR_26997,this$,this__9235__auto__,x26988_27030))
,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_missing,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1(G__27008) : om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,G__27008));
})()),sablono.interpreter.interpret((function (){var G__27010 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_title.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$h2,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_title,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1(G__27010) : om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,G__27010));
})()),sablono.interpreter.interpret((function (){var G__27011 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_desc.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$p,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_desc,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1(G__27011) : om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,G__27011));
})()),sablono.interpreter.interpret((function (){var G__27012 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_missing.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$p,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_missing,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1(G__27012) : om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,G__27012));
})()),(cljs.core.truth_(code)?(function (){var attrs27013 = cljs.core.cst$kw$app_SLASH_current_DASH_locale.cljs$core$IFn$_invoke$arity$1(strings);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs27013))?sablono.interpreter.attributes(attrs27013):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs27013))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [": ",sablono.interpreter.interpret(localised__$2)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs27013),": ",sablono.interpreter.interpret(localised__$2)], null))));
})():React.createElement("p",null,"No app locale is set")),sablono.interpreter.interpret((om_next_datascript_localisation_demo.components.locale.selector.locales_selector.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.selector.locales_selector.cljs$core$IFn$_invoke$arity$1(locales_selector_props) : om_next_datascript_localisation_demo.components.locale.selector.locales_selector.call(null,locales_selector_props))),sablono.interpreter.interpret((om_next_datascript_localisation_demo.components.locale.table.locales_table.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.table.locales_table.cljs$core$IFn$_invoke$arity$1(locales_table_props) : om_next_datascript_localisation_demo.components.locale.table.locales_table.call(null,locales_table_props))),sablono.interpreter.interpret((om_next_datascript_localisation_demo.components.locale.strings.localised_string_table.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.strings.localised_string_table.cljs$core$IFn$_invoke$arity$1(localised_string_table_props) : om_next_datascript_localisation_demo.components.locale.strings.localised_string_table.call(null,localised_string_table_props)))], null):new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs27000),sablono.interpreter.interpret((function (){var G__27017 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_desc.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render_DASH_fn,((function (attrs27000,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_26993,_STAR_depth_STAR_26994,_STAR_shared_STAR_26995,_STAR_instrument_STAR_26996,_STAR_parent_STAR_26997,this$,this__9235__auto__,x26988_27030){
return (function (s){
var attrs27018 = s;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs27018))?sablono.interpreter.attributes(attrs27018):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs27018))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs27018)], null))));
});})(attrs27000,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_26993,_STAR_depth_STAR_26994,_STAR_shared_STAR_26995,_STAR_instrument_STAR_26996,_STAR_parent_STAR_26997,this$,this__9235__auto__,x26988_27030))
,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_desc,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1(G__27017) : om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,G__27017));
})()),sablono.interpreter.interpret((function (){var G__27020 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_missing.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render_DASH_fn,((function (attrs27000,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_26993,_STAR_depth_STAR_26994,_STAR_shared_STAR_26995,_STAR_instrument_STAR_26996,_STAR_parent_STAR_26997,this$,this__9235__auto__,x26988_27030){
return (function (s){
var attrs27021 = s;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs27021))?sablono.interpreter.attributes(attrs27021):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs27021))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs27021)], null))));
});})(attrs27000,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_26993,_STAR_depth_STAR_26994,_STAR_shared_STAR_26995,_STAR_instrument_STAR_26996,_STAR_parent_STAR_26997,this$,this__9235__auto__,x26988_27030))
,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_missing,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1(G__27020) : om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,G__27020));
})()),sablono.interpreter.interpret((function (){var G__27022 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_title.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$h2,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_title,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1(G__27022) : om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,G__27022));
})()),sablono.interpreter.interpret((function (){var G__27023 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_desc.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$p,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_desc,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1(G__27023) : om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,G__27023));
})()),sablono.interpreter.interpret((function (){var G__27024 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_missing.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$p,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_missing,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1(G__27024) : om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,G__27024));
})()),(cljs.core.truth_(code)?(function (){var attrs27025 = cljs.core.cst$kw$app_SLASH_current_DASH_locale.cljs$core$IFn$_invoke$arity$1(strings);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs27025))?sablono.interpreter.attributes(attrs27025):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs27025))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [": ",sablono.interpreter.interpret(localised__$2)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs27025),": ",sablono.interpreter.interpret(localised__$2)], null))));
})():React.createElement("p",null,"No app locale is set")),sablono.interpreter.interpret((om_next_datascript_localisation_demo.components.locale.selector.locales_selector.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.selector.locales_selector.cljs$core$IFn$_invoke$arity$1(locales_selector_props) : om_next_datascript_localisation_demo.components.locale.selector.locales_selector.call(null,locales_selector_props))),sablono.interpreter.interpret((om_next_datascript_localisation_demo.components.locale.table.locales_table.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.table.locales_table.cljs$core$IFn$_invoke$arity$1(locales_table_props) : om_next_datascript_localisation_demo.components.locale.table.locales_table.call(null,locales_table_props))),sablono.interpreter.interpret((om_next_datascript_localisation_demo.components.locale.strings.localised_string_table.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.strings.localised_string_table.cljs$core$IFn$_invoke$arity$1(localised_string_table_props) : om_next_datascript_localisation_demo.components.locale.strings.localised_string_table.call(null,localised_string_table_props)))], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26997;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26996;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26995;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26994;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26993;
}});})(x26988_27030))
;


om_next_datascript_localisation_demo.components.app.App.prototype.constructor = om_next_datascript_localisation_demo.components.app.App;

om_next_datascript_localisation_demo.components.app.App.prototype.om$isComponent = true;

var x27028_27033 = om_next_datascript_localisation_demo.components.app.App;
x27028_27033.om$next$IQuery$ = true;

x27028_27033.om$next$IQuery$query$arity$1 = ((function (x27028_27033){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app$locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locale_SLASH_code),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised)], 0))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app$localised_SLASH_strings),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_title),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_desc),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_current_DASH_locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_missing)], 0))))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales_DASH_selector_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_query(om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales_DASH_table_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_query(om_next_datascript_localisation_demo.components.locale.table.LocalesTable))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_string_DASH_table_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_query(om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable)))))))], 0)))));
});})(x27028_27033))
;


var x27029_27034 = om_next_datascript_localisation_demo.components.app.App.prototype;
x27029_27034.om$next$IQuery$ = true;

x27029_27034.om$next$IQuery$query$arity$1 = ((function (x27029_27034){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app$locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locale_SLASH_code),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised)], 0))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app$localised_SLASH_strings),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_title),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_desc),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_current_DASH_locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_missing)], 0))))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales_DASH_selector_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_query(om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales_DASH_table_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_query(om_next_datascript_localisation_demo.components.locale.table.LocalesTable))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_string_DASH_table_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_query(om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable)))))))], 0)))));
});})(x27029_27034))
;


om_next_datascript_localisation_demo.components.app.App.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.app.App.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.app/App";

om_next_datascript_localisation_demo.components.app.App.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write(writer__9299__auto__,"om-next-datascript-localisation-demo.components.app/App");
});
