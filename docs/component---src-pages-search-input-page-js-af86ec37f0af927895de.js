(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0meA":function(e,t,a){"use strict";a("ugwP");var n=a("q1tI"),r=a.n(n),i=a("gs2d");a("mspG"),a("nYpF"),a("6Zlu"),a("Fc4d");t.a=function(e){e.children;var t=e.size,a=void 0===t?"large":t;return r.a.createElement(i.a,{className:"example-search-input-container",display:"block"},r.a.createElement("div",{className:"example-search-input  example-search-input--"+a},r.a.createElement("input",{className:"example-search-input__input",type:"text",placeholder:"Search by title, DOI, author, etc..."})))}},"6Zlu":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=(a("dZ+Y"),["width","height","top","right","bottom","left"]),c=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.some((function(a){return e[a]!==t[a]}))},l=function(e,t){var a,n;return{observe:function r(){var i=e.getBoundingClientRect();c(i,a)&&t(a=i),n=requestAnimationFrame(r)},unobserve:function(){cancelAnimationFrame(n)}}};a("17x9");function u(e){var t=e.onChange,a=e.observe,n=void 0===a||a,i=e.children,c=r.a.useRef(null);return i({ref:c,rect:s(c,n,t)})}function s(e,t,a){void 0===t&&(t=!0);var r=Object(n.useState)(null),i=r[0],c=r[1],u=Object(n.useRef)(null);return Object(n.useLayoutEffect)((function(){var n=function(){u.current&&u.current.unobserve()};return e.current?(!u.current&&e.current&&(u.current=l(e.current,(function(e){a&&a(e),c(e)}))),t&&u.current.observe(),n):(console.warn("You need to place the ref"),n)}),[t,a]),i}a.d(t,"a",(function(){return s})),u.displayName="Rect"},Fc4d:function(e,t,a){"use strict";a("f3/d"),a("nVkp");var n=a("q1tI"),r=a.n(n),i=a("nYpF");t.a=function(){var e=Object(n.useRef)();i.a;return r.a.createElement("div",{className:"reveal-break-points",ref:e},i.a.map((function(e,t){return r.a.createElement("div",{key:t,style:{width:e.maxWidth+"px"},className:"reveal-break-points__break reveal-break-points__break"+e.name},r.a.createElement("div",{className:"reveal-break-points__break__label-box"},r.a.createElement("div",{className:"reveal-break-points__break__label"},e.maxWidth,"px")))})))}},"Yy/Y":function(e,t,a){"use strict";a.r(t);a("3Npu"),a("XFmL");var n=a("q1tI"),r=a.n(n),i=(a("GW3L"),a("Bl7J")),c=a("y62J"),l=(a("D3x9"),a("N1Sj")),u=a("UYIE"),s=(a("qHnM"),a("b1ev"),a("gs2d"),a("qHf/")),m=a("A9Wq"),o=a("0meA");t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("article",{className:"page page--search-input"},r.a.createElement("header",{className:"page__search-input"},r.a.createElement(c.a,{level:1},"Search Input")),r.a.createElement("section",null,r.a.createElement(s.a,{variantName:"large"},"For pages where Search is the primary form of user interaction, a large search input field may be used."),r.a.createElement(l.a,null,r.a.createElement(u.a,{title:"Primary Search Input",subtitle:"Open Sans 500, 13pt"}),r.a.createElement(s.a,null),r.a.createElement("div",{className:"search-input-page__row"},r.a.createElement("div",{className:"search-input-page__search"},r.a.createElement(o.a,null)),r.a.createElement("div",{className:"search-input-page__row__v-dim"},r.a.createElement(m.b,{size:56,unit:"px"})))),r.a.createElement(s.a,{variantName:"large"},"In situations where Search is not the primary call to action, a more compact search input is recommended."),r.a.createElement(l.a,null,r.a.createElement(u.a,{title:"Secondary Search Input",subtitle:"Open Sans 500, 13pt"}),r.a.createElement(s.a,null),r.a.createElement("div",{className:"search-input-page__row"},r.a.createElement("div",{className:"search-input-page__search"},r.a.createElement(o.a,{size:"small"})),r.a.createElement("div",{className:"search-input-page__row__v-dim"},r.a.createElement(m.b,{size:40,unit:"px"})))))))}},b1ev:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("eBBf"),c=(a("y62J"),a("NpmE"));t.a=function(e){var t=e.styleName,a=e.variantName,n=(e.className,e.children),l=Object(i.a)(t,a);return console.log("fontMetrics",t,l),r.a.createElement(c.a,{fontSize:l.size,lineHeight:l.lineHeight,unit:l.unit,topMargin:l.topMargin,bottomMargin:l.bottomMargin},n)}},nYpF:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return l}));a("f3/d");var n=a("q1tI"),r=a("6Zlu"),i=[{minWidth:0,maxWidth:420,name:"--mobile"},{minWidth:0,maxWidth:640,name:"--small-tablet"},{minWidth:0,maxWidth:768,name:"--tablet"},{minWidth:0,maxWidth:1024,name:"--small-desktop"},{minWidth:0,maxWidth:1280,name:"--large-desktop"},{minWidth:0,maxWidth:1824,name:"--xlarge-desktop"},{minWidth:0,maxWidth:2560,name:"--xxlarge-desktop"}],c=function(e,t){void 0===t&&(t="break-point");var a=Object(n.useState)([]),c=a[0],l=a[1],u=Object(n.useState)(!1),s=(u[0],u[1]);Object(n.useEffect)((function(){e.current&&s(!0)}));Object(r.a)(e,!0,(function(e){var a=i.filter((function(t){return e.width>=t.minWidth&&e.width<=t.maxWidth}));a.map((function(e){return""+t+e.name}));l(a)}));return c},l=function(e,t){return void 0===t&&(t=""),e.map((function(e){return""+t+e.name})).join(" ")}}}]);
//# sourceMappingURL=component---src-pages-search-input-page-js-af86ec37f0af927895de.js.map