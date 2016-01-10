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

var seq__14888_14892 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__14889_14893 = null;
var count__14890_14894 = (0);
var i__14891_14895 = (0);
while(true){
if((i__14891_14895 < count__14890_14894)){
var k__7265__auto___14896 = cljs.core._nth.call(null,chunk__14889_14893,i__14891_14895);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___14896)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___14896.call(null,env)),[cljs.core.str(k__7265__auto___14896)].join('')),"- "))));
} else {
}
} else {
}

var G__14897 = seq__14888_14892;
var G__14898 = chunk__14889_14893;
var G__14899 = count__14890_14894;
var G__14900 = (i__14891_14895 + (1));
seq__14888_14892 = G__14897;
chunk__14889_14893 = G__14898;
count__14890_14894 = G__14899;
i__14891_14895 = G__14900;
continue;
} else {
var temp__4425__auto___14901 = cljs.core.seq.call(null,seq__14888_14892);
if(temp__4425__auto___14901){
var seq__14888_14902__$1 = temp__4425__auto___14901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14888_14902__$1)){
var c__6945__auto___14903 = cljs.core.chunk_first.call(null,seq__14888_14902__$1);
var G__14904 = cljs.core.chunk_rest.call(null,seq__14888_14902__$1);
var G__14905 = c__6945__auto___14903;
var G__14906 = cljs.core.count.call(null,c__6945__auto___14903);
var G__14907 = (0);
seq__14888_14892 = G__14904;
chunk__14889_14893 = G__14905;
count__14890_14894 = G__14906;
i__14891_14895 = G__14907;
continue;
} else {
var k__7265__auto___14908 = cljs.core.first.call(null,seq__14888_14902__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___14908)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___14908.call(null,env)),[cljs.core.str(k__7265__auto___14908)].join('')),"- "))));
} else {
}
} else {
}

var G__14909 = cljs.core.next.call(null,seq__14888_14902__$1);
var G__14910 = null;
var G__14911 = (0);
var G__14912 = (0);
seq__14888_14892 = G__14909;
chunk__14889_14893 = G__14910;
count__14890_14894 = G__14911;
i__14891_14895 = G__14912;
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

var seq__14913_14917 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__14914_14918 = null;
var count__14915_14919 = (0);
var i__14916_14920 = (0);
while(true){
if((i__14916_14920 < count__14915_14919)){
var k__7265__auto___14921 = cljs.core._nth.call(null,chunk__14914_14918,i__14916_14920);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___14921)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___14921.call(null,env)),[cljs.core.str(k__7265__auto___14921)].join('')),"- "))));
} else {
}
} else {
}

var G__14922 = seq__14913_14917;
var G__14923 = chunk__14914_14918;
var G__14924 = count__14915_14919;
var G__14925 = (i__14916_14920 + (1));
seq__14913_14917 = G__14922;
chunk__14914_14918 = G__14923;
count__14915_14919 = G__14924;
i__14916_14920 = G__14925;
continue;
} else {
var temp__4425__auto___14926 = cljs.core.seq.call(null,seq__14913_14917);
if(temp__4425__auto___14926){
var seq__14913_14927__$1 = temp__4425__auto___14926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14913_14927__$1)){
var c__6945__auto___14928 = cljs.core.chunk_first.call(null,seq__14913_14927__$1);
var G__14929 = cljs.core.chunk_rest.call(null,seq__14913_14927__$1);
var G__14930 = c__6945__auto___14928;
var G__14931 = cljs.core.count.call(null,c__6945__auto___14928);
var G__14932 = (0);
seq__14913_14917 = G__14929;
chunk__14914_14918 = G__14930;
count__14915_14919 = G__14931;
i__14916_14920 = G__14932;
continue;
} else {
var k__7265__auto___14933 = cljs.core.first.call(null,seq__14913_14927__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___14933)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___14933.call(null,env)),[cljs.core.str(k__7265__auto___14933)].join('')),"- "))));
} else {
}
} else {
}

var G__14934 = cljs.core.next.call(null,seq__14913_14927__$1);
var G__14935 = null;
var G__14936 = (0);
var G__14937 = (0);
seq__14913_14917 = G__14934;
chunk__14914_14918 = G__14935;
count__14915_14919 = G__14936;
i__14916_14920 = G__14937;
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

var seq__14938_14942 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__14939_14943 = null;
var count__14940_14944 = (0);
var i__14941_14945 = (0);
while(true){
if((i__14941_14945 < count__14940_14944)){
var k__7265__auto___14946 = cljs.core._nth.call(null,chunk__14939_14943,i__14941_14945);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___14946)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___14946.call(null,env)),[cljs.core.str(k__7265__auto___14946)].join('')),"- "))));
} else {
}
} else {
}

var G__14947 = seq__14938_14942;
var G__14948 = chunk__14939_14943;
var G__14949 = count__14940_14944;
var G__14950 = (i__14941_14945 + (1));
seq__14938_14942 = G__14947;
chunk__14939_14943 = G__14948;
count__14940_14944 = G__14949;
i__14941_14945 = G__14950;
continue;
} else {
var temp__4425__auto___14951 = cljs.core.seq.call(null,seq__14938_14942);
if(temp__4425__auto___14951){
var seq__14938_14952__$1 = temp__4425__auto___14951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14938_14952__$1)){
var c__6945__auto___14953 = cljs.core.chunk_first.call(null,seq__14938_14952__$1);
var G__14954 = cljs.core.chunk_rest.call(null,seq__14938_14952__$1);
var G__14955 = c__6945__auto___14953;
var G__14956 = cljs.core.count.call(null,c__6945__auto___14953);
var G__14957 = (0);
seq__14938_14942 = G__14954;
chunk__14939_14943 = G__14955;
count__14940_14944 = G__14956;
i__14941_14945 = G__14957;
continue;
} else {
var k__7265__auto___14958 = cljs.core.first.call(null,seq__14938_14952__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___14958)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___14958.call(null,env)),[cljs.core.str(k__7265__auto___14958)].join('')),"- "))));
} else {
}
} else {
}

var G__14959 = cljs.core.next.call(null,seq__14938_14952__$1);
var G__14960 = null;
var G__14961 = (0);
var G__14962 = (0);
seq__14938_14942 = G__14959;
chunk__14939_14943 = G__14960;
count__14940_14944 = G__14961;
i__14941_14945 = G__14962;
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

var seq__14964_14968 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__14965_14969 = null;
var count__14966_14970 = (0);
var i__14967_14971 = (0);
while(true){
if((i__14967_14971 < count__14966_14970)){
var k__7265__auto___14972 = cljs.core._nth.call(null,chunk__14965_14969,i__14967_14971);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___14972)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___14972.call(null,env)),[cljs.core.str(k__7265__auto___14972)].join('')),"- "))));
} else {
}
} else {
}

var G__14973 = seq__14964_14968;
var G__14974 = chunk__14965_14969;
var G__14975 = count__14966_14970;
var G__14976 = (i__14967_14971 + (1));
seq__14964_14968 = G__14973;
chunk__14965_14969 = G__14974;
count__14966_14970 = G__14975;
i__14967_14971 = G__14976;
continue;
} else {
var temp__4425__auto___14977 = cljs.core.seq.call(null,seq__14964_14968);
if(temp__4425__auto___14977){
var seq__14964_14978__$1 = temp__4425__auto___14977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14964_14978__$1)){
var c__6945__auto___14979 = cljs.core.chunk_first.call(null,seq__14964_14978__$1);
var G__14980 = cljs.core.chunk_rest.call(null,seq__14964_14978__$1);
var G__14981 = c__6945__auto___14979;
var G__14982 = cljs.core.count.call(null,c__6945__auto___14979);
var G__14983 = (0);
seq__14964_14968 = G__14980;
chunk__14965_14969 = G__14981;
count__14966_14970 = G__14982;
i__14967_14971 = G__14983;
continue;
} else {
var k__7265__auto___14984 = cljs.core.first.call(null,seq__14964_14978__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___14984)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___14984.call(null,env)),[cljs.core.str(k__7265__auto___14984)].join('')),"- "))));
} else {
}
} else {
}

var G__14985 = cljs.core.next.call(null,seq__14964_14978__$1);
var G__14986 = null;
var G__14987 = (0);
var G__14988 = (0);
seq__14964_14968 = G__14985;
chunk__14965_14969 = G__14986;
count__14966_14970 = G__14987;
i__14967_14971 = G__14988;
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
return (function (p1__14963_SHARP_){
return parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ref","ref",1289896967),p1__14963_SHARP_),query);
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

var seq__14989_14993 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__14990_14994 = null;
var count__14991_14995 = (0);
var i__14992_14996 = (0);
while(true){
if((i__14992_14996 < count__14991_14995)){
var k__7265__auto___14997 = cljs.core._nth.call(null,chunk__14990_14994,i__14992_14996);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___14997)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___14997.call(null,env)),[cljs.core.str(k__7265__auto___14997)].join('')),"- "))));
} else {
}
} else {
}

var G__14998 = seq__14989_14993;
var G__14999 = chunk__14990_14994;
var G__15000 = count__14991_14995;
var G__15001 = (i__14992_14996 + (1));
seq__14989_14993 = G__14998;
chunk__14990_14994 = G__14999;
count__14991_14995 = G__15000;
i__14992_14996 = G__15001;
continue;
} else {
var temp__4425__auto___15002 = cljs.core.seq.call(null,seq__14989_14993);
if(temp__4425__auto___15002){
var seq__14989_15003__$1 = temp__4425__auto___15002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14989_15003__$1)){
var c__6945__auto___15004 = cljs.core.chunk_first.call(null,seq__14989_15003__$1);
var G__15005 = cljs.core.chunk_rest.call(null,seq__14989_15003__$1);
var G__15006 = c__6945__auto___15004;
var G__15007 = cljs.core.count.call(null,c__6945__auto___15004);
var G__15008 = (0);
seq__14989_14993 = G__15005;
chunk__14990_14994 = G__15006;
count__14991_14995 = G__15007;
i__14992_14996 = G__15008;
continue;
} else {
var k__7265__auto___15009 = cljs.core.first.call(null,seq__14989_15003__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15009)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15009.call(null,env)),[cljs.core.str(k__7265__auto___15009)].join('')),"- "))));
} else {
}
} else {
}

var G__15010 = cljs.core.next.call(null,seq__14989_15003__$1);
var G__15011 = null;
var G__15012 = (0);
var G__15013 = (0);
seq__14989_14993 = G__15010;
chunk__14990_14994 = G__15011;
count__14991_14995 = G__15012;
i__14992_14996 = G__15013;
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

var seq__15014_15018 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15015_15019 = null;
var count__15016_15020 = (0);
var i__15017_15021 = (0);
while(true){
if((i__15017_15021 < count__15016_15020)){
var k__7265__auto___15022 = cljs.core._nth.call(null,chunk__15015_15019,i__15017_15021);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15022)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15022.call(null,env)),[cljs.core.str(k__7265__auto___15022)].join('')),"- "))));
} else {
}
} else {
}

var G__15023 = seq__15014_15018;
var G__15024 = chunk__15015_15019;
var G__15025 = count__15016_15020;
var G__15026 = (i__15017_15021 + (1));
seq__15014_15018 = G__15023;
chunk__15015_15019 = G__15024;
count__15016_15020 = G__15025;
i__15017_15021 = G__15026;
continue;
} else {
var temp__4425__auto___15027 = cljs.core.seq.call(null,seq__15014_15018);
if(temp__4425__auto___15027){
var seq__15014_15028__$1 = temp__4425__auto___15027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15014_15028__$1)){
var c__6945__auto___15029 = cljs.core.chunk_first.call(null,seq__15014_15028__$1);
var G__15030 = cljs.core.chunk_rest.call(null,seq__15014_15028__$1);
var G__15031 = c__6945__auto___15029;
var G__15032 = cljs.core.count.call(null,c__6945__auto___15029);
var G__15033 = (0);
seq__15014_15018 = G__15030;
chunk__15015_15019 = G__15031;
count__15016_15020 = G__15032;
i__15017_15021 = G__15033;
continue;
} else {
var k__7265__auto___15034 = cljs.core.first.call(null,seq__15014_15028__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15034)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15034.call(null,env)),[cljs.core.str(k__7265__auto___15034)].join('')),"- "))));
} else {
}
} else {
}

var G__15035 = cljs.core.next.call(null,seq__15014_15028__$1);
var G__15036 = null;
var G__15037 = (0);
var G__15038 = (0);
seq__15014_15018 = G__15035;
chunk__15015_15019 = G__15036;
count__15016_15020 = G__15037;
i__15017_15021 = G__15038;
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

var seq__15039_15043 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15040_15044 = null;
var count__15041_15045 = (0);
var i__15042_15046 = (0);
while(true){
if((i__15042_15046 < count__15041_15045)){
var k__7265__auto___15047 = cljs.core._nth.call(null,chunk__15040_15044,i__15042_15046);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15047)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15047.call(null,env)),[cljs.core.str(k__7265__auto___15047)].join('')),"- "))));
} else {
}
} else {
}

var G__15048 = seq__15039_15043;
var G__15049 = chunk__15040_15044;
var G__15050 = count__15041_15045;
var G__15051 = (i__15042_15046 + (1));
seq__15039_15043 = G__15048;
chunk__15040_15044 = G__15049;
count__15041_15045 = G__15050;
i__15042_15046 = G__15051;
continue;
} else {
var temp__4425__auto___15052 = cljs.core.seq.call(null,seq__15039_15043);
if(temp__4425__auto___15052){
var seq__15039_15053__$1 = temp__4425__auto___15052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15039_15053__$1)){
var c__6945__auto___15054 = cljs.core.chunk_first.call(null,seq__15039_15053__$1);
var G__15055 = cljs.core.chunk_rest.call(null,seq__15039_15053__$1);
var G__15056 = c__6945__auto___15054;
var G__15057 = cljs.core.count.call(null,c__6945__auto___15054);
var G__15058 = (0);
seq__15039_15043 = G__15055;
chunk__15040_15044 = G__15056;
count__15041_15045 = G__15057;
i__15042_15046 = G__15058;
continue;
} else {
var k__7265__auto___15059 = cljs.core.first.call(null,seq__15039_15053__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15059)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15059.call(null,env)),[cljs.core.str(k__7265__auto___15059)].join('')),"- "))));
} else {
}
} else {
}

var G__15060 = cljs.core.next.call(null,seq__15039_15053__$1);
var G__15061 = null;
var G__15062 = (0);
var G__15063 = (0);
seq__15039_15043 = G__15060;
chunk__15040_15044 = G__15061;
count__15041_15045 = G__15062;
i__15042_15046 = G__15063;
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

var seq__15064_15068 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15065_15069 = null;
var count__15066_15070 = (0);
var i__15067_15071 = (0);
while(true){
if((i__15067_15071 < count__15066_15070)){
var k__7265__auto___15072 = cljs.core._nth.call(null,chunk__15065_15069,i__15067_15071);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15072)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15072.call(null,env)),[cljs.core.str(k__7265__auto___15072)].join('')),"- "))));
} else {
}
} else {
}

var G__15073 = seq__15064_15068;
var G__15074 = chunk__15065_15069;
var G__15075 = count__15066_15070;
var G__15076 = (i__15067_15071 + (1));
seq__15064_15068 = G__15073;
chunk__15065_15069 = G__15074;
count__15066_15070 = G__15075;
i__15067_15071 = G__15076;
continue;
} else {
var temp__4425__auto___15077 = cljs.core.seq.call(null,seq__15064_15068);
if(temp__4425__auto___15077){
var seq__15064_15078__$1 = temp__4425__auto___15077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15064_15078__$1)){
var c__6945__auto___15079 = cljs.core.chunk_first.call(null,seq__15064_15078__$1);
var G__15080 = cljs.core.chunk_rest.call(null,seq__15064_15078__$1);
var G__15081 = c__6945__auto___15079;
var G__15082 = cljs.core.count.call(null,c__6945__auto___15079);
var G__15083 = (0);
seq__15064_15068 = G__15080;
chunk__15065_15069 = G__15081;
count__15066_15070 = G__15082;
i__15067_15071 = G__15083;
continue;
} else {
var k__7265__auto___15084 = cljs.core.first.call(null,seq__15064_15078__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15084)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15084.call(null,env)),[cljs.core.str(k__7265__auto___15084)].join('')),"- "))));
} else {
}
} else {
}

var G__15085 = cljs.core.next.call(null,seq__15064_15078__$1);
var G__15086 = null;
var G__15087 = (0);
var G__15088 = (0);
seq__15064_15068 = G__15085;
chunk__15065_15069 = G__15086;
count__15066_15070 = G__15087;
i__15067_15071 = G__15088;
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

var seq__15089_15093 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15090_15094 = null;
var count__15091_15095 = (0);
var i__15092_15096 = (0);
while(true){
if((i__15092_15096 < count__15091_15095)){
var k__7265__auto___15097 = cljs.core._nth.call(null,chunk__15090_15094,i__15092_15096);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15097)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15097.call(null,env)),[cljs.core.str(k__7265__auto___15097)].join('')),"- "))));
} else {
}
} else {
}

var G__15098 = seq__15089_15093;
var G__15099 = chunk__15090_15094;
var G__15100 = count__15091_15095;
var G__15101 = (i__15092_15096 + (1));
seq__15089_15093 = G__15098;
chunk__15090_15094 = G__15099;
count__15091_15095 = G__15100;
i__15092_15096 = G__15101;
continue;
} else {
var temp__4425__auto___15102 = cljs.core.seq.call(null,seq__15089_15093);
if(temp__4425__auto___15102){
var seq__15089_15103__$1 = temp__4425__auto___15102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15089_15103__$1)){
var c__6945__auto___15104 = cljs.core.chunk_first.call(null,seq__15089_15103__$1);
var G__15105 = cljs.core.chunk_rest.call(null,seq__15089_15103__$1);
var G__15106 = c__6945__auto___15104;
var G__15107 = cljs.core.count.call(null,c__6945__auto___15104);
var G__15108 = (0);
seq__15089_15093 = G__15105;
chunk__15090_15094 = G__15106;
count__15091_15095 = G__15107;
i__15092_15096 = G__15108;
continue;
} else {
var k__7265__auto___15109 = cljs.core.first.call(null,seq__15089_15103__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15109)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15109.call(null,env)),[cljs.core.str(k__7265__auto___15109)].join('')),"- "))));
} else {
}
} else {
}

var G__15110 = cljs.core.next.call(null,seq__15089_15103__$1);
var G__15111 = null;
var G__15112 = (0);
var G__15113 = (0);
seq__15089_15093 = G__15110;
chunk__15090_15094 = G__15111;
count__15091_15095 = G__15112;
i__15092_15096 = G__15113;
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
var G__15114 = cljs.core.first.call(null,string_ids);
var G__15115 = cljs.core.rest.call(null,string_ids);
var G__15116 = cljs.core.assoc.call(null,results,sid,om_next_datascript_localisation_demo.datascript.db.app_localise_string.call(null,db,sid));
sid = G__15114;
string_ids = G__15115;
results = G__15116;
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

var seq__15117_15122 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15118_15123 = null;
var count__15119_15124 = (0);
var i__15120_15125 = (0);
while(true){
if((i__15120_15125 < count__15119_15124)){
var k__7265__auto___15126 = cljs.core._nth.call(null,chunk__15118_15123,i__15120_15125);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15126)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15126.call(null,env)),[cljs.core.str(k__7265__auto___15126)].join('')),"- "))));
} else {
}
} else {
}

var G__15127 = seq__15117_15122;
var G__15128 = chunk__15118_15123;
var G__15129 = count__15119_15124;
var G__15130 = (i__15120_15125 + (1));
seq__15117_15122 = G__15127;
chunk__15118_15123 = G__15128;
count__15119_15124 = G__15129;
i__15120_15125 = G__15130;
continue;
} else {
var temp__4425__auto___15131 = cljs.core.seq.call(null,seq__15117_15122);
if(temp__4425__auto___15131){
var seq__15117_15132__$1 = temp__4425__auto___15131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15117_15132__$1)){
var c__6945__auto___15133 = cljs.core.chunk_first.call(null,seq__15117_15132__$1);
var G__15134 = cljs.core.chunk_rest.call(null,seq__15117_15132__$1);
var G__15135 = c__6945__auto___15133;
var G__15136 = cljs.core.count.call(null,c__6945__auto___15133);
var G__15137 = (0);
seq__15117_15122 = G__15134;
chunk__15118_15123 = G__15135;
count__15119_15124 = G__15136;
i__15120_15125 = G__15137;
continue;
} else {
var k__7265__auto___15138 = cljs.core.first.call(null,seq__15117_15132__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15138)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15138.call(null,env)),[cljs.core.str(k__7265__auto___15138)].join('')),"- "))));
} else {
}
} else {
}

var G__15139 = cljs.core.next.call(null,seq__15117_15132__$1);
var G__15140 = null;
var G__15141 = (0);
var G__15142 = (0);
seq__15117_15122 = G__15139;
chunk__15118_15123 = G__15140;
count__15119_15124 = G__15141;
i__15120_15125 = G__15142;
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
var vec__15121 = om_next_datascript_localisation_demo.utils.ident.ident__GT_string_id_and_locale.call(null,ident);
var string_id = cljs.core.nth.call(null,vec__15121,(0),null);
var locale_id = cljs.core.nth.call(null,vec__15121,(1),null);
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

var seq__15143_15147 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15144_15148 = null;
var count__15145_15149 = (0);
var i__15146_15150 = (0);
while(true){
if((i__15146_15150 < count__15145_15149)){
var k__7265__auto___15151 = cljs.core._nth.call(null,chunk__15144_15148,i__15146_15150);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15151)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15151.call(null,env)),[cljs.core.str(k__7265__auto___15151)].join('')),"- "))));
} else {
}
} else {
}

var G__15152 = seq__15143_15147;
var G__15153 = chunk__15144_15148;
var G__15154 = count__15145_15149;
var G__15155 = (i__15146_15150 + (1));
seq__15143_15147 = G__15152;
chunk__15144_15148 = G__15153;
count__15145_15149 = G__15154;
i__15146_15150 = G__15155;
continue;
} else {
var temp__4425__auto___15156 = cljs.core.seq.call(null,seq__15143_15147);
if(temp__4425__auto___15156){
var seq__15143_15157__$1 = temp__4425__auto___15156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15143_15157__$1)){
var c__6945__auto___15158 = cljs.core.chunk_first.call(null,seq__15143_15157__$1);
var G__15159 = cljs.core.chunk_rest.call(null,seq__15143_15157__$1);
var G__15160 = c__6945__auto___15158;
var G__15161 = cljs.core.count.call(null,c__6945__auto___15158);
var G__15162 = (0);
seq__15143_15147 = G__15159;
chunk__15144_15148 = G__15160;
count__15145_15149 = G__15161;
i__15146_15150 = G__15162;
continue;
} else {
var k__7265__auto___15163 = cljs.core.first.call(null,seq__15143_15157__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15163)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15163.call(null,env)),[cljs.core.str(k__7265__auto___15163)].join('')),"- "))));
} else {
}
} else {
}

var G__15164 = cljs.core.next.call(null,seq__15143_15157__$1);
var G__15165 = null;
var G__15166 = (0);
var G__15167 = (0);
seq__15143_15147 = G__15164;
chunk__15144_15148 = G__15165;
count__15145_15149 = G__15166;
i__15146_15150 = G__15167;
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

var seq__15168_15172 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15169_15173 = null;
var count__15170_15174 = (0);
var i__15171_15175 = (0);
while(true){
if((i__15171_15175 < count__15170_15174)){
var k__7265__auto___15176 = cljs.core._nth.call(null,chunk__15169_15173,i__15171_15175);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15176)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15176.call(null,env)),[cljs.core.str(k__7265__auto___15176)].join('')),"- "))));
} else {
}
} else {
}

var G__15177 = seq__15168_15172;
var G__15178 = chunk__15169_15173;
var G__15179 = count__15170_15174;
var G__15180 = (i__15171_15175 + (1));
seq__15168_15172 = G__15177;
chunk__15169_15173 = G__15178;
count__15170_15174 = G__15179;
i__15171_15175 = G__15180;
continue;
} else {
var temp__4425__auto___15181 = cljs.core.seq.call(null,seq__15168_15172);
if(temp__4425__auto___15181){
var seq__15168_15182__$1 = temp__4425__auto___15181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15168_15182__$1)){
var c__6945__auto___15183 = cljs.core.chunk_first.call(null,seq__15168_15182__$1);
var G__15184 = cljs.core.chunk_rest.call(null,seq__15168_15182__$1);
var G__15185 = c__6945__auto___15183;
var G__15186 = cljs.core.count.call(null,c__6945__auto___15183);
var G__15187 = (0);
seq__15168_15172 = G__15184;
chunk__15169_15173 = G__15185;
count__15170_15174 = G__15186;
i__15171_15175 = G__15187;
continue;
} else {
var k__7265__auto___15188 = cljs.core.first.call(null,seq__15168_15182__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15188)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15188.call(null,env)),[cljs.core.str(k__7265__auto___15188)].join('')),"- "))));
} else {
}
} else {
}

var G__15189 = cljs.core.next.call(null,seq__15168_15182__$1);
var G__15190 = null;
var G__15191 = (0);
var G__15192 = (0);
seq__15168_15172 = G__15189;
chunk__15169_15173 = G__15190;
count__15170_15174 = G__15191;
i__15171_15175 = G__15192;
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

var seq__15193_15197 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15194_15198 = null;
var count__15195_15199 = (0);
var i__15196_15200 = (0);
while(true){
if((i__15196_15200 < count__15195_15199)){
var k__7265__auto___15201 = cljs.core._nth.call(null,chunk__15194_15198,i__15196_15200);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15201)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15201.call(null,env)),[cljs.core.str(k__7265__auto___15201)].join('')),"- "))));
} else {
}
} else {
}

var G__15202 = seq__15193_15197;
var G__15203 = chunk__15194_15198;
var G__15204 = count__15195_15199;
var G__15205 = (i__15196_15200 + (1));
seq__15193_15197 = G__15202;
chunk__15194_15198 = G__15203;
count__15195_15199 = G__15204;
i__15196_15200 = G__15205;
continue;
} else {
var temp__4425__auto___15206 = cljs.core.seq.call(null,seq__15193_15197);
if(temp__4425__auto___15206){
var seq__15193_15207__$1 = temp__4425__auto___15206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15193_15207__$1)){
var c__6945__auto___15208 = cljs.core.chunk_first.call(null,seq__15193_15207__$1);
var G__15209 = cljs.core.chunk_rest.call(null,seq__15193_15207__$1);
var G__15210 = c__6945__auto___15208;
var G__15211 = cljs.core.count.call(null,c__6945__auto___15208);
var G__15212 = (0);
seq__15193_15197 = G__15209;
chunk__15194_15198 = G__15210;
count__15195_15199 = G__15211;
i__15196_15200 = G__15212;
continue;
} else {
var k__7265__auto___15213 = cljs.core.first.call(null,seq__15193_15207__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15213)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15213.call(null,env)),[cljs.core.str(k__7265__auto___15213)].join('')),"- "))));
} else {
}
} else {
}

var G__15214 = cljs.core.next.call(null,seq__15193_15207__$1);
var G__15215 = null;
var G__15216 = (0);
var G__15217 = (0);
seq__15193_15197 = G__15214;
chunk__15194_15198 = G__15215;
count__15195_15199 = G__15216;
i__15196_15200 = G__15217;
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

var seq__15218_15222 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15219_15223 = null;
var count__15220_15224 = (0);
var i__15221_15225 = (0);
while(true){
if((i__15221_15225 < count__15220_15224)){
var k__7265__auto___15226 = cljs.core._nth.call(null,chunk__15219_15223,i__15221_15225);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15226)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15226.call(null,env)),[cljs.core.str(k__7265__auto___15226)].join('')),"- "))));
} else {
}
} else {
}

var G__15227 = seq__15218_15222;
var G__15228 = chunk__15219_15223;
var G__15229 = count__15220_15224;
var G__15230 = (i__15221_15225 + (1));
seq__15218_15222 = G__15227;
chunk__15219_15223 = G__15228;
count__15220_15224 = G__15229;
i__15221_15225 = G__15230;
continue;
} else {
var temp__4425__auto___15231 = cljs.core.seq.call(null,seq__15218_15222);
if(temp__4425__auto___15231){
var seq__15218_15232__$1 = temp__4425__auto___15231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15218_15232__$1)){
var c__6945__auto___15233 = cljs.core.chunk_first.call(null,seq__15218_15232__$1);
var G__15234 = cljs.core.chunk_rest.call(null,seq__15218_15232__$1);
var G__15235 = c__6945__auto___15233;
var G__15236 = cljs.core.count.call(null,c__6945__auto___15233);
var G__15237 = (0);
seq__15218_15222 = G__15234;
chunk__15219_15223 = G__15235;
count__15220_15224 = G__15236;
i__15221_15225 = G__15237;
continue;
} else {
var k__7265__auto___15238 = cljs.core.first.call(null,seq__15218_15232__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15238)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15238.call(null,env)),[cljs.core.str(k__7265__auto___15238)].join('')),"- "))));
} else {
}
} else {
}

var G__15239 = cljs.core.next.call(null,seq__15218_15232__$1);
var G__15240 = null;
var G__15241 = (0);
var G__15242 = (0);
seq__15218_15222 = G__15239;
chunk__15219_15223 = G__15240;
count__15220_15224 = G__15241;
i__15221_15225 = G__15242;
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

var seq__15243_15247 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15244_15248 = null;
var count__15245_15249 = (0);
var i__15246_15250 = (0);
while(true){
if((i__15246_15250 < count__15245_15249)){
var k__7265__auto___15251 = cljs.core._nth.call(null,chunk__15244_15248,i__15246_15250);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15251)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15251.call(null,env)),[cljs.core.str(k__7265__auto___15251)].join('')),"- "))));
} else {
}
} else {
}

var G__15252 = seq__15243_15247;
var G__15253 = chunk__15244_15248;
var G__15254 = count__15245_15249;
var G__15255 = (i__15246_15250 + (1));
seq__15243_15247 = G__15252;
chunk__15244_15248 = G__15253;
count__15245_15249 = G__15254;
i__15246_15250 = G__15255;
continue;
} else {
var temp__4425__auto___15256 = cljs.core.seq.call(null,seq__15243_15247);
if(temp__4425__auto___15256){
var seq__15243_15257__$1 = temp__4425__auto___15256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15243_15257__$1)){
var c__6945__auto___15258 = cljs.core.chunk_first.call(null,seq__15243_15257__$1);
var G__15259 = cljs.core.chunk_rest.call(null,seq__15243_15257__$1);
var G__15260 = c__6945__auto___15258;
var G__15261 = cljs.core.count.call(null,c__6945__auto___15258);
var G__15262 = (0);
seq__15243_15247 = G__15259;
chunk__15244_15248 = G__15260;
count__15245_15249 = G__15261;
i__15246_15250 = G__15262;
continue;
} else {
var k__7265__auto___15263 = cljs.core.first.call(null,seq__15243_15257__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15263)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15263.call(null,env)),[cljs.core.str(k__7265__auto___15263)].join('')),"- "))));
} else {
}
} else {
}

var G__15264 = cljs.core.next.call(null,seq__15243_15257__$1);
var G__15265 = null;
var G__15266 = (0);
var G__15267 = (0);
seq__15243_15247 = G__15264;
chunk__15244_15248 = G__15265;
count__15245_15249 = G__15266;
i__15246_15250 = G__15267;
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

var seq__15268_15272 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15269_15273 = null;
var count__15270_15274 = (0);
var i__15271_15275 = (0);
while(true){
if((i__15271_15275 < count__15270_15274)){
var k__7265__auto___15276 = cljs.core._nth.call(null,chunk__15269_15273,i__15271_15275);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15276)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15276.call(null,env)),[cljs.core.str(k__7265__auto___15276)].join('')),"- "))));
} else {
}
} else {
}

var G__15277 = seq__15268_15272;
var G__15278 = chunk__15269_15273;
var G__15279 = count__15270_15274;
var G__15280 = (i__15271_15275 + (1));
seq__15268_15272 = G__15277;
chunk__15269_15273 = G__15278;
count__15270_15274 = G__15279;
i__15271_15275 = G__15280;
continue;
} else {
var temp__4425__auto___15281 = cljs.core.seq.call(null,seq__15268_15272);
if(temp__4425__auto___15281){
var seq__15268_15282__$1 = temp__4425__auto___15281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15268_15282__$1)){
var c__6945__auto___15283 = cljs.core.chunk_first.call(null,seq__15268_15282__$1);
var G__15284 = cljs.core.chunk_rest.call(null,seq__15268_15282__$1);
var G__15285 = c__6945__auto___15283;
var G__15286 = cljs.core.count.call(null,c__6945__auto___15283);
var G__15287 = (0);
seq__15268_15272 = G__15284;
chunk__15269_15273 = G__15285;
count__15270_15274 = G__15286;
i__15271_15275 = G__15287;
continue;
} else {
var k__7265__auto___15288 = cljs.core.first.call(null,seq__15268_15282__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15288)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15288.call(null,env)),[cljs.core.str(k__7265__auto___15288)].join('')),"- "))));
} else {
}
} else {
}

var G__15289 = cljs.core.next.call(null,seq__15268_15282__$1);
var G__15290 = null;
var G__15291 = (0);
var G__15292 = (0);
seq__15268_15272 = G__15289;
chunk__15269_15273 = G__15290;
count__15270_15274 = G__15291;
i__15271_15275 = G__15292;
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

var seq__15293_15297 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15294_15298 = null;
var count__15295_15299 = (0);
var i__15296_15300 = (0);
while(true){
if((i__15296_15300 < count__15295_15299)){
var k__7265__auto___15301 = cljs.core._nth.call(null,chunk__15294_15298,i__15296_15300);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15301)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15301.call(null,env)),[cljs.core.str(k__7265__auto___15301)].join('')),"- "))));
} else {
}
} else {
}

var G__15302 = seq__15293_15297;
var G__15303 = chunk__15294_15298;
var G__15304 = count__15295_15299;
var G__15305 = (i__15296_15300 + (1));
seq__15293_15297 = G__15302;
chunk__15294_15298 = G__15303;
count__15295_15299 = G__15304;
i__15296_15300 = G__15305;
continue;
} else {
var temp__4425__auto___15306 = cljs.core.seq.call(null,seq__15293_15297);
if(temp__4425__auto___15306){
var seq__15293_15307__$1 = temp__4425__auto___15306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15293_15307__$1)){
var c__6945__auto___15308 = cljs.core.chunk_first.call(null,seq__15293_15307__$1);
var G__15309 = cljs.core.chunk_rest.call(null,seq__15293_15307__$1);
var G__15310 = c__6945__auto___15308;
var G__15311 = cljs.core.count.call(null,c__6945__auto___15308);
var G__15312 = (0);
seq__15293_15297 = G__15309;
chunk__15294_15298 = G__15310;
count__15295_15299 = G__15311;
i__15296_15300 = G__15312;
continue;
} else {
var k__7265__auto___15313 = cljs.core.first.call(null,seq__15293_15307__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15313)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15313.call(null,env)),[cljs.core.str(k__7265__auto___15313)].join('')),"- "))));
} else {
}
} else {
}

var G__15314 = cljs.core.next.call(null,seq__15293_15307__$1);
var G__15315 = null;
var G__15316 = (0);
var G__15317 = (0);
seq__15293_15297 = G__15314;
chunk__15294_15298 = G__15315;
count__15295_15299 = G__15316;
i__15296_15300 = G__15317;
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

var seq__15318_15324 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15319_15325 = null;
var count__15320_15326 = (0);
var i__15321_15327 = (0);
while(true){
if((i__15321_15327 < count__15320_15326)){
var k__7265__auto___15328 = cljs.core._nth.call(null,chunk__15319_15325,i__15321_15327);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15328)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15328.call(null,env)),[cljs.core.str(k__7265__auto___15328)].join('')),"- "))));
} else {
}
} else {
}

var G__15329 = seq__15318_15324;
var G__15330 = chunk__15319_15325;
var G__15331 = count__15320_15326;
var G__15332 = (i__15321_15327 + (1));
seq__15318_15324 = G__15329;
chunk__15319_15325 = G__15330;
count__15320_15326 = G__15331;
i__15321_15327 = G__15332;
continue;
} else {
var temp__4425__auto___15333 = cljs.core.seq.call(null,seq__15318_15324);
if(temp__4425__auto___15333){
var seq__15318_15334__$1 = temp__4425__auto___15333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15318_15334__$1)){
var c__6945__auto___15335 = cljs.core.chunk_first.call(null,seq__15318_15334__$1);
var G__15336 = cljs.core.chunk_rest.call(null,seq__15318_15334__$1);
var G__15337 = c__6945__auto___15335;
var G__15338 = cljs.core.count.call(null,c__6945__auto___15335);
var G__15339 = (0);
seq__15318_15324 = G__15336;
chunk__15319_15325 = G__15337;
count__15320_15326 = G__15338;
i__15321_15327 = G__15339;
continue;
} else {
var k__7265__auto___15340 = cljs.core.first.call(null,seq__15318_15334__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15340)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15340.call(null,env)),[cljs.core.str(k__7265__auto___15340)].join('')),"- "))));
} else {
}
} else {
}

var G__15341 = cljs.core.next.call(null,seq__15318_15334__$1);
var G__15342 = null;
var G__15343 = (0);
var G__15344 = (0);
seq__15318_15324 = G__15341;
chunk__15319_15325 = G__15342;
count__15320_15326 = G__15343;
i__15321_15327 = G__15344;
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
var map__15322 = params;
var map__15322__$1 = ((((!((map__15322 == null)))?((((map__15322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15322):map__15322);
var ident = cljs.core.get.call(null,map__15322__$1,new cljs.core.Keyword("string","ident","string/ident",-106951611));
var id = cljs.core.get.call(null,map__15322__$1,new cljs.core.Keyword("locale","id","locale/id",-337593382));
var text = cljs.core.get.call(null,map__15322__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var tx = om_next_datascript_localisation_demo.datascript.db.make_edited_string_tx.call(null,db,ident,id,text);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"localised-strings","localised-strings",-1966357613)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (db,map__15322,map__15322__$1,ident,id,text,tx){
return (function (){
return datascript.core.transact_BANG_.call(null,db,tx);
});})(db,map__15322,map__15322__$1,ident,id,text,tx))
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

var seq__15345_15351 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15346_15352 = null;
var count__15347_15353 = (0);
var i__15348_15354 = (0);
while(true){
if((i__15348_15354 < count__15347_15353)){
var k__7265__auto___15355 = cljs.core._nth.call(null,chunk__15346_15352,i__15348_15354);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15355)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15355.call(null,env)),[cljs.core.str(k__7265__auto___15355)].join('')),"- "))));
} else {
}
} else {
}

var G__15356 = seq__15345_15351;
var G__15357 = chunk__15346_15352;
var G__15358 = count__15347_15353;
var G__15359 = (i__15348_15354 + (1));
seq__15345_15351 = G__15356;
chunk__15346_15352 = G__15357;
count__15347_15353 = G__15358;
i__15348_15354 = G__15359;
continue;
} else {
var temp__4425__auto___15360 = cljs.core.seq.call(null,seq__15345_15351);
if(temp__4425__auto___15360){
var seq__15345_15361__$1 = temp__4425__auto___15360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15345_15361__$1)){
var c__6945__auto___15362 = cljs.core.chunk_first.call(null,seq__15345_15361__$1);
var G__15363 = cljs.core.chunk_rest.call(null,seq__15345_15361__$1);
var G__15364 = c__6945__auto___15362;
var G__15365 = cljs.core.count.call(null,c__6945__auto___15362);
var G__15366 = (0);
seq__15345_15351 = G__15363;
chunk__15346_15352 = G__15364;
count__15347_15353 = G__15365;
i__15348_15354 = G__15366;
continue;
} else {
var k__7265__auto___15367 = cljs.core.first.call(null,seq__15345_15361__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15367)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15367.call(null,env)),[cljs.core.str(k__7265__auto___15367)].join('')),"- "))));
} else {
}
} else {
}

var G__15368 = cljs.core.next.call(null,seq__15345_15361__$1);
var G__15369 = null;
var G__15370 = (0);
var G__15371 = (0);
seq__15345_15351 = G__15368;
chunk__15346_15352 = G__15369;
count__15347_15353 = G__15370;
i__15348_15354 = G__15371;
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
var map__15349 = params;
var map__15349__$1 = ((((!((map__15349 == null)))?((((map__15349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15349):map__15349);
var id = cljs.core.get.call(null,map__15349__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var locale = cljs.core.get.call(null,map__15349__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
var value = cljs.core.get.call(null,map__15349__$1,new cljs.core.Keyword(null,"value","value",305978217));
var tx = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("localised","locale","localised/locale",1513168907),locale], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword(null,"value","value",305978217),value], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword(null,"localised","localised",-1733242051),(-1)], null)], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (db,map__15349,map__15349__$1,id,locale,value,tx){
return (function (){
return datascript.core.transact_BANG_.call(null,db,tx);
});})(db,map__15349,map__15349__$1,id,locale,value,tx))
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

var seq__15372_15378 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15373_15379 = null;
var count__15374_15380 = (0);
var i__15375_15381 = (0);
while(true){
if((i__15375_15381 < count__15374_15380)){
var k__7265__auto___15382 = cljs.core._nth.call(null,chunk__15373_15379,i__15375_15381);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15382)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15382.call(null,env)),[cljs.core.str(k__7265__auto___15382)].join('')),"- "))));
} else {
}
} else {
}

var G__15383 = seq__15372_15378;
var G__15384 = chunk__15373_15379;
var G__15385 = count__15374_15380;
var G__15386 = (i__15375_15381 + (1));
seq__15372_15378 = G__15383;
chunk__15373_15379 = G__15384;
count__15374_15380 = G__15385;
i__15375_15381 = G__15386;
continue;
} else {
var temp__4425__auto___15387 = cljs.core.seq.call(null,seq__15372_15378);
if(temp__4425__auto___15387){
var seq__15372_15388__$1 = temp__4425__auto___15387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15372_15388__$1)){
var c__6945__auto___15389 = cljs.core.chunk_first.call(null,seq__15372_15388__$1);
var G__15390 = cljs.core.chunk_rest.call(null,seq__15372_15388__$1);
var G__15391 = c__6945__auto___15389;
var G__15392 = cljs.core.count.call(null,c__6945__auto___15389);
var G__15393 = (0);
seq__15372_15378 = G__15390;
chunk__15373_15379 = G__15391;
count__15374_15380 = G__15392;
i__15375_15381 = G__15393;
continue;
} else {
var k__7265__auto___15394 = cljs.core.first.call(null,seq__15372_15388__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15394)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15394.call(null,env)),[cljs.core.str(k__7265__auto___15394)].join('')),"- "))));
} else {
}
} else {
}

var G__15395 = cljs.core.next.call(null,seq__15372_15388__$1);
var G__15396 = null;
var G__15397 = (0);
var G__15398 = (0);
seq__15372_15378 = G__15395;
chunk__15373_15379 = G__15396;
count__15374_15380 = G__15397;
i__15375_15381 = G__15398;
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
var map__15376 = params;
var map__15376__$1 = ((((!((map__15376 == null)))?((((map__15376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15376):map__15376);
var id = cljs.core.get.call(null,map__15376__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var attrib = cljs.core.get.call(null,map__15376__$1,new cljs.core.Keyword(null,"attrib","attrib",-1137323804));
var value = cljs.core.get.call(null,map__15376__$1,new cljs.core.Keyword(null,"value","value",305978217));
var tx = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("db","id","db/id",-1388397098),id,attrib,value], true, false);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (db,map__15376,map__15376__$1,id,attrib,value,tx){
return (function (){
return datascript.core.transact_BANG_.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null));
});})(db,map__15376,map__15376__$1,id,attrib,value,tx))
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

var seq__15399_15403 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("query","root","query/root",-68034309)], null));
var chunk__15400_15404 = null;
var count__15401_15405 = (0);
var i__15402_15406 = (0);
while(true){
if((i__15402_15406 < count__15401_15405)){
var k__7265__auto___15407 = cljs.core._nth.call(null,chunk__15400_15404,i__15402_15406);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15407)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15407.call(null,env)),[cljs.core.str(k__7265__auto___15407)].join('')),"- "))));
} else {
}
} else {
}

var G__15408 = seq__15399_15403;
var G__15409 = chunk__15400_15404;
var G__15410 = count__15401_15405;
var G__15411 = (i__15402_15406 + (1));
seq__15399_15403 = G__15408;
chunk__15400_15404 = G__15409;
count__15401_15405 = G__15410;
i__15402_15406 = G__15411;
continue;
} else {
var temp__4425__auto___15412 = cljs.core.seq.call(null,seq__15399_15403);
if(temp__4425__auto___15412){
var seq__15399_15413__$1 = temp__4425__auto___15412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15399_15413__$1)){
var c__6945__auto___15414 = cljs.core.chunk_first.call(null,seq__15399_15413__$1);
var G__15415 = cljs.core.chunk_rest.call(null,seq__15399_15413__$1);
var G__15416 = c__6945__auto___15414;
var G__15417 = cljs.core.count.call(null,c__6945__auto___15414);
var G__15418 = (0);
seq__15399_15403 = G__15415;
chunk__15400_15404 = G__15416;
count__15401_15405 = G__15417;
i__15402_15406 = G__15418;
continue;
} else {
var k__7265__auto___15419 = cljs.core.first.call(null,seq__15399_15413__$1);
if(cljs.core.contains_QMARK_.call(null,env,k__7265__auto___15419)){
if(cljs.core.truth_(om_next_datascript_localisation_demo.logging.logging_is_on)){
console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,k__7265__auto___15419.call(null,env)),[cljs.core.str(k__7265__auto___15419)].join('')),"- "))));
} else {
}
} else {
}

var G__15420 = cljs.core.next.call(null,seq__15399_15413__$1);
var G__15421 = null;
var G__15422 = (0);
var G__15423 = (0);
seq__15399_15403 = G__15420;
chunk__15400_15404 = G__15421;
count__15401_15405 = G__15422;
i__15402_15406 = G__15423;
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

//# sourceMappingURL=parser.js.map?rel=1452427076194