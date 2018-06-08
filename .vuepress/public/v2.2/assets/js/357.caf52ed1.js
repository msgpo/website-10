(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{685:function(t,e,r){"use strict";r.r(e);var s=r(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),r("AddonLogo"),r("p",[t._v("Autelis manufactures a network enabled pool interface for many popular pool systems.\nSee "),r("a",{attrs:{href:"http://www.autelis.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("the Autelis website"),r("OutboundLink")],1),t._v(" and the  "),r("a",{attrs:{href:"http://www.autelis.com/wiki/index.php?title=Pool_Control_&lparPI&rpar_HTTP_Command_Reference",target:"_blank",rel:"noopener noreferrer"}},[t._v("Autelis Command Protocol"),r("OutboundLink")],1),t._v(" for more information.")]),r("p",[t._v("This binding supports:")]),t._m(1),t._m(2),r("p",[t._v("The binding will automatically look for a device with the DNS name 'poolcontrol'.\nIf found it will try and connect with the factory default username and password.")]),t._m(3),r("p",[t._v("The binding requires no special configuration")]),t._m(4),r("p",[t._v("The Autelis binding requires the host, port, username and password")]),r("p",[t._v("In the thing file, this looks e.g. like")]),t._m(5),t._m(6),r("p",[t._v("All devices support some of the following channels:")]),t._m(7),r("DocPreviousVersions"),r("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"autelis-pool-control-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#autelis-pool-control-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Autelis Pool Control Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Read circuit, auxiliary, temperature, pump, chemistry and system values")]),e("li",[this._v("Control circuit, auxiliary lighting scenes, and temperature set points")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dsl"}},[r("code",[r("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),r("span",{attrs:{class:"token class-name"}},[t._v("autelis"),r("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("myPool")]),t._v(" "),r("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" host"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token string"}},[t._v('"192.168.1.10"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token string"}},[t._v('"80"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token string"}},[t._v('"admin"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),r("span",{attrs:{class:"token operator"}},[t._v("=")]),r("span",{attrs:{class:"token string"}},[t._v('"admin"')]),r("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Channel Type ID")]),r("th",[t._v("Item Type")])])]),r("tbody",[r("tr",[r("td",[t._v("system-runstate")]),r("td",[t._v("Switch")])]),r("tr",[r("td",[t._v("system-model")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("system-haddr")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("system-opmode")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("system-freeze")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("system-sensor1")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("system-sensor2")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("system-sensor3")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("system-sensor4")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("system-sensor5")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("system-version")]),r("td",[t._v("String")])]),r("tr",[r("td",[t._v("system-time")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("equipment-circuit1")]),r("td",[t._v("Switch")])]),r("tr",[r("td",[t._v("equipment-circuit2")]),r("td",[t._v("Switch")])]),r("tr",[r("td",[t._v("equipment-circuit3")]),r("td",[t._v("Switch")])]),r("tr",[r("td",[t._v("equipment-circuit4")]),r("td",[t._v("Switch")])]),r("tr",[r("td",[t._v("equipment-circuit5")]),r("td",[t._v("Switch")])]),r("tr",[r("td",[t._v("equipment-circuit6")]),r("td",[t._v("Switch")])]),r("tr",[r("td",[t._v("equipment-circuit7")]),r("td",[t._v("Switch")])]),r("tr",[r("td",[t._v("equipment-circuit8")]),r("td",[t._v("Switch")])]),r("tr",[r("td",[t._v("equipment-circuit9")]),r("td",[t._v("Switch")])]),r("tr",[r("td",[t._v("equipment-circuit10")]),r("td",[t._v("Switch")])]),r("tr",[r("td",[t._v("equipment-feature1")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("equipment-feature2")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("equipment-feature3")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("equipment-feature4")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("equipment-feature5")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("equipment-feature6")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("equipment-feature7")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("equipment-feature8")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("equipment-feature9")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("equipment-feature10")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("temp-poolht")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("temp-spaht")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("temp-htstatus")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("temp-poolsp")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("temp-spasp")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("temp-pooltemp")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("temp-spatemp")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("temp-airtemp")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("temp-tempunits")]),r("td",[t._v("String")])]),r("tr",[r("td",[t._v("temp-htpump")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("pump-pump1")]),r("td",[t._v("String")])]),r("tr",[r("td",[t._v("pump-pump2")]),r("td",[t._v("String")])]),r("tr",[r("td",[t._v("pump-pump3")]),r("td",[t._v("String")])]),r("tr",[r("td",[t._v("pump-pump4")]),r("td",[t._v("String")])]),r("tr",[r("td",[t._v("pump-pump5")]),r("td",[t._v("String")])]),r("tr",[r("td",[t._v("pump-pump6")]),r("td",[t._v("String")])]),r("tr",[r("td",[t._v("pump-pump7")]),r("td",[t._v("String")])]),r("tr",[r("td",[t._v("pump-pump8")]),r("td",[t._v("String")])]),r("tr",[r("td",[t._v("chlor-chloren")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("chlor-poolsp")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("chlor-spasp")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("chlor-salt")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("chlor-super")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("chlor-chlorerr")]),r("td",[t._v("Number")])]),r("tr",[r("td",[t._v("chlor-chlorname")]),r("td",[t._v("String")])]),r("tr",[r("td",[t._v("lightscmd")]),r("td",[t._v("String")])])])])}],!1,null,null,null);e.default=n.exports}}]);