hmPlatformUIJSONP([4],{783:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),s=n.n(a),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"componentDidMount",value:function(){window.addEventListener("message",this.handleFrameMessage)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.handleFrameMessage)}},{key:"onFrameLoad",value:function(){this.refs.iframe.contentWindow.postMessage({event:"docs-site-embed",origin:window.location.hostname,version:HM.UI.EnterpriseKit.DocsVersion,environment:HM.UI.Environment,user:HM.UI.User,config:HM.UI.Config,plugins:HM.UI.EnterpriseKit.Config},HM.UI.EnterpriseKit.DocsURL)}},{key:"handleFrameMessage",value:function(e){var t=e.data;e.origin.match(HM.UI.EnterpriseKit.DocsURL)&&t&&t.event&&t.event&&"location"===t.event&&window.history.replaceState({},document.title,window.location.href.replace(window.location.hash,"#/documentation"+t.location))}},{key:"render",value:function(){var e=this,t="",n=window.location.hash.match(/documentation\/[^\/]+(\/.+?)\/?$/);return n&&(t=n[1]),s.a.createElement("iframe",{title:"HM Platform Documentation",id:"hm-docs-site",ref:"iframe",className:"hm-platform-ui-full-embed",onLoad:function(){return e.onFrameLoad()},src:HM.UI.EnterpriseKit.DocsURL+"/"+HM.UI.EnterpriseKit.DocsVersion+t+"/?admin-request=full"})}}]),t}(s.a.Component);t.default=u}});
//# sourceMappingURL=4.31345c90.chunk.js.map