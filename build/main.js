function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function c(t){let e;return a(t,t=>e=t)(),e}function l(t,e,n){t.$$.on_destroy.push(a(e,n))}function u(t,e,n,o){if(t){const r=f(t,e,n,o);return t[0](r)}}function f(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function p(t,e,n,o,r,i,s){const a=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,i);if(a){const r=f(e,n,o,s);t.p(r,a)}}function d(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function w(){return $("")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t){return function(e){return e.preventDefault(),t.call(this,e)}}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function P(t,e,n){t.classList[n?"add":"remove"](e)}let E;function O(t){E=t}function j(){if(!E)throw new Error("Function called outside component initialization");return E}function F(t,e){j().$$.context.set(t,e)}function L(t){return j().$$.context.get(t)}const R=[],I=[],S=[],M=[],D=Promise.resolve();let A=!1;function T(){A||(A=!0,D.then(C))}function N(t){S.push(t)}let q=!1;const B=new Set;function C(){if(!q){q=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];O(e),H(e.$$)}for(O(null),R.length=0;I.length;)I.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];B.has(e)||(B.add(e),e())}S.length=0}while(R.length);for(;M.length;)M.pop()();A=!1,q=!1,B.clear()}}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const K=new Set;let U;function z(){U={r:0,c:[],p:U}}function J(){U.r||r(U.c),U=U.p}function G(t,e){t&&t.i&&(K.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(K.has(t))return;K.add(t),U.c.push(()=>{K.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const V="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function W(t,e){t.d(1),e.delete(t.key)}function Z(t,e){Q(t,1,1,()=>{e.delete(t.key)})}function X(t,e,n,o,r,i,s,a,c,l,u,f){let p=t.length,d=i.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],y=new Map,$=new Map;for(h=d;h--;){const t=f(r,i,h),a=n(t);let c=s.get(a);c?o&&c.p(t,e):(c=l(a,t),c.c()),y.set(a,g[h]=c),a in m&&$.set(a,Math.abs(h-m[a]))}const b=new Set,w=new Set;function _(t){G(t,1),t.m(a,u),s.set(t.key,t),u=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],o=e.key,r=n.key;e===n?(u=e.first,p--,d--):y.has(r)?!s.has(o)||b.has(o)?_(e):w.has(r)?p--:$.get(o)>$.get(r)?(w.add(o),_(e)):(b.add(r),p--):(c(n,s),p--)}for(;p--;){const e=t[p];y.has(e.key)||c(e,s)}for(;d;)_(g[d-1]);return g}function Y(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],a=e[i];if(a){for(const t in s)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[i]=a}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function tt(t){return"object"==typeof t&&null!==t?t:{}}function et(t){t&&t.c()}function nt(t,e,o){const{fragment:s,on_mount:a,on_destroy:c,after_update:l}=t.$$;s&&s.m(e,o),N(()=>{const e=a.map(n).filter(i);c?c.push(...e):r(e),t.$$.on_mount=[]}),l.forEach(N)}function ot(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(e,n,i,s,a,c,l=[-1]){const u=E;O(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l,skip_bound:!1};let d=!1;if(p.ctx=i?i(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),d&&function(t,e){-1===t.$$.dirty[0]&&(R.push(t),T(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n}):[],p.update(),d=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(m)}else p.fragment&&p.fragment.c();n.intro&&G(e.$$.fragment),nt(e,n.target,n.anchor),C()}O(u)}class it{$destroy(){ot(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=[];function at(e,n=t){let o;const r=[];function i(t){if(s(e,t)&&(e=t,o)){const t=!st.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),st.push(n,e)}if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,a=t){const c=[s,a];return r.push(c),1===r.length&&(o=n(i)||t),s(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function ct(e,n,o){const s=!Array.isArray(e),c=s?[e]:e,l=n.length<2;return{subscribe:at(o,e=>{let o=!1;const u=[];let f=0,p=t;const d=()=>{if(f)return;p();const o=n(s?u[0]:u,e);l?e(o):p=i(o)?o:t},h=c.map((t,e)=>a(t,t=>{u[e]=t,f&=~(1<<e),o&&d()},()=>{f|=1<<e}));return o=!0,d(),function(){r(h),p()}}).subscribe}}var lt={queryHandler:{parse:t=>{return e=new URLSearchParams(t),[...e].reduce((t,[e,n])=>(t[e]=n,t),{});var e},stringify:t=>"?"+new URLSearchParams(t).toString()},urlTransform:{apply:t=>t,remove:t=>t},useHash:!1};const ut=RegExp(/\:([^/()]+)/g);function ft(t){if(navigator.userAgent.includes("jsdom"))return!1;!function t(e){e&&e.scrollTo&&"scroll-lock"!==e.dataset.routify&&"lock"!==e.dataset["routify-scroll"]&&(e.style["scroll-behavior"]="auto",e.scrollTo({top:0,behavior:"auto"}),e.style["scroll-behavior"]="",t(e.parentElement))}(t),function(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:t}=window.location;if(t){if(/^[A-Za-z]+[\w\-\:\.]*$/.test(t.substring(1))){const e=document.querySelector(t);e&&e.scrollIntoView()}}}()}const pt=t=>{const e=[];let n;for(;n=ut.exec(t);)e.push(n[1]);return e};let dt=!1;function ht(){const t=function(){const t=window.location.search.match(/__routify_path=([^&]+)/),e=window.location.search.match(/__routify_prefetch=\d+/);window.routify=window.routify||{},window.routify.prefetched=!!e;return t&&t[1].replace(/[#?].+/,"")}();return t||(lt.useHash?window.location.hash.replace(/#/,""):window.location.pathname)}window.routify=window.routify||{};const mt=at(null),gt=at([]);gt.subscribe(t=>window.routify.routes=t);let yt=at({component:{params:{}}});const $t=at(null);function bt(t){t=lt.urlTransform.remove(t);const e=c(gt),n=e.find(e=>t===e.meta.name)||e.find(e=>t.match("^"+e.regex));if(!n)throw new Error(`Route could not be found for "${t}".`);const o=t;if(lt.queryHandler&&(n.params=lt.queryHandler.parse(window.location.search)),n.paramKeys){const t=function(t){const e=[];return t.forEach(t=>{e[t.path.split("/").filter(Boolean).length-1]=t}),e}(n.layouts),e=o.split("/").filter(Boolean);(function(t){return t.split("/").filter(Boolean).map(t=>t.match(/\:(.+)/)).map(t=>t&&t[1])})(n.path).forEach((o,r)=>{o&&(n.params[o]=e[r],t[r]?t[r].param={[o]:e[r]}:n.param={[o]:e[r]})})}return n.leftover=t.replace(new RegExp(n.regex),""),n}function wt(t,e,n){const o=t.slice();return o[1]=e[n],o}function _t(t,e){let n,o;return{key:t,first:null,c(){n=y("iframe"),n.src!==(o=e[1].url)&&x(n,"src",o),x(n,"frameborder","0"),x(n,"title","routify prefetcher"),this.first=n},m(t,e){h(t,n,e)},p(t,e){1&e&&n.src!==(o=t[1].url)&&x(n,"src",o)},d(t){t&&m(n)}}}function vt(e){let n,o=[],r=new Map,i=e[0];const s=t=>t[1].options.prefetch;for(let t=0;t<i.length;t+=1){let n=wt(e,i,t),a=s(n);r.set(a,o[t]=_t(a,n))}return{c(){n=y("div");for(let t=0;t<o.length;t+=1)o[t].c();var t,e,r;x(n,"id","__routify_iframes"),t="display",e="none",n.style.setProperty(t,e,r?"important":"")},m(t,e){h(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){if(1&e){const i=t[0];o=X(o,e,s,1,t,i,r,n,W,_t,null,wt)}},i:t,o:t,d(t){t&&m(n);for(let t=0;t<o.length;t+=1)o[t].d()}}}const xt=at([]),kt=ct(xt,t=>t.slice(0,2));function Pt(t){const e=t.data?t.data.prefetchId:t;if(!e)return null;const n=c(xt).find(t=>t&&t.options.prefetch==e);if(n){const{gracePeriod:t}=n.options,o=new Promise(e=>setTimeout(e,t)),r=new Promise(e=>{window.requestIdleCallback?window.requestIdleCallback(e):setTimeout(e,t+1e3)});Promise.all([o,r]).then(()=>{xt.update(t=>t.filter(t=>t.options.prefetch!=e))})}}function Et(t,e,n){let o;return l(t,kt,t=>n(0,o=t)),[o]}kt.subscribe(t=>t.forEach(({options:t})=>{setTimeout(()=>Pt(t.prefetch),t.timeout)})),addEventListener("message",Pt,!1);class Ot extends it{constructor(t){super(),rt(this,t,Et,vt,s,{})}}function jt(){return L("routify")||yt}const Ft={_hooks:[],subscribe:Rt},Lt={_hooks:[],subscribe:Rt};function Rt(t){const e=this._hooks,n=e.length;return t(t=>{e[n]=t}),()=>delete e[n]}const It={subscribe:t=>ct([jt(),mt,gt],t=>function(t,e,n){return function(o,r,i){const{component:s}=t;let a=o&&o.nodeType&&o;a&&(o=o.getAttribute("href")),o=function(t){if(t)if(t.match(/^\.\.?\//)){let[,e,n]=t.match(/^([\.\/]+)(.*)/),o=s.path.replace(/\/$/,"");const r=e.match(/\.\.\//g)||[];s.isPage&&r.push(null),r.forEach(()=>o=o.replace(/\/[^\/]+\/?$/,"")),t=(t=`${o}/${n}`.replace(/\/$/,""))||"/"}else if(t.match(/^\//));else{const e=n.find(e=>e.meta.name===t);e&&(t=e.shortPath)}else t=s.shortPath;return t}(o);i&&!1!==i.strict||(o=o.replace(/index$/,""));let c=l(o,r);return a?(a.href=c,{update(t){a.href=l(o,t)}}):lt.urlTransform.apply(c);function l(t,n){const o=function(t,n){const o=Object.assign({},e.params,s.params,n);let r=t;for(const[t,e]of Object.entries(o))r=r.replace(":"+t,e);return(r+function(t,e){if(!lt.queryHandler)return"";const n=pt(t),o={};e&&Object.entries(e).forEach(([t,e])=>{n.includes(t)||(o[t]=e)});return lt.queryHandler.stringify(o)}(t,n)).replace(/\?$/,"")}(t,n);return lt.useHash?"#"+o:o}}}(...t)).subscribe(t)};const St={props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(t,e)=>[t,(St.getLongest(St.templates,t)||(t=>t))(e)]},{name:"createMeta",condition:()=>!0,action(t,e){St.writeMeta(t,e)}},{name:"createOG",condition:t=>!t.match(":"),action(t,e){St.writeMeta("og:"+t,e)}},{name:"createTitle",condition:t=>"title"===t,action(t,e){document.title=e}}],getLongest(t,e){const n=t[e];if(n){const o=c(mt).path;return n[Object.keys(t[e]).filter(t=>o.includes(t)).sort((t,e)=>e.length-t.length)[0]]}},writeMeta(t,e){const n=document.getElementsByTagName("head")[0],o=t.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:i,valueField:s}=Mt.services[r]||Mt.services.plain,a=document.querySelector(`meta[${i}='${t}']`);a&&a.remove();const c=document.createElement("meta");c.setAttribute(i,t),c.setAttribute(s,e),c.setAttribute("data-origin","routify"),n.appendChild(c)},set(t,e){St.plugins.forEach(n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])})},clear(){const t=document.querySelector("meta");t&&t.remove()},template(t,e){const n=St.getOrigin();St.templates[t]=St.templates[t]||{},St.templates[t][n]=e},update(){Object.keys(St.props).forEach(t=>{let e=St.getLongest(St.props,t);St.plugins.forEach(n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])})})},batchedUpdate(){St._pendingUpdate||(St._pendingUpdate=!0,setTimeout(()=>{St._pendingUpdate=!1,this.update()}))},_updateQueued:!1,getOrigin(){const t=jt();return t&&c(t).path||"/"},_pendingUpdate:!1},Mt=new Proxy(St,{set(t,e,n,o){const{props:r,getOrigin:i}=t;return Reflect.has(t,e)?Reflect.set(t,e,n,o):(r[e]=r[e]||{},r[e][i()]=n),window.routify.appLoaded&&t.batchedUpdate(),!0}});!function(){const t=at(!0);Lt.subscribe(e=>e(e=>t.set(!0)||!0)),Ft.subscribe(e=>e(e=>t.set(!1)))}();function Dt(t,e,n){const o=t.slice();return o[18]=e[n].component,o[19]=e[n].componentFile,o}function At(t,e,n){const o=t.slice();return o[18]=e[n].component,o[19]=e[n].componentFile,o}function Tt(t){let e,n,o,r;const i=[qt,Nt],s=[];function a(t,e){return!1===t[6].component.isLayout?0:t[5].length?1:-1}return~(e=a(t))&&(n=s[e]=i[e](t)),{c(){n&&n.c(),o=w()},m(t,n){~e&&s[e].m(t,n),h(t,o,n),r=!0},p(t,r){let c=e;e=a(t),e===c?~e&&s[e].p(t,r):(n&&(z(),Q(s[c],1,1,()=>{s[c]=null}),J()),~e?(n=s[e],n||(n=s[e]=i[e](t),n.c()),G(n,1),n.m(o.parentNode,o)):n=null)},i(t){r||(G(n),r=!0)},o(t){Q(n),r=!1},d(t){~e&&s[e].d(t),t&&m(o)}}}function Nt(t){let e,n,o=[],r=new Map,i=[t[6]];const s=t=>t[18].path;for(let e=0;e<1;e+=1){let n=Dt(t,i,e),a=s(n);r.set(a,o[e]=Ct(a,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=w()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);h(t,e,r),n=!0},p(t,n){if(50331767&n){const i=[t[6]];z(),o=X(o,n,s,1,t,i,r,e.parentNode,Z,Ct,e,Dt),J()}},i(t){if(!n){for(let t=0;t<1;t+=1)G(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)Q(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&m(e)}}}function qt(t){let e,n,o=[],r=new Map,i=[t[6]];const s=t=>function(t){const e=t.meta&&t.meta["param-is-page"]?JSON.stringify(t.param):"";return t.path+e}(t[18]);for(let e=0;e<1;e+=1){let n=At(t,i,e),a=s(n);r.set(a,o[e]=Ht(a,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=w()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);h(t,e,r),n=!0},p(t,n){if(85&n){const i=[t[6]];z(),o=X(o,n,s,1,t,i,r,e.parentNode,Z,Ht,e,At),J()}},i(t){if(!n){for(let t=0;t<1;t+=1)G(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)Q(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&m(e)}}}function Bt(t){let e,n,o;return e=new Jt({props:{layouts:[...t[5]],Decorator:void 0!==t[25]?t[25]:t[1],childOfDecorator:t[4].isDecorator,scoped:{...t[0],...t[24]}}}),{c(){et(e.$$.fragment),n=b()},m(t,r){nt(e,t,r),h(t,n,r),o=!0},p(t,n){const o={};32&n&&(o.layouts=[...t[5]]),33554434&n&&(o.Decorator=void 0!==t[25]?t[25]:t[1]),16&n&&(o.childOfDecorator=t[4].isDecorator),16777217&n&&(o.scoped={...t[0],...t[24]}),e.$set(o)},i(t){o||(G(e.$$.fragment,t),o=!0)},o(t){Q(e.$$.fragment,t),o=!1},d(t){ot(e,t),t&&m(n)}}}function Ct(t,n){let o,r,i,s;const a=[{scoped:n[0]},{scopedSync:n[2]},n[4].param||{}];var c=n[19];function l(t){let n={$$slots:{default:[Bt,({scoped:t,decorator:e})=>({24:t,25:e}),({scoped:t,decorator:e})=>(t?16777216:0)|(e?33554432:0)]},$$scope:{ctx:t}};for(let t=0;t<a.length;t+=1)n=e(n,a[t]);return{props:n}}return c&&(r=new c(l(n))),{key:t,first:null,c(){o=w(),r&&et(r.$$.fragment),i=w(),this.first=o},m(t,e){h(t,o,e),r&&nt(r,t,e),h(t,i,e),s=!0},p(t,e){const n=21&e?Y(a,[1&e&&{scoped:t[0]},4&e&&{scopedSync:t[2]},16&e&&tt(t[4].param||{})]):{};if(117440563&e&&(n.$$scope={dirty:e,ctx:t}),c!==(c=t[19])){if(r){z();const t=r;Q(t.$$.fragment,1,0,()=>{ot(t,1)}),J()}c?(r=new c(l(t)),et(r.$$.fragment),G(r.$$.fragment,1),nt(r,i.parentNode,i)):r=null}else c&&r.$set(n)},i(t){s||(r&&G(r.$$.fragment,t),s=!0)},o(t){r&&Q(r.$$.fragment,t),s=!1},d(t){t&&m(o),t&&m(i),r&&ot(r,t)}}}function Ht(t,n){let o,r,i,s;const a=[{scoped:n[0]},{scopedSync:n[2]},n[4].param||{}];var c=n[19];function l(t){let n={};for(let t=0;t<a.length;t+=1)n=e(n,a[t]);return{props:n}}return c&&(r=new c(l())),{key:t,first:null,c(){o=w(),r&&et(r.$$.fragment),i=w(),this.first=o},m(t,e){h(t,o,e),r&&nt(r,t,e),h(t,i,e),s=!0},p(t,e){const n=21&e?Y(a,[1&e&&{scoped:t[0]},4&e&&{scopedSync:t[2]},16&e&&tt(t[4].param||{})]):{};if(c!==(c=t[19])){if(r){z();const t=r;Q(t.$$.fragment,1,0,()=>{ot(t,1)}),J()}c?(r=new c(l()),et(r.$$.fragment),G(r.$$.fragment,1),nt(r,i.parentNode,i)):r=null}else c&&r.$set(n)},i(t){s||(r&&G(r.$$.fragment,t),s=!0)},o(t){r&&Q(r.$$.fragment,t),s=!1},d(t){t&&m(o),t&&m(i),r&&ot(r,t)}}}function Kt(e){let n,o,r,s;return{c(){n=y("span")},m(a,c){var l;h(a,n,c),r||(l=o=e[8].call(null,n),s=l&&i(l.destroy)?l.destroy:t,r=!0)},d(t){t&&m(n),r=!1,s()}}}function Ut(t){let e,n,o,r=t[6]&&Tt(t),i=!t[3]&&Kt(t);return{c(){r&&r.c(),e=b(),i&&i.c(),n=w()},m(t,s){r&&r.m(t,s),h(t,e,s),i&&i.m(t,s),h(t,n,s),o=!0},p(t,[o]){t[6]?r?(r.p(t,o),64&o&&G(r,1)):(r=Tt(t),r.c(),G(r,1),r.m(e.parentNode,e)):r&&(z(),Q(r,1,1,()=>{r=null}),J()),t[3]?i&&(i.d(1),i=null):i||(i=Kt(t),i.c(),i.m(n.parentNode,n))},i(t){o||(G(r),o=!0)},o(t){Q(r),o=!1},d(t){r&&r.d(t),t&&m(e),i&&i.d(t),t&&m(n)}}}function zt(t,e,n){let o,r;l(t,mt,t=>n(13,o=t));let i,{layouts:s=[]}=e,{scoped:a={}}=e,{Decorator:u=null}=e,{childOfDecorator:f=!1}=e,{isRoot:p=!1}=e,d={},h=!1,m=null,g=[];const y=at(null);l(t,y,t=>n(6,r=t));const $=L("routify");function b(t){const e=c($);n(2,d={...a}),0===g.length&&async function(){await(T(),D),ft(i);const t=r.component.path===o.path;!window.routify.stopAutoReady&&t&&async function({page:t,metatags:e,afterPageLoad:n}){const{path:o}=t,r=window.location.search.match(/__routify_prefetch=(\d+)/),i=r&&r[1];for(const e of n._hooks)e&&await e(t.api);e.update(),dispatchEvent(new CustomEvent("app-loaded")),parent.postMessage({msg:"app-loaded",prefetched:window.routify.prefetched,path:o,prefetchId:i},"*"),window.routify.appLoaded=!0,window.routify.stopAutoReady=!1}({page:r.component,metatags:Mt,afterPageLoad:Ft})}();const s={layout:h?e.layout:m,component:m,route:o,componentFile:t,child:h?e.child:c(y)&&c(y).child};y.set(s),p&&yt.set(s),e&&!h&&$.update(t=>(t.child=m||t.child,t))}return h=u&&!f,F("routify",y),t.$$set=t=>{"layouts"in t&&n(9,s=t.layouts),"scoped"in t&&n(0,a=t.scoped),"Decorator"in t&&n(1,u=t.Decorator),"childOfDecorator"in t&&n(10,f=t.childOfDecorator),"isRoot"in t&&n(11,p=t.isRoot)},t.$$.update=()=>{if(4610&t.$$.dirty&&h){const t={component:()=>u,path:s[0].path+"__decorator",isDecorator:!0};n(9,s=[t,...s])}512&t.$$.dirty&&n(4,[m,...g]=s,m,(n(5,g),n(9,s),n(12,h),n(1,u))),16&t.$$.dirty&&function(t){let e=t.component();e instanceof Promise?e.then(b):b(e)}(m)},[a,u,d,i,m,g,r,y,function(t){n(3,i=t.parentElement)},s,f,p]}class Jt extends it{constructor(t){super(),rt(this,t,zt,Ut,s,{layouts:9,scoped:0,Decorator:1,childOfDecorator:10,isRoot:11})}}function Gt(t,e){let n=!1;function o(t,o){const r=bt(t||ht()),i=[...(o&&bt(ht())||r).layouts,r];n&&delete n.last,r.last=n,n=r,t||$t.set(r),mt.set(r),e(i)}const r=function(t){["pushState","replaceState"].forEach(t=>{const e=history[t];history[t]=async function(n={},o,r){const{id:i,path:s,params:a}=c(mt);n={id:i,path:s,params:a,...n};const l=new Event(t.toLowerCase());if(Object.assign(l,{state:n,title:o,url:r}),await Vt(l))return e.apply(this,[n,o,r]),dispatchEvent(l)}});let e=!1;const n={click:Qt,pushstate:()=>t(),replacestate:()=>t(),popstate:async n=>{e?e=!1:await Vt(n)?t():(e=!0,n.preventDefault(),history.go(1))}};Object.entries(n).forEach(t=>addEventListener(...t));return()=>{Object.entries(n).forEach(t=>removeEventListener(...t))}}(o);return{updatePage:o,destroy:r}}function Qt(t){const e=t.target.closest("a"),n=e&&e.getAttribute("href");t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button||t.defaultPrevented||n&&!e.target&&e.host===location.host&&(t.preventDefault(),history.pushState({},"",n))}async function Vt(t){const e=c(mt);for(const n of Lt._hooks.filter(Boolean)){if(!await n(t,e))return!1}return!0}function Wt(t){let e,n;return e=new Jt({props:{layouts:t[0],isRoot:!0}}),{c(){et(e.$$.fragment)},m(t,o){nt(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.layouts=t[0]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){ot(e,t)}}}function Zt(t){let e,n,o,r=t[0]&&null!==t[1]&&Wt(t);return n=new Ot({}),{c(){r&&r.c(),e=b(),et(n.$$.fragment)},m(t,i){r&&r.m(t,i),h(t,e,i),nt(n,t,i),o=!0},p(t,[n]){t[0]&&null!==t[1]?r?(r.p(t,n),3&n&&G(r,1)):(r=Wt(t),r.c(),G(r,1),r.m(e.parentNode,e)):r&&(z(),Q(r,1,1,()=>{r=null}),J())},i(t){o||(G(r),G(n.$$.fragment,t),o=!0)},o(t){Q(r),Q(n.$$.fragment,t),o=!1},d(t){r&&r.d(t),t&&m(e),ot(n,t)}}}function Xt(t,e,n){let o;l(t,mt,t=>n(1,o=t));let r,i,{routes:s}=e,{config:a={}}=e;window.routify=window.routify||{},window.routify.inBrowser=!window.navigator.userAgent.match("jsdom"),Object.entries(a).forEach(([t,e])=>{lt[t]=e}),function(){if(dt)return;const t=console.warn;console.warn=function(e,...n){if(!["was created with unknown prop 'scoped'","was created with unknown prop 'scopedSync'"].find(t=>e.includes(t)))return t(e,...n)},dt=!0}();F("routifyupdatepage",(...t)=>i&&i.updatePage(...t));const c=t=>n(0,r=t),u=()=>{i&&(i.destroy(),i=null)};let f=null;var p;return p=u,j().$$.on_destroy.push(p),t.$$set=t=>{"routes"in t&&n(2,s=t.routes),"config"in t&&n(3,a=t.config)},t.$$.update=()=>{4&t.$$.dirty&&s&&(clearTimeout(f),f=setTimeout(()=>{u(),i=Gt(0,c),gt.set(s),i.updatePage()}))},[r,o,s,a]}class Yt extends it{constructor(t){super(),rt(this,t,Xt,Zt,s,{routes:2,config:3})}}function te(t){const e=async function(e){return await async function t(e,n){const o=await e(n);if(!1===o)return!1;const r=o||n.file;if(r.children){const o=await Promise.all(r.children.map(async o=>t(e,{state:n.state,scope:ee(n.scope||{}),parent:n.file,file:await o})));r.children=o.filter(Boolean)}return r}(t,{file:e.tree,state:{treePayload:e},scope:{}})};return e.sync=function(e){return function t(e,n){const o=e(n);if(!1===o)return!1;const r=o||n.file;if(r.children){const o=r.children.map(o=>t(e,{state:n.state,scope:ee(n.scope||{}),parent:n.file,file:o}));r.children=o.filter(Boolean)}return r}(t,{file:e.tree,state:{treePayload:e},scope:{}})},e}function ee(t){return JSON.parse(JSON.stringify(t))}const ne=te(({file:t})=>{(t.isPage||t.isFallback)&&(t.regex=((t,e)=>{const n=e?"":"/?$";return t=(t=(t=t.replace(/\/_fallback?$/,"(/|$)")).replace(/\/index$/,"(/index)?")).replace(ut,"([^/]+)")+n})(t.path,t.isFallback))}),oe=te(({file:t})=>{t.paramKeys=pt(t.path)}),re=te(({file:t})=>{t.isFallback||t.isIndex?t.shortPath=t.path.replace(/\/[^/]+$/,""):t.shortPath=t.path}),ie=te(({file:t})=>{t.ranking=(({path:t})=>t.split("/").filter(Boolean).map(t=>"_fallback"===t?"A":t.startsWith(":")?"B":"C").join(""))(t)}),se=te(({file:t})=>{const e=t,n=t.meta&&t.meta.children||[];n.length&&(e.children=e.children||[],e.children.push(...n.map(t=>({isMeta:!0,...t,meta:t}))))}),ae=te(t=>{const{file:e}=t,{isFallback:n,meta:o}=e;e.isIndexable=!n&&!1!==o.index,e.isNonIndexable=!e.isIndexable}),ce=te(({file:t,parent:e})=>{Object.defineProperty(t,"parent",{get:()=>e}),Object.defineProperty(t,"nextSibling",{get:()=>le(t,1)}),Object.defineProperty(t,"prevSibling",{get:()=>le(t,-1)}),Object.defineProperty(t,"lineage",{get:()=>function t(e,n=[]){e&&(n.unshift(e),t(e.parent,n));return n}(e)})});function le(t,e){if(!t.root){const n=t.parent.children.filter(t=>t.isIndexable),o=n.indexOf(t);return n[o+e]}}const ue=te(({file:t,parent:e})=>{t.isIndex&&Object.defineProperty(e,"index",{get:()=>t})}),fe=te(({file:t,scope:e})=>{Object.defineProperty(t,"layouts",{get:()=>function t(e){const{parent:n}=e,o=n&&n.component&&n,r=o&&o.isReset,i=n&&!r&&t(n)||[];o&&i.push(o);return i}(t)})}),pe=te(({file:t})=>{const e=t.root?function(){}:t.children?(t.isFile,function(){}):(t.isReset||t.isLayout||t.isFallback,function(){});Object.setPrototypeOf(t,e.prototype)});var de=Object.freeze({__proto__:null,setRegex:ne,setParamKeys:oe,setShortPath:re,setRank:ie,addMetaChildren:se,setIsIndexable:ae,assignRelations:ce,assignIndex:ue,assignLayout:fe,createFlatList:t=>{te(t=>{(t.file.isPage||t.file.isFallback)&&t.state.treePayload.routes.push(t.file)}).sync(t),t.routes.sort((t,e)=>t.ranking>=e.ranking?-1:1)},setPrototype:pe});const he=te(({file:t})=>{t.api=new me(t)});class me{constructor(t){this.__file=t,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!t.isMeta,this.path=t.path,this.title=function(t){return void 0!==t.meta.title?t.meta.title:(t.shortPath||t.path).split("/").pop().replace(/-/g," ")}(t),this.meta=t.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter(t=>!t.isNonIndexable).sort((t,e)=>t.isMeta&&e.isMeta?0:(t=(t.meta.index||t.meta.title||t.path).toString(),e=(e.meta.index||e.meta.title||e.path).toString(),t.localeCompare(e,void 0,{numeric:!0,sensitivity:"base"}))).map(({api:t})=>t)}get next(){return ge(this,1)}get prev(){return ge(this,-1)}preload(){this.__file.layouts.forEach(t=>t.component()),this.__file.component()}}function ge(t,e){if(!t.__file.root){const n=t.parent.children.indexOf(t);return t.parent.children[n+e]}}const ye={...de,assignAPI:he};const $e={name:"_layout",filepath:"/_layout.svelte",root:!0,ownMeta:{},absolutePath:"/home/runner/work/missions/missions/src/pages/_layout.svelte",children:[{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!0,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/_fallback",id:"__fallback",component:()=>import("./_fallback-45eda404.js").then(t=>t.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!0,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/index",id:"_index",component:()=>import("./index-35f828d9.js").then(t=>t.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/index copy",id:"_index_copy",component:()=>import("./index copy-9cbe19b0.js").then(t=>t.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/mission-01",id:"_mission01",component:()=>import("./mission-01-385b74a4.js").then(t=>t.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/mission-02",id:"_mission02",component:()=>import("./mission-02-cecc3784.js").then(t=>t.default)},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},path:"/mission-03",id:"_mission03",component:()=>import("./mission-03-755620cb.js").then(t=>t.default)}],isLayout:!0,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,isFile:!0,file:"_layout.svelte",ext:"svelte",badExt:!1,importPath:"../src/pages/_layout.svelte",meta:{recursive:!0,preload:!1,prerender:!0},path:"/",id:"__layout",component:()=>import("./_layout-fce5c092.js").then(t=>t.default)},{tree:be,routes:we}=function(t){const e=["setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:t,routes:[]};for(let t of e){(ye[t].sync||ye[t])(n)}return n}($e);function _e(e){let n,o;return n=new Yt({props:{routes:we}}),{c(){et(n.$$.fragment)},m(t,e){nt(n,t,e),o=!0},p:t,i(t){o||(G(n.$$.fragment,t),o=!0)},o(t){Q(n.$$.fragment,t),o=!1},d(t){ot(n,t)}}}!function(t,e={target:document.body},n="hmr",o="app-loaded"){const r=document.getElementById(n),i=document.createElement("div");r?i.style.visibility="hidden":i.setAttribute("id",n),e.target.appendChild(i),addEventListener(o,(function(){r&&r.remove();i.style.visibility="initial",i.setAttribute("id",n)})),new t({...e,target:i})}(class extends it{constructor(t){super(),rt(this,t,null,_e,s,{})}},{target:document.body},"routify-app");export{it as S,b as a,x as b,h as c,d,y as e,m as f,l as g,V as h,rt as i,u as j,P as k,_ as l,Mt as m,t as n,k as o,v as p,w as q,p as r,s,$ as t,It as u,G as v,Q as w,g as x};
//# sourceMappingURL=main.js.map
