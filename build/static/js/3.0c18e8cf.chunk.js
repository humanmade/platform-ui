hmPlatformUIJSONP([3],{122:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},125:function(e,t,n){"use strict";function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}n.d(t,"a",function(){return a});var r=n(0),o=(n.n(r),n(33)),l=(n.n(o),n(145)),i=(n.n(l),n(146)),c=(n.n(i),n(147)),s=n.n(c),u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},f=(Object.assign,function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}),p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},m=(Object.keys,function(e){function t(){return u(this,t),p(this,e.apply(this,arguments))}f(t,e),t.prototype.render=function(){return null}}(r.Component),{fromESObservable:null,toESObservable:null}),d={fromESObservable:function(e){return"function"===typeof m.fromESObservable?m.fromESObservable(e):e},toESObservable:function(e){return"function"===typeof m.toESObservable?m.toESObservable(e):e}}},143:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),i=n.n(l),c=n(144),s=n.n(c),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"hm-platform-ui__Header"},i.a.createElement("h1",null,i.a.createElement(s.a,{className:"hm-platform-ui__Header__Logo",title:"Human Made"})," ",i.a.createElement("span",{className:"hm-platform-ui__Header__Title"},this.props.title||"Platform")," ",i.a.createElement("small",{className:"hm-platform-ui__Header__Version"},"v",HM.UI.EnterpriseKit.Version)),this.props.children)}}]),t}(l.Component);t.a=f},144:function(e,t,n){function a(e){return r.createElement("svg",e,r.createElement("g",{fill:"#d94e3a",transform:"matrix(.13333 0 0 -.13333 0 168.893)"},[r.createElement("path",{d:"M4872.32 247.621c-34.51-15.07-49.94-21.23-95.8-21.543-77.85-.547-123.86 63.891-138.9 112.328-33.69 108.594-6.72 295.938 4.06 422.43 13.93 163.273 20.57 227.363 23.22 261.514 6.21 79.7-23.63 162-114.29 161.38-84.26-.59-194.16-95.22-242.72-196.902 11.84 130.232-24.43 234.232-123.63 233.542-99.2-.67-200.8-141.66-231.8-205.08 6.27 59.25 9.71 84.1 12.4 116.11 2.7 32.03 1.62 55.18-31.83 58.46-20.32 1.99-58.64-5.01-81.51-8.9-29.31-4.99-38.82-25.9-44.22-71.24-5.66-47.52-24.66-299.4-37.32-444.568-12.68-145.164-29.41-366.531-28.71-411.324.53-34.137 17.81-47.887 43.42-47.707 25.58.18 70.04 9.059 85.95 14.508 13.05 4.473 23.48 10.43 30.59 21.543 6.43 10.058 9.82 25.121 11.04 44.887 3.26 53.379 12.05 180.8 20.35 264.043 8.3 83.261 16.54 155.761 31.54 219.988 30.25 129.328 92.34 269.45 148.87 269.84 36.27.25 37.44-68.043 27.18-161.989-10.27-93.945-37.96-437.644-37.32-479.246.57-36.269 11.27-55.39 42.46-55.175 25.59.175 72.68 3.808 91.76 11.425 12.01 4.785 20.92 9.219 27.07 19.961 5.41 9.453 8.67 23.77 10 47.5 3.07 54.532 22.89 274.715 40.21 344.297 33.09 132.715 102.27 221.469 140.67 221.727 38.4.265 26.44-94.227 16.39-202.059-19.95-214.004-43.62-405.371 17.67-542.949C4535.57 140.18 4633.13 95.57 4733.13 95.57c77.87 0 128.8 22.442 160 49.629 14.19 12.379 19.98 30.86 19.41 42.852-1.15 24.789-19.3 45.918-40.22 59.57M2782.04 617.098c-12.8-62.93-30.18-120.528-71.25-120.528-39.47 0-58.02 39.473-58.02 119.473 0 103.465 38.61 225.859 106.98 225.859 22.13 0 33.91-9.601 49.81-24.269-3.73-55.731-14.72-137.598-27.52-200.535zM226.098 148.41c-41.602 0-76.801 43.199-76.801 118.414 0 137.129 108.707 236.602 224.047 293.535-7.266-80.429-18.496-158.183-26.387-211.25-14.324-96.269-52.062-200.699-120.859-200.699zM3596.82 498.484c-13.34-6.933-30.41-12.812-44.81-12.812-23.36 0-32.01 21.074-32.01 48.808 0 30.879 5.14 74.883 11.52 128.485 7.17 67.746 14.67 139.015 14.67 183.469 0 67.195-44.43 121.593-109.22 121.593-64 0-137.28-47.453-190.08-113.058 2.13 19.199 3.19 35.203 4.26 50.136 1.39 19.297-7.48 35.196-26.67 35.196-19.2 0-57.79-1.61-86.93-7.731-20.27-4.261-35.2-16.011-38.4-44.8-9.2-82.793-26.62-255.125-34.82-345.653-23.7-23.027-52.34-45.547-75.35-45.547-24.53 0-39.2 17.598-39.2 51.192 0 58.672 30.24 282.148 33.44 331.746 1.29 19.953-9.6 40-33.6 40-20.81 0-47.26-10.145-80.33-19.746-29.87 25.605-71.04 58.672-135.04 58.672-157.6 0-251.94-158.934-251.94-348.797 0-37.93 3.69-72.129 10.63-102.403-25.47-19.316-49.67-32.734-66.52-32.734-24 0-41.6 18.672-41.6 51.719 0 27.363 9.07 96.406 14.4 143.476 6.4 56.532 15.46 113.575 15.46 143.457 0 64.004-41.17 110.078-98.14 110.078-70.93 0-138.86-49.796-189.96-101.535-11.73 57.598-45.33 94.934-96.54 94.934-64 0-138.65-52.266-185.59-115.207 2.14 19.199 3.3 35.734 4.9 58.664 1.34 19.305-7.47 35.203-26.67 35.203-19.2 0-63.88-8.809-93.01-14.93-20.27-4.269-35.2-16.007-38.4-44.804-8.5-76.563-27.04-237.168-37.22-334.903-29.46-41.699-55.28-69.043-79.8-69.043-27.19 0-33.6 28.282-33.6 69.864 0 41.601 30.94 286.953 34.14 320.007 3.7 38.223-14.41 47.774-36.8 46.934-28.27-1.062-78.94-8.535-106.67-13.867-26.33-5.059-28.44-35.301-30.93-63.992-3.2-36.809-17.7-183.75-26.14-237.871-12.79-82.129-50.13-130.664-88-130.664-37.86 0-42.24 44.804-42.24 86.386 0 41.602 25.28 238.418 25.28 275.215 0 36.797-5.07 61.836-48 66.668-43.63 4.914-147.01 3.977-266.31-8.711 13.149 131.766 37.317 306.592 44.434 364.182 4.286 34.6.966 56.32-34.879 60.57-20.375 2.42-83.344-6.43-102.539-9.58-31.582-5.18-43.598-32.09-47.598-53.06-16.464-86.32-32.117-234.299-42.464-389.866-70.211-13.66-142.508-30.652-206.461-47.781 6.882 122.656 11.531 261.717 7.293 329.567-5.989 95.81-60.801 158.72-145.071 158.72-89.769 0-193.386-48.26-258.398-103.2-42.512-35.91-66.422-77.5-66.422-110.4 0-33.6 16.816-64.015 61.258-64.015 34.387 47.005 124.363 129.475 174.613 129.475 45.215 0 56.75-39.24 56.75-79.24 0-32.696-6.555-191.786-12.945-319.794C206.926 636.258 0 501.648 0 259.809 0 111.02 102.363 6.961 232.539 6.961c170.297 0 263.422 160.66 291.305 329.277 14.031 84.903 24.863 194.571 32.332 290.391 65.726 20.059 140.129 40.527 208.199 55.73-10.133-194.011-15.172-369.754 36.832-497.308C845.297 76.898 938.832-1.089 1085.43.011c100.8.759 194.75 41.227 236.82 79.329 14.02 12.7 19.83 30.262 19.38 42.25-.96 24.781-16.68 44.98-37.48 58.609-41.68-23.711-87.86-43.668-153.4-46.187C1085.2 131.488 996.145 167.25 959.551 287c-30.363 99.316-22.262 293.594-14.5 424.668 62.939 6.738 107.029 7.625 149.309 7.617-12.79-132.793-19.7-269.199-10.88-336.426 8.54-65.058 43.74-127.25 128.54-127.25 78.4 0 143.57 65.61 183.03 120.004 22.41-50.136 52.81-83.203 108.28-83.203 46.32 0 99.96 31.817 139.64 75.195-1.05-19.804-.94-33.242 1.37-41.914 4.4-16.484 16-22.402 35.2-22.402 18.4 0 76 10.41 105.6 19.199 20.7 6.153 22.39 21.504 24.8 56.797 2.4 35.215 11.05 161.875 21.71 233.34 10.04 67.293 66.29 139.727 99.46 139.727 17.44 0 28.11-16.797 28.11-38.411 0-27.722-31.2-296.238-31.2-341.043 0-32.011 11.89-40 35.36-40s69.6 3.184 101.6 9.59c10.24 2.051 17.58 6.817 21.6 15.469 5.2 11.191 5.63 28.105 7.73 45.859 4.39 37.071 15.04 195.235 24.27 240.274 13.23 64.551 62.78 115.457 92.38 115.457 19.72 0 30.2-24.902 27.83-51.199-2.66-29.602-22.51-193.321-22.51-249.317 0-77.343 45.88-123.75 121.34-123.75 75.78 0 142.89 47.735 188.3 89.063 31.24-49.453 77.91-76.035 135.59-76.035 67.2 0 115.95 49.062 153.16 120.527 9.61-55.469 50.78-105.606 113.72-105.606 45.05 0 92.57 29.571 127.7 60.684-.41-14.551-.07-25.156 1.26-33.203 2.76-16.836 16-22.422 35.2-22.422 19.2 0 77.38.273 104.96 9.609 20.45 6.934 22.38 21.504 24.8 56.797 2.39 35.196 12.43 172.813 23.08 244.278 10.06 67.293 62.52 129.062 100.92 129.062 21.66 0 31.03-20.273 31.03-41.875 0-13.574-6.07-63.722-11.83-121.465-5.74-57.754-11.27-113.73-11.27-141.406 0-89.609 36.6-146.68 128.59-146.68 57.35 0 111.72 32.657 129.03 55.157 8 10.39 11.99 20.8 11.99 32.812 0 24.785-10.39 40.781-27.03 53.906",key:0}),r.createElement("path",{d:"M6134.08 724.254c27.21 0 43.58-21.602 43.58-45.594 0-65.449-43.73-119.609-125.77-119.609-12.65 0-23.84.957-34.1 2.812 12.54 83.887 57.09 162.391 116.29 162.391zm-543.34-179.988c-11.35-58.36-36.17-96.719-74.8-96.719-45.88 0-61.31 39.609-60.47 110.801 1.25 106.386 42.77 230.781 120.37 230.781 19.22 0 36.02-10.469 49.22-25.938-8.32-74.433-22.97-160.586-34.32-218.925zm-564.37 32.949c-10.26-58.672-40.88-98.145-77.41-98.145-45.85 0-62.16 42.95-62.65 114.141-.74 106.406 43.03 241.074 123.03 241.074 22.4 0 37.65-11.738 49.27-24.531-6.93-74.668-21.99-173.867-32.24-232.539zm1416.89-158.301c-87.48 0-223.36-69.746-326.83-69.746-70 0-104.61 62.129-104.11 123.535 26.02-4.961 54.3-7.265 85.34-7.265 110.93 0 225.05 71.874 225.05 199.89 0 88.527-66.13 174.934-191.99 174.934-185.6 0-291.4-186.672-291.4-361.621 0-15.059.74-29.61 2.2-43.672-16.38-10.352-34.92-18.731-48.96-18.321-30.39.899-38.95 21.954-38.56 53.946.38 31.992 32.31 233.672 43.21 306.726 12.11 81.067 48.88 295.21 48.88 326.13 0 17.6-8.32 27.74-29.68 32-21.39 4.26-73.79 8-88.71 8-23.48 0-38.46-9.96-44.67-43.47-6.14-32.92-20.78-139.992-35.98-231.722-26.41 23.195-60 43.996-107.21 43.996-155.99 0-256.3-162.395-256.3-369.141 0-19.57 1.19-38.222 3.45-55.937-18.69-13.672-41.19-26.758-55.92-26.758-30.41 0-39.35 20.801-39.57 52.793-.23 31.992 33.13 254.512 41.51 328.008 2.15 18.816 3.08 32.343-.82 41.074-6.15 13.789-21.12 16.387-37.44 14.922-17.54-1.582-36.21-5.324-63.91-11.731-31.99 35.735-74.65 70.938-138.63 70.938-171.21 0-279.01-167.207-277.5-383.484.99-142.93 62.48-240 168.08-240 82.13 0 112.7 43.476 156.29 101.874 9.3-70.39 57.7-105.605 112.11-105.605 47.7 0 105.47 29.531 159.49 70.762 27.72-60.508 75.77-96.563 140.2-96.563 72.5 0 111.37 43.203 157.83 98.672 16.6-70.41 47.36-114.238 116.43-114.238 53.16 0 92.81 22.715 139.18 57.09 34.12-77.5 103.43-124.418 209.45-124.418 119.47 0 243.63 37.347 302.28 37.347 66.14 0 113.07-13.871 163.21-36.269 15.99 12.789 33.06 45.879 33.06 87.461 0 55.469-41.6 109.863-129.06 109.863",key:1})]))}var r=n(0);a.displayName="LogoRed",a.defaultProps={viewBox:"0 0 876.30664 168.89333",height:"168.893",width:"876.307"},e.exports=a,a.default=a},145:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,l=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,u=s&&s(Object);e.exports=function e(t,n,f){if("string"!==typeof n){if(u){var p=s(n);p&&p!==u&&e(t,p,f)}var m=l(n);i&&(m=m.concat(i(n)));for(var d=0;d<m.length;++d){var b=m[d];if(!a[b]&&!r[b]&&(!f||!f[b])){var h=c(n,b);try{o(t,b,h)}catch(e){}}}return t}return t}},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.createChangeEmitter=function(){function e(){r===a&&(r=a.slice())}function t(t){if("function"!==typeof t)throw new Error("Expected listener to be a function.");var n=!0;return e(),r.push(t),function(){if(n){n=!1,e();var a=r.indexOf(t);r.splice(a,1)}}}function n(){a=r;for(var e=a,t=0;t<e.length;t++)e[t].apply(e,arguments)}var a=[],r=a;return{listen:t,emit:n}}},147:function(e,t,n){e.exports=n(148)},148:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(149),l=function(e){return e&&e.__esModule?e:{default:e}}(o);r="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:a;var i=(0,l.default)(r);t.default=i}).call(t,n(31),n(122)(e))},149:function(e,t,n){"use strict";function a(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},181:function(e,t,n){"use strict";var a=n(17),r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=""+HM.UI.REST.URL+e;return t.credentials="include",t.headers={"X-WP-Nonce":HM.UI.REST.Nonce,"content-type":"application/json"},Object(a.a)(r,t,n)};t.a=r},300:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),i=n.n(l),c=n(2),s=n.n(c),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isExpanded:!0},n}return o(t,e),u(t,[{key:"onToggleExpanded",value:function(){this.setState({isExpanded:!this.state.isExpanded})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.children,r=t.id,o=this.state.isExpanded;return i.a.createElement("div",{className:"postbox "+(o?"expanded":"closed"),id:r},i.a.createElement("button",{type:"button",className:"handlediv","aria-expanded":"true",onClick:function(){return e.setState({isExpanded:!o})}},i.a.createElement("span",{className:"screen-reader-text"},"Toggle panel: ",n),i.a.createElement("span",{className:"toggle-indicator","aria-hidden":"true"})),i.a.createElement("h2",{className:"hndle"},i.a.createElement("span",null,n)),o&&i.a.createElement("div",{className:"inside"},a))}}]),t}(l.Component);f.propTypes={id:s.a.string,title:s.a.string},t.a=f},502:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),i=n.n(l),c=n(143),s=n(503),u=n(504),f=n(506),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"render",value:function(){return i.a.createElement(l.Fragment,null,i.a.createElement(c.a,{key:"header",title:"Cloud"}),i.a.createElement(s.a,null,i.a.createElement(f.a,null),i.a.createElement(u.a,null)))}}]),t}(i.a.Component);t.default=m},503:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=function(e){var t=e.children,n=Math.ceil(t.length/2);return r.a.createElement("div",{id:"dashboard-widgets-wrap"},r.a.createElement("div",{id:"dashboard-widgets",className:"cloud metabox-holder"},r.a.createElement("div",{className:"postbox-container"},r.a.createElement("div",{className:"meta-box-sortables"},t.slice(0,n))),r.a.createElement("div",{className:"postbox-container"},r.a.createElement("div",{className:"meta-box-sortables"},t.slice(n)))))};t.a=o},504:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(0),l=n.n(o),i=n(181),c=n(125),s=n(300),u=n(505),f=function(e){var t=e.data;return l.a.createElement(s.a,{title:"Pull Requests"},t&&t.length>0?l.a.createElement("ul",null,t.map(function(e){return l.a.createElement(u.a,e)})):l.a.createElement("p",null,"No Open Pull Requests"))};f.defaultProps={data:[]},f.propTypes={data:r.a.arrayOf(r.a.shape({date:r.a.string,id:r.a.number,link:r.a.string,status:r.a.string,statusText:r.a.string,title:r.a.string})),loading:r.a.bool};var p=Object(c.a)(Object(i.a)("hm-stack/v1/pull-requests/"))(f);t.a=p},505:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(2),l=n.n(o),i=function(e){var t=e.date,n=e.id,a=e.link,o=e.status,l=e.statusText,i=e.title,c=new Date(t);return r.a.createElement("li",{className:"pull-request-item"},r.a.createElement("div",{className:"pull-request-item__info"},r.a.createElement("h3",{className:"pull-request-item__title"},r.a.createElement("a",{href:a},"#",n)," ",r.a.createElement("strong",null,i)),r.a.createElement("time",{datetime:c.toISOString(),className:"pull-request-item__date"},c.toLocaleDateString())),r.a.createElement("div",{className:"pull-request-item__status"},r.a.createElement("div",{className:"pull-request-item__status-indicator pr-status--"+o}),l))};i.defaultProps={},i.propTypes={date:l.a.string,id:l.a.number,link:l.a.string,status:l.a.string,statusText:l.a.string,title:l.a.string},t.a=i},506:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(2),l=n.n(o),i=n(181),c=n(125),s=n(300),u=function(e){var t=e.data,n=t.git_data,o=t.environment_data;return n?r.a.createElement(s.a,{title:"Application Data",id:"environment-data"},r.a.createElement("div",{className:"environment-data"},r.a.createElement("div",{className:"environment-data-block"},r.a.createElement("h3",{className:"environment-data-block__title"},"Application Version"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Git Branch:"),r.a.createElement("dd",null,n.branch),r.a.createElement("dt",null,"Commit:"),n.commit&&r.a.createElement("dd",null,r.a.createElement("code",{className:"commit-hash"},n.commit.rev.substring(0,7)),r.a.createElement("img",{className:"commit-avatar",src:n.commit.user.avatar_urls[96],alt:n.commit.user.name}),r.a.createElement("span",{className:"commit-user"},n.commit.user.name))),n.commit&&r.a.createElement("p",{className:"commit-message"},n.commit.description)),r.a.createElement("div",{className:"environment-data-block"},r.a.createElement("h3",{className:"environment-data-block__title"},"HM Cloud Software"),r.a.createElement("dl",null,r.a.createElement("dt",null,"HM Platform:"),r.a.createElement("dd",null,o.hmplatform),r.a.createElement("dt",null,o.architecture,":"),r.a.createElement("dd",null,o.version),r.a.createElement("dt",null,"PHP:"),r.a.createElement("dd",null,"v",o.php),r.a.createElement("dt",null,"MySQL:"),r.a.createElement("dd",null,"v",o.mysql),o.elasticsearch&&r.a.createElement(a.Fragment,null,r.a.createElement("dt",null,"Elasticsearch:"),r.a.createElement("dd",null,"v",o.elasticsearch)))))):""};u.propTypes={data:l.a.shape({git_data:l.a.shape({branch:l.a.string,commit:l.a.shape({date:l.a.string,description:l.a.string,rev:l.a.string,status:l.a.string})}),environment_data:l.a.shape({php:l.a.string,mysql:l.a.string,elasticsearch:l.a.string})}),loading:l.a.bool};var f=Object(c.a)(Object(i.a)("hm-stack/v1/environment-data/"))(u);t.a=f}});
//# sourceMappingURL=3.0c18e8cf.chunk.js.map