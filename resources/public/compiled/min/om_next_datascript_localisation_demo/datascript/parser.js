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
om_next_datascript_localisation_demo.datascript.parser.read = (function (){var method_table__7055__auto__ = (function (){var G__24011 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24011) : cljs.core.atom.call(null,G__24011));
})();
var prefer_table__7056__auto__ = (function (){var G__24012 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24012) : cljs.core.atom.call(null,G__24012));
})();
var method_cache__7057__auto__ = (function (){var G__24013 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24013) : cljs.core.atom.call(null,G__24013));
})();
var cached_hierarchy__7058__auto__ = (function (){var G__24014 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24014) : cljs.core.atom.call(null,G__24014));
})();
var hierarchy__7059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("om-next-datascript-localisation-demo.datascript.parser","read"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__7059__auto__,method_table__7055__auto__,prefer_table__7056__auto__,method_cache__7057__auto__,cached_hierarchy__7058__auto__));
})();
}
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24015_24025 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"*-* read default")));
console.log(G__24015_24025);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24016_24026 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24016_24026);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24017_24027 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24017_24027);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24018_24028 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24018_24028);
} else {
}

var seq__24019_24029 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24020_24030 = null;
var count__24021_24031 = (0);
var i__24022_24032 = (0);
while(true){
if((i__24022_24032 < count__24021_24031)){
var k__15709__auto___24033 = chunk__24020_24030.cljs$core$IIndexed$_nth$arity$2(null,i__24022_24032);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24033)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24023_24034 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24033.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24033.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24033.call(null,env))),[cljs.core.str(k__15709__auto___24033)].join('')),"- ")));
console.log(G__24023_24034);
} else {
}
} else {
}

var G__24035 = seq__24019_24029;
var G__24036 = chunk__24020_24030;
var G__24037 = count__24021_24031;
var G__24038 = (i__24022_24032 + (1));
seq__24019_24029 = G__24035;
chunk__24020_24030 = G__24036;
count__24021_24031 = G__24037;
i__24022_24032 = G__24038;
continue;
} else {
var temp__4425__auto___24039 = cljs.core.seq(seq__24019_24029);
if(temp__4425__auto___24039){
var seq__24019_24040__$1 = temp__4425__auto___24039;
if(cljs.core.chunked_seq_QMARK_(seq__24019_24040__$1)){
var c__6945__auto___24041 = cljs.core.chunk_first(seq__24019_24040__$1);
var G__24042 = cljs.core.chunk_rest(seq__24019_24040__$1);
var G__24043 = c__6945__auto___24041;
var G__24044 = cljs.core.count(c__6945__auto___24041);
var G__24045 = (0);
seq__24019_24029 = G__24042;
chunk__24020_24030 = G__24043;
count__24021_24031 = G__24044;
i__24022_24032 = G__24045;
continue;
} else {
var k__15709__auto___24046 = cljs.core.first(seq__24019_24040__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24046)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24024_24047 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24046.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24046.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24046.call(null,env))),[cljs.core.str(k__15709__auto___24046)].join('')),"- ")));
console.log(G__24024_24047);
} else {
}
} else {
}

var G__24048 = cljs.core.next(seq__24019_24040__$1);
var G__24049 = null;
var G__24050 = (0);
var G__24051 = (0);
seq__24019_24029 = G__24048;
chunk__24020_24030 = G__24049;
count__24021_24031 = G__24050;
i__24022_24032 = G__24051;
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
var G__24052_24062 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read app.locale")));
console.log(G__24052_24062);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24053_24063 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24053_24063);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24054_24064 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24054_24064);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24055_24065 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24055_24065);
} else {
}

var seq__24056_24066 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24057_24067 = null;
var count__24058_24068 = (0);
var i__24059_24069 = (0);
while(true){
if((i__24059_24069 < count__24058_24068)){
var k__15709__auto___24070 = chunk__24057_24067.cljs$core$IIndexed$_nth$arity$2(null,i__24059_24069);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24070)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24060_24071 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24070.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24070.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24070.call(null,env))),[cljs.core.str(k__15709__auto___24070)].join('')),"- ")));
console.log(G__24060_24071);
} else {
}
} else {
}

var G__24072 = seq__24056_24066;
var G__24073 = chunk__24057_24067;
var G__24074 = count__24058_24068;
var G__24075 = (i__24059_24069 + (1));
seq__24056_24066 = G__24072;
chunk__24057_24067 = G__24073;
count__24058_24068 = G__24074;
i__24059_24069 = G__24075;
continue;
} else {
var temp__4425__auto___24076 = cljs.core.seq(seq__24056_24066);
if(temp__4425__auto___24076){
var seq__24056_24077__$1 = temp__4425__auto___24076;
if(cljs.core.chunked_seq_QMARK_(seq__24056_24077__$1)){
var c__6945__auto___24078 = cljs.core.chunk_first(seq__24056_24077__$1);
var G__24079 = cljs.core.chunk_rest(seq__24056_24077__$1);
var G__24080 = c__6945__auto___24078;
var G__24081 = cljs.core.count(c__6945__auto___24078);
var G__24082 = (0);
seq__24056_24066 = G__24079;
chunk__24057_24067 = G__24080;
count__24058_24068 = G__24081;
i__24059_24069 = G__24082;
continue;
} else {
var k__15709__auto___24083 = cljs.core.first(seq__24056_24077__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24083)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24061_24084 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24083.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24083.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24083.call(null,env))),[cljs.core.str(k__15709__auto___24083)].join('')),"- ")));
console.log(G__24061_24084);
} else {
}
} else {
}

var G__24085 = cljs.core.next(seq__24056_24077__$1);
var G__24086 = null;
var G__24087 = (0);
var G__24088 = (0);
seq__24056_24066 = G__24085;
chunk__24057_24067 = G__24086;
count__24058_24068 = G__24087;
i__24059_24069 = G__24088;
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
var G__24089_24099 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read locale")));
console.log(G__24089_24099);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24090_24100 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24090_24100);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24091_24101 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24091_24101);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24092_24102 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24092_24102);
} else {
}

var seq__24093_24103 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24094_24104 = null;
var count__24095_24105 = (0);
var i__24096_24106 = (0);
while(true){
if((i__24096_24106 < count__24095_24105)){
var k__15709__auto___24107 = chunk__24094_24104.cljs$core$IIndexed$_nth$arity$2(null,i__24096_24106);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24107)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24097_24108 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24107.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24107.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24107.call(null,env))),[cljs.core.str(k__15709__auto___24107)].join('')),"- ")));
console.log(G__24097_24108);
} else {
}
} else {
}

var G__24109 = seq__24093_24103;
var G__24110 = chunk__24094_24104;
var G__24111 = count__24095_24105;
var G__24112 = (i__24096_24106 + (1));
seq__24093_24103 = G__24109;
chunk__24094_24104 = G__24110;
count__24095_24105 = G__24111;
i__24096_24106 = G__24112;
continue;
} else {
var temp__4425__auto___24113 = cljs.core.seq(seq__24093_24103);
if(temp__4425__auto___24113){
var seq__24093_24114__$1 = temp__4425__auto___24113;
if(cljs.core.chunked_seq_QMARK_(seq__24093_24114__$1)){
var c__6945__auto___24115 = cljs.core.chunk_first(seq__24093_24114__$1);
var G__24116 = cljs.core.chunk_rest(seq__24093_24114__$1);
var G__24117 = c__6945__auto___24115;
var G__24118 = cljs.core.count(c__6945__auto___24115);
var G__24119 = (0);
seq__24093_24103 = G__24116;
chunk__24094_24104 = G__24117;
count__24095_24105 = G__24118;
i__24096_24106 = G__24119;
continue;
} else {
var k__15709__auto___24120 = cljs.core.first(seq__24093_24114__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24120)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24098_24121 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24120.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24120.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24120.call(null,env))),[cljs.core.str(k__15709__auto___24120)].join('')),"- ")));
console.log(G__24098_24121);
} else {
}
} else {
}

var G__24122 = cljs.core.next(seq__24093_24114__$1);
var G__24123 = null;
var G__24124 = (0);
var G__24125 = (0);
seq__24093_24103 = G__24122;
chunk__24094_24104 = G__24123;
count__24095_24105 = G__24124;
i__24096_24106 = G__24125;
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
var G__24127_24139 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read locales-via-refs")));
console.log(G__24127_24139);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24128_24140 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24128_24140);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24129_24141 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24129_24141);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24130_24142 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24130_24142);
} else {
}

var seq__24131_24143 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24132_24144 = null;
var count__24133_24145 = (0);
var i__24134_24146 = (0);
while(true){
if((i__24134_24146 < count__24133_24145)){
var k__15709__auto___24147 = chunk__24132_24144.cljs$core$IIndexed$_nth$arity$2(null,i__24134_24146);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24147)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24135_24148 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24147.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24147.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24147.call(null,env))),[cljs.core.str(k__15709__auto___24147)].join('')),"- ")));
console.log(G__24135_24148);
} else {
}
} else {
}

var G__24149 = seq__24131_24143;
var G__24150 = chunk__24132_24144;
var G__24151 = count__24133_24145;
var G__24152 = (i__24134_24146 + (1));
seq__24131_24143 = G__24149;
chunk__24132_24144 = G__24150;
count__24133_24145 = G__24151;
i__24134_24146 = G__24152;
continue;
} else {
var temp__4425__auto___24153 = cljs.core.seq(seq__24131_24143);
if(temp__4425__auto___24153){
var seq__24131_24154__$1 = temp__4425__auto___24153;
if(cljs.core.chunked_seq_QMARK_(seq__24131_24154__$1)){
var c__6945__auto___24155 = cljs.core.chunk_first(seq__24131_24154__$1);
var G__24156 = cljs.core.chunk_rest(seq__24131_24154__$1);
var G__24157 = c__6945__auto___24155;
var G__24158 = cljs.core.count(c__6945__auto___24155);
var G__24159 = (0);
seq__24131_24143 = G__24156;
chunk__24132_24144 = G__24157;
count__24133_24145 = G__24158;
i__24134_24146 = G__24159;
continue;
} else {
var k__15709__auto___24160 = cljs.core.first(seq__24131_24154__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24160)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24136_24161 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24160.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24160.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24160.call(null,env))),[cljs.core.str(k__15709__auto___24160)].join('')),"- ")));
console.log(G__24136_24161);
} else {
}
} else {
}

var G__24162 = cljs.core.next(seq__24131_24154__$1);
var G__24163 = null;
var G__24164 = (0);
var G__24165 = (0);
seq__24131_24143 = G__24162;
chunk__24132_24144 = G__24163;
count__24133_24145 = G__24164;
i__24134_24146 = G__24165;
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
return (function (p1__24126_SHARP_){
var G__24137 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ref,p1__24126_SHARP_);
var G__24138 = query;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__24137,G__24138) : parser.call(null,G__24137,G__24138));
});})(db,query,parser,ref,refs))
,refs)], null);
}));
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$locales,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24166_24176 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read locales")));
console.log(G__24166_24176);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24167_24177 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24167_24177);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24168_24178 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24168_24178);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24169_24179 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24169_24179);
} else {
}

var seq__24170_24180 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24171_24181 = null;
var count__24172_24182 = (0);
var i__24173_24183 = (0);
while(true){
if((i__24173_24183 < count__24172_24182)){
var k__15709__auto___24184 = chunk__24171_24181.cljs$core$IIndexed$_nth$arity$2(null,i__24173_24183);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24184)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24174_24185 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24184.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24184.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24184.call(null,env))),[cljs.core.str(k__15709__auto___24184)].join('')),"- ")));
console.log(G__24174_24185);
} else {
}
} else {
}

var G__24186 = seq__24170_24180;
var G__24187 = chunk__24171_24181;
var G__24188 = count__24172_24182;
var G__24189 = (i__24173_24183 + (1));
seq__24170_24180 = G__24186;
chunk__24171_24181 = G__24187;
count__24172_24182 = G__24188;
i__24173_24183 = G__24189;
continue;
} else {
var temp__4425__auto___24190 = cljs.core.seq(seq__24170_24180);
if(temp__4425__auto___24190){
var seq__24170_24191__$1 = temp__4425__auto___24190;
if(cljs.core.chunked_seq_QMARK_(seq__24170_24191__$1)){
var c__6945__auto___24192 = cljs.core.chunk_first(seq__24170_24191__$1);
var G__24193 = cljs.core.chunk_rest(seq__24170_24191__$1);
var G__24194 = c__6945__auto___24192;
var G__24195 = cljs.core.count(c__6945__auto___24192);
var G__24196 = (0);
seq__24170_24180 = G__24193;
chunk__24171_24181 = G__24194;
count__24172_24182 = G__24195;
i__24173_24183 = G__24196;
continue;
} else {
var k__15709__auto___24197 = cljs.core.first(seq__24170_24191__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24197)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24175_24198 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24197.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24197.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24197.call(null,env))),[cljs.core.str(k__15709__auto___24197)].join('')),"- ")));
console.log(G__24175_24198);
} else {
}
} else {
}

var G__24199 = cljs.core.next(seq__24170_24191__$1);
var G__24200 = null;
var G__24201 = (0);
var G__24202 = (0);
seq__24170_24180 = G__24199;
chunk__24171_24181 = G__24200;
count__24172_24182 = G__24201;
i__24173_24183 = G__24202;
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
var G__24203_24213 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read locales-selector-props")));
console.log(G__24203_24213);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24204_24214 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24204_24214);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24205_24215 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24205_24215);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24206_24216 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24206_24216);
} else {
}

var seq__24207_24217 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24208_24218 = null;
var count__24209_24219 = (0);
var i__24210_24220 = (0);
while(true){
if((i__24210_24220 < count__24209_24219)){
var k__15709__auto___24221 = chunk__24208_24218.cljs$core$IIndexed$_nth$arity$2(null,i__24210_24220);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24221)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24211_24222 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24221.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24221.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24221.call(null,env))),[cljs.core.str(k__15709__auto___24221)].join('')),"- ")));
console.log(G__24211_24222);
} else {
}
} else {
}

var G__24223 = seq__24207_24217;
var G__24224 = chunk__24208_24218;
var G__24225 = count__24209_24219;
var G__24226 = (i__24210_24220 + (1));
seq__24207_24217 = G__24223;
chunk__24208_24218 = G__24224;
count__24209_24219 = G__24225;
i__24210_24220 = G__24226;
continue;
} else {
var temp__4425__auto___24227 = cljs.core.seq(seq__24207_24217);
if(temp__4425__auto___24227){
var seq__24207_24228__$1 = temp__4425__auto___24227;
if(cljs.core.chunked_seq_QMARK_(seq__24207_24228__$1)){
var c__6945__auto___24229 = cljs.core.chunk_first(seq__24207_24228__$1);
var G__24230 = cljs.core.chunk_rest(seq__24207_24228__$1);
var G__24231 = c__6945__auto___24229;
var G__24232 = cljs.core.count(c__6945__auto___24229);
var G__24233 = (0);
seq__24207_24217 = G__24230;
chunk__24208_24218 = G__24231;
count__24209_24219 = G__24232;
i__24210_24220 = G__24233;
continue;
} else {
var k__15709__auto___24234 = cljs.core.first(seq__24207_24228__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24234)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24212_24235 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24234.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24234.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24234.call(null,env))),[cljs.core.str(k__15709__auto___24234)].join('')),"- ")));
console.log(G__24212_24235);
} else {
}
} else {
}

var G__24236 = cljs.core.next(seq__24207_24228__$1);
var G__24237 = null;
var G__24238 = (0);
var G__24239 = (0);
seq__24207_24217 = G__24236;
chunk__24208_24218 = G__24237;
count__24209_24219 = G__24238;
i__24210_24220 = G__24239;
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
var G__24240_24250 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read locales-table-props")));
console.log(G__24240_24250);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24241_24251 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24241_24251);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24242_24252 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24242_24252);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24243_24253 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24243_24253);
} else {
}

var seq__24244_24254 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24245_24255 = null;
var count__24246_24256 = (0);
var i__24247_24257 = (0);
while(true){
if((i__24247_24257 < count__24246_24256)){
var k__15709__auto___24258 = chunk__24245_24255.cljs$core$IIndexed$_nth$arity$2(null,i__24247_24257);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24258)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24248_24259 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24258.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24258.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24258.call(null,env))),[cljs.core.str(k__15709__auto___24258)].join('')),"- ")));
console.log(G__24248_24259);
} else {
}
} else {
}

var G__24260 = seq__24244_24254;
var G__24261 = chunk__24245_24255;
var G__24262 = count__24246_24256;
var G__24263 = (i__24247_24257 + (1));
seq__24244_24254 = G__24260;
chunk__24245_24255 = G__24261;
count__24246_24256 = G__24262;
i__24247_24257 = G__24263;
continue;
} else {
var temp__4425__auto___24264 = cljs.core.seq(seq__24244_24254);
if(temp__4425__auto___24264){
var seq__24244_24265__$1 = temp__4425__auto___24264;
if(cljs.core.chunked_seq_QMARK_(seq__24244_24265__$1)){
var c__6945__auto___24266 = cljs.core.chunk_first(seq__24244_24265__$1);
var G__24267 = cljs.core.chunk_rest(seq__24244_24265__$1);
var G__24268 = c__6945__auto___24266;
var G__24269 = cljs.core.count(c__6945__auto___24266);
var G__24270 = (0);
seq__24244_24254 = G__24267;
chunk__24245_24255 = G__24268;
count__24246_24256 = G__24269;
i__24247_24257 = G__24270;
continue;
} else {
var k__15709__auto___24271 = cljs.core.first(seq__24244_24265__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24271)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24249_24272 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24271.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24271.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24271.call(null,env))),[cljs.core.str(k__15709__auto___24271)].join('')),"- ")));
console.log(G__24249_24272);
} else {
}
} else {
}

var G__24273 = cljs.core.next(seq__24244_24265__$1);
var G__24274 = null;
var G__24275 = (0);
var G__24276 = (0);
seq__24244_24254 = G__24273;
chunk__24245_24255 = G__24274;
count__24246_24256 = G__24275;
i__24247_24257 = G__24276;
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
var G__24277_24287 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read localised-string-table-props")));
console.log(G__24277_24287);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24278_24288 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24278_24288);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24279_24289 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24279_24289);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24280_24290 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24280_24290);
} else {
}

var seq__24281_24291 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24282_24292 = null;
var count__24283_24293 = (0);
var i__24284_24294 = (0);
while(true){
if((i__24284_24294 < count__24283_24293)){
var k__15709__auto___24295 = chunk__24282_24292.cljs$core$IIndexed$_nth$arity$2(null,i__24284_24294);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24295)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24285_24296 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24295.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24295.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24295.call(null,env))),[cljs.core.str(k__15709__auto___24295)].join('')),"- ")));
console.log(G__24285_24296);
} else {
}
} else {
}

var G__24297 = seq__24281_24291;
var G__24298 = chunk__24282_24292;
var G__24299 = count__24283_24293;
var G__24300 = (i__24284_24294 + (1));
seq__24281_24291 = G__24297;
chunk__24282_24292 = G__24298;
count__24283_24293 = G__24299;
i__24284_24294 = G__24300;
continue;
} else {
var temp__4425__auto___24301 = cljs.core.seq(seq__24281_24291);
if(temp__4425__auto___24301){
var seq__24281_24302__$1 = temp__4425__auto___24301;
if(cljs.core.chunked_seq_QMARK_(seq__24281_24302__$1)){
var c__6945__auto___24303 = cljs.core.chunk_first(seq__24281_24302__$1);
var G__24304 = cljs.core.chunk_rest(seq__24281_24302__$1);
var G__24305 = c__6945__auto___24303;
var G__24306 = cljs.core.count(c__6945__auto___24303);
var G__24307 = (0);
seq__24281_24291 = G__24304;
chunk__24282_24292 = G__24305;
count__24283_24293 = G__24306;
i__24284_24294 = G__24307;
continue;
} else {
var k__15709__auto___24308 = cljs.core.first(seq__24281_24302__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24308)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24286_24309 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24308.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24308.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24308.call(null,env))),[cljs.core.str(k__15709__auto___24308)].join('')),"- ")));
console.log(G__24286_24309);
} else {
}
} else {
}

var G__24310 = cljs.core.next(seq__24281_24302__$1);
var G__24311 = null;
var G__24312 = (0);
var G__24313 = (0);
seq__24281_24291 = G__24310;
chunk__24282_24292 = G__24311;
count__24283_24293 = G__24312;
i__24284_24294 = G__24313;
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
var G__24314_24324 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read app.localised/strings")));
console.log(G__24314_24324);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24315_24325 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24315_24325);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24316_24326 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24316_24326);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24317_24327 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24317_24327);
} else {
}

var seq__24318_24328 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24319_24329 = null;
var count__24320_24330 = (0);
var i__24321_24331 = (0);
while(true){
if((i__24321_24331 < count__24320_24330)){
var k__15709__auto___24332 = chunk__24319_24329.cljs$core$IIndexed$_nth$arity$2(null,i__24321_24331);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24332)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24322_24333 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24332.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24332.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24332.call(null,env))),[cljs.core.str(k__15709__auto___24332)].join('')),"- ")));
console.log(G__24322_24333);
} else {
}
} else {
}

var G__24334 = seq__24318_24328;
var G__24335 = chunk__24319_24329;
var G__24336 = count__24320_24330;
var G__24337 = (i__24321_24331 + (1));
seq__24318_24328 = G__24334;
chunk__24319_24329 = G__24335;
count__24320_24330 = G__24336;
i__24321_24331 = G__24337;
continue;
} else {
var temp__4425__auto___24338 = cljs.core.seq(seq__24318_24328);
if(temp__4425__auto___24338){
var seq__24318_24339__$1 = temp__4425__auto___24338;
if(cljs.core.chunked_seq_QMARK_(seq__24318_24339__$1)){
var c__6945__auto___24340 = cljs.core.chunk_first(seq__24318_24339__$1);
var G__24341 = cljs.core.chunk_rest(seq__24318_24339__$1);
var G__24342 = c__6945__auto___24340;
var G__24343 = cljs.core.count(c__6945__auto___24340);
var G__24344 = (0);
seq__24318_24328 = G__24341;
chunk__24319_24329 = G__24342;
count__24320_24330 = G__24343;
i__24321_24331 = G__24344;
continue;
} else {
var k__15709__auto___24345 = cljs.core.first(seq__24318_24339__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24345)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24323_24346 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24345.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24345.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24345.call(null,env))),[cljs.core.str(k__15709__auto___24345)].join('')),"- ")));
console.log(G__24323_24346);
} else {
}
} else {
}

var G__24347 = cljs.core.next(seq__24318_24339__$1);
var G__24348 = null;
var G__24349 = (0);
var G__24350 = (0);
seq__24318_24328 = G__24347;
chunk__24319_24329 = G__24348;
count__24320_24330 = G__24349;
i__24321_24331 = G__24350;
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
var G__24351 = cljs.core.first(string_ids);
var G__24352 = cljs.core.rest(string_ids);
var G__24353 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(results,sid,om_next_datascript_localisation_demo.datascript.db.app_localise_string(db,sid));
sid = G__24351;
string_ids = G__24352;
results = G__24353;
continue;
}
break;
}
}));
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$localised_SLASH_string,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24354_24365 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read localised/string")));
console.log(G__24354_24365);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24355_24366 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24355_24366);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24356_24367 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24356_24367);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24357_24368 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24357_24368);
} else {
}

var seq__24358_24369 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24359_24370 = null;
var count__24360_24371 = (0);
var i__24361_24372 = (0);
while(true){
if((i__24361_24372 < count__24360_24371)){
var k__15709__auto___24373 = chunk__24359_24370.cljs$core$IIndexed$_nth$arity$2(null,i__24361_24372);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24373)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24362_24374 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24373.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24373.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24373.call(null,env))),[cljs.core.str(k__15709__auto___24373)].join('')),"- ")));
console.log(G__24362_24374);
} else {
}
} else {
}

var G__24375 = seq__24358_24369;
var G__24376 = chunk__24359_24370;
var G__24377 = count__24360_24371;
var G__24378 = (i__24361_24372 + (1));
seq__24358_24369 = G__24375;
chunk__24359_24370 = G__24376;
count__24360_24371 = G__24377;
i__24361_24372 = G__24378;
continue;
} else {
var temp__4425__auto___24379 = cljs.core.seq(seq__24358_24369);
if(temp__4425__auto___24379){
var seq__24358_24380__$1 = temp__4425__auto___24379;
if(cljs.core.chunked_seq_QMARK_(seq__24358_24380__$1)){
var c__6945__auto___24381 = cljs.core.chunk_first(seq__24358_24380__$1);
var G__24382 = cljs.core.chunk_rest(seq__24358_24380__$1);
var G__24383 = c__6945__auto___24381;
var G__24384 = cljs.core.count(c__6945__auto___24381);
var G__24385 = (0);
seq__24358_24369 = G__24382;
chunk__24359_24370 = G__24383;
count__24360_24371 = G__24384;
i__24361_24372 = G__24385;
continue;
} else {
var k__15709__auto___24386 = cljs.core.first(seq__24358_24380__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24386)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24363_24387 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24386.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24386.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24386.call(null,env))),[cljs.core.str(k__15709__auto___24386)].join('')),"- ")));
console.log(G__24363_24387);
} else {
}
} else {
}

var G__24388 = cljs.core.next(seq__24358_24380__$1);
var G__24389 = null;
var G__24390 = (0);
var G__24391 = (0);
seq__24358_24369 = G__24388;
chunk__24359_24370 = G__24389;
count__24360_24371 = G__24390;
i__24361_24372 = G__24391;
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
var vec__24364 = om_next_datascript_localisation_demo.utils.ident.ident__GT_string_id_and_locale(ident);
var string_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24364,(0),null);
var locale_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24364,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.cljs$core$IFn$_invoke$arity$4(db,string_id,locale_id,query)], null);
}));
om_next_datascript_localisation_demo.datascript.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$localised_DASH_strings,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24392_24402 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read localised-strings")));
console.log(G__24392_24402);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24393_24403 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24393_24403);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24394_24404 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24394_24404);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24395_24405 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24395_24405);
} else {
}

var seq__24396_24406 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24397_24407 = null;
var count__24398_24408 = (0);
var i__24399_24409 = (0);
while(true){
if((i__24399_24409 < count__24398_24408)){
var k__15709__auto___24410 = chunk__24397_24407.cljs$core$IIndexed$_nth$arity$2(null,i__24399_24409);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24410)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24400_24411 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24410.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24410.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24410.call(null,env))),[cljs.core.str(k__15709__auto___24410)].join('')),"- ")));
console.log(G__24400_24411);
} else {
}
} else {
}

var G__24412 = seq__24396_24406;
var G__24413 = chunk__24397_24407;
var G__24414 = count__24398_24408;
var G__24415 = (i__24399_24409 + (1));
seq__24396_24406 = G__24412;
chunk__24397_24407 = G__24413;
count__24398_24408 = G__24414;
i__24399_24409 = G__24415;
continue;
} else {
var temp__4425__auto___24416 = cljs.core.seq(seq__24396_24406);
if(temp__4425__auto___24416){
var seq__24396_24417__$1 = temp__4425__auto___24416;
if(cljs.core.chunked_seq_QMARK_(seq__24396_24417__$1)){
var c__6945__auto___24418 = cljs.core.chunk_first(seq__24396_24417__$1);
var G__24419 = cljs.core.chunk_rest(seq__24396_24417__$1);
var G__24420 = c__6945__auto___24418;
var G__24421 = cljs.core.count(c__6945__auto___24418);
var G__24422 = (0);
seq__24396_24406 = G__24419;
chunk__24397_24407 = G__24420;
count__24398_24408 = G__24421;
i__24399_24409 = G__24422;
continue;
} else {
var k__15709__auto___24423 = cljs.core.first(seq__24396_24417__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24423)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24401_24424 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24423.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24423.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24423.call(null,env))),[cljs.core.str(k__15709__auto___24423)].join('')),"- ")));
console.log(G__24401_24424);
} else {
}
} else {
}

var G__24425 = cljs.core.next(seq__24396_24417__$1);
var G__24426 = null;
var G__24427 = (0);
var G__24428 = (0);
seq__24396_24406 = G__24425;
chunk__24397_24407 = G__24426;
count__24398_24408 = G__24427;
i__24399_24409 = G__24428;
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
var G__24429_24439 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"--- read db/pull")));
console.log(G__24429_24439);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24430_24440 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24430_24440);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24431_24441 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24431_24441);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24432_24442 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24432_24442);
} else {
}

var seq__24433_24443 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24434_24444 = null;
var count__24435_24445 = (0);
var i__24436_24446 = (0);
while(true){
if((i__24436_24446 < count__24435_24445)){
var k__15709__auto___24447 = chunk__24434_24444.cljs$core$IIndexed$_nth$arity$2(null,i__24436_24446);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24447)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24437_24448 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24447.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24447.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24447.call(null,env))),[cljs.core.str(k__15709__auto___24447)].join('')),"- ")));
console.log(G__24437_24448);
} else {
}
} else {
}

var G__24449 = seq__24433_24443;
var G__24450 = chunk__24434_24444;
var G__24451 = count__24435_24445;
var G__24452 = (i__24436_24446 + (1));
seq__24433_24443 = G__24449;
chunk__24434_24444 = G__24450;
count__24435_24445 = G__24451;
i__24436_24446 = G__24452;
continue;
} else {
var temp__4425__auto___24453 = cljs.core.seq(seq__24433_24443);
if(temp__4425__auto___24453){
var seq__24433_24454__$1 = temp__4425__auto___24453;
if(cljs.core.chunked_seq_QMARK_(seq__24433_24454__$1)){
var c__6945__auto___24455 = cljs.core.chunk_first(seq__24433_24454__$1);
var G__24456 = cljs.core.chunk_rest(seq__24433_24454__$1);
var G__24457 = c__6945__auto___24455;
var G__24458 = cljs.core.count(c__6945__auto___24455);
var G__24459 = (0);
seq__24433_24443 = G__24456;
chunk__24434_24444 = G__24457;
count__24435_24445 = G__24458;
i__24436_24446 = G__24459;
continue;
} else {
var k__15709__auto___24460 = cljs.core.first(seq__24433_24454__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24460)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24438_24461 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24460.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24460.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24460.call(null,env))),[cljs.core.str(k__15709__auto___24460)].join('')),"- ")));
console.log(G__24438_24461);
} else {
}
} else {
}

var G__24462 = cljs.core.next(seq__24433_24454__$1);
var G__24463 = null;
var G__24464 = (0);
var G__24465 = (0);
seq__24433_24443 = G__24462;
chunk__24434_24444 = G__24463;
count__24435_24445 = G__24464;
i__24436_24446 = G__24465;
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
om_next_datascript_localisation_demo.datascript.parser.mutate = (function (){var method_table__7055__auto__ = (function (){var G__24466 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24466) : cljs.core.atom.call(null,G__24466));
})();
var prefer_table__7056__auto__ = (function (){var G__24467 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24467) : cljs.core.atom.call(null,G__24467));
})();
var method_cache__7057__auto__ = (function (){var G__24468 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24468) : cljs.core.atom.call(null,G__24468));
})();
var cached_hierarchy__7058__auto__ = (function (){var G__24469 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24469) : cljs.core.atom.call(null,G__24469));
})();
var hierarchy__7059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("om-next-datascript-localisation-demo.datascript.parser","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__7059__auto__,method_table__7055__auto__,prefer_table__7056__auto__,method_cache__7057__auto__,cached_hierarchy__7058__auto__));
})();
}
om_next_datascript_localisation_demo.datascript.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24470_24480 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"-** mutate default")));
console.log(G__24470_24480);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24471_24481 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24471_24481);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24472_24482 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24472_24482);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24473_24483 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24473_24483);
} else {
}

var seq__24474_24484 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24475_24485 = null;
var count__24476_24486 = (0);
var i__24477_24487 = (0);
while(true){
if((i__24477_24487 < count__24476_24486)){
var k__15709__auto___24488 = chunk__24475_24485.cljs$core$IIndexed$_nth$arity$2(null,i__24477_24487);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24488)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24478_24489 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24488.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24488.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24488.call(null,env))),[cljs.core.str(k__15709__auto___24488)].join('')),"- ")));
console.log(G__24478_24489);
} else {
}
} else {
}

var G__24490 = seq__24474_24484;
var G__24491 = chunk__24475_24485;
var G__24492 = count__24476_24486;
var G__24493 = (i__24477_24487 + (1));
seq__24474_24484 = G__24490;
chunk__24475_24485 = G__24491;
count__24476_24486 = G__24492;
i__24477_24487 = G__24493;
continue;
} else {
var temp__4425__auto___24494 = cljs.core.seq(seq__24474_24484);
if(temp__4425__auto___24494){
var seq__24474_24495__$1 = temp__4425__auto___24494;
if(cljs.core.chunked_seq_QMARK_(seq__24474_24495__$1)){
var c__6945__auto___24496 = cljs.core.chunk_first(seq__24474_24495__$1);
var G__24497 = cljs.core.chunk_rest(seq__24474_24495__$1);
var G__24498 = c__6945__auto___24496;
var G__24499 = cljs.core.count(c__6945__auto___24496);
var G__24500 = (0);
seq__24474_24484 = G__24497;
chunk__24475_24485 = G__24498;
count__24476_24486 = G__24499;
i__24477_24487 = G__24500;
continue;
} else {
var k__15709__auto___24501 = cljs.core.first(seq__24474_24495__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24501)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24479_24502 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24501.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24501.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24501.call(null,env))),[cljs.core.str(k__15709__auto___24501)].join('')),"- ")));
console.log(G__24479_24502);
} else {
}
} else {
}

var G__24503 = cljs.core.next(seq__24474_24495__$1);
var G__24504 = null;
var G__24505 = (0);
var G__24506 = (0);
seq__24474_24484 = G__24503;
chunk__24475_24485 = G__24504;
count__24476_24486 = G__24505;
i__24477_24487 = G__24506;
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
var G__24507_24518 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate app.locale/set")));
console.log(G__24507_24518);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24508_24519 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24508_24519);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24509_24520 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24509_24520);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24510_24521 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24510_24521);
} else {
}

var seq__24511_24522 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24512_24523 = null;
var count__24513_24524 = (0);
var i__24514_24525 = (0);
while(true){
if((i__24514_24525 < count__24513_24524)){
var k__15709__auto___24526 = chunk__24512_24523.cljs$core$IIndexed$_nth$arity$2(null,i__24514_24525);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24526)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24515_24527 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24526.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24526.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24526.call(null,env))),[cljs.core.str(k__15709__auto___24526)].join('')),"- ")));
console.log(G__24515_24527);
} else {
}
} else {
}

var G__24528 = seq__24511_24522;
var G__24529 = chunk__24512_24523;
var G__24530 = count__24513_24524;
var G__24531 = (i__24514_24525 + (1));
seq__24511_24522 = G__24528;
chunk__24512_24523 = G__24529;
count__24513_24524 = G__24530;
i__24514_24525 = G__24531;
continue;
} else {
var temp__4425__auto___24532 = cljs.core.seq(seq__24511_24522);
if(temp__4425__auto___24532){
var seq__24511_24533__$1 = temp__4425__auto___24532;
if(cljs.core.chunked_seq_QMARK_(seq__24511_24533__$1)){
var c__6945__auto___24534 = cljs.core.chunk_first(seq__24511_24533__$1);
var G__24535 = cljs.core.chunk_rest(seq__24511_24533__$1);
var G__24536 = c__6945__auto___24534;
var G__24537 = cljs.core.count(c__6945__auto___24534);
var G__24538 = (0);
seq__24511_24522 = G__24535;
chunk__24512_24523 = G__24536;
count__24513_24524 = G__24537;
i__24514_24525 = G__24538;
continue;
} else {
var k__15709__auto___24539 = cljs.core.first(seq__24511_24533__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24539)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24516_24540 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24539.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24539.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24539.call(null,env))),[cljs.core.str(k__15709__auto___24539)].join('')),"- ")));
console.log(G__24516_24540);
} else {
}
} else {
}

var G__24541 = cljs.core.next(seq__24511_24533__$1);
var G__24542 = null;
var G__24543 = (0);
var G__24544 = (0);
seq__24511_24522 = G__24541;
chunk__24512_24523 = G__24542;
count__24513_24524 = G__24543;
i__24514_24525 = G__24544;
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
var G__24517_24545 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,tx)));
console.log(G__24517_24545);
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
var G__24546_24557 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate locale/create")));
console.log(G__24546_24557);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24547_24558 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24547_24558);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24548_24559 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24548_24559);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24549_24560 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24549_24560);
} else {
}

var seq__24550_24561 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24551_24562 = null;
var count__24552_24563 = (0);
var i__24553_24564 = (0);
while(true){
if((i__24553_24564 < count__24552_24563)){
var k__15709__auto___24565 = chunk__24551_24562.cljs$core$IIndexed$_nth$arity$2(null,i__24553_24564);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24565)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24554_24566 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24565.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24565.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24565.call(null,env))),[cljs.core.str(k__15709__auto___24565)].join('')),"- ")));
console.log(G__24554_24566);
} else {
}
} else {
}

var G__24567 = seq__24550_24561;
var G__24568 = chunk__24551_24562;
var G__24569 = count__24552_24563;
var G__24570 = (i__24553_24564 + (1));
seq__24550_24561 = G__24567;
chunk__24551_24562 = G__24568;
count__24552_24563 = G__24569;
i__24553_24564 = G__24570;
continue;
} else {
var temp__4425__auto___24571 = cljs.core.seq(seq__24550_24561);
if(temp__4425__auto___24571){
var seq__24550_24572__$1 = temp__4425__auto___24571;
if(cljs.core.chunked_seq_QMARK_(seq__24550_24572__$1)){
var c__6945__auto___24573 = cljs.core.chunk_first(seq__24550_24572__$1);
var G__24574 = cljs.core.chunk_rest(seq__24550_24572__$1);
var G__24575 = c__6945__auto___24573;
var G__24576 = cljs.core.count(c__6945__auto___24573);
var G__24577 = (0);
seq__24550_24561 = G__24574;
chunk__24551_24562 = G__24575;
count__24552_24563 = G__24576;
i__24553_24564 = G__24577;
continue;
} else {
var k__15709__auto___24578 = cljs.core.first(seq__24550_24572__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24578)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24555_24579 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24578.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24578.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24578.call(null,env))),[cljs.core.str(k__15709__auto___24578)].join('')),"- ")));
console.log(G__24555_24579);
} else {
}
} else {
}

var G__24580 = cljs.core.next(seq__24550_24572__$1);
var G__24581 = null;
var G__24582 = (0);
var G__24583 = (0);
seq__24550_24561 = G__24580;
chunk__24551_24562 = G__24581;
count__24552_24563 = G__24582;
i__24553_24564 = G__24583;
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
var G__24556_24584 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,tx),"mutate locale/create tx:")));
console.log(G__24556_24584);
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
var G__24585_24595 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate locale/delete")));
console.log(G__24585_24595);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24586_24596 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24586_24596);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24587_24597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24587_24597);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24588_24598 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24588_24598);
} else {
}

var seq__24589_24599 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24590_24600 = null;
var count__24591_24601 = (0);
var i__24592_24602 = (0);
while(true){
if((i__24592_24602 < count__24591_24601)){
var k__15709__auto___24603 = chunk__24590_24600.cljs$core$IIndexed$_nth$arity$2(null,i__24592_24602);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24603)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24593_24604 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24603.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24603.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24603.call(null,env))),[cljs.core.str(k__15709__auto___24603)].join('')),"- ")));
console.log(G__24593_24604);
} else {
}
} else {
}

var G__24605 = seq__24589_24599;
var G__24606 = chunk__24590_24600;
var G__24607 = count__24591_24601;
var G__24608 = (i__24592_24602 + (1));
seq__24589_24599 = G__24605;
chunk__24590_24600 = G__24606;
count__24591_24601 = G__24607;
i__24592_24602 = G__24608;
continue;
} else {
var temp__4425__auto___24609 = cljs.core.seq(seq__24589_24599);
if(temp__4425__auto___24609){
var seq__24589_24610__$1 = temp__4425__auto___24609;
if(cljs.core.chunked_seq_QMARK_(seq__24589_24610__$1)){
var c__6945__auto___24611 = cljs.core.chunk_first(seq__24589_24610__$1);
var G__24612 = cljs.core.chunk_rest(seq__24589_24610__$1);
var G__24613 = c__6945__auto___24611;
var G__24614 = cljs.core.count(c__6945__auto___24611);
var G__24615 = (0);
seq__24589_24599 = G__24612;
chunk__24590_24600 = G__24613;
count__24591_24601 = G__24614;
i__24592_24602 = G__24615;
continue;
} else {
var k__15709__auto___24616 = cljs.core.first(seq__24589_24610__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24616)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24594_24617 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24616.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24616.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24616.call(null,env))),[cljs.core.str(k__15709__auto___24616)].join('')),"- ")));
console.log(G__24594_24617);
} else {
}
} else {
}

var G__24618 = cljs.core.next(seq__24589_24610__$1);
var G__24619 = null;
var G__24620 = (0);
var G__24621 = (0);
seq__24589_24599 = G__24618;
chunk__24590_24600 = G__24619;
count__24591_24601 = G__24620;
i__24592_24602 = G__24621;
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
var G__24622_24632 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate localised-string/create")));
console.log(G__24622_24632);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24623_24633 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24623_24633);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24624_24634 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24624_24634);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24625_24635 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24625_24635);
} else {
}

var seq__24626_24636 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24627_24637 = null;
var count__24628_24638 = (0);
var i__24629_24639 = (0);
while(true){
if((i__24629_24639 < count__24628_24638)){
var k__15709__auto___24640 = chunk__24627_24637.cljs$core$IIndexed$_nth$arity$2(null,i__24629_24639);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24640)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24630_24641 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24640.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24640.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24640.call(null,env))),[cljs.core.str(k__15709__auto___24640)].join('')),"- ")));
console.log(G__24630_24641);
} else {
}
} else {
}

var G__24642 = seq__24626_24636;
var G__24643 = chunk__24627_24637;
var G__24644 = count__24628_24638;
var G__24645 = (i__24629_24639 + (1));
seq__24626_24636 = G__24642;
chunk__24627_24637 = G__24643;
count__24628_24638 = G__24644;
i__24629_24639 = G__24645;
continue;
} else {
var temp__4425__auto___24646 = cljs.core.seq(seq__24626_24636);
if(temp__4425__auto___24646){
var seq__24626_24647__$1 = temp__4425__auto___24646;
if(cljs.core.chunked_seq_QMARK_(seq__24626_24647__$1)){
var c__6945__auto___24648 = cljs.core.chunk_first(seq__24626_24647__$1);
var G__24649 = cljs.core.chunk_rest(seq__24626_24647__$1);
var G__24650 = c__6945__auto___24648;
var G__24651 = cljs.core.count(c__6945__auto___24648);
var G__24652 = (0);
seq__24626_24636 = G__24649;
chunk__24627_24637 = G__24650;
count__24628_24638 = G__24651;
i__24629_24639 = G__24652;
continue;
} else {
var k__15709__auto___24653 = cljs.core.first(seq__24626_24647__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24653)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24631_24654 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24653.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24653.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24653.call(null,env))),[cljs.core.str(k__15709__auto___24653)].join('')),"- ")));
console.log(G__24631_24654);
} else {
}
} else {
}

var G__24655 = cljs.core.next(seq__24626_24647__$1);
var G__24656 = null;
var G__24657 = (0);
var G__24658 = (0);
seq__24626_24636 = G__24655;
chunk__24627_24637 = G__24656;
count__24628_24638 = G__24657;
i__24629_24639 = G__24658;
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
var G__24659_24671 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate localised-string/set")));
console.log(G__24659_24671);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24660_24672 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24660_24672);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24661_24673 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24661_24673);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24662_24674 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24662_24674);
} else {
}

var seq__24663_24675 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24664_24676 = null;
var count__24665_24677 = (0);
var i__24666_24678 = (0);
while(true){
if((i__24666_24678 < count__24665_24677)){
var k__15709__auto___24679 = chunk__24664_24676.cljs$core$IIndexed$_nth$arity$2(null,i__24666_24678);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24679)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24667_24680 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24679.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24679.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24679.call(null,env))),[cljs.core.str(k__15709__auto___24679)].join('')),"- ")));
console.log(G__24667_24680);
} else {
}
} else {
}

var G__24681 = seq__24663_24675;
var G__24682 = chunk__24664_24676;
var G__24683 = count__24665_24677;
var G__24684 = (i__24666_24678 + (1));
seq__24663_24675 = G__24681;
chunk__24664_24676 = G__24682;
count__24665_24677 = G__24683;
i__24666_24678 = G__24684;
continue;
} else {
var temp__4425__auto___24685 = cljs.core.seq(seq__24663_24675);
if(temp__4425__auto___24685){
var seq__24663_24686__$1 = temp__4425__auto___24685;
if(cljs.core.chunked_seq_QMARK_(seq__24663_24686__$1)){
var c__6945__auto___24687 = cljs.core.chunk_first(seq__24663_24686__$1);
var G__24688 = cljs.core.chunk_rest(seq__24663_24686__$1);
var G__24689 = c__6945__auto___24687;
var G__24690 = cljs.core.count(c__6945__auto___24687);
var G__24691 = (0);
seq__24663_24675 = G__24688;
chunk__24664_24676 = G__24689;
count__24665_24677 = G__24690;
i__24666_24678 = G__24691;
continue;
} else {
var k__15709__auto___24692 = cljs.core.first(seq__24663_24686__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24692)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24668_24693 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24692.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24692.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24692.call(null,env))),[cljs.core.str(k__15709__auto___24692)].join('')),"- ")));
console.log(G__24668_24693);
} else {
}
} else {
}

var G__24694 = cljs.core.next(seq__24663_24686__$1);
var G__24695 = null;
var G__24696 = (0);
var G__24697 = (0);
seq__24663_24675 = G__24694;
chunk__24664_24676 = G__24695;
count__24665_24677 = G__24696;
i__24666_24678 = G__24697;
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
var map__24669 = params;
var map__24669__$1 = ((((!((map__24669 == null)))?((((map__24669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24669):map__24669);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24669__$1,cljs.core.cst$kw$string_SLASH_ident);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24669__$1,cljs.core.cst$kw$locale_SLASH_id);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24669__$1,cljs.core.cst$kw$text);
var tx = om_next_datascript_localisation_demo.datascript.db.make_edited_string_tx(db,ident,id,text);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$localised_DASH_strings], null)], null),cljs.core.cst$kw$action,((function (db,map__24669,map__24669__$1,ident,id,text,tx){
return (function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db,tx);
});})(db,map__24669,map__24669__$1,ident,id,text,tx))
], null);
}));
om_next_datascript_localisation_demo.datascript.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$localised_SLASH_create,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24698_24710 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate localised/create")));
console.log(G__24698_24710);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24699_24711 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24699_24711);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24700_24712 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24700_24712);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24701_24713 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24701_24713);
} else {
}

var seq__24702_24714 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24703_24715 = null;
var count__24704_24716 = (0);
var i__24705_24717 = (0);
while(true){
if((i__24705_24717 < count__24704_24716)){
var k__15709__auto___24718 = chunk__24703_24715.cljs$core$IIndexed$_nth$arity$2(null,i__24705_24717);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24718)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24706_24719 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24718.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24718.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24718.call(null,env))),[cljs.core.str(k__15709__auto___24718)].join('')),"- ")));
console.log(G__24706_24719);
} else {
}
} else {
}

var G__24720 = seq__24702_24714;
var G__24721 = chunk__24703_24715;
var G__24722 = count__24704_24716;
var G__24723 = (i__24705_24717 + (1));
seq__24702_24714 = G__24720;
chunk__24703_24715 = G__24721;
count__24704_24716 = G__24722;
i__24705_24717 = G__24723;
continue;
} else {
var temp__4425__auto___24724 = cljs.core.seq(seq__24702_24714);
if(temp__4425__auto___24724){
var seq__24702_24725__$1 = temp__4425__auto___24724;
if(cljs.core.chunked_seq_QMARK_(seq__24702_24725__$1)){
var c__6945__auto___24726 = cljs.core.chunk_first(seq__24702_24725__$1);
var G__24727 = cljs.core.chunk_rest(seq__24702_24725__$1);
var G__24728 = c__6945__auto___24726;
var G__24729 = cljs.core.count(c__6945__auto___24726);
var G__24730 = (0);
seq__24702_24714 = G__24727;
chunk__24703_24715 = G__24728;
count__24704_24716 = G__24729;
i__24705_24717 = G__24730;
continue;
} else {
var k__15709__auto___24731 = cljs.core.first(seq__24702_24725__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24731)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24707_24732 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24731.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24731.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24731.call(null,env))),[cljs.core.str(k__15709__auto___24731)].join('')),"- ")));
console.log(G__24707_24732);
} else {
}
} else {
}

var G__24733 = cljs.core.next(seq__24702_24725__$1);
var G__24734 = null;
var G__24735 = (0);
var G__24736 = (0);
seq__24702_24714 = G__24733;
chunk__24703_24715 = G__24734;
count__24704_24716 = G__24735;
i__24705_24717 = G__24736;
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
var map__24708 = params;
var map__24708__$1 = ((((!((map__24708 == null)))?((((map__24708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24708):map__24708);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24708__$1,cljs.core.cst$kw$db_SLASH_id);
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24708__$1,cljs.core.cst$kw$locale);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24708__$1,cljs.core.cst$kw$value);
var tx = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,(-1),cljs.core.cst$kw$localised_SLASH_locale,locale], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,(-1),cljs.core.cst$kw$value,value], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,id,cljs.core.cst$kw$localised,(-1)], null)], null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (db,map__24708,map__24708__$1,id,locale,value,tx){
return (function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db,tx);
});})(db,map__24708,map__24708__$1,id,locale,value,tx))
], null);
}));
om_next_datascript_localisation_demo.datascript.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$attrib_SLASH_set,(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24737_24749 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate attrib/set")));
console.log(G__24737_24749);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24738_24750 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24738_24750);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24739_24751 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24739_24751);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24740_24752 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24740_24752);
} else {
}

var seq__24741_24753 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24742_24754 = null;
var count__24743_24755 = (0);
var i__24744_24756 = (0);
while(true){
if((i__24744_24756 < count__24743_24755)){
var k__15709__auto___24757 = chunk__24742_24754.cljs$core$IIndexed$_nth$arity$2(null,i__24744_24756);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24757)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24745_24758 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24757.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24757.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24757.call(null,env))),[cljs.core.str(k__15709__auto___24757)].join('')),"- ")));
console.log(G__24745_24758);
} else {
}
} else {
}

var G__24759 = seq__24741_24753;
var G__24760 = chunk__24742_24754;
var G__24761 = count__24743_24755;
var G__24762 = (i__24744_24756 + (1));
seq__24741_24753 = G__24759;
chunk__24742_24754 = G__24760;
count__24743_24755 = G__24761;
i__24744_24756 = G__24762;
continue;
} else {
var temp__4425__auto___24763 = cljs.core.seq(seq__24741_24753);
if(temp__4425__auto___24763){
var seq__24741_24764__$1 = temp__4425__auto___24763;
if(cljs.core.chunked_seq_QMARK_(seq__24741_24764__$1)){
var c__6945__auto___24765 = cljs.core.chunk_first(seq__24741_24764__$1);
var G__24766 = cljs.core.chunk_rest(seq__24741_24764__$1);
var G__24767 = c__6945__auto___24765;
var G__24768 = cljs.core.count(c__6945__auto___24765);
var G__24769 = (0);
seq__24741_24753 = G__24766;
chunk__24742_24754 = G__24767;
count__24743_24755 = G__24768;
i__24744_24756 = G__24769;
continue;
} else {
var k__15709__auto___24770 = cljs.core.first(seq__24741_24764__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24770)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24746_24771 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24770.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24770.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24770.call(null,env))),[cljs.core.str(k__15709__auto___24770)].join('')),"- ")));
console.log(G__24746_24771);
} else {
}
} else {
}

var G__24772 = cljs.core.next(seq__24741_24764__$1);
var G__24773 = null;
var G__24774 = (0);
var G__24775 = (0);
seq__24741_24753 = G__24772;
chunk__24742_24754 = G__24773;
count__24743_24755 = G__24774;
i__24744_24756 = G__24775;
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
var map__24747 = params;
var map__24747__$1 = ((((!((map__24747 == null)))?((((map__24747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24747):map__24747);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24747__$1,cljs.core.cst$kw$db_SLASH_id);
var attrib = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24747__$1,cljs.core.cst$kw$attrib);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24747__$1,cljs.core.cst$kw$value);
var tx = cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$db_SLASH_id,id,attrib,value], true, false);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (db,map__24747,map__24747__$1,id,attrib,value,tx){
return (function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null));
});})(db,map__24747,map__24747__$1,id,attrib,value,tx))
], null);
}));
om_next_datascript_localisation_demo.datascript.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$delete_SLASH_db_DASH_id,(function (env,key,params){
if(cljs.core.truth_(cljs.core.cst$kw$ids.cljs$core$IFn$_invoke$arity$1(params))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$kw$ids,cljs.core.cst$sym$params)], 0)))].join('')));
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24776_24786 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=== mutate delete/db-id")));
console.log(G__24776_24786);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24777_24787 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),"- key")));
console.log(G__24777_24787);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24778_24788 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),"- params")));
console.log(G__24778_24788);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24779_24789 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.keys(env)),"- env contains:")));
console.log(G__24779_24789);
} else {
}

var seq__24780_24790 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$pathopt,cljs.core.cst$kw$ref,cljs.core.cst$kw$ast,cljs.core.cst$kw$component,cljs.core.cst$kw$shared,cljs.core.cst$kw$target,cljs.core.cst$kw$query,cljs.core.cst$kw$query_SLASH_root], null));
var chunk__24781_24791 = null;
var count__24782_24792 = (0);
var i__24783_24793 = (0);
while(true){
if((i__24783_24793 < count__24782_24792)){
var k__15709__auto___24794 = chunk__24781_24791.cljs$core$IIndexed$_nth$arity$2(null,i__24783_24793);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24794)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24784_24795 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24794.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24794.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24794.call(null,env))),[cljs.core.str(k__15709__auto___24794)].join('')),"- ")));
console.log(G__24784_24795);
} else {
}
} else {
}

var G__24796 = seq__24780_24790;
var G__24797 = chunk__24781_24791;
var G__24798 = count__24782_24792;
var G__24799 = (i__24783_24793 + (1));
seq__24780_24790 = G__24796;
chunk__24781_24791 = G__24797;
count__24782_24792 = G__24798;
i__24783_24793 = G__24799;
continue;
} else {
var temp__4425__auto___24800 = cljs.core.seq(seq__24780_24790);
if(temp__4425__auto___24800){
var seq__24780_24801__$1 = temp__4425__auto___24800;
if(cljs.core.chunked_seq_QMARK_(seq__24780_24801__$1)){
var c__6945__auto___24802 = cljs.core.chunk_first(seq__24780_24801__$1);
var G__24803 = cljs.core.chunk_rest(seq__24780_24801__$1);
var G__24804 = c__6945__auto___24802;
var G__24805 = cljs.core.count(c__6945__auto___24802);
var G__24806 = (0);
seq__24780_24790 = G__24803;
chunk__24781_24791 = G__24804;
count__24782_24792 = G__24805;
i__24783_24793 = G__24806;
continue;
} else {
var k__15709__auto___24807 = cljs.core.first(seq__24780_24801__$1);
if(cljs.core.contains_QMARK_(env,k__15709__auto___24807)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24785_24808 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(k__15709__auto___24807.cljs$core$IFn$_invoke$arity$1 ? k__15709__auto___24807.cljs$core$IFn$_invoke$arity$1(env) : k__15709__auto___24807.call(null,env))),[cljs.core.str(k__15709__auto___24807)].join('')),"- ")));
console.log(G__24785_24808);
} else {
}
} else {
}

var G__24809 = cljs.core.next(seq__24780_24801__$1);
var G__24810 = null;
var G__24811 = (0);
var G__24812 = (0);
seq__24780_24790 = G__24809;
chunk__24781_24791 = G__24810;
count__24782_24792 = G__24811;
i__24783_24793 = G__24812;
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
var G__24817_24821 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")));
console.log(G__24817_24821);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24818_24822 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,q),"query:")));
console.log(G__24818_24822);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24819_24823 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(om_next_datascript_localisation_demo.datascript.parser.parser.cljs$core$IFn$_invoke$arity$2 ? om_next_datascript_localisation_demo.datascript.parser.parser.cljs$core$IFn$_invoke$arity$2(env,q) : om_next_datascript_localisation_demo.datascript.parser.parser.call(null,env,q))),"result:")));
console.log(G__24819_24823);
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24820 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")));
return console.log(G__24820);
} else {
return null;
}
});
om_next_datascript_localisation_demo.datascript.parser.test_locales = (function om_next_datascript_localisation_demo$datascript$parser$test_locales(){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
var G__24825_24826 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core._conj(cljs.core.List.EMPTY,"test-locales")));
console.log(G__24825_24826);
} else {
}

var queries = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locales], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locales,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app_SLASH_locale], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_SLASH_locale,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app_SLASH_locale], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app$localised_SLASH_strings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app_DASH_title,cljs.core.cst$kw$app_DASH_desc,cljs.core.cst$kw$app_DASH_locale_DASH_current], null)], null)], null)], null);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(om_next_datascript_localisation_demo.datascript.parser.log_query,queries));
});
om_next_datascript_localisation_demo.datascript.parser.test_parser = (function om_next_datascript_localisation_demo$datascript$parser$test_parser(){
return om_next_datascript_localisation_demo.datascript.parser.test_locales();
});
