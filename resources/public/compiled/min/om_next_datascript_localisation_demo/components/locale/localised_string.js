// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.components.locale.localised_string');
goog.require('cljs.core');
goog.require('om.next');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('om_next_datascript_localisation_demo.utils.ident');
goog.require('om_next_datascript_localisation_demo.components.editable_text');
om_next_datascript_localisation_demo.components.locale.localised_string.make_ident = (function om_next_datascript_localisation_demo$components$locale$localised_string$make_ident(this$){
var map__26614 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__26614__$1 = ((((!((map__26614 == null)))?((((map__26614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26614):map__26614);
var string_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26614__$1,cljs.core.cst$kw$string_DASH_id);
var locale_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26614__$1,cljs.core.cst$kw$locale_DASH_id);
return om_next_datascript_localisation_demo.utils.ident.string_id_and_locale__GT_ident(string_id,locale_id);
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString = (function om_next_datascript_localisation_demo$components$locale$localised_string$LocalisedString(){
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype = goog.object.clone(React.Component.prototype);

var x26620_26635 = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype;
x26620_26635.componentWillUpdate = ((function (x26620_26635){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_(this__9236__auto__);

return om.next.merge_pending_state_BANG_(this__9236__auto__);
});})(x26620_26635))
;

x26620_26635.shouldComponentUpdate = ((function (x26620_26635){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__26623 = this__9236__auto__.state;
var G__26624 = "omcljs$state";
return goog.object.get(G__26623,G__26624);
})(),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x26620_26635))
;

x26620_26635.componentWillUnmount = ((function (x26620_26635){
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
});})(x26620_26635))
;

x26620_26635.componentDidUpdate = ((function (x26620_26635){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_(this__9236__auto__);
});})(x26620_26635))
;

x26620_26635.isMounted = ((function (x26620_26635){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26620_26635))
;

x26620_26635.componentWillMount = ((function (x26620_26635){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x26620_26635))
;

x26620_26635.render = ((function (x26620_26635){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_26625 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26626 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26627 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26628 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26629 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props(this$);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_string,cljs.core.cst$kw$localised_DASH_value], null));
var map__26630 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__26630__$1 = ((((!((map__26630 == null)))?((((map__26630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26630):map__26630);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26630__$1,cljs.core.cst$kw$render_DASH_fn);
var string_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26630__$1,cljs.core.cst$kw$string_DASH_id);
var value__$1 = (function (){var or__6142__auto__ = value;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return [cljs.core.str(string_id)].join('');
}
})();
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__26632_26636 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,props),"LocalisedString: render: props ")));
console.log(G__26632_26636);
} else {
}

return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(value__$1) : render_fn.call(null,value__$1));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26629;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26628;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26627;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26626;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26625;
}});})(x26620_26635))
;


om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype.constructor = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString;

om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype.om$isComponent = true;

var x26633_26637 = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString;
x26633_26637.om$next$Ident$ = true;

x26633_26637.om$next$Ident$ident$arity$2 = ((function (x26633_26637){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_string,om_next_datascript_localisation_demo.components.locale.localised_string.make_ident(this$__$1)], null);
});})(x26633_26637))
;

x26633_26637.om$next$IQuery$ = true;

x26633_26637.om$next$IQuery$query$arity$1 = ((function (x26633_26637){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_SLASH_string),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ident),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_ident(this$__$1)))))))))))))));
});})(x26633_26637))
;


var x26634_26638 = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype;
x26634_26638.om$next$Ident$ = true;

x26634_26638.om$next$Ident$ident$arity$2 = ((function (x26634_26638){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_string,om_next_datascript_localisation_demo.components.locale.localised_string.make_ident(this$__$1)], null);
});})(x26634_26638))
;

x26634_26638.om$next$IQuery$ = true;

x26634_26638.om$next$IQuery$query$arity$1 = ((function (x26634_26638){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_SLASH_string),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ident),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_ident(this$__$1)))))))))))))));
});})(x26634_26638))
;


om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.localised-string/LocalisedString";

om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write(writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.localised-string/LocalisedString");
});
om_next_datascript_localisation_demo.components.locale.localised_string.localised_string = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (props){
return om_next_datascript_localisation_demo.components.locale.localised_string.make_ident(props);
})], null));
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString = (function om_next_datascript_localisation_demo$components$locale$localised_string$EditableLocalisedString(){
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype = goog.object.clone(React.Component.prototype);

var x26644_26662 = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype;
x26644_26662.componentWillUpdate = ((function (x26644_26662){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_(this__9236__auto__);

return om.next.merge_pending_state_BANG_(this__9236__auto__);
});})(x26644_26662))
;

x26644_26662.shouldComponentUpdate = ((function (x26644_26662){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__26647 = this__9236__auto__.state;
var G__26648 = "omcljs$state";
return goog.object.get(G__26647,G__26648);
})(),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x26644_26662))
;

x26644_26662.componentWillUnmount = ((function (x26644_26662){
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
});})(x26644_26662))
;

x26644_26662.componentDidUpdate = ((function (x26644_26662){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_(this__9236__auto__);
});})(x26644_26662))
;

x26644_26662.isMounted = ((function (x26644_26662){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26644_26662))
;

x26644_26662.componentWillMount = ((function (x26644_26662){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x26644_26662))
;

x26644_26662.edited_text = ((function (x26644_26662){
return (function (text){
var this$ = this;
var map__26649 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__26649__$1 = ((((!((map__26649 == null)))?((((map__26649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26649):map__26649);
var string_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26649__$1,cljs.core.cst$kw$string_DASH_id);
var locale_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26649__$1,cljs.core.cst$kw$locale_DASH_id);
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$localised_DASH_string_SLASH_set),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$string_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,string_id),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locale_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,locale_id),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$text),cljs.core._conj(cljs.core.List.EMPTY,text)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_ident(this$)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_strings)], 0))))));
});})(x26644_26662))
;

x26644_26662.render = ((function (x26644_26662){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_26651 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26652 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26653 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26654 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26655 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props(this$);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_string,cljs.core.cst$kw$localised_DASH_value], null));
var map__26656 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__26656__$1 = ((((!((map__26656 == null)))?((((map__26656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26656):map__26656);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26656__$1,cljs.core.cst$kw$tag);
var string_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26656__$1,cljs.core.cst$kw$string_DASH_id);
var value__$1 = (function (){var or__6142__auto__ = value;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return [cljs.core.str(string_id)].join('');
}
})();
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__26658_26663 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,props),"EditableLocalisedString: render: props ")));
console.log(G__26658_26663);
} else {
}

var G__26659 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,value__$1], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$callback,((function (props,value,map__26656,map__26656__$1,tag,string_id,value__$1,_STAR_reconciler_STAR_26651,_STAR_depth_STAR_26652,_STAR_shared_STAR_26653,_STAR_instrument_STAR_26654,_STAR_parent_STAR_26655,this$,this__9235__auto__,x26644_26662){
return (function (p1__26639_SHARP_){
return this$.edited_text(p1__26639_SHARP_);
});})(props,value,map__26656,map__26656__$1,tag,string_id,value__$1,_STAR_reconciler_STAR_26651,_STAR_depth_STAR_26652,_STAR_shared_STAR_26653,_STAR_instrument_STAR_26654,_STAR_parent_STAR_26655,this$,this__9235__auto__,x26644_26662))
,cljs.core.cst$kw$tag,tag], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__26659) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__26659));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26655;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26654;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26653;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26652;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26651;
}});})(x26644_26662))
;


om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype.constructor = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString;

om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype.om$isComponent = true;

var x26660_26664 = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString;
x26660_26664.om$next$Ident$ = true;

x26660_26664.om$next$Ident$ident$arity$2 = ((function (x26660_26664){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_string,om_next_datascript_localisation_demo.components.locale.localised_string.make_ident(this$__$1)], null);
});})(x26660_26664))
;

x26660_26664.om$next$IQuery$ = true;

x26660_26664.om$next$IQuery$query$arity$1 = ((function (x26660_26664){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_SLASH_string),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ident),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_ident(this$__$1)))))))))))))));
});})(x26660_26664))
;


var x26661_26665 = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype;
x26661_26665.om$next$Ident$ = true;

x26661_26665.om$next$Ident$ident$arity$2 = ((function (x26661_26665){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_string,om_next_datascript_localisation_demo.components.locale.localised_string.make_ident(this$__$1)], null);
});})(x26661_26665))
;

x26661_26665.om$next$IQuery$ = true;

x26661_26665.om$next$IQuery$query$arity$1 = ((function (x26661_26665){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_SLASH_string),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id))))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ident),cljs.core._conj(cljs.core.List.EMPTY,om.next.get_ident(this$__$1)))))))))))))));
});})(x26661_26665))
;


om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.localised-string/EditableLocalisedString";

om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write(writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.localised-string/EditableLocalisedString");
});
om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (props){
return [cljs.core.str("editable"),cljs.core.str(om_next_datascript_localisation_demo.components.locale.localised_string.make_ident(props))].join('');
})], null));
