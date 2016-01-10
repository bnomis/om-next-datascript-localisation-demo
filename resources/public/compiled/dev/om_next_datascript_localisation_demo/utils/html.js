// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_datascript_localisation_demo.utils.html');
goog.require('cljs.core');
om_next_datascript_localisation_demo.utils.html.set_html_lang = (function om_next_datascript_localisation_demo$utils$html$set_html_lang(code){
if(cljs.core.truth_(code)){
return (document.getElementsByTagName("html")[(0)]).setAttribute("lang",code);
} else {
return (document.getElementsByTagName("html")[(0)]).removeAttribute("lang");
}
});
om_next_datascript_localisation_demo.utils.html.set_html_title = (function om_next_datascript_localisation_demo$utils$html$set_html_title(title){
return ((document.getElementsByTagName("title")[(0)])["innerHTML"] = title);
});

//# sourceMappingURL=html.js.map?rel=1452427072169