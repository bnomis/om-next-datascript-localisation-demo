// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_datascript_localisation_demo.components.locale.strings');
goog.require('cljs.core');
goog.require('om.next');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('om_next_datascript_localisation_demo.components.editable_text');
goog.require('om_next_datascript_localisation_demo.utils.keywords');
goog.require('om_next_datascript_localisation_demo.utils.checkboxes');
om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholder = (function om_next_datascript_localisation_demo$components$locale$strings$make_localised_placeholder(id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"value","value",305978217),"None",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),true], null);
});
om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholders = (function om_next_datascript_localisation_demo$components$locale$strings$make_localised_placeholders(order){
return cljs.core.mapv.call(null,om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholder,order);
});
om_next_datascript_localisation_demo.components.locale.strings.find_localised = (function om_next_datascript_localisation_demo$components$locale$strings$find_localised(localised,id){
return cljs.core.some.call(null,(function (l){
if(cljs.core._EQ_.call(null,id,cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","locale","localised/locale",1513168907),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),false], null);
} else {
return null;
}
}),localised);
});
om_next_datascript_localisation_demo.components.locale.strings.get_localised = (function om_next_datascript_localisation_demo$components$locale$strings$get_localised(localised,id){
var ll = om_next_datascript_localisation_demo.components.locale.strings.find_localised.call(null,localised,id);
var or__6142__auto__ = ll;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholder.call(null,id);
}
});
om_next_datascript_localisation_demo.components.locale.strings.order_localised = (function om_next_datascript_localisation_demo$components$locale$strings$order_localised(localised,order){
if((cljs.core.empty_QMARK_.call(null,localised)) || (cljs.core.not.call(null,localised))){
return om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholders.call(null,order);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var o = cljs.core.first.call(null,order);
var order__$1 = cljs.core.rest.call(null,order);
while(true){
if(cljs.core.not.call(null,o)){
return out;
} else {
var G__11706 = cljs.core.conj.call(null,out,om_next_datascript_localisation_demo.components.locale.strings.get_localised.call(null,localised,o));
var G__11707 = cljs.core.first.call(null,order__$1);
var G__11708 = cljs.core.rest.call(null,order__$1);
out = G__11706;
o = G__11707;
order__$1 = G__11708;
continue;
}
break;
}
}
});
om_next_datascript_localisation_demo.components.locale.strings.localised = (function om_next_datascript_localisation_demo$components$locale$strings$localised(locale,edited_text){
return React.createElement("td",{"key": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(locale)},sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(locale)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__11709_SHARP_){
return edited_text.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(locale),new cljs.core.Keyword(null,"value","value",305978217),p1__11709_SHARP_);
})], null)))));
});
om_next_datascript_localisation_demo.components.locale.strings.localised_placeholder = (function om_next_datascript_localisation_demo$components$locale$strings$localised_placeholder(locale,localised_create){
return React.createElement("td",{"key": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(locale)},sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(locale)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__11710_SHARP_){
return localised_create.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(locale),p1__11710_SHARP_);
})], null)))));
});
om_next_datascript_localisation_demo.components.locale.strings.localised_factory = (function om_next_datascript_localisation_demo$components$locale$strings$localised_factory(locale,edited_text,localised_create){
if(cljs.core.truth_(new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(locale))){
return om_next_datascript_localisation_demo.components.locale.strings.localised_placeholder.call(null,locale,localised_create);
} else {
return om_next_datascript_localisation_demo.components.locale.strings.localised.call(null,locale,edited_text);
}
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow = (function om_next_datascript_localisation_demo$components$locale$strings$LocalisedStringTableRow(){
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype = goog.object.clone(React.Component.prototype);

var x11718_11732 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype;
x11718_11732.componentWillUpdate = ((function (x11718_11732){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7334__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7334__auto__);
});})(x11718_11732))
;

x11718_11732.shouldComponentUpdate = ((function (x11718_11732){
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
});})(x11718_11732))
;

x11718_11732.componentWillUnmount = ((function (x11718_11732){
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
});})(x11718_11732))
;

x11718_11732.componentDidUpdate = ((function (x11718_11732){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7334__auto__);
});})(x11718_11732))
;

x11718_11732.isMounted = ((function (x11718_11732){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x11718_11732))
;

x11718_11732.componentWillMount = ((function (x11718_11732){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7339__auto__,this__7334__auto__);
}
});})(x11718_11732))
;

x11718_11732.render = ((function (x11718_11732){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_11719 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_11720 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_11721 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_11722 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_11723 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props.call(null,this$);
var localised_string = new cljs.core.Keyword(null,"localised-string","localised-string",630848261).cljs$core$IFn$_invoke$arity$1(props);
var map__11724 = localised_string;
var map__11724__$1 = ((((!((map__11724 == null)))?((((map__11724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11724):map__11724);
var id = cljs.core.get.call(null,map__11724__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var ident = cljs.core.get.call(null,map__11724__$1,new cljs.core.Keyword("string","ident","string/ident",-106951611));
var value = cljs.core.get.call(null,map__11724__$1,new cljs.core.Keyword(null,"value","value",305978217));
var localised = cljs.core.get.call(null,map__11724__$1,new cljs.core.Keyword(null,"localised","localised",-1733242051));
var order = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(props);
var checked = new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(props);
var css_class = new cljs.core.Keyword(null,"css-class","css-class",-919455334).cljs$core$IFn$_invoke$arity$1(props);
var localised__$1 = om_next_datascript_localisation_demo.components.locale.strings.order_localised.call(null,localised,order);
var map__11725 = om.next.get_computed.call(null,this$);
var map__11725__$1 = ((((!((map__11725 == null)))?((((map__11725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11725):map__11725);
var toggle_checkbox = cljs.core.get.call(null,map__11725__$1,new cljs.core.Keyword(null,"toggle-checkbox","toggle-checkbox",-1080166072));
var edited_text = cljs.core.get.call(null,map__11725__$1,new cljs.core.Keyword(null,"edited-text","edited-text",-1377629021));
var edited_text_id = cljs.core.get.call(null,map__11725__$1,new cljs.core.Keyword(null,"edited-text-id","edited-text-id",1689938980));
var edited_keyword = cljs.core.get.call(null,map__11725__$1,new cljs.core.Keyword(null,"edited-keyword","edited-keyword",1393930311));
var localised_create = cljs.core.get.call(null,map__11725__$1,new cljs.core.Keyword(null,"localised-create","localised-create",-1848423456));
return React.createElement("tr",{"className": sablono.util.join_classes.call(null,cljs.core.PersistentHashSet.fromArray([css_class], true))},React.createElement("td",{"className": "center-column"},sablono.interpreter.create_element.call(null,"input",{"type": "checkbox", "value": id, "checked": checked, "onChange": ((function (props,localised_string,map__11724,map__11724__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__11725,map__11725__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_11719,_STAR_depth_STAR_11720,_STAR_shared_STAR_11721,_STAR_instrument_STAR_11722,_STAR_parent_STAR_11723,this$,this__7333__auto__,x11718_11732){
return (function (e){
return toggle_checkbox.call(null);
});})(props,localised_string,map__11724,map__11724__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__11725,map__11725__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_11719,_STAR_depth_STAR_11720,_STAR_shared_STAR_11721,_STAR_instrument_STAR_11722,_STAR_parent_STAR_11723,this$,this__7333__auto__,x11718_11732))
})),(function (){var attrs11728 = om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str(ident)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),((function (props,localised_string,map__11724,map__11724__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__11725,map__11725__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_11719,_STAR_depth_STAR_11720,_STAR_shared_STAR_11721,_STAR_instrument_STAR_11722,_STAR_parent_STAR_11723,this$,this__7333__auto__,x11718_11732){
return (function (p1__11711_SHARP_){
return edited_keyword.call(null,new cljs.core.Keyword("string","ident","string/ident",-106951611),p1__11711_SHARP_);
});})(props,localised_string,map__11724,map__11724__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__11725,map__11725__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_11719,_STAR_depth_STAR_11720,_STAR_shared_STAR_11721,_STAR_instrument_STAR_11722,_STAR_parent_STAR_11723,this$,this__7333__auto__,x11718_11732))
], null)));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs11728))?sablono.interpreter.attributes.call(null,attrs11728):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11728))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11728)], null))));
})(),(function (){var attrs11729 = om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),((function (props,localised_string,map__11724,map__11724__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__11725,map__11725__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_11719,_STAR_depth_STAR_11720,_STAR_shared_STAR_11721,_STAR_instrument_STAR_11722,_STAR_parent_STAR_11723,this$,this__7333__auto__,x11718_11732){
return (function (p1__11712_SHARP_){
return edited_text.call(null,new cljs.core.Keyword(null,"value","value",305978217),p1__11712_SHARP_);
});})(props,localised_string,map__11724,map__11724__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__11725,map__11725__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_11719,_STAR_depth_STAR_11720,_STAR_shared_STAR_11721,_STAR_instrument_STAR_11722,_STAR_parent_STAR_11723,this$,this__7333__auto__,x11718_11732))
], null)));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs11729))?sablono.interpreter.attributes.call(null,attrs11729):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11729))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11729)], null))));
})(),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (props,localised_string,map__11724,map__11724__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__11725,map__11725__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_11719,_STAR_depth_STAR_11720,_STAR_shared_STAR_11721,_STAR_instrument_STAR_11722,_STAR_parent_STAR_11723,this$,this__7333__auto__,x11718_11732){
return (function (p1__11713_SHARP_){
return om_next_datascript_localisation_demo.components.locale.strings.localised_factory.call(null,p1__11713_SHARP_,edited_text_id,localised_create);
});})(props,localised_string,map__11724,map__11724__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__11725,map__11725__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_11719,_STAR_depth_STAR_11720,_STAR_shared_STAR_11721,_STAR_instrument_STAR_11722,_STAR_parent_STAR_11723,this$,this__7333__auto__,x11718_11732))
,localised__$1)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_11723;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11722;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_11721;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_11720;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_11719;
}});})(x11718_11732))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype.constructor = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype.om$isComponent = true;

var x11730_11733 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow;
x11730_11733.om$next$Ident$ = true;

x11730_11733.om$next$Ident$ident$arity$2 = ((function (x11730_11733){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"localised-string","localised-string",630848261),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x11730_11733))
;


var x11731_11734 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype;
x11731_11734.om$next$Ident$ = true;

x11731_11734.om$next$Ident$ident$arity$2 = ((function (x11731_11734){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"localised-string","localised-string",630848261),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x11731_11734))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTableRow";

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write.call(null,writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTableRow");
});
om_next_datascript_localisation_demo.components.locale.strings.localised_string = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
return cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"localised-string","localised-string",630848261),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
})], null));
om_next_datascript_localisation_demo.components.locale.strings.table_head = (function om_next_datascript_localisation_demo$components$locale$strings$table_head(locales){
if(cljs.core.truth_(cljs.core.not_empty.call(null,locales))){
return React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",{"rowSpan": (2)},"Select"),React.createElement("th",{"rowSpan": (2)},"ID"),React.createElement("th",{"rowSpan": (2)},"Default"),React.createElement("th",{"colSpan": cljs.core.count.call(null,locales)},"Localised")),(function (){var attrs11744 = cljs.core.map.call(null,(function (l){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null),cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("locale","code","locale/code",-1620643092)], null))], null);
}),locales);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs11744))?sablono.interpreter.attributes.call(null,attrs11744):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11744))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11744)], null))));
})());
} else {
return React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Select"),React.createElement("th",null,"ID"),React.createElement("th",null,"Default")));
}
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable = (function om_next_datascript_localisation_demo$components$locale$strings$LocalisedStringTable(){
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype = goog.object.clone(React.Component.prototype);

var x11768_11783 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype;
x11768_11783.componentWillUpdate = ((function (x11768_11783){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7334__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7334__auto__);
});})(x11768_11783))
;

x11768_11783.shouldComponentUpdate = ((function (x11768_11783){
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
});})(x11768_11783))
;

x11768_11783.componentWillUnmount = ((function (x11768_11783){
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
});})(x11768_11783))
;

x11768_11783.componentDidUpdate = ((function (x11768_11783){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7334__auto__);
});})(x11768_11783))
;

x11768_11783.isMounted = ((function (x11768_11783){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x11768_11783))
;

x11768_11783.componentWillMount = ((function (x11768_11783){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7339__auto__,this__7334__auto__);
}
});})(x11768_11783))
;

x11768_11783.initLocalState = ((function (x11768_11783){
return (function (){
var this$ = this;
var ret__7316__auto__ = (function (){var props = om.next.props.call(null,this$);
var locales = new cljs.core.Keyword(null,"locales","locales",1785635955).cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),om_next_datascript_localisation_demo.utils.checkboxes.reset_checkboxes.call(null,locales)], null);
})();
var obj11770 = {"omcljs$state":ret__7316__auto__};
return obj11770;
});})(x11768_11783))
;

x11768_11783.componentWillReceiveProps = ((function (x11768_11783){
return (function (next_props__7318__auto__){
var this__7317__auto__ = this;
var this$ = this__7317__auto__;
var new_props = om.next._next_props.call(null,next_props__7318__auto__,this__7317__auto__);
var locales = new cljs.core.Keyword(null,"locales","locales",1785635955).cljs$core$IFn$_invoke$arity$1(new_props);
var state = om.next.get_state.call(null,this$);
var old_checkboxes = new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762).cljs$core$IFn$_invoke$arity$1(state);
var add_checkbox_state = ((function (locales,state,old_checkboxes,this$,new_props,this__7317__auto__,x11768_11783){
return (function (new$,old,locale){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(locale);
if(cljs.core.contains_QMARK_.call(null,old,id)){
return cljs.core.assoc.call(null,new$,id,cljs.core.get.call(null,old,id));
} else {
return cljs.core.assoc.call(null,new$,id,false);
}
});})(locales,state,old_checkboxes,this$,new_props,this__7317__auto__,x11768_11783))
;
var new_checkboxes = cljs.core.PersistentArrayMap.EMPTY;
var l = cljs.core.first.call(null,locales);
var locales__$1 = cljs.core.rest.call(null,locales);
while(true){
if(cljs.core.not.call(null,l)){
return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),new_checkboxes], null));
} else {
var G__11784 = add_checkbox_state.call(null,new_checkboxes,old_checkboxes,l);
var G__11785 = cljs.core.first.call(null,locales__$1);
var G__11786 = cljs.core.rest.call(null,locales__$1);
new_checkboxes = G__11784;
l = G__11785;
locales__$1 = G__11786;
continue;
}
break;
}
});})(x11768_11783))
;

x11768_11783.toggle_checkbox = ((function (x11768_11783){
return (function (id){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,((function (this$,x11768_11783){
return (function (p1__11753_SHARP_){
return cljs.core.update_in.call(null,p1__11753_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),id], null),cljs.core.not);
});})(this$,x11768_11783))
);
});})(x11768_11783))
;

x11768_11783.edited_text = ((function (x11768_11783){
return (function (id,attrib,text){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("attrib","set","attrib/set",533812063,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"attrib","attrib",-1137323804)),cljs.core._conj.call(null,cljs.core.List.EMPTY,attrib),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,text)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613)))))));
});})(x11768_11783))
;

x11768_11783.edited_keyword = ((function (x11768_11783){
return (function (id,attrib,text){
var this$ = this;
return this$.edited_text(id,attrib,om_next_datascript_localisation_demo.utils.keywords.keywordify.call(null,text));
});})(x11768_11783))
;

x11768_11783.localised_create = ((function (x11768_11783){
return (function (id,locale,text){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("localised","create","localised/create",-603860581,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locale","locale",-2115712697)),cljs.core._conj.call(null,cljs.core.List.EMPTY,locale),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,text)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613)))))));
});})(x11768_11783))
;

x11768_11783.render = ((function (x11768_11783){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_11771 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_11772 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_11773 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_11774 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_11775 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props.call(null,this$);
var locales = new cljs.core.Keyword(null,"locales","locales",1785635955).cljs$core$IFn$_invoke$arity$1(props);
var localised_strings = new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613).cljs$core$IFn$_invoke$arity$1(props);
var order = cljs.core.mapv.call(null,((function (props,locales,localised_strings,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (p1__11754_SHARP_){
return cljs.core.get_in.call(null,p1__11754_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
});})(props,locales,localised_strings,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
,locales);
var state = om.next.get_state.call(null,this$);
return React.createElement("div",{"className": "functional-block"},React.createElement("h2",null,"Localised Strings"),React.createElement("button",{"onClick": ((function (props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("localised-string","create","localised-string/create",1679580933,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613)))))));
});})(props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
},"Add a new localised string"),sablono.interpreter.interpret.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,localised_strings))?React.createElement("div",null,(function (){var attrs11778 = om_next_datascript_localisation_demo.components.locale.strings.table_head.call(null,locales);
return cljs.core.apply.call(null,React.createElement,"table",((cljs.core.map_QMARK_.call(null,attrs11778))?sablono.interpreter.attributes.call(null,attrs11778):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11778))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs11779 = cljs.core.map.call(null,((function (attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (l,css_class){
var id = cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
var checked = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),id], null));
return om_next_datascript_localisation_demo.components.locale.strings.localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),order,new cljs.core.Keyword(null,"checked","checked",-50955819),checked,new cljs.core.Keyword(null,"css-class","css-class",-919455334),css_class,new cljs.core.Keyword(null,"localised-string","localised-string",630848261),l], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toggle-checkbox","toggle-checkbox",-1080166072),((function (id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (){
return this$.toggle_checkbox(id);
});})(id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
,new cljs.core.Keyword(null,"edited-text","edited-text",-1377629021),((function (id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (p1__11755_SHARP_,p2__11756_SHARP_){
return this$.edited_text(id,p1__11755_SHARP_,p2__11756_SHARP_);
});})(id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
,new cljs.core.Keyword(null,"edited-text-id","edited-text-id",1689938980),((function (id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (p1__11757_SHARP_,p2__11758_SHARP_,p3__11759_SHARP_){
return this$.edited_text(p1__11757_SHARP_,p2__11758_SHARP_,p3__11759_SHARP_);
});})(id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
,new cljs.core.Keyword(null,"edited-keyword","edited-keyword",1393930311),((function (id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (p1__11760_SHARP_,p2__11761_SHARP_){
return this$.edited_keyword(id,p1__11760_SHARP_,p2__11761_SHARP_);
});})(id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
,new cljs.core.Keyword(null,"localised-create","localised-create",-1848423456),((function (id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (p1__11762_SHARP_,p2__11763_SHARP_){
return this$.localised_create(id,p1__11762_SHARP_,p2__11763_SHARP_);
});})(id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
], null)));
});})(attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
,localised_strings,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["odd","even"], null)));
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs11779))?sablono.interpreter.attributes.call(null,attrs11779):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11779))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11779)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11778),(function (){var attrs11780 = cljs.core.map.call(null,((function (attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (l,css_class){
var id = cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
var checked = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),id], null));
return om_next_datascript_localisation_demo.components.locale.strings.localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),order,new cljs.core.Keyword(null,"checked","checked",-50955819),checked,new cljs.core.Keyword(null,"css-class","css-class",-919455334),css_class,new cljs.core.Keyword(null,"localised-string","localised-string",630848261),l], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toggle-checkbox","toggle-checkbox",-1080166072),((function (id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (){
return this$.toggle_checkbox(id);
});})(id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
,new cljs.core.Keyword(null,"edited-text","edited-text",-1377629021),((function (id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (p1__11755_SHARP_,p2__11756_SHARP_){
return this$.edited_text(id,p1__11755_SHARP_,p2__11756_SHARP_);
});})(id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
,new cljs.core.Keyword(null,"edited-text-id","edited-text-id",1689938980),((function (id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (p1__11757_SHARP_,p2__11758_SHARP_,p3__11759_SHARP_){
return this$.edited_text(p1__11757_SHARP_,p2__11758_SHARP_,p3__11759_SHARP_);
});})(id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
,new cljs.core.Keyword(null,"edited-keyword","edited-keyword",1393930311),((function (id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (p1__11760_SHARP_,p2__11761_SHARP_){
return this$.edited_keyword(id,p1__11760_SHARP_,p2__11761_SHARP_);
});})(id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
,new cljs.core.Keyword(null,"localised-create","localised-create",-1848423456),((function (id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (p1__11762_SHARP_,p2__11763_SHARP_){
return this$.localised_create(id,p1__11762_SHARP_,p2__11763_SHARP_);
});})(id,checked,attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
], null)));
});})(attrs11778,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
,localised_strings,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["odd","even"], null)));
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs11780))?sablono.interpreter.attributes.call(null,attrs11780):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11780))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11780)], null))));
})()], null))));
})(),React.createElement("button",{"onClick": ((function (props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783){
return (function (e){
var state__$1 = om.next.get_state.call(null,this$);
var checkboxes = new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762).cljs$core$IFn$_invoke$arity$1(state__$1);
var ids = om_next_datascript_localisation_demo.utils.checkboxes.selected_checkbox_ids.call(null,checkboxes);
if(cljs.core.empty_QMARK_.call(null,ids)){
return null;
} else {
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("delete","db-id","delete/db-id",2127046561,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ids","ids",-998535796)),cljs.core._conj.call(null,cljs.core.List.EMPTY,ids)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613)))))));
}
});})(props,locales,localised_strings,order,state,_STAR_reconciler_STAR_11771,_STAR_depth_STAR_11772,_STAR_shared_STAR_11773,_STAR_instrument_STAR_11774,_STAR_parent_STAR_11775,this$,this__7333__auto__,x11768_11783))
},"Delete selected")):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_11775;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11774;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_11773;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_11772;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_11771;
}});})(x11768_11783))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype.constructor = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype.om$isComponent = true;

var x11781_11787 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable;
x11781_11787.om$next$IQuery$ = true;

x11781_11787.om$next$IQuery$query$arity$1 = ((function (x11781_11787){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales","locales",1785635955)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613))))));
});})(x11781_11787))
;


var x11782_11788 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype;
x11782_11788.om$next$IQuery$ = true;

x11782_11788.om$next$IQuery$query$arity$1 = ((function (x11782_11788){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales","locales",1785635955)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613))))));
});})(x11782_11788))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTable";

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write.call(null,writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTable");
});
om_next_datascript_localisation_demo.components.locale.strings.localised_string_table = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable);

//# sourceMappingURL=strings.js.map?rel=1452424846621