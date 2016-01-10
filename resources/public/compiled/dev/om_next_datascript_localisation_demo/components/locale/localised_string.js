// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_datascript_localisation_demo.components.locale.localised_string');
goog.require('cljs.core');
goog.require('om.next');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('om_next_datascript_localisation_demo.utils.ident');
goog.require('om_next_datascript_localisation_demo.components.editable_text');
om_next_datascript_localisation_demo.components.locale.localised_string.make_ident = (function om_next_datascript_localisation_demo$components$locale$localised_string$make_ident(this$){
var map__11665 = om.next.get_computed.call(null,this$);
var map__11665__$1 = ((((!((map__11665 == null)))?((((map__11665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11665):map__11665);
var string_id = cljs.core.get.call(null,map__11665__$1,new cljs.core.Keyword(null,"string-id","string-id",280427428));
var locale_id = cljs.core.get.call(null,map__11665__$1,new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894));
return om_next_datascript_localisation_demo.utils.ident.string_id_and_locale__GT_ident.call(null,string_id,locale_id);
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

var x11671_11681 = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype;
x11671_11681.componentWillUpdate = ((function (x11671_11681){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7334__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7334__auto__);
});})(x11671_11681))
;

x11671_11681.shouldComponentUpdate = ((function (x11671_11681){
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
});})(x11671_11681))
;

x11671_11681.componentWillUnmount = ((function (x11671_11681){
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
});})(x11671_11681))
;

x11671_11681.componentDidUpdate = ((function (x11671_11681){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7334__auto__);
});})(x11671_11681))
;

x11671_11681.isMounted = ((function (x11671_11681){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x11671_11681))
;

x11671_11681.componentWillMount = ((function (x11671_11681){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7339__auto__,this__7334__auto__);
}
});})(x11671_11681))
;

x11671_11681.render = ((function (x11671_11681){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_11672 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_11673 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_11674 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_11675 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_11676 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props.call(null,this$);
var value = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.Keyword(null,"localised-value","localised-value",15124024)], null));
var map__11677 = om.next.get_computed.call(null,this$);
var map__11677__$1 = ((((!((map__11677 == null)))?((((map__11677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11677):map__11677);
var render_fn = cljs.core.get.call(null,map__11677__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));
var string_id = cljs.core.get.call(null,map__11677__$1,new cljs.core.Keyword(null,"string-id","string-id",280427428));
var value__$1 = (function (){var or__6142__auto__ = value;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return [cljs.core.str(string_id)].join('');
}
})();
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,props),"LocalisedString: render: props "))));
} else {
}

return render_fn.call(null,value__$1);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_11676;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11675;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_11674;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_11673;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_11672;
}});})(x11671_11681))
;


om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype.constructor = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString;

om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype.om$isComponent = true;

var x11679_11682 = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString;
x11679_11682.om$next$Ident$ = true;

x11679_11682.om$next$Ident$ident$arity$2 = ((function (x11679_11682){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","string","localised/string",-241276934),om_next_datascript_localisation_demo.components.locale.localised_string.make_ident.call(null,this$__$1)], null);
});})(x11679_11682))
;

x11679_11682.om$next$IQuery$ = true;

x11679_11682.om$next$IQuery$query$arity$1 = ((function (x11679_11682){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("localised","string","localised/string",-241276934)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ident","ident",-742346)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_ident.call(null,this$__$1)))))))))))))));
});})(x11679_11682))
;


var x11680_11683 = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype;
x11680_11683.om$next$Ident$ = true;

x11680_11683.om$next$Ident$ident$arity$2 = ((function (x11680_11683){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","string","localised/string",-241276934),om_next_datascript_localisation_demo.components.locale.localised_string.make_ident.call(null,this$__$1)], null);
});})(x11680_11683))
;

x11680_11683.om$next$IQuery$ = true;

x11680_11683.om$next$IQuery$query$arity$1 = ((function (x11680_11683){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("localised","string","localised/string",-241276934)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ident","ident",-742346)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_ident.call(null,this$__$1)))))))))))))));
});})(x11680_11683))
;


om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.localised-string/LocalisedString";

om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write.call(null,writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.localised-string/LocalisedString");
});
om_next_datascript_localisation_demo.components.locale.localised_string.localised_string = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
return om_next_datascript_localisation_demo.components.locale.localised_string.make_ident.call(null,props);
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

var x11689_11701 = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype;
x11689_11701.componentWillUpdate = ((function (x11689_11701){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7334__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7334__auto__);
});})(x11689_11701))
;

x11689_11701.shouldComponentUpdate = ((function (x11689_11701){
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
});})(x11689_11701))
;

x11689_11701.componentWillUnmount = ((function (x11689_11701){
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
});})(x11689_11701))
;

x11689_11701.componentDidUpdate = ((function (x11689_11701){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7334__auto__);
});})(x11689_11701))
;

x11689_11701.isMounted = ((function (x11689_11701){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x11689_11701))
;

x11689_11701.componentWillMount = ((function (x11689_11701){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7339__auto__,this__7334__auto__);
}
});})(x11689_11701))
;

x11689_11701.edited_text = ((function (x11689_11701){
return (function (text){
var this$ = this;
var map__11690 = om.next.get_computed.call(null,this$);
var map__11690__$1 = ((((!((map__11690 == null)))?((((map__11690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11690):map__11690);
var string_id = cljs.core.get.call(null,map__11690__$1,new cljs.core.Keyword(null,"string-id","string-id",280427428));
var locale_id = cljs.core.get.call(null,map__11690__$1,new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894));
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("localised-string","set","localised-string/set",1675182943,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("string","ident","string/ident",-106951611)),cljs.core._conj.call(null,cljs.core.List.EMPTY,string_id),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("locale","id","locale/id",-337593382)),cljs.core._conj.call(null,cljs.core.List.EMPTY,locale_id),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"text","text",-1790561697)),cljs.core._conj.call(null,cljs.core.List.EMPTY,text)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_ident.call(null,this$)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613)))))));
});})(x11689_11701))
;

x11689_11701.render = ((function (x11689_11701){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_11692 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_11693 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_11694 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_11695 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_11696 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props.call(null,this$);
var value = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.Keyword(null,"localised-value","localised-value",15124024)], null));
var map__11697 = om.next.get_computed.call(null,this$);
var map__11697__$1 = ((((!((map__11697 == null)))?((((map__11697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11697):map__11697);
var tag = cljs.core.get.call(null,map__11697__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var string_id = cljs.core.get.call(null,map__11697__$1,new cljs.core.Keyword(null,"string-id","string-id",280427428));
var value__$1 = (function (){var or__6142__auto__ = value;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return [cljs.core.str(string_id)].join('');
}
})();
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,props),"EditableLocalisedString: render: props "))));
} else {
}

return om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),value__$1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"callback","callback",-705136228),((function (props,value,map__11697,map__11697__$1,tag,string_id,value__$1,_STAR_reconciler_STAR_11692,_STAR_depth_STAR_11693,_STAR_shared_STAR_11694,_STAR_instrument_STAR_11695,_STAR_parent_STAR_11696,this$,this__7333__auto__,x11689_11701){
return (function (p1__11684_SHARP_){
return this$.edited_text(p1__11684_SHARP_);
});})(props,value,map__11697,map__11697__$1,tag,string_id,value__$1,_STAR_reconciler_STAR_11692,_STAR_depth_STAR_11693,_STAR_shared_STAR_11694,_STAR_instrument_STAR_11695,_STAR_parent_STAR_11696,this$,this__7333__auto__,x11689_11701))
,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_11696;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11695;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_11694;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_11693;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_11692;
}});})(x11689_11701))
;


om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype.constructor = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString;

om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype.om$isComponent = true;

var x11699_11702 = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString;
x11699_11702.om$next$Ident$ = true;

x11699_11702.om$next$Ident$ident$arity$2 = ((function (x11699_11702){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","string","localised/string",-241276934),om_next_datascript_localisation_demo.components.locale.localised_string.make_ident.call(null,this$__$1)], null);
});})(x11699_11702))
;

x11699_11702.om$next$IQuery$ = true;

x11699_11702.om$next$IQuery$query$arity$1 = ((function (x11699_11702){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("localised","string","localised/string",-241276934)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ident","ident",-742346)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_ident.call(null,this$__$1)))))))))))))));
});})(x11699_11702))
;


var x11700_11703 = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype;
x11700_11703.om$next$Ident$ = true;

x11700_11703.om$next$Ident$ident$arity$2 = ((function (x11700_11703){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","string","localised/string",-241276934),om_next_datascript_localisation_demo.components.locale.localised_string.make_ident.call(null,this$__$1)], null);
});})(x11700_11703))
;

x11700_11703.om$next$IQuery$ = true;

x11700_11703.om$next$IQuery$query$arity$1 = ((function (x11700_11703){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("localised","string","localised/string",-241276934)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ident","ident",-742346)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_ident.call(null,this$__$1)))))))))))))));
});})(x11700_11703))
;


om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.localised-string/EditableLocalisedString";

om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write.call(null,writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.localised-string/EditableLocalisedString");
});
om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
return [cljs.core.str("editable"),cljs.core.str(om_next_datascript_localisation_demo.components.locale.localised_string.make_ident.call(null,props))].join('');
})], null));

//# sourceMappingURL=localised_string.js.map?rel=1452424846194