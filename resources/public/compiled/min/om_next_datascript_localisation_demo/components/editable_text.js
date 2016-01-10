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

var G__25884 = clojure.string.trim(e.target.value);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__25884) : cb.call(null,G__25884));
});
om_next_datascript_localisation_demo.components.editable_text.change = (function om_next_datascript_localisation_demo$components$editable_text$change(this$,e){
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$edit_DASH_text,e.target.value);
});
om_next_datascript_localisation_demo.components.editable_text.edit = (function om_next_datascript_localisation_demo$components$editable_text$edit(this$,text,e){
return om.next.set_state_BANG_(this$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$editing,true,cljs.core.cst$kw$edit_DASH_text,text], null));
});
om_next_datascript_localisation_demo.components.editable_text.key_down = (function om_next_datascript_localisation_demo$components$editable_text$key_down(this$,cb,e){
var pred__25888 = cljs.core._EQ__EQ_;
var expr__25889 = e.keyCode;
if(cljs.core.truth_((pred__25888.cljs$core$IFn$_invoke$arity$2 ? pred__25888.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.editable_text.ESCAPE_KEY,expr__25889) : pred__25888.call(null,om_next_datascript_localisation_demo.components.editable_text.ESCAPE_KEY,expr__25889)))){
return om_next_datascript_localisation_demo.components.editable_text.blur(this$,cb,e);
} else {
if(cljs.core.truth_((pred__25888.cljs$core$IFn$_invoke$arity$2 ? pred__25888.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.editable_text.ENTER_KEY,expr__25889) : pred__25888.call(null,om_next_datascript_localisation_demo.components.editable_text.ENTER_KEY,expr__25889)))){
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
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.editable_text.EditableText.prototype = goog.object.clone(React.Component.prototype);

var x25900_25916 = om_next_datascript_localisation_demo.components.editable_text.EditableText.prototype;
x25900_25916.componentWillUpdate = ((function (x25900_25916){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_(this__9236__auto__);

return om.next.merge_pending_state_BANG_(this__9236__auto__);
});})(x25900_25916))
;

x25900_25916.shouldComponentUpdate = ((function (x25900_25916){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__25903 = this__9236__auto__.state;
var G__25904 = "omcljs$state";
return goog.object.get(G__25903,G__25904);
})(),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x25900_25916))
;

x25900_25916.componentWillUnmount = ((function (x25900_25916){
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
});})(x25900_25916))
;

x25900_25916.componentDidUpdate = ((function (x25900_25916){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_(this__9236__auto__);
});})(x25900_25916))
;

x25900_25916.isMounted = ((function (x25900_25916){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x25900_25916))
;

x25900_25916.componentWillMount = ((function (x25900_25916){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x25900_25916))
;

x25900_25916.initLocalState = ((function (x25900_25916){
return (function (){
var this$ = this;
var ret__9218__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$editing,false,cljs.core.cst$kw$edit_DASH_text,null], null);
var obj25906 = {"omcljs$state":ret__9218__auto__};
return obj25906;
});})(x25900_25916))
;

x25900_25916.render = ((function (x25900_25916){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_25907 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_25908 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_25909 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_25910 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_25911 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(props);
var editing = om.next.get_state.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$editing);
var edit_text = om.next.get_state.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$edit_DASH_text);
var map__25912 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__25912__$1 = ((((!((map__25912 == null)))?((((map__25912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25912):map__25912);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25912__$1,cljs.core.cst$kw$callback);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25912__$1,cljs.core.cst$kw$tag);
var tag__$1 = (function (){var or__6142__auto__ = tag;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.cst$kw$span;
}
})();
if(cljs.core.not(editing)){
return sablono.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"editable-text",cljs.core.cst$kw$tab_DASH_index,(1),cljs.core.cst$kw$on_DASH_click,((function (props,text,editing,edit_text,map__25912,map__25912__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_25907,_STAR_depth_STAR_25908,_STAR_shared_STAR_25909,_STAR_instrument_STAR_25910,_STAR_parent_STAR_25911,this$,this__9235__auto__,x25900_25916){
return (function (p1__25891_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.edit(this$,text,p1__25891_SHARP_);
});})(props,text,editing,edit_text,map__25912,map__25912__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_25907,_STAR_depth_STAR_25908,_STAR_shared_STAR_25909,_STAR_instrument_STAR_25910,_STAR_parent_STAR_25911,this$,this__9235__auto__,x25900_25916))
,cljs.core.cst$kw$on_DASH_focus,((function (props,text,editing,edit_text,map__25912,map__25912__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_25907,_STAR_depth_STAR_25908,_STAR_shared_STAR_25909,_STAR_instrument_STAR_25910,_STAR_parent_STAR_25911,this$,this__9235__auto__,x25900_25916){
return (function (p1__25892_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.edit(this$,text,p1__25892_SHARP_);
});})(props,text,editing,edit_text,map__25912,map__25912__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_25907,_STAR_depth_STAR_25908,_STAR_shared_STAR_25909,_STAR_instrument_STAR_25910,_STAR_parent_STAR_25911,this$,this__9235__auto__,x25900_25916))
], null),text], null));
} else {
return sablono.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"editable-text"], null),sablono.interpreter.create_element("input",{"tabIndex": (1), "ref": ((function (props,text,editing,edit_text,map__25912,map__25912__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_25907,_STAR_depth_STAR_25908,_STAR_shared_STAR_25909,_STAR_instrument_STAR_25910,_STAR_parent_STAR_25911,this$,this__9235__auto__,x25900_25916){
return (function (i){
if(cljs.core.truth_(i)){
return om.dom.node.cljs$core$IFn$_invoke$arity$1(i).focus();
} else {
return null;
}
});})(props,text,editing,edit_text,map__25912,map__25912__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_25907,_STAR_depth_STAR_25908,_STAR_shared_STAR_25909,_STAR_instrument_STAR_25910,_STAR_parent_STAR_25911,this$,this__9235__auto__,x25900_25916))
, "onBlur": ((function (props,text,editing,edit_text,map__25912,map__25912__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_25907,_STAR_depth_STAR_25908,_STAR_shared_STAR_25909,_STAR_instrument_STAR_25910,_STAR_parent_STAR_25911,this$,this__9235__auto__,x25900_25916){
return (function (p1__25893_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.blur(this$,callback,p1__25893_SHARP_);
});})(props,text,editing,edit_text,map__25912,map__25912__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_25907,_STAR_depth_STAR_25908,_STAR_shared_STAR_25909,_STAR_instrument_STAR_25910,_STAR_parent_STAR_25911,this$,this__9235__auto__,x25900_25916))
, "onChange": ((function (props,text,editing,edit_text,map__25912,map__25912__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_25907,_STAR_depth_STAR_25908,_STAR_shared_STAR_25909,_STAR_instrument_STAR_25910,_STAR_parent_STAR_25911,this$,this__9235__auto__,x25900_25916){
return (function (p1__25894_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.change(this$,p1__25894_SHARP_);
});})(props,text,editing,edit_text,map__25912,map__25912__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_25907,_STAR_depth_STAR_25908,_STAR_shared_STAR_25909,_STAR_instrument_STAR_25910,_STAR_parent_STAR_25911,this$,this__9235__auto__,x25900_25916))
, "onKeyDown": ((function (props,text,editing,edit_text,map__25912,map__25912__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_25907,_STAR_depth_STAR_25908,_STAR_shared_STAR_25909,_STAR_instrument_STAR_25910,_STAR_parent_STAR_25911,this$,this__9235__auto__,x25900_25916){
return (function (p1__25895_SHARP_){
return om_next_datascript_localisation_demo.components.editable_text.key_down(this$,callback,p1__25895_SHARP_);
});})(props,text,editing,edit_text,map__25912,map__25912__$1,callback,tag,tag__$1,_STAR_reconciler_STAR_25907,_STAR_depth_STAR_25908,_STAR_shared_STAR_25909,_STAR_instrument_STAR_25910,_STAR_parent_STAR_25911,this$,this__9235__auto__,x25900_25916))
, "value": edit_text})], null));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_25911;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_25910;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25909;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_25908;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25907;
}});})(x25900_25916))
;


om_next_datascript_localisation_demo.components.editable_text.EditableText.prototype.constructor = om_next_datascript_localisation_demo.components.editable_text.EditableText;

om_next_datascript_localisation_demo.components.editable_text.EditableText.prototype.om$isComponent = true;

var x25914_25917 = om_next_datascript_localisation_demo.components.editable_text.EditableText;


var x25915_25918 = om_next_datascript_localisation_demo.components.editable_text.EditableText.prototype;


om_next_datascript_localisation_demo.components.editable_text.EditableText.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.editable_text.EditableText.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.editable-text/EditableText";

om_next_datascript_localisation_demo.components.editable_text.EditableText.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write(writer__9299__auto__,"om-next-datascript-localisation-demo.components.editable-text/EditableText");
});
om_next_datascript_localisation_demo.components.editable_text.editable_text = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.components.editable_text.EditableText);
