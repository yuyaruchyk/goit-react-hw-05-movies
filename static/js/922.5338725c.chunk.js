"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[922],{722:function(e,n,r){r.d(n,{HI:function(){return l},Hg:function(){return c},on:function(){return u},tx:function(){return v},zv:function(){return d}});var t=r(861),s=r(757),a=r.n(s),i=r(340).Z.create({baseURL:"https://api.themoviedb.org/3/",method:"POST",params:{language:"en-US"},headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTRlMGMyYmJkNTJjZDAzMzkyNWExYjgxODM5ZTRlNyIsInN1YiI6IjY1NWQxMmJiNTM4NjZlMDBjNWI1Njk5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WyF-b_8sGIA9cdHsnOrzXb55sa3ksoGYwveJJ6XSFvU")}});function c(){return o.apply(this,arguments)}function o(){return(o=(0,t.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("trending/movie/day");case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("search/movie",{params:{query:n}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n,"/credits"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n,"/reviews"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},922:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var t,s,a=r(861),i=r(439),c=r(757),o=r.n(c),u=r(791),p=r(689),l=r(722),h=r(184),d=function(e){var n=e.data,r=n.img,t=n.title,s=n.year,a=n.score,i=n.overview,c=n.genres;return(0,h.jsx)("div",{children:(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:r,alt:t,height:"500"}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:[t,(0,h.jsxs)("span",{children:[" (",s,")"]})]}),(0,h.jsxs)("div",{children:["User score: ",a]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("span",{children:i}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("span",{children:c})]})]})})},f=r(168),v=r(867),x=r(87),m=v.ZP.div(t||(t=(0,f.Z)(["\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-weight: 500;\n  font-size: 15px;\n  padding: 4px;\n  color: black;\n\n  &:hover,\n  &:focus {\n    color: #404bbf;\n  }\n"]))),g=(0,v.ZP)(x.OL)(s||(s=(0,f.Z)(["\n  text-decoration: none;\n  display: block;\n  font-weight: 500;\n  font-size: 25px;\n  padding: 4px;\n  color: black;\n\n  &:hover,\n  &:focus {\n    color: #404bbf;\n  }\n"]))),j=function(){var e,n,r=(0,p.UO)().movieId,t=(0,u.useState)(null),s=(0,i.Z)(t,2),c=s[0],f=s[1],v=null!==(e=null===(n=(0,p.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,u.useEffect)((function(){function e(){return(e=(0,a.Z)(o().mark((function e(){var n,t,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.HI)(r);case 3:return t=e.sent,s={img:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"No poster",title:t.title,year:t.release_date.slice(0,4),overview:""!==t.overview?t.overview:"There is no overview",genres:t.genres.length>0?null===(n=t.genres)||void 0===n?void 0:n.map((function(e){return e.name})).join(", "):"No genres",score:t.vote_average},f(s),e.abrupt("return",t);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(r)}),[r]),(0,h.jsxs)("div",{children:[c&&(0,h.jsx)(d,{data:c}),(0,h.jsx)("hr",{}),(0,h.jsxs)(m,{children:[(0,h.jsx)(g,{to:v,children:"Back to all films"}),(0,h.jsx)(g,{to:"cast",children:"Cast"}),(0,h.jsx)(g,{to:"reviews",children:"Reviews"})]}),(0,h.jsx)(p.j3,{})]})}}}]);
//# sourceMappingURL=922.5338725c.chunk.js.map