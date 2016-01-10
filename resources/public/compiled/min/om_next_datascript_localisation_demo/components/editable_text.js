// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.components.editable_text');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('clojure.string');
om_next_datascript_localisation_demo.components.editable_text.ESCAPE_KEY = (27);
om_next_datascript_localisation_demo.components.editable_text.ENTER_KEY = (13);
om_next_datascript_localisation_demo.components.editable_text.blur = (function om_next_datascript_localisation_demo$components$editable_text$blur(this$,cb,e){
om.next.set_state_BANG_(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$editing,false], null));

var G__17510 = clojure.string.trim(e.target.value);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__17510) : cb.call(null,G__17510));
});
om_next_datascript_localisation_demo.components.editable_text.change = (function om_next_datascript_localisation_demo$components$editable_text$change(this$,e){
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$edit_DASH_text,e.target.value);
});
om_next_datascript_localisation_demo.components.editable_text.edit = (function om_next_datascript_localisation_demo$components$editable_text$edit(this$,text,e){
return om.next.set_state_BANG_(this$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$editing,true,cljs.core.cst$kw$edit_DASH_text,text], null));
});
om_next_datascript_localisation_demo.components.editable_text.key_down = (function om_next_datascript_localisation_demo$components$editable_text$key_down(this$,cb,e){
var pred__17514 = cljs.core._EQ__EQ_;
var expr__17515 = e.keyCode;
if(cljs.core.truth_((pred__17514.cljs$core$IFn$_invoke$arity$2 ? pred__17514.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.editable_text.ESCAPE_KEY,expr__17515) : pred__17514.call(null,om_next_datascript_localisation_demo.components.editable_text.ESCAPE_KEY,expr__17515)))){
return om_next_datascript_localisation_demo.components.editable_text.blur(this$,cb,e);
} else {
if(cljs.core.truth_((pred__17514.cljs$core$IFn$_invoke$arity$2 ? pred__17514.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.editable_text.ENTER_KEY,expr__17515) : pred__17514.call(null,om_next_datascript_localisation_demo.components.editable_text.ENTER_KEY,expr__17515)))){
return om_next_datascript_localisation_demo.components.editable_text.blur(this$,cb,e);
} else {
return null;
}
}
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.editable_text.EditableText = (function om_next_datascript_localisation_demo$components$editable_text$EditableText(){
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.editable_text.EditableText.prototype = goog.object.clone(React.Component.prototype);

var x17526_17542 = om_next_datascript_localisation_demo.components.editable_text.EditableText.prototype;
x17526_17542.componentWillUpdate = ((function (x17526_17542){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_(this__7334__auto__);

return om.next.merge_pending_state_BANG_(this__7334__auto__);
});})(x17526_17542))
;

x17526_17542.shouldComponentUpdate = ((function (x17526_17542){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__7334__auto__),goog.object.get(next_props__7335__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__7334__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17529 = this__7334__auto__.state;
var G__17530 = "omcljs$state";
return goog.object.get(G__17529,G__17530);
})(),goog.object.get(next_state__7336__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x17526_17542))
;

x17526_17542.componentWillUnmount = ((function (x17526_17542){
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
});})(x17526_17542))
;

x17526_17542.componentDidUpdate = ((function (x17526_17542){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_(this__7334__auto__);
});})(x17526_17542))
;

x17526_17542.isMounted = ((function (x17526_17542){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x17526_17542))
;

x17526_17542.componentWillMount = ((function (x17526_17542){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x17526_17542))
;

x17526_17542.initLocalState = ((function (x17526_17542){
return (function (){
var this$ = this;
var ret__7316__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$editing,false,cljs.core.cst$kw$edit_DASH_text,null], null);
var obj17532 = {"omcljs$state":ret__7316__auto__};
return obj17532;
});})(x17526_17542))
;

x17526_17542.render = ((function (x17526_17542){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_17533 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_17534 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_17535 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_17536 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_17537 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(props);
var editing = om.next.get_state.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$editing);
var edit_text = om.next.get_state.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$edit_DASH_text);
var map__17538 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__17538__$1 = ((((!((map__17538 == null)))?((((map__17538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17538):map__17538);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17538__$1,cljs.core.cst$kw$callback);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17538__$1,cljs.core.cst$kw$tag);
var tag__$1 = (function (){var or__6142__auto__ = tag;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.cst$kw$span;
}
})();
if(cljs.core.not(editing)){
return sablono.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"editable-text",cljs.core.cst$kw$tab_DASH_index,(1),cljs.core.cst$kw$on_DASH_click,((function (props,text,editing,edit_text,map__17538,map__17538__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_17533,_STAR_depth_STAR_17534,_STAR_shared_STAR_17535,_STAR_instrument_STAR_17536,_STAR_parent_STAR_17537,this$,this__7333__auto__,x17526_17542){
return (function (p1__17517_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.edit(this$,text,p1__17517_SHARP_);
});})(props,text,editing,edit_text,map__17538,map__17538__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_17533,_STAR_depth_STAR_17534,_STAR_shared_STAR_17535,_STAR_instrument_STAR_17536,_STAR_parent_STAR_17537,this$,this__7333__auto__,x17526_17542))
,cljs.core.cst$kw$on_DASH_focus,((function (props,text,editing,edit_text,map__17538,map__17538__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_17533,_STAR_depth_STAR_17534,_STAR_shared_STAR_17535,_STAR_instrument_STAR_17536,_STAR_parent_STAR_17537,this$,this__7333__auto__,x17526_17542){
return (function (p1__17518_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.edit(this$,text,p1__17518_SHARP_);
});})(props,text,editing,edit_text,map__17538,map__17538__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_17533,_STAR_depth_STAR_17534,_STAR_shared_STAR_17535,_STAR_instrument_STAR_17536,_STAR_parent_STAR_17537,this$,this__7333__auto__,x17526_17542))
], null),text], null));
} else {
return sablono.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"editable-text"], null),sablono.interpreter.create_element("input",{"tabIndex": (1), "ref": ((function (props,text,editing,edit_text,map__17538,map__17538__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_17533,_STAR_depth_STAR_17534,_STAR_shared_STAR_17535,_STAR_instrument_STAR_17536,_STAR_parent_STAR_17537,this$,this__7333__auto__,x17526_17542){
return (function (i){
if(cljs.core.truth_(i)){
return om.dom.node.cljs$core$IFn$_invoke$arity$1(i).focus();
} else {
return null;
}
});})(props,text,editing,edit_text,map__17538,map__17538__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_17533,_STAR_depth_STAR_17534,_STAR_shared_STAR_17535,_STAR_instrument_STAR_17536,_STAR_parent_STAR_17537,this$,this__7333__auto__,x17526_17542))
, "onBlur": ((function (props,text,editing,edit_text,map__17538,map__17538__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_17533,_STAR_depth_STAR_17534,_STAR_shared_STAR_17535,_STAR_instrument_STAR_17536,_STAR_parent_STAR_17537,this$,this__7333__auto__,x17526_17542){
return (function (p1__17519_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.blur(this$,callback,p1__17519_SHARP_);
});})(props,text,editing,edit_text,map__17538,map__17538__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_17533,_STAR_depth_STAR_17534,_STAR_shared_STAR_17535,_STAR_instrument_STAR_17536,_STAR_parent_STAR_17537,this$,this__7333__auto__,x17526_17542))
, "onChange": ((function (props,text,editing,edit_text,map__17538,map__17538__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_17533,_STAR_depth_STAR_17534,_STAR_shared_STAR_17535,_STAR_instrument_STAR_17536,_STAR_parent_STAR_17537,this$,this__7333__auto__,x17526_17542){
return (function (p1__17520_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.change(this$,p1__17520_SHARP_);
});})(props,text,editing,edit_text,map__17538,map__17538__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_17533,_STAR_depth_STAR_17534,_STAR_shared_STAR_17535,_STAR_instrument_STAR_17536,_STAR_parent_STAR_17537,this$,this__7333__auto__,x17526_17542))
, "onKeyDown": ((function (props,text,editing,edit_text,map__17538,map__17538__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_17533,_STAR_depth_STAR_17534,_STAR_shared_STAR_17535,_STAR_instrument_STAR_17536,_STAR_parent_STAR_17537,this$,this__7333__auto__,x17526_17542){
return (function (p1__17521_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.key_down(this$,callback,p1__17521_SHARP_);
});})(props,text,editing,edit_text,map__17538,map__17538__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_17533,_STAR_depth_STAR_17534,_STAR_shared_STAR_17535,_STAR_instrument_STAR_17536,_STAR_parent_STAR_17537,this$,this__7333__auto__,x17526_17542))
, "value": edit_text})], null));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_17537;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_17536;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_17535;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_17534;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_17533;
}});})(x17526_17542))
;


om_next_datascript_localisation_demo.components.editable_text.EditableText.prototype.constructor = om_next_datascript_localisation_demo.components.editable_text.EditableText;

om_next_datascript_localisation_demo.components.editable_text.EditableText.prototype.om$isComponent = true;

var x17540_17543 = om_next_datascript_localisation_demo.components.editable_text.EditableText;


var x17541_17544 = om_next_datascript_localisation_demo.components.editable_text.EditableText.prototype;


om_next_datascript_localisation_demo.components.editable_text.EditableText.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.editable_text.EditableText.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.editable-text/EditableText";

om_next_datascript_localisation_demo.components.editable_text.EditableText.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write(writer__7397__auto__,"om-next-datascript-localisation-demo.components.editable-text/EditableText");
});
om_next_datascript_localisation_demo.components.editable_text.editable_text = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.components.editable_text.EditableText);
