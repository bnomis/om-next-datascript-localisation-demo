// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_datascript_localisation_demo.components.locale.selector');
goog.require('cljs.core');
goog.require('om.next');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('om_next_datascript_localisation_demo.utils.app');
om_next_datascript_localisation_demo.components.locale.selector.localised_locale = (function om_next_datascript_localisation_demo$components$locale$selector$localised_locale(localised){
return cljs.core.get_in.call(null,localised,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","locale","localised/locale",1513168907),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
});
om_next_datascript_localisation_demo.components.locale.selector.localised_for_locale = (function om_next_datascript_localisation_demo$components$locale$selector$localised_for_locale(localised,id){
return cljs.core.some.call(null,(function (l){
if(cljs.core._EQ_.call(null,id,om_next_datascript_localisation_demo.components.locale.selector.localised_locale.call(null,l))){
return l;
} else {
return false;
}
}),localised);
});
om_next_datascript_localisation_demo.components.locale.selector.find_locale_name_in_locale = (function om_next_datascript_localisation_demo$components$locale$selector$find_locale_name_in_locale(locale,id){
var localised = om_next_datascript_localisation_demo.components.locale.selector.localised_for_locale.call(null,new cljs.core.Keyword(null,"localised","localised",-1733242051).cljs$core$IFn$_invoke$arity$1(locale),id);
if(cljs.core.truth_(localised)){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(localised);
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(locale);
}
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink = (function om_next_datascript_localisation_demo$components$locale$selector$LocaleSelectorLink(){
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype = goog.object.clone(React.Component.prototype);

var x15505_15513 = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype;
x15505_15513.componentWillUpdate = ((function (x15505_15513){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__9236__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__9236__auto__);
});})(x15505_15513))
;

x15505_15513.shouldComponentUpdate = ((function (x15505_15513){
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
});})(x15505_15513))
;

x15505_15513.componentWillUnmount = ((function (x15505_15513){
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
});})(x15505_15513))
;

x15505_15513.componentDidUpdate = ((function (x15505_15513){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__9236__auto__);
});})(x15505_15513))
;

x15505_15513.isMounted = ((function (x15505_15513){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x15505_15513))
;

x15505_15513.componentWillMount = ((function (x15505_15513){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__9241__auto__,this__9236__auto__);
}
});})(x15505_15513))
;

x15505_15513.render = ((function (x15505_15513){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_15506 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_15507 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_15508 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_15509 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_15510 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props.call(null,this$);
var lprops = new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(props);
var id = cljs.core.get_in.call(null,lprops,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
var text = om_next_datascript_localisation_demo.components.locale.selector.find_locale_name_in_locale.call(null,lprops,id);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,props),"LocaleSelectorLink: render: props "))));
} else {
}

return React.createElement("li",null,React.createElement("a",{"onClick": ((function (props,lprops,id,text,_STAR_reconciler_STAR_15506,_STAR_depth_STAR_15507,_STAR_shared_STAR_15508,_STAR_instrument_STAR_15509,_STAR_parent_STAR_15510,this$,this__9235__auto__,x15505_15513){
return (function (e){
return om_next_datascript_localisation_demo.utils.app.set_app_locale.call(null,this$,id);
});})(props,lprops,id,text,_STAR_reconciler_STAR_15506,_STAR_depth_STAR_15507,_STAR_shared_STAR_15508,_STAR_instrument_STAR_15509,_STAR_parent_STAR_15510,this$,this__9235__auto__,x15505_15513))
},sablono.interpreter.interpret.call(null,text)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_15510;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_15509;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_15508;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_15507;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_15506;
}});})(x15505_15513))
;


om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype.constructor = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink;

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype.om$isComponent = true;

var x15511_15514 = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink;
x15511_15514.om$next$Ident$ = true;

x15511_15514.om$next$Ident$ident$arity$2 = ((function (x15511_15514){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x15511_15514))
;

x15511_15514.om$next$IQuery$ = true;

x15511_15514.om$next$IQuery$query$arity$1 = ((function (x15511_15514){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locale","locale",-2115712697)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised","localised",-1733242051)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ident","ident",-742346)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_ident.call(null,this$__$1)))))))))))))));
});})(x15511_15514))
;


var x15512_15515 = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype;
x15512_15515.om$next$Ident$ = true;

x15512_15515.om$next$Ident$ident$arity$2 = ((function (x15512_15515){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x15512_15515))
;

x15512_15515.om$next$IQuery$ = true;

x15512_15515.om$next$IQuery$query$arity$1 = ((function (x15512_15515){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locale","locale",-2115712697)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised","localised",-1733242051)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ident","ident",-742346)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_ident.call(null,this$__$1)))))))))))))));
});})(x15512_15515))
;


om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.selector/LocaleSelectorLink";

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write.call(null,writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.selector/LocaleSelectorLink");
});
om_next_datascript_localisation_demo.components.locale.selector.locale_selector_link = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
return cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
})], null));
om_next_datascript_localisation_demo.components.locale.selector.filter_locales = (function om_next_datascript_localisation_demo$components$locale$selector$filter_locales(locales,app_locale){
return cljs.core.remove.call(null,(function (l){
return cljs.core._EQ_.call(null,app_locale,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(l));
}),locales);
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector = (function om_next_datascript_localisation_demo$components$locale$selector$LocalesSelector(){
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype = goog.object.clone(React.Component.prototype);

var x15521_15532 = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype;
x15521_15532.componentWillUpdate = ((function (x15521_15532){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__9236__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__9236__auto__);
});})(x15521_15532))
;

x15521_15532.shouldComponentUpdate = ((function (x15521_15532){
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
});})(x15521_15532))
;

x15521_15532.componentWillUnmount = ((function (x15521_15532){
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
});})(x15521_15532))
;

x15521_15532.componentDidUpdate = ((function (x15521_15532){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__9236__auto__);
});})(x15521_15532))
;

x15521_15532.isMounted = ((function (x15521_15532){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x15521_15532))
;

x15521_15532.componentWillMount = ((function (x15521_15532){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__9241__auto__,this__9236__auto__);
}
});})(x15521_15532))
;

x15521_15532.render = ((function (x15521_15532){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_15522 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_15523 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_15524 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_15525 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_15526 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props.call(null,this$);
var locales = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locales","locales",1785635955)], null));
var app_locale = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.locale","app.locale",1484369313),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
var locales__$1 = om_next_datascript_localisation_demo.components.locale.selector.filter_locales.call(null,locales,app_locale);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,props),"LocaleSelector: render: props "))));
} else {
}

if(cljs.core.seq.call(null,locales__$1)){
return React.createElement("div",null,React.createElement("p",null,"Choose a different locale:"),(function (){var attrs15529 = cljs.core.map.call(null,((function (props,locales,app_locale,locales__$1,_STAR_reconciler_STAR_15522,_STAR_depth_STAR_15523,_STAR_shared_STAR_15524,_STAR_instrument_STAR_15525,_STAR_parent_STAR_15526,this$,this__9235__auto__,x15521_15532){
return (function (p1__15516_SHARP_){
return om_next_datascript_localisation_demo.components.locale.selector.locale_selector_link.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale","locale",-2115712697),p1__15516_SHARP_], null));
});})(props,locales,app_locale,locales__$1,_STAR_reconciler_STAR_15522,_STAR_depth_STAR_15523,_STAR_shared_STAR_15524,_STAR_instrument_STAR_15525,_STAR_parent_STAR_15526,this$,this__9235__auto__,x15521_15532))
,locales__$1);
return cljs.core.apply.call(null,React.createElement,"ul",((cljs.core.map_QMARK_.call(null,attrs15529))?sablono.interpreter.attributes.call(null,attrs15529):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15529))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15529)], null))));
})());
} else {
return null;
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_15526;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_15525;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_15524;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_15523;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_15522;
}});})(x15521_15532))
;


om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype.constructor = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector;

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype.om$isComponent = true;

var x15530_15533 = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector;
x15530_15533.om$next$IQuery$ = true;

x15530_15533.om$next$IQuery$query$arity$1 = ((function (x15530_15533){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"app.locale","app.locale",1484369313)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales","locales",1785635955))))));
});})(x15530_15533))
;


var x15531_15534 = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype;
x15531_15534.om$next$IQuery$ = true;

x15531_15534.om$next$IQuery$query$arity$1 = ((function (x15531_15534){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"app.locale","app.locale",1484369313)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales","locales",1785635955))))));
});})(x15531_15534))
;


om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.selector/LocalesSelector";

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write.call(null,writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.selector/LocalesSelector");
});
om_next_datascript_localisation_demo.components.locale.selector.locales_selector = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector);

//# sourceMappingURL=selector.js.map?rel=1452428125981