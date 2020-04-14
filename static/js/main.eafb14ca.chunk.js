(this.webpackJsonpbook_store=this.webpackJsonpbook_store||[]).push([[0],{198:function(e,t,a){e.exports=a(382)},381:function(e,t,a){},382:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setBooks",(function(){return f}));var r={};a.r(r),a.d(r,"setFilter",(function(){return b})),a.d(r,"setSearchQuery",(function(){return p}));var c={};a.r(c),a.d(c,"addToCart",(function(){return C})),a.d(c,"removeFromCart",(function(){return _}));var o=a(0),i=a.n(o),l=a(30),u=a.n(l),s=a(24),m=a(18),d=a(16),f=function(e){return{type:"SET_BOOKS",payload:e}},b=function(e){return{type:"SET_FILTER",payload:e}},p=function(e){return{type:"SET_QUERY",payload:e}},E=a(46),h=a(47),y=a(48),v=a(51),O=a(52),j=a(169),g=a.n(j),C=function(e){return{type:"ADD_TO_CART",payload:e}},_=function(e){return{type:"REMOVE_FROM_CART",payload:e}},k=a(393),R=a(185),w=a(33),S=a(383),T=function(e){var t=e.title,a=e.author,n=e.price,r=e.image,c=e.addToCart,o=e.addedCount;return i.a.createElement(k.a,null,i.a.createElement(R.a,{src:r,wrapped:!0,ui:!1}),i.a.createElement(k.a.Content,null,i.a.createElement(k.a.Header,null,t),i.a.createElement(k.a.Meta,null,i.a.createElement("span",{className:"date"},a)),i.a.createElement(k.a.Content,{extra:!0},i.a.createElement("a",null,i.a.createElement(w.a,{name:"euro sign"}),n))),i.a.createElement(S.a,{onClick:c.bind(void 0,e)},"Add to cart ",o>0&&"(".concat(o,")")))},I=Object(s.b)((function(e,t){var a=e.cart,n=t.id;return{addedCount:a.items.reduce((function(e,t){return e+(t.id===n?1:0)}),0)}}),(function(e){return Object(m.a)({},Object(d.b)(c,e))}))(T),B=a(394),A=a(389),F=function(e){var t=e.setFilter,a=e.filterBy,n=e.searchQuery,r=e.setSearchQuery;return i.a.createElement(B.a,{secondary:!0},i.a.createElement(B.a.Item,{name:"all",active:"all"===a,onClick:t.bind(void 0,"all")},"All"),i.a.createElement(B.a.Item,{name:"price_high",active:"price_high"===a,onClick:t.bind(void 0,"price_high")},"Sort by high price"),i.a.createElement(B.a.Item,{name:"price_low",active:"price_low"===a,onClick:t.bind(void 0,"price_low")},"Sort by low price"),i.a.createElement(B.a.Item,{name:"author",active:"author"===a,onClick:t.bind(void 0,"author")},"Author"),i.a.createElement(B.a.Item,null,i.a.createElement(A.a,{onChange:function(e){return r(e.target.value)},icon:"search",value:n,placeholder:"Search"})))},Q=Object(s.b)((function(e){e.books;return{filterBy:e.filter.filterBy}}),(function(e){return Object(m.a)({},Object(d.b)(r,e))}))(F),L=a(187),M=a(392),D=a(391),x=function(e){var t=e.title,a=e.id,n=e.image,r=e.removeFromCart;return i.a.createElement(M.a,{divided:!0,verticalAlign:"middle"},i.a.createElement(M.a.Item,null,i.a.createElement(M.a.Content,{floated:"right"},i.a.createElement(S.a,{onClick:r.bind(void 0,a),color:"red"},"Remove")),i.a.createElement(R.a,{avatar:!0,src:n}),i.a.createElement(M.a.Content,null,t)))},P=function(e){var t=e.totalPrice,a=e.count,n=e.items;return i.a.createElement(B.a,null,i.a.createElement(B.a.Item,{name:"browse"},"Book Shop"),i.a.createElement(B.a.Menu,{position:"right"},i.a.createElement(B.a.Item,{name:"signup"},"Sum: \xa0 ",i.a.createElement("b",null,t)," z\u0142."),i.a.createElement(D.a,{trigger:i.a.createElement(B.a.Item,{name:"help"},"Cart (",i.a.createElement("b",null,a),")"),content:n.map((function(e){return i.a.createElement(x,e)})),on:"click",hideOnScroll:!0})))},Y=a(183),J=a.n(Y),K=Object(s.b)((function(e){var t=e.cart;return{totalPrice:t.items.reduce((function(e,t){return e+t.price}),0),count:t.items.length,items:J()(t.items,(function(e){return e.id}))}}),(function(e){return Object(L.a)({},Object(d.b)(c,e))}))(P),U=a(390),V=function(e){function t(){return Object(E.a)(this,t),Object(y.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.setBooks;g.a.get("/books.json").then((function(t){var a=t.data;e(a)}))}},{key:"render",value:function(){var e=this.props,t=e.books,a=e.isReady;e.setFilter;return i.a.createElement(U.a,null,i.a.createElement(K,null),i.a.createElement(Q,null),i.a.createElement(k.a.Group,{itemsPerRow:4},a?t.map((function(e,t){return i.a.createElement(I,Object.assign({key:t},e))})):"Loading..."))}}]),t}(o.Component),z=a(83),G=a.n(z),H=function(e,t,a){return function(e,t){switch(t){case"price_high":return G()(e,"price","desc");case"price_low":return G()(e,"price","asc");case"author":return G()(e,"author","asc");default:return e}}(function(e,t){return e.filter((function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>=0||e.author.toLowerCase().indexOf(t.toLowerCase())>=0}))}(e,a),t)},N=Object(s.b)((function(e){var t=e.books,a=e.filter;return{books:t.items&&H(t.items,a.filterBy,a.searchQuery),isReady:t.isReady}}),(function(e){return Object(m.a)({},Object(d.b)(n,e),{},Object(d.b)(r,e))}))(V),W=(a(380),a(381),a(184)),q=a.n(W),X={isReady:!1,items:null},Z=a(186),$={items:[]},ee={searchQuery:"",filterBy:"all"},te=Object(d.c)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BOOKS":return Object(m.a)({},e,{items:t.payload,isReady:!0});case"SET_IS_READY":return Object(m.a)({},e,{isReady:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return Object(m.a)({},e,{items:[].concat(Object(Z.a)(e.items),[t.payload])});case"REMOVE_FROM_CART":return Object(m.a)({},e,{items:e.items.filter((function(e){return e.id!=t.payload}))});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUERY":return Object(m.a)({},e,{searchQuery:t.payload});case"SET_FILTER":return Object(m.a)({},e,{filterBy:t.payload});default:return e}}}),ae=Object(d.d)(te,Object(d.a)(q.a));u.a.render(i.a.createElement(s.a,{store:ae},i.a.createElement(N,{store:ae})),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.eafb14ca.chunk.js.map