(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592,931],{7533:function(e,l,t){Promise.resolve().then(t.bind(t,1936))},1936:function(e,l,t){"use strict";var a=t(7437),r=t(2265);l.default=()=>{let[e,l]=(0,r.useState)(15),[t,s]=(0,r.useState)(50),[n,u]=(0,r.useState)(50),c=(e,l)=>Math.floor(e/l)*l,i=e=>{l(parseFloat(e))},d=()=>{if(isNaN(e)){l(0);return}let t=c(e,15);l(t),u(t/15*50),s(t/15*50)},o=e=>{let t=parseFloat(e);if(isNaN(t)){u(0);return}let a=c(15*t/50,15);l(a),u(t),s(a/15*50)},x=e=>{let t=parseFloat(e);if(isNaN(t)){s(0);return}let a=c(15*t/50,15);l(a),s(t),u(a/15*50)};return(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center gap-12 px-4 py-16",children:[(0,a.jsx)("h1",{className:"text-xl font-extrabold tracking-tight sm:text-[4rem]",children:"Stardust Calculator"}),(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsxs)("div",{className:"grid max-w-md grid-cols-3 gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("label",{className:"mb-1",children:"Fuel"}),(0,a.jsx)("input",{className:"rounded border border-gray-300 p-2 text-black",title:"Fuel",type:"number",value:e,onChange:e=>i(e.target.value),onBlur:d})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("label",{className:"mb-1",children:"Stardust Ore"}),(0,a.jsx)("input",{className:"rounded border border-gray-300 p-2 text-black",title:"Stardust Ore",type:"number",value:t,onChange:e=>x(e.target.value),onBlur:d})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("label",{className:"mb-1",children:"Stardust Source"}),(0,a.jsx)("input",{className:"rounded border border-gray-300 p-2 text-black",title:"Stardust Source",type:"number",value:n,onChange:e=>o(e.target.value),onBlur:d})]})]})})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=7533)}),_N_E=e.O()}]);