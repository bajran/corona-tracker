(this.webpackJsonpcorona_project=this.webpackJsonpcorona_project||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),l=(a(14),a(15),a(16),a(2)),i=a(1),s={global:{},countries:[],highlyAffectedCountries:[],showSidebar:!1,textInput:""},u=function(e,t){var a=t.type,n=t.payload;switch(a){case"ALL_COUNTRIES":return Object(i.a)({},e,{countries:n});case"WROST_COUNTRIES":return Object(i.a)({},e,{highlyAffectedCountries:n});case"GLOBALLY_AFFECTED":return Object(i.a)({},e,{global:n});case"SIDEBAR":return Object(i.a)({},e,{showSidebar:n});case"TEXT_CHANGE":return Object(i.a)({},e,{inputTextData:n});default:return e}},m=r.a.createContext(null),d=r.a.createContext(null);function f(){var e=r.a.useContext(m);if(void 0===e)throw new Error("Redux State Context is not availabel");return e}function p(){var e=r.a.useContext(d);if(void 0===e)throw new Error("Redux Dispatch Context is not availabel");return e}function E(e){var t=e.children,a=Object(n.useReducer)(u,s),c=Object(l.a)(a,2),o=c[0],i=c[1];return r.a.createElement(m.Provider,{value:o},r.a.createElement(d.Provider,{value:i},t))}var v=function(){var e=f(),t=e.countries,a=e.showSidebar,c=e.inputTextData,o=p(),i=Object(n.useState)([]),s=Object(l.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(!0),E=Object(l.a)(d,2),v=E[0],h=E[1],b=Object(n.useRef)(null);Object(n.useEffect)((function(){m(t)}),[t]),Object(n.useEffect)((function(){b.current.value=c}),[c]);var y=function(){var e=b.current.value;e&&(h(!1),m(t.filter((function(t){return t.Country.toLowerCase()===e.toLowerCase()}))),o({type:"TEXT_CHANGE",payload:e}))},C=function(){m(t),h(!0),o({type:"TEXT_CHANGE",payload:""})},N=function(){return r.a.createElement("nav",{className:"bg-light sidebar ".concat(window.screen.width>768?"col-md-3":"full-width-sidebar")},r.a.createElement("div",{className:"input-group input-search-box"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search By Country Name",ref:b,"aria-label":"Username","aria-describedby":"basic-addon1"}),r.a.createElement("div",{className:"input-group-prepend"},v?r.a.createElement("span",{className:"input-group-text cp",onClick:y,id:"basic-addon1"},"Search"):r.a.createElement("span",{className:"input-group-text cp",id:"basic-addon1",onClick:C},"Clear"))),r.a.createElement("div",{className:"sidebar-sticky"},u.map((function(e,t){return r.a.createElement("div",{className:"country",key:t},r.a.createElement("div",{className:"country-name"},e.Country),r.a.createElement("div",{className:"total-confirmed"},"Confirmed Case - ",e.TotalConfirmed))}))))};return r.a.createElement(r.a.Fragment,null,a||window.screen.width>768?r.a.createElement(N,null):null)},h=a(3),b=a.n(h),y=a(7),C=a.n(y),N=function(){var e=f().global,t=[];Object.keys(e).map((function(a){return t.push([a,e[a]])}));var a={title:{text:"Globally Affected"},series:[{type:"pie",name:"Number of People",innerSize:"50%",data:t}]};return r.a.createElement("div",null,r.a.createElement(C.a,{highcharts:b.a,options:a}))},w=function(){var e=f().highlyAffectedCountries;return r.a.createElement("main",{role:"main",className:"ml-sm-auto ".concat(window.screen.width<=768?"col-md-12":"col-md-9")},r.a.createElement(N,null),r.a.createElement("h5",{className:"top-country-list"},"Highly Affected Countries"),r.a.createElement("div",{className:"row highly-affected"},e.map((function(e,t){return r.a.createElement("div",{className:"col-sm-4",key:t},r.a.createElement("div",{className:"card card-data mb-2"},r.a.createElement("div",null,r.a.createElement("h5",{className:"card-title text-center m-2 country-title"},e.Country),r.a.createElement("div",{className:"card-text text-center confirmed"},r.a.createElement("h5",{className:"cases"},"Confirmed - ",e.TotalConfirmed)),r.a.createElement("div",{className:"card-text text-center recover"},r.a.createElement("h5",{className:"cases"},"Recovered - ",e.TotalRecovered)),r.a.createElement("div",{className:"card-text text-center death"},r.a.createElement("h5",{className:"cases"},"Death - ",e.TotalDeaths)))))}))))},g=a(4),x=a.n(g),O=a(8),T=function(){var e=Object(O.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.covid19api.com/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=p(),t=f().showSidebar;Object(n.useEffect)((function(){T("summary").then((function(t){console.log(t);var a=t.Global,n=void 0===a?{}:a,r=t.Countries,c=void 0===r?[]:r,o=(t.Date,c.sort((function(e,t){return t.TotalConfirmed-e.TotalConfirmed}))),l=n;e({type:"ALL_COUNTRIES",payload:o}),e({type:"GLOBALLY_AFFECTED",payload:l}),e({type:"WROST_COUNTRIES",payload:o.slice(0,20)})})).catch((function(){return console.log("Something is not working, Please retry after some time")}))}),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},r.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:function(){console.log("Main",t),e({type:"SIDEBAR",payload:!t})}},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("h6",{className:"navbar-header-text col-sm-12 col-md-12 mr-0"},"Covid-19 Tracker")),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(v,null),r.a.createElement(w,null))))};var S=function(){return r.a.createElement(E,null,r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.a6fccb3e.chunk.js.map