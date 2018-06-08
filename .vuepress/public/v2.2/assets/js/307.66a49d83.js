(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{610:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("This is a binding for communication with AVM Fritz!Box using SOAP requests (TR064 protocol).")]),a("p",[t._v("It has been tested on:")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),a("p",[t._v("See issues "),a("a",{attrs:{href:"https://github.com/gitbock/fritzboxtr064/issues?q=is%3Aissue+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._m(12),t._m(13),a("p",[t._v('For the "Call" items use "Text" in your sitemap')]),t._m(14),a("p",[t._v("Use a map for presence detection item:")]),t._m(15),t._m(16),a("p",[t._v("Now, as item configuration use:")]),t._m(17),t._m(18),a("p",[t._v("If you need the caller name (resolved from the fritzbox phonebook) in a rule, extract it like this:")]),t._m(19),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"fritzbox-binding-using-tr064-protocol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fritzbox-binding-using-tr064-protocol","aria-hidden":"true"}},[this._v("#")]),this._v(" Fritzbox Binding (using TR064 protocol)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("7270")]),s("li",[this._v("7330SL (v6.54)")]),s("li",[this._v("7360SL (v6.30)")]),s("li",[this._v("7390")]),s("li",[this._v("6360 Cable (v6.04)")]),s("li",[this._v("7490")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("detect if MAC is online in network (presence detection)")]),a("li",[t._v("switching on/off 2,4Hz Wifi, 5GHz Wifi and Guest Wifi (if any)")]),a("li",[t._v("getting external IP address of fbox")]),a("li",[t._v("getting fbox model name")]),a("li",[t._v("call monitor")]),a("li",[t._v('Switch Item: Receives "ON" state when call is incoming')]),a("li",[t._v("Call Items: Shows external an internal number for incoming/outgoing calls")]),a("li",[t._v("Resolve external call number to phonebook name")]),a("li",[t._v("enabling/disabling telephone answering machines (TAMs)")]),a("li",[t._v("getting new messages per TAM")]),a("li",[t._v("getting missed calls for the last x days")]),a("li",[t._v("getting DSL/WAN statistics for monitoring connection quality")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v('Enable TR064: In the webui goto "Heimnetz" - "Netzwerkeinstellungen": enable option "Zugriff für Anwendungen zulassen" (enabled by default)')]),s("li",[this._v("Only if you want to use the call monitor feature (items starting with callmonitor_...), enable the interface by dialing #96*5* You may disable it again by dialing #96*4*")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding can be configured in the file "),s("code",[this._v("services/fritzboxtr064.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),a("th",[t._v("Default")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("url")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("URL. Either use "),a("code",[t._v("http://<fbox-ip>:49000")]),t._v(" or "),a("code",[t._v("https://<fbox-ip>:49443")]),t._v(" (https preferred!)")])]),a("tr",[a("td",[t._v("refresh")]),a("td",[t._v("60000")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("Refresh interval in milliseconds")])]),a("tr",[a("td",[t._v("user")]),a("td",[t._v("dslf-config")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("User Name.  Only use this value if you configured a user in fbox webui/config!  It is recommended to switch to authentication by username in fritzbox config and add a separate config user for this binding.")])]),a("tr",[a("td",[t._v("pass")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("Password")])]),a("tr",[a("td",[t._v("phonebookid")]),a("td",[t._v("0")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("PhoneBook ID if you use a different phonebook (like a Google-synced phonebook).")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxName")]),t._v("            "),a("span",{attrs:{class:"token string"}},[t._v('"FBox Model [%s]"')]),t._v("           "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"modelName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxManufacturer")]),t._v("    "),a("span",{attrs:{class:"token string"}},[t._v('"FBox Manufacturer [%s]"')]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"manufacturerName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxSerial")]),t._v("          "),a("span",{attrs:{class:"token string"}},[t._v('"FBox Serial [%s]"')]),t._v("          "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"serialNumber"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxVersion")]),t._v("         "),a("span",{attrs:{class:"token string"}},[t._v('"FBox Version [%s]"')]),t._v("         "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"softwareVersion"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n# get wan ip if FritzBox establishes the internet connection "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" g"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" via DSL"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxWanIP")]),t._v("           "),a("span",{attrs:{class:"token string"}},[t._v('"FBox WAN IP [%s]"')]),t._v("          "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wanip"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n# get wan ip if FritzBox uses internet connection of external router\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxWanIPExternal")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"FBox external WAN IP [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"externalWanip"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxWifi24")]),t._v("          "),a("span",{attrs:{class:"token string"}},[t._v('"2,4GHz Wifi"')]),t._v("               "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wifi24Switch"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxWifi50")]),t._v("          "),a("span",{attrs:{class:"token string"}},[t._v('"5,0GHz Wifi"')]),t._v("               "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wifi50Switch"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxGuestWifi")]),t._v("       "),a("span",{attrs:{class:"token string"}},[t._v('"Guest Wifi"')]),t._v("                "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wifiGuestSwitch"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("cFboxMacOnline")]),t._v("      "),a("span",{attrs:{class:"token string"}},[t._v('"Presence (WiFi) [%s]"')]),t._v("      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"maconline:11-11-11-11-11-11"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# WAN statistics\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxWanAccessType")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"FBox WAN access type [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wanWANAccessType"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxWanLayer1UpstreamMaxBitRate")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"FBox WAN us max bit rate [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wanLayer1UpstreamMaxBitRate"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxWanLayer1DownstreamMaxBitRate")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"FBox WAN ds max bit rate [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wanLayer1DownstreamMaxBitRate"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxWanPhysicalLinkStatus")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"FBox WAN physical link status [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wanPhysicalLinkStatus"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxWanTotalBytesSent")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"WAN total bytes sent [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wanTotalBytesSent"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxWanTotalBytesReceived")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"WAN total bytes received [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"wanTotalBytesReceived"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# DSL statistics\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxDslEnable")]),t._v("       "),a("span",{attrs:{class:"token string"}},[t._v('"FBox DSL Enable [%s]"')]),t._v("      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dslEnable"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxDslStatus")]),t._v("       "),a("span",{attrs:{class:"token string"}},[t._v('"FBox DSL Status [%s]"')]),t._v("      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dslStatus"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxDslUpstreamCurrRate")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DSL Upstream Current [%s mbit/s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dslUpstreamCurrRate"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxDslDownstreamCurrRate")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DSL Downstream Current [%s mbit/s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dslDownstreamCurrRate"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxDslUpstreamMaxRate")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DSL Upstream Max [%s mbit/s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dslUpstreamMaxRate"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxDslDownstreamMaxRate")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DSL Downstream Max [%s mbit/s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dslDownstreamMaxRate"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxDslUpstreamNoiseMargin")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DSL Upstream Noise Margin [%s dB*10]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dslUpstreamNoiseMargin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxDslDownstreamNoiseMargin")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DSL Downstream Noise Margin [%s dB*10]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dslDownstreamNoiseMargin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxDslUpstreamAttenuation")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DSL Upstream Attenuation [%s dB*10]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dslUpstreamAttenuation"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxDslDownstreamAttenuation")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DSL Downstream Attenuation [%s dB*10]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dslDownstreamAttenuation"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxDslFECErrors")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DSL FEC Errors [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dslFECErrors"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxDslHECErrors")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DSL HEC Errors [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dslHECErrors"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxDslCRCErrors")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DSL CRC Errors [%s]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dslCRCErrors"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# only when using call monitor\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxRinging")]),t._v("         "),a("span",{attrs:{class:"token string"}},[t._v('"Phone ringing [%s]"')]),t._v("                "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"callmonitor_ringing"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxRinging_Out")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Phone ringing [%s]"')]),t._v("                "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"callmonitor_outgoing"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nCall    fboxIncomingCall    "),a("span",{attrs:{class:"token string"}},[t._v('"Incoming call: [%1$s to %2$s]"')]),t._v("     "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"callmonitor_ringing"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \nCall    fboxOutgoingCall    "),a("span",{attrs:{class:"token string"}},[t._v('"Outgoing call: [%1$s to %2$s]"')]),t._v("     "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"callmonitor_outgoing"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# resolve numbers "),a("span",{attrs:{class:"token class-name"}},[t._v("to")]),t._v(" names according phonebook\nCall    fboxIncomingCallResolved    "),a("span",{attrs:{class:"token string"}},[t._v('"Incoming call: [%1$s to %2$s]"')]),t._v("     "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"callmonitor_ringing:resolveName"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n# Telephone answering machine"),a("span",{attrs:{class:"token tag"}},[t._v(" (TAM)")]),t._v(" items\n# "),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("after")]),t._v(" tamSwitch is ID of configured TAM"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start with "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxTAM0Switch")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"Answering machine ID 0"')]),t._v("       "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"tamSwitch:0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxTAM0NewMsg")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"New Messages TAM 0 [%s]"')]),t._v("      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"tamNewMessages:0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# Missed calls"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" specify the number "),a("span",{attrs:{class:"token class-name"}},[t._v("of")]),t._v(" last days which should be searched for missed calls\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("fboxMissedCalls")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Missed Calls [%s]"')]),t._v("         "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"missedCallsInDays:5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"known-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-issues","aria-hidden":"true"}},[this._v("#")]),this._v(" Known issues")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples-and-hints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-and-hints","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples and Hints")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"sitemap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sitemap","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"map-for-presence-detection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map-for-presence-detection","aria-hidden":"true"}},[this._v("#")]),this._v(" Map for Presence Detection")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Create file "),s("code",[this._v("transform/presence.map")]),this._v(" and add:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("1=present\n0=not present\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("cFboxMacOnline")]),t._v("      "),a("span",{attrs:{class:"token string"}},[t._v('"Presence (Wifi) [MAP(presence.map):%d]"')]),t._v("   "),a("span",{attrs:{class:"token function"}},[t._v(" <present>")]),t._v("       "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fritzboxtr064"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v('"maconline'),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("11")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("22")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("33")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("44")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("55")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("66")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Rules")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Phone is ringing"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// fboxRinging is a switch item which switches to ON if call is detected")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" fboxRinging "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("OFF")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v(" \n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("logInfo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Anrufermeldung"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Generating caller name message..."')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// fboxIncoming call receives numbers/name of incoming call")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CallType")]),t._v(" incCall "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fboxIncomingCall"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CallType")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" callerName "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" incCall"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("destNum "),a("span",{attrs:{class:"token comment"}},[t._v("//destNum is external number OR resolved Name if no phonebook entry exists")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// do something with callerName")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);