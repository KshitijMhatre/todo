(this.webpackJsonphabit=this.webpackJsonphabit||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),i=n.n(r),c=(n(14),n(5)),l=n(1),s=n(4),u=n(8),d=n.n(u);n(15);var f=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)(""),u=Object(s.a)(i,2),f=u[0],p=u[1];Object(o.useEffect)((function(){}),[]);var g=function(e){e.stopPropagation();var t=Number.parseInt(e.target.getAttribute("num")),o=[].concat(Object(l.a)(n.slice(0,t)),Object(l.a)(n.slice(t+1)));r(o)};return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),a.a.createElement("form",{action:"#",className:"todo"},a.a.createElement("input",{style:{display:"inline-box"},type:"text",onChange:function(e){p(e.target.value)},value:f}),a.a.createElement("button",{type:"submit",onClick:function(){var e=[].concat(Object(l.a)(n),[{task:f,done:!1}]);r(e),p("")}},"\u271a todo")),a.a.createElement("ul",{onClick:function(e){var t=Number.parseInt(e.target.getAttribute("num")),o=[].concat(Object(l.a)(n.slice(0,t)),[Object(c.a)(Object(c.a)({},n[t]),{},{done:!n[t].done})],Object(l.a)(n.slice(t+1)));r(o)}},n.map((function(e,t){return a.a.createElement("li",{key:t,num:t,className:"todo"},a.a.createElement("input",{type:"checkbox",num:t,checked:e.done})," ",a.a.createElement("p",{num:t},e.task),a.a.createElement("i",{num:t,onClick:g},"\u2718"))})))))},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n?n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}:alert("null worke")}})).catch((function(e){alert("errror"+JSON.stringify(e)),console.error("Error during service worker registration:",e)}))}var m=document.createElement("pre");document.body.appendChild(m);var h=console.log;console.log=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];h.apply(this,t),t.forEach((function(e,n){t[n]="object"===typeof e?JSON.stringify(e,null,4):e})),m.innerHTML+=t.join(" ")+"<br />"},i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return alert("different origin returning"),void console.log("different origin returning");window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){alert("ready worke"),console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.5b65ba12.chunk.js.map