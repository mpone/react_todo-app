(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(8),l=n.n(o),r=(n(14),n(15),n(16),n(2)),i=n(3),u=n(1),s=n(6),m=n.n(s),d=function(e){var t=e.todo,n=e.deleteTodo,o=e.changeCompleteness,l=e.changeTodoTitle,r=Object(a.useState)(!1),i=Object(u.a)(r,2),s=i[0],d=i[1],p=Object(a.useState)(null),f=Object(u.a)(p,2),b=f[0],h=f[1],j=Object(a.useState)(t.title),O=Object(u.a)(j,2),E=O[0],g=O[1];return c.a.createElement("li",{className:m()({completed:t.completed,editing:b===t.id&&s}),onDoubleClick:function(){d(!0),h(t.id)}},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(){o(t.id)}}),c.a.createElement("label",null,t.title),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return n(t.id)}})),s&&c.a.createElement("input",{type:"text",className:"edit",autoFocus:!0,onBlur:function(){return d(!s)},value:E,onChange:function(e){return g(e.target.value)},onKeyDown:function(e){return function(e){switch(e.key){case"Escape":g(t.title),d(!s);break;case"Enter":if(E.trim()){l(b,E.trim()),d(!s);break}}}(e)}}))},p=function(e){var t=e.todos,n=e.deleteTodo,a=e.changeCompleteness,o=e.changeTodoTitle;return c.a.createElement("ul",{className:"todo-list"},t.map((function(e){return c.a.createElement(d,{key:e.id,todo:e,deleteTodo:n,changeCompleteness:a,changeTodoTitle:o})})))},f={all:"All",active:"Active",completed:"Completed"},b=function(e){var t=e.choosenFilter,n=e.setChoosenFilter,a=Object.values(f);return c.a.createElement("ul",{className:"filters"},a.map((function(e){return c.a.createElement("button",{key:e,type:"button",onClick:function(){return n(e)}},c.a.createElement("a",{href:"#/".concat(e),className:m()({selected:t===e})},e))})))},h=[{id:1,title:"first",completed:!1},{id:2,title:"second",completed:!1},{id:3,title:"third",completed:!1}],j=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(""),s=Object(u.a)(l,2),m=s[0],d=s[1],j=Object(a.useState)(!1),O=Object(u.a)(j,2),E=O[0],g=O[1],v=Object(a.useState)(f.all),k=Object(u.a)(v,2),C=k[0],N=k[1];Object(a.useEffect)((function(){o(h)}),[]);var y=Object(a.useMemo)((function(){switch(C){case f.active:return n.filter((function(e){return!e.completed}));case f.completed:return n.filter((function(e){return e.completed}));default:return n}}),[n,C]);return c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos App"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m&&(o((function(e){return[].concat(Object(i.a)(e),[{id:+new Date,title:m,completed:!1}])})),d(""))}},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:m,onChange:function(e){return d(e.target.value)}}))),c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:E,onChange:function(){g(!E),o(E?Object(i.a)(n).map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!1})})):Object(i.a)(n).map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!0})})))}}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement(p,{todos:y,deleteTodo:function(e){var t=Object(i.a)(n).filter((function(t){return t.id!==e}));o(t)},changeCompleteness:function(e){var t=Object(i.a)(n).map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}));o(t)},changeTodoTitle:function(e,t){return o(Object(i.a)(n).map((function(n){return n.id===e?Object(r.a)(Object(r.a)({},n),{},{title:t}):n})))}})),0===n.length?null:c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},n.filter((function(e){return!e.completed})).length,1===n.filter((function(e){return!e.completed})).length?" item left":" items left"),c.a.createElement(b,{choosenFilter:C,setChoosenFilter:N}),n.some((function(e){return!0===e.completed}))&&c.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){o(Object(i.a)(n).filter((function(e){return!1===e.completed}))),g(!1)}},"Clear completed")))};l.a.render(c.a.createElement(j,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.c6577694.chunk.js.map