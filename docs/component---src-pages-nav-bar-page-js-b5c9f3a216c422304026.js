(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6Zlu":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),i=(t("dZ+Y"),["width","height","top","right","bottom","left"]),l=function(e,a){return void 0===e&&(e={}),void 0===a&&(a={}),i.some((function(t){return e[t]!==a[t]}))},o=function(e,a){var t,n;return{observe:function r(){var i=e.getBoundingClientRect();l(i,t)&&a(t=i),n=requestAnimationFrame(r)},unobserve:function(){cancelAnimationFrame(n)}}};t("17x9");function c(e){var a=e.onChange,t=e.observe,n=void 0===t||t,i=e.children,l=r.a.useRef(null);return i({ref:l,rect:m(l,n,a)})}function m(e,a,t){void 0===a&&(a=!0);var r=Object(n.useState)(null),i=r[0],l=r[1],c=Object(n.useRef)(null);return Object(n.useLayoutEffect)((function(){var n=function(){c.current&&c.current.unobserve()};return e.current?(!c.current&&e.current&&(c.current=o(e.current,(function(e){t&&t(e),l(e)}))),a&&c.current.observe(),n):(console.warn("You need to place the ref"),n)}),[a,t]),i}t.d(a,"a",(function(){return m})),c.displayName="Rect"},"6xnG":function(e,a,t){"use strict";t.r(a);t("0t2N"),t("XFmL");var n=t("q1tI"),r=t.n(n),i=(t("Wbzz"),t("fCI2"),t("GW3L"),t("Bl7J")),l=t("y62J"),o=(t("D3x9"),t("N1Sj")),c=t("UYIE"),m=(t("qHnM"),t("b1ev"),t("gs2d")),u=t("qHf/"),s=t("A9Wq"),v=(t("ZXdF"),t("9UYM"),t("NIcq")),d=t("mspG"),b=t("nYpF"),f=(t("6Zlu"),t("Fc4d")),p=t("syrB"),_=function(e){var a=e.children,t=e.showBreakPoints,i=void 0!==t&&t,l=e.mobileMenu,o=void 0!==l&&l,c=e.onMobileMenuClick,u=void 0===c?function(){}:c,s=e.className,_=void 0===s?"":s,h=e.adaptiveLogo,g=void 0===h||h,E=Object(n.useRef)(),N=Object(b.c)(E,"example-nav-bar"),x=Object(b.b)(N,"example-nav-bar");return r.a.createElement(m.a,{className:"example-nav-bar-container"},r.a.createElement("div",{className:"example-nav-bar "+_+" "+(g?x:""),ref:E},o&&r.a.createElement("div",{className:"example-nav-bar__mobile-menu"},r.a.createElement(p.a,{className:"example-nav-bar__mobile-menu__button",onClick:u},r.a.createElement(v.b,null))),r.a.createElement("div",{className:"example-nav-bar__logo"},r.a.createElement(d.a,null)),r.a.createElement("div",{className:"example-nav-bar__right"},a),i&&r.a.createElement(f.a,null)))};a.default=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1];return r.a.createElement(i.a,null,r.a.createElement("article",{className:"page page--headers"},r.a.createElement("header",{className:"page__header"},r.a.createElement(l.a,{level:1},"Navigation Bar")),r.a.createElement("section",null,r.a.createElement(u.a,{variantName:"large"},"The Header should use an adaptive layout to allow for functional navigation for both mobile and desktop users. On narrow screens, the logo may be reduced to only the icon variant to allow more space for navigation controls."),r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Navigation Bar with Adaptive Logo",subtitle:"CSS media queries may control the display of the logo"}),r.a.createElement(u.a,null),r.a.createElement("div",{className:"nav-bar-page__nav-bar-row"},r.a.createElement(_,{showBreakPoints:!0},r.a.createElement(m.a,null,r.a.createElement("a",{className:"nav-bar-page__nav-bar__item"},"Lorem")),r.a.createElement(m.a,null,r.a.createElement("a",{className:"nav-bar-page__nav-bar__item"},"Ipsum")),r.a.createElement(m.a,null,r.a.createElement("a",{className:"nav-bar-page__nav-bar__item"},"Dolor"))),r.a.createElement("div",{className:"nav-bar-page__nav-bar__v-dim"},r.a.createElement(s.b,{size:80,unit:"px"})))),r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Navigation Bar with Menu button for mobile",subtitle:"Where the space available for mobile devices is insufficient, a menu toggle may be employed to reveal a side-drawer for navigation."}),r.a.createElement(u.a,null),r.a.createElement("div",{className:"nav-bar-page__mobile-frame"},r.a.createElement(_,{showBreakPoints:!0,mobileMenu:!0,adaptiveLogo:!1,onMobileMenuClick:function(){return t(!a)},className:"nav-bar-page__mobile-nav-bar"}),r.a.createElement("div",{className:"nav-bar-page__mobile-frame__drawer nav-bar-page__mobile-frame__drawer--"+(a?"open":"closed")},r.a.createElement(m.a,{display:"block"},r.a.createElement("div",{className:"nav-bar-page__mobile-frame__drawer-contents"},r.a.createElement(m.a,null,r.a.createElement("a",{className:"nav-bar-page__mobile-frame__drawer-item"},"Lorem")),r.a.createElement(m.a,null,r.a.createElement("a",{className:"nav-bar-page__mobile-frame__drawer-item"},"Ipsum")),r.a.createElement(m.a,null,r.a.createElement("a",{className:"nav-bar-page__mobile-frame__drawer-item"},"Dolor"))))))))))}},Fc4d:function(e,a,t){"use strict";t("f3/d"),t("nVkp");var n=t("q1tI"),r=t.n(n),i=t("nYpF");a.a=function(){var e=Object(n.useRef)();i.a;return r.a.createElement("div",{className:"reveal-break-points",ref:e},i.a.map((function(e,a){return r.a.createElement("div",{key:a,style:{width:e.maxWidth+"px"},className:"reveal-break-points__break reveal-break-points__break"+e.name},r.a.createElement("div",{className:"reveal-break-points__break__label-box"},r.a.createElement("div",{className:"reveal-break-points__break__label"},e.maxWidth,"px")))})))}},NIcq:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return i}));var n=t("Lnxd"),r=function(e){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}}]})(e)};r.displayName="MdAccountCircle";var i=function(e){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}}]})(e)};i.displayName="MdMenu"},TSYQ:function(e,a,t){var n;t("LK8F"),function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===i)for(var o in n)t.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},ZXdF:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("XFmL");var n=t("q1tI"),r=t.n(n),i=t("TSYQ"),l=t.n(i);function o(e){var a=e.children,t=e.className,n=void 0===t?"":t,i=e.pill,o=void 0!==i&&i,c=e.primary,m=void 0!==c&&c,u=e.onMouseUp,s=void 0===u?function(){}:u,v=e.element,d=void 0===v?"button":v,b=e.isWaiting,f=void 0!==b&&b,p=e.isFocused,_=void 0!==p&&p,h=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["children","className","pill","primary","onMouseUp","element","isWaiting","isFocused"]),g=d;return r.a.createElement(g,Object.assign({className:l()("button",n,{"button--pill":o,"button--primary":m,"button--waiting":f,"button--focused":_})},h,{onMouseUp:function(e){e.currentTarget.blur(),s(e)}}),r.a.createElement("span",{className:"button__contents"},a,r.a.createElement("div",{className:"button__heartbeat"})))}},b1ev:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),i=t("eBBf"),l=(t("y62J"),t("NpmE"));a.a=function(e){var a=e.styleName,t=e.variantName,n=(e.className,e.children),o=Object(i.a)(a,t);return console.log("fontMetrics",a,o),r.a.createElement(l.a,{fontSize:o.size,lineHeight:o.lineHeight,unit:o.unit,topMargin:o.topMargin,bottomMargin:o.bottomMargin},n)}},nYpF:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"c",(function(){return l})),t.d(a,"b",(function(){return o}));t("f3/d");var n=t("q1tI"),r=t("6Zlu"),i=[{minWidth:0,maxWidth:420,name:"--mobile"},{minWidth:0,maxWidth:640,name:"--small-tablet"},{minWidth:0,maxWidth:768,name:"--tablet"},{minWidth:0,maxWidth:1024,name:"--small-desktop"},{minWidth:0,maxWidth:1280,name:"--large-desktop"},{minWidth:0,maxWidth:1824,name:"--xlarge-desktop"},{minWidth:0,maxWidth:2560,name:"--xxlarge-desktop"}],l=function(e,a){void 0===a&&(a="break-point");var t=Object(n.useState)([]),l=t[0],o=t[1],c=Object(n.useState)(!1),m=(c[0],c[1]);Object(n.useEffect)((function(){e.current&&m(!0)}));Object(r.a)(e,!0,(function(e){var t=i.filter((function(a){return e.width>=a.minWidth&&e.width<=a.maxWidth}));t.map((function(e){return""+a+e.name}));o(t)}));return l},o=function(e,a){return void 0===a&&(a=""),e.map((function(e){return""+a+e.name})).join(" ")}}}]);
//# sourceMappingURL=component---src-pages-nav-bar-page-js-b5c9f3a216c422304026.js.map