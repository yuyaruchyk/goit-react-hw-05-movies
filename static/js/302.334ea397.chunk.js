"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[302],{722:function(n,t,e){e.d(t,{HI:function(){return f},Hg:function(){return c},on:function(){return s},tx:function(){return x},zv:function(){return l}});var r=e(861),i=e(757),o=e.n(i),a=e(340).Z.create({baseURL:"https://api.themoviedb.org/3/",method:"POST",params:{language:"en-US"},headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTRlMGMyYmJkNTJjZDAzMzkyNWExYjgxODM5ZTRlNyIsInN1YiI6IjY1NWQxMmJiNTM4NjZlMDBjNWI1Njk5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WyF-b_8sGIA9cdHsnOrzXb55sa3ksoGYwveJJ6XSFvU")}});function c(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("search/movie",{params:{query:t}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},156:function(n,t,e){e.d(t,{F:function(){return c}});var r,i=e(168),o=e(867),a=e(87),c=(0,o.ZP)(a.OL)(r||(r=(0,i.Z)(["\n  text-decoration: none;\n  display: block;\n  font-weight: 500;\n  font-size: 15px;\n  padding: 4px;\n  color: black;\n\n  &:hover,\n  &:focus {\n    color: #404bbf;\n  }\n"])))},302:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r,i,o,a,c=e(861),u=e(439),s=e(757),p=e.n(s),f=e(791),d=e(135),l=e(168),h=e(867),x=h.ZP.header(r||(r=(0,l.Z)(["\n  top: 0;\n  left: 0;\n  margin-bottom: 20px;\n\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),m=h.ZP.form(i||(i=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),b=h.ZP.button(o||(o=(0,l.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),v=h.ZP.input(a||(a=(0,l.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),g=e(184),y=function(n){var t=n.onSubmit;return(0,g.jsx)(x,{children:(0,g.jsxs)(m,{onSubmit:function(n){n.preventDefault(),t(n.target[1].value),n.target[1].value=""},children:[(0,g.jsx)(b,{type:"submit",children:(0,g.jsx)(d.U41,{style:{height:24,width:24}})}),(0,g.jsx)(v,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},k=e(722),w=e(87),Z=e(689),j=e(156),J=function(n){var t=n.movies,e=(0,Z.TH)();return(0,g.jsx)("ul",{children:t.map((function(n){return(0,g.jsx)("li",{children:(0,g.jsx)(j.F,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})},z=function(){var n,t=(0,w.lr)(),e=(0,u.Z)(t,2),r=e[0],i=e[1],o=null!==(n=r.get("query"))&&void 0!==n?n:"",a=(0,f.useState)([]),s=(0,u.Z)(a,2),d=s[0],l=s[1];(0,f.useEffect)((function(){function n(){return(n=(0,c.Z)(p().mark((function n(){var t,e,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=o.split("/").pop(),n.next=4,(0,k.on)(t);case 4:e=n.sent,r=e.results,l(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error("Error fetching searched movies:",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}""!==o&&function(){n.apply(this,arguments)}()}),[o]);return(0,g.jsxs)("div",{children:[(0,g.jsx)(y,{onSubmit:function(n){i({query:n})}}),(0,g.jsx)(J,{movies:d})]})}}}]);
//# sourceMappingURL=302.334ea397.chunk.js.map