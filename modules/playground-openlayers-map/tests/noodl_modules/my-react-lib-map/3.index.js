(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{165:function(r,e,t){"use strict";function n(r,e){var t=r.length-e,n=0;do{for(var o=e;o>0;o--)r[n+e]+=r[n],n++;t-=e}while(t>0)}function o(r,e,t){for(var n=0,o=r.length,a=o/t;o>e;){for(var i=e;i>0;--i)r[n+e]+=r[n],++n;o-=e}for(var c=r.slice(),u=0;u<a;++u)for(var f=0;f<t;++f)r[t*u+f]=c[(t-f-1)*a+u]}function a(r,e,t,a,i,c){if(!e||1===e)return r;for(var u=0;u<i.length;++u){if(i[u]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(i[u]!==i[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var f=i[0]/8,s=2===c?1:i.length,l=0;l<a&&!(l*s*t*f>=r.byteLength);++l){var h=void 0;if(2===e){switch(i[0]){case 8:h=new Uint8Array(r,l*s*t*f,s*t*f);break;case 16:h=new Uint16Array(r,l*s*t*f,s*t*f/2);break;case 32:h=new Uint32Array(r,l*s*t*f,s*t*f/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(i[0]," bits per sample."))}n(h,s)}else 3===e&&o(h=new Uint8Array(r,l*s*t*f,s*t*f),s,f)}return r}function i(r){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return e};var r,e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(r,e,t){r[e]=t.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",f=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(r,e,t){return Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),r[e]}try{l({},"")}catch(r){l=function(r,e,t){return r[e]=t}}function h(r,e,t,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new C(n||[]);return o(i,"_invoke",{value:j(r,t,c)}),i}function p(r,e,t){try{return{type:"normal",arg:r.call(e,t)}}catch(r){return{type:"throw",arg:r}}}e.wrap=h;var v="suspendedStart",y="executing",d="completed",m={};function b(){}function w(){}function g(){}var k={};l(k,u,(function(){return this}));var P=Object.getPrototypeOf,x=P&&P(P(_([])));x&&x!==t&&n.call(x,u)&&(k=x);var L=g.prototype=b.prototype=Object.create(k);function E(r){["next","throw","return"].forEach((function(e){l(r,e,(function(r){return this._invoke(e,r)}))}))}function O(r,e){function t(o,a,c,u){var f=p(r[o],r,a);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==i(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(r){t("next",r,c,u)}),(function(r){t("throw",r,c,u)})):e.resolve(l).then((function(r){s.value=r,c(s)}),(function(r){return t("throw",r,c,u)}))}u(f.arg)}var a;o(this,"_invoke",{value:function(r,n){function o(){return new e((function(e,o){t(r,n,e,o)}))}return a=a?a.then(o,o):o()}})}function j(e,t,n){var o=v;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var f=p(e,t,n);if("normal"===f.type){if(o=n.done?d:"suspendedYield",f.arg===m)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(o=d,n.method="throw",n.arg=f.arg)}}}function T(e,t){var n=t.method,o=e.iterator[n];if(o===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,T(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=p(o,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,m):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function S(r){var e={tryLoc:r[0]};1 in r&&(e.catchLoc=r[1]),2 in r&&(e.finallyLoc=r[2],e.afterLoc=r[3]),this.tryEntries.push(e)}function A(r){var e=r.completion||{};e.type="normal",delete e.arg,r.completion=e}function C(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(S,this),this.reset(!0)}function _(e){if(e||""===e){var t=e[u];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(n.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(i(e)+" is not iterable")}return w.prototype=g,o(L,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:w,configurable:!0}),w.displayName=l(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(r){var e="function"==typeof r&&r.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,g):(r.__proto__=g,l(r,s,"GeneratorFunction")),r.prototype=Object.create(L),r},e.awrap=function(r){return{__await:r}},E(O.prototype),l(O.prototype,f,(function(){return this})),e.AsyncIterator=O,e.async=function(r,t,n,o,a){void 0===a&&(a=Promise);var i=new O(h(r,t,n,o),a);return e.isGeneratorFunction(t)?i:i.next().then((function(r){return r.done?r.value:i.next()}))},E(L),l(L,s,"Generator"),l(L,u,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(r){var e=Object(r),t=[];for(var n in e)t.push(n);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(n,o){return c.type="throw",c.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),f=n.call(i,"finallyLoc");if(u&&f){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(r,e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===r||"continue"===r)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=r,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(r,e){if("throw"===r.type)throw r.arg;return"break"===r.type||"continue"===r.type?this.next=r.arg:"return"===r.type?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):"normal"===r.type&&e&&(this.next=e),m},finish:function(r){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===r)return this.complete(t.completion,t.afterLoc),A(t),m}},catch:function(r){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===r){var n=t.completion;if("throw"===n.type){var o=n.arg;A(t)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),m}},e}function u(r,e,t,n,o,a,i){try{var c=r[a](i),u=c.value}catch(r){return void t(r)}c.done?e(u):Promise.resolve(u).then(n,o)}function f(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,s(n.key),n)}}function s(r){var e=function(r,e){if("object"!=i(r)||!r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,e||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(r,"string");return"symbol"==i(e)?e:e+""}t.d(e,"a",(function(){return l}));var l=function(){return function(r,e,t){return e&&f(r.prototype,e),t&&f(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}((function r(){!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r)}),[{key:"decode",value:(r=c().mark((function r(e,t){var n,o,i,u,f;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.decodeBlock(t);case 2:if(n=r.sent,1===(o=e.Predictor||1)){r.next=9;break}return i=!e.StripOffsets,u=i?e.TileWidth:e.ImageWidth,f=i?e.TileLength:e.RowsPerStrip||e.ImageLength,r.abrupt("return",a(n,o,u,f,e.BitsPerSample,e.PlanarConfiguration));case 9:return r.abrupt("return",n);case 10:case"end":return r.stop()}}),r,this)})),e=function(){var e=this,t=arguments;return new Promise((function(n,o){var a=r.apply(e,t);function i(r){u(a,n,o,i,c,"next",r)}function c(r){u(a,n,o,i,c,"throw",r)}i(void 0)}))},function(r,t){return e.apply(this,arguments)})}]);var r,e}()},191:function(r,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return m}));var n=t(165);function o(r,e,t){return e=a(e),function(r,e){if(e&&("object"==l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}(r,function(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(r){}return function(){return!!r}()}()?Reflect.construct(e,t||[],a(r).constructor):e.apply(r,t))}function a(r){return(a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function i(r,e){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,e){return r.__proto__=e,r})(r,e)}function c(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function u(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,s(n.key),n)}}function f(r,e,t){return e&&u(r.prototype,e),t&&u(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function s(r){var e=function(r,e){if("object"!=l(r)||!r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,e||"default");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(r,"string");return"symbol"==l(e)?e:e+""}function l(r){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var h=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]);function p(r,e){for(var t=0,n=[],o=16;o>0&&!r[o-1];)--o;n.push({children:[],index:0});for(var a,i=n[0],c=0;c<o;c++){for(var u=0;u<r[c];u++){for((i=n.pop()).children[i.index]=e[t];i.index>0;)i=n.pop();for(i.index++,n.push(i);n.length<=c;)n.push(a={children:[],index:0}),i.children[i.index]=a.children,i=a;t++}c+1<o&&(n.push(a={children:[],index:0}),i.children[i.index]=a.children,i=a)}return n[0].children}function v(r,e,t,n,o,a,i,c,u){var f=t.mcusPerLine,s=t.progressive,p=e,v=e,y=0,d=0;function m(){if(d>0)return d--,y>>d&1;if(255===(y=r[v++])){var e=r[v++];if(e)throw new Error("unexpected marker: ".concat((y<<8|e).toString(16)))}return d=7,y>>>7}function b(r){for(var e,t=r;null!==(e=m());){if("number"==typeof(t=t[e]))return t;if("object"!==l(t))throw new Error("invalid huffman sequence")}return null}function w(r){for(var e=r,t=0;e>0;){var n=m();if(null===n)return;t=t<<1|n,--e}return t}function g(r){var e=w(r);return e>=1<<r-1?e:e+(-1<<r)+1}var k=0;var P,x=0;function L(r,e,t,n,o){var a=t%f,i=(t/f|0)*r.v+n,c=a*r.h+o;e(r,r.blocks[i][c])}function E(r,e,t){var n=t/r.blocksPerLine|0,o=t%r.blocksPerLine;e(r,r.blocks[n][o])}var O,j,T,S,A,C,_=n.length;C=s?0===a?0===c?function(r,e){var t=b(r.huffmanTableDC),n=0===t?0:g(t)<<u;r.pred+=n,e[0]=r.pred}:function(r,e){e[0]|=m()<<u}:0===c?function(r,e){if(k>0)k--;else for(var t=a,n=i;t<=n;){var o=b(r.huffmanTableAC),c=15&o,f=o>>4;if(0===c){if(f<15){k=w(f)+(1<<f)-1;break}t+=16}else{e[h[t+=f]]=g(c)*(1<<u),t++}}}:function(r,e){for(var t=a,n=i,o=0;t<=n;){var c=h[t],f=e[c]<0?-1:1;switch(x){case 0:var s=b(r.huffmanTableAC),l=15&s;if(o=s>>4,0===l)o<15?(k=w(o)+(1<<o),x=4):(o=16,x=1);else{if(1!==l)throw new Error("invalid ACn encoding");P=g(l),x=o?2:3}continue;case 1:case 2:e[c]?e[c]+=(m()<<u)*f:0===--o&&(x=2===x?3:0);break;case 3:e[c]?e[c]+=(m()<<u)*f:(e[c]=P<<u,x=0);break;case 4:e[c]&&(e[c]+=(m()<<u)*f)}t++}4===x&&0===--k&&(x=0)}:function(r,e){var t=b(r.huffmanTableDC),n=0===t?0:g(t);r.pred+=n,e[0]=r.pred;for(var o=1;o<64;){var a=b(r.huffmanTableAC),i=15&a,c=a>>4;if(0===i){if(c<15)break;o+=16}else{e[h[o+=c]]=g(i),o++}}};var I,D,G=0;D=1===_?n[0].blocksPerLine*n[0].blocksPerColumn:f*t.mcusPerColumn;for(var U=o||D;G<D;){for(j=0;j<_;j++)n[j].pred=0;if(k=0,1===_)for(O=n[0],A=0;A<U;A++)E(O,C,G),G++;else for(A=0;A<U;A++){for(j=0;j<_;j++){var N=O=n[j],q=N.h,z=N.v;for(T=0;T<z;T++)for(S=0;S<q;S++)L(O,C,G,T,S)}if(++G===D)break}if(d=0,(I=r[v]<<8|r[v+1])<65280)throw new Error("marker was not found");if(!(I>=65488&&I<=65495))break;v+=2}return v-p}function y(r,e){var t=[],n=e.blocksPerLine,o=e.blocksPerColumn,a=n<<3,i=new Int32Array(64),c=new Uint8Array(64);function u(r,t,n){var o,a,i,c,u,f,s,l,h,p,v=e.quantizationTable,y=n;for(p=0;p<64;p++)y[p]=r[p]*v[p];for(p=0;p<8;++p){var d=8*p;0!==y[1+d]||0!==y[2+d]||0!==y[3+d]||0!==y[4+d]||0!==y[5+d]||0!==y[6+d]||0!==y[7+d]?(o=5793*y[0+d]+128>>8,a=5793*y[4+d]+128>>8,i=y[2+d],c=y[6+d],u=2896*(y[1+d]-y[7+d])+128>>8,l=2896*(y[1+d]+y[7+d])+128>>8,f=y[3+d]<<4,h=o-a+1>>1,o=o+a+1>>1,a=h,h=3784*i+1567*c+128>>8,i=1567*i-3784*c+128>>8,c=h,h=u-(s=y[5+d]<<4)+1>>1,u=u+s+1>>1,s=h,h=l+f+1>>1,f=l-f+1>>1,l=h,h=o-c+1>>1,o=o+c+1>>1,c=h,h=a-i+1>>1,a=a+i+1>>1,i=h,h=2276*u+3406*l+2048>>12,u=3406*u-2276*l+2048>>12,l=h,h=799*f+4017*s+2048>>12,f=4017*f-799*s+2048>>12,s=h,y[0+d]=o+l,y[7+d]=o-l,y[1+d]=a+s,y[6+d]=a-s,y[2+d]=i+f,y[5+d]=i-f,y[3+d]=c+u,y[4+d]=c-u):(h=5793*y[0+d]+512>>10,y[0+d]=h,y[1+d]=h,y[2+d]=h,y[3+d]=h,y[4+d]=h,y[5+d]=h,y[6+d]=h,y[7+d]=h)}for(p=0;p<8;++p){var m=p;0!==y[8+m]||0!==y[16+m]||0!==y[24+m]||0!==y[32+m]||0!==y[40+m]||0!==y[48+m]||0!==y[56+m]?(o=5793*y[0+m]+2048>>12,a=5793*y[32+m]+2048>>12,i=y[16+m],c=y[48+m],u=2896*(y[8+m]-y[56+m])+2048>>12,l=2896*(y[8+m]+y[56+m])+2048>>12,f=y[24+m],h=o-a+1>>1,o=o+a+1>>1,a=h,h=3784*i+1567*c+2048>>12,i=1567*i-3784*c+2048>>12,c=h,h=u-(s=y[40+m])+1>>1,u=u+s+1>>1,s=h,h=l+f+1>>1,f=l-f+1>>1,l=h,h=o-c+1>>1,o=o+c+1>>1,c=h,h=a-i+1>>1,a=a+i+1>>1,i=h,h=2276*u+3406*l+2048>>12,u=3406*u-2276*l+2048>>12,l=h,h=799*f+4017*s+2048>>12,f=4017*f-799*s+2048>>12,s=h,y[0+m]=o+l,y[56+m]=o-l,y[8+m]=a+s,y[48+m]=a-s,y[16+m]=i+f,y[40+m]=i-f,y[24+m]=c+u,y[32+m]=c-u):(h=5793*n[p+0]+8192>>14,y[0+m]=h,y[8+m]=h,y[16+m]=h,y[24+m]=h,y[32+m]=h,y[40+m]=h,y[48+m]=h,y[56+m]=h)}for(p=0;p<64;++p){var b=128+(y[p]+8>>4);t[p]=b<0?0:b>255?255:b}}for(var f=0;f<o;f++){for(var s=f<<3,l=0;l<8;l++)t.push(new Uint8Array(a));for(var h=0;h<n;h++){u(e.blocks[f][h],c,i);for(var p=0,v=h<<3,y=0;y<8;y++)for(var d=t[s+y],m=0;m<8;m++)d[v+m]=c[p++]}}return t}var d=function(){return f((function r(){c(this,r),this.jfif=null,this.adobe=null,this.quantizationTables=[],this.huffmanTablesAC=[],this.huffmanTablesDC=[],this.resetFrames()}),[{key:"resetFrames",value:function(){this.frames=[]}},{key:"parse",value:function(r){var e=0;function t(){var t=r[e]<<8|r[e+1];return e+=2,t}function n(r){var e,t,n=0,o=0;for(t in r.components)r.components.hasOwnProperty(t)&&(n<(e=r.components[t]).h&&(n=e.h),o<e.v&&(o=e.v));var a=Math.ceil(r.samplesPerLine/8/n),i=Math.ceil(r.scanLines/8/o);for(t in r.components)if(r.components.hasOwnProperty(t)){e=r.components[t];for(var c=Math.ceil(Math.ceil(r.samplesPerLine/8)*e.h/n),u=Math.ceil(Math.ceil(r.scanLines/8)*e.v/o),f=a*e.h,s=i*e.v,l=[],h=0;h<s;h++){for(var p=[],v=0;v<f;v++)p.push(new Int32Array(64));l.push(p)}e.blocksPerLine=c,e.blocksPerColumn=u,e.blocks=l}r.maxH=n,r.maxV=o,r.mcusPerLine=a,r.mcusPerColumn=i}var o,a,i=t();if(65496!==i)throw new Error("SOI not found");for(i=t();65497!==i;){switch(i){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var c=(o=void 0,a=void 0,o=t(),a=r.subarray(e,e+o-2),e+=a.length,a);65504===i&&74===c[0]&&70===c[1]&&73===c[2]&&70===c[3]&&0===c[4]&&(this.jfif={version:{major:c[5],minor:c[6]},densityUnits:c[7],xDensity:c[8]<<8|c[9],yDensity:c[10]<<8|c[11],thumbWidth:c[12],thumbHeight:c[13],thumbData:c.subarray(14,14+3*c[12]*c[13])}),65518===i&&65===c[0]&&100===c[1]&&111===c[2]&&98===c[3]&&101===c[4]&&0===c[5]&&(this.adobe={version:c[6],flags0:c[7]<<8|c[8],flags1:c[9]<<8|c[10],transformCode:c[11]});break;case 65499:for(var u=t()+e-2;e<u;){var f=r[e++],s=new Int32Array(64);if(f>>4==0)for(var l=0;l<64;l++){s[h[l]]=r[e++]}else{if(f>>4!=1)throw new Error("DQT: invalid table spec");for(var y=0;y<64;y++){s[h[y]]=t()}}this.quantizationTables[15&f]=s}break;case 65472:case 65473:case 65474:t();for(var d={extended:65473===i,progressive:65474===i,precision:r[e++],scanLines:t(),samplesPerLine:t(),components:{},componentsOrder:[]},m=r[e++],b=void 0,w=0;w<m;w++){b=r[e];var g=r[e+1]>>4,k=15&r[e+1],P=r[e+2];d.componentsOrder.push(b),d.components[b]={h:g,v:k,quantizationIdx:P},e+=3}n(d),this.frames.push(d);break;case 65476:for(var x=t(),L=2;L<x;){for(var E=r[e++],O=new Uint8Array(16),j=0,T=0;T<16;T++,e++)O[T]=r[e],j+=O[T];for(var S=new Uint8Array(j),A=0;A<j;A++,e++)S[A]=r[e];L+=17+j,E>>4==0?this.huffmanTablesDC[15&E]=p(O,S):this.huffmanTablesAC[15&E]=p(O,S)}break;case 65501:t(),this.resetInterval=t();break;case 65498:t();for(var C=r[e++],_=[],I=this.frames[0],D=0;D<C;D++){var G=I.components[r[e++]],U=r[e++];G.huffmanTableDC=this.huffmanTablesDC[U>>4],G.huffmanTableAC=this.huffmanTablesAC[15&U],_.push(G)}var N=r[e++],q=r[e++],z=r[e++],F=v(r,e,I,_,this.resetInterval,N,q,z>>4,15&z);e+=F;break;case 65535:255!==r[e]&&e--;break;default:if(255===r[e-3]&&r[e-2]>=192&&r[e-2]<=254){e-=3;break}throw new Error("unknown JPEG marker ".concat(i.toString(16)))}i=t()}}},{key:"getResult",value:function(){var r=this.frames;if(0===this.frames.length)throw new Error("no frames were decoded");this.frames.length>1&&console.warn("more than one frame is not supported");for(var e=0;e<this.frames.length;e++)for(var t=this.frames[e].components,n=0,o=Object.keys(t);n<o.length;n++){var a=o[n];t[a].quantizationTable=this.quantizationTables[t[a].quantizationIdx],delete t[a].quantizationIdx}for(var i=r[0],c=i.components,u=i.componentsOrder,f=[],s=i.samplesPerLine,l=i.scanLines,h=0;h<u.length;h++){var p=c[u[h]];f.push({lines:y(0,p),scaleX:p.h/i.maxH,scaleY:p.v/i.maxV})}for(var v=new Uint8Array(s*l*f.length),d=0,m=0;m<l;++m)for(var b=0;b<s;++b)for(var w=0;w<f.length;++w){var g=f[w];v[d]=g.lines[0|m*g.scaleY][0|b*g.scaleX],++d}return v}}])}(),m=function(r){function e(r){var t;return c(this,e),(t=o(this,e)).reader=new d,r.JPEGTables&&t.reader.parse(r.JPEGTables),t}return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&i(r,e)}(e,r),f(e,[{key:"decodeBlock",value:function(r){return this.reader.resetFrames(),this.reader.parse(new Uint8Array(r)),this.reader.getResult().buffer}}])}(n.a)}}]);
//# sourceMappingURL=3.index.js.map