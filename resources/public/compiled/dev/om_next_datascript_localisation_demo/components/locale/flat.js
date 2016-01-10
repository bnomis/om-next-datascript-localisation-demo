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

var x14589_14597 = om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype;
x14589_14597.componentWillUpdate = ((function (x14589_14597){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__9236__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__9236__auto__);
});})(x14589_14597))
;

x14589_14597.shouldComponentUpdate = ((function (x14589_14597){
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
});})(x14589_14597))
;

x14589_14597.componentWillUnmount = ((function (x14589_14597){
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
});})(x14589_14597))
;

x14589_14597.componentDidUpdate = ((function (x14589_14597){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__9236__auto__);
});})(x14589_14597))
;

x14589_14597.isMounted = ((function (x14589_14597){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14589_14597))
;

x14589_14597.componentWillMount = ((function (x14589_14597){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__9241__auto__,this__9236__auto__);
}
});})(x14589_14597))
;

x14589_14597.render = ((function (x14589_14597){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_14590 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14591 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14592 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14593 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14594 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

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
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14594;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14593;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14592;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14591;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14590;
}});})(x14589_14597))
;


om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype.constructor = om_next_datascript_localisation_demo.components.locale.flat.Localised;

om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype.om$isComponent = true;

var x14595_14598 = om_next_datascript_localisation_demo.components.locale.flat.Localised;
x14595_14598.om$next$Ident$ = true;

x14595_14598.om$next$Ident$ident$arity$2 = ((function (x14595_14598){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","localised","ui/localised",-1733237535),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale.localised","locale.localised",1701172855),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x14595_14598))
;

x14595_14598.om$next$IQuery$ = true;

x14595_14598.om$next$IQuery$query$arity$1 = ((function (x14595_14598){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale.localised","locale.localised",1701172855),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app.localised","app.localised",-539211464),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","locale","localised/locale",1513168907)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-text","editable-text",-2021933983),om.next.get_query.call(null,om_next_datascript_localisation_demo.components.editable_text.EditableText)], null)], null)], null)], null);
});})(x14595_14598))
;


var x14596_14599 = om_next_datascript_localisation_demo.components.locale.flat.Localised.prototype;
x14596_14599.om$next$Ident$ = true;

x14596_14599.om$next$Ident$ident$arity$2 = ((function (x14596_14599){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","localised","ui/localised",-1733237535),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale.localised","locale.localised",1701172855),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x14596_14599))
;

x14596_14599.om$next$IQuery$ = true;

x14596_14599.om$next$IQuery$query$arity$1 = ((function (x14596_14599){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale.localised","locale.localised",1701172855),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app.localised","app.localised",-539211464),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","locale","localised/locale",1513168907)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-text","editable-text",-2021933983),om.next.get_query.call(null,om_next_datascript_localisation_demo.components.editable_text.EditableText)], null)], null)], null)], null);
});})(x14596_14599))
;


om_next_datascript_localisation_demo.components.locale.flat.Localised.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.flat.Localised.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.flat/Localised";

om_next_datascript_localisation_demo.components.locale.flat.Localised.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write.call(null,writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.flat/Localised");
});
om_next_datascript_localisation_demo.components.locale.flat.locale_locale = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.flat.Localised,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
return cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale.localised","locale.localised",1701172855),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
})], null));
om_next_datascript_localisation_demo.components.locale.flat.find_localised_name = (function om_next_datascript_localisation_demo$components$locale$flat$find_localised_name(props,code){
var name = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props);
var locale = cljs.core.filterv.call(null,((function (name){
return (function (p1__14600_SHARP_){
return cljs.core._EQ_.call(null,code,new cljs.core.Keyword("locale.localised","code","locale.localised/code",-344701130).cljs$core$IFn$_invoke$arity$1(p1__14600_SHARP_));
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

var x14605_14615 = om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype;
x14605_14615.componentWillUpdate = ((function (x14605_14615){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__9236__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__9236__auto__);
});})(x14605_14615))
;

x14605_14615.shouldComponentUpdate = ((function (x14605_14615){
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
});})(x14605_14615))
;

x14605_14615.componentWillUnmount = ((function (x14605_14615){
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
});})(x14605_14615))
;

x14605_14615.componentDidUpdate = ((function (x14605_14615){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__9236__auto__);
});})(x14605_14615))
;

x14605_14615.isMounted = ((function (x14605_14615){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14605_14615))
;

x14605_14615.componentWillMount = ((function (x14605_14615){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__9241__auto__,this__9236__auto__);
}
});})(x14605_14615))
;

x14605_14615.render = ((function (x14605_14615){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_14606 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14607 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14608 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14609 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14610 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

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
return React.createElement("div",null,React.createElement("h3",null,"Name: ",sablono.interpreter.interpret.call(null,name)),React.createElement("p",null,"Localised name: ",sablono.interpreter.interpret.call(null,localised_name)),React.createElement("p",null,"Code: ",sablono.interpreter.interpret.call(null,code)),React.createElement("p",null,"Enum: ",sablono.interpreter.interpret.call(null,[cljs.core.str(enum$)].join(''))),React.createElement("button",{"onClick": ((function (props,lprops,llprops,alprops,id,code,enum$,name,localised_name,_STAR_reconciler_STAR_14606,_STAR_depth_STAR_14607,_STAR_shared_STAR_14608,_STAR_instrument_STAR_14609,_STAR_parent_STAR_14610,this$,this__9235__auto__,x14605_14615){
return (function (e){
return om_next_datascript_localisation_demo.utils.app.set_app_locale.call(null,this$,id);
});})(props,lprops,llprops,alprops,id,code,enum$,name,localised_name,_STAR_reconciler_STAR_14606,_STAR_depth_STAR_14607,_STAR_shared_STAR_14608,_STAR_instrument_STAR_14609,_STAR_parent_STAR_14610,this$,this__9235__auto__,x14605_14615))
},"Switch to ",sablono.interpreter.interpret.call(null,localised_name)),React.createElement("h4",null,"Locales"),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,om_next_datascript_localisation_demo.components.locale.flat.locale_locale,llprops)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14610;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14609;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14608;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14607;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14606;
}});})(x14605_14615))
;


om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype.constructor = om_next_datascript_localisation_demo.components.locale.flat.Locale;

om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype.om$isComponent = true;

var x14613_14616 = om_next_datascript_localisation_demo.components.locale.flat.Locale;
x14613_14616.om$next$Ident$ = true;

x14613_14616.om$next$Ident$ident$arity$2 = ((function (x14613_14616){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x14613_14616))
;

x14613_14616.om$next$IQuery$ = true;

x14613_14616.om$next$IQuery$query$arity$1 = ((function (x14613_14616){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("locale","code","locale/code",-1620643092),new cljs.core.Keyword("locale","enum","locale/enum",563985782),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app.localised","app.localised",-539211464),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this","this",-611633625)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale.locales","locale.locales",1396117577),om.next.get_query.call(null,om_next_datascript_localisation_demo.components.locale.flat.Localised)], null)], null)], null)], null);
});})(x14613_14616))
;


var x14614_14617 = om_next_datascript_localisation_demo.components.locale.flat.Locale.prototype;
x14614_14617.om$next$Ident$ = true;

x14614_14617.om$next$Ident$ident$arity$2 = ((function (x14614_14617){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x14614_14617))
;

x14614_14617.om$next$IQuery$ = true;

x14614_14617.om$next$IQuery$query$arity$1 = ((function (x14614_14617){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("locale","code","locale/code",-1620643092),new cljs.core.Keyword("locale","enum","locale/enum",563985782),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app.localised","app.localised",-539211464),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this","this",-611633625)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale.locales","locale.locales",1396117577),om.next.get_query.call(null,om_next_datascript_localisation_demo.components.locale.flat.Localised)], null)], null)], null)], null);
});})(x14614_14617))
;


om_next_datascript_localisation_demo.components.locale.flat.Locale.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.flat.Locale.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.flat/Locale";

om_next_datascript_localisation_demo.components.locale.flat.Locale.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write.call(null,writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.flat/Locale");
});
om_next_datascript_localisation_demo.components.locale.flat.locale_factory = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.flat.Locale,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
return cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
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

var x14622_14631 = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype;
x14622_14631.componentWillUpdate = ((function (x14622_14631){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__9236__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__9236__auto__);
});})(x14622_14631))
;

x14622_14631.shouldComponentUpdate = ((function (x14622_14631){
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
});})(x14622_14631))
;

x14622_14631.componentWillUnmount = ((function (x14622_14631){
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
});})(x14622_14631))
;

x14622_14631.componentDidUpdate = ((function (x14622_14631){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__9236__auto__);
});})(x14622_14631))
;

x14622_14631.isMounted = ((function (x14622_14631){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14622_14631))
;

x14622_14631.componentWillMount = ((function (x14622_14631){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__9241__auto__,this__9236__auto__);
}
});})(x14622_14631))
;

x14622_14631.render = ((function (x14622_14631){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_14623 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14624 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14625 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14626 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14627 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.props.call(null,this$)),"LocalesFlat: render: props"))));
} else {
}

var props = om.next.props.call(null,this$);
var rows = new cljs.core.Keyword(null,"locales","locales",1785635955).cljs$core$IFn$_invoke$arity$1(props);
var attrs14628 = cljs.core.map.call(null,om_next_datascript_localisation_demo.components.locale.flat.locale_factory,rows);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs14628))?sablono.interpreter.attributes.call(null,attrs14628):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14628))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14628)], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14627;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14626;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14625;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14624;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14623;
}});})(x14622_14631))
;


om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype.constructor = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat;

om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype.om$isComponent = true;

var x14629_14632 = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat;
x14629_14632.om$next$IQuery$ = true;

x14629_14632.om$next$IQuery$query$arity$1 = ((function (x14629_14632){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locales","locales",1785635955),om.next.get_query.call(null,om_next_datascript_localisation_demo.components.locale.flat.Locale)], null)], null);
});})(x14629_14632))
;


var x14630_14633 = om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.prototype;
x14630_14633.om$next$IQuery$ = true;

x14630_14633.om$next$IQuery$query$arity$1 = ((function (x14630_14633){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locales","locales",1785635955),om.next.get_query.call(null,om_next_datascript_localisation_demo.components.locale.flat.Locale)], null)], null);
});})(x14630_14633))
;


om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.flat/LocalesFlat";

om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write.call(null,writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.flat/LocalesFlat");
});
om_next_datascript_localisation_demo.components.locale.flat.locales_flat = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.flat.LocalesFlat);

//# sourceMappingURL=flat.js.map?rel=1452427075039