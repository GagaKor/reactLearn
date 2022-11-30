"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[795],{6478:function(e,n,r){var t=r(4569),a=r.n(t)().create({baseURL:"https://api.gagakor.xyz",timeout:3600});n.Z=a},7795:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var t=r(2982),a=r(4108),i=r(5861),u=r(885),s=r(3504),c=r(8820),l=r(1578),m=r(2791),o=r(6478),d=r(6019),f=r(3345),v=r(184),x=function(){var e=(0,d.TL)(),n=(0,d.CG)((function(e){return e.game})).game,r=(0,m.useState)({round:0,lotto_number:[]}),x=(0,u.Z)(r,2),h=x[0],b=x[1],N=(0,m.useState)(1),p=(0,u.Z)(N,2),j=p[0],_=p[1],g=(0,m.useState)(0),k=(0,u.Z)(g,2),w=k[0],y=k[1],Z=(0,m.useState)(255),C=(0,u.Z)(Z,2),S=C[0],T=C[1],M=(0,m.useState)(""),E=(0,u.Z)(M,2),K=E[0],D=E[1],G=(0,m.useState)({min:106,max:170}),L=(0,u.Z)(G,2),R=L[0],z=L[1],H=(0,m.useState)([]),V=(0,u.Z)(H,2),I=V[0],O=V[1],U=(0,m.useState)([]),q=(0,u.Z)(U,2),A=q[0],J=q[1];function W(e){return e.map((function(e){return{id:Math.random().toString(36).substring(2,6),value:e}}))}var B=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/lotto/thisweek");case 2:n=e.sent,r={round:n.data[0].round,lotto_number:JSON.parse(n.data[0].lotto_number)},b(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function F(e){if(Number(e.target.value)<0&&(e.target.value=""),"deviation"===e.target.name&&Number(e.target.value)>=0){if(Number(e.target.value)>42)return void(e.target.value="");y(Number(e.target.value))}if("rangeMin"===e.target.name){if(Number(e.target.value)<21)return;var n={max:R.max,min:R.min};z(n)}if("rangeMax"===e.target.name){var r=Number(e.target.value);if(r>S)return;var t={max:r,min:R.min};z(t)}}(0,m.useEffect)((function(){B(),_(n.playGame),y(n.deviation),O(W(n.include)),J(W(n.exclude)),D(n.consecution);var e={max:n.max,min:n.min};z(e)}),[]);var P=function(e){D(e.currentTarget.id)},Q=function(e){var n=Number(e.currentTarget.value),r=Math.random().toString(36).substring(2,6);if("Enter"===e.key&&n>0&&n<46){if("include"===e.currentTarget.id&&I.length<6&&I.filter((function(e){return e.value===n})).length<1&&A.filter((function(e){return e.value===n})).length<1){var a={id:r,value:n},i=[].concat((0,t.Z)(I),[a]);i.sort((function(e,n){return e.value-n.value})),O(i)}if("exclude"===e.currentTarget.id&&A.length<39&&A.filter((function(e){return e.value===n})).length<1&&I.filter((function(e){return e.value===n})).length<1){T(S-n);var u={id:r,value:n},s=[].concat((0,t.Z)(A),[u]);s.sort((function(e,n){return e.value-n.value})),J(s)}e.currentTarget.value="",e.preventDefault()}},X=function(e){var n=e.currentTarget.id,r=I.filter((function(e){return e.id!==n}));O((0,t.Z)(r))},Y=function(e){var n=e.currentTarget.id,r=A.find((function(e){return e.id}));if(r){var a=S+r.value;T(a)}var i=A.filter((function(e){return e.id!==n}));J((0,t.Z)(i))},$=function(e){e?j<5&&_((function(e){return e+1})):j>1&&_((function(e){return e-1}))};return(0,v.jsxs)("div",{className:"playLotto-container",children:[(0,v.jsx)("div",{className:"win-title",children:(0,v.jsxs)("p",{children:["This week","'","s lotto"]})}),(0,v.jsxs)("div",{className:"win-number-container",children:[(0,v.jsx)("span",{className:"win-number win-number--one",children:h.lotto_number[0]}),(0,v.jsx)("span",{className:"win-number win-number--two",children:h.lotto_number[1]}),(0,v.jsx)("span",{className:"win-number win-number--three",children:h.lotto_number[2]}),(0,v.jsx)("span",{className:"win-number win-number--four",children:h.lotto_number[3]}),(0,v.jsx)("span",{className:"win-number win-number--five",children:h.lotto_number[4]}),(0,v.jsx)("span",{className:"win-number win-number--six",children:h.lotto_number[5]})]}),(0,v.jsxs)("div",{className:"number-form",children:[(0,v.jsxs)("div",{className:"number-form-list",children:[(0,v.jsx)("div",{className:"number-form__title",children:"Number of Games"}),(0,v.jsxs)("div",{className:"number-form__number",children:[(0,v.jsx)("span",{onClick:function(){return $(!0)},children:(0,v.jsx)(c.OzW,{})}),(0,v.jsx)("span",{children:j}),(0,v.jsx)("span",{onClick:function(){return $(!1)},children:(0,v.jsx)(c.n6z,{})})]})]}),(0,v.jsxs)("div",{className:"number-form-list",children:[(0,v.jsx)("div",{className:"form-list__title",children:"Deviation Max:42"}),(0,v.jsx)("input",{type:"text",name:"deviation",enterKeyHint:"enter",defaultValue:0,onChange:F,className:"number-form__input"})]})]}),(0,v.jsxs)("div",{className:"number-form",children:[(0,v.jsxs)("div",{className:"number-form-list",children:[(0,v.jsx)("div",{className:"number-form__title",children:"Consecution"}),(0,v.jsxs)("div",{className:"number-form__number",children:[(0,v.jsx)("div",{className:"number-form__check ".concat("on"===K?"check-click":""),id:"on",onClick:P,children:"Include"}),(0,v.jsx)("div",{className:"number-form__check ".concat("off"===K?"check-click":""),id:"off",onClick:P,children:"exclude"}),(0,v.jsx)("div",{className:"number-form__check ".concat("any"===K?"check-click":""),id:"any",onClick:P,children:"Any"})]})]}),(0,v.jsxs)("div",{className:"number-form-list",children:[(0,v.jsx)("div",{className:"number-form__title",children:"Range"}),(0,v.jsxs)("div",{className:"number-form__number",children:[(0,v.jsx)("input",{className:"number-form__range_input",name:"rangeMin",type:"number",defaultValue:106,min:21,max:200,onChange:F}),(0,v.jsx)("span",{children:(0,v.jsx)(l.q39,{})}),(0,v.jsx)("input",{className:"number-form__range_input",name:"rangeMax",type:"number",defaultValue:170,min:22,max:S,onChange:F})]})]})]}),(0,v.jsxs)("div",{className:"form-list",children:[(0,v.jsx)("div",{className:"form-list__title",children:"Included Number"}),(0,v.jsx)("input",{className:"form-list__input",type:"text",placeholder:"Enter Number",id:"include",name:"include",enterKeyHint:"enter",onKeyDown:Q})]}),(0,v.jsx)("div",{className:"reserved-box",children:I.map((function(e){return(0,v.jsx)("div",{id:e.id,className:"reserved-value",onClick:X,children:e.value},e.id)}))}),(0,v.jsxs)("div",{className:"form-list",children:[(0,v.jsx)("div",{className:"form-list__title",children:"Exclusion Number"}),(0,v.jsx)("input",{className:"form-list__input",type:"text",placeholder:"Enter Number",id:"exclude",name:"exclude",enterKeyHint:"enter",onKeyDown:Q})]}),(0,v.jsx)("div",{className:"reserved-box",children:A.map((function(e){return(0,v.jsx)("div",{id:e.id,className:"reserved-value",onClick:Y,children:e.value},e.id)}))}),(0,v.jsx)(s.rU,{to:"/ResultLotto",onClick:function(){var n=I.map((function(e){return e.value})),r=A.map((function(e){return e.value}));console.log(S);var t=R;R.max>S&&(t={max:S,min:R.min});var a={playGame:j,deviation:w,include:n,exclude:r,consecution:K,max:t.max,min:t.min};e((0,f.y6)(a))},className:"text-decoration-none",children:(0,v.jsx)("div",{className:"submit-container",children:"Receive"})})]})}}}]);
//# sourceMappingURL=795.2986ab9a.chunk.js.map