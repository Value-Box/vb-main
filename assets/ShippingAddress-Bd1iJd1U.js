import{r as l,j as e,N as $}from"./index-BxoUBbD-.js";import{A as G}from"./AccountSideBar-BfAhJoXT.js";import{C as u}from"./CheckBox-Cini52WQ.js";import{I as a}from"./Input-Cp-In5Q3.js";import{S as r}from"./Select-CqDzJQvo.js";const f=[{id:1,name:"Farman Haris",phone:"92345 8956325",address:"135 - Mian House, Garden Town Lahore",fullAddress:"Block A, Johar Town, Lahore, Punjab, Pakistan"},{id:2,name:"Farman Haris",phone:"92345 8956325",address:"135 - Mian House, Garden Town Lahore",fullAddress:"Block A, Johar Town, Lahore, Punjab, Pakistan"},{id:3,name:"Farman Haris",phone:"92345 8956325",address:"135 - Mian House, Garden Town Lahore",fullAddress:"Block A, Johar Town, Lahore, Punjab, Pakistan"}];function ee(){const[j,g]=l.useState(""),[i,N]=l.useState(""),[v,b]=l.useState(""),[C,w]=l.useState(""),[y,A]=l.useState(""),[o,F]=l.useState(""),[S,k]=l.useState(""),[H,L]=l.useState(""),[D,P]=l.useState(""),[M,B]=l.useState(""),[J,W]=l.useState(1),[z,q]=l.useState(!1),[n,x]=l.useState("Home"),[d,_]=l.useState(!1),[c,E]=l.useState(!0),[O,V]=l.useState(""),[Z,T]=l.useState(""),[I,R]=l.useState(""),t=[{value:"option1",label:"Option1"},{value:"option2",label:"Option2"},{value:"option3",label:"Option3"}],m=s=>{s.preventDefault(),console.log("Form Submitted")},[h,p]=l.useState(!1);return e.jsxs("div",{className:"bg-[#FCFCFC]",children:[e.jsx("div",{className:"w-full mx-auto max-w-[1920px] md:p-6 hidden md:flex ",children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-5 w-full",children:[e.jsx("div",{className:"",children:e.jsx(G,{})}),e.jsx("div",{className:"w-full flex-1 space-y-5",children:e.jsx("main",{className:" flex flex-col md:gap-10",children:e.jsxs("div",{className:"flex flex-col md:gap-5",children:[e.jsxs("div",{className:"bg-white p-6 md:rounded-lg md:border border-[#F2F2F2] flex flex-col gap-5",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Shipping Address (es)"}),e.jsxs("div",{className:"flex items-center gap-2 text-green-600 ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"19",viewBox:"0 0 14 19",fill:"none",children:e.jsx("path",{d:"M7.0026 14.1668C7.44463 14.1668 7.86855 13.9912 8.18112 13.6787C8.49368 13.3661 8.66927 12.9422 8.66927 12.5002C8.66927 12.0581 8.49368 11.6342 8.18112 11.3217C7.86855 11.0091 7.44463 10.8335 7.0026 10.8335C6.56058 10.8335 6.13665 11.0091 5.82409 11.3217C5.51153 11.6342 5.33594 12.0581 5.33594 12.5002C5.33594 12.9422 5.51153 13.3661 5.82409 13.6787C6.13665 13.9912 6.56058 14.1668 7.0026 14.1668ZM12.0026 6.66683C12.4446 6.66683 12.8686 6.84242 13.1811 7.15498C13.4937 7.46755 13.6693 7.89147 13.6693 8.3335V16.6668C13.6693 17.1089 13.4937 17.5328 13.1811 17.8453C12.8686 18.1579 12.4446 18.3335 12.0026 18.3335H2.0026C1.56058 18.3335 1.13665 18.1579 0.824093 17.8453C0.511532 17.5328 0.335938 17.1089 0.335938 16.6668V8.3335C0.335938 7.89147 0.511532 7.46755 0.824093 7.15498C1.13665 6.84242 1.56058 6.66683 2.0026 6.66683H2.83594V5.00016C2.83594 3.89509 3.27492 2.83529 4.05633 2.05388C4.83773 1.27248 5.89754 0.833496 7.0026 0.833496C7.54978 0.833496 8.09159 0.94127 8.59712 1.15066C9.10264 1.36006 9.56197 1.66697 9.94888 2.05388C10.3358 2.4408 10.6427 2.90013 10.8521 3.40565C11.0615 3.91117 11.1693 4.45299 11.1693 5.00016V6.66683H12.0026ZM7.0026 2.50016C6.33956 2.50016 5.70368 2.76355 5.23484 3.2324C4.766 3.70124 4.5026 4.33712 4.5026 5.00016V6.66683H9.5026V5.00016C9.5026 4.33712 9.23921 3.70124 8.77037 3.2324C8.30153 2.76355 7.66565 2.50016 7.0026 2.50016Z",fill:"#12B76A"})}),e.jsx("span",{children:"All Data is secured"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:f.map(s=>e.jsxs("div",{className:"border border-[#F2F2F2] rounded-lg p-5 flex flex-col gap-2.5 bg-[#FCFCFC]",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(u,{}),e.jsx("span",{className:"font-semibold",children:s.isDefault?"Default Address":"Set as Default"})]}),s.isDefault&&e.jsx("span",{className:"bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full",children:"Default"})]}),e.jsxs("p",{className:"font-medium text-lg",children:[s.name,", ",s.phone]}),e.jsx("div",{className:"flex  items-center ",children:e.jsx("span",{className:"text-gray-700",children:s.address})}),e.jsx("p",{className:"text-gray-500 text-sm ",children:s.fullAddress}),e.jsxs("div",{className:"flex space-x-4  text-sm",children:[e.jsx("button",{className:"",children:"Edit"}),e.jsx("span",{children:"|"}),e.jsx("button",{className:"",children:"Delete"}),e.jsx("span",{children:"|"}),e.jsx("button",{className:"text-[#002882] hover:underline",children:"Duplicate"})]})]},s.id))})]}),e.jsxs("div",{className:"bg-white p-5 md:rounded-[5px] md:border-1 border-[#F2F2F2] flex flex-col gap-2.5 justify-around",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Add New Address"}),e.jsxs("form",{onSubmit:m,className:"flex flex-col flex-grow space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:"w-full flex flex-col gap-1",children:[e.jsx("label",{className:"text-gray-600 text-[16px] font-medium",children:"Country/region"}),e.jsx(r,{options:t,placeholder:"Please Select",value:j,onChange:s=>g(s.target.value)})]}),e.jsxs("div",{className:"w-full flex flex-col gap-1",children:[e.jsx("label",{className:"text-gray-600 text-[16px] font-medium",children:"Province"}),e.jsx(r,{options:t,placeholder:"Please Select",value:i,onChange:s=>N(s.target.value)})]})]}),e.jsx("hr",{className:"border-t-[1px] my-5 border-[#F2F2F2]"}),e.jsx("label",{className:"text-gray-600 text-[16px] font-medium",children:"Address"}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx(a,{type:"text",placeholder:"Street Address*",value:v,onChange:s=>b(s.target.value)}),e.jsx(a,{type:"text",placeholder:"Apt, Suite (Optional)",value:C,onChange:s=>w(s.target.value)}),e.jsx(a,{type:"text",placeholder:"Landmark (Optional)",value:y,onChange:s=>A(s.target.value)})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx(r,{options:t,placeholder:"Please Select",value:o,onChange:s=>F(s.target.value)}),e.jsx(r,{options:t,placeholder:"Select Area",value:S,onChange:s=>k(s.target.value)}),e.jsx(a,{type:"text",placeholder:"ZIP Code*",value:H,onChange:s=>L(s.target.value),className:"border p-2 rounded"})]}),e.jsx("hr",{className:"border-t-[1px] my-5 border-[#F2F2F2]"}),e.jsx("label",{className:"text-gray-600 text-[16px] font-medium",children:"Contact Information"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(a,{type:"text",placeholder:"Contact Name*",value:D,onChange:s=>P(s.target.value),className:"border p-2 rounded"}),e.jsx(a,{type:"text",placeholder:"+92 Enter your Phone Number",value:M,onChange:s=>B(s.target.value),className:"border p-2 rounded"})]}),e.jsx("hr",{className:"border-t-[1px] my-5 border-[#F2F2F2]"}),e.jsxs("div",{className:"flex gap-4 ",children:[e.jsxs("button",{type:"submit",className:"flex items-center gap-2 px-10 py-2 bg-[#002882] text-white rounded-md",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M15.0013 10.8334H10.8346V15.0001C10.8346 15.4584 10.4596 15.8334 10.0013 15.8334C9.54297 15.8334 9.16797 15.4584 9.16797 15.0001V10.8334H5.0013C4.54297 10.8334 4.16797 10.4584 4.16797 10.0001C4.16797 9.54175 4.54297 9.16675 5.0013 9.16675H9.16797V5.00008C9.16797 4.54175 9.54297 4.16675 10.0013 4.16675C10.4596 4.16675 10.8346 4.54175 10.8346 5.00008V9.16675H15.0013C15.4596 9.16675 15.8346 9.54175 15.8346 10.0001C15.8346 10.4584 15.4596 10.8334 15.0013 10.8334Z",fill:"#FCFCFC"})})," Add a new address"]}),e.jsx("button",{className:"px-10 py-2 bg-gray-300 text-gray-700 rounded-md",children:"Discard"})]})]})]})]})})})]})}),e.jsx("div",{className:"w-full flex md:hidden bg-[#FCFCFC] ",children:e.jsx("div",{className:"flex flex-col md:flex-row gap-10 w-full",children:e.jsx("div",{className:"w-full flex-1 space-y-5",children:e.jsx("main",{className:" flex flex-col md:gap-10",children:e.jsxs("div",{className:"flex flex-col md:gap-5",children:[!h&&e.jsxs("div",{children:[e.jsx("div",{className:"w-full flex flex-col md:hidden bg-[#FCFCFC] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)]",children:e.jsxs("div",{className:"flex items-center p-4 pr-6 ",children:[e.jsx($,{to:"/OrderDetails",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:e.jsx("path",{d:"M21 12L15 18L21 24",stroke:"#333333","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})}),e.jsx("div",{className:"relative flex-1 items-center",children:e.jsx("span",{className:"text-[18px]",children:"Add Address"})})]})}),e.jsxs("div",{className:"bg-white p-4 md:rounded-lg md:border border-[#FFF] flex flex-col gap-5",children:[e.jsxs("button",{onClick:()=>p(!0),className:"flex px-4 py-2 justify-center items-center gap-2 self-stretch rounded-md border border-[#1A1A1A]",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[e.jsx("path",{d:"M10 18.75C5.175 18.75 1.25 14.825 1.25 10C1.25 5.175 5.175 1.25 10 1.25C14.825 1.25 18.75 5.175 18.75 10C18.75 14.825 14.825 18.75 10 18.75ZM10 2.5C5.8625 2.5 2.5 5.8625 2.5 10C2.5 14.1375 5.8625 17.5 10 17.5C14.1375 17.5 17.5 14.1375 17.5 10C17.5 5.8625 14.1375 2.5 10 2.5Z",fill:"#1A1A1A"}),e.jsx("path",{d:"M10 14.375C9.65 14.375 9.375 14.1 9.375 13.75V6.25C9.375 5.9 9.65 5.625 10 5.625C10.35 5.625 10.625 5.9 10.625 6.25V13.75C10.625 14.1 10.35 14.375 10 14.375Z",fill:"#1A1A1A"}),e.jsx("path",{d:"M13.75 10.625H6.25C5.9 10.625 5.625 10.35 5.625 10C5.625 9.65 5.9 9.375 6.25 9.375H13.75C14.1 9.375 14.375 9.65 14.375 10C14.375 10.35 14.1 10.625 13.75 10.625Z",fill:"#1A1A1A"})]}),"  Add New Address"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:f.map(s=>e.jsxs("div",{className:"border border-[#F2F2F2] rounded-lg p-5 flex flex-col gap-2.5 bg-[#FCFCFC]",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(u,{}),e.jsx("span",{className:"font-semibold",children:s.isDefault?"Default Address":"Set as Default"})]}),s.isDefault&&e.jsx("span",{className:"bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full",children:"Default"})]}),e.jsxs("p",{className:"font-medium text-lg",children:[s.name,", ",s.phone]}),e.jsx("div",{className:"flex  items-center ",children:e.jsx("span",{className:"text-gray-700",children:s.address})}),e.jsx("p",{className:"text-gray-500 text-sm ",children:s.fullAddress}),e.jsxs("div",{className:"flex space-x-4  text-sm",children:[e.jsx("button",{className:"",children:"Edit"}),e.jsx("span",{children:"|"}),e.jsx("button",{className:"",children:"Delete"}),e.jsx("span",{children:"|"}),e.jsx("button",{className:"text-[#002882] hover:underline",children:"Duplicate"})]})]},s.id))})]})]}),h&&e.jsxs("div",{children:[e.jsx("div",{className:"w-full flex flex-col md:hidden bg-[#FCFCFC] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)]",children:e.jsxs("div",{className:"flex items-center p-4 pr-6 ",children:[e.jsx("span",{onClick:()=>p(!1),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:e.jsx("path",{d:"M21 12L15 18L21 24",stroke:"#333333","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})}),e.jsx("div",{className:"relative flex-1 items-center",children:e.jsx("span",{className:"text-[18px]",children:"Add Address"})})]})}),e.jsxs("div",{className:"bg-white p-5 justify-between md:rounded-[5px] md:border-1 border-[#FFF] flex flex-col gap-2.5",children:[e.jsxs("form",{onSubmit:m,className:"flex flex-col justify-between h-full",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mt-1",children:[e.jsxs("span",{className:"flex items-center gap-1 mb-1",children:["Country/Region :",e.jsx("span",{className:"text-[#EEA500] flex ",children:"*"})]}),e.jsx(r,{options:t,value:O,onChange:s=>V(s.target.value),placeholder:"Please Select"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("span",{className:"flex items-center gap-1 mb-1",children:["Province :",e.jsx("span",{className:"text-[#EEA500] flex ",children:"*"})]}),e.jsx(r,{options:t,value:i,onChange:s=>setSelectedProvince(s.target.value),placeholder:"Please Select"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("span",{className:"flex items-center gap-1 mb-1",children:["Region/City/Area :",e.jsx("span",{className:"text-[#EEA500] flex ",children:"*"})]}),e.jsx(r,{options:t,value:o,onChange:s=>setSelectedCity(s.target.value),placeholder:"Please Select"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("span",{className:"flex items-center gap-1 mb-1",children:["Address :",e.jsx("span",{className:"text-[#EEA500] flex ",children:"*"})]}),e.jsx(a,{placeholder:"Please Input",vlue:Z,type:"text",name:"address",onChange:s=>T(s.target.value)})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("span",{className:"block mb-1",children:"Landmark (Option) : "}),e.jsx(a,{placeholder:"Please Input",value:I,type:"text",name:"address",onChange:s=>R(s.target.value)})]})]}),e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx("span",{className:"text-gray-700 font-medium",children:"Location type"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"location",value:"Home",checked:n==="Home",onChange:()=>x("Home"),className:"hidden"}),e.jsx("span",{className:`w-5 h-5 border-2 rounded-full flex items-center justify-center ${n==="Home"?"border-[#002882]":"border-gray-400"}`,children:n==="Home"&&e.jsx("span",{className:"w-3 h-3 bg-[#002882] rounded-full"})}),"Home"]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"location",value:"Office",checked:n==="Office",onChange:()=>x("Office"),className:"hidden"}),e.jsx("span",{className:`w-5 h-5 border-2 rounded-full flex items-center justify-center ${n==="Office"?"border-[#002882]":"border-gray-400"}`,children:n==="Office"&&e.jsx("span",{className:"w-3 h-3 bg-[#002882] rounded-full"})}),"Office"]})]})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:d,onChange:()=>_(!d),className:"hidden"}),e.jsx("span",{className:`w-5 h-5 border-2 rounded-[4px] flex items-center justify-center ${d?"bg-[#002882] border-[#002882]":"border-gray-400"}`,children:d&&e.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"text-gray-700",children:"Default Shipping Address"})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:c,onChange:()=>E(!c),className:"hidden"}),e.jsx("span",{className:`w-5 h-5 border-2 rounded-[4px] flex items-center justify-center ${c?"bg-[#002882] border-[#002882]":"border-gray-400"}`,children:c&&e.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"text-gray-700",children:"Default Billing Address"})]})]})]}),e.jsx("button",{className:"bg-[#002882] rounded-[5px] text-white w-full mt-4 py-2 ",children:"Save"})]})]})]})})})})})]})}export{ee as default};
