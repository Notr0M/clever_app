(this.webpackJsonpclever_ui=this.webpackJsonpclever_ui||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),s=n.n(r),l=(n(13),n(7)),c=n(1),i=n.n(c),u=n(2);var g=function(e){var t=e.status,n=e.logout;return console.log(t),a.a.createElement("div",null,a.a.createElement("h4",null,"Welcome ",t.username),a.a.createElement("hr",null),a.a.createElement("button",{onClick:n},"Logout"))},m=n(5),h=n(6),p=new(function(){function e(){Object(m.a)(this,e),this.isAuth=!1,this.token=localStorage.getItem("token"),console.log(this.token)}return Object(h.a)(e,[{key:"checkToken",value:function(){return this.token?(console.log("fetch"),fetch("http://localhost:8080/check",{method:"POST",headers:{token:this.token}})):(console.log("undefined"),new Promise((function(e,t){t({success:!1,message:"Provide token"})})))}},{key:"logout",value:function(e){console.log("loging out"),localStorage.removeItem("token"),e({isAuth:!1,loading:!1,message:"Successfully logged out"})}},{key:"login",value:function(e,t){var n=this;t({loading:!0}),console.log(e);var o={email:e.email,password:e.password};fetch("http://localhost:8080/api/login",{method:"POST",headers:{"Content-Type":"application/json",accept:"application/json"},body:JSON.stringify(o)}).then(function(){var e=Object(u.a)(i.a.mark((function e(o){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.json();case 2:a=e.sent,n.setToken(a.token),a.success?t({loading:!1,isAuth:!0,username:a.first}):(console.log(a),t({loading:!1,isAuth:!1,errMessage:"Your ID or Password is wrong"}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log("Login Err")}))}},{key:"getToken",value:function(){return this.token}},{key:"setToken",value:function(e){this.token=e,localStorage.setItem("token",e)}}]),e}());function d(e){var t=e.login;return a.a.createElement("div",{className:"toggle-page"},a.a.createElement("h3",null," Login  "),a.a.createElement("form",{onSubmit:t},a.a.createElement("input",{placeholder:"Username",className:"user",type:"email",name:"username",required:!0})," ",a.a.createElement("br",null),a.a.createElement("input",{required:!0,placeholder:"Password",type:"password",name:"password"})," ",a.a.createElement("br",null),a.a.createElement("input",{type:"submit",value:"Login"})),a.a.createElement("p",null,"no Account? create"))}n(15);var f=function(){console.log("APP");var e=Object(o.useState)({loading:!0,isAuth:!1,username:null,message:"",errMessage:""}),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){var e;e=r,p.checkToken().then(function(){var t=Object(u.a)(i.a.mark((function t(n){var o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.json();case 2:(o=t.sent).success?(console.log("success"),e({loading:!1,isAuth:!0,user:o.user})):(console.log("failed"),e({loading:!1,isAuth:!1}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log("err in App"),e({loading:!1,isAuth:!1,errMessage:""})}))}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("h4",null,"Hello"),a.a.createElement("span",{style:{color:"green"}},n.message),a.a.createElement("span",{style:{color:"red"}},n.errMessage),n.loading?a.a.createElement("div",{className:"loader"}):n.isAuth?a.a.createElement(g,{status:n,logout:function(e){e.preventDefault(),p.logout(r)}}):a.a.createElement(d,{login:function(e){e.preventDefault(),n.loading=!0,p.login({email:e.target[0].value,password:e.target[1].value},r)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.b21b6b76.chunk.js.map