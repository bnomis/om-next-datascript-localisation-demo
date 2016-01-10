// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_datascript_localisation_demo.components.locale.table');
goog.require('cljs.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.utils.checkboxes');
goog.require('om_next_datascript_localisation_demo.utils.keywords');
goog.require('om.next');
goog.require('om_next_datascript_localisation_demo.components.editable_text');
goog.require('clojure.string');
om_next_datascript_localisation_demo.components.locale.table.empty_locale = (function om_next_datascript_localisation_demo$components$locale$table$empty_locale(locale){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),locale,new cljs.core.Keyword(null,"value","value",305978217),"None",new cljs.core.Keyword(null,"locale","locale",-2115712697),locale,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),true], null);
});
om_next_datascript_localisation_demo.components.locale.table.fill_empty_locales = (function om_next_datascript_localisation_demo$components$locale$table$fill_empty_locales(order){
return cljs.core.mapv.call(null,om_next_datascript_localisation_demo.components.locale.table.empty_locale,order);
});
om_next_datascript_localisation_demo.components.locale.table.find_locales_locale = (function om_next_datascript_localisation_demo$components$locale$table$find_locales_locale(locales,id){
return cljs.core.some.call(null,(function (l){
if(cljs.core._EQ_.call(null,id,cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","locale","localised/locale",1513168907),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)),new cljs.core.Keyword(null,"locale","locale",-2115712697),id,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),false], null);
} else {
return null;
}
}),locales);
});
om_next_datascript_localisation_demo.components.locale.table.get_locales_locale = (function om_next_datascript_localisation_demo$components$locale$table$get_locales_locale(locales,id){
var ll = om_next_datascript_localisation_demo.components.locale.table.find_locales_locale.call(null,locales,id);
var or__6142__auto__ = ll;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return om_next_datascript_localisation_demo.components.locale.table.empty_locale.call(null,id);
}
});
om_next_datascript_localisation_demo.components.locale.table.find_locales = (function om_next_datascript_localisation_demo$components$locale$table$find_locales(locales,order){
if((cljs.core.empty_QMARK_.call(null,locales)) || (cljs.core.not.call(null,locales))){
return om_next_datascript_localisation_demo.components.locale.table.fill_empty_locales.call(null,order);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var o = cljs.core.first.call(null,order);
var order__$1 = cljs.core.rest.call(null,order);
while(true){
if(cljs.core.not.call(null,o)){
return out;
} else {
var G__11552 = cljs.core.conj.call(null,out,om_next_datascript_localisation_demo.components.locale.table.get_locales_locale.call(null,locales,o));
var G__11553 = cljs.core.first.call(null,order__$1);
var G__11554 = cljs.core.rest.call(null,order__$1);
out = G__11552;
o = G__11553;
order__$1 = G__11554;
continue;
}
break;
}
}
});
om_next_datascript_localisation_demo.components.locale.table.localised_locale = (function om_next_datascript_localisation_demo$components$locale$table$localised_locale(locale,edited_text){
return React.createElement("td",{"key": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(locale)},sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(locale)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__11555_SHARP_){
return edited_text.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(locale),new cljs.core.Keyword(null,"value","value",305978217),p1__11555_SHARP_);
})], null)))));
});
om_next_datascript_localisation_demo.components.locale.table.localised_locale_placeholder = (function om_next_datascript_localisation_demo$components$locale$table$localised_locale_placeholder(locale,localised_locale_create){
return React.createElement("td",{"key": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(locale)},sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(locale)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__11556_SHARP_){
return localised_locale_create.call(null,new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(locale),p1__11556_SHARP_);
})], null)))));
});
om_next_datascript_localisation_demo.components.locale.table.localised_locale_factory = (function om_next_datascript_localisation_demo$components$locale$table$localised_locale_factory(locale,edited_text,localised_locale_create){
if(cljs.core.truth_(new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(locale))){
return om_next_datascript_localisation_demo.components.locale.table.localised_locale_placeholder.call(null,locale,localised_locale_create);
} else {
return om_next_datascript_localisation_demo.components.locale.table.localised_locale.call(null,locale,edited_text);
}
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow = (function om_next_datascript_localisation_demo$components$locale$table$LocalesTableRow(){
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.prototype = goog.object.clone(React.Component.prototype);

var x11565_11579 = om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.prototype;
x11565_11579.componentWillUpdate = ((function (x11565_11579){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7334__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7334__auto__);
});})(x11565_11579))
;

x11565_11579.shouldComponentUpdate = ((function (x11565_11579){
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
});})(x11565_11579))
;

x11565_11579.componentWillUnmount = ((function (x11565_11579){
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
});})(x11565_11579))
;

x11565_11579.componentDidUpdate = ((function (x11565_11579){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7334__auto__);
});})(x11565_11579))
;

x11565_11579.isMounted = ((function (x11565_11579){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x11565_11579))
;

x11565_11579.componentWillMount = ((function (x11565_11579){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7339__auto__,this__7334__auto__);
}
});})(x11565_11579))
;

x11565_11579.render = ((function (x11565_11579){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_11566 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_11567 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_11568 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_11569 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_11570 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var oprops = om.next.props.call(null,this$);
var props = new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(oprops);
var map__11571 = props;
var map__11571__$1 = ((((!((map__11571 == null)))?((((map__11571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11571):map__11571);
var id = cljs.core.get.call(null,map__11571__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var value = cljs.core.get.call(null,map__11571__$1,new cljs.core.Keyword(null,"value","value",305978217));
var code = cljs.core.get.call(null,map__11571__$1,new cljs.core.Keyword("locale","code","locale/code",-1620643092));
var enum$ = cljs.core.get.call(null,map__11571__$1,new cljs.core.Keyword("locale","enum","locale/enum",563985782));
var order = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(oprops);
var checked = new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(oprops);
var locales = new cljs.core.Keyword(null,"localised","localised",-1733242051).cljs$core$IFn$_invoke$arity$1(props);
var localised = om_next_datascript_localisation_demo.components.locale.table.find_locales.call(null,locales,order);
var css_class = new cljs.core.Keyword(null,"css-class","css-class",-919455334).cljs$core$IFn$_invoke$arity$1(oprops);
var map__11572 = om.next.get_computed.call(null,this$);
var map__11572__$1 = ((((!((map__11572 == null)))?((((map__11572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11572):map__11572);
var toggle_checkbox = cljs.core.get.call(null,map__11572__$1,new cljs.core.Keyword(null,"toggle-checkbox","toggle-checkbox",-1080166072));
var edited_text = cljs.core.get.call(null,map__11572__$1,new cljs.core.Keyword(null,"edited-text","edited-text",-1377629021));
var edited_text_id = cljs.core.get.call(null,map__11572__$1,new cljs.core.Keyword(null,"edited-text-id","edited-text-id",1689938980));
var edited_keyword = cljs.core.get.call(null,map__11572__$1,new cljs.core.Keyword(null,"edited-keyword","edited-keyword",1393930311));
var localised_locale_create = cljs.core.get.call(null,map__11572__$1,new cljs.core.Keyword(null,"localised-locale-create","localised-locale-create",-561299149));
return React.createElement("tr",{"className": sablono.util.join_classes.call(null,cljs.core.PersistentHashSet.fromArray([css_class], true))},React.createElement("td",{"className": "center-column"},sablono.interpreter.create_element.call(null,"input",{"type": "checkbox", "value": id, "checked": checked, "onChange": ((function (oprops,props,map__11571,map__11571__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__11572,map__11572__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_11566,_STAR_depth_STAR_11567,_STAR_shared_STAR_11568,_STAR_instrument_STAR_11569,_STAR_parent_STAR_11570,this$,this__7333__auto__,x11565_11579){
return (function (e){
return toggle_checkbox.call(null);
});})(oprops,props,map__11571,map__11571__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__11572,map__11572__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_11566,_STAR_depth_STAR_11567,_STAR_shared_STAR_11568,_STAR_instrument_STAR_11569,_STAR_parent_STAR_11570,this$,this__7333__auto__,x11565_11579))
})),(function (){var attrs11575 = om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),((function (oprops,props,map__11571,map__11571__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__11572,map__11572__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_11566,_STAR_depth_STAR_11567,_STAR_shared_STAR_11568,_STAR_instrument_STAR_11569,_STAR_parent_STAR_11570,this$,this__7333__auto__,x11565_11579){
return (function (p1__11557_SHARP_){
return edited_text.call(null,new cljs.core.Keyword(null,"value","value",305978217),p1__11557_SHARP_);
});})(oprops,props,map__11571,map__11571__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__11572,map__11572__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_11566,_STAR_depth_STAR_11567,_STAR_shared_STAR_11568,_STAR_instrument_STAR_11569,_STAR_parent_STAR_11570,this$,this__7333__auto__,x11565_11579))
], null)));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs11575))?sablono.interpreter.attributes.call(null,attrs11575):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11575))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11575)], null))));
})(),React.createElement("td",{"className": "center-column"},sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),code], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),((function (oprops,props,map__11571,map__11571__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__11572,map__11572__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_11566,_STAR_depth_STAR_11567,_STAR_shared_STAR_11568,_STAR_instrument_STAR_11569,_STAR_parent_STAR_11570,this$,this__7333__auto__,x11565_11579){
return (function (p1__11558_SHARP_){
return edited_text.call(null,new cljs.core.Keyword("locale","code","locale/code",-1620643092),p1__11558_SHARP_);
});})(oprops,props,map__11571,map__11571__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__11572,map__11572__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_11566,_STAR_depth_STAR_11567,_STAR_shared_STAR_11568,_STAR_instrument_STAR_11569,_STAR_parent_STAR_11570,this$,this__7333__auto__,x11565_11579))
], null))))),(function (){var attrs11576 = om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str(enum$)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),((function (oprops,props,map__11571,map__11571__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__11572,map__11572__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_11566,_STAR_depth_STAR_11567,_STAR_shared_STAR_11568,_STAR_instrument_STAR_11569,_STAR_parent_STAR_11570,this$,this__7333__auto__,x11565_11579){
return (function (p1__11559_SHARP_){
return edited_keyword.call(null,new cljs.core.Keyword("locale","enum","locale/enum",563985782),p1__11559_SHARP_);
});})(oprops,props,map__11571,map__11571__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__11572,map__11572__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_11566,_STAR_depth_STAR_11567,_STAR_shared_STAR_11568,_STAR_instrument_STAR_11569,_STAR_parent_STAR_11570,this$,this__7333__auto__,x11565_11579))
], null)));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs11576))?sablono.interpreter.attributes.call(null,attrs11576):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11576))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11576)], null))));
})(),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (oprops,props,map__11571,map__11571__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__11572,map__11572__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_11566,_STAR_depth_STAR_11567,_STAR_shared_STAR_11568,_STAR_instrument_STAR_11569,_STAR_parent_STAR_11570,this$,this__7333__auto__,x11565_11579){
return (function (p1__11560_SHARP_){
return om_next_datascript_localisation_demo.components.locale.table.localised_locale_factory.call(null,p1__11560_SHARP_,edited_text_id,localised_locale_create);
});})(oprops,props,map__11571,map__11571__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__11572,map__11572__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_11566,_STAR_depth_STAR_11567,_STAR_shared_STAR_11568,_STAR_instrument_STAR_11569,_STAR_parent_STAR_11570,this$,this__7333__auto__,x11565_11579))
,localised)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_11570;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11569;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_11568;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_11567;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_11566;
}});})(x11565_11579))
;


om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.prototype.constructor = om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow;

om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.prototype.om$isComponent = true;

var x11577_11580 = om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow;
x11577_11580.om$next$Ident$ = true;

x11577_11580.om$next$Ident$ident$arity$2 = ((function (x11577_11580){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x11577_11580))
;


var x11578_11581 = om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.prototype;
x11578_11581.om$next$Ident$ = true;

x11578_11581.om$next$Ident$ident$arity$2 = ((function (x11578_11581){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x11578_11581))
;


om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.table/LocalesTableRow";

om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write.call(null,writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.table/LocalesTableRow");
});
om_next_datascript_localisation_demo.components.locale.table.locale = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
return cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
})], null));
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.table.LocalesTable = (function om_next_datascript_localisation_demo$components$locale$table$LocalesTable(){
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.locale.table.LocalesTable.prototype = goog.object.clone(React.Component.prototype);

var x11597_11619 = om_next_datascript_localisation_demo.components.locale.table.LocalesTable.prototype;
x11597_11619.componentWillUpdate = ((function (x11597_11619){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7334__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7334__auto__);
});})(x11597_11619))
;

x11597_11619.shouldComponentUpdate = ((function (x11597_11619){
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
});})(x11597_11619))
;

x11597_11619.componentWillUnmount = ((function (x11597_11619){
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
});})(x11597_11619))
;

x11597_11619.componentDidUpdate = ((function (x11597_11619){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7334__auto__);
});})(x11597_11619))
;

x11597_11619.isMounted = ((function (x11597_11619){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x11597_11619))
;

x11597_11619.componentWillMount = ((function (x11597_11619){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7339__auto__,this__7334__auto__);
}
});})(x11597_11619))
;

x11597_11619.initLocalState = ((function (x11597_11619){
return (function (){
var this$ = this;
var ret__7316__auto__ = (function (){var props = om.next.props.call(null,this$);
var locales = new cljs.core.Keyword(null,"locales","locales",1785635955).cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),om_next_datascript_localisation_demo.utils.checkboxes.reset_checkboxes.call(null,locales)], null);
})();
var obj11599 = {"omcljs$state":ret__7316__auto__};
return obj11599;
});})(x11597_11619))
;

x11597_11619.componentWillReceiveProps = ((function (x11597_11619){
return (function (next_props__7318__auto__){
var this__7317__auto__ = this;
var this$ = this__7317__auto__;
var new_props = om.next._next_props.call(null,next_props__7318__auto__,this__7317__auto__);
var locales = new cljs.core.Keyword(null,"locales","locales",1785635955).cljs$core$IFn$_invoke$arity$1(new_props);
var state = om.next.get_state.call(null,this$);
var old_checkboxes = new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762).cljs$core$IFn$_invoke$arity$1(state);
var add_checkbox_state = ((function (locales,state,old_checkboxes,this$,new_props,this__7317__auto__,x11597_11619){
return (function (new$,old,locale){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(locale);
if(cljs.core.contains_QMARK_.call(null,old,id)){
return cljs.core.assoc.call(null,new$,id,cljs.core.get.call(null,old,id));
} else {
return cljs.core.assoc.call(null,new$,id,false);
}
});})(locales,state,old_checkboxes,this$,new_props,this__7317__auto__,x11597_11619))
;
var new_checkboxes = cljs.core.PersistentArrayMap.EMPTY;
var l = cljs.core.first.call(null,locales);
var locales__$1 = cljs.core.rest.call(null,locales);
while(true){
if(cljs.core.not.call(null,l)){
return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),new_checkboxes], null));
} else {
var G__11620 = add_checkbox_state.call(null,new_checkboxes,old_checkboxes,l);
var G__11621 = cljs.core.first.call(null,locales__$1);
var G__11622 = cljs.core.rest.call(null,locales__$1);
new_checkboxes = G__11620;
l = G__11621;
locales__$1 = G__11622;
continue;
}
break;
}
});})(x11597_11619))
;

x11597_11619.toggle_checkbox = ((function (x11597_11619){
return (function (id){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,((function (this$,x11597_11619){
return (function (p1__11582_SHARP_){
return cljs.core.update_in.call(null,p1__11582_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),id], null),cljs.core.not);
});})(this$,x11597_11619))
);
});})(x11597_11619))
;

x11597_11619.edited_text = ((function (x11597_11619){
return (function (id,attrib,text){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("attrib","set","attrib/set",533812063,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"attrib","attrib",-1137323804)),cljs.core._conj.call(null,cljs.core.List.EMPTY,attrib),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,text)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales","locales",1785635955)))))));
});})(x11597_11619))
;

x11597_11619.edited_keyword = ((function (x11597_11619){
return (function (id,attrib,text){
var this$ = this;
return this$.edited_text(id,attrib,om_next_datascript_localisation_demo.utils.keywords.keywordify.call(null,text));
});})(x11597_11619))
;

x11597_11619.localised_locale_create = ((function (x11597_11619){
return (function (id,locale,text){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("localised","create","localised/create",-603860581,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locale","locale",-2115712697)),cljs.core._conj.call(null,cljs.core.List.EMPTY,locale),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,text)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales","locales",1785635955)))))));
});})(x11597_11619))
;

x11597_11619.render = ((function (x11597_11619){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_11600 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_11601 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_11602 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_11603 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_11604 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props.call(null,this$);
var locales = new cljs.core.Keyword(null,"locales","locales",1785635955).cljs$core$IFn$_invoke$arity$1(props);
var order = cljs.core.mapv.call(null,((function (props,locales,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619){
return (function (p1__11583_SHARP_){
return cljs.core.get_in.call(null,p1__11583_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
});})(props,locales,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619))
,locales);
var state = om.next.get_state.call(null,this$);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,props),"LocalesTable: render: props"))));
} else {
}

return React.createElement("div",{"className": "functional-block"},React.createElement("h2",null,"Locales"),React.createElement("button",{"onClick": ((function (props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("locale","create","locale/create",-610054475,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales","locales",1785635955)))))));
});})(props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619))
},"Add a new locale"),sablono.interpreter.interpret.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,locales))?React.createElement("div",null,React.createElement("table",null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",{"rowSpan": (2)},"Select"),React.createElement("th",{"rowSpan": (2)},"Name"),React.createElement("th",{"rowSpan": (2)},"Code"),React.createElement("th",{"rowSpan": (2)},"Enum"),React.createElement("th",{"colSpan": cljs.core.count.call(null,order)},"Localised")),(function (){var attrs11608 = cljs.core.map.call(null,((function (props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619){
return (function (l){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null),cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("locale","code","locale/code",-1620643092)], null))], null);
});})(props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619))
,locales);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs11608))?sablono.interpreter.attributes.call(null,attrs11608):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11608))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11608)], null))));
})()),(function (){var attrs11607 = cljs.core.map.call(null,((function (props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619){
return (function (l,css_class){
var id = cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
var checked = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),id], null));
return om_next_datascript_localisation_demo.components.locale.table.locale.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),order,new cljs.core.Keyword(null,"checked","checked",-50955819),checked,new cljs.core.Keyword(null,"css-class","css-class",-919455334),css_class,new cljs.core.Keyword(null,"locale","locale",-2115712697),l], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toggle-checkbox","toggle-checkbox",-1080166072),((function (id,checked,props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619){
return (function (){
return this$.toggle_checkbox(id);
});})(id,checked,props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619))
,new cljs.core.Keyword(null,"edited-text","edited-text",-1377629021),((function (id,checked,props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619){
return (function (p1__11584_SHARP_,p2__11585_SHARP_){
return this$.edited_text(id,p1__11584_SHARP_,p2__11585_SHARP_);
});})(id,checked,props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619))
,new cljs.core.Keyword(null,"edited-text-id","edited-text-id",1689938980),((function (id,checked,props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619){
return (function (p1__11586_SHARP_,p2__11587_SHARP_,p3__11588_SHARP_){
return this$.edited_text(p1__11586_SHARP_,p2__11587_SHARP_,p3__11588_SHARP_);
});})(id,checked,props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619))
,new cljs.core.Keyword(null,"edited-keyword","edited-keyword",1393930311),((function (id,checked,props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619){
return (function (p1__11589_SHARP_,p2__11590_SHARP_){
return this$.edited_keyword(id,p1__11589_SHARP_,p2__11590_SHARP_);
});})(id,checked,props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619))
,new cljs.core.Keyword(null,"localised-locale-create","localised-locale-create",-561299149),((function (id,checked,props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619){
return (function (p1__11591_SHARP_,p2__11592_SHARP_){
return this$.localised_locale_create(id,p1__11591_SHARP_,p2__11592_SHARP_);
});})(id,checked,props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619))
], null)));
});})(props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619))
,locales,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["odd","even"], null)));
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs11607))?sablono.interpreter.attributes.call(null,attrs11607):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11607))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11607)], null))));
})()),React.createElement("button",{"onClick": ((function (props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619){
return (function (e){
var state__$1 = om.next.get_state.call(null,this$);
var checkboxes = new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762).cljs$core$IFn$_invoke$arity$1(state__$1);
var ids = om_next_datascript_localisation_demo.utils.checkboxes.selected_checkbox_ids.call(null,checkboxes);
if(cljs.core.empty_QMARK_.call(null,ids)){
return null;
} else {
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("locale","delete","locale/delete",-1176328247,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ids","ids",-998535796)),cljs.core._conj.call(null,cljs.core.List.EMPTY,ids)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales","locales",1785635955)))))));
}
});})(props,locales,order,state,_STAR_reconciler_STAR_11600,_STAR_depth_STAR_11601,_STAR_shared_STAR_11602,_STAR_instrument_STAR_11603,_STAR_parent_STAR_11604,this$,this__7333__auto__,x11597_11619))
},"Delete selected")):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_11604;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11603;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_11602;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_11601;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_11600;
}});})(x11597_11619))
;


om_next_datascript_localisation_demo.components.locale.table.LocalesTable.prototype.constructor = om_next_datascript_localisation_demo.components.locale.table.LocalesTable;

om_next_datascript_localisation_demo.components.locale.table.LocalesTable.prototype.om$isComponent = true;

var x11617_11623 = om_next_datascript_localisation_demo.components.locale.table.LocalesTable;
x11617_11623.om$next$IQuery$ = true;

x11617_11623.om$next$IQuery$query$arity$1 = ((function (x11617_11623){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales","locales",1785635955))))));
});})(x11617_11623))
;


var x11618_11624 = om_next_datascript_localisation_demo.components.locale.table.LocalesTable.prototype;
x11618_11624.om$next$IQuery$ = true;

x11618_11624.om$next$IQuery$query$arity$1 = ((function (x11618_11624){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales","locales",1785635955))))));
});})(x11618_11624))
;


om_next_datascript_localisation_demo.components.locale.table.LocalesTable.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.table.LocalesTable.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.table/LocalesTable";

om_next_datascript_localisation_demo.components.locale.table.LocalesTable.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write.call(null,writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.table/LocalesTable");
});
om_next_datascript_localisation_demo.components.locale.table.locales_table = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.table.LocalesTable);

//# sourceMappingURL=table.js.map?rel=1452424845573