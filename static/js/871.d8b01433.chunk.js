"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871],{871:function(n,t,r){r.r(t);var e=r(861),c=r(885),u=r(687),a=r.n(u),o=r(689),s=r(791),i=r(653),f=r(184);t.default=function(){var n=(0,o.UO)().movieId,t=(0,s.useState)([]),r=(0,c.Z)(t,2),u=r[0],p=r[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,e.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Cm)(n);case 2:r=t.sent,p(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,f.jsx)("ul",{children:u.length>0?u.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author: ",r]}),(0,f.jsx)("p",{children:e})]},t)})):"nothing"})}},653:function(n,t,r){r.d(t,{Cm:function(){return h},TW:function(){return p},dB:function(){return s},hG:function(){return i},oi:function(){return f}});var e=r(861),c=r(687),u=r.n(c),a="https://api.themoviedb.org/3/",o="bd976601ef505d915c39fc1c350b9425",s=function(){var n=(0,e.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"?api_key=").concat(o));case 2:return r=n.sent,n.next=5,r.json();case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return r=n.sent,n.next=5,r.json();case 5:return e=n.sent,n.abrupt("return",e.results);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,n.next=5,r.json();case 5:return e=n.sent,n.abrupt("return",e.cast);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return r=n.sent,n.next=5,r.json();case 5:return e=n.sent,n.abrupt("return",e.results);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},861:function(n,t,r){function e(n,t,r,e,c,u,a){try{var o=n[u](a),s=o.value}catch(i){return void r(i)}o.done?t(s):Promise.resolve(s).then(e,c)}function c(n){return function(){var t=this,r=arguments;return new Promise((function(c,u){var a=n.apply(t,r);function o(n){e(a,c,u,o,s,"next",n)}function s(n){e(a,c,u,o,s,"throw",n)}o(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=871.d8b01433.chunk.js.map