(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{534:function(e,t,s){"use strict";s.r(t);var r=s(0),i=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),s("p",[e._v("This service allows you to feed item states to the "),s("a",{attrs:{href:"https://www.xively.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Xively IoT Platform"),s("OutboundLink")],1),e._v(".")]),e._m(1),e._m(2),s("p",[e._v("You need a Xively API key and data feed in order to send data. Each item being persisted represens a separate datastream.")]),e._m(3),e._m(4),e._m(5),e._m(6),s("DocPreviousVersions"),s("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"xively-formerly-cosm-persistence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xively-formerly-cosm-persistence","aria-hidden":"true"}},[this._v("#")]),this._v(" Xively (formerly Cosm) Persistence")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This persistence service supports only writing information, and so features such as "),t("code",[this._v("restoreOnStartup")]),this._v(" and sitemap Chart widgets cannot be used with this service.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This service can be configured in the file "),t("code",[this._v("services/cosm.cfg")]),this._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Property")]),s("th",[e._v("Default")]),s("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),s("th",[e._v("Description")])])]),s("tbody",[s("tr",[s("td",[e._v("url")]),s("td"),s("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),s("td",[e._v("The data feed URL to which your item states will be sent.  This is in the format "),s("code",[e._v("http://api.cosm.com/v2/feeds/<feed>/datastreams/")]),e._v(", where "),s("code",[e._v("<feed>")]),e._v(" should be replaced with your data feed number.")])]),s("tr",[s("td",[e._v("apikey")]),s("td"),s("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),s("td",[e._v("Your Xively API key")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All item and event related configuration is done in the file "),t("code",[this._v("persistence/cosm.persist")]),this._v(". Aliases correspond to cosm datastream IDs for the cosm persistence service.")])}],!1,null,null,null);t.default=i.exports}}]);