(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),o=n(5),r=n(1),a=(n(12),n(2)),i=n(0),u=function(t){var e=t.goods,n=Object(r.useState)(Object(a.a)(e)),c=Object(o.a)(n,2),s=c[0],u=c[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("ul",{className:"goodsList",children:s.map((function(t){return Object(i.jsx)("li",{className:"",children:t},t)}))}),Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)("button",{type:"button",onClick:function(){return u(Object(a.a)(s).reverse())},className:"button",children:"Reverse"}),Object(i.jsx)("button",{type:"button",onClick:function(){return u(Object(a.a)(s).sort((function(t,e){return t.localeCompare(e)})))},className:"button",children:"Sort alphabetically"}),Object(i.jsx)("button",{type:"button",onClick:function(){return u(Object(a.a)(s).sort((function(t,e){return t.length-e.length})))},className:"button",children:"Sort by length"}),Object(i.jsx)("button",{type:"button",onClick:function(){return u(Object(a.a)(e))},className:"button is-danger",children:"Reset"})]})]})},l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(){var t=Object(r.useState)(!1),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(i.jsxs)("div",{className:"App container box is-centered has-text-centered",children:[Object(i.jsx)("h1",{className:"title",children:"Goods"}),n?Object(i.jsx)(u,{goods:l}):Object(i.jsx)("button",{type:"button",onClick:function(){return c(!0)},className:"button is-light is-medium",children:"Start"})]})};s.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e127bc86.chunk.js.map