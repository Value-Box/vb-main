import{r as n,j as e,N as p}from"./index-C8eNAvc_.js";import{F as j}from"./FormButton-CxA6_gqA.js";function N(){const[r,l]=n.useState(["","","",""]),[o,i]=n.useState(120),[m,d]=n.useState(!1),c=[n.useRef(),n.useRef(),n.useRef(),n.useRef()];n.useEffect(()=>{if(o>0){const t=setInterval(()=>i(s=>s-1),1e3);return()=>clearInterval(t)}else d(!0)},[o]);const f=(t,s)=>{if(/^\d?$/.test(s)){const a=[...r];a[t]=s,l(a),s&&t<3&&c[t+1].current.focus()}},u=(t,s)=>{s.key==="Backspace"&&!r[t]&&t>0&&c[t-1].current.focus()},x=()=>{const t=r.join("");alert(`Code entered: ${t}`)},h=()=>{l(["","","",""]),i(120),d(!1)};return e.jsx("div",{className:"flex flex-col items-center h-screen",children:e.jsxs("div",{className:"bg-white mt-10 px-5 md:px-0 w-full max-w-md",children:[e.jsx(p,{to:"/ResetPassword",children:e.jsxs("span",{className:"flex items-center gap-1 text-[#002882] cursor-pointer",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M19 11H7.83l4.88-4.88a1 1 0 0 0-1.42-1.42l-6.59 6.59a1 1 0 0 0 0 1.42l6.59 6.59a1 1 0 0 0 1.42-1.42L7.83 13H19a1 1 0 0 0 0-2z",fill:"#002882"})}),"Back"]})}),e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Verification"}),e.jsxs("p",{className:"text-gray-600 mb-4",children:["Enter the ",e.jsx("span",{className:"text-[#002882]",children:"4-digit verification code"})," we just sent you."]}),e.jsx("div",{className:"flex justify-center gap-3",children:r.map((t,s)=>e.jsx("input",{ref:c[s],type:"text",value:t,onChange:a=>f(s,a.target.value),onKeyDown:a=>u(s,a),className:`w-12 h-12 border border-gray-300 rounded-md text-center text-xl font-bold \r
                        outline-none focus:border-[#002882] transition duration-200`,maxLength:"1"},s))}),e.jsx("p",{className:"text-gray-600 text-sm text-center mt-4",children:m?e.jsx(j,{onClick:h,className:"text-[#002882] font-medium",children:"Resend Code"}):`Resend code in ${Math.floor(o/60)}:${String(o%60).padStart(2,"0")}`}),e.jsx("button",{onClick:x,className:"w-full bg-[#002882] text-white font-medium py-2 mt-4 rounded-md hover:bg-[#001a66] transition",children:"Verify Code"})]})})}export{N as default};
