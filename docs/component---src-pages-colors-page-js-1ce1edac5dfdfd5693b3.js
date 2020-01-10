(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0meA":function(e,t,a){"use strict";a("ugwP");var r=a("q1tI"),n=a.n(r),i=a("gs2d");a("mspG"),a("nYpF"),a("6Zlu"),a("Fc4d");t.a=function(e){e.children;var t=e.size,a=void 0===t?"large":t;return n.a.createElement(i.a,{className:"example-search-input-container",display:"block"},n.a.createElement("div",{className:"example-search-input  example-search-input--"+a},n.a.createElement("input",{className:"example-search-input__input",type:"text",placeholder:"Search by title, DOI, author, etc..."})))}},"6Zlu":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=(a("dZ+Y"),["width","height","top","right","bottom","left"]),l=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),i.some((function(a){return e[a]!==t[a]}))},c=function(e,t){var a,r;return{observe:function n(){var i=e.getBoundingClientRect();l(i,a)&&t(a=i),r=requestAnimationFrame(n)},unobserve:function(){cancelAnimationFrame(r)}}};a("17x9");function o(e){var t=e.onChange,a=e.observe,r=void 0===a||a,i=e.children,l=n.a.useRef(null);return i({ref:l,rect:s(l,r,t)})}function s(e,t,a){void 0===t&&(t=!0);var n=Object(r.useState)(null),i=n[0],l=n[1],o=Object(r.useRef)(null);return Object(r.useLayoutEffect)((function(){var r=function(){o.current&&o.current.unobserve()};return e.current?(!o.current&&e.current&&(o.current=c(e.current,(function(e){a&&a(e),l(e)}))),t&&o.current.observe(),r):(console.warn("You need to place the ref"),r)}),[t,a]),i}a.d(t,"a",(function(){return s})),o.displayName="Rect"},Fc4d:function(e,t,a){"use strict";a("f3/d"),a("nVkp");var r=a("q1tI"),n=a.n(r),i=a("nYpF");t.a=function(){var e=Object(r.useRef)();i.a;return n.a.createElement("div",{className:"reveal-break-points",ref:e},i.a.map((function(e,t){return n.a.createElement("div",{key:t,style:{width:e.maxWidth+"px"},className:"reveal-break-points__break reveal-break-points__break"+e.name},n.a.createElement("div",{className:"reveal-break-points__break__label-box"},n.a.createElement("div",{className:"reveal-break-points__break__label"},e.maxWidth,"px")))})))}},M0uS:function(e,t,a){"use strict";a.r(t);a("15nE");var r=a("q1tI"),n=a.n(r),i=a("Bl7J"),l=a("y62J"),c=a("N1Sj"),o=a("UYIE"),s=a("qHf/"),u=(a("A9Wq"),a("0meA"),a("eBBf"));t.default=function(){var e=function(e){var t="--"+e,a=Object(u.b)(t);return n.a.createElement("div",{className:"page__colors__color-info"},n.a.createElement("div",{className:"page__colors__color-swatch",style:{background:a}}),a)};return n.a.createElement(i.a,null,n.a.createElement("article",{className:"page page--colors"},n.a.createElement("header",{className:"page__colors"},n.a.createElement(l.a,{level:1},"PREreview Colors")),n.a.createElement("section",null,n.a.createElement(s.a,{variantName:"large"},"The PREreview color system is composed of primary and secondary palette. The secondary colors are intended to be used in illustrations and in select cases where the primary color range is not sufficient for clear communication."," "),n.a.createElement(c.a,null,n.a.createElement(o.a,{title:"Primary Colors",subtitle:"These should be the primary colours used in PREReview website, digital, and print materials."}),n.a.createElement(s.a,null),n.a.createElement("div",{className:"page__colors__swatches"},["prereview-red","prereview-black","prereview-white","prereview-grey"].map((function(t){return e(t)})))),n.a.createElement(c.a,null,n.a.createElement(o.a,{title:"Secondary Colors",subtitle:"To maintain a unified visual identity across supporting visuals, these colours should be\nused in illustrations that appear in PREReview website, digital, and print materials."}),n.a.createElement(s.a,null),n.a.createElement("div",{className:"page__colors__swatches"},["prereview-blue","prereview-light-blue","prereview-gold","prereview-light-gold","prereview-coral","prereview-spring-green","prereview-xxxlight-grey","prereview-xxlight-grey","prereview-xlight-grey","prereview-light-grey"].map((function(t){return e(t)})))),n.a.createElement(c.a,null,n.a.createElement(s.a,{variantName:"large"},"Text color should be optimized for legibility and accessibility."),n.a.createElement("br",null),n.a.createElement(o.a,{title:"Primary Text Color",subtitle:"Unrich Black: "+Object(u.b)("--unrich-black")}),n.a.createElement(s.a,null,"Black text set on white should use ",n.a.createElement("em",null,"unrich")," black - a slightly desaturated black that is easier to read."),n.a.createElement("br",null),n.a.createElement(o.a,{title:"Secondary Text Color",subtitle:"Grey: "+Object(u.b)("--basic-font-color--light")}),n.a.createElement(s.a,{className:"page__colors__light-text"},"Light text set on white should use a grey that is dark enough to meet accessibility standards.")),n.a.createElement(c.a,null,n.a.createElement(o.a,{title:"Calls to Action and Featured Text",subtitle:"White text with "+Object(u.b)("--prerview-red-text-shadow")+" shadow on Red "+Object(u.b)("--prereview-red")}),n.a.createElement("div",{className:"page_colors__cta-example"},n.a.createElement(l.a,{level:1},"Splash Page Text")),n.a.createElement(s.a,null,"Note that the PREreview brand color combination of white on #ff3333 red does not meet the WCAG accessability standard for color contrast. In this case, a text shadow may be employed to achieve a higher effective contrast between the text and background.",n.a.createElement("blockquote",null,"...if a letter is lighter at the top than it is a the bottom, it may be difficult to maintain the contrast ratio between the letter and the background over the full letter. In this case, the designer might darken the background behind the letter, or add a thin black outline (at least one pixel wide) around the letter in order to keep the contrast ratio between the letter and the background above 4.5:1. – ",n.a.createElement("a",{href:"https://www.w3.org/WAI/WCAG20/quickref/20140916/#visual-audio-contrast-contrast"},"w3.org")))))))}},nYpF:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return c}));a("f3/d");var r=a("q1tI"),n=a("6Zlu"),i=[{minWidth:0,maxWidth:420,name:"--mobile"},{minWidth:0,maxWidth:640,name:"--small-tablet"},{minWidth:0,maxWidth:768,name:"--tablet"},{minWidth:0,maxWidth:1024,name:"--small-desktop"},{minWidth:0,maxWidth:1280,name:"--large-desktop"},{minWidth:0,maxWidth:1824,name:"--xlarge-desktop"},{minWidth:0,maxWidth:2560,name:"--xxlarge-desktop"}],l=function(e,t){void 0===t&&(t="break-point");var a=Object(r.useState)([]),l=a[0],c=a[1],o=Object(r.useState)(!1),s=(o[0],o[1]);Object(r.useEffect)((function(){e.current&&s(!0)}));Object(n.a)(e,!0,(function(e){var a=i.filter((function(t){return e.width>=t.minWidth&&e.width<=t.maxWidth}));a.map((function(e){return""+t+e.name}));c(a)}));return l},c=function(e,t){return void 0===t&&(t=""),e.map((function(e){return""+t+e.name})).join(" ")}}}]);
//# sourceMappingURL=component---src-pages-colors-page-js-1ce1edac5dfdfd5693b3.js.map