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
var G__15580 = cljs.core.conj.call(null,out,om_next_datascript_localisation_demo.components.locale.strings.get_localised.call(null,localised,o));
var G__15581 = cljs.core.first.call(null,order__$1);
var G__15582 = cljs.core.rest.call(null,order__$1);
out = G__15580;
o = G__15581;
order__$1 = G__15582;
continue;
}
break;
}
}
});
om_next_datascript_localisation_demo.components.locale.strings.localised = (function om_next_datascript_localisation_demo$components$locale$strings$localised(locale,edited_text){
return React.createElement("td",{"key": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(locale)},sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(locale)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__15583_SHARP_){
return edited_text.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(locale),new cljs.core.Keyword(null,"value","value",305978217),p1__15583_SHARP_);
})], null)))));
});
om_next_datascript_localisation_demo.components.locale.strings.localised_placeholder = (function om_next_datascript_localisation_demo$components$locale$strings$localised_placeholder(locale,localised_create){
return React.createElement("td",{"key": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(locale)},sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(locale)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__15584_SHARP_){
return localised_create.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(locale),p1__15584_SHARP_);
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

var x15592_15606 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype;
x15592_15606.componentWillUpdate = ((function (x15592_15606){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__9236__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__9236__auto__);
});})(x15592_15606))
;

x15592_15606.shouldComponentUpdate = ((function (x15592_15606){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__9236__auto__.state,"omcljs$state"),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x15592_15606))
;

x15592_15606.componentWillUnmount = ((function (x15592_15606){
return (function (){
var this__9236__auto__ = this;
var r__9242__auto__ = om.next.get_reconciler.call(null,this__9236__auto__);
var cfg__9243__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__9242__auto__);
var st__9244__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__9243__auto__);
var indexer__9241__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__9243__auto__);
if((st__9244__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__9244__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__9236__auto__);
}

if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__9241__auto__,this__9236__auto__);
}
});})(x15592_15606))
;

x15592_15606.componentDidUpdate = ((function (x15592_15606){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__9236__auto__);
});})(x15592_15606))
;

x15592_15606.isMounted = ((function (x15592_15606){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x15592_15606))
;

x15592_15606.componentWillMount = ((function (x15592_15606){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__9241__auto__,this__9236__auto__);
}
});})(x15592_15606))
;

x15592_15606.render = ((function (x15592_15606){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_15593 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_15594 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_15595 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_15596 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_15597 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props.call(null,this$);
var localised_string = new cljs.core.Keyword(null,"localised-string","localised-string",630848261).cljs$core$IFn$_invoke$arity$1(props);
var map__15598 = localised_string;
var map__15598__$1 = ((((!((map__15598 == null)))?((((map__15598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15598):map__15598);
var id = cljs.core.get.call(null,map__15598__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var ident = cljs.core.get.call(null,map__15598__$1,new cljs.core.Keyword("string","ident","string/ident",-106951611));
var value = cljs.core.get.call(null,map__15598__$1,new cljs.core.Keyword(null,"value","value",305978217));
var localised = cljs.core.get.call(null,map__15598__$1,new cljs.core.Keyword(null,"localised","localised",-1733242051));
var order = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(props);
var checked = new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(props);
var css_class = new cljs.core.Keyword(null,"css-class","css-class",-919455334).cljs$core$IFn$_invoke$arity$1(props);
var localised__$1 = om_next_datascript_localisation_demo.components.locale.strings.order_localised.call(null,localised,order);
var map__15599 = om.next.get_computed.call(null,this$);
var map__15599__$1 = ((((!((map__15599 == null)))?((((map__15599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15599):map__15599);
var toggle_checkbox = cljs.core.get.call(null,map__15599__$1,new cljs.core.Keyword(null,"toggle-checkbox","toggle-checkbox",-1080166072));
var edited_text = cljs.core.get.call(null,map__15599__$1,new cljs.core.Keyword(null,"edited-text","edited-text",-1377629021));
var edited_text_id = cljs.core.get.call(null,map__15599__$1,new cljs.core.Keyword(null,"edited-text-id","edited-text-id",1689938980));
var edited_keyword = cljs.core.get.call(null,map__15599__$1,new cljs.core.Keyword(null,"edited-keyword","edited-keyword",1393930311));
var localised_create = cljs.core.get.call(null,map__15599__$1,new cljs.core.Keyword(null,"localised-create","localised-create",-1848423456));
return React.createElement("tr",{"className": sablono.util.join_classes.call(null,cljs.core.PersistentHashSet.fromArray([css_class], true))},React.createElement("td",{"className": "center-column"},sablono.interpreter.create_element.call(null,"input",{"type": "checkbox", "value": id, "checked": checked, "onChange": ((function (props,localised_string,map__15598,map__15598__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__15599,map__15599__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_15593,_STAR_depth_STAR_15594,_STAR_shared_STAR_15595,_STAR_instrument_STAR_15596,_STAR_parent_STAR_15597,this$,this__9235__auto__,x15592_15606){
return (function (e){
return toggle_checkbox.call(null);
});})(props,localised_string,map__15598,map__15598__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__15599,map__15599__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_15593,_STAR_depth_STAR_15594,_STAR_shared_STAR_15595,_STAR_instrument_STAR_15596,_STAR_parent_STAR_15597,this$,this__9235__auto__,x15592_15606))
})),(function (){var attrs15602 = om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str(ident)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),((function (props,localised_string,map__15598,map__15598__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__15599,map__15599__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_15593,_STAR_depth_STAR_15594,_STAR_shared_STAR_15595,_STAR_instrument_STAR_15596,_STAR_parent_STAR_15597,this$,this__9235__auto__,x15592_15606){
return (function (p1__15585_SHARP_){
return edited_keyword.call(null,new cljs.core.Keyword("string","ident","string/ident",-106951611),p1__15585_SHARP_);
});})(props,localised_string,map__15598,map__15598__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__15599,map__15599__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_15593,_STAR_depth_STAR_15594,_STAR_shared_STAR_15595,_STAR_instrument_STAR_15596,_STAR_parent_STAR_15597,this$,this__9235__auto__,x15592_15606))
], null)));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs15602))?sablono.interpreter.attributes.call(null,attrs15602):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15602))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15602)], null))));
})(),(function (){var attrs15603 = om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),((function (props,localised_string,map__15598,map__15598__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__15599,map__15599__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_15593,_STAR_depth_STAR_15594,_STAR_shared_STAR_15595,_STAR_instrument_STAR_15596,_STAR_parent_STAR_15597,this$,this__9235__auto__,x15592_15606){
return (function (p1__15586_SHARP_){
return edited_text.call(null,new cljs.core.Keyword(null,"value","value",305978217),p1__15586_SHARP_);
});})(props,localised_string,map__15598,map__15598__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__15599,map__15599__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_15593,_STAR_depth_STAR_15594,_STAR_shared_STAR_15595,_STAR_instrument_STAR_15596,_STAR_parent_STAR_15597,this$,this__9235__auto__,x15592_15606))
], null)));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs15603))?sablono.interpreter.attributes.call(null,attrs15603):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15603))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15603)], null))));
})(),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (props,localised_string,map__15598,map__15598__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__15599,map__15599__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_15593,_STAR_depth_STAR_15594,_STAR_shared_STAR_15595,_STAR_instrument_STAR_15596,_STAR_parent_STAR_15597,this$,this__9235__auto__,x15592_15606){
return (function (p1__15587_SHARP_){
return om_next_datascript_localisation_demo.components.locale.strings.localised_factory.call(null,p1__15587_SHARP_,edited_text_id,localised_create);
});})(props,localised_string,map__15598,map__15598__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__15599,map__15599__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_15593,_STAR_depth_STAR_15594,_STAR_shared_STAR_15595,_STAR_instrument_STAR_15596,_STAR_parent_STAR_15597,this$,this__9235__auto__,x15592_15606))
,localised__$1)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_15597;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_15596;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_15595;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_15594;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_15593;
}});})(x15592_15606))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype.constructor = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype.om$isComponent = true;

var x15604_15607 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow;
x15604_15607.om$next$Ident$ = true;

x15604_15607.om$next$Ident$ident$arity$2 = ((function (x15604_15607){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"localised-string","localised-string",630848261),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x15604_15607))
;


var x15605_15608 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype;
x15605_15608.om$next$Ident$ = true;

x15605_15608.om$next$Ident$ident$arity$2 = ((function (x15605_15608){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"localised-string","localised-string",630848261),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x15605_15608))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTableRow";

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write.call(null,writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTableRow");
});
om_next_datascript_localisation_demo.components.locale.strings.localised_string = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
return cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"localised-string","localised-string",630848261),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
})], null));
om_next_datascript_localisation_demo.components.locale.strings.table_head = (function om_next_datascript_localisation_demo$components$locale$strings$table_head(locales){
if(cljs.core.truth_(cljs.core.not_empty.call(null,locales))){
return React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",{"rowSpan": (2)},"Select"),React.createElement("th",{"rowSpan": (2)},"ID"),React.createElement("th",{"rowSpan": (2)},"Default"),React.createElement("th",{"colSpan": cljs.core.count.call(null,locales)},"Localised")),(function (){var attrs15618 = cljs.core.map.call(null,(function (l){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null),cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("locale","code","locale/code",-1620643092)], null))], null);
}),locales);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs15618))?sablono.interpreter.attributes.call(null,attrs15618):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15618))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15618)], null))));
})());
} else {
return React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Select"),React.createElement("th",null,"ID"),React.createElement("th",null,"Default")));
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

var x15642_15657 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype;
x15642_15657.componentWillUpdate = ((function (x15642_15657){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__9236__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__9236__auto__);
});})(x15642_15657))
;

x15642_15657.shouldComponentUpdate = ((function (x15642_15657){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__9236__auto__.state,"omcljs$state"),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x15642_15657))
;

x15642_15657.componentWillUnmount = ((function (x15642_15657){
return (function (){
var this__9236__auto__ = this;
var r__9242__auto__ = om.next.get_reconciler.call(null,this__9236__auto__);
var cfg__9243__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__9242__auto__);
var st__9244__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__9243__auto__);
var indexer__9241__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__9243__auto__);
if((st__9244__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__9244__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__9236__auto__);
}

if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__9241__auto__,this__9236__auto__);
}
});})(x15642_15657))
;

x15642_15657.componentDidUpdate = ((function (x15642_15657){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__9236__auto__);
});})(x15642_15657))
;

x15642_15657.isMounted = ((function (x15642_15657){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x15642_15657))
;

x15642_15657.componentWillMount = ((function (x15642_15657){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__9241__auto__,this__9236__auto__);
}
});})(x15642_15657))
;

x15642_15657.initLocalState = ((function (x15642_15657){
return (function (){
var this$ = this;
var ret__9218__auto__ = (function (){var props = om.next.props.call(null,this$);
var locales = new cljs.core.Keyword(null,"locales","locales",1785635955).cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),om_next_datascript_localisation_demo.utils.checkboxes.reset_checkboxes.call(null,locales)], null);
})();
var obj15644 = {"omcljs$state":ret__9218__auto__};
return obj15644;
});})(x15642_15657))
;

x15642_15657.componentWillReceiveProps = ((function (x15642_15657){
return (function (next_props__9220__auto__){
var this__9219__auto__ = this;
var this$ = this__9219__auto__;
var new_props = om.next._next_props.call(null,next_props__9220__auto__,this__9219__auto__);
var locales = new cljs.core.Keyword(null,"locales","locales",1785635955).cljs$core$IFn$_invoke$arity$1(new_props);
var state = om.next.get_state.call(null,this$);
var old_checkboxes = new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762).cljs$core$IFn$_invoke$arity$1(state);
var add_checkbox_state = ((function (locales,state,old_checkboxes,this$,new_props,this__9219__auto__,x15642_15657){
return (function (new$,old,locale){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(locale);
if(cljs.core.contains_QMARK_.call(null,old,id)){
return cljs.core.assoc.call(null,new$,id,cljs.core.get.call(null,old,id));
} else {
return cljs.core.assoc.call(null,new$,id,false);
}
});})(locales,state,old_checkboxes,this$,new_props,this__9219__auto__,x15642_15657))
;
var new_checkboxes = cljs.core.PersistentArrayMap.EMPTY;
var l = cljs.core.first.call(null,locales);
var locales__$1 = cljs.core.rest.call(null,locales);
while(true){
if(cljs.core.not.call(null,l)){
return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),new_checkboxes], null));
} else {
var G__15658 = add_checkbox_state.call(null,new_checkboxes,old_checkboxes,l);
var G__15659 = cljs.core.first.call(null,locales__$1);
var G__15660 = cljs.core.rest.call(null,locales__$1);
new_checkboxes = G__15658;
l = G__15659;
locales__$1 = G__15660;
continue;
}
break;
}
});})(x15642_15657))
;

x15642_15657.toggle_checkbox = ((function (x15642_15657){
return (function (id){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,((function (this$,x15642_15657){
return (function (p1__15627_SHARP_){
return cljs.core.update_in.call(null,p1__15627_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),id], null),cljs.core.not);
});})(this$,x15642_15657))
);
});})(x15642_15657))
;

x15642_15657.edited_text = ((function (x15642_15657){
return (function (id,attrib,text){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("attrib","set","attrib/set",533812063,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"attrib","attrib",-1137323804)),cljs.core._conj.call(null,cljs.core.List.EMPTY,attrib),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,text)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613)))))));
});})(x15642_15657))
;

x15642_15657.edited_keyword = ((function (x15642_15657){
return (function (id,attrib,text){
var this$ = this;
return this$.edited_text(id,attrib,om_next_datascript_localisation_demo.utils.keywords.keywordify.call(null,text));
});})(x15642_15657))
;

x15642_15657.localised_create = ((function (x15642_15657){
return (function (id,locale,text){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("localised","create","localised/create",-603860581,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locale","locale",-2115712697)),cljs.core._conj.call(null,cljs.core.List.EMPTY,locale),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,text)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613)))))));
});})(x15642_15657))
;

x15642_15657.render = ((function (x15642_15657){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_15645 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_15646 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_15647 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_15648 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_15649 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props.call(null,this$);
var locales = new cljs.core.Keyword(null,"locales","locales",1785635955).cljs$core$IFn$_invoke$arity$1(props);
var localised_strings = new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613).cljs$core$IFn$_invoke$arity$1(props);
var order = cljs.core.mapv.call(null,((function (props,locales,localised_strings,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (p1__15628_SHARP_){
return cljs.core.get_in.call(null,p1__15628_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
});})(props,locales,localised_strings,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
,locales);
var state = om.next.get_state.call(null,this$);
return React.createElement("div",{"className": "functional-block"},React.createElement("h2",null,"Localised Strings"),React.createElement("button",{"onClick": ((function (props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("localised-string","create","localised-string/create",1679580933,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613)))))));
});})(props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
},"Add a new localised string"),sablono.interpreter.interpret.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,localised_strings))?React.createElement("div",null,(function (){var attrs15652 = om_next_datascript_localisation_demo.components.locale.strings.table_head.call(null,locales);
return cljs.core.apply.call(null,React.createElement,"table",((cljs.core.map_QMARK_.call(null,attrs15652))?sablono.interpreter.attributes.call(null,attrs15652):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15652))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs15653 = cljs.core.map.call(null,((function (attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (l,css_class){
var id = cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
var checked = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),id], null));
return om_next_datascript_localisation_demo.components.locale.strings.localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),order,new cljs.core.Keyword(null,"checked","checked",-50955819),checked,new cljs.core.Keyword(null,"css-class","css-class",-919455334),css_class,new cljs.core.Keyword(null,"localised-string","localised-string",630848261),l], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toggle-checkbox","toggle-checkbox",-1080166072),((function (id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (){
return this$.toggle_checkbox(id);
});})(id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
,new cljs.core.Keyword(null,"edited-text","edited-text",-1377629021),((function (id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (p1__15629_SHARP_,p2__15630_SHARP_){
return this$.edited_text(id,p1__15629_SHARP_,p2__15630_SHARP_);
});})(id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
,new cljs.core.Keyword(null,"edited-text-id","edited-text-id",1689938980),((function (id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (p1__15631_SHARP_,p2__15632_SHARP_,p3__15633_SHARP_){
return this$.edited_text(p1__15631_SHARP_,p2__15632_SHARP_,p3__15633_SHARP_);
});})(id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
,new cljs.core.Keyword(null,"edited-keyword","edited-keyword",1393930311),((function (id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (p1__15634_SHARP_,p2__15635_SHARP_){
return this$.edited_keyword(id,p1__15634_SHARP_,p2__15635_SHARP_);
});})(id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
,new cljs.core.Keyword(null,"localised-create","localised-create",-1848423456),((function (id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (p1__15636_SHARP_,p2__15637_SHARP_){
return this$.localised_create(id,p1__15636_SHARP_,p2__15637_SHARP_);
});})(id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
], null)));
});})(attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
,localised_strings,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["odd","even"], null)));
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs15653))?sablono.interpreter.attributes.call(null,attrs15653):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15653))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15653)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15652),(function (){var attrs15654 = cljs.core.map.call(null,((function (attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (l,css_class){
var id = cljs.core.get_in.call(null,l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
var checked = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),id], null));
return om_next_datascript_localisation_demo.components.locale.strings.localised_string.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),order,new cljs.core.Keyword(null,"checked","checked",-50955819),checked,new cljs.core.Keyword(null,"css-class","css-class",-919455334),css_class,new cljs.core.Keyword(null,"localised-string","localised-string",630848261),l], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toggle-checkbox","toggle-checkbox",-1080166072),((function (id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (){
return this$.toggle_checkbox(id);
});})(id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
,new cljs.core.Keyword(null,"edited-text","edited-text",-1377629021),((function (id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (p1__15629_SHARP_,p2__15630_SHARP_){
return this$.edited_text(id,p1__15629_SHARP_,p2__15630_SHARP_);
});})(id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
,new cljs.core.Keyword(null,"edited-text-id","edited-text-id",1689938980),((function (id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (p1__15631_SHARP_,p2__15632_SHARP_,p3__15633_SHARP_){
return this$.edited_text(p1__15631_SHARP_,p2__15632_SHARP_,p3__15633_SHARP_);
});})(id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
,new cljs.core.Keyword(null,"edited-keyword","edited-keyword",1393930311),((function (id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (p1__15634_SHARP_,p2__15635_SHARP_){
return this$.edited_keyword(id,p1__15634_SHARP_,p2__15635_SHARP_);
});})(id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
,new cljs.core.Keyword(null,"localised-create","localised-create",-1848423456),((function (id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (p1__15636_SHARP_,p2__15637_SHARP_){
return this$.localised_create(id,p1__15636_SHARP_,p2__15637_SHARP_);
});})(id,checked,attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
], null)));
});})(attrs15652,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
,localised_strings,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["odd","even"], null)));
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs15654))?sablono.interpreter.attributes.call(null,attrs15654):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15654))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15654)], null))));
})()], null))));
})(),React.createElement("button",{"onClick": ((function (props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657){
return (function (e){
var state__$1 = om.next.get_state.call(null,this$);
var checkboxes = new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762).cljs$core$IFn$_invoke$arity$1(state__$1);
var ids = om_next_datascript_localisation_demo.utils.checkboxes.selected_checkbox_ids.call(null,checkboxes);
if(cljs.core.empty_QMARK_.call(null,ids)){
return null;
} else {
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("delete","db-id","delete/db-id",2127046561,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ids","ids",-998535796)),cljs.core._conj.call(null,cljs.core.List.EMPTY,ids)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613)))))));
}
});})(props,locales,localised_strings,order,state,_STAR_reconciler_STAR_15645,_STAR_depth_STAR_15646,_STAR_shared_STAR_15647,_STAR_instrument_STAR_15648,_STAR_parent_STAR_15649,this$,this__9235__auto__,x15642_15657))
},"Delete selected")):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_15649;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_15648;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_15647;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_15646;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_15645;
}});})(x15642_15657))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype.constructor = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype.om$isComponent = true;

var x15655_15661 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable;
x15655_15661.om$next$IQuery$ = true;

x15655_15661.om$next$IQuery$query$arity$1 = ((function (x15655_15661){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales","locales",1785635955)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613))))));
});})(x15655_15661))
;


var x15656_15662 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype;
x15656_15662.om$next$IQuery$ = true;

x15656_15662.om$next$IQuery$query$arity$1 = ((function (x15656_15662){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales","locales",1785635955)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613))))));
});})(x15656_15662))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTable";

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write.call(null,writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTable");
});
om_next_datascript_localisation_demo.components.locale.strings.localised_string_table = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable);

//# sourceMappingURL=strings.js.map?rel=1452427530535