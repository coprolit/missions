import{S as e,i as s,s as t,e as a,a as i,b as o,d as r,c as n,w as l,n as m,f as d,x as c,y as p,z as u}from"./main.js";const{document:h}=p;function f(e){let s,t,c,p,f,g,S,j,v,x,k,z,E,M,T,q,A,B,C,$,F;return{c(){s=a("script"),c=i(),p=a("h1"),p.textContent="Bolt Action side missions generator",f=i(),g=a("form"),S=a("label"),S.textContent="Player #1",j=i(),v=a("input"),x=i(),k=a("br"),z=i(),E=a("label"),E.textContent="Player #2",M=i(),T=a("input"),q=i(),A=a("br"),B=i(),C=a("input"),s.src!==(t="https://smtpjs.com/v3/smtp.js")&&o(s,"src","https://smtpjs.com/v3/smtp.js"),o(S,"for","email1"),o(v,"type","email"),o(v,"name","email1"),o(v,"pattern",b),o(v,"title","player 1 email address"),v.required=!0,o(v,"placeholder","Enter email"),o(E,"for","email2"),o(T,"type","email"),o(T,"name","email2"),o(T,"pattern",b),o(T,"title","player 2 email address"),T.required=!0,o(T,"placeholder","Enter email"),o(C,"type","submit")},m(e,t){r(h.head,s),n(e,c,t),n(e,p,t),n(e,f,t),n(e,g,t),r(g,S),r(g,j),r(g,v),r(g,x),r(g,k),r(g,z),r(g,E),r(g,M),r(g,T),r(g,q),r(g,A),r(g,B),r(g,C),$||(F=l(g,"submit",u(y)),$=!0)},p:m,i:m,o:m,d(e){d(s),e&&d(c),e&&d(p),e&&d(f),e&&d(g),$=!1,F()}}}const b="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";function y(e){const s=Array.from(document.querySelectorAll("a")).filter(e=>e.href.includes("mission")).map(e=>e.href),t=s[(a=s.length,Math.floor(Math.random()*Math.floor(a)))];var a;Email.send({SecureToken:"0b6eed09-ca2b-41ed-9283-2d33686b5dd2",To:e.target.email1.value,From:"missions@philippesimpson.dk",Subject:"You have been assigned a secret side mission",Body:`See your mission <a href=${t}>here</a>`}).then(e=>console.log(e)),Email.send({SecureToken:"0b6eed09-ca2b-41ed-9283-2d33686b5dd2",To:e.target.email2.value,From:"missions@philippesimpson.dk",Subject:"You have been assigned a secret side mission",Body:`See your mission <a href=${t}>here</a>`}).then(e=>console.log(e))}function g(e){return c.title="My Routify app",c.description="Description coming soon...",[]}export default class extends e{constructor(e){super(),s(this,e,g,f,t,{})}}
//# sourceMappingURL=index-70e664b2.js.map
