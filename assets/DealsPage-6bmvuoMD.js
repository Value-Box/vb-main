import{r as d,j as e,u as x}from"./index-BYFGq6as.js";import{B as u}from"./BundleDealCard-CE6ttuHv.js";import{D as m}from"./DetailProductCard-LwrNx9M6.js";import{P as a}from"./ProductCard-CvtFt4gl.js";const p={DetailProductCard:m,BundleDealCard:u},g=({products:l,CardType:o})=>{const c=p[o]||m,r=6,[s,t]=d.useState(0),n=d.useRef(null),f=()=>{t(i=>i<l.length-r?i+1:i)},h=()=>{t(i=>i>0?i-1:i)};return d.useEffect(()=>{n.current&&n.current.scrollTo({left:s*(n.current.offsetWidth/r),behavior:"smooth"})},[s]),e.jsxs("div",{className:"relative w-full max-w-[1920px] mx-auto overflow-hidden p-5",children:[e.jsx("button",{onClick:h,className:"absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700/80  text-white w-10 h-20 rounded-full flex items-center justify-center shadow-md hover:bg-gray-800 transition z-10",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M14.2894 5.70711C13.8989 5.31658 13.2657 5.31658 12.8752 5.70711L7.98778 10.5994C7.20736 11.3805 7.20766 12.6463 7.98837 13.4271L12.8788 18.3175C13.2693 18.708 13.9025 18.708 14.293 18.3175C14.6836 17.927 14.6836 17.2938 14.293 16.9032L10.1074 12.7176C9.71684 12.3271 9.71684 11.6939 10.1074 11.3034L14.2894 7.12132C14.68 6.7308 14.68 6.09763 14.2894 5.70711Z",fill:"#FCFCFC"})})}),e.jsx("div",{ref:n,className:"flex gap-2.5 overflow-x-auto w-full scrollbar-hide",children:e.jsx(c,{products:l})}),e.jsx("button",{onClick:f,className:"absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700/80  text-white w-10 h-20 rounded-full flex items-center justify-center shadow-md hover:bg-gray-800 transition z-10",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M9.71057 18.2929C10.1011 18.6834 10.7343 18.6834 11.1248 18.2929L16.0122 13.4006C16.7926 12.6195 16.7923 11.3537 16.0116 10.5729L11.1212 5.68254C10.7307 5.29202 10.0975 5.29202 9.70696 5.68254C9.31643 6.07307 9.31643 6.70623 9.70696 7.09676L13.8926 11.2824C14.2832 11.6729 14.2832 12.3061 13.8926 12.6966L9.71057 16.8787C9.32004 17.2692 9.32004 17.9023 9.71057 18.2929Z",fill:"#FCFCFC"})})})]})},b=[{id:1,name:"Men'S Other Running Shoes Korean Style",price:5e3,image:a},{id:2,name:"Men'S Other Running Shoes Korean Style",price:4500,image:a},{id:3,name:"Men'S Other Running Shoes Korean Style",price:4e3,image:a},{id:4,name:"Men'S Other Running Shoes Korean Style",price:6e3,image:a},{id:3,name:"Men'S Other Running Shoes Korean Style",price:4e3,image:a},{id:5,name:"Men'S Other Running Shoes Korean Style",price:6e3,image:a},{id:6,name:"Men'S Other Running Shoes Korean Style",price:4e3,image:a},{id:7,name:"Men'S Other Running Shoes Korean Style",price:6e3,image:a},{id:8,name:"Men'S Other Running Shoes Korean Style",price:5500,image:a}];function S(){var s;const o=((s=x().state)==null?void 0:s.name)||"Bundle Deals";console.log(o);const r=[{title:"Bundle Deals",products:[{id:1,name:"Wireless Mouse & Keyboard Combo",price:25,image:"https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:2,name:"Gaming Headset + Mousepad",price:40,image:"https://images.unsplash.com/photo-1620917669788-be691b2db72a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"},{id:3,name:"Laptop Stand + Cooling Pad",price:30,image:"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"}]},{title:"Flash Deals",products:[{id:4,name:"Bluetooth Speaker",price:15,image:"https://plus.unsplash.com/premium_photo-1677159499898-b061fb5bd2d7?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:5,name:"Smart LED Bulb",price:10,image:"https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&auto=format&fit=crop&q=60"},{id:6,name:"USB Fast Charger",price:12,image:"https://images.unsplash.com/photo-1616578273577-5d54546f4dec?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}]},{title:"One Dollar Shop",products:[{id:7,name:"Mini USB Light",price:1,image:"https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:8,name:"Cable Organizer",price:1,image:"https://images.unsplash.com/photo-1603145733257-30b94cee5c64?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:9,name:"Keychain Flashlight",price:1,image:"https://plus.unsplash.com/premium_photo-1679826780004-6323e2b1567a?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}]}].find(t=>t.title===o);return console.log(r),e.jsxs(e.Fragment,{children:[e.jsx(g,{products:b,CardType:"BundleDealCard"}),e.jsx("h1",{className:"text-2xl font-bold text-center my-6",children:o}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5",children:r?r.products.map(t=>e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105",children:[e.jsx("a",{href:"#",children:e.jsx("img",{className:"h-78 w-full object-cover rounded-t-lg",src:t.image,alt:t.name})}),e.jsxs("div",{className:"p-5 text-center",children:[e.jsx("h5",{className:"text-xl font-bold text-gray-900",children:t.name}),e.jsxs("p",{className:"text-gray-700 font-semibold mt-2",children:["$",t.price]}),e.jsx("button",{className:"mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300",children:"Buy Now"})]})]},t.id)):e.jsxs("p",{className:"text-center text-gray-600 mt-4",children:['No deals found for "',o,'".']})})]})}export{S as default};
