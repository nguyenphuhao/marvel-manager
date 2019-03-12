(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a(86)},51:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),l=a.n(c),i=(a(50),a(51),a(4)),o=a(5),s=a(7),u=a(6),m=a(8),d=a(88),h=a(89),p=a(44),f=a(25),E=a(87),b=function(e){return r.a.createElement("ul",{id:e.id?e.id:(new Date).getTime(),className:e.className},r.a.createElement("li",null,r.a.createElement(E.a,{to:"/character"},"Characters")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/"},"Comics")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/"},"Series")))},v=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"red darken-2"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement(f.a,{to:"#",className:"brand-logo"},r.a.createElement("img",{className:"responsive-img",src:"/marvel-manager/img/logo.png",height:"50",alt:"Marvel Manager"})),r.a.createElement(f.a,{to:"#","data-target":"mobile-demo",className:"sidenav-trigger"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement(b,{className:"right hide-on-med-and-down"}))),r.a.createElement(b,{id:"mobile-demo",className:"sidenav"}))},C=function(){return r.a.createElement(v,null)},g=a(13),O=a(15),j=a.n(O),y=a(28),w=a(41),R=a.n(w).a.create({baseURL:"https://gateway.marvel.com:443"});R.defaults.params={apikey:"46a6295b76d8728d00f418b456633ada",hash:"67ddc58a669c177c24532c367784ae4f",ts:""};var A=R,k=new(function(){function e(){Object(i.a)(this,e),this.FETCH_ALL_CHARACTER="/v1/public/characters"}return Object(o.a)(e,[{key:"fetchCharacters",value:function(e){return console.log(e),A.request({url:"".concat(this.FETCH_ALL_CHARACTER,"?limit=").concat(e.limit,"&offset=").concat(e.offset),method:"get",params:e})}},{key:"fetchCharacterById",value:function(e){return A.get(this.FETCH_ALL_CHARACTER+"/"+e)}}]),e}()),_=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCharacterById(this.props.id)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container section character-details"},r.a.createElement("h5",null,"Character Details"))}}]),t}(n.Component),L=Object(g.b)(function(e){return{character:e.character}},function(e){return{fetchCharacterById:function(t){return e((a=t,function(){var e=Object(y.a)(j.a.mark(function e(t,n){var r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.fetchCharacterById(a);case 3:r=e.sent,t({type:"FETCH_CHARACTER_BY_ID",result:r}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"CALL_ERRORS",error:e.t0});case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,a){return e.apply(this,arguments)}}()));var a}}})(_),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"charactergrid-view container"},r.a.createElement(L,{id:this.props.match.params.id}))}}]),t}(n.Component),T=a(14),I=a(16),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handlePageChange=function(e){var t={limit:e.page.take,offset:e.page.skip};a.props.fetchCharacters(t)},a.handleRowClick=function(e){a.props.selectCharacter(e.dataItem.id)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCharacters({limit:20,offset:0})}},{key:"render",value:function(){var e=this.props.character;return r.a.createElement("div",{className:"section character-list"},r.a.createElement("h5",null,"All Marvels"),r.a.createElement(I.a,{style:{height:"700px"},data:e.characters.map(function(t){return Object(T.a)({},t,{selected:t.id===e.selectedId})}),selectedField:"selected",skip:e.gridProps.offset,take:e.gridProps.limit,total:e.gridProps.total,pageable:!0,onPageChange:this.handlePageChange,onRowClick:this.handleRowClick},r.a.createElement(I.b,{field:"name",width:"150",title:"Name"}),r.a.createElement(I.b,{field:"description",className:"nowrap",title:"Description"}),r.a.createElement(I.b,{field:"thumbnail",width:"160",title:" ",cell:function(e){return r.a.createElement("td",null,r.a.createElement(f.a,{to:"./character/"+e.dataItem.id},r.a.createElement("img",{className:"img-responsive",alt:"",height:"95",src:"".concat(e.dataItem[e.field].path,".").concat(e.dataItem[e.field].extension)})))}})))}}]),t}(n.Component),x=Object(g.b)(function(e){return{character:e.character}},function(e){return{fetchCharacters:function(t){return e(function(e){return function(){var t=Object(y.a)(j.a.mark(function t(a,n){var r;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.fetchCharacters(e);case 3:r=t.sent,a({type:"FETCH_ALL_CHARACTERS",result:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"CALL_ERRORS",error:t.t0});case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e,a){return t.apply(this,arguments)}}()}(t))},selectCharacter:function(t){return e((a=t,function(e,t){e({type:"SELECT_CHARACTER",selectedId:a})}));var a}}})(H),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x,null))}}]),t}(n.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard-view container"},r.a.createElement(B,null))}}]),t}(n.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"charactergrid-view container"},r.a.createElement(x,null))}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/marvel-manager"},r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:F}),r.a.createElement(p.a,{exact:!0,path:"/character",component:P}),r.a.createElement(p.a,{path:"/character/:id",component:N}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(12),M={},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;arguments.length>1&&arguments[1];return e},W={selectedId:null,characters:[],gridProps:{offset:0,limit:5,total:0}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL_CHARACTERS":return console.log(t.result.data),Object(T.a)({},e,{characters:t.result.data.data.results,gridProps:{offset:t.result.data.data.offset,limit:t.result.data.data.limit,total:t.result.data.data.total}});case"FETCH_CHARACTER_BY_ID":return console.log(t.result.data),Object(T.a)({},e,{characters:t.result.data.data.results});case"SELECT_CHARACTER":return console.log(t.selectedId),Object(T.a)({},e,{selectedId:t.selectedId});case"CALL_ERRORS":default:return e}},q=Object(D.c)({auth:J,character:Y}),U=a(43),$=Object(D.d)(q,Object(D.a)(U.a));l.a.render(r.a.createElement(g.a,{store:$},r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.26b73252.chunk.js.map