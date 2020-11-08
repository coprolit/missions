import{S as e,i as n,s as t,e as o,t as i,b as s,c as a,d as c,n as l,f as r,a as d,o as p,l as u,p as m,r as h,g as b,q as k,v as f}from"./main.js";function g(e){let n,t,d,p;return{c(){n=o("div"),t=o("input"),d=i("   \n                vs.\n                "),p=o("input"),s(t,"type","email"),s(t,"name","email1"),s(t,"pattern",R),s(t,"title","player 1 email address"),t.required=!0,s(t,"placeholder","Player's email"),s(p,"type","email"),s(p,"name","email2"),s(p,"pattern",R),s(p,"title","player 2 email address"),p.required=!0,s(p,"placeholder","Player's email")},m(e,o){a(e,n,o),c(n,t),c(n,d),c(n,p)},p:l,d(e){e&&r(n)}}}function v(e){let n,t,l,u,m,h;return{c(){n=o("div"),t=d(),l=o("div"),l.textContent="You are to face your opponent in:",u=d(),m=o("blockquote"),h=i(e[3]),s(n,"class","border-top")},m(e,o){a(e,n,o),a(e,t,o),a(e,l,o),a(e,u,o),a(e,m,o),c(m,h)},p(e,n){8&n&&p(h,e[3])},d(e){e&&r(n),e&&r(t),e&&r(l),e&&r(u),e&&r(m)}}}function S(e){let n,t,i;return{c(){n=o("div"),t=d(),i=o("div"),i.innerHTML='Secret missions have been assigned and send to each player. <span class="check-mark">✓</span>',s(n,"class","border-top")},m(e,o){a(e,n,o),a(e,t,o),a(e,i,o)},d(e){e&&r(n),e&&r(t),e&&r(i)}}}function y(e){let n,t,i,p,b,k,f,y,R,x,j,M,w,T,C,D,E,q,P,z,B,H,L,Y,$,A,F,G,K,N,U,_,I,J,O=e[0]&&g(),Q=e[3]&&v(e),V=e[4]&&e[5]&&S();return{c(){n=o("script"),i=d(),p=o("h1"),p.textContent="Assign objectives",b=d(),k=o("p"),k.textContent="Randomly assign scenario and/or secret missions:",f=d(),y=o("div"),R=o("form"),x=o("div"),j=o("div"),M=o("input"),w=d(),T=o("label"),T.textContent="Rulebook Battle scenarios",C=d(),D=o("div"),E=o("input"),q=d(),P=o("label"),P.textContent="Rulebook Attacker-Defender scenarios",z=d(),B=o("div"),H=o("input"),L=d(),Y=o("label"),Y.textContent="Secret missions",$=d(),O&&O.c(),A=d(),F=o("div"),F.innerHTML='<input type="submit" value="Generate"/>',G=d(),Q&&Q.c(),K=d(),V&&V.c(),N=d(),U=o("img"),n.src!==(t="https://smtpjs.com/v3/smtp.js")&&s(n,"src","https://smtpjs.com/v3/smtp.js"),s(M,"type","checkbox"),s(M,"id","battle"),s(T,"for","battle"),s(E,"type","checkbox"),s(E,"id","attacker-defender"),s(P,"for","attacker-defender"),s(H,"type","checkbox"),s(H,"id","mission"),s(Y,"for","mission"),s(R,"class","flow"),s(y,"class","shadow padding flow border"),U.src!==(_="/images/lpkb2gkaw4s51.jpg")&&s(U,"src","/images/lpkb2gkaw4s51.jpg"),s(U,"alt","mission briefing"),s(U,"class","svelte-1gh7ed8")},m(t,o){c(document.head,n),a(t,i,o),a(t,p,o),a(t,b,o),a(t,k,o),a(t,f,o),a(t,y,o),c(y,R),c(R,x),c(x,j),c(j,M),M.checked=e[1],c(j,w),c(j,T),c(x,C),c(x,D),c(D,E),E.checked=e[2],c(D,q),c(D,P),c(R,z),c(R,B),c(B,H),H.checked=e[0],c(B,L),c(B,Y),c(B,$),O&&O.m(B,null),c(R,A),c(R,F),c(y,G),Q&&Q.m(y,null),c(y,K),V&&V.m(y,null),a(t,N,o),a(t,U,o),I||(J=[u(M,"change",e[7]),u(E,"change",e[8]),u(H,"change",e[9]),u(R,"submit",m(e[6]))],I=!0)},p(e,[n]){2&n&&(M.checked=e[1]),4&n&&(E.checked=e[2]),1&n&&(H.checked=e[0]),e[0]?O?O.p(e,n):(O=g(),O.c(),O.m(B,null)):O&&(O.d(1),O=null),e[3]?Q?Q.p(e,n):(Q=v(e),Q.c(),Q.m(y,K)):Q&&(Q.d(1),Q=null),e[4]&&e[5]?V||(V=S(),V.c(),V.m(y,null)):V&&(V.d(1),V=null)},i:l,o:l,d(e){r(n),e&&r(i),e&&r(p),e&&r(b),e&&r(k),e&&r(f),e&&r(y),O&&O.d(),Q&&Q.d(),V&&V.d(),e&&r(N),e&&r(U),I=!1,h(J)}}}const R="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";function x(e,n=0){return Math.floor(Math.random()*(e-n+1)+n)}function j(e,n,t){let o;b(e,f,e=>t(11,o=e)),k.title="Mission generator",k.description="Description coming soon...";let i=!1,s=!1,a=!1,c=!1,l=!1,r=!1;return[i,s,a,c,l,r,function(e){t(4,l=!1),t(5,r=!1),t(3,c=!1),i&&function(e,n){const i=o.parent.children.filter(e=>"/missions"===e.path)[0].children.map(e=>({path:window.location.href+e.path.slice(1),title:e.title})),s=i[x(i.length-1)];Email.send({SecureToken:"0b6eed09-ca2b-41ed-9283-2d33686b5dd2",To:e,From:"missions@philippesimpson.dk",Subject:"You have been assigned the mission: "+s.title,Body:`See your mission <a href=${s.path}>here</a>`}).then(e=>t(4,l=!0));const a=i[x(i.length-1)];Email.send({SecureToken:"0b6eed09-ca2b-41ed-9283-2d33686b5dd2",To:n,From:"missions@philippesimpson.dk",Subject:"You have been assigned the mission: "+a.title,Body:`See your mission <a href=${a.path}>here</a>`}).then(e=>t(5,r=!0))}(e.target.email1.value,e.target.email2.value),(s||a)&&t(3,c=function(e,n){const t=["Scenario 1 – No Man's Land (Rulebook p.134)","Scenario 2 – Meeting Engagement (Rulebook p.135)","Scenario 3 – Key Positions (Rulebook p.136)","Scenario 4 – Double Envelopment (Rulebook p.137)","Scenario 5 – Top Secret (Rulebook p.138)","Scenario 6 – Demolition (Rulebook p.139)","Scenario 7 – Envelopment (Rulebook p.140)","Scenario 8 – Manhunt (Rulebook p.142)","Scenario 9 – Point Defence (Rulebook p.144)","Scenario 10 – Hold Until Relieved (Rulebook p.145)","Scenario 11 – Surrounded! (Rulebook p.146)","Scenario 12 – Sectors (Rulebook p.148)"];return e&&n?t[x(11)]:e?t[x(5)]:n?t[x(11,6)]:void 0}(s,a))},function(){s=this.checked,t(1,s)},function(){a=this.checked,t(2,a)},function(){i=this.checked,t(0,i)}]}export default class extends e{constructor(e){super(),n(this,e,j,y,t,{})}}
//# sourceMappingURL=index-a96f0bec.js.map
