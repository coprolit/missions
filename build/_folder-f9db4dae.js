import{S as s,i as t,s as e,t as n,e as a,a as l,b as i,j as o,c as r,d as c,k as h,f,o as u,q as m,r as p,v as d,w as $,g,h as v,u as x,x as j}from"./main.js";function b(s,t,e){const n=s.slice();return n[6]=t[e],n}function k(s){let t,e,u,m,p,d=s[6].title+"";return{c(){t=n("|\n    "),e=a("a"),u=n(d),m=l(),i(e,"href",p=s[1](s[6].path)),o(e,"active",s[2](s[6].path))},m(s,n){r(s,t,n),r(s,e,n),c(e,u),c(e,m)},p(s,t){1&t&&d!==(d=s[6].title+"")&&h(u,d),3&t&&p!==(p=s[1](s[6].path))&&i(e,"href",p),5&t&&o(e,"active",s[2](s[6].path))},d(s){s&&f(t),s&&f(e)}}}function q(s){let t,e,h,g,v,x,j,q,w,A,B=s[0],C=[];for(let t=0;t<B.length;t+=1)C[t]=k(b(s,B,t));const H=s[4].default,S=u(H,s,s[3],null);return{c(){t=a("nav"),e=a("h1"),e.textContent="Bolt Action side missions generator",h=l(),g=a("a"),v=n("Home"),j=l();for(let s=0;s<C.length;s+=1)C[s].c();q=l(),w=a("main"),S&&S.c(),i(g,"href",x=s[1]()),o(g,"active",s[2](s[1]()))},m(s,n){r(s,t,n),c(t,e),c(t,h),c(t,g),c(g,v),c(t,j);for(let s=0;s<C.length;s+=1)C[s].m(t,null);r(s,q,n),r(s,w,n),S&&S.m(w,null),A=!0},p(s,[e]){if((!A||2&e&&x!==(x=s[1]()))&&i(g,"href",x),6&e&&o(g,"active",s[2](s[1]())),7&e){let n;for(B=s[0],n=0;n<B.length;n+=1){const a=b(s,B,n);C[n]?C[n].p(a,e):(C[n]=k(a),C[n].c(),C[n].m(t,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=B.length}S&&S.p&&8&e&&m(S,H,s,s[3],e,null,null)},i(s){A||(p(S,s),A=!0)},o(s){d(S,s),A=!1},d(s){s&&f(t),$(C,s),s&&f(q),s&&f(w),S&&S.d(s)}}}function w(s,t,e){let n,a,l;g(s,v,s=>e(5,n=s)),g(s,x,s=>e(1,a=s)),g(s,j,s=>e(2,l=s));let{$$slots:i={},$$scope:o}=t,{missions:r=n.children.filter(s=>"/missions"===s.path)[0].children}=t;return s.$$set=s=>{"missions"in s&&e(0,r=s.missions),"$$scope"in s&&e(3,o=s.$$scope)},[r,a,l,o,i]}export default class extends s{constructor(s){super(),t(this,s,w,q,e,{missions:0})}}
//# sourceMappingURL=_folder-f9db4dae.js.map
