"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[615],{333:function(t,r,e){e.r(r),e.d(r,{default:function(){return I}});var n,a,c,i,o=e(5861),u=e(885),A=e(7757),p=e.n(A),s=e(2791),f=e(6871),d=e(4251),l=e(168),h=e(5751),v=h.ZP.ul(n||(n=(0,l.Z)(["\n  display: grid;\n  margin-top: 30px;\n  width: 750px;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1em;\n"]))),b=e(9179),m=h.ZP.div(a||(a=(0,l.Z)(["\n  justify-self: center;\n"]))),g=h.ZP.li(c||(c=(0,l.Z)(["\n  display: grid;\n  grid-auto-rows: minmax(100, 150px);\n  text-align: center;\n  justify-self: center;\n"]))),x=h.ZP.p(i||(i=(0,l.Z)(["\n  margin-top: 10px;\n"]))),y=e(184),Z=function(t){var r=t.imgUrl,e=t.profile_path,n=t.name,a=t.id;return(0,y.jsxs)(g,{children:[(0,y.jsx)(m,{children:e?(0,y.jsx)("img",{src:r,id:a,alt:"profile ".concat(n)}):(0,y.jsx)("img",{src:b,width:"92px",height:"138px",id:a,alt:"profile ".concat(n)})}),(0,y.jsx)(x,{children:n})]})},j=e(8172),w=e(1413);function O(t,r){if(null==t)return{};var e,n,a=function(t,r){if(null==t)return{};var e,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)e=c[n],r.indexOf(e)>=0||(a[e]=t[e]);return a}(t,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)e=c[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var k=e(8175),V=["width","heading","row","column","padding","borderRadius"],P=function(t){for(var r,e=t.width,n=void 0===e?750:e,a=t.heading,c=void 0===a?{width:140,height:24}:a,i=t.row,o=void 0===i?2:i,u=t.column,A=void 0===u?5:u,p=t.padding,s=void 0===p?12:p,f=t.borderRadius,d=void 0===f?4:f,l=O(t,V),h=[],v=1;v<=o;v++)for(var b=0;b<A;b++){var m=(n-s*(A+1))/A,g=s+b*(m+s),x=m,Z=s+x+(s/2+20)+20+4*s,j=s+c.height+2*s+Z*(v-1),P=j+s+x,D=P+s/2+20;h.push((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("rect",{x:g,y:j,rx:d,ry:d,width:m,height:x}),(0,y.jsx)("rect",{x:g,y:P,rx:0,ry:0,width:m,height:20}),(0,y.jsx)("rect",{x:g,y:D,rx:0,ry:0,width:.6*m,height:20})]})),v===o&&(r=D+20)}return(0,y.jsxs)(k.ZP,(0,w.Z)((0,w.Z)({viewBox:"0 0 ".concat(n," ").concat(r),width:n,height:r},l),{},{children:[c&&(0,y.jsx)("rect",{x:s,y:s,rx:0,ry:0,width:c.width,height:c.height}),h]}))};P.metadata={name:"I am Doong - I come from Vi\u1ec7t Nam",github:"toiladoong",description:"CatalogMagic",filename:"CatalogMagic"};var D=P,J=j.Z.IDLE,E=j.Z.REJECTED,N=j.Z.RESOLVED,U=j.Z.PENDING,I=function(){var t=(0,s.useState)(null),r=(0,u.Z)(t,2),e=r[0],n=r[1],a=(0,s.useState)(J),c=(0,u.Z)(a,2),i=c[0],A=c[1],l=(0,f.UO)().moviesId;return(0,s.useEffect)((function(){var t=function(){var t=(0,o.Z)(p().mark((function t(){var r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A(U),t.prev=1,t.next=4,(0,d.zv)(l);case 4:r=t.sent,n(r.cast),A(N),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),A(E);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[l]),i===N?(0,y.jsx)(v,{children:e.map((function(t){var r=t.profile_path,e=t.id,n=t.original_name;return(0,y.jsx)(Z,{imgUrl:"http://image.tmdb.org/t/p/w92/".concat(r),profile_path:r,name:n,id:e},e)}))}):i===U?(0,y.jsx)(D,{}):(0,y.jsx)("ul",{})}},8172:function(t,r){r.Z={IDLE:"idle",REJECTED:"rejected",RESOLVED:"resolved",PENDING:"pending"}},4251:function(t,r,e){e.d(r,{Df:function(){return A},FL:function(){return p},zv:function(){return s},Jh:function(){return f},gH:function(){return d}});var n=e(5861),a=e(7757),c=e.n(a),i=e(4569),o=e.n(i),u="api_key=169ca8c721ab5dcac16a3ddf7ef07e2a";o().defaults.baseURL="https://api.themoviedb.org/3";var A=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat("/trending/movie/day","?").concat(u,"&page=").concat(r));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/movie/".concat(r,"?").concat(u));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/movie/".concat(r,"/credits?").concat(u));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/movie/".concat(r,"/reviews?").concat(u));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/search/movie?query=".concat(r,"&").concat(u));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},9179:function(t){t.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAYFBMVEXu7u5mZmbr6+tdXV3v7+/y8vL8/Px6enpkZGSFhYX29vbQ0NBoaGja2tp3d3fl5eVaWlqoqKje3t5VVVWWlpaGhobU1NRubm5zc3OOjo6bm5tQUFCioqKtra29vb3Hx8eseWkKAAAEyUlEQVR4nO2aC3PiOgyF41eiuM6bEqB0+///5UoOhW5gX03vrH3nfNAZSjIZHyQdy06KAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwtVjLf4W2mt8bLqP5xVf5smF9KbrYNDBrHV/AJilOfvVNdIV2bkvk/yusL0t+b8N1nUsvbm7cVfVzXdWfp6p3jU8xbm5/mIwxZD4PTW3jdILafFNVb/u3p8+zf6qq0SdoJdo1h1p7X/rP4yqOW5Fe3FhbW3cbfVK0pSftqu23J9ol6Szb4Y/Zx/N+3tpYmBa3iOetKit3bcW1QdN21Z9xx5W3NhEmlRW1rY+lre1PWuXYv3gvjfXqQN7aZLHgx6E+vo7cgKwDl522lRnq8puZetOHN3+XwJlpY8Ng0+e1y+Xfwr8ZUrMKhvbu7hp5aZMjsma9fva7PlBQNJuzXovLThuvyG55aV13CCpi+Oz1qdlps+5m99aNLakQOHCmHnPXZr3WN0fkD7UJpBQFc7w7NzNtVo9WfxyvfzUcNxWIvt0tZvLRxlbBYRqOo9eikd/Sk7ju1E+ckWwleum+bhKz0ebYHbUbFD2PPF7tJSHFMH33WlGoXjVL1lHc1S5z0caJ6KwfDAU6dr6QIUtTIktPq5ums1GY7CDc9jRz0cZV1pXDxIao+rpznX0vO1kCFMUy41nNGj84TSba+Jvy9BLdPphal3Jo2VeVVakEVerRlywyu5wsinJgaYZn6kBT23lJUpbnZIkjNSbVV+5Pzukut7hpf36Zubvi/iqEeZp5TSMVpmVPQUuTyZp8o17O/rbRnoU2Ge7Qh5k4J4krToW+kv1iCRibZyGtCjvmfjahP9uLnNT3S6I2CUshDmlmUhfmnqcCCZBdfL+QzdqWWxQi6Znlx+CUTV2bdPdOD8rMygR1hczxsmds440oZ58qo2RFQIM0ZbZz6edkvA/HU3aIS5l3dTQH8ywDF0MR12dpxNXIkQ3qLF/KSih1bTL6IQaEDTJcIydCJHJSb2IoErUQTZRIDZ21OdQbDzJ2I9FGwnvBSQiJjrFx5rC5fRVrTUV9FIa48ZW8Njb/mI8kQ7+GLfoKcW/JAWJ9T23MxyVt+WwaXA456c/9ZVZbSu6Skkv68WKbk9LvDyQH5asojpQ5lSnPb/uDaCtP/UXQB5O8/hdMWzjX3OaGy8Gg+lOpi6pqErxryqk4tpUuyl1vZkM/6vqImXVH/UoaR1FNx7Jr2zHJuFnJSW60aJ6VIvVYHedgX839+iCJ7fQ7+3xo/L8W8oCl3s4Tp5cJH81/lZncrZgHKSmFZ3Yt5+S/FvIA7VnbbpEVfhK1GM9Fx1pyzEtDVeNTrDeZsujqkD/RJnavQqD7r5V0KKwtyXpzjUzHMhNT1Pc4bjFCDyRfEjZdbXHCUr9IyZh990EldZkjRFua9/JZGz0Iyl9gqlR9cqm3DdJSrrdfp+OfiJOcTM8oZX6bejNteOTJmKkdfYLPPHFfcmyrml8baI+Nvb/HnwBO7tG7bY8Yer9+MiMVeHnpuk0PPdmtj84CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/ie8Zu0U7tJjGRwAAAABJRU5ErkJggg=="},1413:function(t,r,e){e.d(r,{Z:function(){return c}});var n=e(4942);function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){(0,n.Z)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}}}]);
//# sourceMappingURL=615.918f5da3.chunk.js.map