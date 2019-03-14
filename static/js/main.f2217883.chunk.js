(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(84)},49:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(13),l=a.n(c),i=(a(49),a(3)),o=a(4),s=a(7),u=a(5),d=a(6),m=a(86),h=a(89),p=a(88),E=a(85),f=function(e){return n.a.createElement("div",{className:"navbar-fixed"},n.a.createElement("nav",{className:"red darken-2"},n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement(E.a,{to:"/",className:"brand-logo center"},n.a.createElement("img",{className:"responsive-img",src:"./img/logo1.png",alt:"Marvel Manager"})))))},b=function(){return n.a.createElement(f,null)},v=a(11),C=a(17),g=a(16),y=a.n(g),j=a(23),O=a(41),A=a.n(O).a.create({baseURL:"https://gateway.marvel.com:443"});A.defaults.params={apikey:"46a6295b76d8728d00f418b456633ada",hash:"67ddc58a669c177c24532c367784ae4f",ts:""};var k=A,S=new(function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"fetchCharacters",value:function(e){return k.request({url:"".concat("/v1/public/characters","?limit=").concat(e.limit,"&offset=").concat(e.offset),method:"get",params:e})}},{key:"fetchCharacterById",value:function(e){return k.get("/v1/public/characters/"+e)}},{key:"fetchCommicsByCharacter",value:function(e){var t="/v1/public/characters/".concat(e,"/comics");return k.get(t)}}]),e}()),N={hasError:!0,errorMsg:"Opps, Something went wrong!"},R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=n.a.createElement("div",{className:"k-loading-mask"},n.a.createElement("span",{className:"k-loading-text"},"Loading"),n.a.createElement("div",{className:"k-loading-image"}),n.a.createElement("div",{className:"k-loading-color"})),t=document&&document.querySelector(".k-grid-content");return this.props.loaded&&!0===this.props.loaded?"":t?l.a.createPortal(e,t):e}}]),t}(r.Component),w=function(e){var t=e.comics&&e.comics.length>0?e.comics.map(function(e){return n.a.createElement("li",{className:"collection-item show-on-medium-and-up hide-on-small-only",key:e.id},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s9"},n.a.createElement("div",{style:{fontSize:"13pt"}},n.a.createElement("b",null,e.title)),n.a.createElement("p",{style:{textAlign:"justify"}},e.description?e.description:"Updating...")),n.a.createElement("div",{className:"col s3"},n.a.createElement("img",{width:"80%",src:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),alt:e.title,className:"responsive-img center"}))))}):"",a=e.comics&&e.comics.length>0?e.comics.map(function(e){return n.a.createElement("li",{className:"collection-item show-on-small hide-on-med-and-up",key:e.id},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"center-align"},n.a.createElement("img",{width:"70%",src:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),alt:e.title,className:"responsive-img"})),n.a.createElement("div",{className:"center-align",style:{fontSize:"13pt"}},n.a.createElement("b",null,e.title)),n.a.createElement("p",{style:{textAlign:"justify"}},e.description?e.description:"Updating...")))}):"";return e.comics&&e.comics.length>0?n.a.createElement("div",null,n.a.createElement("ul",{className:"collection"},n.a.createElement("li",{className:"collection-header",style:{marginLeft:"10px"}},n.a.createElement("h4",null,"Comic(s)")),t,a)):n.a.createElement("div",null,n.a.createElement("ul",{className:"collection"},n.a.createElement("li",{className:"collection-header",style:{marginLeft:"10px"}},n.a.createElement("h4",null,"No Comic(s)")),t,a))},T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},n.a.createElement("div",{className:"card-panel red accent-1"},this.props.error?this.props.error.errorMsg:"")));return this.props.error&&!0===this.props.error.hasError?e:""}}]),t}(r.Component),_=a(9),I=a.n(_),H=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){I.a.unbind("esc")}},{key:"componentDidMount",value:function(){this.props.fetchCharacterDetails(this.props.id),I.a.bind("esc",function(){document.querySelector(".back-link").click()})}},{key:"render",value:function(){var e=this.props,t=e.loaded,a=e.error;console.log(this.props);var r=this.props,c=r.characters,l=r.comics,i=c&&c.length>0?c[0]:null;return i&&!0===t?n.a.createElement("div",{className:"container section character-details desktop-device"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m4"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image",style:{border:"1px solid #ddd",borderRadius:"4px",padding:"5px"}},n.a.createElement("img",{alt:i.name,className:"img-responsive",src:i.thumbnail.path+"."+i.thumbnail.extension})))),n.a.createElement("div",{className:"col s12 m8"},n.a.createElement("h4",null,i.name),n.a.createElement("p",null,i.description?i.description:"Updating..."))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},n.a.createElement(w,{comics:l}))),n.a.createElement("div",{className:"center-align"},n.a.createElement(E.a,{className:"back-link",to:"/"},"Go Back"))):n.a.createElement("div",null,n.a.createElement(T,{error:a}),n.a.createElement(R,{loaded:t}))}}]),t}(r.Component),x=Object(C.b)(function(e){return Object(v.a)({},e.character)},function(e){return{fetchCharacterDetails:function(t){return e(function(e){return function(){var t=Object(j.a)(y.a.mark(function t(a,r){var n,c,l;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"FETCH_CHARACTERS_DETAILS",result:n={characters:[],comics:[]}}),t.next=5,S.fetchCharacterById(e);case 5:return c=t.sent,console.log(c),200===c.status&&(n.characters=c.data.data.results),t.next=10,S.fetchCommicsByCharacter(e);case 10:200===(l=t.sent).status&&(n.comics=l.data.data.results),a({type:"FETCH_CHARACTERS_DETAILS_SUCCESS",result:n}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),console.error(t.t0),a({type:"FETCH_CHARACTERS_DETAILS_FAILURE",error:N});case 19:case"end":return t.stop()}},t,null,[[0,15]])}));return function(e,a){return t.apply(this,arguments)}}()}(t))}}})(H),L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(x,{id:this.props.match.params.id}))}}]),t}(r.Component),F=a(18),D=a(87),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).handlePageChanged=function(e){var t={limit:e.page.take,offset:e.page.skip};a.props.fetchCharacters(t);var r=document.querySelectorAll(".k-master-row");r[0].querySelectorAll("td")[0].click(),r[0].querySelectorAll("td")[0].scrollIntoView(),I.a.unbind("tab"),I.a.unbind("shift+tab"),I.a.unbind("enter")},a.handleRowClick=function(e){var t=e.dataItem.id,r=a.props,n=0;I.a.unbind("tab"),I.a.unbind("shift+tab"),I.a.unbind("enter"),I.a.bind("enter",function(e){e.preventDefault(),r.enterCharacter(t)}),I.a.bind("tab",function(e){e.preventDefault(),n=r.grid.data.findIndex(function(e){return e.id===t}),++n===r.grid.data.length&&(n=0);var a=document.querySelectorAll(".k-master-row");a[n].querySelectorAll("td")[0].click(),a[n].querySelectorAll("td")[0].scrollIntoView()}),I.a.bind("shift+tab",function(e){e.preventDefault(),n=r.grid.data.findIndex(function(e){return e.id===t}),--n<0&&(n=0);var a=document.querySelectorAll(".k-master-row");a[n].querySelectorAll("td")[0].click(),a[n].querySelectorAll("td")[0].scrollIntoView()}),a.props.selectCharacter(t)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){I.a.unbind("tab"),I.a.unbind("shift+tab"),I.a.unbind("enter")}},{key:"componentDidMount",value:function(){this.props.fetchCharacters({limit:20,offset:0})}},{key:"render",value:function(){var e=this.props,t=e.grid,a=e.error;return!0===e.pressEnter?n.a.createElement(D.a,{to:"/character/"+t.selectedId}):n.a.createElement("div",{className:"section character-list"},n.a.createElement(T,{error:a}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},n.a.createElement("h5",null,"All Marvels"),n.a.createElement(F.a,{data:t.data?t.data.map(function(e){return Object(v.a)({},e,{selected:e.id===t.selectedId})}):[],selectedField:"selected",skip:t.offset,take:t.limit,total:t.total,pageable:!0,onPageChange:this.handlePageChanged,onRowClick:this.handleRowClick,onSelectionChange:this.selectionChange},n.a.createElement(F.b,{field:"name",width:"150",title:"Name"}),n.a.createElement(F.b,{field:"description",className:"nowrap",title:"Description"}),n.a.createElement(F.b,{field:"thumbnail",width:"200",title:" ",cell:function(e){return n.a.createElement("td",null,n.a.createElement(E.a,{to:"/character/"+e.dataItem.id},n.a.createElement("img",{className:"img-responsive",alt:"",height:"150",src:"".concat(e.dataItem[e.field].path,".").concat(e.dataItem[e.field].extension)})))}})),n.a.createElement(R,{loaded:t.loaded}))))}}]),t}(r.Component),q=Object(C.b)(function(e){return{grid:{loaded:e.character.loaded,selectedId:e.character.selectedId,offset:e.character.offset,limit:e.character.limit,total:e.character.total,data:e.character.results},error:e.character.error,pressEnter:e.character.pressEnter}},function(e){return{fetchCharacters:function(t){return e(function(e){return function(){var t=Object(j.a)(y.a.mark(function t(a,r){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"FETCH_CHARACTERS",result:n=null}),t.next=5,S.fetchCharacters(e);case 5:200!==(n=t.sent).code&&(console.log(n),a({type:"FETCH_CHARACTERS_FAILURE",error:{hasError:!0,errorMsg:n.message}})),a({type:"FETCH_CHARACTERS_SUCCESS",result:n}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:"FETCH_CHARACTERS_FAILURE",error:N});case 13:case"end":return t.stop()}},t,null,[[0,10]])}));return function(e,a){return t.apply(this,arguments)}}()}(t))},enterCharacter:function(t){return e((a=t,function(e,t){e({type:"SELECT_CHARACTER_ENTER",selectedId:a})}));var a},selectCharacter:function(t){return e((a=t,function(e,t){e({type:"SELECT_CHARACTER",selectedId:a})}));var a}}})(U),M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(q,null))}}]),t}(r.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"dashboard-view"},n.a.createElement(M,null))}}]),t}(r.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"charactergrid-view"},n.a.createElement(q,null))}}]),t}(r.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(m.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(b,null),n.a.createElement(h.a,null,n.a.createElement(p.a,{exact:!0,path:"/",component:B}),n.a.createElement(p.a,{exact:!0,path:"/character",component:P}),n.a.createElement(p.a,{path:"/character/:id",component:L}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(15),z={},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;arguments.length>1&&arguments[1];return e},G={},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CHARACTERS":return Object(v.a)({},e,{loaded:!1,error:null});case"FETCH_CHARACTERS_SUCCESS":return Object(v.a)({},e,t.result.data.data,{selectedId:null,loaded:!0,error:null});case"FETCH_CHARACTERS_FAILURE":return Object(v.a)({},e,{loaded:!0,error:t.error});case"FETCH_CHARACTERS_DETAILS":return Object(v.a)({},e,{loaded:!1,error:null,pressEnter:!1});case"FETCH_CHARACTERS_DETAILS_SUCCESS":return Object(v.a)({},e,t.result,{loaded:!0,error:null});case"FETCH_CHARACTERS_DETAILS_FAILURE":return Object(v.a)({},e,{loaded:!0,error:t.error});case"SELECT_CHARACTER":return Object(v.a)({},e,{selectedId:t.selectedId,error:null});case"SELECT_CHARACTER_ENTER":return Object(v.a)({},e,{selectedId:t.selectedId,pressEnter:!0,error:null});case"CALL_ERRORS":default:return e}},K=Object(V.c)({auth:J,character:$}),Q=a(43),X=Object(V.d)(K,Object(V.a)(Q.a));l.a.render(n.a.createElement(C.a,{store:X},n.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.f2217883.chunk.js.map