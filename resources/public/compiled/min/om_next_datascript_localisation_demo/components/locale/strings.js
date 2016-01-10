// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.components.locale.strings');
goog.require('cljs.core');
goog.require('om.next');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('om_next_datascript_localisation_demo.components.editable_text');
goog.require('om_next_datascript_localisation_demo.utils.keywords');
goog.require('om_next_datascript_localisation_demo.utils.checkboxes');
om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholder = (function om_next_datascript_localisation_demo$components$locale$strings$make_localised_placeholder(id){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$value,"None",cljs.core.cst$kw$placeholder,true], null);
});
om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholders = (function om_next_datascript_localisation_demo$components$locale$strings$make_localised_placeholders(order){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholder,order);
});
om_next_datascript_localisation_demo.components.locale.strings.find_localised = (function om_next_datascript_localisation_demo$components$locale$strings$find_localised(localised,id){
return cljs.core.some((function (l){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_locale,cljs.core.cst$kw$db_SLASH_id], null)))){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(l),cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null)),cljs.core.cst$kw$placeholder,false], null);
} else {
return null;
}
}),localised);
});
om_next_datascript_localisation_demo.components.locale.strings.get_localised = (function om_next_datascript_localisation_demo$components$locale$strings$get_localised(localised,id){
var ll = om_next_datascript_localisation_demo.components.locale.strings.find_localised(localised,id);
var or__6142__auto__ = ll;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholder(id);
}
});
om_next_datascript_localisation_demo.components.locale.strings.order_localised = (function om_next_datascript_localisation_demo$components$locale$strings$order_localised(localised,order){
if((cljs.core.empty_QMARK_(localised)) || (cljs.core.not(localised))){
return om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholders(order);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var o = cljs.core.first(order);
var order__$1 = cljs.core.rest(order);
while(true){
if(cljs.core.not(o)){
return out;
} else {
var G__26668 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,om_next_datascript_localisation_demo.components.locale.strings.get_localised(localised,o));
var G__26669 = cljs.core.first(order__$1);
var G__26670 = cljs.core.rest(order__$1);
out = G__26668;
o = G__26669;
order__$1 = G__26670;
continue;
}
break;
}
}
});
om_next_datascript_localisation_demo.components.locale.strings.localised = (function om_next_datascript_localisation_demo$components$locale$strings$localised(locale,edited_text){
var G__26682 = "td";
var G__26683 = {"key": cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(locale)};
var G__26684 = sablono.interpreter.interpret((function (){var G__26688 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(locale)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__26682,G__26683){
return (function (p1__26671_SHARP_){
var G__26689 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(locale);
var G__26690 = cljs.core.cst$kw$value;
var G__26691 = p1__26671_SHARP_;
return (edited_text.cljs$core$IFn$_invoke$arity$3 ? edited_text.cljs$core$IFn$_invoke$arity$3(G__26689,G__26690,G__26691) : edited_text.call(null,G__26689,G__26690,G__26691));
});})(G__26682,G__26683))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__26688) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__26688));
})());
return React.createElement(G__26682,G__26683,G__26684);
});
om_next_datascript_localisation_demo.components.locale.strings.localised_placeholder = (function om_next_datascript_localisation_demo$components$locale$strings$localised_placeholder(locale,localised_create){
var G__26701 = "td";
var G__26702 = {"key": cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(locale)};
var G__26703 = sablono.interpreter.interpret((function (){var G__26706 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(locale)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__26701,G__26702){
return (function (p1__26692_SHARP_){
var G__26707 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(locale);
var G__26708 = p1__26692_SHARP_;
return (localised_create.cljs$core$IFn$_invoke$arity$2 ? localised_create.cljs$core$IFn$_invoke$arity$2(G__26707,G__26708) : localised_create.call(null,G__26707,G__26708));
});})(G__26701,G__26702))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__26706) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__26706));
})());
return React.createElement(G__26701,G__26702,G__26703);
});
om_next_datascript_localisation_demo.components.locale.strings.localised_factory = (function om_next_datascript_localisation_demo$components$locale$strings$localised_factory(locale,edited_text,localised_create){
if(cljs.core.truth_(cljs.core.cst$kw$placeholder.cljs$core$IFn$_invoke$arity$1(locale))){
return om_next_datascript_localisation_demo.components.locale.strings.localised_placeholder(locale,localised_create);
} else {
return om_next_datascript_localisation_demo.components.locale.strings.localised(locale,edited_text);
}
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow = (function om_next_datascript_localisation_demo$components$locale$strings$LocalisedStringTableRow(){
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype = goog.object.clone(React.Component.prototype);

var x26716_26745 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype;
x26716_26745.componentWillUpdate = ((function (x26716_26745){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_(this__9236__auto__);

return om.next.merge_pending_state_BANG_(this__9236__auto__);
});})(x26716_26745))
;

x26716_26745.shouldComponentUpdate = ((function (x26716_26745){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__26719 = this__9236__auto__.state;
var G__26720 = "omcljs$state";
return goog.object.get(G__26719,G__26720);
})(),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x26716_26745))
;

x26716_26745.componentWillUnmount = ((function (x26716_26745){
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
});})(x26716_26745))
;

x26716_26745.componentDidUpdate = ((function (x26716_26745){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_(this__9236__auto__);
});})(x26716_26745))
;

x26716_26745.isMounted = ((function (x26716_26745){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26716_26745))
;

x26716_26745.componentWillMount = ((function (x26716_26745){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x26716_26745))
;

x26716_26745.render = ((function (x26716_26745){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_26721 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26722 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26723 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26724 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26725 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props(this$);
var localised_string = cljs.core.cst$kw$localised_DASH_string.cljs$core$IFn$_invoke$arity$1(props);
var map__26726 = localised_string;
var map__26726__$1 = ((((!((map__26726 == null)))?((((map__26726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26726):map__26726);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26726__$1,cljs.core.cst$kw$db_SLASH_id);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26726__$1,cljs.core.cst$kw$string_SLASH_ident);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26726__$1,cljs.core.cst$kw$value);
var localised = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26726__$1,cljs.core.cst$kw$localised);
var order = cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(props);
var checked = cljs.core.cst$kw$checked.cljs$core$IFn$_invoke$arity$1(props);
var css_class = cljs.core.cst$kw$css_DASH_class.cljs$core$IFn$_invoke$arity$1(props);
var localised__$1 = om_next_datascript_localisation_demo.components.locale.strings.order_localised(localised,order);
var map__26727 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__26727__$1 = ((((!((map__26727 == null)))?((((map__26727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26727):map__26727);
var toggle_checkbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26727__$1,cljs.core.cst$kw$toggle_DASH_checkbox);
var edited_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26727__$1,cljs.core.cst$kw$edited_DASH_text);
var edited_text_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26727__$1,cljs.core.cst$kw$edited_DASH_text_DASH_id);
var edited_keyword = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26727__$1,cljs.core.cst$kw$edited_DASH_keyword);
var localised_create = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26727__$1,cljs.core.cst$kw$localised_DASH_create);
var G__26732 = "tr";
var G__26733 = {"className": sablono.util.join_classes(cljs.core.PersistentHashSet.fromArray([css_class], true))};
var G__26734 = (function (){var G__26738 = "td";
var G__26739 = {"className": "center-column"};
var G__26740 = sablono.interpreter.create_element("input",{"type": "checkbox", "value": id, "checked": checked, "onChange": ((function (G__26738,G__26739,G__26732,G__26733,props,localised_string,map__26726,map__26726__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__26727,map__26727__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_26721,_STAR_depth_STAR_26722,_STAR_shared_STAR_26723,_STAR_instrument_STAR_26724,_STAR_parent_STAR_26725,this$,this__9235__auto__,x26716_26745){
return (function (e){
return (toggle_checkbox.cljs$core$IFn$_invoke$arity$0 ? toggle_checkbox.cljs$core$IFn$_invoke$arity$0() : toggle_checkbox.call(null));
});})(G__26738,G__26739,G__26732,G__26733,props,localised_string,map__26726,map__26726__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__26727,map__26727__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_26721,_STAR_depth_STAR_26722,_STAR_shared_STAR_26723,_STAR_instrument_STAR_26724,_STAR_parent_STAR_26725,this$,this__9235__auto__,x26716_26745))
});
return React.createElement(G__26738,G__26739,G__26740);
})();
var G__26735 = (function (){var attrs26730 = (function (){var G__26741 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,[cljs.core.str(ident)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__26732,G__26733,G__26734,props,localised_string,map__26726,map__26726__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__26727,map__26727__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_26721,_STAR_depth_STAR_26722,_STAR_shared_STAR_26723,_STAR_instrument_STAR_26724,_STAR_parent_STAR_26725,this$,this__9235__auto__,x26716_26745){
return (function (p1__26709_SHARP_){
return (edited_keyword.cljs$core$IFn$_invoke$arity$2 ? edited_keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$string_SLASH_ident,p1__26709_SHARP_) : edited_keyword.call(null,cljs.core.cst$kw$string_SLASH_ident,p1__26709_SHARP_));
});})(G__26732,G__26733,G__26734,props,localised_string,map__26726,map__26726__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__26727,map__26727__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_26721,_STAR_depth_STAR_26722,_STAR_shared_STAR_26723,_STAR_instrument_STAR_26724,_STAR_parent_STAR_26725,this$,this__9235__auto__,x26716_26745))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__26741) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__26741));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs26730))?sablono.interpreter.attributes(attrs26730):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs26730))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs26730)], null))));
})();
var G__26736 = (function (){var attrs26731 = (function (){var G__26742 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,value], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__26732,G__26733,G__26734,G__26735,props,localised_string,map__26726,map__26726__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__26727,map__26727__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_26721,_STAR_depth_STAR_26722,_STAR_shared_STAR_26723,_STAR_instrument_STAR_26724,_STAR_parent_STAR_26725,this$,this__9235__auto__,x26716_26745){
return (function (p1__26710_SHARP_){
return (edited_text.cljs$core$IFn$_invoke$arity$2 ? edited_text.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,p1__26710_SHARP_) : edited_text.call(null,cljs.core.cst$kw$value,p1__26710_SHARP_));
});})(G__26732,G__26733,G__26734,G__26735,props,localised_string,map__26726,map__26726__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__26727,map__26727__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_26721,_STAR_depth_STAR_26722,_STAR_shared_STAR_26723,_STAR_instrument_STAR_26724,_STAR_parent_STAR_26725,this$,this__9235__auto__,x26716_26745))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__26742) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__26742));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs26731))?sablono.interpreter.attributes(attrs26731):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs26731))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs26731)], null))));
})();
var G__26737 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__26732,G__26733,G__26734,G__26735,G__26736,props,localised_string,map__26726,map__26726__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__26727,map__26727__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_26721,_STAR_depth_STAR_26722,_STAR_shared_STAR_26723,_STAR_instrument_STAR_26724,_STAR_parent_STAR_26725,this$,this__9235__auto__,x26716_26745){
return (function (p1__26711_SHARP_){
return om_next_datascript_localisation_demo.components.locale.strings.localised_factory(p1__26711_SHARP_,edited_text_id,localised_create);
});})(G__26732,G__26733,G__26734,G__26735,G__26736,props,localised_string,map__26726,map__26726__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__26727,map__26727__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_26721,_STAR_depth_STAR_26722,_STAR_shared_STAR_26723,_STAR_instrument_STAR_26724,_STAR_parent_STAR_26725,this$,this__9235__auto__,x26716_26745))
,localised__$1));
return React.createElement(G__26732,G__26733,G__26734,G__26735,G__26736,G__26737);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26725;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26724;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26723;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26722;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26721;
}});})(x26716_26745))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype.constructor = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype.om$isComponent = true;

var x26743_26746 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow;
x26743_26746.om$next$Ident$ = true;

x26743_26746.om$next$Ident$ident$arity$2 = ((function (x26743_26746){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_DASH_string,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x26743_26746))
;


var x26744_26747 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype;
x26744_26747.om$next$Ident$ = true;

x26744_26747.om$next$Ident$ident$arity$2 = ((function (x26744_26747){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_DASH_string,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x26744_26747))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTableRow";

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write(writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTableRow");
});
om_next_datascript_localisation_demo.components.locale.strings.localised_string = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (props){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_DASH_string,cljs.core.cst$kw$db_SLASH_id], null));
})], null));
om_next_datascript_localisation_demo.components.locale.strings.table_head = (function om_next_datascript_localisation_demo$components$locale$strings$table_head(locales){
if(cljs.core.truth_(cljs.core.not_empty(locales))){
var G__26871 = "thead";
var G__26872 = null;
var G__26873 = (function (){var G__26887 = "tr";
var G__26888 = null;
var G__26889 = (function (){var G__26893 = "th";
var G__26894 = {"rowSpan": (2)};
var G__26895 = "Select";
return React.createElement(G__26893,G__26894,G__26895);
})();
var G__26890 = (function (){var G__26896 = "th";
var G__26897 = {"rowSpan": (2)};
var G__26898 = "ID";
return React.createElement(G__26896,G__26897,G__26898);
})();
var G__26891 = (function (){var G__26899 = "th";
var G__26900 = {"rowSpan": (2)};
var G__26901 = "Default";
return React.createElement(G__26899,G__26900,G__26901);
})();
var G__26892 = (function (){var G__26902 = "th";
var G__26903 = {"colSpan": cljs.core.count(locales)};
var G__26904 = "Localised";
return React.createElement(G__26902,G__26903,G__26904);
})();
return React.createElement(G__26887,G__26888,G__26889,G__26890,G__26891,G__26892);
})();
var G__26874 = (function (){var attrs26834 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__26871,G__26872,G__26873){
return (function (l){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale_SLASH_code], null))], null);
});})(G__26871,G__26872,G__26873))
,locales);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tr",((cljs.core.map_QMARK_(attrs26834))?sablono.interpreter.attributes(attrs26834):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs26834))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs26834)], null))));
})();
return React.createElement(G__26871,G__26872,G__26873,G__26874);
} else {
var G__26912 = "thead";
var G__26913 = null;
var G__26914 = (function (){var G__26915 = "tr";
var G__26916 = null;
var G__26917 = React.createElement("th",null,"Select");
var G__26918 = React.createElement("th",null,"ID");
var G__26919 = React.createElement("th",null,"Default");
return React.createElement(G__26915,G__26916,G__26917,G__26918,G__26919);
})();
return React.createElement(G__26912,G__26913,G__26914);
}
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable = (function om_next_datascript_localisation_demo$components$locale$strings$LocalisedStringTable(){
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype = goog.object.clone(React.Component.prototype);

var x26935_26976 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype;
x26935_26976.componentWillUpdate = ((function (x26935_26976){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_(this__9236__auto__);

return om.next.merge_pending_state_BANG_(this__9236__auto__);
});})(x26935_26976))
;

x26935_26976.shouldComponentUpdate = ((function (x26935_26976){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__26938 = this__9236__auto__.state;
var G__26939 = "omcljs$state";
return goog.object.get(G__26938,G__26939);
})(),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x26935_26976))
;

x26935_26976.componentWillUnmount = ((function (x26935_26976){
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
});})(x26935_26976))
;

x26935_26976.componentDidUpdate = ((function (x26935_26976){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_(this__9236__auto__);
});})(x26935_26976))
;

x26935_26976.isMounted = ((function (x26935_26976){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26935_26976))
;

x26935_26976.componentWillMount = ((function (x26935_26976){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x26935_26976))
;

x26935_26976.initLocalState = ((function (x26935_26976){
return (function (){
var this$ = this;
var ret__9218__auto__ = (function (){var props = om.next.props(this$);
var locales = cljs.core.cst$kw$locales.cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$checkboxes,om_next_datascript_localisation_demo.utils.checkboxes.reset_checkboxes(locales)], null);
})();
var obj26941 = {"omcljs$state":ret__9218__auto__};
return obj26941;
});})(x26935_26976))
;

x26935_26976.componentWillReceiveProps = ((function (x26935_26976){
return (function (next_props__9220__auto__){
var this__9219__auto__ = this;
var this$ = this__9219__auto__;
var new_props = om.next._next_props(next_props__9220__auto__,this__9219__auto__);
var locales = cljs.core.cst$kw$locales.cljs$core$IFn$_invoke$arity$1(new_props);
var state = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var old_checkboxes = cljs.core.cst$kw$checkboxes.cljs$core$IFn$_invoke$arity$1(state);
var add_checkbox_state = ((function (locales,state,old_checkboxes,this$,new_props,this__9219__auto__,x26935_26976){
return (function (new$,old,locale){
var id = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(locale);
if(cljs.core.contains_QMARK_(old,id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(old,id));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,id,false);
}
});})(locales,state,old_checkboxes,this$,new_props,this__9219__auto__,x26935_26976))
;
var new_checkboxes = cljs.core.PersistentArrayMap.EMPTY;
var l = cljs.core.first(locales);
var locales__$1 = cljs.core.rest(locales);
while(true){
if(cljs.core.not(l)){
return om.next.set_state_BANG_(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$checkboxes,new_checkboxes], null));
} else {
var G__26977 = add_checkbox_state(new_checkboxes,old_checkboxes,l);
var G__26978 = cljs.core.first(locales__$1);
var G__26979 = cljs.core.rest(locales__$1);
new_checkboxes = G__26977;
l = G__26978;
locales__$1 = G__26979;
continue;
}
break;
}
});})(x26935_26976))
;

x26935_26976.toggle_checkbox = ((function (x26935_26976){
return (function (id){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (this$,x26935_26976){
return (function (p1__26920_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__26920_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$checkboxes,id], null),cljs.core.not);
});})(this$,x26935_26976))
);
});})(x26935_26976))
;

x26935_26976.edited_text = ((function (x26935_26976){
return (function (id,attrib,text){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$attrib_SLASH_set),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,id),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$attrib),cljs.core._conj(cljs.core.List.EMPTY,attrib),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,text)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_strings))))));
});})(x26935_26976))
;

x26935_26976.edited_keyword = ((function (x26935_26976){
return (function (id,attrib,text){
var this$ = this;
return this$.edited_text(id,attrib,om_next_datascript_localisation_demo.utils.keywords.keywordify(text));
});})(x26935_26976))
;

x26935_26976.localised_create = ((function (x26935_26976){
return (function (id,locale,text){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$localised_SLASH_create),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,id),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locale),cljs.core._conj(cljs.core.List.EMPTY,locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,text)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_strings))))));
});})(x26935_26976))
;

x26935_26976.render = ((function (x26935_26976){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_26942 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26943 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26944 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26945 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26946 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props(this$);
var locales = cljs.core.cst$kw$locales.cljs$core$IFn$_invoke$arity$1(props);
var localised_strings = cljs.core.cst$kw$localised_DASH_strings.cljs$core$IFn$_invoke$arity$1(props);
var order = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (props,locales,localised_strings,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (p1__26921_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__26921_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null));
});})(props,locales,localised_strings,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
,locales);
var state = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var G__26949 = "div";
var G__26950 = {"className": "functional-block"};
var G__26951 = React.createElement("h2",null,"Localised Strings");
var G__26952 = (function (){var G__26954 = "button";
var G__26955 = {"onClick": ((function (G__26954,G__26949,G__26950,G__26951,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (e){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$localised_DASH_string_SLASH_create))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_strings))))));
});})(G__26954,G__26949,G__26950,G__26951,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
};
var G__26956 = "Add a new localised string";
return React.createElement(G__26954,G__26955,G__26956);
})();
var G__26953 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.not_empty(localised_strings))?(function (){var G__26965 = "div";
var G__26966 = null;
var G__26967 = (function (){var attrs26957 = om_next_datascript_localisation_demo.components.locale.strings.table_head(locales);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"table",((cljs.core.map_QMARK_(attrs26957))?sablono.interpreter.attributes(attrs26957):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs26957))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26958 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (l,css_class){
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null));
var checked = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$checkboxes,id], null));
var G__26969 = om.next.computed(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$order,order,cljs.core.cst$kw$checked,checked,cljs.core.cst$kw$css_DASH_class,css_class,cljs.core.cst$kw$localised_DASH_string,l], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$toggle_DASH_checkbox,((function (id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (){
return this$.toggle_checkbox(id);
});})(id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
,cljs.core.cst$kw$edited_DASH_text,((function (id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (p1__26922_SHARP_,p2__26923_SHARP_){
return this$.edited_text(id,p1__26922_SHARP_,p2__26923_SHARP_);
});})(id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
,cljs.core.cst$kw$edited_DASH_text_DASH_id,((function (id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (p1__26924_SHARP_,p2__26925_SHARP_,p3__26926_SHARP_){
return this$.edited_text(p1__26924_SHARP_,p2__26925_SHARP_,p3__26926_SHARP_);
});})(id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
,cljs.core.cst$kw$edited_DASH_keyword,((function (id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (p1__26927_SHARP_,p2__26928_SHARP_){
return this$.edited_keyword(id,p1__26927_SHARP_,p2__26928_SHARP_);
});})(id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
,cljs.core.cst$kw$localised_DASH_create,((function (id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (p1__26929_SHARP_,p2__26930_SHARP_){
return this$.localised_create(id,p1__26929_SHARP_,p2__26930_SHARP_);
});})(id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
], null));
return (om_next_datascript_localisation_demo.components.locale.strings.localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.strings.localised_string.cljs$core$IFn$_invoke$arity$1(G__26969) : om_next_datascript_localisation_demo.components.locale.strings.localised_string.call(null,G__26969));
});})(attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
,localised_strings,cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["odd","even"], null)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tbody",((cljs.core.map_QMARK_(attrs26958))?sablono.interpreter.attributes(attrs26958):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs26958))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs26958)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs26957),(function (){var attrs26959 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (l,css_class){
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null));
var checked = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$checkboxes,id], null));
var G__26970 = om.next.computed(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$order,order,cljs.core.cst$kw$checked,checked,cljs.core.cst$kw$css_DASH_class,css_class,cljs.core.cst$kw$localised_DASH_string,l], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$toggle_DASH_checkbox,((function (id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (){
return this$.toggle_checkbox(id);
});})(id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
,cljs.core.cst$kw$edited_DASH_text,((function (id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (p1__26922_SHARP_,p2__26923_SHARP_){
return this$.edited_text(id,p1__26922_SHARP_,p2__26923_SHARP_);
});})(id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
,cljs.core.cst$kw$edited_DASH_text_DASH_id,((function (id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (p1__26924_SHARP_,p2__26925_SHARP_,p3__26926_SHARP_){
return this$.edited_text(p1__26924_SHARP_,p2__26925_SHARP_,p3__26926_SHARP_);
});})(id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
,cljs.core.cst$kw$edited_DASH_keyword,((function (id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (p1__26927_SHARP_,p2__26928_SHARP_){
return this$.edited_keyword(id,p1__26927_SHARP_,p2__26928_SHARP_);
});})(id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
,cljs.core.cst$kw$localised_DASH_create,((function (id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (p1__26929_SHARP_,p2__26930_SHARP_){
return this$.localised_create(id,p1__26929_SHARP_,p2__26930_SHARP_);
});})(id,checked,attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
], null));
return (om_next_datascript_localisation_demo.components.locale.strings.localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.strings.localised_string.cljs$core$IFn$_invoke$arity$1(G__26970) : om_next_datascript_localisation_demo.components.locale.strings.localised_string.call(null,G__26970));
});})(attrs26957,G__26965,G__26966,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
,localised_strings,cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["odd","even"], null)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tbody",((cljs.core.map_QMARK_(attrs26959))?sablono.interpreter.attributes(attrs26959):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs26959))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs26959)], null))));
})()], null))));
})();
var G__26968 = (function (){var G__26971 = "button";
var G__26972 = {"onClick": ((function (G__26971,G__26965,G__26966,G__26967,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976){
return (function (e){
var state__$1 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var checkboxes = cljs.core.cst$kw$checkboxes.cljs$core$IFn$_invoke$arity$1(state__$1);
var ids = om_next_datascript_localisation_demo.utils.checkboxes.selected_checkbox_ids(checkboxes);
if(cljs.core.empty_QMARK_(ids)){
return null;
} else {
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$delete_SLASH_db_DASH_id),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ids),cljs.core._conj(cljs.core.List.EMPTY,ids)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_strings))))));
}
});})(G__26971,G__26965,G__26966,G__26967,G__26949,G__26950,G__26951,G__26952,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_26942,_STAR_depth_STAR_26943,_STAR_shared_STAR_26944,_STAR_instrument_STAR_26945,_STAR_parent_STAR_26946,this$,this__9235__auto__,x26935_26976))
};
var G__26973 = "Delete selected";
return React.createElement(G__26971,G__26972,G__26973);
})();
return React.createElement(G__26965,G__26966,G__26967,G__26968);
})():null));
return React.createElement(G__26949,G__26950,G__26951,G__26952,G__26953);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26946;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26945;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26944;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26943;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26942;
}});})(x26935_26976))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype.constructor = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype.om$isComponent = true;

var x26974_26980 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable;
x26974_26980.om$next$IQuery$ = true;

x26974_26980.om$next$IQuery$query$arity$1 = ((function (x26974_26980){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_strings)))));
});})(x26974_26980))
;


var x26975_26981 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype;
x26975_26981.om$next$IQuery$ = true;

x26975_26981.om$next$IQuery$query$arity$1 = ((function (x26975_26981){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_strings)))));
});})(x26975_26981))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTable";

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write(writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTable");
});
om_next_datascript_localisation_demo.components.locale.strings.localised_string_table = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable);
