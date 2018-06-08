(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{559:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("p",[t._v("This binding allows you to integrate a "),e("a",{attrs:{href:"http://www.vellemanusa.com/products/view/?country=us&lang=enu&id=500349",target:"_blank",rel:"noopener noreferrer"}},[t._v("Velleman k8055 USB IO Board"),e("OutboundLink")],1),t._v(" with openHAB.")]),t._m(1),e("p",[t._v("This binding makes use of JNI calls to the native k8055 library and thus requires that the native library is available.  The binding has been tested on Linux with the open-source "),e("a",{attrs:{href:"http://libk8055.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("libk8055"),e("OutboundLink")],1),t._v(" library.  In principle it should also work on Windows with the Velleman provided DLL as it has the same API, however this has not yet been tested.")]),e("p",[t._v("For the binding to access the native library correctly, the following conditions must be met:")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),e("p",[t._v("The syntax of the binding configuration strings accepted is the following:")]),t._m(7),e("p",[t._v("where:")]),t._m(8),t._m(9),t._m(10),t._m(11),e("p",[t._v("On some Linux distribution, the user openhab is running as may not have permissions to access the USB ports by default.  It is worth checking that the standalone command-line program (k8055) that comes with libk8055 works under the relevant Linux user before attempting to use the binding.  (Particularly as the driver outputs little useful debugging information to the logs).")]),e("DocPreviousVersions"),e("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"velleman-k8055-usb-io-board-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#velleman-k8055-usb-io-board-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Velleman k8055 USB IO Board Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("The library must be installed somewhere in the library search path (in Linux, a system lib directory is fine; on Windows\\system32 folder.")]),s("li",[this._v("The JVM being used to run openHAB must be the same 'bitness' as the library (i.e. 32bit/64bit).  If using the Velleman provided Windows DLL, this means running on a 32bit JVM.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding can be configured in the file "),s("code",[this._v("services/k8055.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),e("th",[t._v("Default")]),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("refresh")]),e("td",[t._v("1000")]),e("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),e("td",[t._v("how often the binding should read the state of the hardware inputs, in milliseconds")])]),e("tr",[e("td",[t._v("boardno")]),e("td"),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),e("td",[t._v("which board openhab should connect to. This must be specified to enable the binding.  Currently the binding only supports connecting to a single board.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('k8055="<IO-type>:<IO-number>"\n')])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[e("strong",[t._v("IO-type")]),t._v(" is one of:")])]),e("li",[e("p",[t._v("DIGITAL_IN - Supports "),e("em",[t._v("Contact")]),t._v(" Items")])]),e("li",[e("p",[t._v("DIGITAL_OUT - Supports "),e("em",[t._v("Switch")]),t._v(" Items")])]),e("li",[e("p",[t._v("ANALOG_IN - Supports "),e("em",[t._v("Number")]),t._v(" Items")])]),e("li",[e("p",[t._v("ANALOG_OUT - Supports "),e("em",[t._v("Dimmer")]),t._v(" Items")])]),e("li",[e("p",[e("strong",[t._v("IO-number")]),t._v(" is the number (1-8) of the particular IO channel to bind to.")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Output1")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Digital Output 1"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" k8055"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"DIGITAL_OUT:1"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Output2")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Digital Output 2"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" k8055"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"DIGITAL_OUT:2"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("K8055_ANOUT_1")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"K8055 Analog Output 1"')]),t._v("   "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" k8055"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"ANALOG_OUT:1"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("K8055_ANOUT_2")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"K8055  Analog Output 2"')]),t._v("  "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" k8055"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"ANALOG_OUT:2"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("K8055_ANIN_1")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"K8055 Analog Input 1"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" k8055"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"ANALOG_IN:1"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("K8055_ANIN_2")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"K8055 Analog Input 2"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" k8055"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"ANALOG_IN:2"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting")])}],!1,null,null,null);s.default=a.exports}}]);