// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('zeitplan.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('zeitplan.types');
goog.require('zeitplan.use_cases');
goog.require('zeitplan.render');
cljs.core.enable_console_print_BANG_();
Notification.requestPermission();
zeitplan.core.render = (function zeitplan$core$render(){
zeitplan.render.clear_items();

return zeitplan.use_cases.see_zeitplan(zeitplan.render.render_item);
});
zeitplan.core.submit_time_entry = (function zeitplan$core$submit_time_entry(){
var description = zeitplan.render.element_value("#descr-input");
var duration = window.parseInt(zeitplan.render.element_value("#duration-input"));
zeitplan.use_cases.append_time_entry((new zeitplan.types.TimeEntry(duration,description,null,null,null,null)));

return zeitplan.core.render();
});
zeitplan.render.add_listener("click","#add-entry-button",zeitplan.core.submit_time_entry);
zeitplan.use_cases.set_start_time(zeitplan.use_cases.time_now());
zeitplan.render.set_time_field(zeitplan.use_cases.time_now());
zeitplan.render.add_listener("click","#update-start-time",(function (){
zeitplan.use_cases.set_start_time(zeitplan.render.get_time_field());

return zeitplan.core.render();
}));
window.setInterval((function (){
return zeitplan.use_cases.update_minute(zeitplan.render.highlight_nth,zeitplan.render.notify);
}),((1000) * (60)));
