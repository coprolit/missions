!function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function a(t){let e;return c(t,t=>e=t)(),e}function l(t,e,n){t.$$.on_destroy.push(c(e,n))}function u(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function f(t,e,n,o,r,i,s){const c=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,i);if(c){const r=u(e,n,o,s);t.p(r,c)}}function d(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function y(){return g(" ")}function b(){return g("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e,n){t.classList[n?"add":"remove"](e)}let v;function _(t){v=t}function x(){if(!v)throw new Error("Function called outside component initialization");return v}function k(t,e){x().$$.context.set(t,e)}function P(t){return x().$$.context.get(t)}const E=[],O=[],j=[],L=[],C=Promise.resolve();let S=!1;function I(){S||(S=!0,C.then(T))}function M(t){j.push(t)}let F=!1;const R=new Set;function T(){if(!F){F=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];_(e),D(e.$$)}for(_(null),E.length=0;O.length;)O.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];R.has(e)||(R.add(e),e())}j.length=0}while(E.length);for(;L.length;)L.pop()();S=!1,F=!1,R.clear()}}function D(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const A=new Set;let q;function B(){q={r:0,c:[],p:q}}function N(){q.r||r(q.c),q=q.p}function U(t,e){t&&t.i&&(A.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),q.c.push(()=>{A.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const H="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function K(t,e){t.d(1),e.delete(t.key)}function V(t,e){z(t,1,1,()=>{e.delete(t.key)})}function J(t,e,n,o,r,i,s,c,a,l,u,f){let d=t.length,p=i.length,m=d;const h={};for(;m--;)h[t[m].key]=m;const g=[],y=new Map,b=new Map;for(m=p;m--;){const t=f(r,i,m),c=n(t);let a=s.get(c);a?o&&a.p(t,e):(a=l(c,t),a.c()),y.set(c,g[m]=a),c in h&&b.set(c,Math.abs(m-h[c]))}const $=new Set,w=new Set;function v(t){U(t,1),t.m(c,u),s.set(t.key,t),u=t.first,p--}for(;d&&p;){const e=g[p-1],n=t[d-1],o=e.key,r=n.key;e===n?(u=e.first,d--,p--):y.has(r)?!s.has(o)||$.has(o)?v(e):w.has(r)?d--:b.get(o)>b.get(r)?(w.add(o),v(e)):($.add(r),d--):(a(n,s),d--)}for(;d--;){const e=t[d];y.has(e.key)||a(e,s)}for(;p;)v(g[p-1]);return g}function Y(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],c=e[i];if(c){for(const t in s)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[i]=c}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function G(t){return"object"==typeof t&&null!==t?t:{}}function Q(t){t&&t.c()}function W(t,e,o){const{fragment:s,on_mount:c,on_destroy:a,after_update:l}=t.$$;s&&s.m(e,o),M(()=>{const e=c.map(n).filter(i);a?a.push(...e):r(e),t.$$.on_mount=[]}),l.forEach(M)}function Z(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,n,i,s,c,a,l=[-1]){const u=v;_(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l,skip_bound:!1};let p=!1;if(d.ctx=i?i(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&function(t,e){-1===t.$$.dirty[0]&&(E.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n}):[],d.update(),p=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(m)}else d.fragment&&d.fragment.c();n.intro&&U(e.$$.fragment),W(e,n.target,n.anchor),T()}_(u)}class tt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=[];function nt(e,n=t){let o;const r=[];function i(t){if(s(e,t)&&(e=t,o)){const t=!et.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,c=t){const a=[s,c];return r.push(a),1===r.length&&(o=n(i)||t),s(e),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function ot(e,n,o){const s=!Array.isArray(e),a=s?[e]:e,l=n.length<2;return{subscribe:nt(o,e=>{let o=!1;const u=[];let f=0,d=t;const p=()=>{if(f)return;d();const o=n(s?u[0]:u,e);l?e(o):d=i(o)?o:t},m=a.map((t,e)=>c(t,t=>{u[e]=t,f&=~(1<<e),o&&p()},()=>{f|=1<<e}));return o=!0,p(),function(){r(m),d()}}).subscribe}}var rt={queryHandler:{parse:t=>{return e=new URLSearchParams(t),[...e].reduce((t,[e,n])=>(t[e]=n,t),{});var e},stringify:t=>"?"+new URLSearchParams(t).toString()},urlTransform:{apply:t=>t,remove:t=>t},useHash:!1};const it=RegExp(/\:([^/()]+)/g);function st(t){if(navigator.userAgent.includes("jsdom"))return!1;!function t(e){e&&e.scrollTo&&"scroll-lock"!==e.dataset.routify&&"lock"!==e.dataset["routify-scroll"]&&(e.style["scroll-behavior"]="auto",e.scrollTo({top:0,behavior:"auto"}),e.style["scroll-behavior"]="",t(e.parentElement))}(t),function(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:t}=window.location;if(t){if(/^[A-Za-z]+[\w\-\:\.]*$/.test(t.substring(1))){const e=document.querySelector(t);e&&e.scrollIntoView()}}}()}const ct=t=>{const e=[];let n;for(;n=it.exec(t);)e.push(n[1]);return e};let at=!1;function lt(){const t=function(){const t=window.location.search.match(/__routify_path=([^&]+)/),e=window.location.search.match(/__routify_prefetch=\d+/);window.routify=window.routify||{},window.routify.prefetched=!!e;return t&&t[1].replace(/[#?].+/,"")}();return t||(rt.useHash?window.location.hash.replace(/#/,""):window.location.pathname)}window.routify=window.routify||{};const ut=nt(null),ft=nt([]);ft.subscribe(t=>window.routify.routes=t);let dt=nt({component:{params:{}}});const pt=nt(null);function mt(t){t=rt.urlTransform.remove(t);const e=a(ft),n=e.find(e=>t===e.meta.name)||e.find(e=>t.match("^"+e.regex));if(!n)throw new Error(`Route could not be found for "${t}".`);const o=t;if(rt.queryHandler&&(n.params=rt.queryHandler.parse(window.location.search)),n.paramKeys){const t=function(t){const e=[];return t.forEach(t=>{e[t.path.split("/").filter(Boolean).length-1]=t}),e}(n.layouts),e=o.split("/").filter(Boolean);(function(t){return t.split("/").filter(Boolean).map(t=>t.match(/\:(.+)/)).map(t=>t&&t[1])})(n.path).forEach((o,r)=>{o&&(n.params[o]=e[r],t[r]?t[r].param={[o]:e[r]}:n.param={[o]:e[r]})})}return n.leftover=t.replace(new RegExp(n.regex),""),n}function ht(t,e,n){const o=t.slice();return o[1]=e[n],o}function gt(t,e){let n,o;return{key:t,first:null,c(){n=h("iframe"),n.src!==(o=e[1].url)&&$(n,"src",o),$(n,"frameborder","0"),$(n,"title","routify prefetcher"),this.first=n},m(t,e){p(t,n,e)},p(t,e){1&e&&n.src!==(o=t[1].url)&&$(n,"src",o)},d(t){t&&m(n)}}}function yt(e){let n,o=[],r=new Map,i=e[0];const s=t=>t[1].options.prefetch;for(let t=0;t<i.length;t+=1){let n=ht(e,i,t),c=s(n);r.set(c,o[t]=gt(c,n))}return{c(){n=h("div");for(let t=0;t<o.length;t+=1)o[t].c();$(n,"id","__routify_iframes"),function(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}(n,"display","none")},m(t,e){p(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){if(1&e){const i=t[0];o=J(o,e,s,1,t,i,r,n,K,gt,null,ht)}},i:t,o:t,d(t){t&&m(n);for(let t=0;t<o.length;t+=1)o[t].d()}}}const bt=nt([]),$t=ot(bt,t=>t.slice(0,2));function wt(t){const e=t.data?t.data.prefetchId:t;if(!e)return null;const n=a(bt).find(t=>t&&t.options.prefetch==e);if(n){const{gracePeriod:t}=n.options,o=new Promise(e=>setTimeout(e,t)),r=new Promise(e=>{window.requestIdleCallback?window.requestIdleCallback(e):setTimeout(e,t+1e3)});Promise.all([o,r]).then(()=>{bt.update(t=>t.filter(t=>t.options.prefetch!=e))})}}function vt(t,e,n){let o;return l(t,$t,t=>n(0,o=t)),[o]}$t.subscribe(t=>t.forEach(({options:t})=>{setTimeout(()=>wt(t.prefetch),t.timeout)})),addEventListener("message",wt,!1);class _t extends tt{constructor(t){super(),X(this,t,vt,yt,s,{})}}function xt(){return P("routify")||dt}const kt={subscribe:t=>ot(xt(),t=>t.layout.api).subscribe(t)},Pt={_hooks:[],subscribe:Ot},Et={_hooks:[],subscribe:Ot};function Ot(t){const e=this._hooks,n=e.length;return t(t=>{e[n]=t}),()=>delete e[n]}const jt={subscribe:t=>ot([xt(),ut,ft],t=>function(t,e,n){return function(o,r,i){const{component:s}=t;let c=o&&o.nodeType&&o;c&&(o=o.getAttribute("href")),o=function(t){if(t)if(t.match(/^\.\.?\//)){let[,e,n]=t.match(/^([\.\/]+)(.*)/),o=s.path.replace(/\/$/,"");const r=e.match(/\.\.\//g)||[];s.isPage&&r.push(null),r.forEach(()=>o=o.replace(/\/[^\/]+\/?$/,"")),t=(t=`${o}/${n}`.replace(/\/$/,""))||"/"}else if(t.match(/^\//));else{const e=n.find(e=>e.meta.name===t);e&&(t=e.shortPath)}else t=s.shortPath;return t}(o);i&&!1!==i.strict||(o=o.replace(/index$/,""));let a=l(o,r);return c?(c.href=a,{update(t){c.href=l(o,t)}}):rt.urlTransform.apply(a);function l(t,n){const o=function(t,n){const o=Object.assign({},e.params,s.params,n);let r=t;for(const[t,e]of Object.entries(o))r=r.replace(":"+t,e);return(r+function(t,e){if(!rt.queryHandler)return"";const n=ct(t),o={};e&&Object.entries(e).forEach(([t,e])=>{n.includes(t)||(o[t]=e)});return rt.queryHandler.stringify(o)}(t,n)).replace(/\?$/,"")}(t,n);return rt.useHash?"#"+o:o}}}(...t)).subscribe(t)};const Lt={subscribe:t=>ot([jt,ut],([t,e])=>function(n="",o={},{strict:r}={strict:!0}){n=t(n,null,{strict:r});const i=t(e.path,null,{strict:r}),s=new RegExp("^"+n+"($|/)");return!!i.match(s)}).subscribe(t)},Ct={props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(t,e)=>[t,(Ct.getLongest(Ct.templates,t)||(t=>t))(e)]},{name:"createMeta",condition:()=>!0,action(t,e){Ct.writeMeta(t,e)}},{name:"createOG",condition:t=>!t.match(":"),action(t,e){Ct.writeMeta("og:"+t,e)}},{name:"createTitle",condition:t=>"title"===t,action(t,e){document.title=e}}],getLongest(t,e){const n=t[e];if(n){const o=a(ut).path;return n[Object.keys(t[e]).filter(t=>o.includes(t)).sort((t,e)=>e.length-t.length)[0]]}},writeMeta(t,e){const n=document.getElementsByTagName("head")[0],o=t.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:i,valueField:s}=St.services[r]||St.services.plain,c=document.querySelector(`meta[${i}='${t}']`);c&&c.remove();const a=document.createElement("meta");a.setAttribute(i,t),a.setAttribute(s,e),a.setAttribute("data-origin","routify"),n.appendChild(a)},set(t,e){Ct.plugins.forEach(n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])})},clear(){const t=document.querySelector("meta");t&&t.remove()},template(t,e){const n=Ct.getOrigin();Ct.templates[t]=Ct.templates[t]||{},Ct.templates[t][n]=e},update(){Object.keys(Ct.props).forEach(t=>{let e=Ct.getLongest(Ct.props,t);Ct.plugins.forEach(n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])})})},batchedUpdate(){Ct._pendingUpdate||(Ct._pendingUpdate=!0,setTimeout(()=>{Ct._pendingUpdate=!1,this.update()}))},_updateQueued:!1,getOrigin(){const t=xt();return t&&a(t).path||"/"},_pendingUpdate:!1},St=new Proxy(Ct,{set(t,e,n,o){const{props:r,getOrigin:i}=t;return Reflect.has(t,e)?Reflect.set(t,e,n,o):(r[e]=r[e]||{},r[e][i()]=n),window.routify.appLoaded&&t.batchedUpdate(),!0}});!function(){const t=nt(!0);Et.subscribe(e=>e(e=>t.set(!0)||!0)),Pt.subscribe(e=>e(e=>t.set(!1)))}();function It(t,e,n){const o=t.slice();return o[18]=e[n].component,o[19]=e[n].componentFile,o}function Mt(t,e,n){const o=t.slice();return o[18]=e[n].component,o[19]=e[n].componentFile,o}function Ft(t){let e,n,o,r;const i=[Tt,Rt],s=[];function c(t,e){return!1===t[6].component.isLayout?0:t[5].length?1:-1}return~(e=c(t))&&(n=s[e]=i[e](t)),{c(){n&&n.c(),o=b()},m(t,n){~e&&s[e].m(t,n),p(t,o,n),r=!0},p(t,r){let a=e;e=c(t),e===a?~e&&s[e].p(t,r):(n&&(B(),z(s[a],1,1,()=>{s[a]=null}),N()),~e?(n=s[e],n||(n=s[e]=i[e](t),n.c()),U(n,1),n.m(o.parentNode,o)):n=null)},i(t){r||(U(n),r=!0)},o(t){z(n),r=!1},d(t){~e&&s[e].d(t),t&&m(o)}}}function Rt(t){let e,n,o=[],r=new Map,i=[t[6]];const s=t=>t[18].path;for(let e=0;e<1;e+=1){let n=It(t,i,e),c=s(n);r.set(c,o[e]=At(c,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=b()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);p(t,e,r),n=!0},p(t,n){if(50331767&n){const i=[t[6]];B(),o=J(o,n,s,1,t,i,r,e.parentNode,V,At,e,It),N()}},i(t){if(!n){for(let t=0;t<1;t+=1)U(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)z(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&m(e)}}}function Tt(t){let e,n,o=[],r=new Map,i=[t[6]];const s=t=>function(t){const e=t.meta&&t.meta["param-is-page"]?JSON.stringify(t.param):"";return t.path+e}(t[18]);for(let e=0;e<1;e+=1){let n=Mt(t,i,e),c=s(n);r.set(c,o[e]=qt(c,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=b()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);p(t,e,r),n=!0},p(t,n){if(85&n){const i=[t[6]];B(),o=J(o,n,s,1,t,i,r,e.parentNode,V,qt,e,Mt),N()}},i(t){if(!n){for(let t=0;t<1;t+=1)U(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)z(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&m(e)}}}function Dt(t){let e,n,o;return e=new zt({props:{layouts:[...t[5]],Decorator:void 0!==t[25]?t[25]:t[1],childOfDecorator:t[4].isDecorator,scoped:{...t[0],...t[24]}}}),{c(){Q(e.$$.fragment),n=y()},m(t,r){W(e,t,r),p(t,n,r),o=!0},p(t,n){const o={};32&n&&(o.layouts=[...t[5]]),33554434&n&&(o.Decorator=void 0!==t[25]?t[25]:t[1]),16&n&&(o.childOfDecorator=t[4].isDecorator),16777217&n&&(o.scoped={...t[0],...t[24]}),e.$set(o)},i(t){o||(U(e.$$.fragment,t),o=!0)},o(t){z(e.$$.fragment,t),o=!1},d(t){Z(e,t),t&&m(n)}}}function At(t,n){let o,r,i,s;const c=[{scoped:n[0]},{scopedSync:n[2]},n[4].param||{}];var a=n[19];function l(t){let n={$$slots:{default:[Dt,({scoped:t,decorator:e})=>({24:t,25:e}),({scoped:t,decorator:e})=>(t?16777216:0)|(e?33554432:0)]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)n=e(n,c[t]);return{props:n}}return a&&(r=new a(l(n))),{key:t,first:null,c(){o=b(),r&&Q(r.$$.fragment),i=b(),this.first=o},m(t,e){p(t,o,e),r&&W(r,t,e),p(t,i,e),s=!0},p(t,e){const n=21&e?Y(c,[1&e&&{scoped:t[0]},4&e&&{scopedSync:t[2]},16&e&&G(t[4].param||{})]):{};if(117440563&e&&(n.$$scope={dirty:e,ctx:t}),a!==(a=t[19])){if(r){B();const t=r;z(t.$$.fragment,1,0,()=>{Z(t,1)}),N()}a?(r=new a(l(t)),Q(r.$$.fragment),U(r.$$.fragment,1),W(r,i.parentNode,i)):r=null}else a&&r.$set(n)},i(t){s||(r&&U(r.$$.fragment,t),s=!0)},o(t){r&&z(r.$$.fragment,t),s=!1},d(t){t&&m(o),t&&m(i),r&&Z(r,t)}}}function qt(t,n){let o,r,i,s;const c=[{scoped:n[0]},{scopedSync:n[2]},n[4].param||{}];var a=n[19];function l(t){let n={};for(let t=0;t<c.length;t+=1)n=e(n,c[t]);return{props:n}}return a&&(r=new a(l())),{key:t,first:null,c(){o=b(),r&&Q(r.$$.fragment),i=b(),this.first=o},m(t,e){p(t,o,e),r&&W(r,t,e),p(t,i,e),s=!0},p(t,e){const n=21&e?Y(c,[1&e&&{scoped:t[0]},4&e&&{scopedSync:t[2]},16&e&&G(t[4].param||{})]):{};if(a!==(a=t[19])){if(r){B();const t=r;z(t.$$.fragment,1,0,()=>{Z(t,1)}),N()}a?(r=new a(l()),Q(r.$$.fragment),U(r.$$.fragment,1),W(r,i.parentNode,i)):r=null}else a&&r.$set(n)},i(t){s||(r&&U(r.$$.fragment,t),s=!0)},o(t){r&&z(r.$$.fragment,t),s=!1},d(t){t&&m(o),t&&m(i),r&&Z(r,t)}}}function Bt(e){let n,o,r,s;return{c(){n=h("span")},m(c,a){var l;p(c,n,a),r||(l=o=e[8].call(null,n),s=l&&i(l.destroy)?l.destroy:t,r=!0)},d(t){t&&m(n),r=!1,s()}}}function Nt(t){let e,n,o,r=t[6]&&Ft(t),i=!t[3]&&Bt(t);return{c(){r&&r.c(),e=y(),i&&i.c(),n=b()},m(t,s){r&&r.m(t,s),p(t,e,s),i&&i.m(t,s),p(t,n,s),o=!0},p(t,[o]){t[6]?r?(r.p(t,o),64&o&&U(r,1)):(r=Ft(t),r.c(),U(r,1),r.m(e.parentNode,e)):r&&(B(),z(r,1,1,()=>{r=null}),N()),t[3]?i&&(i.d(1),i=null):i||(i=Bt(t),i.c(),i.m(n.parentNode,n))},i(t){o||(U(r),o=!0)},o(t){z(r),o=!1},d(t){r&&r.d(t),t&&m(e),i&&i.d(t),t&&m(n)}}}function Ut(t,e,n){let o,r;l(t,ut,t=>n(13,o=t));let i,{layouts:s=[]}=e,{scoped:c={}}=e,{Decorator:u=null}=e,{childOfDecorator:f=!1}=e,{isRoot:d=!1}=e,p={},m=!1,h=null,g=[];const y=nt(null);l(t,y,t=>n(6,r=t));const b=P("routify");function $(t){const e=a(b);n(2,p={...c}),0===g.length&&async function(){await(I(),C),st(i);const t=r.component.path===o.path;!window.routify.stopAutoReady&&t&&async function({page:t,metatags:e,afterPageLoad:n}){const{path:o}=t,r=window.location.search.match(/__routify_prefetch=(\d+)/),i=r&&r[1];for(const e of n._hooks)e&&await e(t.api);e.update(),dispatchEvent(new CustomEvent("app-loaded")),parent.postMessage({msg:"app-loaded",prefetched:window.routify.prefetched,path:o,prefetchId:i},"*"),window.routify.appLoaded=!0,window.routify.stopAutoReady=!1}({page:r.component,metatags:St,afterPageLoad:Pt})}();const s={layout:m?e.layout:h,component:h,route:o,componentFile:t,child:m?e.child:a(y)&&a(y).child};y.set(s),d&&dt.set(s),e&&!m&&b.update(t=>(t.child=h||t.child,t))}return m=u&&!f,k("routify",y),t.$$set=t=>{"layouts"in t&&n(9,s=t.layouts),"scoped"in t&&n(0,c=t.scoped),"Decorator"in t&&n(1,u=t.Decorator),"childOfDecorator"in t&&n(10,f=t.childOfDecorator),"isRoot"in t&&n(11,d=t.isRoot)},t.$$.update=()=>{if(4610&t.$$.dirty&&m){const t={component:()=>u,path:s[0].path+"__decorator",isDecorator:!0};n(9,s=[t,...s])}512&t.$$.dirty&&n(4,[h,...g]=s,h,(n(5,g),n(9,s),n(12,m),n(1,u))),16&t.$$.dirty&&function(t){let e=t.component();e instanceof Promise?e.then($):$(e)}(h)},[c,u,p,i,h,g,r,y,function(t){n(3,i=t.parentElement)},s,f,d]}class zt extends tt{constructor(t){super(),X(this,t,Ut,Nt,s,{layouts:9,scoped:0,Decorator:1,childOfDecorator:10,isRoot:11})}}function Ht(t,e){let n=!1;function o(t,o){const r=mt(t||lt()),i=[...(o&&mt(lt())||r).layouts,r];n&&delete n.last,r.last=n,n=r,t||pt.set(r),ut.set(r),e(i)}const r=function(t){["pushState","replaceState"].forEach(t=>{const e=history[t];history[t]=async function(n={},o,r){const{id:i,path:s,params:c}=a(ut);n={id:i,path:s,params:c,...n};const l=new Event(t.toLowerCase());if(Object.assign(l,{state:n,title:o,url:r}),await Vt(l))return e.apply(this,[n,o,r]),dispatchEvent(l)}});let e=!1;const n={click:Kt,pushstate:()=>t(),replacestate:()=>t(),popstate:async n=>{e?e=!1:await Vt(n)?t():(e=!0,n.preventDefault(),history.go(1))}};Object.entries(n).forEach(t=>addEventListener(...t));return()=>{Object.entries(n).forEach(t=>removeEventListener(...t))}}(o);return{updatePage:o,destroy:r}}function Kt(t){const e=t.target.closest("a"),n=e&&e.getAttribute("href");t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button||t.defaultPrevented||n&&!e.target&&e.host===location.host&&(t.preventDefault(),history.pushState({},"",n))}async function Vt(t){const e=a(ut);for(const n of Et._hooks.filter(Boolean)){if(!await n(t,e))return!1}return!0}function Jt(t){let e,n;return e=new zt({props:{layouts:t[0],isRoot:!0}}),{c(){Q(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.layouts=t[0]),e.$set(o)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function Yt(t){let e,n,o,r=t[0]&&null!==t[1]&&Jt(t);return n=new _t({}),{c(){r&&r.c(),e=y(),Q(n.$$.fragment)},m(t,i){r&&r.m(t,i),p(t,e,i),W(n,t,i),o=!0},p(t,[n]){t[0]&&null!==t[1]?r?(r.p(t,n),3&n&&U(r,1)):(r=Jt(t),r.c(),U(r,1),r.m(e.parentNode,e)):r&&(B(),z(r,1,1,()=>{r=null}),N())},i(t){o||(U(r),U(n.$$.fragment,t),o=!0)},o(t){z(r),z(n.$$.fragment,t),o=!1},d(t){r&&r.d(t),t&&m(e),Z(n,t)}}}function Gt(t,e,n){let o;l(t,ut,t=>n(1,o=t));let r,i,{routes:s}=e,{config:c={}}=e;window.routify=window.routify||{},window.routify.inBrowser=!window.navigator.userAgent.match("jsdom"),Object.entries(c).forEach(([t,e])=>{rt[t]=e}),function(){if(at)return;const t=console.warn;console.warn=function(e,...n){if(!["was created with unknown prop 'scoped'","was created with unknown prop 'scopedSync'"].find(t=>e.includes(t)))return t(e,...n)},at=!0}();k("routifyupdatepage",(...t)=>i&&i.updatePage(...t));const a=t=>n(0,r=t),u=()=>{i&&(i.destroy(),i=null)};let f=null;var d;return d=u,x().$$.on_destroy.push(d),t.$$set=t=>{"routes"in t&&n(2,s=t.routes),"config"in t&&n(3,c=t.config)},t.$$.update=()=>{4&t.$$.dirty&&s&&(clearTimeout(f),f=setTimeout(()=>{u(),i=Ht(0,a),ft.set(s),i.updatePage()}))},[r,o,s,c]}class Qt extends tt{constructor(t){super(),X(this,t,Gt,Yt,s,{routes:2,config:3})}}function Wt(t){const e=async function(e){return await async function t(e,n){const o=await e(n);if(!1===o)return!1;const r=o||n.file;if(r.children){const o=await Promise.all(r.children.map(async o=>t(e,{state:n.state,scope:Zt(n.scope||{}),parent:n.file,file:await o})));r.children=o.filter(Boolean)}return r}(t,{file:e.tree,state:{treePayload:e},scope:{}})};return e.sync=function(e){return function t(e,n){const o=e(n);if(!1===o)return!1;const r=o||n.file;if(r.children){const o=r.children.map(o=>t(e,{state:n.state,scope:Zt(n.scope||{}),parent:n.file,file:o}));r.children=o.filter(Boolean)}return r}(t,{file:e.tree,state:{treePayload:e},scope:{}})},e}function Zt(t){return JSON.parse(JSON.stringify(t))}const Xt=Wt(({file:t})=>{(t.isPage||t.isFallback)&&(t.regex=((t,e)=>{const n=e?"":"/?$";return t=(t=(t=t.replace(/\/_fallback?$/,"(/|$)")).replace(/\/index$/,"(/index)?")).replace(it,"([^/]+)")+n})(t.path,t.isFallback))}),te=Wt(({file:t})=>{t.paramKeys=ct(t.path)}),ee=Wt(({file:t})=>{t.isFallback||t.isIndex?t.shortPath=t.path.replace(/\/[^/]+$/,""):t.shortPath=t.path}),ne=Wt(({file:t})=>{t.ranking=(({path:t})=>t.split("/").filter(Boolean).map(t=>"_fallback"===t?"A":t.startsWith(":")?"B":"C").join(""))(t)}),oe=Wt(({file:t})=>{const e=t,n=t.meta&&t.meta.children||[];n.length&&(e.children=e.children||[],e.children.push(...n.map(t=>({isMeta:!0,...t,meta:t}))))}),re=Wt(t=>{const{file:e}=t,{isFallback:n,meta:o}=e;e.isIndexable=!n&&!1!==o.index,e.isNonIndexable=!e.isIndexable}),ie=Wt(({file:t,parent:e})=>{Object.defineProperty(t,"parent",{get:()=>e}),Object.defineProperty(t,"nextSibling",{get:()=>se(t,1)}),Object.defineProperty(t,"prevSibling",{get:()=>se(t,-1)}),Object.defineProperty(t,"lineage",{get:()=>function t(e,n=[]){e&&(n.unshift(e),t(e.parent,n));return n}(e)})});function se(t,e){if(!t.root){const n=t.parent.children.filter(t=>t.isIndexable),o=n.indexOf(t);return n[o+e]}}const ce=Wt(({file:t,parent:e})=>{t.isIndex&&Object.defineProperty(e,"index",{get:()=>t})}),ae=Wt(({file:t,scope:e})=>{Object.defineProperty(t,"layouts",{get:()=>function t(e){const{parent:n}=e,o=n&&n.component&&n,r=o&&o.isReset,i=n&&!r&&t(n)||[];o&&i.push(o);return i}(t)})}),le=Wt(({file:t})=>{const e=t.root?function(){}:t.children?(t.isFile,function(){}):(t.isReset||t.isLayout||t.isFallback,function(){});Object.setPrototypeOf(t,e.prototype)});var ue=Object.freeze({__proto__:null,setRegex:Xt,setParamKeys:te,setShortPath:ee,setRank:ne,addMetaChildren:oe,setIsIndexable:re,assignRelations:ie,assignIndex:ce,assignLayout:ae,createFlatList:t=>{Wt(t=>{(t.file.isPage||t.file.isFallback)&&t.state.treePayload.routes.push(t.file)}).sync(t),t.routes.sort((t,e)=>t.ranking>=e.ranking?-1:1)},setPrototype:le});const fe=Wt(({file:t})=>{t.api=new de(t)});class de{constructor(t){this.__file=t,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!t.isMeta,this.path=t.path,this.title=function(t){return void 0!==t.meta.title?t.meta.title:(t.shortPath||t.path).split("/").pop().replace(/-/g," ")}(t),this.meta=t.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter(t=>!t.isNonIndexable).sort((t,e)=>t.isMeta&&e.isMeta?0:(t=(t.meta.index||t.meta.title||t.path).toString(),e=(e.meta.index||e.meta.title||e.path).toString(),t.localeCompare(e,void 0,{numeric:!0,sensitivity:"base"}))).map(({api:t})=>t)}get next(){return pe(this,1)}get prev(){return pe(this,-1)}preload(){this.__file.layouts.forEach(t=>t.component()),this.__file.component()}}function pe(t,e){if(!t.__file.root){const n=t.parent.children.indexOf(t);return t.parent.children[n+e]}}const me={...ue,assignAPI:fe};const he={name:"_folder",filepath:"/_folder.svelte",root:!0,ownMeta:{},absolutePath:"/home/runner/work/missions/missions/src/pages/_folder.svelte",children:[{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!0,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/_fallback",id:"__fallback",component:()=>Promise.resolve().then((function(){return ve})).then(t=>t.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!0,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/index",id:"_index",component:()=>Promise.resolve().then((function(){return Oe})).then(t=>t.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/mission-01",id:"_mission01",component:()=>Promise.resolve().then((function(){return Le})).then(t=>t.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/mission-02",id:"_mission02",component:()=>Promise.resolve().then((function(){return Se})).then(t=>t.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/mission-03",id:"_mission03",component:()=>Promise.resolve().then((function(){return Me})).then(t=>t.default)}],isLayout:!0,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,isFile:!0,file:"_folder.svelte",ext:"svelte",badExt:!1,importPath:"../src/pages/_folder.svelte",meta:{recursive:!0,preload:!1,prerender:!0},path:"/",id:"__folder",component:()=>Promise.resolve().then((function(){return Ae})).then(t=>t.default)},{tree:ge,routes:ye}=function(t){const e=["setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:t,routes:[]};for(let t of e){(me[t].sync||me[t])(n)}return n}(he);function be(e){let n,o;return n=new Qt({props:{routes:ye}}),{c(){Q(n.$$.fragment)},m(t,e){W(n,t,e),o=!0},p:t,i(t){o||(U(n.$$.fragment,t),o=!0)},o(t){z(n.$$.fragment,t),o=!1},d(t){Z(n,t)}}}!function(t,e={target:document.body},n="hmr",o="app-loaded"){const r=document.getElementById(n),i=document.createElement("div");r?i.style.visibility="hidden":i.setAttribute("id",n),e.target.appendChild(i),addEventListener(o,(function(){r&&r.remove();i.style.visibility="initial",i.setAttribute("id",n)})),new t({...e,target:i})}(class extends tt{constructor(t){super(),X(this,t,null,be,s,{})}},{target:document.body},"routify-app");function $e(e){let n,o,r,i,s,c,a,l;return{c(){n=h("div"),o=h("div"),o.textContent="404",r=y(),i=h("div"),s=g("Page not found. \n  \n  "),c=h("a"),a=g("Go back"),$(o,"class","huge svelte-33l10e"),$(c,"href",l=e[0]("../")),$(i,"class","big"),$(n,"class","e404 svelte-33l10e")},m(t,e){p(t,n,e),d(n,o),d(n,r),d(n,i),d(i,s),d(i,c),d(c,a)},p(t,[e]){1&e&&l!==(l=t[0]("../"))&&$(c,"href",l)},i:t,o:t,d(t){t&&m(n)}}}function we(t,e,n){let o;return l(t,jt,t=>n(0,o=t)),[o]}var ve=Object.freeze({__proto__:null,default:class extends tt{constructor(t){super(),X(this,t,we,$e,s,{})}}});const{document:_e}=H;function xe(e){let n,o,r,i,s,c,a,l,u,f,g,b,w,v,_,x,k,P,E,O,j,L;return{c(){n=h("script"),r=h("base"),i=y(),s=h("h1"),s.textContent="Bolt Action side missions generator",c=y(),a=h("form"),l=h("label"),l.textContent="Player #1",u=y(),f=h("input"),g=y(),b=h("br"),w=y(),v=h("label"),v.textContent="Player #2",_=y(),x=h("input"),k=y(),P=h("br"),E=y(),O=h("input"),n.src!==(o="https://smtpjs.com/v3/smtp.js")&&$(n,"src","https://smtpjs.com/v3/smtp.js"),$(r,"href","/"),$(l,"for","email1"),$(f,"type","email"),$(f,"name","email1"),$(f,"pattern",ke),$(f,"title","player 1 email address"),f.required=!0,$(f,"placeholder","Enter email"),$(v,"for","email2"),$(x,"type","email"),$(x,"name","email2"),$(x,"pattern",ke),$(x,"title","player 2 email address"),x.required=!0,$(x,"placeholder","Enter email"),$(O,"type","submit")},m(t,e){var o;d(_e.head,n),d(_e.head,r),p(t,i,e),p(t,s,e),p(t,c,e),p(t,a,e),d(a,l),d(a,u),d(a,f),d(a,g),d(a,b),d(a,w),d(a,v),d(a,_),d(a,x),d(a,k),d(a,P),d(a,E),d(a,O),j||(L=function(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}(a,"submit",(o=Pe,function(t){return t.preventDefault(),o.call(this,t)})),j=!0)},p:t,i:t,o:t,d(t){m(n),m(r),t&&m(i),t&&m(s),t&&m(c),t&&m(a),j=!1,L()}}}const ke="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";function Pe(t){const e=Array.from(document.querySelectorAll("a")).filter(t=>t.href.includes("mission")).map(t=>t.href),n=e[(o=e.length,Math.floor(Math.random()*Math.floor(o)))];var o;Email.send({SecureToken:"0b6eed09-ca2b-41ed-9283-2d33686b5dd2",To:t.target.email1.value,From:"missions@philippesimpson.dk",Subject:"You have been assigned a secret side mission",Body:`See your mission <a href=${n}>here</a>`}).then(t=>console.log(t)),Email.send({SecureToken:"0b6eed09-ca2b-41ed-9283-2d33686b5dd2",To:t.target.email2.value,From:"missions@philippesimpson.dk",Subject:"You have been assigned a secret side mission",Body:`See your mission <a href=${n}>here</a>`}).then(t=>console.log(t))}function Ee(t){return St.title="Mission generator",St.description="Description coming soon...",[]}var Oe=Object.freeze({__proto__:null,default:class extends tt{constructor(t){super(),X(this,t,Ee,xe,s,{})}}});function je(e){let n,o,r,i,s,c,a,l,u,f,d;return{c(){n=h("h1"),n.textContent="Mission title 01",o=y(),r=h("q"),r.innerHTML="<i>Some introductory intel-like fluff text...</i>",i=y(),s=h("h2"),s.textContent="OBJECTIVE",c=y(),a=h("p"),a.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies feugiat metus vitae sollicitudin. Donec commodo mollis lorem non tincidunt. Integer nec nisi ut enim tristique sollicitudin eget nec mi.",l=y(),u=h("h2"),u.textContent="VICTORY",f=y(),d=h("p"),d.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies feugiat metus vitae sollicitudin."},m(t,e){p(t,n,e),p(t,o,e),p(t,r,e),p(t,i,e),p(t,s,e),p(t,c,e),p(t,a,e),p(t,l,e),p(t,u,e),p(t,f,e),p(t,d,e)},p:t,i:t,o:t,d(t){t&&m(n),t&&m(o),t&&m(r),t&&m(i),t&&m(s),t&&m(c),t&&m(a),t&&m(l),t&&m(u),t&&m(f),t&&m(d)}}}var Le=Object.freeze({__proto__:null,default:class extends tt{constructor(t){super(),X(this,t,null,je,s,{})}}});function Ce(e){let n,o,r,i,s,c,a,l,u,f,d;return{c(){n=h("h1"),n.textContent="Mission title 02",o=y(),r=h("q"),r.innerHTML="<i>Some introductory intel-like fluff text...</i>",i=y(),s=h("h2"),s.textContent="OBJECTIVE",c=y(),a=h("p"),a.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies feugiat metus vitae sollicitudin. Donec commodo mollis lorem non tincidunt. Integer nec nisi ut enim tristique sollicitudin eget nec mi.",l=y(),u=h("h2"),u.textContent="VICTORY",f=y(),d=h("p"),d.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies feugiat metus vitae sollicitudin."},m(t,e){p(t,n,e),p(t,o,e),p(t,r,e),p(t,i,e),p(t,s,e),p(t,c,e),p(t,a,e),p(t,l,e),p(t,u,e),p(t,f,e),p(t,d,e)},p:t,i:t,o:t,d(t){t&&m(n),t&&m(o),t&&m(r),t&&m(i),t&&m(s),t&&m(c),t&&m(a),t&&m(l),t&&m(u),t&&m(f),t&&m(d)}}}var Se=Object.freeze({__proto__:null,default:class extends tt{constructor(t){super(),X(this,t,null,Ce,s,{})}}});function Ie(e){let n,o,r,i,s,c,a,l,u,f,d;return{c(){n=h("h1"),n.textContent="Mission title 03",o=y(),r=h("q"),r.innerHTML="<i>Some introductory intel-like fluff text...</i>",i=y(),s=h("h2"),s.textContent="OBJECTIVE",c=y(),a=h("p"),a.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies feugiat metus vitae sollicitudin. Donec commodo mollis lorem non tincidunt. Integer nec nisi ut enim tristique sollicitudin eget nec mi.",l=y(),u=h("h2"),u.textContent="VICTORY",f=y(),d=h("p"),d.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies feugiat metus vitae sollicitudin."},m(t,e){p(t,n,e),p(t,o,e),p(t,r,e),p(t,i,e),p(t,s,e),p(t,c,e),p(t,a,e),p(t,l,e),p(t,u,e),p(t,f,e),p(t,d,e)},p:t,i:t,o:t,d(t){t&&m(n),t&&m(o),t&&m(r),t&&m(i),t&&m(s),t&&m(c),t&&m(a),t&&m(l),t&&m(u),t&&m(f),t&&m(d)}}}var Me=Object.freeze({__proto__:null,default:class extends tt{constructor(t){super(),X(this,t,null,Ie,s,{})}}});function Fe(t,e,n){const o=t.slice();return o[0]=e[n],o}function Re(t){let e,n,o,r,i,s=t[0].title+"";return{c(){e=h("div"),n=h("a"),o=g(s),i=y(),$(n,"href",r=t[1](t[0].path)),w(n,"active",t[2](t[0].path))},m(t,r){p(t,e,r),d(e,n),d(n,o),d(e,i)},p(t,e){1&e&&s!==(s=t[0].title+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(o,s),3&e&&r!==(r=t[1](t[0].path))&&$(n,"href",r),5&e&&w(n,"active",t[2](t[0].path))},d(t){t&&m(e)}}}function Te(t){let e,n,o,r,i;const s=t[4].default,c=function(t,e,n,o){if(t){const r=u(t,e,n,o);return t[0](r)}}(s,t,t[3],null);let a=t[0].children,l=[];for(let e=0;e<a.length;e+=1)l[e]=Re(Fe(t,a,e));return{c(){c&&c.c(),e=y(),n=h("hr"),o=y();for(let t=0;t<l.length;t+=1)l[t].c();r=b()},m(t,s){c&&c.m(t,s),p(t,e,s),p(t,n,s),p(t,o,s);for(let e=0;e<l.length;e+=1)l[e].m(t,s);p(t,r,s),i=!0},p(t,[e]){if(c&&c.p&&8&e&&f(c,s,t,t[3],e,null,null),7&e){let n;for(a=t[0].children,n=0;n<a.length;n+=1){const o=Fe(t,a,n);l[n]?l[n].p(o,e):(l[n]=Re(o),l[n].c(),l[n].m(r.parentNode,r))}for(;n<l.length;n+=1)l[n].d(1);l.length=a.length}},i(t){i||(U(c,t),i=!0)},o(t){z(c,t),i=!1},d(t){c&&c.d(t),t&&m(e),t&&m(n),t&&m(o),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(l,t),t&&m(r)}}}function De(t,e,n){let o,r,i;l(t,kt,t=>n(5,o=t)),l(t,jt,t=>n(1,r=t)),l(t,Lt,t=>n(2,i=t));let{$$slots:s={},$$scope:c}=e,{node:a=o}=e;return t.$$set=t=>{"node"in t&&n(0,a=t.node),"$$scope"in t&&n(3,c=t.$$scope)},[a,r,i,c,s]}var Ae=Object.freeze({__proto__:null,default:class extends tt{constructor(t){super(),X(this,t,De,Te,s,{node:0})}}})}();
//# sourceMappingURL=bundle.js.map
