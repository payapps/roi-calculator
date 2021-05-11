(this["webpackJsonproi-calculator"]=this["webpackJsonproi-calculator"]||[]).push([[0],{17:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(0),n=a.n(c),r=a(3),i=a.n(r),l=(a(16),a(17),a(2)),o=function(){return Object(s.jsxs)("header",{className:"roi-heading","data-testid":"roi-heading",children:[Object(s.jsx)("h1",{children:"SAVINGS CALCULATOR"}),Object(s.jsx)("p",{children:"See how much time and money you could be saving with Payapps!!!"})]})},u=function(e){var t=e.setNumOfClaims,a=e.restrictLetterInput;return Object(s.jsxs)("div",{className:"row","data-testid":"roi-claims-number",children:[Object(s.jsx)("div",{className:"text",title:"Claims processed per month?",children:"Claims processed per month?"}),Object(s.jsx)("div",{className:"col1",children:Object(s.jsx)("input",{type:"text",defaultValue:200,placeholder:"0",onChange:function(e){return t(e.target.value)},onKeyDown:function(e){return a(e)},maxLength:"9"})}),Object(s.jsx)("div",{className:"col2",children:"\xa0"})]})},d=function(e){var t=e.setAssessmentTime,a=e.restrictLetterInput,n=Object(c.useState)("02"),r=Object(l.a)(n,2),i=r[0],o=r[1],u=Object(c.useState)("00"),d=Object(l.a)(u,2),j=d[0],m=d[1],h=Number(j),b=Number(i);return Object(c.useEffect)((function(){t(b+h/60)})),Object(s.jsxs)("div",{className:"row","data-testid":"roi-assessment-time",children:[Object(s.jsx)("div",{className:"text",title:"Total time to assess a claim?",children:"Total time to assess a claim?"}),Object(s.jsxs)("div",{className:"col1 roi-calculator__time-wrapper",children:[Object(s.jsx)("input",{className:"roi-calculator__hours",type:"text",defaultValue:i,placeholder:"00",onChange:function(e){return o(e.target.value)},onKeyDown:function(e){return a(e)},maxLength:"2"}),Object(s.jsx)("span",{className:"colon",children:":"}),Object(s.jsx)("input",{className:"roi-calculator__minutes",type:"text",defaultValue:j,placeholder:"00",onChange:function(e){return m(e.target.value)},onKeyDown:function(e){return a(e)},maxLength:"2"})]}),Object(s.jsx)("div",{className:"col2",children:"hrs : mins"})]})},j=function(e){var t=e.setHourlyRate,a=e.isUnitedKingdom,c=e.restrictLetterInput;return Object(s.jsxs)("div",{className:"row","data-testid":"roi-hourly-rate",children:[Object(s.jsxs)("div",{className:"text",title:"Average Contract Administrator hourly wage (f you\u2019re unsure, use 75)",children:["Average Contract Administrator hourly wage ",Object(s.jsxs)("span",{className:"small-text",children:["(if you\u2019re unsure, use ",a?"\xa328":"$75"," per hour)"]})]}),Object(s.jsxs)("div",{className:"col1 roi-calculator__wage-input-wrapper",children:[Object(s.jsx)("span",{className:"roi-calculator__wage-currency",children:a?"\xa3":"$"}),Object(s.jsx)("input",{type:"text",className:"roi-calculator__wage",defaultValue:a?28:75,placeholder:"0",onChange:function(e){return t(e.target.value)},onKeyDown:function(e){return c(e)}})]}),Object(s.jsx)("div",{className:"col2",children:"per hour"})]})},m=a(10),h=a(4),b={option:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{backgroundColor:"none",cursor:"pointer",height:"42px"})},menu:function(){return{background:"#13242E",width:"200px",zIndex:"2",display:"flex",flexDirection:"column",position:"absolute"}},control:function(){return{display:"flex",alignItems:"center",height:"42px"}},singleValue:function(e,t){var a=t.isDisabled?.5:1;return Object(h.a)(Object(h.a)({},e),{},{opacity:a,transition:"opacity 300ms",background:"none",display:"flex",color:"#ffffff",height:"42px",alignItems:"center",zIndex:"0"})},indicatorSeparator:function(){return{display:"none"}}},p=function(e){var t=e.setNumOfPages,a=e.setArchivalCost,c=e.restrictLetterInput,n=e.hasPhysicalPayments,r=e.setPhysicalPayments,i=[{label:"no",value:!1},{label:"yes",value:!0}],l=n.value?null:Object(s.jsx)("div",{className:"overlay"});return Object(s.jsxs)("div",{className:"roi-calculator__physical-payments","data-testid":"roi-physical-payments",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"text",title:"Do you mail physical payment schedules?",children:"Do you mail physical payment schedules?"}),Object(s.jsx)("div",{className:"col1",children:Object(s.jsx)(m.a,{options:i,onChange:function(e){return r(e)},defaultValue:i[0],"aria-label":"turnover tier",isSearchable:!1,menuPlacement:"auto",styles:b})}),Object(s.jsx)("div",{className:"col2",children:"\xa0"})]}),Object(s.jsxs)("div",{className:"row",children:[l,Object(s.jsx)("div",{className:"text",title:"Average number of pages printed per claim",children:"Average number of pages printed per claim"}),Object(s.jsx)("div",{className:"col1",children:Object(s.jsx)("input",{type:"text",placeholder:"0",onChange:function(e){return t(e.target.value)},onKeyDown:function(e){return c(e)}})}),Object(s.jsx)("div",{className:"col2",children:"\xa0"})]}),Object(s.jsxs)("div",{className:"row",children:[l,Object(s.jsx)("div",{className:"text",title:"Courier and archival costs",children:"Courier and archival costs"}),Object(s.jsx)("div",{className:"col1 roi-calculator__archival-input-wrapper",children:Object(s.jsx)("input",{type:"text",className:"roi-calculator__archival-cost",placeholder:"0",onChange:function(e){return a(e.target.value)},onKeyDown:function(e){return c(e)}})}),Object(s.jsx)("div",{className:"col2",children:"per annum"})]})]})},O=function(e){var t=e.moneySavedAnnually,a=e.timeSaved,c=e.isUnitedKingdom,n=0===t&&a<1?Object(s.jsx)("div",{className:"overlay"}):null,r=t.toLocaleString("en-AU",{maximumFractionDigits:2,minimumFractionDigits:2});return Object(s.jsx)("section",{className:"roi-calculator__results","data-testid":"roi-results",children:Object(s.jsxs)("div",{className:"roi-calculator__results__savings",children:[Object(s.jsx)("p",{children:"With Payapps, you could save"}),Object(s.jsxs)("div",{className:"roi-calculator__results__result-container",children:[n,Object(s.jsxs)("p",{children:[Object(s.jsxs)("span",{className:"roi-calculator__results__number",children:[c?"\xa3":"$",r]}),Object(s.jsx)("span",{className:"roi-calculator__results__units",children:" pa"})]}),Object(s.jsx)("p",{children:"or"}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{className:"roi-calculator__results__number",children:a.toFixed(0)}),Object(s.jsx)("span",{className:"roi-calculator__results__units",children:" hrs/month"})]})]})]})})},x=function(e){var t=e.isUnitedKingdom,a=Object(c.useState)(200),n=Object(l.a)(a,2),r=n[0],i=n[1],o=Object(c.useState)(2),m=Object(l.a)(o,2),h=m[0],b=m[1],x=Object(c.useState)(t?28:75),v=Object(l.a)(x,2),y=v[0],f=v[1],g=Object(c.useState)(0),N=Object(l.a)(g,2),_=N[0],C=N[1],w=Object(c.useState)(!1),S=Object(l.a)(w,2),L=S[0],A=S[1],I=Object(c.useState)(0),D=Object(l.a)(I,2),P=D[0],K=D[1],k=r<1||h<.01||y<.01||""===r||""===h||""===y,F=h<1.5?h/2:.75,T=(t?28:75)*F*r*12,U=y*h,V=L.value?.05*_*12+12*P:0,E=k?0:U*r*12+V-T,R=k?0:r*h-r*F,$=function(e){-1!==[46,8,9,27,13,110].indexOf(e.keyCode)||65===e.keyCode&&!0===e.ctrlKey||e.keyCode>=35&&e.keyCode<=39||(e.shiftKey||e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105)&&e.preventDefault()};return Object(s.jsxs)("section",{className:"roi-calculator","data-testid":"roi-calculator",children:[Object(s.jsx)(u,{setNumOfClaims:i,restrictLetterInput:$}),Object(s.jsx)(d,{setAssessmentTime:b,restrictLetterInput:$}),Object(s.jsx)(j,{setHourlyRate:f,isUnitedKingdom:t,restrictLetterInput:$}),t?null:Object(s.jsx)(p,{setNumOfPages:C,setArchivalCost:K,restrictLetterInput:$,hasPhysicalPayments:L,setPhysicalPayments:A}),Object(s.jsx)(O,{moneySavedAnnually:E,timeSaved:R,isUnitedKingdom:t})]})},v=function(){var e=Intl.DateTimeFormat().resolvedOptions().timeZone,t=Object(c.useState)(!1),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){"europe/london"===e.toLocaleLowerCase()&&r(!0)})),Object(s.jsxs)("div",{className:"roi-container","data-testid":"roi-container",children:[Object(s.jsx)(o,{}),Object(s.jsx)(x,{isUnitedKingdom:n})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.9f756fe5.chunk.js.map