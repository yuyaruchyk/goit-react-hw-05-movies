"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{722:function(n,t,e){e.d(t,{HI:function(){return f},Hg:function(){return o},on:function(){return s},tx:function(){return v},zv:function(){return l}});var r=e(861),a=e(757),c=e.n(a),u=e(340).Z.create({baseURL:"https://api.themoviedb.org/3/",method:"POST",params:{language:"en-US"},headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTRlMGMyYmJkNTJjZDAzMzkyNWExYjgxODM5ZTRlNyIsInN1YiI6IjY1NWQxMmJiNTM4NjZlMDBjNWI1Njk5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WyF-b_8sGIA9cdHsnOrzXb55sa3ksoGYwveJJ6XSFvU")}});function o(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("search/movie",{params:{query:t}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},156:function(n,t,e){e.d(t,{F:function(){return o}});var r,a=e(168),c=e(867),u=e(87),o=(0,c.ZP)(u.OL)(r||(r=(0,a.Z)(["\n  text-decoration: none;\n  display: block;\n  font-weight: 500;\n  font-size: 15px;\n  padding: 4px;\n  color: black;\n\n  &:hover,\n  &:focus {\n    color: #404bbf;\n  }\n"])))},544:function(n,t,e){e.r(t);var r=e(861),a=e(439),c=e(757),u=e.n(c),o=e(791),i=e(722),s=e(689),p=e(156),f=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],h=(0,s.TH)();return(0,o.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Hg)();case 3:t=n.sent,c(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,f.jsx)("ul",{children:e.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsx)(p.F,{to:"/movies/".concat(n.id),state:{from:h},children:n.title})},n.id)}))})}}}]);
//# sourceMappingURL=544.363c1db0.chunk.js.map