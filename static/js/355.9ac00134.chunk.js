"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[355],{9913:function(n,r,t){t.d(r,{Z:function(){return x}});var e,a,c,o=t(6871),u=t(168),i=t(5751),s=t(501),d=i.ZP.li(e||(e=(0,u.Z)(["\n  border: 1px solid #ddd;\n  min-width: 700px;\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),f=(0,i.ZP)(s.rU)(a||(a=(0,u.Z)(["\n  display: block;\n  padding: 30px;\n  transition: color 0.2s linear, background-color 0.2s linear;\n  :hover {\n    background-color: #0a8672;\n    color: #ffffff;\n  }\n"]))),p=t(184),l=function(n){var r=n.name,t=n.id,e=(0,o.TH)();return(0,p.jsx)(d,{children:(0,p.jsx)(f,{to:"/movies/".concat(t),state:{from:e},children:r})})},v=i.ZP.ul(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n"]))),x=function(n){var r=n.movies;return(0,p.jsx)(v,{children:r.map((function(n){var r=n.id,t=n.original_title;return(0,p.jsx)(l,{id:r,name:t},r)}))})}},8172:function(n,r){r.Z={IDLE:"idle",REJECTED:"rejected",RESOLVED:"resolved",PENDING:"pending"}},4251:function(n,r,t){t.d(r,{Df:function(){return s},FL:function(){return d},zv:function(){return f},Jh:function(){return p},gH:function(){return l}});var e=t(5861),a=t(7757),c=t.n(a),o=t(4569),u=t.n(o),i="api_key=169ca8c721ab5dcac16a3ddf7ef07e2a";u().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat("/trending/movie/day","?").concat(i,"&page=").concat(r));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(r,"?").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(r,"/credits?").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(r,"/reviews?").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/search/movie?query=".concat(r,"&").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},2355:function(n,r,t){t.r(r),t.d(r,{default:function(){return L}});var e,a,c,o,u=t(5861),i=t(885),s=t(7757),d=t.n(s),f=t(2791),p=t(9913),l=t(501),v=t(8175),x=t(4251),h=t(168),m=t(5751),Z=m.ZP.input(e||(e=(0,h.Z)(["\n  margin-right: 10px;\n  border-radius: 5px;\n  width: 600px;\n  padding: 10px;\n  border: 3px solid #ddd;\n  transition: border-color 0.2s linear;\n  :hover,\n  :focus {\n    border-color: #032541;\n  }\n"]))),b=m.ZP.form(a||(a=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n"]))),g=m.ZP.button(c||(c=(0,h.Z)(["\n  min-width: 60px;\n  border-radius: 10px;\n  border: 3px solid #ddd;\n  padding: 10px;\n\n  transition: border-color 0.2s linear;\n  :hover {\n    border-color: #032541;\n  }\n"]))),w=t(184),y=function(n){var r=n.onSubmit,t=(0,f.useState)(""),e=(0,i.Z)(t,2),a=e[0],c=e[1];return(0,w.jsxs)(b,{onSubmit:function(n){n.preventDefault(),r({query:a}),c("")},children:[(0,w.jsx)(Z,{value:a,onChange:function(n){return c(n.target.value)},placeholder:"Search movies",type:"text"}),(0,w.jsx)(g,{children:"Search"})]})},k=m.ZP.main(o||(o=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),j=t(8172),E=j.Z.IDLE,D=j.Z.REJECTED,S=j.Z.RESOLVED,P=j.Z.PENDING,L=function(){var n=(0,f.useState)([]),r=(0,i.Z)(n,2),t=r[0],e=r[1],a=(0,f.useState)(E),c=(0,i.Z)(a,2),o=c[0],s=c[1],h=(0,l.lr)(),m=(0,i.Z)(h,2),Z=m[0],b=m[1],g=Z.get("query");return(0,f.useEffect)((function(){if(g){var n=function(){var n=(0,u.Z)(d().mark((function n(){var r,t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(P),n.prev=1,n.next=4,(0,x.gH)(g);case 4:r=n.sent,t=r.results,e(t),s(S),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),s(D);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(){return n.apply(this,arguments)}}();n()}}),[g]),(0,w.jsx)(k,{children:(0,w.jsxs)("section",{children:[(0,w.jsx)(y,{onSubmit:b}),o===S&&(0,w.jsx)(p.Z,{movies:t}),o===P&&(0,w.jsx)(v.DY,{})]})})}}}]);
//# sourceMappingURL=355.9ac00134.chunk.js.map