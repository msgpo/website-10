(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{390:function(s,t,e){"use strict";var n=e(73);e.n(n).a},73:function(s,t,e){},798:function(s,t,e){"use strict";e.r(t);e(22),e(21),e(47);var n={data:function(){return{versionNumbers:["latest","2.3","2.2","2.1"],currentVersion:"latest",open:!1}},methods:{toggle:function(){this.open=!this.open}},created:function(){this.$site.base&&this.$site.base.indexOf("v")>0&&(this.currentVersion=this.$site.base.replace("v","").replace(/\//g,""),this.versionNumbers=["latest",this.currentVersion])},computed:{versions:function(){var s=this;return this.versionNumbers.map(function(t){var e=s.$page.path;return"2.2"!==t&&"2.1"!==t||0===(e=e.replace("addons/integrations/","addons/ios/")).indexOf("/addons")&&(e+="readme.html"),{number:t,url:e="latest"===t?"https://www.openhab.org"+e:"https://".concat("2.2"===t||"2.1"===t?"docs.":"www.","openhab.org").concat("snapshot"===t?"":"/v"+t).concat(e)}})}}},r=(e(390),e(0)),a=Object(r.a)(n,function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"page-versions"},[e("div",{staticClass:"dropdown-wrapper",class:{open:s.open}},[e("a",{staticClass:"dropdown-title",on:{click:s.toggle}},[e("span",{staticClass:"title"},[s._v("Version: "+s._s(s.currentVersion))]),e("span",{staticClass:"arrow",class:s.open?"down":"right"})]),e("ul",{directives:[{name:"show",rawName:"v-show",value:s.open,expression:"open"}],staticClass:"nav-dropdown"},s._l(s.versions,function(t){return e("li",{staticClass:"dropdown-item"},[t.number===s.currentVersion?e("a",{staticClass:"current"},[s._v(s._s(t.number))]):e("a",{attrs:{href:t.url}},[s._v(s._s(t.number))])])}))])])},[],!1,null,null,null);t.default=a.exports}}]);