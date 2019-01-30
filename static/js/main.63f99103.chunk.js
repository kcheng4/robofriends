(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(15),c=n.n(a),i=n(9),s=n(7),u=n(17),l=n(18),h=(n(28),n(1)),d=n(2),b=n(4),p=n(3),f=n(5),O=(n(30),function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))}}]),t}(o.PureComponent)),m=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.robots,t=e.map(function(t,n){return r.a.createElement(O,{key:e[n].id,id:e[n].id,name:e[n].name,email:e[n].email})});return r.a.createElement("div",null,t)}}]),t}(o.Component),g=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tc pa2"},r.a.createElement("input",{"aria-label":"Search Robots",onChange:this.props.searchChange,className:"tc pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots"}))}}]),t}(o.Component),v=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{overflowX:"hidden",overflowY:"scroll",border:"1px solid black",height:"800px"}},this.props.children)}}]),t}(o.Component),E=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={hasError:!1},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooppps. That ain't right, friend."):this.props.children}}]),t}(o.Component),j=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(b.a)(this,Object(p.a)(t).call(this))).updateCount=function(){e.setState(function(e){return{count:e.count+1}})},e.state={count:0},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log(this.props.color),r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(o.Component),y=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RobotFriends"),r.a.createElement(j,{color:"red"}))}}]),t}(o.Component),w=(n(32),function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement(y,null),r.a.createElement(g,{searchChange:n}),r.a.createElement(v,null,r.a.createElement(E,null,r.a.createElement(m,{robots:c}))))}}]),t}(o.Component)),C=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOT_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e({type:"REQUEST_ROBOT_SUCCESS",payload:t})}).catch(function(t){e({type:"REQUEST_ROBOT_FAILED",payload:t})})})}}})(w),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var S={searchField:""},_={isPending:!1,robots:[],error:""},T=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOT_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOT_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOT_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(u.createLogger)(),U=Object(s.d)(T,Object(s.a)(l.a,N));c.a.render(r.a.createElement(i.a,{store:U},r.a.createElement(C,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/robofriends","/service-worker.js");R?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):k(t,e)})}}()}},[[19,2,1]]]);
//# sourceMappingURL=main.63f99103.chunk.js.map