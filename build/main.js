function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(n)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function c(e){let t;return a(e,e=>t=e)(),t}function l(e,t,n){e.$$.on_destroy.push(a(t,n))}function u(e,t,n,o){if(e){const r=f(e,t,n,o);return e[0](r)}}function f(e,n,o,r){return e[1]&&r?t(o.ctx.slice(),e[1](r(n))):o.ctx}function p(e,t,n,o,r,i,s){const a=function(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|r[o];return e}return t.dirty|r}return t.dirty}(t,o,r,i);if(a){const r=f(t,n,o,s);e.p(r,a)}}function d(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function g(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function b(e){return document.createTextNode(e)}function $(){return b(" ")}function w(){return b("")}function _(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function v(e){return function(t){return t.preventDefault(),e.call(this,t)}}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function P(e,t,n){e.classList[n?"add":"remove"](t)}let F;function E(e){F=e}function j(){if(!F)throw new Error("Function called outside component initialization");return F}function O(e,t){j().$$.context.set(e,t)}function R(e){return j().$$.context.get(e)}const M=[],L=[],I=[],D=[],S=Promise.resolve();let T=!1;function A(){T||(T=!0,S.then(C))}function N(e){I.push(e)}let B=!1;const q=new Set;function C(){if(!B){B=!0;do{for(let e=0;e<M.length;e+=1){const t=M[e];E(t),H(t.$$)}for(E(null),M.length=0;L.length;)L.pop()();for(let e=0;e<I.length;e+=1){const t=I[e];q.has(t)||(q.add(t),t())}I.length=0}while(M.length);for(;D.length;)D.pop()();T=!1,B=!1,q.clear()}}function H(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const K=new Set;let U;function z(){U={r:0,c:[],p:U}}function J(){U.r||r(U.c),U=U.p}function G(e,t){e&&e.i&&(K.delete(e),e.i(t))}function Q(e,t,n,o){if(e&&e.o){if(K.has(e))return;K.add(e),U.c.push(()=>{K.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function V(e,t){e.d(1),t.delete(e.key)}function W(e,t){Q(e,1,1,()=>{t.delete(e.key)})}function Z(e,t,n,o,r,i,s,a,c,l,u,f){let p=e.length,d=i.length,h=p;const m={};for(;h--;)m[e[h].key]=h;const g=[],y=new Map,b=new Map;for(h=d;h--;){const e=f(r,i,h),a=n(e);let c=s.get(a);c?o&&c.p(e,t):(c=l(a,e),c.c()),y.set(a,g[h]=c),a in m&&b.set(a,Math.abs(h-m[a]))}const $=new Set,w=new Set;function _(e){G(e,1),e.m(a,u),s.set(e.key,e),u=e.first,d--}for(;p&&d;){const t=g[d-1],n=e[p-1],o=t.key,r=n.key;t===n?(u=t.first,p--,d--):y.has(r)?!s.has(o)||$.has(o)?_(t):w.has(r)?p--:b.get(o)>b.get(r)?(w.add(o),_(t)):($.add(r),p--):(c(n,s),p--)}for(;p--;){const t=e[p];y.has(t.key)||c(t,s)}for(;d;)_(g[d-1]);return g}function X(e,t){const n={},o={},r={$$scope:1};let i=e.length;for(;i--;){const s=e[i],a=t[i];if(a){for(const e in s)e in a||(o[e]=1);for(const e in a)r[e]||(n[e]=a[e],r[e]=1);e[i]=a}else for(const e in s)r[e]=1}for(const e in o)e in n||(n[e]=void 0);return n}function Y(e){return"object"==typeof e&&null!==e?e:{}}function ee(e){e&&e.c()}function te(e,t,o){const{fragment:s,on_mount:a,on_destroy:c,after_update:l}=e.$$;s&&s.m(t,o),N(()=>{const t=a.map(n).filter(i);c?c.push(...t):r(t),e.$$.on_mount=[]}),l.forEach(N)}function ne(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(t,n,i,s,a,c,l=[-1]){const u=F;E(t);const f=n.props||{},p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l,skip_bound:!1};let d=!1;if(p.ctx=i?i(t,f,(e,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),d&&function(e,t){-1===e.$$.dirty[0]&&(M.push(e),A(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n}):[],p.update(),d=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(m)}else p.fragment&&p.fragment.c();n.intro&&G(t.$$.fragment),te(t,n.target,n.anchor),C()}E(u)}class re{$destroy(){ne(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ie=[];function se(t,n=e){let o;const r=[];function i(e){if(s(t,e)&&(t=e,o)){const e=!ie.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),ie.push(n,t)}if(e){for(let e=0;e<ie.length;e+=2)ie[e][0](ie[e+1]);ie.length=0}}}return{set:i,update:function(e){i(e(t))},subscribe:function(s,a=e){const c=[s,a];return r.push(c),1===r.length&&(o=n(i)||e),s(t),()=>{const e=r.indexOf(c);-1!==e&&r.splice(e,1),0===r.length&&(o(),o=null)}}}}function ae(t,n,o){const s=!Array.isArray(t),c=s?[t]:t,l=n.length<2;return{subscribe:se(o,t=>{let o=!1;const u=[];let f=0,p=e;const d=()=>{if(f)return;p();const o=n(s?u[0]:u,t);l?t(o):p=i(o)?o:e},h=c.map((e,t)=>a(e,e=>{u[t]=e,f&=~(1<<t),o&&d()},()=>{f|=1<<t}));return o=!0,d(),function(){r(h),p()}}).subscribe}}var ce={queryHandler:{parse:e=>{return t=new URLSearchParams(e),[...t].reduce((e,[t,n])=>(e[t]=n,e),{});var t},stringify:e=>"?"+new URLSearchParams(e).toString()},urlTransform:{apply:e=>e,remove:e=>e},useHash:!1};const le=RegExp(/\:([^/()]+)/g);function ue(e){if(navigator.userAgent.includes("jsdom"))return!1;!function e(t){t&&t.scrollTo&&"scroll-lock"!==t.dataset.routify&&"lock"!==t.dataset["routify-scroll"]&&(t.style["scroll-behavior"]="auto",t.scrollTo({top:0,behavior:"auto"}),t.style["scroll-behavior"]="",e(t.parentElement))}(e),function(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:e}=window.location;if(e){if(/^[A-Za-z]+[\w\-\:\.]*$/.test(e.substring(1))){const t=document.querySelector(e);t&&t.scrollIntoView()}}}()}const fe=e=>{const t=[];let n;for(;n=le.exec(e);)t.push(n[1]);return t};let pe=!1;function de(){const e=function(){const e=window.location.search.match(/__routify_path=([^&]+)/),t=window.location.search.match(/__routify_prefetch=\d+/);window.routify=window.routify||{},window.routify.prefetched=!!t;return e&&e[1].replace(/[#?].+/,"")}();return e||(ce.useHash?window.location.hash.replace(/#/,""):window.location.pathname)}window.routify=window.routify||{};const he=se(null),me=se([]);me.subscribe(e=>window.routify.routes=e);let ge=se({component:{params:{}}});const ye=se(null);function be(e){e=ce.urlTransform.remove(e);const t=c(me),n=t.find(t=>e===t.meta.name)||t.find(t=>e.match("^"+t.regex));if(!n)throw new Error(`Route could not be found for "${e}".`);const o=e;if(ce.queryHandler&&(n.params=ce.queryHandler.parse(window.location.search)),n.paramKeys){const e=function(e){const t=[];return e.forEach(e=>{t[e.path.split("/").filter(Boolean).length-1]=e}),t}(n.layouts),t=o.split("/").filter(Boolean);(function(e){return e.split("/").filter(Boolean).map(e=>e.match(/\:(.+)/)).map(e=>e&&e[1])})(n.path).forEach((o,r)=>{o&&(n.params[o]=t[r],e[r]?e[r].param={[o]:t[r]}:n.param={[o]:t[r]})})}return n.leftover=e.replace(new RegExp(n.regex),""),n}function $e(e,t,n){const o=e.slice();return o[1]=t[n],o}function we(e,t){let n,o;return{key:e,first:null,c(){n=y("iframe"),n.src!==(o=t[1].url)&&x(n,"src",o),x(n,"frameborder","0"),x(n,"title","routify prefetcher"),this.first=n},m(e,t){h(e,n,t)},p(e,t){1&t&&n.src!==(o=e[1].url)&&x(n,"src",o)},d(e){e&&m(n)}}}function _e(t){let n,o=[],r=new Map,i=t[0];const s=e=>e[1].options.prefetch;for(let e=0;e<i.length;e+=1){let n=$e(t,i,e),a=s(n);r.set(a,o[e]=we(a,n))}return{c(){n=y("div");for(let e=0;e<o.length;e+=1)o[e].c();x(n,"id","__routify_iframes"),function(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}(n,"display","none")},m(e,t){h(e,n,t);for(let e=0;e<o.length;e+=1)o[e].m(n,null)},p(e,[t]){if(1&t){const i=e[0];o=Z(o,t,s,1,e,i,r,n,V,we,null,$e)}},i:e,o:e,d(e){e&&m(n);for(let e=0;e<o.length;e+=1)o[e].d()}}}const ve=se([]),xe=ae(ve,e=>e.slice(0,2));function ke(e){const t=e.data?e.data.prefetchId:e;if(!t)return null;const n=c(ve).find(e=>e&&e.options.prefetch==t);if(n){const{gracePeriod:e}=n.options,o=new Promise(t=>setTimeout(t,e)),r=new Promise(t=>{window.requestIdleCallback?window.requestIdleCallback(t):setTimeout(t,e+1e3)});Promise.all([o,r]).then(()=>{ve.update(e=>e.filter(e=>e.options.prefetch!=t))})}}function Pe(e,t,n){let o;return l(e,xe,e=>n(0,o=e)),[o]}xe.subscribe(e=>e.forEach(({options:e})=>{setTimeout(()=>ke(e.prefetch),e.timeout)})),addEventListener("message",ke,!1);class Fe extends re{constructor(e){super(),oe(this,e,Pe,_e,s,{})}}function Ee(){return R("routify")||ge}const je={subscribe:e=>ae(Ee(),e=>e.layout.api).subscribe(e)},Oe={_hooks:[],subscribe:Me},Re={_hooks:[],subscribe:Me};function Me(e){const t=this._hooks,n=t.length;return e(e=>{t[n]=e}),()=>delete t[n]}const Le={subscribe:e=>ae([Ee(),he,me],e=>function(e,t,n){return function(o,r,i){const{component:s}=e;let a=o&&o.nodeType&&o;a&&(o=o.getAttribute("href")),o=function(e){if(e)if(e.match(/^\.\.?\//)){let[,t,n]=e.match(/^([\.\/]+)(.*)/),o=s.path.replace(/\/$/,"");const r=t.match(/\.\.\//g)||[];s.isPage&&r.push(null),r.forEach(()=>o=o.replace(/\/[^\/]+\/?$/,"")),e=(e=`${o}/${n}`.replace(/\/$/,""))||"/"}else if(e.match(/^\//));else{const t=n.find(t=>t.meta.name===e);t&&(e=t.shortPath)}else e=s.shortPath;return e}(o);i&&!1!==i.strict||(o=o.replace(/index$/,""));let c=l(o,r);return a?(a.href=c,{update(e){a.href=l(o,e)}}):ce.urlTransform.apply(c);function l(e,n){const o=function(e,n){const o=Object.assign({},t.params,s.params,n);let r=e;for(const[e,t]of Object.entries(o))r=r.replace(":"+e,t);return(r+function(e,t){if(!ce.queryHandler)return"";const n=fe(e),o={};t&&Object.entries(t).forEach(([e,t])=>{n.includes(e)||(o[e]=t)});return ce.queryHandler.stringify(o)}(e,n)).replace(/\?$/,"")}(e,n);return ce.useHash?"#"+o:o}}}(...e)).subscribe(e)};const Ie={subscribe:e=>ae([Le,he],([e,t])=>function(n="",o={},{strict:r}={strict:!0}){n=e(n,null,{strict:r});const i=e(t.path,null,{strict:r}),s=new RegExp("^"+n+"($|/)");return!!i.match(s)}).subscribe(e)},De={props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(e,t)=>[e,(De.getLongest(De.templates,e)||(e=>e))(t)]},{name:"createMeta",condition:()=>!0,action(e,t){De.writeMeta(e,t)}},{name:"createOG",condition:e=>!e.match(":"),action(e,t){De.writeMeta("og:"+e,t)}},{name:"createTitle",condition:e=>"title"===e,action(e,t){document.title=t}}],getLongest(e,t){const n=e[t];if(n){const o=c(he).path;return n[Object.keys(e[t]).filter(e=>o.includes(e)).sort((e,t)=>t.length-e.length)[0]]}},writeMeta(e,t){const n=document.getElementsByTagName("head")[0],o=e.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:i,valueField:s}=Se.services[r]||Se.services.plain,a=document.querySelector(`meta[${i}='${e}']`);a&&a.remove();const c=document.createElement("meta");c.setAttribute(i,e),c.setAttribute(s,t),c.setAttribute("data-origin","routify"),n.appendChild(c)},set(e,t){De.plugins.forEach(n=>{n.condition(e,t)&&([e,t]=n.action(e,t)||[e,t])})},clear(){const e=document.querySelector("meta");e&&e.remove()},template(e,t){const n=De.getOrigin();De.templates[e]=De.templates[e]||{},De.templates[e][n]=t},update(){Object.keys(De.props).forEach(e=>{let t=De.getLongest(De.props,e);De.plugins.forEach(n=>{n.condition(e,t)&&([e,t]=n.action(e,t)||[e,t])})})},batchedUpdate(){De._pendingUpdate||(De._pendingUpdate=!0,setTimeout(()=>{De._pendingUpdate=!1,this.update()}))},_updateQueued:!1,getOrigin(){const e=Ee();return e&&c(e).path||"/"},_pendingUpdate:!1},Se=new Proxy(De,{set(e,t,n,o){const{props:r,getOrigin:i}=e;return Reflect.has(e,t)?Reflect.set(e,t,n,o):(r[t]=r[t]||{},r[t][i()]=n),window.routify.appLoaded&&e.batchedUpdate(),!0}});!function(){const e=se(!0);Re.subscribe(t=>t(t=>e.set(!0)||!0)),Oe.subscribe(t=>t(t=>e.set(!1)))}();function Te(e,t,n){const o=e.slice();return o[18]=t[n].component,o[19]=t[n].componentFile,o}function Ae(e,t,n){const o=e.slice();return o[18]=t[n].component,o[19]=t[n].componentFile,o}function Ne(e){let t,n,o,r;const i=[qe,Be],s=[];function a(e,t){return!1===e[6].component.isLayout?0:e[5].length?1:-1}return~(t=a(e))&&(n=s[t]=i[t](e)),{c(){n&&n.c(),o=w()},m(e,n){~t&&s[t].m(e,n),h(e,o,n),r=!0},p(e,r){let c=t;t=a(e),t===c?~t&&s[t].p(e,r):(n&&(z(),Q(s[c],1,1,()=>{s[c]=null}),J()),~t?(n=s[t],n||(n=s[t]=i[t](e),n.c()),G(n,1),n.m(o.parentNode,o)):n=null)},i(e){r||(G(n),r=!0)},o(e){Q(n),r=!1},d(e){~t&&s[t].d(e),e&&m(o)}}}function Be(e){let t,n,o=[],r=new Map,i=[e[6]];const s=e=>e[18].path;for(let t=0;t<1;t+=1){let n=Te(e,i,t),a=s(n);r.set(a,o[t]=He(a,n))}return{c(){for(let e=0;e<1;e+=1)o[e].c();t=w()},m(e,r){for(let t=0;t<1;t+=1)o[t].m(e,r);h(e,t,r),n=!0},p(e,n){if(50331767&n){const i=[e[6]];z(),o=Z(o,n,s,1,e,i,r,t.parentNode,W,He,t,Te),J()}},i(e){if(!n){for(let e=0;e<1;e+=1)G(o[e]);n=!0}},o(e){for(let e=0;e<1;e+=1)Q(o[e]);n=!1},d(e){for(let t=0;t<1;t+=1)o[t].d(e);e&&m(t)}}}function qe(e){let t,n,o=[],r=new Map,i=[e[6]];const s=e=>function(e){const t=e.meta&&e.meta["param-is-page"]?JSON.stringify(e.param):"";return e.path+t}(e[18]);for(let t=0;t<1;t+=1){let n=Ae(e,i,t),a=s(n);r.set(a,o[t]=Ke(a,n))}return{c(){for(let e=0;e<1;e+=1)o[e].c();t=w()},m(e,r){for(let t=0;t<1;t+=1)o[t].m(e,r);h(e,t,r),n=!0},p(e,n){if(85&n){const i=[e[6]];z(),o=Z(o,n,s,1,e,i,r,t.parentNode,W,Ke,t,Ae),J()}},i(e){if(!n){for(let e=0;e<1;e+=1)G(o[e]);n=!0}},o(e){for(let e=0;e<1;e+=1)Q(o[e]);n=!1},d(e){for(let t=0;t<1;t+=1)o[t].d(e);e&&m(t)}}}function Ce(e){let t,n,o;return t=new Ge({props:{layouts:[...e[5]],Decorator:void 0!==e[25]?e[25]:e[1],childOfDecorator:e[4].isDecorator,scoped:{...e[0],...e[24]}}}),{c(){ee(t.$$.fragment),n=$()},m(e,r){te(t,e,r),h(e,n,r),o=!0},p(e,n){const o={};32&n&&(o.layouts=[...e[5]]),33554434&n&&(o.Decorator=void 0!==e[25]?e[25]:e[1]),16&n&&(o.childOfDecorator=e[4].isDecorator),16777217&n&&(o.scoped={...e[0],...e[24]}),t.$set(o)},i(e){o||(G(t.$$.fragment,e),o=!0)},o(e){Q(t.$$.fragment,e),o=!1},d(e){ne(t,e),e&&m(n)}}}function He(e,n){let o,r,i,s;const a=[{scoped:n[0]},{scopedSync:n[2]},n[4].param||{}];var c=n[19];function l(e){let n={$$slots:{default:[Ce,({scoped:e,decorator:t})=>({24:e,25:t}),({scoped:e,decorator:t})=>(e?16777216:0)|(t?33554432:0)]},$$scope:{ctx:e}};for(let e=0;e<a.length;e+=1)n=t(n,a[e]);return{props:n}}return c&&(r=new c(l(n))),{key:e,first:null,c(){o=w(),r&&ee(r.$$.fragment),i=w(),this.first=o},m(e,t){h(e,o,t),r&&te(r,e,t),h(e,i,t),s=!0},p(e,t){const n=21&t?X(a,[1&t&&{scoped:e[0]},4&t&&{scopedSync:e[2]},16&t&&Y(e[4].param||{})]):{};if(117440563&t&&(n.$$scope={dirty:t,ctx:e}),c!==(c=e[19])){if(r){z();const e=r;Q(e.$$.fragment,1,0,()=>{ne(e,1)}),J()}c?(r=new c(l(e)),ee(r.$$.fragment),G(r.$$.fragment,1),te(r,i.parentNode,i)):r=null}else c&&r.$set(n)},i(e){s||(r&&G(r.$$.fragment,e),s=!0)},o(e){r&&Q(r.$$.fragment,e),s=!1},d(e){e&&m(o),e&&m(i),r&&ne(r,e)}}}function Ke(e,n){let o,r,i,s;const a=[{scoped:n[0]},{scopedSync:n[2]},n[4].param||{}];var c=n[19];function l(e){let n={};for(let e=0;e<a.length;e+=1)n=t(n,a[e]);return{props:n}}return c&&(r=new c(l())),{key:e,first:null,c(){o=w(),r&&ee(r.$$.fragment),i=w(),this.first=o},m(e,t){h(e,o,t),r&&te(r,e,t),h(e,i,t),s=!0},p(e,t){const n=21&t?X(a,[1&t&&{scoped:e[0]},4&t&&{scopedSync:e[2]},16&t&&Y(e[4].param||{})]):{};if(c!==(c=e[19])){if(r){z();const e=r;Q(e.$$.fragment,1,0,()=>{ne(e,1)}),J()}c?(r=new c(l()),ee(r.$$.fragment),G(r.$$.fragment,1),te(r,i.parentNode,i)):r=null}else c&&r.$set(n)},i(e){s||(r&&G(r.$$.fragment,e),s=!0)},o(e){r&&Q(r.$$.fragment,e),s=!1},d(e){e&&m(o),e&&m(i),r&&ne(r,e)}}}function Ue(t){let n,o,r,s;return{c(){n=y("span")},m(a,c){var l;h(a,n,c),r||(l=o=t[8].call(null,n),s=l&&i(l.destroy)?l.destroy:e,r=!0)},d(e){e&&m(n),r=!1,s()}}}function ze(e){let t,n,o,r=e[6]&&Ne(e),i=!e[3]&&Ue(e);return{c(){r&&r.c(),t=$(),i&&i.c(),n=w()},m(e,s){r&&r.m(e,s),h(e,t,s),i&&i.m(e,s),h(e,n,s),o=!0},p(e,[o]){e[6]?r?(r.p(e,o),64&o&&G(r,1)):(r=Ne(e),r.c(),G(r,1),r.m(t.parentNode,t)):r&&(z(),Q(r,1,1,()=>{r=null}),J()),e[3]?i&&(i.d(1),i=null):i||(i=Ue(e),i.c(),i.m(n.parentNode,n))},i(e){o||(G(r),o=!0)},o(e){Q(r),o=!1},d(e){r&&r.d(e),e&&m(t),i&&i.d(e),e&&m(n)}}}function Je(e,t,n){let o,r;l(e,he,e=>n(13,o=e));let i,{layouts:s=[]}=t,{scoped:a={}}=t,{Decorator:u=null}=t,{childOfDecorator:f=!1}=t,{isRoot:p=!1}=t,d={},h=!1,m=null,g=[];const y=se(null);l(e,y,e=>n(6,r=e));const b=R("routify");function $(e){const t=c(b);n(2,d={...a}),0===g.length&&async function(){await(A(),S),ue(i);const e=r.component.path===o.path;!window.routify.stopAutoReady&&e&&async function({page:e,metatags:t,afterPageLoad:n}){const{path:o}=e,r=window.location.search.match(/__routify_prefetch=(\d+)/),i=r&&r[1];for(const t of n._hooks)t&&await t(e.api);t.update(),dispatchEvent(new CustomEvent("app-loaded")),parent.postMessage({msg:"app-loaded",prefetched:window.routify.prefetched,path:o,prefetchId:i},"*"),window.routify.appLoaded=!0,window.routify.stopAutoReady=!1}({page:r.component,metatags:Se,afterPageLoad:Oe})}();const s={layout:h?t.layout:m,component:m,route:o,componentFile:e,child:h?t.child:c(y)&&c(y).child};y.set(s),p&&ge.set(s),t&&!h&&b.update(e=>(e.child=m||e.child,e))}return h=u&&!f,O("routify",y),e.$$set=e=>{"layouts"in e&&n(9,s=e.layouts),"scoped"in e&&n(0,a=e.scoped),"Decorator"in e&&n(1,u=e.Decorator),"childOfDecorator"in e&&n(10,f=e.childOfDecorator),"isRoot"in e&&n(11,p=e.isRoot)},e.$$.update=()=>{if(4610&e.$$.dirty&&h){const e={component:()=>u,path:s[0].path+"__decorator",isDecorator:!0};n(9,s=[e,...s])}512&e.$$.dirty&&n(4,[m,...g]=s,m,(n(5,g),n(9,s),n(12,h),n(1,u))),16&e.$$.dirty&&function(e){let t=e.component();t instanceof Promise?t.then($):$(t)}(m)},[a,u,d,i,m,g,r,y,function(e){n(3,i=e.parentElement)},s,f,p]}class Ge extends re{constructor(e){super(),oe(this,e,Je,ze,s,{layouts:9,scoped:0,Decorator:1,childOfDecorator:10,isRoot:11})}}function Qe(e,t){let n=!1;function o(e,o){const r=be(e||de()),i=[...(o&&be(de())||r).layouts,r];n&&delete n.last,r.last=n,n=r,e||ye.set(r),he.set(r),t(i)}const r=function(e){["pushState","replaceState"].forEach(e=>{const t=history[e];history[e]=async function(n={},o,r){const{id:i,path:s,params:a}=c(he);n={id:i,path:s,params:a,...n};const l=new Event(e.toLowerCase());if(Object.assign(l,{state:n,title:o,url:r}),await We(l))return t.apply(this,[n,o,r]),dispatchEvent(l)}});let t=!1;const n={click:Ve,pushstate:()=>e(),replacestate:()=>e(),popstate:async n=>{t?t=!1:await We(n)?e():(t=!0,n.preventDefault(),history.go(1))}};Object.entries(n).forEach(e=>addEventListener(...e));return()=>{Object.entries(n).forEach(e=>removeEventListener(...e))}}(o);return{updatePage:o,destroy:r}}function Ve(e){const t=e.target.closest("a"),n=t&&t.getAttribute("href");e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button||e.defaultPrevented||n&&!t.target&&t.host===location.host&&(e.preventDefault(),history.pushState({},"",n))}async function We(e){const t=c(he);for(const n of Re._hooks.filter(Boolean)){if(!await n(e,t))return!1}return!0}function Ze(e){let t,n;return t=new Ge({props:{layouts:e[0],isRoot:!0}}),{c(){ee(t.$$.fragment)},m(e,o){te(t,e,o),n=!0},p(e,n){const o={};1&n&&(o.layouts=e[0]),t.$set(o)},i(e){n||(G(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){ne(t,e)}}}function Xe(e){let t,n,o,r=e[0]&&null!==e[1]&&Ze(e);return n=new Fe({}),{c(){r&&r.c(),t=$(),ee(n.$$.fragment)},m(e,i){r&&r.m(e,i),h(e,t,i),te(n,e,i),o=!0},p(e,[n]){e[0]&&null!==e[1]?r?(r.p(e,n),3&n&&G(r,1)):(r=Ze(e),r.c(),G(r,1),r.m(t.parentNode,t)):r&&(z(),Q(r,1,1,()=>{r=null}),J())},i(e){o||(G(r),G(n.$$.fragment,e),o=!0)},o(e){Q(r),Q(n.$$.fragment,e),o=!1},d(e){r&&r.d(e),e&&m(t),ne(n,e)}}}function Ye(e,t,n){let o;l(e,he,e=>n(1,o=e));let r,i,{routes:s}=t,{config:a={}}=t;window.routify=window.routify||{},window.routify.inBrowser=!window.navigator.userAgent.match("jsdom"),Object.entries(a).forEach(([e,t])=>{ce[e]=t}),function(){if(pe)return;const e=console.warn;console.warn=function(t,...n){if(!["was created with unknown prop 'scoped'","was created with unknown prop 'scopedSync'"].find(e=>t.includes(e)))return e(t,...n)},pe=!0}();O("routifyupdatepage",(...e)=>i&&i.updatePage(...e));const c=e=>n(0,r=e),u=()=>{i&&(i.destroy(),i=null)};let f=null;var p;return p=u,j().$$.on_destroy.push(p),e.$$set=e=>{"routes"in e&&n(2,s=e.routes),"config"in e&&n(3,a=e.config)},e.$$.update=()=>{4&e.$$.dirty&&s&&(clearTimeout(f),f=setTimeout(()=>{u(),i=Qe(0,c),me.set(s),i.updatePage()}))},[r,o,s,a]}class et extends re{constructor(e){super(),oe(this,e,Ye,Xe,s,{routes:2,config:3})}}function tt(e){const t=async function(t){return await async function e(t,n){const o=await t(n);if(!1===o)return!1;const r=o||n.file;if(r.children){const o=await Promise.all(r.children.map(async o=>e(t,{state:n.state,scope:nt(n.scope||{}),parent:n.file,file:await o})));r.children=o.filter(Boolean)}return r}(e,{file:t.tree,state:{treePayload:t},scope:{}})};return t.sync=function(t){return function e(t,n){const o=t(n);if(!1===o)return!1;const r=o||n.file;if(r.children){const o=r.children.map(o=>e(t,{state:n.state,scope:nt(n.scope||{}),parent:n.file,file:o}));r.children=o.filter(Boolean)}return r}(e,{file:t.tree,state:{treePayload:t},scope:{}})},t}function nt(e){return JSON.parse(JSON.stringify(e))}const ot=tt(({file:e})=>{(e.isPage||e.isFallback)&&(e.regex=((e,t)=>{const n=t?"":"/?$";return e=(e=(e=e.replace(/\/_fallback?$/,"(/|$)")).replace(/\/index$/,"(/index)?")).replace(le,"([^/]+)")+n})(e.path,e.isFallback))}),rt=tt(({file:e})=>{e.paramKeys=fe(e.path)}),it=tt(({file:e})=>{e.isFallback||e.isIndex?e.shortPath=e.path.replace(/\/[^/]+$/,""):e.shortPath=e.path}),st=tt(({file:e})=>{e.ranking=(({path:e})=>e.split("/").filter(Boolean).map(e=>"_fallback"===e?"A":e.startsWith(":")?"B":"C").join(""))(e)}),at=tt(({file:e})=>{const t=e,n=e.meta&&e.meta.children||[];n.length&&(t.children=t.children||[],t.children.push(...n.map(e=>({isMeta:!0,...e,meta:e}))))}),ct=tt(e=>{const{file:t}=e,{isFallback:n,meta:o}=t;t.isIndexable=!n&&!1!==o.index,t.isNonIndexable=!t.isIndexable}),lt=tt(({file:e,parent:t})=>{Object.defineProperty(e,"parent",{get:()=>t}),Object.defineProperty(e,"nextSibling",{get:()=>ut(e,1)}),Object.defineProperty(e,"prevSibling",{get:()=>ut(e,-1)}),Object.defineProperty(e,"lineage",{get:()=>function e(t,n=[]){t&&(n.unshift(t),e(t.parent,n));return n}(t)})});function ut(e,t){if(!e.root){const n=e.parent.children.filter(e=>e.isIndexable),o=n.indexOf(e);return n[o+t]}}const ft=tt(({file:e,parent:t})=>{e.isIndex&&Object.defineProperty(t,"index",{get:()=>e})}),pt=tt(({file:e,scope:t})=>{Object.defineProperty(e,"layouts",{get:()=>function e(t){const{parent:n}=t,o=n&&n.component&&n,r=o&&o.isReset,i=n&&!r&&e(n)||[];o&&i.push(o);return i}(e)})}),dt=tt(({file:e})=>{const t=e.root?function(){}:e.children?(e.isFile,function(){}):(e.isReset||e.isLayout||e.isFallback,function(){});Object.setPrototypeOf(e,t.prototype)});var ht=Object.freeze({__proto__:null,setRegex:ot,setParamKeys:rt,setShortPath:it,setRank:st,addMetaChildren:at,setIsIndexable:ct,assignRelations:lt,assignIndex:ft,assignLayout:pt,createFlatList:e=>{tt(e=>{(e.file.isPage||e.file.isFallback)&&e.state.treePayload.routes.push(e.file)}).sync(e),e.routes.sort((e,t)=>e.ranking>=t.ranking?-1:1)},setPrototype:dt});const mt=tt(({file:e})=>{e.api=new gt(e)});class gt{constructor(e){this.__file=e,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!e.isMeta,this.path=e.path,this.title=function(e){return void 0!==e.meta.title?e.meta.title:(e.shortPath||e.path).split("/").pop().replace(/-/g," ")}(e),this.meta=e.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter(e=>!e.isNonIndexable).sort((e,t)=>e.isMeta&&t.isMeta?0:(e=(e.meta.index||e.meta.title||e.path).toString(),t=(t.meta.index||t.meta.title||t.path).toString(),e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"}))).map(({api:e})=>e)}get next(){return yt(this,1)}get prev(){return yt(this,-1)}preload(){this.__file.layouts.forEach(e=>e.component()),this.__file.component()}}function yt(e,t){if(!e.__file.root){const n=e.parent.children.indexOf(e);return e.parent.children[n+t]}}const bt={...ht,assignAPI:mt};const $t={name:"_folder",filepath:"/_folder.svelte",root:!0,ownMeta:{},absolutePath:"/home/runner/work/coprolit.github.io/coprolit.github.io/src/pages/_folder.svelte",children:[{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!0,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/_fallback",id:"__fallback",component:()=>import("./_fallback-cc2eb56a.js").then(e=>e.default)},{isFile:!1,isDir:!0,ext:"",children:[{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/missions/Decapitation",id:"_missions_Decapitation",component:()=>import("./Decapitation-338a4be1.js").then(e=>e.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/missions/Everybody-in",id:"_missions_EverybodyIn",component:()=>import("./Everybody-in-64ac3f4e.js").then(e=>e.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/missions/Fuel-Shortage",id:"_missions_FuelShortage",component:()=>import("./Fuel-Shortage-55a74c19.js").then(e=>e.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/missions/Hold-This!",id:"_missions_HoldThis_",component:()=>import("./Hold-This!-2d87e1a3.js").then(e=>e.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/missions/No-retreat",id:"_missions_NoRetreat",component:()=>import("./No-retreat-01c80fe9.js").then(e=>e.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/missions/Reckless-bravery",id:"_missions_RecklessBravery",component:()=>import("./Reckless-bravery-be21942e.js").then(e=>e.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/missions/The-Mole",id:"_missions_TheMole",component:()=>import("./The-Mole-de0d1187.js").then(e=>e.default)}],isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/missions"},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!0,isFallback:!1,isPage:!0,ownMeta:{title:"Main"},meta:{title:"Main",recursive:!0,preload:!1,prerender:!0},path:"/index",id:"_index",component:()=>import("./index-f0acced5.js").then(e=>e.default)}],isLayout:!0,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,isFile:!0,file:"_folder.svelte",ext:"svelte",badExt:!1,importPath:"../src/pages/_folder.svelte",meta:{recursive:!0,preload:!1,prerender:!0},path:"/",id:"__folder",component:()=>import("./_folder-d44804a2.js").then(e=>e.default)},{tree:wt,routes:_t}=function(e){const t=["setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:e,routes:[]};for(let e of t){(bt[e].sync||bt[e])(n)}return n}($t);function vt(t){let n,o;return n=new et({props:{routes:_t}}),{c(){ee(n.$$.fragment)},m(e,t){te(n,e,t),o=!0},p:e,i(e){o||(G(n.$$.fragment,e),o=!0)},o(e){Q(n.$$.fragment,e),o=!1},d(e){ne(n,e)}}}!function(e,t={target:document.body},n="hmr",o="app-loaded"){const r=document.getElementById(n),i=document.createElement("div");r?i.style.visibility="hidden":i.setAttribute("id",n),t.target.appendChild(i),addEventListener(o,(function(){r&&r.remove();i.style.visibility="initial",i.setAttribute("id",n)})),new e({...t,target:i})}(class extends re{constructor(e){super(),oe(this,e,null,vt,s,{})}},{target:document.body},"routify-app");export{re as S,$ as a,x as b,h as c,d,y as e,m as f,l as g,je as h,oe as i,P as j,k,_ as l,Se as m,e as n,u as o,v as p,p as q,G as r,s,b as t,Le as u,Q as v,g as w,Ie as x};
//# sourceMappingURL=main.js.map
