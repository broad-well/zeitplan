// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('zeitplan.types');
goog.require('cljs.core');
goog.require('cljs.core.constants');

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
zeitplan.types.TimeEntry = (function (duration,task,category,__meta,__extmap,__hash){
this.duration = duration;
this.task = task;
this.category = category;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
zeitplan.types.TimeEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

zeitplan.types.TimeEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k4627,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__4631 = k4627;
var G__4631__$1 = (((G__4631 instanceof cljs.core.Keyword))?G__4631.fqn:null);
switch (G__4631__$1) {
case "duration":
return self__.duration;

break;
case "task":
return self__.task;

break;
case "category":
return self__.category;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k4627,else__4206__auto__);

}
});

zeitplan.types.TimeEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#zeitplan.types.TimeEntry{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$duration,self__.duration],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$task,self__.task],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$category,self__.category],null))], null),self__.__extmap));
});

zeitplan.types.TimeEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__4626){
var self__ = this;
var G__4626__$1 = this;
return (new cljs.core.RecordIter((0),G__4626__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$duration,cljs.core.cst$kw$task,cljs.core.cst$kw$category], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

zeitplan.types.TimeEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

zeitplan.types.TimeEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new zeitplan.types.TimeEntry(self__.duration,self__.task,self__.category,self__.__meta,self__.__extmap,self__.__hash));
});

zeitplan.types.TimeEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

zeitplan.types.TimeEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__4632 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-996045325 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__4632(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

zeitplan.types.TimeEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this4628,other4629){
var self__ = this;
var this4628__$1 = this;
return ((!((other4629 == null))) && ((this4628__$1.constructor === other4629.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4628__$1.duration,other4629.duration)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4628__$1.task,other4629.task)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4628__$1.category,other4629.category)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4628__$1.__extmap,other4629.__extmap)));
});

zeitplan.types.TimeEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$category,null,cljs.core.cst$kw$task,null,cljs.core.cst$kw$duration,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new zeitplan.types.TimeEntry(self__.duration,self__.task,self__.category,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

zeitplan.types.TimeEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__4626){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__4633 = cljs.core.keyword_identical_QMARK_;
var expr__4634 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__4636 = cljs.core.cst$kw$duration;
var G__4637 = expr__4634;
return (pred__4633.cljs$core$IFn$_invoke$arity$2 ? pred__4633.cljs$core$IFn$_invoke$arity$2(G__4636,G__4637) : pred__4633.call(null,G__4636,G__4637));
})())){
return (new zeitplan.types.TimeEntry(G__4626,self__.task,self__.category,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4638 = cljs.core.cst$kw$task;
var G__4639 = expr__4634;
return (pred__4633.cljs$core$IFn$_invoke$arity$2 ? pred__4633.cljs$core$IFn$_invoke$arity$2(G__4638,G__4639) : pred__4633.call(null,G__4638,G__4639));
})())){
return (new zeitplan.types.TimeEntry(self__.duration,G__4626,self__.category,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4640 = cljs.core.cst$kw$category;
var G__4641 = expr__4634;
return (pred__4633.cljs$core$IFn$_invoke$arity$2 ? pred__4633.cljs$core$IFn$_invoke$arity$2(G__4640,G__4641) : pred__4633.call(null,G__4640,G__4641));
})())){
return (new zeitplan.types.TimeEntry(self__.duration,self__.task,G__4626,self__.__meta,self__.__extmap,null));
} else {
return (new zeitplan.types.TimeEntry(self__.duration,self__.task,self__.category,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__4626),null));
}
}
}
});

zeitplan.types.TimeEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$duration,self__.duration,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$task,self__.task,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$category,self__.category,null))], null),self__.__extmap));
});

zeitplan.types.TimeEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__4626){
var self__ = this;
var this__4202__auto____$1 = this;
return (new zeitplan.types.TimeEntry(self__.duration,self__.task,self__.category,G__4626,self__.__extmap,self__.__hash));
});

zeitplan.types.TimeEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

zeitplan.types.TimeEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$duration,cljs.core.cst$sym$task,cljs.core.cst$sym$category], null);
});

zeitplan.types.TimeEntry.cljs$lang$type = true;

zeitplan.types.TimeEntry.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"zeitplan.types/TimeEntry",null,(1),null));
});

zeitplan.types.TimeEntry.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"zeitplan.types/TimeEntry");
});

/**
 * Positional factory function for zeitplan.types/TimeEntry.
 */
zeitplan.types.__GT_TimeEntry = (function zeitplan$types$__GT_TimeEntry(duration,task,category){
return (new zeitplan.types.TimeEntry(duration,task,category,null,null,null));
});

/**
 * Factory function for zeitplan.types/TimeEntry, taking a map of keywords to field values.
 */
zeitplan.types.map__GT_TimeEntry = (function zeitplan$types$map__GT_TimeEntry(G__4630){
var extmap__4236__auto__ = (function (){var G__4642 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__4630,cljs.core.cst$kw$duration,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$task,cljs.core.cst$kw$category], 0));
if(cljs.core.record_QMARK_(G__4630)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__4642);
} else {
return G__4642;
}
})();
return (new zeitplan.types.TimeEntry(cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(G__4630),cljs.core.cst$kw$task.cljs$core$IFn$_invoke$arity$1(G__4630),cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(G__4630),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
zeitplan.types.Category = (function (name,description,uuid,__meta,__extmap,__hash){
this.name = name;
this.description = description;
this.uuid = uuid;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
zeitplan.types.Category.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

zeitplan.types.Category.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k4645,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__4649 = k4645;
var G__4649__$1 = (((G__4649 instanceof cljs.core.Keyword))?G__4649.fqn:null);
switch (G__4649__$1) {
case "name":
return self__.name;

break;
case "description":
return self__.description;

break;
case "uuid":
return self__.uuid;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k4645,else__4206__auto__);

}
});

zeitplan.types.Category.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#zeitplan.types.Category{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$uuid,self__.uuid],null))], null),self__.__extmap));
});

zeitplan.types.Category.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__4644){
var self__ = this;
var G__4644__$1 = this;
return (new cljs.core.RecordIter((0),G__4644__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$description,cljs.core.cst$kw$uuid], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

zeitplan.types.Category.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

zeitplan.types.Category.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new zeitplan.types.Category(self__.name,self__.description,self__.uuid,self__.__meta,self__.__extmap,self__.__hash));
});

zeitplan.types.Category.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

zeitplan.types.Category.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__4650 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (408436841 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__4650(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

zeitplan.types.Category.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this4646,other4647){
var self__ = this;
var this4646__$1 = this;
return ((!((other4647 == null))) && ((this4646__$1.constructor === other4647.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4646__$1.name,other4647.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4646__$1.description,other4647.description)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4646__$1.uuid,other4647.uuid)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4646__$1.__extmap,other4647.__extmap)));
});

zeitplan.types.Category.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$uuid,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new zeitplan.types.Category(self__.name,self__.description,self__.uuid,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

zeitplan.types.Category.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__4644){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__4651 = cljs.core.keyword_identical_QMARK_;
var expr__4652 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__4654 = cljs.core.cst$kw$name;
var G__4655 = expr__4652;
return (pred__4651.cljs$core$IFn$_invoke$arity$2 ? pred__4651.cljs$core$IFn$_invoke$arity$2(G__4654,G__4655) : pred__4651.call(null,G__4654,G__4655));
})())){
return (new zeitplan.types.Category(G__4644,self__.description,self__.uuid,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4656 = cljs.core.cst$kw$description;
var G__4657 = expr__4652;
return (pred__4651.cljs$core$IFn$_invoke$arity$2 ? pred__4651.cljs$core$IFn$_invoke$arity$2(G__4656,G__4657) : pred__4651.call(null,G__4656,G__4657));
})())){
return (new zeitplan.types.Category(self__.name,G__4644,self__.uuid,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4658 = cljs.core.cst$kw$uuid;
var G__4659 = expr__4652;
return (pred__4651.cljs$core$IFn$_invoke$arity$2 ? pred__4651.cljs$core$IFn$_invoke$arity$2(G__4658,G__4659) : pred__4651.call(null,G__4658,G__4659));
})())){
return (new zeitplan.types.Category(self__.name,self__.description,G__4644,self__.__meta,self__.__extmap,null));
} else {
return (new zeitplan.types.Category(self__.name,self__.description,self__.uuid,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__4644),null));
}
}
}
});

zeitplan.types.Category.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$name,self__.name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$description,self__.description,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$uuid,self__.uuid,null))], null),self__.__extmap));
});

zeitplan.types.Category.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__4644){
var self__ = this;
var this__4202__auto____$1 = this;
return (new zeitplan.types.Category(self__.name,self__.description,self__.uuid,G__4644,self__.__extmap,self__.__hash));
});

zeitplan.types.Category.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

zeitplan.types.Category.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$description,cljs.core.cst$sym$uuid], null);
});

zeitplan.types.Category.cljs$lang$type = true;

zeitplan.types.Category.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"zeitplan.types/Category",null,(1),null));
});

zeitplan.types.Category.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"zeitplan.types/Category");
});

/**
 * Positional factory function for zeitplan.types/Category.
 */
zeitplan.types.__GT_Category = (function zeitplan$types$__GT_Category(name,description,uuid){
return (new zeitplan.types.Category(name,description,uuid,null,null,null));
});

/**
 * Factory function for zeitplan.types/Category, taking a map of keywords to field values.
 */
zeitplan.types.map__GT_Category = (function zeitplan$types$map__GT_Category(G__4648){
var extmap__4236__auto__ = (function (){var G__4660 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__4648,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$description,cljs.core.cst$kw$uuid], 0));
if(cljs.core.record_QMARK_(G__4648)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__4660);
} else {
return G__4660;
}
})();
return (new zeitplan.types.Category(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__4648),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__4648),cljs.core.cst$kw$uuid.cljs$core$IFn$_invoke$arity$1(G__4648),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
zeitplan.types.Zeitplan = (function (start_time,entries,__meta,__extmap,__hash){
this.start_time = start_time;
this.entries = entries;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
zeitplan.types.Zeitplan.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

zeitplan.types.Zeitplan.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k4663,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__4667 = k4663;
var G__4667__$1 = (((G__4667 instanceof cljs.core.Keyword))?G__4667.fqn:null);
switch (G__4667__$1) {
case "start-time":
return self__.start_time;

break;
case "entries":
return self__.entries;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k4663,else__4206__auto__);

}
});

zeitplan.types.Zeitplan.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#zeitplan.types.Zeitplan{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_time,self__.start_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$entries,self__.entries],null))], null),self__.__extmap));
});

zeitplan.types.Zeitplan.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__4662){
var self__ = this;
var G__4662__$1 = this;
return (new cljs.core.RecordIter((0),G__4662__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start_DASH_time,cljs.core.cst$kw$entries], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

zeitplan.types.Zeitplan.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

zeitplan.types.Zeitplan.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new zeitplan.types.Zeitplan(self__.start_time,self__.entries,self__.__meta,self__.__extmap,self__.__hash));
});

zeitplan.types.Zeitplan.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

zeitplan.types.Zeitplan.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__4668 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1795275612 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__4668(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

zeitplan.types.Zeitplan.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this4664,other4665){
var self__ = this;
var this4664__$1 = this;
return ((!((other4665 == null))) && ((this4664__$1.constructor === other4665.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4664__$1.start_time,other4665.start_time)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4664__$1.entries,other4665.entries)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4664__$1.__extmap,other4665.__extmap)));
});

zeitplan.types.Zeitplan.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$entries,null,cljs.core.cst$kw$start_DASH_time,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new zeitplan.types.Zeitplan(self__.start_time,self__.entries,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

zeitplan.types.Zeitplan.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__4662){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__4669 = cljs.core.keyword_identical_QMARK_;
var expr__4670 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__4672 = cljs.core.cst$kw$start_DASH_time;
var G__4673 = expr__4670;
return (pred__4669.cljs$core$IFn$_invoke$arity$2 ? pred__4669.cljs$core$IFn$_invoke$arity$2(G__4672,G__4673) : pred__4669.call(null,G__4672,G__4673));
})())){
return (new zeitplan.types.Zeitplan(G__4662,self__.entries,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4674 = cljs.core.cst$kw$entries;
var G__4675 = expr__4670;
return (pred__4669.cljs$core$IFn$_invoke$arity$2 ? pred__4669.cljs$core$IFn$_invoke$arity$2(G__4674,G__4675) : pred__4669.call(null,G__4674,G__4675));
})())){
return (new zeitplan.types.Zeitplan(self__.start_time,G__4662,self__.__meta,self__.__extmap,null));
} else {
return (new zeitplan.types.Zeitplan(self__.start_time,self__.entries,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__4662),null));
}
}
});

zeitplan.types.Zeitplan.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_time,self__.start_time,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$entries,self__.entries,null))], null),self__.__extmap));
});

zeitplan.types.Zeitplan.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__4662){
var self__ = this;
var this__4202__auto____$1 = this;
return (new zeitplan.types.Zeitplan(self__.start_time,self__.entries,G__4662,self__.__extmap,self__.__hash));
});

zeitplan.types.Zeitplan.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

zeitplan.types.Zeitplan.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start_DASH_time,cljs.core.cst$sym$entries], null);
});

zeitplan.types.Zeitplan.cljs$lang$type = true;

zeitplan.types.Zeitplan.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"zeitplan.types/Zeitplan",null,(1),null));
});

zeitplan.types.Zeitplan.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"zeitplan.types/Zeitplan");
});

/**
 * Positional factory function for zeitplan.types/Zeitplan.
 */
zeitplan.types.__GT_Zeitplan = (function zeitplan$types$__GT_Zeitplan(start_time,entries){
return (new zeitplan.types.Zeitplan(start_time,entries,null,null,null));
});

/**
 * Factory function for zeitplan.types/Zeitplan, taking a map of keywords to field values.
 */
zeitplan.types.map__GT_Zeitplan = (function zeitplan$types$map__GT_Zeitplan(G__4666){
var extmap__4236__auto__ = (function (){var G__4676 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__4666,cljs.core.cst$kw$start_DASH_time,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$entries], 0));
if(cljs.core.record_QMARK_(G__4666)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__4676);
} else {
return G__4676;
}
})();
return (new zeitplan.types.Zeitplan(cljs.core.cst$kw$start_DASH_time.cljs$core$IFn$_invoke$arity$1(G__4666),cljs.core.cst$kw$entries.cljs$core$IFn$_invoke$arity$1(G__4666),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

