(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{734:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("AddonLogo"),s("p",[t._v("This bundle exposes openHAB rule extensions to be used with the DSC Alarm Binding (1.x binding).  It allows the sending of DSC Alarm specific commands from within rules.")]),t._m(1),s("p",[t._v("The DSC Alarm Action bundle relies on the DSC Alarm Binding (1.x) being installed and configured.")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),s("p",[t._v("To invoke the action see the examples below:")]),s("p",[t._v("Add an item to your items file such as a switch:")]),t._m(7),s("p",[t._v("The following rule will trigger whenever the switch is turned ON:")]),t._m(8),s("p",[t._v("Again add an item to your items file:")]),t._m(9),s("p",[t._v("This rule triggers when the switch is turned ON:")]),t._m(10),s("DocPreviousVersions"),s("EditPageLink")],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"dsc-alarm-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dsc-alarm-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" DSC Alarm Actions")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("code",[this._v("sendDSCAlarmCommand(String command)")]),this._v(" - sends a DSC Alarm command.")]),a("li",[a("code",[this._v("sendDSCAlarmCommand(String command, String data)")]),this._v(" - same as above but with command specific required data.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The "),a("code",[this._v("command")]),this._v(" parameter is a string numeric code.  The following table shows which commands are supported:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("DSC Alarm Command Code")]),s("th",[t._v("Description")]),s("th",[t._v("Data")]),s("th",[t._v("Supported Interface")])])]),s("tbody",[s("tr",[s("td",[s("code",[t._v("000")])]),s("td",[t._v("Poll")]),s("td",[t._v("NONE")]),s("td",[t._v("Envisalink, IT100")])]),s("tr",[s("td",[s("code",[t._v("001")])]),s("td",[t._v("Status Report")]),s("td",[t._v("NONE")]),s("td",[t._v("Envisalink, IT100")])]),s("tr",[s("td",[s("code",[t._v("002")])]),s("td",[t._v("Labels Request")]),s("td",[t._v("NONE")]),s("td",[t._v("IT100")])]),s("tr",[s("td",[s("code",[t._v("005")])]),s("td",[t._v("Network Login")]),s("td",[t._v("1-6 Character - [Password]")]),s("td",[t._v("Envisalink")])]),s("tr",[s("td",[s("code",[t._v("008")])]),s("td",[t._v("Dump Zone Timers")]),s("td",[t._v("NONE")]),s("td",[t._v("Envisalink")])]),s("tr",[s("td",[s("code",[t._v("010")])]),s("td",[t._v("Set Time and Date")]),s("td",[t._v("NONE")]),s("td",[t._v("Envisalink, IT100")])]),s("tr",[s("td",[s("code",[t._v("020")])]),s("td",[t._v("Command Output Control")]),s("td",[t._v("2 Characters - [Partition # (1-8)][PGM # (1-4)]")]),s("td",[t._v("Envisalink, IT100")])]),s("tr",[s("td",[s("code",[t._v("030")])]),s("td",[t._v("Partition Arm Control - Away")]),s("td",[t._v("1 Character - [Partition # (1-8)]")]),s("td",[t._v("Envisalink, IT100")])]),s("tr",[s("td",[s("code",[t._v("031")])]),s("td",[t._v("Partition Arm Control - Stay")]),s("td",[t._v("1 Character - [Partition # (1-8)]")]),s("td",[t._v("Envisalink, IT100")])]),s("tr",[s("td",[s("code",[t._v("032")])]),s("td",[t._v("Partition Arm Control - No Entry Delay")]),s("td",[t._v("1 Character - [Partition # (1-8)]")]),s("td",[t._v("Envisalink, IT100")])]),s("tr",[s("td",[s("code",[t._v("033")])]),s("td",[t._v("Partition Arm Control - With User Code")]),s("td",[t._v("5-7 Characters - [Partition # (1-8)][User Code (4-6)]")]),s("td",[t._v("Envisalink, IT100")])]),s("tr",[s("td",[s("code",[t._v("040")])]),s("td",[t._v("Partition Disarm Control - With User Code")]),s("td",[t._v("5-7 Characters - [Partition # (1-8)][User Code (4-6)]")]),s("td",[t._v("Envisalink, IT100")])]),s("tr",[s("td",[s("code",[t._v("055")])]),s("td",[t._v("Time Stamp Control")]),s("td",[t._v("1 Character - [On/Off (1,0)]")]),s("td",[t._v("Envisalink, IT100")])]),s("tr",[s("td",[s("code",[t._v("056")])]),s("td",[t._v("Time/Date Broadcast Control")]),s("td",[t._v("1 Character - [On/Off (1,0)]")]),s("td",[t._v("Envisalink, IT100")])]),s("tr",[s("td",[s("code",[t._v("057")])]),s("td",[t._v("Temperature Broadcast Control")]),s("td",[t._v("1 Character - [On/Off (1,0)]")]),s("td",[t._v("Envisalink, IT100")])]),s("tr",[s("td",[s("code",[t._v("058")])]),s("td",[t._v("Virtual Keypad Control")]),s("td",[t._v("1 Character - [On/Off (1,0)]")]),s("td",[t._v("IT100")])]),s("tr",[s("td",[s("code",[t._v("060")])]),s("td",[t._v("Trigger Panic Alarm")]),s("td",[t._v("1 Character - [1=Fire, 2=Ambulance, 3=Police]")]),s("td",[t._v("Envisalink, IT100")])]),s("tr",[s("td",[s("code",[t._v("070")])]),s("td",[t._v("Single Keystroke")]),s("td",[t._v("1 Character - [Single ASCII Character]")]),s("td",[t._v("Envisalink, IT100")])]),s("tr",[s("td",[s("code",[t._v("071")])]),s("td",[t._v("Keystroke String")]),s("td",[t._v("1-6 Characters - [1-6 ASCII Character String]")]),s("td",[t._v("Envisalink")])]),s("tr",[s("td",[s("code",[t._v("074")])]),s("td",[t._v("Keep Alive")]),s("td",[t._v("1 Character - [Partition # (1-8)]")]),s("td",[t._v("Envisalink")])]),s("tr",[s("td",[s("code",[t._v("200")])]),s("td",[t._v("Code Send")]),s("td",[t._v("4-6 Characters - [User Code (4-6)]")]),s("td",[t._v("Envisalink, IT100")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[this._v("Switch")]),this._v(" "),a("span",{attrs:{class:"token class-name"}},[this._v("PollCommand")]),this._v(" "),a("span",{attrs:{class:"token string"}},[this._v('"Send a poll command to the DSC Alarm System"')]),this._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"PollCommand"')]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v(" \n        "),s("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" PollCommand "),s("span",{attrs:{class:"token keyword"}},[t._v("received command")]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("sendDSCAlarmCommand")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"000"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[this._v("Switch")]),this._v(" "),a("span",{attrs:{class:"token class-name"}},[this._v("BypassZone1")]),this._v(" "),a("span",{attrs:{class:"token string"}},[this._v('"Bypass Zone 1"')]),this._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"BypassZone1"')]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v(" \n        "),s("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" BypassZone1 "),s("span",{attrs:{class:"token keyword"}},[t._v("received command")]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("sendDSCAlarmCommand")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"071"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v('"*101#"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);a.default=n.exports}}]);