(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(3),l=n(4),s=n(6),u=n(5),h=(n(13),function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow shadow-4"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:n}),r.a.createElement("p",null,n),r.a.createElement("p",null,a))}),m=function(e){var t=e.robots,n=t.map((function(e,n){return r.a.createElement(h,{id:t[n].id,name:t[n].name,email:t[n].email})}));return r.a.createElement("div",null,n)},d=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{type:"search",placeholder:"Search",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"700px"}},e.children)},v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toString().toLowerCase().includes(e.state.searchField.toString().toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboWar"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(m,{robots:t})))}}]),n}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.2a1b147f.chunk.js.map