// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.components.locale.localised_string');
goog.require('cljs.core');
goog.require('om.next');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('om_next_datascript_localisation_demo.utils.ident');
goog.require('om_next_datascript_localisation_demo.components.editable_text');
om_next_datascript_localisation_demo.components.locale.localised_string.make_ident = (function om_next_datascript_localisation_demo$components$locale$localised_string$make_ident(this$){
var map__18240 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__18240__$1 = ((((!((map__18240 == null)))?((((map__18240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18240):map__18240);
var string_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18240__$1,cljs.core.cst$kw$string_DASH_id);
var locale_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18240__$1,cljs.core.cst$kw$locale_DASH_id);
return om_next_datascript_localisation_demo.utils.ident.string_id_and_locale__GT_ident(string_id,locale_id);
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString = (function om_next_datascript_localisation_demo$components$locale$localised_string$LocalisedString(){
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype = goog.object.clone(React.Component.prototype);

var x18246_18261 = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype;
x18246_18261.componentWillUpdate = ((function (x18246_18261){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_(this__7334__auto__);

return om.next.merge_pending_state_BANG_(this__7334__auto__);
});})(x18246_18261))
;

x18246_18261.shouldComponentUpdate = ((function (x18246_18261){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__7334__auto__),goog.object.get(next_props__7335__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__7334__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__18249 = this__7334__auto__.state;
var G__18250 = "omcljs$state";
return goog.object.get(G__18249,G__18250);
})(),goog.object.get(next_state__7336__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x18246_18261))
;

x18246_18261.componentWillUnmount = ((function (x18246_18261){
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
});})(x18246_18261))
;

x18246_18261.componentDidUpdate = ((function (x18246_18261){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_(this__7334__auto__);
});})(x18246_18261))
;

x18246_18261.isMounted = ((function (x18246_18261){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18246_18261))
;

x18246_18261.componentWillMount = ((function (x18246_18261){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x18246_18261))
;

x18246_18261.render = ((function (x18246_18261){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_18251 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18252 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18253 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18254 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18255 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props(this$);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_string,cljs.core.cst$kw$localised_DASH_value], null));
var map__18256 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__18256__$1 = ((((!((map__18256 == null)))?((((map__18256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18256):map__18256);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18256__$1,cljs.core.cst$kw$render_DASH_fn);
var string_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18256__$1,cljs.core.cst$kw$string_DASH_id);
var value__$1 = (function (){var or__6142__auto__ = value;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return [cljs.core.str(string_id)].join('');
}
})();
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__18258_18262 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,props),"LocalisedString: render: props ")));
console.log(G__18258_18262);
} else {
}

return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(value__$1) : render_fn.call(null,value__$1));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18255;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18254;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18253;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18252;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18251;
}});})(x18246_18261))
;


om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype.constructor = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString;

om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype.om$isComponent = true;

var x18259_18263 = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString;
x18259_18263.om$next$Ident$ = true;

x18259_18263.om$next$Ident$ident$arity$2 = ((function (x18259_18263){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_string,om_next_datascript_localisation_demo.components.locale.localised_string.make_ident(this$__$1)], null);
});})(x18259_18263))
;

x18259_18263.om$next$IQuery$ = true;

x18259_18263.om$next$IQuery$query$arity$1 = ((function (x18259_18263){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_SLASH_string),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ident),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_ident(this$__$1)))))))))))))));
});})(x18259_18263))
;


var x18260_18264 = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype;
x18260_18264.om$next$Ident$ = true;

x18260_18264.om$next$Ident$ident$arity$2 = ((function (x18260_18264){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_string,om_next_datascript_localisation_demo.components.locale.localised_string.make_ident(this$__$1)], null);
});})(x18260_18264))
;

x18260_18264.om$next$IQuery$ = true;

x18260_18264.om$next$IQuery$query$arity$1 = ((function (x18260_18264){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_SLASH_string),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ident),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_ident(this$__$1)))))))))))))));
});})(x18260_18264))
;


om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.localised-string/LocalisedString";

om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write(writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.localised-string/LocalisedString");
});
om_next_datascript_localisation_demo.components.locale.localised_string.localised_string = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (props){
return om_next_datascript_localisation_demo.components.locale.localised_string.make_ident(props);
})], null));
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString = (function om_next_datascript_localisation_demo$components$locale$localised_string$EditableLocalisedString(){
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype = goog.object.clone(React.Component.prototype);

var x18270_18288 = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype;
x18270_18288.componentWillUpdate = ((function (x18270_18288){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_(this__7334__auto__);

return om.next.merge_pending_state_BANG_(this__7334__auto__);
});})(x18270_18288))
;

x18270_18288.shouldComponentUpdate = ((function (x18270_18288){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__7334__auto__),goog.object.get(next_props__7335__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__7334__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__18273 = this__7334__auto__.state;
var G__18274 = "omcljs$state";
return goog.object.get(G__18273,G__18274);
})(),goog.object.get(next_state__7336__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x18270_18288))
;

x18270_18288.componentWillUnmount = ((function (x18270_18288){
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
});})(x18270_18288))
;

x18270_18288.componentDidUpdate = ((function (x18270_18288){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_(this__7334__auto__);
});})(x18270_18288))
;

x18270_18288.isMounted = ((function (x18270_18288){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18270_18288))
;

x18270_18288.componentWillMount = ((function (x18270_18288){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x18270_18288))
;

x18270_18288.edited_text = ((function (x18270_18288){
return (function (text){
var this$ = this;
var map__18275 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__18275__$1 = ((((!((map__18275 == null)))?((((map__18275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18275):map__18275);
var string_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18275__$1,cljs.core.cst$kw$string_DASH_id);
var locale_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18275__$1,cljs.core.cst$kw$locale_DASH_id);
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$localised_DASH_string_SLASH_set),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$string_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,string_id),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locale_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,locale_id),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$text),cljs.core._conj(cljs.core.List.EMPTY,text)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_ident(this$)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_strings)], 0))))));
});})(x18270_18288))
;

x18270_18288.render = ((function (x18270_18288){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_18277 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18278 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18279 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18280 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18281 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props(this$);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_string,cljs.core.cst$kw$localised_DASH_value], null));
var map__18282 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__18282__$1 = ((((!((map__18282 == null)))?((((map__18282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18282):map__18282);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,cljs.core.cst$kw$tag);
var string_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,cljs.core.cst$kw$string_DASH_id);
var value__$1 = (function (){var or__6142__auto__ = value;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return [cljs.core.str(string_id)].join('');
}
})();
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__18284_18289 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,props),"EditableLocalisedString: render: props ")));
console.log(G__18284_18289);
} else {
}

var G__18285 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,value__$1], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$callback,((function (props,value,map__18282,map__18282__$1,tag,string_id,value__$1,_STAR_reconciler_STAR_18277,_STAR_depth_STAR_18278,_STAR_shared_STAR_18279,_STAR_instrument_STAR_18280,_STAR_parent_STAR_18281,this$,this__7333__auto__,x18270_18288){
return (function (p1__18265_SHARP_){
return this$.edited_text(p1__18265_SHARP_);
});})(props,value,map__18282,map__18282__$1,tag,string_id,value__$1,_STAR_reconciler_STAR_18277,_STAR_depth_STAR_18278,_STAR_shared_STAR_18279,_STAR_instrument_STAR_18280,_STAR_parent_STAR_18281,this$,this__7333__auto__,x18270_18288))
,cljs.core.cst$kw$tag,tag], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__18285) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__18285));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18281;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18280;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18279;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18278;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18277;
}});})(x18270_18288))
;


om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype.constructor = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString;

om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype.om$isComponent = true;

var x18286_18290 = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString;
x18286_18290.om$next$Ident$ = true;

x18286_18290.om$next$Ident$ident$arity$2 = ((function (x18286_18290){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_string,om_next_datascript_localisation_demo.components.locale.localised_string.make_ident(this$__$1)], null);
});})(x18286_18290))
;

x18286_18290.om$next$IQuery$ = true;

x18286_18290.om$next$IQuery$query$arity$1 = ((function (x18286_18290){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_SLASH_string),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ident),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_ident(this$__$1)))))))))))))));
});})(x18286_18290))
;


var x18287_18291 = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype;
x18287_18291.om$next$Ident$ = true;

x18287_18291.om$next$Ident$ident$arity$2 = ((function (x18287_18291){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_string,om_next_datascript_localisation_demo.components.locale.localised_string.make_ident(this$__$1)], null);
});})(x18287_18291))
;

x18287_18291.om$next$IQuery$ = true;

x18287_18291.om$next$IQuery$query$arity$1 = ((function (x18287_18291){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_SLASH_string),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ident),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_ident(this$__$1)))))))))))))));
});})(x18287_18291))
;


om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.localised-string/EditableLocalisedString";

om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write(writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.localised-string/EditableLocalisedString");
});
om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (props){
return [cljs.core.str("editable"),cljs.core.str(om_next_datascript_localisation_demo.components.locale.localised_string.make_ident(props))].join('');
})], null));
