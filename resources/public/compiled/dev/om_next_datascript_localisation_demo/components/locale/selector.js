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
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype = goog.object.clone(React.Component.prototype);

var x11631_11639 = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype;
x11631_11639.componentWillUpdate = ((function (x11631_11639){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7334__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7334__auto__);
});})(x11631_11639))
;

x11631_11639.shouldComponentUpdate = ((function (x11631_11639){
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
});})(x11631_11639))
;

x11631_11639.componentWillUnmount = ((function (x11631_11639){
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
});})(x11631_11639))
;

x11631_11639.componentDidUpdate = ((function (x11631_11639){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7334__auto__);
});})(x11631_11639))
;

x11631_11639.isMounted = ((function (x11631_11639){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x11631_11639))
;

x11631_11639.componentWillMount = ((function (x11631_11639){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7339__auto__,this__7334__auto__);
}
});})(x11631_11639))
;

x11631_11639.render = ((function (x11631_11639){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_11632 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_11633 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_11634 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_11635 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_11636 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props.call(null,this$);
var lprops = new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(props);
var id = cljs.core.get_in.call(null,lprops,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
var text = om_next_datascript_localisation_demo.components.locale.selector.find_locale_name_in_locale.call(null,lprops,id);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,props),"LocaleSelectorLink: render: props "))));
} else {
}

return React.createElement("li",null,React.createElement("a",{"onClick": ((function (props,lprops,id,text,_STAR_reconciler_STAR_11632,_STAR_depth_STAR_11633,_STAR_shared_STAR_11634,_STAR_instrument_STAR_11635,_STAR_parent_STAR_11636,this$,this__7333__auto__,x11631_11639){
return (function (e){
return om_next_datascript_localisation_demo.utils.app.set_app_locale.call(null,this$,id);
});})(props,lprops,id,text,_STAR_reconciler_STAR_11632,_STAR_depth_STAR_11633,_STAR_shared_STAR_11634,_STAR_instrument_STAR_11635,_STAR_parent_STAR_11636,this$,this__7333__auto__,x11631_11639))
},sablono.interpreter.interpret.call(null,text)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_11636;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11635;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_11634;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_11633;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_11632;
}});})(x11631_11639))
;


om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype.constructor = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink;

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype.om$isComponent = true;

var x11637_11640 = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink;
x11637_11640.om$next$Ident$ = true;

x11637_11640.om$next$Ident$ident$arity$2 = ((function (x11637_11640){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x11637_11640))
;

x11637_11640.om$next$IQuery$ = true;

x11637_11640.om$next$IQuery$query$arity$1 = ((function (x11637_11640){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locale","locale",-2115712697)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised","localised",-1733242051)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ident","ident",-742346)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_ident.call(null,this$__$1)))))))))))))));
});})(x11637_11640))
;


var x11638_11641 = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype;
x11638_11641.om$next$Ident$ = true;

x11638_11641.om$next$Ident$ident$arity$2 = ((function (x11638_11641){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword("db","id","db/id",-1388397098)], null))], null);
});})(x11638_11641))
;

x11638_11641.om$next$IQuery$ = true;

x11638_11641.om$next$IQuery$query$arity$1 = ((function (x11638_11641){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locale","locale",-2115712697)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised","localised",-1733242051)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ident","ident",-742346)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_ident.call(null,this$__$1)))))))))))))));
});})(x11638_11641))
;


om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.selector/LocaleSelectorLink";

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write.call(null,writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.selector/LocaleSelectorLink");
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
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype = goog.object.clone(React.Component.prototype);

var x11647_11658 = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype;
x11647_11658.componentWillUpdate = ((function (x11647_11658){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7334__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7334__auto__);
});})(x11647_11658))
;

x11647_11658.shouldComponentUpdate = ((function (x11647_11658){
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
});})(x11647_11658))
;

x11647_11658.componentWillUnmount = ((function (x11647_11658){
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
});})(x11647_11658))
;

x11647_11658.componentDidUpdate = ((function (x11647_11658){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7334__auto__);
});})(x11647_11658))
;

x11647_11658.isMounted = ((function (x11647_11658){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x11647_11658))
;

x11647_11658.componentWillMount = ((function (x11647_11658){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7339__auto__,this__7334__auto__);
}
});})(x11647_11658))
;

x11647_11658.render = ((function (x11647_11658){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_11648 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_11649 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_11650 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_11651 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_11652 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props.call(null,this$);
var locales = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locales","locales",1785635955)], null));
var app_locale = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.locale","app.locale",1484369313),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
var locales__$1 = om_next_datascript_localisation_demo.components.locale.selector.filter_locales.call(null,locales,app_locale);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,props),"LocaleSelector: render: props "))));
} else {
}

if(cljs.core.seq.call(null,locales__$1)){
return React.createElement("div",null,React.createElement("p",null,"Choose a different locale:"),(function (){var attrs11655 = cljs.core.map.call(null,((function (props,locales,app_locale,locales__$1,_STAR_reconciler_STAR_11648,_STAR_depth_STAR_11649,_STAR_shared_STAR_11650,_STAR_instrument_STAR_11651,_STAR_parent_STAR_11652,this$,this__7333__auto__,x11647_11658){
return (function (p1__11642_SHARP_){
return om_next_datascript_localisation_demo.components.locale.selector.locale_selector_link.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale","locale",-2115712697),p1__11642_SHARP_], null));
});})(props,locales,app_locale,locales__$1,_STAR_reconciler_STAR_11648,_STAR_depth_STAR_11649,_STAR_shared_STAR_11650,_STAR_instrument_STAR_11651,_STAR_parent_STAR_11652,this$,this__7333__auto__,x11647_11658))
,locales__$1);
return cljs.core.apply.call(null,React.createElement,"ul",((cljs.core.map_QMARK_.call(null,attrs11655))?sablono.interpreter.attributes.call(null,attrs11655):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11655))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11655)], null))));
})());
} else {
return null;
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_11652;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11651;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_11650;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_11649;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_11648;
}});})(x11647_11658))
;


om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype.constructor = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector;

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype.om$isComponent = true;

var x11656_11659 = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector;
x11656_11659.om$next$IQuery$ = true;

x11656_11659.om$next$IQuery$query$arity$1 = ((function (x11656_11659){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"app.locale","app.locale",1484369313)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales","locales",1785635955))))));
});})(x11656_11659))
;


var x11657_11660 = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype;
x11657_11660.om$next$IQuery$ = true;

x11657_11660.om$next$IQuery$query$arity$1 = ((function (x11657_11660){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"app.locale","app.locale",1484369313)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"locales","locales",1785635955))))));
});})(x11657_11660))
;


om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.selector/LocalesSelector";

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write.call(null,writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.selector/LocalesSelector");
});
om_next_datascript_localisation_demo.components.locale.selector.locales_selector = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector);

//# sourceMappingURL=selector.js.map?rel=1452424845921