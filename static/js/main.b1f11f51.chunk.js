(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{192:function(e,t){},194:function(e,t){},208:function(e,t){},210:function(e,t){},238:function(e,t){},240:function(e,t){},241:function(e,t){},246:function(e,t){},248:function(e,t){},267:function(e,t){},279:function(e,t){},282:function(e,t){},303:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(29),o=n.n(s),i=n(311),l=n(30),u=n(13),d=n(9),j=n(16),b=n(305),h=n(310),O=n(15),p=n.n(O),m=n(26),x=n(32),f=n.n(x),g=n(96),v=n.n(g),C=n(163),S=n.n(C),y=r.a.createContext();var w=function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)({}),i=Object(d.a)(o,2),l=i[0],j=i[1],b=Object({NODE_ENV:"production",PUBLIC_URL:"/react-todo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SIGNIN_URL,h=Object({NODE_ENV:"production",PUBLIC_URL:"/react-todo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SIGNUP_URL,O=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"post",url:b,auth:{username:t.username,password:t.password}},e.prev=1,e.next=4,f()(n);case 4:a=e.sent,c=a.data.token,C(c),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),console.warn("Login Attempt Failed"),g(),window.alert("login failed. Please try again");case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"post",url:h,data:t},e.prev=1,e.next=4,f()(n);case 4:a=e.sent,c=a.data.token,C(c),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),console.warn("Register Attempt Failed"),g(),window.alert("Register process failed. Please try again");case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){s(!1),j({})},C=Object(c.useCallback)((function(e){try{var t=S.a.verify(e,Object({NODE_ENV:"production",PUBLIC_URL:"/react-todo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SECRET);s(!0),j(Object(u.a)(Object(u.a)({},t),{},{token:e})),v.a.save("auth",e)}catch(n){g(),console.warn("user token error"),window.alert("Something is wrong with user authentication. Please try to login again")}}),[]);return Object(c.useEffect)((function(){var e=v.a.load("auth")||null;e&&C(e)}),[C]),Object(a.jsx)(y.Provider,{value:{isLoggedIn:r,authenticatedUser:l,login:O,logout:g,signup:x},children:e.children})},_=n(309);function N(e){var t=Object(c.useState)({}),n=Object(d.a)(t,2),a=n[0],r=n[1];function s(t){t.preventDefault(),t.target.reset(),e&&e(a),r({})}function o(e){e.persist(),"maxNum"!==e.target.name&&"difficulty"!==e.target.name?"showCompleted"!==e.target.name?r(Object(u.a)(Object(u.a)({},a),{},Object(l.a)({},e.target.name,e.target.value))):r(Object(u.a)(Object(u.a)({},a),{},Object(l.a)({},e.target.name,"yes"===e.target.value))):r(Object(u.a)(Object(u.a)({},a),{},Object(l.a)({},e.target.name,Number(e.target.value))))}return[s,o,a]}function T(e){var t=N((function(t){o.signup(t),e.handleClose()})),n=Object(d.a)(t,2),r=n[0],s=n[1],o=Object(c.useContext)(y);return Object(a.jsxs)(_.a,{show:e.show,onHide:e.handleClose,onSubmit:r,children:[Object(a.jsx)(_.a.Header,{closeButton:!0,children:Object(a.jsx)(_.a.Title,{children:"Welcome to To Do Manager! "})}),Object(a.jsxs)(_.a.Body,{children:[Object(a.jsx)("p",{children:"Please input the following info to register as new user."}),Object(a.jsxs)(h.a,{className:"font-weight-bold",children:[Object(a.jsxs)(h.a.Group,{controlId:"username",children:[Object(a.jsx)(h.a.Label,{className:"mr-3",children:"Username"}),Object(a.jsx)(h.a.Control,{required:!0,name:"username",onChange:s})]}),Object(a.jsxs)(h.a.Group,{controlId:"password",children:[Object(a.jsx)(h.a.Label,{children:"Password"}),Object(a.jsx)(h.a.Control,{required:!0,name:"password",type:"password",onChange:s})]}),Object(a.jsxs)(h.a.Group,{controlId:"email",children:[Object(a.jsx)(h.a.Label,{children:"Email"}),Object(a.jsx)(h.a.Control,{required:!0,name:"email",type:"email",onChange:s})]}),Object(a.jsxs)(h.a.Group,{controlId:"role",children:[Object(a.jsx)(h.a.Label,{className:"mr-3",children:"What's your role?"}),Object(a.jsxs)(h.a.Control,{required:!0,name:"role",as:"select",onChange:s,children:[Object(a.jsx)("option",{value:"",children:"..."}),Object(a.jsx)("option",{value:"user",children:"User"}),Object(a.jsx)("option",{value:"editor",children:"Editor"}),Object(a.jsx)("option",{value:"admin",children:"Admin"})]})]}),Object(a.jsx)(b.a,{variant:"primary",type:"submit",className:"float-right",children:"Register!"}),Object(a.jsx)(b.a,{variant:"secondary",onClick:e.handleClose,children:"Cancel"})]})]})]})}function E(){var e=Object(c.useState)({}),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),o=Object(d.a)(s,2),i=o[0],O=o[1],p=Object(c.useContext)(y),m=function(e){r(Object(u.a)(Object(u.a)({},n),{},Object(l.a)({},e.target.name,e.target.value)))},x=function(){O(!i)};return Object(a.jsxs)(j.b,{condition:p.isLoggedIn,children:[Object(a.jsxs)(j.c,{children:[Object(a.jsx)("h4",{children:p.authenticatedUser?"Welcome Back, ".concat(p.authenticatedUser.username):"hi"}),Object(a.jsx)(b.a,{variant:"dark",onClick:p.logout,children:"Sign Out"})]}),Object(a.jsxs)(j.a,{children:[Object(a.jsxs)(h.a,{inline:!0,onSubmit:function(e){e.preventDefault(),p.login(n),e.target.reset()},children:[Object(a.jsx)(h.a.Control,{required:!0,name:"username",type:"text",placeholder:"username",onChange:m,className:"m-3"}),Object(a.jsx)(h.a.Control,{required:!0,name:"password",type:"password",placeholder:"password",onChange:m,className:"m-3"}),Object(a.jsx)(b.a,{variant:"dark",type:"submit",className:"m-3",children:"Sign In"}),Object(a.jsx)(b.a,{variant:"dark",className:"m-3",onClick:x,children:"Sign up"})]}),Object(a.jsx)(T,{show:i,handleClose:x})]})]})}function k(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(i.a,{bg:"primary",variant:"dark",className:"justify-content-between",children:[Object(a.jsx)(i.a.Brand,{href:"#home",className:"d-inline",children:"Home"}),Object(a.jsx)(E,{})]})})}var D=n(97),L=n(313);function I(e){var t=N(e.handleSubmit),n=Object(d.a)(t,3),r=n[0],s=n[1],o=n[2],i=Object(c.useState)({disabled:!0}),l=Object(d.a)(i,2),u=l[0],j=l[1];return Object(c.useEffect)((function(){o.item&&o.assignee?j({disabled:!1}):j({disabled:!0})}),[o]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(h.a,{onSubmit:r,children:Object(a.jsx)(L.a,{children:Object(a.jsxs)(L.a.Body,{children:[Object(a.jsx)(L.a.Title,{children:"Add To Do Item"}),Object(a.jsxs)(h.a.Group,{controlId:"item",children:[Object(a.jsx)(h.a.Label,{children:"To Do Item"}),Object(a.jsx)(h.a.Control,{required:!0,autoComplete:"off",name:"item",type:"text",placeholder:"Item Details",onChange:s})]}),Object(a.jsxs)(h.a.Group,{controlId:"assignee",children:[Object(a.jsx)(h.a.Label,{children:"Assigned To"}),Object(a.jsx)(h.a.Control,{required:!0,autoComplete:"off",name:"assignee",type:"text",placeholder:"Assignee Name",onChange:s})]}),Object(a.jsxs)(h.a.Group,{controlId:"difficulty",children:[Object(a.jsx)(h.a.Label,{children:"Difficulty Rating"}),Object(a.jsx)(h.a.Control,{required:!0,defaultValue:"1",type:"range",min:"1",max:"5",name:"difficulty",placeholder:"Assignee Name",onChange:s})]}),Object(a.jsx)(b.a,{variant:"primary",type:"submit",disabled:u.disabled,children:"Add Item"})]})})})})}var P=n(314),A=n(306),R=n(312),B=r.a.createContext();var H=function(e){var t=Object(c.useState)(localStorage.getItem("ToDoManagerSettingsData")||{showCompleted:!1,maxNum:5,sort:"difficulty",sortOrder:"ascending"}),n=Object(d.a)(t,2),r=n[0],s=n[1];return Object(a.jsx)(B.Provider,{value:{settings:r,setSettings:s},children:e.children})};function U(e){var t=Object(c.useContext)(B),n=Object(c.useState)({page1:[]}),r=Object(d.a)(n,2),s=r[0],o=r[1],i=Object(c.useState)({pageNum:1,list:[]}),l=Object(d.a)(i,2),u=l[0],b=l[1],h=Object(c.useContext)(y).authenticatedUser,O=Object(c.useCallback)((function(e){var n=[],a=t.settings,c=a.showCompleted,r=a.maxNum,s=a.sort,i=a.sortOrder;if((n=!1===c?e.filter((function(e){return!1===e.complete})):e).sort(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ascending";return function(n,a){if(!n[e]||!a[e])return 0;var c="string"===typeof n[e]?n[e].toLowerCase():n[e],r="string"===typeof a[e]?a[e].toLowerCase():a[e],s=0;return c>r?s=1:c<r&&(s=-1),"descending"===t?-1*s:s}}(s,i)),r<n.length){for(var l=Math.ceil(n.length/r),u={},d=0;d<l;d++){var j=n.slice(d*r,d*r+r);u["page".concat(d+1)]=j}o(u)}else o({page1:n})}),[t]);function p(e){b({pageNum:e,list:s["page".concat(e)]})}return Object(c.useEffect)((function(){O(e.list)}),[e.list,O]),Object(c.useEffect)((function(){b({pageNum:1,list:s.page1})}),[s]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(j.b,{condition:e.error,children:[Object(a.jsx)(j.c,{children:Object(a.jsx)(A.a,{className:"bg-danger",children:Object(a.jsx)("h2",{children:e.error})})}),Object(a.jsxs)(j.a,{children:[u.list.map((function(t){return Object(a.jsxs)(R.a,{onClose:function(){return e.handleDelete(t._id)},style:{width:"100%",maxWidth:"100%"},children:[Object(a.jsxs)(R.a.Header,{closeButton:h.capabilities.includes("delete"),children:[Object(a.jsx)("strong",{className:"".concat(t.complete?"bg-success":"bg-danger"," rounded mr-2 text-white p-1"),onClick:h.capabilities.includes("update")?function(){return e.handleComplete(t._id)}:null,children:t.complete?"Completed":"Pending"}),Object(a.jsx)("span",{className:"ml-auto mr-auto h6",children:t.assignee})]}),Object(a.jsxs)(R.a.Body,{children:[Object(a.jsx)("span",{className:"mr-auto h5",children:t.item}),Object(a.jsx)("small",{className:"float-right",children:"Difficulty: ".concat(t.difficulty)})]})]},t._id)})),function(){for(var e=[],t=Object.keys(s).length,n=function(t){e.push(Object(a.jsx)(P.a.Item,{active:t===u.pageNum,onClick:function(){return p(t)},children:t},t))},c=1;c<=t;c++)n(c);return Object(a.jsx)(P.a,{children:e})}()]})]})})}var F=n(307),W=n(308),q=n(164);var G=function(e){var t=N((function(t){o.setSettings(t),localStorage.setItem("ToDoManagerSettingsData",t),e.handleClose()})),n=Object(d.a)(t,2),r=n[0],s=n[1],o=Object(c.useContext)(B);return Object(a.jsxs)(_.a,{show:e.show,onHide:e.handleClose,onSubmit:r,children:[Object(a.jsx)(_.a.Header,{closeButton:!0,children:Object(a.jsx)(_.a.Title,{children:"Settings"})}),Object(a.jsx)(_.a.Body,{children:Object(a.jsxs)(h.a,{className:"font-weight-bold",children:[Object(a.jsxs)(h.a.Group,{controlId:"showCompleted",children:[Object(a.jsx)(h.a.Label,{className:"mr-3",children:"Show completed items?"}),Object(a.jsxs)(h.a.Control,{required:!0,name:"showCompleted",as:"select",onChange:s,children:[Object(a.jsx)("option",{value:"",children:"..."}),Object(a.jsx)("option",{value:"no",children:"No"}),Object(a.jsx)("option",{value:"yes",children:"Yes"})]})]}),Object(a.jsxs)(h.a.Group,{controlId:"maxNum",children:[Object(a.jsx)(h.a.Label,{children:"How many items do you want to display per page?"}),Object(a.jsxs)(h.a.Control,{required:!0,as:"select",name:"maxNum",type:"text",onChange:s,children:[Object(a.jsx)("option",{value:"",children:"..."}),Object(a.jsx)("option",{value:"5",children:"5 items"}),Object(a.jsx)("option",{value:"6",children:"6 items"}),Object(a.jsx)("option",{value:"7",children:"7 items"}),Object(a.jsx)("option",{value:"8",children:"8 items"}),Object(a.jsx)("option",{value:"9",children:"9 items"}),Object(a.jsx)("option",{value:"10",children:"10 items"})]})]}),Object(a.jsxs)(h.a.Group,{controlId:"sort",children:[Object(a.jsx)(h.a.Label,{children:"How do you want to sort your to do items?"}),Object(a.jsxs)(h.a.Control,{required:!0,as:"select",name:"sort",type:"text",onChange:s,children:[Object(a.jsx)("option",{value:"",children:"..."}),Object(a.jsx)("option",{value:"difficulty",children:"By difficulty ratings"}),Object(a.jsx)("option",{value:"item",children:"By item info"}),Object(a.jsx)("option",{value:"assignee",children:"By assignee name"})]})]}),Object(a.jsxs)(h.a.Group,{controlId:"sortOrder",children:[Object(a.jsx)(h.a.Label,{className:"mr-3",children:"Sorting order?"}),Object(a.jsxs)(h.a.Control,{required:!0,name:"sortOrder",as:"select",onChange:s,children:[Object(a.jsx)("option",{value:"",children:"..."}),Object(a.jsx)("option",{value:"ascending",children:"Ascending"}),Object(a.jsx)("option",{value:"descending",children:"Descending"})]})]}),Object(a.jsx)(b.a,{variant:"primary",type:"submit",className:"float-right",children:"Save Changes"}),Object(a.jsx)(b.a,{variant:"secondary",onClick:e.handleClose,children:"Cancel"})]})})]})};function K(e){var t=Object(c.useContext)(y),n=!1;try{var r=!e.capability||t.authenticatedUser.capabilities.includes(e.capability);n=t.isLoggedIn&&r}catch(s){console.warn("Not Authorized")}return Object(a.jsx)(j.d,{condition:n,children:e.children})}var M=n(165),z=n.n(M);function V(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),o=Object(d.a)(s,2),i=o[0],l=o[1],h=Object(c.useState)(!1),O=Object(d.a)(h,2),x=O[0],g=O[1],v=Object(c.useContext)(y).authenticatedUser,C=Object(c.useState)(!1),S=Object(d.a)(C,2),w=S[0],_=S[1],N=Object({NODE_ENV:"production",PUBLIC_URL:"/react-todo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TODO_URL;function T(){return(T=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n={method:"post",url:N,data:Object(u.a)(Object(u.a)({},t),{},{complete:!1}),headers:{Authorization:"Bearer ".concat(v.token)}}).data.difficulty||(n.data.difficulty=1),e.prev=2,e.next=5,f()(n);case 5:return e.next=7,L();case 7:l(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),l(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function E(){return(E=Object(m.a)(p.a.mark((function e(t){var a,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(){a.complete=!a.complete;var e=Object(D.a)(n);r(e)},a=n.filter((function(e){return e._id===t}))[0]||{},c={method:"put",url:"".concat(N,"/").concat(t),data:Object(u.a)(Object(u.a)({},a),{},{complete:!a.complete}),headers:{Authorization:"Bearer ".concat(v.token)}},e.prev=3,e.next=6,f()(c);case 6:s(),l(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),l(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function k(){return(k=Object(m.a)(p.a.mark((function e(t){var a,c,s,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=function(){n.splice(c,1);var e=Object(D.a)(n);r(e)},a=n.filter((function(e){return e._id===t}))[0]||{},c=n.indexOf(a),s={method:"delete",url:"".concat(N,"/").concat(t),headers:{Authorization:"Bearer ".concat(v.token)}},e.prev=4,e.next=7,f()(s);case 7:o(),l(null),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),l(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}var L=Object(c.useCallback)(Object(m.a)(p.a.mark((function e(){var t,n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),t="user"===v.role?N+"/assignee/".concat(v.username):N,n={method:"get",url:t,headers:{Authorization:"Bearer ".concat(v.token)}},e.prev=3,e.next=6,f()(n);case 6:a=e.sent,c=a.data,r(c),l(null),_(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),l(e.t0.message),_(!1);case 17:case"end":return e.stop()}}),e,null,[[3,13]])}))),[v,N]);function P(){g(!x)}return Object(c.useEffect)((function(){(function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[L]),Object(c.useEffect)((function(){document.title="To Do List: ".concat(n.filter((function(e){return!e.complete})).length)})),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(F.a,{className:"p-3",children:[Object(a.jsxs)("h2",{className:"text-white bg-dark mt-3 p-3",children:["To Do List Manager (",n.filter((function(e){return!e.complete})).length,")",Object(a.jsx)(b.a,{className:"float-right",variant:"primary",onClick:P,children:"Settings"})]}),Object(a.jsx)(G,{show:x,handleClose:P}),Object(a.jsxs)(W.a,{className:"font-weight-bold",children:[Object(a.jsx)(K,{capability:"create",children:Object(a.jsx)(q.a,{lg:4,md:6,sm:12,className:"p-3",children:Object(a.jsx)(I,{handleSubmit:function(e){return T.apply(this,arguments)}})})}),Object(a.jsx)(q.a,{className:"p-3",children:Object(a.jsxs)(j.b,{condition:w,children:[Object(a.jsx)(j.c,{children:Object(a.jsx)(z.a,{type:"bars",color:"grey",width:150,className:"m-auto"})}),Object(a.jsx)(j.a,{children:Object(a.jsx)(U,{list:n,handleComplete:function(e){return E.apply(this,arguments)},handleDelete:function(e){return k.apply(this,arguments)},error:i})})]})})]})]})})}function J(){return Object(a.jsxs)(w,{children:[Object(a.jsx)(k,{}),Object(a.jsx)(K,{children:Object(a.jsx)(V,{})})]})}var Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,315)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(302);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(H,{children:Object(a.jsx)(J,{})})}),document.getElementById("root")),Y()}},[[303,1,2]]]);
//# sourceMappingURL=main.b1f11f51.chunk.js.map