(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cde5e6e4"],{"1dde":function(t,i,a){var n=a("d039"),e=a("b622"),s=a("2d00"),r=e("species");t.exports=function(t){return s>=51||!n((function(){var i=[],a=i.constructor={};return a[r]=function(){return{foo:1}},1!==i[t](Boolean).foo}))}},"5f47":function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"container products mt-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-5"},[a("div",{staticClass:"product-pic-zoom"},[a("img",{staticClass:"product-big-img img-fluid",attrs:{src:t.product.imageUrl[0],alt:""}}),t._m(0)])]),a("div",{staticClass:"col-5"},[a("div",{staticClass:"product-details"},[a("div",{staticClass:"pd-title"},[a("span",[t._v(t._s(t.product.category))]),a("h3",[t._v(t._s(t.product.title))]),t._m(1)]),a("div",[t._v(t._s(t.product.options.author)+" 著")]),a("div",{staticClass:"pd-desc"},[a("p",[t._v(" "+t._s(t.product.content)+" ")]),a("h4",[t._v(" $"+t._s(t.product.price)+" "),a("span",[t._v(t._s(t.product.origin_price))])])]),t._m(2),a("div",{staticClass:"quantity"},[a("div",{staticClass:"pro-qty"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"text"},domProps:{value:t.quantity},on:{input:function(i){i.target.composing||(t.quantity=i.target.value)}}})]),a("a",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"primary-btn",attrs:{href:"#"}},[t._m(3),t._v(" Loading... ")]),a("a",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"primary-btn",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.addCart(i)}}},[t._v("Add To Cart")])]),t._m(4),t._m(5)])]),a("b-alert",{staticClass:"mt-3",staticStyle:{position:"fixed",bottom:"70%",right:"15%",width:"70%","z-index":"999"},attrs:{show:t.dismissCountDown,dismissible:"",fade:"",variant:"warning"},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" 已加入購物車 ")])],1)])},e=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"zoom-icon"},[a("i",{staticClass:"fa fa-search-plus"})])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("a",{staticClass:"heart-icon",attrs:{href:"#"}},[a("i",{staticClass:"icon_heart_alt"})])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"pd-size-choose"},[a("div",{staticClass:"sc-item"},[a("input",{attrs:{type:"radio",id:"sm-size"}}),a("label",{attrs:{for:"sm-size"}},[t._v("pdf")])]),a("div",{staticClass:"sc-item"},[a("input",{attrs:{type:"radio",id:"md-size"}}),a("label",{attrs:{for:"md-size"}},[t._v("epub")])]),a("div",{staticClass:"sc-item"},[a("input",{attrs:{type:"radio",id:"lg-size"}}),a("label",{attrs:{for:"lg-size"}},[t._v("mobi")])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"spinner-border text-light",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"})])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("ul",{staticClass:"pd-tags"},[a("li",[a("span",[t._v("TAGS")]),t._v(":Learning ")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"pd-share"},[a("div",{staticClass:"pd-social"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"ti-facebook"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"ti-twitter-alt"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"ti-linkedin"})])])])}],s=(a("99af"),a("7db0"),a("d3b7"),{props:["id"],data:function(){return{product:{imageUrl:[],options:{author:""}},quantity:1,cartList:[],loading:!1,dismissCountDown:0}},created:function(){this.getProductDetail()},methods:{getProductDetail:function(){var t=this,i="".concat("https://course-ec-api.hexschool.io/api","/").concat("354b1b67-8c78-4eab-a8f1-148bbb2f3ec1","/ec/product/").concat(this.id);this.axios.get(i).then((function(i){console.log(i),t.product=i.data.data,t.loading=!1}))},modifyCount:function(t){var i=this.quantity+t;this.quantity=i>0?i:0},addCart:function(){var t=this;this.loading=!0,this.getCartList().then((function(i){console.log(i);var a=t.foundItem(i),n=t.quantity+a.quantity,e="";e=a?"patch":"post";var s="".concat("https://course-ec-api.hexschool.io/api","/").concat("354b1b67-8c78-4eab-a8f1-148bbb2f3ec1","/ec/shopping");t.axios({method:e,url:s,data:{product:t.id,quantity:n}}).then((function(i){console.log(i),t.showAlert(),t.getCartList().then((function(i){console.log(i),t.loading=!1}))})).catch((function(i){t.showAlert(),t.loading=!1,console.log(i)}))}))},getCartList:function(){var t=this;return new Promise((function(i,a){var n="".concat("https://course-ec-api.hexschool.io/api","/").concat("354b1b67-8c78-4eab-a8f1-148bbb2f3ec1","/ec/shopping");t.axios.get(n).then((function(a){console.log(a);var n=a.data.data,e=a.data.meta.pagination.total;t.$bus.$emit("updateCart",e),i(n)})).catch((function(t){a(t)}))}))},foundItem:function(t){var i=this;return t.find((function(t){return t.product.id===i.id}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=2}}}),r=s,o=a("2877"),c=Object(o["a"])(r,n,e,!1,null,null,null);i["default"]=c.exports},"65f0":function(t,i,a){var n=a("861d"),e=a("e8b5"),s=a("b622"),r=s("species");t.exports=function(t,i){var a;return e(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!e(a.prototype)?n(a)&&(a=a[r],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===i?0:i)}},"7db0":function(t,i,a){"use strict";var n=a("23e7"),e=a("b727").find,s=a("44d2"),r=a("ae40"),o="find",c=!0,u=r(o);o in[]&&Array(1)[o]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!u},{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},8418:function(t,i,a){"use strict";var n=a("c04e"),e=a("9bf2"),s=a("5c6c");t.exports=function(t,i,a){var r=n(i);r in t?e.f(t,r,s(0,a)):t[r]=a}},"99af":function(t,i,a){"use strict";var n=a("23e7"),e=a("d039"),s=a("e8b5"),r=a("861d"),o=a("7b0b"),c=a("50c4"),u=a("8418"),d=a("65f0"),l=a("1dde"),f=a("b622"),p=a("2d00"),v=f("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",b=p>=51||!e((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=l("concat"),C=function(t){if(!r(t))return!1;var i=t[v];return void 0!==i?!!i:s(t)},_=!b||!g;n({target:"Array",proto:!0,forced:_},{concat:function(t){var i,a,n,e,s,r=o(this),l=d(r,0),f=0;for(i=-1,n=arguments.length;i<n;i++)if(s=-1===i?r:arguments[i],C(s)){if(e=c(s.length),f+e>h)throw TypeError(m);for(a=0;a<e;a++,f++)a in s&&u(l,f,s[a])}else{if(f>=h)throw TypeError(m);u(l,f++,s)}return l.length=f,l}})},ae40:function(t,i,a){var n=a("83ab"),e=a("d039"),s=a("5135"),r=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,i){if(s(o,t))return o[t];i||(i={});var a=[][t],u=!!s(i,"ACCESSORS")&&i.ACCESSORS,d=s(i,0)?i[0]:c,l=s(i,1)?i[1]:void 0;return o[t]=!!a&&!e((function(){if(u&&!n)return!0;var t={length:-1};u?r(t,1,{enumerable:!0,get:c}):t[1]=1,a.call(t,d,l)}))}},b727:function(t,i,a){var n=a("0366"),e=a("44ad"),s=a("7b0b"),r=a("50c4"),o=a("65f0"),c=[].push,u=function(t){var i=1==t,a=2==t,u=3==t,d=4==t,l=6==t,f=5==t||l;return function(p,v,h,m){for(var b,g,C=s(p),_=e(C),y=n(v,h,3),w=r(_.length),x=0,A=m||o,q=i?A(p,w):a?A(p,0):void 0;w>x;x++)if((f||x in _)&&(b=_[x],g=y(b,x,C),t))if(i)q[x]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return x;case 2:c.call(q,b)}else if(d)return!1;return l?-1:u||d?d:q}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},e8b5:function(t,i,a){var n=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-cde5e6e4.845faed9.js.map