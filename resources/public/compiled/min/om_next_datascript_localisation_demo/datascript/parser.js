// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.datascript.parser');
goog.require('cljs.core');
goog.require('om.next');
goog.require('datascript.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('om_next_datascript_localisation_demo.datascript.db');
goog.require('om_next_datascript_localisation_demo.utils.ident');
if(typeof om_next_datascript_localisation_demo.datascript.parser.read !== 'undefined'){
} else {
om_next_datascript_localisation_demo.datascript.parser.read = (function (){var method_table__7055__auto__ = (function (){var G__16155 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16155) : cljs.core.atom.call(null,G__16155));
})();
var prefer_table__7056__auto__ = (function (){var G__16156 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16156) : cljs.core.atom.call(null,G__16156));
})();
var method_cache__7057__auto__ = (function (){var G__16157 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16157) : cljs.core.atom.call(null,G__16157));
})();
var cached_hierarchy__7058__auto__ = (function (){var G__16158 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16158) : cljs.core.atom.call(null,G__16158));
})();
var hierarchy__7059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("om-next-datascript-localisation-demo.datascript.parser","read"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__7059__auto__,method_table__7055__auto__,prefer_table__7056__auto__,method_cache__7057__auto__,cached_hierarchy__7058__auto__));
})();
}
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16159_16169 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"*-* read default")));
console.log(G__16159_16169);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16160_16170 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16160_16170);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16161_16171 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16161_16171);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16162_16172 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16162_16172);
} else {
}

var seq__16163_16173 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16164_16174 = null;
var count__16165_16175 = (0);
var i__16166_16176 = (0);
while(true){
if((i__16166_16176 < count__16165_16175)){
var k__11835__auto___16177 = chunk__16164_16174.cljs$core$IIndexed$_nth$arity$2(null,i__16166_16176);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16177)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16167_16178 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16177.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16177.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16177.call(null,env))),[cljs.core.str(k__11835__auto___16177)].join('')),"- ")));
console.log(G__16167_16178);
} else {
}
} else {
}

var G__16179 = seq__16163_16173;
var G__16180 = chunk__16164_16174;
var G__16181 = count__16165_16175;
var G__16182 = (i__16166_16176 + (1));
seq__16163_16173 = G__16179;
chunk__16164_16174 = G__16180;
count__16165_16175 = G__16181;
i__16166_16176 = G__16182;
continue;
} else {
var temp__4425__auto___16183 = cljs.core.seq(seq__16163_16173);
if(temp__4425__auto___16183){
var seq__16163_16184__$1 = temp__4425__auto___16183;
if(cljs.core.chunked_seq_QMARK_(seq__16163_16184__$1)){
var c__6945__auto___16185 = cljs.core.chunk_first(seq__16163_16184__$1);
var G__16186 = cljs.core.chunk_rest(seq__16163_16184__$1);
var G__16187 = c__6945__auto___16185;
var G__16188 = cljs.core.count(c__6945__auto___16185);
var G__16189 = (0);
seq__16163_16173 = G__16186;
chunk__16164_16174 = G__16187;
count__16165_16175 = G__16188;
i__16166_16176 = G__16189;
continue;
} else {
var k__11835__auto___16190 = cljs.core.first(seq__16163_16184__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16190)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16168_16191 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16190.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16190.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16190.call(null,env))),[cljs.core.str(k__11835__auto___16190)].join('')),"- ")));
console.log(G__16168_16191);
} else {
}
} else {
}

var G__16192 = cljs.core.next(seq__16163_16184__$1);
var G__16193 = null;
var G__16194 = (0);
var G__16195 = (0);
seq__16163_16173 = G__16192;
chunk__16164_16174 = G__16193;
count__16165_16175 = G__16194;
i__16166_16176 = G__16195;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var query = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(env);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om_next_datascript_localisation_demo.datascript.db.read_default.cljs$core$IFn$_invoke$arity$3(db,key,query)], null);
}));
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$app$locale,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16196_16206 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read app.locale")));
console.log(G__16196_16206);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16197_16207 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16197_16207);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16198_16208 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16198_16208);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16199_16209 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16199_16209);
} else {
}

var seq__16200_16210 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16201_16211 = null;
var count__16202_16212 = (0);
var i__16203_16213 = (0);
while(true){
if((i__16203_16213 < count__16202_16212)){
var k__11835__auto___16214 = chunk__16201_16211.cljs$core$IIndexed$_nth$arity$2(null,i__16203_16213);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16214)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16204_16215 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16214.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16214.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16214.call(null,env))),[cljs.core.str(k__11835__auto___16214)].join('')),"- ")));
console.log(G__16204_16215);
} else {
}
} else {
}

var G__16216 = seq__16200_16210;
var G__16217 = chunk__16201_16211;
var G__16218 = count__16202_16212;
var G__16219 = (i__16203_16213 + (1));
seq__16200_16210 = G__16216;
chunk__16201_16211 = G__16217;
count__16202_16212 = G__16218;
i__16203_16213 = G__16219;
continue;
} else {
var temp__4425__auto___16220 = cljs.core.seq(seq__16200_16210);
if(temp__4425__auto___16220){
var seq__16200_16221__$1 = temp__4425__auto___16220;
if(cljs.core.chunked_seq_QMARK_(seq__16200_16221__$1)){
var c__6945__auto___16222 = cljs.core.chunk_first(seq__16200_16221__$1);
var G__16223 = cljs.core.chunk_rest(seq__16200_16221__$1);
var G__16224 = c__6945__auto___16222;
var G__16225 = cljs.core.count(c__6945__auto___16222);
var G__16226 = (0);
seq__16200_16210 = G__16223;
chunk__16201_16211 = G__16224;
count__16202_16212 = G__16225;
i__16203_16213 = G__16226;
continue;
} else {
var k__11835__auto___16227 = cljs.core.first(seq__16200_16221__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16227)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16205_16228 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16227.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16227.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16227.call(null,env))),[cljs.core.str(k__11835__auto___16227)].join('')),"- ")));
console.log(G__16205_16228);
} else {
}
} else {
}

var G__16229 = cljs.core.next(seq__16200_16221__$1);
var G__16230 = null;
var G__16231 = (0);
var G__16232 = (0);
seq__16200_16210 = G__16229;
chunk__16201_16211 = G__16230;
count__16202_16212 = G__16231;
i__16203_16213 = G__16232;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var query = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(env);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om_next_datascript_localisation_demo.datascript.db.app_locale.cljs$core$IFn$_invoke$arity$2(db,query)], null);
}));
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$locale,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16233_16243 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read locale")));
console.log(G__16233_16243);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16234_16244 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16234_16244);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16235_16245 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16235_16245);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16236_16246 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16236_16246);
} else {
}

var seq__16237_16247 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16238_16248 = null;
var count__16239_16249 = (0);
var i__16240_16250 = (0);
while(true){
if((i__16240_16250 < count__16239_16249)){
var k__11835__auto___16251 = chunk__16238_16248.cljs$core$IIndexed$_nth$arity$2(null,i__16240_16250);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16251)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16241_16252 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16251.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16251.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16251.call(null,env))),[cljs.core.str(k__11835__auto___16251)].join('')),"- ")));
console.log(G__16241_16252);
} else {
}
} else {
}

var G__16253 = seq__16237_16247;
var G__16254 = chunk__16238_16248;
var G__16255 = count__16239_16249;
var G__16256 = (i__16240_16250 + (1));
seq__16237_16247 = G__16253;
chunk__16238_16248 = G__16254;
count__16239_16249 = G__16255;
i__16240_16250 = G__16256;
continue;
} else {
var temp__4425__auto___16257 = cljs.core.seq(seq__16237_16247);
if(temp__4425__auto___16257){
var seq__16237_16258__$1 = temp__4425__auto___16257;
if(cljs.core.chunked_seq_QMARK_(seq__16237_16258__$1)){
var c__6945__auto___16259 = cljs.core.chunk_first(seq__16237_16258__$1);
var G__16260 = cljs.core.chunk_rest(seq__16237_16258__$1);
var G__16261 = c__6945__auto___16259;
var G__16262 = cljs.core.count(c__6945__auto___16259);
var G__16263 = (0);
seq__16237_16247 = G__16260;
chunk__16238_16248 = G__16261;
count__16239_16249 = G__16262;
i__16240_16250 = G__16263;
continue;
} else {
var k__11835__auto___16264 = cljs.core.first(seq__16237_16258__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16264)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16242_16265 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16264.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16264.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16264.call(null,env))),[cljs.core.str(k__11835__auto___16264)].join('')),"- ")));
console.log(G__16242_16265);
} else {
}
} else {
}

var G__16266 = cljs.core.next(seq__16237_16258__$1);
var G__16267 = null;
var G__16268 = (0);
var G__16269 = (0);
seq__16237_16247 = G__16266;
chunk__16238_16248 = G__16267;
count__16239_16249 = G__16268;
i__16240_16250 = G__16269;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var query = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(env);
var ident = cljs.core.cst$kw$ident.cljs$core$IFn$_invoke$arity$1(params);
var eid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ident,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
if(cljs.core.truth_(eid)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3(db,eid,query)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$not_DASH_found], null);
}
}));
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$locales_DASH_via_DASH_refs,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16271_16283 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read locales-via-refs")));
console.log(G__16271_16283);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16272_16284 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16272_16284);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16273_16285 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16273_16285);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16274_16286 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16274_16286);
} else {
}

var seq__16275_16287 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16276_16288 = null;
var count__16277_16289 = (0);
var i__16278_16290 = (0);
while(true){
if((i__16278_16290 < count__16277_16289)){
var k__11835__auto___16291 = chunk__16276_16288.cljs$core$IIndexed$_nth$arity$2(null,i__16278_16290);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16291)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16279_16292 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16291.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16291.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16291.call(null,env))),[cljs.core.str(k__11835__auto___16291)].join('')),"- ")));
console.log(G__16279_16292);
} else {
}
} else {
}

var G__16293 = seq__16275_16287;
var G__16294 = chunk__16276_16288;
var G__16295 = count__16277_16289;
var G__16296 = (i__16278_16290 + (1));
seq__16275_16287 = G__16293;
chunk__16276_16288 = G__16294;
count__16277_16289 = G__16295;
i__16278_16290 = G__16296;
continue;
} else {
var temp__4425__auto___16297 = cljs.core.seq(seq__16275_16287);
if(temp__4425__auto___16297){
var seq__16275_16298__$1 = temp__4425__auto___16297;
if(cljs.core.chunked_seq_QMARK_(seq__16275_16298__$1)){
var c__6945__auto___16299 = cljs.core.chunk_first(seq__16275_16298__$1);
var G__16300 = cljs.core.chunk_rest(seq__16275_16298__$1);
var G__16301 = c__6945__auto___16299;
var G__16302 = cljs.core.count(c__6945__auto___16299);
var G__16303 = (0);
seq__16275_16287 = G__16300;
chunk__16276_16288 = G__16301;
count__16277_16289 = G__16302;
i__16278_16290 = G__16303;
continue;
} else {
var k__11835__auto___16304 = cljs.core.first(seq__16275_16298__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16304)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16280_16305 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16304.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16304.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16304.call(null,env))),[cljs.core.str(k__11835__auto___16304)].join('')),"- ")));
console.log(G__16280_16305);
} else {
}
} else {
}

var G__16306 = cljs.core.next(seq__16275_16298__$1);
var G__16307 = null;
var G__16308 = (0);
var G__16309 = (0);
seq__16275_16287 = G__16306;
chunk__16276_16288 = G__16307;
count__16277_16289 = G__16308;
i__16278_16290 = G__16309;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var query = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(env);
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(env);
var ref = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref], null));
var refs = (cljs.core.truth_(ref)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null):om_next_datascript_localisation_demo.datascript.db.locale_refs(db));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (db,query,parser,ref,refs){
return (function (p1__16270_SHARP_){
var G__16281 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ref,p1__16270_SHARP_);
var G__16282 = query;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__16281,G__16282) : parser.call(null,G__16281,G__16282));
});})(db,query,parser,ref,refs))
,refs)], null);
}));
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$locales,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16310_16320 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read locales")));
console.log(G__16310_16320);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16311_16321 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16311_16321);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16312_16322 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16312_16322);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16313_16323 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16313_16323);
} else {
}

var seq__16314_16324 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16315_16325 = null;
var count__16316_16326 = (0);
var i__16317_16327 = (0);
while(true){
if((i__16317_16327 < count__16316_16326)){
var k__11835__auto___16328 = chunk__16315_16325.cljs$core$IIndexed$_nth$arity$2(null,i__16317_16327);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16328)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16318_16329 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16328.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16328.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16328.call(null,env))),[cljs.core.str(k__11835__auto___16328)].join('')),"- ")));
console.log(G__16318_16329);
} else {
}
} else {
}

var G__16330 = seq__16314_16324;
var G__16331 = chunk__16315_16325;
var G__16332 = count__16316_16326;
var G__16333 = (i__16317_16327 + (1));
seq__16314_16324 = G__16330;
chunk__16315_16325 = G__16331;
count__16316_16326 = G__16332;
i__16317_16327 = G__16333;
continue;
} else {
var temp__4425__auto___16334 = cljs.core.seq(seq__16314_16324);
if(temp__4425__auto___16334){
var seq__16314_16335__$1 = temp__4425__auto___16334;
if(cljs.core.chunked_seq_QMARK_(seq__16314_16335__$1)){
var c__6945__auto___16336 = cljs.core.chunk_first(seq__16314_16335__$1);
var G__16337 = cljs.core.chunk_rest(seq__16314_16335__$1);
var G__16338 = c__6945__auto___16336;
var G__16339 = cljs.core.count(c__6945__auto___16336);
var G__16340 = (0);
seq__16314_16324 = G__16337;
chunk__16315_16325 = G__16338;
count__16316_16326 = G__16339;
i__16317_16327 = G__16340;
continue;
} else {
var k__11835__auto___16341 = cljs.core.first(seq__16314_16335__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16341)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16319_16342 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16341.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16341.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16341.call(null,env))),[cljs.core.str(k__11835__auto___16341)].join('')),"- ")));
console.log(G__16319_16342);
} else {
}
} else {
}

var G__16343 = cljs.core.next(seq__16314_16335__$1);
var G__16344 = null;
var G__16345 = (0);
var G__16346 = (0);
seq__16314_16324 = G__16343;
chunk__16315_16325 = G__16344;
count__16316_16326 = G__16345;
i__16317_16327 = G__16346;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var query = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(env);
var ref = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref], null));
if(cljs.core.truth_(ref)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om_next_datascript_localisation_demo.datascript.db.read_locale.cljs$core$IFn$_invoke$arity$2(db,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),query))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om_next_datascript_localisation_demo.datascript.db.read_locales.cljs$core$IFn$_invoke$arity$2(db,query)], null);
}
}));
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$locales_DASH_selector_DASH_props,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16347_16357 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read locales-selector-props")));
console.log(G__16347_16357);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16348_16358 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16348_16358);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16349_16359 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16349_16359);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16350_16360 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16350_16360);
} else {
}

var seq__16351_16361 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16352_16362 = null;
var count__16353_16363 = (0);
var i__16354_16364 = (0);
while(true){
if((i__16354_16364 < count__16353_16363)){
var k__11835__auto___16365 = chunk__16352_16362.cljs$core$IIndexed$_nth$arity$2(null,i__16354_16364);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16365)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16355_16366 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16365.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16365.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16365.call(null,env))),[cljs.core.str(k__11835__auto___16365)].join('')),"- ")));
console.log(G__16355_16366);
} else {
}
} else {
}

var G__16367 = seq__16351_16361;
var G__16368 = chunk__16352_16362;
var G__16369 = count__16353_16363;
var G__16370 = (i__16354_16364 + (1));
seq__16351_16361 = G__16367;
chunk__16352_16362 = G__16368;
count__16353_16363 = G__16369;
i__16354_16364 = G__16370;
continue;
} else {
var temp__4425__auto___16371 = cljs.core.seq(seq__16351_16361);
if(temp__4425__auto___16371){
var seq__16351_16372__$1 = temp__4425__auto___16371;
if(cljs.core.chunked_seq_QMARK_(seq__16351_16372__$1)){
var c__6945__auto___16373 = cljs.core.chunk_first(seq__16351_16372__$1);
var G__16374 = cljs.core.chunk_rest(seq__16351_16372__$1);
var G__16375 = c__6945__auto___16373;
var G__16376 = cljs.core.count(c__6945__auto___16373);
var G__16377 = (0);
seq__16351_16361 = G__16374;
chunk__16352_16362 = G__16375;
count__16353_16363 = G__16376;
i__16354_16364 = G__16377;
continue;
} else {
var k__11835__auto___16378 = cljs.core.first(seq__16351_16372__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16378)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16356_16379 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16378.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16378.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16378.call(null,env))),[cljs.core.str(k__11835__auto___16378)].join('')),"- ")));
console.log(G__16356_16379);
} else {
}
} else {
}

var G__16380 = cljs.core.next(seq__16351_16372__$1);
var G__16381 = null;
var G__16382 = (0);
var G__16383 = (0);
seq__16351_16361 = G__16380;
chunk__16352_16362 = G__16381;
count__16353_16363 = G__16382;
i__16354_16364 = G__16383;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}

var query = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(env);
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(env);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,query) : parser.call(null,env,query))], null);
}));
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$locales_DASH_table_DASH_props,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16384_16394 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read locales-table-props")));
console.log(G__16384_16394);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16385_16395 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16385_16395);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16386_16396 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16386_16396);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16387_16397 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16387_16397);
} else {
}

var seq__16388_16398 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16389_16399 = null;
var count__16390_16400 = (0);
var i__16391_16401 = (0);
while(true){
if((i__16391_16401 < count__16390_16400)){
var k__11835__auto___16402 = chunk__16389_16399.cljs$core$IIndexed$_nth$arity$2(null,i__16391_16401);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16402)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16392_16403 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16402.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16402.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16402.call(null,env))),[cljs.core.str(k__11835__auto___16402)].join('')),"- ")));
console.log(G__16392_16403);
} else {
}
} else {
}

var G__16404 = seq__16388_16398;
var G__16405 = chunk__16389_16399;
var G__16406 = count__16390_16400;
var G__16407 = (i__16391_16401 + (1));
seq__16388_16398 = G__16404;
chunk__16389_16399 = G__16405;
count__16390_16400 = G__16406;
i__16391_16401 = G__16407;
continue;
} else {
var temp__4425__auto___16408 = cljs.core.seq(seq__16388_16398);
if(temp__4425__auto___16408){
var seq__16388_16409__$1 = temp__4425__auto___16408;
if(cljs.core.chunked_seq_QMARK_(seq__16388_16409__$1)){
var c__6945__auto___16410 = cljs.core.chunk_first(seq__16388_16409__$1);
var G__16411 = cljs.core.chunk_rest(seq__16388_16409__$1);
var G__16412 = c__6945__auto___16410;
var G__16413 = cljs.core.count(c__6945__auto___16410);
var G__16414 = (0);
seq__16388_16398 = G__16411;
chunk__16389_16399 = G__16412;
count__16390_16400 = G__16413;
i__16391_16401 = G__16414;
continue;
} else {
var k__11835__auto___16415 = cljs.core.first(seq__16388_16409__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16415)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16393_16416 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16415.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16415.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16415.call(null,env))),[cljs.core.str(k__11835__auto___16415)].join('')),"- ")));
console.log(G__16393_16416);
} else {
}
} else {
}

var G__16417 = cljs.core.next(seq__16388_16409__$1);
var G__16418 = null;
var G__16419 = (0);
var G__16420 = (0);
seq__16388_16398 = G__16417;
chunk__16389_16399 = G__16418;
count__16390_16400 = G__16419;
i__16391_16401 = G__16420;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}

var query = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(env);
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(env);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,query) : parser.call(null,env,query))], null);
}));
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$localised_DASH_string_DASH_table_DASH_props,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16421_16431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read localised-string-table-props")));
console.log(G__16421_16431);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16422_16432 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16422_16432);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16423_16433 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16423_16433);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16424_16434 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16424_16434);
} else {
}

var seq__16425_16435 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16426_16436 = null;
var count__16427_16437 = (0);
var i__16428_16438 = (0);
while(true){
if((i__16428_16438 < count__16427_16437)){
var k__11835__auto___16439 = chunk__16426_16436.cljs$core$IIndexed$_nth$arity$2(null,i__16428_16438);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16439)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16429_16440 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16439.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16439.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16439.call(null,env))),[cljs.core.str(k__11835__auto___16439)].join('')),"- ")));
console.log(G__16429_16440);
} else {
}
} else {
}

var G__16441 = seq__16425_16435;
var G__16442 = chunk__16426_16436;
var G__16443 = count__16427_16437;
var G__16444 = (i__16428_16438 + (1));
seq__16425_16435 = G__16441;
chunk__16426_16436 = G__16442;
count__16427_16437 = G__16443;
i__16428_16438 = G__16444;
continue;
} else {
var temp__4425__auto___16445 = cljs.core.seq(seq__16425_16435);
if(temp__4425__auto___16445){
var seq__16425_16446__$1 = temp__4425__auto___16445;
if(cljs.core.chunked_seq_QMARK_(seq__16425_16446__$1)){
var c__6945__auto___16447 = cljs.core.chunk_first(seq__16425_16446__$1);
var G__16448 = cljs.core.chunk_rest(seq__16425_16446__$1);
var G__16449 = c__6945__auto___16447;
var G__16450 = cljs.core.count(c__6945__auto___16447);
var G__16451 = (0);
seq__16425_16435 = G__16448;
chunk__16426_16436 = G__16449;
count__16427_16437 = G__16450;
i__16428_16438 = G__16451;
continue;
} else {
var k__11835__auto___16452 = cljs.core.first(seq__16425_16446__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16452)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16430_16453 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16452.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16452.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16452.call(null,env))),[cljs.core.str(k__11835__auto___16452)].join('')),"- ")));
console.log(G__16430_16453);
} else {
}
} else {
}

var G__16454 = cljs.core.next(seq__16425_16446__$1);
var G__16455 = null;
var G__16456 = (0);
var G__16457 = (0);
seq__16425_16435 = G__16454;
chunk__16426_16436 = G__16455;
count__16427_16437 = G__16456;
i__16428_16438 = G__16457;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}

var query = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(env);
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(env);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,query) : parser.call(null,env,query))], null);
}));
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$app$localised_SLASH_strings,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16458_16468 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read app.localised/strings")));
console.log(G__16458_16468);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16459_16469 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16459_16469);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16460_16470 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16460_16470);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16461_16471 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16461_16471);
} else {
}

var seq__16462_16472 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16463_16473 = null;
var count__16464_16474 = (0);
var i__16465_16475 = (0);
while(true){
if((i__16465_16475 < count__16464_16474)){
var k__11835__auto___16476 = chunk__16463_16473.cljs$core$IIndexed$_nth$arity$2(null,i__16465_16475);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16476)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16466_16477 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16476.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16476.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16476.call(null,env))),[cljs.core.str(k__11835__auto___16476)].join('')),"- ")));
console.log(G__16466_16477);
} else {
}
} else {
}

var G__16478 = seq__16462_16472;
var G__16479 = chunk__16463_16473;
var G__16480 = count__16464_16474;
var G__16481 = (i__16465_16475 + (1));
seq__16462_16472 = G__16478;
chunk__16463_16473 = G__16479;
count__16464_16474 = G__16480;
i__16465_16475 = G__16481;
continue;
} else {
var temp__4425__auto___16482 = cljs.core.seq(seq__16462_16472);
if(temp__4425__auto___16482){
var seq__16462_16483__$1 = temp__4425__auto___16482;
if(cljs.core.chunked_seq_QMARK_(seq__16462_16483__$1)){
var c__6945__auto___16484 = cljs.core.chunk_first(seq__16462_16483__$1);
var G__16485 = cljs.core.chunk_rest(seq__16462_16483__$1);
var G__16486 = c__6945__auto___16484;
var G__16487 = cljs.core.count(c__6945__auto___16484);
var G__16488 = (0);
seq__16462_16472 = G__16485;
chunk__16463_16473 = G__16486;
count__16464_16474 = G__16487;
i__16465_16475 = G__16488;
continue;
} else {
var k__11835__auto___16489 = cljs.core.first(seq__16462_16483__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16489)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16467_16490 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16489.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16489.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16489.call(null,env))),[cljs.core.str(k__11835__auto___16489)].join('')),"- ")));
console.log(G__16467_16490);
} else {
}
} else {
}

var G__16491 = cljs.core.next(seq__16462_16483__$1);
var G__16492 = null;
var G__16493 = (0);
var G__16494 = (0);
seq__16462_16472 = G__16491;
chunk__16463_16473 = G__16492;
count__16464_16474 = G__16493;
i__16465_16475 = G__16494;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var query = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(env);
var sid = cljs.core.first(query);
var string_ids = cljs.core.rest(query);
var results = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not(sid)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,results], null);
} else {
var G__16495 = cljs.core.first(string_ids);
var G__16496 = cljs.core.rest(string_ids);
var G__16497 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(results,sid,om_next_datascript_localisation_demo.datascript.db.app_localise_string(db,sid));
sid = G__16495;
string_ids = G__16496;
results = G__16497;
continue;
}
break;
}
}));
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$localised_SLASH_string,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16498_16509 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read localised/string")));
console.log(G__16498_16509);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16499_16510 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16499_16510);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16500_16511 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16500_16511);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16501_16512 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16501_16512);
} else {
}

var seq__16502_16513 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16503_16514 = null;
var count__16504_16515 = (0);
var i__16505_16516 = (0);
while(true){
if((i__16505_16516 < count__16504_16515)){
var k__11835__auto___16517 = chunk__16503_16514.cljs$core$IIndexed$_nth$arity$2(null,i__16505_16516);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16517)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16506_16518 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16517.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16517.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16517.call(null,env))),[cljs.core.str(k__11835__auto___16517)].join('')),"- ")));
console.log(G__16506_16518);
} else {
}
} else {
}

var G__16519 = seq__16502_16513;
var G__16520 = chunk__16503_16514;
var G__16521 = count__16504_16515;
var G__16522 = (i__16505_16516 + (1));
seq__16502_16513 = G__16519;
chunk__16503_16514 = G__16520;
count__16504_16515 = G__16521;
i__16505_16516 = G__16522;
continue;
} else {
var temp__4425__auto___16523 = cljs.core.seq(seq__16502_16513);
if(temp__4425__auto___16523){
var seq__16502_16524__$1 = temp__4425__auto___16523;
if(cljs.core.chunked_seq_QMARK_(seq__16502_16524__$1)){
var c__6945__auto___16525 = cljs.core.chunk_first(seq__16502_16524__$1);
var G__16526 = cljs.core.chunk_rest(seq__16502_16524__$1);
var G__16527 = c__6945__auto___16525;
var G__16528 = cljs.core.count(c__6945__auto___16525);
var G__16529 = (0);
seq__16502_16513 = G__16526;
chunk__16503_16514 = G__16527;
count__16504_16515 = G__16528;
i__16505_16516 = G__16529;
continue;
} else {
var k__11835__auto___16530 = cljs.core.first(seq__16502_16524__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16530)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16507_16531 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16530.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16530.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16530.call(null,env))),[cljs.core.str(k__11835__auto___16530)].join('')),"- ")));
console.log(G__16507_16531);
} else {
}
} else {
}

var G__16532 = cljs.core.next(seq__16502_16524__$1);
var G__16533 = null;
var G__16534 = (0);
var G__16535 = (0);
seq__16502_16513 = G__16532;
chunk__16503_16514 = G__16533;
count__16504_16515 = G__16534;
i__16505_16516 = G__16535;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var query = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(env);
var ref = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref,(1)], null));
var pident = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ident,(1)], null));
var ident = (function (){var or__6142__auto__ = ref;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return pident;
}
})();
var vec__16508 = om_next_datascript_localisation_demo.utils.ident.ident__GT_string_id_and_locale(ident);
var string_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16508,(0),null);
var locale_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16508,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$core$IFn$_invoke$arity$4(db,string_id,locale_id,query)], null);
}));
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$localised_DASH_strings,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16536_16546 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read localised-strings")));
console.log(G__16536_16546);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16537_16547 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16537_16547);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16538_16548 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16538_16548);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16539_16549 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16539_16549);
} else {
}

var seq__16540_16550 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16541_16551 = null;
var count__16542_16552 = (0);
var i__16543_16553 = (0);
while(true){
if((i__16543_16553 < count__16542_16552)){
var k__11835__auto___16554 = chunk__16541_16551.cljs$core$IIndexed$_nth$arity$2(null,i__16543_16553);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16554)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16544_16555 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16554.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16554.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16554.call(null,env))),[cljs.core.str(k__11835__auto___16554)].join('')),"- ")));
console.log(G__16544_16555);
} else {
}
} else {
}

var G__16556 = seq__16540_16550;
var G__16557 = chunk__16541_16551;
var G__16558 = count__16542_16552;
var G__16559 = (i__16543_16553 + (1));
seq__16540_16550 = G__16556;
chunk__16541_16551 = G__16557;
count__16542_16552 = G__16558;
i__16543_16553 = G__16559;
continue;
} else {
var temp__4425__auto___16560 = cljs.core.seq(seq__16540_16550);
if(temp__4425__auto___16560){
var seq__16540_16561__$1 = temp__4425__auto___16560;
if(cljs.core.chunked_seq_QMARK_(seq__16540_16561__$1)){
var c__6945__auto___16562 = cljs.core.chunk_first(seq__16540_16561__$1);
var G__16563 = cljs.core.chunk_rest(seq__16540_16561__$1);
var G__16564 = c__6945__auto___16562;
var G__16565 = cljs.core.count(c__6945__auto___16562);
var G__16566 = (0);
seq__16540_16550 = G__16563;
chunk__16541_16551 = G__16564;
count__16542_16552 = G__16565;
i__16543_16553 = G__16566;
continue;
} else {
var k__11835__auto___16567 = cljs.core.first(seq__16540_16561__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16567)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16545_16568 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16567.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16567.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16567.call(null,env))),[cljs.core.str(k__11835__auto___16567)].join('')),"- ")));
console.log(G__16545_16568);
} else {
}
} else {
}

var G__16569 = cljs.core.next(seq__16540_16561__$1);
var G__16570 = null;
var G__16571 = (0);
var G__16572 = (0);
seq__16540_16550 = G__16569;
chunk__16541_16551 = G__16570;
count__16542_16552 = G__16571;
i__16543_16553 = G__16572;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var query = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(env);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om_next_datascript_localisation_demo.datascript.db.read_localised_strings.cljs$core$IFn$_invoke$arity$2(db,query)], null);
}));
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$db_SLASH_pull,(function (env,key,params){
if(cljs.core.truth_(cljs.core.cst$kw$ident.cljs$core$IFn$_invoke$arity$1(params))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$kw$ident,cljs.core.cst$sym$params)], 0)))].join('')));
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16573_16583 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read db/pull")));
console.log(G__16573_16583);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16574_16584 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16574_16584);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16575_16585 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16575_16585);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16576_16586 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16576_16586);
} else {
}

var seq__16577_16587 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16578_16588 = null;
var count__16579_16589 = (0);
var i__16580_16590 = (0);
while(true){
if((i__16580_16590 < count__16579_16589)){
var k__11835__auto___16591 = chunk__16578_16588.cljs$core$IIndexed$_nth$arity$2(null,i__16580_16590);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16591)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16581_16592 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16591.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16591.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16591.call(null,env))),[cljs.core.str(k__11835__auto___16591)].join('')),"- ")));
console.log(G__16581_16592);
} else {
}
} else {
}

var G__16593 = seq__16577_16587;
var G__16594 = chunk__16578_16588;
var G__16595 = count__16579_16589;
var G__16596 = (i__16580_16590 + (1));
seq__16577_16587 = G__16593;
chunk__16578_16588 = G__16594;
count__16579_16589 = G__16595;
i__16580_16590 = G__16596;
continue;
} else {
var temp__4425__auto___16597 = cljs.core.seq(seq__16577_16587);
if(temp__4425__auto___16597){
var seq__16577_16598__$1 = temp__4425__auto___16597;
if(cljs.core.chunked_seq_QMARK_(seq__16577_16598__$1)){
var c__6945__auto___16599 = cljs.core.chunk_first(seq__16577_16598__$1);
var G__16600 = cljs.core.chunk_rest(seq__16577_16598__$1);
var G__16601 = c__6945__auto___16599;
var G__16602 = cljs.core.count(c__6945__auto___16599);
var G__16603 = (0);
seq__16577_16587 = G__16600;
chunk__16578_16588 = G__16601;
count__16579_16589 = G__16602;
i__16580_16590 = G__16603;
continue;
} else {
var k__11835__auto___16604 = cljs.core.first(seq__16577_16598__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16604)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16582_16605 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16604.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16604.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16604.call(null,env))),[cljs.core.str(k__11835__auto___16604)].join('')),"- ")));
console.log(G__16582_16605);
} else {
}
} else {
}

var G__16606 = cljs.core.next(seq__16577_16598__$1);
var G__16607 = null;
var G__16608 = (0);
var G__16609 = (0);
seq__16577_16587 = G__16606;
chunk__16578_16588 = G__16607;
count__16579_16589 = G__16608;
i__16580_16590 = G__16609;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var query = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(env);
var ident = cljs.core.cst$kw$ident.cljs$core$IFn$_invoke$arity$1(params);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om_next_datascript_localisation_demo.datascript.db.db_pull.cljs$core$IFn$_invoke$arity$3(db,ident,query)], null);
}));
if(typeof om_next_datascript_localisation_demo.datascript.parser.mutate !== 'undefined'){
} else {
om_next_datascript_localisation_demo.datascript.parser.mutate = (function (){var method_table__7055__auto__ = (function (){var G__16610 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16610) : cljs.core.atom.call(null,G__16610));
})();
var prefer_table__7056__auto__ = (function (){var G__16611 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16611) : cljs.core.atom.call(null,G__16611));
})();
var method_cache__7057__auto__ = (function (){var G__16612 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16612) : cljs.core.atom.call(null,G__16612));
})();
var cached_hierarchy__7058__auto__ = (function (){var G__16613 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16613) : cljs.core.atom.call(null,G__16613));
})();
var hierarchy__7059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("om-next-datascript-localisation-demo.datascript.parser","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__7059__auto__,method_table__7055__auto__,prefer_table__7056__auto__,method_cache__7057__auto__,cached_hierarchy__7058__auto__));
})();
}
om_next_datascript_localisation_demo.datascript.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16614_16624 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"-** mutate default")));
console.log(G__16614_16624);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16615_16625 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16615_16625);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16616_16626 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16616_16626);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16617_16627 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16617_16627);
} else {
}

var seq__16618_16628 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16619_16629 = null;
var count__16620_16630 = (0);
var i__16621_16631 = (0);
while(true){
if((i__16621_16631 < count__16620_16630)){
var k__11835__auto___16632 = chunk__16619_16629.cljs$core$IIndexed$_nth$arity$2(null,i__16621_16631);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16632)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16622_16633 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16632.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16632.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16632.call(null,env))),[cljs.core.str(k__11835__auto___16632)].join('')),"- ")));
console.log(G__16622_16633);
} else {
}
} else {
}

var G__16634 = seq__16618_16628;
var G__16635 = chunk__16619_16629;
var G__16636 = count__16620_16630;
var G__16637 = (i__16621_16631 + (1));
seq__16618_16628 = G__16634;
chunk__16619_16629 = G__16635;
count__16620_16630 = G__16636;
i__16621_16631 = G__16637;
continue;
} else {
var temp__4425__auto___16638 = cljs.core.seq(seq__16618_16628);
if(temp__4425__auto___16638){
var seq__16618_16639__$1 = temp__4425__auto___16638;
if(cljs.core.chunked_seq_QMARK_(seq__16618_16639__$1)){
var c__6945__auto___16640 = cljs.core.chunk_first(seq__16618_16639__$1);
var G__16641 = cljs.core.chunk_rest(seq__16618_16639__$1);
var G__16642 = c__6945__auto___16640;
var G__16643 = cljs.core.count(c__6945__auto___16640);
var G__16644 = (0);
seq__16618_16628 = G__16641;
chunk__16619_16629 = G__16642;
count__16620_16630 = G__16643;
i__16621_16631 = G__16644;
continue;
} else {
var k__11835__auto___16645 = cljs.core.first(seq__16618_16639__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16645)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16623_16646 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16645.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16645.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16645.call(null,env))),[cljs.core.str(k__11835__auto___16645)].join('')),"- ")));
console.log(G__16623_16646);
} else {
}
} else {
}

var G__16647 = cljs.core.next(seq__16618_16639__$1);
var G__16648 = null;
var G__16649 = (0);
var G__16650 = (0);
seq__16618_16628 = G__16647;
chunk__16619_16629 = G__16648;
count__16620_16630 = G__16649;
i__16621_16631 = G__16650;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,null], null);
}));
om_next_datascript_localisation_demo.datascript.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$app$locale_SLASH_set,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16651_16662 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate app.locale/set")));
console.log(G__16651_16662);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16652_16663 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16652_16663);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16653_16664 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16653_16664);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16654_16665 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16654_16665);
} else {
}

var seq__16655_16666 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16656_16667 = null;
var count__16657_16668 = (0);
var i__16658_16669 = (0);
while(true){
if((i__16658_16669 < count__16657_16668)){
var k__11835__auto___16670 = chunk__16656_16667.cljs$core$IIndexed$_nth$arity$2(null,i__16658_16669);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16670)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16659_16671 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16670.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16670.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16670.call(null,env))),[cljs.core.str(k__11835__auto___16670)].join('')),"- ")));
console.log(G__16659_16671);
} else {
}
} else {
}

var G__16672 = seq__16655_16666;
var G__16673 = chunk__16656_16667;
var G__16674 = count__16657_16668;
var G__16675 = (i__16658_16669 + (1));
seq__16655_16666 = G__16672;
chunk__16656_16667 = G__16673;
count__16657_16668 = G__16674;
i__16658_16669 = G__16675;
continue;
} else {
var temp__4425__auto___16676 = cljs.core.seq(seq__16655_16666);
if(temp__4425__auto___16676){
var seq__16655_16677__$1 = temp__4425__auto___16676;
if(cljs.core.chunked_seq_QMARK_(seq__16655_16677__$1)){
var c__6945__auto___16678 = cljs.core.chunk_first(seq__16655_16677__$1);
var G__16679 = cljs.core.chunk_rest(seq__16655_16677__$1);
var G__16680 = c__6945__auto___16678;
var G__16681 = cljs.core.count(c__6945__auto___16678);
var G__16682 = (0);
seq__16655_16666 = G__16679;
chunk__16656_16667 = G__16680;
count__16657_16668 = G__16681;
i__16658_16669 = G__16682;
continue;
} else {
var k__11835__auto___16683 = cljs.core.first(seq__16655_16677__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16683)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16660_16684 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16683.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16683.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16683.call(null,env))),[cljs.core.str(k__11835__auto___16683)].join('')),"- ")));
console.log(G__16660_16684);
} else {
}
} else {
}

var G__16685 = cljs.core.next(seq__16655_16677__$1);
var G__16686 = null;
var G__16687 = (0);
var G__16688 = (0);
seq__16655_16666 = G__16685;
chunk__16656_16667 = G__16686;
count__16657_16668 = G__16687;
i__16658_16669 = G__16688;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var tx = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_id,om_next_datascript_localisation_demo.datascript.db.app_locale_entity(db),cljs.core.cst$kw$app_SLASH_locale,params], null);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16661_16689 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,tx)));
console.log(G__16661_16689);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$locale], null)], null),cljs.core.cst$kw$action,((function (db,tx){
return (function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null));
});})(db,tx))
], null);
}));
om_next_datascript_localisation_demo.datascript.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$locale_SLASH_create,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16690_16701 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate locale/create")));
console.log(G__16690_16701);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16691_16702 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16691_16702);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16692_16703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16692_16703);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16693_16704 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16693_16704);
} else {
}

var seq__16694_16705 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16695_16706 = null;
var count__16696_16707 = (0);
var i__16697_16708 = (0);
while(true){
if((i__16697_16708 < count__16696_16707)){
var k__11835__auto___16709 = chunk__16695_16706.cljs$core$IIndexed$_nth$arity$2(null,i__16697_16708);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16709)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16698_16710 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16709.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16709.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16709.call(null,env))),[cljs.core.str(k__11835__auto___16709)].join('')),"- ")));
console.log(G__16698_16710);
} else {
}
} else {
}

var G__16711 = seq__16694_16705;
var G__16712 = chunk__16695_16706;
var G__16713 = count__16696_16707;
var G__16714 = (i__16697_16708 + (1));
seq__16694_16705 = G__16711;
chunk__16695_16706 = G__16712;
count__16696_16707 = G__16713;
i__16697_16708 = G__16714;
continue;
} else {
var temp__4425__auto___16715 = cljs.core.seq(seq__16694_16705);
if(temp__4425__auto___16715){
var seq__16694_16716__$1 = temp__4425__auto___16715;
if(cljs.core.chunked_seq_QMARK_(seq__16694_16716__$1)){
var c__6945__auto___16717 = cljs.core.chunk_first(seq__16694_16716__$1);
var G__16718 = cljs.core.chunk_rest(seq__16694_16716__$1);
var G__16719 = c__6945__auto___16717;
var G__16720 = cljs.core.count(c__6945__auto___16717);
var G__16721 = (0);
seq__16694_16705 = G__16718;
chunk__16695_16706 = G__16719;
count__16696_16707 = G__16720;
i__16697_16708 = G__16721;
continue;
} else {
var k__11835__auto___16722 = cljs.core.first(seq__16694_16716__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16722)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16699_16723 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16722.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16722.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16722.call(null,env))),[cljs.core.str(k__11835__auto___16722)].join('')),"- ")));
console.log(G__16699_16723);
} else {
}
} else {
}

var G__16724 = cljs.core.next(seq__16694_16716__$1);
var G__16725 = null;
var G__16726 = (0);
var G__16727 = (0);
seq__16694_16705 = G__16724;
chunk__16695_16706 = G__16725;
count__16696_16707 = G__16726;
i__16697_16708 = G__16727;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var code = om_next_datascript_localisation_demo.datascript.db.unique_locale_code(db);
var tx = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$db_SLASH_id,(-1),cljs.core.cst$kw$locale_SLASH_code,code,cljs.core.cst$kw$locale_SLASH_enum,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("locale",code),cljs.core.cst$kw$value,"Edit me"], null)], null);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16700_16728 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,tx),"mutate locale/create tx:")));
console.log(G__16700_16728);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locales], null)], null),cljs.core.cst$kw$action,((function (db,code,tx){
return (function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db,tx);
});})(db,code,tx))
], null);
}));
om_next_datascript_localisation_demo.datascript.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$locale_SLASH_delete,(function (env,key,params){
if(cljs.core.truth_(cljs.core.cst$kw$ids.cljs$core$IFn$_invoke$arity$1(params))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$kw$ids,cljs.core.cst$sym$params)], 0)))].join('')));
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16729_16739 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate locale/delete")));
console.log(G__16729_16739);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16730_16740 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16730_16740);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16731_16741 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16731_16741);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16732_16742 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16732_16742);
} else {
}

var seq__16733_16743 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16734_16744 = null;
var count__16735_16745 = (0);
var i__16736_16746 = (0);
while(true){
if((i__16736_16746 < count__16735_16745)){
var k__11835__auto___16747 = chunk__16734_16744.cljs$core$IIndexed$_nth$arity$2(null,i__16736_16746);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16747)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16737_16748 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16747.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16747.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16747.call(null,env))),[cljs.core.str(k__11835__auto___16747)].join('')),"- ")));
console.log(G__16737_16748);
} else {
}
} else {
}

var G__16749 = seq__16733_16743;
var G__16750 = chunk__16734_16744;
var G__16751 = count__16735_16745;
var G__16752 = (i__16736_16746 + (1));
seq__16733_16743 = G__16749;
chunk__16734_16744 = G__16750;
count__16735_16745 = G__16751;
i__16736_16746 = G__16752;
continue;
} else {
var temp__4425__auto___16753 = cljs.core.seq(seq__16733_16743);
if(temp__4425__auto___16753){
var seq__16733_16754__$1 = temp__4425__auto___16753;
if(cljs.core.chunked_seq_QMARK_(seq__16733_16754__$1)){
var c__6945__auto___16755 = cljs.core.chunk_first(seq__16733_16754__$1);
var G__16756 = cljs.core.chunk_rest(seq__16733_16754__$1);
var G__16757 = c__6945__auto___16755;
var G__16758 = cljs.core.count(c__6945__auto___16755);
var G__16759 = (0);
seq__16733_16743 = G__16756;
chunk__16734_16744 = G__16757;
count__16735_16745 = G__16758;
i__16736_16746 = G__16759;
continue;
} else {
var k__11835__auto___16760 = cljs.core.first(seq__16733_16754__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16760)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16738_16761 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16760.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16760.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16760.call(null,env))),[cljs.core.str(k__11835__auto___16760)].join('')),"- ")));
console.log(G__16738_16761);
} else {
}
} else {
}

var G__16762 = cljs.core.next(seq__16733_16754__$1);
var G__16763 = null;
var G__16764 = (0);
var G__16765 = (0);
seq__16733_16743 = G__16762;
chunk__16734_16744 = G__16763;
count__16735_16745 = G__16764;
i__16736_16746 = G__16765;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var ids = cljs.core.cst$kw$ids.cljs$core$IFn$_invoke$arity$1(params);
var tx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (db,ids){
return (function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$fn_SLASH_retractEntity,id], null);
});})(db,ids))
,ids);
var new_locale = om_next_datascript_localisation_demo.datascript.db.app_locale_tx_after_deleting_locales(db,ids);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (db,ids,tx,new_locale){
return (function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tx,new_locale));
});})(db,ids,tx,new_locale))
], null);
}));
om_next_datascript_localisation_demo.datascript.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$localised_DASH_string_SLASH_create,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16766_16776 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate localised-string/create")));
console.log(G__16766_16776);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16767_16777 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16767_16777);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16768_16778 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16768_16778);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16769_16779 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16769_16779);
} else {
}

var seq__16770_16780 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16771_16781 = null;
var count__16772_16782 = (0);
var i__16773_16783 = (0);
while(true){
if((i__16773_16783 < count__16772_16782)){
var k__11835__auto___16784 = chunk__16771_16781.cljs$core$IIndexed$_nth$arity$2(null,i__16773_16783);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16784)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16774_16785 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16784.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16784.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16784.call(null,env))),[cljs.core.str(k__11835__auto___16784)].join('')),"- ")));
console.log(G__16774_16785);
} else {
}
} else {
}

var G__16786 = seq__16770_16780;
var G__16787 = chunk__16771_16781;
var G__16788 = count__16772_16782;
var G__16789 = (i__16773_16783 + (1));
seq__16770_16780 = G__16786;
chunk__16771_16781 = G__16787;
count__16772_16782 = G__16788;
i__16773_16783 = G__16789;
continue;
} else {
var temp__4425__auto___16790 = cljs.core.seq(seq__16770_16780);
if(temp__4425__auto___16790){
var seq__16770_16791__$1 = temp__4425__auto___16790;
if(cljs.core.chunked_seq_QMARK_(seq__16770_16791__$1)){
var c__6945__auto___16792 = cljs.core.chunk_first(seq__16770_16791__$1);
var G__16793 = cljs.core.chunk_rest(seq__16770_16791__$1);
var G__16794 = c__6945__auto___16792;
var G__16795 = cljs.core.count(c__6945__auto___16792);
var G__16796 = (0);
seq__16770_16780 = G__16793;
chunk__16771_16781 = G__16794;
count__16772_16782 = G__16795;
i__16773_16783 = G__16796;
continue;
} else {
var k__11835__auto___16797 = cljs.core.first(seq__16770_16791__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16797)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16775_16798 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16797.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16797.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16797.call(null,env))),[cljs.core.str(k__11835__auto___16797)].join('')),"- ")));
console.log(G__16775_16798);
} else {
}
} else {
}

var G__16799 = cljs.core.next(seq__16770_16791__$1);
var G__16800 = null;
var G__16801 = (0);
var G__16802 = (0);
seq__16770_16780 = G__16799;
chunk__16771_16781 = G__16800;
count__16772_16782 = G__16801;
i__16773_16783 = G__16802;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var ident = om_next_datascript_localisation_demo.datascript.db.unique_localised_string_ident(db);
var tx = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_id,(-1),cljs.core.cst$kw$string_SLASH_ident,ident,cljs.core.cst$kw$value,"Edit me"], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_DASH_strings], null)], null),cljs.core.cst$kw$action,((function (db,ident,tx){
return (function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db,tx);
});})(db,ident,tx))
], null);
}));
om_next_datascript_localisation_demo.datascript.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$localised_DASH_string_SLASH_set,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16803_16815 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate localised-string/set")));
console.log(G__16803_16815);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16804_16816 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16804_16816);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16805_16817 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16805_16817);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16806_16818 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16806_16818);
} else {
}

var seq__16807_16819 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16808_16820 = null;
var count__16809_16821 = (0);
var i__16810_16822 = (0);
while(true){
if((i__16810_16822 < count__16809_16821)){
var k__11835__auto___16823 = chunk__16808_16820.cljs$core$IIndexed$_nth$arity$2(null,i__16810_16822);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16823)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16811_16824 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16823.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16823.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16823.call(null,env))),[cljs.core.str(k__11835__auto___16823)].join('')),"- ")));
console.log(G__16811_16824);
} else {
}
} else {
}

var G__16825 = seq__16807_16819;
var G__16826 = chunk__16808_16820;
var G__16827 = count__16809_16821;
var G__16828 = (i__16810_16822 + (1));
seq__16807_16819 = G__16825;
chunk__16808_16820 = G__16826;
count__16809_16821 = G__16827;
i__16810_16822 = G__16828;
continue;
} else {
var temp__4425__auto___16829 = cljs.core.seq(seq__16807_16819);
if(temp__4425__auto___16829){
var seq__16807_16830__$1 = temp__4425__auto___16829;
if(cljs.core.chunked_seq_QMARK_(seq__16807_16830__$1)){
var c__6945__auto___16831 = cljs.core.chunk_first(seq__16807_16830__$1);
var G__16832 = cljs.core.chunk_rest(seq__16807_16830__$1);
var G__16833 = c__6945__auto___16831;
var G__16834 = cljs.core.count(c__6945__auto___16831);
var G__16835 = (0);
seq__16807_16819 = G__16832;
chunk__16808_16820 = G__16833;
count__16809_16821 = G__16834;
i__16810_16822 = G__16835;
continue;
} else {
var k__11835__auto___16836 = cljs.core.first(seq__16807_16830__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16836)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16812_16837 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16836.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16836.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16836.call(null,env))),[cljs.core.str(k__11835__auto___16836)].join('')),"- ")));
console.log(G__16812_16837);
} else {
}
} else {
}

var G__16838 = cljs.core.next(seq__16807_16830__$1);
var G__16839 = null;
var G__16840 = (0);
var G__16841 = (0);
seq__16807_16819 = G__16838;
chunk__16808_16820 = G__16839;
count__16809_16821 = G__16840;
i__16810_16822 = G__16841;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var map__16813 = params;
var map__16813__$1 = ((((!((map__16813 == null)))?((((map__16813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16813):map__16813);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16813__$1,cljs.core.cst$kw$string_SLASH_ident);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16813__$1,cljs.core.cst$kw$locale_SLASH_id);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16813__$1,cljs.core.cst$kw$text);
var tx = om_next_datascript_localisation_demo.datascript.db.make_edited_string_tx(db,ident,id,text);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_DASH_strings], null)], null),cljs.core.cst$kw$action,((function (db,map__16813,map__16813__$1,ident,id,text,tx){
return (function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db,tx);
});})(db,map__16813,map__16813__$1,ident,id,text,tx))
], null);
}));
om_next_datascript_localisation_demo.datascript.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$localised_SLASH_create,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16842_16854 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate localised/create")));
console.log(G__16842_16854);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16843_16855 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16843_16855);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16844_16856 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16844_16856);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16845_16857 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16845_16857);
} else {
}

var seq__16846_16858 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16847_16859 = null;
var count__16848_16860 = (0);
var i__16849_16861 = (0);
while(true){
if((i__16849_16861 < count__16848_16860)){
var k__11835__auto___16862 = chunk__16847_16859.cljs$core$IIndexed$_nth$arity$2(null,i__16849_16861);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16862)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16850_16863 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16862.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16862.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16862.call(null,env))),[cljs.core.str(k__11835__auto___16862)].join('')),"- ")));
console.log(G__16850_16863);
} else {
}
} else {
}

var G__16864 = seq__16846_16858;
var G__16865 = chunk__16847_16859;
var G__16866 = count__16848_16860;
var G__16867 = (i__16849_16861 + (1));
seq__16846_16858 = G__16864;
chunk__16847_16859 = G__16865;
count__16848_16860 = G__16866;
i__16849_16861 = G__16867;
continue;
} else {
var temp__4425__auto___16868 = cljs.core.seq(seq__16846_16858);
if(temp__4425__auto___16868){
var seq__16846_16869__$1 = temp__4425__auto___16868;
if(cljs.core.chunked_seq_QMARK_(seq__16846_16869__$1)){
var c__6945__auto___16870 = cljs.core.chunk_first(seq__16846_16869__$1);
var G__16871 = cljs.core.chunk_rest(seq__16846_16869__$1);
var G__16872 = c__6945__auto___16870;
var G__16873 = cljs.core.count(c__6945__auto___16870);
var G__16874 = (0);
seq__16846_16858 = G__16871;
chunk__16847_16859 = G__16872;
count__16848_16860 = G__16873;
i__16849_16861 = G__16874;
continue;
} else {
var k__11835__auto___16875 = cljs.core.first(seq__16846_16869__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16875)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16851_16876 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16875.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16875.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16875.call(null,env))),[cljs.core.str(k__11835__auto___16875)].join('')),"- ")));
console.log(G__16851_16876);
} else {
}
} else {
}

var G__16877 = cljs.core.next(seq__16846_16869__$1);
var G__16878 = null;
var G__16879 = (0);
var G__16880 = (0);
seq__16846_16858 = G__16877;
chunk__16847_16859 = G__16878;
count__16848_16860 = G__16879;
i__16849_16861 = G__16880;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var map__16852 = params;
var map__16852__$1 = ((((!((map__16852 == null)))?((((map__16852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16852):map__16852);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852__$1,cljs.core.cst$kw$db_SLASH_id);
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852__$1,cljs.core.cst$kw$locale);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852__$1,cljs.core.cst$kw$value);
var tx = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,(-1),cljs.core.cst$kw$localised_SLASH_locale,locale], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,(-1),cljs.core.cst$kw$value,value], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,id,cljs.core.cst$kw$localised,(-1)], null)], null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (db,map__16852,map__16852__$1,id,locale,value,tx){
return (function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db,tx);
});})(db,map__16852,map__16852__$1,id,locale,value,tx))
], null);
}));
om_next_datascript_localisation_demo.datascript.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$attrib_SLASH_set,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16881_16893 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate attrib/set")));
console.log(G__16881_16893);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16882_16894 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16882_16894);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16883_16895 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16883_16895);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16884_16896 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16884_16896);
} else {
}

var seq__16885_16897 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16886_16898 = null;
var count__16887_16899 = (0);
var i__16888_16900 = (0);
while(true){
if((i__16888_16900 < count__16887_16899)){
var k__11835__auto___16901 = chunk__16886_16898.cljs$core$IIndexed$_nth$arity$2(null,i__16888_16900);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16901)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16889_16902 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16901.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16901.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16901.call(null,env))),[cljs.core.str(k__11835__auto___16901)].join('')),"- ")));
console.log(G__16889_16902);
} else {
}
} else {
}

var G__16903 = seq__16885_16897;
var G__16904 = chunk__16886_16898;
var G__16905 = count__16887_16899;
var G__16906 = (i__16888_16900 + (1));
seq__16885_16897 = G__16903;
chunk__16886_16898 = G__16904;
count__16887_16899 = G__16905;
i__16888_16900 = G__16906;
continue;
} else {
var temp__4425__auto___16907 = cljs.core.seq(seq__16885_16897);
if(temp__4425__auto___16907){
var seq__16885_16908__$1 = temp__4425__auto___16907;
if(cljs.core.chunked_seq_QMARK_(seq__16885_16908__$1)){
var c__6945__auto___16909 = cljs.core.chunk_first(seq__16885_16908__$1);
var G__16910 = cljs.core.chunk_rest(seq__16885_16908__$1);
var G__16911 = c__6945__auto___16909;
var G__16912 = cljs.core.count(c__6945__auto___16909);
var G__16913 = (0);
seq__16885_16897 = G__16910;
chunk__16886_16898 = G__16911;
count__16887_16899 = G__16912;
i__16888_16900 = G__16913;
continue;
} else {
var k__11835__auto___16914 = cljs.core.first(seq__16885_16908__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16914)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16890_16915 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16914.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16914.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16914.call(null,env))),[cljs.core.str(k__11835__auto___16914)].join('')),"- ")));
console.log(G__16890_16915);
} else {
}
} else {
}

var G__16916 = cljs.core.next(seq__16885_16908__$1);
var G__16917 = null;
var G__16918 = (0);
var G__16919 = (0);
seq__16885_16897 = G__16916;
chunk__16886_16898 = G__16917;
count__16887_16899 = G__16918;
i__16888_16900 = G__16919;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var map__16891 = params;
var map__16891__$1 = ((((!((map__16891 == null)))?((((map__16891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16891):map__16891);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16891__$1,cljs.core.cst$kw$db_SLASH_id);
var attrib = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16891__$1,cljs.core.cst$kw$attrib);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16891__$1,cljs.core.cst$kw$value);
var tx = cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$db_SLASH_id,id,attrib,value], true, false);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (db,map__16891,map__16891__$1,id,attrib,value,tx){
return (function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null));
});})(db,map__16891,map__16891__$1,id,attrib,value,tx))
], null);
}));
om_next_datascript_localisation_demo.datascript.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$delete_SLASH_db_DASH_id,(function (env,key,params){
if(cljs.core.truth_(cljs.core.cst$kw$ids.cljs$core$IFn$_invoke$arity$1(params))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$kw$ids,cljs.core.cst$sym$params)], 0)))].join('')));
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16920_16930 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate delete/db-id")));
console.log(G__16920_16930);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16921_16931 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__16921_16931);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16922_16932 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__16922_16932);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16923_16933 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__16923_16933);
} else {
}

var seq__16924_16934 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__16925_16935 = null;
var count__16926_16936 = (0);
var i__16927_16937 = (0);
while(true){
if((i__16927_16937 < count__16926_16936)){
var k__11835__auto___16938 = chunk__16925_16935.cljs$core$IIndexed$_nth$arity$2(null,i__16927_16937);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16938)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16928_16939 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16938.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16938.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16938.call(null,env))),[cljs.core.str(k__11835__auto___16938)].join('')),"- ")));
console.log(G__16928_16939);
} else {
}
} else {
}

var G__16940 = seq__16924_16934;
var G__16941 = chunk__16925_16935;
var G__16942 = count__16926_16936;
var G__16943 = (i__16927_16937 + (1));
seq__16924_16934 = G__16940;
chunk__16925_16935 = G__16941;
count__16926_16936 = G__16942;
i__16927_16937 = G__16943;
continue;
} else {
var temp__4425__auto___16944 = cljs.core.seq(seq__16924_16934);
if(temp__4425__auto___16944){
var seq__16924_16945__$1 = temp__4425__auto___16944;
if(cljs.core.chunked_seq_QMARK_(seq__16924_16945__$1)){
var c__6945__auto___16946 = cljs.core.chunk_first(seq__16924_16945__$1);
var G__16947 = cljs.core.chunk_rest(seq__16924_16945__$1);
var G__16948 = c__6945__auto___16946;
var G__16949 = cljs.core.count(c__6945__auto___16946);
var G__16950 = (0);
seq__16924_16934 = G__16947;
chunk__16925_16935 = G__16948;
count__16926_16936 = G__16949;
i__16927_16937 = G__16950;
continue;
} else {
var k__11835__auto___16951 = cljs.core.first(seq__16924_16945__$1);
if(cljs.core.contains_QMARK_(env,k__11835__auto___16951)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16929_16952 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__11835__auto___16951.cljs$core$IFn$_invoke$arity$1 ? k__11835__auto___16951.cljs$core$IFn$_invoke$arity$1(env) : k__11835__auto___16951.call(null,env))),[cljs.core.str(k__11835__auto___16951)].join('')),"- ")));
console.log(G__16929_16952);
} else {
}
} else {
}

var G__16953 = cljs.core.next(seq__16924_16945__$1);
var G__16954 = null;
var G__16955 = (0);
var G__16956 = (0);
seq__16924_16934 = G__16953;
chunk__16925_16935 = G__16954;
count__16926_16936 = G__16955;
i__16927_16937 = G__16956;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}
} else {
}

var db = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
var ids = cljs.core.cst$kw$ids.cljs$core$IFn$_invoke$arity$1(params);
var tx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (db,ids){
return (function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$fn_SLASH_retractEntity,id], null);
});})(db,ids))
,ids);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (db,ids,tx){
return (function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db,tx);
});})(db,ids,tx))
], null);
}));
om_next_datascript_localisation_demo.datascript.parser.parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,om_next_datascript_localisation_demo.datascript.parser.read,cljs.core.cst$kw$mutate,om_next_datascript_localisation_demo.datascript.parser.mutate], null));
om_next_datascript_localisation_demo.datascript.parser.log_query = (function om_next_datascript_localisation_demo$datascript$parser$log_query(q){
var env = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,om_next_datascript_localisation_demo.datascript.db.the_db,cljs.core.cst$kw$query,q], null);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16961_16965 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")));
console.log(G__16961_16965);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16962_16966 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,q),"query:")));
console.log(G__16962_16966);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16963_16967 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(om_next_datascript_localisation_demo.datascript.parser.parser.cljs$core$IFn$_invoke$arity$2 ? om_next_datascript_localisation_demo.datascript.parser.parser.cljs$core$IFn$_invoke$arity$2(env,q) : om_next_datascript_localisation_demo.datascript.parser.parser.call(null,env,q))),"result:")));
console.log(G__16963_16967);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16964 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")));
return console.log(G__16964);
} else {
return null;
}
});
om_next_datascript_localisation_demo.datascript.parser.test_locales = (function om_next_datascript_localisation_demo$datascript$parser$test_locales(){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__16969_16970 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"test-locales")));
console.log(G__16969_16970);
} else {
}

var queries = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locales], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locales,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app_SLASH_locale], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_SLASH_locale,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app_SLASH_locale], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app$localised_SLASH_strings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app_DASH_title,cljs.core.cst$kw$app_DASH_desc,cljs.core.cst$kw$app_DASH_locale_DASH_current], null)], null)], null)], null);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.datascript.parser.log_query,queries));
});
om_next_datascript_localisation_demo.datascript.parser.test_parser = (function om_next_datascript_localisation_demo$datascript$parser$test_parser(){
return om_next_datascript_localisation_demo.datascript.parser.test_locales();
});
