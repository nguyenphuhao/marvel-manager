(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(83)},48:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(11),l=a.n(c),s=(a(48),a(2)),i=a(3),o=a(6),m=a(5),u=a(7),d=a(85),h=a(87),p=a(86),E=a(84),f=function(e){return n.a.createElement("div",{className:"navbar-fixed"},n.a.createElement("nav",{className:"red darken-2"},n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement(E.a,{to:"/",className:"brand-logo center"},n.a.createElement("img",{className:"responsive-img",src:"./img/logo1.png",alt:"Marvel Manager"})))))},v=function(){return n.a.createElement(f,null)},b=a(12),C=a(15),g=a(14),j=a.n(g),O=a(21),y=a(39),A=a.n(y).a.create({baseURL:"https://gateway.marvel.com:443"});A.defaults.params={apikey:"46a6295b76d8728d00f418b456633ada",hash:"67ddc58a669c177c24532c367784ae4f",ts:""};var N=A,R=new(function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"fetchCharacters",value:function(e){return N.request({url:"".concat("/v1/public/characters","?limit=").concat(e.limit,"&offset=").concat(e.offset),method:"get",params:e})}},{key:"fetchCharacterById",value:function(e){return N.get("/v1/public/characters/"+e)}},{key:"fetchCommicsByCharacter",value:function(e){var t="/v1/public/characters/".concat(e,"/comics");return N.get(t)}}]),e}()),k={hasError:!0,errorMsg:"Opps, Something went wrong!"},w=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=n.a.createElement("div",{className:"k-loading-mask"},n.a.createElement("span",{className:"k-loading-text"},"Loading"),n.a.createElement("div",{className:"k-loading-image"}),n.a.createElement("div",{className:"k-loading-color"})),t=document&&document.querySelector(".k-grid-content");return this.props.loaded&&!0===this.props.loaded?"":t?l.a.createPortal(e,t):e}}]),t}(r.Component),S=function(e){var t=e.comics&&e.comics.length>0?e.comics.map(function(e){return n.a.createElement("li",{className:"collection-item show-on-medium-and-up hide-on-small-only",key:e.id},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s9"},n.a.createElement("div",{style:{fontSize:"13pt"}},n.a.createElement("b",null,e.title)),n.a.createElement("p",{style:{textAlign:"justify"}},e.description?e.description:"Updating...")),n.a.createElement("div",{className:"col s3"},n.a.createElement("img",{width:"80%",src:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),alt:e.title,className:"responsive-img center"}))))}):"",a=e.comics&&e.comics.length>0?e.comics.map(function(e){return n.a.createElement("li",{className:"collection-item show-on-small hide-on-med-and-up",key:e.id},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"center-align"},n.a.createElement("img",{width:"70%",src:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),alt:e.title,className:"responsive-img"})),n.a.createElement("div",{className:"center-align",style:{fontSize:"13pt"}},n.a.createElement("b",null,e.title)),n.a.createElement("p",{style:{textAlign:"justify"}},e.description?e.description:"Updating...")))}):"";return n.a.createElement("div",null,n.a.createElement("ul",{className:"collection"},n.a.createElement("li",{className:"collection-header",style:{marginLeft:"10px"}},n.a.createElement("h4",null,"Comic(s)")),t,a),n.a.createElement("div",{className:"center-align"},n.a.createElement(E.a,{to:"/"},"Go Back")))},T=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},n.a.createElement("div",{className:"card-panel red accent-1"},this.props.error?this.props.error.errorMsg:"")));return this.props.error&&!0===this.props.error.hasError?e:""}}]),t}(r.Component),_=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCharacterDetails(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.loaded,a=e.error;console.log(this.props);var r=this.props,c=r.characters,l=r.comics,s=c&&l&&c.length>0&&l.length>0?c[0]:null;return s&&!0===t?n.a.createElement("div",{className:"container section character-details desktop-device"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m4"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image",style:{border:"1px solid #ddd",borderRadius:"4px",padding:"5px"}},n.a.createElement("img",{alt:s.name,className:"img-responsive",src:s.thumbnail.path+"."+s.thumbnail.extension})))),n.a.createElement("div",{className:"col s12 m8"},n.a.createElement("h4",null,s.name),n.a.createElement("p",null,s.description))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},n.a.createElement(S,{comics:l})))):n.a.createElement("div",null,n.a.createElement(T,{error:a}),n.a.createElement(w,{loaded:t}))}}]),t}(r.Component),H=Object(C.b)(function(e){return Object(b.a)({},e.character)},function(e){return{fetchCharacterDetails:function(t){return e(function(e){return function(){var t=Object(O.a)(j.a.mark(function t(a,r){var n,c,l;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"FETCH_CHARACTERS_DETAILS",result:n={characters:[],comics:[]}}),t.next=5,R.fetchCharacterById(e);case 5:return 200===(c=t.sent).status&&(n.characters=c.data.data.results),t.next=9,R.fetchCommicsByCharacter(e);case 9:200===(l=t.sent).status&&(n.comics=l.data.data.results),a({type:"FETCH_CHARACTERS_DETAILS_SUCCESS",result:n}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0),a({type:"FETCH_CHARACTERS_DETAILS_FAILURE",error:k});case 18:case"end":return t.stop()}},t,null,[[0,14]])}));return function(e,a){return t.apply(this,arguments)}}()}(t))}}})(_),I=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(H,{id:this.props.match.params.id}))}}]),t}(r.Component),x=a(16),F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).handlePageChanged=function(e){var t={limit:e.page.take,offset:e.page.skip};a.props.fetchCharacters(t)},a.handleRowClick=function(e){a.props.selectCharacter(e.dataItem.id)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCharacters({limit:20,offset:0})}},{key:"render",value:function(){var e=this.props,t=e.grid,a=e.error;return n.a.createElement("div",{className:"section character-list"},n.a.createElement(T,{error:a}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},n.a.createElement("h5",null,"All Marvels"),n.a.createElement(x.a,{data:t.data?t.data.map(function(e){return Object(b.a)({},e,{selected:e.id===t.selectedId})}):[],selectedField:"selected",skip:t.offset,take:t.limit,total:t.total,pageable:!0,onPageChange:this.handlePageChanged,onRowClick:this.handleRowClick},n.a.createElement(x.b,{field:"name",width:"150",title:"Name"}),n.a.createElement(x.b,{field:"description",className:"nowrap",title:"Description"}),n.a.createElement(x.b,{field:"thumbnail",width:"200",title:" ",cell:function(e){return n.a.createElement("td",null,n.a.createElement(E.a,{to:"/character/"+e.dataItem.id},n.a.createElement("img",{className:"img-responsive",alt:"",height:"150",src:"".concat(e.dataItem[e.field].path,".").concat(e.dataItem[e.field].extension)})))}})),n.a.createElement(w,{loaded:t.loaded}))))}}]),t}(r.Component),L=Object(C.b)(function(e){return{grid:{loaded:e.character.loaded,selectedId:e.character.selectedId,offset:e.character.offset,limit:e.character.limit,total:e.character.total,data:e.character.results},error:e.character.error}},function(e){return{fetchCharacters:function(t){return e(function(e){return function(){var t=Object(O.a)(j.a.mark(function t(a,r){var n;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"FETCH_CHARACTERS",result:n=null}),t.next=5,R.fetchCharacters(e);case 5:200!==(n=t.sent).code&&(console.log(n),a({type:"FETCH_CHARACTERS_FAILURE",error:{hasError:!0,errorMsg:n.message}})),a({type:"FETCH_CHARACTERS_SUCCESS",result:n}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:"FETCH_CHARACTERS_FAILURE",error:k});case 13:case"end":return t.stop()}},t,null,[[0,10]])}));return function(e,a){return t.apply(this,arguments)}}()}(t))},selectCharacter:function(t){return e((a=t,function(e,t){e({type:"SELECT_CHARACTER",selectedId:a})}));var a}}})(F),U=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(L,null))}}]),t}(r.Component),D=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"dashboard-view"},n.a.createElement(U,null))}}]),t}(r.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"charactergrid-view"},n.a.createElement(L,null))}}]),t}(r.Component),B=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(v,null),n.a.createElement(h.a,null,n.a.createElement(p.a,{exact:!0,path:"/",component:D}),n.a.createElement(p.a,{exact:!0,path:"/character",component:M}),n.a.createElement(p.a,{path:"/character/:id",component:I}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(13),q={},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;arguments.length>1&&arguments[1];return e},J={},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CHARACTERS":return Object(b.a)({},e,{loaded:!1,error:null});case"FETCH_CHARACTERS_SUCCESS":return Object(b.a)({},e,t.result.data.data,{selectedId:null,loaded:!0,error:null});case"FETCH_CHARACTERS_FAILURE":return Object(b.a)({},e,{loaded:!0,error:t.error});case"FETCH_CHARACTERS_DETAILS":return Object(b.a)({},e,{loaded:!1,error:null});case"FETCH_CHARACTERS_DETAILS_SUCCESS":return Object(b.a)({},e,t.result,{loaded:!0,error:null});case"FETCH_CHARACTERS_DETAILS_FAILURE":return Object(b.a)({},e,{loaded:!0,error:t.error});case"SELECT_CHARACTER":return Object(b.a)({},e,{selectedId:t.selectedId,error:null});case"CALL_ERRORS":default:return e}},G=Object(P.c)({auth:z,character:W}),$=a(42),K=Object(P.d)(G,Object(P.a)($.a));l.a.render(n.a.createElement(C.a,{store:K},n.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.48bf4d16.chunk.js.map