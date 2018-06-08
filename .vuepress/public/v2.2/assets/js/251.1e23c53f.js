(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{526:function(t,e,i){"use strict";i.r(e);var r=i(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),i("p",[t._v("This is the binding for the "),i("a",{attrs:{href:"http://www.smartbedded.com/wiki/index.php/Meteostick",target:"_blank",rel:"noopener noreferrer"}},[t._v("Meteostick"),i("OutboundLink")],1),t._v(" weather receiver dongle.\nThis is an RF receiver that can receive data directly from Davis weather devices (and others).")]),t._m(1),i("p",[t._v("This binding support 2 different things types")]),t._m(2),t._m(3),i("p",[t._v("The Meteostick things need to be manually added - there is no discovery in the Meteostick binding.")]),i("p",[t._v("First add and configure the Meteostick bridge - the port and frequency band for your region need to be set.\nNext add the sensor and configure the channel number.")]),t._m(4),t._m(5),t._m(6),i("p",[t._v("Set mode to one of the following depending on your device and region:")]),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),i("p",[t._v("There are three channels associated with rainfall.\nThe raw counter from the tipping bucket is provided, the rainfall in the last 60 minutes is updated on each received rainfall and provides the past 60 minutes of rainfall.\nThe rainfall in the previous hour is the rainfall for each hour of the day and is updated on the hour.")]),t._m(16),i("p",[t._v("Things can be defined in the .thing file as follows")]),t._m(17),i("DocPreviousVersions"),i("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"meteostick-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meteostick-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Meteostick Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Thing")]),i("th",[t._v("Type")]),i("th",[t._v("Description")])])]),i("tbody",[i("tr",[i("td",[t._v("meteostick_bridge")]),i("td",[t._v("Bridge")]),i("td",[t._v("This is the Meteostick USB stick")])]),i("tr",[i("td",[t._v("meteostick_davis_iss")]),i("td",[t._v("Thing")]),i("td",[t._v("This is the Davis Vue ISS")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"meteostick-bridge-configuration-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meteostick-bridge-configuration-options","aria-hidden":"true"}},[this._v("#")]),this._v(" meteostick_bridge Configuration Options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[this._v("Option")]),e("th",[this._v("Description")])])]),e("tbody",[e("tr",[e("td",[this._v("port")]),e("td",[this._v("Sets the serial port to be used for the stick")])]),e("tr",[e("td",[this._v("mode")]),e("td",[this._v("Sets the mode (frequency band)")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Mode")]),i("th",[t._v("Device")]),i("th",[t._v("Region")]),i("th",[t._v("Frequency")])])]),i("tbody",[i("tr",[i("td",[t._v("0")]),i("td",[t._v("Davis")]),i("td",[t._v("North America")]),i("td",[t._v("915 Mhz")])]),i("tr",[i("td",[t._v("1")]),i("td",[t._v("Davis")]),i("td",[t._v("Australia")]),i("td",[t._v("915 Mhz")])]),i("tr",[i("td",[t._v("2")]),i("td",[t._v("Davis")]),i("td",[t._v("Europe")]),i("td",[t._v("868 Mhz")])]),i("tr",[i("td",[t._v("3")]),i("td",[t._v("Fine Offset")]),i("td",[t._v("North America")]),i("td",[t._v("915 Mhz")])]),i("tr",[i("td",[t._v("4")]),i("td",[t._v("Fine Offset")]),i("td",[t._v("Europe")]),i("td",[t._v("868 Mhz")])]),i("tr",[i("td",[t._v("5")]),i("td",[t._v("Davis")]),i("td",[t._v("New Zealand")]),i("td",[t._v("931.5 Mhz")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"meteostick-davis-iss-configuration-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meteostick-davis-iss-configuration-options","aria-hidden":"true"}},[this._v("#")]),this._v(" meteostick_davis_iss Configuration Options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[this._v("Option")]),e("th",[this._v("Description")])])]),e("tbody",[e("tr",[e("td",[this._v("channel")]),e("td",[this._v("Sets the RF channel used for this sensor")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"meteostick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meteostick","aria-hidden":"true"}},[this._v("#")]),this._v(" Meteostick")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Channel Type ID")]),i("th",[t._v("Item Type")]),i("th",[t._v("Description")])])]),i("tbody",[i("tr",[i("td",[t._v("pressure")]),i("td",[t._v("Number")]),i("td",[t._v("Air pressure")])]),i("tr",[i("td",[t._v("indoor-temperature")]),i("td",[t._v("Number")]),i("td",[t._v("Indoor temperature")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"davis-iss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#davis-iss","aria-hidden":"true"}},[this._v("#")]),this._v(" Davis ISS")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Channel Type ID")]),i("th",[t._v("Item Type")]),i("th",[t._v("Description")])])]),i("tbody",[i("tr",[i("td",[t._v("outdoor-temperature")]),i("td",[t._v("Number")]),i("td",[t._v("Outside temperature")])]),i("tr",[i("td",[t._v("humidity")]),i("td",[t._v("Number")]),i("td",[t._v("Humidity")])]),i("tr",[i("td",[t._v("wind-direction")]),i("td",[t._v("Number")]),i("td",[t._v("Wind direction")])]),i("tr",[i("td",[t._v("wind-speed")]),i("td",[t._v("Number")]),i("td",[t._v("Wind speed")])]),i("tr",[i("td",[t._v("rain-raw")]),i("td",[t._v("Number")]),i("td",[t._v("Raw rain counter from the tipping bucket sensor")])]),i("tr",[i("td",[t._v("rain-currenthour")]),i("td",[t._v("Number")]),i("td",[t._v("The rainfall in the last 60 minutes")])]),i("tr",[i("td",[t._v("rain-lasthour")]),i("td",[t._v("Number")]),i("td",[t._v("The rainfall in the previous hour")])]),i("tr",[i("td",[t._v("solar-power")]),i("td",[t._v("Number")]),i("td",[t._v("Solar power from the sensor station")])]),i("tr",[i("td",[t._v("signal-strength")]),i("td",[t._v("Number")]),i("td",[t._v("Received signal strength")])]),i("tr",[i("td",[t._v("low-battery")]),i("td",[t._v("Number")]),i("td",[t._v("Low battery warning")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"rainfall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rainfall","aria-hidden":"true"}},[this._v("#")]),this._v(" Rainfall")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('meteostick:meteostick_bridge:receiver [ port="/dev/tty.usbserial-AI02XA60", mode=1 ]\nmeteostick:meteostick_davis_iss:iss (meteostick:meteostick_bridge:receiver) [ channel=1 ]\n')])])])}],!1,null,null,null);e.default=s.exports}}]);