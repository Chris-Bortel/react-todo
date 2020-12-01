(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{80:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),s=n(17),i=n.n(s),o=n(43),l=n(12),u=n(14),j=n.n(u),d=n(28),b=n(9),h=n(87),p=n(90),m=n(82),O=n(26);function f(e){var t=Object(a.useState)({}),n=Object(b.a)(t,2),c=n[0],r=n[1];function s(t){t.preventDefault(),t.target.reset(),e&&e(c),r({})}function i(e){e.persist(),"maxNum"!==e.target.name&&"difficulty"!==e.target.name?"showCompleted"!==e.target.name?r(Object(l.a)(Object(l.a)({},c),{},Object(O.a)({},e.target.name,e.target.value))):r(Object(l.a)(Object(l.a)({},c),{},Object(O.a)({},e.target.name,"yes"===e.target.value))):r(Object(l.a)(Object(l.a)({},c),{},Object(O.a)({},e.target.name,Number(e.target.value))))}return[s,i,c]}function x(e){var t=f(e.handleSubmit),n=Object(b.a)(t,3),r=n[0],s=n[1],i=n[2],o=Object(a.useState)({disabled:!0}),l=Object(b.a)(o,2),u=l[0],j=l[1];return Object(a.useEffect)((function(){i.item&&i.assignee?j({disabled:!1}):j({disabled:!0})}),[i]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(h.a,{onSubmit:r,children:Object(c.jsx)(p.a,{children:Object(c.jsxs)(p.a.Body,{children:[Object(c.jsx)(p.a.Title,{children:"Add To Do Item"}),Object(c.jsxs)(h.a.Group,{controlId:"item",children:[Object(c.jsx)(h.a.Label,{children:"To Do Item"}),Object(c.jsx)(h.a.Control,{required:!0,autoComplete:"off",name:"item",type:"text",placeholder:"Item Details",onChange:s})]}),Object(c.jsxs)(h.a.Group,{controlId:"assignee",children:[Object(c.jsx)(h.a.Label,{children:"Assigned To"}),Object(c.jsx)(h.a.Control,{required:!0,autoComplete:"off",name:"assignee",type:"text",placeholder:"Assignee Name",onChange:s})]}),Object(c.jsxs)(h.a.Group,{controlId:"difficulty",children:[Object(c.jsx)(h.a.Label,{children:"Difficulty Rating"}),Object(c.jsx)(h.a.Control,{required:!0,defaultValue:"1",type:"range",min:"1",max:"5",name:"difficulty",placeholder:"Assignee Name",onChange:s})]}),Object(c.jsx)(m.a,{variant:"primary",type:"submit",disabled:u.disabled,children:"Add Item"})]})})})})}var g=n(91),v=n(83),y=n(89),C=n(38),w=r.a.createContext();var N=function(e){var t=Object(a.useState)({showCompleted:!1,maxNum:5,sort:"difficulty",sortOrder:"ascending"}),n=Object(b.a)(t,2),r=n[0],s=n[1];return Object(c.jsx)(w.Provider,{value:{settings:r,setSettings:s},children:e.children})};function S(e){var t=Object(a.useContext)(w),n=Object(a.useState)({page1:[]}),r=Object(b.a)(n,2),s=r[0],i=r[1],o=Object(a.useState)({pageNum:1,list:[]}),l=Object(b.a)(o,2),u=l[0],j=l[1];function d(e){j({pageNum:e,list:s["page".concat(e)]})}return Object(a.useEffect)((function(){!function(e){var n=[],c=t.settings,a=c.showCompleted,r=c.maxNum,s=c.sort,o=c.sortOrder;n=!1===a?e.filter((function(e){return!1===e.complete})):e;if(n.sort(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ascending";return function(n,c){if(!n[e]||!c[e])return 0;var a="string"===typeof n[e]?n[e].toLowerCase():n[e],r="string"===typeof c[e]?c[e].toLowerCase():c[e],s=0;return a>r?s=1:a<r&&(s=-1),"descending"===t?-1*s:s}}(s,o)),r<n.length){for(var l=Math.ceil(n.length/r),u={},j=0;j<l;j++){var d=n.slice(j*r,j*r+r);u["page".concat(j+1)]=d}i(u)}else i({page1:n})}(e.list)}),[e.list,t]),Object(a.useEffect)((function(){j({pageNum:1,list:s.page1})}),[s]),Object(c.jsxs)(C.b,{condition:e.error,children:[Object(c.jsx)(C.c,{children:Object(c.jsx)(v.a,{className:"bg-danger",children:Object(c.jsx)("h2",{children:e.error})})}),Object(c.jsxs)(C.a,{children:[u.list.map((function(t){return Object(c.jsxs)(y.a,{onClose:function(){return e.handleDelete(t._id)},style:{width:"100%",maxWidth:"100%"},children:[Object(c.jsxs)(y.a.Header,{children:[Object(c.jsx)("strong",{className:"".concat(t.complete?"bg-success":"bg-danger"," rounded mr-2 text-white p-1"),onClick:function(){return e.handleComplete(t._id)},children:t.complete?"Completed":"Pending"}),Object(c.jsx)("span",{className:"ml-auto mr-auto h6",children:t.assignee})]}),Object(c.jsxs)(y.a.Body,{children:[Object(c.jsx)("span",{className:"mr-auto h5",children:t.item}),Object(c.jsx)("small",{className:"float-right",children:"Difficulty: ".concat(t.difficulty)})]})]},t._id)})),function(){for(var e=[],t=Object.keys(s).length,n=function(t){e.push(Object(c.jsx)(g.a.Item,{active:t===u.pageNum,onClick:function(){return d(t)},children:t},t))},a=1;a<=t;a++)n(a);return Object(c.jsx)(g.a,{children:e})}()]})]})}var k=n(88);function I(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(k.a,{bg:"primary",variant:"dark",children:Object(c.jsx)(k.a.Brand,{href:"#home",children:"Home"})})})}var L=n(84),D=n(85),B=n(52),T=(n(62),"https://peng-authenticated-api-server.herokuapp.com/api/todo"),q=n(31),F=n.n(q),G=n(86);var A=function(e){var t=f((function(t){i.setSettings(t),e.handleClose()})),n=Object(b.a)(t,2),r=n[0],s=n[1],i=Object(a.useContext)(w);return Object(c.jsxs)(G.a,{show:e.show,onHide:e.handleClose,onSubmit:r,children:[Object(c.jsx)(G.a.Header,{closeButton:!0,children:Object(c.jsx)(G.a.Title,{children:"Settings"})}),Object(c.jsx)(G.a.Body,{children:Object(c.jsxs)(h.a,{className:"font-weight-bold",children:[Object(c.jsxs)(h.a.Group,{controlId:"showCompleted",children:[Object(c.jsx)(h.a.Label,{className:"mr-3",children:"Show completed items?"}),Object(c.jsxs)(h.a.Control,{required:!0,name:"showCompleted",as:"select",onChange:s,children:[Object(c.jsx)("option",{value:"",children:"..."}),Object(c.jsx)("option",{value:"no",children:"No"}),Object(c.jsx)("option",{value:"yes",children:"Yes"})]})]}),Object(c.jsxs)(h.a.Group,{controlId:"maxNum",children:[Object(c.jsx)(h.a.Label,{children:"How many items do you want to display per page?"}),Object(c.jsxs)(h.a.Control,{required:!0,as:"select",name:"maxNum",type:"text",onChange:s,children:[Object(c.jsx)("option",{value:"",children:"..."}),Object(c.jsx)("option",{value:"5",children:"5 items"}),Object(c.jsx)("option",{value:"6",children:"6 items"}),Object(c.jsx)("option",{value:"7",children:"7 items"}),Object(c.jsx)("option",{value:"8",children:"8 items"}),Object(c.jsx)("option",{value:"9",children:"9 items"}),Object(c.jsx)("option",{value:"10",children:"10 items"})]})]}),Object(c.jsxs)(h.a.Group,{controlId:"sort",children:[Object(c.jsx)(h.a.Label,{children:"How do you want to sort your to do items?"}),Object(c.jsxs)(h.a.Control,{required:!0,as:"select",name:"sort",type:"text",onChange:s,children:[Object(c.jsx)("option",{value:"",children:"..."}),Object(c.jsx)("option",{value:"difficulty",children:"By difficulty ratings"}),Object(c.jsx)("option",{value:"item",children:"By item info"}),Object(c.jsx)("option",{value:"assignee",children:"By assignee name"})]})]}),Object(c.jsxs)(h.a.Group,{controlId:"sortOrder",children:[Object(c.jsx)(h.a.Label,{className:"mr-3",children:"Sorting order?"}),Object(c.jsxs)(h.a.Control,{required:!0,name:"sortOrder",as:"select",onChange:s,children:[Object(c.jsx)("option",{value:"",children:"..."}),Object(c.jsx)("option",{value:"ascending",children:"Ascending"}),Object(c.jsx)("option",{value:"descending",children:"Descending"})]})]}),Object(c.jsx)(m.a,{variant:"primary",type:"submit",className:"float-right",children:"Save Changes"}),Object(c.jsx)(m.a,{variant:"secondary",onClick:e.handleClose,children:"Cancel"})]})})]})};function E(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),i=Object(b.a)(s,2),u=i[0],h=i[1],p=Object(a.useState)(!1),O=Object(b.a)(p,2),f=O[0],g=O[1];function v(){return(v=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n={method:"post",url:T,data:Object(l.a)(Object(l.a)({},t),{},{complete:!1})}).data.difficulty||(n.data.difficulty=1),e.prev=2,e.next=5,F()(n);case 5:return e.next=7,w();case 7:h(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),h(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function y(){return(y=Object(d.a)(j.a.mark((function e(t){var c,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(){c.complete=!c.complete;var e=Object(o.a)(n);r(e)},c=n.filter((function(e){return e._id===t}))[0]||{},a={method:"put",url:"".concat(T,"/").concat(t),data:Object(l.a)(Object(l.a)({},c),{},{complete:!c.complete})},e.prev=3,e.next=6,F()(a);case 6:s(),h(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),h(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function C(){return(C=Object(d.a)(j.a.mark((function e(t){var c,a,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(){n.splice(a,1);var e=Object(o.a)(n);r(e)},c=n.filter((function(e){return e._id===t}))[0]||{},a=n.indexOf(c),s={method:"delete",url:"".concat(T,"/").concat(t)},e.prev=4,e.next=7,F()(s);case 7:i(),h(null),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),h(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}function w(){return N.apply(this,arguments)}function N(){return(N=Object(d.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"get",url:T},e.prev=1,e.next=4,F()(t);case 4:n=e.sent,c=n.data,r(c),h(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),h(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function k(){g(!f)}return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){document.title="To Do List: ".concat(n.filter((function(e){return!e.complete})).length)})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(I,{}),Object(c.jsxs)(L.a,{className:"p-3",children:[Object(c.jsxs)("h2",{className:"text-white bg-dark mt-3 p-3",children:["To Do List Manager (",n.filter((function(e){return!e.complete})).length,")",Object(c.jsx)(m.a,{className:"float-right",variant:"primary",onClick:k,children:"Settings"})]}),Object(c.jsx)(A,{show:f,handleClose:k}),Object(c.jsxs)(D.a,{className:"font-weight-bold",children:[Object(c.jsx)(B.a,{lg:4,md:6,sm:12,className:"p-3",children:Object(c.jsx)(x,{handleSubmit:function(e){return v.apply(this,arguments)}})}),Object(c.jsx)(B.a,{lg:8,md:6,sm:12,className:"p-3",children:Object(c.jsx)(S,{list:n,handleComplete:function(e){return y.apply(this,arguments)},handleDelete:function(e){return C.apply(this,arguments)},error:u})})]})]})]})}var H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{children:Object(c.jsx)(E,{})})}),document.getElementById("root")),H()}},[[80,1,2]]]);
//# sourceMappingURL=main.a530e7db.chunk.js.map