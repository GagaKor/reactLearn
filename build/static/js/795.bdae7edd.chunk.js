"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[795],{6478:function(e,n,r){var a=r(4569),t=r.n(a)().create({baseURL:"https://api.gagakor.xyz",timeout:3600});n.Z=t},7795:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var a=r(2982),t=r(7762),i=r(4108),c=r(5861),s=r(885),l=r(3504),u=r(1578),m=r(2791),o=r(6478),d=r(6019),v=r(3345),f=r(184),x=function(){var e=(0,d.TL)(),n=(0,d.CG)((function(e){return e.game})).game,r=(0,m.useState)({round:0,lotto_number:[]}),x=(0,s.Z)(r,2),h=x[0],b=x[1],N=(0,m.useState)(1),_=(0,s.Z)(N,2),g=_[0],p=_[1],j=(0,m.useState)(0),k=(0,s.Z)(j,2),y=k[0],w=k[1],C=(0,m.useState)(21),Z=(0,s.Z)(C,2),S=Z[0],T=Z[1],M=(0,m.useState)(""),E=(0,s.Z)(M,2),K=E[0],D=E[1],G=(0,m.useState)({min:106,max:170}),L=(0,s.Z)(G,2),R=L[0],H=L[1],$=(0,m.useState)([]),I=(0,s.Z)($,2),U=I[0],q=I[1],z=(0,m.useState)([]),A=(0,s.Z)(z,2),J=A[0],O=A[1];function V(e){return e.map((function(e){return{id:Math.random().toString(36).substring(2,6),value:e}}))}var B=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){var n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/lotto/thisweek");case 2:n=e.sent,r={round:n.data[0].round,lotto_number:JSON.parse(n.data[0].lotto_number)},b(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function F(e){if(""===e.target.value||function(e){return/^(\s|\d)+$/.test(e)}(e.target.value)){if(Number(e.target.value)<0&&(e.target.value=""),"deviation"===e.target.name&&Number(e.target.value)>=0){var n=Number(e.target.value);n>42&&(e.target.value="42",n=42),console.log("$$"),w(n)}if("rangeMin"===e.target.name){var r=Number(e.target.value);r>200&&(r=200);var a={max:R.max,min:r};H(a)}if("rangeMax"===e.target.name){var t=Number(e.target.value);t>255&&(t=255);var i={max:t,min:R.min};H(i)}}}(0,m.useEffect)((function(){B(),p(n.playGame),w(n.deviation),q(V(n.include)),O(V(n.exclude)),D(n.consecution);var e={max:n.max,min:n.min};H(e);var r,a=S,i=(0,t.Z)(n.include);try{for(i.s();!(r=i.n()).done;){var c=r.value;c>6&&(a+=c)}}catch(s){i.e(s)}finally{i.f()}T(a)}),[]);var P=function(e){p(Number(e.currentTarget.id))},Q=function(e){D(e.currentTarget.id)},W=function(e){var n=Number(e.currentTarget.value),r=Math.random().toString(36).substring(2,6);if("Enter"===e.key&&n>0&&n<46){if("include"===e.currentTarget.id&&U.length<6&&U.filter((function(e){return e.value===n})).length<1&&J.filter((function(e){return e.value===n})).length<1){var t={id:r,value:n};if(n>6)T(S+n);var i=[].concat((0,a.Z)(U),[t]);i.sort((function(e,n){return e.value-n.value})),q(i)}if("exclude"===e.currentTarget.id&&J.length<39&&J.filter((function(e){return e.value===n})).length<1&&U.filter((function(e){return e.value===n})).length<1){var c={id:r,value:n},s=[].concat((0,a.Z)(J),[c]);s.sort((function(e,n){return e.value-n.value})),O(s)}e.currentTarget.value="",e.preventDefault()}},X=function(e){var n=e.currentTarget.id,r=U.find((function(e){return e.id===n}));if(r&&r.value>6){var t=S-r.value;T(t)}var i=U.filter((function(e){return e.id!==n}));q((0,a.Z)(i))},Y=function(e){var n=e.currentTarget.id,r=J.filter((function(e){return e.id!==n}));O((0,a.Z)(r))};return(0,f.jsxs)("div",{className:"playLotto-container",children:[(0,f.jsx)("div",{className:"win-title",children:(0,f.jsxs)("p",{children:["This week","'","s lotto"]})}),(0,f.jsxs)("div",{className:"win-number-container",children:[(0,f.jsx)("span",{className:"win-number win-number--one",children:h.lotto_number[0]}),(0,f.jsx)("span",{className:"win-number win-number--two",children:h.lotto_number[1]}),(0,f.jsx)("span",{className:"win-number win-number--three",children:h.lotto_number[2]}),(0,f.jsx)("span",{className:"win-number win-number--four",children:h.lotto_number[3]}),(0,f.jsx)("span",{className:"win-number win-number--five",children:h.lotto_number[4]}),(0,f.jsx)("span",{className:"win-number win-number--six",children:h.lotto_number[5]})]}),(0,f.jsxs)("div",{className:"number-form",children:[(0,f.jsxs)("div",{className:"number-form-list",children:[(0,f.jsx)("div",{className:"number-form__title",children:"Number of Games"}),(0,f.jsxs)("div",{className:"number-form__number",children:[(0,f.jsx)("div",{className:"number-form__gamecheck ".concat(1===g?"check-click":""),id:"1",onClick:P,children:"1"}),(0,f.jsx)("div",{className:"number-form__gamecheck ".concat(2===g?"check-click":""),id:"2",onClick:P,children:"2"}),(0,f.jsx)("div",{className:"number-form__gamecheck ".concat(3===g?"check-click":""),id:"3",onClick:P,children:"3"}),(0,f.jsx)("div",{className:"number-form__gamecheck ".concat(4===g?"check-click":""),id:"4",onClick:P,children:"4"}),(0,f.jsx)("div",{className:"number-form__gamecheck ".concat(5===g?"check-click":""),id:"5",onClick:P,children:"5"})]})]}),(0,f.jsxs)("div",{className:"number-form-list",children:[(0,f.jsx)("div",{className:"form-list__title",children:"Deviation Max:42"}),(0,f.jsx)("input",{type:"text",name:"deviation",enterKeyHint:"enter",defaultValue:y,onChange:F,className:"number-form__input"})]})]}),(0,f.jsxs)("div",{className:"number-form",children:[(0,f.jsxs)("div",{className:"number-form-list",children:[(0,f.jsx)("div",{className:"number-form__title",children:"Consecution"}),(0,f.jsxs)("div",{className:"number-form__number",children:[(0,f.jsx)("div",{className:"number-form__check ".concat("on"===K?"check-click":""),id:"on",onClick:Q,children:"Include"}),(0,f.jsx)("div",{className:"number-form__check ".concat("off"===K?"check-click":""),id:"off",onClick:Q,children:"exclude"}),(0,f.jsx)("div",{className:"number-form__check ".concat("any"===K?"check-click":""),id:"any",onClick:Q,children:"Any"})]})]}),(0,f.jsxs)("div",{className:"number-form-list",children:[(0,f.jsx)("div",{className:"number-form__title",children:"Range"}),(0,f.jsxs)("div",{className:"number-form__number",children:[(0,f.jsx)("input",{className:"number-form__range_input",name:"rangeMin",type:"text",value:R.min,onChange:F}),(0,f.jsx)("span",{children:(0,f.jsx)(u.q39,{})}),(0,f.jsx)("input",{className:"number-form__range_input",name:"rangeMax",type:"text",value:R.max,onChange:F})]})]})]}),(0,f.jsxs)("div",{className:"form-list",children:[(0,f.jsx)("div",{className:"form-list__title",children:"Included Number"}),(0,f.jsx)("input",{className:"form-list__input",type:"text",placeholder:"Enter Number",id:"include",name:"include",enterKeyHint:"enter",onKeyDown:W})]}),(0,f.jsx)("div",{className:"reserved-box",children:U.map((function(e){return(0,f.jsx)("div",{id:e.id,className:"reserved-value",onClick:X,children:e.value},e.id)}))}),(0,f.jsxs)("div",{className:"form-list",children:[(0,f.jsx)("div",{className:"form-list__title",children:"Exclusion Number"}),(0,f.jsx)("input",{className:"form-list__input",type:"text",placeholder:"Enter Number",id:"exclude",name:"exclude",enterKeyHint:"enter",onKeyDown:W})]}),(0,f.jsx)("div",{className:"reserved-box",children:J.map((function(e){return(0,f.jsx)("div",{id:e.id,className:"reserved-value",onClick:Y,children:e.value},e.id)}))}),(0,f.jsx)(l.rU,{to:"/ResultLotto",onClick:function(){var n=U.map((function(e){return e.value})),r=J.map((function(e){return e.value})),a=R;R.min<S&&(a={max:R.max,min:S}),R.max<22&&(a.max=22),a.min>a.max&&(a.max=a.min+10);var t={playGame:g,deviation:y,include:n,exclude:r,consecution:K,max:a.max,min:a.min};e((0,v.y6)(t))},className:"text-decoration-none",children:(0,f.jsx)("div",{className:"submit-container",children:"Receive"})})]})}}}]);
//# sourceMappingURL=795.bdae7edd.chunk.js.map