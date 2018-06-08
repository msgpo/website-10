(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{764:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._m(1),s("p",[t._v("In the previous article about "),s("router-link",{attrs:{to:"osgids.html"}},[t._v("OSGi Declarative Services")]),t._v(" we have learned how to register and track services. Here we will configure them in runtime.")],1),t._m(2),s("p",[t._v("As defined in the "),s("a",{attrs:{href:"https://osgi.org/download/r4v42/r4.cmpn.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("OSGi Compendium specification"),s("OutboundLink")],1),s("em",[t._v("configuration is the process of defining the configuration data of bundles and assuring that those bundles receive that data when they are active in the OSGi Service Platform.")])]),t._m(3),t._m(4),t._m(5),s("p",[t._v("Each configuration is uniquely identified by a PID (Persistent IDentifier) and stores properties. The properties can be edited, or new properties could be added during runtime by other bundle that uses the Configuration Admin service.")]),t._m(6),t._m(7),t._m(8),t._m(9),s("p",[s("router-link",{attrs:{to:"osgids.html"}},[t._v("Declarative Services")]),t._v(" (DS) is highly integrated with the Configuration Admin service. Each DS component has a configuration object that is related with it, when the "),s("em",[t._v("service.pid")]),t._v(" property is missing, the name of the component is used as a PID. The configuration is injected in the bundle "),s("code",[t._v("activate")]),t._v(", "),s("code",[t._v("deactivate")]),t._v(" and "),s("code",[t._v("modified")]),t._v(" methods. The code below is an example, how to register a service with a "),s("em",[t._v("service.pid")]),t._v(" property and how to use the injected configuration.")],1),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),s("p",[t._v("As we have seen in the previous examples Configuration Admin service tracks the Service Registry and the internal configuration database for changes. It can be used to update the configuration(or create if it is missing) as well. The flow is the following:")]),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),s("ul",[s("li",[s("a",{attrs:{href:"http://enroute.osgi.org/services/org.osgi.service.cm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://enroute.osgi.org/services/org.osgi.service.cm.html"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"http://blog.vogella.com/2016/09/26/configuring-osgi-declarative-services/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://blog.vogella.com/2016/09/26/configuring-osgi-declarative-services/"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://osgilook.wordpress.com/2009/03/22/configuration-admin-service-explained-the-managedservice-interface/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://osgilook.wordpress.com/2009/03/22/configuration-admin-service-explained-the-managedservice-interface/"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://osgi.org/download/r4v42/r4.cmpn.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("OSGi Service Platform Service Compendium, Release 4, Version 4.2,August 2009"),s("OutboundLink")],1)])]),s("DocPreviousVersions"),s("EditPageLink")],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"configuration-admin-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-admin-service","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Admin Service")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basics","aria-hidden":"true"}},[this._v("#")]),this._v(" Basics")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"configuration-admin-service-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-admin-service-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Admin Service")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("In OSGi, configurations are stored in a central database that is being managed by a special service - the "),s("em",[t._v("Configuration Admin Service")]),t._v("("),s("code",[t._v("org.osgi.service.cm.ConfigurationAdmin")]),t._v("). This service monitors the service registry and "),s("strong",[t._v("provides a configuration to the services")]),t._v(" that are registered with a "),s("em",[t._v("service.pid")]),t._v(" property. Configuration changes are first made persistent, and then are passed to the target service. It is important to understand that "),s("strong",[t._v("the target bundle receives updates from the Configuration Admin service")]),t._v(". Implementations should be aware that the update reception could be delayed if the Configuration Admin service is missing.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"configuration-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration properties")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("In OSGi, configurations properties are key-value pairs that are accessible via "),a("code",[this._v("Map<String, Object>")]),this._v(". Please note that the following types of objects are supported:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("String;")]),s("li",[t._v("Boolean;")]),s("li",[t._v("Byte;")]),s("li",[t._v("Short;")]),s("li",[t._v("Integer;")]),s("li",[t._v("Long;")]),s("li",[t._v("Float;")]),s("li",[t._v("Double;")]),s("li",[t._v("Character.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If the Configuration Admin service detects an unsupported property type, it will throw "),a("code",[this._v("IllegalArgumentException")]),this._v(".")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"configuring-declarative-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-declarative-services","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring Declarative Services")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v('?xml version="1.0" encoding="UTF-8"?>\n'),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("scr:")]),t._v("component")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.example.handler"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("scr")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.osgi.org/xmlns/scr/v1.1.0"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("implementation")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.example.TimeEventHandler"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("event.topics"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("some/topic"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("service")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("provide")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("interface")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.osgi.service.event.EventHandler"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("service")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("service.pid"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.example.handler"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("scr:")]),t._v("component")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("package")]),t._v(" com"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SimpleDateFormat"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Date"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Map"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("osgi"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("component"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ComponentContext"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("osgi"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Event"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("osgi"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventHandler"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("TimeEventHandler")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("EventHandler")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Use the default formatter")]),t._v("\n    privateSimpleDateFormat dateFormatter "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("activate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ComponentContext context"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Map"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" properties"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("modified")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("properties"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n     * This method could be called by multiple threads\n     */")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("modified")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Map"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" properties"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// note, that Config Admin may send an empty configuration")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("properties "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            String pattern "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" properties"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"formatting"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            dateFormatter "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("deactivate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ComponentContext context"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Map"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" properties"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("modified")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("properties"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("handleEvent")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Event event"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Long timeInMillis "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Long"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getProperty")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"time"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Date date "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeInMillis"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        System"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("println")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"The current time is: "')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" dateFormatter"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("format")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"managed-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#managed-services","aria-hidden":"true"}},[this._v("#")]),this._v(" Managed Services")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("org.osgi.service.cm.ManagedService")]),this._v(" interface is another way to register a service that needs configuration. You have to register your service as a MangedService with a "),a("em",[this._v("service.pid")]),this._v(" property. Configuration Admin tracks the Service Registry and will update the MangedService, when the configuration is changed. The examples below illustrate how to register a service as ManagedService:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v('?xml version="1.0" encoding="UTF-8"?>\n'),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("scr:")]),t._v("component")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.example.handler"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("scr")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.osgi.org/xmlns/scr/v1.1.0"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("implementation")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.example.TimeEventHandler"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("event.topics"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("some/topic"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("service")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("provide")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("interface")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.osgi.service.cm.MangedService"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("provide")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("interface")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.osgi.service.event.EventHandler"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("service")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("service.pid"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.example.handler"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("scr:")]),t._v("component")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The MangedService interface contains a single method "),a("code",[this._v("updated()")]),this._v(" that will be called from the Configuration Admin service when the configuration is changed.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("package")]),t._v(" com"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provider"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("osgi"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Event"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("osgi"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventHandler"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("TimeEventHandler")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("EventHandler")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ManagedService "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("updated")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dictionary"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" properties"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// process configuration properties here")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("handleEvent")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Event event"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// handle the event")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"using-the-configuration-admin-to-update-the-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-configuration-admin-to-update-the-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Using the Configuration Admin to update the configuration")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// gets the configuration or creates new if it is missing")]),t._v("\nConfiguration config "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" configurationAdmin"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getConfiguration")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"com.example.handler"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDictionary"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" props "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getProperties")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// if null, the configuration is new")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    props "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Hashtable")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// set some properties")]),t._v("\nprops"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("put")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"formatting"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"EEE, d MMM yyyy HH:mm:ss Z"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// update the configuration, the target bundle will be notified for the change")]),t._v("\nconfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("update")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("pre",[a("code",[this._v("Hint! \nThe implementaiton of the Configuration Admin Service in Equinox is provided by the\n`org.eclipse.equinox.cm` bundle.\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("After the call to "),a("code",[this._v("update")]),this._v(" the Configuration Admin service persists the new configuration data and sends an update to the ManagedService registered with the service PID asynchronously.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("pre",[a("code",[this._v("Hint!\nConfiguration objects have a security feature called `Location` that prevents other\nbundles from modifying their configuration. In the example above we have created a\nconfiguration using the `Configuration config = configurationAdmin.getConfiguration\n(\"com.example.handler\", null);`. The second paramter ('null') guarantees that the\nlocation for the configuration will be set when the service with this PID is\nregistered for the first time. If the location is not set correctly the Config\nAdmin may not send the update to the bundle.\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" Further Reading")])}],!1,null,null,null);a.default=e.exports}}]);