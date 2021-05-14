module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["components/FieldSet"]},function(t,e){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e){t.exports=flarum.core.compat["utils/humanTime"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e,n){"use strict";n.r(e);var o=n(2),s=n.n(o),r=n(1),i=n(5),a=n.n(i),u=n(0),c=n.n(u),l=n(3),p=n.n(l),f=n(6),d=n.n(f),b=n(7),v=n.n(b),h=n(8),w=n.n(h),y=n(9),x=n.n(y),g=n(10),_=n.n(g);function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var D=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return N(O(e=t.call.apply(t,[this].concat(o))||this),"visitedAt",c.a.attribute("visited_at",c.a.transformDate)),N(O(e),"user",c.a.hasOne("user")),N(O(e),"discussion",c.a.hasOne("discussion")),e}return j(e,t),e}(c.a),M=n(11),V=n.n(M),C=n(12),P=n.n(C),S=n(13),L=n.n(S),A=n(4),F=n.n(A),B=n(14),I=n.n(B),R=n(15),U=function(t){function e(){return t.apply(this,arguments)||this}j(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.discussion=this.attrs.discussion,this.currentViewsCount=this.discussion.viewCount()},n.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",null,app.translator.trans("michaelbelgium-discussion-views.forum.modal_resetviews.label",{count:this.currentViewsCount})),m("div",{className:"Form-group"},F.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("michaelbelgium-discussion-views.forum.modal_resetviews.submit_button")))))},n.title=function(){return app.translator.trans("michaelbelgium-discussion-views.forum.modal_resetviews.title")},n.className=function(){return"Modal--small"},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.attrs.discussion.save({resetViews:!0}).catch((function(){e.loaded()})),this.hide()},e}(n.n(R).a);s.a.initializers.add("michaelbelgium-discussion-views",(function(){Object(r.extend)(a.a.prototype,"sortMap",(function(t){1==app.forum.attribute("toggleFilter")&&(t.popular="-view_count",t.unpopular="view_count")})),app.store.models.discussionviews=D,p.a.prototype.views=c.a.hasMany("latestViews"),p.a.prototype.canReset=c.a.attribute("canReset"),p.a.prototype.canViewNumber=c.a.attribute("canViewNumber"),p.a.prototype.viewCount=c.a.attribute("viewCount"),Object(r.extend)(d.a.prototype,"infoItems",(function(t){if(this.attrs.discussion.canViewNumber()){var e=this.attrs.discussion.viewCount(),n=1==app.forum.attribute("abbrNumber")?_()(e):e;t.add("discussion-views",m("span",null,n))}})),Object(r.extend)(v.a.prototype,"requestParams",(function(t){t.include.push("latestViews")})),Object(r.extend)(w.a.prototype,"sidebarItems",(function(t){if(0!=app.forum.attribute("showViewList")){var e=this.discussion.views(),n=new P.a;$.each(e,(function(t,e){var o=!1===e.user()?"Guest":e.user().username(),s=m("div",{className:"item-lastUser-content"},V()(e.user()),m("div",null,o,m("span",{className:"lastUser-visited",title:e.visitedAt().toLocaleString()},L()(e.visitedAt()))));!1!==e.user()&&(s=m("a",{href:app.route.user(e.user())},s)),n.add("lastUser-"+t,s)})),t.add("lastDiscussionViewers",m(x.a,{className:"LastDiscussionUsers",label:app.translator.trans("michaelbelgium-discussion-views.forum.viewlist.title")},n.toArray()))}})),Object(r.extend)(I.a,"moderationControls",(function(t,e){e.canReset()&&e.viewCount()>0&&t.add("reset",m(F.a,{icon:"far fa-eye-slash",onclick:function(){return app.modal.show(U,{discussion:e})}},app.translator.trans("michaelbelgium-discussion-views.forum.discussion_controls.resetviews_button")))}))}))}]);
//# sourceMappingURL=forum.js.map