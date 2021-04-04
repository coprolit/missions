import{S as e,i as t,s as n,h as i,c as r,n as a,f as o,e as l,t as s,a as u,b as m,d as c,j as d,k as f,l as p,p as N}from"./main.js";function S(e,t,n){const i=e.slice();return i[3]=t[n],i}function I(e){let t,n,i,a,p,N,I,b,h,g,P,v,k,A,U,w,E,M,T,D=e[1].orderDice+"",H=e[1].points+"",O=e[1].platoons,G=[];for(let t=0;t<O.length;t+=1)G[t]=y(S(e,O,t));return{c(){t=l("div"),n=l("div"),i=s("Order Dice: "),a=s(D),p=u(),N=l("div"),I=s("Total Points: "),b=s(H),h=u();for(let e=0;e<G.length;e+=1)G[e].c();g=u(),P=l("div"),v=u(),k=l("div"),A=u(),U=l("div"),w=u(),E=l("div"),M=u(),T=l("div"),m(t,"class","flow")},m(e,o){r(e,t,o),c(t,n),c(n,i),c(n,a),c(t,p),c(t,N),c(N,I),c(N,b),c(t,h);for(let e=0;e<G.length;e+=1)G[e].m(t,null);c(t,g),c(t,P),c(t,v),c(t,k),c(t,A),c(t,U),c(t,w),c(t,E),c(t,M),c(t,T)},p(e,n){if(2&n&&D!==(D=e[1].orderDice+"")&&d(a,D),2&n&&H!==(H=e[1].points+"")&&d(b,H),2&n){let i;for(O=e[1].platoons,i=0;i<O.length;i+=1){const r=S(e,O,i);G[i]?G[i].p(r,n):(G[i]=y(r),G[i].c(),G[i].m(t,g))}for(;i<G.length;i+=1)G[i].d(1);G.length=O.length}},d(e){e&&o(t),f(G,e)}}}function b(e){let t,n,i;return{c(){t=l("form"),t.innerHTML='<label for="url">Import army:</label> \n\t\t<input type="url" name="url"/> \n\t\t<button type="submit">Submit</button>'},m(a,o){r(a,t,o),n||(i=p(t,"submit",N(e[2])),n=!0)},p:a,d(e){e&&o(t),n=!1,i()}}}function y(e){let t,n,i,a,f,p,N,S,I,b,y=e[3].name+"",h=e[3].subName+"",g=JSON.stringify(e[3],null,2)+"";return{c(){t=l("div"),n=s(y),i=u(),a=l("h3"),f=s(h),p=u(),N=l("div"),S=l("pre"),I=s(g),b=u(),m(S,"class","svelte-8pwile")},m(e,o){r(e,t,o),c(t,n),r(e,i,o),r(e,a,o),c(a,f),r(e,p,o),r(e,N,o),c(N,S),c(S,I),c(N,b)},p(e,t){2&t&&y!==(y=e[3].name+"")&&d(n,y),2&t&&h!==(h=e[3].subName+"")&&d(f,h),2&t&&g!==(g=JSON.stringify(e[3],null,2)+"")&&d(I,g)},d(e){e&&o(t),e&&o(i),e&&o(a),e&&o(p),e&&o(N)}}}function h(e){let t;function n(e,t){return e[0]?b:I}let l=n(e),s=l(e);return{c(){s.c(),t=i()},m(e,n){s.m(e,n),r(e,t,n)},p(e,[i]){l===(l=n(e))&&s?s.p(e,i):(s.d(1),s=l(e),s&&(s.c(),s.m(t.parentNode,t)))},i:a,o:a,d(e){s.d(e),e&&o(t)}}}function g(e){if(e.SectionName.includes("Artillery"))return 6;if(e.UnitItems[0].ItemMobility){if(e.UnitItems[0].ItemMobility.includes("Wheeled"))return 24;if(e.UnitItems[0].ItemMobility.includes("Tracked"))return 18}return 12}function P(e){return e.SectionName.includes("Infantry")||e.SectionName.includes("Officer")||e.SectionName.includes("Mortar")||e.SectionName.includes("Sniper")||e.SectionName.includes("Anti-tank")||e.SectionName.includes("Artillery")?"Inexperienced"===e.UnitSkill?3:"Regular"===e.UnitSkill?4:"Veteran"===e.UnitSkill?5:4:e.SectionName.includes("Armoured Cars")||e.SectionName.includes("Tanks and SP Guns")?Number(e.UnitItems[0].ItemDamageValue.slice(0,-1)):4}function v(e){return e.SectionName.includes("Infantry")||e.SectionName.includes("Officer")?e.UnitItems.filter(e=>!!e.ItemQuantity).flatMap(k).map(U):e.SectionName.includes("Mortar")||e.SectionName.includes("Artillery")||e.SectionName.includes("Sniper")||e.SectionName.includes("Machine Gun")||e.SectionName.includes("Anti-tank")?e.UnitItems.filter(e=>!!e.ItemQuantity).flatMap(e=>k(e)).map(U):e.SectionName.includes("Armoured Cars")||e.SectionName.includes("Tanks and SP Guns")?e.UnitItems.filter(e=>"true"===e.IsGun).map(U):[]}function k(e){return Array.from(Array(e.ItemQuantity)).map(()=>e)}function A(e){return Number(e.ItemPEN)||Number(e.ItemPen)||("HE"===e.ItemPen||"HE"===e.ItemPEN?(t=e.ItemNotes,Number(t.charAt(t.search(/HE \(/g)+4))):0)||0;var t}function U(e){return{pen:A(e),rof:(n=e.ItemROF,Number(n)?Number(n):n.includes("D6")?1:(n.includes("-"),2)),range:(t=e.ItemRange,"string"==typeof t?0===t.length?12:Number(t.slice(-3,-1)):Number(t)||12),type:w(e)};var t,n}function w(e){return Number(e.ItemPEN)||Number(e.ItemPen)?"AT":"HE"===e.ItemPen||"HE"===e.ItemPEN?"HE":"SA"}function E(e,t,n){let i,r=!0;return[r,i,async function(e){const t=new FormData(e.target).get("url");try{const e=await fetch("https://www.philippesimpson.dk/armylist.php?url="+t,{method:"GET"});if(!e.ok)throw new Error(e.statusText);const a=await e.json();console.log("result",a),n(0,r=!1),n(1,i=function(e){const t=e.Platoons.map(e=>{const t=e.Units.map(e=>({name:e.UnitName,sectionName:e.SectionName,skill:e.UnitSkill,damageValue:P(e),movement:g(e),weapons:v(e)}));return{name:e.PlatoonName,subName:e.PlatoonSubName,units:t}});return{orderDice:e.OrderDice,points:e.TotalPoints,platoons:t}}(a)),console.log(i)}catch(e){throw alert("Army list not found."),e}}]}export default class extends e{constructor(e){super(),t(this,e,E,h,n,{})}}
//# sourceMappingURL=analyzer-37d62d9a.js.map
