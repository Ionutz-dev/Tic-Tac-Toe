(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{20:function(e,t,s){},21:function(e,t,s){},22:function(e,t,s){},24:function(e,t,s){},30:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),i=s(13),n=s.n(i),j=(s(20),s(21),s(22),s(1));var l=e=>Object(j.jsxs)("div",{className:e.active?"card active":"card",children:[Object(j.jsx)("h1",{children:e.name}),Object(j.jsxs)("p",{className:"title",children:["Player ","1"===e.num?"X":"O"]}),Object(j.jsxs)("p",{className:"score",children:["Score: ",e.score]})]});s(24);var r=e=>Object(j.jsxs)("div",{className:"modal",children:[Object(j.jsx)("h2",{children:"Type your name"}),Object(j.jsxs)("form",{onSubmit:t=>e.startHandler(t),children:[Object(j.jsxs)("div",{className:"user-box",children:[Object(j.jsx)("input",{type:"text",onChange:t=>e.initializeNames(t,0)}),Object(j.jsx)("label",{children:"Player X"})]}),Object(j.jsxs)("div",{className:"user-box",children:[Object(j.jsx)("input",{type:"text",onChange:t=>e.initializeNames(t,1)}),Object(j.jsx)("label",{children:"Player O"})]}),Object(j.jsxs)("button",{type:"submit",className:"button-submit",children:[Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),"Submit"]})]})]}),O=s(8),b=s(9);s(30);var d=e=>Object(j.jsxs)("div",{children:[e.show?Object(j.jsx)("div",{className:"Backdrop",onClick:e.clicked}):null,e.show?Object(j.jsxs)("div",{className:"popup center active",children:[Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)(O.a,{icon:b.a,className:"trophy"})}),Object(j.jsxs)("div",{className:"title",children:[e.winnerName," a castigat!"]}),Object(j.jsx)("div",{className:"description",children:"Esti prea jmecher la jocu asta \ud83e\udd73"}),Object(j.jsx)("div",{className:"dismiss-btn",children:Object(j.jsx)("button",{id:"dismiss-popup-btn",onClick:e.clicked,children:"Continue"})})]}):Object(j.jsxs)("div",{className:"popup center",children:[Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)(O.a,{icon:b.a,className:"trophy"})}),Object(j.jsxs)("div",{className:"title",children:[e.winnerName," a castigat!"]}),Object(j.jsx)("div",{className:"description",children:"Esti prea jmecher la jocu asta \ud83e\udd73"}),Object(j.jsx)("div",{className:"dismiss-btn",children:Object(j.jsx)("button",{id:"dismiss-popup-btn",onClick:e.clicked,children:"Continue"})})]})]});const o=[["","",""],["","",""],["","",""]];var m=()=>{const[e,t]=Object(c.useState)(o),[s,a]=Object(c.useState)(""),[i,n]=Object(c.useState)(!0),[O,b]=Object(c.useState)([]),[m,x]=Object(c.useState)(!0),[u,h]=Object(c.useState)(!1),[p,v]=Object(c.useState)(""),[N,X]=Object(c.useState)([0,0]),g=()=>{h(!1)},k=()=>{t([["","",""],["","",""],["","",""]]);let e=O[0];O[0]=O[1],O[1]=e,e=N[0],N[0]=N[1],N[1]=e,b(O),X(N),a(""),n(O[0]),v("")},C=()=>{let t=[];for(let s=0;s<3;s++)for(let c=0;c<3;c++)t.push(Object(j.jsx)("div",{className:"box",onClick:()=>S(s,c),children:e[s][c]},Math.random()));return t},S=(c,j)=>{""===p&&""===e[c][j]&&(""===s?e[c][j]="X":"X"===s?e[c][j]="O":"O"===s&&(e[c][j]="X"),n(!i),a(e[c][j]),t(e),"X"===e[0][0]&&"X"===e[0][1]&&"X"===e[0][2]||"X"===e[0][0]&&"X"===e[1][0]&&"X"===e[2][0]||"X"===e[2][0]&&"X"===e[2][1]&&"X"===e[2][2]||"X"===e[0][2]&&"X"===e[1][2]&&"X"===e[2][2]||"X"===e[1][0]&&"X"===e[1][1]&&"X"===e[1][2]||"X"===e[0][1]&&"X"===e[1][1]&&"X"===e[2][1]||"X"===e[0][0]&&"X"===e[1][1]&&"X"===e[2][2]||"X"===e[2][0]&&"X"===e[1][1]&&"X"===e[0][2]?(N[0]++,X(N),h(!0),v(O[0])):("O"===e[0][0]&&"O"===e[0][1]&&"O"===e[0][2]||"O"===e[0][0]&&"O"===e[1][0]&&"O"===e[2][0]||"O"===e[2][0]&&"O"===e[2][1]&&"O"===e[2][2]||"O"===e[0][2]&&"O"===e[1][2]&&"O"===e[2][2]||"O"===e[1][0]&&"O"===e[1][1]&&"O"===e[1][2]||"O"===e[0][1]&&"O"===e[1][1]&&"O"===e[2][1]||"O"===e[0][0]&&"O"===e[1][1]&&"O"===e[2][2]||"O"===e[2][0]&&"O"===e[1][1]&&"O"===e[0][2])&&(N[1]++,X(N),h(!0),v(O[1])))};let f=Object(j.jsx)(r,{initializeNames:(e,t)=>{e.preventDefault(),O[t]=e.target.value,b(O)},startHandler:e=>{e.preventDefault(),2===O.length&&x(!1)}});return m||(f=Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{winnerName:p,clicked:g,show:u}),Object(j.jsx)(l,{name:O[0],num:"1",active:i,score:N[0]}),Object(j.jsx)("div",{className:"game-board",children:C()}),Object(j.jsx)(l,{name:O[1],num:"2",active:!i,score:N[1]}),Object(j.jsxs)("div",{id:"restart",className:"buttonBox",onClick:k,children:[Object(j.jsx)("button",{className:"restart-button",onClick:k,children:"Restart"}),Object(j.jsx)("div",{className:"border"}),Object(j.jsx)("div",{className:"border"})]})]})),f};var x=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,34)).then((t=>{let{getCLS:s,getFID:c,getFCP:a,getLCP:i,getTTFB:n}=t;s(e),c(e),a(e),i(e),n(e)}))},u=s(15);n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(u.a,{children:Object(j.jsx)(m,{})})}),document.getElementById("root")),x()}},[[33,1,2]]]);
//# sourceMappingURL=main.7e74531b.chunk.js.map