"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[414],{4847:(t,e,s)=>{s.d(e,{Z:()=>r});var a=s(3645),n=s.n(a)()((function(t){return t[1]}));n.push([t.id,".card:hover .remove[data-v-65818e2c]{display:block}.card .remove[data-v-65818e2c]{display:none;position:absolute;right:0;top:0}",""]);const r=n},6414:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});const a={name:"Home",components:{ProductCreate:function(){return s.e(550).then(s.bind(s,5550))},Trash:function(){return s.e(251).then(s.bind(s,9251))}},data:function(){return{selectedPage:1,searchQuery:""}},computed:{products:function(){return this.$store.getters.GET_PRODUCTS},meta:function(){return this.$store.getters.GET_META}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.selectedPage=t,this.$store.dispatch("getProducts",{params:{page:this.selectedPage,search:this.searchQuery}})},destroy:function(t){this.$store.dispatch("destroy",t)}},created:function(){this.getProducts()}};var n=s(3379),r=s.n(n),o=s(4847),i={insert:"head",singleton:!1};r()(o.Z,i);o.Z.locals;const c=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("ProductCreate")],1),t._v(" "),s("div",{staticClass:"col-12 mt-4"},[s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),s("button",{staticClass:"input-group-text",on:{click:t.getProducts}},[t._v("Search")])])]),t._v(" "),t.products.length?t._l(t.products,(function(e){return s("div",{staticClass:"col-12 col-md-6 col-lg-3 mt-3"},[s("div",{staticClass:"card"},[s("button",{staticClass:"btn btn-danger remove",on:{click:function(s){return t.destroy(e.id)}}},[s("Trash",{attrs:{color:"white"}})],1),t._v(" "),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk\n                            of the card's content.")]),t._v(" "),s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"product",params:{id:e.id}}}},[t._v("\n                            Edit\n                        ")])],1)])])})):s("div",{staticClass:"mt-4"},[s("p",{staticClass:"text-center"},[t._v("No Data")])]),t._v(" "),t.meta.last_page>1?s("div",{staticClass:"col-12 mt-4"},[s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination"},t._l(t.meta.last_page,(function(e){return s("li",{staticClass:"page-item",class:e==t.selectedPage&&"active"},[s("a",{staticClass:"page-link",attrs:{role:"button"},on:{click:function(s){return t.getProducts(e)}}},[t._v(t._s(e))])])})),0)])]):t._e()],2)])}),[],!1,null,"65818e2c",null).exports},1900:(t,e,s)=>{function a(t,e,s,a,n,r,o,i){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),a&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):n&&(c=i?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}s.d(e,{Z:()=>a})}}]);