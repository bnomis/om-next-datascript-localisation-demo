// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.components.locale.strings');
goog.require('cljs.core');
goog.require('om.next');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('om_next_datascript_localisation_demo.components.editable_text');
goog.require('om_next_datascript_localisation_demo.utils.keywords');
goog.require('om_next_datascript_localisation_demo.utils.checkboxes');
om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholder = (function om_next_datascript_localisation_demo$components$locale$strings$make_localised_placeholder(id){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$value,"None",cljs.core.cst$kw$placeholder,true], null);
});
om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholders = (function om_next_datascript_localisation_demo$components$locale$strings$make_localised_placeholders(order){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholder,order);
});
om_next_datascript_localisation_demo.components.locale.strings.find_localised = (function om_next_datascript_localisation_demo$components$locale$strings$find_localised(localised,id){
return cljs.core.some((function (l){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_locale,cljs.core.cst$kw$db_SLASH_id], null)))){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(l),cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null)),cljs.core.cst$kw$placeholder,false], null);
} else {
return null;
}
}),localised);
});
om_next_datascript_localisation_demo.components.locale.strings.get_localised = (function om_next_datascript_localisation_demo$components$locale$strings$get_localised(localised,id){
var ll = om_next_datascript_localisation_demo.components.locale.strings.find_localised(localised,id);
var or__6142__auto__ = ll;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholder(id);
}
});
om_next_datascript_localisation_demo.components.locale.strings.order_localised = (function om_next_datascript_localisation_demo$components$locale$strings$order_localised(localised,order){
if((cljs.core.empty_QMARK_(localised)) || (cljs.core.not(localised))){
return om_next_datascript_localisation_demo.components.locale.strings.make_localised_placeholders(order);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var o = cljs.core.first(order);
var order__$1 = cljs.core.rest(order);
while(true){
if(cljs.core.not(o)){
return out;
} else {
var G__18294 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,om_next_datascript_localisation_demo.components.locale.strings.get_localised(localised,o));
var G__18295 = cljs.core.first(order__$1);
var G__18296 = cljs.core.rest(order__$1);
out = G__18294;
o = G__18295;
order__$1 = G__18296;
continue;
}
break;
}
}
});
om_next_datascript_localisation_demo.components.locale.strings.localised = (function om_next_datascript_localisation_demo$components$locale$strings$localised(locale,edited_text){
var G__18308 = "td";
var G__18309 = {"key": cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(locale)};
var G__18310 = sablono.interpreter.interpret((function (){var G__18314 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(locale)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__18308,G__18309){
return (function (p1__18297_SHARP_){
var G__18315 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(locale);
var G__18316 = cljs.core.cst$kw$value;
var G__18317 = p1__18297_SHARP_;
return (edited_text.cljs$core$IFn$_invoke$arity$3 ? edited_text.cljs$core$IFn$_invoke$arity$3(G__18315,G__18316,G__18317) : edited_text.call(null,G__18315,G__18316,G__18317));
});})(G__18308,G__18309))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__18314) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__18314));
})());
return React.createElement(G__18308,G__18309,G__18310);
});
om_next_datascript_localisation_demo.components.locale.strings.localised_placeholder = (function om_next_datascript_localisation_demo$components$locale$strings$localised_placeholder(locale,localised_create){
var G__18327 = "td";
var G__18328 = {"key": cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(locale)};
var G__18329 = sablono.interpreter.interpret((function (){var G__18332 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(locale)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__18327,G__18328){
return (function (p1__18318_SHARP_){
var G__18333 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(locale);
var G__18334 = p1__18318_SHARP_;
return (localised_create.cljs$core$IFn$_invoke$arity$2 ? localised_create.cljs$core$IFn$_invoke$arity$2(G__18333,G__18334) : localised_create.call(null,G__18333,G__18334));
});})(G__18327,G__18328))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__18332) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__18332));
})());
return React.createElement(G__18327,G__18328,G__18329);
});
om_next_datascript_localisation_demo.components.locale.strings.localised_factory = (function om_next_datascript_localisation_demo$components$locale$strings$localised_factory(locale,edited_text,localised_create){
if(cljs.core.truth_(cljs.core.cst$kw$placeholder.cljs$core$IFn$_invoke$arity$1(locale))){
return om_next_datascript_localisation_demo.components.locale.strings.localised_placeholder(locale,localised_create);
} else {
return om_next_datascript_localisation_demo.components.locale.strings.localised(locale,edited_text);
}
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow = (function om_next_datascript_localisation_demo$components$locale$strings$LocalisedStringTableRow(){
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype = goog.object.clone(React.Component.prototype);

var x18342_18371 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype;
x18342_18371.componentWillUpdate = ((function (x18342_18371){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_(this__7334__auto__);

return om.next.merge_pending_state_BANG_(this__7334__auto__);
});})(x18342_18371))
;

x18342_18371.shouldComponentUpdate = ((function (x18342_18371){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__7334__auto__),goog.object.get(next_props__7335__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__7334__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__18345 = this__7334__auto__.state;
var G__18346 = "omcljs$state";
return goog.object.get(G__18345,G__18346);
})(),goog.object.get(next_state__7336__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x18342_18371))
;

x18342_18371.componentWillUnmount = ((function (x18342_18371){
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
});})(x18342_18371))
;

x18342_18371.componentDidUpdate = ((function (x18342_18371){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_(this__7334__auto__);
});})(x18342_18371))
;

x18342_18371.isMounted = ((function (x18342_18371){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18342_18371))
;

x18342_18371.componentWillMount = ((function (x18342_18371){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x18342_18371))
;

x18342_18371.render = ((function (x18342_18371){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_18347 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18348 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18349 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18350 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18351 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props(this$);
var localised_string = cljs.core.cst$kw$localised_DASH_string.cljs$core$IFn$_invoke$arity$1(props);
var map__18352 = localised_string;
var map__18352__$1 = ((((!((map__18352 == null)))?((((map__18352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18352):map__18352);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18352__$1,cljs.core.cst$kw$db_SLASH_id);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18352__$1,cljs.core.cst$kw$string_SLASH_ident);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18352__$1,cljs.core.cst$kw$value);
var localised = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18352__$1,cljs.core.cst$kw$localised);
var order = cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(props);
var checked = cljs.core.cst$kw$checked.cljs$core$IFn$_invoke$arity$1(props);
var css_class = cljs.core.cst$kw$css_DASH_class.cljs$core$IFn$_invoke$arity$1(props);
var localised__$1 = om_next_datascript_localisation_demo.components.locale.strings.order_localised(localised,order);
var map__18353 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__18353__$1 = ((((!((map__18353 == null)))?((((map__18353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18353):map__18353);
var toggle_checkbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18353__$1,cljs.core.cst$kw$toggle_DASH_checkbox);
var edited_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18353__$1,cljs.core.cst$kw$edited_DASH_text);
var edited_text_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18353__$1,cljs.core.cst$kw$edited_DASH_text_DASH_id);
var edited_keyword = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18353__$1,cljs.core.cst$kw$edited_DASH_keyword);
var localised_create = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18353__$1,cljs.core.cst$kw$localised_DASH_create);
var G__18358 = "tr";
var G__18359 = {"className": sablono.util.join_classes(cljs.core.PersistentHashSet.fromArray([css_class], true))};
var G__18360 = (function (){var G__18364 = "td";
var G__18365 = {"className": "center-column"};
var G__18366 = sablono.interpreter.create_element("input",{"type": "checkbox", "value": id, "checked": checked, "onChange": ((function (G__18364,G__18365,G__18358,G__18359,props,localised_string,map__18352,map__18352__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__18353,map__18353__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_18347,_STAR_depth_STAR_18348,_STAR_shared_STAR_18349,_STAR_instrument_STAR_18350,_STAR_parent_STAR_18351,this$,this__7333__auto__,x18342_18371){
return (function (e){
return (toggle_checkbox.cljs$core$IFn$_invoke$arity$0 ? toggle_checkbox.cljs$core$IFn$_invoke$arity$0() : toggle_checkbox.call(null));
});})(G__18364,G__18365,G__18358,G__18359,props,localised_string,map__18352,map__18352__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__18353,map__18353__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_18347,_STAR_depth_STAR_18348,_STAR_shared_STAR_18349,_STAR_instrument_STAR_18350,_STAR_parent_STAR_18351,this$,this__7333__auto__,x18342_18371))
});
return React.createElement(G__18364,G__18365,G__18366);
})();
var G__18361 = (function (){var attrs18356 = (function (){var G__18367 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,[cljs.core.str(ident)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__18358,G__18359,G__18360,props,localised_string,map__18352,map__18352__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__18353,map__18353__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_18347,_STAR_depth_STAR_18348,_STAR_shared_STAR_18349,_STAR_instrument_STAR_18350,_STAR_parent_STAR_18351,this$,this__7333__auto__,x18342_18371){
return (function (p1__18335_SHARP_){
return (edited_keyword.cljs$core$IFn$_invoke$arity$2 ? edited_keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$string_SLASH_ident,p1__18335_SHARP_) : edited_keyword.call(null,cljs.core.cst$kw$string_SLASH_ident,p1__18335_SHARP_));
});})(G__18358,G__18359,G__18360,props,localised_string,map__18352,map__18352__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__18353,map__18353__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_18347,_STAR_depth_STAR_18348,_STAR_shared_STAR_18349,_STAR_instrument_STAR_18350,_STAR_parent_STAR_18351,this$,this__7333__auto__,x18342_18371))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__18367) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__18367));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs18356))?sablono.interpreter.attributes(attrs18356):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18356))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18356)], null))));
})();
var G__18362 = (function (){var attrs18357 = (function (){var G__18368 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,value], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__18358,G__18359,G__18360,G__18361,props,localised_string,map__18352,map__18352__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__18353,map__18353__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_18347,_STAR_depth_STAR_18348,_STAR_shared_STAR_18349,_STAR_instrument_STAR_18350,_STAR_parent_STAR_18351,this$,this__7333__auto__,x18342_18371){
return (function (p1__18336_SHARP_){
return (edited_text.cljs$core$IFn$_invoke$arity$2 ? edited_text.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,p1__18336_SHARP_) : edited_text.call(null,cljs.core.cst$kw$value,p1__18336_SHARP_));
});})(G__18358,G__18359,G__18360,G__18361,props,localised_string,map__18352,map__18352__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__18353,map__18353__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_18347,_STAR_depth_STAR_18348,_STAR_shared_STAR_18349,_STAR_instrument_STAR_18350,_STAR_parent_STAR_18351,this$,this__7333__auto__,x18342_18371))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__18368) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__18368));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs18357))?sablono.interpreter.attributes(attrs18357):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18357))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18357)], null))));
})();
var G__18363 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__18358,G__18359,G__18360,G__18361,G__18362,props,localised_string,map__18352,map__18352__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__18353,map__18353__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_18347,_STAR_depth_STAR_18348,_STAR_shared_STAR_18349,_STAR_instrument_STAR_18350,_STAR_parent_STAR_18351,this$,this__7333__auto__,x18342_18371){
return (function (p1__18337_SHARP_){
return om_next_datascript_localisation_demo.components.locale.strings.localised_factory(p1__18337_SHARP_,edited_text_id,localised_create);
});})(G__18358,G__18359,G__18360,G__18361,G__18362,props,localised_string,map__18352,map__18352__$1,id,ident,value,localised,order,checked,css_class,localised__$1,map__18353,map__18353__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_create,_STAR_reconciler_STAR_18347,_STAR_depth_STAR_18348,_STAR_shared_STAR_18349,_STAR_instrument_STAR_18350,_STAR_parent_STAR_18351,this$,this__7333__auto__,x18342_18371))
,localised__$1));
return React.createElement(G__18358,G__18359,G__18360,G__18361,G__18362,G__18363);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18351;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18350;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18349;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18348;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18347;
}});})(x18342_18371))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype.constructor = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype.om$isComponent = true;

var x18369_18372 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow;
x18369_18372.om$next$Ident$ = true;

x18369_18372.om$next$Ident$ident$arity$2 = ((function (x18369_18372){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_DASH_string,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x18369_18372))
;


var x18370_18373 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.prototype;
x18370_18373.om$next$Ident$ = true;

x18370_18373.om$next$Ident$ident$arity$2 = ((function (x18370_18373){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_DASH_string,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x18370_18373))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTableRow";

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write(writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTableRow");
});
om_next_datascript_localisation_demo.components.locale.strings.localised_string = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTableRow,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (props){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_DASH_string,cljs.core.cst$kw$db_SLASH_id], null));
})], null));
om_next_datascript_localisation_demo.components.locale.strings.table_head = (function om_next_datascript_localisation_demo$components$locale$strings$table_head(locales){
if(cljs.core.truth_(cljs.core.not_empty(locales))){
var G__18497 = "thead";
var G__18498 = null;
var G__18499 = (function (){var G__18513 = "tr";
var G__18514 = null;
var G__18515 = (function (){var G__18519 = "th";
var G__18520 = {"rowSpan": (2)};
var G__18521 = "Select";
return React.createElement(G__18519,G__18520,G__18521);
})();
var G__18516 = (function (){var G__18522 = "th";
var G__18523 = {"rowSpan": (2)};
var G__18524 = "ID";
return React.createElement(G__18522,G__18523,G__18524);
})();
var G__18517 = (function (){var G__18525 = "th";
var G__18526 = {"rowSpan": (2)};
var G__18527 = "Default";
return React.createElement(G__18525,G__18526,G__18527);
})();
var G__18518 = (function (){var G__18528 = "th";
var G__18529 = {"colSpan": cljs.core.count(locales)};
var G__18530 = "Localised";
return React.createElement(G__18528,G__18529,G__18530);
})();
return React.createElement(G__18513,G__18514,G__18515,G__18516,G__18517,G__18518);
})();
var G__18500 = (function (){var attrs18460 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__18497,G__18498,G__18499){
return (function (l){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale_SLASH_code], null))], null);
});})(G__18497,G__18498,G__18499))
,locales);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tr",((cljs.core.map_QMARK_(attrs18460))?sablono.interpreter.attributes(attrs18460):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18460))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18460)], null))));
})();
return React.createElement(G__18497,G__18498,G__18499,G__18500);
} else {
var G__18538 = "thead";
var G__18539 = null;
var G__18540 = (function (){var G__18541 = "tr";
var G__18542 = null;
var G__18543 = React.createElement("th",null,"Select");
var G__18544 = React.createElement("th",null,"ID");
var G__18545 = React.createElement("th",null,"Default");
return React.createElement(G__18541,G__18542,G__18543,G__18544,G__18545);
})();
return React.createElement(G__18538,G__18539,G__18540);
}
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable = (function om_next_datascript_localisation_demo$components$locale$strings$LocalisedStringTable(){
var this__7394__auto__ = this;
React.Component.apply(this__7394__auto__,arguments);

if(!((this__7394__auto__.initLocalState == null))){
this__7394__auto__.state = this__7394__auto__.initLocalState();
} else {
this__7394__auto__.state = {};
}

return this__7394__auto__;
});

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype = goog.object.clone(React.Component.prototype);

var x18561_18602 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype;
x18561_18602.componentWillUpdate = ((function (x18561_18602){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
om.next.merge_pending_props_BANG_(this__7334__auto__);

return om.next.merge_pending_state_BANG_(this__7334__auto__);
});})(x18561_18602))
;

x18561_18602.shouldComponentUpdate = ((function (x18561_18602){
return (function (next_props__7335__auto__,next_state__7336__auto__){
var this__7334__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__7334__auto__),goog.object.get(next_props__7335__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__7334__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__18564 = this__7334__auto__.state;
var G__18565 = "omcljs$state";
return goog.object.get(G__18564,G__18565);
})(),goog.object.get(next_state__7336__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x18561_18602))
;

x18561_18602.componentWillUnmount = ((function (x18561_18602){
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
});})(x18561_18602))
;

x18561_18602.componentDidUpdate = ((function (x18561_18602){
return (function (prev_props__7337__auto__,prev_state__7338__auto__){
var this__7334__auto__ = this;
return om.next.clear_prev_props_BANG_(this__7334__auto__);
});})(x18561_18602))
;

x18561_18602.isMounted = ((function (x18561_18602){
return (function (){
var this__7334__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__7334__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18561_18602))
;

x18561_18602.componentWillMount = ((function (x18561_18602){
return (function (){
var this__7334__auto__ = this;
var indexer__7339__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__7334__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__7339__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__7339__auto__,this__7334__auto__);
}
});})(x18561_18602))
;

x18561_18602.initLocalState = ((function (x18561_18602){
return (function (){
var this$ = this;
var ret__7316__auto__ = (function (){var props = om.next.props(this$);
var locales = cljs.core.cst$kw$locales.cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$checkboxes,om_next_datascript_localisation_demo.utils.checkboxes.reset_checkboxes(locales)], null);
})();
var obj18567 = {"omcljs$state":ret__7316__auto__};
return obj18567;
});})(x18561_18602))
;

x18561_18602.componentWillReceiveProps = ((function (x18561_18602){
return (function (next_props__7318__auto__){
var this__7317__auto__ = this;
var this$ = this__7317__auto__;
var new_props = om.next._next_props(next_props__7318__auto__,this__7317__auto__);
var locales = cljs.core.cst$kw$locales.cljs$core$IFn$_invoke$arity$1(new_props);
var state = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var old_checkboxes = cljs.core.cst$kw$checkboxes.cljs$core$IFn$_invoke$arity$1(state);
var add_checkbox_state = ((function (locales,state,old_checkboxes,this$,new_props,this__7317__auto__,x18561_18602){
return (function (new$,old,locale){
var id = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(locale);
if(cljs.core.contains_QMARK_(old,id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(old,id));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,id,false);
}
});})(locales,state,old_checkboxes,this$,new_props,this__7317__auto__,x18561_18602))
;
var new_checkboxes = cljs.core.PersistentArrayMap.EMPTY;
var l = cljs.core.first(locales);
var locales__$1 = cljs.core.rest(locales);
while(true){
if(cljs.core.not(l)){
return om.next.set_state_BANG_(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$checkboxes,new_checkboxes], null));
} else {
var G__18603 = add_checkbox_state(new_checkboxes,old_checkboxes,l);
var G__18604 = cljs.core.first(locales__$1);
var G__18605 = cljs.core.rest(locales__$1);
new_checkboxes = G__18603;
l = G__18604;
locales__$1 = G__18605;
continue;
}
break;
}
});})(x18561_18602))
;

x18561_18602.toggle_checkbox = ((function (x18561_18602){
return (function (id){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (this$,x18561_18602){
return (function (p1__18546_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__18546_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$checkboxes,id], null),cljs.core.not);
});})(this$,x18561_18602))
);
});})(x18561_18602))
;

x18561_18602.edited_text = ((function (x18561_18602){
return (function (id,attrib,text){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$attrib_SLASH_set),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,id),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$attrib),cljs.core._conj(cljs.core.List.EMPTY,attrib),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,text)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_strings))))));
});})(x18561_18602))
;

x18561_18602.edited_keyword = ((function (x18561_18602){
return (function (id,attrib,text){
var this$ = this;
return this$.edited_text(id,attrib,om_next_datascript_localisation_demo.utils.keywords.keywordify(text));
});})(x18561_18602))
;

x18561_18602.localised_create = ((function (x18561_18602){
return (function (id,locale,text){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$localised_SLASH_create),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,id),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locale),cljs.core._conj(cljs.core.List.EMPTY,locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,text)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_strings))))));
});})(x18561_18602))
;

x18561_18602.render = ((function (x18561_18602){
return (function (){
var this__7333__auto__ = this;
var this$ = this__7333__auto__;
var _STAR_reconciler_STAR_18568 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18569 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18570 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18571 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18572 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__7333__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__7333__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__7333__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__7333__auto__);

om.next._STAR_parent_STAR_ = this__7333__auto__;

try{var props = om.next.props(this$);
var locales = cljs.core.cst$kw$locales.cljs$core$IFn$_invoke$arity$1(props);
var localised_strings = cljs.core.cst$kw$localised_DASH_strings.cljs$core$IFn$_invoke$arity$1(props);
var order = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (props,locales,localised_strings,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (p1__18547_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__18547_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null));
});})(props,locales,localised_strings,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
,locales);
var state = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var G__18575 = "div";
var G__18576 = {"className": "functional-block"};
var G__18577 = React.createElement("h2",null,"Localised Strings");
var G__18578 = (function (){var G__18580 = "button";
var G__18581 = {"onClick": ((function (G__18580,G__18575,G__18576,G__18577,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (e){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$localised_DASH_string_SLASH_create))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_strings))))));
});})(G__18580,G__18575,G__18576,G__18577,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
};
var G__18582 = "Add a new localised string";
return React.createElement(G__18580,G__18581,G__18582);
})();
var G__18579 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.not_empty(localised_strings))?(function (){var G__18591 = "div";
var G__18592 = null;
var G__18593 = (function (){var attrs18583 = om_next_datascript_localisation_demo.components.locale.strings.table_head(locales);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"table",((cljs.core.map_QMARK_(attrs18583))?sablono.interpreter.attributes(attrs18583):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18583))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs18584 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (l,css_class){
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null));
var checked = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$checkboxes,id], null));
var G__18595 = om.next.computed(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$order,order,cljs.core.cst$kw$checked,checked,cljs.core.cst$kw$css_DASH_class,css_class,cljs.core.cst$kw$localised_DASH_string,l], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$toggle_DASH_checkbox,((function (id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (){
return this$.toggle_checkbox(id);
});})(id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
,cljs.core.cst$kw$edited_DASH_text,((function (id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (p1__18548_SHARP_,p2__18549_SHARP_){
return this$.edited_text(id,p1__18548_SHARP_,p2__18549_SHARP_);
});})(id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
,cljs.core.cst$kw$edited_DASH_text_DASH_id,((function (id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (p1__18550_SHARP_,p2__18551_SHARP_,p3__18552_SHARP_){
return this$.edited_text(p1__18550_SHARP_,p2__18551_SHARP_,p3__18552_SHARP_);
});})(id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
,cljs.core.cst$kw$edited_DASH_keyword,((function (id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (p1__18553_SHARP_,p2__18554_SHARP_){
return this$.edited_keyword(id,p1__18553_SHARP_,p2__18554_SHARP_);
});})(id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
,cljs.core.cst$kw$localised_DASH_create,((function (id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (p1__18555_SHARP_,p2__18556_SHARP_){
return this$.localised_create(id,p1__18555_SHARP_,p2__18556_SHARP_);
});})(id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
], null));
return (om_next_datascript_localisation_demo.components.locale.strings.localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.strings.localised_string.cljs$core$IFn$_invoke$arity$1(G__18595) : om_next_datascript_localisation_demo.components.locale.strings.localised_string.call(null,G__18595));
});})(attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
,localised_strings,cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["odd","even"], null)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tbody",((cljs.core.map_QMARK_(attrs18584))?sablono.interpreter.attributes(attrs18584):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18584))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18584)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18583),(function (){var attrs18585 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (l,css_class){
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null));
var checked = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$checkboxes,id], null));
var G__18596 = om.next.computed(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$order,order,cljs.core.cst$kw$checked,checked,cljs.core.cst$kw$css_DASH_class,css_class,cljs.core.cst$kw$localised_DASH_string,l], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$toggle_DASH_checkbox,((function (id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (){
return this$.toggle_checkbox(id);
});})(id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
,cljs.core.cst$kw$edited_DASH_text,((function (id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (p1__18548_SHARP_,p2__18549_SHARP_){
return this$.edited_text(id,p1__18548_SHARP_,p2__18549_SHARP_);
});})(id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
,cljs.core.cst$kw$edited_DASH_text_DASH_id,((function (id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (p1__18550_SHARP_,p2__18551_SHARP_,p3__18552_SHARP_){
return this$.edited_text(p1__18550_SHARP_,p2__18551_SHARP_,p3__18552_SHARP_);
});})(id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
,cljs.core.cst$kw$edited_DASH_keyword,((function (id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (p1__18553_SHARP_,p2__18554_SHARP_){
return this$.edited_keyword(id,p1__18553_SHARP_,p2__18554_SHARP_);
});})(id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
,cljs.core.cst$kw$localised_DASH_create,((function (id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (p1__18555_SHARP_,p2__18556_SHARP_){
return this$.localised_create(id,p1__18555_SHARP_,p2__18556_SHARP_);
});})(id,checked,attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
], null));
return (om_next_datascript_localisation_demo.components.locale.strings.localised_string.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.strings.localised_string.cljs$core$IFn$_invoke$arity$1(G__18596) : om_next_datascript_localisation_demo.components.locale.strings.localised_string.call(null,G__18596));
});})(attrs18583,G__18591,G__18592,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
,localised_strings,cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["odd","even"], null)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tbody",((cljs.core.map_QMARK_(attrs18585))?sablono.interpreter.attributes(attrs18585):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18585))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18585)], null))));
})()], null))));
})();
var G__18594 = (function (){var G__18597 = "button";
var G__18598 = {"onClick": ((function (G__18597,G__18591,G__18592,G__18593,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602){
return (function (e){
var state__$1 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var checkboxes = cljs.core.cst$kw$checkboxes.cljs$core$IFn$_invoke$arity$1(state__$1);
var ids = om_next_datascript_localisation_demo.utils.checkboxes.selected_checkbox_ids(checkboxes);
if(cljs.core.empty_QMARK_(ids)){
return null;
} else {
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$delete_SLASH_db_DASH_id),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ids),cljs.core._conj(cljs.core.List.EMPTY,ids)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_strings))))));
}
});})(G__18597,G__18591,G__18592,G__18593,G__18575,G__18576,G__18577,G__18578,props,locales,localised_strings,order,state,_STAR_reconciler_STAR_18568,_STAR_depth_STAR_18569,_STAR_shared_STAR_18570,_STAR_instrument_STAR_18571,_STAR_parent_STAR_18572,this$,this__7333__auto__,x18561_18602))
};
var G__18599 = "Delete selected";
return React.createElement(G__18597,G__18598,G__18599);
})();
return React.createElement(G__18591,G__18592,G__18593,G__18594);
})():null));
return React.createElement(G__18575,G__18576,G__18577,G__18578,G__18579);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18572;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18571;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18570;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18569;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18568;
}});})(x18561_18602))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype.constructor = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype.om$isComponent = true;

var x18600_18606 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable;
x18600_18606.om$next$IQuery$ = true;

x18600_18606.om$next$IQuery$query$arity$1 = ((function (x18600_18606){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_strings)))));
});})(x18600_18606))
;


var x18601_18607 = om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.prototype;
x18601_18607.om$next$IQuery$ = true;

x18601_18607.om$next$IQuery$query$arity$1 = ((function (x18601_18607){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$localised_DASH_strings)))));
});})(x18601_18607))
;


om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTable";

om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable.cljs$lang$ctorPrWriter = (function (this__7396__auto__,writer__7397__auto__,opt__7398__auto__){
return cljs.core._write(writer__7397__auto__,"om-next-datascript-localisation-demo.components.locale.strings/LocalisedStringTable");
});
om_next_datascript_localisation_demo.components.locale.strings.localised_string_table = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.components.locale.strings.LocalisedStringTable);
