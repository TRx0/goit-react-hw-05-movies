"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[151],{151:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,c,a,i,s,o,u,p,l=t(861),d=t(885),f=t(687),x=t.n(f),h=t(791),v=t(689),m=t(653),j=t(134),g=t(168),b=t(934),k=t(731),w=b.Z.div(r||(r=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  padding-right: 15px;\n  padding-left: 15px;\n"]))),Z=(0,b.Z)(k.OL)(c||(c=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  background-color: transparent;\n  border-color: tan;\n  border-radius: 5px;\n  cursor: pointer;\n  padding: 3px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n"]))),y=(0,b.Z)(k.OL)(a||(a=(0,g.Z)(["\n  display: flex;\n  margin-bottom: 15px;\n"]))),_=b.Z.ul(i||(i=(0,g.Z)(["\n  padding: 15px;\n  list-style: none;\n  margin: 0;\n"]))),C=b.Z.ul(s||(s=(0,g.Z)(["\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n"]))),G=b.Z.img(o||(o=(0,g.Z)(["\n  width: 300px;\n"]))),O=b.Z.ul(u||(u=(0,g.Z)(["\n  padding-left: 0;\n  margin-left: 60px;\n  list-style: none;\n"]))),B=b.Z.li(p||(p=(0,g.Z)(["\n  margin-bottom: 30px;\n"]))),L=t(184),S=function(){var n=(0,h.useState)([]),e=(0,d.Z)(n,2),t=e[0],r=e[1],c=(0,v.UO)().movieId,a=(0,v.TH)();(0,h.useEffect)((function(){var n=function(){var n=(0,l.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,m.hG)(c);case 3:e=n.sent,r([e]),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[c]);return(0,L.jsxs)("main",{children:[t&&t.map((function(n){var e,t,r=n.id,c=n.original_title,i=n.vote_average,s=n.overview,o=n.genres,u=n.poster_path;return(0,L.jsxs)(w,{children:[(0,L.jsxs)("div",{children:[(0,L.jsxs)(Z,{type:"button",to:null!==(e=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies",children:[(0,L.jsx)(j.kyg,{}),"Go Back"]}),(0,L.jsx)(G,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(u),alt:""})]}),(0,L.jsx)("div",{children:(0,L.jsxs)(O,{children:[(0,L.jsx)(B,{children:(0,L.jsx)("h2",{children:c})}),(0,L.jsxs)(B,{children:["User Score: ",Math.ceil(100*i/10),"%"]}),(0,L.jsx)(B,{children:(0,L.jsx)("h3",{children:"Overview"})}),(0,L.jsx)(B,{children:s}),(0,L.jsx)(B,{children:(0,L.jsx)("h4",{children:"Genres"})}),(0,L.jsx)(B,{children:o.map((function(n){return n.name})).join(", ")})]})})]},r)})),t&&(0,L.jsx)(_,{children:(0,L.jsxs)("li",{children:[(0,L.jsxs)(C,{children:[(0,L.jsx)("li",{children:"Additional information"}),(0,L.jsx)("li",{children:(0,L.jsx)(y,{to:"cast",children:"Cast"})}),(0,L.jsx)("li",{children:(0,L.jsx)(y,{to:"reviews",children:"Reviews"})})]}),(0,L.jsx)(v.j3,{})]})})]})}},653:function(n,e,t){t.d(e,{Cm:function(){return d},TW:function(){return l},dB:function(){return o},hG:function(){return u},oi:function(){return p}});var r=t(861),c=t(687),a=t.n(c),i="https://api.themoviedb.org/3/",s="bd976601ef505d915c39fc1c350b9425",o=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"trending/movie/day?api_key=").concat(s));case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"search/movie?api_key=").concat(s,"&query=").concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r.cast);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=151.56e42193.chunk.js.map