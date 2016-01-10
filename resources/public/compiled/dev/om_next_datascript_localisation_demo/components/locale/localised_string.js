// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_datascript_localisation_demo.components.locale.localised_string');
goog.require('cljs.core');
goog.require('om.next');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('om_next_datascript_localisation_demo.utils.ident');
goog.require('om_next_datascript_localisation_demo.components.editable_text');
om_next_datascript_localisation_demo.components.locale.localised_string.make_ident = (function om_next_datascript_localisation_demo$components$locale$localised_string$make_ident(this$){
var map__15539 = om.next.get_computed.call(null,this$);
var map__15539__$1 = ((((!((map__15539 == null)))?((((map__15539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15539):map__15539);
var string_id = cljs.core.get.call(null,map__15539__$1,new cljs.core.Keyword(null,"string-id","string-id",280427428));
var locale_id = cljs.core.get.call(null,map__15539__$1,new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894));
return om_next_datascript_localisation_demo.utils.ident.string_id_and_locale__GT_ident.call(null,string_id,locale_id);
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

var x15545_15555 = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype;
x15545_15555.componentWillUpdate = ((function (x15545_15555){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__9236__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__9236__auto__);
});})(x15545_15555))
;

x15545_15555.shouldComponentUpdate = ((function (x15545_15555){
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
});})(x15545_15555))
;

x15545_15555.componentWillUnmount = ((function (x15545_15555){
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
});})(x15545_15555))
;

x15545_15555.componentDidUpdate = ((function (x15545_15555){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__9236__auto__);
});})(x15545_15555))
;

x15545_15555.isMounted = ((function (x15545_15555){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x15545_15555))
;

x15545_15555.componentWillMount = ((function (x15545_15555){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__9241__auto__,this__9236__auto__);
}
});})(x15545_15555))
;

x15545_15555.render = ((function (x15545_15555){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_15546 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_15547 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_15548 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_15549 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_15550 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props.call(null,this$);
var value = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.Keyword(null,"localised-value","localised-value",15124024)], null));
var map__15551 = om.next.get_computed.call(null,this$);
var map__15551__$1 = ((((!((map__15551 == null)))?((((map__15551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15551):map__15551);
var render_fn = cljs.core.get.call(null,map__15551__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));
var string_id = cljs.core.get.call(null,map__15551__$1,new cljs.core.Keyword(null,"string-id","string-id",280427428));
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
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_15550;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_15549;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_15548;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_15547;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_15546;
}});})(x15545_15555))
;


om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype.constructor = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString;

om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype.om$isComponent = true;

var x15553_15556 = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString;
x15553_15556.om$next$Ident$ = true;

x15553_15556.om$next$Ident$ident$arity$2 = ((function (x15553_15556){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","string","localised/string",-241276934),om_next_datascript_localisation_demo.components.locale.localised_string.make_ident.call(null,this$__$1)], null);
});})(x15553_15556))
;

x15553_15556.om$next$IQuery$ = true;

x15553_15556.om$next$IQuery$query$arity$1 = ((function (x15553_15556){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("localised","string","localised/string",-241276934)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ident","ident",-742346)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_ident.call(null,this$__$1)))))))))))))));
});})(x15553_15556))
;


var x15554_15557 = om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.prototype;
x15554_15557.om$next$Ident$ = true;

x15554_15557.om$next$Ident$ident$arity$2 = ((function (x15554_15557){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","string","localised/string",-241276934),om_next_datascript_localisation_demo.components.locale.localised_string.make_ident.call(null,this$__$1)], null);
});})(x15554_15557))
;

x15554_15557.om$next$IQuery$ = true;

x15554_15557.om$next$IQuery$query$arity$1 = ((function (x15554_15557){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("localised","string","localised/string",-241276934)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ident","ident",-742346)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_ident.call(null,this$__$1)))))))))))))));
});})(x15554_15557))
;


om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.localised-string/LocalisedString";

om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write.call(null,writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.localised-string/LocalisedString");
});
om_next_datascript_localisation_demo.components.locale.localised_string.localised_string = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.localised_string.LocalisedString,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
return om_next_datascript_localisation_demo.components.locale.localised_string.make_ident.call(null,props);
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

var x15563_15575 = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype;
x15563_15575.componentWillUpdate = ((function (x15563_15575){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__9236__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__9236__auto__);
});})(x15563_15575))
;

x15563_15575.shouldComponentUpdate = ((function (x15563_15575){
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
});})(x15563_15575))
;

x15563_15575.componentWillUnmount = ((function (x15563_15575){
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
});})(x15563_15575))
;

x15563_15575.componentDidUpdate = ((function (x15563_15575){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__9236__auto__);
});})(x15563_15575))
;

x15563_15575.isMounted = ((function (x15563_15575){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x15563_15575))
;

x15563_15575.componentWillMount = ((function (x15563_15575){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__9241__auto__,this__9236__auto__);
}
});})(x15563_15575))
;

x15563_15575.edited_text = ((function (x15563_15575){
return (function (text){
var this$ = this;
var map__15564 = om.next.get_computed.call(null,this$);
var map__15564__$1 = ((((!((map__15564 == null)))?((((map__15564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15564):map__15564);
var string_id = cljs.core.get.call(null,map__15564__$1,new cljs.core.Keyword(null,"string-id","string-id",280427428));
var locale_id = cljs.core.get.call(null,map__15564__$1,new cljs.core.Keyword(null,"locale-id","locale-id",-2124590894));
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("localised-string","set","localised-string/set",1675182943,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("string","ident","string/ident",-106951611)),cljs.core._conj.call(null,cljs.core.List.EMPTY,string_id),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("locale","id","locale/id",-337593382)),cljs.core._conj.call(null,cljs.core.List.EMPTY,locale_id),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"text","text",-1790561697)),cljs.core._conj.call(null,cljs.core.List.EMPTY,text)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_ident.call(null,this$)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613)))))));
});})(x15563_15575))
;

x15563_15575.render = ((function (x15563_15575){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_15566 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_15567 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_15568 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_15569 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_15570 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props.call(null,this$);
var value = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","string","localised/string",-241276934),new cljs.core.Keyword(null,"localised-value","localised-value",15124024)], null));
var map__15571 = om.next.get_computed.call(null,this$);
var map__15571__$1 = ((((!((map__15571 == null)))?((((map__15571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15571):map__15571);
var tag = cljs.core.get.call(null,map__15571__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var string_id = cljs.core.get.call(null,map__15571__$1,new cljs.core.Keyword(null,"string-id","string-id",280427428));
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

return om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),value__$1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"callback","callback",-705136228),((function (props,value,map__15571,map__15571__$1,tag,string_id,value__$1,_STAR_reconciler_STAR_15566,_STAR_depth_STAR_15567,_STAR_shared_STAR_15568,_STAR_instrument_STAR_15569,_STAR_parent_STAR_15570,this$,this__9235__auto__,x15563_15575){
return (function (p1__15558_SHARP_){
return this$.edited_text(p1__15558_SHARP_);
});})(props,value,map__15571,map__15571__$1,tag,string_id,value__$1,_STAR_reconciler_STAR_15566,_STAR_depth_STAR_15567,_STAR_shared_STAR_15568,_STAR_instrument_STAR_15569,_STAR_parent_STAR_15570,this$,this__9235__auto__,x15563_15575))
,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_15570;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_15569;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_15568;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_15567;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_15566;
}});})(x15563_15575))
;


om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype.constructor = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString;

om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype.om$isComponent = true;

var x15573_15576 = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString;
x15573_15576.om$next$Ident$ = true;

x15573_15576.om$next$Ident$ident$arity$2 = ((function (x15573_15576){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","string","localised/string",-241276934),om_next_datascript_localisation_demo.components.locale.localised_string.make_ident.call(null,this$__$1)], null);
});})(x15573_15576))
;

x15573_15576.om$next$IQuery$ = true;

x15573_15576.om$next$IQuery$query$arity$1 = ((function (x15573_15576){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("localised","string","localised/string",-241276934)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ident","ident",-742346)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_ident.call(null,this$__$1)))))))))))))));
});})(x15573_15576))
;


var x15574_15577 = om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.prototype;
x15574_15577.om$next$Ident$ = true;

x15574_15577.om$next$Ident$ident$arity$2 = ((function (x15574_15577){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("localised","string","localised/string",-241276934),om_next_datascript_localisation_demo.components.locale.localised_string.make_ident.call(null,this$__$1)], null);
});})(x15574_15577))
;

x15574_15577.om$next$IQuery$ = true;

x15574_15577.om$next$IQuery$query$arity$1 = ((function (x15574_15577){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("localised","string","localised/string",-241276934)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ident","ident",-742346)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_ident.call(null,this$__$1)))))))))))))));
});})(x15574_15577))
;


om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.localised-string/EditableLocalisedString";

om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write.call(null,writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.localised-string/EditableLocalisedString");
});
om_next_datascript_localisation_demo.components.locale.localised_string.editable_localised_string = om.next.factory.call(null,om_next_datascript_localisation_demo.components.locale.localised_string.EditableLocalisedString,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
return [cljs.core.str("editable"),cljs.core.str(om_next_datascript_localisation_demo.components.locale.localised_string.make_ident.call(null,props))].join('');
})], null));

//# sourceMappingURL=localised_string.js.map?rel=1452427076666