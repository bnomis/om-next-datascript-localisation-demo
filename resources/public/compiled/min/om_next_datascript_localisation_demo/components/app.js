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
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.app.App.prototype = goog.object.clone(React.Component.prototype);

var x18614_18656 = om_next_datascript_localisation_demo.components.app.App.prototype;
x18614_18656.componentWillUpdate = ((function (x18614_18656){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_(this__7334__auto__);

return om.next.merge_pending_state_BANG_(this__7334__auto__);
});})(x18614_18656))
;

x18614_18656.shouldComponentUpdate = ((function (x18614_18656){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__7334__auto__),goog.object.get(next_props__7335__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__7334__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__18617 = this__7334__auto__.state;
var G__18618 = "omcljs$state";
return goog.object.get(G__18617,G__18618);
})(),goog.object.get(next_state__7336__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x18614_18656))
;

x18614_18656.componentWillUnmount = ((function (x18614_18656){
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
});})(x18614_18656))
;

x18614_18656.componentDidUpdate = ((function (x18614_18656){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_(this__7334__auto__);
});})(x18614_18656))
;

x18614_18656.isMounted = ((function (x18614_18656){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18614_18656))
;

x18614_18656.componentWillMount = ((function (x18614_18656){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x18614_18656))
;

x18614_18656.render = ((function (x18614_18656){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_18619 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18620 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18621 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18622 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18623 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props(this$);
var code = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$locale,cljs.core.cst$kw$locale_SLASH_code], null));
var app_locale_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$locale,cljs.core.cst$kw$db_SLASH_id], null));
var localised = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$locale,cljs.core.cst$kw$localised], null));
var localised__$1 = cljs.core.some(((function (props,code,app_locale_id,localised,_STAR_reconciler_STAR_18619,_STAR_depth_STAR_18620,_STAR_shared_STAR_18621,_STAR_instrument_STAR_18622,_STAR_parent_STAR_18623,this$,this__7333__auto__,x18614_18656){
return (function (l){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app_locale_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_locale,cljs.core.cst$kw$db_SLASH_id], null)))){
return l;
} else {
return null;
}
});})(props,code,app_locale_id,localised,_STAR_reconciler_STAR_18619,_STAR_depth_STAR_18620,_STAR_shared_STAR_18621,_STAR_instrument_STAR_18622,_STAR_parent_STAR_18623,this$,this__7333__auto__,x18614_18656))
,localised);
var localised__$2 = (cljs.core.truth_(localised__$1)?cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(localised__$1):code);
var strings = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$localised_SLASH_strings], null));
var locales_selector_props = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locales_DASH_selector_DASH_props], null));
var locales_table_props = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locales_DASH_table_DASH_props], null));
var localised_string_table_props = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_DASH_string_DASH_table_DASH_props], null));
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__18624_18657 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"-----------------------------")));
console.log(G__18624_18657);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__18625_18658 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,props),"App render:")));
console.log(G__18625_18658);
} else {
}

om_next_datascript_localisation_demo.utils.html.set_html_lang(code);

om_next_datascript_localisation_demo.utils.html.set_html_title(cljs.core.cst$kw$app_DASH_title.cljs$core$IFn$_invoke$arity$1(strings));

var attrs18626 = (function (){var G__18628 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_title.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render_DASH_fn,((function (props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_18619,_STAR_depth_STAR_18620,_STAR_shared_STAR_18621,_STAR_instrument_STAR_18622,_STAR_parent_STAR_18623,this$,this__7333__auto__,x18614_18656){
return (function (s){
var attrs18629 = s;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",((cljs.core.map_QMARK_(attrs18629))?sablono.interpreter.attributes(attrs18629):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18629))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18629)], null))));
});})(props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_18619,_STAR_depth_STAR_18620,_STAR_shared_STAR_18621,_STAR_instrument_STAR_18622,_STAR_parent_STAR_18623,this$,this__7333__auto__,x18614_18656))
,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_title,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1(G__18628) : om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,G__18628));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs18626))?sablono.interpreter.attributes(attrs18626):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18626))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__18631 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_desc.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render_DASH_fn,((function (attrs18626,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_18619,_STAR_depth_STAR_18620,_STAR_shared_STAR_18621,_STAR_instrument_STAR_18622,_STAR_parent_STAR_18623,this$,this__7333__auto__,x18614_18656){
return (function (s){
var attrs18632 = s;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs18632))?sablono.interpreter.attributes(attrs18632):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18632))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18632)], null))));
});})(attrs18626,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_18619,_STAR_depth_STAR_18620,_STAR_shared_STAR_18621,_STAR_instrument_STAR_18622,_STAR_parent_STAR_18623,this$,this__7333__auto__,x18614_18656))
,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_desc,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1(G__18631) : om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,G__18631));
})()),sablono.interpreter.interpret((function (){var G__18634 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_missing.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render_DASH_fn,((function (attrs18626,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_18619,_STAR_depth_STAR_18620,_STAR_shared_STAR_18621,_STAR_instrument_STAR_18622,_STAR_parent_STAR_18623,this$,this__7333__auto__,x18614_18656){
return (function (s){
var attrs18635 = s;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs18635))?sablono.interpreter.attributes(attrs18635):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18635))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18635)], null))));
});})(attrs18626,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_18619,_STAR_depth_STAR_18620,_STAR_shared_STAR_18621,_STAR_instrument_STAR_18622,_STAR_parent_STAR_18623,this$,this__7333__auto__,x18614_18656))
,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_missing,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1(G__18634) : om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,G__18634));
})()),sablono.interpreter.interpret((function (){var G__18636 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_title.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$h2,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_title,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1(G__18636) : om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,G__18636));
})()),sablono.interpreter.interpret((function (){var G__18637 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_desc.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$p,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_desc,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1(G__18637) : om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,G__18637));
})()),sablono.interpreter.interpret((function (){var G__18638 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_missing.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$p,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_missing,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1(G__18638) : om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,G__18638));
})()),(cljs.core.truth_(code)?(function (){var attrs18639 = cljs.core.cst$kw$app_SLASH_current_DASH_locale.cljs$core$IFn$_invoke$arity$1(strings);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs18639))?sablono.interpreter.attributes(attrs18639):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18639))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [": ",sablono.interpreter.interpret(localised__$2)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18639),": ",sablono.interpreter.interpret(localised__$2)], null))));
})():React.createElement("p",null,"No app locale is set")),sablono.interpreter.interpret((om_next_datascript_localisation_demo.components.locale.selector.locales_selector.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.selector.locales_selector.cljs$core$IFn$_invoke$arity$1(locales_selector_props) : om_next_datascript_localisation_demo.components.locale.selector.locales_selector.call(null,locales_selector_props))),sablono.interpreter.interpret((om_next_datascript_localisation_demo.components.locale.table.locales_table.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.table.locales_table.cljs$core$IFn$_invoke$arity$1(locales_table_props) : om_next_datascript_localisation_demo.components.locale.table.locales_table.call(null,locales_table_props))),sablono.interpreter.interpret((om_next_datascript_localisation_demo.components.locale.strings.localised_string_table.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.strings.localised_string_table.cljs$core$IFn$_invoke$arity$1(localised_string_table_props) : om_next_datascript_localisation_demo.components.locale.strings.localised_string_table.call(null,localised_string_table_props)))], null):new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18626),sablono.interpreter.interpret((function (){var G__18643 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_desc.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render_DASH_fn,((function (attrs18626,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_18619,_STAR_depth_STAR_18620,_STAR_shared_STAR_18621,_STAR_instrument_STAR_18622,_STAR_parent_STAR_18623,this$,this__7333__auto__,x18614_18656){
return (function (s){
var attrs18644 = s;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs18644))?sablono.interpreter.attributes(attrs18644):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18644))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18644)], null))));
});})(attrs18626,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_18619,_STAR_depth_STAR_18620,_STAR_shared_STAR_18621,_STAR_instrument_STAR_18622,_STAR_parent_STAR_18623,this$,this__7333__auto__,x18614_18656))
,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_desc,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1(G__18643) : om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,G__18643));
})()),sablono.interpreter.interpret((function (){var G__18646 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_missing.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render_DASH_fn,((function (attrs18626,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_18619,_STAR_depth_STAR_18620,_STAR_shared_STAR_18621,_STAR_instrument_STAR_18622,_STAR_parent_STAR_18623,this$,this__7333__auto__,x18614_18656){
return (function (s){
var attrs18647 = s;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs18647))?sablono.interpreter.attributes(attrs18647):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18647))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18647)], null))));
});})(attrs18626,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_18619,_STAR_depth_STAR_18620,_STAR_shared_STAR_18621,_STAR_instrument_STAR_18622,_STAR_parent_STAR_18623,this$,this__7333__auto__,x18614_18656))
,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_missing,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.cljs$core$IFn$_invoke$arity$1(G__18646) : om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,G__18646));
})()),sablono.interpreter.interpret((function (){var G__18648 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_title.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$h2,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_title,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1(G__18648) : om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,G__18648));
})()),sablono.interpreter.interpret((function (){var G__18649 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_desc.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$p,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_desc,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1(G__18649) : om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,G__18649));
})()),sablono.interpreter.interpret((function (){var G__18650 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_SLASH_string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$localised_DASH_value,cljs.core.cst$kw$app_SLASH_missing.cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$p,cljs.core.cst$kw$string_DASH_id,cljs.core.cst$kw$app_SLASH_missing,cljs.core.cst$kw$locale_DASH_id,app_locale_id], null));
return (om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.cljs$core$IFn$_invoke$arity$1(G__18650) : om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,G__18650));
})()),(cljs.core.truth_(code)?(function (){var attrs18651 = cljs.core.cst$kw$app_SLASH_current_DASH_locale.cljs$core$IFn$_invoke$arity$1(strings);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs18651))?sablono.interpreter.attributes(attrs18651):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18651))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [": ",sablono.interpreter.interpret(localised__$2)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18651),": ",sablono.interpreter.interpret(localised__$2)], null))));
})():React.createElement("p",null,"No app locale is set")),sablono.interpreter.interpret((om_next_datascript_localisation_demo.components.locale.selector.locales_selector.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.selector.locales_selector.cljs$core$IFn$_invoke$arity$1(locales_selector_props) : om_next_datascript_localisation_demo.components.locale.selector.locales_selector.call(null,locales_selector_props))),sablono.interpreter.interpret((om_next_datascript_localisation_demo.components.locale.table.locales_table.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.table.locales_table.cljs$core$IFn$_invoke$arity$1(locales_table_props) : om_next_datascript_localisation_demo.components.locale.table.locales_table.call(null,locales_table_props))),sablono.interpreter.interpret((om_next_datascript_localisation_demo.components.locale.strings.localised_string_table.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.strings.localised_string_table.cljs$core$IFn$_invoke$arity$1(localised_string_table_props) : om_next_datascript_localisation_demo.components.locale.strings.localised_string_table.call(null,localised_string_table_props)))], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18623;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18622;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18621;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18620;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18619;
}});})(x18614_18656))
;


om_next_datascript_localisation_demo.components.app.App.prototype.constructor = om_next_datascript_localisation_demo.components.app.App;

om_next_datascript_localisation_demo.components.app.App.prototype.om$isComponent = true;

var x18654_18659 = om_next_datascript_localisation_demo.components.app.App;
x18654_18659.om$next$IQuery$ = true;

x18654_18659.om$next$IQuery$query$arity$1 = ((function (x18654_18659){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app$locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locale_SLASH_code),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised)], 0))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app$localised_SLASH_strings),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_title),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_desc),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_current_DASH_locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_missing)], 0))))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales_DASH_selector_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_query(om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales_DASH_table_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_query(om_next_datascript_localisation_demo.components.locale.table.LocalesTable))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_string_DASH_table_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_query(om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable)))))))], 0)))));
});})(x18654_18659))
;


var x18655_18660 = om_next_datascript_localisation_demo.components.app.App.prototype;
x18655_18660.om$next$IQuery$ = true;

x18655_18660.om$next$IQuery$query$arity$1 = ((function (x18655_18660){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app$locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locale_SLASH_code),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised)], 0))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app$localised_SLASH_strings),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_title),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_desc),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_current_DASH_locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app_SLASH_missing)], 0))))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales_DASH_selector_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_query(om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales_DASH_table_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_query(om_next_datascript_localisation_demo.components.locale.table.LocalesTable))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_string_DASH_table_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_query(om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable)))))))], 0)))));
});})(x18655_18660))
;


om_next_datascript_localisation_demo.components.app.App.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.app.App.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.app/App";

om_next_datascript_localisation_demo.components.app.App.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write(writer__7397__auto__,"om-next-datascript-localisation-demo.components.app/App");
});
