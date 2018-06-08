(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{420:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("The Toon bindings shows among others current room temperature, setpoint, energy and gas usage information.\nIt can control the setpoint and current program.\nConnected smart plugs can also be controlled.")]),t._m(1),t._m(2),t._m(3),t._m(4),a("p",[t._v("The display unit holds all channels that represent current room temperature, setpoint, setpoint mode, gas and energy meter readings.")]),t._m(5),a("p",[t._v("A Toon plug represents a connected wall plug that can be controlled via Toon.")]),t._m(6),t._m(7),a("p",[t._v("Currently only the display and plugs are discovered. So no Alarms or Hue lights will be discovered.")]),t._m(8),t._m(9),a("p",[t._v("demo.things")]),t._m(10),t._m(11),a("p",[t._v("demo.items:")]),t._m(12),a("p",[t._v("Replace zzzz and pppp with the discovered values.")]),t._m(13),a("p",[t._v("demo.sitemaps")]),t._m(14),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"toon-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toon-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Toon Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"toon-webaccount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toon-webaccount","aria-hidden":"true"}},[this._v("#")]),this._v(" Toon Webaccount")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Before the binding can be used, a Toon Webaccount must be added.\nThis needs to be done manually. Select "),s("code",[this._v("Toon Webaccount")]),this._v(", and enter your username and password.\nAfterwards start discovery so your display and connected plugs are discovered.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"toon-display-unit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toon-display-unit","aria-hidden":"true"}},[this._v("#")]),this._v(" Toon display unit")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"toon-plug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toon-plug","aria-hidden":"true"}},[this._v("#")]),this._v(" Toon plug")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Once the binding is authorized, and the "),s("code",[this._v("Toon Webaccount")]),this._v(" is added, you can start the discovery.\nThis will find your Toon Display and put it in the Inbox.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('toon:toonapi:toontest [ username="xxxx", password="yyyy" ]\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Toon")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Display items")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ToonTemp")]),t._v("        "),a("span",{attrs:{class:"token tag"}},[t._v(" (Toon)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"toon:main:toontest:zzzz:Temperature"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ToonSetpoint")]),t._v("    "),a("span",{attrs:{class:"token tag"}},[t._v(" (Toon)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"toon:main:toontest:zzzz:Setpoint"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ToonSetpointMode")]),a("span",{attrs:{class:"token tag"}},[t._v(" (Toon)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"toon:main:toontest:zzzz:SetpointMode"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Gas")]),t._v("             "),a("span",{attrs:{class:"token tag"}},[t._v(" (Toon)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"toon:main:toontest:zzzz:GasMeterReading"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Power")]),t._v("           "),a("span",{attrs:{class:"token tag"}},[t._v(" (Toon)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"toon:main:toontest:zzzz:PowerMeterReading"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("PowerLow")]),t._v("        "),a("span",{attrs:{class:"token tag"}},[t._v(" (Toon)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"toon:main:toontest:zzzz:PowerMeterReadingLow"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("PowerConsumption")]),a("span",{attrs:{class:"token tag"}},[t._v(" (Toon)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"toon:main:toontest:zzzz:PowerConsumption"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Modulation")]),t._v("      "),a("span",{attrs:{class:"token tag"}},[t._v(" (Toon)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"toon:main:toontest:zzzz:ModulationLevel"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Heater")]),t._v("          "),a("span",{attrs:{class:"token tag"}},[t._v(" (Toon)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"toon:main:toontest:zzzz:Heating"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Tapwater")]),t._v("        "),a("span",{attrs:{class:"token tag"}},[t._v(" (Toon)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"toon:main:toontest:zzzz:Tapwater"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("PreHeat")]),t._v("         "),a("span",{attrs:{class:"token tag"}},[t._v(" (Toon)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"toon:main:toontest:zzzz:Preheat"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Plug items")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Plug")]),t._v("            "),a("span",{attrs:{class:"token tag"}},[t._v(" (Toon)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"toon:plug:toontest:pppp:switch_binary"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("PlugConsumption")]),t._v(" "),a("span",{attrs:{class:"token tag"}},[t._v(" (Toon)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"toon:plug:toontest:pppp:PowerConsumption"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"sitemaps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sitemaps","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemaps")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Toon\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Setpoint")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("ToonSetpoint "),a("span",{attrs:{class:"token constant"}},[t._v("minValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("16")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("maxValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("28")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("step")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("0.5")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Selection")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("ToonSetpointMode "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Toon Program Selection"')]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Comfort"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Active"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Sleep"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Away"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);