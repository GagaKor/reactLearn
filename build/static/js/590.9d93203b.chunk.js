"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[590],{6478:function(e,n,i){var c=i(4569),r=i.n(c)().create({baseURL:"https://api.gagakor.xyz",timeout:3600});n.Z=r},9590:function(e,n,i){i.r(n),i.d(n,{default:function(){return m}});var c=i(4108),r=i(5861),a=i(885),s=i(7692),t=i(6478),u=i(6019),l=i(2791),o=i(6871),d=i(184),m=function(){var e=(0,o.s0)(),n=(0,u.CG)((function(e){return e.game})).game,i=n.playGame,m=n.include,x=n.exclude,f=n.deviation,v=n.consecution,h=n.max,p=n.min,b=(0,l.useState)([]),w=(0,a.Z)(b,2),j=w[0],k=w[1],N=(0,l.useState)(),_=(0,a.Z)(N,2),y=_[0],Z=_[1],C=function(){var n=(0,r.Z)((0,c.Z)().mark((function n(){var r,a;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.Z.post("/lotto",{playGame:i,include:m,exclude:x,deviation:f,consecution:v,max:h,min:p});case 3:r=n.sent,a=r.data.map((function(e){return{id:Math.random().toString(36).substring(2,6),value:e}})),k(a),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),alert("Can not resolve your order"),e(-1);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();(0,l.useEffect)((function(){C(),Z(v)}),[]);var g=function(){var e=(0,r.Z)((0,c.Z)().mark((function e(n){var i,r,a,s,u;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.currentTarget.id,e.next=3,t.Z.post("/lotto",{playGame:1,include:m,exclude:x,deviation:f,consecution:y,max:h,min:p});case 3:r=e.sent,a=j.slice(),s=j.findIndex((function(e){return e.id===i})),u={id:i,value:r.data[0]},a.splice(s,1,u),k(a);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),G=function(e){Z(e.currentTarget.id)};return(0,d.jsxs)("div",{className:"resultLotto-container",children:[(0,d.jsx)("div",{className:"win-title",children:(0,d.jsx)("p",{children:"Recommended Number"})}),(0,d.jsx)("div",{className:"number-form",children:(0,d.jsxs)("div",{className:"number-form-list",children:[(0,d.jsx)("div",{className:"number-form__title",children:"Consecution"}),(0,d.jsxs)("div",{className:"number-form__number",children:[(0,d.jsx)("div",{className:"number-form__check ".concat("on"===y?"check-click":""),id:"on",onClick:G,children:"Include"}),(0,d.jsx)("div",{className:"number-form__check ".concat("off"===y?"check-click":""),id:"off",onClick:G,children:"exclude"}),(0,d.jsx)("div",{className:"number-form__check ".concat("any"===y?"check-click":""),id:"any",onClick:G,children:"Any"})]})]})}),(0,d.jsx)("div",{className:"win-section",children:j.map((function(e,n){return(0,d.jsxs)("div",{className:"win-list",id:e.id,children:[(0,d.jsxs)("div",{className:"win-list__idx",children:[n+1," ",(0,d.jsx)("span",{className:"win-list__idx__border"})]}),(0,d.jsxs)("div",{className:"win-list__number-container",children:[(0,d.jsx)("span",{className:"win-number win-number--one",children:e.value[0]}),(0,d.jsx)("span",{className:"win-number win-number--two",children:e.value[1]}),(0,d.jsx)("span",{className:"win-number win-number--three",children:e.value[2]}),(0,d.jsx)("span",{className:"win-number win-number--four",children:e.value[3]}),(0,d.jsx)("span",{className:"win-number win-number--five",children:e.value[4]}),(0,d.jsx)("span",{className:"win-number win-number--six",children:e.value[5]})]}),(0,d.jsx)("div",{id:e.id,onClick:g,children:(0,d.jsx)(s.t5J,{size:20})})]},e.id)}))}),(0,d.jsx)("div",{className:"submit-container",onClick:function(){return e(-1)},children:"Back"})]})}}}]);
//# sourceMappingURL=590.9d93203b.chunk.js.map