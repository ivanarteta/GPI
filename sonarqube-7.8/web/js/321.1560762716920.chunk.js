(window.webpackJsonp=window.webpackJsonp||[]).push([[321,329],{1003:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(693),o=n(698),a=n(701);function c(e){var t=e.className,n=e.fill,c=void 0===n?a.darkBlue:n,i=e.size;return r.createElement(o.a,{className:t,size:i||64,viewBox:"0 0 64 64"},r.createElement("g",{fill:"none",fillRule:"evenodd",stroke:c,strokeWidth:"2"},r.createElement("path",{d:"M2 59h60V13H2zm0-46h60V5H2zm3-4h2m2 0h2m2 0h2m2 0h42"}),r.createElement("path",{d:"M59 34h-6l-2-4h-6l-2 5h-6l-2 2h-6l-2-4h-6l-2 5h-6l-2 4H5m1 14v-9m4 9v-6m4 6V43m4 13V45m4 11V42m4 14V39m4 17V41m4 15V46m4 10V40m4 16V44m4 12V37m4 19V38m4 18V43m4 13V39m-3-18h-2m-2 0h-2m-2 0h-2M9 29h14M9 33h7m17-12h8m-14 4h8m-8-4h4m-21 4h12v-4H10z"}),r.createElement("path",{d:"M58 31V17H6v22"})))}},1375:function(e,t,n){"use strict";n.r(t);var r,o=n(693),a=n(710),c=n.n(a),i=n(699),l=n(852),s=n(695),u=n(736),p=n(700),m=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(){var e=t.props,n=e.onClick,r=e.organization,o=e.router;n(),o.push(Object(p.r)(r.key))},t}return m(t,e),t.prototype.render=function(){var e=this.props.organization;return o.createElement(s.g,{className:"abs-width-300",onClick:this.handleClick},o.createElement("div",{className:"display-flex-center"},o.createElement(l.a,{className:"spacer-right",organization:e}),o.createElement("span",null,e.name)))},t}(o.PureComponent),f=Object(u.a)(d),h=n(28);function b(e){var t=e.onClick,n=e.organizations;if(0===n.length)return null;var r=c()(n,function(e){return e.name.toLocaleLowerCase()}).slice(0,3);return o.createElement("div",null,o.createElement("ul",null,r.map(function(e){return o.createElement("li",{key:e.key},o.createElement(f,{onClick:t,organization:e}))})),n.length>3&&o.createElement("div",{className:"big-spacer-top"},o.createElement("span",{className:"big-spacer-right"},Object(h.m)("x_of_y_shown",r.length,n.length)),o.createElement(i.Link,{className:"small",onClick:t,to:"/account/organizations"},Object(h.l)("see_all"))))}var g=n(706),v=n(1003),O=n(698),y=n(701);function E(e){var t=e.className,n=e.fill,r=void 0===n?y.darkBlue:n,a=e.size;return o.createElement(O.a,{className:t,size:a||64,viewBox:"0 0 64 64"},o.createElement("g",{fill:"none",fillRule:"evenodd",stroke:r,strokeWidth:"2"},o.createElement("path",{d:"M32 9v5M11.5195 43.0898l7.48-4.091m33.481-18.0994l-7.48 4.1m-33.481-4.1l7.48 4.1M45 38.999l7.48 4.101M32 50v5m15-23c0 8.284-6.715 15-15 15s-15-6.716-15-15c0-8.285 6.715-15 15-15s15 6.715 15 15z"}),o.createElement("path",{d:"M40 38c0 1.656-3.58 2-8 2s-8-.344-8-2m16 0v-3l-5-3-1-1m-10 7v-3l5-3 1-1m6-4c0 2.2-1.8 4-4 4s-4-1.8-4-4v-1c0-2.2 1.8-4 4-4s4 1.8 4 4v1zm-.0098-21.71c7.18 1.069 13.439 4.96 17.609 10.51m-17.609 42.91c7.18-1.07 13.439-4.96 17.609-10.51M6.6299 41.25c-1.06-2.88-1.63-6-1.63-9.25s.57-6.37 1.63-9.25m3.7705-6.9502c4.17-5.55 10.43-9.44 17.609-10.51m-17.609 42.9104c4.17 5.55 10.43 9.439 17.609 10.51M57.3701 22.75c1.06 2.88 1.63 6 1.63 9.25s-.57 6.37-1.63 9.25"}),o.createElement("path",{d:"M36 5c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2M12 19c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2m51 0c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2M12 45c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2m51 0c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2M36 59c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2"})))}var w=n(855),_=n(963);n(892);function j(e){var t=e.currentUser,n=e.onClose,r=e.onOpenProjectOnboarding,a=e.userOrganizations.filter(function(e){return e.key!==t.personalOrganization}),c=Object(h.l)("onboarding.header");return o.createElement(g.a,{contentLabel:c,onRequestClose:n,shouldCloseOnOverlayClick:!1,size:a.length>0?"medium":"small"},o.createElement("div",{className:"modal-head"},o.createElement("h2",null,Object(h.l)("onboarding.header")),o.createElement("p",{className:"spacer-top"},Object(h.l)("onboarding.header.description"))),o.createElement("div",{className:"modal-body text-center display-flex-row huge-spacer-top huge-spacer-bottom"},o.createElement("div",{className:"flex-1"},o.createElement(v.a,{className:"big-spacer-bottom"}),o.createElement("h3",{className:"big-spacer-bottom"},Object(h.l)("onboarding.analyze_your_code")),o.createElement(s.a,{onClick:r},Object(h.l)("onboarding.project.create"))),a.length>0&&o.createElement(o.Fragment,null,o.createElement("div",{className:"vertical-pipe-separator"},o.createElement("div",{className:"vertical-separator"})),o.createElement("div",{className:"flex-1"},o.createElement(E,{className:"big-spacer-bottom"}),o.createElement("h3",{className:"big-spacer-bottom"},Object(h.l)("onboarding.browse_your_organizations")),o.createElement(b,{onClick:n,organizations:a})))),o.createElement("div",{className:"modal-foot text-right"},o.createElement(s.h,{onClick:n},Object(h.l)("not_now"))))}n.d(t,"OnboardingModal",function(){return j});t.default=Object(_.a)(Object(w.a)(j))},1973:function(e,t,n){"use strict";n.r(t),n.d(t,"OnboardingPage",function(){return u});var r,o=n(693),a=n(705),c=n(1375),i=n(825),l=n(985),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.closeOnboarding=function(){t.props.skipOnboarding(),t.props.router.replace("/")},t}return s(t,e),t.prototype.render=function(){var e=this;return o.createElement(l.a.Consumer,null,function(t){return o.createElement(c.default,{onClose:e.closeOnboarding,onOpenProjectOnboarding:t})})},t}(o.PureComponent),p={skipOnboarding:i.g};t.default=Object(a.connect)(null,p)(u)},706:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(693),o=n(735),a=n(694),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e){return r.createElement(o,c({className:a("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:a("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}o.setAppElement("#content")},795:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var r=n(793);function o(){var e=Object(r.a)(),t=window.location.pathname+window.location.search+window.location.hash;e.replace({pathname:"/sessions/new",query:{return_to:t}})}},828:function(e,t,n){var r;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r)}()},855:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r,o=n(693),a=n(785),c=n(840),i=n(720),l=n(795),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function p(e){var t=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return s(n,t),n.prototype.componentDidMount=function(){Object(i.b)(this.props.currentUser)||Object(l.default)()},n.prototype.render=function(){return Object(i.b)(this.props.currentUser)?o.createElement(e,u({},this.props)):null},n.displayName=Object(a.a)(e,"whenLoggedIn"),n}(o.Component);return Object(c.a)(t)}},892:function(e,t,n){var r=n(893);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(697)(r,o);r.locals&&(e.exports=r.locals)},893:function(e,t,n){(e.exports=n(696)(!1)).push([e.i,".onboarding-step{position:relative;padding-left:34px}.onboarding-step:not(.is-open):not(.is-finished){opacity:.4}.onboarding-step .boxed-group-actions{height:24px;line-height:24px}.onboarding-step hr{margin-left:-54px}.onboarding-step-number{position:absolute;top:15px;left:15px;width:24px;height:24px;line-height:24px;border-radius:24px;background-color:#b9b9b9;color:#fff;font-size:14px;text-align:center}.onboarding-step.is-open .onboarding-step-number{background-color:#236a97}.onboarding-step.is-finished{cursor:pointer;outline:none}",""])},963:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r,o=n(693),a=n(705),c=n(785),i=n(707),l=n(983),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function p(e){var t=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return s(n,t),n.prototype.componentDidMount=function(){this.props.fetchMyOrganizations()},n.prototype.render=function(){return o.createElement(e,u({},this.props))},n.displayName=Object(c.a)(e,"withUserOrganizations"),n}(o.Component),n={fetchMyOrganizations:l.b};return Object(a.connect)(function(e){return{userOrganizations:Object(i.getMyOrganizations)(e)}},n)(t)}}}]);
//# sourceMappingURL=321.1560762716920.chunk.js.map