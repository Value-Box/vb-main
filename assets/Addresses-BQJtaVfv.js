import{r as a,j as e,L as F}from"./index-ByqkLDD1.js";import{S as d}from"./Select-M4copnj_.js";import{I as h}from"./Input-66Q8htHM.js";function P(){const[p,m]=a.useState(1),[u,c]=a.useState(!1),[t,i]=a.useState("Home"),[l,f]=a.useState(!1),[n,j]=a.useState(!0),[g,b]=a.useState(""),[N,v]=a.useState(""),[w,y]=a.useState(""),[o,k]=a.useState(""),[x,A]=a.useState(""),S=[{id:1,name:"Farman Haris",phone:"+92123456789",address:"135- Mian House, Garden Town Lahore",city:"Lahore - Garden Town, Punjab, Pakistan",tag:"Office",isDefault:!0},{id:2,name:"Farman Haris",phone:"+92123456789",address:"135- Mian House, Garden Town Lahore",city:"Lahore - Garden Town, Punjab, Pakistan",tag:"Home",isDefault:!1}],r=[{value:"punjab",label:"Punjab"},{value:"kpk",label:"Kpk"},{value:"sindh",label:"Sindh"},{value:"blochistan",label:"Blochistan"}],C=s=>{s.preventDefault(),console.log(o),console.log(x)};return e.jsxs("div",{className:" mx-auto max-w-[1920px] w-full flex md:hidden pb-5",children:[e.jsxs("button",{className:"flex items-center p-2 bg-[#FCFCFC] border-b border-[#F2F2F2] w-full ",onClick:()=>c(!1),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:e.jsx("path",{d:"M21 12L15 18L21 24",stroke:"#333333","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"})})," ",e.jsx("span",{children:"Add Shipping Address"})]}),u?e.jsxs("form",{onSubmit:C,className:"flex flex-col justify-between h-full mt-2 px-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mt-1",children:[e.jsxs("span",{className:"flex items-center gap-1 mb-1",children:["Country/Region :",e.jsx("span",{className:"text-[#EEA500] flex ",children:"*"})]}),e.jsx(d,{options:r,value:g,onChange:s=>b(s.target.value),placeholder:"Please Select"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("span",{className:"flex items-center gap-1 mb-1",children:["Province :",e.jsx("span",{className:"text-[#EEA500] flex ",children:"*"})]}),e.jsx(d,{options:r,value:N,onChange:s=>v(s.target.value),placeholder:"Please Select"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("span",{className:"flex items-center gap-1 mb-1",children:["Region/City/Area :",e.jsx("span",{className:"text-[#EEA500] flex ",children:"*"})]}),e.jsx(d,{options:r,value:w,onChange:s=>y(s.target.value),placeholder:"Please Select"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("span",{className:"flex items-center gap-1 mb-1",children:["Address :",e.jsx("span",{className:"text-[#EEA500] flex ",children:"*"})]}),e.jsx(h,{placeholder:"Please Input",value:o,type:"text",name:"address",onChange:s=>k(s.target.value)})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("span",{className:"block mb-1",children:"Landmark (Option) : "}),e.jsx(h,{placeholder:"Please Input",value:x,type:"text",name:"address",onChange:s=>A(s.target.value)})]})]}),e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx("span",{className:"text-gray-700 font-medium",children:"Location type"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"location",value:"Home",checked:t==="Home",onChange:()=>i("Home"),className:"hidden"}),e.jsx("span",{className:`w-5 h-5 border-2 rounded-full flex items-center justify-center ${t==="Home"?"border-[#002882]":"border-gray-400"}`,children:t==="Home"&&e.jsx("span",{className:"w-3 h-3 bg-[#002882] rounded-full"})}),"Home"]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"location",value:"Office",checked:t==="Office",onChange:()=>i("Office"),className:"hidden"}),e.jsx("span",{className:`w-5 h-5 border-2 rounded-full flex items-center justify-center ${t==="Office"?"border-[#002882]":"border-gray-400"}`,children:t==="Office"&&e.jsx("span",{className:"w-3 h-3 bg-[#002882] rounded-full"})}),"Office"]})]})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:l,onChange:()=>f(!l),className:"hidden"}),e.jsx("span",{className:`w-5 h-5 border-2 rounded-[4px] flex items-center justify-center ${l?"bg-[#002882] border-[#002882]":"border-gray-400"}`,children:l&&e.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"text-gray-700",children:"Default Shipping Address"})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:n,onChange:()=>j(!n),className:"hidden"}),e.jsx("span",{className:`w-5 h-5 border-2 rounded-[4px] flex items-center justify-center ${n?"bg-[#002882] border-[#002882]":"border-gray-400"}`,children:n&&e.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"text-gray-700",children:"Default Billing Address"})]})]}),e.jsx("button",{className:"bg-[#002882] rounded-[5px] text-white w-full mt-4 py-2 ",children:"Save"})]}):e.jsxs("div",{className:" bg-[#F2F2F2] flex flex-col gap-3 h-screen",children:[e.jsx(F,{to:"/Checkout",className:"flex items-center p-2 bg-[#FCFCFC] border-b border-[#F2F2F2] ",children:e.jsx("span",{children:"Select Shipping Address"})}),e.jsx("div",{className:"px-4",children:e.jsx("button",{className:`bg-[#E6EAF3] w-full flex items-center justify-center gap-2 border border-[#002882] \r
    px-4 py-3 rounded-[5px] text-[#002882] font-semibold transition`,onClick:()=>c(!0),children:"Add New Address"})}),e.jsx("div",{className:"space-y-4",children:S.map(s=>e.jsxs("div",{onClick:()=>m(s.id),className:"p-4 flex items-start gap-3 bg-[#FCFCFC] border-b border-[#F2F2F2]",children:[e.jsx("input",{type:"radio",checked:p===s.id,readOnly:!0,className:"w-5 h-5 text-[#0032A3] accent-[#0032A3] focus:ring-[#0032A3] hover:ring-[#0032A3] checked:bg-[#0032A3] checked:border-[#0032A3]"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("p",{className:"text-[#999]",children:[e.jsx("span",{className:"text-[#1A1A1A] font-semibold ",children:s.name}),", ",s.phone]}),e.jsx("p",{className:"text-sm text-[#999]",children:s.address}),e.jsx("p",{className:"text-sm text-[#999]",children:s.city}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("span",{className:" text-[#666] border border-[#666] px-2 py-1 text-xs rounded",children:s.tag}),s.isDefault&&e.jsx("span",{className:" text-[#F04438] border border-[#F04438] px-2 py-1 text-xs rounded",children:"Default shipping address"})]})]})]},s.id))})]})]})}export{P as default};
