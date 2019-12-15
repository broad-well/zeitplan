// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clojure.browser.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('goog.object');
clojure.browser.dom.append = (function clojure$browser$dom$append(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4572 = arguments.length;
var i__4532__auto___4573 = (0);
while(true){
if((i__4532__auto___4573 < len__4531__auto___4572)){
args__4534__auto__.push((arguments[i__4532__auto___4573]));

var G__4574 = (i__4532__auto___4573 + (1));
i__4532__auto___4573 = G__4574;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return clojure.browser.dom.append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

clojure.browser.dom.append.cljs$core$IFn$_invoke$arity$variadic = (function (parent,children){
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.dom.append,parent,children);

return parent;
});

clojure.browser.dom.append.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.browser.dom.append.cljs$lang$applyTo = (function (seq4570){
var G__4571 = cljs.core.first(seq4570);
var seq4570__$1 = cljs.core.next(seq4570);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4571,seq4570__$1);
});


/**
 * @interface
 */
clojure.browser.dom.DOMBuilder = function(){};

clojure.browser.dom._element = (function clojure$browser$dom$_element(var_args){
var G__4576 = arguments.length;
switch (G__4576) {
case 1:
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if(((!((this$ == null))) && (!((this$.clojure$browser$dom$DOMBuilder$_element$arity$1 == null))))){
return this$.clojure$browser$dom$DOMBuilder$_element$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (clojure.browser.dom._element[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (clojure.browser.dom._element["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DOMBuilder.-element",this$);
}
}
}
});

clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$2 = (function (this$,attrs_or_children){
if(((!((this$ == null))) && (!((this$.clojure$browser$dom$DOMBuilder$_element$arity$2 == null))))){
return this$.clojure$browser$dom$DOMBuilder$_element$arity$2(this$,attrs_or_children);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (clojure.browser.dom._element[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,attrs_or_children) : m__4244__auto__.call(null,this$,attrs_or_children));
} else {
var m__4244__auto____$1 = (clojure.browser.dom._element["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,attrs_or_children) : m__4244__auto____$1.call(null,this$,attrs_or_children));
} else {
throw cljs.core.missing_protocol("DOMBuilder.-element",this$);
}
}
}
});

clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$3 = (function (this$,attrs,children){
if(((!((this$ == null))) && (!((this$.clojure$browser$dom$DOMBuilder$_element$arity$3 == null))))){
return this$.clojure$browser$dom$DOMBuilder$_element$arity$3(this$,attrs,children);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (clojure.browser.dom._element[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,attrs,children) : m__4244__auto__.call(null,this$,attrs,children));
} else {
var m__4244__auto____$1 = (clojure.browser.dom._element["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,attrs,children) : m__4244__auto____$1.call(null,this$,attrs,children));
} else {
throw cljs.core.missing_protocol("DOMBuilder.-element",this$);
}
}
}
});

clojure.browser.dom._element.cljs$lang$maxFixedArity = 3;


clojure.browser.dom.log = (function clojure$browser$dom$log(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4579 = arguments.length;
var i__4532__auto___4580 = (0);
while(true){
if((i__4532__auto___4580 < len__4531__auto___4579)){
args__4534__auto__.push((arguments[i__4532__auto___4580]));

var G__4581 = (i__4532__auto___4580 + (1));
i__4532__auto___4580 = G__4581;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,args));
});

clojure.browser.dom.log.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
clojure.browser.dom.log.cljs$lang$applyTo = (function (seq4578){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq4578));
});

clojure.browser.dom.log_obj = (function clojure$browser$dom$log_obj(obj){
return console.log(obj);
});
goog.object.set(clojure.browser.dom.DOMBuilder,"string",true);

var G__4582_4601 = clojure.browser.dom._element;
var G__4583_4602 = "string";
var G__4584_4603 = ((function (G__4582_4601,G__4583_4602){
return (function() {
var G__4604 = null;
var G__4604__1 = (function (this$){
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["string (-element ",this$,")"], 0));

if((this$ instanceof cljs.core.Keyword)){
var G__4585 = cljs.core.name(this$);
return goog.dom.createElement(G__4585);
} else {
var G__4586 = cljs.core.name(this$);
return goog.dom.createTextNode(G__4586);

}
});
var G__4604__2 = (function (this$,attrs_or_children){
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["string (-element ",this$," ",attrs_or_children,")"], 0));

var attrs = cljs.core.first(attrs_or_children);
if(cljs.core.map_QMARK_(attrs)){
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$3(this$,attrs,cljs.core.rest(attrs_or_children));
} else {
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$3(this$,null,attrs_or_children);
}
});
var G__4604__3 = (function (this$,attrs,children){
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["string (-element ",this$," ",attrs," ",children,")"], 0));

var str_attrs = ((((cljs.core.map_QMARK_(attrs)) && (cljs.core.seq(attrs))))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__4582_4601,G__4583_4602){
return (function (o,p__4587){
var vec__4588 = p__4587;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4588,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4588,(1),null);
var o__$1 = (((o == null))?{}:o);
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["o = ",o__$1], 0));

clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["k = ",k], 0));

clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["v = ",v], 0));

if((((k instanceof cljs.core.Keyword)) || (typeof k === 'string'))){
var G__4593 = o__$1;
var G__4594_4605 = G__4593;
var G__4595_4606 = cljs.core.name(k);
var G__4596_4607 = v;
goog.object.set(G__4594_4605,G__4595_4606,G__4596_4607);

return G__4593;
} else {
return null;
}
});})(G__4582_4601,G__4583_4602))
,{},attrs):null);
clojure.browser.dom.log_obj(str_attrs);

if(cljs.core.seq(children)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,cljs.core.name(this$),str_attrs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.browser.dom._element,children));
} else {
var G__4599 = cljs.core.name(this$);
var G__4600 = str_attrs;
return goog.dom.createDom(G__4599,G__4600);
}
});
G__4604 = function(this$,attrs,children){
switch(arguments.length){
case 1:
return G__4604__1.call(this,this$);
case 2:
return G__4604__2.call(this,this$,attrs);
case 3:
return G__4604__3.call(this,this$,attrs,children);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__4604.cljs$core$IFn$_invoke$arity$1 = G__4604__1;
G__4604.cljs$core$IFn$_invoke$arity$2 = G__4604__2;
G__4604.cljs$core$IFn$_invoke$arity$3 = G__4604__3;
return G__4604;
})()
;})(G__4582_4601,G__4583_4602))
;
goog.object.set(G__4582_4601,G__4583_4602,G__4584_4603);

cljs.core.PersistentVector.prototype.clojure$browser$dom$DOMBuilder$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$browser$dom$DOMBuilder$_element$arity$1 = (function (this$){
var this$__$1 = this;
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["PersistentVector (-element ",this$__$1,")"], 0));

var tag = cljs.core.first(this$__$1);
var attrs = cljs.core.second(this$__$1);
var children = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),this$__$1);
if(cljs.core.map_QMARK_(attrs)){
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$3(tag,attrs,children);
} else {
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$3(tag,null,cljs.core.rest(this$__$1));
}
});

Element.prototype.clojure$browser$dom$DOMBuilder$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.clojure$browser$dom$DOMBuilder$_element$arity$1 = (function (this$){
var this$__$1 = this;
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["js/Element (-element ",this$__$1,")"], 0));

return this$__$1;
});
clojure.browser.dom.element = (function clojure$browser$dom$element(var_args){
var G__4611 = arguments.length;
switch (G__4611) {
case 1:
return clojure.browser.dom.element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___4613 = arguments.length;
var i__4532__auto___4614 = (0);
while(true){
if((i__4532__auto___4614 < len__4531__auto___4613)){
args_arr__4546__auto__.push((arguments[i__4532__auto___4614]));

var G__4615 = (i__4532__auto___4614 + (1));
i__4532__auto___4614 = G__4615;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((1)),(0),null));
return clojure.browser.dom.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4547__auto__);

}
});

clojure.browser.dom.element.cljs$core$IFn$_invoke$arity$1 = (function (tag_or_text){
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(element ",tag_or_text,")"], 0));

return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$1(tag_or_text);
});

clojure.browser.dom.element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,children){
clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(element ",tag," ",children,")"], 0));

var attrs = cljs.core.first(children);
if(cljs.core.map_QMARK_(attrs)){
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$3(tag,attrs,cljs.core.rest(children));
} else {
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$3(tag,null,children);
}
});

/** @this {Function} */
clojure.browser.dom.element.cljs$lang$applyTo = (function (seq4609){
var G__4610 = cljs.core.first(seq4609);
var seq4609__$1 = cljs.core.next(seq4609);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4610,seq4609__$1);
});

clojure.browser.dom.element.cljs$lang$maxFixedArity = (1);

/**
 * Remove all children from the element with the passed id.
 */
clojure.browser.dom.remove_children = (function clojure$browser$dom$remove_children(id){
var parent = (function (){var G__4616 = cljs.core.name(id);
return goog.dom.getElement(G__4616);
})();
return goog.dom.removeChildren(parent);
});
clojure.browser.dom.get_element = (function clojure$browser$dom$get_element(id){
var G__4617 = cljs.core.name(id);
return goog.dom.getElement(G__4617);
});
clojure.browser.dom.html__GT_dom = (function clojure$browser$dom$html__GT_dom(s){
return goog.dom.htmlToDocumentFragment(s);
});
clojure.browser.dom.insert_at = (function clojure$browser$dom$insert_at(parent,child,index){
return goog.dom.insertChildAt(parent,child,index);
});
/**
 * Coerce the argument to a dom element if possible.
 */
clojure.browser.dom.ensure_element = (function clojure$browser$dom$ensure_element(e){
if((e instanceof cljs.core.Keyword)){
return clojure.browser.dom.get_element(e);
} else {
if(typeof e === 'string'){
return clojure.browser.dom.html__GT_dom(e);
} else {
return e;

}
}
});
/**
 * Replace old-node with new-node. old-node can be an element or a
 * keyword which is the id of the node to replace.  new-node can be an
 * element or an html string.
 */
clojure.browser.dom.replace_node = (function clojure$browser$dom$replace_node(old_node,new_node){
var old_node__$1 = clojure.browser.dom.ensure_element(old_node);
var new_node__$1 = clojure.browser.dom.ensure_element(new_node);
goog.dom.replaceNode(new_node__$1,old_node__$1);

return new_node__$1;
});
/**
 * Set the text content for the passed element returning the
 *   element. If a keyword is passed in the place of e, the element with
 *   that id will be used and returned.
 */
clojure.browser.dom.set_text = (function clojure$browser$dom$set_text(e,s){
var G__4618 = clojure.browser.dom.ensure_element(e);
var G__4619 = s;
return goog.dom.setTextContent(G__4618,G__4619);
});
/**
 * Get the value of an element.
 */
clojure.browser.dom.get_value = (function clojure$browser$dom$get_value(e){
return clojure.browser.dom.ensure_element(e).value;
});
/**
 * Set properties on an element
 */
clojure.browser.dom.set_properties = (function clojure$browser$dom$set_properties(e,m){
var G__4620 = clojure.browser.dom.ensure_element(e);
var G__4621 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.create,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(m),cljs.core.vals(m)));
return goog.dom.setProperties(G__4620,G__4621);
});
/**
 * Set the value property for an element.
 */
clojure.browser.dom.set_value = (function clojure$browser$dom$set_value(e,v){
return clojure.browser.dom.set_properties(e,new cljs.core.PersistentArrayMap(null, 1, ["value",v], null));
});
clojure.browser.dom.click_element = (function clojure$browser$dom$click_element(e){
return clojure.browser.dom.ensure_element(e).click(cljs.core.List.EMPTY);
});
