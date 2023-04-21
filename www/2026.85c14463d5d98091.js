"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2026],{7423:(pe,K,x)=>{x.d(K,{Uw:()=>z,fo:()=>B});var P=x(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var F=(()=>{return(s=F||(F={})).Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE",F;var s})();class N extends Error{constructor(r,i,u){super(r),this.message=r,this.code=i,this.data=u}}const H=s=>{var r,i,u,v,c;const w=s.CapacitorCustomPlatform||null,d=s.Capacitor||{},C=d.Plugins=d.Plugins||{},b=s.CapacitorPlatforms,W=(null===(r=b?.currentPlatform)||void 0===r?void 0:r.getPlatform)||(()=>null!==w?w.name:(s=>{var r,i;return s?.androidBridge?"android":null!==(i=null===(r=s?.webkit)||void 0===r?void 0:r.messageHandlers)&&void 0!==i&&i.bridge?"ios":"web"})(s)),ve=(null===(i=b?.currentPlatform)||void 0===i?void 0:i.isNativePlatform)||(()=>"web"!==W()),E=(null===(u=b?.currentPlatform)||void 0===u?void 0:u.isPluginAvailable)||(l=>!(!o.get(l)?.platforms.has(W())&&!e(l))),e=(null===(v=b?.currentPlatform)||void 0===v?void 0:v.getPluginHeader)||(l=>{var g;return null===(g=d.PluginHeaders)||void 0===g?void 0:g.find(p=>p.name===l)}),o=new Map,f=(null===(c=b?.currentPlatform)||void 0===c?void 0:c.registerPlugin)||((l,g={})=>{const p=o.get(l);if(p)return console.warn(`Capacitor plugin "${l}" already registered. Cannot register plugins twice.`),p.proxy;const y=W(),h=e(l);let m;const U=function(){var A=(0,P.Z)(function*(){return!m&&y in g?m=m="function"==typeof g[y]?yield g[y]():g[y]:null!==w&&!m&&"web"in g&&(m=m="function"==typeof g.web?yield g.web():g.web),m});return function(){return A.apply(this,arguments)}}(),se=A=>{let L;const k=(...$)=>{const D=U().then(I=>{const G=((A,L)=>{var k,$;if(!h){if(A)return null===($=A[L])||void 0===$?void 0:$.bind(A);throw new N(`"${l}" plugin is not implemented on ${y}`,F.Unimplemented)}{const D=h?.methods.find(I=>L===I.name);if(D)return"promise"===D.rtype?I=>d.nativePromise(l,L.toString(),I):(I,G)=>d.nativeCallback(l,L.toString(),I,G);if(A)return null===(k=A[L])||void 0===k?void 0:k.bind(A)}})(I,A);if(G){const X=G(...$);return L=X?.remove,X}throw new N(`"${l}.${A}()" is not implemented on ${y}`,F.Unimplemented)});return"addListener"===A&&(D.remove=(0,P.Z)(function*(){return L()})),D};return k.toString=()=>`${A.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:A,writable:!1,configurable:!1}),k},he=se("addListener"),me=se("removeListener"),be=(A,L)=>{const k=he({eventName:A},L),$=function(){var I=(0,P.Z)(function*(){const G=yield k;me({eventName:A,callbackId:G},L)});return function(){return I.apply(this,arguments)}}(),D=new Promise(I=>k.then(()=>I({remove:$})));return D.remove=(0,P.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield $()}),D},le=new Proxy({},{get(A,L){switch(L){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return h?be:he;case"removeListener":return me;default:return se(L)}}});return C[l]=le,o.set(l,{name:l,proxy:le,platforms:new Set([...Object.keys(g),...h?[y]:[]])}),le});return d.convertFileSrc||(d.convertFileSrc=l=>l),d.getPlatform=W,d.handleError=l=>s.console.error(l),d.isNativePlatform=ve,d.isPluginAvailable=E,d.pluginMethodNoop=(l,g,p)=>Promise.reject(`${p} does not have an implementation of "${g}".`),d.registerPlugin=f,d.Exception=N,d.DEBUG=!!d.DEBUG,d.isLoggingEnabled=!!d.isLoggingEnabled,d.platform=d.getPlatform(),d.isNative=d.isNativePlatform(),d},Z=(s=>s.Capacitor=H(s))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),B=Z.registerPlugin;class z{constructor(r){this.listeners={},this.windowListeners={},r&&(console.warn(`Capacitor WebPlugin "${r.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=r)}addListener(r,i){var u=this;this.listeners[r]||(this.listeners[r]=[]),this.listeners[r].push(i);const c=this.windowListeners[r];c&&!c.registered&&this.addWindowListener(c);const w=function(){var C=(0,P.Z)(function*(){return u.removeListener(r,i)});return function(){return C.apply(this,arguments)}}(),d=Promise.resolve({remove:w});return Object.defineProperty(d,"remove",{value:(C=(0,P.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield w()}),function(){return C.apply(this,arguments)})}),d;var C}removeAllListeners(){var r=this;return(0,P.Z)(function*(){r.listeners={};for(const i in r.windowListeners)r.removeWindowListener(r.windowListeners[i]);r.windowListeners={}})()}notifyListeners(r,i){const u=this.listeners[r];u&&u.forEach(v=>v(i))}hasListeners(r){return!!this.listeners[r].length}registerWindowListener(r,i){this.windowListeners[i]={registered:!1,windowEventName:r,pluginEventName:i,handler:u=>{this.notifyListeners(i,u)}}}unimplemented(r="not implemented"){return new Z.Exception(r,F.Unimplemented)}unavailable(r="not available"){return new Z.Exception(r,F.Unavailable)}removeListener(r,i){var u=this;return(0,P.Z)(function*(){const v=u.listeners[r];if(!v)return;const c=v.indexOf(i);u.listeners[r].splice(c,1),u.listeners[r].length||u.removeWindowListener(u.windowListeners[r])})()}addWindowListener(r){window.addEventListener(r.windowEventName,r.handler),r.registered=!0}removeWindowListener(r){r&&(window.removeEventListener(r.windowEventName,r.handler),r.registered=!1)}}const R=s=>encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),T=s=>s.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class V extends z{getCookies(){return(0,P.Z)(function*(){const r=document.cookie,i={};return r.split(";").forEach(u=>{if(u.length<=0)return;let[v,c]=u.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");v=T(v).trim(),c=T(c).trim(),i[v]=c}),i})()}setCookie(r){return(0,P.Z)(function*(){try{const i=R(r.key),u=R(r.value),v=`; expires=${(r.expires||"").replace("expires=","")}`,c=(r.path||"/").replace("path=",""),w=null!=r.url&&r.url.length>0?`domain=${r.url}`:"";document.cookie=`${i}=${u||""}${v}; path=${c}; ${w};`}catch(i){return Promise.reject(i)}})()}deleteCookie(r){return(0,P.Z)(function*(){try{document.cookie=`${r.key}=; Max-Age=0`}catch(i){return Promise.reject(i)}})()}clearCookies(){return(0,P.Z)(function*(){try{const r=document.cookie.split(";")||[];for(const i of r)document.cookie=i.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(r){return Promise.reject(r)}})()}clearAllCookies(){var r=this;return(0,P.Z)(function*(){try{yield r.clearCookies()}catch(i){return Promise.reject(i)}})()}}B("CapacitorCookies",{web:()=>new V});const te=function(){var s=(0,P.Z)(function*(r){return new Promise((i,u)=>{const v=new FileReader;v.onload=()=>{const c=v.result;i(c.indexOf(",")>=0?c.split(",")[1]:c)},v.onerror=c=>u(c),v.readAsDataURL(r)})});return function(i){return s.apply(this,arguments)}}();class oe extends z{request(r){return(0,P.Z)(function*(){const i=((s,r={})=>{const i=Object.assign({method:s.method||"GET",headers:s.headers},r),v=((s={})=>{const r=Object.keys(s);return Object.keys(s).map(v=>v.toLocaleLowerCase()).reduce((v,c,w)=>(v[c]=s[r[w]],v),{})})(s.headers)["content-type"]||"";if("string"==typeof s.data)i.body=s.data;else if(v.includes("application/x-www-form-urlencoded")){const c=new URLSearchParams;for(const[w,d]of Object.entries(s.data||{}))c.set(w,d);i.body=c.toString()}else if(v.includes("multipart/form-data")){const c=new FormData;if(s.data instanceof FormData)s.data.forEach((d,C)=>{c.append(C,d)});else for(const d of Object.keys(s.data))c.append(d,s.data[d]);i.body=c;const w=new Headers(i.headers);w.delete("content-type"),i.headers=w}else(v.includes("application/json")||"object"==typeof s.data)&&(i.body=JSON.stringify(s.data));return i})(r,r.webFetchExtra),u=((s,r=!0)=>s?Object.entries(s).reduce((u,v)=>{const[c,w]=v;let d,C;return Array.isArray(w)?(C="",w.forEach(b=>{d=r?encodeURIComponent(b):b,C+=`${c}=${d}&`}),C.slice(0,-1)):(d=r?encodeURIComponent(w):w,C=`${c}=${d}`),`${u}&${C}`},"").substr(1):null)(r.params,r.shouldEncodeUrlParams),v=u?`${r.url}?${u}`:r.url,c=yield fetch(v,i),w=c.headers.get("content-type")||"";let C,b,{responseType:d="text"}=c.ok?r:{};switch(w.includes("application/json")&&(d="json"),d){case"arraybuffer":case"blob":b=yield c.blob(),C=yield te(b);break;case"json":C=yield c.json();break;default:C=yield c.text()}const S={};return c.headers.forEach((W,J)=>{S[J]=W}),{data:C,headers:S,status:c.status,url:c.url}})()}get(r){var i=this;return(0,P.Z)(function*(){return i.request(Object.assign(Object.assign({},r),{method:"GET"}))})()}post(r){var i=this;return(0,P.Z)(function*(){return i.request(Object.assign(Object.assign({},r),{method:"POST"}))})()}put(r){var i=this;return(0,P.Z)(function*(){return i.request(Object.assign(Object.assign({},r),{method:"PUT"}))})()}patch(r){var i=this;return(0,P.Z)(function*(){return i.request(Object.assign(Object.assign({},r),{method:"PATCH"}))})()}delete(r){var i=this;return(0,P.Z)(function*(){return i.request(Object.assign(Object.assign({},r),{method:"DELETE"}))})()}}B("CapacitorHttp",{web:()=>new oe})},2026:(pe,K,x)=>{x.r(K),x.d(K,{Tab1Page:()=>ae});var P=x(5861),O=x(7304),ce=x(4762),M=x(7423);const j=(0,M.fo)("Share",{web:()=>x.e(7907).then(x.bind(x,7907)).then(e=>new e.ShareWeb)});var Q=x(9751),F=x(4968),N={error:"cordova_not_available"},Y={error:"plugin_not_installed"};function H(e){if(typeof window<"u"&&window.angular){var n=window.document,o=window.angular.element(n.querySelector("[ng-app]")||n.body).injector();if(o)return o.get("$q")(function(f,l){e(f,l)});console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.")}return function(){if(Promise)return new Promise(function(f,l){e(f,l)});console.error("No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.")}()}function q(e,t,n){var o,a;"string"==typeof e?o=e:(o=e.constructor.getPluginRef(),n=e.constructor.getPluginName(),a=e.constructor.getPluginInstallName());var f=V(o);return!(!f||t&&typeof f[t]>"u")||(typeof window>"u"||!window.cordova?(function ne(e,t){typeof process>"u"&&console.warn(t?"Native: tried calling "+e+"."+t+", but Cordova is not available. Make sure to include cordova.js or run in a device/simulator":"Native: tried accessing the "+e+" plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator")}(n,t),N):(function te(e,t,n){console.warn(n?"Native: tried calling "+e+"."+n+", but the "+e+" plugin is not installed.":"Native: tried accessing the "+e+" plugin but it's not installed."),t&&console.warn("Install the "+e+" plugin: 'ionic cordova plugin add "+t+"'")}(n,a,t),Y))}function R(e,t,n,o,a,f){void 0===o&&(o={}),n=function _(e,t,n,o){if(void 0===t&&(t={}),t.sync)return e;if("reverse"===t.callbackOrder)e.unshift(o),e.unshift(n);else if("node"===t.callbackStyle)e.push(function(g,p){g?o(g):n(p)});else if("object"===t.callbackStyle&&t.successName&&t.errorName){var a={};a[t.successName]=n,a[t.errorName]=o,e.push(a)}else if(typeof t.successIndex<"u"||typeof t.errorIndex<"u"){var f=function(){t.successIndex>e.length?e[t.successIndex]=n:e.splice(t.successIndex,0,n)},l=function(){t.errorIndex>e.length?e[t.errorIndex]=o:e.splice(t.errorIndex,0,o)};t.successIndex>t.errorIndex?(l(),f()):(f(),l())}else e.push(n),e.push(o);return e}(n,o,a,f);var l=q(e,t);if(!0===l){var g=V(e.constructor.getPluginRef());return g[t].apply(g,n)}return l}function V(e){return typeof window<"u"?ee(window,e):null}function ee(e,t){for(var n=t.split("."),o=e,a=0;a<n.length;a++){if(!o)return null;o=o[n[a]]}return o}var re=function(e,t,n){return void 0===n&&(n={}),function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return n.sync?R(e,t,o,n):n.observable?function B(e,t,n,o){return void 0===o&&(o={}),new Q.y(function(a){var f;return f=o.destruct?R(e,t,n,o,function(){for(var l=[],g=0;g<arguments.length;g++)l[g]=arguments[g];return a.next(l)},function(){for(var l=[],g=0;g<arguments.length;g++)l[g]=arguments[g];return a.error(l)}):R(e,t,n,o,a.next.bind(a),a.error.bind(a)),f&&f.error&&(a.error(f.error),a.complete()),function(){try{if(o.clearFunction)return o.clearWithArgs?R(e,o.clearFunction,n,o,a.next.bind(a),a.error.bind(a)):R(e,o.clearFunction,[])}catch(l){console.warn("Unable to clear the previous observable watch for",e.constructor.getPluginName(),t),console.warn(l)}}})}(e,t,o,n):n.eventObservable&&n.event?function fe(e,t){return t=typeof window<"u"&&t?ee(window,t):t||(typeof window<"u"?window:{}),(0,F.R)(t,e)}(n.event,n.element):n.otherPromise?function Z(e,t,n,o){return void 0===o&&(o={}),H(function(a,f){var l=R(e,t,n,o);l?l.error?f(l.error):l.then&&l.then(a).catch(f):f({error:"unexpected_error"})})}(e,t,o,n):function de(e,t,n,o){void 0===o&&(o={});var a,f,l=H(function(g,p){a=o.destruct?R(e,t,n,o,function(){for(var y=[],h=0;h<arguments.length;h++)y[h]=arguments[h];return g(y)},function(){for(var y=[],h=0;h<arguments.length;h++)y[h]=arguments[h];return p(y)}):R(e,t,n,o,g,p),f=p});return a&&a.error&&(l.catch(function(){}),"function"==typeof f&&f(a.error)),l}(e,t,o,n)}},s=function(){function e(){}return e.installed=function(){return!0===q(this.pluginRef)},e.getPlugin=function(){return typeof window<"u"?function oe(e,t){for(var n=t.split("."),o=e,a=0;a<n.length;a++){if(!o)return null;o=o[n[a]]}return o}(window,this.pluginRef):null},e.getPluginName=function(){return this.pluginName},e.getPluginRef=function(){return this.pluginRef},e.getPluginInstallName=function(){return this.plugin},e.getSupportedPlatforms=function(){return this.platforms},e.pluginName="",e.pluginRef="",e.plugin="",e.repo="",e.platforms=[],e.install="",e}();function r(e,t,n,o){return re(e,t,n).apply(this,o)}!function ue(){if(typeof process>"u"){var e=typeof window<"u"?window:{},n=Date.now(),o=!1;e.document.addEventListener("deviceready",function(){console.log("Ionic Native: deviceready event fired after "+(Date.now()-n)+" ms"),o=!0}),setTimeout(function(){!o&&e.cordova&&console.warn("Ionic Native: deviceready did not fire within 5000ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.")},5e3)}}();var e,d=(e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,a){o.__proto__=a}||function(o,a){for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(o[f]=a[f])})(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.fromURL=function(n,o){return r(this,"fromURL",{otherPromise:!0},arguments)},t.prototype.fromData=function(n,o){return r(this,"fromData",{otherPromise:!0},arguments)},t.pluginName="PDFGenerator",t.plugin="cordova-pdf-generator",t.pluginRef="cordova.plugins.pdf",t.repo="https://github.com/cesarvr/pdf-generator",t.platforms=["Android","iOS"],t}(s),b=new C,S=(()=>(function(e){e.Documents="DOCUMENTS",e.Data="DATA",e.Library="LIBRARY",e.Cache="CACHE",e.External="EXTERNAL",e.ExternalStorage="EXTERNAL_STORAGE"}(S||(S={})),S))();const ie=(0,M.fo)("Filesystem",{web:()=>x.e(6364).then(x.bind(x,6364)).then(e=>new e.FilesystemWeb)});var E=x(8256);let ae=(()=>{class e{constructor(){}generatePDF(){return(0,P.Z)(function*(){return yield b.fromData('\n    <html>\n    <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>AAA - Comprobante de pago</title>\n    </head>\n    <body>\n    <header>\n        <h2>Tarjeta</h2>\n          <h1>Habitualista</h1>\n        </header>\n        <section>\n            <table>\n                <tr>\n                    <td>Comprobante:</td>\n                    <td>515</td>\n                </tr>\n                <tr>\n                    <td>Registro:</td>\n                    <td>55</td>\n                </tr>\n                <tr>\n                    <td>AAA:</td>\n                    <td>55</td>\n                </tr>\n                <tr>\n                    <td>Tarjeta:</td>\n                    <td>15</td>\n                </tr>\n                <tr>\n                    <td>Monto:</td>\n                    <td>15</td>\n                </tr>\n                <tr>\n                    <td>Fecha:</td>\n                    <td>ads</td>\n                </tr>\n                <tr>\n                    <td>Motivo:</td>\n                    <td>sd</td>\n                </tr>\n                <tr>\n                    <td>Referencia:</td>\n                    <td>dsad</td>\n                </tr>\n            </table>\n        </section>\n    </body>\n    <style>\n    body {\n        margin: 0;\n        width: 100%;\n        height: 100%;\n        background: #f4f5f8;\n        padding: 2rem 1rem;\n        box-sizing: border-box;\n        font-family: system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\n      }\n\n      body header {\n          height: 10%;\n          background: #0e80a4;\n          color: #f4f5f8;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          border-radius: 8px 8px 0 0;\n      }\n\n      body header h1 {\n          margin: 0;\n          text-transform: uppercase;\n          font-size: 1.4rem;\n      }\n\n      body header h2 {\n          margin: 0;\n          font-size: 1.3rem;\n      }\n\n      body section {\n          height: 90%;\n          display: grid;\n          place-items: center;\n          grid-template-rows: 83% 17%;\n          border: 1px solid #0e80a4;\n          border-radius: 0 0 8px 8px;\n      }\n\n      body section .info {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n      }\n\n      body section .info p {\n          text-align: center;\n      }\n\n      body section table {\n          display: grid;\n          place-items: center;\n          width: 100%;\n          height: 100%;\n          max-width: 100%;\n          align-self: center;\n          overflow: hidden;\n      }\n\n      body section table tbody {\n          width: 100%;\n      }\n\n      body section table tr {\n          display: grid;\n          grid-template-columns: 40% 60%;\n          min-height: 3rem;\n          max-height: 4rem;\n          font-size: 1.2rem;\n          border-bottom: 1px solid #CCC;\n          margin: 0.5rem 5% 0 5%;\n          overflow: hidden;\n      }\n\n      body section table tr td:first-child {\n          display: flex;\n          align-items: flex-start;\n          justify-content: flex-start;\n          font-weight: bold;\n          color: #0e80a4;\n      }\n\n      body section table tbody tr td:last-child {\n          color: #6d6d6d;\n          text-align: left;\n          overflow: hidden;\n          text-overflow: ellipsis;\n      }\n    </style>\n    </html>',{documentSize:"A4",type:"base64",fileName:"Comprobante de pago"}).then(a=>a).catch(a=>console.log(a))})()}share(){var n=this;return(0,P.Z)(function*(){const o=yield n.generatePDF();if(console.log("paymentPDF",o),o){const a=yield ie.writeFile({path:"PDF-comprobante-12.pdf",data:o,directory:S.Cache});console.log("filePDF",a),a.uri&&(yield j.canShare().then(function(){var f=(0,P.Z)(function*(l){l.value&&(yield j.share({title:"A",text:"Comprobante de pago N\xba",url:a.uri,dialogTitle:"Compartir con"}).catch(g=>{console.log("ERROR EN FUNCTION SHARE (plugin): ",g)}))});return function(l){return f.apply(this,arguments)}}()).catch(f=>{console.log("ERROR EN FUNCTION CAN SHARE (plugin): ",f)}))}})()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=E.Xpm({type:e,selectors:[["app-tab1"]],standalone:!0,features:[E.jDz],decls:12,vars:2,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["name","Tab 1 page"],[3,"click"]],template:function(n,o){1&n&&(E.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),E._uU(3," Tab 1 "),E.qZA()()(),E.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),E._uU(8,"Tab 1"),E.qZA()()(),E._UZ(9,"app-explore-container",4),E.TgZ(10,"ion-button",5),E.NdJ("click",function(){return o.share()}),E._uU(11,"Share Something!"),E.qZA()()),2&n&&(E.Q6J("translucent",!0),E.xp6(4),E.Q6J("fullscreen",!0))},dependencies:[O.Pc,O.YG,O.W2,O.Gu,O.wd,O.sr,ce.Z]}),e})()}}]);