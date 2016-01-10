// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
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
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,locale,cljs.core.cst$kw$value,"None",cljs.core.cst$kw$locale,locale,cljs.core.cst$kw$placeholder,true], null);
});
om_next_datascript_localisation_demo.components.locale.table.fill_empty_locales = (function om_next_datascript_localisation_demo$components$locale$table$fill_empty_locales(order){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.table.empty_locale,order);
});
om_next_datascript_localisation_demo.components.locale.table.find_locales_locale = (function om_next_datascript_localisation_demo$components$locale$table$find_locales_locale(locales,id){
return cljs.core.some((function (l){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_locale,cljs.core.cst$kw$db_SLASH_id], null)))){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null)),cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null)),cljs.core.cst$kw$locale,id,cljs.core.cst$kw$placeholder,false], null);
} else {
return null;
}
}),locales);
});
om_next_datascript_localisation_demo.components.locale.table.get_locales_locale = (function om_next_datascript_localisation_demo$components$locale$table$get_locales_locale(locales,id){
var ll = om_next_datascript_localisation_demo.components.locale.table.find_locales_locale(locales,id);
var or__6142__auto__ = ll;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return om_next_datascript_localisation_demo.components.locale.table.empty_locale(id);
}
});
om_next_datascript_localisation_demo.components.locale.table.find_locales = (function om_next_datascript_localisation_demo$components$locale$table$find_locales(locales,order){
if((cljs.core.empty_QMARK_(locales)) || (cljs.core.not(locales))){
return om_next_datascript_localisation_demo.components.locale.table.fill_empty_locales(order);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var o = cljs.core.first(order);
var order__$1 = cljs.core.rest(order);
while(true){
if(cljs.core.not(o)){
return out;
} else {
var G__17696 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,om_next_datascript_localisation_demo.components.locale.table.get_locales_locale(locales,o));
var G__17697 = cljs.core.first(order__$1);
var G__17698 = cljs.core.rest(order__$1);
out = G__17696;
o = G__17697;
order__$1 = G__17698;
continue;
}
break;
}
}
});
om_next_datascript_localisation_demo.components.locale.table.localised_locale = (function om_next_datascript_localisation_demo$components$locale$table$localised_locale(locale,edited_text){
var G__17710 = "td";
var G__17711 = {"key": cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(locale)};
var G__17712 = sablono.interpreter.interpret((function (){var G__17716 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(locale)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__17710,G__17711){
return (function (p1__17699_SHARP_){
var G__17717 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(locale);
var G__17718 = cljs.core.cst$kw$value;
var G__17719 = p1__17699_SHARP_;
return (edited_text.cljs$core$IFn$_invoke$arity$3 ? edited_text.cljs$core$IFn$_invoke$arity$3(G__17717,G__17718,G__17719) : edited_text.call(null,G__17717,G__17718,G__17719));
});})(G__17710,G__17711))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__17716) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__17716));
})());
return React.createElement(G__17710,G__17711,G__17712);
});
om_next_datascript_localisation_demo.components.locale.table.localised_locale_placeholder = (function om_next_datascript_localisation_demo$components$locale$table$localised_locale_placeholder(locale,localised_locale_create){
var G__17729 = "td";
var G__17730 = {"key": cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(locale)};
var G__17731 = sablono.interpreter.interpret((function (){var G__17734 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(locale)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__17729,G__17730){
return (function (p1__17720_SHARP_){
var G__17735 = cljs.core.cst$kw$locale.cljs$core$IFn$_invoke$arity$1(locale);
var G__17736 = p1__17720_SHARP_;
return (localised_locale_create.cljs$core$IFn$_invoke$arity$2 ? localised_locale_create.cljs$core$IFn$_invoke$arity$2(G__17735,G__17736) : localised_locale_create.call(null,G__17735,G__17736));
});})(G__17729,G__17730))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__17734) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__17734));
})());
return React.createElement(G__17729,G__17730,G__17731);
});
om_next_datascript_localisation_demo.components.locale.table.localised_locale_factory = (function om_next_datascript_localisation_demo$components$locale$table$localised_locale_factory(locale,edited_text,localised_locale_create){
if(cljs.core.truth_(cljs.core.cst$kw$placeholder.cljs$core$IFn$_invoke$arity$1(locale))){
return om_next_datascript_localisation_demo.components.locale.table.localised_locale_placeholder(locale,localised_locale_create);
} else {
return om_next_datascript_localisation_demo.components.locale.table.localised_locale(locale,edited_text);
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

var x17745_17779 = om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.prototype;
x17745_17779.componentWillUpdate = ((function (x17745_17779){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_(this__7334__auto__);

return om.next.merge_pending_state_BANG_(this__7334__auto__);
});})(x17745_17779))
;

x17745_17779.shouldComponentUpdate = ((function (x17745_17779){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__7334__auto__),goog.object.get(next_props__7335__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__7334__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17748 = this__7334__auto__.state;
var G__17749 = "omcljs$state";
return goog.object.get(G__17748,G__17749);
})(),goog.object.get(next_state__7336__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x17745_17779))
;

x17745_17779.componentWillUnmount = ((function (x17745_17779){
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
});})(x17745_17779))
;

x17745_17779.componentDidUpdate = ((function (x17745_17779){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_(this__7334__auto__);
});})(x17745_17779))
;

x17745_17779.isMounted = ((function (x17745_17779){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x17745_17779))
;

x17745_17779.componentWillMount = ((function (x17745_17779){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x17745_17779))
;

x17745_17779.render = ((function (x17745_17779){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_17750 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_17751 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_17752 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_17753 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_17754 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var oprops = om.next.props(this$);
var props = cljs.core.cst$kw$locale.cljs$core$IFn$_invoke$arity$1(oprops);
var map__17755 = props;
var map__17755__$1 = ((((!((map__17755 == null)))?((((map__17755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17755):map__17755);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17755__$1,cljs.core.cst$kw$db_SLASH_id);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17755__$1,cljs.core.cst$kw$value);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17755__$1,cljs.core.cst$kw$locale_SLASH_code);
var enum$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17755__$1,cljs.core.cst$kw$locale_SLASH_enum);
var order = cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(oprops);
var checked = cljs.core.cst$kw$checked.cljs$core$IFn$_invoke$arity$1(oprops);
var locales = cljs.core.cst$kw$localised.cljs$core$IFn$_invoke$arity$1(props);
var localised = om_next_datascript_localisation_demo.components.locale.table.find_locales(locales,order);
var css_class = cljs.core.cst$kw$css_DASH_class.cljs$core$IFn$_invoke$arity$1(oprops);
var map__17756 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__17756__$1 = ((((!((map__17756 == null)))?((((map__17756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17756):map__17756);
var toggle_checkbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17756__$1,cljs.core.cst$kw$toggle_DASH_checkbox);
var edited_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17756__$1,cljs.core.cst$kw$edited_DASH_text);
var edited_text_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17756__$1,cljs.core.cst$kw$edited_DASH_text_DASH_id);
var edited_keyword = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17756__$1,cljs.core.cst$kw$edited_DASH_keyword);
var localised_locale_create = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17756__$1,cljs.core.cst$kw$localised_DASH_locale_DASH_create);
var G__17761 = "tr";
var G__17762 = {"className": sablono.util.join_classes(cljs.core.PersistentHashSet.fromArray([css_class], true))};
var G__17763 = (function (){var G__17768 = "td";
var G__17769 = {"className": "center-column"};
var G__17770 = sablono.interpreter.create_element("input",{"type": "checkbox", "value": id, "checked": checked, "onChange": ((function (G__17768,G__17769,G__17761,G__17762,oprops,props,map__17755,map__17755__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__17756,map__17756__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_17750,_STAR_depth_STAR_17751,_STAR_shared_STAR_17752,_STAR_instrument_STAR_17753,_STAR_parent_STAR_17754,this$,this__7333__auto__,x17745_17779){
return (function (e){
return (toggle_checkbox.cljs$core$IFn$_invoke$arity$0 ? toggle_checkbox.cljs$core$IFn$_invoke$arity$0() : toggle_checkbox.call(null));
});})(G__17768,G__17769,G__17761,G__17762,oprops,props,map__17755,map__17755__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__17756,map__17756__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_17750,_STAR_depth_STAR_17751,_STAR_shared_STAR_17752,_STAR_instrument_STAR_17753,_STAR_parent_STAR_17754,this$,this__7333__auto__,x17745_17779))
});
return React.createElement(G__17768,G__17769,G__17770);
})();
var G__17764 = (function (){var attrs17759 = (function (){var G__17771 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,value], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__17761,G__17762,G__17763,oprops,props,map__17755,map__17755__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__17756,map__17756__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_17750,_STAR_depth_STAR_17751,_STAR_shared_STAR_17752,_STAR_instrument_STAR_17753,_STAR_parent_STAR_17754,this$,this__7333__auto__,x17745_17779){
return (function (p1__17737_SHARP_){
return (edited_text.cljs$core$IFn$_invoke$arity$2 ? edited_text.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,p1__17737_SHARP_) : edited_text.call(null,cljs.core.cst$kw$value,p1__17737_SHARP_));
});})(G__17761,G__17762,G__17763,oprops,props,map__17755,map__17755__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__17756,map__17756__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_17750,_STAR_depth_STAR_17751,_STAR_shared_STAR_17752,_STAR_instrument_STAR_17753,_STAR_parent_STAR_17754,this$,this__7333__auto__,x17745_17779))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__17771) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__17771));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs17759))?sablono.interpreter.attributes(attrs17759):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17759))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17759)], null))));
})();
var G__17765 = (function (){var G__17772 = "td";
var G__17773 = {"className": "center-column"};
var G__17774 = sablono.interpreter.interpret((function (){var G__17775 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,code], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__17772,G__17773,G__17761,G__17762,G__17763,G__17764,oprops,props,map__17755,map__17755__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__17756,map__17756__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_17750,_STAR_depth_STAR_17751,_STAR_shared_STAR_17752,_STAR_instrument_STAR_17753,_STAR_parent_STAR_17754,this$,this__7333__auto__,x17745_17779){
return (function (p1__17738_SHARP_){
return (edited_text.cljs$core$IFn$_invoke$arity$2 ? edited_text.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$locale_SLASH_code,p1__17738_SHARP_) : edited_text.call(null,cljs.core.cst$kw$locale_SLASH_code,p1__17738_SHARP_));
});})(G__17772,G__17773,G__17761,G__17762,G__17763,G__17764,oprops,props,map__17755,map__17755__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__17756,map__17756__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_17750,_STAR_depth_STAR_17751,_STAR_shared_STAR_17752,_STAR_instrument_STAR_17753,_STAR_parent_STAR_17754,this$,this__7333__auto__,x17745_17779))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__17775) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__17775));
})());
return React.createElement(G__17772,G__17773,G__17774);
})();
var G__17766 = (function (){var attrs17760 = (function (){var G__17776 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,[cljs.core.str(enum$)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__17761,G__17762,G__17763,G__17764,G__17765,oprops,props,map__17755,map__17755__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__17756,map__17756__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_17750,_STAR_depth_STAR_17751,_STAR_shared_STAR_17752,_STAR_instrument_STAR_17753,_STAR_parent_STAR_17754,this$,this__7333__auto__,x17745_17779){
return (function (p1__17739_SHARP_){
return (edited_keyword.cljs$core$IFn$_invoke$arity$2 ? edited_keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$locale_SLASH_enum,p1__17739_SHARP_) : edited_keyword.call(null,cljs.core.cst$kw$locale_SLASH_enum,p1__17739_SHARP_));
});})(G__17761,G__17762,G__17763,G__17764,G__17765,oprops,props,map__17755,map__17755__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__17756,map__17756__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_17750,_STAR_depth_STAR_17751,_STAR_shared_STAR_17752,_STAR_instrument_STAR_17753,_STAR_parent_STAR_17754,this$,this__7333__auto__,x17745_17779))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__17776) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__17776));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs17760))?sablono.interpreter.attributes(attrs17760):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17760))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17760)], null))));
})();
var G__17767 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__17761,G__17762,G__17763,G__17764,G__17765,G__17766,oprops,props,map__17755,map__17755__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__17756,map__17756__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_17750,_STAR_depth_STAR_17751,_STAR_shared_STAR_17752,_STAR_instrument_STAR_17753,_STAR_parent_STAR_17754,this$,this__7333__auto__,x17745_17779){
return (function (p1__17740_SHARP_){
return om_next_datascript_localisation_demo.components.locale.table.localised_locale_factory(p1__17740_SHARP_,edited_text_id,localised_locale_create);
});})(G__17761,G__17762,G__17763,G__17764,G__17765,G__17766,oprops,props,map__17755,map__17755__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__17756,map__17756__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_17750,_STAR_depth_STAR_17751,_STAR_shared_STAR_17752,_STAR_instrument_STAR_17753,_STAR_parent_STAR_17754,this$,this__7333__auto__,x17745_17779))
,localised));
return React.createElement(G__17761,G__17762,G__17763,G__17764,G__17765,G__17766,G__17767);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_17754;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_17753;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_17752;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_17751;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_17750;
}});})(x17745_17779))
;


om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.prototype.constructor = om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow;

om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.prototype.om$isComponent = true;

var x17777_17780 = om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow;
x17777_17780.om$next$Ident$ = true;

x17777_17780.om$next$Ident$ident$arity$2 = ((function (x17777_17780){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x17777_17780))
;


var x17778_17781 = om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.prototype;
x17778_17781.om$next$Ident$ = true;

x17778_17781.om$next$Ident$ident$arity$2 = ((function (x17778_17781){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x17778_17781))
;


om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.table/LocalesTableRow";

om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write(writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.table/LocalesTableRow");
});
om_next_datascript_localisation_demo.components.locale.table.locale = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (props){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null));
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

var x17797_18166 = om_next_datascript_localisation_demo.components.locale.table.LocalesTable.prototype;
x17797_18166.componentWillUpdate = ((function (x17797_18166){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_(this__7334__auto__);

return om.next.merge_pending_state_BANG_(this__7334__auto__);
});})(x17797_18166))
;

x17797_18166.shouldComponentUpdate = ((function (x17797_18166){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__7334__auto__),goog.object.get(next_props__7335__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__7334__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17800 = this__7334__auto__.state;
var G__17801 = "omcljs$state";
return goog.object.get(G__17800,G__17801);
})(),goog.object.get(next_state__7336__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x17797_18166))
;

x17797_18166.componentWillUnmount = ((function (x17797_18166){
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
});})(x17797_18166))
;

x17797_18166.componentDidUpdate = ((function (x17797_18166){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_(this__7334__auto__);
});})(x17797_18166))
;

x17797_18166.isMounted = ((function (x17797_18166){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x17797_18166))
;

x17797_18166.componentWillMount = ((function (x17797_18166){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x17797_18166))
;

x17797_18166.initLocalState = ((function (x17797_18166){
return (function (){
var this$ = this;
var ret__7316__auto__ = (function (){var props = om.next.props(this$);
var locales = cljs.core.cst$kw$locales.cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$checkboxes,om_next_datascript_localisation_demo.utils.checkboxes.reset_checkboxes(locales)], null);
})();
var obj17803 = {"omcljs$state":ret__7316__auto__};
return obj17803;
});})(x17797_18166))
;

x17797_18166.componentWillReceiveProps = ((function (x17797_18166){
return (function (next_props__7318__auto__){
var this__7317__auto__ = this;
var this$ = this__7317__auto__;
var new_props = om.next._next_props(next_props__7318__auto__,this__7317__auto__);
var locales = cljs.core.cst$kw$locales.cljs$core$IFn$_invoke$arity$1(new_props);
var state = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var old_checkboxes = cljs.core.cst$kw$checkboxes.cljs$core$IFn$_invoke$arity$1(state);
var add_checkbox_state = ((function (locales,state,old_checkboxes,this$,new_props,this__7317__auto__,x17797_18166){
return (function (new$,old,locale){
var id = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(locale);
if(cljs.core.contains_QMARK_(old,id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(old,id));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,id,false);
}
});})(locales,state,old_checkboxes,this$,new_props,this__7317__auto__,x17797_18166))
;
var new_checkboxes = cljs.core.PersistentArrayMap.EMPTY;
var l = cljs.core.first(locales);
var locales__$1 = cljs.core.rest(locales);
while(true){
if(cljs.core.not(l)){
return om.next.set_state_BANG_(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$checkboxes,new_checkboxes], null));
} else {
var G__18167 = add_checkbox_state(new_checkboxes,old_checkboxes,l);
var G__18168 = cljs.core.first(locales__$1);
var G__18169 = cljs.core.rest(locales__$1);
new_checkboxes = G__18167;
l = G__18168;
locales__$1 = G__18169;
continue;
}
break;
}
});})(x17797_18166))
;

x17797_18166.toggle_checkbox = ((function (x17797_18166){
return (function (id){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (this$,x17797_18166){
return (function (p1__17782_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__17782_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$checkboxes,id], null),cljs.core.not);
});})(this$,x17797_18166))
);
});})(x17797_18166))
;

x17797_18166.edited_text = ((function (x17797_18166){
return (function (id,attrib,text){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$attrib_SLASH_set),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,id),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$attrib),cljs.core._conj(cljs.core.List.EMPTY,attrib),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,text)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales))))));
});})(x17797_18166))
;

x17797_18166.edited_keyword = ((function (x17797_18166){
return (function (id,attrib,text){
var this$ = this;
return this$.edited_text(id,attrib,om_next_datascript_localisation_demo.utils.keywords.keywordify(text));
});})(x17797_18166))
;

x17797_18166.localised_locale_create = ((function (x17797_18166){
return (function (id,locale,text){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$localised_SLASH_create),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,id),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locale),cljs.core._conj(cljs.core.List.EMPTY,locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,text)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales))))));
});})(x17797_18166))
;

x17797_18166.render = ((function (x17797_18166){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_17804 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_17805 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_17806 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_17807 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_17808 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props(this$);
var locales = cljs.core.cst$kw$locales.cljs$core$IFn$_invoke$arity$1(props);
var order = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (props,locales,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166){
return (function (p1__17783_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__17783_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null));
});})(props,locales,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166))
,locales);
var state = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__17809_18170 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,props),"LocalesTable: render: props")));
console.log(G__17809_18170);
} else {
}

var G__17812 = "div";
var G__17813 = {"className": "functional-block"};
var G__17814 = React.createElement("h2",null,"Locales");
var G__17815 = (function (){var G__17817 = "button";
var G__17818 = {"onClick": ((function (G__17817,G__17812,G__17813,G__17814,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166){
return (function (e){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$locale_SLASH_create))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales))))));
});})(G__17817,G__17812,G__17813,G__17814,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166))
};
var G__17819 = "Add a new locale";
return React.createElement(G__17817,G__17818,G__17819);
})();
var G__17816 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.not_empty(locales))?(function (){var G__17995 = "div";
var G__17996 = null;
var G__17997 = (function (){var G__18078 = "table";
var G__18079 = null;
var G__18080 = (function (){var G__18119 = "thead";
var G__18120 = null;
var G__18121 = (function (){var G__18138 = "tr";
var G__18139 = null;
var G__18140 = (function (){var G__18145 = "th";
var G__18146 = {"rowSpan": (2)};
var G__18147 = "Select";
return React.createElement(G__18145,G__18146,G__18147);
})();
var G__18141 = (function (){var G__18148 = "th";
var G__18149 = {"rowSpan": (2)};
var G__18150 = "Name";
return React.createElement(G__18148,G__18149,G__18150);
})();
var G__18142 = (function (){var G__18151 = "th";
var G__18152 = {"rowSpan": (2)};
var G__18153 = "Code";
return React.createElement(G__18151,G__18152,G__18153);
})();
var G__18143 = (function (){var G__18154 = "th";
var G__18155 = {"rowSpan": (2)};
var G__18156 = "Enum";
return React.createElement(G__18154,G__18155,G__18156);
})();
var G__18144 = (function (){var G__18157 = "th";
var G__18158 = {"colSpan": cljs.core.count(order)};
var G__18159 = "Localised";
return React.createElement(G__18157,G__18158,G__18159);
})();
return React.createElement(G__18138,G__18139,G__18140,G__18141,G__18142,G__18143,G__18144);
})();
var G__18122 = (function (){var attrs17821 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__18119,G__18120,G__18121,G__18078,G__18079,G__17995,G__17996,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166){
return (function (l){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale_SLASH_code], null))], null);
});})(G__18119,G__18120,G__18121,G__18078,G__18079,G__17995,G__17996,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166))
,locales);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tr",((cljs.core.map_QMARK_(attrs17821))?sablono.interpreter.attributes(attrs17821):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17821))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17821)], null))));
})();
return React.createElement(G__18119,G__18120,G__18121,G__18122);
})();
var G__18081 = (function (){var attrs17820 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__18078,G__18079,G__18080,G__17995,G__17996,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166){
return (function (l,css_class){
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null));
var checked = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$checkboxes,id], null));
var G__18160 = om.next.computed(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$order,order,cljs.core.cst$kw$checked,checked,cljs.core.cst$kw$css_DASH_class,css_class,cljs.core.cst$kw$locale,l], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$toggle_DASH_checkbox,((function (id,checked,G__18078,G__18079,G__18080,G__17995,G__17996,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166){
return (function (){
return this$.toggle_checkbox(id);
});})(id,checked,G__18078,G__18079,G__18080,G__17995,G__17996,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166))
,cljs.core.cst$kw$edited_DASH_text,((function (id,checked,G__18078,G__18079,G__18080,G__17995,G__17996,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166){
return (function (p1__17784_SHARP_,p2__17785_SHARP_){
return this$.edited_text(id,p1__17784_SHARP_,p2__17785_SHARP_);
});})(id,checked,G__18078,G__18079,G__18080,G__17995,G__17996,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166))
,cljs.core.cst$kw$edited_DASH_text_DASH_id,((function (id,checked,G__18078,G__18079,G__18080,G__17995,G__17996,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166){
return (function (p1__17786_SHARP_,p2__17787_SHARP_,p3__17788_SHARP_){
return this$.edited_text(p1__17786_SHARP_,p2__17787_SHARP_,p3__17788_SHARP_);
});})(id,checked,G__18078,G__18079,G__18080,G__17995,G__17996,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166))
,cljs.core.cst$kw$edited_DASH_keyword,((function (id,checked,G__18078,G__18079,G__18080,G__17995,G__17996,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166){
return (function (p1__17789_SHARP_,p2__17790_SHARP_){
return this$.edited_keyword(id,p1__17789_SHARP_,p2__17790_SHARP_);
});})(id,checked,G__18078,G__18079,G__18080,G__17995,G__17996,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166))
,cljs.core.cst$kw$localised_DASH_locale_DASH_create,((function (id,checked,G__18078,G__18079,G__18080,G__17995,G__17996,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166){
return (function (p1__17791_SHARP_,p2__17792_SHARP_){
return this$.localised_locale_create(id,p1__17791_SHARP_,p2__17792_SHARP_);
});})(id,checked,G__18078,G__18079,G__18080,G__17995,G__17996,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166))
], null));
return (om_next_datascript_localisation_demo.components.locale.table.locale.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.table.locale.cljs$core$IFn$_invoke$arity$1(G__18160) : om_next_datascript_localisation_demo.components.locale.table.locale.call(null,G__18160));
});})(G__18078,G__18079,G__18080,G__17995,G__17996,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166))
,locales,cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["odd","even"], null)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tbody",((cljs.core.map_QMARK_(attrs17820))?sablono.interpreter.attributes(attrs17820):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17820))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17820)], null))));
})();
return React.createElement(G__18078,G__18079,G__18080,G__18081);
})();
var G__17998 = (function (){var G__18161 = "button";
var G__18162 = {"onClick": ((function (G__18161,G__17995,G__17996,G__17997,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166){
return (function (e){
var state__$1 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var checkboxes = cljs.core.cst$kw$checkboxes.cljs$core$IFn$_invoke$arity$1(state__$1);
var ids = om_next_datascript_localisation_demo.utils.checkboxes.selected_checkbox_ids(checkboxes);
if(cljs.core.empty_QMARK_(ids)){
return null;
} else {
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$locale_SLASH_delete),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ids),cljs.core._conj(cljs.core.List.EMPTY,ids)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales))))));
}
});})(G__18161,G__17995,G__17996,G__17997,G__17812,G__17813,G__17814,G__17815,props,locales,order,state,_STAR_reconciler_STAR_17804,_STAR_depth_STAR_17805,_STAR_shared_STAR_17806,_STAR_instrument_STAR_17807,_STAR_parent_STAR_17808,this$,this__7333__auto__,x17797_18166))
};
var G__18163 = "Delete selected";
return React.createElement(G__18161,G__18162,G__18163);
})();
return React.createElement(G__17995,G__17996,G__17997,G__17998);
})():null));
return React.createElement(G__17812,G__17813,G__17814,G__17815,G__17816);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_17808;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_17807;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_17806;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_17805;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_17804;
}});})(x17797_18166))
;


om_next_datascript_localisation_demo.components.locale.table.LocalesTable.prototype.constructor = om_next_datascript_localisation_demo.components.locale.table.LocalesTable;

om_next_datascript_localisation_demo.components.locale.table.LocalesTable.prototype.om$isComponent = true;

var x18164_18171 = om_next_datascript_localisation_demo.components.locale.table.LocalesTable;
x18164_18171.om$next$IQuery$ = true;

x18164_18171.om$next$IQuery$query$arity$1 = ((function (x18164_18171){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales)))));
});})(x18164_18171))
;


var x18165_18172 = om_next_datascript_localisation_demo.components.locale.table.LocalesTable.prototype;
x18165_18172.om$next$IQuery$ = true;

x18165_18172.om$next$IQuery$query$arity$1 = ((function (x18165_18172){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales)))));
});})(x18165_18172))
;


om_next_datascript_localisation_demo.components.locale.table.LocalesTable.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.table.LocalesTable.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.table/LocalesTable";

om_next_datascript_localisation_demo.components.locale.table.LocalesTable.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write(writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.table/LocalesTable");
});
om_next_datascript_localisation_demo.components.locale.table.locales_table = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.components.locale.table.LocalesTable);
