// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om_next_datascript_localisation_demo.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om_next_datascript_localisation_demo.datascript.db');
goog.require('om_next_datascript_localisation_demo.datascript.parser');
goog.require('om_next_datascript_localisation_demo.components.app');
goog.require('om_next_datascript_localisation_demo.logging');
cljs.core.enable_console_print_BANG_();
om_next_datascript_localisation_demo.core.on_js_reload = (function om_next_datascript_localisation_demo$core$on_js_reload(){
return null;
});
om_next_datascript_localisation_demo.core.reconciler = om.next.reconciler(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,om_next_datascript_localisation_demo.datascript.db.the_db,cljs.core.cst$kw$parser,om_next_datascript_localisation_demo.datascript.parser.parser], null));
om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(om_next_datascript_localisation_demo.core.reconciler,om_next_datascript_localisation_demo.components.app.App,goog.dom.getElement("app"));
