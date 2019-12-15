// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('zeitplan.render');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.browser.dom');
zeitplan.render.format_time_component = (function zeitplan$render$format_time_component(number){
var repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(repr),(1))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repr)].join('');
} else {
return repr;
}
});
zeitplan.render.format_time = (function zeitplan$render$format_time(min_since_midnight){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(zeitplan.render.format_time_component(cljs.core.quot(min_since_midnight,(60)))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zeitplan.render.format_time_component(cljs.core.mod(min_since_midnight,(60))))].join('');
});
zeitplan.render.render_item = (function zeitplan$render$render_item(applied_entry){
var newhtml = ["<li class=\"list-group-item\">\n<div class=\"d-flex justify-content-between align-items-center\">\n<div>\n<h4>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$task.cljs$core$IFn$_invoke$arity$1(applied_entry)),"</h4>\n<p class=\"mb-1\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.cst$kw$end_DASH_time.cljs$core$IFn$_invoke$arity$1(applied_entry) - cljs.core.cst$kw$start_DASH_time.cljs$core$IFn$_invoke$arity$1(applied_entry)))," minutes</p>\n</div>\n<h5>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zeitplan.render.format_time(cljs.core.cst$kw$start_DASH_time.cljs$core$IFn$_invoke$arity$1(applied_entry))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zeitplan.render.format_time(cljs.core.cst$kw$end_DASH_time.cljs$core$IFn$_invoke$arity$1(applied_entry))),"</h5>\n</div>\n</li>"].join('');
var element = document.querySelector("#zeitplan");
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([element], 0));

return element.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(element.innerHTML),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newhtml)].join('');
});
zeitplan.render.element_value = (function zeitplan$render$element_value(query_selector){
return document.querySelector(query_selector).value;
});
zeitplan.render.add_listener = (function zeitplan$render$add_listener(event,query_selector,action){
return document.querySelector(query_selector).addEventListener(event,action);
});
zeitplan.render.clear_items = (function zeitplan$render$clear_items(){
var element = document.querySelector("#zeitplan");
return element.innerHTML = "";
});
zeitplan.render.set_time_field = (function zeitplan$render$set_time_field(minutes){
return document.querySelector("#start-time").value = zeitplan.render.format_time(minutes);
});
zeitplan.render.get_time_field = (function zeitplan$render$get_time_field(){
var value = document.querySelector("#start-time").value;
var hours = window.parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(2)));
var minutes = window.parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(3),(5)));
return ((hours * (60)) + minutes);
});
zeitplan.render.highlight_nth = (function zeitplan$render$highlight_nth(n){
var element = document.querySelector("#zeitplan");
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(element.children),n);
return child.classList.add("active");
});
zeitplan.render.notify = (function zeitplan$render$notify(aentry){
var start_time = zeitplan.render.format_time(cljs.core.cst$kw$start_DASH_time.cljs$core$IFn$_invoke$arity$1(aentry));
var end_time = zeitplan.render.format_time(cljs.core.cst$kw$end_DASH_time.cljs$core$IFn$_invoke$arity$1(aentry));
var task = cljs.core.cst$kw$task.cljs$core$IFn$_invoke$arity$1(aentry);
return (new Notification(["New Task: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(task),", from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_time)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_time)].join('')));
});
