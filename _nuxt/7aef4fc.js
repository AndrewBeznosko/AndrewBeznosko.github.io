(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{196:function(t,e,r){var content=r(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("18c1c562",content,!0,{sourceMap:!1})},197:function(t,e,r){"use strict";var n=r(6),o=r(198)(6),l="findIndex",c=!0;l in[]&&Array(1)[l]((function(){c=!1})),n(n.P+n.F*c,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(80)(l)},198:function(t,e,r){var n=r(28),o=r(79),l=r(29),c=r(15),f=r(199);t.exports=function(t,e){var r=1==t,d=2==t,v=3==t,m=4==t,h=6==t,_=5==t||h,y=e||f;return function(e,f,F){for(var A,C,x=l(e),S=o(x),w=n(f,F,3),I=c(S.length),O=0,k=r?y(e,I):d?y(e,0):void 0;I>O;O++)if((_||O in S)&&(C=w(A=S[O],O,x),t))if(r)k[O]=C;else if(C)switch(t){case 3:return!0;case 5:return A;case 6:return O;case 2:k.push(A)}else if(m)return!1;return h?-1:v||m?m:k}}},199:function(t,e,r){var n=r(200);t.exports=function(t,e){return new(n(t))(e)}},200:function(t,e,r){var n=r(10),o=r(119),l=r(2)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[l])&&(e=void 0)),void 0===e?Array:e}},201:function(t,e,r){"use strict";r(196)},202:function(t,e,r){(e=r(61)(!1)).push([t.i,".wrap{position:relative;height:100vh;display:flex}.wrap__bg{position:fixed;top:0;right:0;bottom:0;left:0;z-index:-1;background:rgba(27,32,79,.2)}",""]),t.exports=e},203:function(t,e,r){"use strict";r.r(e);r(22),r(27),r(19),r(31),r(30),r(23),r(20),r(21),r(11),r(197),r(39);var n=r(3),o={name:"media",props:{thumbnailUrl:{type:String,default:""},title:{type:String,default:""},isFavorite:{type:Boolean,default:!1}}},l=r(32);function c(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var d={components:{Media:Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"media vendor-filter__item"},[r("div",{staticClass:"media__img-block"},[r("img",{staticClass:"media__img",attrs:{src:t.thumbnailUrl,alt:t.title}})]),t._v(" "),r("p",{staticClass:"media__txt"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"media__btns"},[r("button",{staticClass:"media__btn-icon",class:{"media__btn-icon--is-favorite":t.isFavorite},attrs:{type:"button"},on:{click:function(e){return t.$emit("toggle-favorite")}}})])])}),[],!1,null,null,null).exports},data:function(){return{photos:[],favorites:[],shortAlbumsList:"",filters:{byAZ:{id:0,name:"По алфавиту"},byAlbum:{id:1,name:"По альбомам"},byFavorites:{id:2,name:"Избранное"}},selectedFilter:0}},watch:{favorites:function(t){localStorage.setItem("favorites",JSON.stringify(t))},selectedFilter:function(t){localStorage.setItem("selectedFilter",JSON.stringify(t)),this.chekFavorites(JSON.parse(this.shortAlbumsList)),this.initFilters(t)}},mounted:function(){this.getPhotos()},methods:{getPhotos:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("http://jsonplaceholder.typicode.com/photos");case 2:r=e.sent,t.shortAlbumsList=JSON.stringify(t.maxAlbumsCount(r,32)),t.chekFavorites(JSON.parse(t.shortAlbumsList)),null!=(n=JSON.parse(localStorage.getItem("selectedFilter")))?(t.selectedFilter=n,t.initFilters(n)):t.transformPhotosByAZ(JSON.parse(t.shortAlbumsList));case 7:case"end":return e.stop()}}),e)})))()},transformPhotosByAZ:function(t){var e=this.sortByField(t,"title"),r=this.groupBySymb(e);this.photos=this.maxItemsInEachAlbum(r,10)},transformPhotosByAlbum:function(t){var e=this.sortByField(t,"title"),r=this.groupByAlbum(e);this.photos=this.maxItemsInEachAlbum(r,10)},sortByField:function(t,e){return t.sort((function(a,b){return a[e]>b[e]?1:-1}))},groupBySymb:function(t){var e=this,r={};return t.map((function(t){var n=e.getFirstSymb(t.title);r[n]||(r[n]=[]),r[n].push(t)})),r},groupByAlbum:function(t){var e={};return t.map((function(t){var r="".concat(t.albumId," - AlbumID");e[r]||(e[r]=[]),e[r].push(t)})),e},getFirstSymb:function(t){return t.charAt(0).toUpperCase()},maxAlbumsCount:function(t,e){return t.filter((function(t){return+t.albumId<=e}))},maxItemsInEachAlbum:function(t,e){var r={};for(var n in t)r[n]=t[n].slice(0,e);return r},toggleFavorite:function(t){var e=t.isFavorite=!t.isFavorite,r=this.favorites.findIndex((function(e){return e.id==t.id}));return e?r<0&&this.favorites.push(t):r>=0&&this.favorites.splice(r,1),e},chekFavorites:function(t){var e=this,r=localStorage.getItem("favorites");null!=r&&(this.favorites=JSON.parse(r));var n=t.map((function(t){var r,n=c(e.favorites);try{for(n.s();!(r=n.n()).done;){if(r.value.id==t.id)return t.isFavorite=!0,t}}catch(t){n.e(t)}finally{n.f()}return t.isFavorite=!1,t}));this.shortAlbumsList=JSON.stringify(n)},initFilters:function(t){this.filters.byAZ.id==t?this.transformPhotosByAZ(JSON.parse(this.shortAlbumsList)):this.filters.byAlbum.id==t&&this.transformPhotosByAlbum(JSON.parse(this.shortAlbumsList))}}},v={components:{VendorFilter:Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vendor-filter"},[r("div",{staticClass:"vendor-filter__header"},[r("div",{staticClass:"vendor-filter__title"},[r("div",{staticClass:"vendor-filter__controls"},[t._v("\n                Фильтр:\n                "),r("div",{staticClass:"filters-list"},t._l(t.filters,(function(filter){return r("label",{key:filter.id,staticClass:"filters-list__item",class:{"filters-list__item--active":filter.id==t.selectedFilter}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedFilter,expression:"selectedFilter"}],staticClass:"d-none",attrs:{type:"radio",name:"filter"},domProps:{value:filter.id,checked:t._q(t.selectedFilter,filter.id)},on:{change:function(e){t.selectedFilter=filter.id}}}),t._v(" "+t._s(filter.name))])})),0)]),t._v(" "),r("button",{staticClass:"close-btn ml-auto"})])]),t._v(" "),r("div",{staticClass:"vendor-filter__scroll-wrap"},[r("div",{staticClass:"vendor-filter__scroll scrollbar-is-hidden"},[r("div",{staticClass:"vendor-filter__list",class:{"vendor-filter__list--no-columns":t.filters.byFavorites.id==t.selectedFilter}},[[t.filters.byAZ.id,t.filters.byAlbum.id].includes(t.selectedFilter)?t._l(t.photos,(function(e,i){return r("div",{key:i,staticClass:"media-group"},[r("h4",{staticClass:"media-group__title"},[t._v(t._s(i))]),t._v(" "),t._l(e,(function(e){return r("div",{key:e.id,staticClass:"media vendor-filter__item"},[r("div",{staticClass:"media__img-block"},[r("img",{staticClass:"media__img",attrs:{src:e.thumbnailUrl,alt:e.title}})]),t._v(" "),r("p",{staticClass:"media__txt"},[t._v(t._s(e.title))]),t._v(" "),r("div",{staticClass:"media__btns"},[r("button",{staticClass:"media__btn-icon",class:{"media__btn-icon--is-favorite":e.isFavorite},attrs:{type:"button"},on:{click:function(r){e.isFavorite=t.toggleFavorite(e)}}})])])})),t._v(" "),t._l(e,(function(e){return r("media",{key:"media-"+e.id,attrs:{"thumbnail-url":e.thumbnailUrl,title:e.title,"is-favorite":e.isFavorite},on:{"toggle-favorite":function(r){e.isFavorite=t.toggleFavorite(e)}}})}))],2)})):t.filters.byFavorites.id==t.selectedFilter?t._l(t.favorites,(function(e){return r("media",{key:e.id,attrs:{"thumbnail-url":e.thumbnailUrl,title:e.title,"is-favorite":e.isFavorite},on:{"toggle-favorite":function(r){e.isFavorite=t.toggleFavorite(e)}}})})):t._e()],2)])])])}),[],!1,null,null,null).exports},data:function(){return{}},computed:{},created:function(){},methods:{}},m=(r(201),{components:{PopupContainer:Object(l.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("vendor-filter"),this._v(" "),e("div",{staticClass:"wrap__bg"})],1)}),[],!1,null,null,null).exports},data:function(){return{}},methods:{}}),h=Object(l.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("popup-container")}),[],!1,null,null,null);e.default=h.exports}}]);