module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},,function(t,e,n){"use strict";n.r(e);var o=n(2),r=n.n(o),s=n(0),i=(n(6),n(1)),a=n.n(i),u=n(4),c=n.n(u),l=n(7),p=n.n(l),f=n(8),d=n.n(f);function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return b(v(e=t.call.apply(t,[this].concat(o))||this),"visitedAt",a.a.attribute("visited_at",a.a.transformDate)),b(v(e),"user",a.a.hasOne("user")),b(v(e),"discussion",a.a.hasOne("discussion")),e}return h(e,t),e}(a.a),w=n(3),_=n.n(w),x=n(5),g=n.n(x),O=n(9),j=function(t){function e(){return t.apply(this,arguments)||this}h(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.discussion=this.props.discussion,this.currentViewsCount=this.discussion.views().length},n.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",null,app.translator.trans("flarum_discussion_views.forum.modal_resetviews.label",{count:this.currentViewsCount})),m("div",{className:"Form-group"},_.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,children:app.translator.trans("flarum_discussion_views.forum.modal_resetviews.submit")}))))},n.title=function(){return app.translator.trans("flarum_discussion_views.forum.modal_resetviews.title")},n.className=function(){return"Modal--small"},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.props.discussion.save({resetViews:!0}).then((function(){m.redraw()})).catch((function(t){e.loading=!1,console.log(t)})),this.hide()},e}(n.n(O).a);r.a.initializers.add("michaelbelgium-discussion-views",(function(){app.store.models.discussionviews=y,c.a.prototype.views=a.a.hasMany("views"),c.a.prototype.canReset=a.a.attribute("canReset"),Object(s.extend)(p.a.prototype,"infoItems",(function(t){var e=this.props.discussion;t.add("discussion-views",d()(e.views().length))})),Object(s.extend)(g.a,"moderationControls",(function(t,e){e.canReset()&&t.add("reset",_.a.component({children:app.translator.trans("flarum_discussion_views.forum.discussion_controls.resetviews_button"),icon:"far fa-eye-slash",onclick:this.resetViewsAction.bind(e)}))})),g.a.resetViewsAction=function(){return app.modal.show(new j({discussion:this}))}}))}]);
//# sourceMappingURL=forum.js.map