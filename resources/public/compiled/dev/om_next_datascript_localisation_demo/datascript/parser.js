// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_datascript_localisation_demo.datascript.parser');
goog.require('cljs.core');
goog.require('om.next');
goog.require('datascript.core');
goog.require('om_next_datascript_localisation_demo.logging');
goog.require('om_next_datascript_localisation_demo.datascript.db');
goog.require('om_next_datascript_localisation_demo.utils.ident');
if(typeof om_next_datascript_localisation_demo.datascript.parser.read !== 'undefined'){
} else {
om_next_datascript_localisation_demo.datascript.parser.read = (function (){var method_table__7055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-next-datascript-localisation-demo.datascript.parser","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7059__auto__,method_table__7055__auto__,prefer_table__7056__auto__,method_cache__7057__auto__,cached_hierarchy__7058__auto__));
})();
}
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"*-* read default"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11014_11018 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11015_11019 = null;
var count__11016_11020 = (0);
var i__11017_11021 = (0);
while(true){
if((i__11017_11021 < count__11016_11020)){
var k__7265__auto___11022 = cljs.core._nth.call(null,chunk__11015_11019,i__11017_11021);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11022)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11022.call(null,env)),[cljs.core.str(k__7265__auto___11022)].join('')),"- "))));
} else {
}
} else {
}

var G__11023 = seq__11014_11018;
var G__11024 = chunk__11015_11019;
var G__11025 = count__11016_11020;
var G__11026 = (i__11017_11021 + (1));
seq__11014_11018 = G__11023;
chunk__11015_11019 = G__11024;
count__11016_11020 = G__11025;
i__11017_11021 = G__11026;
continue;
} else {
var temp__4425__auto___11027 = cljs.core.seq.call(null,seq__11014_11018);
if(temp__4425__auto___11027){
var seq__11014_11028__$1 = temp__4425__auto___11027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11014_11028__$1)){
var c__6945__auto___11029 = cljs.core.chunk_first.call(null,seq__11014_11028__$1);
var G__11030 = cljs.core.chunk_rest.call(null,seq__11014_11028__$1);
var G__11031 = c__6945__auto___11029;
var G__11032 = cljs.core.count.call(null,c__6945__auto___11029);
var G__11033 = (0);
seq__11014_11018 = G__11030;
chunk__11015_11019 = G__11031;
count__11016_11020 = G__11032;
i__11017_11021 = G__11033;
continue;
} else {
var k__7265__auto___11034 = cljs.core.first.call(null,seq__11014_11028__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11034)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11034.call(null,env)),[cljs.core.str(k__7265__auto___11034)].join('')),"- "))));
} else {
}
} else {
}

var G__11035 = cljs.core.next.call(null,seq__11014_11028__$1);
var G__11036 = null;
var G__11037 = (0);
var G__11038 = (0);
seq__11014_11018 = G__11035;
chunk__11015_11019 = G__11036;
count__11016_11020 = G__11037;
i__11017_11021 = G__11038;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(env);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_next_datascript_localisation_demo.datascript.db.read_default.call(null,db,key,query)], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.read,new cljs.core.Keyword(null,"app.locale","app.locale",1484369313),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"--- read app.locale"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11039_11043 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11040_11044 = null;
var count__11041_11045 = (0);
var i__11042_11046 = (0);
while(true){
if((i__11042_11046 < count__11041_11045)){
var k__7265__auto___11047 = cljs.core._nth.call(null,chunk__11040_11044,i__11042_11046);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11047)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11047.call(null,env)),[cljs.core.str(k__7265__auto___11047)].join('')),"- "))));
} else {
}
} else {
}

var G__11048 = seq__11039_11043;
var G__11049 = chunk__11040_11044;
var G__11050 = count__11041_11045;
var G__11051 = (i__11042_11046 + (1));
seq__11039_11043 = G__11048;
chunk__11040_11044 = G__11049;
count__11041_11045 = G__11050;
i__11042_11046 = G__11051;
continue;
} else {
var temp__4425__auto___11052 = cljs.core.seq.call(null,seq__11039_11043);
if(temp__4425__auto___11052){
var seq__11039_11053__$1 = temp__4425__auto___11052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11039_11053__$1)){
var c__6945__auto___11054 = cljs.core.chunk_first.call(null,seq__11039_11053__$1);
var G__11055 = cljs.core.chunk_rest.call(null,seq__11039_11053__$1);
var G__11056 = c__6945__auto___11054;
var G__11057 = cljs.core.count.call(null,c__6945__auto___11054);
var G__11058 = (0);
seq__11039_11043 = G__11055;
chunk__11040_11044 = G__11056;
count__11041_11045 = G__11057;
i__11042_11046 = G__11058;
continue;
} else {
var k__7265__auto___11059 = cljs.core.first.call(null,seq__11039_11053__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11059)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11059.call(null,env)),[cljs.core.str(k__7265__auto___11059)].join('')),"- "))));
} else {
}
} else {
}

var G__11060 = cljs.core.next.call(null,seq__11039_11053__$1);
var G__11061 = null;
var G__11062 = (0);
var G__11063 = (0);
seq__11039_11043 = G__11060;
chunk__11040_11044 = G__11061;
count__11041_11045 = G__11062;
i__11042_11046 = G__11063;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(env);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_next_datascript_localisation_demo.datascript.db.app_locale.call(null,db,query)], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.read,new cljs.core.Keyword(null,"locale","locale",-2115712697),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"--- read locale"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11064_11068 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11065_11069 = null;
var count__11066_11070 = (0);
var i__11067_11071 = (0);
while(true){
if((i__11067_11071 < count__11066_11070)){
var k__7265__auto___11072 = cljs.core._nth.call(null,chunk__11065_11069,i__11067_11071);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11072)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11072.call(null,env)),[cljs.core.str(k__7265__auto___11072)].join('')),"- "))));
} else {
}
} else {
}

var G__11073 = seq__11064_11068;
var G__11074 = chunk__11065_11069;
var G__11075 = count__11066_11070;
var G__11076 = (i__11067_11071 + (1));
seq__11064_11068 = G__11073;
chunk__11065_11069 = G__11074;
count__11066_11070 = G__11075;
i__11067_11071 = G__11076;
continue;
} else {
var temp__4425__auto___11077 = cljs.core.seq.call(null,seq__11064_11068);
if(temp__4425__auto___11077){
var seq__11064_11078__$1 = temp__4425__auto___11077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11064_11078__$1)){
var c__6945__auto___11079 = cljs.core.chunk_first.call(null,seq__11064_11078__$1);
var G__11080 = cljs.core.chunk_rest.call(null,seq__11064_11078__$1);
var G__11081 = c__6945__auto___11079;
var G__11082 = cljs.core.count.call(null,c__6945__auto___11079);
var G__11083 = (0);
seq__11064_11068 = G__11080;
chunk__11065_11069 = G__11081;
count__11066_11070 = G__11082;
i__11067_11071 = G__11083;
continue;
} else {
var k__7265__auto___11084 = cljs.core.first.call(null,seq__11064_11078__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11084)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11084.call(null,env)),[cljs.core.str(k__7265__auto___11084)].join('')),"- "))));
} else {
}
} else {
}

var G__11085 = cljs.core.next.call(null,seq__11064_11078__$1);
var G__11086 = null;
var G__11087 = (0);
var G__11088 = (0);
seq__11064_11068 = G__11085;
chunk__11065_11069 = G__11086;
count__11066_11070 = G__11087;
i__11067_11071 = G__11088;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(env);
var ident = new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(params);
var eid = cljs.core.get_in.call(null,ident,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
if(cljs.core.truth_(eid)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_next_datascript_localisation_demo.datascript.db.db_pull.call(null,db,eid,query)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.read,new cljs.core.Keyword(null,"locales-via-refs","locales-via-refs",655926312),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"--- read locales-via-refs"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11090_11094 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11091_11095 = null;
var count__11092_11096 = (0);
var i__11093_11097 = (0);
while(true){
if((i__11093_11097 < count__11092_11096)){
var k__7265__auto___11098 = cljs.core._nth.call(null,chunk__11091_11095,i__11093_11097);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11098)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11098.call(null,env)),[cljs.core.str(k__7265__auto___11098)].join('')),"- "))));
} else {
}
} else {
}

var G__11099 = seq__11090_11094;
var G__11100 = chunk__11091_11095;
var G__11101 = count__11092_11096;
var G__11102 = (i__11093_11097 + (1));
seq__11090_11094 = G__11099;
chunk__11091_11095 = G__11100;
count__11092_11096 = G__11101;
i__11093_11097 = G__11102;
continue;
} else {
var temp__4425__auto___11103 = cljs.core.seq.call(null,seq__11090_11094);
if(temp__4425__auto___11103){
var seq__11090_11104__$1 = temp__4425__auto___11103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11090_11104__$1)){
var c__6945__auto___11105 = cljs.core.chunk_first.call(null,seq__11090_11104__$1);
var G__11106 = cljs.core.chunk_rest.call(null,seq__11090_11104__$1);
var G__11107 = c__6945__auto___11105;
var G__11108 = cljs.core.count.call(null,c__6945__auto___11105);
var G__11109 = (0);
seq__11090_11094 = G__11106;
chunk__11091_11095 = G__11107;
count__11092_11096 = G__11108;
i__11093_11097 = G__11109;
continue;
} else {
var k__7265__auto___11110 = cljs.core.first.call(null,seq__11090_11104__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11110)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11110.call(null,env)),[cljs.core.str(k__7265__auto___11110)].join('')),"- "))));
} else {
}
} else {
}

var G__11111 = cljs.core.next.call(null,seq__11090_11104__$1);
var G__11112 = null;
var G__11113 = (0);
var G__11114 = (0);
seq__11090_11094 = G__11111;
chunk__11091_11095 = G__11112;
count__11092_11096 = G__11113;
i__11093_11097 = G__11114;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(env);
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(env);
var ref = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
var refs = (cljs.core.truth_(ref)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null):om_next_datascript_localisation_demo.datascript.db.locale_refs.call(null,db));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.mapv.call(null,((function (db,query,parser,ref,refs){
return (function (p1__11089_SHARP_){
return parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ref","ref",1289896967),p1__11089_SHARP_),query);
});})(db,query,parser,ref,refs))
,refs)], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.read,new cljs.core.Keyword(null,"locales","locales",1785635955),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"--- read locales"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11115_11119 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11116_11120 = null;
var count__11117_11121 = (0);
var i__11118_11122 = (0);
while(true){
if((i__11118_11122 < count__11117_11121)){
var k__7265__auto___11123 = cljs.core._nth.call(null,chunk__11116_11120,i__11118_11122);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11123)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11123.call(null,env)),[cljs.core.str(k__7265__auto___11123)].join('')),"- "))));
} else {
}
} else {
}

var G__11124 = seq__11115_11119;
var G__11125 = chunk__11116_11120;
var G__11126 = count__11117_11121;
var G__11127 = (i__11118_11122 + (1));
seq__11115_11119 = G__11124;
chunk__11116_11120 = G__11125;
count__11117_11121 = G__11126;
i__11118_11122 = G__11127;
continue;
} else {
var temp__4425__auto___11128 = cljs.core.seq.call(null,seq__11115_11119);
if(temp__4425__auto___11128){
var seq__11115_11129__$1 = temp__4425__auto___11128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11115_11129__$1)){
var c__6945__auto___11130 = cljs.core.chunk_first.call(null,seq__11115_11129__$1);
var G__11131 = cljs.core.chunk_rest.call(null,seq__11115_11129__$1);
var G__11132 = c__6945__auto___11130;
var G__11133 = cljs.core.count.call(null,c__6945__auto___11130);
var G__11134 = (0);
seq__11115_11119 = G__11131;
chunk__11116_11120 = G__11132;
count__11117_11121 = G__11133;
i__11118_11122 = G__11134;
continue;
} else {
var k__7265__auto___11135 = cljs.core.first.call(null,seq__11115_11129__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11135)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11135.call(null,env)),[cljs.core.str(k__7265__auto___11135)].join('')),"- "))));
} else {
}
} else {
}

var G__11136 = cljs.core.next.call(null,seq__11115_11129__$1);
var G__11137 = null;
var G__11138 = (0);
var G__11139 = (0);
seq__11115_11119 = G__11136;
chunk__11116_11120 = G__11137;
count__11117_11121 = G__11138;
i__11118_11122 = G__11139;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(env);
var ref = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(ref)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_next_datascript_localisation_demo.datascript.db.read_locale.call(null,db,cljs.core.get_in.call(null,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),query))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_next_datascript_localisation_demo.datascript.db.read_locales.call(null,db,query)], null);
}
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.read,new cljs.core.Keyword(null,"locales-selector-props","locales-selector-props",1576211992),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"--- read locales-selector-props"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11140_11144 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11141_11145 = null;
var count__11142_11146 = (0);
var i__11143_11147 = (0);
while(true){
if((i__11143_11147 < count__11142_11146)){
var k__7265__auto___11148 = cljs.core._nth.call(null,chunk__11141_11145,i__11143_11147);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11148)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11148.call(null,env)),[cljs.core.str(k__7265__auto___11148)].join('')),"- "))));
} else {
}
} else {
}

var G__11149 = seq__11140_11144;
var G__11150 = chunk__11141_11145;
var G__11151 = count__11142_11146;
var G__11152 = (i__11143_11147 + (1));
seq__11140_11144 = G__11149;
chunk__11141_11145 = G__11150;
count__11142_11146 = G__11151;
i__11143_11147 = G__11152;
continue;
} else {
var temp__4425__auto___11153 = cljs.core.seq.call(null,seq__11140_11144);
if(temp__4425__auto___11153){
var seq__11140_11154__$1 = temp__4425__auto___11153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11140_11154__$1)){
var c__6945__auto___11155 = cljs.core.chunk_first.call(null,seq__11140_11154__$1);
var G__11156 = cljs.core.chunk_rest.call(null,seq__11140_11154__$1);
var G__11157 = c__6945__auto___11155;
var G__11158 = cljs.core.count.call(null,c__6945__auto___11155);
var G__11159 = (0);
seq__11140_11144 = G__11156;
chunk__11141_11145 = G__11157;
count__11142_11146 = G__11158;
i__11143_11147 = G__11159;
continue;
} else {
var k__7265__auto___11160 = cljs.core.first.call(null,seq__11140_11154__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11160)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11160.call(null,env)),[cljs.core.str(k__7265__auto___11160)].join('')),"- "))));
} else {
}
} else {
}

var G__11161 = cljs.core.next.call(null,seq__11140_11154__$1);
var G__11162 = null;
var G__11163 = (0);
var G__11164 = (0);
seq__11140_11144 = G__11161;
chunk__11141_11145 = G__11162;
count__11142_11146 = G__11163;
i__11143_11147 = G__11164;
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

var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(env);
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(env);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,env,query)], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.read,new cljs.core.Keyword(null,"locales-table-props","locales-table-props",-1630080391),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"--- read locales-table-props"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11165_11169 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11166_11170 = null;
var count__11167_11171 = (0);
var i__11168_11172 = (0);
while(true){
if((i__11168_11172 < count__11167_11171)){
var k__7265__auto___11173 = cljs.core._nth.call(null,chunk__11166_11170,i__11168_11172);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11173)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11173.call(null,env)),[cljs.core.str(k__7265__auto___11173)].join('')),"- "))));
} else {
}
} else {
}

var G__11174 = seq__11165_11169;
var G__11175 = chunk__11166_11170;
var G__11176 = count__11167_11171;
var G__11177 = (i__11168_11172 + (1));
seq__11165_11169 = G__11174;
chunk__11166_11170 = G__11175;
count__11167_11171 = G__11176;
i__11168_11172 = G__11177;
continue;
} else {
var temp__4425__auto___11178 = cljs.core.seq.call(null,seq__11165_11169);
if(temp__4425__auto___11178){
var seq__11165_11179__$1 = temp__4425__auto___11178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11165_11179__$1)){
var c__6945__auto___11180 = cljs.core.chunk_first.call(null,seq__11165_11179__$1);
var G__11181 = cljs.core.chunk_rest.call(null,seq__11165_11179__$1);
var G__11182 = c__6945__auto___11180;
var G__11183 = cljs.core.count.call(null,c__6945__auto___11180);
var G__11184 = (0);
seq__11165_11169 = G__11181;
chunk__11166_11170 = G__11182;
count__11167_11171 = G__11183;
i__11168_11172 = G__11184;
continue;
} else {
var k__7265__auto___11185 = cljs.core.first.call(null,seq__11165_11179__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11185)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11185.call(null,env)),[cljs.core.str(k__7265__auto___11185)].join('')),"- "))));
} else {
}
} else {
}

var G__11186 = cljs.core.next.call(null,seq__11165_11179__$1);
var G__11187 = null;
var G__11188 = (0);
var G__11189 = (0);
seq__11165_11169 = G__11186;
chunk__11166_11170 = G__11187;
count__11167_11171 = G__11188;
i__11168_11172 = G__11189;
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

var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(env);
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(env);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,env,query)], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.read,new cljs.core.Keyword(null,"localised-string-table-props","localised-string-table-props",388820504),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"--- read localised-string-table-props"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11190_11194 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11191_11195 = null;
var count__11192_11196 = (0);
var i__11193_11197 = (0);
while(true){
if((i__11193_11197 < count__11192_11196)){
var k__7265__auto___11198 = cljs.core._nth.call(null,chunk__11191_11195,i__11193_11197);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11198)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11198.call(null,env)),[cljs.core.str(k__7265__auto___11198)].join('')),"- "))));
} else {
}
} else {
}

var G__11199 = seq__11190_11194;
var G__11200 = chunk__11191_11195;
var G__11201 = count__11192_11196;
var G__11202 = (i__11193_11197 + (1));
seq__11190_11194 = G__11199;
chunk__11191_11195 = G__11200;
count__11192_11196 = G__11201;
i__11193_11197 = G__11202;
continue;
} else {
var temp__4425__auto___11203 = cljs.core.seq.call(null,seq__11190_11194);
if(temp__4425__auto___11203){
var seq__11190_11204__$1 = temp__4425__auto___11203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11190_11204__$1)){
var c__6945__auto___11205 = cljs.core.chunk_first.call(null,seq__11190_11204__$1);
var G__11206 = cljs.core.chunk_rest.call(null,seq__11190_11204__$1);
var G__11207 = c__6945__auto___11205;
var G__11208 = cljs.core.count.call(null,c__6945__auto___11205);
var G__11209 = (0);
seq__11190_11194 = G__11206;
chunk__11191_11195 = G__11207;
count__11192_11196 = G__11208;
i__11193_11197 = G__11209;
continue;
} else {
var k__7265__auto___11210 = cljs.core.first.call(null,seq__11190_11204__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11210)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11210.call(null,env)),[cljs.core.str(k__7265__auto___11210)].join('')),"- "))));
} else {
}
} else {
}

var G__11211 = cljs.core.next.call(null,seq__11190_11204__$1);
var G__11212 = null;
var G__11213 = (0);
var G__11214 = (0);
seq__11190_11194 = G__11211;
chunk__11191_11195 = G__11212;
count__11192_11196 = G__11213;
i__11193_11197 = G__11214;
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

var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(env);
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(env);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,env,query)], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.read,new cljs.core.Keyword("app.localised","strings","app.localised/strings",45022356),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"--- read app.localised/strings"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11215_11219 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11216_11220 = null;
var count__11217_11221 = (0);
var i__11218_11222 = (0);
while(true){
if((i__11218_11222 < count__11217_11221)){
var k__7265__auto___11223 = cljs.core._nth.call(null,chunk__11216_11220,i__11218_11222);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11223)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11223.call(null,env)),[cljs.core.str(k__7265__auto___11223)].join('')),"- "))));
} else {
}
} else {
}

var G__11224 = seq__11215_11219;
var G__11225 = chunk__11216_11220;
var G__11226 = count__11217_11221;
var G__11227 = (i__11218_11222 + (1));
seq__11215_11219 = G__11224;
chunk__11216_11220 = G__11225;
count__11217_11221 = G__11226;
i__11218_11222 = G__11227;
continue;
} else {
var temp__4425__auto___11228 = cljs.core.seq.call(null,seq__11215_11219);
if(temp__4425__auto___11228){
var seq__11215_11229__$1 = temp__4425__auto___11228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11215_11229__$1)){
var c__6945__auto___11230 = cljs.core.chunk_first.call(null,seq__11215_11229__$1);
var G__11231 = cljs.core.chunk_rest.call(null,seq__11215_11229__$1);
var G__11232 = c__6945__auto___11230;
var G__11233 = cljs.core.count.call(null,c__6945__auto___11230);
var G__11234 = (0);
seq__11215_11219 = G__11231;
chunk__11216_11220 = G__11232;
count__11217_11221 = G__11233;
i__11218_11222 = G__11234;
continue;
} else {
var k__7265__auto___11235 = cljs.core.first.call(null,seq__11215_11229__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11235)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11235.call(null,env)),[cljs.core.str(k__7265__auto___11235)].join('')),"- "))));
} else {
}
} else {
}

var G__11236 = cljs.core.next.call(null,seq__11215_11229__$1);
var G__11237 = null;
var G__11238 = (0);
var G__11239 = (0);
seq__11215_11219 = G__11236;
chunk__11216_11220 = G__11237;
count__11217_11221 = G__11238;
i__11218_11222 = G__11239;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(env);
var sid = cljs.core.first.call(null,query);
var string_ids = cljs.core.rest.call(null,query);
var results = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not.call(null,sid)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),results], null);
} else {
var G__11240 = cljs.core.first.call(null,string_ids);
var G__11241 = cljs.core.rest.call(null,string_ids);
var G__11242 = cljs.core.assoc.call(null,results,sid,om_next_datascript_localisation_demo.datascript.db.app_localise_string.call(null,db,sid));
sid = G__11240;
string_ids = G__11241;
results = G__11242;
continue;
}
break;
}
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.read,new cljs.core.Keyword("localised","string","localised/string",-241276934),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"--- read localised/string"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11243_11248 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11244_11249 = null;
var count__11245_11250 = (0);
var i__11246_11251 = (0);
while(true){
if((i__11246_11251 < count__11245_11250)){
var k__7265__auto___11252 = cljs.core._nth.call(null,chunk__11244_11249,i__11246_11251);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11252)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11252.call(null,env)),[cljs.core.str(k__7265__auto___11252)].join('')),"- "))));
} else {
}
} else {
}

var G__11253 = seq__11243_11248;
var G__11254 = chunk__11244_11249;
var G__11255 = count__11245_11250;
var G__11256 = (i__11246_11251 + (1));
seq__11243_11248 = G__11253;
chunk__11244_11249 = G__11254;
count__11245_11250 = G__11255;
i__11246_11251 = G__11256;
continue;
} else {
var temp__4425__auto___11257 = cljs.core.seq.call(null,seq__11243_11248);
if(temp__4425__auto___11257){
var seq__11243_11258__$1 = temp__4425__auto___11257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11243_11258__$1)){
var c__6945__auto___11259 = cljs.core.chunk_first.call(null,seq__11243_11258__$1);
var G__11260 = cljs.core.chunk_rest.call(null,seq__11243_11258__$1);
var G__11261 = c__6945__auto___11259;
var G__11262 = cljs.core.count.call(null,c__6945__auto___11259);
var G__11263 = (0);
seq__11243_11248 = G__11260;
chunk__11244_11249 = G__11261;
count__11245_11250 = G__11262;
i__11246_11251 = G__11263;
continue;
} else {
var k__7265__auto___11264 = cljs.core.first.call(null,seq__11243_11258__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11264)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11264.call(null,env)),[cljs.core.str(k__7265__auto___11264)].join('')),"- "))));
} else {
}
} else {
}

var G__11265 = cljs.core.next.call(null,seq__11243_11258__$1);
var G__11266 = null;
var G__11267 = (0);
var G__11268 = (0);
seq__11243_11248 = G__11265;
chunk__11244_11249 = G__11266;
count__11245_11250 = G__11267;
i__11246_11251 = G__11268;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(env);
var ref = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),(1)], null));
var pident = cljs.core.get_in.call(null,params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ident","ident",-742346),(1)], null));
var ident = (function (){var or__6142__auto__ = ref;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return pident;
}
})();
var vec__11247 = om_next_datascript_localisation_demo.utils.ident.ident__GT_string_id_and_locale.call(null,ident);
var string_id = cljs.core.nth.call(null,vec__11247,(0),null);
var locale_id = cljs.core.nth.call(null,vec__11247,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_next_datascript_localisation_demo.datascript.db.localise_string_with_query.call(null,db,string_id,locale_id,query)], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.read,new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"--- read localised-strings"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11269_11273 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11270_11274 = null;
var count__11271_11275 = (0);
var i__11272_11276 = (0);
while(true){
if((i__11272_11276 < count__11271_11275)){
var k__7265__auto___11277 = cljs.core._nth.call(null,chunk__11270_11274,i__11272_11276);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11277)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11277.call(null,env)),[cljs.core.str(k__7265__auto___11277)].join('')),"- "))));
} else {
}
} else {
}

var G__11278 = seq__11269_11273;
var G__11279 = chunk__11270_11274;
var G__11280 = count__11271_11275;
var G__11281 = (i__11272_11276 + (1));
seq__11269_11273 = G__11278;
chunk__11270_11274 = G__11279;
count__11271_11275 = G__11280;
i__11272_11276 = G__11281;
continue;
} else {
var temp__4425__auto___11282 = cljs.core.seq.call(null,seq__11269_11273);
if(temp__4425__auto___11282){
var seq__11269_11283__$1 = temp__4425__auto___11282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11269_11283__$1)){
var c__6945__auto___11284 = cljs.core.chunk_first.call(null,seq__11269_11283__$1);
var G__11285 = cljs.core.chunk_rest.call(null,seq__11269_11283__$1);
var G__11286 = c__6945__auto___11284;
var G__11287 = cljs.core.count.call(null,c__6945__auto___11284);
var G__11288 = (0);
seq__11269_11273 = G__11285;
chunk__11270_11274 = G__11286;
count__11271_11275 = G__11287;
i__11272_11276 = G__11288;
continue;
} else {
var k__7265__auto___11289 = cljs.core.first.call(null,seq__11269_11283__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11289)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11289.call(null,env)),[cljs.core.str(k__7265__auto___11289)].join('')),"- "))));
} else {
}
} else {
}

var G__11290 = cljs.core.next.call(null,seq__11269_11283__$1);
var G__11291 = null;
var G__11292 = (0);
var G__11293 = (0);
seq__11269_11273 = G__11290;
chunk__11270_11274 = G__11291;
count__11271_11275 = G__11292;
i__11272_11276 = G__11293;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(env);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_next_datascript_localisation_demo.datascript.db.read_localised_strings.call(null,db,query)], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.read,new cljs.core.Keyword("db","pull","db/pull",-860541863),(function (env,key,params){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(params))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Symbol(null,"params","params",-1943919534,null))))].join('')));
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"--- read db/pull"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11294_11298 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11295_11299 = null;
var count__11296_11300 = (0);
var i__11297_11301 = (0);
while(true){
if((i__11297_11301 < count__11296_11300)){
var k__7265__auto___11302 = cljs.core._nth.call(null,chunk__11295_11299,i__11297_11301);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11302)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11302.call(null,env)),[cljs.core.str(k__7265__auto___11302)].join('')),"- "))));
} else {
}
} else {
}

var G__11303 = seq__11294_11298;
var G__11304 = chunk__11295_11299;
var G__11305 = count__11296_11300;
var G__11306 = (i__11297_11301 + (1));
seq__11294_11298 = G__11303;
chunk__11295_11299 = G__11304;
count__11296_11300 = G__11305;
i__11297_11301 = G__11306;
continue;
} else {
var temp__4425__auto___11307 = cljs.core.seq.call(null,seq__11294_11298);
if(temp__4425__auto___11307){
var seq__11294_11308__$1 = temp__4425__auto___11307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11294_11308__$1)){
var c__6945__auto___11309 = cljs.core.chunk_first.call(null,seq__11294_11308__$1);
var G__11310 = cljs.core.chunk_rest.call(null,seq__11294_11308__$1);
var G__11311 = c__6945__auto___11309;
var G__11312 = cljs.core.count.call(null,c__6945__auto___11309);
var G__11313 = (0);
seq__11294_11298 = G__11310;
chunk__11295_11299 = G__11311;
count__11296_11300 = G__11312;
i__11297_11301 = G__11313;
continue;
} else {
var k__7265__auto___11314 = cljs.core.first.call(null,seq__11294_11308__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11314)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11314.call(null,env)),[cljs.core.str(k__7265__auto___11314)].join('')),"- "))));
} else {
}
} else {
}

var G__11315 = cljs.core.next.call(null,seq__11294_11308__$1);
var G__11316 = null;
var G__11317 = (0);
var G__11318 = (0);
seq__11294_11298 = G__11315;
chunk__11295_11299 = G__11316;
count__11296_11300 = G__11317;
i__11297_11301 = G__11318;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(env);
var ident = new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(params);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_next_datascript_localisation_demo.datascript.db.db_pull.call(null,db,ident,query)], null);
}));
if(typeof om_next_datascript_localisation_demo.datascript.parser.mutate !== 'undefined'){
} else {
om_next_datascript_localisation_demo.datascript.parser.mutate = (function (){var method_table__7055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-next-datascript-localisation-demo.datascript.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7059__auto__,method_table__7055__auto__,prefer_table__7056__auto__,method_cache__7057__auto__,cached_hierarchy__7058__auto__));
})();
}
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"-** mutate default"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11319_11323 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11320_11324 = null;
var count__11321_11325 = (0);
var i__11322_11326 = (0);
while(true){
if((i__11322_11326 < count__11321_11325)){
var k__7265__auto___11327 = cljs.core._nth.call(null,chunk__11320_11324,i__11322_11326);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11327)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11327.call(null,env)),[cljs.core.str(k__7265__auto___11327)].join('')),"- "))));
} else {
}
} else {
}

var G__11328 = seq__11319_11323;
var G__11329 = chunk__11320_11324;
var G__11330 = count__11321_11325;
var G__11331 = (i__11322_11326 + (1));
seq__11319_11323 = G__11328;
chunk__11320_11324 = G__11329;
count__11321_11325 = G__11330;
i__11322_11326 = G__11331;
continue;
} else {
var temp__4425__auto___11332 = cljs.core.seq.call(null,seq__11319_11323);
if(temp__4425__auto___11332){
var seq__11319_11333__$1 = temp__4425__auto___11332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11319_11333__$1)){
var c__6945__auto___11334 = cljs.core.chunk_first.call(null,seq__11319_11333__$1);
var G__11335 = cljs.core.chunk_rest.call(null,seq__11319_11333__$1);
var G__11336 = c__6945__auto___11334;
var G__11337 = cljs.core.count.call(null,c__6945__auto___11334);
var G__11338 = (0);
seq__11319_11323 = G__11335;
chunk__11320_11324 = G__11336;
count__11321_11325 = G__11337;
i__11322_11326 = G__11338;
continue;
} else {
var k__7265__auto___11339 = cljs.core.first.call(null,seq__11319_11333__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11339)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11339.call(null,env)),[cljs.core.str(k__7265__auto___11339)].join('')),"- "))));
} else {
}
} else {
}

var G__11340 = cljs.core.next.call(null,seq__11319_11333__$1);
var G__11341 = null;
var G__11342 = (0);
var G__11343 = (0);
seq__11319_11323 = G__11340;
chunk__11320_11324 = G__11341;
count__11321_11325 = G__11342;
i__11322_11326 = G__11343;
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

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),null], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.mutate,new cljs.core.Symbol("app.locale","set","app.locale/set",-1816942760,null),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"=== mutate app.locale/set"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11344_11348 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11345_11349 = null;
var count__11346_11350 = (0);
var i__11347_11351 = (0);
while(true){
if((i__11347_11351 < count__11346_11350)){
var k__7265__auto___11352 = cljs.core._nth.call(null,chunk__11345_11349,i__11347_11351);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11352)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11352.call(null,env)),[cljs.core.str(k__7265__auto___11352)].join('')),"- "))));
} else {
}
} else {
}

var G__11353 = seq__11344_11348;
var G__11354 = chunk__11345_11349;
var G__11355 = count__11346_11350;
var G__11356 = (i__11347_11351 + (1));
seq__11344_11348 = G__11353;
chunk__11345_11349 = G__11354;
count__11346_11350 = G__11355;
i__11347_11351 = G__11356;
continue;
} else {
var temp__4425__auto___11357 = cljs.core.seq.call(null,seq__11344_11348);
if(temp__4425__auto___11357){
var seq__11344_11358__$1 = temp__4425__auto___11357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11344_11358__$1)){
var c__6945__auto___11359 = cljs.core.chunk_first.call(null,seq__11344_11358__$1);
var G__11360 = cljs.core.chunk_rest.call(null,seq__11344_11358__$1);
var G__11361 = c__6945__auto___11359;
var G__11362 = cljs.core.count.call(null,c__6945__auto___11359);
var G__11363 = (0);
seq__11344_11348 = G__11360;
chunk__11345_11349 = G__11361;
count__11346_11350 = G__11362;
i__11347_11351 = G__11363;
continue;
} else {
var k__7265__auto___11364 = cljs.core.first.call(null,seq__11344_11358__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11364)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11364.call(null,env)),[cljs.core.str(k__7265__auto___11364)].join('')),"- "))));
} else {
}
} else {
}

var G__11365 = cljs.core.next.call(null,seq__11344_11358__$1);
var G__11366 = null;
var G__11367 = (0);
var G__11368 = (0);
seq__11344_11348 = G__11365;
chunk__11345_11349 = G__11366;
count__11346_11350 = G__11367;
i__11347_11351 = G__11368;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var tx = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),om_next_datascript_localisation_demo.datascript.db.app_locale_entity.call(null,db),new cljs.core.Keyword("app","locale","app/locale",-2115812582),params], null);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,tx))));
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.locale","app.locale",1484369313)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (db,tx){
return (function (){
return datascript.core.transact_BANG_.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null));
});})(db,tx))
], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.mutate,new cljs.core.Symbol("locale","create","locale/create",-610054475,null),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"=== mutate locale/create"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11369_11373 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11370_11374 = null;
var count__11371_11375 = (0);
var i__11372_11376 = (0);
while(true){
if((i__11372_11376 < count__11371_11375)){
var k__7265__auto___11377 = cljs.core._nth.call(null,chunk__11370_11374,i__11372_11376);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11377)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11377.call(null,env)),[cljs.core.str(k__7265__auto___11377)].join('')),"- "))));
} else {
}
} else {
}

var G__11378 = seq__11369_11373;
var G__11379 = chunk__11370_11374;
var G__11380 = count__11371_11375;
var G__11381 = (i__11372_11376 + (1));
seq__11369_11373 = G__11378;
chunk__11370_11374 = G__11379;
count__11371_11375 = G__11380;
i__11372_11376 = G__11381;
continue;
} else {
var temp__4425__auto___11382 = cljs.core.seq.call(null,seq__11369_11373);
if(temp__4425__auto___11382){
var seq__11369_11383__$1 = temp__4425__auto___11382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11369_11383__$1)){
var c__6945__auto___11384 = cljs.core.chunk_first.call(null,seq__11369_11383__$1);
var G__11385 = cljs.core.chunk_rest.call(null,seq__11369_11383__$1);
var G__11386 = c__6945__auto___11384;
var G__11387 = cljs.core.count.call(null,c__6945__auto___11384);
var G__11388 = (0);
seq__11369_11373 = G__11385;
chunk__11370_11374 = G__11386;
count__11371_11375 = G__11387;
i__11372_11376 = G__11388;
continue;
} else {
var k__7265__auto___11389 = cljs.core.first.call(null,seq__11369_11383__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11389)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11389.call(null,env)),[cljs.core.str(k__7265__auto___11389)].join('')),"- "))));
} else {
}
} else {
}

var G__11390 = cljs.core.next.call(null,seq__11369_11383__$1);
var G__11391 = null;
var G__11392 = (0);
var G__11393 = (0);
seq__11369_11373 = G__11390;
chunk__11370_11374 = G__11391;
count__11371_11375 = G__11392;
i__11372_11376 = G__11393;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var code = om_next_datascript_localisation_demo.datascript.db.unique_locale_code.call(null,db);
var tx = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("locale","code","locale/code",-1620643092),code,new cljs.core.Keyword("locale","enum","locale/enum",563985782),cljs.core.keyword.call(null,"locale",code),new cljs.core.Keyword(null,"value","value",305978217),"Edit me"], null)], null);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tx),"mutate locale/create tx:"))));
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locales","locales",1785635955)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (db,code,tx){
return (function (){
return datascript.core.transact_BANG_.call(null,db,tx);
});})(db,code,tx))
], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.mutate,new cljs.core.Symbol("locale","delete","locale/delete",-1176328247,null),(function (env,key,params){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(params))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.Symbol(null,"params","params",-1943919534,null))))].join('')));
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"=== mutate locale/delete"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11394_11398 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11395_11399 = null;
var count__11396_11400 = (0);
var i__11397_11401 = (0);
while(true){
if((i__11397_11401 < count__11396_11400)){
var k__7265__auto___11402 = cljs.core._nth.call(null,chunk__11395_11399,i__11397_11401);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11402)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11402.call(null,env)),[cljs.core.str(k__7265__auto___11402)].join('')),"- "))));
} else {
}
} else {
}

var G__11403 = seq__11394_11398;
var G__11404 = chunk__11395_11399;
var G__11405 = count__11396_11400;
var G__11406 = (i__11397_11401 + (1));
seq__11394_11398 = G__11403;
chunk__11395_11399 = G__11404;
count__11396_11400 = G__11405;
i__11397_11401 = G__11406;
continue;
} else {
var temp__4425__auto___11407 = cljs.core.seq.call(null,seq__11394_11398);
if(temp__4425__auto___11407){
var seq__11394_11408__$1 = temp__4425__auto___11407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11394_11408__$1)){
var c__6945__auto___11409 = cljs.core.chunk_first.call(null,seq__11394_11408__$1);
var G__11410 = cljs.core.chunk_rest.call(null,seq__11394_11408__$1);
var G__11411 = c__6945__auto___11409;
var G__11412 = cljs.core.count.call(null,c__6945__auto___11409);
var G__11413 = (0);
seq__11394_11398 = G__11410;
chunk__11395_11399 = G__11411;
count__11396_11400 = G__11412;
i__11397_11401 = G__11413;
continue;
} else {
var k__7265__auto___11414 = cljs.core.first.call(null,seq__11394_11408__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11414)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11414.call(null,env)),[cljs.core.str(k__7265__auto___11414)].join('')),"- "))));
} else {
}
} else {
}

var G__11415 = cljs.core.next.call(null,seq__11394_11408__$1);
var G__11416 = null;
var G__11417 = (0);
var G__11418 = (0);
seq__11394_11398 = G__11415;
chunk__11395_11399 = G__11416;
count__11396_11400 = G__11417;
i__11397_11401 = G__11418;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var ids = new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(params);
var tx = cljs.core.mapv.call(null,((function (db,ids){
return (function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),id], null);
});})(db,ids))
,ids);
var new_locale = om_next_datascript_localisation_demo.datascript.db.app_locale_tx_after_deleting_locales.call(null,db,ids);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (db,ids,tx,new_locale){
return (function (){
return datascript.core.transact_BANG_.call(null,db,cljs.core.conj.call(null,tx,new_locale));
});})(db,ids,tx,new_locale))
], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.mutate,new cljs.core.Symbol("localised-string","create","localised-string/create",1679580933,null),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"=== mutate localised-string/create"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11419_11423 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11420_11424 = null;
var count__11421_11425 = (0);
var i__11422_11426 = (0);
while(true){
if((i__11422_11426 < count__11421_11425)){
var k__7265__auto___11427 = cljs.core._nth.call(null,chunk__11420_11424,i__11422_11426);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11427)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11427.call(null,env)),[cljs.core.str(k__7265__auto___11427)].join('')),"- "))));
} else {
}
} else {
}

var G__11428 = seq__11419_11423;
var G__11429 = chunk__11420_11424;
var G__11430 = count__11421_11425;
var G__11431 = (i__11422_11426 + (1));
seq__11419_11423 = G__11428;
chunk__11420_11424 = G__11429;
count__11421_11425 = G__11430;
i__11422_11426 = G__11431;
continue;
} else {
var temp__4425__auto___11432 = cljs.core.seq.call(null,seq__11419_11423);
if(temp__4425__auto___11432){
var seq__11419_11433__$1 = temp__4425__auto___11432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11419_11433__$1)){
var c__6945__auto___11434 = cljs.core.chunk_first.call(null,seq__11419_11433__$1);
var G__11435 = cljs.core.chunk_rest.call(null,seq__11419_11433__$1);
var G__11436 = c__6945__auto___11434;
var G__11437 = cljs.core.count.call(null,c__6945__auto___11434);
var G__11438 = (0);
seq__11419_11423 = G__11435;
chunk__11420_11424 = G__11436;
count__11421_11425 = G__11437;
i__11422_11426 = G__11438;
continue;
} else {
var k__7265__auto___11439 = cljs.core.first.call(null,seq__11419_11433__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11439)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11439.call(null,env)),[cljs.core.str(k__7265__auto___11439)].join('')),"- "))));
} else {
}
} else {
}

var G__11440 = cljs.core.next.call(null,seq__11419_11433__$1);
var G__11441 = null;
var G__11442 = (0);
var G__11443 = (0);
seq__11419_11423 = G__11440;
chunk__11420_11424 = G__11441;
count__11421_11425 = G__11442;
i__11422_11426 = G__11443;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var ident = om_next_datascript_localisation_demo.datascript.db.unique_localised_string_ident.call(null,db);
var tx = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("string","ident","string/ident",-106951611),ident,new cljs.core.Keyword(null,"value","value",305978217),"Edit me"], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (db,ident,tx){
return (function (){
return datascript.core.transact_BANG_.call(null,db,tx);
});})(db,ident,tx))
], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.mutate,new cljs.core.Symbol("localised-string","set","localised-string/set",1675182943,null),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"=== mutate localised-string/set"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11444_11450 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11445_11451 = null;
var count__11446_11452 = (0);
var i__11447_11453 = (0);
while(true){
if((i__11447_11453 < count__11446_11452)){
var k__7265__auto___11454 = cljs.core._nth.call(null,chunk__11445_11451,i__11447_11453);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11454)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11454.call(null,env)),[cljs.core.str(k__7265__auto___11454)].join('')),"- "))));
} else {
}
} else {
}

var G__11455 = seq__11444_11450;
var G__11456 = chunk__11445_11451;
var G__11457 = count__11446_11452;
var G__11458 = (i__11447_11453 + (1));
seq__11444_11450 = G__11455;
chunk__11445_11451 = G__11456;
count__11446_11452 = G__11457;
i__11447_11453 = G__11458;
continue;
} else {
var temp__4425__auto___11459 = cljs.core.seq.call(null,seq__11444_11450);
if(temp__4425__auto___11459){
var seq__11444_11460__$1 = temp__4425__auto___11459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11444_11460__$1)){
var c__6945__auto___11461 = cljs.core.chunk_first.call(null,seq__11444_11460__$1);
var G__11462 = cljs.core.chunk_rest.call(null,seq__11444_11460__$1);
var G__11463 = c__6945__auto___11461;
var G__11464 = cljs.core.count.call(null,c__6945__auto___11461);
var G__11465 = (0);
seq__11444_11450 = G__11462;
chunk__11445_11451 = G__11463;
count__11446_11452 = G__11464;
i__11447_11453 = G__11465;
continue;
} else {
var k__7265__auto___11466 = cljs.core.first.call(null,seq__11444_11460__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11466)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11466.call(null,env)),[cljs.core.str(k__7265__auto___11466)].join('')),"- "))));
} else {
}
} else {
}

var G__11467 = cljs.core.next.call(null,seq__11444_11460__$1);
var G__11468 = null;
var G__11469 = (0);
var G__11470 = (0);
seq__11444_11450 = G__11467;
chunk__11445_11451 = G__11468;
count__11446_11452 = G__11469;
i__11447_11453 = G__11470;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var map__11448 = params;
var map__11448__$1 = ((((!((map__11448 == null)))?((((map__11448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11448):map__11448);
var ident = cljs.core.get.call(null,map__11448__$1,new cljs.core.Keyword("string","ident","string/ident",-106951611));
var id = cljs.core.get.call(null,map__11448__$1,new cljs.core.Keyword("locale","id","locale/id",-337593382));
var text = cljs.core.get.call(null,map__11448__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var tx = om_next_datascript_localisation_demo.datascript.db.make_edited_string_tx.call(null,db,ident,id,text);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (db,map__11448,map__11448__$1,ident,id,text,tx){
return (function (){
return datascript.core.transact_BANG_.call(null,db,tx);
});})(db,map__11448,map__11448__$1,ident,id,text,tx))
], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.mutate,new cljs.core.Symbol("localised","create","localised/create",-603860581,null),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"=== mutate localised/create"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11471_11477 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11472_11478 = null;
var count__11473_11479 = (0);
var i__11474_11480 = (0);
while(true){
if((i__11474_11480 < count__11473_11479)){
var k__7265__auto___11481 = cljs.core._nth.call(null,chunk__11472_11478,i__11474_11480);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11481)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11481.call(null,env)),[cljs.core.str(k__7265__auto___11481)].join('')),"- "))));
} else {
}
} else {
}

var G__11482 = seq__11471_11477;
var G__11483 = chunk__11472_11478;
var G__11484 = count__11473_11479;
var G__11485 = (i__11474_11480 + (1));
seq__11471_11477 = G__11482;
chunk__11472_11478 = G__11483;
count__11473_11479 = G__11484;
i__11474_11480 = G__11485;
continue;
} else {
var temp__4425__auto___11486 = cljs.core.seq.call(null,seq__11471_11477);
if(temp__4425__auto___11486){
var seq__11471_11487__$1 = temp__4425__auto___11486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11471_11487__$1)){
var c__6945__auto___11488 = cljs.core.chunk_first.call(null,seq__11471_11487__$1);
var G__11489 = cljs.core.chunk_rest.call(null,seq__11471_11487__$1);
var G__11490 = c__6945__auto___11488;
var G__11491 = cljs.core.count.call(null,c__6945__auto___11488);
var G__11492 = (0);
seq__11471_11477 = G__11489;
chunk__11472_11478 = G__11490;
count__11473_11479 = G__11491;
i__11474_11480 = G__11492;
continue;
} else {
var k__7265__auto___11493 = cljs.core.first.call(null,seq__11471_11487__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11493)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11493.call(null,env)),[cljs.core.str(k__7265__auto___11493)].join('')),"- "))));
} else {
}
} else {
}

var G__11494 = cljs.core.next.call(null,seq__11471_11487__$1);
var G__11495 = null;
var G__11496 = (0);
var G__11497 = (0);
seq__11471_11477 = G__11494;
chunk__11472_11478 = G__11495;
count__11473_11479 = G__11496;
i__11474_11480 = G__11497;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var map__11475 = params;
var map__11475__$1 = ((((!((map__11475 == null)))?((((map__11475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11475):map__11475);
var id = cljs.core.get.call(null,map__11475__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var locale = cljs.core.get.call(null,map__11475__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
var value = cljs.core.get.call(null,map__11475__$1,new cljs.core.Keyword(null,"value","value",305978217));
var tx = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("localised","locale","localised/locale",1513168907),locale], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword(null,"value","value",305978217),value], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword(null,"localised","localised",-1733242051),(-1)], null)], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (db,map__11475,map__11475__$1,id,locale,value,tx){
return (function (){
return datascript.core.transact_BANG_.call(null,db,tx);
});})(db,map__11475,map__11475__$1,id,locale,value,tx))
], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.mutate,new cljs.core.Symbol("attrib","set","attrib/set",533812063,null),(function (env,key,params){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"=== mutate attrib/set"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11498_11504 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11499_11505 = null;
var count__11500_11506 = (0);
var i__11501_11507 = (0);
while(true){
if((i__11501_11507 < count__11500_11506)){
var k__7265__auto___11508 = cljs.core._nth.call(null,chunk__11499_11505,i__11501_11507);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11508)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11508.call(null,env)),[cljs.core.str(k__7265__auto___11508)].join('')),"- "))));
} else {
}
} else {
}

var G__11509 = seq__11498_11504;
var G__11510 = chunk__11499_11505;
var G__11511 = count__11500_11506;
var G__11512 = (i__11501_11507 + (1));
seq__11498_11504 = G__11509;
chunk__11499_11505 = G__11510;
count__11500_11506 = G__11511;
i__11501_11507 = G__11512;
continue;
} else {
var temp__4425__auto___11513 = cljs.core.seq.call(null,seq__11498_11504);
if(temp__4425__auto___11513){
var seq__11498_11514__$1 = temp__4425__auto___11513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11498_11514__$1)){
var c__6945__auto___11515 = cljs.core.chunk_first.call(null,seq__11498_11514__$1);
var G__11516 = cljs.core.chunk_rest.call(null,seq__11498_11514__$1);
var G__11517 = c__6945__auto___11515;
var G__11518 = cljs.core.count.call(null,c__6945__auto___11515);
var G__11519 = (0);
seq__11498_11504 = G__11516;
chunk__11499_11505 = G__11517;
count__11500_11506 = G__11518;
i__11501_11507 = G__11519;
continue;
} else {
var k__7265__auto___11520 = cljs.core.first.call(null,seq__11498_11514__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11520)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11520.call(null,env)),[cljs.core.str(k__7265__auto___11520)].join('')),"- "))));
} else {
}
} else {
}

var G__11521 = cljs.core.next.call(null,seq__11498_11514__$1);
var G__11522 = null;
var G__11523 = (0);
var G__11524 = (0);
seq__11498_11504 = G__11521;
chunk__11499_11505 = G__11522;
count__11500_11506 = G__11523;
i__11501_11507 = G__11524;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var map__11502 = params;
var map__11502__$1 = ((((!((map__11502 == null)))?((((map__11502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11502):map__11502);
var id = cljs.core.get.call(null,map__11502__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var attrib = cljs.core.get.call(null,map__11502__$1,new cljs.core.Keyword(null,"attrib","attrib",-1137323804));
var value = cljs.core.get.call(null,map__11502__$1,new cljs.core.Keyword(null,"value","value",305978217));
var tx = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("db","id","db/id",-1388397098),id,attrib,value], true, false);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (db,map__11502,map__11502__$1,id,attrib,value,tx){
return (function (){
return datascript.core.transact_BANG_.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null));
});})(db,map__11502,map__11502__$1,id,attrib,value,tx))
], null);
}));
cljs.core._add_method.call(null,om_next_datascript_localisation_demo.datascript.parser.mutate,new cljs.core.Symbol("delete","db-id","delete/db-id",2127046561,null),(function (env,key,params){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(params))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.Symbol(null,"params","params",-1943919534,null))))].join('')));
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"=== mutate delete/db-id"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),"- key"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),"- params"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,env)),"- env contains:"))));
} else {
}

var seq__11525_11529 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__11526_11530 = null;
var count__11527_11531 = (0);
var i__11528_11532 = (0);
while(true){
if((i__11528_11532 < count__11527_11531)){
var k__7265__auto___11533 = cljs.core._nth.call(null,chunk__11526_11530,i__11528_11532);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11533)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11533.call(null,env)),[cljs.core.str(k__7265__auto___11533)].join('')),"- "))));
} else {
}
} else {
}

var G__11534 = seq__11525_11529;
var G__11535 = chunk__11526_11530;
var G__11536 = count__11527_11531;
var G__11537 = (i__11528_11532 + (1));
seq__11525_11529 = G__11534;
chunk__11526_11530 = G__11535;
count__11527_11531 = G__11536;
i__11528_11532 = G__11537;
continue;
} else {
var temp__4425__auto___11538 = cljs.core.seq.call(null,seq__11525_11529);
if(temp__4425__auto___11538){
var seq__11525_11539__$1 = temp__4425__auto___11538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11525_11539__$1)){
var c__6945__auto___11540 = cljs.core.chunk_first.call(null,seq__11525_11539__$1);
var G__11541 = cljs.core.chunk_rest.call(null,seq__11525_11539__$1);
var G__11542 = c__6945__auto___11540;
var G__11543 = cljs.core.count.call(null,c__6945__auto___11540);
var G__11544 = (0);
seq__11525_11529 = G__11541;
chunk__11526_11530 = G__11542;
count__11527_11531 = G__11543;
i__11528_11532 = G__11544;
continue;
} else {
var k__7265__auto___11545 = cljs.core.first.call(null,seq__11525_11539__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___11545)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___11545.call(null,env)),[cljs.core.str(k__7265__auto___11545)].join('')),"- "))));
} else {
}
} else {
}

var G__11546 = cljs.core.next.call(null,seq__11525_11539__$1);
var G__11547 = null;
var G__11548 = (0);
var G__11549 = (0);
seq__11525_11529 = G__11546;
chunk__11526_11530 = G__11547;
count__11527_11531 = G__11548;
i__11528_11532 = G__11549;
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

var db = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env);
var ids = new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(params);
var tx = cljs.core.mapv.call(null,((function (db,ids){
return (function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),id], null);
});})(db,ids))
,ids);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (db,ids,tx){
return (function (){
return datascript.core.transact_BANG_.call(null,db,tx);
});})(db,ids,tx))
], null);
}));
om_next_datascript_localisation_demo.datascript.parser.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_next_datascript_localisation_demo.datascript.parser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_next_datascript_localisation_demo.datascript.parser.mutate], null));
om_next_datascript_localisation_demo.datascript.parser.log_query = (function om_next_datascript_localisation_demo$datascript$parser$log_query(q){
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_next_datascript_localisation_demo.datascript.db.the_db,new cljs.core.Keyword(null,"query","query",-1288509510),q], null);
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,q),"query:"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,om_next_datascript_localisation_demo.datascript.parser.parser.call(null,env,q)),"result:"))));
} else {
}

if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
return console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="))));
} else {
return null;
}
});
om_next_datascript_localisation_demo.datascript.parser.test_locales = (function om_next_datascript_localisation_demo$datascript$parser$test_locales(){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core.List.EMPTY,"test-locales"))));
} else {
}

var queries = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locales","locales",1785635955)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locales","locales",1785635955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","locale","app/locale",-2115812582)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","locale","app/locale",-2115812582),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","locale","app/locale",-2115812582)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.localised","strings","app.localised/strings",45022356),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-title","app-title",1908483663),new cljs.core.Keyword(null,"app-desc","app-desc",-1510950407),new cljs.core.Keyword(null,"app-locale-current","app-locale-current",1693467519)], null)], null)], null)], null);
return cljs.core.doall.call(null,cljs.core.map.call(null,om_next_datascript_localisation_demo.datascript.parser.log_query,queries));
});
om_next_datascript_localisation_demo.datascript.parser.test_parser = (function om_next_datascript_localisation_demo$datascript$parser$test_parser(){
return om_next_datascript_localisation_demo.datascript.parser.test_locales.call(null);
});

//# sourceMappingURL=parser.js.map?rel=1452424844849