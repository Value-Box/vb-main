import React, { useEffect, useState } from 'react'
import MoreToLove from '../Components/MoreToLove';
import { h1 } from 'framer-motion/client';
import AccountSideBar from '../Components/AccountSideBar';

function Orders() {

    const [activeTab, setActiveTab] = useState("View All");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const tabs = ["View All", "To Pay", "To Ship", "Shipped", "Returns"];


  
  const orderData = [
    {
      date: "Nov 4, 2024",
      expressDelivery: {
        trackingNumber: "892639834167654",
        stores: [
          {
            name: "Zahir Clothing",
            products: [
              { id: 1, name: "Shoes", price: "PKR 1,500", img: "https://plus.unsplash.com/premium_photo-1682125177822-63c27a3830ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8fDA%3D" },
              { id: 2, name: "Bag", price: "PKR 1,500", img: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" },
              { id: 3, name: "Jacket", price: "PKR 1,500", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww" },
            ],
          },
        ],
      },
      standardDelivery: {
        stores: [
          {
            name: "Zahir Clothing",
            products: [
              { id: 4, name: "Shoes", price: "PKR 1,500", img: "https://plus.unsplash.com/premium_photo-1682125177822-63c27a3830ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8fDA%3D" },
              { id: 5, name: "Bag", price: "PKR 1,500", img: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" },
            ],
          },
        ],
      },
    },
  ];

 const [activeModal, setActiveModal] = useState(null);

const openModal = (modalName) => setActiveModal(modalName);
const closeModal = () => setActiveModal(null);

  return (
    <>
    {!isMobile?(<div className='relative bg-[#FCFCFC] flex p-4 xl:p-6 gap-4 xl:gap-5 items-start '>
      <AccountSideBar/>
        
        
        <div className='w-full'>
        <div className="bg-white p-4 border border-[#CCD1D2] rounded-lg flex flex-col">
      {/* Tabs Section */}
      <div className="flex space-x-6 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 relative transition ${
              activeTab === tab
                ? "text-[#333] font-medium after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[3px] after:bg-yellow-400"
                : "text-[#999]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search & Filters Section */}
      <div className="flex items-center justify-between mt-4 gap-2">
        {/* Left Side - Search */}
        <div className="flex items-center border border-[#CCC] rounded-md overflow-hidden">
            
          <select className="px-3 py-2 border-r border-[#CCC] text-[#666] focus:outline-none focus:ring-0">
            <option>Orders</option>
            
          </select>
          <input
            type="text"
            placeholder="Order ID, product or store name"
            className="px-4 py-2 outline-none flex-grow"
          />
          <button className="bg-blue-900 text-white px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16.0146 17.6099C14.2061 19.0137 11.9307 19.6755 9.65151 19.4606C7.3723 19.2458 5.26063 18.1705 3.74633 16.4536C2.23203 14.7366 1.42893 12.5072 1.5005 10.219C1.57207 7.93079 2.51294 5.75588 4.13158 4.13695C5.75051 2.51831 7.92542 1.57744 10.2136 1.50587C12.5018 1.4343 14.7313 2.2374 16.4482 3.7517C18.1651 5.266 19.2404 7.37768 19.4553 9.65688C19.6701 11.9361 19.0083 14.2115 17.6046 16.02L22.1646 20.58C22.3127 20.7175 22.4209 20.8924 22.4779 21.0862C22.535 21.2801 22.5386 21.4858 22.4886 21.6816C22.4385 21.8773 22.3366 22.056 22.1935 22.1987C22.0504 22.3414 21.8715 22.4429 21.6756 22.4924C21.48 22.5424 21.2746 22.5388 21.0809 22.4821C20.8872 22.4254 20.7123 22.3175 20.5746 22.1699L16.0146 17.6099ZM17.2446 10.5C17.2579 9.60536 17.0932 8.71704 16.7601 7.88668C16.427 7.05631 15.9321 6.30048 15.3042 5.66314C14.6763 5.02579 13.9279 4.51967 13.1026 4.17421C12.2773 3.82875 11.3915 3.65084 10.4968 3.65084C9.60214 3.65084 8.71638 3.82875 7.89107 4.17421C7.06576 4.51967 6.31739 5.02579 5.68948 5.66314C5.06157 6.30048 4.56666 7.05631 4.23354 7.88668C3.90042 8.71704 3.73574 9.60536 3.74908 10.5C3.7755 12.2721 4.49805 13.9628 5.76062 15.2067C7.0232 16.4506 8.72444 17.1478 10.4968 17.1478C12.2692 17.1478 13.9705 16.4506 15.233 15.2067C16.4956 13.9628 17.2182 12.2721 17.2446 10.5Z" fill="#E6EAF3"/>
</svg>
          </button>
        </div>

        {/* Right Side - Filters */}
        <div className="flex items-center space-x-4">
          
          <select className="px-3 py-2 border border-[#CCC] rounded-md text-[#999] focus:outline-none focus:ring-0 ">
            <option>All / Last Year</option>
          </select>
        </div>
      </div>


        </div>
          
        <div className=" mt-4 border border-[#CCC] rounded-lg ">
        <div className="bg-[#F2F2F2] border-b border-[#F2F2F2] p-3 2xl:p-4 rounded-lg">
        <div className="flex justify-between items-center pb-2 gap-2">
          <div className='xl:flex gap-2 xl:gap-4'>
            <div>
            <p className="text-sm 2xl:text-base text-[#999] flex items-center ">Order ID: <span className="text-[#1A1A1A] ml-1"> PO-153-18976393841670452</span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 4V16C8 16.5304 8.21071 17.0391 8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V7.242C20 6.97556 19.9467 6.71181 19.8433 6.46624C19.7399 6.22068 19.5885 5.99824 19.398 5.812L16.083 2.57C15.7094 2.20466 15.2076 2.00007 14.685 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4Z" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 18V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H8" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </p>
            <span className="text-[#1A1A1A] text-sm 2xl:text-base">PO-153-18976393841670452</span>
            </div>
            <p className='hidden xl:block bg-[#CCC] w-px self-stretch '></p>
            <p className="text-sm 2xl:text-base text-[#F04438] ">Processing</p>
          </div>
          <div className='xl:flex gap-2 2xl:gap-4'>
            <div>
            <p className="text-sm 2xl:text-base text-[#999]">Order Time: <span className="text-[#1A1A1A] ml-1">Nov 4, 2024 at 17:45:00</span></p>
            <p className="text-sm 2xl:text-base text-[#999]">Order Subtotal: <span className="text-[#1A1A1A] font-medium ml-1">PKR 41,200</span></p>
            </div>
            <p className='hidden xl:block bg-[#CCC] w-px self-stretch '></p>
            <button className="text-base 2xl:text-lg text-[#002882] flex items-center ">View Order Details 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M12.5 10L17.5 15L12.5 20" stroke="#002882" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
          </div>
        
        </div>
      </div>
      
      {orderData.map((order, index) => (
        <div key={index} className="bg-white rounded-lg  mb-6" >
          <div className="relative flex justify-between m-4">
            
            <button onClick={() => openModal("availableOffers")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M8.75 15C8.75 15.663 8.48661 16.2989 8.01777 16.7678C7.54893 17.2366 6.91304 17.5 6.25 17.5C5.58696 17.5 4.95107 17.2366 4.48223 16.7678C4.01339 16.2989 3.75 15.663 3.75 15C3.75 14.337 4.01339 13.7011 4.48223 13.2322C4.95107 12.7634 5.58696 12.5 6.25 12.5C6.91304 12.5 7.54893 12.7634 8.01777 13.2322C8.48661 13.7011 8.75 14.337 8.75 15ZM17.5 15C17.5 15.663 17.2366 16.2989 16.7678 16.7678C16.2989 17.2366 15.663 17.5 15 17.5C14.337 17.5 13.7011 17.2366 13.2322 16.7678C12.7634 16.2989 12.5 15.663 12.5 15C12.5 14.337 12.7634 13.7011 13.2322 13.2322C13.7011 12.7634 14.337 12.5 15 12.5C15.663 12.5 16.2989 12.7634 16.7678 13.2322C17.2366 13.7011 17.5 14.337 17.5 15ZM26.25 15C26.25 15.663 25.9866 16.2989 25.5178 16.7678C25.0489 17.2366 24.413 17.5 23.75 17.5C23.087 17.5 22.4511 17.2366 21.9822 16.7678C21.5134 16.2989 21.25 15.663 21.25 15C21.25 14.337 21.5134 13.7011 21.9822 13.2322C22.4511 12.7634 23.087 12.5 23.75 12.5C24.413 12.5 25.0489 12.7634 25.5178 13.2322C25.9866 13.7011 26.25 14.337 26.25 15Z" fill="#1A1A1A"/>
</svg>
            </button>
            {activeModal === "availableOffers" && (
             <div className="absolute bottom-8 flex left-0 bg-opacity-50 px-5 md:p-0 z-1050 "
             onClick={closeModal}
           >
                <div
                  className="bg-[#FCFCFC] border flex flex-col items-start gap-4 rounded-md shadow-lg relative"
                  onClick={(e) => e.stopPropagation()}
                >
      <button className='p-2'>Cancel Order </button>
      <svg xmlns="http://www.w3.org/2000/svg" className='absolute left-0 bottom-[-8px] w-3' viewBox="0 0 8 6" fill="none">
  <path d="M4 6L0.535898 6.52533e-07L7.4641 4.68497e-08L4 6Z" fill="#FCFCFC"/>
</svg>
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-3 ">
                <p className='text-[#F04438] flex text-sm 2xl:text-base'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-5 2xl:h-6 2xl:w-6' viewBox="0 0 24 24" fill="none">
  <path d="M12.75 7C12.75 6.80109 12.671 6.61032 12.5303 6.46967C12.3897 6.32902 12.1989 6.25 12 6.25C11.8011 6.25 11.6103 6.32902 11.4697 6.46967C11.329 6.61032 11.25 6.80109 11.25 7V12C11.2499 12.1272 11.2822 12.2522 11.3438 12.3635C11.4054 12.4747 11.4942 12.5685 11.602 12.636L14.602 14.511C14.7707 14.6166 14.9744 14.6508 15.1683 14.6061C15.2643 14.584 15.355 14.5433 15.4353 14.4861C15.5155 14.4289 15.5837 14.3565 15.636 14.273C15.6883 14.1895 15.7236 14.0965 15.7399 13.9993C15.7562 13.9022 15.7532 13.8027 15.7311 13.7067C15.709 13.6107 15.6683 13.52 15.6111 13.4397C15.5539 13.3595 15.4815 13.2913 15.398 13.239L12.75 11.584V7Z" fill="#F04438"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C9.67936 3.25 7.45376 4.17187 5.81282 5.81282C4.17187 7.45376 3.25 9.67936 3.25 12C3.25 14.3206 4.17187 16.5462 5.81282 18.1872C7.45376 19.8281 9.67936 20.75 12 20.75C14.3206 20.75 16.5462 19.8281 18.1872 18.1872C19.8281 16.5462 20.75 14.3206 20.75 12C20.75 9.67936 19.8281 7.45376 18.1872 5.81282C16.5462 4.17187 14.3206 3.25 12 3.25ZM4.75 12C4.75 11.0479 4.93753 10.1052 5.30187 9.22554C5.66622 8.34593 6.20025 7.5467 6.87348 6.87348C7.5467 6.20025 8.34593 5.66622 9.22554 5.30187C10.1052 4.93753 11.0479 4.75 12 4.75C12.9521 4.75 13.8948 4.93753 14.7745 5.30187C15.6541 5.66622 16.4533 6.20025 17.1265 6.87348C17.7997 7.5467 18.3338 8.34593 18.6981 9.22554C19.0625 10.1052 19.25 11.0479 19.25 12C19.25 13.9228 18.4862 15.7669 17.1265 17.1265C15.7669 18.4862 13.9228 19.25 12 19.25C10.0772 19.25 8.23311 18.4862 6.87348 17.1265C5.51384 15.7669 4.75 13.9228 4.75 12Z" fill="#F04438"/>
</svg> {order.date}</p>
            
            <button className="text-sm xl:text-base border border-[#002882] text-[#002882] px-2 xl:px-3 py-1 xl:py-2 rounded-[5px]">Edit Address</button>
            <button className="text-sm xl:text-base bg-[#002882] text-white px-2 xl:px-3 py-1 xl:py-2 rounded ">Pay Now</button>
          </div>
          </div>
          <div className="">
            <div className='p-2 bg-gradient-to-b from-[#FFE09E] to-[#FFFCF4] flex items-center justify-between'> 
            <h3 className="font-bold 2xl:text-lg flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 2xl:w-7' viewBox="0 0 38 30" fill="none">
  <g clip-path="url(#clip0_7418_34969)">
    <path d="M36.5625 20.625H35.625V14.291C35.625 13.5469 35.3262 12.832 34.7988 12.3047L28.9453 6.45117C28.418 5.92383 27.7031 5.625 26.959 5.625H24.375V2.8125C24.375 1.25977 23.1152 0 21.5625 0H6.5625C5.00977 0 3.75 1.25977 3.75 2.8125V5.625H0.46875C0.210938 5.625 0 5.83594 0 6.09375V7.03125C0 7.28906 0.210938 7.5 0.46875 7.5H16.4062C16.6641 7.5 16.875 7.71094 16.875 7.96875V8.90625C16.875 9.16406 16.6641 9.375 16.4062 9.375H2.34375C2.08594 9.375 1.875 9.58594 1.875 9.84375V10.7812C1.875 11.0391 2.08594 11.25 2.34375 11.25H14.5312C14.7891 11.25 15 11.4609 15 11.7188V12.6562C15 12.9141 14.7891 13.125 14.5312 13.125H0.46875C0.210938 13.125 0 13.3359 0 13.5938V14.5312C0 14.7891 0.210938 15 0.46875 15H12.6562C12.9141 15 13.125 15.2109 13.125 15.4688V16.4062C13.125 16.6641 12.9141 16.875 12.6562 16.875H3.75V24.375C3.75 27.4805 6.26953 30 9.375 30C12.4805 30 15 27.4805 15 24.375H22.5C22.5 27.4805 25.0195 30 28.125 30C31.2305 30 33.75 27.4805 33.75 24.375H36.5625C37.0781 24.375 37.5 23.9531 37.5 23.4375V21.5625C37.5 21.0469 37.0781 20.625 36.5625 20.625ZM9.375 27.1875C7.82227 27.1875 6.5625 25.9277 6.5625 24.375C6.5625 22.8223 7.82227 21.5625 9.375 21.5625C10.9277 21.5625 12.1875 22.8223 12.1875 24.375C12.1875 25.9277 10.9277 27.1875 9.375 27.1875ZM28.125 27.1875C26.5723 27.1875 25.3125 25.9277 25.3125 24.375C25.3125 22.8223 26.5723 21.5625 28.125 21.5625C29.6777 21.5625 30.9375 22.8223 30.9375 24.375C30.9375 25.9277 29.6777 27.1875 28.125 27.1875ZM32.8125 15H24.375V8.4375H26.959L32.8125 14.291V15Z" fill="#1A1A1A"/>
  </g>
  <defs>
    <clipPath id="clip0_7418_34969">
      <rect width="37.5" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg> Express Delivery
            </h3>
            {order.expressDelivery.trackingNumber && (
              <p className="text-sm">Tracking: {order.expressDelivery.trackingNumber}</p>
            )}
            </div>
            {order.expressDelivery.stores.map((store, idx) => (
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2 2xl:p-3 '>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="mt-2 2xl:w-32 text-center ">
                      <img src={product.img} alt={product.name} className="w-25 h-25 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
                      <p className="text-sm mt-1">{product.price}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" rounded-md mt-4">
            <h3 className="p-2 font-bold 2xl:text-lg flex items-center gap-1 bg-[#E6EAF3] ">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 2xl:w-7' viewBox="0 0 30 30" fill="none">
  <path d="M16.0109 28.3931C16.0536 28.3839 16.095 28.3695 16.1342 28.3503C16.1749 28.3299 16.2159 28.3072 16.2574 28.2822L25.8954 22.7922C26.47 22.4637 26.907 22.0883 27.2063 21.6662C27.5063 21.243 27.6561 20.5844 27.6558 19.6905V10.1012C27.6558 9.72367 27.6229 9.41171 27.5572 9.16528L16.0109 15.7637V28.3931ZM14.3245 28.3931V15.7637L2.77826 9.16528C2.71254 9.41171 2.67969 9.72367 2.67969 10.1012V19.6905C2.67969 20.5851 2.83147 21.2437 3.13504 21.6662C3.43862 22.0887 3.87362 22.464 4.44004 22.7922L14.0904 28.2822C14.1311 28.3069 14.17 28.3296 14.2072 28.3503C14.2438 28.3702 14.2837 28.3846 14.3245 28.3931ZM15.1736 14.2862L20.4295 11.3076L8.77237 4.64814L4.25469 7.22064C3.97612 7.37671 3.74629 7.53671 3.56522 7.70064L15.1736 14.2862ZM22.1406 10.3347L26.7691 7.70064C26.5611 7.51707 26.3341 7.35616 26.092 7.22064L17.4022 2.27224C16.639 1.82903 15.8961 1.60742 15.1736 1.60742C14.4433 1.60742 13.6967 1.82885 12.9338 2.27171L10.4347 3.6876L22.1406 10.3347Z" fill="#002882"/>
</svg> Standard Delivery</h3>
            {order.standardDelivery.stores.map((store, idx) => (
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2   2xl:p-3 '>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="text-center 2xl:w-32">
                      <img src={product.img} alt={product.name} className=" w-25 h-25 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
                      <p className="text-sm mt-1">{product.price}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className=" mt-4 border border-[#CCC] rounded-lg ">
        <div className="bg-[#F2F2F2] border-b border-[#F2F2F2] p-3 2xl:p-4 rounded-lg">
        <div className="flex justify-between items-center pb-2 gap-2">
          <div className='xl:flex gap-2 xl:gap-4'>
            <div>
            <p className="text-sm 2xl:text-base text-[#999] flex items-center ">Order ID: <span className="text-[#1A1A1A] ml-1"> PO-153-18976393841670452</span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 4V16C8 16.5304 8.21071 17.0391 8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V7.242C20 6.97556 19.9467 6.71181 19.8433 6.46624C19.7399 6.22068 19.5885 5.99824 19.398 5.812L16.083 2.57C15.7094 2.20466 15.2076 2.00007 14.685 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4Z" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 18V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H8" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </p>
            <span className="text-[#1A1A1A] text-sm 2xl:text-base">PO-153-18976393841670452</span>
            </div>
            <p className='hidden xl:block bg-[#CCC] w-px self-stretch '></p>
            <p className="text-sm 2xl:text-base text-[#F04438] ">Processing</p>
          </div>
          <div className='xl:flex gap-2 2xl:gap-4'>
            <div>
            <p className="text-sm 2xl:text-base text-[#999]">Order Time: <span className="text-[#1A1A1A] ml-1">Nov 4, 2024 at 17:45:00</span></p>
            <p className="text-sm 2xl:text-base text-[#999]">Order Subtotal: <span className="text-[#1A1A1A] font-medium ml-1">PKR 41,200</span></p>
            </div>
            <p className='hidden xl:block bg-[#CCC] w-px self-stretch '></p>
            <button className="text-base 2xl:text-lg text-[#002882] flex items-center ">View Order Details 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M12.5 10L17.5 15L12.5 20" stroke="#002882" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
          </div>
        
        </div>
      </div>
      
      {orderData.map((order, index) => (
        <div key={index} className="bg-white rounded-lg  mb-6">
          <div className="flex justify-between m-4">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M8.75 15C8.75 15.663 8.48661 16.2989 8.01777 16.7678C7.54893 17.2366 6.91304 17.5 6.25 17.5C5.58696 17.5 4.95107 17.2366 4.48223 16.7678C4.01339 16.2989 3.75 15.663 3.75 15C3.75 14.337 4.01339 13.7011 4.48223 13.2322C4.95107 12.7634 5.58696 12.5 6.25 12.5C6.91304 12.5 7.54893 12.7634 8.01777 13.2322C8.48661 13.7011 8.75 14.337 8.75 15ZM17.5 15C17.5 15.663 17.2366 16.2989 16.7678 16.7678C16.2989 17.2366 15.663 17.5 15 17.5C14.337 17.5 13.7011 17.2366 13.2322 16.7678C12.7634 16.2989 12.5 15.663 12.5 15C12.5 14.337 12.7634 13.7011 13.2322 13.2322C13.7011 12.7634 14.337 12.5 15 12.5C15.663 12.5 16.2989 12.7634 16.7678 13.2322C17.2366 13.7011 17.5 14.337 17.5 15ZM26.25 15C26.25 15.663 25.9866 16.2989 25.5178 16.7678C25.0489 17.2366 24.413 17.5 23.75 17.5C23.087 17.5 22.4511 17.2366 21.9822 16.7678C21.5134 16.2989 21.25 15.663 21.25 15C21.25 14.337 21.5134 13.7011 21.9822 13.2322C22.4511 12.7634 23.087 12.5 23.75 12.5C24.413 12.5 25.0489 12.7634 25.5178 13.2322C25.9866 13.7011 26.25 14.337 26.25 15Z" fill="#1A1A1A"/>
</svg>
            
            
<button className="text-sm xl:text-base bg-[#002882] text-white px-2 xl:px-3 py-1 xl:py-2 rounded flex items-center gap-1">
<svg xmlns="http://www.w3.org/2000/svg" className='w-4 xl:w-6' viewBox="0 0 24 24" fill="none">
  <path d="M19.0739 4.92988L17.6639 6.33988C18.4066 7.08338 18.9955 7.96592 19.397 8.93708C19.7985 9.90824 20.0047 10.949 20.0039 11.9999C20.0039 16.4199 16.4239 19.9999 12.0039 19.9999C7.58391 19.9999 4.00391 16.4199 4.00391 11.9999C4.00391 7.91988 7.05391 4.55988 11.0039 4.06988V6.08988C8.16391 6.56988 6.00391 9.02988 6.00391 11.9999C6.00391 15.3099 8.69391 17.9999 12.0039 17.9999C15.3139 17.9999 18.0039 15.3099 18.0039 11.9999C18.0039 10.3399 17.3339 8.83988 16.2439 7.75988L14.8339 9.16988C15.5539 9.89988 16.0039 10.8999 16.0039 11.9999C16.0039 14.2099 14.2139 15.9999 12.0039 15.9999C9.79391 15.9999 8.00391 14.2099 8.00391 11.9999C8.00391 10.1399 9.28391 8.58988 11.0039 8.13988V10.2799C10.4039 10.6299 10.0039 11.2599 10.0039 11.9999C10.0039 13.0999 10.9039 13.9999 12.0039 13.9999C13.1039 13.9999 14.0039 13.0999 14.0039 11.9999C14.0039 11.2599 13.6039 10.6199 13.0039 10.2799V1.99988H12.0039C6.48391 1.99988 2.00391 6.47988 2.00391 11.9999C2.00391 17.5199 6.48391 21.9999 12.0039 21.9999C17.5239 21.9999 22.0039 17.5199 22.0039 11.9999C22.0039 9.23988 20.8839 6.73988 19.0739 4.92988Z" fill="#E6EAF3"/>
</svg> Track Order</button>
          </div>
          <div className="">
            <div className='p-2 bg-gradient-to-b from-[#FFE09E] to-[#FFFCF4] flex items-center justify-between'> 
            <h3 className="font-bold 2xl:text-lg flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 2xl:w-7' viewBox="0 0 38 30" fill="none">
  <g clip-path="url(#clip0_7418_34969)">
    <path d="M36.5625 20.625H35.625V14.291C35.625 13.5469 35.3262 12.832 34.7988 12.3047L28.9453 6.45117C28.418 5.92383 27.7031 5.625 26.959 5.625H24.375V2.8125C24.375 1.25977 23.1152 0 21.5625 0H6.5625C5.00977 0 3.75 1.25977 3.75 2.8125V5.625H0.46875C0.210938 5.625 0 5.83594 0 6.09375V7.03125C0 7.28906 0.210938 7.5 0.46875 7.5H16.4062C16.6641 7.5 16.875 7.71094 16.875 7.96875V8.90625C16.875 9.16406 16.6641 9.375 16.4062 9.375H2.34375C2.08594 9.375 1.875 9.58594 1.875 9.84375V10.7812C1.875 11.0391 2.08594 11.25 2.34375 11.25H14.5312C14.7891 11.25 15 11.4609 15 11.7188V12.6562C15 12.9141 14.7891 13.125 14.5312 13.125H0.46875C0.210938 13.125 0 13.3359 0 13.5938V14.5312C0 14.7891 0.210938 15 0.46875 15H12.6562C12.9141 15 13.125 15.2109 13.125 15.4688V16.4062C13.125 16.6641 12.9141 16.875 12.6562 16.875H3.75V24.375C3.75 27.4805 6.26953 30 9.375 30C12.4805 30 15 27.4805 15 24.375H22.5C22.5 27.4805 25.0195 30 28.125 30C31.2305 30 33.75 27.4805 33.75 24.375H36.5625C37.0781 24.375 37.5 23.9531 37.5 23.4375V21.5625C37.5 21.0469 37.0781 20.625 36.5625 20.625ZM9.375 27.1875C7.82227 27.1875 6.5625 25.9277 6.5625 24.375C6.5625 22.8223 7.82227 21.5625 9.375 21.5625C10.9277 21.5625 12.1875 22.8223 12.1875 24.375C12.1875 25.9277 10.9277 27.1875 9.375 27.1875ZM28.125 27.1875C26.5723 27.1875 25.3125 25.9277 25.3125 24.375C25.3125 22.8223 26.5723 21.5625 28.125 21.5625C29.6777 21.5625 30.9375 22.8223 30.9375 24.375C30.9375 25.9277 29.6777 27.1875 28.125 27.1875ZM32.8125 15H24.375V8.4375H26.959L32.8125 14.291V15Z" fill="#1A1A1A"/>
  </g>
  <defs>
    <clipPath id="clip0_7418_34969">
      <rect width="37.5" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg> Express Delivery
            </h3>
            {order.expressDelivery.trackingNumber && (
              <p className="text-sm">Tracking: {order.expressDelivery.trackingNumber}</p>
            )}
            </div>
            {order.expressDelivery.stores.map((store, idx) => (
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2 2xl:p-3 '>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="mt-2 2xl:w-32 text-center ">
                      <img src={product.img} alt={product.name} className="w-25 h-25 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
                      <p className="text-sm mt-1">{product.price}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" rounded-md mt-4">
            <h3 className="p-2 font-bold 2xl:text-lg flex items-center gap-1 bg-[#E6EAF3] ">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 2xl:w-7' viewBox="0 0 30 30" fill="none">
  <path d="M16.0109 28.3931C16.0536 28.3839 16.095 28.3695 16.1342 28.3503C16.1749 28.3299 16.2159 28.3072 16.2574 28.2822L25.8954 22.7922C26.47 22.4637 26.907 22.0883 27.2063 21.6662C27.5063 21.243 27.6561 20.5844 27.6558 19.6905V10.1012C27.6558 9.72367 27.6229 9.41171 27.5572 9.16528L16.0109 15.7637V28.3931ZM14.3245 28.3931V15.7637L2.77826 9.16528C2.71254 9.41171 2.67969 9.72367 2.67969 10.1012V19.6905C2.67969 20.5851 2.83147 21.2437 3.13504 21.6662C3.43862 22.0887 3.87362 22.464 4.44004 22.7922L14.0904 28.2822C14.1311 28.3069 14.17 28.3296 14.2072 28.3503C14.2438 28.3702 14.2837 28.3846 14.3245 28.3931ZM15.1736 14.2862L20.4295 11.3076L8.77237 4.64814L4.25469 7.22064C3.97612 7.37671 3.74629 7.53671 3.56522 7.70064L15.1736 14.2862ZM22.1406 10.3347L26.7691 7.70064C26.5611 7.51707 26.3341 7.35616 26.092 7.22064L17.4022 2.27224C16.639 1.82903 15.8961 1.60742 15.1736 1.60742C14.4433 1.60742 13.6967 1.82885 12.9338 2.27171L10.4347 3.6876L22.1406 10.3347Z" fill="#002882"/>
</svg> Standard Delivery</h3>
            {order.standardDelivery.stores.map((store, idx) => (
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2   2xl:p-3 '>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="text-center 2xl:w-32">
                      <img src={product.img} alt={product.name} className=" w-25 h-25 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
                      <p className="text-sm mt-1">{product.price}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className=" mt-4 border border-[#CCC] rounded-lg ">
        <div className="bg-[#F2F2F2] border-b border-[#F2F2F2] p-3 2xl:p-4 rounded-lg">
        <div className="flex justify-between items-center pb-2 gap-2">
          <div className='xl:flex gap-2 xl:gap-4'>
            <div>
            <p className="text-sm 2xl:text-base text-[#999] flex items-center ">Order ID: <span className="text-[#1A1A1A] ml-1"> PO-153-18976393841670452</span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 4V16C8 16.5304 8.21071 17.0391 8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V7.242C20 6.97556 19.9467 6.71181 19.8433 6.46624C19.7399 6.22068 19.5885 5.99824 19.398 5.812L16.083 2.57C15.7094 2.20466 15.2076 2.00007 14.685 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4Z" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 18V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H8" stroke="#EEA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </p>
            <span className="text-[#1A1A1A] text-sm 2xl:text-base">PO-153-18976393841670452</span>
            </div>
            <p className='hidden xl:block bg-[#CCC] w-px self-stretch '></p>
            <p className="text-sm 2xl:text-base text-[#F04438] ">Processing</p>
          </div>
          <div className='xl:flex gap-2 2xl:gap-4'>
            <div>
            <p className="text-sm 2xl:text-base text-[#999]">Order Time: <span className="text-[#1A1A1A] ml-1">Nov 4, 2024 at 17:45:00</span></p>
            <p className="text-sm 2xl:text-base text-[#999]">Order Subtotal: <span className="text-[#1A1A1A] font-medium ml-1">PKR 41,200</span></p>
            </div>
            <p className='hidden xl:block bg-[#CCC] w-px self-stretch '></p>
            <button className="text-base 2xl:text-lg text-[#002882] flex items-center ">View Order Details 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M12.5 10L17.5 15L12.5 20" stroke="#002882" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
          </div>
        
        </div>
      </div>
      
      {orderData.map((order, index) => (
        <div key={index} className="bg-white rounded-lg  mb-6">
          <div className="flex justify-between m-4">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M8.75 15C8.75 15.663 8.48661 16.2989 8.01777 16.7678C7.54893 17.2366 6.91304 17.5 6.25 17.5C5.58696 17.5 4.95107 17.2366 4.48223 16.7678C4.01339 16.2989 3.75 15.663 3.75 15C3.75 14.337 4.01339 13.7011 4.48223 13.2322C4.95107 12.7634 5.58696 12.5 6.25 12.5C6.91304 12.5 7.54893 12.7634 8.01777 13.2322C8.48661 13.7011 8.75 14.337 8.75 15ZM17.5 15C17.5 15.663 17.2366 16.2989 16.7678 16.7678C16.2989 17.2366 15.663 17.5 15 17.5C14.337 17.5 13.7011 17.2366 13.2322 16.7678C12.7634 16.2989 12.5 15.663 12.5 15C12.5 14.337 12.7634 13.7011 13.2322 13.2322C13.7011 12.7634 14.337 12.5 15 12.5C15.663 12.5 16.2989 12.7634 16.7678 13.2322C17.2366 13.7011 17.5 14.337 17.5 15ZM26.25 15C26.25 15.663 25.9866 16.2989 25.5178 16.7678C25.0489 17.2366 24.413 17.5 23.75 17.5C23.087 17.5 22.4511 17.2366 21.9822 16.7678C21.5134 16.2989 21.25 15.663 21.25 15C21.25 14.337 21.5134 13.7011 21.9822 13.2322C22.4511 12.7634 23.087 12.5 23.75 12.5C24.413 12.5 25.0489 12.7634 25.5178 13.2322C25.9866 13.7011 26.25 14.337 26.25 15Z" fill="#1A1A1A"/>
</svg>
            
            
            <div className="flex items-center space-x-2 xl:space-x-3 ">
            <button className="text-sm xl:text-base border border-[#002882] text-[#002882] px-2 xl:px-3 py-1 xl:py-2 rounded-[5px] ">Buy this again</button>
            <button className="text-sm xl:text-base border border-[#002882] text-[#002882] px-2 xl:px-3 py-1 xl:py-2 rounded-[5px] ">Return / Refund</button>
            <button className="text-sm xl:text-base border border-[#002882] text-[#002882] px-2 xl:px-3 py-1 xl:py-2 rounded-[5px] ">Leave a Reivew</button>
            <button className="text-sm xl:text-base bg-[#002882] text-white px-2 xl:px-3 py-1 xl:py-2 rounded flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 xl:w-6' viewBox="0 0 24 24" fill="none">
  <path d="M19.0739 4.92988L17.6639 6.33988C18.4066 7.08338 18.9955 7.96592 19.397 8.93708C19.7985 9.90824 20.0047 10.949 20.0039 11.9999C20.0039 16.4199 16.4239 19.9999 12.0039 19.9999C7.58391 19.9999 4.00391 16.4199 4.00391 11.9999C4.00391 7.91988 7.05391 4.55988 11.0039 4.06988V6.08988C8.16391 6.56988 6.00391 9.02988 6.00391 11.9999C6.00391 15.3099 8.69391 17.9999 12.0039 17.9999C15.3139 17.9999 18.0039 15.3099 18.0039 11.9999C18.0039 10.3399 17.3339 8.83988 16.2439 7.75988L14.8339 9.16988C15.5539 9.89988 16.0039 10.8999 16.0039 11.9999C16.0039 14.2099 14.2139 15.9999 12.0039 15.9999C9.79391 15.9999 8.00391 14.2099 8.00391 11.9999C8.00391 10.1399 9.28391 8.58988 11.0039 8.13988V10.2799C10.4039 10.6299 10.0039 11.2599 10.0039 11.9999C10.0039 13.0999 10.9039 13.9999 12.0039 13.9999C13.1039 13.9999 14.0039 13.0999 14.0039 11.9999C14.0039 11.2599 13.6039 10.6199 13.0039 10.2799V1.99988H12.0039C6.48391 1.99988 2.00391 6.47988 2.00391 11.9999C2.00391 17.5199 6.48391 21.9999 12.0039 21.9999C17.5239 21.9999 22.0039 17.5199 22.0039 11.9999C22.0039 9.23988 20.8839 6.73988 19.0739 4.92988Z" fill="#E6EAF3"/>
</svg> Track Order</button>

          </div>
          </div>
          <div className="">
            <div className='p-2 bg-gradient-to-b from-[#FFE09E] to-[#FFFCF4] flex items-center justify-between'> 
            <h3 className="font-bold 2xl:text-lg flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 2xl:w-7' viewBox="0 0 38 30" fill="none">
  <g clip-path="url(#clip0_7418_34969)">
    <path d="M36.5625 20.625H35.625V14.291C35.625 13.5469 35.3262 12.832 34.7988 12.3047L28.9453 6.45117C28.418 5.92383 27.7031 5.625 26.959 5.625H24.375V2.8125C24.375 1.25977 23.1152 0 21.5625 0H6.5625C5.00977 0 3.75 1.25977 3.75 2.8125V5.625H0.46875C0.210938 5.625 0 5.83594 0 6.09375V7.03125C0 7.28906 0.210938 7.5 0.46875 7.5H16.4062C16.6641 7.5 16.875 7.71094 16.875 7.96875V8.90625C16.875 9.16406 16.6641 9.375 16.4062 9.375H2.34375C2.08594 9.375 1.875 9.58594 1.875 9.84375V10.7812C1.875 11.0391 2.08594 11.25 2.34375 11.25H14.5312C14.7891 11.25 15 11.4609 15 11.7188V12.6562C15 12.9141 14.7891 13.125 14.5312 13.125H0.46875C0.210938 13.125 0 13.3359 0 13.5938V14.5312C0 14.7891 0.210938 15 0.46875 15H12.6562C12.9141 15 13.125 15.2109 13.125 15.4688V16.4062C13.125 16.6641 12.9141 16.875 12.6562 16.875H3.75V24.375C3.75 27.4805 6.26953 30 9.375 30C12.4805 30 15 27.4805 15 24.375H22.5C22.5 27.4805 25.0195 30 28.125 30C31.2305 30 33.75 27.4805 33.75 24.375H36.5625C37.0781 24.375 37.5 23.9531 37.5 23.4375V21.5625C37.5 21.0469 37.0781 20.625 36.5625 20.625ZM9.375 27.1875C7.82227 27.1875 6.5625 25.9277 6.5625 24.375C6.5625 22.8223 7.82227 21.5625 9.375 21.5625C10.9277 21.5625 12.1875 22.8223 12.1875 24.375C12.1875 25.9277 10.9277 27.1875 9.375 27.1875ZM28.125 27.1875C26.5723 27.1875 25.3125 25.9277 25.3125 24.375C25.3125 22.8223 26.5723 21.5625 28.125 21.5625C29.6777 21.5625 30.9375 22.8223 30.9375 24.375C30.9375 25.9277 29.6777 27.1875 28.125 27.1875ZM32.8125 15H24.375V8.4375H26.959L32.8125 14.291V15Z" fill="#1A1A1A"/>
  </g>
  <defs>
    <clipPath id="clip0_7418_34969">
      <rect width="37.5" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg> Express Delivery
            </h3>
            {order.expressDelivery.trackingNumber && (
              <p className="text-sm">Tracking: {order.expressDelivery.trackingNumber}</p>
            )}
            </div>
            {order.expressDelivery.stores.map((store, idx) => (
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2 2xl:p-3 '>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="mt-2 2xl:w-32 text-center ">
                      <img src={product.img} alt={product.name} className="w-25 h-25 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
                      <p className="text-sm mt-1">{product.price}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" rounded-md mt-4">
            <h3 className="p-2 font-bold 2xl:text-lg flex items-center gap-1 bg-[#E6EAF3] ">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 2xl:w-7' viewBox="0 0 30 30" fill="none">
  <path d="M16.0109 28.3931C16.0536 28.3839 16.095 28.3695 16.1342 28.3503C16.1749 28.3299 16.2159 28.3072 16.2574 28.2822L25.8954 22.7922C26.47 22.4637 26.907 22.0883 27.2063 21.6662C27.5063 21.243 27.6561 20.5844 27.6558 19.6905V10.1012C27.6558 9.72367 27.6229 9.41171 27.5572 9.16528L16.0109 15.7637V28.3931ZM14.3245 28.3931V15.7637L2.77826 9.16528C2.71254 9.41171 2.67969 9.72367 2.67969 10.1012V19.6905C2.67969 20.5851 2.83147 21.2437 3.13504 21.6662C3.43862 22.0887 3.87362 22.464 4.44004 22.7922L14.0904 28.2822C14.1311 28.3069 14.17 28.3296 14.2072 28.3503C14.2438 28.3702 14.2837 28.3846 14.3245 28.3931ZM15.1736 14.2862L20.4295 11.3076L8.77237 4.64814L4.25469 7.22064C3.97612 7.37671 3.74629 7.53671 3.56522 7.70064L15.1736 14.2862ZM22.1406 10.3347L26.7691 7.70064C26.5611 7.51707 26.3341 7.35616 26.092 7.22064L17.4022 2.27224C16.639 1.82903 15.8961 1.60742 15.1736 1.60742C14.4433 1.60742 13.6967 1.82885 12.9338 2.27171L10.4347 3.6876L22.1406 10.3347Z" fill="#002882"/>
</svg> Standard Delivery</h3>
            {order.standardDelivery.stores.map((store, idx) => (
              <div key={idx} className="mt-2 2xl:py-2 px-2 2xl:px-4">
                <div className='border border-[#F2F2F2] rounded-[10px] p-2   2xl:p-3 '>
                <h4 className="font-medium flex gap-1 text-[#1A1A1A] "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 21.0002H5M5 21.0002H19M5 21.0002V9.32824M21 21.0002H19M19 21.0002V9.32824M5 9.32824C4.96261 9.30677 4.92592 9.28409 4.89 9.26024L4.35 8.90024C3.96826 8.64562 3.68568 8.26746 3.54967 7.82921C3.41366 7.39096 3.43249 6.91926 3.603 6.49324L4.497 4.25724C4.64549 3.88615 4.90176 3.56806 5.23276 3.34401C5.56376 3.11995 5.9543 3.00022 6.354 3.00024H17.646C18.0457 3.00022 18.4362 3.11995 18.7672 3.34401C19.0982 3.56806 19.3545 3.88615 19.503 4.25724L20.397 6.49324C20.5675 6.91926 20.5863 7.39096 20.4503 7.82921C20.3143 8.26746 20.0317 8.64562 19.65 8.90024L19.11 9.26024C19.0741 9.28409 19.0374 9.30677 19 9.32824M5 9.32824C5.32305 9.51483 5.69184 9.60733 6.0647 9.59532C6.43757 9.5833 6.79964 9.46724 7.11 9.26024L9 8.00024L10.89 9.26024C11.2187 9.47952 11.6049 9.59654 12 9.59654C12.3951 9.59654 12.7813 9.47952 13.11 9.26024L15 8.00024L16.89 9.26024C17.2004 9.46724 17.5624 9.5833 17.9353 9.59532C18.3082 9.60733 18.677 9.51483 19 9.32824" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.998 21V16C13.998 15.4696 13.7873 14.9609 13.4123 14.5858C13.0372 14.2107 12.5285 14 11.998 14C11.4676 14 10.9589 14.2107 10.5838 14.5858C10.2088 14.9609 9.99805 15.4696 9.99805 16V21" stroke="#1A1A1A" stroke-width="1.5"/>
</svg> {store.name}</h4>
<div className='bg-[#F2F2F2] h-px my-3 '></div>
                <div className="flex gap-2 overflow-x-auto">
                  {store.products.map((product) => (
                    <div key={product.id} className="text-center 2xl:w-32">
                      <img src={product.img} alt={product.name} className=" w-25 h-25 2xl:w-48 2xl:h-30 object-cover rounded-[10px]" />
                      <p className="text-sm mt-1">{product.price}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className='bg-[#FCFCFC] pt-4'>
        <div className="text-xl md:text-2xl 2xl:text-4xl font-bold flex gap-1 justify-center mb-4">
  <span className="text-[#F04438]">MORE</span> 
  <span className="text-black">TO LOVE</span>
</div>
<MoreToLove/>
        </div>
        </div>
        
    </div>):(
      <div className='overflow-hidden'>
        <div className="flex space-x-6 py-2 overflow-x-auto overflow-y-hidden scrollbar-hidden w-[400px]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 relative transition ${
            activeTab === tab
              ? "text-[#333] font-medium after:absolute after:left-[30%] after:bottom-[0px] after:w-[20px] after:h-[3px] after:bg-[#1A1A1A]"
              : "text-[#999]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

    <div className="flex justify-between items-start border-b border-gray-300 py-3 px-4 w-full">
      {/* Left Section (Order Details) */}
      <div>
        <h2 className="text-sm font-semibold text-gray-900">#PO-153-18926398341670452</h2>
        <p className="text-xs text-gray-500 mt-1">Order split into 2 packages:</p>
      </div>

      {/* Right Section (Date & Amount) */}
      <div className="text-right">
        <p className="text-xs text-gray-500">Nov 4, 2024 at 17:45:00</p>
        <p className="text-sm font-bold text-gray-900 mt-1">PKR 41,200</p>
      </div>
    </div>
      </div>
    )}
    </>
    
  )
}

export default Orders