// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.components.locale.selector');
goog.require('cljs.core');
goog.require('om.next');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('om_next_datascript_localisation_demo.utils.app');
om_next_datascript_localisation_demo.components.locale.selector.localised_locale = (function om_next_datascript_localisation_demo$components$locale$selector$localised_locale(localised){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(localised,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_locale,cljs.core.cst$kw$db_SLASH_id], null));
});
om_next_datascript_localisation_demo.components.locale.selector.localised_for_locale = (function om_next_datascript_localisation_demo$components$locale$selector$localised_for_locale(localised,id){
return cljs.core.some((function (l){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,om_next_datascript_localisation_demo.components.locale.selector.localised_locale(l))){
return l;
} else {
return false;
}
}),localised);
});
om_next_datascript_localisation_demo.components.locale.selector.find_locale_name_in_locale = (function om_next_datascript_localisation_demo$components$locale$selector$find_locale_name_in_locale(locale,id){
var localised = om_next_datascript_localisation_demo.components.locale.selector.localised_for_locale(cljs.core.cst$kw$localised.cljs$core$IFn$_invoke$arity$1(locale),id);
if(cljs.core.truth_(localised)){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(localised);
} else {
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(locale);
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

var x18179_18201 = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype;
x18179_18201.componentWillUpdate = ((function (x18179_18201){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_(this__7334__auto__);

return om.next.merge_pending_state_BANG_(this__7334__auto__);
});})(x18179_18201))
;

x18179_18201.shouldComponentUpdate = ((function (x18179_18201){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__7334__auto__),goog.object.get(next_props__7335__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__7334__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__18182 = this__7334__auto__.state;
var G__18183 = "omcljs$state";
return goog.object.get(G__18182,G__18183);
})(),goog.object.get(next_state__7336__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x18179_18201))
;

x18179_18201.componentWillUnmount = ((function (x18179_18201){
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
});})(x18179_18201))
;

x18179_18201.componentDidUpdate = ((function (x18179_18201){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_(this__7334__auto__);
});})(x18179_18201))
;

x18179_18201.isMounted = ((function (x18179_18201){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18179_18201))
;

x18179_18201.componentWillMount = ((function (x18179_18201){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x18179_18201))
;

x18179_18201.render = ((function (x18179_18201){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_18184 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18185 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18186 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18187 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18188 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props(this$);
var lprops = cljs.core.cst$kw$locale.cljs$core$IFn$_invoke$arity$1(props);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(lprops,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null));
var text = om_next_datascript_localisation_demo.components.locale.selector.find_locale_name_in_locale(lprops,id);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__18189_18202 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,props),"LocaleSelectorLink: render: props ")));
console.log(G__18189_18202);
} else {
}

var G__18193 = "li";
var G__18194 = null;
var G__18195 = (function (){var G__18196 = "a";
var G__18197 = {"onClick": ((function (G__18196,G__18193,G__18194,props,lprops,id,text,_STAR_reconciler_STAR_18184,_STAR_depth_STAR_18185,_STAR_shared_STAR_18186,_STAR_instrument_STAR_18187,_STAR_parent_STAR_18188,this$,this__7333__auto__,x18179_18201){
return (function (e){
return om_next_datascript_localisation_demo.utils.app.set_app_locale(this$,id);
});})(G__18196,G__18193,G__18194,props,lprops,id,text,_STAR_reconciler_STAR_18184,_STAR_depth_STAR_18185,_STAR_shared_STAR_18186,_STAR_instrument_STAR_18187,_STAR_parent_STAR_18188,this$,this__7333__auto__,x18179_18201))
};
var G__18198 = sablono.interpreter.interpret(text);
return React.createElement(G__18196,G__18197,G__18198);
})();
return React.createElement(G__18193,G__18194,G__18195);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18188;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18187;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18186;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18185;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18184;
}});})(x18179_18201))
;


om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype.constructor = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink;

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype.om$isComponent = true;

var x18199_18203 = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink;
x18199_18203.om$next$Ident$ = true;

x18199_18203.om$next$Ident$ident$arity$2 = ((function (x18199_18203){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x18199_18203))
;

x18199_18203.om$next$IQuery$ = true;

x18199_18203.om$next$IQuery$query$arity$1 = ((function (x18199_18203){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised)], 0))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ident),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_ident(this$__$1)))))))))))))));
});})(x18199_18203))
;


var x18200_18204 = om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.prototype;
x18200_18204.om$next$Ident$ = true;

x18200_18204.om$next$Ident$ident$arity$2 = ((function (x18200_18204){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x18200_18204))
;

x18200_18204.om$next$IQuery$ = true;

x18200_18204.om$next$IQuery$query$arity$1 = ((function (x18200_18204){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised)], 0))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ident),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_ident(this$__$1)))))))))))))));
});})(x18200_18204))
;


om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.selector/LocaleSelectorLink";

om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write(writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.selector/LocaleSelectorLink");
});
om_next_datascript_localisation_demo.components.locale.selector.locale_selector_link = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.selector.LocaleSelectorLink,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (props){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null));
})], null));
om_next_datascript_localisation_demo.components.locale.selector.filter_locales = (function om_next_datascript_localisation_demo$components$locale$selector$filter_locales(locales,app_locale){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (l){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app_locale,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(l));
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

var x18210_18232 = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype;
x18210_18232.componentWillUpdate = ((function (x18210_18232){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_(this__7334__auto__);

return om.next.merge_pending_state_BANG_(this__7334__auto__);
});})(x18210_18232))
;

x18210_18232.shouldComponentUpdate = ((function (x18210_18232){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__7334__auto__),goog.object.get(next_props__7335__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__7334__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__18213 = this__7334__auto__.state;
var G__18214 = "omcljs$state";
return goog.object.get(G__18213,G__18214);
})(),goog.object.get(next_state__7336__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x18210_18232))
;

x18210_18232.componentWillUnmount = ((function (x18210_18232){
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
});})(x18210_18232))
;

x18210_18232.componentDidUpdate = ((function (x18210_18232){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_(this__7334__auto__);
});})(x18210_18232))
;

x18210_18232.isMounted = ((function (x18210_18232){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18210_18232))
;

x18210_18232.componentWillMount = ((function (x18210_18232){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x18210_18232))
;

x18210_18232.render = ((function (x18210_18232){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_18215 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18216 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18217 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18218 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18219 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props(this$);
var locales = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locales], null));
var app_locale = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$locale,cljs.core.cst$kw$db_SLASH_id], null));
var locales__$1 = om_next_datascript_localisation_demo.components.locale.selector.filter_locales(locales,app_locale);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__18220_18233 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,props),"LocaleSelector: render: props ")));
console.log(G__18220_18233);
} else {
}

if(cljs.core.seq(locales__$1)){
var G__18225 = "div";
var G__18226 = null;
var G__18227 = React.createElement("p",null,"Choose a different locale:");
var G__18228 = (function (){var attrs18223 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__18225,G__18226,G__18227,props,locales,app_locale,locales__$1,_STAR_reconciler_STAR_18215,_STAR_depth_STAR_18216,_STAR_shared_STAR_18217,_STAR_instrument_STAR_18218,_STAR_parent_STAR_18219,this$,this__7333__auto__,x18210_18232){
return (function (p1__18205_SHARP_){
var G__18229 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,p1__18205_SHARP_], null);
return (om_next_datascript_localisation_demo.components.locale.selector.locale_selector_link.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.selector.locale_selector_link.cljs$core$IFn$_invoke$arity$1(G__18229) : om_next_datascript_localisation_demo.components.locale.selector.locale_selector_link.call(null,G__18229));
});})(G__18225,G__18226,G__18227,props,locales,app_locale,locales__$1,_STAR_reconciler_STAR_18215,_STAR_depth_STAR_18216,_STAR_shared_STAR_18217,_STAR_instrument_STAR_18218,_STAR_parent_STAR_18219,this$,this__7333__auto__,x18210_18232))
,locales__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"ul",((cljs.core.map_QMARK_(attrs18223))?sablono.interpreter.attributes(attrs18223):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18223))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18223)], null))));
})();
return React.createElement(G__18225,G__18226,G__18227,G__18228);
} else {
return null;
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18219;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18218;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18217;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18216;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18215;
}});})(x18210_18232))
;


om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype.constructor = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector;

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype.om$isComponent = true;

var x18230_18234 = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector;
x18230_18234.om$next$IQuery$ = true;

x18230_18234.om$next$IQuery$query$arity$1 = ((function (x18230_18234){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app$locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales)))));
});})(x18230_18234))
;


var x18231_18235 = om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.prototype;
x18231_18235.om$next$IQuery$ = true;

x18231_18235.om$next$IQuery$query$arity$1 = ((function (x18231_18235){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$app$locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales)))));
});})(x18231_18235))
;


om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.selector/LocalesSelector";

om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write(writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.selector/LocalesSelector");
});
om_next_datascript_localisation_demo.components.locale.selector.locales_selector = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.components.locale.selector.LocalesSelector);
