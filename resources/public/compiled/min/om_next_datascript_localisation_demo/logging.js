// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.logging');
goog.require('cljs.core');
om_next_datascript_localisation_demo.logging.logging_is_on = false;
om_next_datascript_localisation_demo.logging.log = (function om_next_datascript_localisation_demo$logging$log(var_args){
var args__7207__auto__ = [];
var len__7200__auto___13455 = arguments.length;
var i__7201__auto___13456 = (0);
while(true){
if((i__7201__auto___13456 < len__7200__auto___13455)){
args__7207__auto__.push((arguments[i__7201__auto___13456]));

var G__13457 = (i__7201__auto___13456 + (1));
i__7201__auto___13456 = G__13457;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((2) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((2)),(0))):null);
return om_next_datascript_localisation_demo.logging.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7208__auto__);
});

om_next_datascript_localisation_demo.logging.log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om_DASH_next_DASH_datascript_DASH_localisation_DASH_demo$logging_SLASH_logging_DASH_is_DASH_on),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_console$log),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_interpose),cljs.core._conj(cljs.core.List.EMPTY," "),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),args))))], 0)))))], 0)))))))))], 0))));
});

om_next_datascript_localisation_demo.logging.log.cljs$lang$maxFixedArity = (2);

om_next_datascript_localisation_demo.logging.log.cljs$lang$applyTo = (function (seq13452){
var G__13453 = cljs.core.first(seq13452);
var seq13452__$1 = cljs.core.next(seq13452);
var G__13454 = cljs.core.first(seq13452__$1);
var seq13452__$2 = cljs.core.next(seq13452__$1);
return om_next_datascript_localisation_demo.logging.log.cljs$core$IFn$_invoke$arity$variadic(G__13453,G__13454,seq13452__$2);
});

om_next_datascript_localisation_demo.logging.log.cljs$lang$macro = true;
om_next_datascript_localisation_demo.logging.log_env = (function om_next_datascript_localisation_demo$logging$log_env(_AMPERSAND_form,_AMPERSAND_env,env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om_DASH_next_DASH_datascript_DASH_localisation_DASH_demo$logging_SLASH_logging_DASH_is_DASH_on),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om_DASH_next_DASH_datascript_DASH_localisation_DASH_demo$logging_SLASH_log),cljs.core._conj(cljs.core.List.EMPTY,"- env contains:"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_keys),cljs.core._conj(cljs.core.List.EMPTY,env)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_doseq),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__13458__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$path),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$pathopt),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ast),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$component),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$shared),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$target),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$query),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$query_SLASH_root)], 0))))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,env),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__13458__auto__)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om_DASH_next_DASH_datascript_DASH_localisation_DASH_demo$logging_SLASH_log),cljs.core._conj(cljs.core.List.EMPTY,"- "),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__13458__auto__))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__13458__auto__),cljs.core._conj(cljs.core.List.EMPTY,env)))))], 0)))))], 0)))))], 0)))))], 0))));
});

om_next_datascript_localisation_demo.logging.log_env.cljs$lang$macro = true;
om_next_datascript_localisation_demo.logging.log_params = (function om_next_datascript_localisation_demo$logging$log_params(_AMPERSAND_form,_AMPERSAND_env,env,key,params){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om_DASH_next_DASH_datascript_DASH_localisation_DASH_demo$logging_SLASH_logging_DASH_is_DASH_on),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om_DASH_next_DASH_datascript_DASH_localisation_DASH_demo$logging_SLASH_log),cljs.core._conj(cljs.core.List.EMPTY,"- key"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,key)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om_DASH_next_DASH_datascript_DASH_localisation_DASH_demo$logging_SLASH_log),cljs.core._conj(cljs.core.List.EMPTY,"- params"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,params)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om_DASH_next_DASH_datascript_DASH_localisation_DASH_demo$logging_SLASH_log_DASH_env),cljs.core._conj(cljs.core.List.EMPTY,env)))))], 0))));
});

om_next_datascript_localisation_demo.logging.log_params.cljs$lang$macro = true;
om_next_datascript_localisation_demo.logging.log_read = (function om_next_datascript_localisation_demo$logging$log_read(_AMPERSAND_form,_AMPERSAND_env,env,key,params){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om_DASH_next_DASH_datascript_DASH_localisation_DASH_demo$logging_SLASH_logging_DASH_is_DASH_on),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om_DASH_next_DASH_datascript_DASH_localisation_DASH_demo$logging_SLASH_log_DASH_params),cljs.core._conj(cljs.core.List.EMPTY,env),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,key),cljs.core._conj(cljs.core.List.EMPTY,params)], 0)))))], 0))));
});

om_next_datascript_localisation_demo.logging.log_read.cljs$lang$macro = true;
om_next_datascript_localisation_demo.logging.log_mutate = (function om_next_datascript_localisation_demo$logging$log_mutate(_AMPERSAND_form,_AMPERSAND_env,env,key,params){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om_DASH_next_DASH_datascript_DASH_localisation_DASH_demo$logging_SLASH_logging_DASH_is_DASH_on),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om_DASH_next_DASH_datascript_DASH_localisation_DASH_demo$logging_SLASH_log_DASH_params),cljs.core._conj(cljs.core.List.EMPTY,env),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,key),cljs.core._conj(cljs.core.List.EMPTY,params)], 0)))))], 0))));
});

om_next_datascript_localisation_demo.logging.log_mutate.cljs$lang$macro = true;
