(window.webpackJsonpcraveus=window.webpackJsonpcraveus||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),c=a.n(r),i=(a(14),a(1)),o=a(2),l=a(4),u=a(3),h=a(6),m=a(5),d=(a(15),a(16),a(17),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.business;return s.a.createElement("div",{className:"Business"},s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{src:e.imageSrc,alt:"business_image"})),s.a.createElement("h2",null,e.name),s.a.createElement("div",{className:"Business-information"},s.a.createElement("div",{className:"Business-address"},s.a.createElement("p",null,e.address),s.a.createElement("p",null,e.city),s.a.createElement("p",null,e.state," ",e.zipCode)),s.a.createElement("div",{className:"Business-reviews"},s.a.createElement("h3",null,e.category),s.a.createElement("h3",{className:"rating"},e.rating," stars"),s.a.createElement("p",null,e.reviewCount," reviews"))))}}]),t}(s.a.Component)),p=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"BusinessList"},this.props.businesses.map(function(e){return s.a.createElement(d,{business:e,key:e.id})}))}}]),t}(s.a.Component),v=(a(18),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={term:"",location:"",sortBy:"best_match"},a.sortByOptions={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"},a.handleTermChange=a.handleTermChange.bind(Object(h.a)(a)),a.handleLocationChange=a.handleLocationChange.bind(Object(h.a)(a)),a.handleSearch=a.handleSearch.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"getSortByClass",value:function(e){return this.state.sortBy===e?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),e.preventDefault()}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map(function(t){var a=e.sortByOptions[t];return s.a.createElement("li",{key:a,className:e.getSortByClass(a),onClick:e.handleSortByChange.bind(e,a)},t)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("div",{className:"SearchBar-sort-options"},s.a.createElement("ul",null,this.renderSortByOptions())),s.a.createElement("div",{className:"SearchBar-fields"},s.a.createElement("input",{placeholder:"Search Businesses",onChange:this.handleTermChange}),s.a.createElement("input",{placeholder:"Where?",onChange:this.handleLocationChange})),s.a.createElement("div",{className:"SearchBar-submit"},s.a.createElement("a",{href:"www.#.com",onClick:this.handleSearch},"Let's Go")))}}]),t}(s.a.Component)),b={search:function(e,t,a){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(a),{headers:{Authorization:"Bearer ".concat("k__fzdZrt0jSWpP5hcGXRL_QSPOCvaOxYylX1_mwmYvZqFUvgx_lhICi4h7M0bUlsiFQRwVmVTuqTf36TmoETQ-33bvUTlV_Mx1tq_P1z7WFLyz4aM5tbP_Mzb5vXXYx")}}).then(function(e){return e.json()}).then(function(e){if(e.businesses)return e.businesses.map(function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}})})}},f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={businesses:[]},a.searchYelp=a.searchYelp.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"searchYelp",value:function(e,t,a){var n=this;b.search(e,t,a).then(function(e){n.setState({businesses:e})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"craveus")," ",s.a.createElement(v,{searchYelp:this.searchYelp}),s.a.createElement(p,{businesses:this.state.businesses}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.5485171c.chunk.js.map