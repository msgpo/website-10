(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{532:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("The MAX!Cube binding allows openHAB to connect to "),a("a",{attrs:{href:"http://www.elv.de/max-cube-lan-gateway.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("(ELV) MAX!Cube Lan Gateway"),a("OutboundLink")],1),t._v(" installations. The binding allows openHAB to communicate with the MAX! devices through the MAX!Cube Lan Gateway.")]),a("p",[t._v("There is also a binding specifically for openHAB 2 "),a("router-link",{attrs:{to:"/addons/bindings/max/"}},[t._v("here")]),t._v(".")],1),t._m(1),a("p",[t._v("To communicate with MAX! devices, an already setup MAX! environment including a MAX!Cube Lan Gateway is required. In addition, the binding expects an already set up MAX environment.")]),t._m(2),t._m(3),t._m(4),t._m(5),a("p",[t._v("Items bound to MAX!Cube must at lease contain the serial number of the device you wish to control (not the serial of the cube).")]),t._m(6),a("p",[t._v("The syntax of the binding configuration strings accepted is the following:")]),t._m(7),t._m(8),a("p",[t._v("The state of a shutter contact can be retrieved via the generic item binding. To display the shutter state, you need to use a Contact item.")]),t._m(9),t._m(10),t._m(11),a("p",[t._v("For a heating thermostat, an identical configuration will provide the setpoint temperature of the heating thermostat (4.5° corresponds to OFF shown on the thermostat display). To show the temperature setpoint you need to use a number item.")]),t._m(12),a("p",[t._v("The above examples would be shown as")]),t._m(13),a("p",[t._v("MAX heating thermostat devices show OFF when turned to the minimum or On when turned to the maximum. The openHAB MAX!Cube binding would show the values 4.5 for OFF and 30.5 for On instead.")]),a("p",[t._v("If you would like to display OFF and on instead, you can apply a mapping and change the binding using this mapping to")]),t._m(14),a("p",[t._v("Instead of values 4.5 and 30.5 the results would look like")]),t._m(15),a("p",[t._v("To apply this mapping you need to copy the "),a("a",{attrs:{href:"https://dl.dropboxusercontent.com/u/7347332/web/maxcube.map",target:"_blank",rel:"noopener noreferrer"}},[t._v("maxcube.map"),a("OutboundLink")],1),t._v(" mapping file into the configuration/transformation folder within the openHAB directory. (Alternatively you can use this "),a("a",{attrs:{href:"https://gist.githubusercontent.com/joek/0df1727580df7f98f1a4/raw/a3c7b1d629bbc29fa87ef5ca5808f4fa1a34a3bc/maxcube.map",target:"_blank",rel:"noopener noreferrer"}},[t._v("maxcube.map"),a("OutboundLink")],1),t._v(" file when the mappings of round temperature settings don't show.)")]),a("p",[t._v("Depending on the correpsonding device the MAX!Cube binding can be used to provide specific information about a device instead of the default information.")]),t._m(16),a("p",[t._v("In order to be able to set a thermostat (and thus sending a temperature setting to an individual thermostat) use the Setpoint item in your sitemap configuration:")]),t._m(17),a("p",[t._v("This SetPoint item will allow a user to set the thermostat with 0.5 degrees intervals. If you would like to set the thermostat yourself, for instance in a rule, use the sendCommand option in your rules file, like in the following example:")]),t._m(18),a("p",[t._v("To receive the valve position of a heating thermostat, the type for the desired information needs to be specified in the bonding configuration.")]),t._m(19),a("p",[t._v("Per release 1.6 you can request the actual temperature for the WallThermostat. The actual temperature can also be requested from the heating Thermostats, however is usually outdated for the radiator thermostats, since they only send it over when their valve position changes. For the Wall thermostats, the value is accurate, since those send updates every couple of minutes.")]),t._m(20),t._m(21),a("p",[t._v("To receive the valve position of a heating thermostat, the type for the desired information needs to be specified in the bonding configuration")]),t._m(22),t._m(23),a("p",[t._v("The value position is transmitted as rarely as the actual temperature. You may have to wait very long until something is displayed.")]),t._m(24),t._m(25),t._m(26),a("p",[t._v('The mode is displayed as "AUTOMATIC" for example.')]),t._m(27),a("p",[t._v("The following configuration is available for all MAX! devices.")]),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),a("p",[t._v("The switch will change to ON if the MAX!Cube reports that it cannot connect (anymore) to the configured device.")]),t._m(36),a("p",[t._v("If you want to have some insights into what actually happens it may be useful to print some log messages.")]),t._m(37),a("p",[t._v("If you have a lot of devices the log is an alternative way to get the serial numbers of the devices. They are logged when the binding is started.")]),t._m(38),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"max-cube-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#max-cube-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" MAX!Cube Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The MAX!Cube is automatically discovered from the network, so no configuration is required in basic setting. Otherwise, the binding can be configured in the file "),e("code",[this._v("services/maxcube.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),a("th",[t._v("Default")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("ip")]),a("td",[t._v("auto-discovered via DHCP, or 192.168.0.222")]),a("td",{staticStyle:{"text-align":"center"}}),a("td",[t._v("MAX!Cube LAN gateway IP address")])]),a("tr",[a("td",[t._v("port")]),a("td",[t._v("62910")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("MAX!Cube port"),a("br"),t._v("should not need to be changed")])]),a("tr",[a("td",[t._v("refreshInterval")]),a("td",[t._v("10000")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("MAX!Cube refresh interval in milliseconds 10000 = 10 seconds")])]),a("tr",[a("td",[t._v("exclusive")]),a("td",[t._v("false")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("Max!Cube exclusive mode."),a("br"),t._v("When "),a("code",[t._v("true")]),t._v(", the binding keeps the connection to the Cube open and polls more efficiently. No other application can use the Cube while the binding is running in exclusive mode, including Android and Desktop Max! Software. With this mode, the refreshInterval can easily set to 500 or 1000ms if you want the window contacts or eco button to be more responsive. If you are not using MAX! smartphone or desktop software, this is recommended. Please note that the MAX!Cube desktop software also keeps the connection open and openhab will not be able to connect if the MAX!Cube software is running. Close if from the windows taskbar.")])]),a("tr",[a("td",[t._v("maxRequestsPerConnection")]),a("td",[t._v("1000")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("Max!Cube maximum requests per connection."),a("br"),t._v("In exclusive mode, the binding will open the connection to the Cube and polls with "),a("code",[t._v("refreshInterval")]),a("code",[t._v("maxRequestsPerConnection")]),t._v(" times. When "),a("code",[t._v("maxRequestsPerConnection")]),t._v(" is reached, it will disconnect and reconnect. This may work around issues with long going connections like slow reaction on events.  When set to 0, the binding will keep the connection open as long as possible.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("strong",[this._v("How to get the serial number of a device")]),this._v(": you can use the original MAX! software: edit the room, click on structure,  rename devices.  There you'll see the names and serials.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('maxcube="<serialNumber>"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"shutter-contact"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shutter-contact","aria-hidden":"true"}},[this._v("#")]),this._v(" Shutter Contact")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Office_Window")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Office Window [MAP(en.map):%s]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (MyGroup)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcube"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"JEQ0650337"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"heating-thermostat-or-wallmounted-thermostat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#heating-thermostat-or-wallmounted-thermostat","aria-hidden":"true"}},[this._v("#")]),this._v(" Heating Thermostat or Wallmounted Thermostat")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"display-the-target-temperature"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-the-target-temperature","aria-hidden":"true"}},[this._v("#")]),this._v(" Display the Target Temperature")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Heating_Max")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Heating Thermostat [%.1f °C]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (MyGroup)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcube"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"JEQ0336148"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://dl.dropboxusercontent.com/u/7347332/web/maxcube.png",alt:"MAX! Binding"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Heating_Max")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Heating Thermostat [MAP(maxcube.map):%s]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (MyGroup)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcube"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"JEQ0336148"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://dl.dropboxusercontent.com/u/7347332/web/max_on_off_small.png",alt:"MAX! Binding"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"setting-the-target-temperature"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-target-temperature","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting the Target Temperature")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Setpoint")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Heating_Max_Valve "),a("span",{attrs:{class:"token constant"}},[t._v("step")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("0.5")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("minValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("18")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("maxValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("30")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Bedtime"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("Time cron")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0 0 23 * * ?"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n   sendCommand "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Heating_Max_Valve"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("15")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"actual-temperature"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actual-temperature","aria-hidden":"true"}},[this._v("#")]),this._v(" Actual Temperature")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Heating_Max_Temp")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Thermostat Temperature  [%.1f °C]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (MyGroup)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcube"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"JEQ0336148:type=actual"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"valve-position"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#valve-position","aria-hidden":"true"}},[this._v("#")]),this._v(" Valve Position")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Heating_Max_Valve")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Thermostat Valve Position [%.1f %%]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (MyGroup)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcube"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"JEQ0336148:type=valve"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://dl.dropboxusercontent.com/u/7347332/web/max_valve.png",alt:"MAX! Binding Valve Position"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Mode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The operating mode can be requested using the "),e("em",[this._v("mode")]),this._v(" type in the corresponding binding configuration.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Heating_Max_Valve_Mode")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Thermostat Mode [%s]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (MyGroup)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcube"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"JEQ0336148:type=mode"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"all-devices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all-devices","aria-hidden":"true"}},[this._v("#")]),this._v(" All devices")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"battery-state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#battery-state","aria-hidden":"true"}},[this._v("#")]),this._v(" Battery State")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The battery state of a device can be requested using the "),e("em",[this._v("battery")]),this._v(" type in the corresponding binding configuration.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Heating_Max_Valve")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Thermostat Battery [%s]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (MyGroup)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcube"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"JEQ0336148:type=battery"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://dl.dropboxusercontent.com/u/7347332/web/max_battery.png",alt:"MAX! Binding Battery State"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("String values returned by the binding are either "),e("em",[this._v("ok")]),this._v(" or "),e("em",[this._v("low")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"connection-error-since-1-8-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-error-since-1-8-0","aria-hidden":"true"}},[this._v("#")]),this._v(" Connection Error (Since 1.8.0")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The connection state between a device and the MAX!Cube can be requested using the "),e("em",[this._v("connectionError")]),this._v(" type in the corresponding binding configuration.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Heating_Connection_Error")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Thermostat Conn. Error"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (MyGroup)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" maxcube"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"JEQ0336148:type=connectionError"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"logging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logging","aria-hidden":"true"}},[this._v("#")]),this._v(" Logging")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The logger instance you would want to set to DEBUG or TRACE is "),e("code",[this._v("org.openhab.binding.maxcube")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To log even more information, set the level of "),e("code",[this._v("org.openhab.binding.maxcube")]),this._v(" from DEBUG to TRACE.")])}],!1,null,null,null);e.default=n.exports}}]);