(function(){"use strict";var e={9395:function(e,t,n){var r=n(9242),o=n(3396);function i(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var c=n(89);const a={},u=(0,c.Z)(a,[["render",i]]);var s=u,f=n(2483);const d={id:"home"},l=(0,o._)("h3",{class:"title"},"人脸识别",-1),v=(0,o._)("div",{class:"video-wrapper"},[(0,o._)("div",{class:"shade-left"}),(0,o._)("video",{id:"video",width:"300",height:"150",autoPlay:""},[(0,o._)("track",{default:"",kind:"captions",srcLang:"en",src:""}),(0,o.Uk)(" 您的浏览器不支持 video 标签。 ")]),(0,o._)("div",{class:"shade-right"})],-1),h=(0,o._)("div",{class:"tip"},[(0,o._)("strong",null,"请眨眼")],-1),p=[l,v,h];function g(e,t,n,r,i,c){return(0,o.wg)(),(0,o.iD)("div",d,p)}var m=n(6520),b=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};let w=class extends m.w3{mounted(){let e=document.getElementById("video");navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:{width:420,height:200}}).then((t=>{e.srcObject=t,e.play()})).catch((e=>{console.error(e)}))}};w=b([(0,m.Ei)({components:{}})],w);var y=w;const O=(0,c.Z)(y,[["render",g]]);var j=O;const _=[{path:"/",name:"home",component:j}],k=(0,f.p7)({history:(0,f.r5)("/camera/"),routes:_});var x=k;(0,r.ri)(s).use(x).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var c=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,i<c&&(c=i));if(a){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,c=r[0],a=r[1],u=r[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var f=u(n)}for(t&&t(r);s<c.length;s++)i=c[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkcamera"]=self["webpackChunkcamera"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9395)}));r=n.O(r)})();
//# sourceMappingURL=app.e8b0e267.js.map