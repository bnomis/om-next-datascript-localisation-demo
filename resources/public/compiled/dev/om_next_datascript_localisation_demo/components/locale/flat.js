// Compiled by ClojureScript 1.7.228 {}
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

var x8824_8832 = om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype;
x8824_8832.componentWillUpdate = ((function (x8824_8832){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7334__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7334__auto__);
});})(x8824_8832))
;

x8824_8832.shouldComponentUpdate = ((function (x8824_8832){
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
});})(x8824_8832))
;

x8824_8832.componentWillUnmount = ((function (x8824_8832){
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
});})(x8824_8832))
;

x8824_8832.componentDidUpdate = ((function (x8824_8832){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7334__auto__);
});})(x8824_8832))
;

x8824_8832.isMounted = ((function (x8824_8832){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8824_8832))
;

x8824_8832.componentWillMount = ((function (x8824_8832){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7339__auto__,this__7334__auto__);
}
});})(x8824_8832))
;

x8824_8832.render = ((function (x8824_8832){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_8825 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8826 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8827 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8828 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8829 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.props.call(null,this$)),"Localised: render: props"))));
} else {
}

var props = new cljs.core.Keyword(null,"locale.localised","locale.localised",1701172855).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props);
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props);
var alprops = new cljs.core.Keyword(null,"app.localised","app.localised",-539211464).cljs$core$IFn$_invoke$arity$1(props);
var locale = new cljs.core.Keyword("localised","locale","localised/locale",1513168907).cljs$core$IFn$_invoke$arity$1(alprops);
var etprops = new cljs.core.Keyword(null,"editable-text","editable-text",-2021933983).cljs$core$IFn$_invoke$arity$1(props);
return React.createElement("div",null,React.createElement("p",null,"In locale: ",sablono.interpreter.interpret.call(null,locale)),React.createElement("p",null,"Value: ",sablono.interpreter.interpret.call(null,value)),sablono.interpreter.interpret.call(null,om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,etprops)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8829;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8828;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8827;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8826;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8825;
}});})(x8824_8832))
;


om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype.constructor = om_next_datascript_localisation_demo.components.locale.flat.Localised;

om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype.om$isComponent = true;

var x8830_8833 = om_next_datascript_localisation_demo.components.locale.flat.Localised;
x8830_8833.om$next$Ident$ = true;

x8830_8833.om$next$Ident$ident$arity$2 = ((function (x8830_8833){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","localised","ui/localised",-1733237535),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale.localised","locale.localised",1701172855),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x8830_8833))
;

x8830_8833.om$next$IQuery$ = true;

x8830_8833.om$next$IQuery$query$arity$1 = ((function (x8830_8833){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale.localised","locale.localised",1701172855),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app.localised","app.localised",-539211464),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","locale","localised/locale",1513168907)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-text","editable-text",-2021933983),om.next.get_query.call(null,om_next_datascript_localisation_demo.components.editable_text.EditableText)], null)], null)], null)], null);
});})(x8830_8833))
;


var x8831_8834 = om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype;
x8831_8834.om$next$Ident$ = true;

x8831_8834.om$next$Ident$ident$arity$2 = ((function (x8831_8834){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","localised","ui/localised",-1733237535),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale.localised","locale.localised",1701172855),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x8831_8834))
;

x8831_8834.om$next$IQuery$ = true;

x8831_8834.om$next$IQuery$query$arity$1 = ((function (x8831_8834){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale.localised","locale.localised",1701172855),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app.localised","app.localised",-539211464),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","locale","localised/locale",1513168907)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-text","editable-text",-2021933983),om.next.get_query.call(null,om_next_datascript_localisation_demo.components.editable_text.EditableText)], null)], null)], null)], null);
});})(x8831_8834))
;


om_next_datascript_localisation_demo.components.locale.flat.Localised.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.flat.Localised.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.flat/Localised";

om_next_datascript_localisation_demo.components.locale.flat.Localised.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write.call(null,writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.flat/Localised");
});
om_next_datascript_localisation_demo.components.locale.flat.locale_locale = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.flat.Localised,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
return cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale.localised","locale.localised",1701172855),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
})], null));
om_next_datascript_localisation_demo.components.locale.flat.find_localised_name = (function om_next_datascript_localisation_demo$components$locale$flat$find_localised_name(props,code){
var name = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props);
var locale = cljs.core.filterv.call(null,((function (name){
return (function (p1__8835_SHARP_){
return cljs.core._EQ_.call(null,code,new cljs.core.Keyword("locale.localised","code","locale.localised/code",-344701130).cljs$core$IFn$_invoke$arity$1(p1__8835_SHARP_));
});})(name))
,new cljs.core.Keyword("locale","locales","locale/locales",-1392200451).cljs$core$IFn$_invoke$arity$1(props));
if(!(cljs.core.empty_QMARK_.call(null,locale))){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,code),"for code"),locale),"found localised locale"))));
} else {
}

return new cljs.core.Keyword("locale.localised","name","locale.localised/name",-75681079).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,locale));
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

var x8840_8850 = om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype;
x8840_8850.componentWillUpdate = ((function (x8840_8850){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7334__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7334__auto__);
});})(x8840_8850))
;

x8840_8850.shouldComponentUpdate = ((function (x8840_8850){
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
});})(x8840_8850))
;

x8840_8850.componentWillUnmount = ((function (x8840_8850){
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
});})(x8840_8850))
;

x8840_8850.componentDidUpdate = ((function (x8840_8850){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7334__auto__);
});})(x8840_8850))
;

x8840_8850.isMounted = ((function (x8840_8850){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8840_8850))
;

x8840_8850.componentWillMount = ((function (x8840_8850){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7339__auto__,this__7334__auto__);
}
});})(x8840_8850))
;

x8840_8850.render = ((function (x8840_8850){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_8841 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8842 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8843 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8844 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8845 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.shared.call(null,this$,new cljs.core.Keyword(null,"locale","locale",-2115712697))),"Locale: render: shared :locale"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.props.call(null,this$)),"Locale: render: props "))));
} else {
}

var props = om.next.props.call(null,this$);
var lprops = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697)], null));
var llprops = cljs.core.get_in.call(null,lprops,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale.locales","locale.locales",1396117577)], null));
var alprops = cljs.core.get_in.call(null,lprops,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.localised","app.localised",-539211464)], null));
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(lprops);
var code = new cljs.core.Keyword("locale","code","locale/code",-1620643092).cljs$core$IFn$_invoke$arity$1(lprops);
var enum$ = new cljs.core.Keyword("locale","enum","locale/enum",563985782).cljs$core$IFn$_invoke$arity$1(lprops);
var name = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(lprops);
var localised_name = new cljs.core.Keyword(null,"this","this",-611633625).cljs$core$IFn$_invoke$arity$1(alprops);
return React.createElement("div",null,React.createElement("h3",null,"Name: ",sablono.interpreter.interpret.call(null,name)),React.createElement("p",null,"Localised name: ",sablono.interpreter.interpret.call(null,localised_name)),React.createElement("p",null,"Code: ",sablono.interpreter.interpret.call(null,code)),React.createElement("p",null,"Enum: ",sablono.interpreter.interpret.call(null,[cljs.core.str(enum$)].join(''))),React.createElement("button",{"onClick": ((function (props,lprops,llprops,alprops,id,code,enum$,name,localised_name,_STAR_reconciler_STAR_8841,_STAR_depth_STAR_8842,_STAR_shared_STAR_8843,_STAR_instrument_STAR_8844,_STAR_parent_STAR_8845,this$,this__7333__auto__,x8840_8850){
return (function (e){
return om_next_datascript_localisation_demo.utils.app.set_app_locale.call(null,this$,id);
});})(props,lprops,llprops,alprops,id,code,enum$,name,localised_name,_STAR_reconciler_STAR_8841,_STAR_depth_STAR_8842,_STAR_shared_STAR_8843,_STAR_instrument_STAR_8844,_STAR_parent_STAR_8845,this$,this__7333__auto__,x8840_8850))
},"Switch to ",sablono.interpreter.interpret.call(null,localised_name)),React.createElement("h4",null,"Locales"),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,om_next_datascript_localisation_demo.components.locale.flat.locale_locale,llprops)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8845;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8844;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8843;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8842;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8841;
}});})(x8840_8850))
;


om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype.constructor = om_next_datascript_localisation_demo.components.locale.flat.Locale;

om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype.om$isComponent = true;

var x8848_8851 = om_next_datascript_localisation_demo.components.locale.flat.Locale;
x8848_8851.om$next$Ident$ = true;

x8848_8851.om$next$Ident$ident$arity$2 = ((function (x8848_8851){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x8848_8851))
;

x8848_8851.om$next$IQuery$ = true;

x8848_8851.om$next$IQuery$query$arity$1 = ((function (x8848_8851){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("locale","code","locale/code",-1620643092),new cljs.core.Keyword("locale","enum","locale/enum",563985782),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app.localised","app.localised",-539211464),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this","this",-611633625)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale.locales","locale.locales",1396117577),om.next.get_query.call(null,om_next_datascript_localisation_demo.components.locale.flat.Localised)], null)], null)], null)], null);
});})(x8848_8851))
;


var x8849_8852 = om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype;
x8849_8852.om$next$Ident$ = true;

x8849_8852.om$next$Ident$ident$arity$2 = ((function (x8849_8852){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x8849_8852))
;

x8849_8852.om$next$IQuery$ = true;

x8849_8852.om$next$IQuery$query$arity$1 = ((function (x8849_8852){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("locale","code","locale/code",-1620643092),new cljs.core.Keyword("locale","enum","locale/enum",563985782),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app.localised","app.localised",-539211464),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this","this",-611633625)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale.locales","locale.locales",1396117577),om.next.get_query.call(null,om_next_datascript_localisation_demo.components.locale.flat.Localised)], null)], null)], null)], null);
});})(x8849_8852))
;


om_next_datascript_localisation_demo.components.locale.flat.Locale.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.flat.Locale.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.flat/Locale";

om_next_datascript_localisation_demo.components.locale.flat.Locale.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write.call(null,writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.flat/Locale");
});
om_next_datascript_localisation_demo.components.locale.flat.locale_factory = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.flat.Locale,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
return cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
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

var x8857_8866 = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype;
x8857_8866.componentWillUpdate = ((function (x8857_8866){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7334__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7334__auto__);
});})(x8857_8866))
;

x8857_8866.shouldComponentUpdate = ((function (x8857_8866){
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
});})(x8857_8866))
;

x8857_8866.componentWillUnmount = ((function (x8857_8866){
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
});})(x8857_8866))
;

x8857_8866.componentDidUpdate = ((function (x8857_8866){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7334__auto__);
});})(x8857_8866))
;

x8857_8866.isMounted = ((function (x8857_8866){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8857_8866))
;

x8857_8866.componentWillMount = ((function (x8857_8866){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7339__auto__,this__7334__auto__);
}
});})(x8857_8866))
;

x8857_8866.render = ((function (x8857_8866){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_8858 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8859 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8860 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8861 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8862 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.props.call(null,this$)),"LocalesFlat: render: props"))));
} else {
}

var props = om.next.props.call(null,this$);
var rows = new cljs.core.Keyword(null,"locales","locales",1785635955).cljs$core$IFn$_invoke$arity$1(props);
var attrs8863 = cljs.core.map.call(null,om_next_datascript_localisation_demo.components.locale.flat.locale_factory,rows);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8863))?sablono.interpreter.attributes.call(null,attrs8863):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs8863))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8863)], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8862;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8861;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8860;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8859;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8858;
}});})(x8857_8866))
;


om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype.constructor = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat;

om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype.om$isComponent = true;

var x8864_8867 = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat;
x8864_8867.om$next$IQuery$ = true;

x8864_8867.om$next$IQuery$query$arity$1 = ((function (x8864_8867){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locales","locales",1785635955),om.next.get_query.call(null,om_next_datascript_localisation_demo.components.locale.flat.Locale)], null)], null);
});})(x8864_8867))
;


var x8865_8868 = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype;
x8865_8868.om$next$IQuery$ = true;

x8865_8868.om$next$IQuery$query$arity$1 = ((function (x8865_8868){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locales","locales",1785635955),om.next.get_query.call(null,om_next_datascript_localisation_demo.components.locale.flat.Locale)], null)], null);
});})(x8865_8868))
;


om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.flat/LocalesFlat";

om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write.call(null,writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.flat/LocalesFlat");
});
om_next_datascript_localisation_demo.components.locale.flat.locales_flat = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat);

//# sourceMappingURL=flat.js.map?rel=1452424838299