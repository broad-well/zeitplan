// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('zeitplan.use_cases');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('zeitplan.types');
/**
 * Returns a function to be passed to `swap!`, which accepts
 * a Zeitplan object and modifies it by appending the given time entry
 */
zeitplan.use_cases.append_time_entry_swap = (function zeitplan$use_cases$append_time_entry_swap(time_entry){
var update_func = (function (p1__4680_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__4680_SHARP_,time_entry);
});
return ((function (update_func){
return (function (p1__4681_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__4681_SHARP_,cljs.core.cst$kw$entries,update_func);
});
;})(update_func))
});
zeitplan.use_cases.current_zeitplan = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new zeitplan.types.Zeitplan((0),cljs.core.List.EMPTY,null,null,null)));
zeitplan.use_cases.append_time_entry = (function zeitplan$use_cases$append_time_entry(time_entry){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(zeitplan.use_cases.current_zeitplan,zeitplan.use_cases.append_time_entry_swap(time_entry));
});
zeitplan.use_cases.set_start_time = (function zeitplan$use_cases$set_start_time(minutes){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(zeitplan.use_cases.current_zeitplan,(function (p1__4682_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__4682_SHARP_,cljs.core.cst$kw$start_DASH_time,minutes);
}));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
zeitplan.use_cases.AppliedTimeEntry = (function (start_time,end_time,task,category,__meta,__extmap,__hash){
this.start_time = start_time;
this.end_time = end_time;
this.task = task;
this.category = category;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
zeitplan.use_cases.AppliedTimeEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

zeitplan.use_cases.AppliedTimeEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k4684,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__4688 = k4684;
var G__4688__$1 = (((G__4688 instanceof cljs.core.Keyword))?G__4688.fqn:null);
switch (G__4688__$1) {
case "start-time":
return self__.start_time;

break;
case "end-time":
return self__.end_time;

break;
case "task":
return self__.task;

break;
case "category":
return self__.category;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k4684,else__4206__auto__);

}
});

zeitplan.use_cases.AppliedTimeEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#zeitplan.use-cases.AppliedTimeEntry{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_time,self__.start_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_time,self__.end_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$task,self__.task],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$category,self__.category],null))], null),self__.__extmap));
});

zeitplan.use_cases.AppliedTimeEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__4683){
var self__ = this;
var G__4683__$1 = this;
return (new cljs.core.RecordIter((0),G__4683__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start_DASH_time,cljs.core.cst$kw$end_DASH_time,cljs.core.cst$kw$task,cljs.core.cst$kw$category], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

zeitplan.use_cases.AppliedTimeEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

zeitplan.use_cases.AppliedTimeEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new zeitplan.use_cases.AppliedTimeEntry(self__.start_time,self__.end_time,self__.task,self__.category,self__.__meta,self__.__extmap,self__.__hash));
});

zeitplan.use_cases.AppliedTimeEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

zeitplan.use_cases.AppliedTimeEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__4689 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (95394112 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__4689(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

zeitplan.use_cases.AppliedTimeEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this4685,other4686){
var self__ = this;
var this4685__$1 = this;
return ((!((other4686 == null))) && ((this4685__$1.constructor === other4686.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4685__$1.start_time,other4686.start_time)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4685__$1.end_time,other4686.end_time)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4685__$1.task,other4686.task)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4685__$1.category,other4686.category)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4685__$1.__extmap,other4686.__extmap)));
});

zeitplan.use_cases.AppliedTimeEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$category,null,cljs.core.cst$kw$task,null,cljs.core.cst$kw$start_DASH_time,null,cljs.core.cst$kw$end_DASH_time,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new zeitplan.use_cases.AppliedTimeEntry(self__.start_time,self__.end_time,self__.task,self__.category,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

zeitplan.use_cases.AppliedTimeEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__4683){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__4690 = cljs.core.keyword_identical_QMARK_;
var expr__4691 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__4693 = cljs.core.cst$kw$start_DASH_time;
var G__4694 = expr__4691;
return (pred__4690.cljs$core$IFn$_invoke$arity$2 ? pred__4690.cljs$core$IFn$_invoke$arity$2(G__4693,G__4694) : pred__4690.call(null,G__4693,G__4694));
})())){
return (new zeitplan.use_cases.AppliedTimeEntry(G__4683,self__.end_time,self__.task,self__.category,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4695 = cljs.core.cst$kw$end_DASH_time;
var G__4696 = expr__4691;
return (pred__4690.cljs$core$IFn$_invoke$arity$2 ? pred__4690.cljs$core$IFn$_invoke$arity$2(G__4695,G__4696) : pred__4690.call(null,G__4695,G__4696));
})())){
return (new zeitplan.use_cases.AppliedTimeEntry(self__.start_time,G__4683,self__.task,self__.category,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4697 = cljs.core.cst$kw$task;
var G__4698 = expr__4691;
return (pred__4690.cljs$core$IFn$_invoke$arity$2 ? pred__4690.cljs$core$IFn$_invoke$arity$2(G__4697,G__4698) : pred__4690.call(null,G__4697,G__4698));
})())){
return (new zeitplan.use_cases.AppliedTimeEntry(self__.start_time,self__.end_time,G__4683,self__.category,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4699 = cljs.core.cst$kw$category;
var G__4700 = expr__4691;
return (pred__4690.cljs$core$IFn$_invoke$arity$2 ? pred__4690.cljs$core$IFn$_invoke$arity$2(G__4699,G__4700) : pred__4690.call(null,G__4699,G__4700));
})())){
return (new zeitplan.use_cases.AppliedTimeEntry(self__.start_time,self__.end_time,self__.task,G__4683,self__.__meta,self__.__extmap,null));
} else {
return (new zeitplan.use_cases.AppliedTimeEntry(self__.start_time,self__.end_time,self__.task,self__.category,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__4683),null));
}
}
}
}
});

zeitplan.use_cases.AppliedTimeEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_time,self__.start_time,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_time,self__.end_time,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$task,self__.task,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$category,self__.category,null))], null),self__.__extmap));
});

zeitplan.use_cases.AppliedTimeEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__4683){
var self__ = this;
var this__4202__auto____$1 = this;
return (new zeitplan.use_cases.AppliedTimeEntry(self__.start_time,self__.end_time,self__.task,self__.category,G__4683,self__.__extmap,self__.__hash));
});

zeitplan.use_cases.AppliedTimeEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

zeitplan.use_cases.AppliedTimeEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start_DASH_time,cljs.core.cst$sym$end_DASH_time,cljs.core.cst$sym$task,cljs.core.cst$sym$category], null);
});

zeitplan.use_cases.AppliedTimeEntry.cljs$lang$type = true;

zeitplan.use_cases.AppliedTimeEntry.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"zeitplan.use-cases/AppliedTimeEntry",null,(1),null));
});

zeitplan.use_cases.AppliedTimeEntry.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"zeitplan.use-cases/AppliedTimeEntry");
});

/**
 * Positional factory function for zeitplan.use-cases/AppliedTimeEntry.
 */
zeitplan.use_cases.__GT_AppliedTimeEntry = (function zeitplan$use_cases$__GT_AppliedTimeEntry(start_time,end_time,task,category){
return (new zeitplan.use_cases.AppliedTimeEntry(start_time,end_time,task,category,null,null,null));
});

/**
 * Factory function for zeitplan.use-cases/AppliedTimeEntry, taking a map of keywords to field values.
 */
zeitplan.use_cases.map__GT_AppliedTimeEntry = (function zeitplan$use_cases$map__GT_AppliedTimeEntry(G__4687){
var extmap__4236__auto__ = (function (){var G__4701 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__4687,cljs.core.cst$kw$start_DASH_time,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end_DASH_time,cljs.core.cst$kw$task,cljs.core.cst$kw$category], 0));
if(cljs.core.record_QMARK_(G__4687)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__4701);
} else {
return G__4701;
}
})();
return (new zeitplan.use_cases.AppliedTimeEntry(cljs.core.cst$kw$start_DASH_time.cljs$core$IFn$_invoke$arity$1(G__4687),cljs.core.cst$kw$end_DASH_time.cljs$core$IFn$_invoke$arity$1(G__4687),cljs.core.cst$kw$task.cljs$core$IFn$_invoke$arity$1(G__4687),cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(G__4687),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

zeitplan.use_cases.apply_start_time = (function zeitplan$use_cases$apply_start_time(entries,start_time){
if(cljs.core.empty_QMARK_(entries)){
return cljs.core.List.EMPTY;
} else {
var entry = cljs.core.first(entries);
var end_time = (start_time + cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(entry));
var applied_entry = (new zeitplan.use_cases.AppliedTimeEntry(start_time,end_time,cljs.core.cst$kw$task.cljs$core$IFn$_invoke$arity$1(entry),cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(entry),null,null,null));
return cljs.core.cons(applied_entry,(function (){var G__4703 = cljs.core.rest(entries);
var G__4704 = end_time;
return (zeitplan.use_cases.apply_start_time.cljs$core$IFn$_invoke$arity$2 ? zeitplan.use_cases.apply_start_time.cljs$core$IFn$_invoke$arity$2(G__4703,G__4704) : zeitplan.use_cases.apply_start_time.call(null,G__4703,G__4704));
})());
}
});
/**
 * Take a Zeitplan and make calls to renderer to display it.
 * renderer accepts [start-time end-time time-entry]
 */
zeitplan.use_cases.see_zeitplan = (function zeitplan$use_cases$see_zeitplan(renderer){
var seq__4705 = cljs.core.seq(zeitplan.use_cases.apply_start_time(cljs.core.cst$kw$entries.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zeitplan.use_cases.current_zeitplan)),cljs.core.cst$kw$start_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zeitplan.use_cases.current_zeitplan))));
var chunk__4706 = null;
var count__4707 = (0);
var i__4708 = (0);
while(true){
if((i__4708 < count__4707)){
var applied_entry = chunk__4706.cljs$core$IIndexed$_nth$arity$2(null,i__4708);
(renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(applied_entry) : renderer.call(null,applied_entry));


var G__4709 = seq__4705;
var G__4710 = chunk__4706;
var G__4711 = count__4707;
var G__4712 = (i__4708 + (1));
seq__4705 = G__4709;
chunk__4706 = G__4710;
count__4707 = G__4711;
i__4708 = G__4712;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4705);
if(temp__5457__auto__){
var seq__4705__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4705__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__4705__$1);
var G__4713 = cljs.core.chunk_rest(seq__4705__$1);
var G__4714 = c__4351__auto__;
var G__4715 = cljs.core.count(c__4351__auto__);
var G__4716 = (0);
seq__4705 = G__4713;
chunk__4706 = G__4714;
count__4707 = G__4715;
i__4708 = G__4716;
continue;
} else {
var applied_entry = cljs.core.first(seq__4705__$1);
(renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(applied_entry) : renderer.call(null,applied_entry));


var G__4717 = cljs.core.next(seq__4705__$1);
var G__4718 = null;
var G__4719 = (0);
var G__4720 = (0);
seq__4705 = G__4717;
chunk__4706 = G__4718;
count__4707 = G__4719;
i__4708 = G__4720;
continue;
}
} else {
return null;
}
}
break;
}
});
zeitplan.use_cases.time_now = (function zeitplan$use_cases$time_now(){
var date = (new Date());
var hours = date.getHours();
var minutes = date.getMinutes();
return ((hours * (60)) + minutes);
});
zeitplan.use_cases.update_minute = (function zeitplan$use_cases$update_minute(highlight,notify){

var now = zeitplan.use_cases.time_now();
var aentries = zeitplan.use_cases.apply_start_time(cljs.core.cst$kw$entries.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zeitplan.use_cases.current_zeitplan)),cljs.core.cst$kw$start_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zeitplan.use_cases.current_zeitplan)));
var entry_is_now = ((function (now,aentries){
return (function (entry){
return (((now >= cljs.core.cst$kw$start_DASH_time.cljs$core$IFn$_invoke$arity$1(entry))) && ((now <= cljs.core.cst$kw$end_DASH_time.cljs$core$IFn$_invoke$arity$1(entry))));
});})(now,aentries))
;
var just_entered = ((function (now,aentries,entry_is_now){
return (function (entry){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(now,cljs.core.cst$kw$start_DASH_time.cljs$core$IFn$_invoke$arity$1(entry));
});})(now,aentries,entry_is_now))
;
var seq__4721 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(aentries)));
var chunk__4722 = null;
var count__4723 = (0);
var i__4724 = (0);
while(true){
if((i__4724 < count__4723)){
var index = chunk__4722.cljs$core$IIndexed$_nth$arity$2(null,i__4724);
if(cljs.core.truth_(entry_is_now(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aentries,index)))){
(highlight.cljs$core$IFn$_invoke$arity$1 ? highlight.cljs$core$IFn$_invoke$arity$1(index) : highlight.call(null,index));
} else {
}

if(cljs.core.truth_(just_entered(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aentries,index)))){
(notify.cljs$core$IFn$_invoke$arity$1 ? notify.cljs$core$IFn$_invoke$arity$1(index) : notify.call(null,index));
} else {
}


var G__4725 = seq__4721;
var G__4726 = chunk__4722;
var G__4727 = count__4723;
var G__4728 = (i__4724 + (1));
seq__4721 = G__4725;
chunk__4722 = G__4726;
count__4723 = G__4727;
i__4724 = G__4728;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4721);
if(temp__5457__auto__){
var seq__4721__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4721__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__4721__$1);
var G__4729 = cljs.core.chunk_rest(seq__4721__$1);
var G__4730 = c__4351__auto__;
var G__4731 = cljs.core.count(c__4351__auto__);
var G__4732 = (0);
seq__4721 = G__4729;
chunk__4722 = G__4730;
count__4723 = G__4731;
i__4724 = G__4732;
continue;
} else {
var index = cljs.core.first(seq__4721__$1);
if(cljs.core.truth_(entry_is_now(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aentries,index)))){
(highlight.cljs$core$IFn$_invoke$arity$1 ? highlight.cljs$core$IFn$_invoke$arity$1(index) : highlight.call(null,index));
} else {
}

if(cljs.core.truth_(just_entered(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aentries,index)))){
(notify.cljs$core$IFn$_invoke$arity$1 ? notify.cljs$core$IFn$_invoke$arity$1(index) : notify.call(null,index));
} else {
}


var G__4733 = cljs.core.next(seq__4721__$1);
var G__4734 = null;
var G__4735 = (0);
var G__4736 = (0);
seq__4721 = G__4733;
chunk__4722 = G__4734;
count__4723 = G__4735;
i__4724 = G__4736;
continue;
}
} else {
return null;
}
}
break;
}
});
