// Compiled by ClojureScript 1.7.228 {}
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

var x11795_11815 = om_next_datascript_localisation_demo.components.app.App.prototype;
x11795_11815.componentWillUpdate = ((function (x11795_11815){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7334__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7334__auto__);
});})(x11795_11815))
;

x11795_11815.shouldComponentUpdate = ((function (x11795_11815){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7334__auto__),goog.object.get(next_props__7335__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__7334__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7334__auto__.state,"omcljs$state"),goog.object.get(next_state__7336__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x11795_11815))
;

x11795_11815.componentWillUnmount = ((function (x11795_11815){
return (function (){
var this__7334__auto__ = this;
var r__7340__auto__ = om.next.get_reconciler.call(null,this__7334__auto__);
var cfg__7341__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7340__auto__);
var st__7342__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7341__auto__);
var indexer__7339__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7341__auto__);
if((st__7342__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7342__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7334__auto__);
}

if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7339__auto__,this__7334__auto__);
}
});})(x11795_11815))
;

x11795_11815.componentDidUpdate = ((function (x11795_11815){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7334__auto__);
});})(x11795_11815))
;

x11795_11815.isMounted = ((function (x11795_11815){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x11795_11815))
;

x11795_11815.componentWillMount = ((function (x11795_11815){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7339__auto__,this__7334__auto__);
}
});})(x11795_11815))
;

x11795_11815.render = ((function (x11795_11815){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_11796 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_11797 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_11798 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_11799 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_11800 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props.call(null,this$);
var code = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.locale","app.locale",1484369313),new cljs.core.Keyword("locale","code","locale/code",-1620643092)], null));
var app_locale_id = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.locale","app.locale",1484369313),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
var localised = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.locale","app.locale",1484369313),new cljs.core.Keyword(null,"localised","localised",-1733242051)], null));
var localised__$1 = cljs.core.some.call(null,((function (props,code,app_locale_id,localised,_STAR_reconciler_STAR_11796,_STAR_depth_STAR_11797,_STAR_shared_STAR_11798,_STAR_instrument_STAR_11799,_STAR_parent_STAR_11800,this$,this__7333__auto__,x11795_11815){
return (function (l){
if(cljs.core._EQ_.call(null,app_locale_id,cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","locale","localised/locale",1513168907),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)))){
return l;
} else {
return null;
}
});})(props,code,app_locale_id,localised,_STAR_reconciler_STAR_11796,_STAR_depth_STAR_11797,_STAR_shared_STAR_11798,_STAR_instrument_STAR_11799,_STAR_parent_STAR_11800,this$,this__7333__auto__,x11795_11815))
,localised);
var localised__$2 = (cljs.core.truth_(localised__$1)?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(localised__$1):code);
var strings = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.localised","strings","app.localised/strings",45022356)], null));
var locales_selector_props = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locales-selector-props","locales-selector-props",1576211992)], null));
var locales_table_props = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locales-table-props","locales-table-props",-1630080391)], null));
var localised_string_table_props = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"localised-string-table-props","localised-string-table-props",388820504)], null));
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"-----------------------------"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,props),"App render:"))));
} else {
}

om_next_datascript_localisation_demo.utils.html.set_html_lang.call(null,code);

om_next_datascript_localisation_demo.utils.html.set_html_title.call(null,new cljs.core.Keyword(null,"app-title","app-title",1908483663).cljs$core$IFn$_invoke$arity$1(strings));

var attrs11801 = om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"localised-value","localised-value",15124024),new cljs.core.Keyword("app","title","app/title",636408784).cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),((function (props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_11796,_STAR_depth_STAR_11797,_STAR_shared_STAR_11798,_STAR_instrument_STAR_11799,_STAR_parent_STAR_11800,this$,this__7333__auto__,x11795_11815){
return (function (s){
var attrs11802 = s;
return cljs.core.apply.call(null,React.createElement,"h2",((cljs.core.map_QMARK_.call(null,attrs11802))?sablono.interpreter.attributes.call(null,attrs11802):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11802))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11802)], null))));
});})(props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_11796,_STAR_depth_STAR_11797,_STAR_shared_STAR_11798,_STAR_instrument_STAR_11799,_STAR_parent_STAR_11800,this$,this__7333__auto__,x11795_11815))
,new cljs.core.Keyword(null,"string-id","string-id",280427428),new cljs.core.Keyword("app","title","app/title",636408784),new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894),app_locale_id], null)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs11801))?sablono.interpreter.attributes.call(null,attrs11801):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11801))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"localised-value","localised-value",15124024),new cljs.core.Keyword("app","desc","app/desc",2093321443).cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),((function (attrs11801,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_11796,_STAR_depth_STAR_11797,_STAR_shared_STAR_11798,_STAR_instrument_STAR_11799,_STAR_parent_STAR_11800,this$,this__7333__auto__,x11795_11815){
return (function (s){
var attrs11803 = s;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs11803))?sablono.interpreter.attributes.call(null,attrs11803):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11803))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11803)], null))));
});})(attrs11801,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_11796,_STAR_depth_STAR_11797,_STAR_shared_STAR_11798,_STAR_instrument_STAR_11799,_STAR_parent_STAR_11800,this$,this__7333__auto__,x11795_11815))
,new cljs.core.Keyword(null,"string-id","string-id",280427428),new cljs.core.Keyword("app","desc","app/desc",2093321443),new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894),app_locale_id], null)))),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"localised-value","localised-value",15124024),new cljs.core.Keyword("app","missing","app/missing",362604570).cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),((function (attrs11801,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_11796,_STAR_depth_STAR_11797,_STAR_shared_STAR_11798,_STAR_instrument_STAR_11799,_STAR_parent_STAR_11800,this$,this__7333__auto__,x11795_11815){
return (function (s){
var attrs11804 = s;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs11804))?sablono.interpreter.attributes.call(null,attrs11804):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11804))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11804)], null))));
});})(attrs11801,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_11796,_STAR_depth_STAR_11797,_STAR_shared_STAR_11798,_STAR_instrument_STAR_11799,_STAR_parent_STAR_11800,this$,this__7333__auto__,x11795_11815))
,new cljs.core.Keyword(null,"string-id","string-id",280427428),new cljs.core.Keyword("app","missing","app/missing",362604570),new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894),app_locale_id], null)))),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"localised-value","localised-value",15124024),new cljs.core.Keyword("app","title","app/title",636408784).cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"string-id","string-id",280427428),new cljs.core.Keyword("app","title","app/title",636408784),new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894),app_locale_id], null)))),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"localised-value","localised-value",15124024),new cljs.core.Keyword("app","desc","app/desc",2093321443).cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"string-id","string-id",280427428),new cljs.core.Keyword("app","desc","app/desc",2093321443),new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894),app_locale_id], null)))),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"localised-value","localised-value",15124024),new cljs.core.Keyword("app","missing","app/missing",362604570).cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"string-id","string-id",280427428),new cljs.core.Keyword("app","missing","app/missing",362604570),new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894),app_locale_id], null)))),(cljs.core.truth_(code)?(function (){var attrs11805 = new cljs.core.Keyword("app","current-locale","app/current-locale",742335124).cljs$core$IFn$_invoke$arity$1(strings);
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs11805))?sablono.interpreter.attributes.call(null,attrs11805):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11805))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [": ",sablono.interpreter.interpret.call(null,localised__$2)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11805),": ",sablono.interpreter.interpret.call(null,localised__$2)], null))));
})():React.createElement("p",null,"No app locale is set")),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.selector.locales_selector.call(null,locales_selector_props)),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.table.locales_table.call(null,locales_table_props)),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.strings.localised_string_table.call(null,localised_string_table_props))], null):new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11801),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"localised-value","localised-value",15124024),new cljs.core.Keyword("app","desc","app/desc",2093321443).cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),((function (attrs11801,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_11796,_STAR_depth_STAR_11797,_STAR_shared_STAR_11798,_STAR_instrument_STAR_11799,_STAR_parent_STAR_11800,this$,this__7333__auto__,x11795_11815){
return (function (s){
var attrs11808 = s;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs11808))?sablono.interpreter.attributes.call(null,attrs11808):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11808))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11808)], null))));
});})(attrs11801,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_11796,_STAR_depth_STAR_11797,_STAR_shared_STAR_11798,_STAR_instrument_STAR_11799,_STAR_parent_STAR_11800,this$,this__7333__auto__,x11795_11815))
,new cljs.core.Keyword(null,"string-id","string-id",280427428),new cljs.core.Keyword("app","desc","app/desc",2093321443),new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894),app_locale_id], null)))),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.localised_string.localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"localised-value","localised-value",15124024),new cljs.core.Keyword("app","missing","app/missing",362604570).cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),((function (attrs11801,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_11796,_STAR_depth_STAR_11797,_STAR_shared_STAR_11798,_STAR_instrument_STAR_11799,_STAR_parent_STAR_11800,this$,this__7333__auto__,x11795_11815){
return (function (s){
var attrs11809 = s;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs11809))?sablono.interpreter.attributes.call(null,attrs11809):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11809))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11809)], null))));
});})(attrs11801,props,code,app_locale_id,localised,localised__$1,localised__$2,strings,locales_selector_props,locales_table_props,localised_string_table_props,_STAR_reconciler_STAR_11796,_STAR_depth_STAR_11797,_STAR_shared_STAR_11798,_STAR_instrument_STAR_11799,_STAR_parent_STAR_11800,this$,this__7333__auto__,x11795_11815))
,new cljs.core.Keyword(null,"string-id","string-id",280427428),new cljs.core.Keyword("app","missing","app/missing",362604570),new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894),app_locale_id], null)))),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"localised-value","localised-value",15124024),new cljs.core.Keyword("app","title","app/title",636408784).cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"string-id","string-id",280427428),new cljs.core.Keyword("app","title","app/title",636408784),new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894),app_locale_id], null)))),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"localised-value","localised-value",15124024),new cljs.core.Keyword("app","desc","app/desc",2093321443).cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"string-id","string-id",280427428),new cljs.core.Keyword("app","desc","app/desc",2093321443),new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894),app_locale_id], null)))),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"localised-value","localised-value",15124024),new cljs.core.Keyword("app","missing","app/missing",362604570).cljs$core$IFn$_invoke$arity$1(strings)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"string-id","string-id",280427428),new cljs.core.Keyword("app","missing","app/missing",362604570),new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894),app_locale_id], null)))),(cljs.core.truth_(code)?(function (){var attrs11810 = new cljs.core.Keyword("app","current-locale","app/current-locale",742335124).cljs$core$IFn$_invoke$arity$1(strings);
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs11810))?sablono.interpreter.attributes.call(null,attrs11810):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11810))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [": ",sablono.interpreter.interpret.call(null,localised__$2)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11810),": ",sablono.interpreter.interpret.call(null,localised__$2)], null))));
})():React.createElement("p",null,"No app locale is set")),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.selector.locales_selector.call(null,locales_selector_props)),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.table.locales_table.call(null,locales_table_props)),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.locale.strings.localised_string_table.call(null,localised_string_table_props))], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_11800;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11799;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_11798;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_11797;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_11796;
}});})(x11795_11815))
;


om_next_datascript_localisation_demo.components.app.App.prototype.constructor = om_next_datascript_localisation_demo.components.app.App;

om_next_datascript_localisation_demo.components.app.App.prototype.om$isComponent = true;

var x11813_11816 = om_next_datascript_localisation_demo.components.app.App;
x11813_11816.om$next$IQuery$ = true;

x11813_11816.om$next$IQuery$query$arity$1 = ((function (x11813_11816){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"app.locale","app.locale",1484369313)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("locale","code","locale/code",-1620643092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised","localised",-1733242051)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app.localised","strings","app.localised/strings",45022356)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","title","app/title",636408784)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","desc","app/desc",2093321443)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","current-locale","app/current-locale",742335124)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","missing","app/missing",362604570)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales-selector-props","locales-selector-props",1576211992)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales-table-props","locales-table-props",-1630080391)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_next_datascript_localisation_demo.components.locale.table.LocalesTable))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-string-table-props","localised-string-table-props",388820504)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable)))))))))));
});})(x11813_11816))
;


var x11814_11817 = om_next_datascript_localisation_demo.components.app.App.prototype;
x11814_11817.om$next$IQuery$ = true;

x11814_11817.om$next$IQuery$query$arity$1 = ((function (x11814_11817){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"app.locale","app.locale",1484369313)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("locale","code","locale/code",-1620643092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised","localised",-1733242051)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app.localised","strings","app.localised/strings",45022356)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","title","app/title",636408784)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","desc","app/desc",2093321443)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","current-locale","app/current-locale",742335124)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","missing","app/missing",362604570)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales-selector-props","locales-selector-props",1576211992)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales-table-props","locales-table-props",-1630080391)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_next_datascript_localisation_demo.components.locale.table.LocalesTable))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-string-table-props","localised-string-table-props",388820504)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable)))))))))));
});})(x11814_11817))
;


om_next_datascript_localisation_demo.components.app.App.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.app.App.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.app/App";

om_next_datascript_localisation_demo.components.app.App.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write.call(null,writer__7397__auto__,"om-next-datascript-localisation-demo.components.app/App");
});

//# sourceMappingURL=app.js.map?rel=1452424846917