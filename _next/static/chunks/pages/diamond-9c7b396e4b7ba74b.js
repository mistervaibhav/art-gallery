(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[880],{8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=o},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,o=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==o&&o}},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var o=n(6495).Z,r=n(2648).Z,d=(0,n(1598).Z)(n(7294)),i=r(n(1585)),a=n(8e3),s=n(5850),u=n(9470);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[d.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(d.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===d.default.Fragment?e.concat(d.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(9475);var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n,r,i,a,s=t.inAmpMode;return e.reduce(c,[]).reverse().concat(l(s).reverse()).filter((n=new Set,r=new Set,i=new Set,a={},function(e){var t=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;var d=e.key.slice(e.key.indexOf("$")+1);n.has(d)?t=!1:n.add(d)}switch(e.type){case"title":case"base":r.has(e.type)?t=!1:r.add(e.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var l=f[s];if(e.props.hasOwnProperty(l)){if("charSet"===l)i.has(l)?t=!1:i.add(l);else{var c=e.props[l],p=a[l]||new Set;("name"!==l||!o)&&p.has(c)?t=!1:(p.add(c),a[l]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!s&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var r=o({},e.props||{});return r["data-href"]=r.href,r.href=void 0,r["data-optimized-fonts"]=!0,d.default.cloneElement(e,r)}return d.default.cloneElement(e,{key:n})})}var h=function(e){var t=e.children,n=d.useContext(a.AmpStateContext),o=d.useContext(s.HeadManagerContext);return d.default.createElement(i.default,{reduceComponentsToState:p,headManager:o,inAmpMode:u.isInAmpMode(n)},t)};t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,a=e.reduceComponentsToState;function s(){if(n&&n.mountedInstances){var t=o.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(a(t,e))}}return r&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),s()),d(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),d(function(){return n&&(n._pendingUpdate=s),function(){n&&(n._pendingUpdate=s)}}),i(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var o=(0,n(1598).Z)(n(7294)),r=!1,d=r?function(){}:o.useLayoutEffect,i=r?function(){}:o.useEffect},4443:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var o=n(9008),r=n.n(o);n(7294);var d=n(9521),i=d.ZP.div.withConfig({displayName:"styles__Container",componentId:"sc-197q0k0-0"})(["height:100vh;width:100vw;display:flex;align-items:center;justify-content:center;background:#233637;"]),a=d.ZP.div.withConfig({displayName:"styles__Diamond",componentId:"sc-197q0k0-1"})(["position:relative;height:","vh;width:","vh;transform:rotate(45deg);"],30,30),s=d.ZP.span.withConfig({displayName:"styles__FirstSpan",componentId:"sc-197q0k0-2"})(["top:0;left:0;position:absolute;border-top:","vh solid transparent;border-left:","vh solid transparent;border-right:","vh solid #20bc7d;border-bottom:","vh solid #26c893;"],7.5,7.5,7.5,7.5),u=d.ZP.span.withConfig({displayName:"styles__SecondSpan",componentId:"sc-197q0k0-3"})(["top:0;right:0;position:absolute;border-top:","vh solid #1fb67c;border-right:","vh solid #20bc7d;border-bottom:","vh solid #26c893;border-left:","vh solid #55ddb9;"],7.5,7.5,7.5,7.5),l=d.ZP.span.withConfig({displayName:"styles__ThirdSPan",componentId:"sc-197q0k0-4"})(["bottom:0;left:0;position:absolute;border-top:","vh solid #1fb67c;border-right:","vh solid #20bc7d;border-bottom:","vh solid #26c893;border-left:","vh solid #55ddb9;"],7.5,7.5,7.5,7.5),c=d.ZP.span.withConfig({displayName:"styles__ForthSpan",componentId:"sc-197q0k0-5"})(["bottom:0;right:0;position:absolute;border-top:","vh solid #1fb67c;border-right:","vh solid #20bc7d;border-bottom:","vh solid #26c893;border-left:","vh solid #55ddb9;"],7.5,7.5,7.5,7.5),f=n(5893),p=function(){return(0,f.jsxs)(a,{children:[(0,f.jsx)(s,{}),(0,f.jsx)(u,{}),(0,f.jsx)(l,{}),(0,f.jsx)(c,{})]})},h=function(){return(0,f.jsxs)(i,{children:[(0,f.jsx)(r(),{children:(0,f.jsx)("title",{children:"\uD83D\uDC8E Diamond"})}),(0,f.jsx)(p,{})]})}},3870:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/diamond",function(){return n(4443)}])},9008:function(e,t,n){e.exports=n(2717)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3870)}),_N_E=e.O()}]);