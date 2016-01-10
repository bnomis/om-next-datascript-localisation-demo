// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.components.locale.table');
goog.require('cljs.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('sablono.core');
goog.require('om_next_datascript_localisation_demo.utils.checkboxes');
goog.require('om_next_datascript_localisation_demo.utils.keywords');
goog.require('om.next');
goog.require('om_next_datascript_localisation_demo.components.editable_text');
goog.require('clojure.string');
om_next_datascript_localisation_demo.components.locale.table.empty_locale = (function om_next_datascript_localisation_demo$components$locale$table$empty_locale(locale){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,locale,cljs.core.cst$kw$value,"None",cljs.core.cst$kw$locale,locale,cljs.core.cst$kw$placeholder,true], null);
});
om_next_datascript_localisation_demo.components.locale.table.fill_empty_locales = (function om_next_datascript_localisation_demo$components$locale$table$fill_empty_locales(order){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.table.empty_locale,order);
});
om_next_datascript_localisation_demo.components.locale.table.find_locales_locale = (function om_next_datascript_localisation_demo$components$locale$table$find_locales_locale(locales,id){
return cljs.core.some((function (l){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_SLASH_locale,cljs.core.cst$kw$db_SLASH_id], null)))){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null)),cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null)),cljs.core.cst$kw$locale,id,cljs.core.cst$kw$placeholder,false], null);
} else {
return null;
}
}),locales);
});
om_next_datascript_localisation_demo.components.locale.table.get_locales_locale = (function om_next_datascript_localisation_demo$components$locale$table$get_locales_locale(locales,id){
var ll = om_next_datascript_localisation_demo.components.locale.table.find_locales_locale(locales,id);
var or__6142__auto__ = ll;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return om_next_datascript_localisation_demo.components.locale.table.empty_locale(id);
}
});
om_next_datascript_localisation_demo.components.locale.table.find_locales = (function om_next_datascript_localisation_demo$components$locale$table$find_locales(locales,order){
if((cljs.core.empty_QMARK_(locales)) || (cljs.core.not(locales))){
return om_next_datascript_localisation_demo.components.locale.table.fill_empty_locales(order);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var o = cljs.core.first(order);
var order__$1 = cljs.core.rest(order);
while(true){
if(cljs.core.not(o)){
return out;
} else {
var G__26070 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,om_next_datascript_localisation_demo.components.locale.table.get_locales_locale(locales,o));
var G__26071 = cljs.core.first(order__$1);
var G__26072 = cljs.core.rest(order__$1);
out = G__26070;
o = G__26071;
order__$1 = G__26072;
continue;
}
break;
}
}
});
om_next_datascript_localisation_demo.components.locale.table.localised_locale = (function om_next_datascript_localisation_demo$components$locale$table$localised_locale(locale,edited_text){
var G__26084 = "td";
var G__26085 = {"key": cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(locale)};
var G__26086 = sablono.interpreter.interpret((function (){var G__26090 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(locale)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__26084,G__26085){
return (function (p1__26073_SHARP_){
var G__26091 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(locale);
var G__26092 = cljs.core.cst$kw$value;
var G__26093 = p1__26073_SHARP_;
return (edited_text.cljs$core$IFn$_invoke$arity$3 ? edited_text.cljs$core$IFn$_invoke$arity$3(G__26091,G__26092,G__26093) : edited_text.call(null,G__26091,G__26092,G__26093));
});})(G__26084,G__26085))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__26090) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__26090));
})());
return React.createElement(G__26084,G__26085,G__26086);
});
om_next_datascript_localisation_demo.components.locale.table.localised_locale_placeholder = (function om_next_datascript_localisation_demo$components$locale$table$localised_locale_placeholder(locale,localised_locale_create){
var G__26103 = "td";
var G__26104 = {"key": cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(locale)};
var G__26105 = sablono.interpreter.interpret((function (){var G__26108 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(locale)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__26103,G__26104){
return (function (p1__26094_SHARP_){
var G__26109 = cljs.core.cst$kw$locale.cljs$core$IFn$_invoke$arity$1(locale);
var G__26110 = p1__26094_SHARP_;
return (localised_locale_create.cljs$core$IFn$_invoke$arity$2 ? localised_locale_create.cljs$core$IFn$_invoke$arity$2(G__26109,G__26110) : localised_locale_create.call(null,G__26109,G__26110));
});})(G__26103,G__26104))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__26108) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__26108));
})());
return React.createElement(G__26103,G__26104,G__26105);
});
om_next_datascript_localisation_demo.components.locale.table.localised_locale_factory = (function om_next_datascript_localisation_demo$components$locale$table$localised_locale_factory(locale,edited_text,localised_locale_create){
if(cljs.core.truth_(cljs.core.cst$kw$placeholder.cljs$core$IFn$_invoke$arity$1(locale))){
return om_next_datascript_localisation_demo.components.locale.table.localised_locale_placeholder(locale,localised_locale_create);
} else {
return om_next_datascript_localisation_demo.components.locale.table.localised_locale(locale,edited_text);
}
});
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow = (function om_next_datascript_localisation_demo$components$locale$table$LocalesTableRow(){
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.prototype = goog.object.clone(React.Component.prototype);

var x26119_26153 = om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.prototype;
x26119_26153.componentWillUpdate = ((function (x26119_26153){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_(this__9236__auto__);

return om.next.merge_pending_state_BANG_(this__9236__auto__);
});})(x26119_26153))
;

x26119_26153.shouldComponentUpdate = ((function (x26119_26153){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__26122 = this__9236__auto__.state;
var G__26123 = "omcljs$state";
return goog.object.get(G__26122,G__26123);
})(),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x26119_26153))
;

x26119_26153.componentWillUnmount = ((function (x26119_26153){
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
});})(x26119_26153))
;

x26119_26153.componentDidUpdate = ((function (x26119_26153){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_(this__9236__auto__);
});})(x26119_26153))
;

x26119_26153.isMounted = ((function (x26119_26153){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26119_26153))
;

x26119_26153.componentWillMount = ((function (x26119_26153){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x26119_26153))
;

x26119_26153.render = ((function (x26119_26153){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_26124 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26125 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26126 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26127 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26128 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var oprops = om.next.props(this$);
var props = cljs.core.cst$kw$locale.cljs$core$IFn$_invoke$arity$1(oprops);
var map__26129 = props;
var map__26129__$1 = ((((!((map__26129 == null)))?((((map__26129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26129):map__26129);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26129__$1,cljs.core.cst$kw$db_SLASH_id);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26129__$1,cljs.core.cst$kw$value);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26129__$1,cljs.core.cst$kw$locale_SLASH_code);
var enum$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26129__$1,cljs.core.cst$kw$locale_SLASH_enum);
var order = cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(oprops);
var checked = cljs.core.cst$kw$checked.cljs$core$IFn$_invoke$arity$1(oprops);
var locales = cljs.core.cst$kw$localised.cljs$core$IFn$_invoke$arity$1(props);
var localised = om_next_datascript_localisation_demo.components.locale.table.find_locales(locales,order);
var css_class = cljs.core.cst$kw$css_DASH_class.cljs$core$IFn$_invoke$arity$1(oprops);
var map__26130 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__26130__$1 = ((((!((map__26130 == null)))?((((map__26130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26130):map__26130);
var toggle_checkbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26130__$1,cljs.core.cst$kw$toggle_DASH_checkbox);
var edited_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26130__$1,cljs.core.cst$kw$edited_DASH_text);
var edited_text_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26130__$1,cljs.core.cst$kw$edited_DASH_text_DASH_id);
var edited_keyword = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26130__$1,cljs.core.cst$kw$edited_DASH_keyword);
var localised_locale_create = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26130__$1,cljs.core.cst$kw$localised_DASH_locale_DASH_create);
var G__26135 = "tr";
var G__26136 = {"className": sablono.util.join_classes(cljs.core.PersistentHashSet.fromArray([css_class], true))};
var G__26137 = (function (){var G__26142 = "td";
var G__26143 = {"className": "center-column"};
var G__26144 = sablono.interpreter.create_element("input",{"type": "checkbox", "value": id, "checked": checked, "onChange": ((function (G__26142,G__26143,G__26135,G__26136,oprops,props,map__26129,map__26129__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__26130,map__26130__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_26124,_STAR_depth_STAR_26125,_STAR_shared_STAR_26126,_STAR_instrument_STAR_26127,_STAR_parent_STAR_26128,this$,this__9235__auto__,x26119_26153){
return (function (e){
return (toggle_checkbox.cljs$core$IFn$_invoke$arity$0 ? toggle_checkbox.cljs$core$IFn$_invoke$arity$0() : toggle_checkbox.call(null));
});})(G__26142,G__26143,G__26135,G__26136,oprops,props,map__26129,map__26129__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__26130,map__26130__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_26124,_STAR_depth_STAR_26125,_STAR_shared_STAR_26126,_STAR_instrument_STAR_26127,_STAR_parent_STAR_26128,this$,this__9235__auto__,x26119_26153))
});
return React.createElement(G__26142,G__26143,G__26144);
})();
var G__26138 = (function (){var attrs26133 = (function (){var G__26145 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,value], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__26135,G__26136,G__26137,oprops,props,map__26129,map__26129__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__26130,map__26130__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_26124,_STAR_depth_STAR_26125,_STAR_shared_STAR_26126,_STAR_instrument_STAR_26127,_STAR_parent_STAR_26128,this$,this__9235__auto__,x26119_26153){
return (function (p1__26111_SHARP_){
return (edited_text.cljs$core$IFn$_invoke$arity$2 ? edited_text.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,p1__26111_SHARP_) : edited_text.call(null,cljs.core.cst$kw$value,p1__26111_SHARP_));
});})(G__26135,G__26136,G__26137,oprops,props,map__26129,map__26129__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__26130,map__26130__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_26124,_STAR_depth_STAR_26125,_STAR_shared_STAR_26126,_STAR_instrument_STAR_26127,_STAR_parent_STAR_26128,this$,this__9235__auto__,x26119_26153))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__26145) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__26145));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs26133))?sablono.interpreter.attributes(attrs26133):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs26133))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs26133)], null))));
})();
var G__26139 = (function (){var G__26146 = "td";
var G__26147 = {"className": "center-column"};
var G__26148 = sablono.interpreter.interpret((function (){var G__26149 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,code], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__26146,G__26147,G__26135,G__26136,G__26137,G__26138,oprops,props,map__26129,map__26129__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__26130,map__26130__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_26124,_STAR_depth_STAR_26125,_STAR_shared_STAR_26126,_STAR_instrument_STAR_26127,_STAR_parent_STAR_26128,this$,this__9235__auto__,x26119_26153){
return (function (p1__26112_SHARP_){
return (edited_text.cljs$core$IFn$_invoke$arity$2 ? edited_text.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$locale_SLASH_code,p1__26112_SHARP_) : edited_text.call(null,cljs.core.cst$kw$locale_SLASH_code,p1__26112_SHARP_));
});})(G__26146,G__26147,G__26135,G__26136,G__26137,G__26138,oprops,props,map__26129,map__26129__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__26130,map__26130__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_26124,_STAR_depth_STAR_26125,_STAR_shared_STAR_26126,_STAR_instrument_STAR_26127,_STAR_parent_STAR_26128,this$,this__9235__auto__,x26119_26153))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__26149) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__26149));
})());
return React.createElement(G__26146,G__26147,G__26148);
})();
var G__26140 = (function (){var attrs26134 = (function (){var G__26150 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,[cljs.core.str(enum$)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$callback,((function (G__26135,G__26136,G__26137,G__26138,G__26139,oprops,props,map__26129,map__26129__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__26130,map__26130__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_26124,_STAR_depth_STAR_26125,_STAR_shared_STAR_26126,_STAR_instrument_STAR_26127,_STAR_parent_STAR_26128,this$,this__9235__auto__,x26119_26153){
return (function (p1__26113_SHARP_){
return (edited_keyword.cljs$core$IFn$_invoke$arity$2 ? edited_keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$locale_SLASH_enum,p1__26113_SHARP_) : edited_keyword.call(null,cljs.core.cst$kw$locale_SLASH_enum,p1__26113_SHARP_));
});})(G__26135,G__26136,G__26137,G__26138,G__26139,oprops,props,map__26129,map__26129__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__26130,map__26130__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_26124,_STAR_depth_STAR_26125,_STAR_shared_STAR_26126,_STAR_instrument_STAR_26127,_STAR_parent_STAR_26128,this$,this__9235__auto__,x26119_26153))
], null));
return (om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.editable_text.editable_text.cljs$core$IFn$_invoke$arity$1(G__26150) : om_next_datascript_localisation_demo.components.editable_text.editable_text.call(null,G__26150));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs26134))?sablono.interpreter.attributes(attrs26134):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs26134))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs26134)], null))));
})();
var G__26141 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__26135,G__26136,G__26137,G__26138,G__26139,G__26140,oprops,props,map__26129,map__26129__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__26130,map__26130__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_26124,_STAR_depth_STAR_26125,_STAR_shared_STAR_26126,_STAR_instrument_STAR_26127,_STAR_parent_STAR_26128,this$,this__9235__auto__,x26119_26153){
return (function (p1__26114_SHARP_){
return om_next_datascript_localisation_demo.components.locale.table.localised_locale_factory(p1__26114_SHARP_,edited_text_id,localised_locale_create);
});})(G__26135,G__26136,G__26137,G__26138,G__26139,G__26140,oprops,props,map__26129,map__26129__$1,id,value,code,enum$,order,checked,locales,localised,css_class,map__26130,map__26130__$1,toggle_checkbox,edited_text,edited_text_id,edited_keyword,localised_locale_create,_STAR_reconciler_STAR_26124,_STAR_depth_STAR_26125,_STAR_shared_STAR_26126,_STAR_instrument_STAR_26127,_STAR_parent_STAR_26128,this$,this__9235__auto__,x26119_26153))
,localised));
return React.createElement(G__26135,G__26136,G__26137,G__26138,G__26139,G__26140,G__26141);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26128;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26127;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26126;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26125;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26124;
}});})(x26119_26153))
;


om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.prototype.constructor = om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow;

om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.prototype.om$isComponent = true;

var x26151_26154 = om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow;
x26151_26154.om$next$Ident$ = true;

x26151_26154.om$next$Ident$ident$arity$2 = ((function (x26151_26154){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x26151_26154))
;


var x26152_26155 = om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.prototype;
x26152_26155.om$next$Ident$ = true;

x26152_26155.om$next$Ident$ident$arity$2 = ((function (x26152_26155){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null))], null);
});})(x26152_26155))
;


om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.table/LocalesTableRow";

om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write(writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.table/LocalesTableRow");
});
om_next_datascript_localisation_demo.components.locale.table.locale = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.components.locale.table.LocalesTableRow,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (props){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$db_SLASH_id], null));
})], null));
/**
 * @constructor
 */
om_next_datascript_localisation_demo.components.locale.table.LocalesTable = (function om_next_datascript_localisation_demo$components$locale$table$LocalesTable(){
var this__9296__auto__ = this;
React.Component.apply(this__9296__auto__,arguments);

if(!((this__9296__auto__.initLocalState == null))){
this__9296__auto__.state = this__9296__auto__.initLocalState();
} else {
this__9296__auto__.state = {};
}

return this__9296__auto__;
});

om_next_datascript_localisation_demo.components.locale.table.LocalesTable.prototype = goog.object.clone(React.Component.prototype);

var x26171_26540 = om_next_datascript_localisation_demo.components.locale.table.LocalesTable.prototype;
x26171_26540.componentWillUpdate = ((function (x26171_26540){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
om.next.merge_pending_props_BANG_(this__9236__auto__);

return om.next.merge_pending_state_BANG_(this__9236__auto__);
});})(x26171_26540))
;

x26171_26540.shouldComponentUpdate = ((function (x26171_26540){
return (function (next_props__9237__auto__,next_state__9238__auto__){
var this__9236__auto__ = this;
var or__6142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__9236__auto__),goog.object.get(next_props__9237__auto__,"omcljs$value"));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var and__6130__auto__ = this__9236__auto__.state;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__26174 = this__9236__auto__.state;
var G__26175 = "omcljs$state";
return goog.object.get(G__26174,G__26175);
})(),goog.object.get(next_state__9238__auto__,"omcljs$state"));
} else {
return and__6130__auto__;
}
}
});})(x26171_26540))
;

x26171_26540.componentWillUnmount = ((function (x26171_26540){
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
});})(x26171_26540))
;

x26171_26540.componentDidUpdate = ((function (x26171_26540){
return (function (prev_props__9239__auto__,prev_state__9240__auto__){
var this__9236__auto__ = this;
return om.next.clear_prev_props_BANG_(this__9236__auto__);
});})(x26171_26540))
;

x26171_26540.isMounted = ((function (x26171_26540){
return (function (){
var this__9236__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__9236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26171_26540))
;

x26171_26540.componentWillMount = ((function (x26171_26540){
return (function (){
var this__9236__auto__ = this;
var indexer__9241__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__9236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__9241__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__9241__auto__,this__9236__auto__);
}
});})(x26171_26540))
;

x26171_26540.initLocalState = ((function (x26171_26540){
return (function (){
var this$ = this;
var ret__9218__auto__ = (function (){var props = om.next.props(this$);
var locales = cljs.core.cst$kw$locales.cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$checkboxes,om_next_datascript_localisation_demo.utils.checkboxes.reset_checkboxes(locales)], null);
})();
var obj26177 = {"omcljs$state":ret__9218__auto__};
return obj26177;
});})(x26171_26540))
;

x26171_26540.componentWillReceiveProps = ((function (x26171_26540){
return (function (next_props__9220__auto__){
var this__9219__auto__ = this;
var this$ = this__9219__auto__;
var new_props = om.next._next_props(next_props__9220__auto__,this__9219__auto__);
var locales = cljs.core.cst$kw$locales.cljs$core$IFn$_invoke$arity$1(new_props);
var state = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var old_checkboxes = cljs.core.cst$kw$checkboxes.cljs$core$IFn$_invoke$arity$1(state);
var add_checkbox_state = ((function (locales,state,old_checkboxes,this$,new_props,this__9219__auto__,x26171_26540){
return (function (new$,old,locale){
var id = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(locale);
if(cljs.core.contains_QMARK_(old,id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(old,id));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,id,false);
}
});})(locales,state,old_checkboxes,this$,new_props,this__9219__auto__,x26171_26540))
;
var new_checkboxes = cljs.core.PersistentArrayMap.EMPTY;
var l = cljs.core.first(locales);
var locales__$1 = cljs.core.rest(locales);
while(true){
if(cljs.core.not(l)){
return om.next.set_state_BANG_(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$checkboxes,new_checkboxes], null));
} else {
var G__26541 = add_checkbox_state(new_checkboxes,old_checkboxes,l);
var G__26542 = cljs.core.first(locales__$1);
var G__26543 = cljs.core.rest(locales__$1);
new_checkboxes = G__26541;
l = G__26542;
locales__$1 = G__26543;
continue;
}
break;
}
});})(x26171_26540))
;

x26171_26540.toggle_checkbox = ((function (x26171_26540){
return (function (id){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (this$,x26171_26540){
return (function (p1__26156_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__26156_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$checkboxes,id], null),cljs.core.not);
});})(this$,x26171_26540))
);
});})(x26171_26540))
;

x26171_26540.edited_text = ((function (x26171_26540){
return (function (id,attrib,text){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$attrib_SLASH_set),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,id),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$attrib),cljs.core._conj(cljs.core.List.EMPTY,attrib),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,text)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales))))));
});})(x26171_26540))
;

x26171_26540.edited_keyword = ((function (x26171_26540){
return (function (id,attrib,text){
var this$ = this;
return this$.edited_text(id,attrib,om_next_datascript_localisation_demo.utils.keywords.keywordify(text));
});})(x26171_26540))
;

x26171_26540.localised_locale_create = ((function (x26171_26540){
return (function (id,locale,text){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$localised_SLASH_create),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$db_SLASH_id),cljs.core._conj(cljs.core.List.EMPTY,id),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locale),cljs.core._conj(cljs.core.List.EMPTY,locale),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,text)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales))))));
});})(x26171_26540))
;

x26171_26540.render = ((function (x26171_26540){
return (function (){
var this__9235__auto__ = this;
var this$ = this__9235__auto__;
var _STAR_reconciler_STAR_26178 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26179 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26180 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26181 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26182 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__9235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__9235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__9235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__9235__auto__);

om.next._STAR_parent_STAR_ = this__9235__auto__;

try{var props = om.next.props(this$);
var locales = cljs.core.cst$kw$locales.cljs$core$IFn$_invoke$arity$1(props);
var order = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (props,locales,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540){
return (function (p1__26157_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__26157_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null));
});})(props,locales,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540))
,locales);
var state = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__26183_26544 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,props),"LocalesTable: render: props")));
console.log(G__26183_26544);
} else {
}

var G__26186 = "div";
var G__26187 = {"className": "functional-block"};
var G__26188 = React.createElement("h2",null,"Locales");
var G__26189 = (function (){var G__26191 = "button";
var G__26192 = {"onClick": ((function (G__26191,G__26186,G__26187,G__26188,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540){
return (function (e){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$locale_SLASH_create))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales))))));
});})(G__26191,G__26186,G__26187,G__26188,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540))
};
var G__26193 = "Add a new locale";
return React.createElement(G__26191,G__26192,G__26193);
})();
var G__26190 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.not_empty(locales))?(function (){var G__26369 = "div";
var G__26370 = null;
var G__26371 = (function (){var G__26452 = "table";
var G__26453 = null;
var G__26454 = (function (){var G__26493 = "thead";
var G__26494 = null;
var G__26495 = (function (){var G__26512 = "tr";
var G__26513 = null;
var G__26514 = (function (){var G__26519 = "th";
var G__26520 = {"rowSpan": (2)};
var G__26521 = "Select";
return React.createElement(G__26519,G__26520,G__26521);
})();
var G__26515 = (function (){var G__26522 = "th";
var G__26523 = {"rowSpan": (2)};
var G__26524 = "Name";
return React.createElement(G__26522,G__26523,G__26524);
})();
var G__26516 = (function (){var G__26525 = "th";
var G__26526 = {"rowSpan": (2)};
var G__26527 = "Code";
return React.createElement(G__26525,G__26526,G__26527);
})();
var G__26517 = (function (){var G__26528 = "th";
var G__26529 = {"rowSpan": (2)};
var G__26530 = "Enum";
return React.createElement(G__26528,G__26529,G__26530);
})();
var G__26518 = (function (){var G__26531 = "th";
var G__26532 = {"colSpan": cljs.core.count(order)};
var G__26533 = "Localised";
return React.createElement(G__26531,G__26532,G__26533);
})();
return React.createElement(G__26512,G__26513,G__26514,G__26515,G__26516,G__26517,G__26518);
})();
var G__26496 = (function (){var attrs26195 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__26493,G__26494,G__26495,G__26452,G__26453,G__26369,G__26370,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540){
return (function (l){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale_SLASH_code], null))], null);
});})(G__26493,G__26494,G__26495,G__26452,G__26453,G__26369,G__26370,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540))
,locales);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tr",((cljs.core.map_QMARK_(attrs26195))?sablono.interpreter.attributes(attrs26195):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs26195))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs26195)], null))));
})();
return React.createElement(G__26493,G__26494,G__26495,G__26496);
})();
var G__26455 = (function (){var attrs26194 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__26452,G__26453,G__26454,G__26369,G__26370,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540){
return (function (l,css_class){
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null));
var checked = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$checkboxes,id], null));
var G__26534 = om.next.computed(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$order,order,cljs.core.cst$kw$checked,checked,cljs.core.cst$kw$css_DASH_class,css_class,cljs.core.cst$kw$locale,l], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$toggle_DASH_checkbox,((function (id,checked,G__26452,G__26453,G__26454,G__26369,G__26370,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540){
return (function (){
return this$.toggle_checkbox(id);
});})(id,checked,G__26452,G__26453,G__26454,G__26369,G__26370,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540))
,cljs.core.cst$kw$edited_DASH_text,((function (id,checked,G__26452,G__26453,G__26454,G__26369,G__26370,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540){
return (function (p1__26158_SHARP_,p2__26159_SHARP_){
return this$.edited_text(id,p1__26158_SHARP_,p2__26159_SHARP_);
});})(id,checked,G__26452,G__26453,G__26454,G__26369,G__26370,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540))
,cljs.core.cst$kw$edited_DASH_text_DASH_id,((function (id,checked,G__26452,G__26453,G__26454,G__26369,G__26370,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540){
return (function (p1__26160_SHARP_,p2__26161_SHARP_,p3__26162_SHARP_){
return this$.edited_text(p1__26160_SHARP_,p2__26161_SHARP_,p3__26162_SHARP_);
});})(id,checked,G__26452,G__26453,G__26454,G__26369,G__26370,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540))
,cljs.core.cst$kw$edited_DASH_keyword,((function (id,checked,G__26452,G__26453,G__26454,G__26369,G__26370,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540){
return (function (p1__26163_SHARP_,p2__26164_SHARP_){
return this$.edited_keyword(id,p1__26163_SHARP_,p2__26164_SHARP_);
});})(id,checked,G__26452,G__26453,G__26454,G__26369,G__26370,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540))
,cljs.core.cst$kw$localised_DASH_locale_DASH_create,((function (id,checked,G__26452,G__26453,G__26454,G__26369,G__26370,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540){
return (function (p1__26165_SHARP_,p2__26166_SHARP_){
return this$.localised_locale_create(id,p1__26165_SHARP_,p2__26166_SHARP_);
});})(id,checked,G__26452,G__26453,G__26454,G__26369,G__26370,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540))
], null));
return (om_next_datascript_localisation_demo.components.locale.table.locale.cljs$core$IFn$_invoke$arity$1 ? om_next_datascript_localisation_demo.components.locale.table.locale.cljs$core$IFn$_invoke$arity$1(G__26534) : om_next_datascript_localisation_demo.components.locale.table.locale.call(null,G__26534));
});})(G__26452,G__26453,G__26454,G__26369,G__26370,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540))
,locales,cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["odd","even"], null)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"tbody",((cljs.core.map_QMARK_(attrs26194))?sablono.interpreter.attributes(attrs26194):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs26194))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs26194)], null))));
})();
return React.createElement(G__26452,G__26453,G__26454,G__26455);
})();
var G__26372 = (function (){var G__26535 = "button";
var G__26536 = {"onClick": ((function (G__26535,G__26369,G__26370,G__26371,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540){
return (function (e){
var state__$1 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var checkboxes = cljs.core.cst$kw$checkboxes.cljs$core$IFn$_invoke$arity$1(state__$1);
var ids = om_next_datascript_localisation_demo.utils.checkboxes.selected_checkbox_ids(checkboxes);
if(cljs.core.empty_QMARK_(ids)){
return null;
} else {
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$locale_SLASH_delete),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ids),cljs.core._conj(cljs.core.List.EMPTY,ids)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales))))));
}
});})(G__26535,G__26369,G__26370,G__26371,G__26186,G__26187,G__26188,G__26189,props,locales,order,state,_STAR_reconciler_STAR_26178,_STAR_depth_STAR_26179,_STAR_shared_STAR_26180,_STAR_instrument_STAR_26181,_STAR_parent_STAR_26182,this$,this__9235__auto__,x26171_26540))
};
var G__26537 = "Delete selected";
return React.createElement(G__26535,G__26536,G__26537);
})();
return React.createElement(G__26369,G__26370,G__26371,G__26372);
})():null));
return React.createElement(G__26186,G__26187,G__26188,G__26189,G__26190);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26182;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26181;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26180;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26179;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26178;
}});})(x26171_26540))
;


om_next_datascript_localisation_demo.components.locale.table.LocalesTable.prototype.constructor = om_next_datascript_localisation_demo.components.locale.table.LocalesTable;

om_next_datascript_localisation_demo.components.locale.table.LocalesTable.prototype.om$isComponent = true;

var x26538_26545 = om_next_datascript_localisation_demo.components.locale.table.LocalesTable;
x26538_26545.om$next$IQuery$ = true;

x26538_26545.om$next$IQuery$query$arity$1 = ((function (x26538_26545){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales)))));
});})(x26538_26545))
;


var x26539_26546 = om_next_datascript_localisation_demo.components.locale.table.LocalesTable.prototype;
x26539_26546.om$next$IQuery$ = true;

x26539_26546.om$next$IQuery$query$arity$1 = ((function (x26539_26546){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$locales)))));
});})(x26539_26546))
;


om_next_datascript_localisation_demo.components.locale.table.LocalesTable.cljs$lang$type = true;

om_next_datascript_localisation_demo.components.locale.table.LocalesTable.cljs$lang$ctorStr = "om-next-datascript-localisation-demo.components.locale.table/LocalesTable";

om_next_datascript_localisation_demo.components.locale.table.LocalesTable.cljs$lang$ctorPrWriter = (function (this__9298__auto__,writer__9299__auto__,opt__9300__auto__){
return cljs.core._write(writer__9299__auto__,"om-next-datascript-localisation-demo.components.locale.table/LocalesTable");
});
om_next_datascript_localisation_demo.components.locale.table.locales_table = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_next_datascript_localisation_demo.components.locale.table.LocalesTable);
