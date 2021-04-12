(this["webpackJsonproi-calculator"]=this["webpackJsonproi-calculator"]||[]).push([[0],{17:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var l=s(0),c=s(1),a=s.n(c),n=s(3),r=s.n(n),i=(s(16),s(17),s(2)),o=function(){return Object(l.jsxs)("header",{className:"roi-heading",children:[Object(l.jsx)("h1",{children:"R.O.I. CALCULATOR"}),Object(l.jsx)("p",{children:"See how much time and money you could be saving with Payapps."})]})},u=s(5),j=s(4),d={option:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{backgroundColor:"none",cursor:"pointer",height:"42px"})},menu:function(){return{background:"#13242E",width:"200px",zIndex:"2",display:"flex",flexDirection:"column",position:"absolute"}},control:function(){return{display:"flex",alignItems:"center",height:"42px"}},singleValue:function(e,t){var s=t.isDisabled?.5:1;return Object(j.a)(Object(j.a)({},e),{},{opacity:s,transition:"opacity 300ms",background:"none",display:"flex",color:"#ffffff",height:"42px",alignItems:"center",zIndex:"0"})},indicatorSeparator:function(){return{display:"none"}}},b=function(e){var t=e.setTurnover,s=e.isForUK?[{label:"Tier 3 (\xa330-\xa3249m)",value:12e3},{label:"Tier 2 (\xa3250m - \xa3499m)",value:3e4},{label:"Tier 1 (\xa3500m +)",value:6e4}]:[{label:"Tier 5 (< $10m)",value:21e3},{label:"Tier 4 ($10-$50m)",value:24e3},{label:"Tier 3 ($50-$250m)",value:36e3},{label:"Tier 2 ($250m - $1.5b)",value:75e3},{label:"Tier 1 ($1.5b +)",value:126e3}];return Object(l.jsx)("div",{className:"roi-calculator__turnover",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"text",children:"Select annual turnover"}),Object(l.jsx)("div",{className:"col1",children:Object(l.jsx)(u.a,{options:s,onChange:function(e){return t(e)},placeholder:"Tier","aria-label":"turnover tier",isSearchable:!1,menuPlacement:"auto",styles:d})}),Object(l.jsx)("div",{className:"col2",children:"\xa0"})]})})},h=function(e){var t=e.setNumOfClaims,s=e.isTierSelected,c=e.restrictLetterInput,a=s?null:Object(l.jsx)("div",{className:"overlay"});return Object(l.jsxs)("div",{className:"row",children:[a,Object(l.jsx)("div",{className:"text",children:"Claims processed per month?"}),Object(l.jsx)("div",{className:"col1",children:Object(l.jsx)("input",{type:"text",defaultValue:200,placeholder:"0",onChange:function(e){return t(e.target.value)},onKeyDown:function(e){return c(e)}})}),Object(l.jsx)("div",{className:"col2",children:"\xa0"})]})},O=function(e){var t=e.setAssessmentTime,s=e.isTierSelected,a=e.restrictLetterInput,n=Object(c.useState)("02"),r=Object(i.a)(n,2),o=r[0],u=r[1],j=Object(c.useState)("00"),d=Object(i.a)(j,2),b=d[0],h=d[1],O=Number(b),x=Number(o),p=s?null:Object(l.jsx)("div",{className:"overlay"});return Object(c.useEffect)((function(){t(x+O/60)})),Object(l.jsxs)("div",{className:"row",children:[p,Object(l.jsx)("div",{className:"text",children:"Total time to assess a claim?"}),Object(l.jsxs)("div",{className:"col1 roi-calculator__time-wrapper",children:[Object(l.jsx)("input",{className:"roi-calculator__hours",type:"text",defaultValue:o,placeholder:"0",onChange:function(e){return u(e.target.value)},onKeyDown:function(e){return a(e)}}),Object(l.jsx)("span",{className:"colon",children:":"}),Object(l.jsx)("input",{className:"roi-calculator__minutes",type:"text",defaultValue:b,placeholder:"00",onChange:function(e){return h(e.target.value)},onKeyDown:function(e){return a(e)}})]}),Object(l.jsx)("div",{className:"col2",children:"hrs : mins"})]})},x=function(e){var t=e.setHourlyRate,s=e.isTierSelected,c=e.isForUK,a=e.restrictLetterInput,n=s?null:Object(l.jsx)("div",{className:"overlay"});return Object(l.jsxs)("div",{className:"row",children:[n,Object(l.jsxs)("div",{className:"text",children:["Average Contract Administrator hourly wage ",Object(l.jsxs)("span",{className:"small-text",children:["(if you\u2019re unsure, use ",c?"\xa328":"$75"," per hour)"]})]}),Object(l.jsxs)("div",{className:"col1 roi-calculator__wage-input-wrapper",children:[Object(l.jsx)("span",{className:"roi-calculator__wage-currency",children:c?"\xa3":"$"}),Object(l.jsx)("input",{type:"text",className:"roi-calculator__wage",defaultValue:c?28:75,placeholder:"0",onChange:function(e){return t(e.target.value)},onKeyDown:function(e){return a(e)}})]}),Object(l.jsx)("div",{className:"col2",children:"per hour"})]})},p=function(e){var t=e.setNumOfPages,s=e.setArchivalCost,a=e.isTierSelected,n=e.restrictLetterInput,r=Object(c.useState)(!1),o=Object(i.a)(r,2),j=o[0],b=o[1],h=[{label:"no",value:!1},{label:"yes",value:!0}],O=j.value?null:Object(l.jsx)("div",{className:"overlay"});return Object(l.jsxs)("div",{className:"roi-calculator__physical-payments",children:[Object(l.jsxs)("div",{className:"row",children:[a?null:Object(l.jsx)("div",{className:"overlay"}),Object(l.jsx)("div",{className:"text",children:"Do you mail physical payment schedules?"}),Object(l.jsx)("div",{className:"col1",children:Object(l.jsx)(u.a,{options:h,onChange:function(e){return b(e)},defaultValue:h[0],"aria-label":"turnover tier",isSearchable:!1,menuPlacement:"auto",styles:d})}),Object(l.jsx)("div",{className:"col2",children:"\xa0"})]}),Object(l.jsxs)("div",{className:"row",children:[O,Object(l.jsx)("div",{className:"text",children:"Average number of pages printed per claim"}),Object(l.jsx)("div",{className:"col1",children:Object(l.jsx)("input",{type:"text",placeholder:"0",onChange:function(e){return t(e.target.value)},onKeyDown:function(e){return n(e)}})}),Object(l.jsx)("div",{className:"col2",children:"\xa0"})]}),Object(l.jsxs)("div",{className:"row",children:[O,Object(l.jsx)("div",{className:"text",children:"Courier and archival costs"}),Object(l.jsx)("div",{className:"col1 roi-calculator__archival-input-wrapper",children:Object(l.jsx)("input",{type:"text",className:"roi-calculator__archival-cost",placeholder:"0",onChange:function(e){return s(e.target.value)},onKeyDown:function(e){return n(e)}})}),Object(l.jsx)("div",{className:"col2",children:"per annum"})]})]})},v=function(e){var t=e.moneySavedAnnually,s=e.timeSaved,c=e.returnOnInvestment,a=e.isForUK;return Object(l.jsxs)("section",{className:"roi-calculator__results",children:[Object(l.jsxs)("div",{className:"roi-calculator__results__return-on-investment",children:[Object(l.jsx)("p",{children:"You\u2019ll see a return on your investment in"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{className:"roi-calculator__results__number",children:c.toFixed(2)}),Object(l.jsx)("span",{className:"roi-calculator__results__units",children:" months"})]})]}),Object(l.jsxs)("div",{className:"roi-calculator__results__savings",children:[Object(l.jsx)("p",{children:"With Payapps, you could save"}),Object(l.jsxs)("p",{children:[Object(l.jsxs)("span",{className:"roi-calculator__results__number",children:[a?"\xa3":"$",t.toFixed(2)]}),Object(l.jsx)("span",{className:"roi-calculator__results__units",children:" pa"})]}),Object(l.jsx)("p",{children:"or"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{className:"roi-calculator__results__number",children:s.toFixed(0)}),Object(l.jsx)("span",{className:"roi-calculator__results__units",children:" hrs/month"})]})]})]})},m=function(e){var t=e.isForUK,s=Object(c.useState)({label:"none",value:0}),a=Object(i.a)(s,2),n=a[0],r=a[1];console.log("turnover",n);var o=Object(c.useState)(200),u=Object(i.a)(o,2),j=u[0],d=u[1],m=Object(c.useState)(2),f=Object(i.a)(m,2),y=f[0],C=f[1],N=Object(c.useState)(t?28:75),_=Object(i.a)(N,2),L=_[0],g=_[1],w=Object(c.useState)(0),H=Object(i.a)(w,2),S=H[0],V=H[1],F=Object(c.useState)(0),T=Object(i.a)(F,2),R=T[0],M=T[1],Z=0!==n.value,I=L*y*j*12+(.05*S*13+12*R)-.75*(t?28:75)*j*12,K=j*y-.75*j,k=n.value/(I/12),U=function(e){-1!==[46,8,9,27,13,110].indexOf(e.keyCode)||65===e.keyCode&&!0===e.ctrlKey||e.keyCode>=35&&e.keyCode<=39||(e.shiftKey||e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105)&&e.preventDefault()};return Object(l.jsxs)("section",{className:"roi-calculator",children:[Object(l.jsx)(b,{setTurnover:r,isForUK:t}),Object(l.jsx)(h,{setNumOfClaims:d,isTierSelected:Z,restrictLetterInput:U}),Object(l.jsx)(O,{setAssessmentTime:C,isTierSelected:Z,restrictLetterInput:U}),Object(l.jsx)(x,{setHourlyRate:g,isTierSelected:Z,isForUK:t,restrictLetterInput:U}),t?null:Object(l.jsx)(p,{setNumOfPages:V,setArchivalCost:M,isTierSelected:Z,restrictLetterInput:U}),Object(l.jsx)(v,{moneySavedAnnually:I,timeSaved:K,returnOnInvestment:k,isForUK:t})]})},f=Object(l.jsxs)("svg",{width:"135",height:"59",viewBox:"0 0 135 59",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M96.7016 5.87054L99.0664 7.63872L96.833 9.30912H131.56V54.6202H3.43894V9.30912H76.4923L78.7242 7.63872L76.3587 5.87054H0V58.056H135V5.87054H96.7016Z",fill:"white"}),Object(l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M96.7016 5.87054L99.0664 7.63872L96.833 9.30912H131.56V54.6202H3.43894V9.30912H76.4923L78.7242 7.63872L76.3587 5.87054H0V58.056H135V5.87054H96.7016Z",fill:"url(#paint0_linear)"}),Object(l.jsx)("path",{d:"M86.1284 0.378418V4.0962L91.1008 7.81146L86.1284 11.527V15.2425L96.0722 7.81146L86.1284 0.378418Z",fill:"white"}),Object(l.jsx)("path",{d:"M86.1284 0.378418V4.0962L91.1008 7.81146L86.1284 11.527V15.2425L96.0722 7.81146L86.1284 0.378418Z",fill:"url(#paint1_linear)"}),Object(l.jsx)("path",{d:"M87.286 7.81152L77.3423 0.378478V4.09626L82.3136 7.81152L77.3423 11.528V15.2435L87.286 7.81152Z",fill:"white"}),Object(l.jsx)("path",{d:"M87.286 7.81152L77.3423 0.378478V4.09626L82.3136 7.81152L77.3423 11.528V15.2435L87.286 7.81152Z",fill:"url(#paint2_linear)"}),Object(l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.1549 34.8023H21.6856C29.5364 34.8023 29.5132 23.3391 21.6856 23.3391C20.4272 23.3391 19.1685 23.3448 17.9098 23.3505C16.6511 23.3562 15.3925 23.3619 14.1342 23.3619V39.5744H17.1549V34.8023ZM21.6857 32H17.1549V26.2563H21.6857C25.5313 26.2563 25.5534 32 21.6857 32Z",fill:"white"}),Object(l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M79.9939 34.8023H84.5247C92.3755 34.8023 92.3523 23.3391 84.5247 23.3391C83.2662 23.3391 82.0076 23.3448 80.7489 23.3505C79.4903 23.3562 78.2317 23.3619 76.9734 23.3619V39.5744H79.9939V34.8023ZM84.5248 32H79.994V26.2563H84.5248C88.3704 26.2563 88.3925 32 84.5248 32Z",fill:"white"}),Object(l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M95.9591 34.8023H100.49C108.341 34.8023 108.317 23.3391 100.49 23.3391C99.2314 23.3391 97.9727 23.3448 96.714 23.3505C95.4554 23.3562 94.1967 23.3619 92.9384 23.3619V39.5744H95.9591V34.8023ZM100.49 32H95.959V26.2563H100.49C104.335 26.2563 104.358 32 100.49 32Z",fill:"white"}),Object(l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M35.7708 26.7548L32.7961 33.656H38.7467L35.7708 26.7548ZM39.9586 36.5043H31.5839L30.2105 39.5629H26.9373L34.1238 23.3505H37.4187L44.605 39.5629H41.3102L39.9586 36.5043Z",fill:"white"}),Object(l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M66.1649 26.7548L63.1903 33.656H69.1407L66.1649 26.7548ZM70.3528 36.5043H61.9779L60.6047 39.5629H57.3315L64.518 23.3505H67.8128L74.9992 39.5629H71.7044L70.3528 36.5043Z",fill:"white"}),Object(l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M118.559 27.3346C118.01 26.4078 116.5 25.528 114.76 25.528C112.518 25.528 111.441 26.4768 111.441 27.6816C111.441 29.0953 113.089 29.4881 115.011 29.7201C118.353 30.1371 121.466 31.0169 121.466 34.885C121.466 38.4972 118.308 40.0487 114.738 40.0487C111.464 40.0487 108.947 39.0299 107.758 36.0657L110.274 34.746C110.984 36.5286 112.838 37.3166 114.783 37.3166C116.682 37.3166 118.467 36.6445 118.467 34.885C118.467 33.3563 116.888 32.7304 114.76 32.4984C111.488 32.1057 108.466 31.2246 108.466 27.5885C108.466 24.2544 111.716 22.8888 114.669 22.8647C117.162 22.8647 119.749 23.5836 120.962 26.084L118.559 27.3346Z",fill:"white"}),Object(l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M55.1206 23.3304L50.8898 30.1992L46.694 23.3304H43.126L49.2526 32.7434L49.276 39.5426H52.5385L52.5618 32.7434L58.6886 23.3304H55.1206Z",fill:"white"}),Object(l.jsxs)("defs",{children:[Object(l.jsxs)("linearGradient",{id:"paint0_linear",x1:"70.9706",y1:"6.26327",x2:"82.8384",y2:"19.1127",gradientUnits:"userSpaceOnUse",children:[Object(l.jsx)("stop",{stopColor:"#1EBCFF"}),Object(l.jsx)("stop",{offset:"1",stopColor:"#007AFF"})]}),Object(l.jsxs)("linearGradient",{id:"paint1_linear",x1:"70.9706",y1:"6.26327",x2:"82.8384",y2:"19.1127",gradientUnits:"userSpaceOnUse",children:[Object(l.jsx)("stop",{stopColor:"#1EBCFF"}),Object(l.jsx)("stop",{offset:"1",stopColor:"#007AFF"})]}),Object(l.jsxs)("linearGradient",{id:"paint2_linear",x1:"70.9706",y1:"6.26327",x2:"82.8384",y2:"19.1127",gradientUnits:"userSpaceOnUse",children:[Object(l.jsx)("stop",{stopColor:"#1EBCFF"}),Object(l.jsx)("stop",{offset:"1",stopColor:"#007AFF"})]})]})]}),y=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),r=Object(i.a)(n,2),u=r[0],j=r[1];return Object(c.useEffect)((function(){fetch("https://extreme-ip-lookup.com/json/").then((function(e){return e.json()})).then((function(e){"united kingdom"===e.country.toLowerCase()&&j(!0),a(e.country)})).catch((function(e){console.log("Request failed",e)}))}),[s]),Object(l.jsx)("div",{className:"roi-container",children:""===s?f:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsx)(m,{isForUK:u})]})})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,34)).then((function(t){var s=t.getCLS,l=t.getFID,c=t.getFCP,a=t.getLCP,n=t.getTTFB;s(e),l(e),c(e),a(e),n(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),C()}},[[33,1,2]]]);
//# sourceMappingURL=main.15cf3120.chunk.js.map