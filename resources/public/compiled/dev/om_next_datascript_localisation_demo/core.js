// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_datascript_localisation_demo.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om_next_datascript_localisation_demo.datascript.db');
goog.require('om_next_datascript_localisation_demo.datascript.parser');
goog.require('om_next_datascript_localisation_demo.components.app');
goog.require('om_next_datascript_localisation_demo.logging');
cljs.core.enable_console_print_BANG_.call(null);
om_next_datascript_localisation_demo.core.on_js_reload = (function om_next_datascript_localisation_demo$core$on_js_reload(){
return null;
});
om_next_datascript_localisation_demo.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_next_datascript_localisation_demo.datascript.db.the_db,new cljs.core.Keyword(null,"parser","parser",-1543495310),om_next_datascript_localisation_demo.datascript.parser.parser], null));
om.next.add_root_BANG_.call(null,om_next_datascript_localisation_demo.core.reconciler,om_next_datascript_localisation_demo.components.app.App,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map?rel=1452427077141