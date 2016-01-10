// Compiled by ClojureScript 1.7.228 {}
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
om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),false], null));

return cb.call(null,clojure.string.trim.call(null,e.target.value));
});
om_next_datascript_localisation_demo.components.editable_text.change = (function om_next_datascript_localisation_demo$components$editable_text$change(this$,e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"edit-text","edit-text",-616821813),e.target.value);
});
om_next_datascript_localisation_demo.components.editable_text.edit = (function om_next_datascript_localisation_demo$components$editable_text$edit(this$,text,e){
return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editing","editing",1365491601),true,new cljs.core.Keyword(null,"edit-text","edit-text",-616821813),text], null));
});
om_next_datascript_localisation_demo.components.editable_text.key_down = (function om_next_datascript_localisation_demo$components$editable_text$key_down(this$,cb,e){
var pred__8791 = cljs.core._EQ__EQ_;
var expr__8792 = e.keyCode;
if(cljs.core.truth_(pred__8791.call(null,om_next_datascript_localisation_demo.components.editable_text.ESCAPE_KEY,expr__8792))){
return om_next_datascript_localisation_demo.components.editable_text.blur.call(null,this$,cb,e);
} else {
if(cljs.core.truth_(pred__8791.call(null,om_next_datascript_localisation_demo.components.editable_text.ENTER_KEY,expr__8792))){
return om_next_datascript_localisation_demo.components.editable_text.blur.call(null,this$,cb,e);
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

var x8803_8815 = om_next_datascript_localisation_demo.components.editable_text.EditableText.prototype;
x8803_8815.componentWillUpdate = ((function (x8803_8815){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7334__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7334__auto__);
});})(x8803_8815))
;

x8803_8815.shouldComponentUpdate = ((function (x8803_8815){
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
});})(x8803_8815))
;

x8803_8815.componentWillUnmount = ((function (x8803_8815){
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
});})(x8803_8815))
;

x8803_8815.componentDidUpdate = ((function (x8803_8815){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7334__auto__);
});})(x8803_8815))
;

x8803_8815.isMounted = ((function (x8803_8815){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8803_8815))
;

x8803_8815.componentWillMount = ((function (x8803_8815){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7339__auto__,this__7334__auto__);
}
});})(x8803_8815))
;

x8803_8815.initLocalState = ((function (x8803_8815){
return (function (){
var this$ = this;
var ret__7316__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editing","editing",1365491601),false,new cljs.core.Keyword(null,"edit-text","edit-text",-616821813),null], null);
var obj8805 = {"omcljs$state":ret__7316__auto__};
return obj8805;
});})(x8803_8815))
;

x8803_8815.render = ((function (x8803_8815){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_8806 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8807 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8808 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8809 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8810 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props.call(null,this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(props);
var editing = om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"editing","editing",1365491601));
var edit_text = om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"edit-text","edit-text",-616821813));
var map__8811 = om.next.get_computed.call(null,this$);
var map__8811__$1 = ((((!((map__8811 == null)))?((((map__8811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8811):map__8811);
var callback = cljs.core.get.call(null,map__8811__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var tag = cljs.core.get.call(null,map__8811__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var tag__$1 = (function (){var or__6142__auto__ = tag;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return new cljs.core.Keyword(null,"span","span",1394872991);
}
})();
if(cljs.core.not.call(null,editing)){
return sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"editable-text",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (props,text,editing,edit_text,map__8811,map__8811__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_8806,_STAR_depth_STAR_8807,_STAR_shared_STAR_8808,_STAR_instrument_STAR_8809,_STAR_parent_STAR_8810,this$,this__7333__auto__,x8803_8815){
return (function (p1__8794_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.edit.call(null,this$,text,p1__8794_SHARP_);
});})(props,text,editing,edit_text,map__8811,map__8811__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_8806,_STAR_depth_STAR_8807,_STAR_shared_STAR_8808,_STAR_instrument_STAR_8809,_STAR_parent_STAR_8810,this$,this__7333__auto__,x8803_8815))
,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (props,text,editing,edit_text,map__8811,map__8811__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_8806,_STAR_depth_STAR_8807,_STAR_shared_STAR_8808,_STAR_instrument_STAR_8809,_STAR_parent_STAR_8810,this$,this__7333__auto__,x8803_8815){
return (function (p1__8795_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.edit.call(null,this$,text,p1__8795_SHARP_);
});})(props,text,editing,edit_text,map__8811,map__8811__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_8806,_STAR_depth_STAR_8807,_STAR_shared_STAR_8808,_STAR_instrument_STAR_8809,_STAR_parent_STAR_8810,this$,this__7333__auto__,x8803_8815))
], null),text], null));
} else {
return sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"editable-text"], null),sablono.interpreter.create_element.call(null,"input",{"tabIndex": (1), "ref": ((function (props,text,editing,edit_text,map__8811,map__8811__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_8806,_STAR_depth_STAR_8807,_STAR_shared_STAR_8808,_STAR_instrument_STAR_8809,_STAR_parent_STAR_8810,this$,this__7333__auto__,x8803_8815){
return (function (i){
if(cljs.core.truth_(i)){
return om.dom.node.call(null,i).focus();
} else {
return null;
}
});})(props,text,editing,edit_text,map__8811,map__8811__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_8806,_STAR_depth_STAR_8807,_STAR_shared_STAR_8808,_STAR_instrument_STAR_8809,_STAR_parent_STAR_8810,this$,this__7333__auto__,x8803_8815))
, "onBlur": ((function (props,text,editing,edit_text,map__8811,map__8811__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_8806,_STAR_depth_STAR_8807,_STAR_shared_STAR_8808,_STAR_instrument_STAR_8809,_STAR_parent_STAR_8810,this$,this__7333__auto__,x8803_8815){
return (function (p1__8796_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.blur.call(null,this$,callback,p1__8796_SHARP_);
});})(props,text,editing,edit_text,map__8811,map__8811__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_8806,_STAR_depth_STAR_8807,_STAR_shared_STAR_8808,_STAR_instrument_STAR_8809,_STAR_parent_STAR_8810,this$,this__7333__auto__,x8803_8815))
, "onChange": ((function (props,text,editing,edit_text,map__8811,map__8811__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_8806,_STAR_depth_STAR_8807,_STAR_shared_STAR_8808,_STAR_instrument_STAR_8809,_STAR_parent_STAR_8810,this$,this__7333__auto__,x8803_8815){
return (function (p1__8797_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.change.call(null,this$,p1__8797_SHARP_);
});})(props,text,editing,edit_text,map__8811,map__8811__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_8806,_STAR_depth_STAR_8807,_STAR_shared_STAR_8808,_STAR_instrument_STAR_8809,_STAR_parent_STAR_8810,this$,this__7333__auto__,x8803_8815))
, "onKeyDown": ((function (props,text,editing,edit_text,map__8811,map__8811__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_8806,_STAR_depth_STAR_8807,_STAR_shared_STAR_8808,_STAR_instrument_STAR_8809,_STAR_parent_STAR_8810,this$,this__7333__auto__,x8803_8815){
return (function (p1__8798_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.key_down.call(null,this$,callback,p1__8798_SHARP_);
});})(props,text,editing,edit_text,map__8811,map__8811__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_8806,_STAR_depth_STAR_8807,_STAR_shared_STAR_8808,_STAR_instrument_STAR_8809,_STAR_parent_STAR_8810,this$,this__7333__auto__,x8803_8815))
, "value": edit_text})], null));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8810;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8809;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8808;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8807;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8806;
}});})(x8803_8815))
;


om_next_datascript_localisation_demo.components.editable_text.EditableText.prototype.constructor = om_next_datascript_localisation_demo.components.editable_text.EditableText;

om_next_datascript_localisation_demo.components.editable_text.EditableText.prototype.om$isComponent = true;

var x8813_8816 = om_next_datascript_localisation_demo.components.editable_text.EditableText;


var x8814_8817 = om_next_datascript_localisation_demo.components.editable_text.EditableText.prototype;


om_next_datascript_localisation_demo.components.editable_text.EditableText.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.editable_text.EditableText.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.editable-text/EditableText";

om_next_datascript_localisation_demo.components.editable_text.EditableText.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write.call(null,writer__7397__auto__,"om-next-datascript-localisation-demo.components.editable-text/EditableText");
});
om_next_datascript_localisation_demo.components.editable_text.editable_text = om.next.factory.call(null,om_next_datascript_localisation_demo.components.editable_text.EditableText);

//# sourceMappingURL=editable_text.js.map?rel=1452424837713