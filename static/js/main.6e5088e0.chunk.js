(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(8),l=n.n(o),r=(n(14),n(15),n(16),n(2)),u=n(3),i=n(1),s=n(6),m=n.n(s),d=function(e){var t=e.todo,n=e.deleteTodo,o=e.changeCompleteness,l=e.changeTodoTitle,r=Object(a.useState)(!1),u=Object(i.a)(r,2),s=u[0],d=u[1],f=Object(a.useState)(null),p=Object(i.a)(f,2),b=p[0],O=p[1],h=Object(a.useState)(t.title),g=Object(i.a)(h,2),j=g[0],E=g[1];return c.a.createElement("li",{className:m()({completed:t.completed,editing:b===t.id&&s}),onDoubleClick:function(){d(!0),O(t.id)}},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(){o(t.id)}}),c.a.createElement("label",null,t.title),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return n(t.id)}})),s&&c.a.createElement("input",{type:"text",className:"edit",autoFocus:!0,onBlur:function(){return d(!s)},value:j,onChange:function(e){return E(e.target.value)},onKeyDown:function(e){return function(e){switch(e.key){case"Escape":E(t.title),d(!s);break;case"Enter":if(j.trim()){l(b,j.trim()),d(!s);break}}}(e)}}))},f=function(e){var t=e.todos,n=e.deleteTodo,a=e.changeCompleteness,o=e.changeTodoTitle;return c.a.createElement("ul",{className:"todo-list"},t.map((function(e){return c.a.createElement(d,{key:e.id,todo:e,deleteTodo:n,changeCompleteness:a,changeTodoTitle:o})})))},p={all:"All",active:"Active",completed:"Completed"},b=function(e){var t=e.choosenFilter,n=e.setChoosenFilter,a=Object.values(p);return c.a.createElement("ul",{className:"filters"},a.map((function(e){return c.a.createElement("button",{key:e,type:"button",onClick:function(){return n(e)}},c.a.createElement("a",{href:"#/".concat(e),className:m()({selected:t===e})},e))})))},O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(""),s=Object(i.a)(l,2),m=s[0],d=s[1],O=Object(a.useState)(!1),h=Object(i.a)(O,2),g=h[0],j=h[1],E=Object(a.useState)(p.all),v=Object(i.a)(E,2),N=v[0],k=v[1];Object(a.useEffect)((function(){localStorage.todos?o(JSON.parse(localStorage.getItem("todos"))):localStorage.setItem("todos",JSON.stringify([]))}),[]),Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);var C=Object(a.useMemo)((function(){switch(N){case p.active:return n.filter((function(e){return!e.completed}));case p.completed:return n.filter((function(e){return e.completed}));default:return n}}),[n,N]);return c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos App"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m&&(o((function(e){return[].concat(Object(u.a)(e),[{id:+new Date,title:m,completed:!1}])})),d(""))}},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:m,onChange:function(e){return d(e.target.value)}}))),c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:g,onChange:function(){j(!g),o(g?Object(u.a)(n).map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!1})})):Object(u.a)(n).map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!0})})))}}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement(f,{todos:C,deleteTodo:function(e){var t=Object(u.a)(n).filter((function(t){return t.id!==e}));o(t)},changeCompleteness:function(e){var t=Object(u.a)(n).map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}));o(t)},changeTodoTitle:function(e,t){return o(Object(u.a)(n).map((function(n){return n.id===e?Object(r.a)(Object(r.a)({},n),{},{title:t}):n})))}})),0===n.length?null:c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},n.filter((function(e){return!e.completed})).length,1===n.filter((function(e){return!e.completed})).length?" item left":" items left"),c.a.createElement(b,{choosenFilter:N,setChoosenFilter:k}),n.some((function(e){return!0===e.completed}))&&c.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){o(Object(u.a)(n).filter((function(e){return!1===e.completed}))),j(!1)}},"Clear completed")))};l.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.6e5088e0.chunk.js.map