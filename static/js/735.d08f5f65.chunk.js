"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[735],{722:function(e,n,r){r.d(n,{HI:function(){return l},Hg:function(){return c},on:function(){return u},tx:function(){return v},zv:function(){return h}});var t=r(861),a=r(757),s=r.n(a),i=r(340).Z.create({baseURL:"https://api.themoviedb.org/3/",method:"POST",params:{language:"en-US"},headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTRlMGMyYmJkNTJjZDAzMzkyNWExYjgxODM5ZTRlNyIsInN1YiI6IjY1NWQxMmJiNTM4NjZlMDBjNWI1Njk5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WyF-b_8sGIA9cdHsnOrzXb55sa3ksoGYwveJJ6XSFvU")}});function c(){return o.apply(this,arguments)}function o(){return(o=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("trending/movie/day");case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("search/movie",{params:{query:n}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n,"/credits"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n,"/reviews"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},735:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var t,a,s,i=r(861),c=r(439),o=r(757),u=r.n(o),p=r(791),l=r(689),d=r(722),h=r(168),f=r(867),v=f.ZP.div(t||(t=(0,h.Z)(["\ndisplay: flex;\ngap: 20px;\n  }\n"]))),x=r(184),m=function(e){var n=e.data,r=n.img,t=n.title,a=n.year,s=n.score,i=n.overview,c=n.genres;return(0,x.jsx)("div",{children:(0,x.jsxs)(v,{children:[(0,x.jsx)("img",{src:r,alt:t,height:"500"}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h2",{children:[t,(0,x.jsxs)("span",{children:[" (",a,")"]})]}),(0,x.jsxs)("div",{children:["User score: ",s]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("span",{children:i}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("span",{children:c})]})]})})},g=r(87),j=f.ZP.div(a||(a=(0,h.Z)(["\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-weight: 500;\n  font-size: 15px;\n  padding: 4px;\n  color: black;\n\n  &:hover,\n  &:focus {\n    color: #404bbf;\n  }\n"]))),w=(0,f.ZP)(g.OL)(s||(s=(0,h.Z)(["\n  text-decoration: none;\n  display: block;\n  font-weight: 500;\n  font-size: 25px;\n  padding: 4px;\n  color: black;\n\n  &:hover,\n  &:focus {\n    color: #404bbf;\n  }\n"]))),y=function(){var e,n,r=(0,l.UO)().movieId,t=(0,p.useState)(null),a=(0,c.Z)(t,2),s=a[0],o=a[1],h=null!==(e=null===(n=(0,l.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,p.useEffect)((function(){function e(){return(e=(0,i.Z)(u().mark((function e(){var n,t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.HI)(r);case 3:return t=e.sent,a={img:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"No poster",title:t.title,year:t.release_date.slice(0,4),overview:""!==t.overview?t.overview:"There is no overview",genres:t.genres.length>0?null===(n=t.genres)||void 0===n?void 0:n.map((function(e){return e.name})).join(", "):"No genres",score:t.vote_average},o(a),e.abrupt("return",t);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(r)}),[r]),(0,x.jsxs)("div",{children:[s&&(0,x.jsx)(m,{data:s}),(0,x.jsx)("hr",{}),(0,x.jsxs)(j,{children:[(0,x.jsx)(w,{to:h,children:"Back to all films"}),(0,x.jsx)(w,{to:"cast",children:"Cast"}),(0,x.jsx)(w,{to:"reviews",children:"Reviews"})]}),(0,x.jsx)(l.j3,{})]})}}}]);
//# sourceMappingURL=735.d08f5f65.chunk.js.map